package org.opencv.video;
public class TrackerNano extends Tracker {
    private static native long create_0(long j);

    private static native long create_1();

    private static native void delete(long j);

    private static native float getTrackingScore_0(long j);

    protected TrackerNano(long j) {
        super(j);
    }

    public static TrackerNano __fromPtr__(long j) {
        return new TrackerNano(j);
    }

    public static TrackerNano create(TrackerNano_Params trackerNano_Params) {
        return __fromPtr__(create_0(trackerNano_Params.nativeObj));
    }

    public static TrackerNano create() {
        return __fromPtr__(create_1());
    }

    public float getTrackingScore() {
        return getTrackingScore_0(this.nativeObj);
    }

    @Override // org.opencv.video.Tracker
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

