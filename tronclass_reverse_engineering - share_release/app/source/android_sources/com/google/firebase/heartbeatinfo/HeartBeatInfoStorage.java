package com.google.firebase.heartbeatinfo;

import android.content.Context;
import android.content.SharedPreferences;
class HeartBeatInfoStorage {
    private static final String GLOBAL = "fire-global";
    private static HeartBeatInfoStorage instance = null;
    private static final String preferencesName = "FirebaseAppHeartBeat";
    private final SharedPreferences sharedPreferences;

    private HeartBeatInfoStorage(Context context) {
        this.sharedPreferences = context.getSharedPreferences(preferencesName, 0);
    }

    HeartBeatInfoStorage(SharedPreferences sharedPreferences) {
        this.sharedPreferences = sharedPreferences;
    }

    static synchronized HeartBeatInfoStorage getInstance(Context context) {
        if (instance == null) {
            instance = new HeartBeatInfoStorage(context);
        }
        return instance;
    }

    synchronized boolean shouldSendSdkHeartBeat(String str, long j) {
        if (!this.sharedPreferences.contains(str)) {
            this.sharedPreferences.edit().putLong(str, j).apply();
            return true;
        }
        if (j - this.sharedPreferences.getLong(str, -1L) < 86400000) {
            return false;
        }
        this.sharedPreferences.edit().putLong(str, j).apply();
        return true;
    }

    synchronized boolean shouldSendGlobalHeartBeat(long j) {
        return shouldSendSdkHeartBeat(GLOBAL, j);
    }
}

