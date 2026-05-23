package com.onesignal;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.PendingIntent;
import android.content.DialogInterface;
import com.google.android.gms.common.GoogleApiAvailability;
class GooglePlayServicesUpgradePrompt {
    private static final int PLAY_SERVICES_RESOLUTION_REQUEST = 9000;

    GooglePlayServicesUpgradePrompt() {
    }

    private static boolean isGooglePlayStoreInstalled() {
        GetPackageInfoResult info = PackageInfoHelper.INSTANCE.getInfo(OneSignal.appContext, "com.google.android.gms", 128);
        if (!info.getSuccessful() || info.getPackageInfo() == null) {
            return false;
        }
        return !((String) info.getPackageInfo().applicationInfo.loadLabel(OneSignal.appContext.getPackageManager())).equals("Market");
    }

    static void showUpdateGPSDialog() {
        if (OSUtils.isAndroidDeviceType() && isGooglePlayStoreInstalled() && !OneSignal.getDisableGMSMissingPrompt() && !OneSignalPrefs.getBool(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_GT_DO_NOT_SHOW_MISSING_GPS, false)) {
            OSUtils.runOnMainUIThread(new Runnable() { // from class: com.onesignal.GooglePlayServicesUpgradePrompt.1
                @Override // java.lang.Runnable
                public void run() {
                    final Activity currentActivity = OneSignal.getCurrentActivity();
                    if (currentActivity == null) {
                        return;
                    }
                    String resourceString = OSUtils.getResourceString(currentActivity, "onesignal_gms_missing_alert_text", "To receive push notifications please press 'Update' to enable 'Google Play services'.");
                    String resourceString2 = OSUtils.getResourceString(currentActivity, "onesignal_gms_missing_alert_button_update", "Update");
                    String resourceString3 = OSUtils.getResourceString(currentActivity, "onesignal_gms_missing_alert_button_skip", "Skip");
                    new AlertDialog.Builder(currentActivity).setMessage(resourceString).setPositiveButton(resourceString2, new DialogInterface.OnClickListener() { // from class: com.onesignal.GooglePlayServicesUpgradePrompt.1.2
                        @Override // android.content.DialogInterface.OnClickListener
                        public void onClick(DialogInterface dialogInterface, int i) {
                            GooglePlayServicesUpgradePrompt.OpenPlayStoreToApp(currentActivity);
                        }
                    }).setNegativeButton(resourceString3, new DialogInterface.OnClickListener() { // from class: com.onesignal.GooglePlayServicesUpgradePrompt.1.1
                        @Override // android.content.DialogInterface.OnClickListener
                        public void onClick(DialogInterface dialogInterface, int i) {
                            OneSignalPrefs.saveBool(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_GT_DO_NOT_SHOW_MISSING_GPS, true);
                        }
                    }).setNeutralButton(OSUtils.getResourceString(currentActivity, "onesignal_gms_missing_alert_button_close", "Close"), (DialogInterface.OnClickListener) null).create().show();
                }
            });
        }
    }
    public static void OpenPlayStoreToApp(Activity activity) {
        try {
            GoogleApiAvailability googleApiAvailability = GoogleApiAvailability.getInstance();
            PendingIntent errorResolutionPendingIntent = googleApiAvailability.getErrorResolutionPendingIntent(activity, googleApiAvailability.isGooglePlayServicesAvailable(OneSignal.appContext), 9000);
            if (errorResolutionPendingIntent != null) {
                errorResolutionPendingIntent.send();
            }
        } catch (PendingIntent.CanceledException e) {
            e.printStackTrace();
        }
    }
}

