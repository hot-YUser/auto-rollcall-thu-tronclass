package com.getcapacitor.plugin;

import android.app.Notification;
import android.app.NotificationManager;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.service.notification.StatusBarNotification;
import androidx.core.app.NotificationCompat;
import com.getcapacitor.Bridge;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginHandle;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.plugin.notification.NotificationChannelManager;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.iid.InstanceIdResult;
import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.RemoteMessage;
import com.onesignal.GenerateNotification;
import com.onesignal.OneSignalDbContract;
import com.onesignal.outcomes.OSOutcomeConstants;
import java.util.ArrayList;
import java.util.Iterator;
import org.json.JSONException;
import org.json.JSONObject;
@NativePlugin
public class PushNotifications extends Plugin {
    private static final String EVENT_TOKEN_CHANGE = "registration";
    private static final String EVENT_TOKEN_ERROR = "registrationError";
    public static RemoteMessage lastMessage;
    public static Bridge staticBridge;
    private NotificationChannelManager notificationChannelManager;
    public NotificationManager notificationManager;

    @Override // com.getcapacitor.Plugin
    public void load() {
        this.notificationManager = (NotificationManager) getActivity().getSystemService(OneSignalDbContract.NotificationTable.TABLE_NAME);
        staticBridge = this.bridge;
        RemoteMessage remoteMessage = lastMessage;
        if (remoteMessage != null) {
            fireNotification(remoteMessage);
            lastMessage = null;
        }
        this.notificationChannelManager = new NotificationChannelManager(getActivity(), this.notificationManager);
    }

    @Override // com.getcapacitor.Plugin
    protected void handleOnNewIntent(Intent intent) {
        super.handleOnNewIntent(intent);
        Bundle extras = intent.getExtras();
        if (extras == null || !extras.containsKey("google.message_id")) {
            return;
        }
        JSObject jSObject = new JSObject();
        JSObject jSObject2 = new JSObject();
        for (String str : extras.keySet()) {
            if (str.equals("google.message_id")) {
                jSObject.put(OSOutcomeConstants.OUTCOME_ID, extras.get(str));
            } else {
                Object obj = extras.get(str);
                jSObject2.put(str, obj != null ? obj.toString() : null);
            }
        }
        jSObject.put("data", (Object) jSObject2);
        JSObject jSObject3 = new JSObject();
        jSObject3.put(GenerateNotification.BUNDLE_KEY_ACTION_ID, "tap");
        jSObject3.put(OneSignalDbContract.NotificationTable.TABLE_NAME, (Object) jSObject);
        notifyListeners("pushNotificationActionPerformed", jSObject3, true);
    }

    @PluginMethod
    public void register(PluginCall pluginCall) {
        FirebaseMessaging.getInstance().setAutoInitEnabled(true);
        FirebaseInstanceId.getInstance().getInstanceId().addOnSuccessListener(getActivity(), new OnSuccessListener<InstanceIdResult>() { // from class: com.getcapacitor.plugin.PushNotifications.1
            @Override // com.google.android.gms.tasks.OnSuccessListener
            public void onSuccess(InstanceIdResult instanceIdResult) {
                PushNotifications.this.sendToken(instanceIdResult.getToken());
            }
        });
        FirebaseInstanceId.getInstance().getInstanceId().addOnFailureListener(new OnFailureListener() { // from class: com.getcapacitor.plugin.PushNotifications.2
            @Override // com.google.android.gms.tasks.OnFailureListener
            public void onFailure(Exception exc) {
                PushNotifications.this.sendError(exc.getLocalizedMessage());
            }
        });
        pluginCall.success();
    }

    @PluginMethod
    public void requestPermission(PluginCall pluginCall) {
        JSObject jSObject = new JSObject();
        jSObject.put("granted", true);
        pluginCall.success(jSObject);
    }

    @PluginMethod
    public void getDeliveredNotifications(PluginCall pluginCall) {
        JSArray jSArray = new JSArray();
        for (StatusBarNotification statusBarNotification : this.notificationManager.getActiveNotifications()) {
            JSObject jSObject = new JSObject();
            jSObject.put(OSOutcomeConstants.OUTCOME_ID, statusBarNotification.getId());
            Notification notification = statusBarNotification.getNotification();
            if (notification != null) {
                jSObject.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_TITLE, (Object) notification.extras.getCharSequence(NotificationCompat.EXTRA_TITLE));
                jSObject.put("body", (Object) notification.extras.getCharSequence(NotificationCompat.EXTRA_TEXT));
                jSObject.put("group", notification.getGroup());
                jSObject.put("groupSummary", (notification.flags & 512) != 0);
                JSObject jSObject2 = new JSObject();
                for (String str : notification.extras.keySet()) {
                    jSObject2.put(str, notification.extras.get(str));
                }
                jSObject.put("data", (Object) jSObject2);
            }
            jSArray.put(jSObject);
        }
        JSObject jSObject3 = new JSObject();
        jSObject3.put("notifications", (Object) jSArray);
        pluginCall.resolve(jSObject3);
    }

    @PluginMethod
    public void removeDeliveredNotifications(PluginCall pluginCall) {
        JSArray array = pluginCall.getArray("notifications");
        ArrayList arrayList = new ArrayList();
        try {
            for (Object obj : array.toList()) {
                if (obj instanceof JSONObject) {
                    arrayList.add(JSObject.fromJSONObject((JSONObject) obj).getInteger(OSOutcomeConstants.OUTCOME_ID));
                } else {
                    pluginCall.reject("Expected notifications to be a list of notification objects");
                }
            }
        } catch (JSONException e) {
            pluginCall.reject(e.getMessage());
        }
        Iterator it = arrayList.iterator();
        while (it.hasNext()) {
            this.notificationManager.cancel(((Integer) it.next()).intValue());
        }
        pluginCall.resolve();
    }

    @PluginMethod
    public void removeAllDeliveredNotifications(PluginCall pluginCall) {
        this.notificationManager.cancelAll();
        pluginCall.success();
    }

    @PluginMethod
    public void createChannel(PluginCall pluginCall) {
        this.notificationChannelManager.createChannel(pluginCall);
    }

    @PluginMethod
    public void deleteChannel(PluginCall pluginCall) {
        this.notificationChannelManager.deleteChannel(pluginCall);
    }

    @PluginMethod
    public void listChannels(PluginCall pluginCall) {
        this.notificationChannelManager.listChannels(pluginCall);
    }

    public void sendToken(String str) {
        JSObject jSObject = new JSObject();
        jSObject.put("value", str);
        notifyListeners(EVENT_TOKEN_CHANGE, jSObject, true);
    }

    public void sendError(String str) {
        JSObject jSObject = new JSObject();
        jSObject.put("error", str);
        notifyListeners(EVENT_TOKEN_ERROR, jSObject, true);
    }

    public static void onNewToken(String str) {
        PushNotifications pushNotificationsInstance = getPushNotificationsInstance();
        if (pushNotificationsInstance != null) {
            pushNotificationsInstance.sendToken(str);
        }
    }

    public static void sendRemoteMessage(RemoteMessage remoteMessage) {
        PushNotifications pushNotificationsInstance = getPushNotificationsInstance();
        if (pushNotificationsInstance != null) {
            pushNotificationsInstance.fireNotification(remoteMessage);
        } else {
            lastMessage = remoteMessage;
        }
    }

    public void fireNotification(RemoteMessage remoteMessage) {
        JSObject jSObject = new JSObject();
        JSObject jSObject2 = new JSObject();
        jSObject.put(OSOutcomeConstants.OUTCOME_ID, remoteMessage.getMessageId());
        for (String str : remoteMessage.getData().keySet()) {
            jSObject2.put(str, (Object) remoteMessage.getData().get(str));
        }
        jSObject.put("data", (Object) jSObject2);
        RemoteMessage.Notification notification = remoteMessage.getNotification();
        if (notification != null) {
            jSObject.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_TITLE, notification.getTitle());
            jSObject.put("body", notification.getBody());
            jSObject.put("click_action", notification.getClickAction());
            Uri link = notification.getLink();
            if (link != null) {
                jSObject.put("link", link.toString());
            }
        }
        notifyListeners("pushNotificationReceived", jSObject, true);
    }

    public static PushNotifications getPushNotificationsInstance() {
        PluginHandle plugin;
        Bridge bridge = staticBridge;
        if (bridge == null || bridge.getWebView() == null || (plugin = staticBridge.getPlugin("PushNotifications")) == null) {
            return null;
        }
        return (PushNotifications) plugin.getInstance();
    }
}

