package org.opencv.core;
public class CvException extends RuntimeException {
    private static final long serialVersionUID = 1;

    public CvException(String str) {
        super(str);
    }

    @Override // java.lang.Throwable
    public String toString() {
        return "CvException [" + super.toString() + "]";
    }
}

