package org.opencv.video;
public class TrackerVit extends Tracker {
    private static native long create_0(long j);

    private static native long create_1();

    private static native void delete(long j);

    private static native float getTrackingScore_0(long j);

    protected TrackerVit(long j) {
        super(j);
    }

    public static TrackerVit __fromPtr__(long j) {
        return new TrackerVit(j);
    }

    public static TrackerVit create(TrackerVit_Params trackerVit_Params) {
        return __fromPtr__(create_0(trackerVit_Params.nativeObj));
    }

    public static TrackerVit create() {
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

