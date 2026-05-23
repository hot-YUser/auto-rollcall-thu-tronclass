package androidx.camera.video.internal.encoder;

import android.os.SystemClock;
import java.util.concurrent.TimeUnit;
public class SystemTimeProvider implements TimeProvider {
    @Override // androidx.camera.video.internal.encoder.TimeProvider
    public long uptimeUs() {
        return TimeUnit.NANOSECONDS.toMicros(System.nanoTime());
    }

    @Override // androidx.camera.video.internal.encoder.TimeProvider
    public long realtimeUs() {
        return TimeUnit.NANOSECONDS.toMicros(SystemClock.elapsedRealtimeNanos());
    }
}

