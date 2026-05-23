package com.onesignal.cordova;

import com.onesignal.OneSignal;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class OneSignalEmailController {
    public static boolean setEmail(final CallbackContext callbackContext, JSONArray jSONArray) {
        try {
            OneSignal.setEmail(jSONArray.getString(0), jSONArray.getString(1), new OneSignal.EmailUpdateHandler() { // from class: com.onesignal.cordova.OneSignalEmailController.1
                @Override // com.onesignal.OneSignal.EmailUpdateHandler
                public void onSuccess() {
                    CallbackHelper.callbackSuccess(callbackContext, null);
                }

                @Override // com.onesignal.OneSignal.EmailUpdateHandler
                public void onFailure(OneSignal.EmailUpdateError emailUpdateError) {
                    try {
                        CallbackHelper.callbackError(callbackContext, new JSONObject("{'error' : '" + emailUpdateError.getMessage() + "'}"));
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
            });
            return true;
        } catch (Throwable th) {
            th.printStackTrace();
            return false;
        }
    }

    public static boolean setUnauthenticatedEmail(final CallbackContext callbackContext, JSONArray jSONArray) {
        try {
            OneSignal.setEmail(jSONArray.getString(0), null, new OneSignal.EmailUpdateHandler() { // from class: com.onesignal.cordova.OneSignalEmailController.2
                @Override // com.onesignal.OneSignal.EmailUpdateHandler
                public void onSuccess() {
                    CallbackHelper.callbackSuccess(callbackContext, null);
                }

                @Override // com.onesignal.OneSignal.EmailUpdateHandler
                public void onFailure(OneSignal.EmailUpdateError emailUpdateError) {
                    try {
                        CallbackHelper.callbackError(callbackContext, new JSONObject("{'error' : '" + emailUpdateError.getMessage() + "'}"));
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }
            });
            return true;
        } catch (Throwable th) {
            th.printStackTrace();
            return false;
        }
    }

    public static boolean logoutEmail(final CallbackContext callbackContext) {
        OneSignal.logoutEmail(new OneSignal.EmailUpdateHandler() { // from class: com.onesignal.cordova.OneSignalEmailController.3
            @Override // com.onesignal.OneSignal.EmailUpdateHandler
            public void onSuccess() {
                CallbackHelper.callbackSuccess(callbackContext, null);
            }

            @Override // com.onesignal.OneSignal.EmailUpdateHandler
            public void onFailure(OneSignal.EmailUpdateError emailUpdateError) {
                try {
                    CallbackHelper.callbackError(callbackContext, new JSONObject("{'error' : '" + emailUpdateError.getMessage() + "'}"));
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        });
        return true;
    }
}

