package com.getcapacitor.plugin;

import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.ApplicationInfo;
import android.os.Build;
import android.os.Environment;
import android.os.StatFs;
import android.provider.Settings;
import androidx.core.app.NotificationCompat;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import java.util.Locale;
@NativePlugin
public class Device extends Plugin {
    @PluginMethod
    public void getInfo(PluginCall pluginCall) {
        JSObject jSObject = new JSObject();
        jSObject.put("memUsed", getMemUsed());
        jSObject.put("diskFree", getDiskFree());
        jSObject.put("diskTotal", getDiskTotal());
        jSObject.put("model", Build.MODEL);
        jSObject.put("operatingSystem", "android");
        jSObject.put("osVersion", Build.VERSION.RELEASE);
        jSObject.put("appVersion", getAppVersion());
        jSObject.put("appBuild", getAppBuild());
        jSObject.put("appId", getAppBundleId());
        jSObject.put("appName", getAppName());
        jSObject.put("platform", getPlatform());
        jSObject.put("manufacturer", Build.MANUFACTURER);
        jSObject.put("uuid", getUuid());
        jSObject.put("isVirtual", isVirtual());
        pluginCall.success(jSObject);
    }

    @PluginMethod
    public void getBatteryInfo(PluginCall pluginCall) {
        JSObject jSObject = new JSObject();
        jSObject.put("batteryLevel", getBatteryLevel());
        jSObject.put("isCharging", isCharging());
        pluginCall.success(jSObject);
    }

    @PluginMethod
    public void getLanguageCode(PluginCall pluginCall) {
        JSObject jSObject = new JSObject();
        jSObject.put("value", Locale.getDefault().getLanguage());
        pluginCall.success(jSObject);
    }

    private long getMemUsed() {
        Runtime runtime = Runtime.getRuntime();
        return runtime.totalMemory() - runtime.freeMemory();
    }

    private long getDiskFree() {
        StatFs statFs = new StatFs(Environment.getRootDirectory().getAbsolutePath());
        return statFs.getAvailableBlocksLong() * statFs.getBlockSizeLong();
    }

    private long getDiskTotal() {
        StatFs statFs = new StatFs(Environment.getRootDirectory().getAbsolutePath());
        return statFs.getBlockCountLong() * statFs.getBlockSizeLong();
    }

    private String getAppVersion() {
        try {
            return getContext().getPackageManager().getPackageInfo(getContext().getPackageName(), 0).versionName;
        } catch (Exception unused) {
            return "";
        }
    }

    private String getAppBuild() {
        try {
            return Integer.toString(getContext().getPackageManager().getPackageInfo(getContext().getPackageName(), 0).versionCode);
        } catch (Exception unused) {
            return "";
        }
    }

    private String getAppBundleId() {
        try {
            return getContext().getPackageManager().getPackageInfo(getContext().getPackageName(), 0).packageName;
        } catch (Exception unused) {
            return "";
        }
    }

    private String getAppName() {
        try {
            ApplicationInfo applicationInfo = getContext().getApplicationInfo();
            int i = applicationInfo.labelRes;
            return i == 0 ? applicationInfo.nonLocalizedLabel.toString() : getContext().getString(i);
        } catch (Exception unused) {
            return "";
        }
    }

    private String getPlatform() {
        return "android";
    }

    private String getUuid() {
        return Settings.Secure.getString(this.bridge.getContext().getContentResolver(), "android_id");
    }

    private float getBatteryLevel() {
        int intExtra;
        Intent intentRegisterReceiver = getContext().registerReceiver(null, new IntentFilter("android.intent.action.BATTERY_CHANGED"));
        int i = -1;
        if (intentRegisterReceiver != null) {
            int intExtra2 = intentRegisterReceiver.getIntExtra("level", -1);
            intExtra = intentRegisterReceiver.getIntExtra("scale", -1);
            i = intExtra2;
        } else {
            intExtra = -1;
        }
        return i / intExtra;
    }

    private boolean isCharging() {
        Intent intentRegisterReceiver = getContext().registerReceiver(null, new IntentFilter("android.intent.action.BATTERY_CHANGED"));
        if (intentRegisterReceiver == null) {
            return false;
        }
        int intExtra = intentRegisterReceiver.getIntExtra(NotificationCompat.CATEGORY_STATUS, -1);
        return intExtra == 2 || intExtra == 5;
    }

    private boolean isVirtual() {
        return Build.FINGERPRINT.contains("generic") || Build.PRODUCT.contains("sdk");
    }
}

