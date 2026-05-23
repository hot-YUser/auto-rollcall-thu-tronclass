package com.onesignal;

import android.os.SystemClock;
public class OSTimeImpl implements OSTime {
    @Override // com.onesignal.OSTime
    public long getCurrentTimeMillis() {
        return System.currentTimeMillis();
    }

    @Override // com.onesignal.OSTime
    public long getElapsedRealtime() {
        return SystemClock.elapsedRealtime();
    }
}

