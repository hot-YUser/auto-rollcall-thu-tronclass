package cordova.plugins;

import android.bluetooth.BluetoothAdapter;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Build;
import android.util.Log;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class Diagnostic_Bluetooth extends CordovaPlugin {
    protected static final String BLUETOOTH_STATE_POWERED_OFF = "powered_off";
    protected static final String BLUETOOTH_STATE_POWERED_ON = "powered_on";
    protected static final String BLUETOOTH_STATE_POWERING_OFF = "powering_off";
    protected static final String BLUETOOTH_STATE_POWERING_ON = "powering_on";
    protected static final String BLUETOOTH_STATE_UNKNOWN = "unknown";
    public static final String TAG = "Diagnostic_Bluetooth";
    protected CallbackContext currentContext;
    private Diagnostic diagnostic;
    protected static final String[] permissions = {"BLUETOOTH_ADVERTISE", "BLUETOOTH_CONNECT", "BLUETOOTH_SCAN"};
    public static Diagnostic_Bluetooth instance = null;
    private String currentBluetoothState = null;
    protected final BroadcastReceiver bluetoothStateChangeReceiver = new BroadcastReceiver() { // from class: cordova.plugins.Diagnostic_Bluetooth.1
        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            String action = intent.getAction();
            if (Diagnostic_Bluetooth.instance == null || !action.equals("android.bluetooth.adapter.action.STATE_CHANGED")) {
                return;
            }
            Log.v(Diagnostic_Bluetooth.TAG, "bluetoothStateChangeReceiver");
            Diagnostic_Bluetooth.instance.notifyBluetoothStateChange();
        }
    };

    @Override // org.apache.cordova.CordovaPlugin
    public void initialize(CordovaInterface cordovaInterface, CordovaWebView cordovaWebView) {
        Log.d(TAG, "initialize()");
        instance = this;
        Diagnostic diagnostic = Diagnostic.getInstance();
        this.diagnostic = diagnostic;
        try {
            diagnostic.applicationContext.registerReceiver(this.bluetoothStateChangeReceiver, new IntentFilter("android.bluetooth.adapter.action.STATE_CHANGED"));
            this.currentBluetoothState = getBluetoothState();
        } catch (Exception e) {
            this.diagnostic.logWarning("Unable to register Bluetooth state change receiver: " + e.getMessage());
        }
        super.initialize(cordovaInterface, cordovaWebView);
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onDestroy() {
        try {
            this.diagnostic.applicationContext.unregisterReceiver(this.bluetoothStateChangeReceiver);
        } catch (Exception e) {
            this.diagnostic.logWarning("Unable to unregister Bluetooth state change receiver: " + e.getMessage());
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        Diagnostic diagnostic = Diagnostic.instance;
        this.currentContext = callbackContext;
        diagnostic.currentContext = callbackContext;
        try {
            if (str.equals("switchToBluetoothSettings")) {
                switchToBluetoothSettings();
                callbackContext.success();
            } else if (str.equals("isBluetoothAvailable")) {
                callbackContext.success(isBluetoothAvailable() ? 1 : 0);
            } else if (str.equals("isBluetoothEnabled")) {
                callbackContext.success(isBluetoothEnabled() ? 1 : 0);
            } else if (str.equals("hasBluetoothSupport")) {
                callbackContext.success(hasBluetoothSupport() ? 1 : 0);
            } else if (str.equals("hasBluetoothLESupport")) {
                callbackContext.success(hasBluetoothLESupport() ? 1 : 0);
            } else if (str.equals("hasBluetoothLEPeripheralSupport")) {
                callbackContext.success(hasBluetoothLEPeripheralSupport() ? 1 : 0);
            } else if (str.equals("setBluetoothState")) {
                setBluetoothState(jSONArray.getBoolean(0), callbackContext);
            } else if (str.equals("getBluetoothState")) {
                callbackContext.success(getBluetoothState());
            } else if (str.equals("getAuthorizationStatuses")) {
                callbackContext.success(getAuthorizationStatuses());
            } else if (str.equals("requestBluetoothAuthorization")) {
                requestBluetoothAuthorization(jSONArray, callbackContext);
            } else {
                this.diagnostic.handleError("Invalid action");
                return false;
            }
            return true;
        } catch (Exception e) {
            this.diagnostic.handleError("Exception occurred: ".concat(e.getMessage()));
            return false;
        }
    }

    public void switchToBluetoothSettings() {
        this.diagnostic.logDebug("Switch to Bluetooth Settings");
        this.f7cordova.getActivity().startActivity(new Intent("android.settings.BLUETOOTH_SETTINGS"));
    }

    public boolean isBluetoothAvailable() {
        return hasBluetoothSupport() && isBluetoothEnabled();
    }

    public boolean isBluetoothEnabled() {
        BluetoothAdapter defaultAdapter = BluetoothAdapter.getDefaultAdapter();
        return defaultAdapter != null && defaultAdapter.isEnabled();
    }

    public boolean hasBluetoothSupport() {
        return this.f7cordova.getActivity().getPackageManager().hasSystemFeature("android.hardware.bluetooth");
    }

    public boolean hasBluetoothLESupport() {
        return this.f7cordova.getActivity().getPackageManager().hasSystemFeature("android.hardware.bluetooth_le");
    }

    public boolean hasBluetoothLEPeripheralSupport() {
        BluetoothAdapter defaultAdapter = BluetoothAdapter.getDefaultAdapter();
        return defaultAdapter != null && defaultAdapter.isMultipleAdvertisementSupported();
    }

    public void setBluetoothState(boolean z, CallbackContext callbackContext) throws Exception {
        if (!hasBluetoothSupport()) {
            callbackContext.error("Cannot change Bluetooth state as device does not support Bluetooth");
            return;
        }
        if (Build.VERSION.SDK_INT >= 33) {
            callbackContext.error("Cannot change Bluetooth state on Android 13+ as this is no longer supported");
            return;
        }
        BluetoothAdapter defaultAdapter = BluetoothAdapter.getDefaultAdapter();
        boolean zIsEnabled = defaultAdapter.isEnabled();
        if (getAuthorizationStatuses().getString("BLUETOOTH_CONNECT").equals("GRANTED")) {
            if (z && !zIsEnabled) {
                defaultAdapter.enable();
            } else if (!z && zIsEnabled) {
                defaultAdapter.disable();
            }
            callbackContext.success();
            return;
        }
        callbackContext.error("Cannot change Bluetooth state as permission is denied");
    }

    public String getBluetoothState() {
        if (!hasBluetoothSupport()) {
            return "unknown";
        }
        BluetoothAdapter defaultAdapter = BluetoothAdapter.getDefaultAdapter();
        if (defaultAdapter == null) {
            this.diagnostic.logWarning("Bluetooth adapter unavailable or not found");
            return "unknown";
        }
        switch (defaultAdapter.getState()) {
        }
        return "unknown";
    }

    public void notifyBluetoothStateChange() {
        try {
            String bluetoothState = getBluetoothState();
            if (bluetoothState.equals(this.currentBluetoothState)) {
                return;
            }
            this.diagnostic.logDebug("Bluetooth state changed to: " + bluetoothState);
            this.diagnostic.executePluginJavascript("bluetooth._onBluetoothStateChange(\"" + bluetoothState + "\");");
            this.currentBluetoothState = bluetoothState;
        } catch (Exception e) {
            this.diagnostic.logError("Error retrieving current Bluetooth state on Bluetooth state change: " + e.toString());
        }
    }

    public JSONObject getAuthorizationStatuses() throws Exception {
        if (Build.VERSION.SDK_INT >= 31) {
            return Diagnostic.instance._getPermissionsAuthorizationStatus(permissions);
        }
        boolean zHasBuildPermission = Diagnostic.instance.hasBuildPermission("BLUETOOTH");
        JSONObject jSONObject = new JSONObject();
        for (String str : permissions) {
            jSONObject.put(str, zHasBuildPermission ? "GRANTED" : "DENIED_ALWAYS");
        }
        return jSONObject;
    }

    public void requestBluetoothAuthorization(JSONArray jSONArray, CallbackContext callbackContext) throws Exception {
        JSONArray jSONArray2 = new JSONArray();
        if (jSONArray.length() > 0) {
            JSONArray jSONArray3 = jSONArray.getJSONArray(0);
            if (jSONArray3.length() > 0) {
                int length = jSONArray3.length();
                for (int i = 0; i < length; i++) {
                    String string = jSONArray3.getString(i);
                    if (contains(permissions, string)) {
                        jSONArray2.put(string);
                    }
                }
            }
        }
        if (jSONArray2.length() == 0) {
            for (String str : permissions) {
                jSONArray2.put(str);
            }
        }
        Diagnostic.instance._requestRuntimePermissions(jSONArray2, Diagnostic.instance.storeContextByRequestId(callbackContext));
        PluginResult pluginResult = new PluginResult(PluginResult.Status.NO_RESULT);
        pluginResult.setKeepCallback(true);
        callbackContext.sendPluginResult(pluginResult);
    }

    private static <T> boolean contains(T[] tArr, T t) {
        if (t == null) {
            for (T t2 : tArr) {
                if (t2 == null) {
                    return true;
                }
            }
        } else {
            for (T t3 : tArr) {
                if (t3 == t || t.equals(t3)) {
                    return true;
                }
            }
        }
        return false;
    }
}

