package com.onesignal;

import android.content.Context;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.DialogFragment;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import com.onesignal.ActivityLifecycleHandler;
import com.onesignal.OneSignal;
import java.lang.ref.WeakReference;
import java.util.List;
class OSSystemConditionController {
    private static final String TAG = "com.onesignal.OSSystemConditionController";
    private final OSSystemConditionObserver systemConditionObserver;

    interface OSSystemConditionHandler {
        void removeSystemConditionObserver(String str, ActivityLifecycleHandler.KeyboardListener keyboardListener);
    }

    interface OSSystemConditionObserver {
        void systemConditionChanged();
    }

    OSSystemConditionController(OSSystemConditionObserver oSSystemConditionObserver) {
        this.systemConditionObserver = oSSystemConditionObserver;
    }

    boolean systemConditionsAvailable() {
        if (OneSignal.getCurrentActivity() == null) {
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.WARN, "OSSystemConditionObserver curActivity null");
            return false;
        }
        try {
            if (isDialogFragmentShowing(OneSignal.getCurrentActivity())) {
                OneSignal.onesignalLog(OneSignal.LOG_LEVEL.WARN, "OSSystemConditionObserver dialog fragment detected");
                return false;
            }
        } catch (NoClassDefFoundError e) {
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.INFO, "AppCompatActivity is not used in this app, skipping 'isDialogFragmentShowing' check: " + e);
        }
        ActivityLifecycleHandler activityLifecycleHandler = ActivityLifecycleListener.getActivityLifecycleHandler();
        boolean zIsKeyboardUp = OSViewUtils.isKeyboardUp(new WeakReference(OneSignal.getCurrentActivity()));
        if (zIsKeyboardUp && activityLifecycleHandler != null) {
            activityLifecycleHandler.addSystemConditionObserver(TAG, this.systemConditionObserver);
            OneSignal.onesignalLog(OneSignal.LOG_LEVEL.WARN, "OSSystemConditionObserver keyboard up detected");
        }
        return !zIsKeyboardUp;
    }

    boolean isDialogFragmentShowing(Context context) throws NoClassDefFoundError {
        if (!(context instanceof AppCompatActivity)) {
            return false;
        }
        final FragmentManager supportFragmentManager = ((AppCompatActivity) context).getSupportFragmentManager();
        supportFragmentManager.registerFragmentLifecycleCallbacks(new FragmentManager.FragmentLifecycleCallbacks() { // from class: com.onesignal.OSSystemConditionController.1
            @Override // androidx.fragment.app.FragmentManager.FragmentLifecycleCallbacks
            public void onFragmentDetached(FragmentManager fragmentManager, Fragment fragment) {
                super.onFragmentDetached(fragmentManager, fragment);
                if (fragment instanceof DialogFragment) {
                    supportFragmentManager.unregisterFragmentLifecycleCallbacks(this);
                    OSSystemConditionController.this.systemConditionObserver.systemConditionChanged();
                }
            }
        }, true);
        List<Fragment> fragments = supportFragmentManager.getFragments();
        int size = fragments.size();
        if (size <= 0) {
            return false;
        }
        Fragment fragment = fragments.get(size - 1);
        return fragment.isVisible() && (fragment instanceof DialogFragment);
    }
}

