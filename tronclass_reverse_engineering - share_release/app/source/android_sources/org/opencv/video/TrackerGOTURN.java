package org.opencv.video;
public class TrackerGOTURN extends Tracker {
    private static native long create_0(long j);

    private static native long create_1();

    private static native void delete(long j);

    protected TrackerGOTURN(long j) {
        super(j);
    }

    public static TrackerGOTURN __fromPtr__(long j) {
        return new TrackerGOTURN(j);
    }

    public static TrackerGOTURN create(TrackerGOTURN_Params trackerGOTURN_Params) {
        return __fromPtr__(create_0(trackerGOTURN_Params.nativeObj));
    }

    public static TrackerGOTURN create() {
        return __fromPtr__(create_1());
    }

    @Override // org.opencv.video.Tracker
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

