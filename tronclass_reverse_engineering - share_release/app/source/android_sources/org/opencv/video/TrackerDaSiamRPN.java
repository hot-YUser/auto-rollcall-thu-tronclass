package org.opencv.video;
public class TrackerDaSiamRPN extends Tracker {
    private static native long create_0(long j);

    private static native long create_1();

    private static native void delete(long j);

    private static native float getTrackingScore_0(long j);

    protected TrackerDaSiamRPN(long j) {
        super(j);
    }

    public static TrackerDaSiamRPN __fromPtr__(long j) {
        return new TrackerDaSiamRPN(j);
    }

    public static TrackerDaSiamRPN create(TrackerDaSiamRPN_Params trackerDaSiamRPN_Params) {
        return __fromPtr__(create_0(trackerDaSiamRPN_Params.nativeObj));
    }

    public static TrackerDaSiamRPN create() {
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

