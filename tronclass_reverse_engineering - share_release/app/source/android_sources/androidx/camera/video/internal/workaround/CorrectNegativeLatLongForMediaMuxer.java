package androidx.camera.video.internal.workaround;

import android.util.Pair;
import androidx.camera.video.AudioStats;
import androidx.camera.video.internal.compat.quirk.DeviceQuirks;
import androidx.camera.video.internal.compat.quirk.NegativeLatLongSavesIncorrectlyQuirk;
public final class CorrectNegativeLatLongForMediaMuxer {
    private static double adjustInternal(double d) {
        return d >= AudioStats.AUDIO_AMPLITUDE_NONE ? d : ((d * 10000.0d) - 1.0d) / 10000.0d;
    }

    private CorrectNegativeLatLongForMediaMuxer() {
    }

    public static Pair<Double, Double> adjustGeoLocation(double d, double d2) {
        if (DeviceQuirks.get(NegativeLatLongSavesIncorrectlyQuirk.class) != null) {
            d = adjustInternal(d);
            d2 = adjustInternal(d2);
        }
        return Pair.create(Double.valueOf(d), Double.valueOf(d2));
    }
}

