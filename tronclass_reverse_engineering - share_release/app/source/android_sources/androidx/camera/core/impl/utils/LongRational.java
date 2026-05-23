package androidx.camera.core.impl.utils;

import androidx.work.WorkRequest;
final class LongRational {
    private final long mDenominator;
    private final long mNumerator;

    LongRational(long j, long j2) {
        this.mNumerator = j;
        this.mDenominator = j2;
    }

    LongRational(double d) {
        this((long) (d * 10000.0d), WorkRequest.MIN_BACKOFF_MILLIS);
    }

    long getNumerator() {
        return this.mNumerator;
    }

    long getDenominator() {
        return this.mDenominator;
    }

    double toDouble() {
        return this.mNumerator / this.mDenominator;
    }

    public String toString() {
        return this.mNumerator + "/" + this.mDenominator;
    }
}

