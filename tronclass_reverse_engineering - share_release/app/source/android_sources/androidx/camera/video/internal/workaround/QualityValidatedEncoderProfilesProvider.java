package androidx.camera.video.internal.workaround;

import androidx.camera.core.impl.CameraInfoInternal;
import androidx.camera.core.impl.EncoderProfilesProvider;
import androidx.camera.core.impl.EncoderProfilesProxy;
import androidx.camera.core.impl.Quirks;
import androidx.camera.video.Quality;
import androidx.camera.video.internal.compat.quirk.VideoQualityQuirk;
import java.util.HashMap;
import java.util.Map;
public class QualityValidatedEncoderProfilesProvider implements EncoderProfilesProvider {
    private static final Map<Integer, Quality> CAMCORDER_TO_VIDEO_QUALITY_MAP;
    private final CameraInfoInternal mCameraInfo;
    private final EncoderProfilesProvider mProvider;
    private final Quirks mQuirks;

    static {
        HashMap map = new HashMap();
        CAMCORDER_TO_VIDEO_QUALITY_MAP = map;
        map.put(1, Quality.HIGHEST);
        map.put(8, Quality.UHD);
        map.put(6, Quality.FHD);
        map.put(5, Quality.HD);
        map.put(4, Quality.SD);
        map.put(0, Quality.LOWEST);
    }

    public QualityValidatedEncoderProfilesProvider(EncoderProfilesProvider encoderProfilesProvider, CameraInfoInternal cameraInfoInternal, Quirks quirks) {
        this.mProvider = encoderProfilesProvider;
        this.mCameraInfo = cameraInfoInternal;
        this.mQuirks = quirks;
    }

    @Override // androidx.camera.core.impl.EncoderProfilesProvider
    public boolean hasProfile(int i) {
        return this.mProvider.hasProfile(i) && isDeviceValidQuality(i);
    }

    @Override // androidx.camera.core.impl.EncoderProfilesProvider
    public EncoderProfilesProxy getAll(int i) {
        if (hasProfile(i)) {
            return this.mProvider.getAll(i);
        }
        return null;
    }

    private boolean isDeviceValidQuality(int i) {
        Quality quality = CAMCORDER_TO_VIDEO_QUALITY_MAP.get(Integer.valueOf(i));
        if (quality == null) {
            return true;
        }
        for (VideoQualityQuirk videoQualityQuirk : this.mQuirks.getAll(VideoQualityQuirk.class)) {
            if (videoQualityQuirk != null && videoQualityQuirk.isProblematicVideoQuality(this.mCameraInfo, quality) && !videoQualityQuirk.workaroundBySurfaceProcessing()) {
                return false;
            }
        }
        return true;
    }
}

