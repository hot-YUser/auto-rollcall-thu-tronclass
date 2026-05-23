package org.opencv.objdetect;

import org.opencv.core.Algorithm;
public class BaseCascadeClassifier extends Algorithm {
    private static native void delete(long j);

    protected BaseCascadeClassifier(long j) {
        super(j);
    }

    public static BaseCascadeClassifier __fromPtr__(long j) {
        return new BaseCascadeClassifier(j);
    }

    @Override // org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

