package cordova.plugins;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.location.LocationManager;
import android.os.Build;
import android.provider.Settings;
import android.util.Log;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
public class Diagnostic_Location extends CordovaPlugin {
    private static final String LOCATION_MODE_BATTERY_SAVING = "battery_saving";
    private static final String LOCATION_MODE_DEVICE_ONLY = "device_only";
    private static final String LOCATION_MODE_HIGH_ACCURACY = "high_accuracy";
    private static final String LOCATION_MODE_OFF = "location_off";
    private static final String LOCATION_MODE_UNKNOWN = "unknown";
    public static final String TAG = "Diagnostic_Location";
    private static String backgroundLocationPermission = "ACCESS_BACKGROUND_LOCATION";
    private static String gpsLocationPermission = "ACCESS_FINE_LOCATION";
    public static Diagnostic_Location instance = null;
    public static LocationManager locationManager = null;
    private static String networkLocationPermission = "ACCESS_COARSE_LOCATION";
    protected CallbackContext currentContext;
    private Diagnostic diagnostic;
    private String currentLocationMode = null;
    protected final BroadcastReceiver locationProviderChangedReceiver = new BroadcastReceiver() { // from class: cordova.plugins.Diagnostic_Location.1
        @Override // android.content.BroadcastReceiver
        public void onReceive(Context context, Intent intent) {
            try {
                String action = intent.getAction();
                if (Diagnostic_Location.instance == null || !action.equals("android.location.PROVIDERS_CHANGED")) {
                    return;
                }
                Log.v(Diagnostic_Location.TAG, "onReceiveLocationProviderChange");
                Diagnostic_Location.instance.notifyLocationStateChange();
            } catch (Exception e) {
                Diagnostic_Location.this.diagnostic.logError("Error receiving location provider state change: " + e.toString());
            }
        }
    };

    @Override // org.apache.cordova.CordovaPlugin
    public void initialize(CordovaInterface cordovaInterface, CordovaWebView cordovaWebView) {
        Log.d(TAG, "initialize()");
        instance = this;
        Diagnostic diagnostic = Diagnostic.getInstance();
        this.diagnostic = diagnostic;
        try {
            diagnostic.applicationContext.registerReceiver(this.locationProviderChangedReceiver, new IntentFilter("android.location.PROVIDERS_CHANGED"));
            locationManager = (LocationManager) this.f7cordova.getActivity().getSystemService("location");
        } catch (Exception e) {
            this.diagnostic.logWarning("Unable to register Location Provider Change receiver: " + e.getMessage());
        }
        try {
            this.currentLocationMode = getLocationModeName();
        } catch (Exception e2) {
            this.diagnostic.logWarning("Unable to get initial location mode: " + e2.getMessage());
        }
        super.initialize(cordovaInterface, cordovaWebView);
    }

    @Override // org.apache.cordova.CordovaPlugin
    public void onDestroy() {
        try {
            this.diagnostic.applicationContext.unregisterReceiver(this.locationProviderChangedReceiver);
        } catch (Exception e) {
            this.diagnostic.logWarning("Unable to unregister Location Provider Change receiver: " + e.getMessage());
        }
    }

    @Override // org.apache.cordova.CordovaPlugin
    public boolean execute(String str, JSONArray jSONArray, CallbackContext callbackContext) throws JSONException {
        Diagnostic diagnostic = Diagnostic.instance;
        this.currentContext = callbackContext;
        diagnostic.currentContext = callbackContext;
        try {
            if (str.equals("switchToLocationSettings")) {
                switchToLocationSettings();
                callbackContext.success();
            } else if (str.equals("isLocationAvailable")) {
                callbackContext.success((isGpsLocationAvailable() || isNetworkLocationAvailable()) ? 1 : 0);
            } else if (str.equals("isLocationEnabled")) {
                callbackContext.success((isGpsLocationEnabled() || isNetworkLocationEnabled()) ? 1 : 0);
            } else if (str.equals("isGpsLocationAvailable")) {
                callbackContext.success(isGpsLocationAvailable() ? 1 : 0);
            } else if (str.equals("isNetworkLocationAvailable")) {
                callbackContext.success(isNetworkLocationAvailable() ? 1 : 0);
            } else if (str.equals("isGpsLocationEnabled")) {
                callbackContext.success(isGpsLocationEnabled() ? 1 : 0);
            } else if (str.equals("isNetworkLocationEnabled")) {
                callbackContext.success(isNetworkLocationEnabled() ? 1 : 0);
            } else if (str.equals("getLocationMode")) {
                callbackContext.success(getLocationModeName());
            } else if (str.equals("requestLocationAuthorization")) {
                requestLocationAuthorization(jSONArray, callbackContext);
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

    public boolean isGpsLocationAvailable() throws Exception {
        boolean z = isGpsLocationEnabled() && isLocationAuthorized();
        this.diagnostic.logDebug("GPS location available: " + z);
        return z;
    }

    public boolean isGpsLocationEnabled() throws Exception {
        int locationMode = getLocationMode();
        boolean z = true;
        if (locationMode != 3 && locationMode != 1) {
            z = false;
        }
        this.diagnostic.logDebug("GPS location setting enabled: " + z);
        return z;
    }

    public boolean isNetworkLocationAvailable() throws Exception {
        boolean z = isNetworkLocationEnabled() && isLocationAuthorized();
        this.diagnostic.logDebug("Network location available: " + z);
        return z;
    }

    public boolean isNetworkLocationEnabled() throws Exception {
        int locationMode = getLocationMode();
        boolean z = locationMode == 3 || locationMode == 2;
        this.diagnostic.logDebug("Network location setting enabled: " + z);
        return z;
    }

    public String getLocationModeName() throws Exception {
        int locationMode = getLocationMode();
        if (locationMode == 0) {
            return LOCATION_MODE_OFF;
        }
        if (locationMode == 1) {
            return LOCATION_MODE_DEVICE_ONLY;
        }
        if (locationMode == 2) {
            return LOCATION_MODE_BATTERY_SAVING;
        }
        if (locationMode == 3) {
            return LOCATION_MODE_HIGH_ACCURACY;
        }
        return "unknown";
    }

    public void notifyLocationStateChange() {
        try {
            String locationModeName = getLocationModeName();
            if (locationModeName.equals(this.currentLocationMode)) {
                return;
            }
            this.diagnostic.logDebug("Location mode change to: " + locationModeName);
            this.diagnostic.executePluginJavascript("location._onLocationStateChange(\"" + locationModeName + "\");");
            this.currentLocationMode = locationModeName;
        } catch (Exception e) {
            this.diagnostic.logError("Error retrieving current location mode on location state change: " + e.toString());
        }
    }

    public void switchToLocationSettings() {
        this.diagnostic.logDebug("Switch to Location Settings");
        this.f7cordova.getActivity().startActivity(new Intent("android.settings.LOCATION_SOURCE_SETTINGS"));
    }

    public void requestLocationAuthorization(JSONArray jSONArray, CallbackContext callbackContext) throws Exception {
        JSONArray jSONArray2 = new JSONArray();
        boolean z = jSONArray.getBoolean(0);
        boolean z2 = jSONArray.getBoolean(1);
        jSONArray2.put(networkLocationPermission);
        if (z2 || Build.VERSION.SDK_INT < 31) {
            jSONArray2.put(gpsLocationPermission);
        }
        if (z && Build.VERSION.SDK_INT >= 29) {
            jSONArray2.put(backgroundLocationPermission);
        }
        Diagnostic.instance._requestRuntimePermissions(jSONArray2, Diagnostic.instance.storeContextByRequestId(callbackContext));
        PluginResult pluginResult = new PluginResult(PluginResult.Status.NO_RESULT);
        pluginResult.setKeepCallback(true);
        callbackContext.sendPluginResult(pluginResult);
    }

    private int getLocationMode() throws Exception {
        if (Build.VERSION.SDK_INT < 28) {
            return Settings.Secure.getInt(this.f7cordova.getActivity().getContentResolver(), "location_mode");
        }
        if (isLocationProviderEnabled("gps") && isLocationProviderEnabled("network")) {
            return 3;
        }
        if (isLocationProviderEnabled("gps")) {
            return 1;
        }
        return isLocationProviderEnabled("network") ? 2 : 0;
    }

    private boolean isLocationAuthorized() throws Exception {
        boolean z = this.diagnostic.hasRuntimePermission(Diagnostic.permissionsMap.get(gpsLocationPermission)) || this.diagnostic.hasRuntimePermission(Diagnostic.permissionsMap.get(networkLocationPermission));
        Log.v(TAG, "Location permission is ".concat(z ? "authorized" : "unauthorized"));
        return z;
    }

    private boolean isLocationProviderEnabled(String str) {
        return locationManager.isProviderEnabled(str);
    }
}

