package com.onesignal;

import android.os.Handler;
import android.os.HandlerThread;
import com.onesignal.OneSignal;
class OSTimeoutHandler extends HandlerThread {
    private static final Object SYNC_LOCK = new Object();
    private static final String TAG = "com.onesignal.OSTimeoutHandler";
    private static OSTimeoutHandler timeoutHandler;
    private final Handler mHandler;

    static OSTimeoutHandler getTimeoutHandler() {
        if (timeoutHandler == null) {
            synchronized (SYNC_LOCK) {
                if (timeoutHandler == null) {
                    timeoutHandler = new OSTimeoutHandler();
                }
            }
        }
        return timeoutHandler;
    }

    private OSTimeoutHandler() {
        super(TAG);
        start();
        this.mHandler = new Handler(getLooper());
    }

    void startTimeout(long j, Runnable runnable) {
        synchronized (SYNC_LOCK) {
            destroyTimeout(runnable);
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "Running startTimeout with timeout: " + j + " and runnable: " + runnable.toString());
            this.mHandler.postDelayed(runnable, j);
        }
    }

    void destroyTimeout(Runnable runnable) {
        synchronized (SYNC_LOCK) {
            OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "Running destroyTimeout with runnable: " + runnable.toString());
            this.mHandler.removeCallbacks(runnable);
        }
    }
}

