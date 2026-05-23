package androidx.camera.video.internal.config;

import android.util.Range;
import android.util.Size;
import androidx.camera.core.DynamicRange;
import androidx.camera.core.Logger;
import androidx.camera.core.SurfaceRequest;
import androidx.camera.core.impl.EncoderProfilesProxy;
import androidx.camera.core.impl.Timebase;
import androidx.camera.video.VideoSpec;
import androidx.camera.video.internal.encoder.VideoEncoderConfig;
import androidx.core.util.Supplier;
import java.util.Objects;
public class VideoEncoderConfigVideoProfileResolver implements Supplier<VideoEncoderConfig> {
    private static final String TAG = "VidEncVdPrflRslvr";
    private final DynamicRange mDynamicRange;
    private final Range<Integer> mExpectedFrameRateRange;
    private final Timebase mInputTimebase;
    private final String mMimeType;
    private final Size mSurfaceSize;
    private final EncoderProfilesProxy.VideoProfileProxy mVideoProfile;
    private final VideoSpec mVideoSpec;

    public VideoEncoderConfigVideoProfileResolver(String str, Timebase timebase, VideoSpec videoSpec, Size size, EncoderProfilesProxy.VideoProfileProxy videoProfileProxy, DynamicRange dynamicRange, Range<Integer> range) {
        this.mMimeType = str;
        this.mInputTimebase = timebase;
        this.mVideoSpec = videoSpec;
        this.mSurfaceSize = size;
        this.mVideoProfile = videoProfileProxy;
        this.mDynamicRange = dynamicRange;
        this.mExpectedFrameRateRange = range;
    }

    /* high-level source view WARN: Can't rename method to resolve collision */
    @Override // androidx.core.util.Supplier
    public VideoEncoderConfig get() {
        int iResolveFrameRate = resolveFrameRate();
        Logger.d(TAG, "Resolved VIDEO frame rate: " + iResolveFrameRate + "fps");
        Range<Integer> bitrate = this.mVideoSpec.getBitrate();
        Logger.d(TAG, "Using resolved VIDEO bitrate from EncoderProfiles");
        int iScaleAndClampBitrate = VideoConfigUtil.scaleAndClampBitrate(this.mVideoProfile.getBitrate(), this.mDynamicRange.getBitDepth(), this.mVideoProfile.getBitDepth(), iResolveFrameRate, this.mVideoProfile.getFrameRate(), this.mSurfaceSize.getWidth(), this.mVideoProfile.getWidth(), this.mSurfaceSize.getHeight(), this.mVideoProfile.getHeight(), bitrate);
        int profile = this.mVideoProfile.getProfile();
        return VideoEncoderConfig.builder().setMimeType(this.mMimeType).setInputTimebase(this.mInputTimebase).setResolution(this.mSurfaceSize).setBitrate(iScaleAndClampBitrate).setFrameRate(iResolveFrameRate).setProfile(profile).setDataSpace(VideoConfigUtil.mimeAndProfileToEncoderDataSpace(this.mMimeType, profile)).build();
    }

    private int resolveFrameRate() {
        int frameRate = this.mVideoProfile.getFrameRate();
        int iIntValue = !Objects.equals(this.mExpectedFrameRateRange, SurfaceRequest.FRAME_RATE_RANGE_UNSPECIFIED) ? ((Integer) this.mExpectedFrameRateRange.clamp(Integer.valueOf(frameRate))).intValue() : frameRate;
        Logger.d(TAG, String.format("Resolved frame rate %dfps [Video profile frame rate: %dfps, Expected operating range: %s]", Integer.valueOf(iIntValue), Integer.valueOf(frameRate), Objects.equals(this.mExpectedFrameRateRange, SurfaceRequest.FRAME_RATE_RANGE_UNSPECIFIED) ? this.mExpectedFrameRateRange : "<UNSPECIFIED>"));
        return iIntValue;
    }
}

