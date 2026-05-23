package com.onesignal;

import android.app.Activity;
import android.content.res.Resources;
import android.graphics.Point;
import android.graphics.Rect;
import android.os.Build;
import android.util.DisplayMetrics;
import android.view.DisplayCutout;
import android.view.View;
import android.view.Window;
import android.view.WindowInsets;
import com.onesignal.ActivityLifecycleHandler;
import java.lang.ref.WeakReference;
class OSViewUtils {
    private static final int MARGIN_ERROR_PX_SIZE = dpToPx(24);

    OSViewUtils() {
    }

    static boolean isKeyboardUp(WeakReference<Activity> weakReference) {
        View decorView;
        DisplayMetrics displayMetrics = new DisplayMetrics();
        Rect rect = new Rect();
        if (weakReference.get() != null) {
            Window window = weakReference.get().getWindow();
            decorView = window.getDecorView();
            decorView.getWindowVisibleDisplayFrame(rect);
            window.getWindowManager().getDefaultDisplay().getMetrics(displayMetrics);
        } else {
            decorView = null;
        }
        return decorView != null && displayMetrics.heightPixels - rect.bottom > MARGIN_ERROR_PX_SIZE;
    }

    static void decorViewReady(Activity activity, final Runnable runnable) {
        final String str = "decorViewReady:" + runnable;
        activity.getWindow().getDecorView().post(new Runnable() { // from class: com.onesignal.OSViewUtils.1
            @Override // java.lang.Runnable
            public void run() {
                final ActivityLifecycleHandler activityLifecycleHandler = ActivityLifecycleListener.getActivityLifecycleHandler();
                if (activityLifecycleHandler != null) {
                    activityLifecycleHandler.addActivityAvailableListener(str, new ActivityLifecycleHandler.ActivityAvailableListener() { // from class: com.onesignal.OSViewUtils.1.1
                        @Override // com.onesignal.ActivityLifecycleHandler.ActivityAvailableListener
                        void available(Activity activity2) {
                            activityLifecycleHandler.removeActivityAvailableListener(str);
                            if (OSViewUtils.isActivityFullyReady(activity2)) {
                                runnable.run();
                            } else {
                                OSViewUtils.decorViewReady(activity2, runnable);
                            }
                        }
                    });
                }
            }
        });
    }

    private static Rect getWindowVisibleDisplayFrame(Activity activity) {
        Rect rect = new Rect();
        activity.getWindow().getDecorView().getWindowVisibleDisplayFrame(rect);
        return rect;
    }

    static int[] getCutoutAndStatusBarInsets(Activity activity) {
        float safeInsetRight;
        float safeInsetLeft;
        DisplayCutout cutout;
        Rect windowVisibleDisplayFrame = getWindowVisibleDisplayFrame(activity);
        View viewFindViewById = activity.getWindow().findViewById(android.R.id.content);
        float top = (windowVisibleDisplayFrame.top - viewFindViewById.getTop()) / Resources.getSystem().getDisplayMetrics().density;
        float bottom = (viewFindViewById.getBottom() - windowVisibleDisplayFrame.bottom) / Resources.getSystem().getDisplayMetrics().density;
        if (Build.VERSION.SDK_INT != 29 || (cutout = activity.getWindowManager().getDefaultDisplay().getCutout()) == null) {
            safeInsetRight = 0.0f;
            safeInsetLeft = 0.0f;
        } else {
            safeInsetRight = cutout.getSafeInsetRight() / Resources.getSystem().getDisplayMetrics().density;
            safeInsetLeft = cutout.getSafeInsetLeft() / Resources.getSystem().getDisplayMetrics().density;
        }
        return new int[]{Math.round(top), Math.round(bottom), Math.round(safeInsetRight), Math.round(safeInsetLeft)};
    }

    static int getFullbleedWindowWidth(Activity activity) {
        return activity.getWindow().getDecorView().getWidth();
    }

    static int getWindowWidth(Activity activity) {
        return getWindowVisibleDisplayFrame(activity).width();
    }

    static int getWindowHeight(Activity activity) {
        return getWindowHeightAPI23Plus(activity);
    }

    private static int getWindowHeightAPI23Plus(Activity activity) {
        View decorView = activity.getWindow().getDecorView();
        WindowInsets rootWindowInsets = decorView.getRootWindowInsets();
        if (rootWindowInsets == null) {
            return decorView.getHeight();
        }
        return (decorView.getHeight() - rootWindowInsets.getStableInsetBottom()) - rootWindowInsets.getStableInsetTop();
    }

    private static int getWindowHeightLollipop(Activity activity) {
        if (activity.getResources().getConfiguration().orientation == 2) {
            return getWindowVisibleDisplayFrame(activity).height();
        }
        return getDisplaySizeY(activity);
    }

    private static int getDisplaySizeY(Activity activity) {
        Point point = new Point();
        activity.getWindowManager().getDefaultDisplay().getSize(point);
        return point.y;
    }

    static int dpToPx(int i) {
        return (int) (i * Resources.getSystem().getDisplayMetrics().density);
    }

    static boolean isActivityFullyReady(Activity activity) {
        return (activity.getWindow().getDecorView().getApplicationWindowToken() != null) && (activity.getWindow().getDecorView().getRootWindowInsets() != null);
    }
}

