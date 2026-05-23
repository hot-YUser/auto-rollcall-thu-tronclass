package com.onesignal;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import com.onesignal.ActivityLifecycleHandler;
import com.onesignal.AndroidSupportV4Compat;
import java.util.HashMap;
public class PermissionsActivity extends Activity {
    private static final int DELAY_TIME_CALLBACK_CALL = 500;
    private static final String INTENT_EXTRA_ANDROID_PERMISSION_STRING = "INTENT_EXTRA_ANDROID_PERMISSION_STRING";
    private static final String INTENT_EXTRA_CALLBACK_CLASS = "INTENT_EXTRA_CALLBACK_CLASS";
    private static final String INTENT_EXTRA_PERMISSION_TYPE = "INTENT_EXTRA_PERMISSION_TYPE";
    private static final int ONESIGNAL_PERMISSION_REQUEST_CODE = 2;
    private static final int REQUEST_SETTINGS = 3;
    private static final String TAG = "com.onesignal.PermissionsActivity";
    private static ActivityLifecycleHandler.ActivityAvailableListener activityAvailableListener;
    private static final HashMap<String, PermissionCallback> callbackMap = new HashMap<>();
    private static boolean fallbackToSettings;
    private static boolean neverAskAgainClicked;
    private static boolean waiting;
    private String androidPermissionString;
    private String permissionRequestType;

    interface PermissionCallback {
        void onAccept();

        void onReject(boolean z);
    }

    public static void registerAsCallback(String str, PermissionCallback permissionCallback) {
        callbackMap.put(str, permissionCallback);
    }

    @Override // android.app.Activity
    protected void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        OneSignal.initWithContext(this);
        handleBundleParams(getIntent().getExtras());
    }

    @Override // android.app.Activity
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        handleBundleParams(intent.getExtras());
    }

    private void handleBundleParams(Bundle bundle) {
        reregisterCallbackHandlers(bundle);
        this.permissionRequestType = bundle.getString(INTENT_EXTRA_PERMISSION_TYPE);
        String string = bundle.getString(INTENT_EXTRA_ANDROID_PERMISSION_STRING);
        this.androidPermissionString = string;
        requestPermission(string);
    }

    private void reregisterCallbackHandlers(Bundle bundle) {
        String string = bundle.getString(INTENT_EXTRA_CALLBACK_CLASS);
        try {
            Class.forName(string);
        } catch (ClassNotFoundException unused) {
            throw new RuntimeException("Could not find callback class for PermissionActivity: " + string);
        }
    }

    private void requestPermission(String str) {
        if (waiting) {
            return;
        }
        waiting = true;
        neverAskAgainClicked = !AndroidSupportV4Compat.ActivityCompat.shouldShowRequestPermissionRationale(this, str);
        AndroidSupportV4Compat.ActivityCompat.requestPermissions(this, new String[]{str}, 2);
    }

    @Override // android.app.Activity
    public void onRequestPermissionsResult(int i, String[] strArr, final int[] iArr) {
        waiting = false;
        if (i == 2) {
            new Handler().postDelayed(new Runnable() { // from class: com.onesignal.PermissionsActivity.1
                @Override // java.lang.Runnable
                public void run() {
                    int[] iArr2 = iArr;
                    boolean z = false;
                    if (iArr2.length > 0 && iArr2[0] == 0) {
                        z = true;
                    }
                    PermissionCallback permissionCallback = (PermissionCallback) PermissionsActivity.callbackMap.get(PermissionsActivity.this.permissionRequestType);
                    if (permissionCallback == null) {
                        throw new RuntimeException("Missing handler for permissionRequestType: " + PermissionsActivity.this.permissionRequestType);
                    }
                    if (!z) {
                        permissionCallback.onReject(PermissionsActivity.this.shouldShowSettings());
                    } else {
                        permissionCallback.onAccept();
                    }
                }
            }, 500L);
        }
        ActivityLifecycleHandler activityLifecycleHandler = ActivityLifecycleListener.getActivityLifecycleHandler();
        if (activityLifecycleHandler != null) {
            activityLifecycleHandler.removeActivityAvailableListener(TAG);
        }
        finish();
        overridePendingTransition(R.anim.onesignal_fade_in, R.anim.onesignal_fade_out);
    }
    public boolean shouldShowSettings() {
        return fallbackToSettings && neverAskAgainClicked && !AndroidSupportV4Compat.ActivityCompat.shouldShowRequestPermissionRationale(this, this.androidPermissionString);
    }

    static void startPrompt(boolean z, final String str, final String str2, final Class<?> cls) {
        if (waiting) {
            return;
        }
        fallbackToSettings = z;
        activityAvailableListener = new ActivityLifecycleHandler.ActivityAvailableListener() { // from class: com.onesignal.PermissionsActivity.2
            @Override // com.onesignal.ActivityLifecycleHandler.ActivityAvailableListener
            public void available(Activity activity) {
                if (activity.getClass().equals(PermissionsActivity.class)) {
                    return;
                }
                Intent intent = new Intent(activity, (Class<?>) PermissionsActivity.class);
                intent.setFlags(131072);
                intent.putExtra(PermissionsActivity.INTENT_EXTRA_PERMISSION_TYPE, str).putExtra(PermissionsActivity.INTENT_EXTRA_ANDROID_PERMISSION_STRING, str2).putExtra(PermissionsActivity.INTENT_EXTRA_CALLBACK_CLASS, cls.getName());
                activity.startActivity(intent);
                activity.overridePendingTransition(R.anim.onesignal_fade_in, R.anim.onesignal_fade_out);
            }
        };
        ActivityLifecycleHandler activityLifecycleHandler = ActivityLifecycleListener.getActivityLifecycleHandler();
        if (activityLifecycleHandler != null) {
            activityLifecycleHandler.addActivityAvailableListener(TAG, activityAvailableListener);
        }
    }
}

