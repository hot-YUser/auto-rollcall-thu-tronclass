package com.onesignal.cordova;

import android.util.Log;
import com.onesignal.OSInAppMessage;
import com.onesignal.OSInAppMessageAction;
import com.onesignal.OSInAppMessageLifecycleHandler;
import com.onesignal.OSNotification;
import com.onesignal.OSNotificationOpenedResult;
import com.onesignal.OSNotificationReceivedEvent;
import com.onesignal.OneSignal;
import com.onesignal.UserState;
import java.util.HashMap;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class OneSignalPush extends CordovaPlugin {
    private static final String ADD_EMAIL_SUBSCRIPTION_OBSERVER = "addEmailSubscriptionObserver";
    private static final String ADD_PERMISSION_OBSERVER = "addPermissionObserver";
    private static final String ADD_SMS_SUBSCRIPTION_OBSERVER = "addSMSSubscriptionObserver";
    private static final String ADD_SUBSCRIPTION_OBSERVER = "addSubscriptionObserver";
    private static final String ADD_TRIGGERS = "addTriggers";
    private static final String CLEAR_ONESIGNAL_NOTIFICATIONS = "clearOneSignalNotifications";
    private static final String COMPLETE_NOTIFICATION = "completeNotification";
    private static final String DELETE_TAGS = "deleteTags";
    private static final String DISABLE_PUSH = "disablePush";
    private static final String GET_DEVICE_STATE = "getDeviceState";
    private static final String GET_TAGS = "getTags";
    private static final String GET_TRIGGER_VALUE_FOR_KEY = "getTriggerValueForKey";
    private static final String INIT = "init";
    private static final String IN_APP_MESSAGING_PAUSED = "isInAppMessagingPaused";
    private static final String IS_LOCATION_SHARED = "isLocationShared";
    private static final String LOGOUT_EMAIL = "logoutEmail";
    private static final String LOGOUT_SMS_NUMBER = "logoutSMSNumber";
    private static final String PAUSE_IN_APP_MESSAGES = "pauseInAppMessages";
    private static final String POST_NOTIFICATION = "postNotification";
    private static final String PROMPT_FOR_PUSH_NOTIFICATIONS_WITH_USER_RESPONSE = "promptForPushNotificationsWithUserResponse";
    private static final String PROMPT_LOCATION = "promptLocation";
    private static final String PROVIDE_USER_CONSENT = "provideUserConsent";
    private static final String REGISTER_FOR_PROVISIONAL_AUTHORIZATION = "registerForProvisionalAuthorization";
    private static final String REMOVE_EXTERNAL_USER_ID = "removeExternalUserId";
    private static final String REMOVE_GROUPED_NOTIFICATIONS = "removeGroupedNotifications";
    private static final String REMOVE_NOTIFICATION = "removeNotification";
    private static final String REMOVE_TRIGGERS_FOR_KEYS = "removeTriggersForKeys";
    private static final String REQUIRES_CONSENT = "requiresUserPrivacyConsent";
    private static final String SEND_OUTCOME = "sendOutcome";
    private static final String SEND_OUTCOME_WITH_VALUE = "sendOutcomeWithValue";
    private static final String SEND_TAGS = "sendTags";
    private static final String SEND_UNIQUE_OUTCOME = "sendUniqueOutcome";
    private static final String SET_EMAIL = "setEmail";
    private static final String SET_EXTERNAL_USER_ID = "setExternalUserId";
    private static final String SET_IN_APP_MESSAGE_CLICK_HANDLER = "setInAppMessageClickHandler";
    private static final String SET_IN_APP_MESSAGE_LIFECYCLE_HANDLER = "setInAppMessageLifecycleHandler";
    private static final String SET_LANGUAGE = "setLanguage";
    private static final String SET_LAUNCH_URLS_IN_APP = "setLaunchURLsInApp";
    private static final String SET_LOCATION_SHARED = "setLocationShared";
    private static final String SET_LOG_LEVEL = "setLogLevel";
    private static final String SET_NOTIFICATION_OPENED_HANDLER = "setNotificationOpenedHandler";
    private static final String SET_NOTIFICATION_WILL_SHOW_IN_FOREGROUND_HANDLER = "setNotificationWillShowInForegroundHandler";
    private static final String SET_ON_DID_DISMISS_IN_APP_MESSAGE_HANDLER = "setOnDidDismissInAppMessageHandler";
    private static final String SET_ON_DID_DISPLAY_IN_APP_MESSAGE_HANDLER = "setOnDidDisplayInAppMessageHandler";
    private static final String SET_ON_WILL_DISMISS_IN_APP_MESSAGE_HANDLER = "setOnWillDismissInAppMessageHandler";
    private static final String SET_ON_WILL_DISPLAY_IN_APP_MESSAGE_HANDLER = "setOnWillDisplayInAppMessageHandler";
    private static final String SET_REQUIRES_CONSENT = "setRequiresUserPrivacyConsent";
    private static final String SET_SMS_NUMBER = "setSMSNumber";
    private static final String SET_UNAUTHENTICATED_EMAIL = "setUnauthenticatedEmail";
    private static final String SET_UNAUTHENTICATED_SMS_NUMBER = "setUnauthenticatedSMSNumber";
    private static final String TAG = "OneSignalPush";
    private static final String UNSUBSCRIBE_WHEN_NOTIFICATIONS_DISABLED = "unsubscribeWhenNotificationsAreDisabled";
    private static final String USER_PROVIDED_CONSENT = "userProvidedPrivacyConsent";
    private static CallbackContext jsInAppMessageDidDismissCallBack;
    private static CallbackContext jsInAppMessageDidDisplayCallBack;
    private static CallbackContext jsInAppMessageWillDismissCallback;
    private static CallbackContext jsInAppMessageWillDisplayCallback;
    private static final HashMap<String, OSNotificationReceivedEvent> notificationReceivedEventCache = new HashMap<>();

    public boolean setNotificationWillShowInForegroundHandler(CallbackContext callbackContext) {
        OneSignal.setNotificationWillShowInForegroundHandler(new CordovaNotificationInForegroundHandler(callbackContext));
        return true;
    }

    public boolean setNotificationOpenedHandler(CallbackContext callbackContext) {
        OneSignal.setNotificationOpenedHandler(new CordovaNotificationOpenHandler(callbackContext));
        return true;
    }

    public boolean setInAppMessageClickHandler(CallbackContext callbackContext) {
        OneSignal.setInAppMessageClickHandler(new CordovaInAppMessageClickHandler(callbackContext));
        return true;
    }

    public boolean setInAppMessageLifecycleHandler() {
        OneSignal.setInAppMessageLifecycleHandler(new OSInAppMessageLifecycleHandler() { // from class: com.onesignal.cordova.OneSignalPush.1
            @Override // com.onesignal.OSInAppMessageLifecycleHandler
            public void onWillDisplayInAppMessage(OSInAppMessage oSInAppMessage) {
                if (OneSignalPush.jsInAppMessageWillDisplayCallback != null) {
                    CallbackHelper.callbackSuccess(OneSignalPush.jsInAppMessageWillDisplayCallback, oSInAppMessage.toJSONObject());
                }
            }

            @Override // com.onesignal.OSInAppMessageLifecycleHandler
            public void onDidDisplayInAppMessage(OSInAppMessage oSInAppMessage) {
                if (OneSignalPush.jsInAppMessageDidDisplayCallBack != null) {
                    CallbackHelper.callbackSuccess(OneSignalPush.jsInAppMessageDidDisplayCallBack, oSInAppMessage.toJSONObject());
                }
            }

            @Override // com.onesignal.OSInAppMessageLifecycleHandler
            public void onWillDismissInAppMessage(OSInAppMessage oSInAppMessage) {
                if (OneSignalPush.jsInAppMessageWillDismissCallback != null) {
                    CallbackHelper.callbackSuccess(OneSignalPush.jsInAppMessageWillDismissCallback, oSInAppMessage.toJSONObject());
                }
            }

            @Override // com.onesignal.OSInAppMessageLifecycleHandler
            public void onDidDismissInAppMessage(OSInAppMessage oSInAppMessage) {
                if (OneSignalPush.jsInAppMessageDidDismissCallBack != null) {
                    CallbackHelper.callbackSuccess(OneSignalPush.jsInAppMessageDidDismissCallBack, oSInAppMessage.toJSONObject());
                }
            }
        });
        return true;
    }

    public boolean setOnWillDisplayInAppMessageHandler(CallbackContext callbackContext) {
        jsInAppMessageWillDisplayCallback = callbackContext;
        return true;
    }

    public boolean setOnDidDisplayInAppMessageHandler(CallbackContext callbackContext) {
        jsInAppMessageDidDisplayCallBack = callbackContext;
        return true;
    }

    public boolean setOnWillDismissInAppMessageHandler(CallbackContext callbackContext) {
        jsInAppMessageWillDismissCallback = callbackContext;
        return true;
    }

    public boolean setOnDidDismissInAppMessageHandler(CallbackContext callbackContext) {
        jsInAppMessageDidDismissCallBack = callbackContext;
        return true;
    }

    public boolean init(JSONArray jSONArray) {
        try {
            String string = jSONArray.getString(0);
            OneSignal.sdkType = "cordova";
            OneSignal.setAppId(string);
            OneSignal.initWithContext(this.f7cordova.getActivity());
            return true;
        } catch (JSONException e) {
            Log.e(TAG, "execute: Got JSON Exception " + e.getMessage());
            return false;
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) {
        str.hashCode();
        switch (str) {
            case "provideUserConsent":
                return OneSignalController.provideUserConsent(jSONArray);
            case "addPermissionObserver":
                return OneSignalObserverController.addPermissionObserver(callbackContext);
            case "isLocationShared":
                return OneSignalController.isLocationShared(callbackContext);
            case "setExternalUserId":
                return OneSignalController.setExternalUserId(callbackContext, jSONArray);
            case "setLocationShared":
                OneSignalController.setLocationShared(jSONArray);
                return false;
            case "addSubscriptionObserver":
                return OneSignalObserverController.addSubscriptionObserver(callbackContext);
            case "sendOutcome":
                return OneSignalOutcomeController.sendOutcome(callbackContext, jSONArray);
            case "setRequiresUserPrivacyConsent":
                return OneSignalController.setRequiresConsent(callbackContext, jSONArray);
            case "setLaunchURLsInApp":
                return OneSignalController.setLaunchURLsInApp();
            case "removeNotification":
                return OneSignalController.removeNotification(jSONArray);
            case "setOnDidDisplayInAppMessageHandler":
                return setOnDidDisplayInAppMessageHandler(callbackContext);
            case "setOnDidDismissInAppMessageHandler":
                return setOnDidDismissInAppMessageHandler(callbackContext);
            case "setUnauthenticatedSMSNumber":
                return OneSignalSMSController.setUnauthenticatedEmail(callbackContext, jSONArray);
            case "isInAppMessagingPaused":
                return OneSignalInAppMessagingController.isInAppMessagingPaused(callbackContext);
            case "setUnauthenticatedEmail":
                return OneSignalEmailController.setUnauthenticatedEmail(callbackContext, jSONArray);
            case "logoutSMSNumber":
                return OneSignalSMSController.logoutSMSNumber(callbackContext);
            case "setSMSNumber":
                return OneSignalSMSController.setSMSNumber(callbackContext, jSONArray);
            case "pauseInAppMessages":
                return OneSignalInAppMessagingController.pauseInAppMessages(jSONArray);
            case "setLogLevel":
                OneSignalController.setLogLevel(jSONArray);
                return false;
            case "completeNotification":
                return completeNotification(jSONArray);
            case "unsubscribeWhenNotificationsAreDisabled":
                return OneSignalController.unsubscribeWhenNotificationsAreDisabled(jSONArray);
            case "getTags":
                return OneSignalController.getTags(callbackContext);
            case "addEmailSubscriptionObserver":
                return OneSignalObserverController.addEmailSubscriptionObserver(callbackContext);
            case "userProvidedPrivacyConsent":
                return OneSignalController.userProvidedConsent(callbackContext);
            case "setInAppMessageLifecycleHandler":
                return setInAppMessageLifecycleHandler();
            case "init":
                return init(jSONArray);
            case "registerForProvisionalAuthorization":
                return OneSignalController.registerForProvisionalAuthorization();
            case "removeExternalUserId":
                return OneSignalController.removeExternalUserId(callbackContext);
            case "promptForPushNotificationsWithUserResponse":
                return OneSignalController.promptForPushNotificationsWithUserResponse(callbackContext, jSONArray);
            case "setLanguage":
                return OneSignalController.setLanguage(callbackContext, jSONArray);
            case "getTriggerValueForKey":
                return OneSignalInAppMessagingController.getTriggerValueForKey(callbackContext, jSONArray);
            case "addTriggers":
                return OneSignalInAppMessagingController.addTriggers(jSONArray);
            case "removeTriggersForKeys":
                return OneSignalInAppMessagingController.removeTriggersForKeys(jSONArray);
            case "removeGroupedNotifications":
                return OneSignalController.removeGroupedNotifications(jSONArray);
            case "sendOutcomeWithValue":
                return OneSignalOutcomeController.sendOutcomeWithValue(callbackContext, jSONArray);
            case "promptLocation":
                OneSignalController.promptLocation();
                return false;
            case "sendTags":
                return OneSignalController.sendTags(jSONArray);
            case "disablePush":
                return OneSignalController.disablePush(jSONArray);
            case "setEmail":
                return OneSignalEmailController.setEmail(callbackContext, jSONArray);
            case "sendUniqueOutcome":
                return OneSignalOutcomeController.sendUniqueOutcome(callbackContext, jSONArray);
            case "postNotification":
                return OneSignalController.postNotification(callbackContext, jSONArray);
            case "requiresUserPrivacyConsent":
                return OneSignalController.requiresUserPrivacyConsent(callbackContext);
            case "setNotificationOpenedHandler":
                return setNotificationOpenedHandler(callbackContext);
            case "logoutEmail":
                return OneSignalEmailController.logoutEmail(callbackContext);
            case "setOnWillDisplayInAppMessageHandler":
                return setOnWillDisplayInAppMessageHandler(callbackContext);
            case "setOnWillDismissInAppMessageHandler":
                return setOnWillDismissInAppMessageHandler(callbackContext);
            case "deleteTags":
                return OneSignalController.deleteTags(jSONArray);
            case "clearOneSignalNotifications":
                return OneSignalController.clearOneSignalNotifications();
            case "setNotificationWillShowInForegroundHandler":
                return setNotificationWillShowInForegroundHandler(callbackContext);
            case "setInAppMessageClickHandler":
                return setInAppMessageClickHandler(callbackContext);
            case "addSMSSubscriptionObserver":
                return OneSignalObserverController.addSMSSubscriptionObserver(callbackContext);
            case "getDeviceState":
                return OneSignalController.getDeviceState(callbackContext);
            default:
                Log.e(TAG, "Invalid action : " + str);
                CallbackHelper.callbackError(callbackContext, "Invalid action : " + str);
                return false;
        }
    }

    private boolean completeNotification(JSONArray jSONArray) {
        try {
            String string = jSONArray.getString(0);
            boolean z = jSONArray.getBoolean(1);
            OSNotificationReceivedEvent oSNotificationReceivedEvent = notificationReceivedEventCache.get(string);
            if (oSNotificationReceivedEvent == null) {
                OneSignal.onesignalLog(OneSignal.LOG_LEVEL.ERROR, "Could not find notification completion block with id: " + string);
                return false;
            }
            if (z) {
                oSNotificationReceivedEvent.complete(oSNotificationReceivedEvent.getNotification());
            } else {
                oSNotificationReceivedEvent.complete(null);
            }
            return true;
        } catch (JSONException e) {
            e.printStackTrace();
            return false;
        }
    }

    private static class CordovaNotificationInForegroundHandler implements OneSignal.OSNotificationWillShowInForegroundHandler {
        private CallbackContext jsNotificationInForegroundCallBack;

        public CordovaNotificationInForegroundHandler(CallbackContext callbackContext) {
            this.jsNotificationInForegroundCallBack = callbackContext;
        }

        @Override // com.onesignal.OneSignal.OSNotificationWillShowInForegroundHandler
        public void notificationWillShowInForeground(OSNotificationReceivedEvent oSNotificationReceivedEvent) {
            try {
                OSNotification notification = oSNotificationReceivedEvent.getNotification();
                OneSignalPush.notificationReceivedEventCache.put(notification.getNotificationId(), oSNotificationReceivedEvent);
                CallbackHelper.callbackSuccess(this.jsNotificationInForegroundCallBack, notification.toJSONObject());
            } catch (Throwable th) {
                th.printStackTrace();
            }
        }
    }

    private static class CordovaNotificationOpenHandler implements OneSignal.OSNotificationOpenedHandler {
        private CallbackContext jsNotificationOpenedCallBack;

        public CordovaNotificationOpenHandler(CallbackContext callbackContext) {
            this.jsNotificationOpenedCallBack = callbackContext;
        }

        @Override // com.onesignal.OneSignal.OSNotificationOpenedHandler
        public void notificationOpened(OSNotificationOpenedResult oSNotificationOpenedResult) {
            try {
                CallbackContext callbackContext = this.jsNotificationOpenedCallBack;
                if (callbackContext != null) {
                    CallbackHelper.callbackSuccess(callbackContext, oSNotificationOpenedResult.toJSONObject());
                }
            } catch (Throwable th) {
                th.printStackTrace();
            }
        }
    }

    private static class CordovaInAppMessageClickHandler implements OneSignal.OSInAppMessageClickHandler {
        private CallbackContext jsInAppMessageClickedCallback;

        public CordovaInAppMessageClickHandler(CallbackContext callbackContext) {
            this.jsInAppMessageClickedCallback = callbackContext;
        }

        @Override // com.onesignal.OneSignal.OSInAppMessageClickHandler
        public void inAppMessageClicked(OSInAppMessageAction oSInAppMessageAction) {
            try {
                JSONObject jSONObject = oSInAppMessageAction.toJSONObject();
                JSONObject jSONObject2 = new JSONObject();
                if (jSONObject.has("first_click")) {
                    jSONObject2.put("firstClick", jSONObject.getBoolean("first_click"));
                }
                if (jSONObject.has("closes_message")) {
                    jSONObject2.put("closesMessage", jSONObject.getBoolean("closes_message"));
                }
                jSONObject2.put("clickName", jSONObject.optString("click_name", null));
                jSONObject2.put("clickUrl", jSONObject.optString("click_url", null));
                jSONObject2.put("outcomes", jSONObject.optJSONArray("outcomes"));
                jSONObject2.put(UserState.TAGS, jSONObject.optJSONObject(UserState.TAGS));
                CallbackHelper.callbackSuccess(this.jsInAppMessageClickedCallback, jSONObject2);
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onDestroy() {
        OneSignal.setNotificationOpenedHandler(null);
        OneSignal.setNotificationWillShowInForegroundHandler(null);
    }
}

