package com.onesignal.cordova;

import com.onesignal.OSDeviceState;
import com.onesignal.OneSignal;
import java.util.ArrayList;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class OneSignalController {
    public static boolean registerForProvisionalAuthorization() {
        return true;
    }

    public static boolean setLaunchURLsInApp() {
        return true;
    }

    public static boolean getDeviceState(CallbackContext callbackContext) {
        OSDeviceState deviceState = OneSignal.getDeviceState();
        if (deviceState == null) {
            return true;
        }
        CallbackHelper.callbackSuccess(callbackContext, deviceState.toJSONObject());
        return true;
    }

    public static boolean disablePush(JSONArray jSONArray) {
        try {
            OneSignal.disablePush(jSONArray.getBoolean(0));
            return true;
        } catch (Throwable th) {
            th.printStackTrace();
            return false;
        }
    }

    public static void setLogLevel(JSONArray jSONArray) {
        try {
            OneSignal.setLogLevel(jSONArray.getInt(0), jSONArray.getInt(1));
        } catch (Throwable th) {
            th.printStackTrace();
        }
    }

    public static boolean setLanguage(final CallbackContext callbackContext, JSONArray jSONArray) {
        try {
            OneSignal.setLanguage(jSONArray.getString(0), new OneSignal.OSSetLanguageCompletionHandler() { // from class: com.onesignal.cordova.OneSignalController.1
                @Override // com.onesignal.OneSignal.OSSetLanguageCompletionHandler
                public void onSuccess(String str) {
                    try {
                        JSONObject jSONObject = new JSONObject("{'success' : 'true'}");
                        if (str != null) {
                            jSONObject = new JSONObject(str);
                        }
                        CallbackHelper.callbackSuccess(callbackContext, jSONObject);
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                }

                @Override // com.onesignal.OneSignal.OSSetLanguageCompletionHandler
                public void onFailure(OneSignal.OSLanguageError oSLanguageError) {
                    try {
                        CallbackHelper.callbackError(callbackContext, new JSONObject("{'error' : '" + oSLanguageError.getMessage() + "'}"));
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

    public static boolean getTags(final CallbackContext callbackContext) {
        OneSignal.getTags(new OneSignal.OSGetTagsHandler() { // from class: com.onesignal.cordova.OneSignalController$$ExternalSyntheticLambda0
            @Override // com.onesignal.OneSignal.OSGetTagsHandler
            public final void tagsAvailable(JSONObject jSONObject) {
                CallbackHelper.callbackSuccess(callbackContext, jSONObject);
            }
        });
        return true;
    }

    public static boolean sendTags(JSONArray jSONArray) {
        try {
            OneSignal.sendTags(jSONArray.getJSONObject(0));
            return true;
        } catch (Throwable th) {
            th.printStackTrace();
            return true;
        }
    }

    public static boolean deleteTags(JSONArray jSONArray) {
        try {
            ArrayList arrayList = new ArrayList();
            for (int i = 0; i < jSONArray.length(); i++) {
                arrayList.add(jSONArray.get(i).toString());
            }
            OneSignal.deleteTags(arrayList);
            return true;
        } catch (Throwable th) {
            th.printStackTrace();
            return false;
        }
    }

    public static boolean postNotification(final CallbackContext callbackContext, JSONArray jSONArray) {
        try {
            OneSignal.postNotification(jSONArray.getJSONObject(0), new OneSignal.PostNotificationResponseHandler() { // from class: com.onesignal.cordova.OneSignalController.2
                @Override // com.onesignal.OneSignal.PostNotificationResponseHandler
                public void onSuccess(JSONObject jSONObject) {
                    CallbackHelper.callbackSuccess(callbackContext, jSONObject);
                }

                @Override // com.onesignal.OneSignal.PostNotificationResponseHandler
                public void onFailure(JSONObject jSONObject) {
                    CallbackHelper.callbackError(callbackContext, jSONObject);
                }
            });
            return true;
        } catch (Throwable th) {
            th.printStackTrace();
            return false;
        }
    }

    public static boolean clearOneSignalNotifications() {
        try {
            OneSignal.clearOneSignalNotifications();
            return true;
        } catch (Throwable th) {
            th.printStackTrace();
            return false;
        }
    }

    public static boolean removeNotification(JSONArray jSONArray) {
        try {
            OneSignal.removeNotification(jSONArray.getInt(0));
            return true;
        } catch (Throwable th) {
            th.printStackTrace();
            return false;
        }
    }

    public static boolean removeGroupedNotifications(JSONArray jSONArray) {
        try {
            OneSignal.removeGroupedNotifications(jSONArray.getString(0));
            return true;
        } catch (Throwable th) {
            th.printStackTrace();
            return false;
        }
    }

    public static boolean promptForPushNotificationsWithUserResponse(final CallbackContext callbackContext, JSONArray jSONArray) {
        boolean z = false;
        try {
            z = jSONArray.getBoolean(0);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        OneSignal.promptForPushNotifications(z, new OneSignal.PromptForPushNotificationPermissionResponseHandler() { // from class: com.onesignal.cordova.OneSignalController.3
            @Override // com.onesignal.OneSignal.PromptForPushNotificationPermissionResponseHandler
            public void response(boolean z2) {
                CallbackHelper.callbackSuccessBoolean(callbackContext, z2);
            }
        });
        return true;
    }

    public static boolean unsubscribeWhenNotificationsAreDisabled(JSONArray jSONArray) {
        try {
            OneSignal.unsubscribeWhenNotificationsAreDisabled(jSONArray.getBoolean(0));
            return true;
        } catch (JSONException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static boolean userProvidedConsent(CallbackContext callbackContext) {
        CallbackHelper.callbackSuccessBoolean(callbackContext, OneSignal.userProvidedPrivacyConsent());
        return true;
    }

    public static boolean requiresUserPrivacyConsent(CallbackContext callbackContext) {
        CallbackHelper.callbackSuccessBoolean(callbackContext, OneSignal.requiresUserPrivacyConsent());
        return true;
    }

    public static boolean setRequiresConsent(CallbackContext callbackContext, JSONArray jSONArray) {
        try {
            OneSignal.setRequiresUserPrivacyConsent(jSONArray.getBoolean(0));
            return true;
        } catch (JSONException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static boolean provideUserConsent(JSONArray jSONArray) {
        try {
            OneSignal.provideUserConsent(jSONArray.getBoolean(0));
            return true;
        } catch (JSONException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static boolean setExternalUserId(final CallbackContext callbackContext, JSONArray jSONArray) {
        try {
            OneSignal.setExternalUserId(jSONArray.getString(0), jSONArray.length() > 1 ? jSONArray.getString(1) : null, new OneSignal.OSExternalUserIdUpdateCompletionHandler() { // from class: com.onesignal.cordova.OneSignalController.4
                @Override // com.onesignal.OneSignal.OSExternalUserIdUpdateCompletionHandler
                public void onSuccess(JSONObject jSONObject) {
                    CallbackHelper.callbackSuccess(callbackContext, jSONObject);
                }

                @Override // com.onesignal.OneSignal.OSExternalUserIdUpdateCompletionHandler
                public void onFailure(OneSignal.ExternalIdError externalIdError) {
                    CallbackHelper.callbackError(callbackContext, externalIdError.getMessage());
                }
            });
            return true;
        } catch (JSONException e) {
            e.printStackTrace();
            return false;
        }
    }

    public static boolean removeExternalUserId(final CallbackContext callbackContext) {
        OneSignal.removeExternalUserId(new OneSignal.OSExternalUserIdUpdateCompletionHandler() { // from class: com.onesignal.cordova.OneSignalController.5
            @Override // com.onesignal.OneSignal.OSExternalUserIdUpdateCompletionHandler
            public void onSuccess(JSONObject jSONObject) {
                CallbackHelper.callbackSuccess(callbackContext, jSONObject);
            }

            @Override // com.onesignal.OneSignal.OSExternalUserIdUpdateCompletionHandler
            public void onFailure(OneSignal.ExternalIdError externalIdError) {
                CallbackHelper.callbackError(callbackContext, externalIdError.getMessage());
            }
        });
        return true;
    }

    public static void promptLocation() {
        OneSignal.promptLocation();
    }

    public static void setLocationShared(JSONArray jSONArray) {
        try {
            OneSignal.setLocationShared(jSONArray.getBoolean(0));
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    public static boolean isLocationShared(CallbackContext callbackContext) {
        CallbackHelper.callbackSuccessBoolean(callbackContext, false);
        return true;
    }
}

