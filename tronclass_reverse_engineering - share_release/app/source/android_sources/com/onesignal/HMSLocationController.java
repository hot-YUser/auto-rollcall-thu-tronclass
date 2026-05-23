package com.onesignal;

import android.location.Location;
import com.huawei.hmf.tasks.OnFailureListener;
import com.huawei.hmf.tasks.OnSuccessListener;
import com.huawei.hms.location.FusedLocationProviderClient;
import com.huawei.hms.location.LocationCallback;
import com.huawei.hms.location.LocationRequest;
import com.huawei.hms.location.LocationResult;
import com.huawei.hms.location.LocationServices;
import com.onesignal.OneSignal;
class HMSLocationController extends LocationController {
    private static FusedLocationProviderClient hmsFusedLocationClient;
    static LocationUpdateListener locationUpdateListener;

    HMSLocationController() {
    }

    static void startGetLocation() {
        initHuaweiLocation();
    }

    private static void initHuaweiLocation() {
        synchronized (syncLock) {
            if (hmsFusedLocationClient == null) {
                try {
                    hmsFusedLocationClient = LocationServices.getFusedLocationProviderClient(classContext);
                } catch (Exception e) {
                    OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Huawei LocationServices getFusedLocationProviderClient failed! " + e);
                    fireFailedComplete();
                    return;
                }
            }
            if (lastLocation != null) {
                fireCompleteForLocation(lastLocation);
            } else {
                hmsFusedLocationClient.getLastLocation().addOnSuccessListener(new OnSuccessListener<Location>() { // from class: com.onesignal.HMSLocationController.2
                    public void onSuccess(Location location) {
                        OneSignal.Log(OneSignal.LOG_LEVEL.WARN, "Huawei LocationServices getLastLocation returned location: " + location);
                        if (location == null) {
                            HMSLocationController.fireFailedComplete();
                            return;
                        }
                        LocationController.lastLocation = location;
                        LocationController.fireCompleteForLocation(LocationController.lastLocation);
                        HMSLocationController.locationUpdateListener = new LocationUpdateListener(HMSLocationController.hmsFusedLocationClient);
                    }
                }).addOnFailureListener(new OnFailureListener() { // from class: com.onesignal.HMSLocationController.1
                    public void onFailure(Exception exc) {
                        OneSignal.Log(OneSignal.LOG_LEVEL.ERROR, "Huawei LocationServices getLastLocation failed!", exc);
                        HMSLocationController.fireFailedComplete();
                    }
                });
            }
        }
    }

    static void fireFailedComplete() {
        synchronized (syncLock) {
            hmsFusedLocationClient = null;
        }
    }

    static void onFocusChange() {
        synchronized (syncLock) {
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "HMSLocationController onFocusChange!");
            if (isHMSAvailable() && hmsFusedLocationClient == null) {
                return;
            }
            FusedLocationProviderClient fusedLocationProviderClient = hmsFusedLocationClient;
            if (fusedLocationProviderClient != null) {
                LocationUpdateListener locationUpdateListener2 = locationUpdateListener;
                if (locationUpdateListener2 != null) {
                    fusedLocationProviderClient.removeLocationUpdates(locationUpdateListener2);
                }
                locationUpdateListener = new LocationUpdateListener(hmsFusedLocationClient);
            }
        }
    }

    static class LocationUpdateListener extends LocationCallback {
        private FusedLocationProviderClient huaweiFusedLocationProviderClient;

        LocationUpdateListener(FusedLocationProviderClient fusedLocationProviderClient) {
            this.huaweiFusedLocationProviderClient = fusedLocationProviderClient;
            init();
        }

        private void init() {
            long j = OneSignal.isInForeground() ? 270000L : 570000L;
            LocationRequest priority = LocationRequest.create().setFastestInterval(j).setInterval(j).setMaxWaitTime((long) (j * 1.5d)).setPriority(102);
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "HMSLocationController Huawei LocationServices requestLocationUpdates!");
            this.huaweiFusedLocationProviderClient.requestLocationUpdates(priority, this, LocationController.getLocationHandlerThread().getLooper());
        }

        public void onLocationResult(LocationResult locationResult) {
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "HMSLocationController onLocationResult: " + locationResult);
            if (locationResult != null) {
                LocationController.lastLocation = locationResult.getLastLocation();
            }
        }
    }
}

