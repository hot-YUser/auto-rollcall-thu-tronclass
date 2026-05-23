package com.onesignal;

import com.onesignal.OSTrigger;
import com.onesignal.OneSignal;
import java.util.ArrayList;
import java.util.Date;
import java.util.TimerTask;
class OSDynamicTriggerController {
    private static final long DEFAULT_LAST_IN_APP_TIME_AGO = 999999;
    private static final double REQUIRED_ACCURACY = 0.3d;
    private static Date sessionLaunchTime = new Date();
    private final OSDynamicTriggerControllerObserver observer;
    private final ArrayList<String> scheduledMessages = new ArrayList<>();

    interface OSDynamicTriggerControllerObserver {
        void messageDynamicTriggerCompleted(String str);

        void messageTriggerConditionChanged();
    }

    OSDynamicTriggerController(OSDynamicTriggerControllerObserver oSDynamicTriggerControllerObserver) {
        this.observer = oSDynamicTriggerControllerObserver;
    }

    /* high-level source view WARN: Removed duplicated region for block: B:28:0x0076 A[Catch: all -> 0x009d, TryCatch #0 {, blocks: (B:7:0x0009, B:9:0x000f, B:11:0x0011, B:26:0x005b, B:28:0x0076, B:29:0x007b, B:31:0x007d, B:33:0x0082, B:35:0x0084, B:37:0x008c, B:39:0x008e, B:40:0x009b, B:16:0x0025, B:18:0x002f, B:20:0x0031, B:23:0x003d, B:25:0x005a, B:24:0x004b), top: B:45:0x0009 }] */
    /* high-level source view WARN: Removed duplicated region for block: B:31:0x007d A[Catch: all -> 0x009d, TryCatch #0 {, blocks: (B:7:0x0009, B:9:0x000f, B:11:0x0011, B:26:0x005b, B:28:0x0076, B:29:0x007b, B:31:0x007d, B:33:0x0082, B:35:0x0084, B:37:0x008c, B:39:0x008e, B:40:0x009b, B:16:0x0025, B:18:0x002f, B:20:0x0031, B:23:0x003d, B:25:0x005a, B:24:0x004b), top: B:45:0x0009 }] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    boolean dynamicTriggerShouldFire(OSTrigger oSTrigger) {
        long time;
        long time2;
        long j;
        long jDoubleValue;
        if (oSTrigger.value == null) {
            return false;
        }
        synchronized (this.scheduledMessages) {
            if (!(oSTrigger.value instanceof Number)) {
                return false;
            }
            int i = AnonymousClass2.$SwitchMap$com$onesignal$OSTrigger$OSTriggerKind[oSTrigger.kind.ordinal()];
            if (i == 1) {
                time = new Date().getTime();
                time2 = sessionLaunchTime.getTime();
            } else {
                if (i != 2) {
                    j = 0;
                } else {
                    if (OneSignal.getInAppMessageController().isInAppMessageShowing()) {
                        return false;
                    }
                    Date date = OneSignal.getInAppMessageController().lastTimeInAppDismissed;
                    if (date == null) {
                        j = DEFAULT_LAST_IN_APP_TIME_AGO;
                    } else {
                        time = new Date().getTime();
                        time2 = date.getTime();
                    }
                }
                final String str = oSTrigger.triggerId;
                jDoubleValue = (long) (((Number) oSTrigger.value).doubleValue() * 1000.0d);
                if (!evaluateTimeIntervalWithOperator(jDoubleValue, j, oSTrigger.operatorType)) {
                    this.observer.messageDynamicTriggerCompleted(str);
                    return true;
                }
                long j2 = jDoubleValue - j;
                if (j2 <= 0) {
                    return false;
                }
                if (this.scheduledMessages.contains(str)) {
                    return false;
                }
                OSDynamicTriggerTimer.scheduleTrigger(new TimerTask() { // from class: com.onesignal.OSDynamicTriggerController.1
                    @Override // java.util.TimerTask, java.lang.Runnable
                    public void run() {
                        OSDynamicTriggerController.this.scheduledMessages.remove(str);
                        OSDynamicTriggerController.this.observer.messageTriggerConditionChanged();
                    }
                }, str, j2);
                this.scheduledMessages.add(str);
                return false;
            }
            j = time - time2;
            final String str2 = oSTrigger.triggerId;
            jDoubleValue = (long) (((Number) oSTrigger.value).doubleValue() * 1000.0d);
            if (!evaluateTimeIntervalWithOperator(jDoubleValue, j, oSTrigger.operatorType)) {
            }
        }
    }

    static void resetSessionLaunchTime() {
        sessionLaunchTime = new Date();
    }
    static /* synthetic */ class AnonymousClass2 {
        static final /* synthetic */ int[] $SwitchMap$com$onesignal$OSTrigger$OSTriggerKind;
        static final /* synthetic */ int[] $SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator;

        static {
            int[] iArr = new int[OSTrigger.OSTriggerOperator.values().length];
            $SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator = iArr;
            try {
                iArr[OSTrigger.OSTriggerOperator.LESS_THAN.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                $SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator[OSTrigger.OSTriggerOperator.LESS_THAN_OR_EQUAL_TO.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                $SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator[OSTrigger.OSTriggerOperator.GREATER_THAN.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                $SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator[OSTrigger.OSTriggerOperator.GREATER_THAN_OR_EQUAL_TO.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                $SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator[OSTrigger.OSTriggerOperator.EQUAL_TO.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                $SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator[OSTrigger.OSTriggerOperator.NOT_EQUAL_TO.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            int[] iArr2 = new int[OSTrigger.OSTriggerKind.values().length];
            $SwitchMap$com$onesignal$OSTrigger$OSTriggerKind = iArr2;
            try {
                iArr2[OSTrigger.OSTriggerKind.SESSION_TIME.ordinal()] = 1;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                $SwitchMap$com$onesignal$OSTrigger$OSTriggerKind[OSTrigger.OSTriggerKind.TIME_SINCE_LAST_IN_APP.ordinal()] = 2;
            } catch (NoSuchFieldError unused8) {
            }
        }
    }

    private static boolean evaluateTimeIntervalWithOperator(double d, double d2, OSTrigger.OSTriggerOperator oSTriggerOperator) {
        switch (AnonymousClass2.$SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator[oSTriggerOperator.ordinal()]) {
            case 1:
                return d2 < d;
            case 2:
                return d2 <= d || roughlyEqual(d, d2);
            case 3:
                return d2 >= d;
            case 4:
                return d2 >= d || roughlyEqual(d, d2);
            case 5:
                return roughlyEqual(d, d2);
            case 6:
                return !roughlyEqual(d, d2);
            default:
                OneSignal.onesignalLog(OneSignal.LOG_LEVEL.ERROR, "Attempted to apply an invalid operator on a time-based in-app-message trigger: " + oSTriggerOperator.toString());
                return false;
        }
    }

    private static boolean roughlyEqual(double d, double d2) {
        return Math.abs(d - d2) < REQUIRED_ACCURACY;
    }
}

