package uk.co.senab.photoview.gestures;

import android.content.Context;
public final class VersionedGestureDetector {
    public static GestureDetector newInstance(Context context, OnGestureListener onGestureListener) {
        FroyoGestureDetector froyoGestureDetector = new FroyoGestureDetector(context);
        froyoGestureDetector.setOnGestureListener(onGestureListener);
        return froyoGestureDetector;
    }
}

