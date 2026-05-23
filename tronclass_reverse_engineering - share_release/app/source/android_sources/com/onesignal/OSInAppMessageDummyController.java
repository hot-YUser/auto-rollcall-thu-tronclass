package com.onesignal;

import com.onesignal.language.LanguageContext;
import java.util.Collection;
import java.util.Map;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
class OSInAppMessageDummyController extends OSInAppMessageController {
    @Override // com.onesignal.OSInAppMessageController
    void addTriggers(Map<String, Object> map) {
    }

    @Override // com.onesignal.OSInAppMessageController
    void cleanCachedInAppMessages() {
    }

    @Override // com.onesignal.OSInAppMessageController
    void displayPreviewMessage(String str) {
    }

    @Override // com.onesignal.OSInAppMessageController
    OSInAppMessageInternal getCurrentDisplayedInAppMessage() {
        return null;
    }

    @Override // com.onesignal.OSInAppMessageController
    Object getTriggerValue(String str) {
        return null;
    }

    @Override // com.onesignal.OSInAppMessageController
    public void initRedisplayData() {
    }

    @Override // com.onesignal.OSInAppMessageController
    void initWithCachedInAppMessages() {
    }

    @Override // com.onesignal.OSInAppMessageController
    boolean isInAppMessageShowing() {
        return false;
    }

    @Override // com.onesignal.OSInAppMessageController, com.onesignal.OSDynamicTriggerController.OSDynamicTriggerControllerObserver
    public void messageTriggerConditionChanged() {
    }

    @Override // com.onesignal.OSInAppMessageController
    public void messageWasDismissed(OSInAppMessageInternal oSInAppMessageInternal) {
    }

    @Override // com.onesignal.OSInAppMessageController
    void onMessageActionOccurredOnMessage(OSInAppMessageInternal oSInAppMessageInternal, JSONObject jSONObject) {
    }

    @Override // com.onesignal.OSInAppMessageController
    void onMessageActionOccurredOnPreview(OSInAppMessageInternal oSInAppMessageInternal, JSONObject jSONObject) {
    }

    @Override // com.onesignal.OSInAppMessageController
    void receivedInAppMessageJson(JSONArray jSONArray) throws JSONException {
    }

    @Override // com.onesignal.OSInAppMessageController
    void removeTriggersForKeys(Collection<String> collection) {
    }

    @Override // com.onesignal.OSInAppMessageController
    void setInAppMessagingEnabled(boolean z) {
    }

    OSInAppMessageDummyController(OneSignalDbHelper oneSignalDbHelper, OSTaskController oSTaskController, OSLogger oSLogger, OSSharedPreferences oSSharedPreferences, LanguageContext languageContext) {
        super(oneSignalDbHelper, oSTaskController, oSLogger, oSSharedPreferences, languageContext);
    }
}

