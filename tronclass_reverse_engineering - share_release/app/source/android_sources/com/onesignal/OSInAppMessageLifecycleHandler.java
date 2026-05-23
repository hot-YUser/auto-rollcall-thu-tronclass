package com.onesignal;

import com.onesignal.OneSignal;
public abstract class OSInAppMessageLifecycleHandler {
    public void onWillDisplayInAppMessage(OSInAppMessage oSInAppMessage) {
        OneSignal.Log(OneSignal.LOG_LEVEL.VERBOSE, "OSInAppMessageLifecycleHandler: IAM Will Display: " + oSInAppMessage.getMessageId());
    }

    public void onDidDisplayInAppMessage(OSInAppMessage oSInAppMessage) {
        OneSignal.Log(OneSignal.LOG_LEVEL.VERBOSE, "OSInAppMessageLifecycleHandler: IAM Did Display: " + oSInAppMessage.getMessageId());
    }

    public void onWillDismissInAppMessage(OSInAppMessage oSInAppMessage) {
        OneSignal.Log(OneSignal.LOG_LEVEL.VERBOSE, "OSInAppMessageLifecycleHandler: IAM Will Dismiss: " + oSInAppMessage.getMessageId());
    }

    public void onDidDismissInAppMessage(OSInAppMessage oSInAppMessage) {
        OneSignal.Log(OneSignal.LOG_LEVEL.VERBOSE, "OSInAppMessageLifecycleHandler: IAM Did Dismiss: " + oSInAppMessage.getMessageId());
    }
}

