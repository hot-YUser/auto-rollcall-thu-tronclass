package androidx.camera.video.internal.workaround;

import android.media.MediaCodec;
import android.media.MediaCodecInfo;
import android.media.MediaCodecList;
import android.media.MediaFormat;
import android.text.TextUtils;
import androidx.camera.core.Logger;
import androidx.camera.video.internal.DebugUtils;
import androidx.camera.video.internal.compat.quirk.DeviceQuirks;
import androidx.camera.video.internal.compat.quirk.MediaCodecInfoReportIncorrectInfoQuirk;
import androidx.camera.video.internal.compat.quirk.MediaFormatMustNotUseFrameRateToFindEncoderQuirk;
import androidx.camera.video.internal.encoder.InvalidConfigException;
import androidx.core.util.Preconditions;
import com.megster.cordova.FileChooser;
import java.io.IOException;
import org.apache.commons.io.IOUtils;
public class EncoderFinder {
    private static final String TAG = "EncoderFinder";
    private final boolean mShouldRemoveKeyFrameRate;

    public EncoderFinder() {
        this.mShouldRemoveKeyFrameRate = ((MediaFormatMustNotUseFrameRateToFindEncoderQuirk) DeviceQuirks.get(MediaFormatMustNotUseFrameRateToFindEncoderQuirk.class)) != null;
    }

    public MediaCodec findEncoder(MediaFormat mediaFormat) throws Throwable {
        MediaCodecList mediaCodecList = new MediaCodecList(1);
        String strFindEncoderForFormat = findEncoderForFormat(mediaFormat, mediaCodecList);
        try {
            if (TextUtils.isEmpty(strFindEncoderForFormat)) {
                String string = mediaFormat.getString(FileChooser.MIME);
                MediaCodec mediaCodecCreateEncoderByType = MediaCodec.createEncoderByType(string);
                Logger.w(TAG, String.format("No encoder found that supports requested MediaFormat %s. Create encoder by MIME type. Dump codec info:\n%s", mediaFormat, DebugUtils.dumpCodecCapabilities(string, mediaCodecCreateEncoderByType, mediaFormat)));
                return mediaCodecCreateEncoderByType;
            }
            return MediaCodec.createByCodecName(strFindEncoderForFormat);
        } catch (IOException | IllegalArgumentException | NullPointerException e) {
            throw new InvalidConfigException("Encoder cannot created: " + strFindEncoderForFormat + ", isMediaFormatInQuirk: " + shouldCreateCodecByType(mediaFormat) + IOUtils.LINE_SEPARATOR_UNIX + DebugUtils.dumpMediaCodecListForFormat(mediaCodecList, mediaFormat), e);
        }
    }

    String findEncoderForFormat(MediaFormat mediaFormat, MediaCodecList mediaCodecList) throws Throwable {
        Integer num = null;
        try {
            if (this.mShouldRemoveKeyFrameRate && mediaFormat.containsKey("frame-rate")) {
                Integer numValueOf = Integer.valueOf(mediaFormat.getInteger("frame-rate"));
                try {
                    mediaFormat.setString("frame-rate", null);
                    num = numValueOf;
                } catch (Throwable th) {
                    th = th;
                    num = numValueOf;
                    if (num != null) {
                        mediaFormat.setInteger("frame-rate", num.intValue());
                    }
                    throw th;
                }
            }
            String strFindEncoderForFormat = mediaCodecList.findEncoderForFormat(mediaFormat);
            if (strFindEncoderForFormat == null) {
                strFindEncoderForFormat = findEncoderWithNearestCompatibleBitrate(mediaFormat, mediaCodecList.getCodecInfos());
            }
            if (num != null) {
                mediaFormat.setInteger("frame-rate", num.intValue());
            }
            return strFindEncoderForFormat;
        } catch (Throwable th2) {
            th = th2;
        }
    }

    private String findEncoderWithNearestCompatibleBitrate(MediaFormat mediaFormat, MediaCodecInfo[] mediaCodecInfoArr) throws Throwable {
        Integer numValueOf;
        MediaCodecInfo.CodecCapabilities capabilitiesForType;
        int iIntValue;
        String string = mediaFormat.getString(FileChooser.MIME);
        Integer num = null;
        if (string == null) {
            Logger.w(TAG, "MediaFormat does not contain mime info.");
            return null;
        }
        int length = mediaCodecInfoArr.length;
        for (int i = 0; i < length; i++) {
            MediaCodecInfo mediaCodecInfo = mediaCodecInfoArr[i];
            if (mediaCodecInfo.isEncoder()) {
                try {
                    capabilitiesForType = mediaCodecInfo.getCapabilitiesForType(string);
                    boolean z = true;
                    Preconditions.checkArgument(capabilitiesForType != null, "MIME type is not supported");
                    if (mediaFormat.containsKey("bitrate")) {
                        MediaCodecInfo.VideoCapabilities videoCapabilities = capabilitiesForType.getVideoCapabilities();
                        if (videoCapabilities == null) {
                            z = false;
                        }
                        Preconditions.checkArgument(z, "Not video codec");
                        numValueOf = Integer.valueOf(mediaFormat.getInteger("bitrate"));
                        try {
                            iIntValue = ((Integer) videoCapabilities.getBitrateRange().clamp(numValueOf)).intValue();
                            mediaFormat.setInteger("bitrate", iIntValue);
                        } catch (IllegalArgumentException unused) {
                            if (numValueOf != null) {
                            }
                        } catch (Throwable th) {
                            th = th;
                            num = numValueOf;
                            if (num != null) {
                                mediaFormat.setInteger("bitrate", num.intValue());
                            }
                            throw th;
                        }
                    } else {
                        iIntValue = -1;
                        numValueOf = null;
                    }
                } catch (IllegalArgumentException unused2) {
                    numValueOf = null;
                } catch (Throwable th2) {
                    th = th2;
                }
                if (capabilitiesForType.isFormatSupported(mediaFormat)) {
                    Logger.w(TAG, String.format("No encoder found that supports requested bitrate. Adjusting bitrate to nearest supported bitrate [requested: %dbps, nearest: %dbps]", numValueOf, Integer.valueOf(iIntValue)));
                    String name = mediaCodecInfo.getName();
                    if (numValueOf != null) {
                        mediaFormat.setInteger("bitrate", numValueOf.intValue());
                    }
                    return name;
                }
                if (numValueOf != null) {
                    mediaFormat.setInteger("bitrate", numValueOf.intValue());
                }
            }
        }
        return null;
    }

    private boolean shouldCreateCodecByType(MediaFormat mediaFormat) {
        MediaCodecInfoReportIncorrectInfoQuirk mediaCodecInfoReportIncorrectInfoQuirk = (MediaCodecInfoReportIncorrectInfoQuirk) DeviceQuirks.get(MediaCodecInfoReportIncorrectInfoQuirk.class);
        if (mediaCodecInfoReportIncorrectInfoQuirk == null) {
            return false;
        }
        return mediaCodecInfoReportIncorrectInfoQuirk.isUnSupportMediaCodecInfo(mediaFormat);
    }
}

