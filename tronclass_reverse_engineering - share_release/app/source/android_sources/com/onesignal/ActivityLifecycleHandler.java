package com.onesignal;

import android.app.Activity;
import android.content.res.Configuration;
import android.view.ViewTreeObserver;
import com.onesignal.OSSystemConditionController;
import com.onesignal.OneSignal;
import java.lang.ref.WeakReference;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
class ActivityLifecycleHandler implements OSSystemConditionController.OSSystemConditionHandler {
    private static final String FOCUS_LOST_WORKER_TAG = "FOCUS_LOST_WORKER_TAG";
    private static final int SYNC_AFTER_BG_DELAY_MS = 2000;
    private final OSFocusHandler focusHandler;
    private static final Map<String, ActivityAvailableListener> sActivityAvailableListeners = new ConcurrentHashMap();
    private static final Map<String, OSSystemConditionController.OSSystemConditionObserver> sSystemConditionObservers = new ConcurrentHashMap();
    private static final Map<String, KeyboardListener> sKeyboardListeners = new ConcurrentHashMap();
    private Activity curActivity = null;
    private boolean nextResumeIsFirstActivity = false;

    void onActivityCreated(Activity activity) {
    }

    static abstract class ActivityAvailableListener {
        void available(Activity activity) {
        }

        void lostFocus() {
        }

        void stopped(Activity activity) {
        }

        ActivityAvailableListener() {
        }
    }

    public ActivityLifecycleHandler(OSFocusHandler oSFocusHandler) {
        this.focusHandler = oSFocusHandler;
    }

    void onConfigurationChanged(Configuration configuration, Activity activity) {
        Activity activity2 = this.curActivity;
        if (activity2 == null || !OSUtils.hasConfigChangeFlag(activity2, 128)) {
            return;
        }
        logOrientationChange(configuration.orientation, activity);
        onOrientationChanged(activity);
    }

    void onActivityStarted(Activity activity) {
        this.focusHandler.startOnStartFocusWork();
    }

    void onActivityResumed(Activity activity) {
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "onActivityResumed: " + activity);
        setCurActivity(activity);
        logCurActivity();
        handleFocus();
    }

    void onActivityPaused(Activity activity) {
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "onActivityPaused: " + activity);
        if (activity == this.curActivity) {
            this.curActivity = null;
            handleLostFocus();
        }
        logCurActivity();
    }

    void onActivityStopped(Activity activity) {
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "onActivityStopped: " + activity);
        if (activity == this.curActivity) {
            this.curActivity = null;
            handleLostFocus();
        }
        Iterator<Map.Entry<String, ActivityAvailableListener>> it = sActivityAvailableListeners.entrySet().iterator();
        while (it.hasNext()) {
            it.next().getValue().stopped(activity);
        }
        logCurActivity();
        if (this.curActivity == null) {
            this.focusHandler.startOnStopFocusWork();
        }
    }

    void onActivityDestroyed(Activity activity) {
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "onActivityDestroyed: " + activity);
        sKeyboardListeners.clear();
        if (activity == this.curActivity) {
            this.curActivity = null;
            handleLostFocus();
        }
        logCurActivity();
    }

    private void logCurActivity() {
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "curActivity is NOW: " + (this.curActivity != null ? "" + this.curActivity.getClass().getName() + ":" + this.curActivity : "null"));
    }

    private void logOrientationChange(int i, Activity activity) {
        if (i == 2) {
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "Configuration Orientation Change: LANDSCAPE (" + i + ") on activity: " + activity);
        } else if (i == 1) {
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "Configuration Orientation Change: PORTRAIT (" + i + ") on activity: " + activity);
        }
    }

    private void onOrientationChanged(Activity activity) {
        handleLostFocus();
        Iterator<Map.Entry<String, ActivityAvailableListener>> it = sActivityAvailableListeners.entrySet().iterator();
        while (it.hasNext()) {
            it.next().getValue().stopped(activity);
        }
        Iterator<Map.Entry<String, ActivityAvailableListener>> it2 = sActivityAvailableListeners.entrySet().iterator();
        while (it2.hasNext()) {
            it2.next().getValue().available(this.curActivity);
        }
        ViewTreeObserver viewTreeObserver = this.curActivity.getWindow().getDecorView().getViewTreeObserver();
        for (Map.Entry<String, OSSystemConditionController.OSSystemConditionObserver> entry : sSystemConditionObservers.entrySet()) {
            KeyboardListener keyboardListener = new KeyboardListener(this, entry.getValue(), entry.getKey());
            viewTreeObserver.addOnGlobalLayoutListener(keyboardListener);
            sKeyboardListeners.put(entry.getKey(), keyboardListener);
        }
        handleFocus();
    }

    /* high-level source view WARN: Type inference failed for: r0v3, types: [com.onesignal.ActivityLifecycleHandler$1] */
    private void handleLostFocus() {
        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "ActivityLifecycleHandler Handling lost focus");
        OSFocusHandler oSFocusHandler = this.focusHandler;
        if (oSFocusHandler != null) {
            if (!oSFocusHandler.hasBackgrounded() || this.focusHandler.hasCompleted()) {
                new Thread() { // from class: com.onesignal.ActivityLifecycleHandler.1
                    @Override // java.lang.Thread, java.lang.Runnable
                    public void run() {
                        OneSignal.getFocusTimeController().appStopped();
                        ActivityLifecycleHandler.this.focusHandler.startOnLostFocusWorker(ActivityLifecycleHandler.FOCUS_LOST_WORKER_TAG, 2000L, OneSignal.appContext);
                    }
                }.start();
            }
        }
    }

    private void handleFocus() {
        OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "ActivityLifecycleHandler handleFocus, nextResumeIsFirstActivity: " + this.nextResumeIsFirstActivity);
        if (this.focusHandler.hasBackgrounded() || this.nextResumeIsFirstActivity) {
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "ActivityLifecycleHandler reset background state, call app focus");
            this.nextResumeIsFirstActivity = false;
            this.focusHandler.startOnFocusWork();
        } else {
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.DEBUG, "ActivityLifecycleHandler cancel background lost focus worker");
            this.focusHandler.cancelOnLostFocusWorker(FOCUS_LOST_WORKER_TAG, OneSignal.appContext);
        }
    }

    void addSystemConditionObserver(String str, OSSystemConditionController.OSSystemConditionObserver oSSystemConditionObserver) {
        Activity activity = this.curActivity;
        if (activity != null) {
            ViewTreeObserver viewTreeObserver = activity.getWindow().getDecorView().getViewTreeObserver();
            KeyboardListener keyboardListener = new KeyboardListener(this, oSSystemConditionObserver, str);
            viewTreeObserver.addOnGlobalLayoutListener(keyboardListener);
            sKeyboardListeners.put(str, keyboardListener);
        }
        sSystemConditionObservers.put(str, oSSystemConditionObserver);
    }

    @Override // com.onesignal.OSSystemConditionController.OSSystemConditionHandler
    public void removeSystemConditionObserver(String str, KeyboardListener keyboardListener) {
        Activity activity = this.curActivity;
        if (activity != null) {
            activity.getWindow().getDecorView().getViewTreeObserver().removeOnGlobalLayoutListener(keyboardListener);
        }
        sKeyboardListeners.remove(str);
        sSystemConditionObservers.remove(str);
    }

    void addActivityAvailableListener(String str, ActivityAvailableListener activityAvailableListener) {
        sActivityAvailableListeners.put(str, activityAvailableListener);
        Activity activity = this.curActivity;
        if (activity != null) {
            activityAvailableListener.available(activity);
        }
    }

    void removeActivityAvailableListener(String str) {
        sActivityAvailableListeners.remove(str);
    }

    public Activity getCurActivity() {
        return this.curActivity;
    }

    public void setCurActivity(Activity activity) {
        this.curActivity = activity;
        Iterator<Map.Entry<String, ActivityAvailableListener>> it = sActivityAvailableListeners.entrySet().iterator();
        while (it.hasNext()) {
            it.next().getValue().available(this.curActivity);
        }
        try {
            ViewTreeObserver viewTreeObserver = this.curActivity.getWindow().getDecorView().getViewTreeObserver();
            for (Map.Entry<String, OSSystemConditionController.OSSystemConditionObserver> entry : sSystemConditionObservers.entrySet()) {
                KeyboardListener keyboardListener = new KeyboardListener(this, entry.getValue(), entry.getKey());
                viewTreeObserver.addOnGlobalLayoutListener(keyboardListener);
                sKeyboardListeners.put(entry.getKey(), keyboardListener);
            }
        } catch (RuntimeException e) {
            e.printStackTrace();
        }
    }

    void setNextResumeIsFirstActivity(boolean z) {
        this.nextResumeIsFirstActivity = z;
    }

    static class KeyboardListener implements ViewTreeObserver.OnGlobalLayoutListener {
        private final String key;
        private final OSSystemConditionController.OSSystemConditionObserver observer;
        private final OSSystemConditionController.OSSystemConditionHandler systemConditionListener;

        private KeyboardListener(OSSystemConditionController.OSSystemConditionHandler oSSystemConditionHandler, OSSystemConditionController.OSSystemConditionObserver oSSystemConditionObserver, String str) {
            this.systemConditionListener = oSSystemConditionHandler;
            this.observer = oSSystemConditionObserver;
            this.key = str;
        }

        @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
        public void onGlobalLayout() {
            if (OSViewUtils.isKeyboardUp(new WeakReference(OneSignal.getCurrentActivity()))) {
                return;
            }
            this.systemConditionListener.removeSystemConditionObserver(this.key, this);
            this.observer.systemConditionChanged();
        }
    }
}

