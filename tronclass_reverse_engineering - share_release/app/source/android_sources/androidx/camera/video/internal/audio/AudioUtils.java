package androidx.camera.video.internal.audio;

import androidx.core.util.Preconditions;
import java.util.concurrent.TimeUnit;
public final class AudioUtils {
    public static int channelCountToChannelConfig(int i) {
        return i == 1 ? 16 : 12;
    }

    public static int channelCountToChannelMask(int i) {
        return i == 1 ? 16 : 12;
    }

    private AudioUtils() {
    }

    public static int getBytesPerFrame(int i, int i2) {
        Preconditions.checkArgument(i2 > 0, "Invalid channel count: " + i2);
        if (i == 2) {
            return i2 * 2;
        }
        if (i == 3) {
            return i2;
        }
        if (i != 4) {
            if (i == 21) {
                return i2 * 3;
            }
            if (i != 22) {
                throw new IllegalArgumentException("Invalid audio encoding: " + i);
            }
        }
        return i2 * 4;
    }

    public static long sizeToFrameCount(long j, int i) {
        long j2 = i;
        Preconditions.checkArgument(j2 > 0, "bytesPerFrame must be greater than 0.");
        return j / j2;
    }

    public static long frameCountToSize(long j, int i) {
        long j2 = i;
        Preconditions.checkArgument(j2 > 0, "bytesPerFrame must be greater than 0.");
        return j * j2;
    }

    public static long frameCountToDurationNs(long j, int i) {
        long j2 = i;
        Preconditions.checkArgument(j2 > 0, "sampleRate must be greater than 0.");
        return (TimeUnit.SECONDS.toNanos(1L) * j) / j2;
    }
}

