package org.opencv.features2d;
public class FlannBasedMatcher extends DescriptorMatcher {
    private static native long FlannBasedMatcher_0();

    private static native long create_0();

    private static native void delete(long j);

    protected FlannBasedMatcher(long j) {
        super(j);
    }

    public static FlannBasedMatcher __fromPtr__(long j) {
        return new FlannBasedMatcher(j);
    }

    public FlannBasedMatcher() {
        super(FlannBasedMatcher_0());
    }

    public static FlannBasedMatcher create() {
        return __fromPtr__(create_0());
    }

    @Override // org.opencv.features2d.DescriptorMatcher, org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

