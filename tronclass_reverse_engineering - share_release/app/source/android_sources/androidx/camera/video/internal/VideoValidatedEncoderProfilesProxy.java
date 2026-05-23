package androidx.camera.video.internal;

import androidx.camera.core.impl.EncoderProfilesProxy;
import androidx.core.util.Preconditions;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
public abstract class VideoValidatedEncoderProfilesProxy implements EncoderProfilesProxy {
    public abstract EncoderProfilesProxy.AudioProfileProxy getDefaultAudioProfile();

    public abstract EncoderProfilesProxy.VideoProfileProxy getDefaultVideoProfile();

    public static VideoValidatedEncoderProfilesProxy from(EncoderProfilesProxy encoderProfilesProxy) {
        return create(encoderProfilesProxy.getDefaultDurationSeconds(), encoderProfilesProxy.getRecommendedFileFormat(), encoderProfilesProxy.getAudioProfiles(), encoderProfilesProxy.getVideoProfiles());
    }

    public static VideoValidatedEncoderProfilesProxy create(int i, int i2, List<EncoderProfilesProxy.AudioProfileProxy> list, List<EncoderProfilesProxy.VideoProfileProxy> list2) {
        Preconditions.checkArgument(!list2.isEmpty(), "Should contain at least one VideoProfile.");
        return new AutoValue_VideoValidatedEncoderProfilesProxy(i, i2, Collections.unmodifiableList(new ArrayList(list)), Collections.unmodifiableList(new ArrayList(list2)), !list.isEmpty() ? list.get(0) : null, list2.get(0));
    }
}

