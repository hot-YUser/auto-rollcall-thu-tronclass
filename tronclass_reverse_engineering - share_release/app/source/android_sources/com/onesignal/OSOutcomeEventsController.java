package com.onesignal;

import com.onesignal.OneSignal;
import com.onesignal.OneSignalDbContract;
import com.onesignal.influence.domain.OSInfluence;
import com.onesignal.influence.domain.OSInfluenceChannel;
import com.onesignal.influence.domain.OSInfluenceType;
import com.onesignal.outcomes.data.OSOutcomeEventsFactory;
import com.onesignal.outcomes.domain.OSOutcomeEventParams;
import com.onesignal.outcomes.domain.OSOutcomeSource;
import com.onesignal.outcomes.domain.OSOutcomeSourceBody;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
class OSOutcomeEventsController {
    private static final String OS_DELETE_CACHED_UNIQUE_OUTCOMES_NOTIFICATIONS_THREAD = "OS_DELETE_CACHED_UNIQUE_OUTCOMES_NOTIFICATIONS_THREAD";
    private static final String OS_SAVE_OUTCOMES = "OS_SAVE_OUTCOMES";
    private static final String OS_SAVE_UNIQUE_OUTCOME_NOTIFICATIONS = "OS_SAVE_UNIQUE_OUTCOME_NOTIFICATIONS";
    private static final String OS_SEND_SAVED_OUTCOMES = "OS_SEND_SAVED_OUTCOMES";
    private final OSSessionManager osSessionManager;
    private final OSOutcomeEventsFactory outcomeEventsFactory;
    private Set<String> unattributedUniqueOutcomeEventsSentOnSession;

    public OSOutcomeEventsController(OSSessionManager oSSessionManager, OSOutcomeEventsFactory oSOutcomeEventsFactory) {
        this.osSessionManager = oSSessionManager;
        this.outcomeEventsFactory = oSOutcomeEventsFactory;
        initUniqueOutcomeEventsSentSets();
    }

    private void initUniqueOutcomeEventsSentSets() {
        this.unattributedUniqueOutcomeEventsSentOnSession = OSUtils.newConcurrentSet();
        Set<String> unattributedUniqueOutcomeEventsSent = this.outcomeEventsFactory.getRepository().getUnattributedUniqueOutcomeEventsSent();
        if (unattributedUniqueOutcomeEventsSent != null) {
            this.unattributedUniqueOutcomeEventsSentOnSession = unattributedUniqueOutcomeEventsSent;
        }
    }

    void cleanOutcomes() {
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "OneSignal cleanOutcomes for session");
        this.unattributedUniqueOutcomeEventsSentOnSession = OSUtils.newConcurrentSet();
        saveUnattributedUniqueOutcomeEvents();
    }

    void cleanCachedUniqueOutcomes() {
        new Thread(new Runnable() { // from class: com.onesignal.OSOutcomeEventsController.1
            @Override // java.lang.Runnable
            public void run() {
                Thread.currentThread().setPriority(10);
                OSOutcomeEventsController.this.outcomeEventsFactory.getRepository().cleanCachedUniqueOutcomeEventNotifications(OneSignalDbContract.NotificationTable.TABLE_NAME, "notification_id");
            }
        }, OS_DELETE_CACHED_UNIQUE_OUTCOMES_NOTIFICATIONS_THREAD).start();
    }

    void sendSavedOutcomes() {
        new Thread(new Runnable() { // from class: com.onesignal.OSOutcomeEventsController.2
            @Override // java.lang.Runnable
            public void run() {
                Thread.currentThread().setPriority(10);
                Iterator<OSOutcomeEventParams> it = OSOutcomeEventsController.this.outcomeEventsFactory.getRepository().getSavedOutcomeEvents().iterator();
                while (it.hasNext()) {
                    OSOutcomeEventsController.this.sendSavedOutcomeEvent(it.next());
                }
            }
        }, OS_SEND_SAVED_OUTCOMES).start();
    }
    public void sendSavedOutcomeEvent(final OSOutcomeEventParams oSOutcomeEventParams) {
        int deviceType = new OSUtils().getDeviceType();
        this.outcomeEventsFactory.getRepository().requestMeasureOutcomeEvent(OneSignal.appId, deviceType, oSOutcomeEventParams, new OneSignalApiResponseHandler() { // from class: com.onesignal.OSOutcomeEventsController.3
            @Override // com.onesignal.OneSignalApiResponseHandler
            public void onFailure(int i, String str, Throwable th) {
            }

            @Override // com.onesignal.OneSignalApiResponseHandler
            public void onSuccess(String str) {
                OSOutcomeEventsController.this.outcomeEventsFactory.getRepository().removeEvent(oSOutcomeEventParams);
            }
        });
    }

    void sendClickActionOutcomes(List<OSInAppMessageOutcome> list) {
        for (OSInAppMessageOutcome oSInAppMessageOutcome : list) {
            String name = oSInAppMessageOutcome.getName();
            if (oSInAppMessageOutcome.isUnique()) {
                sendUniqueOutcomeEvent(name, null);
            } else if (oSInAppMessageOutcome.getWeight() > 0.0f) {
                sendOutcomeEventWithValue(name, oSInAppMessageOutcome.getWeight(), null);
            } else {
                sendOutcomeEvent(name, null);
            }
        }
    }

    void sendUniqueOutcomeEvent(String str, OneSignal.OutcomeCallback outcomeCallback) {
        sendUniqueOutcomeEvent(str, this.osSessionManager.getInfluences(), outcomeCallback);
    }

    void sendOutcomeEvent(String str, OneSignal.OutcomeCallback outcomeCallback) {
        sendAndCreateOutcomeEvent(str, 0.0f, this.osSessionManager.getInfluences(), outcomeCallback);
    }

    void sendOutcomeEventWithValue(String str, float f, OneSignal.OutcomeCallback outcomeCallback) {
        sendAndCreateOutcomeEvent(str, f, this.osSessionManager.getInfluences(), outcomeCallback);
    }

    private void sendUniqueOutcomeEvent(String str, List<OSInfluence> list, OneSignal.OutcomeCallback outcomeCallback) {
        List<OSInfluence> listRemoveDisabledInfluences = removeDisabledInfluences(list);
        if (listRemoveDisabledInfluences.isEmpty()) {
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "Unique Outcome disabled for current session");
            return;
        }
        Iterator<OSInfluence> it = listRemoveDisabledInfluences.iterator();
        while (it.hasNext()) {
            if (it.next().getInfluenceType().isAttributed()) {
                List<OSInfluence> uniqueIds = getUniqueIds(str, listRemoveDisabledInfluences);
                if (uniqueIds == null) {
                    OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "Measure endpoint will not send because unique outcome already sent for: \nSessionInfluences: " + listRemoveDisabledInfluences.toString() + "\nOutcome name: " + str);
                    if (outcomeCallback != null) {
                        outcomeCallback.onSuccess(null);
                        return;
                    }
                    return;
                }
                sendAndCreateOutcomeEvent(str, 0.0f, uniqueIds, outcomeCallback);
                return;
            }
        }
        if (this.unattributedUniqueOutcomeEventsSentOnSession.contains(str)) {
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "Measure endpoint will not send because unique outcome already sent for: \nSession: " + OSInfluenceType.UNATTRIBUTED + "\nOutcome name: " + str);
            if (outcomeCallback != null) {
                outcomeCallback.onSuccess(null);
                return;
            }
            return;
        }
        this.unattributedUniqueOutcomeEventsSentOnSession.add(str);
        sendAndCreateOutcomeEvent(str, 0.0f, listRemoveDisabledInfluences, outcomeCallback);
    }

    private void sendAndCreateOutcomeEvent(final String str, float f, List<OSInfluence> list, final OneSignal.OutcomeCallback outcomeCallback) {
        final long currentTimeMillis = OneSignal.getTime().getCurrentTimeMillis() / 1000;
        int deviceType = new OSUtils().getDeviceType();
        String str2 = OneSignal.appId;
        boolean z = false;
        OSOutcomeSourceBody sourceChannelIds = null;
        OSOutcomeSourceBody sourceChannelIds2 = null;
        for (OSInfluence oSInfluence : list) {
            int i = AnonymousClass6.$SwitchMap$com$onesignal$influence$domain$OSInfluenceType[oSInfluence.getInfluenceType().ordinal()];
            if (i == 1) {
                if (sourceChannelIds == null) {
                    sourceChannelIds = new OSOutcomeSourceBody();
                }
                sourceChannelIds = setSourceChannelIds(oSInfluence, sourceChannelIds);
            } else if (i == 2) {
                if (sourceChannelIds2 == null) {
                    sourceChannelIds2 = new OSOutcomeSourceBody();
                }
                sourceChannelIds2 = setSourceChannelIds(oSInfluence, sourceChannelIds2);
            } else if (i == 3) {
                z = true;
            } else if (i == 4) {
                OneSignal.Log(OneSignal.LOG_LEVEL.VERBOSE, "Outcomes disabled for channel: " + oSInfluence.getInfluenceChannel());
                if (outcomeCallback != null) {
                    outcomeCallback.onSuccess(null);
                    return;
                }
                return;
            }
        }
        if (sourceChannelIds == null && sourceChannelIds2 == null && !z) {
            OneSignal.Log(OneSignal.LOG_LEVEL.VERBOSE, "Outcomes disabled for all channels");
            if (outcomeCallback != null) {
                outcomeCallback.onSuccess(null);
                return;
            }
            return;
        }
        final OSOutcomeEventParams oSOutcomeEventParams = new OSOutcomeEventParams(str, new OSOutcomeSource(sourceChannelIds, sourceChannelIds2), f, 0L);
        this.outcomeEventsFactory.getRepository().requestMeasureOutcomeEvent(str2, deviceType, oSOutcomeEventParams, new OneSignalApiResponseHandler() { // from class: com.onesignal.OSOutcomeEventsController.4
            @Override // com.onesignal.OneSignalApiResponseHandler
            public void onSuccess(String str3) {
                OSOutcomeEventsController.this.saveUniqueOutcome(oSOutcomeEventParams);
                OneSignal.OutcomeCallback outcomeCallback2 = outcomeCallback;
                if (outcomeCallback2 != null) {
                    outcomeCallback2.onSuccess(OSOutcomeEvent.fromOutcomeEventParamsV2toOutcomeEventV1(oSOutcomeEventParams));
                }
            }

            @Override // com.onesignal.OneSignalApiResponseHandler
            public void onFailure(int i2, String str3, Throwable th) {
                new Thread(new Runnable() { // from class: com.onesignal.OSOutcomeEventsController.4.1
                    @Override // java.lang.Runnable
                    public void run() {
                        Thread.currentThread().setPriority(10);
                        oSOutcomeEventParams.setTimestamp(currentTimeMillis);
                        OSOutcomeEventsController.this.outcomeEventsFactory.getRepository().saveOutcomeEvent(oSOutcomeEventParams);
                    }
                }, OSOutcomeEventsController.OS_SAVE_OUTCOMES).start();
                OneSignal.onesignalLog(OneSignal.LOG_LEVEL.WARN, "Sending outcome with name: " + str + " failed with status code: " + i2 + " and response: " + str3 + "\nOutcome event was cached and will be reattempted on app cold start");
                OneSignal.OutcomeCallback outcomeCallback2 = outcomeCallback;
                if (outcomeCallback2 != null) {
                    outcomeCallback2.onSuccess(null);
                }
            }
        });
    }
    static /* synthetic */ class AnonymousClass6 {
        static final /* synthetic */ int[] $SwitchMap$com$onesignal$influence$domain$OSInfluenceChannel;
        static final /* synthetic */ int[] $SwitchMap$com$onesignal$influence$domain$OSInfluenceType;

        static {
            int[] iArr = new int[OSInfluenceChannel.values().length];
            $SwitchMap$com$onesignal$influence$domain$OSInfluenceChannel = iArr;
            try {
                iArr[OSInfluenceChannel.IAM.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                $SwitchMap$com$onesignal$influence$domain$OSInfluenceChannel[OSInfluenceChannel.NOTIFICATION.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            int[] iArr2 = new int[OSInfluenceType.values().length];
            $SwitchMap$com$onesignal$influence$domain$OSInfluenceType = iArr2;
            try {
                iArr2[OSInfluenceType.DIRECT.ordinal()] = 1;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                $SwitchMap$com$onesignal$influence$domain$OSInfluenceType[OSInfluenceType.INDIRECT.ordinal()] = 2;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                $SwitchMap$com$onesignal$influence$domain$OSInfluenceType[OSInfluenceType.UNATTRIBUTED.ordinal()] = 3;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                $SwitchMap$com$onesignal$influence$domain$OSInfluenceType[OSInfluenceType.DISABLED.ordinal()] = 4;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    private OSOutcomeSourceBody setSourceChannelIds(OSInfluence oSInfluence, OSOutcomeSourceBody oSOutcomeSourceBody) {
        int i = AnonymousClass6.$SwitchMap$com$onesignal$influence$domain$OSInfluenceChannel[oSInfluence.getInfluenceChannel().ordinal()];
        if (i == 1) {
            oSOutcomeSourceBody.setInAppMessagesIds(oSInfluence.getIds());
        } else if (i == 2) {
            oSOutcomeSourceBody.setNotificationIds(oSInfluence.getIds());
        }
        return oSOutcomeSourceBody;
    }

    private List<OSInfluence> removeDisabledInfluences(List<OSInfluence> list) {
        ArrayList arrayList = new ArrayList(list);
        for (OSInfluence oSInfluence : list) {
            if (oSInfluence.getInfluenceType().isDisabled()) {
                OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "Outcomes disabled for channel: " + oSInfluence.getInfluenceChannel().getNameValue());
                arrayList.remove(oSInfluence);
            }
        }
        return arrayList;
    }
    public void saveUniqueOutcome(OSOutcomeEventParams oSOutcomeEventParams) {
        if (oSOutcomeEventParams.isUnattributed()) {
            saveUnattributedUniqueOutcomeEvents();
        } else {
            saveAttributedUniqueOutcomeNotifications(oSOutcomeEventParams);
        }
    }

    private void saveAttributedUniqueOutcomeNotifications(final OSOutcomeEventParams oSOutcomeEventParams) {
        new Thread(new Runnable() { // from class: com.onesignal.OSOutcomeEventsController.5
            @Override // java.lang.Runnable
            public void run() {
                Thread.currentThread().setPriority(10);
                OSOutcomeEventsController.this.outcomeEventsFactory.getRepository().saveUniqueOutcomeNotifications(oSOutcomeEventParams);
            }
        }, OS_SAVE_UNIQUE_OUTCOME_NOTIFICATIONS).start();
    }

    private void saveUnattributedUniqueOutcomeEvents() {
        this.outcomeEventsFactory.getRepository().saveUnattributedUniqueOutcomeEventsSent(this.unattributedUniqueOutcomeEventsSentOnSession);
    }

    private List<OSInfluence> getUniqueIds(String str, List<OSInfluence> list) {
        List<OSInfluence> notCachedUniqueOutcome = this.outcomeEventsFactory.getRepository().getNotCachedUniqueOutcome(str, list);
        if (notCachedUniqueOutcome.size() > 0) {
            return notCachedUniqueOutcome;
        }
        return null;
    }
}

