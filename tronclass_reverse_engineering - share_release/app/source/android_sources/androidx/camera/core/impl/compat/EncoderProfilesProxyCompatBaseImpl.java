package androidx.camera.core.impl.compat;

import android.media.CamcorderProfile;
import androidx.camera.core.impl.EncoderProfilesProxy;
import java.util.ArrayList;
import java.util.List;
class EncoderProfilesProxyCompatBaseImpl {
    public static EncoderProfilesProxy from(CamcorderProfile camcorderProfile) {
        return EncoderProfilesProxy.ImmutableEncoderProfilesProxy.create(camcorderProfile.duration, camcorderProfile.fileFormat, toAudioProfiles(camcorderProfile), toVideoProfiles(camcorderProfile));
    }

    private static List<EncoderProfilesProxy.VideoProfileProxy> toVideoProfiles(CamcorderProfile camcorderProfile) {
        ArrayList arrayList = new ArrayList();
        arrayList.add(EncoderProfilesProxy.VideoProfileProxy.create(camcorderProfile.videoCodec, EncoderProfilesProxy.getVideoCodecMimeType(camcorderProfile.videoCodec), camcorderProfile.videoBitRate, camcorderProfile.videoFrameRate, camcorderProfile.videoFrameWidth, camcorderProfile.videoFrameHeight, -1, 8, 0, 0));
        return arrayList;
    }

    private static List<EncoderProfilesProxy.AudioProfileProxy> toAudioProfiles(CamcorderProfile camcorderProfile) {
        ArrayList arrayList = new ArrayList();
        arrayList.add(EncoderProfilesProxy.AudioProfileProxy.create(camcorderProfile.audioCodec, EncoderProfilesProxy.getAudioCodecMimeType(camcorderProfile.audioCodec), camcorderProfile.audioBitRate, camcorderProfile.audioSampleRate, camcorderProfile.audioChannels, EncoderProfilesProxy.getRequiredAudioProfile(camcorderProfile.audioCodec)));
        return arrayList;
    }

    private EncoderProfilesProxyCompatBaseImpl() {
    }
}

