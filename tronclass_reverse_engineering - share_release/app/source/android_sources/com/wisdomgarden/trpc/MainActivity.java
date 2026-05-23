package com.wisdomgarden.trpc;

import android.content.Intent;
import android.content.SharedPreferences;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import androidx.core.graphics.Insets;
import androidx.core.view.OnApplyWindowInsetsListener;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import com.bkon.capacitor.DarkMode.DarkMode;
import com.bkon.capacitor.screenorientation.ScreenOrientation;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginHandle;
import com.go.capacitor.keepscreenon.CapacitorKeepScreenOn;
import com.jeep.plugin.capacitor.CapacitorDataStorageSqlite;
import com.tchvu3.capvoicerecorder.VoiceRecorder;
import com.wisdomgarden.capacitor.barcodescanner.BarcodeScanner;
import com.wisdomgarden.mobile.CapacitorUpdater;
import com.wisdomgarden.mobile.WriteFilePermission;
import com.wisdomgarden.mobile.beacon.Beacon;
import com.wisdomgarden.plugins.edgeui.EdgeUiPlugin;
import com.wisdomgarden.plugins.geolocation.NativeGeolocation;
import com.wisdomgarden.trpc.mediapicker.MediaPicker;
import java.util.ArrayList;
import org.apache.cordova.inappbrowser.WBH5FaceVerifySDK;
public class MainActivity extends BridgeActivity {
    private void clearOneSignalUserState() {
        SharedPreferences.Editor editorEdit = getApplicationContext().getSharedPreferences("OneSignal", 0).edit();
        editorEdit.remove("ONESIGNAL_USERSTATE_SYNCVALYES_emailTOSYNC_STATE");
        editorEdit.remove("ONESIGNAL_USERSTATE_SYNCVALYES_TOSYNC_STATE");
        editorEdit.remove("ONESIGNAL_USERSTATE_SYNCVALYES_CURRENT_STATE");
        editorEdit.commit();
    }

    private void enableEdgeToEdge() {
        if (Build.VERSION.SDK_INT < 34) {
            return;
        }
        Window window = getWindow();
        final View decorView = window.getDecorView();
        WindowCompat.setDecorFitsSystemWindows(window, false);
        ViewCompat.setOnApplyWindowInsetsListener(decorView, new OnApplyWindowInsetsListener() { // from class: com.wisdomgarden.trpc.MainActivity$$ExternalSyntheticLambda0
            @Override // androidx.core.view.OnApplyWindowInsetsListener
            public final WindowInsetsCompat onApplyWindowInsets(View view, WindowInsetsCompat windowInsetsCompat) {
                return MainActivity.lambda$enableEdgeToEdge$0(decorView, view, windowInsetsCompat);
            }
        });
    }

    static /* synthetic */ WindowInsetsCompat lambda$enableEdgeToEdge$0(View view, View view2, WindowInsetsCompat windowInsetsCompat) {
        Insets insets = windowInsetsCompat.getInsets(WindowInsetsCompat.Type.systemBars() | WindowInsetsCompat.Type.displayCutout());
        view.setPadding(insets.left, insets.top, insets.right, insets.bottom);
        return WindowInsetsCompat.CONSUMED;
    }

    @Override // com.getcapacitor.BridgeActivity, androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, androidx.core.app.ComponentActivity, android.app.Activity
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        enableEdgeToEdge();
        clearOneSignalUserState();
        init(bundle, new ArrayList<Class<? extends Plugin>>() { // from class: com.wisdomgarden.trpc.MainActivity.1
            {
                add(VoiceRecorder.class);
                add(CapacitorDataStorageSqlite.class);
                add(CapacitorKeepScreenOn.class);
                add(WriteFilePermission.class);
                add(ScreenOrientation.class);
                add(BarcodeScanner.class);
                add(DarkMode.class);
                add(CapacitorUpdater.class);
                add(NativeGeolocation.class);
                add(MediaPicker.class);
                add(Beacon.class);
                add(EdgeUiPlugin.class);
            }
        });
    }

    @Override // androidx.appcompat.app.AppCompatActivity, android.view.ContextThemeWrapper, android.content.ContextWrapper, android.content.Context
    public Resources getResources() {
        Resources resources = super.getResources();
        resources.getConfiguration().fontScale = 1.0f;
        resources.updateConfiguration(null, null);
        return resources;
    }

    @Override // com.getcapacitor.BridgeActivity, androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, android.app.Activity
    public void onActivityResult(int i, int i2, Intent intent) {
        super.onActivityResult(i, i2, intent);
        WBH5FaceVerifySDK instanceWithoutCreate = WBH5FaceVerifySDK.getInstanceWithoutCreate();
        if (instanceWithoutCreate != null) {
            instanceWithoutCreate.receiveH5FaceVerifyResult(i, i2, intent);
        }
    }

    @Override // androidx.appcompat.app.AppCompatActivity, androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, android.app.Activity, android.content.ComponentCallbacks
    public void onConfigurationChanged(Configuration configuration) {
        super.onConfigurationChanged(configuration);
        PluginHandle plugin = getBridge().getPlugin("DarkMode");
        if (plugin != null) {
            ((DarkMode) plugin.getInstance()).notifyWeb();
        }
    }
}

