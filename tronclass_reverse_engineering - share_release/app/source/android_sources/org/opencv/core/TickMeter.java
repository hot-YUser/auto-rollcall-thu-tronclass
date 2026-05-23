package org.opencv.core;
public class TickMeter {
    protected final long nativeObj;

    private static native long TickMeter_0();

    private static native void delete(long j);

    private static native double getAvgTimeMilli_0(long j);

    private static native double getAvgTimeSec_0(long j);

    private static native long getCounter_0(long j);

    private static native double getFPS_0(long j);

    private static native double getTimeMicro_0(long j);

    private static native double getTimeMilli_0(long j);

    private static native double getTimeSec_0(long j);

    private static native long getTimeTicks_0(long j);

    private static native void reset_0(long j);

    private static native void start_0(long j);

    private static native void stop_0(long j);

    protected TickMeter(long j) {
        this.nativeObj = j;
    }

    public long getNativeObjAddr() {
        return this.nativeObj;
    }

    public static TickMeter __fromPtr__(long j) {
        return new TickMeter(j);
    }

    public TickMeter() {
        this.nativeObj = TickMeter_0();
    }

    public void start() {
        start_0(this.nativeObj);
    }

    public void stop() {
        stop_0(this.nativeObj);
    }

    public long getTimeTicks() {
        return getTimeTicks_0(this.nativeObj);
    }

    public double getTimeMicro() {
        return getTimeMicro_0(this.nativeObj);
    }

    public double getTimeMilli() {
        return getTimeMilli_0(this.nativeObj);
    }

    public double getTimeSec() {
        return getTimeSec_0(this.nativeObj);
    }

    public long getCounter() {
        return getCounter_0(this.nativeObj);
    }

    public double getFPS() {
        return getFPS_0(this.nativeObj);
    }

    public double getAvgTimeSec() {
        return getAvgTimeSec_0(this.nativeObj);
    }

    public double getAvgTimeMilli() {
        return getAvgTimeMilli_0(this.nativeObj);
    }

    public void reset() {
        reset_0(this.nativeObj);
    }

    protected void finalize() throws Throwable {
        delete(this.nativeObj);
    }
}

