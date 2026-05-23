package com.onesignal.cordova;

import com.onesignal.OneSignal;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class OneSignalSMSController {
    public static boolean setSMSNumber(final CallbackContext callbackContext, JSONArray jSONArray) {
        try {
            OneSignal.setSMSNumber(jSONArray.getString(0), jSONArray.getString(1), new OneSignal.OSSMSUpdateHandler() { // from class: com.onesignal.cordova.OneSignalSMSController.1
                @Override // com.onesignal.OneSignal.OSSMSUpdateHandler
                public void onSuccess(JSONObject jSONObject) {
                    CallbackHelper.callbackSuccess(callbackContext, jSONObject);
                }

                @Override // com.onesignal.OneSignal.OSSMSUpdateHandler
                public void onFailure(OneSignal.OSSMSUpdateError oSSMSUpdateError) {
                    try {
                        CallbackHelper.callbackError(callbackContext, new JSONObject("{'error' : '" + oSSMSUpdateError.getMessage() + "'}"));
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
            OneSignal.setSMSNumber(jSONArray.getString(0), null, new OneSignal.OSSMSUpdateHandler() { // from class: com.onesignal.cordova.OneSignalSMSController.2
                @Override // com.onesignal.OneSignal.OSSMSUpdateHandler
                public void onSuccess(JSONObject jSONObject) {
                    CallbackHelper.callbackSuccess(callbackContext, jSONObject);
                }

                @Override // com.onesignal.OneSignal.OSSMSUpdateHandler
                public void onFailure(OneSignal.OSSMSUpdateError oSSMSUpdateError) {
                    try {
                        CallbackHelper.callbackError(callbackContext, new JSONObject("{'error' : '" + oSSMSUpdateError.getMessage() + "'}"));
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

    public static boolean logoutSMSNumber(final CallbackContext callbackContext) {
        OneSignal.logoutSMSNumber(new OneSignal.OSSMSUpdateHandler() { // from class: com.onesignal.cordova.OneSignalSMSController.3
            @Override // com.onesignal.OneSignal.OSSMSUpdateHandler
            public void onSuccess(JSONObject jSONObject) {
                CallbackHelper.callbackSuccess(callbackContext, jSONObject);
            }

            @Override // com.onesignal.OneSignal.OSSMSUpdateHandler
            public void onFailure(OneSignal.OSSMSUpdateError oSSMSUpdateError) {
                try {
                    CallbackHelper.callbackError(callbackContext, new JSONObject("{'error' : '" + oSSMSUpdateError.getMessage() + "'}"));
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        });
        return true;
    }
}

