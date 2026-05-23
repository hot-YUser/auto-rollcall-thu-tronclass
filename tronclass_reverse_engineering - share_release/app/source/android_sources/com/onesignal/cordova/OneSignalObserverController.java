package com.onesignal.cordova;

import androidx.core.app.NotificationCompat;
import com.onesignal.OSEmailSubscriptionObserver;
import com.onesignal.OSEmailSubscriptionStateChanges;
import com.onesignal.OSPermissionObserver;
import com.onesignal.OSPermissionStateChanges;
import com.onesignal.OSSMSSubscriptionObserver;
import com.onesignal.OSSMSSubscriptionStateChanges;
import com.onesignal.OSSubscriptionObserver;
import com.onesignal.OSSubscriptionStateChanges;
import com.onesignal.OneSignal;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.PluginResult;
import org.json.JSONException;
import org.json.JSONObject;
public class OneSignalObserverController {
    private static OSEmailSubscriptionObserver emailSubscriptionObserver;
    private static CallbackContext jsEmailSubscriptionObserverCallBack;
    private static CallbackContext jsPermissionObserverCallBack;
    private static CallbackContext jsSMSSubscriptionObserverCallBack;
    private static CallbackContext jsSubscriptionObserverCallBack;
    private static OSPermissionObserver permissionObserver;
    private static OSSMSSubscriptionObserver smsSubscriptionObserver;
    private static OSSubscriptionObserver subscriptionObserver;
    public static void callbackSuccess(CallbackContext callbackContext, JSONObject jSONObject) {
        if (jSONObject == null) {
            jSONObject = new JSONObject();
        }
        PluginResult pluginResult = new PluginResult(PluginResult.Status.OK, jSONObject);
        pluginResult.setKeepCallback(true);
        callbackContext.sendPluginResult(pluginResult);
    }
    public static JSONObject renameStateChangesKey(JSONObject jSONObject, JSONObject jSONObject2, String str, String str2) {
        JSONObject jSONObject3 = new JSONObject();
        try {
            jSONObject.put(str2, jSONObject.getBoolean(str));
            jSONObject.remove(str);
            jSONObject2.put(str2, jSONObject2.getBoolean(str));
            jSONObject2.remove(str);
            jSONObject3.put("from", jSONObject);
            jSONObject3.put("to", jSONObject2);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jSONObject3;
    }

    public static boolean addPermissionObserver(CallbackContext callbackContext) {
        jsPermissionObserverCallBack = callbackContext;
        if (permissionObserver != null) {
            return true;
        }
        OSPermissionObserver oSPermissionObserver = new OSPermissionObserver() { // from class: com.onesignal.cordova.OneSignalObserverController.1
            @Override // com.onesignal.OSPermissionObserver
            public void onOSPermissionChanged(OSPermissionStateChanges oSPermissionStateChanges) {
                JSONObject jSONObject = oSPermissionStateChanges.getFrom().toJSONObject();
                JSONObject jSONObject2 = oSPermissionStateChanges.getTo().toJSONObject();
                JSONObject jSONObject3 = new JSONObject();
                try {
                    int i = 2;
                    jSONObject.put(NotificationCompat.CATEGORY_STATUS, jSONObject.getBoolean("areNotificationsEnabled") ? 2 : 1);
                    jSONObject.remove("areNotificationsEnabled");
                    if (!jSONObject2.getBoolean("areNotificationsEnabled")) {
                        i = 1;
                    }
                    jSONObject2.put(NotificationCompat.CATEGORY_STATUS, i);
                    jSONObject2.remove("areNotificationsEnabled");
                    jSONObject3.put("from", jSONObject);
                    jSONObject3.put("to", jSONObject2);
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                OneSignalObserverController.callbackSuccess(OneSignalObserverController.jsPermissionObserverCallBack, jSONObject3);
            }
        };
        permissionObserver = oSPermissionObserver;
        OneSignal.addPermissionObserver(oSPermissionObserver);
        return true;
    }

    public static boolean addSubscriptionObserver(CallbackContext callbackContext) {
        jsSubscriptionObserverCallBack = callbackContext;
        if (subscriptionObserver != null) {
            return true;
        }
        OSSubscriptionObserver oSSubscriptionObserver = new OSSubscriptionObserver() { // from class: com.onesignal.cordova.OneSignalObserverController.2
            @Override // com.onesignal.OSSubscriptionObserver
            public void onOSSubscriptionChanged(OSSubscriptionStateChanges oSSubscriptionStateChanges) {
                OneSignalObserverController.callbackSuccess(OneSignalObserverController.jsSubscriptionObserverCallBack, oSSubscriptionStateChanges.toJSONObject());
            }
        };
        subscriptionObserver = oSSubscriptionObserver;
        OneSignal.addSubscriptionObserver(oSSubscriptionObserver);
        return true;
    }

    public static boolean addEmailSubscriptionObserver(CallbackContext callbackContext) {
        jsEmailSubscriptionObserverCallBack = callbackContext;
        if (emailSubscriptionObserver != null) {
            return true;
        }
        OSEmailSubscriptionObserver oSEmailSubscriptionObserver = new OSEmailSubscriptionObserver() { // from class: com.onesignal.cordova.OneSignalObserverController.3
            @Override // com.onesignal.OSEmailSubscriptionObserver
            public void onOSEmailSubscriptionChanged(OSEmailSubscriptionStateChanges oSEmailSubscriptionStateChanges) {
                OneSignalObserverController.callbackSuccess(OneSignalObserverController.jsEmailSubscriptionObserverCallBack, OneSignalObserverController.renameStateChangesKey(oSEmailSubscriptionStateChanges.getFrom().toJSONObject(), oSEmailSubscriptionStateChanges.getTo().toJSONObject(), "isSubscribed", "isEmailSubscribed"));
            }
        };
        emailSubscriptionObserver = oSEmailSubscriptionObserver;
        OneSignal.addEmailSubscriptionObserver(oSEmailSubscriptionObserver);
        return true;
    }

    public static boolean addSMSSubscriptionObserver(CallbackContext callbackContext) {
        jsSMSSubscriptionObserverCallBack = callbackContext;
        if (smsSubscriptionObserver != null) {
            return true;
        }
        OSSMSSubscriptionObserver oSSMSSubscriptionObserver = new OSSMSSubscriptionObserver() { // from class: com.onesignal.cordova.OneSignalObserverController.4
            @Override // com.onesignal.OSSMSSubscriptionObserver
            public void onSMSSubscriptionChanged(OSSMSSubscriptionStateChanges oSSMSSubscriptionStateChanges) {
                OneSignalObserverController.callbackSuccess(OneSignalObserverController.jsSMSSubscriptionObserverCallBack, OneSignalObserverController.renameStateChangesKey(oSSMSSubscriptionStateChanges.getFrom().toJSONObject(), oSSMSSubscriptionStateChanges.getTo().toJSONObject(), "isSubscribed", "isSMSSubscribed"));
            }
        };
        smsSubscriptionObserver = oSSMSSubscriptionObserver;
        OneSignal.addSMSSubscriptionObserver(oSSMSSubscriptionObserver);
        return true;
    }
}

