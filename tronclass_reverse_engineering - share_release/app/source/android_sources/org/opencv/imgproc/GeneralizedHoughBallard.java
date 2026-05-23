package org.opencv.imgproc;
public class GeneralizedHoughBallard extends GeneralizedHough {
    private static native void delete(long j);

    private static native int getLevels_0(long j);

    private static native int getVotesThreshold_0(long j);

    private static native void setLevels_0(long j, int i);

    private static native void setVotesThreshold_0(long j, int i);

    protected GeneralizedHoughBallard(long j) {
        super(j);
    }

    public static GeneralizedHoughBallard __fromPtr__(long j) {
        return new GeneralizedHoughBallard(j);
    }

    public void setLevels(int i) {
        setLevels_0(this.nativeObj, i);
    }

    public int getLevels() {
        return getLevels_0(this.nativeObj);
    }

    public void setVotesThreshold(int i) {
        setVotesThreshold_0(this.nativeObj, i);
    }

    public int getVotesThreshold() {
        return getVotesThreshold_0(this.nativeObj);
    }

    @Override // org.opencv.imgproc.GeneralizedHough, org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

