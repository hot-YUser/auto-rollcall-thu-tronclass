package androidx.camera.core.impl;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
public interface EncoderProfilesProxy {
    public static final int CODEC_PROFILE_NONE = -1;

    static int getRequiredAudioProfile(int i) {
        if (i == 3) {
            return 2;
        }
        if (i != 4) {
            return i != 5 ? -1 : 39;
        }
        return 5;
    }

    List<AudioProfileProxy> getAudioProfiles();

    int getDefaultDurationSeconds();

    int getRecommendedFileFormat();

    List<VideoProfileProxy> getVideoProfiles();

    public static abstract class VideoProfileProxy {
        public static final int BIT_DEPTH_10 = 10;
        public static final int BIT_DEPTH_8 = 8;
        public static final String MEDIA_TYPE_NONE = "video/none";

        @Retention(RetentionPolicy.SOURCE)
        public @interface VideoEncoder {
        }

        public abstract int getBitDepth();

        public abstract int getBitrate();

        public abstract int getChromaSubsampling();

        public abstract int getCodec();

        public abstract int getFrameRate();

        public abstract int getHdrFormat();

        public abstract int getHeight();

        public abstract String getMediaType();

        public abstract int getProfile();

        public abstract int getWidth();

        public static VideoProfileProxy create(int i, String str, int i2, int i3, int i4, int i5, int i6, int i7, int i8, int i9) {
            return new AutoValue_EncoderProfilesProxy_VideoProfileProxy(i, str, i2, i3, i4, i5, i6, i7, i8, i9);
        }
    }

    public static abstract class AudioProfileProxy {
        public static final String MEDIA_TYPE_NONE = "audio/none";

        @Retention(RetentionPolicy.SOURCE)
        public @interface AudioEncoder {
        }

        public abstract int getBitrate();

        public abstract int getChannels();

        public abstract int getCodec();

        public abstract String getMediaType();

        public abstract int getProfile();

        public abstract int getSampleRate();

        public static AudioProfileProxy create(int i, String str, int i2, int i3, int i4, int i5) {
            return new AutoValue_EncoderProfilesProxy_AudioProfileProxy(i, str, i2, i3, i4, i5);
        }
    }

    public static abstract class ImmutableEncoderProfilesProxy implements EncoderProfilesProxy {
        public static ImmutableEncoderProfilesProxy create(int i, int i2, List<AudioProfileProxy> list, List<VideoProfileProxy> list2) {
            return new AutoValue_EncoderProfilesProxy_ImmutableEncoderProfilesProxy(i, i2, Collections.unmodifiableList(new ArrayList(list)), Collections.unmodifiableList(new ArrayList(list2)));
        }
    }

    static String getVideoCodecMimeType(int i) {
        switch (i) {
            case 1:
                return "video/3gpp";
            case 2:
                return "video/avc";
            case 3:
                return "video/mp4v-es";
            case 4:
                return "video/x-vnd.on2.vp8";
            case 5:
                return "video/hevc";
            case 6:
                return "video/x-vnd.on2.vp9";
            case 7:
                return "video/dolby-vision";
            case 8:
                return "video/av01";
            default:
                return VideoProfileProxy.MEDIA_TYPE_NONE;
        }
    }

    static String getAudioCodecMimeType(int i) {
        switch (i) {
            case 1:
                return "audio/3gpp";
            case 2:
                return "audio/amr-wb";
            case 3:
            case 4:
            case 5:
                return "audio/mp4a-latm";
            case 6:
                return "audio/vorbis";
            case 7:
                return "audio/opus";
            default:
                return AudioProfileProxy.MEDIA_TYPE_NONE;
        }
    }
}

