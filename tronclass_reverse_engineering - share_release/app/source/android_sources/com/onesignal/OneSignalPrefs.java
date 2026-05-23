package com.onesignal;

import android.content.SharedPreferences;
import android.os.Handler;
import android.os.HandlerThread;
import com.onesignal.OneSignal;
import java.util.HashMap;
import java.util.Set;
class OneSignalPrefs {
    static final String PREFS_EXISTING_PURCHASES = "ExistingPurchases";
    public static final String PREFS_GT_APP_ID = "GT_APP_ID";
    public static final String PREFS_GT_DO_NOT_SHOW_MISSING_GPS = "GT_DO_NOT_SHOW_MISSING_GPS";
    public static final String PREFS_GT_FIREBASE_TRACKING_ENABLED = "GT_FIREBASE_TRACKING_ENABLED";
    public static final String PREFS_GT_PLAYER_ID = "GT_PLAYER_ID";
    public static final String PREFS_GT_REGISTRATION_ID = "GT_REGISTRATION_ID";
    public static final String PREFS_GT_SOUND_ENABLED = "GT_SOUND_ENABLED";
    public static final String PREFS_GT_UNSENT_ACTIVE_TIME = "GT_UNSENT_ACTIVE_TIME";
    public static final String PREFS_GT_VIBRATE_ENABLED = "GT_VIBRATE_ENABLED";
    public static final String PREFS_ONESIGNAL = "OneSignal";
    public static final String PREFS_ONESIGNAL_ACCEPTED_NOTIFICATION_LAST = "ONESIGNAL_ACCEPTED_NOTIFICATION_LAST";
    public static final String PREFS_ONESIGNAL_EMAIL_ADDRESS_LAST = "PREFS_ONESIGNAL_EMAIL_ADDRESS_LAST";
    public static final String PREFS_ONESIGNAL_EMAIL_ID_LAST = "PREFS_ONESIGNAL_EMAIL_ID_LAST";
    public static final String PREFS_ONESIGNAL_PERMISSION_ACCEPTED_LAST = "ONESIGNAL_PERMISSION_ACCEPTED_LAST";
    public static final String PREFS_ONESIGNAL_PLAYER_ID_LAST = "ONESIGNAL_PLAYER_ID_LAST";
    public static final String PREFS_ONESIGNAL_PUSH_TOKEN_LAST = "ONESIGNAL_PUSH_TOKEN_LAST";
    public static final String PREFS_ONESIGNAL_SUBSCRIPTION = "ONESIGNAL_SUBSCRIPTION";
    public static final String PREFS_ONESIGNAL_SUBSCRIPTION_LAST = "ONESIGNAL_SUBSCRIPTION_LAST";
    public static final String PREFS_ONESIGNAL_SYNCED_SUBSCRIPTION = "ONESIGNAL_SYNCED_SUBSCRIPTION";
    public static final String PREFS_ONESIGNAL_USERSTATE_DEPENDVALYES_ = "ONESIGNAL_USERSTATE_DEPENDVALYES_";
    public static final String PREFS_ONESIGNAL_USERSTATE_SYNCVALYES_ = "ONESIGNAL_USERSTATE_SYNCVALYES_";
    public static final String PREFS_ONESIGNAL_USER_PROVIDED_CONSENT = "ONESIGNAL_USER_PROVIDED_CONSENT";
    public static final String PREFS_OS_ATTRIBUTED_INFLUENCES = "PREFS_OS_ATTRIBUTED_INFLUENCES";
    public static final String PREFS_OS_CACHED_IAMS = "PREFS_OS_CACHED_IAMS";
    public static final String PREFS_OS_CLEAR_GROUP_SUMMARY_CLICK = "OS_CLEAR_GROUP_SUMMARY_CLICK";
    public static final String PREFS_OS_CLICKED_CLICK_IDS_IAMS = "PREFS_OS_CLICKED_CLICK_IDS_IAMS";
    public static final String PREFS_OS_DISABLE_GMS_MISSING_PROMPT = "PREFS_OS_DISABLE_GMS_MISSING_PROMPT";
    public static final String PREFS_OS_DISMISSED_IAMS = "PREFS_OS_DISPLAYED_IAMS";
    public static final String PREFS_OS_EMAIL_ID = "OS_EMAIL_ID";
    public static final String PREFS_OS_ETAG_PREFIX = "PREFS_OS_ETAG_PREFIX_";
    public static final String PREFS_OS_FILTER_OTHER_GCM_RECEIVERS = "OS_FILTER_OTHER_GCM_RECEIVERS";
    public static final String PREFS_OS_HTTP_CACHE_PREFIX = "PREFS_OS_HTTP_CACHE_PREFIX_";
    public static final String PREFS_OS_IMPRESSIONED_IAMS = "PREFS_OS_IMPRESSIONED_IAMS";
    public static final String PREFS_OS_LAST_LOCATION_TIME = "OS_LAST_LOCATION_TIME";
    public static final String PREFS_OS_LAST_SESSION_TIME = "OS_LAST_SESSION_TIME";
    public static final String PREFS_OS_LAST_TIME_IAM_DISMISSED = "PREFS_OS_LAST_TIME_IAM_DISMISSED";
    public static final String PREFS_OS_LOCATION_SHARED = "PREFS_OS_LOCATION_SHARED";
    static final String PREFS_OS_OUTCOMES_V2 = "PREFS_OS_OUTCOMES_V2";
    public static final String PREFS_OS_PAGE_IMPRESSIONED_IAMS = "PREFS_OS_PAGE_IMPRESSIONED_IAMS";
    public static final String PREFS_OS_RECEIVE_RECEIPTS_ENABLED = "PREFS_OS_RECEIVE_RECEIPTS_ENABLED";
    public static final String PREFS_OS_REQUIRES_USER_PRIVACY_CONSENT = "PREFS_OS_REQUIRES_USER_PRIVACY_CONSENT";
    public static final String PREFS_OS_RESTORE_TTL_FILTER = "OS_RESTORE_TTL_FILTER";
    public static final String PREFS_OS_SMS_ID = "PREFS_OS_SMS_ID";
    public static final String PREFS_OS_SMS_ID_LAST = "PREFS_OS_SMS_ID_LAST";
    public static final String PREFS_OS_SMS_NUMBER_LAST = "PREFS_OS_SMS_NUMBER_LAST";
    public static final String PREFS_OS_UNSENT_ATTRIBUTED_ACTIVE_TIME = "OS_UNSENT_ATTRIBUTED_ACTIVE_TIME";
    public static final String PREFS_OS_UNSUBSCRIBE_WHEN_NOTIFICATIONS_DISABLED = "PREFS_OS_UNSUBSCRIBE_WHEN_NOTIFICATIONS_DISABLED";
    public static final String PREFS_PLAYER_PURCHASES = "GTPlayerPurchases";
    static final String PREFS_PURCHASE_TOKENS = "purchaseTokens";
    public static final String PREFS_TRIGGERS = "OneSignalTriggers";
    public static WritePrefHandlerThread prefsHandler;
    static HashMap<String, HashMap<String, Object>> prefsToApply;

    OneSignalPrefs() {
    }

    static {
        initializePool();
    }

    public static class WritePrefHandlerThread extends HandlerThread {
        private static final int WRITE_CALL_DELAY_TO_BUFFER_MS = 200;
        private long lastSyncTime;
        private Handler mHandler;
        private boolean threadStartCalled;

        WritePrefHandlerThread(String str) {
            super(str);
            this.lastSyncTime = 0L;
        }

        @Override // android.os.HandlerThread
        protected void onLooperPrepared() {
            super.onLooperPrepared();
            this.mHandler = new Handler(getLooper());
            scheduleFlushToDisk();
        }
        public synchronized void startDelayedWrite() {
            if (OneSignal.appContext == null) {
                return;
            }
            startThread();
            scheduleFlushToDisk();
        }

        private void startThread() {
            if (this.threadStartCalled) {
                return;
            }
            start();
            this.threadStartCalled = true;
        }

        private synchronized void scheduleFlushToDisk() {
            Handler handler = this.mHandler;
            if (handler == null) {
                return;
            }
            handler.removeCallbacksAndMessages(null);
            if (this.lastSyncTime == 0) {
                this.lastSyncTime = OneSignal.getTime().getCurrentTimeMillis();
            }
            long currentTimeMillis = (this.lastSyncTime - OneSignal.getTime().getCurrentTimeMillis()) + 200;
            this.mHandler.postDelayed(new Runnable() { // from class: com.onesignal.OneSignalPrefs.WritePrefHandlerThread.1
                @Override // java.lang.Runnable
                public void run() {
                    WritePrefHandlerThread.this.flushBufferToDisk();
                }
            }, currentTimeMillis);
        }
        public void flushBufferToDisk() {
            for (String str : OneSignalPrefs.prefsToApply.keySet()) {
                SharedPreferences.Editor editorEdit = OneSignalPrefs.getSharedPrefsByName(str).edit();
                HashMap<String, Object> map = OneSignalPrefs.prefsToApply.get(str);
                synchronized (map) {
                    for (String str2 : map.keySet()) {
                        Object obj = map.get(str2);
                        if (obj instanceof String) {
                            editorEdit.putString(str2, (String) obj);
                        } else if (obj instanceof Boolean) {
                            editorEdit.putBoolean(str2, ((Boolean) obj).booleanValue());
                        } else if (obj instanceof Integer) {
                            editorEdit.putInt(str2, ((Integer) obj).intValue());
                        } else if (obj instanceof Long) {
                            editorEdit.putLong(str2, ((Long) obj).longValue());
                        } else if (obj instanceof Set) {
                            editorEdit.putStringSet(str2, (Set) obj);
                        } else if (obj == null) {
                            editorEdit.remove(str2);
                        }
                    }
                    map.clear();
                }
                editorEdit.apply();
            }
            this.lastSyncTime = OneSignal.getTime().getCurrentTimeMillis();
        }
    }

    public static void initializePool() {
        HashMap<String, HashMap<String, Object>> map = new HashMap<>();
        prefsToApply = map;
        map.put(PREFS_ONESIGNAL, new HashMap<>());
        prefsToApply.put(PREFS_PLAYER_PURCHASES, new HashMap<>());
        prefsToApply.put(PREFS_TRIGGERS, new HashMap<>());
        prefsHandler = new WritePrefHandlerThread("OSH_WritePrefs");
    }

    public static void startDelayedWrite() {
        prefsHandler.startDelayedWrite();
    }

    public static void saveString(String str, String str2, String str3) {
        save(str, str2, str3);
    }

    public static void saveStringSet(String str, String str2, Set<String> set) {
        save(str, str2, set);
    }

    public static void saveBool(String str, String str2, boolean z) {
        save(str, str2, Boolean.valueOf(z));
    }

    public static void saveInt(String str, String str2, int i) {
        save(str, str2, Integer.valueOf(i));
    }

    public static void saveLong(String str, String str2, long j) {
        save(str, str2, Long.valueOf(j));
    }

    public static void saveObject(String str, String str2, Object obj) {
        save(str, str2, obj);
    }

    private static void save(String str, String str2, Object obj) {
        HashMap<String, Object> map = prefsToApply.get(str);
        synchronized (map) {
            map.put(str2, obj);
        }
        startDelayedWrite();
    }

    static String getString(String str, String str2, String str3) {
        return (String) get(str, str2, String.class, str3);
    }

    static boolean getBool(String str, String str2, boolean z) {
        return ((Boolean) get(str, str2, Boolean.class, Boolean.valueOf(z))).booleanValue();
    }

    static int getInt(String str, String str2, int i) {
        return ((Integer) get(str, str2, Integer.class, Integer.valueOf(i))).intValue();
    }

    static long getLong(String str, String str2, long j) {
        return ((Long) get(str, str2, Long.class, Long.valueOf(j))).longValue();
    }

    public static Set<String> getStringSet(String str, String str2, Set<String> set) {
        return (Set) get(str, str2, Set.class, set);
    }

    static Object getObject(String str, String str2, Object obj) {
        return get(str, str2, Object.class, obj);
    }

    private static Object get(String str, String str2, Class cls, Object obj) {
        HashMap<String, Object> map = prefsToApply.get(str);
        synchronized (map) {
            if (cls.equals(Object.class) && map.containsKey(str2)) {
                return true;
            }
            Object obj2 = map.get(str2);
            if (obj2 == null && !map.containsKey(str2)) {
                SharedPreferences sharedPrefsByName = getSharedPrefsByName(str);
                if (sharedPrefsByName == null) {
                    return obj;
                }
                if (cls.equals(String.class)) {
                    return sharedPrefsByName.getString(str2, (String) obj);
                }
                if (cls.equals(Boolean.class)) {
                    return Boolean.valueOf(sharedPrefsByName.getBoolean(str2, ((Boolean) obj).booleanValue()));
                }
                if (cls.equals(Integer.class)) {
                    return Integer.valueOf(sharedPrefsByName.getInt(str2, ((Integer) obj).intValue()));
                }
                if (cls.equals(Long.class)) {
                    return Long.valueOf(sharedPrefsByName.getLong(str2, ((Long) obj).longValue()));
                }
                if (cls.equals(Set.class)) {
                    return sharedPrefsByName.getStringSet(str2, (Set) obj);
                }
                if (cls.equals(Object.class)) {
                    return Boolean.valueOf(sharedPrefsByName.contains(str2));
                }
                return null;
            }
            return obj2;
        }
    }

    static synchronized SharedPreferences getSharedPrefsByName(String str) {
        if (OneSignal.appContext == null) {
            OneSignal.Log(OneSignal.LOG_LEVEL.WARN, "OneSignal.appContext null, could not read " + str + " from getSharedPreferences.", new Throwable());
            return null;
        }
        return OneSignal.appContext.getSharedPreferences(str, 0);
    }
}

