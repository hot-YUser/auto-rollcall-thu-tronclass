package com.onesignal;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.res.Resources;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.DeadSystemException;
import android.os.Handler;
import android.os.Looper;
import android.telephony.TelephonyManager;
import android.text.TextUtils;
import androidx.core.app.NotificationManagerCompat;
import com.getcapacitor.Bridge;
import com.google.android.gms.location.LocationListener;
import com.google.firebase.messaging.FirebaseMessaging;
import com.huawei.agconnect.config.AGConnectServicesConfig;
import com.huawei.hms.aaid.HmsInstanceId;
import com.huawei.hms.api.HuaweiApiAvailability;
import com.huawei.hms.location.LocationCallback;
import com.onesignal.OneSignal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Random;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.regex.Pattern;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.opencv.videoio.Videoio;
class OSUtils {
    private static final int HMS_AVAILABLE_SUCCESSFUL = 0;
    private static final String HMS_CORE_SERVICES_PACKAGE = "com.huawei.hwid";
    public static int MAX_NETWORK_REQUEST_ATTEMPT_COUNT = 3;
    static final int[] NO_RETRY_NETWROK_REQUEST_STATUS_CODES = {Videoio.CAP_PROP_XI_DATA_FORMAT, Videoio.CAP_PROP_XI_OFFSET_X, Videoio.CAP_PROP_XI_OFFSET_Y, Videoio.CAP_PROP_XI_TRG_SOURCE, Videoio.CAP_PROP_XI_GPO_MODE};
    private static final String PREFER_HMS_METADATA_NAME = "com.onesignal.preferHMS";
    public static final int UNINITIALIZABLE_STATUS = -999;

    private static boolean opaqueHasClass(Class<?> cls) {
        return true;
    }

    OSUtils() {
    }

    public enum SchemaType {
        DATA("data"),
        HTTPS(Bridge.CAPACITOR_HTTPS_SCHEME),
        HTTP(Bridge.CAPACITOR_HTTP_SCHEME);

        private final String text;

        SchemaType(String str) {
            this.text = str;
        }

        public static SchemaType fromString(String str) {
            for (SchemaType schemaType : values()) {
                if (schemaType.text.equalsIgnoreCase(str)) {
                    return schemaType;
                }
            }
            return null;
        }
    }

    public static boolean shouldRetryNetworkRequest(int i) {
        for (int i2 : NO_RETRY_NETWROK_REQUEST_STATUS_CODES) {
            if (i == i2) {
                return false;
            }
        }
        return true;
    }

    int initializationChecker(Context context, String str) {
        Integer numCheckForGooglePushLibrary;
        int deviceType = getDeviceType();
        try {
            UUID.fromString(str);
            if ("b2f7f966-d8cc-11e4-bed1-df8f05be55ba".equals(str) || "5eb5a37e-b458-11e3-ac11-000c2940e62c".equals(str)) {
                OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "OneSignal Example AppID detected, please update to your app's id found on OneSignal.com");
            }
            int iIntValue = 1;
            if (deviceType == 1 && (numCheckForGooglePushLibrary = checkForGooglePushLibrary()) != null) {
                iIntValue = numCheckForGooglePushLibrary.intValue();
            }
            Integer numCheckAndroidSupportLibrary = checkAndroidSupportLibrary(context);
            return numCheckAndroidSupportLibrary != null ? numCheckAndroidSupportLibrary.intValue() : iIntValue;
        } catch (Throwable th) {
            OneSignal.Log(OneSignal.LOG_LEVEL.FATAL, "OneSignal AppId format is invalid.\nExample: 'b2f7f966-d8cc-11e4-bed1-df8f05be55ba'\n", th);
            return UNINITIALIZABLE_STATUS;
        }
    }

    static boolean hasFCMLibrary() {
        try {
            return opaqueHasClass(FirebaseMessaging.class);
        } catch (NoClassDefFoundError unused) {
            return false;
        }
    }

    static boolean hasGMSLocationLibrary() {
        try {
            return opaqueHasClass(LocationListener.class);
        } catch (NoClassDefFoundError unused) {
            return false;
        }
    }

    private static boolean hasHMSAvailabilityLibrary() {
        try {
            return opaqueHasClass(HuaweiApiAvailability.class);
        } catch (NoClassDefFoundError unused) {
            return false;
        }
    }

    private static boolean hasHMSPushKitLibrary() {
        try {
            return opaqueHasClass(HmsInstanceId.class);
        } catch (NoClassDefFoundError unused) {
            return false;
        }
    }

    private static boolean hasHMSAGConnectLibrary() {
        try {
            return opaqueHasClass(AGConnectServicesConfig.class);
        } catch (NoClassDefFoundError unused) {
            return false;
        }
    }

    static boolean hasHMSLocationLibrary() {
        try {
            return opaqueHasClass(LocationCallback.class);
        } catch (NoClassDefFoundError unused) {
            return false;
        }
    }

    static boolean hasAllHMSLibrariesForPushKit() {
        return hasHMSAGConnectLibrary() && hasHMSPushKitLibrary();
    }

    Integer checkForGooglePushLibrary() {
        if (hasFCMLibrary()) {
            return null;
        }
        OneSignal.Log(OneSignal.LOG_LEVEL.FATAL, "The Firebase FCM library is missing! Please make sure to include it in your project.");
        return -4;
    }

    private static boolean hasWakefulBroadcastReceiver() {
        return true;
    }

    private static boolean hasNotificationManagerCompat() {
        return true;
    }

    private static boolean hasJobIntentService() {
        return true;
    }

    private Integer checkAndroidSupportLibrary(Context context) {
        boolean zHasWakefulBroadcastReceiver = hasWakefulBroadcastReceiver();
        boolean zHasNotificationManagerCompat = hasNotificationManagerCompat();
        if (!zHasWakefulBroadcastReceiver && !zHasNotificationManagerCompat) {
            OneSignal.Log(OneSignal.LOG_LEVEL.FATAL, "Could not find the Android Support Library. Please make sure it has been correctly added to your project.");
            return -3;
        }
        if (!zHasWakefulBroadcastReceiver || !zHasNotificationManagerCompat) {
            OneSignal.Log(OneSignal.LOG_LEVEL.FATAL, "The included Android Support Library is to old or incomplete. Please update to the 26.0.0 revision or newer.");
            return -5;
        }
        if (Build.VERSION.SDK_INT < 26 || getTargetSdkVersion(context) < 26 || hasJobIntentService()) {
            return null;
        }
        OneSignal.Log(OneSignal.LOG_LEVEL.FATAL, "The included Android Support Library is to old or incomplete. Please update to the 26.0.0 revision or newer.");
        return -5;
    }

    private static boolean packageInstalledAndEnabled(String str) {
        PackageInfo packageInfo;
        GetPackageInfoResult info = PackageInfoHelper.INSTANCE.getInfo(OneSignal.appContext, str, 128);
        if (info.getSuccessful() && (packageInfo = info.getPackageInfo()) != null) {
            return packageInfo.applicationInfo.enabled;
        }
        return false;
    }

    static boolean isGMSInstalledAndEnabled() {
        return packageInstalledAndEnabled("com.google.android.gms");
    }

    private static boolean isHMSCoreInstalledAndEnabled() {
        try {
            return HuaweiApiAvailability.getInstance().isHuaweiMobileServicesAvailable(OneSignal.appContext) == 0;
        } catch (RuntimeException e) {
            if (e.getCause() instanceof DeadSystemException) {
                return false;
            }
            throw e;
        }
    }

    private static boolean isHMSCoreInstalledAndEnabledFallback() {
        return packageInstalledAndEnabled(HMS_CORE_SERVICES_PACKAGE);
    }

    private boolean supportsADM() {
        try {
            Class.forName("com.amazon.device.messaging.ADM");
            return true;
        } catch (ClassNotFoundException unused) {
            return false;
        }
    }

    private boolean supportsHMS() {
        if (hasHMSAvailabilityLibrary() && hasAllHMSLibrariesForPushKit()) {
            return isHMSCoreInstalledAndEnabled();
        }
        return false;
    }

    private boolean supportsGooglePush() {
        if (hasFCMLibrary()) {
            return isGMSInstalledAndEnabled();
        }
        return false;
    }

    int getDeviceType() {
        if (supportsADM()) {
            return 2;
        }
        boolean zSupportsHMS = supportsHMS();
        boolean zSupportsGooglePush = supportsGooglePush();
        if (zSupportsGooglePush && zSupportsHMS) {
            Context context = OneSignal.appContext;
            return (context == null || !getManifestMetaBoolean(context, PREFER_HMS_METADATA_NAME)) ? 1 : 13;
        }
        if (zSupportsGooglePush) {
            return 1;
        }
        if (zSupportsHMS) {
            return 13;
        }
        return (!isGMSInstalledAndEnabled() && isHMSCoreInstalledAndEnabledFallback()) ? 13 : 1;
    }

    static boolean isAndroidDeviceType() {
        return new OSUtils().getDeviceType() == 1;
    }

    static boolean isFireOSDeviceType() {
        return new OSUtils().getDeviceType() == 2;
    }

    static boolean isHuaweiDeviceType() {
        return new OSUtils().getDeviceType() == 13;
    }

    Integer getNetType() {
        NetworkInfo activeNetworkInfo = ((ConnectivityManager) OneSignal.appContext.getSystemService("connectivity")).getActiveNetworkInfo();
        if (activeNetworkInfo == null) {
            return null;
        }
        int type = activeNetworkInfo.getType();
        if (type == 1 || type == 9) {
            return 0;
        }
        return 1;
    }

    String getCarrierName() {
        try {
            String networkOperatorName = ((TelephonyManager) OneSignal.appContext.getSystemService("phone")).getNetworkOperatorName();
            if ("".equals(networkOperatorName)) {
                return null;
            }
            return networkOperatorName;
        } catch (Throwable th) {
            th.printStackTrace();
            return null;
        }
    }

    static Bundle getManifestMetaBundle(Context context) {
        ApplicationInfo info = ApplicationInfoHelper.INSTANCE.getInfo(context);
        if (info == null) {
            return null;
        }
        return info.metaData;
    }

    static boolean getManifestMetaBoolean(Context context, String str) {
        Bundle manifestMetaBundle = getManifestMetaBundle(context);
        if (manifestMetaBundle != null) {
            return manifestMetaBundle.getBoolean(str);
        }
        return false;
    }

    static String getManifestMeta(Context context, String str) {
        Bundle manifestMetaBundle = getManifestMetaBundle(context);
        if (manifestMetaBundle != null) {
            return manifestMetaBundle.getString(str);
        }
        return null;
    }

    static String getResourceString(Context context, String str, String str2) {
        Resources resources = context.getResources();
        int identifier = resources.getIdentifier(str, "string", context.getPackageName());
        return identifier != 0 ? resources.getString(identifier) : str2;
    }

    static boolean isValidEmail(String str) {
        if (str == null) {
            return false;
        }
        return Pattern.compile("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$").matcher(str).matches();
    }

    static boolean isStringNotEmpty(String str) {
        return !TextUtils.isEmpty(str);
    }

    static boolean areNotificationsEnabled(Context context) {
        try {
            return NotificationManagerCompat.from(OneSignal.appContext).areNotificationsEnabled();
        } catch (Throwable unused) {
            return true;
        }
    }

    static boolean isRunningOnMainThread() {
        return Thread.currentThread().equals(Looper.getMainLooper().getThread());
    }

    static void runOnMainUIThread(Runnable runnable) {
        if (Looper.getMainLooper().getThread() == Thread.currentThread()) {
            runnable.run();
        } else {
            new Handler(Looper.getMainLooper()).post(runnable);
        }
    }

    static void runOnMainThreadDelayed(Runnable runnable, int i) {
        new Handler(Looper.getMainLooper()).postDelayed(runnable, i);
    }

    static int getTargetSdkVersion(Context context) {
        ApplicationInfo info = ApplicationInfoHelper.INSTANCE.getInfo(context);
        if (info == null) {
            return 15;
        }
        return info.targetSdkVersion;
    }

    static boolean isValidResourceName(String str) {
        return (str == null || str.matches("^[0-9]")) ? false : true;
    }

    static Uri getSoundUri(Context context, String str) {
        int identifier;
        Resources resources = context.getResources();
        String packageName = context.getPackageName();
        if (isValidResourceName(str) && (identifier = resources.getIdentifier(str, "raw", packageName)) != 0) {
            return Uri.parse("android.resource://" + packageName + "/" + identifier);
        }
        int identifier2 = resources.getIdentifier("onesignal_default_sound", "raw", packageName);
        if (identifier2 != 0) {
            return Uri.parse("android.resource://" + packageName + "/" + identifier2);
        }
        return null;
    }

    static long[] parseVibrationPattern(JSONObject jSONObject) {
        JSONArray jSONArray;
        try {
            Object objOpt = jSONObject.opt("vib_pt");
            if (objOpt instanceof String) {
                jSONArray = new JSONArray((String) objOpt);
            } else {
                jSONArray = (JSONArray) objOpt;
            }
            long[] jArr = new long[jSONArray.length()];
            for (int i = 0; i < jSONArray.length(); i++) {
                jArr[i] = jSONArray.optLong(i);
            }
            return jArr;
        } catch (JSONException unused) {
            return null;
        }
    }

    static void sleep(int i) {
        try {
            Thread.sleep(i);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    static void openURLInBrowser(String str) {
        openURLInBrowser(Uri.parse(str.trim()));
    }

    private static void openURLInBrowser(Uri uri) {
        OneSignal.appContext.startActivity(openURLInBrowserIntent(uri));
    }

    static Intent openURLInBrowserIntent(Uri uri) {
        Intent intentMakeMainSelectorActivity;
        SchemaType schemaTypeFromString = uri.getScheme() != null ? SchemaType.fromString(uri.getScheme()) : null;
        if (schemaTypeFromString == null) {
            schemaTypeFromString = SchemaType.HTTP;
            if (!uri.toString().contains("://")) {
                uri = Uri.parse("http://" + uri.toString());
            }
        }
        if (AnonymousClass1.$SwitchMap$com$onesignal$OSUtils$SchemaType[schemaTypeFromString.ordinal()] == 1) {
            intentMakeMainSelectorActivity = Intent.makeMainSelectorActivity("android.intent.action.MAIN", "android.intent.category.APP_BROWSER");
            intentMakeMainSelectorActivity.setData(uri);
        } else {
            intentMakeMainSelectorActivity = new Intent("android.intent.action.VIEW", uri);
        }
        intentMakeMainSelectorActivity.addFlags(268435456);
        return intentMakeMainSelectorActivity;
    }
    static /* synthetic */ class AnonymousClass1 {
        static final /* synthetic */ int[] $SwitchMap$com$onesignal$OSUtils$SchemaType;

        static {
            int[] iArr = new int[SchemaType.values().length];
            $SwitchMap$com$onesignal$OSUtils$SchemaType = iArr;
            try {
                iArr[SchemaType.DATA.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                $SwitchMap$com$onesignal$OSUtils$SchemaType[SchemaType.HTTPS.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                $SwitchMap$com$onesignal$OSUtils$SchemaType[SchemaType.HTTP.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    static <T> Set<T> newConcurrentSet() {
        return Collections.newSetFromMap(new ConcurrentHashMap());
    }

    static Set<String> newStringSetFromJSONArray(JSONArray jSONArray) throws JSONException {
        HashSet hashSet = new HashSet();
        for (int i = 0; i < jSONArray.length(); i++) {
            hashSet.add(jSONArray.getString(i));
        }
        return hashSet;
    }

    static boolean hasConfigChangeFlag(Activity activity, int i) {
        try {
            return (activity.getPackageManager().getActivityInfo(activity.getComponentName(), 0).configChanges & i) != 0;
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
            return false;
        }
    }

    static Collection<String> extractStringsFromCollection(Collection<Object> collection) {
        ArrayList arrayList = new ArrayList();
        if (collection == null) {
            return arrayList;
        }
        for (Object obj : collection) {
            if (obj instanceof String) {
                arrayList.add((String) obj);
            }
        }
        return arrayList;
    }

    static Bundle jsonStringToBundle(String str) {
        try {
            JSONObject jSONObject = new JSONObject(str);
            Bundle bundle = new Bundle();
            Iterator<String> itKeys = jSONObject.keys();
            while (itKeys.hasNext()) {
                String next = itKeys.next();
                bundle.putString(next, jSONObject.getString(next));
            }
            return bundle;
        } catch (JSONException e) {
            e.printStackTrace();
            return null;
        }
    }

    static boolean shouldLogMissingAppIdError(String str) {
        if (str != null) {
            return false;
        }
        OneSignal.Log(OneSignal.LOG_LEVEL.INFO, "OneSignal was not initialized, ensure to always initialize OneSignal from the onCreate of your Application class.");
        return true;
    }

    static int getRandomDelay(int i, int i2) {
        return new Random().nextInt((i2 + 1) - i) + i;
    }

    static Throwable getRootCauseThrowable(Throwable th) {
        while (th.getCause() != null && th.getCause() != th) {
            th = th.getCause();
        }
        return th;
    }

    static String getRootCauseMessage(Throwable th) {
        return getRootCauseThrowable(th).getMessage();
    }

    static void startThreadWithRetry(Thread thread) {
        boolean z = false;
        while (!z) {
            try {
                thread.start();
                z = true;
            } catch (OutOfMemoryError unused) {
                try {
                    Thread.sleep(250L);
                } catch (InterruptedException unused2) {
                }
            }
        }
    }
}

