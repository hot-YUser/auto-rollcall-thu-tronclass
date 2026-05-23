package org.opencv.imgproc;
public class GeneralizedHoughGuil extends GeneralizedHough {
    private static native void delete(long j);

    private static native double getAngleEpsilon_0(long j);

    private static native double getAngleStep_0(long j);

    private static native int getAngleThresh_0(long j);

    private static native int getLevels_0(long j);

    private static native double getMaxAngle_0(long j);

    private static native double getMaxScale_0(long j);

    private static native double getMinAngle_0(long j);

    private static native double getMinScale_0(long j);

    private static native int getPosThresh_0(long j);

    private static native double getScaleStep_0(long j);

    private static native int getScaleThresh_0(long j);

    private static native double getXi_0(long j);

    private static native void setAngleEpsilon_0(long j, double d);

    private static native void setAngleStep_0(long j, double d);

    private static native void setAngleThresh_0(long j, int i);

    private static native void setLevels_0(long j, int i);

    private static native void setMaxAngle_0(long j, double d);

    private static native void setMaxScale_0(long j, double d);

    private static native void setMinAngle_0(long j, double d);

    private static native void setMinScale_0(long j, double d);

    private static native void setPosThresh_0(long j, int i);

    private static native void setScaleStep_0(long j, double d);

    private static native void setScaleThresh_0(long j, int i);

    private static native void setXi_0(long j, double d);

    protected GeneralizedHoughGuil(long j) {
        super(j);
    }

    public static GeneralizedHoughGuil __fromPtr__(long j) {
        return new GeneralizedHoughGuil(j);
    }

    public void setXi(double d) {
        setXi_0(this.nativeObj, d);
    }

    public double getXi() {
        return getXi_0(this.nativeObj);
    }

    public void setLevels(int i) {
        setLevels_0(this.nativeObj, i);
    }

    public int getLevels() {
        return getLevels_0(this.nativeObj);
    }

    public void setAngleEpsilon(double d) {
        setAngleEpsilon_0(this.nativeObj, d);
    }

    public double getAngleEpsilon() {
        return getAngleEpsilon_0(this.nativeObj);
    }

    public void setMinAngle(double d) {
        setMinAngle_0(this.nativeObj, d);
    }

    public double getMinAngle() {
        return getMinAngle_0(this.nativeObj);
    }

    public void setMaxAngle(double d) {
        setMaxAngle_0(this.nativeObj, d);
    }

    public double getMaxAngle() {
        return getMaxAngle_0(this.nativeObj);
    }

    public void setAngleStep(double d) {
        setAngleStep_0(this.nativeObj, d);
    }

    public double getAngleStep() {
        return getAngleStep_0(this.nativeObj);
    }

    public void setAngleThresh(int i) {
        setAngleThresh_0(this.nativeObj, i);
    }

    public int getAngleThresh() {
        return getAngleThresh_0(this.nativeObj);
    }

    public void setMinScale(double d) {
        setMinScale_0(this.nativeObj, d);
    }

    public double getMinScale() {
        return getMinScale_0(this.nativeObj);
    }

    public void setMaxScale(double d) {
        setMaxScale_0(this.nativeObj, d);
    }

    public double getMaxScale() {
        return getMaxScale_0(this.nativeObj);
    }

    public void setScaleStep(double d) {
        setScaleStep_0(this.nativeObj, d);
    }

    public double getScaleStep() {
        return getScaleStep_0(this.nativeObj);
    }

    public void setScaleThresh(int i) {
        setScaleThresh_0(this.nativeObj, i);
    }

    public int getScaleThresh() {
        return getScaleThresh_0(this.nativeObj);
    }

    public void setPosThresh(int i) {
        setPosThresh_0(this.nativeObj, i);
    }

    public int getPosThresh() {
        return getPosThresh_0(this.nativeObj);
    }

    @Override // org.opencv.imgproc.GeneralizedHough, org.opencv.core.Algorithm
    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

