package com.wisdomgarden.plugins.geolocation;

import android.content.Context;
import android.location.Criteria;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Build;
import android.os.Bundle;
import androidx.exifinterface.media.ExifInterface;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.onesignal.outcomes.OSOutcomeConstants;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
@NativePlugin(permissionRequestCode = 9004, permissions = {"android.permission.ACCESS_COARSE_LOCATION", "android.permission.ACCESS_FINE_LOCATION"})
public class NativeGeolocation extends Plugin {
    private Context context;
    private LocationListener listener;
    private LocationManager locationManager;
    private String provider;
    private Map<String, PluginCall> watchingCalls = new HashMap();

    @Override // com.getcapacitor.Plugin
    public void load() {
        Context context = getContext();
        this.context = context;
        this.locationManager = (LocationManager) context.getSystemService("location");
    }

    private void getNativeBestProvider(boolean z) {
        Criteria criteria = new Criteria();
        if (z) {
            criteria.setAccuracy(1);
        } else {
            criteria.setAccuracy(2);
        }
        if (checkControlCenterToggle().booleanValue()) {
            this.provider = this.locationManager.getBestProvider(criteria, true);
        }
    }

    public Boolean isLocationServicesEnabled() {
        return Boolean.valueOf(this.locationManager.isProviderEnabled(this.provider));
    }

    public Boolean checkControlCenterToggle() {
        return Boolean.valueOf(this.locationManager.isProviderEnabled("gps") || this.locationManager.isProviderEnabled("network"));
    }

    public Location getLastLocation(boolean z) {
        Location lastKnownLocation;
        getNativeBestProvider(z);
        Location lastKnownLocation2 = this.locationManager.getLastKnownLocation(this.provider);
        if (lastKnownLocation2 != null) {
            return lastKnownLocation2;
        }
        if (this.locationManager.getLastKnownLocation("gps") != null) {
            this.provider = "gps";
            return this.locationManager.getLastKnownLocation("gps");
        }
        if (this.locationManager.getLastKnownLocation("network") != null) {
            this.provider = "network";
            return this.locationManager.getLastKnownLocation("network");
        }
        for (String str : this.locationManager.getAllProviders()) {
            if (!str.equals(this.provider) && (lastKnownLocation = this.locationManager.getLastKnownLocation(str)) != null) {
                this.provider = str;
                return lastKnownLocation;
            }
        }
        return null;
    }

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
                savedCall.error("User denied location permission", "1", new Exception("User denied location permission"));
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
        boolean zBooleanValue = pluginCall.getBoolean("enableHighAccuracy", false).booleanValue();
        getNativeBestProvider(zBooleanValue);
        if (checkControlCenterToggle().booleanValue()) {
            if (isLocationServicesEnabled().booleanValue()) {
                if (pluginCall.getMethodName().equals("getCurrentPosition")) {
                    Location lastLocation = getLastLocation(zBooleanValue);
                    if (lastLocation == null) {
                        pluginCall.error("location services not restored", "4", new Exception("location services not restored"));
                        clearLocationUpdates();
                    } else {
                        pluginCall.success(getJSObjectForLocation(lastLocation));
                    }
                }
                LocationListener locationListener = new LocationListener() { // from class: com.wisdomgarden.plugins.geolocation.NativeGeolocation.1
                    @Override // android.location.LocationListener
                    public void onStatusChanged(String str, int i, Bundle bundle) {
                    }

                    @Override // android.location.LocationListener
                    public void onLocationChanged(Location location) {
                        if (location != null) {
                            pluginCall.success(NativeGeolocation.this.getJSObjectForLocation(location));
                        } else {
                            pluginCall.error("location unavailable", ExifInterface.GPS_MEASUREMENT_2D, new Exception("location unavailable"));
                        }
                    }

                    @Override // android.location.LocationListener
                    public void onProviderEnabled(String str) {
                        NativeGeolocation nativeGeolocation = NativeGeolocation.this;
                        nativeGeolocation.locationManager = (LocationManager) nativeGeolocation.getContext().getSystemService("location");
                    }

                    @Override // android.location.LocationListener
                    public void onProviderDisabled(String str) {
                        NativeGeolocation.this.clearLocationUpdates();
                    }
                };
                this.listener = locationListener;
                this.locationManager.requestLocationUpdates(this.provider, 0L, 0.0f, locationListener);
                return;
            }
            pluginCall.error("location unavailable", ExifInterface.GPS_MEASUREMENT_2D, new Exception("location unavailable"));
            return;
        }
        pluginCall.error("open location service", "1", new Exception("open location service"));
    }
    public void clearLocationUpdates() {
        LocationManager locationManager;
        LocationListener locationListener = this.listener;
        if (locationListener == null || (locationManager = this.locationManager) == null) {
            return;
        }
        locationManager.removeUpdates(locationListener);
        this.listener = null;
    }
}

