package androidx.camera.video.internal.workaround;

import androidx.camera.core.Logger;
import androidx.camera.core.impl.Timebase;
import androidx.camera.video.internal.encoder.TimeProvider;
public class VideoTimebaseConverter {
    private static final String TAG = "VideoTimebaseConverter";
    private Timebase mInputTimebase;
    private final TimeProvider mTimeProvider;
    private long mUptimeToRealtimeOffsetUs = -1;

    public VideoTimebaseConverter(TimeProvider timeProvider, Timebase timebase) {
        this.mTimeProvider = timeProvider;
        this.mInputTimebase = timebase;
    }

    public long convertToUptimeUs(long j) {
        if (this.mInputTimebase == null) {
            if (isCloseToRealtime(j)) {
                this.mInputTimebase = Timebase.REALTIME;
            } else {
                this.mInputTimebase = Timebase.UPTIME;
            }
            Logger.d(TAG, "Detect input timebase = " + this.mInputTimebase);
        }
        int i = AnonymousClass1.$SwitchMap$androidx$camera$core$impl$Timebase[this.mInputTimebase.ordinal()];
        if (i != 1) {
            if (i == 2) {
                return j;
            }
            throw new AssertionError("Unknown timebase: " + this.mInputTimebase);
        }
        if (this.mUptimeToRealtimeOffsetUs == -1) {
            this.mUptimeToRealtimeOffsetUs = calculateUptimeToRealtimeOffsetUs();
            Logger.d(TAG, "mUptimeToRealtimeOffsetUs = " + this.mUptimeToRealtimeOffsetUs);
        }
        return j - this.mUptimeToRealtimeOffsetUs;
    }
    static /* synthetic */ class AnonymousClass1 {
        static final /* synthetic */ int[] $SwitchMap$androidx$camera$core$impl$Timebase;

        static {
            int[] iArr = new int[Timebase.values().length];
            $SwitchMap$androidx$camera$core$impl$Timebase = iArr;
            try {
                iArr[Timebase.REALTIME.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                $SwitchMap$androidx$camera$core$impl$Timebase[Timebase.UPTIME.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
        }
    }

    private boolean isCloseToRealtime(long j) {
        return Math.abs(j - this.mTimeProvider.realtimeUs()) < Math.abs(j - this.mTimeProvider.uptimeUs());
    }

    private long calculateUptimeToRealtimeOffsetUs() {
        long j = Long.MAX_VALUE;
        long j2 = 0;
        for (int i = 0; i < 3; i++) {
            long jUptimeUs = this.mTimeProvider.uptimeUs();
            long jRealtimeUs = this.mTimeProvider.realtimeUs();
            long jUptimeUs2 = this.mTimeProvider.uptimeUs();
            long j3 = jUptimeUs2 - jUptimeUs;
            if (i == 0 || j3 < j) {
                j2 = jRealtimeUs - ((jUptimeUs + jUptimeUs2) >> 1);
                j = j3;
            }
        }
        return Math.max(0L, j2);
    }
}

