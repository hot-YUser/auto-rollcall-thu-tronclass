package com.onesignal;

import android.view.animation.Interpolator;
class OneSignalBounceInterpolator implements Interpolator {
    private double mAmplitude;
    private double mFrequency;

    OneSignalBounceInterpolator(double d, double d2) {
        this.mAmplitude = d;
        this.mFrequency = d2;
    }

    @Override // android.animation.TimeInterpolator
    public float getInterpolation(float f) {
        return (float) ((Math.pow(2.718281828459045d, ((double) (-f)) / this.mAmplitude) * (-1.0d) * Math.cos(this.mFrequency * ((double) f))) + 1.0d);
    }
}

