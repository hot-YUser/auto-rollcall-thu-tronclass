package com.getcapacitor.plugin;

import android.content.Intent;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.PluginRequestCodes;
import com.getcapacitor.plugin.notification.LocalNotification;
import com.getcapacitor.plugin.notification.LocalNotificationManager;
import com.getcapacitor.plugin.notification.NotificationAction;
import com.getcapacitor.plugin.notification.NotificationChannelManager;
import com.getcapacitor.plugin.notification.NotificationStorage;
import com.onesignal.outcomes.OSOutcomeConstants;
import java.util.List;
import org.json.JSONArray;
@NativePlugin(requestCodes = {PluginRequestCodes.NOTIFICATION_OPEN})
public class LocalNotifications extends Plugin {
    private LocalNotificationManager manager;
    private NotificationChannelManager notificationChannelManager;
    private NotificationStorage notificationStorage;

    @Override // com.getcapacitor.Plugin
    public void load() {
        super.load();
        this.notificationStorage = new NotificationStorage(getContext());
        LocalNotificationManager localNotificationManager = new LocalNotificationManager(this.notificationStorage, getActivity(), getContext(), this.bridge.getConfig());
        this.manager = localNotificationManager;
        localNotificationManager.createNotificationChannel();
        this.notificationChannelManager = new NotificationChannelManager(getActivity());
    }

    @Override // com.getcapacitor.Plugin
    protected void handleOnNewIntent(Intent intent) {
        JSObject jSObjectHandleNotificationActionPerformed;
        super.handleOnNewIntent(intent);
        if ("android.intent.action.MAIN".equals(intent.getAction()) && (jSObjectHandleNotificationActionPerformed = this.manager.handleNotificationActionPerformed(intent, this.notificationStorage)) != null) {
            notifyListeners("localNotificationActionPerformed", jSObjectHandleNotificationActionPerformed, true);
        }
    }

    @Override // com.getcapacitor.Plugin
    protected void handleOnActivityResult(int i, int i2, Intent intent) {
        super.handleOnActivityResult(i, i2, intent);
        handleOnNewIntent(intent);
    }

    @PluginMethod
    public void schedule(PluginCall pluginCall) {
        JSONArray jSONArraySchedule;
        List<LocalNotification> listBuildNotificationList = LocalNotification.buildNotificationList(pluginCall);
        if (listBuildNotificationList == null || (jSONArraySchedule = this.manager.schedule(pluginCall, listBuildNotificationList)) == null) {
            return;
        }
        this.notificationStorage.appendNotifications(listBuildNotificationList);
        JSObject jSObject = new JSObject();
        JSArray jSArray = new JSArray();
        for (int i = 0; i < jSONArraySchedule.length(); i++) {
            try {
                jSArray.put(new JSObject().put(OSOutcomeConstants.OUTCOME_ID, jSONArraySchedule.getString(i)));
            } catch (Exception unused) {
            }
        }
        jSObject.put("notifications", (Object) jSArray);
        pluginCall.success(jSObject);
    }

    @PluginMethod
    public void requestPermission(PluginCall pluginCall) {
        JSObject jSObject = new JSObject();
        jSObject.put("granted", true);
        pluginCall.success(jSObject);
    }

    @PluginMethod
    public void cancel(PluginCall pluginCall) {
        this.manager.cancel(pluginCall);
    }

    @PluginMethod
    public void getPending(PluginCall pluginCall) {
        pluginCall.success(LocalNotification.buildLocalNotificationPendingList(this.notificationStorage.getSavedNotificationIds()));
    }

    @PluginMethod
    public void registerActionTypes(PluginCall pluginCall) {
        this.notificationStorage.writeActionGroup(NotificationAction.buildTypes(pluginCall.getArray("types")));
        pluginCall.success();
    }

    @PluginMethod
    public void areEnabled(PluginCall pluginCall) {
        JSObject jSObject = new JSObject();
        jSObject.put("value", this.manager.areNotificationsEnabled());
        pluginCall.success(jSObject);
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
}

