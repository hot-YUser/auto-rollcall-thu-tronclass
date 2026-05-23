package com.onesignal;

import android.content.Context;
import android.location.Location;
import android.os.Build;
import android.os.Handler;
import android.os.HandlerThread;
import com.onesignal.AndroidSupportV4Compat;
import com.onesignal.OneSignal;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
class LocationController {
    static final long BACKGROUND_UPDATE_TIME_MS = 570000;
    static final long FOREGROUND_UPDATE_TIME_MS = 270000;
    private static final long TIME_BACKGROUND_SEC = 600;
    private static final long TIME_FOREGROUND_SEC = 300;
    static Context classContext;
    static Thread fallbackFailThread;
    static Location lastLocation;
    private static boolean locationCoarse;
    private static LocationHandlerThread locationHandlerThread;
    static String requestPermission;
    private static final List<LocationPromptCompletionHandler> promptHandlers = new ArrayList();
    private static ConcurrentHashMap<PermissionType, LocationHandler> locationHandlers = new ConcurrentHashMap<>();
    static final Object syncLock = new Object() { // from class: com.onesignal.LocationController.1
    };

    interface LocationHandler {
        PermissionType getType();

        void onComplete(LocationPoint locationPoint);
    }

    enum PermissionType {
        STARTUP,
        PROMPT_LOCATION,
        SYNC_SERVICE
    }

    LocationController() {
    }

    static LocationHandlerThread getLocationHandlerThread() {
        if (locationHandlerThread == null) {
            synchronized (syncLock) {
                if (locationHandlerThread == null) {
                    locationHandlerThread = new LocationHandlerThread();
                }
            }
        }
        return locationHandlerThread;
    }

    static class LocationPoint {
        Float accuracy;
        Boolean bg;
        Double lat;
        Double log;
        Long timeStamp;
        Integer type;

        LocationPoint() {
        }

        public String toString() {
            return "LocationPoint{lat=" + this.lat + ", log=" + this.log + ", accuracy=" + this.accuracy + ", type=" + this.type + ", bg=" + this.bg + ", timeStamp=" + this.timeStamp + '}';
        }
    }

    static abstract class LocationPromptCompletionHandler implements LocationHandler {
        void onAnswered(OneSignal.PromptActionResult promptActionResult) {
        }

        LocationPromptCompletionHandler() {
        }
    }

    static boolean scheduleUpdate(Context context) {
        if (!hasLocationPermission(context)) {
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "LocationController scheduleUpdate not possible, location permission not enabled");
            return false;
        }
        if (!OneSignal.isLocationShared()) {
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "LocationController scheduleUpdate not possible, location shared not enabled");
            return false;
        }
        long currentTimeMillis = OneSignal.getTime().getCurrentTimeMillis() - getLastLocationTime();
        long j = (OneSignal.isInForeground() ? TIME_FOREGROUND_SEC : TIME_BACKGROUND_SEC) * 1000;
        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "LocationController scheduleUpdate lastTime: " + currentTimeMillis + " minTime: " + j);
        OSSyncService.getInstance().scheduleLocationUpdateTask(context, j - currentTimeMillis);
        return true;
    }

    private static void setLastLocationTime(long j) {
        OneSignalPrefs.saveLong(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_LAST_LOCATION_TIME, j);
    }

    private static long getLastLocationTime() {
        return OneSignalPrefs.getLong(OneSignalPrefs.PREFS_ONESIGNAL, OneSignalPrefs.PREFS_OS_LAST_LOCATION_TIME, -600000L);
    }

    private static boolean hasLocationPermission(Context context) {
        return AndroidSupportV4Compat.ContextCompat.checkSelfPermission(context, "android.permission.ACCESS_FINE_LOCATION") == 0 || AndroidSupportV4Compat.ContextCompat.checkSelfPermission(context, "android.permission.ACCESS_COARSE_LOCATION") == 0;
    }

    private static void addPromptHandlerIfAvailable(LocationHandler locationHandler) {
        if (locationHandler instanceof LocationPromptCompletionHandler) {
            List<LocationPromptCompletionHandler> list = promptHandlers;
            synchronized (list) {
                list.add((LocationPromptCompletionHandler) locationHandler);
            }
        }
    }

    static void sendAndClearPromptHandlers(boolean z, OneSignal.PromptActionResult promptActionResult) {
        if (!z) {
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "LocationController sendAndClearPromptHandlers from non prompt flow");
            return;
        }
        List<LocationPromptCompletionHandler> list = promptHandlers;
        synchronized (list) {
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "LocationController calling prompt handlers");
            Iterator<LocationPromptCompletionHandler> it = list.iterator();
            while (it.hasNext()) {
                it.next().onAnswered(promptActionResult);
            }
            promptHandlers.clear();
        }
    }

    static void getLocation(Context context, boolean z, boolean z2, LocationHandler locationHandler) {
        int iCheckSelfPermission;
        addPromptHandlerIfAvailable(locationHandler);
        classContext = context;
        locationHandlers.put(locationHandler.getType(), locationHandler);
        if (!OneSignal.isLocationShared()) {
            sendAndClearPromptHandlers(z, OneSignal.PromptActionResult.ERROR);
            fireFailedComplete();
            return;
        }
        int iCheckSelfPermission2 = AndroidSupportV4Compat.ContextCompat.checkSelfPermission(context, "android.permission.ACCESS_FINE_LOCATION");
        if (iCheckSelfPermission2 == -1) {
            iCheckSelfPermission = AndroidSupportV4Compat.ContextCompat.checkSelfPermission(context, "android.permission.ACCESS_COARSE_LOCATION");
            locationCoarse = true;
        } else {
            iCheckSelfPermission = -1;
        }
        int iCheckSelfPermission3 = Build.VERSION.SDK_INT >= 29 ? AndroidSupportV4Compat.ContextCompat.checkSelfPermission(context, "android.permission.ACCESS_BACKGROUND_LOCATION") : -1;
        if (iCheckSelfPermission2 != 0) {
            GetPackageInfoResult info = PackageInfoHelper.INSTANCE.getInfo(context, context.getPackageName(), 4096);
            if (!info.getSuccessful() || info.getPackageInfo() == null) {
                sendAndClearPromptHandlers(z, OneSignal.PromptActionResult.ERROR);
                return;
            }
            List listAsList = Arrays.asList(info.getPackageInfo().requestedPermissions);
            OneSignal.PromptActionResult promptActionResult = OneSignal.PromptActionResult.PERMISSION_DENIED;
            if (listAsList.contains("android.permission.ACCESS_FINE_LOCATION")) {
                requestPermission = "android.permission.ACCESS_FINE_LOCATION";
            } else if (!listAsList.contains("android.permission.ACCESS_COARSE_LOCATION")) {
                OneSignal.onesignalLog(OneSignal.LOG_LEVEL.INFO, "Location permissions not added on AndroidManifest file");
                promptActionResult = OneSignal.PromptActionResult.LOCATION_PERMISSIONS_MISSING_MANIFEST;
            } else if (iCheckSelfPermission != 0) {
                requestPermission = "android.permission.ACCESS_COARSE_LOCATION";
            } else if (Build.VERSION.SDK_INT >= 29 && listAsList.contains("android.permission.ACCESS_BACKGROUND_LOCATION")) {
                requestPermission = "android.permission.ACCESS_BACKGROUND_LOCATION";
            }
            if (requestPermission != null && z) {
                LocationPermissionController.INSTANCE.prompt(z2, requestPermission);
                return;
            } else if (iCheckSelfPermission == 0) {
                sendAndClearPromptHandlers(z, OneSignal.PromptActionResult.PERMISSION_GRANTED);
                startGetLocation();
                return;
            } else {
                sendAndClearPromptHandlers(z, promptActionResult);
                fireFailedComplete();
                return;
            }
        }
        if (Build.VERSION.SDK_INT >= 29 && iCheckSelfPermission3 != 0) {
            backgroundLocationPermissionLogic(context, z, z2);
        } else {
            sendAndClearPromptHandlers(z, OneSignal.PromptActionResult.PERMISSION_GRANTED);
            startGetLocation();
        }
    }

    private static void backgroundLocationPermissionLogic(Context context, boolean z, boolean z2) {
        GetPackageInfoResult info = PackageInfoHelper.INSTANCE.getInfo(context, context.getPackageName(), 4096);
        if (!info.getSuccessful() || info.getPackageInfo() == null) {
            sendAndClearPromptHandlers(z, OneSignal.PromptActionResult.ERROR);
            return;
        }
        if (Arrays.asList(info.getPackageInfo().requestedPermissions).contains("android.permission.ACCESS_BACKGROUND_LOCATION")) {
            requestPermission = "android.permission.ACCESS_BACKGROUND_LOCATION";
        }
        if (requestPermission != null && z) {
            LocationPermissionController.INSTANCE.prompt(z2, requestPermission);
        } else {
            sendAndClearPromptHandlers(z, OneSignal.PromptActionResult.PERMISSION_GRANTED);
            startGetLocation();
        }
    }

    static void startGetLocation() {
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "LocationController startGetLocation with lastLocation: " + lastLocation);
        try {
            if (isGooglePlayServicesAvailable()) {
                GMSLocationController.startGetLocation();
            } else if (isHMSAvailable()) {
                HMSLocationController.startGetLocation();
            } else {
                OneSignal.Log(OneSignal.LOG_LEVEL.WARN, "LocationController startGetLocation not possible, no location dependency found");
                fireFailedComplete();
            }
        } catch (Throwable th) {
            OneSignal.Log(OneSignal.LOG_LEVEL.WARN, "Location permission exists but there was an error initializing: ", th);
            fireFailedComplete();
        }
    }

    static void onFocusChange() {
        synchronized (syncLock) {
            if (isGooglePlayServicesAvailable()) {
                GMSLocationController.onFocusChange();
            } else {
                if (isHMSAvailable()) {
                    HMSLocationController.onFocusChange();
                }
            }
        }
    }

    static boolean isGooglePlayServicesAvailable() {
        return OSUtils.isAndroidDeviceType() && OSUtils.hasGMSLocationLibrary();
    }

    static boolean isHMSAvailable() {
        return OSUtils.isHuaweiDeviceType() && OSUtils.hasHMSLocationLibrary();
    }

    static void fireFailedComplete() {
        synchronized (syncLock) {
            if (isGooglePlayServicesAvailable()) {
                GMSLocationController.fireFailedComplete();
            } else if (isHMSAvailable()) {
                HMSLocationController.fireFailedComplete();
            }
        }
        fireComplete(null);
    }

    private static void fireComplete(LocationPoint locationPoint) {
        Thread thread;
        HashMap map = new HashMap();
        synchronized (LocationController.class) {
            map.putAll(locationHandlers);
            locationHandlers.clear();
            thread = fallbackFailThread;
        }
        Iterator it = map.keySet().iterator();
        while (it.hasNext()) {
            ((LocationHandler) map.get((PermissionType) it.next())).onComplete(locationPoint);
        }
        if (thread != null && !Thread.currentThread().equals(thread)) {
            thread.interrupt();
        }
        if (thread == fallbackFailThread) {
            synchronized (LocationController.class) {
                if (thread == fallbackFailThread) {
                    fallbackFailThread = null;
                }
            }
        }
        setLastLocationTime(OneSignal.getTime().getCurrentTimeMillis());
    }

    protected static void fireCompleteForLocation(Location location) {
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "LocationController fireCompleteForLocation with location: " + location);
        LocationPoint locationPoint = new LocationPoint();
        locationPoint.accuracy = Float.valueOf(location.getAccuracy());
        locationPoint.bg = Boolean.valueOf(!OneSignal.isInForeground());
        locationPoint.type = Integer.valueOf(!locationCoarse ? 1 : 0);
        locationPoint.timeStamp = Long.valueOf(location.getTime());
        if (locationCoarse) {
            locationPoint.lat = Double.valueOf(new BigDecimal(location.getLatitude()).setScale(7, RoundingMode.HALF_UP).doubleValue());
            locationPoint.log = Double.valueOf(new BigDecimal(location.getLongitude()).setScale(7, RoundingMode.HALF_UP).doubleValue());
        } else {
            locationPoint.lat = Double.valueOf(location.getLatitude());
            locationPoint.log = Double.valueOf(location.getLongitude());
        }
        fireComplete(locationPoint);
        scheduleUpdate(classContext);
    }

    protected static class LocationHandlerThread extends HandlerThread {
        Handler mHandler;

        LocationHandlerThread() {
            super("OSH_LocationHandlerThread");
            start();
            this.mHandler = new Handler(getLooper());
        }
    }
}

