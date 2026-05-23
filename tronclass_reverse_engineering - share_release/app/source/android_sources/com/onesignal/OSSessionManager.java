package com.onesignal;

import com.onesignal.OneSignal;
import com.onesignal.influence.data.OSChannelTracker;
import com.onesignal.influence.data.OSTrackerFactory;
import com.onesignal.influence.domain.OSInfluence;
import com.onesignal.influence.domain.OSInfluenceType;
import java.util.ArrayList;
import java.util.List;
import org.json.JSONArray;
import org.json.JSONObject;
public class OSSessionManager {
    private static final String OS_END_CURRENT_SESSION = "OS_END_CURRENT_SESSION";
    private OSLogger logger;
    private SessionListener sessionListener;
    protected OSTrackerFactory trackerFactory;

    public interface SessionListener {
        void onSessionEnding(List<OSInfluence> list);
    }

    public OSSessionManager(SessionListener sessionListener, OSTrackerFactory oSTrackerFactory, OSLogger oSLogger) {
        this.sessionListener = sessionListener;
        this.trackerFactory = oSTrackerFactory;
        this.logger = oSLogger;
    }

    void initSessionFromCache() {
        this.trackerFactory.initFromCache();
    }

    void addSessionIds(JSONObject jSONObject, List<OSInfluence> list) {
        this.logger.debug("OneSignal SessionManager addSessionData with influences: " + list.toString());
        this.trackerFactory.addSessionData(jSONObject, list);
        this.logger.debug("OneSignal SessionManager addSessionIds on jsonObject: " + jSONObject);
    }

    void restartSessionIfNeeded(OneSignal.AppEntryAction appEntryAction) {
        boolean session;
        List<OSChannelTracker> channelsToResetByEntryAction = this.trackerFactory.getChannelsToResetByEntryAction(appEntryAction);
        ArrayList arrayList = new ArrayList();
        this.logger.debug("OneSignal SessionManager restartSessionIfNeeded with entryAction: " + appEntryAction + "\n channelTrackers: " + channelsToResetByEntryAction.toString());
        for (OSChannelTracker oSChannelTracker : channelsToResetByEntryAction) {
            JSONArray lastReceivedIds = oSChannelTracker.getLastReceivedIds();
            this.logger.debug("OneSignal SessionManager restartSessionIfNeeded lastIds: " + lastReceivedIds);
            OSInfluence currentSessionInfluence = oSChannelTracker.getCurrentSessionInfluence();
            if (lastReceivedIds.length() > 0) {
                session = setSession(oSChannelTracker, OSInfluenceType.INDIRECT, null, lastReceivedIds);
            } else {
                session = setSession(oSChannelTracker, OSInfluenceType.UNATTRIBUTED, null, null);
            }
            if (session) {
                arrayList.add(currentSessionInfluence);
            }
        }
        sendSessionEndingWithInfluences(arrayList);
    }

    void onInAppMessageReceived(String str) {
        this.logger.debug("OneSignal SessionManager onInAppMessageReceived messageId: " + str);
        OSChannelTracker iAMChannelTracker = this.trackerFactory.getIAMChannelTracker();
        iAMChannelTracker.saveLastId(str);
        iAMChannelTracker.resetAndInitInfluence();
    }

    void onDirectInfluenceFromIAMClick(String str) {
        this.logger.debug("OneSignal SessionManager onDirectInfluenceFromIAMClick messageId: " + str);
        setSession(this.trackerFactory.getIAMChannelTracker(), OSInfluenceType.DIRECT, str, null);
    }

    void onDirectInfluenceFromIAMClickFinished() {
        this.logger.debug("OneSignal SessionManager onDirectInfluenceFromIAMClickFinished");
        this.trackerFactory.getIAMChannelTracker().resetAndInitInfluence();
    }

    void onNotificationReceived(String str) {
        this.logger.debug("OneSignal SessionManager onNotificationReceived notificationId: " + str);
        if (str == null || str.isEmpty()) {
            return;
        }
        this.trackerFactory.getNotificationChannelTracker().saveLastId(str);
    }

    void onDirectInfluenceFromNotificationOpen(OneSignal.AppEntryAction appEntryAction, String str) {
        this.logger.debug("OneSignal SessionManager onDirectInfluenceFromNotificationOpen notificationId: " + str);
        if (str == null || str.isEmpty()) {
            return;
        }
        attemptSessionUpgrade(appEntryAction, str);
    }

    List<OSInfluence> getInfluences() {
        return this.trackerFactory.getInfluences();
    }

    List<OSInfluence> getSessionInfluences() {
        return this.trackerFactory.getSessionInfluences();
    }

    void attemptSessionUpgrade(OneSignal.AppEntryAction appEntryAction) {
        attemptSessionUpgrade(appEntryAction, null);
    }

    private void attemptSessionUpgrade(OneSignal.AppEntryAction appEntryAction, String str) {
        boolean session;
        OSInfluence currentSessionInfluence;
        this.logger.debug("OneSignal SessionManager attemptSessionUpgrade with entryAction: " + appEntryAction);
        OSChannelTracker channelByEntryAction = this.trackerFactory.getChannelByEntryAction(appEntryAction);
        List<OSChannelTracker> channelsToResetByEntryAction = this.trackerFactory.getChannelsToResetByEntryAction(appEntryAction);
        ArrayList arrayList = new ArrayList();
        if (channelByEntryAction != null) {
            currentSessionInfluence = channelByEntryAction.getCurrentSessionInfluence();
            OSInfluenceType oSInfluenceType = OSInfluenceType.DIRECT;
            if (str == null) {
                str = channelByEntryAction.getDirectId();
            }
            session = setSession(channelByEntryAction, oSInfluenceType, str, null);
        } else {
            session = false;
            currentSessionInfluence = null;
        }
        if (session) {
            this.logger.debug("OneSignal SessionManager attemptSessionUpgrade channel updated, search for ending direct influences on channels: " + channelsToResetByEntryAction);
            arrayList.add(currentSessionInfluence);
            for (OSChannelTracker oSChannelTracker : channelsToResetByEntryAction) {
                if (oSChannelTracker.getInfluenceType().isDirect()) {
                    arrayList.add(oSChannelTracker.getCurrentSessionInfluence());
                    oSChannelTracker.resetAndInitInfluence();
                }
            }
        }
        this.logger.debug("OneSignal SessionManager attemptSessionUpgrade try UNATTRIBUTED to INDIRECT upgrade");
        for (OSChannelTracker oSChannelTracker2 : channelsToResetByEntryAction) {
            if (oSChannelTracker2.getInfluenceType().isUnattributed()) {
                JSONArray lastReceivedIds = oSChannelTracker2.getLastReceivedIds();
                if (lastReceivedIds.length() > 0 && !appEntryAction.isAppClose()) {
                    OSInfluence currentSessionInfluence2 = oSChannelTracker2.getCurrentSessionInfluence();
                    if (setSession(oSChannelTracker2, OSInfluenceType.INDIRECT, null, lastReceivedIds)) {
                        arrayList.add(currentSessionInfluence2);
                    }
                }
            }
        }
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "Trackers after update attempt: " + this.trackerFactory.getChannels().toString());
        sendSessionEndingWithInfluences(arrayList);
    }

    private boolean setSession(OSChannelTracker oSChannelTracker, OSInfluenceType oSInfluenceType, String str, JSONArray jSONArray) {
        if (!willChangeSession(oSChannelTracker, oSInfluenceType, str, jSONArray)) {
            return false;
        }
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "OSChannelTracker changed: " + oSChannelTracker.getIdTag() + "\nfrom:\ninfluenceType: " + oSChannelTracker.getInfluenceType() + ", directNotificationId: " + oSChannelTracker.getDirectId() + ", indirectNotificationIds: " + oSChannelTracker.getIndirectIds() + "\nto:\ninfluenceType: " + oSInfluenceType + ", directNotificationId: " + str + ", indirectNotificationIds: " + jSONArray);
        oSChannelTracker.setInfluenceType(oSInfluenceType);
        oSChannelTracker.setDirectId(str);
        oSChannelTracker.setIndirectIds(jSONArray);
        oSChannelTracker.cacheState();
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "Trackers changed to: " + this.trackerFactory.getChannels().toString());
        return true;
    }

    private boolean willChangeSession(OSChannelTracker oSChannelTracker, OSInfluenceType oSInfluenceType, String str, JSONArray jSONArray) {
        if (!oSInfluenceType.equals(oSChannelTracker.getInfluenceType())) {
            return true;
        }
        OSInfluenceType influenceType = oSChannelTracker.getInfluenceType();
        if (!influenceType.isDirect() || oSChannelTracker.getDirectId() == null || oSChannelTracker.getDirectId().equals(str)) {
            return influenceType.isIndirect() && oSChannelTracker.getIndirectIds() != null && oSChannelTracker.getIndirectIds().length() > 0 && !JSONUtils.compareJSONArrays(oSChannelTracker.getIndirectIds(), jSONArray);
        }
        return true;
    }

    private void sendSessionEndingWithInfluences(final List<OSInfluence> list) {
        this.logger.debug("OneSignal SessionManager sendSessionEndingWithInfluences with influences: " + list);
        if (list.size() > 0) {
            new Thread(new Runnable() { // from class: com.onesignal.OSSessionManager.1
                @Override // java.lang.Runnable
                public void run() {
                    Thread.currentThread().setPriority(10);
                    OSSessionManager.this.sessionListener.onSessionEnding(list);
                }
            }, OS_END_CURRENT_SESSION).start();
        }
    }
}

