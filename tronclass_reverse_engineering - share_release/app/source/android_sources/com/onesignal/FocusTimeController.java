package com.onesignal;

import com.onesignal.OneSignal;
import com.onesignal.OneSignalRestClient;
import com.onesignal.influence.domain.OSInfluence;
import com.onesignal.outcomes.OSOutcomeConstants;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;
import org.apache.cordova.globalization.Globalization;
import org.json.JSONException;
import org.json.JSONObject;
class FocusTimeController {
    private OSLogger logger;
    private OSFocusTimeProcessorFactory processorFactory;
    private Long timeFocusedAtMs;
    private Object timeFocusedAtMsLock = new Object();

    private enum FocusEventType {
        BACKGROUND,
        END_SESSION
    }

    FocusTimeController(OSFocusTimeProcessorFactory oSFocusTimeProcessorFactory, OSLogger oSLogger) {
        this.processorFactory = oSFocusTimeProcessorFactory;
        this.logger = oSLogger;
    }

    void appForegrounded() {
        synchronized (this.timeFocusedAtMsLock) {
            this.timeFocusedAtMs = Long.valueOf(OneSignal.getTime().getElapsedRealtime());
            this.logger.debug("Application foregrounded focus time: " + this.timeFocusedAtMs);
        }
    }

    void appStopped() {
        Long timeFocusedElapsed = getTimeFocusedElapsed();
        synchronized (this.timeFocusedAtMsLock) {
            this.logger.debug("Application stopped focus time: " + this.timeFocusedAtMs + " timeElapsed: " + timeFocusedElapsed);
        }
        if (timeFocusedElapsed == null) {
            return;
        }
        List<OSInfluence> sessionInfluences = OneSignal.getSessionManager().getSessionInfluences();
        this.processorFactory.getTimeProcessorWithInfluences(sessionInfluences).saveUnsentActiveData(timeFocusedElapsed.longValue(), sessionInfluences);
    }

    void appBackgrounded() {
        synchronized (this.timeFocusedAtMsLock) {
            this.logger.debug("Application backgrounded focus time: " + this.timeFocusedAtMs);
            this.processorFactory.getTimeProcessorSaved().sendUnsentTimeNow();
            this.timeFocusedAtMs = null;
        }
    }

    void doBlockingBackgroundSyncOfUnsentTime() {
        if (OneSignal.isInForeground()) {
            return;
        }
        this.processorFactory.getTimeProcessorSaved().syncUnsentTimeFromSyncJob();
    }

    void onSessionEnded(List<OSInfluence> list) {
        FocusEventType focusEventType = FocusEventType.END_SESSION;
        if (giveProcessorsValidFocusTime(list, focusEventType)) {
            return;
        }
        this.processorFactory.getTimeProcessorWithInfluences(list).sendUnsentTimeNow(focusEventType);
    }

    private boolean giveProcessorsValidFocusTime(List<OSInfluence> list, FocusEventType focusEventType) {
        Long timeFocusedElapsed = getTimeFocusedElapsed();
        if (timeFocusedElapsed == null) {
            return false;
        }
        this.processorFactory.getTimeProcessorWithInfluences(list).addTime(timeFocusedElapsed.longValue(), list, focusEventType);
        return true;
    }

    private Long getTimeFocusedElapsed() {
        synchronized (this.timeFocusedAtMsLock) {
            if (this.timeFocusedAtMs == null) {
                return null;
            }
            long elapsedRealtime = (long) (((OneSignal.getTime().getElapsedRealtime() - this.timeFocusedAtMs.longValue()) / 1000.0d) + 0.5d);
            if (elapsedRealtime >= 1 && elapsedRealtime <= 86400) {
                return Long.valueOf(elapsedRealtime);
            }
            return null;
        }
    }

    static class FocusTimeProcessorUnattributed extends FocusTimeProcessorBase {
        @Override // com.onesignal.FocusTimeController.FocusTimeProcessorBase
        protected void saveInfluences(List<OSInfluence> list) {
        }

        FocusTimeProcessorUnattributed() {
            this.MIN_ON_FOCUS_TIME_SEC = 60L;
            this.PREF_KEY_FOR_UNSENT_TIME = OneSignalPrefs.PREFS_GT_UNSENT_ACTIVE_TIME;
        }

        @Override // com.onesignal.FocusTimeController.FocusTimeProcessorBase
        protected void sendTime(FocusEventType focusEventType) {
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, getClass().getSimpleName() + " sendTime with: " + focusEventType);
            if (focusEventType.equals(FocusEventType.END_SESSION)) {
                return;
            }
            syncUnsentTimeOnBackgroundEvent();
        }

        @Override // com.onesignal.FocusTimeController.FocusTimeProcessorBase
        protected List<OSInfluence> getInfluences() {
            return new ArrayList();
        }
    }

    static class FocusTimeProcessorAttributed extends FocusTimeProcessorBase {
        FocusTimeProcessorAttributed() {
            this.MIN_ON_FOCUS_TIME_SEC = 1L;
            this.PREF_KEY_FOR_UNSENT_TIME = OneSignalPrefs.PREFS_OS_UNSENT_ATTRIBUTED_ACTIVE_TIME;
        }

        @Override // com.onesignal.FocusTimeController.FocusTimeProcessorBase
        protected List<OSInfluence> getInfluences() {
            ArrayList arrayList = new ArrayList();
            Iterator<String> it = OneSignalPrefs.getStringSet(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_ATTRIBUTED_INFLUENCES, new HashSet()).iterator();
            while (it.hasNext()) {
                try {
                    arrayList.add(new OSInfluence(it.next()));
                } catch (JSONException e) {
                    OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, getClass().getSimpleName() + ": error generation OSInfluence from json object: " + e);
                }
            }
            return arrayList;
        }

        @Override // com.onesignal.FocusTimeController.FocusTimeProcessorBase
        protected void saveInfluences(List<OSInfluence> list) {
            HashSet hashSet = new HashSet();
            Iterator<OSInfluence> it = list.iterator();
            while (it.hasNext()) {
                try {
                    hashSet.add(it.next().toJSONString());
                } catch (JSONException e) {
                    OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, getClass().getSimpleName() + ": error generation json object OSInfluence: " + e);
                }
            }
            OneSignalPrefs.saveStringSet(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_ATTRIBUTED_INFLUENCES, hashSet);
        }

        @Override // com.onesignal.FocusTimeController.FocusTimeProcessorBase
        protected void additionalFieldsToAddToOnFocusPayload(JSONObject jSONObject) {
            OneSignal.getSessionManager().addSessionIds(jSONObject, getInfluences());
        }

        @Override // com.onesignal.FocusTimeController.FocusTimeProcessorBase
        protected void sendTime(FocusEventType focusEventType) {
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, getClass().getSimpleName() + " sendTime with: " + focusEventType);
            if (focusEventType.equals(FocusEventType.END_SESSION)) {
                syncOnFocusTime();
            } else {
                OSSyncService.getInstance().scheduleSyncTask(OneSignal.appContext);
            }
        }
    }

    static abstract class FocusTimeProcessorBase {
        protected long MIN_ON_FOCUS_TIME_SEC;
        protected String PREF_KEY_FOR_UNSENT_TIME;
        private Long unsentActiveTime = null;
        private final AtomicBoolean runningOnFocusTime = new AtomicBoolean();

        protected void additionalFieldsToAddToOnFocusPayload(JSONObject jSONObject) {
        }

        protected abstract List<OSInfluence> getInfluences();

        protected abstract void saveInfluences(List<OSInfluence> list);

        protected abstract void sendTime(FocusEventType focusEventType);

        FocusTimeProcessorBase() {
        }
        public void saveUnsentActiveData(long j, List<OSInfluence> list) {
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, getClass().getSimpleName() + ":saveUnsentActiveData with lastFocusTimeInfluences: " + list.toString());
            long unsentActiveTime = getUnsentActiveTime() + j;
            saveInfluences(list);
            saveUnsentActiveTime(unsentActiveTime);
        }
        public void saveUnsentActiveTime(long j) {
            this.unsentActiveTime = Long.valueOf(j);
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, getClass().getSimpleName() + ":saveUnsentActiveTime: " + this.unsentActiveTime);
            OneSignalPrefs.saveLong(OneSignalPrefs.PREFS_ONESIGNAL, this.PREF_KEY_FOR_UNSENT_TIME, j);
        }

        private long getUnsentActiveTime() {
            if (this.unsentActiveTime == null) {
                this.unsentActiveTime = Long.valueOf(OneSignalPrefs.getLong(OneSignalPrefs.PREFS_ONESIGNAL, this.PREF_KEY_FOR_UNSENT_TIME, 0L));
            }
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, getClass().getSimpleName() + ":getUnsentActiveTime: " + this.unsentActiveTime);
            return this.unsentActiveTime.longValue();
        }
        public void addTime(long j, List<OSInfluence> list, FocusEventType focusEventType) {
            saveUnsentActiveData(j, list);
            sendUnsentTimeNow(focusEventType);
        }
        public void sendUnsentTimeNow() {
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, getClass().getSimpleName() + ":sendUnsentTimeNow with time: " + getUnsentActiveTime() + " and influences: " + getInfluences().toString());
            sendUnsentTimeNow(FocusEventType.BACKGROUND);
        }
        public void sendUnsentTimeNow(FocusEventType focusEventType) {
            if (!OneSignal.hasUserId()) {
                OneSignal.Log(OneSignal.LOG_LEVEL.WARN, getClass().getSimpleName() + ":sendUnsentTimeNow not possible due to user id null");
            } else {
                sendTime(focusEventType);
            }
        }

        private boolean hasMinSyncTime() {
            return getUnsentActiveTime() >= this.MIN_ON_FOCUS_TIME_SEC;
        }

        protected void syncUnsentTimeOnBackgroundEvent() {
            if (hasMinSyncTime()) {
                OSSyncService.getInstance().scheduleSyncTask(OneSignal.appContext);
            }
        }
        public void syncUnsentTimeFromSyncJob() {
            if (hasMinSyncTime()) {
                syncOnFocusTime();
            }
        }

        protected void syncOnFocusTime() {
            if (this.runningOnFocusTime.get()) {
                return;
            }
            synchronized (this.runningOnFocusTime) {
                this.runningOnFocusTime.set(true);
                if (hasMinSyncTime()) {
                    sendOnFocus(getUnsentActiveTime());
                }
                this.runningOnFocusTime.set(false);
            }
        }

        private void sendOnFocusToPlayer(String str, JSONObject jSONObject) {
            OneSignalRestClient.postSync("players/" + str + "/on_focus", jSONObject, new OneSignalRestClient.ResponseHandler() { // from class: com.onesignal.FocusTimeController.FocusTimeProcessorBase.1
                @Override // com.onesignal.OneSignalRestClient.ResponseHandler
                void onFailure(int i, String str2, Throwable th) {
                    OneSignal.logHttpError("sending on_focus Failed", i, th, str2);
                }

                @Override // com.onesignal.OneSignalRestClient.ResponseHandler
                void onSuccess(String str2) {
                    FocusTimeProcessorBase.this.saveUnsentActiveTime(0L);
                }
            });
        }

        private JSONObject generateOnFocusPayload(long j) throws JSONException {
            JSONObject jSONObjectPut = new JSONObject().put(OSOutcomeConstants.APP_ID, OneSignal.getSavedAppId()).put(Globalization.TYPE, 1).put("state", "ping").put("active_time", j).put(OSOutcomeConstants.DEVICE_TYPE, new OSUtils().getDeviceType());
            OneSignal.addNetType(jSONObjectPut);
            return jSONObjectPut;
        }

        private void sendOnFocus(long j) {
            try {
                OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, getClass().getSimpleName() + ":sendOnFocus with totalTimeActive: " + j);
                JSONObject jSONObjectGenerateOnFocusPayload = generateOnFocusPayload(j);
                additionalFieldsToAddToOnFocusPayload(jSONObjectGenerateOnFocusPayload);
                sendOnFocusToPlayer(OneSignal.getUserId(), jSONObjectGenerateOnFocusPayload);
                if (OneSignal.hasEmailId()) {
                    sendOnFocusToPlayer(OneSignal.getEmailId(), generateOnFocusPayload(j));
                }
                if (OneSignal.hasSMSlId()) {
                    sendOnFocusToPlayer(OneSignal.getSMSId(), generateOnFocusPayload(j));
                }
                saveInfluences(new ArrayList());
            } catch (JSONException e) {
                OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Generating on_focus:JSON Failed.", e);
            }
        }
    }
}

