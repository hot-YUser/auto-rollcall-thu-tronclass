package com.onesignal;

import android.app.Activity;
import android.app.Application;
import android.content.ComponentCallbacks;
import android.content.res.Configuration;
import android.os.Bundle;
class ActivityLifecycleListener implements Application.ActivityLifecycleCallbacks {
    private static ActivityLifecycleHandler activityLifecycleHandler;
    private static ComponentCallbacks configuration;
    private static ActivityLifecycleListener instance;

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivitySaveInstanceState(Activity activity, Bundle bundle) {
    }

    ActivityLifecycleListener() {
    }

    static void registerActivityLifecycleCallbacks(Application application) {
        if (instance == null) {
            ActivityLifecycleListener activityLifecycleListener = new ActivityLifecycleListener();
            instance = activityLifecycleListener;
            application.registerActivityLifecycleCallbacks(activityLifecycleListener);
        }
        if (activityLifecycleHandler == null) {
            activityLifecycleHandler = new ActivityLifecycleHandler(new OSFocusHandler());
        }
        if (configuration == null) {
            ComponentCallbacks componentCallbacks = new ComponentCallbacks() { // from class: com.onesignal.ActivityLifecycleListener.1
                @Override // android.content.ComponentCallbacks
                public void onLowMemory() {
                }

                @Override // android.content.ComponentCallbacks
                public void onConfigurationChanged(Configuration configuration2) {
                    ActivityLifecycleListener.activityLifecycleHandler.onConfigurationChanged(configuration2, ActivityLifecycleListener.activityLifecycleHandler.getCurActivity());
                }
            };
            configuration = componentCallbacks;
            application.registerComponentCallbacks(componentCallbacks);
        }
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityCreated(Activity activity, Bundle bundle) {
        ActivityLifecycleHandler activityLifecycleHandler2 = activityLifecycleHandler;
        if (activityLifecycleHandler2 != null) {
            activityLifecycleHandler2.onActivityCreated(activity);
        }
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityStarted(Activity activity) {
        ActivityLifecycleHandler activityLifecycleHandler2 = activityLifecycleHandler;
        if (activityLifecycleHandler2 != null) {
            activityLifecycleHandler2.onActivityStarted(activity);
        }
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityResumed(Activity activity) {
        ActivityLifecycleHandler activityLifecycleHandler2 = activityLifecycleHandler;
        if (activityLifecycleHandler2 != null) {
            activityLifecycleHandler2.onActivityResumed(activity);
        }
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityPaused(Activity activity) {
        ActivityLifecycleHandler activityLifecycleHandler2 = activityLifecycleHandler;
        if (activityLifecycleHandler2 != null) {
            activityLifecycleHandler2.onActivityPaused(activity);
        }
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityStopped(Activity activity) {
        ActivityLifecycleHandler activityLifecycleHandler2 = activityLifecycleHandler;
        if (activityLifecycleHandler2 != null) {
            activityLifecycleHandler2.onActivityStopped(activity);
        }
    }

    @Override // android.app.Application.ActivityLifecycleCallbacks
    public void onActivityDestroyed(Activity activity) {
        ActivityLifecycleHandler activityLifecycleHandler2 = activityLifecycleHandler;
        if (activityLifecycleHandler2 != null) {
            activityLifecycleHandler2.onActivityDestroyed(activity);
        }
    }

    public static ActivityLifecycleHandler getActivityLifecycleHandler() {
        return activityLifecycleHandler;
    }
}

