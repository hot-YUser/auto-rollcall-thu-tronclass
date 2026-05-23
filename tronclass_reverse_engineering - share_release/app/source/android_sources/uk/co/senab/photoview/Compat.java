package uk.co.senab.photoview;

import android.view.View;
import androidx.core.view.MotionEventCompat;
public class Compat {
    private static final int SIXTY_FPS_INTERVAL = 16;

    private static int getPointerIndexEclair(int i) {
        return (i & MotionEventCompat.ACTION_POINTER_INDEX_MASK) >> 8;
    }

    private static int getPointerIndexHoneyComb(int i) {
        return (i & MotionEventCompat.ACTION_POINTER_INDEX_MASK) >> 8;
    }

    public static void postOnAnimation(View view, Runnable runnable) {
        postOnAnimationJellyBean(view, runnable);
    }

    private static void postOnAnimationJellyBean(View view, Runnable runnable) {
        view.postOnAnimation(runnable);
    }

    public static int getPointerIndex(int i) {
        return getPointerIndexHoneyComb(i);
    }
}

