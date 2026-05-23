package androidx.camera.core.impl.compat;

import android.media.EncoderProfiles;
import androidx.camera.core.impl.EncoderProfilesProxy;
import java.util.ArrayList;
import java.util.List;
class EncoderProfilesProxyCompatApi31Impl {
    public static EncoderProfilesProxy from(EncoderProfiles encoderProfiles) {
        return EncoderProfilesProxy.ImmutableEncoderProfilesProxy.create(encoderProfiles.getDefaultDurationSeconds(), encoderProfiles.getRecommendedFileFormat(), fromAudioProfiles(encoderProfiles.getAudioProfiles()), fromVideoProfiles(encoderProfiles.getVideoProfiles()));
    }

    private static List<EncoderProfilesProxy.VideoProfileProxy> fromVideoProfiles(List<EncoderProfiles.VideoProfile> list) {
        ArrayList arrayList = new ArrayList();
        for (EncoderProfiles.VideoProfile videoProfile : list) {
            arrayList.add(EncoderProfilesProxy.VideoProfileProxy.create(videoProfile.getCodec(), videoProfile.getMediaType(), videoProfile.getBitrate(), videoProfile.getFrameRate(), videoProfile.getWidth(), videoProfile.getHeight(), videoProfile.getProfile(), 8, 0, 0));
        }
        return arrayList;
    }

    private static List<EncoderProfilesProxy.AudioProfileProxy> fromAudioProfiles(List<EncoderProfiles.AudioProfile> list) {
        ArrayList arrayList = new ArrayList();
        for (EncoderProfiles.AudioProfile audioProfile : list) {
            arrayList.add(EncoderProfilesProxy.AudioProfileProxy.create(audioProfile.getCodec(), audioProfile.getMediaType(), audioProfile.getBitrate(), audioProfile.getSampleRate(), audioProfile.getChannels(), audioProfile.getProfile()));
        }
        return arrayList;
    }

    private EncoderProfilesProxyCompatApi31Impl() {
    }
}

