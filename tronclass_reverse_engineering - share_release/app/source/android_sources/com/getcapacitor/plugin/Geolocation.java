package com.getcapacitor.plugin;

import android.location.Location;
import android.location.LocationManager;
import android.os.Build;
import androidx.work.WorkRequest;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationAvailability;
import com.google.android.gms.location.LocationCallback;
import com.google.android.gms.location.LocationRequest;
import com.google.android.gms.location.LocationResult;
import com.google.android.gms.location.LocationServices;
import com.onesignal.outcomes.OSOutcomeConstants;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
@NativePlugin(permissionRequestCode = 9004, permissions = {"android.permission.ACCESS_COARSE_LOCATION", "android.permission.ACCESS_FINE_LOCATION"})
public class Geolocation extends Plugin {
    private FusedLocationProviderClient fusedLocationClient;
    private LocationCallback locationCallback;
    private Map<String, PluginCall> watchingCalls = new HashMap();

    @PluginMethod
    public void getCurrentPosition(PluginCall pluginCall) {
        if (!hasRequiredPermissions()) {
            saveCall(pluginCall);
            pluginRequestAllPermissions();
        } else {
            sendLocation(pluginCall);
        }
    }

    private void sendLocation(PluginCall pluginCall) {
        requestLocationUpdates(pluginCall);
    }

    @PluginMethod(returnType = PluginMethod.RETURN_CALLBACK)
    public void watchPosition(PluginCall pluginCall) {
        pluginCall.save();
        if (!hasRequiredPermissions()) {
            saveCall(pluginCall);
            pluginRequestAllPermissions();
        } else {
            startWatch(pluginCall);
        }
    }

    private void startWatch(PluginCall pluginCall) {
        requestLocationUpdates(pluginCall);
        this.watchingCalls.put(pluginCall.getCallbackId(), pluginCall);
    }

    @PluginMethod
    public void clearWatch(PluginCall pluginCall) {
        PluginCall pluginCallRemove;
        String string = pluginCall.getString(OSOutcomeConstants.OUTCOME_ID);
        if (string != null && (pluginCallRemove = this.watchingCalls.remove(string)) != null) {
            pluginCallRemove.release(this.bridge);
        }
        if (this.watchingCalls.size() == 0) {
            clearLocationUpdates();
        }
        pluginCall.success();
    }

    private void processLocation(Location location) {
        Iterator<Map.Entry<String, PluginCall>> it = this.watchingCalls.entrySet().iterator();
        while (it.hasNext()) {
            it.next().getValue().success(getJSObjectForLocation(location));
        }
    }

    @Override // com.getcapacitor.Plugin
    protected void handleRequestPermissionsResult(int i, String[] strArr, int[] iArr) {
        super.handleRequestPermissionsResult(i, strArr, iArr);
        PluginCall savedCall = getSavedCall();
        if (savedCall == null) {
            return;
        }
        for (int i2 : iArr) {
            if (i2 == -1) {
                savedCall.error("User denied location permission");
                return;
            }
        }
        if (savedCall.getMethodName().equals("getCurrentPosition")) {
            sendLocation(savedCall);
        } else if (savedCall.getMethodName().equals("watchPosition")) {
            startWatch(savedCall);
        } else {
            savedCall.resolve();
            savedCall.release(this.bridge);
        }
    }
    public JSObject getJSObjectForLocation(Location location) {
        JSObject jSObject = new JSObject();
        JSObject jSObject2 = new JSObject();
        jSObject.put("coords", (Object) jSObject2);
        jSObject.put("timestamp", location.getTime());
        jSObject2.put("latitude", location.getLatitude());
        jSObject2.put("longitude", location.getLongitude());
        jSObject2.put("accuracy", location.getAccuracy());
        jSObject2.put("altitude", location.getAltitude());
        if (Build.VERSION.SDK_INT >= 26) {
            jSObject2.put("altitudeAccuracy", location.getVerticalAccuracyMeters());
        }
        jSObject2.put("speed", location.getSpeed());
        jSObject2.put("heading", location.getBearing());
        return jSObject;
    }

    private void requestLocationUpdates(final PluginCall pluginCall) {
        clearLocationUpdates();
        boolean zIsProviderEnabled = false;
        boolean zBooleanValue = pluginCall.getBoolean("enableHighAccuracy", false).booleanValue();
        int iIntValue = pluginCall.getInt("timeout", 10000).intValue();
        this.fusedLocationClient = LocationServices.getFusedLocationProviderClient(getContext());
        try {
            zIsProviderEnabled = ((LocationManager) getContext().getSystemService("location")).isProviderEnabled("network");
        } catch (Exception unused) {
        }
        LocationRequest locationRequest = new LocationRequest();
        locationRequest.setMaxWaitTime(iIntValue);
        locationRequest.setInterval(WorkRequest.MIN_BACKOFF_MILLIS);
        locationRequest.setFastestInterval(5000L);
        int i = zIsProviderEnabled ? 102 : 104;
        if (zBooleanValue) {
            i = 100;
        }
        locationRequest.setPriority(i);
        LocationCallback locationCallback = new LocationCallback() { // from class: com.getcapacitor.plugin.Geolocation.1
            @Override // com.google.android.gms.location.LocationCallback
            public void onLocationResult(LocationResult locationResult) {
                if (pluginCall.getMethodName().equals("getCurrentPosition")) {
                    Geolocation.this.clearLocationUpdates();
                }
                Location lastLocation = locationResult.getLastLocation();
                if (lastLocation != null) {
                    pluginCall.success(Geolocation.this.getJSObjectForLocation(lastLocation));
                } else {
                    pluginCall.error("location unavailable");
                }
            }

            @Override // com.google.android.gms.location.LocationCallback
            public void onLocationAvailability(LocationAvailability locationAvailability) {
                if (locationAvailability.isLocationAvailable()) {
                    return;
                }
                pluginCall.error("location unavailable");
                Geolocation.this.clearLocationUpdates();
            }
        };
        this.locationCallback = locationCallback;
        this.fusedLocationClient.requestLocationUpdates(locationRequest, locationCallback, null);
    }
    public void clearLocationUpdates() {
        LocationCallback locationCallback = this.locationCallback;
        if (locationCallback != null) {
            this.fusedLocationClient.removeLocationUpdates(locationCallback);
            this.locationCallback = null;
        }
    }
}

