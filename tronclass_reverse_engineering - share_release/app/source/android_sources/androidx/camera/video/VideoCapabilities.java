package androidx.camera.video;

import android.util.Size;
import androidx.camera.core.DynamicRange;
import androidx.camera.video.internal.VideoValidatedEncoderProfilesProxy;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
public interface VideoCapabilities {
    public static final VideoCapabilities EMPTY = new VideoCapabilities() { // from class: androidx.camera.video.VideoCapabilities.1
        @Override // androidx.camera.video.VideoCapabilities
        public boolean isQualitySupported(Quality quality, DynamicRange dynamicRange) {
            return false;
        }

        @Override // androidx.camera.video.VideoCapabilities
        public Set<DynamicRange> getSupportedDynamicRanges() {
            return new HashSet();
        }

        @Override // androidx.camera.video.VideoCapabilities
        public List<Quality> getSupportedQualities(DynamicRange dynamicRange) {
            return new ArrayList();
        }
    };

    default VideoValidatedEncoderProfilesProxy findHighestSupportedEncoderProfilesFor(Size size, DynamicRange dynamicRange) {
        return null;
    }

    default VideoValidatedEncoderProfilesProxy getProfiles(Quality quality, DynamicRange dynamicRange) {
        return null;
    }

    Set<DynamicRange> getSupportedDynamicRanges();

    List<Quality> getSupportedQualities(DynamicRange dynamicRange);

    boolean isQualitySupported(Quality quality, DynamicRange dynamicRange);

    default Quality findHighestSupportedQualityFor(Size size, DynamicRange dynamicRange) {
        return Quality.NONE;
    }
}

