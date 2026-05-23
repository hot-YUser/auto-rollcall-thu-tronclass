package cordova.plugins;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.net.ConnectivityManager;
import android.net.Uri;
import android.os.BatteryManager;
import android.os.Build;
import android.provider.Settings;
import android.util.Log;
import android.view.accessibility.AccessibilityManager;
import androidx.core.app.ActivityCompat;
import com.sarriaroman.PhotoViewer.PhotoViewer;
import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import kotlin.time.DurationKt;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class Diagnostic extends CordovaPlugin {
    public static final String CPU_ARCH_ARMv6 = "ARMv6";
    public static final String CPU_ARCH_ARMv7 = "ARMv7";
    public static final String CPU_ARCH_ARMv8 = "ARMv8";
    public static final String CPU_ARCH_MIPS = "MIPS";
    public static final String CPU_ARCH_MIPS_64 = "MIPS_64";
    public static final String CPU_ARCH_UNKNOWN = "unknown";
    public static final String CPU_ARCH_X86 = "X86";
    public static final String CPU_ARCH_X86_64 = "X86_64";
    protected static final String STATUS_DENIED_ALWAYS = "DENIED_ALWAYS";
    protected static final String STATUS_DENIED_ONCE = "DENIED_ONCE";
    protected static final String STATUS_GRANTED = "GRANTED";
    protected static final String STATUS_NOT_REQUESTED = "NOT_REQUESTED";
    public static final String TAG = "Diagnostic";
    public static Diagnostic instance;
    protected static final Map<String, Integer> maxSdkPermissionMap;
    protected static final Map<String, Integer> minSdkPermissionMap;
    protected static final Map<String, String> permissionsMap;
    protected Context applicationContext;
    protected CallbackContext currentContext;
    protected SharedPreferences.Editor editor;
    protected SharedPreferences sharedPref;
    protected HashMap<String, CallbackContext> callbackContexts = new HashMap<>();
    protected HashMap<String, JSONObject> permissionStatuses = new HashMap<>();
    boolean debugEnabled = false;

    static {
        HashMap map = new HashMap();
        addBiDirMapEntry(map, "ACCESS_COARSE_LOCATION", "android.permission.ACCESS_COARSE_LOCATION");
        addBiDirMapEntry(map, "ACCESS_FINE_LOCATION", "android.permission.ACCESS_FINE_LOCATION");
        addBiDirMapEntry(map, "ADD_VOICEMAIL", "android.permission.ADD_VOICEMAIL");
        addBiDirMapEntry(map, "BODY_SENSORS", "android.permission.BODY_SENSORS");
        addBiDirMapEntry(map, "CALL_PHONE", "android.permission.CALL_PHONE");
        addBiDirMapEntry(map, "CAMERA", "android.permission.CAMERA");
        addBiDirMapEntry(map, "GET_ACCOUNTS", "android.permission.GET_ACCOUNTS");
        addBiDirMapEntry(map, "PROCESS_OUTGOING_CALLS", "android.permission.PROCESS_OUTGOING_CALLS");
        addBiDirMapEntry(map, "READ_CALENDAR", "android.permission.READ_CALENDAR");
        addBiDirMapEntry(map, "READ_CALL_LOG", "android.permission.READ_CALL_LOG");
        addBiDirMapEntry(map, "READ_CONTACTS", "android.permission.READ_CONTACTS");
        addBiDirMapEntry(map, "READ_EXTERNAL_STORAGE", PhotoViewer.READ);
        addBiDirMapEntry(map, "READ_PHONE_STATE", "android.permission.READ_PHONE_STATE");
        addBiDirMapEntry(map, "READ_SMS", "android.permission.READ_SMS");
        addBiDirMapEntry(map, "RECEIVE_MMS", "android.permission.RECEIVE_MMS");
        addBiDirMapEntry(map, "RECEIVE_SMS", "android.permission.RECEIVE_SMS");
        addBiDirMapEntry(map, "RECEIVE_WAP_PUSH", "android.permission.RECEIVE_WAP_PUSH");
        addBiDirMapEntry(map, "RECORD_AUDIO", "android.permission.RECORD_AUDIO");
        addBiDirMapEntry(map, "SEND_SMS", "android.permission.SEND_SMS");
        addBiDirMapEntry(map, "USE_SIP", "android.permission.USE_SIP");
        addBiDirMapEntry(map, "WRITE_CALENDAR", "android.permission.WRITE_CALENDAR");
        addBiDirMapEntry(map, "WRITE_CALL_LOG", "android.permission.WRITE_CALL_LOG");
        addBiDirMapEntry(map, "WRITE_CONTACTS", "android.permission.WRITE_CONTACTS");
        addBiDirMapEntry(map, "WRITE_EXTERNAL_STORAGE", PhotoViewer.WRITE);
        addBiDirMapEntry(map, "ANSWER_PHONE_CALLS", "android.permission.ANSWER_PHONE_CALLS");
        addBiDirMapEntry(map, "READ_PHONE_NUMBERS", "android.permission.READ_PHONE_NUMBERS");
        addBiDirMapEntry(map, "ACCEPT_HANDOVER", "android.permission.ACCEPT_HANDOVER");
        addBiDirMapEntry(map, "ACCESS_BACKGROUND_LOCATION", "android.permission.ACCESS_BACKGROUND_LOCATION");
        addBiDirMapEntry(map, "ACCESS_MEDIA_LOCATION", "android.permission.ACCESS_MEDIA_LOCATION");
        addBiDirMapEntry(map, "ACTIVITY_RECOGNITION", "android.permission.ACTIVITY_RECOGNITION");
        addBiDirMapEntry(map, "BLUETOOTH_ADVERTISE", "android.permission.BLUETOOTH_ADVERTISE");
        addBiDirMapEntry(map, "BLUETOOTH_CONNECT", "android.permission.BLUETOOTH_CONNECT");
        addBiDirMapEntry(map, "BLUETOOTH_SCAN", "android.permission.BLUETOOTH_SCAN");
        addBiDirMapEntry(map, "UWB_RANGING", "android.permission.UWB_RANGING");
        addBiDirMapEntry(map, "BODY_SENSORS_BACKGROUND", "android.permission.BODY_SENSORS_BACKGROUND");
        addBiDirMapEntry(map, "NEARBY_WIFI_DEVICES", "android.permission.NEARBY_WIFI_DEVICES");
        addBiDirMapEntry(map, "POST_NOTIFICATIONS", "android.permission.POST_NOTIFICATIONS");
        addBiDirMapEntry(map, "READ_MEDIA_AUDIO", "android.permission.READ_MEDIA_AUDIO");
        addBiDirMapEntry(map, "READ_MEDIA_IMAGES", "android.permission.READ_MEDIA_IMAGES");
        addBiDirMapEntry(map, "READ_MEDIA_VIDEO", "android.permission.READ_MEDIA_VIDEO");
        addBiDirMapEntry(map, "READ_MEDIA_VISUAL_USER_SELECTED", "android.permission.READ_MEDIA_VISUAL_USER_SELECTED");
        permissionsMap = Collections.unmodifiableMap(map);
        HashMap map2 = new HashMap();
        addBiDirMapEntry(map2, "ANSWER_PHONE_CALLS", 26);
        addBiDirMapEntry(map2, "READ_PHONE_NUMBERS", 26);
        addBiDirMapEntry(map2, "ACCEPT_HANDOVER", 28);
        addBiDirMapEntry(map2, "ACCESS_BACKGROUND_LOCATION", 29);
        addBiDirMapEntry(map2, "ACCESS_MEDIA_LOCATION", 29);
        addBiDirMapEntry(map2, "ACTIVITY_RECOGNITION", 29);
        addBiDirMapEntry(map2, "BLUETOOTH_ADVERTISE", 31);
        addBiDirMapEntry(map2, "BLUETOOTH_CONNECT", 31);
        addBiDirMapEntry(map2, "BLUETOOTH_SCAN", 31);
        addBiDirMapEntry(map2, "UWB_RANGING", 31);
        addBiDirMapEntry(map2, "BODY_SENSORS_BACKGROUND", 33);
        addBiDirMapEntry(map2, "NEARBY_WIFI_DEVICES", 33);
        addBiDirMapEntry(map2, "POST_NOTIFICATIONS", 33);
        addBiDirMapEntry(map2, "READ_MEDIA_AUDIO", 33);
        addBiDirMapEntry(map2, "READ_MEDIA_IMAGES", 33);
        addBiDirMapEntry(map2, "READ_MEDIA_VIDEO", 33);
        addBiDirMapEntry(map2, "READ_MEDIA_VISUAL_USER_SELECTED", 34);
        minSdkPermissionMap = Collections.unmodifiableMap(map2);
        HashMap map3 = new HashMap();
        addBiDirMapEntry(map3, "READ_EXTERNAL_STORAGE", 32);
        addBiDirMapEntry(map3, "WRITE_EXTERNAL_STORAGE", 32);
        maxSdkPermissionMap = Collections.unmodifiableMap(map3);
        instance = null;
    }

    public static Diagnostic getInstance() {
        return instance;
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void initialize(CordovaInterface cordovaInterface, CordovaWebView cordovaWebView) {
        Log.d(TAG, "initialize()");
        instance = this;
        this.applicationContext = this.f7cordova.getActivity().getApplicationContext();
        SharedPreferences sharedPreferences = cordovaInterface.getActivity().getSharedPreferences(TAG, 0);
        this.sharedPref = sharedPreferences;
        this.editor = sharedPreferences.edit();
        super.initialize(cordovaInterface, cordovaWebView);
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        this.currentContext = callbackContext;
        try {
            if (str.equals("enableDebug")) {
                this.debugEnabled = true;
                logDebug("Debug enabled");
                callbackContext.success();
            } else if (str.equals("switchToSettings")) {
                switchToAppSettings();
                callbackContext.success();
            } else if (str.equals("switchToMobileDataSettings")) {
                switchToMobileDataSettings();
                callbackContext.success();
            } else if (str.equals("switchToWirelessSettings")) {
                switchToWirelessSettings();
                callbackContext.success();
            } else if (str.equals("isDataRoamingEnabled")) {
                if (Build.VERSION.SDK_INT <= 32) {
                    callbackContext.success(isDataRoamingEnabled() ? 1 : 0);
                } else {
                    callbackContext.error("Data roaming setting not available on Android 12L / API32+");
                }
                callbackContext.success(isDataRoamingEnabled() ? 1 : 0);
            } else if (str.equals("getPermissionAuthorizationStatus")) {
                getPermissionAuthorizationStatus(jSONArray);
            } else if (str.equals("getPermissionsAuthorizationStatus")) {
                getPermissionsAuthorizationStatus(jSONArray);
            } else if (str.equals("requestRuntimePermission")) {
                requestRuntimePermission(jSONArray);
            } else if (str.equals("requestRuntimePermissions")) {
                requestRuntimePermissions(jSONArray);
            } else if (str.equals("isADBModeEnabled")) {
                callbackContext.success(isADBModeEnabled() ? 1 : 0);
            } else if (str.equals("isDeviceRooted")) {
                callbackContext.success(isDeviceRooted() ? 1 : 0);
            } else if (str.equals("isMobileDataEnabled")) {
                callbackContext.success(isMobileDataEnabled() ? 1 : 0);
            } else if (str.equals("isAccessibilityModeEnabled")) {
                callbackContext.success(isAccessibilityModeEnabled() ? 1 : 0);
            } else if (str.equals("isTouchExplorationEnabled")) {
                callbackContext.success(isAccessibilityTouchExplorationEnabled() ? 1 : 0);
            } else if (str.equals("restart")) {
                restart(jSONArray);
            } else if (str.equals("getArchitecture")) {
                callbackContext.success(getCPUArchitecture());
            } else if (str.equals("getCurrentBatteryLevel")) {
                callbackContext.success(getCurrentBatteryLevel());
            } else if (str.equals("isAirplaneModeEnabled")) {
                callbackContext.success(isAirplaneModeEnabled() ? 1 : 0);
            } else if (str.equals("getDeviceOSVersion")) {
                callbackContext.success(getDeviceOSVersion());
            } else if (str.equals("getBuildOSVersion")) {
                callbackContext.success(getBuildOSVersion());
            } else {
                if (!str.equals("isDebugBuild")) {
                    handleError("Invalid action");
                    return false;
                }
                callbackContext.success(isDebugBuild() ? 1 : 0);
            }
            return true;
        } catch (Exception e) {
            handleError("Exception occurred: ".concat(e.getMessage()));
            return false;
        }
    }

    public void restart(JSONArray jSONArray) throws Exception {
        if (jSONArray.getBoolean(0)) {
            doColdRestart();
        } else {
            doWarmRestart();
        }
    }

    public boolean isDataRoamingEnabled() throws Exception {
        return Settings.Global.getInt(this.f7cordova.getActivity().getContentResolver(), "data_roaming", 0) == 1;
    }

    public void switchToAppSettings() {
        logDebug("Switch to App Settings");
        Intent intent = new Intent("android.settings.APPLICATION_DETAILS_SETTINGS");
        intent.setData(Uri.fromParts("package", this.f7cordova.getActivity().getPackageName(), null));
        this.f7cordova.getActivity().startActivity(intent);
    }

    public void switchToMobileDataSettings() {
        logDebug("Switch to Mobile Data Settings");
        this.f7cordova.getActivity().startActivity(new Intent("android.settings.DATA_ROAMING_SETTINGS"));
    }

    public void switchToWirelessSettings() {
        logDebug("Switch to wireless Settings");
        this.f7cordova.getActivity().startActivity(new Intent("android.settings.WIRELESS_SETTINGS"));
    }

    public void getPermissionsAuthorizationStatus(JSONArray jSONArray) throws Exception {
        this.currentContext.success(_getPermissionsAuthorizationStatus(jsonArrayToStringArray(jSONArray.getJSONArray(0))));
    }

    public void getPermissionAuthorizationStatus(JSONArray jSONArray) throws Exception {
        String string = jSONArray.getString(0);
        JSONArray jSONArray2 = new JSONArray();
        jSONArray2.put(string);
        this.currentContext.success(_getPermissionsAuthorizationStatus(jsonArrayToStringArray(jSONArray2)).getString(string));
    }

    public void requestRuntimePermissions(JSONArray jSONArray) throws Exception {
        _requestRuntimePermissions(jSONArray.getJSONArray(0), storeCurrentContextByRequestId());
    }

    public void requestRuntimePermission(JSONArray jSONArray) throws Exception {
        requestRuntimePermission(jSONArray.getString(0));
    }

    public void requestRuntimePermission(String str) throws Exception {
        requestRuntimePermission(str, storeCurrentContextByRequestId());
    }

    public void requestRuntimePermission(String str, int i) throws Exception {
        JSONArray jSONArray = new JSONArray();
        jSONArray.put(str);
        _requestRuntimePermissions(jSONArray, i);
    }

    public int getADBMode() {
        return Settings.Global.getInt(this.applicationContext.getContentResolver(), "adb_enabled", 0);
    }

    public boolean isADBModeEnabled() {
        boolean z = false;
        try {
            if (getADBMode() == 1) {
                z = true;
            }
        } catch (Exception e) {
            logError(e.getMessage());
        }
        logDebug("ADB mode enabled: " + z);
        return z;
    }

    /* high-level source view WARN: Removed duplicated region for block: B:29:0x0097 A[PHI: r3
  0x0097: PHI (r3v6 java.lang.Process) = (r3v5 java.lang.Process), (r3v7 java.lang.Process) binds: [B:28:0x0095, B:22:0x0088] A[DONT_GENERATE, DONT_INLINE]] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public boolean isDeviceRooted() {
        String str = Build.TAGS;
        if (str != null && str.contains("test-keys")) {
            return true;
        }
        try {
            String[] strArr = {"/system/app/Superuser.apk", "/sbin/su", "/system/bin/su", "/system/xbin/su", "/data/local/xbin/su", "/data/local/bin/su", "/system/sd/xbin/su", "/system/bin/failsafe/su", "/data/local/su"};
            for (int i = 0; i < 9; i++) {
                if (new File(strArr[i]).exists()) {
                    return true;
                }
            }
        } catch (Exception e) {
            logDebug(e.getMessage());
        }
        Process processExec = null;
        try {
            try {
                processExec = Runtime.getRuntime().exec(new String[]{"/system/xbin/which", "su"});
            } catch (Exception e2) {
                logDebug(e2.getMessage());
                if (processExec != null) {
                }
            }
            if (new BufferedReader(new InputStreamReader(processExec.getInputStream())).readLine() != null) {
                if (processExec != null) {
                    processExec.destroy();
                }
                return true;
            }
            if (processExec != null) {
                processExec.destroy();
            }
            return false;
        } catch (Throwable th) {
            if (processExec != null) {
                processExec.destroy();
            }
            throw th;
        }
    }

    public boolean isMobileDataEnabled() {
        ConnectivityManager connectivityManager = (ConnectivityManager) this.f7cordova.getContext().getSystemService("connectivity");
        try {
            Method declaredMethod = Class.forName(connectivityManager.getClass().getName()).getDeclaredMethod("getMobileDataEnabled", new Class[0]);
            declaredMethod.setAccessible(true);
            return ((Boolean) declaredMethod.invoke(connectivityManager, new Object[0])).booleanValue();
        } catch (Exception e) {
            logDebug(e.getMessage());
            return false;
        }
    }

    public boolean isAccessibilityModeEnabled() {
        boolean zIsEnabled;
        try {
            zIsEnabled = ((AccessibilityManager) this.f7cordova.getContext().getSystemService("accessibility")).isEnabled();
        } catch (Exception e) {
            logDebug(e.getMessage());
            zIsEnabled = false;
        }
        logDebug("Accessibility mode enabled: " + zIsEnabled);
        return zIsEnabled;
    }

    public boolean isAccessibilityTouchExplorationEnabled() {
        boolean zIsTouchExplorationEnabled;
        try {
            zIsTouchExplorationEnabled = ((AccessibilityManager) this.f7cordova.getContext().getSystemService("accessibility")).isTouchExplorationEnabled();
        } catch (Exception e) {
            logDebug(e.getMessage());
            zIsTouchExplorationEnabled = false;
        }
        logDebug("Accessibility touch exploration enabled: " + zIsTouchExplorationEnabled);
        return zIsTouchExplorationEnabled;
    }

    private boolean isDebugBuild() throws Exception {
        Context applicationContext = this.f7cordova.getActivity().getApplicationContext();
        boolean z = applicationContext.createPackageContext(applicationContext.getPackageName(), 3).getClassLoader().loadClass(applicationContext.getPackageName() + ".BuildConfig").getField("DEBUG").getBoolean(null);
        logDebug("Debug build: " + z);
        return z;
    }

    public void logDebug(String str) {
        if (str != null && this.debugEnabled) {
            Log.d(TAG, str);
            executeGlobalJavascript("console.log(\"Diagnostic[native]: " + escapeDoubleQuotes(str) + "\")");
        }
    }

    public void logInfo(String str) {
        if (str == null) {
            return;
        }
        Log.i(TAG, str);
        if (this.debugEnabled) {
            executeGlobalJavascript("console.info(\"Diagnostic[native]: " + escapeDoubleQuotes(str) + "\")");
        }
    }

    public void logWarning(String str) {
        if (str == null) {
            return;
        }
        Log.w(TAG, str);
        if (this.debugEnabled) {
            executeGlobalJavascript("console.warn(\"Diagnostic[native]: " + escapeDoubleQuotes(str) + "\")");
        }
    }

    public void logError(String str) {
        if (str == null) {
            return;
        }
        Log.e(TAG, str);
        if (this.debugEnabled) {
            executeGlobalJavascript("console.error(\"Diagnostic[native]: " + escapeDoubleQuotes(str) + "\")");
        }
    }

    public String escapeDoubleQuotes(String str) {
        return str.replace("\"", "\\\"").replace("%22", "\\%22");
    }

    public void handleError(String str, CallbackContext callbackContext) {
        try {
            logError(str);
            callbackContext.error(str);
        } catch (Exception e) {
            logError(e.toString());
        }
    }

    public void handleError(String str) {
        handleError(str, this.currentContext);
    }

    public void handleError(String str, int i) {
        CallbackContext callbackContext;
        String strValueOf = String.valueOf(i);
        if (this.callbackContexts.containsKey(strValueOf)) {
            callbackContext = this.callbackContexts.get(strValueOf);
        } else {
            callbackContext = this.currentContext;
        }
        handleError(str, callbackContext);
        clearRequest(i);
    }

    protected JSONObject _getPermissionsAuthorizationStatus(String[] strArr) throws Exception {
        JSONObject jSONObject = new JSONObject();
        for (String str : strArr) {
            Map<String, String> map = permissionsMap;
            if (!map.containsKey(str)) {
                throw new Exception("Permission name '" + str + "' is not a valid permission");
            }
            String str2 = map.get(str);
            Log.v(TAG, "Get authorisation status for " + str2);
            if (hasRuntimePermission(str2) || isPermissionImplicitlyGranted(str)) {
                jSONObject.put(str, STATUS_GRANTED);
            } else if (!shouldShowRequestPermissionRationale(this.f7cordova.getActivity(), str2)) {
                if (isPermissionRequested(str)) {
                    jSONObject.put(str, STATUS_DENIED_ALWAYS);
                } else {
                    jSONObject.put(str, STATUS_NOT_REQUESTED);
                }
            } else {
                jSONObject.put(str, STATUS_DENIED_ONCE);
            }
        }
        return jSONObject;
    }

    protected void _requestRuntimePermissions(JSONArray jSONArray, int i) throws Exception {
        JSONObject jSONObject_getPermissionsAuthorizationStatus = _getPermissionsAuthorizationStatus(jsonArrayToStringArray(jSONArray));
        JSONArray jSONArray2 = new JSONArray();
        for (int i2 = 0; i2 < jSONObject_getPermissionsAuthorizationStatus.names().length(); i2++) {
            String string = jSONObject_getPermissionsAuthorizationStatus.names().getString(i2);
            Map<String, String> map = permissionsMap;
            if (!map.containsKey(string)) {
                throw new Exception("Permission name '" + string + "' is not a supported permission");
            }
            if (jSONObject_getPermissionsAuthorizationStatus.getString(string) == STATUS_GRANTED || isPermissionImplicitlyGranted(string)) {
                Log.d(TAG, "Permission already granted for " + string);
                JSONObject jSONObject = this.permissionStatuses.get(String.valueOf(i));
                jSONObject.put(string, STATUS_GRANTED);
                this.permissionStatuses.put(String.valueOf(i), jSONObject);
            } else {
                Map<String, Integer> map2 = minSdkPermissionMap;
                if (map2.containsKey(string) && getDeviceRuntimeSdkVersion() < map2.get(string).intValue()) {
                    throw new Exception("Permission " + string + " not supported for build SDK version " + getDeviceRuntimeSdkVersion());
                }
                Map<String, Integer> map3 = maxSdkPermissionMap;
                if (map3.containsKey(string) && getDeviceRuntimeSdkVersion() > map3.get(string).intValue()) {
                    throw new Exception("Permission " + string + " not supported for build SDK version " + getDeviceRuntimeSdkVersion());
                }
                String str = map.get(string);
                Log.d(TAG, "Requesting permission for " + str);
                jSONArray2.put(str);
            }
        }
        if (jSONArray2.length() > 0) {
            Log.v(TAG, "Requesting permissions");
            requestPermissions(this, i, jsonArrayToStringArray(jSONArray2));
        } else {
            Log.d(TAG, "No permissions to request: returning result");
            sendRuntimeRequestResult(i);
        }
    }

    protected boolean isPermissionImplicitlyGranted(String str) throws Exception {
        int iIntValue;
        int buildTargetSdkVersion = getBuildTargetSdkVersion();
        int deviceRuntimeSdkVersion = getDeviceRuntimeSdkVersion();
        Map<String, Integer> map = minSdkPermissionMap;
        if (!map.containsKey(str) || buildTargetSdkVersion < (iIntValue = map.get(str).intValue()) || deviceRuntimeSdkVersion >= iIntValue) {
            return false;
        }
        Log.v(TAG, "Permission " + str + " is implicitly granted because while it's defined in build SDK version " + buildTargetSdkVersion + ", the device runtime SDK version " + deviceRuntimeSdkVersion + " does not support it.");
        return true;
    }

    protected void sendRuntimeRequestResult(int i) {
        String strValueOf = String.valueOf(i);
        CallbackContext callbackContext = this.callbackContexts.get(strValueOf);
        JSONObject jSONObject = this.permissionStatuses.get(strValueOf);
        Log.v(TAG, "Sending runtime request result for id=" + strValueOf);
        callbackContext.success(jSONObject);
    }

    protected int storeCurrentContextByRequestId() {
        return storeContextByRequestId(this.currentContext);
    }

    protected int storeContextByRequestId(CallbackContext callbackContext) {
        String strGenerateRandomRequestId = generateRandomRequestId();
        this.callbackContexts.put(strGenerateRandomRequestId, callbackContext);
        this.permissionStatuses.put(strGenerateRandomRequestId, new JSONObject());
        return Integer.valueOf(strGenerateRandomRequestId).intValue();
    }

    protected String generateRandomRequestId() {
        while (true) {
            String strGenerateRandom = null;
            while (strGenerateRandom == null) {
                strGenerateRandom = generateRandom();
                if (this.callbackContexts.containsKey(strGenerateRandom)) {
                    break;
                }
            }
            return strGenerateRandom;
        }
    }

    protected String generateRandom() {
        return Integer.toString(new Random().nextInt(DurationKt.NANOS_IN_MILLIS) + 1);
    }

    protected String[] jsonArrayToStringArray(JSONArray jSONArray) throws JSONException {
        if (jSONArray == null) {
            return null;
        }
        int length = jSONArray.length();
        String[] strArr = new String[length];
        for (int i = 0; i < length; i++) {
            strArr[i] = jSONArray.optString(i);
        }
        return strArr;
    }

    protected JSONArray stringArrayToJsonArray(String[] strArr) throws JSONException {
        if (strArr == null) {
            return null;
        }
        JSONArray jSONArray = new JSONArray();
        for (int i = 0; i < strArr.length; i++) {
            jSONArray.put(i, strArr[i]);
        }
        return jSONArray;
    }

    protected CallbackContext getContextById(String str) throws Exception {
        if (!this.callbackContexts.containsKey(str)) {
            throw new Exception("No context found for request id=" + str);
        }
        return this.callbackContexts.get(str);
    }

    protected void clearRequest(int i) {
        String strValueOf = String.valueOf(i);
        if (this.callbackContexts.containsKey(strValueOf)) {
            this.callbackContexts.remove(strValueOf);
            this.permissionStatuses.remove(strValueOf);
        }
    }

    protected static void addBiDirMapEntry(Map map, Object obj, Object obj2) {
        map.put(obj, obj2);
        map.put(obj2, obj);
    }

    protected boolean hasRuntimePermission(String str) throws Exception {
        try {
            return ((Boolean) this.f7cordova.getClass().getMethod("hasPermission", str.getClass()).invoke(this.f7cordova, str)).booleanValue();
        } catch (NoSuchMethodException unused) {
            logWarning("Cordova v7.0.0 does not support runtime permissions so defaulting to GRANTED for " + str);
            return true;
        }
    }

    protected void requestPermissions(CordovaPlugin cordovaPlugin, int i, String[] strArr) throws Exception {
        try {
            this.f7cordova.getClass().getMethod("requestPermissions", CordovaPlugin.class, Integer.TYPE, String[].class).invoke(this.f7cordova, cordovaPlugin, Integer.valueOf(i), strArr);
            for (String str : strArr) {
                setPermissionRequested(permissionsMap.get(str));
            }
        } catch (NoSuchMethodException unused) {
            throw new Exception("requestPermissions() method not found in CordovaInterface implementation of Cordova v7.0.0");
        }
    }

    protected boolean shouldShowRequestPermissionRationale(Activity activity, String str) throws Exception {
        try {
            return ((Boolean) ActivityCompat.class.getMethod("shouldShowRequestPermissionRationale", Activity.class, String.class).invoke(null, activity, str)).booleanValue();
        } catch (NoSuchMethodException unused) {
            throw new Exception("shouldShowRequestPermissionRationale() method not found in ActivityCompat class.");
        }
    }

    public void executeGlobalJavascript(final String str) {
        this.f7cordova.getActivity().runOnUiThread(new Runnable() { // from class: cordova.plugins.Diagnostic.1
            @Override // java.lang.Runnable
            public void run() {
                Diagnostic.this.webView.loadUrl("javascript:" + str);
            }
        });
    }

    public void executePluginJavascript(String str) {
        executeGlobalJavascript("cordova.plugins.diagnostic." + str);
    }

    protected void doWarmRestart() {
        this.f7cordova.getActivity().runOnUiThread(new Runnable() { // from class: cordova.plugins.Diagnostic.2
            @Override // java.lang.Runnable
            public void run() {
                try {
                    Diagnostic.this.logInfo("Warm restarting main activity");
                    Diagnostic.instance.f7cordova.getActivity().recreate();
                } catch (Exception e) {
                    Diagnostic.this.handleError("Unable to warm restart main activity: " + e.getMessage());
                }
            }
        });
    }

    protected void doColdRestart() {
        try {
            logInfo("Cold restarting application");
            Activity activity = instance.f7cordova.getActivity();
            if (activity != null) {
                Intent launchIntentForPackage = activity.getPackageManager().getLaunchIntentForPackage(activity.getPackageName());
                activity.finishAffinity();
                activity.startActivity(launchIntentForPackage);
                System.exit(0);
            } else {
                handleError("Unable to cold restart application: Activity is null");
            }
        } catch (Exception e) {
            handleError("Unable to cold restart application: " + e.getMessage());
        }
    }

    protected String getCPUArchitecture() {
        String str = Build.SUPPORTED_ABIS[0];
        if (str == "armeabi") {
            return CPU_ARCH_ARMv6;
        }
        if (str.equals("armeabi-v7a")) {
            return CPU_ARCH_ARMv7;
        }
        if (str.equals("arm64-v8a")) {
            return CPU_ARCH_ARMv8;
        }
        if (str.equals("x86")) {
            return CPU_ARCH_X86;
        }
        if (str.equals("x86_64")) {
            return CPU_ARCH_X86_64;
        }
        if (str.equals("mips")) {
            return CPU_ARCH_MIPS;
        }
        if (!str.equals("mips64")) {
            return "unknown";
        }
        return CPU_ARCH_MIPS_64;
    }

    protected void setPermissionRequested(String str) {
        this.editor.putBoolean(str, true);
        if (this.editor.commit()) {
            return;
        }
        handleError("Failed to set permission requested flag for " + str);
    }

    protected boolean isPermissionRequested(String str) {
        return this.sharedPref.getBoolean(str, false);
    }

    protected int getCurrentBatteryLevel() {
        return ((BatteryManager) this.f7cordova.getContext().getApplicationContext().getSystemService("batterymanager")).getIntProperty(4);
    }

    protected boolean hasBuildPermission(String str) {
        try {
            PackageInfo packageInfo = this.f7cordova.getActivity().getPackageManager().getPackageInfo(this.f7cordova.getContext().getPackageName(), 4096);
            if (packageInfo.requestedPermissions != null) {
                for (String str2 : packageInfo.requestedPermissions) {
                    if (str2.equals("android.permission." + str)) {
                        return true;
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    public boolean isAirplaneModeEnabled() {
        return Settings.Global.getInt(this.f7cordova.getActivity().getContentResolver(), "airplane_mode_on", 0) != 0;
    }

    public JSONObject getDeviceOSVersion() throws Exception {
        JSONObject jSONObject = new JSONObject();
        jSONObject.put("version", Build.VERSION.RELEASE);
        int deviceRuntimeSdkVersion = getDeviceRuntimeSdkVersion();
        jSONObject.put("apiLevel", deviceRuntimeSdkVersion);
        jSONObject.put("apiName", getNameForApiLevel(deviceRuntimeSdkVersion));
        return jSONObject;
    }

    protected int getDeviceRuntimeSdkVersion() {
        return Build.VERSION.SDK_INT;
    }

    public JSONObject getBuildOSVersion() throws Exception {
        JSONObject jSONObject = new JSONObject();
        int buildTargetSdkVersion = getBuildTargetSdkVersion();
        int buildMinimumSdkVersion = getBuildMinimumSdkVersion();
        jSONObject.put("targetApiLevel", buildTargetSdkVersion);
        jSONObject.put("targetApiName", getNameForApiLevel(buildTargetSdkVersion));
        jSONObject.put("minApiLevel", buildMinimumSdkVersion);
        jSONObject.put("minApiName", getNameForApiLevel(buildMinimumSdkVersion));
        return jSONObject;
    }

    protected int getBuildTargetSdkVersion() throws Exception {
        Activity activity = instance.f7cordova.getActivity();
        ApplicationInfo applicationInfo = activity.getPackageManager().getApplicationInfo(activity.getPackageName(), 0);
        if (applicationInfo != null) {
            return applicationInfo.targetSdkVersion;
        }
        return 0;
    }

    protected int getBuildMinimumSdkVersion() throws Exception {
        Activity activity = instance.f7cordova.getActivity();
        ApplicationInfo applicationInfo = activity.getPackageManager().getApplicationInfo(activity.getPackageName(), 0);
        if (applicationInfo != null) {
            return applicationInfo.minSdkVersion;
        }
        return 0;
    }

    protected String getNameForApiLevel(int i) throws Exception {
        String name = "UNKNOWN";
        for (Field field : Build.VERSION_CODES.class.getFields()) {
            if (field.getInt(Build.VERSION_CODES.class) == i) {
                name = field.getName();
            }
        }
        return name;
    }

    protected String[] concatStrings(String[] strArr, String[] strArr2) {
        int length = strArr.length;
        int length2 = strArr2.length;
        String[] strArr3 = new String[length + length2];
        System.arraycopy(strArr, 0, strArr3, 0, length);
        System.arraycopy(strArr2, 0, strArr3, length, length2);
        return strArr3;
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onRequestPermissionResult(int i, String[] strArr, int[] iArr) throws JSONException {
        String str;
        String strValueOf = String.valueOf(i);
        Log.v(TAG, "Received result for permissions request id=" + strValueOf);
        try {
            CallbackContext contextById = getContextById(strValueOf);
            JSONObject jSONObject = this.permissionStatuses.get(strValueOf);
            int length = strArr.length;
            for (int i2 = 0; i2 < length; i2++) {
                String str2 = strArr[i2];
                String str3 = permissionsMap.get(str2);
                if (Build.VERSION.SDK_INT < 29 && str3.equals("ACCESS_BACKGROUND_LOCATION")) {
                    str3 = "ACCESS_COARSE_LOCATION";
                }
                if (Build.VERSION.SDK_INT < 29 && str3.equals("ACTIVITY_RECOGNITION")) {
                    str3 = "BODY_SENSORS";
                }
                if (iArr[i2] == -1) {
                    if (!shouldShowRequestPermissionRationale(this.f7cordova.getActivity(), str2)) {
                        if (isPermissionRequested(str3)) {
                            str = STATUS_DENIED_ALWAYS;
                        } else {
                            str = STATUS_NOT_REQUESTED;
                        }
                    } else {
                        str = STATUS_DENIED_ONCE;
                    }
                } else {
                    str = STATUS_GRANTED;
                }
                jSONObject.put(str3, str);
                Log.v(TAG, "Authorisation for " + str3 + " is " + jSONObject.get(str3));
                clearRequest(i);
            }
            contextById.success(jSONObject);
        } catch (Exception e) {
            handleError("Exception occurred onRequestPermissionsResult: ".concat(e.getMessage()), i);
        }
    }
}

