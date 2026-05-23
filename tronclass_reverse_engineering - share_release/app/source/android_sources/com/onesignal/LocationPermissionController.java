package com.onesignal;

import android.app.Activity;
import com.onesignal.AlertDialogPrepromptForAndroidSettings;
import com.onesignal.OneSignal;
import com.onesignal.PermissionsActivity;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
@Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0004\bÆ\u0002\u0018\u00002\u00020\u0001B\u0007\b\u0002¢\u0006\u0002\u0010\u0002J\b\u0010\u0005\u001a\u00020\u0006H\u0016J\u0010\u0010\u0007\u001a\u00020\u00062\u0006\u0010\b\u001a\u00020\tH\u0016J\u0010\u0010\n\u001a\u00020\u00062\u0006\u0010\u000b\u001a\u00020\fH\u0002J\u0016\u0010\r\u001a\u00020\u00062\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\u000e\u001a\u00020\u0004J\b\u0010\u000f\u001a\u00020\u0006H\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0082T¢\u0006\u0002\n\u0000¨\u0006\u0010"}, d2 = {"Lcom/onesignal/LocationPermissionController;", "Lcom/onesignal/PermissionsActivity$PermissionCallback;", "()V", "PERMISSION_TYPE", "", "onAccept", "", "onReject", "fallbackToSettings", "", "onResponse", "result", "Lcom/onesignal/OneSignal$PromptActionResult;", "prompt", "androidPermissionString", "showFallbackAlertDialog", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public final class LocationPermissionController implements PermissionsActivity.PermissionCallback {
    public static final LocationPermissionController INSTANCE;
    private static final String PERMISSION_TYPE = "LOCATION";

    private LocationPermissionController() {
    }

    static {
        LocationPermissionController locationPermissionController = new LocationPermissionController();
        INSTANCE = locationPermissionController;
        PermissionsActivity.registerAsCallback("LOCATION", locationPermissionController);
    }

    public final void prompt(boolean fallbackToSettings, String androidPermissionString) {
        Intrinsics.checkNotNullParameter(androidPermissionString, "androidPermissionString");
        PermissionsActivity.startPrompt(fallbackToSettings, "LOCATION", androidPermissionString, getClass());
    }

    private final void onResponse(OneSignal.PromptActionResult result) {
        LocationController.sendAndClearPromptHandlers(true, result);
    }

    @Override // com.onesignal.PermissionsActivity.PermissionCallback
    public void onAccept() {
        onResponse(OneSignal.PromptActionResult.PERMISSION_GRANTED);
        LocationController.startGetLocation();
    }

    @Override // com.onesignal.PermissionsActivity.PermissionCallback
    public void onReject(boolean fallbackToSettings) {
        onResponse(OneSignal.PromptActionResult.PERMISSION_DENIED);
        if (fallbackToSettings) {
            showFallbackAlertDialog();
        }
        LocationController.fireFailedComplete();
    }

    private final void showFallbackAlertDialog() {
        final Activity currentActivity = OneSignal.getCurrentActivity();
        if (currentActivity == null) {
            return;
        }
        AlertDialogPrepromptForAndroidSettings alertDialogPrepromptForAndroidSettings = AlertDialogPrepromptForAndroidSettings.INSTANCE;
        String string = currentActivity.getString(R.string.location_permission_name_for_title);
        Intrinsics.checkNotNullExpressionValue(string, "activity.getString(R.str…ermission_name_for_title)");
        String string2 = currentActivity.getString(R.string.location_permission_settings_message);
        Intrinsics.checkNotNullExpressionValue(string2, "activity.getString(R.str…mission_settings_message)");
        alertDialogPrepromptForAndroidSettings.show(currentActivity, string, string2, new AlertDialogPrepromptForAndroidSettings.Callback() { // from class: com.onesignal.LocationPermissionController.showFallbackAlertDialog.1
            @Override // com.onesignal.AlertDialogPrepromptForAndroidSettings.Callback
            public void onAccept() {
                NavigateToAndroidSettingsForLocation.INSTANCE.show(currentActivity);
                LocationController.sendAndClearPromptHandlers(true, OneSignal.PromptActionResult.PERMISSION_DENIED);
            }

            @Override // com.onesignal.AlertDialogPrepromptForAndroidSettings.Callback
            public void onDecline() {
                LocationController.sendAndClearPromptHandlers(true, OneSignal.PromptActionResult.PERMISSION_DENIED);
            }
        });
    }
}

