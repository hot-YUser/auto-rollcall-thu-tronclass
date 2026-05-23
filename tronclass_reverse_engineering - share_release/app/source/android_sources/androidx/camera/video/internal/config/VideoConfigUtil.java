package androidx.camera.video.internal.config;

import android.util.Range;
import android.util.Rational;
import android.util.Size;
import androidx.camera.core.DynamicRange;
import androidx.camera.core.Logger;
import androidx.camera.core.impl.EncoderProfilesProxy;
import androidx.camera.core.impl.Timebase;
import androidx.camera.video.MediaSpec;
import androidx.camera.video.VideoSpec;
import androidx.camera.video.internal.VideoValidatedEncoderProfilesProxy;
import androidx.camera.video.internal.config.VideoMimeInfo;
import androidx.camera.video.internal.encoder.VideoEncoderConfig;
import androidx.camera.video.internal.encoder.VideoEncoderDataSpace;
import androidx.camera.video.internal.utils.DynamicRangeUtil;
import androidx.core.util.Preconditions;
import androidx.core.util.Supplier;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
public final class VideoConfigUtil {
    private static final Map<String, Map<Integer, VideoEncoderDataSpace>> MIME_TO_DATA_SPACE_MAP;
    private static final String TAG = "VideoConfigUtil";

    static {
        HashMap map = new HashMap();
        MIME_TO_DATA_SPACE_MAP = map;
        HashMap map2 = new HashMap();
        map2.put(1, VideoEncoderDataSpace.ENCODER_DATA_SPACE_UNSPECIFIED);
        map2.put(2, VideoEncoderDataSpace.ENCODER_DATA_SPACE_BT2020_HLG);
        map2.put(4096, VideoEncoderDataSpace.ENCODER_DATA_SPACE_BT2020_PQ);
        map2.put(8192, VideoEncoderDataSpace.ENCODER_DATA_SPACE_BT2020_PQ);
        HashMap map3 = new HashMap();
        map3.put(1, VideoEncoderDataSpace.ENCODER_DATA_SPACE_UNSPECIFIED);
        map3.put(2, VideoEncoderDataSpace.ENCODER_DATA_SPACE_BT2020_HLG);
        map3.put(4096, VideoEncoderDataSpace.ENCODER_DATA_SPACE_BT2020_PQ);
        map3.put(8192, VideoEncoderDataSpace.ENCODER_DATA_SPACE_BT2020_PQ);
        HashMap map4 = new HashMap();
        map4.put(1, VideoEncoderDataSpace.ENCODER_DATA_SPACE_UNSPECIFIED);
        map4.put(4, VideoEncoderDataSpace.ENCODER_DATA_SPACE_BT2020_HLG);
        map4.put(4096, VideoEncoderDataSpace.ENCODER_DATA_SPACE_BT2020_PQ);
        map4.put(16384, VideoEncoderDataSpace.ENCODER_DATA_SPACE_BT2020_PQ);
        map4.put(2, VideoEncoderDataSpace.ENCODER_DATA_SPACE_UNSPECIFIED);
        map4.put(8, VideoEncoderDataSpace.ENCODER_DATA_SPACE_BT2020_HLG);
        map4.put(8192, VideoEncoderDataSpace.ENCODER_DATA_SPACE_BT2020_PQ);
        map4.put(32768, VideoEncoderDataSpace.ENCODER_DATA_SPACE_BT2020_PQ);
        HashMap map5 = new HashMap();
        map5.put(256, VideoEncoderDataSpace.ENCODER_DATA_SPACE_BT2020_HLG);
        map5.put(512, VideoEncoderDataSpace.ENCODER_DATA_SPACE_BT709);
        map.put("video/hevc", map2);
        map.put("video/av01", map3);
        map.put("video/x-vnd.on2.vp9", map4);
        map.put("video/dolby-vision", map5);
    }

    private VideoConfigUtil() {
    }

    public static VideoMimeInfo resolveVideoMimeInfo(MediaSpec mediaSpec, DynamicRange dynamicRange, VideoValidatedEncoderProfilesProxy videoValidatedEncoderProfilesProxy) {
        EncoderProfilesProxy.VideoProfileProxy next;
        Preconditions.checkState(dynamicRange.isFullySpecified(), "Dynamic range must be a fully specified dynamic range [provided dynamic range: " + dynamicRange + "]");
        String strOutputFormatToVideoMime = MediaSpec.outputFormatToVideoMime(mediaSpec.getOutputFormat());
        if (videoValidatedEncoderProfilesProxy != null) {
            Set<Integer> setDynamicRangeToVideoProfileHdrFormats = DynamicRangeUtil.dynamicRangeToVideoProfileHdrFormats(dynamicRange);
            Set<Integer> setDynamicRangeToVideoProfileBitDepth = DynamicRangeUtil.dynamicRangeToVideoProfileBitDepth(dynamicRange);
            Iterator<EncoderProfilesProxy.VideoProfileProxy> it = videoValidatedEncoderProfilesProxy.getVideoProfiles().iterator();
            while (it.hasNext()) {
                next = it.next();
                if (setDynamicRangeToVideoProfileHdrFormats.contains(Integer.valueOf(next.getHdrFormat())) && setDynamicRangeToVideoProfileBitDepth.contains(Integer.valueOf(next.getBitDepth()))) {
                    String mediaType = next.getMediaType();
                    if (Objects.equals(strOutputFormatToVideoMime, mediaType)) {
                        Logger.d(TAG, "MediaSpec video mime matches EncoderProfiles. Using EncoderProfiles to derive VIDEO settings [mime type: " + strOutputFormatToVideoMime + "]");
                    } else if (mediaSpec.getOutputFormat() == -1) {
                        Logger.d(TAG, "MediaSpec contains OUTPUT_FORMAT_AUTO. Using CamcorderProfile to derive VIDEO settings [mime type: " + strOutputFormatToVideoMime + ", dynamic range: " + dynamicRange + "]");
                    }
                    strOutputFormatToVideoMime = mediaType;
                    break;
                }
            }
            next = null;
        } else {
            next = null;
        }
        if (next == null) {
            if (mediaSpec.getOutputFormat() == -1) {
                strOutputFormatToVideoMime = getDynamicRangeDefaultMime(dynamicRange);
            }
            if (videoValidatedEncoderProfilesProxy == null) {
                Logger.d(TAG, "No EncoderProfiles present. May rely on fallback defaults to derive VIDEO settings [chosen mime type: " + strOutputFormatToVideoMime + ", dynamic range: " + dynamicRange + "]");
            } else {
                Logger.d(TAG, "No video EncoderProfile is compatible with requested output format and dynamic range. May rely on fallback defaults to derive VIDEO settings [chosen mime type: " + strOutputFormatToVideoMime + ", dynamic range: " + dynamicRange + "]");
            }
        }
        VideoMimeInfo.Builder builder = VideoMimeInfo.builder(strOutputFormatToVideoMime);
        if (next != null) {
            builder.setCompatibleVideoProfile(next);
        }
        return builder.build();
    }

    private static String getDynamicRangeDefaultMime(DynamicRange dynamicRange) {
        int encoding = dynamicRange.getEncoding();
        if (encoding == 1) {
            return "video/avc";
        }
        if (encoding == 3 || encoding == 4 || encoding == 5) {
            return "video/hevc";
        }
        if (encoding == 6) {
            return "video/dolby-vision";
        }
        throw new UnsupportedOperationException("Unsupported dynamic range: " + dynamicRange + "\nNo supported default mime type available.");
    }

    public static VideoEncoderConfig resolveVideoEncoderConfig(VideoMimeInfo videoMimeInfo, Timebase timebase, VideoSpec videoSpec, Size size, DynamicRange dynamicRange, Range<Integer> range) {
        Supplier videoEncoderConfigDefaultResolver;
        EncoderProfilesProxy.VideoProfileProxy compatibleVideoProfile = videoMimeInfo.getCompatibleVideoProfile();
        if (compatibleVideoProfile != null) {
            videoEncoderConfigDefaultResolver = new VideoEncoderConfigVideoProfileResolver(videoMimeInfo.getMimeType(), timebase, videoSpec, size, compatibleVideoProfile, dynamicRange, range);
        } else {
            videoEncoderConfigDefaultResolver = new VideoEncoderConfigDefaultResolver(videoMimeInfo.getMimeType(), timebase, videoSpec, size, dynamicRange, range);
        }
        return (VideoEncoderConfig) videoEncoderConfigDefaultResolver.get();
    }

    static int scaleAndClampBitrate(int i, int i2, int i3, int i4, int i5, int i6, int i7, int i8, int i9, Range<Integer> range) {
        String str;
        int iDoubleValue = (int) (((double) i) * new Rational(i2, i3).doubleValue() * new Rational(i4, i5).doubleValue() * new Rational(i6, i7).doubleValue() * new Rational(i8, i9).doubleValue());
        if (!Logger.isDebugEnabled(TAG)) {
            str = "";
        } else {
            str = String.format("Base Bitrate(%dbps) * Bit Depth Ratio (%d / %d) * Frame Rate Ratio(%d / %d) * Width Ratio(%d / %d) * Height Ratio(%d / %d) = %d", Integer.valueOf(i), Integer.valueOf(i2), Integer.valueOf(i3), Integer.valueOf(i4), Integer.valueOf(i5), Integer.valueOf(i6), Integer.valueOf(i7), Integer.valueOf(i8), Integer.valueOf(i9), Integer.valueOf(iDoubleValue));
        }
        if (!VideoSpec.BITRATE_RANGE_AUTO.equals(range)) {
            iDoubleValue = ((Integer) range.clamp(Integer.valueOf(iDoubleValue))).intValue();
            if (Logger.isDebugEnabled(TAG)) {
                str = str + String.format("\nClamped to range %s -> %dbps", range, Integer.valueOf(iDoubleValue));
            }
        }
        Logger.d(TAG, str);
        return iDoubleValue;
    }

    public static VideoEncoderDataSpace mimeAndProfileToEncoderDataSpace(String str, int i) {
        VideoEncoderDataSpace videoEncoderDataSpace;
        Map<Integer, VideoEncoderDataSpace> map = MIME_TO_DATA_SPACE_MAP.get(str);
        if (map != null && (videoEncoderDataSpace = map.get(Integer.valueOf(i))) != null) {
            return videoEncoderDataSpace;
        }
        Logger.w(TAG, String.format("Unsupported mime type %s or profile level %d. Data space is unspecified.", str, Integer.valueOf(i)));
        return VideoEncoderDataSpace.ENCODER_DATA_SPACE_UNSPECIFIED;
    }
}

