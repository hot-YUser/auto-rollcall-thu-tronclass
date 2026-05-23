package com.onesignal;

import com.onesignal.OneSignal;
import java.util.Timer;
import java.util.TimerTask;
class OSDynamicTriggerTimer {
    OSDynamicTriggerTimer() {
    }

    static void scheduleTrigger(TimerTask timerTask, String str, long j) {
        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "scheduleTrigger: " + str + " delay: " + j);
        new Timer("trigger_timer:" + str).schedule(timerTask, j);
    }
}

