package androidx.camera.video.internal.workaround;

import android.util.Range;
import android.util.Size;
import androidx.camera.core.Logger;
import androidx.camera.video.internal.compat.quirk.DeviceQuirks;
import androidx.camera.video.internal.compat.quirk.MediaCodecInfoReportIncorrectInfoQuirk;
import androidx.camera.video.internal.encoder.VideoEncoderInfo;
import androidx.core.util.Preconditions;
import java.util.HashSet;
import java.util.Set;
public class VideoEncoderInfoWrapper implements VideoEncoderInfo {
    private static final int HEIGHT_4KDCI = 2160;
    private static final String TAG = "VideoEncoderInfoWrapper";
    private static final int WIDTH_4KDCI = 4096;
    private final Set<Size> mExtraSupportedSizes;
    private final Range<Integer> mSupportedHeights;
    private final Range<Integer> mSupportedWidths;
    private final VideoEncoderInfo mVideoEncoderInfo;

    public static VideoEncoderInfo from(VideoEncoderInfo videoEncoderInfo, Size size) {
        if (videoEncoderInfo instanceof VideoEncoderInfoWrapper) {
            return videoEncoderInfo;
        }
        if (DeviceQuirks.get(MediaCodecInfoReportIncorrectInfoQuirk.class) == null) {
            if (size == null || videoEncoderInfo.isSizeSupported(size.getWidth(), size.getHeight())) {
                return videoEncoderInfo;
            }
            Logger.w(TAG, String.format("Detected that the device does not support a size %s that should be valid in widths/heights = %s/%s", size, videoEncoderInfo.getSupportedWidths(), videoEncoderInfo.getSupportedHeights()));
        }
        return new VideoEncoderInfoWrapper(videoEncoderInfo, size);
    }

    VideoEncoderInfoWrapper(VideoEncoderInfo videoEncoderInfo, Size size) {
        HashSet hashSet = new HashSet();
        this.mExtraSupportedSizes = hashSet;
        this.mVideoEncoderInfo = videoEncoderInfo;
        int widthAlignment = videoEncoderInfo.getWidthAlignment();
        this.mSupportedWidths = Range.create(Integer.valueOf(widthAlignment), Integer.valueOf(((int) Math.ceil(4096.0d / ((double) widthAlignment))) * widthAlignment));
        int heightAlignment = videoEncoderInfo.getHeightAlignment();
        this.mSupportedHeights = Range.create(Integer.valueOf(heightAlignment), Integer.valueOf(((int) Math.ceil(2160.0d / ((double) heightAlignment))) * heightAlignment));
        if (size != null) {
            hashSet.add(size);
        }
        hashSet.addAll(MediaCodecInfoReportIncorrectInfoQuirk.getExtraSupportedSizes());
    }

    @Override // androidx.camera.video.internal.encoder.EncoderInfo
    public String getName() {
        return this.mVideoEncoderInfo.getName();
    }

    @Override // androidx.camera.video.internal.encoder.VideoEncoderInfo
    public boolean isSizeSupported(int i, int i2) {
        if (this.mExtraSupportedSizes.isEmpty() || !this.mExtraSupportedSizes.contains(new Size(i, i2))) {
            return this.mSupportedWidths.contains(Integer.valueOf(i)) && this.mSupportedHeights.contains(Integer.valueOf(i2)) && i % this.mVideoEncoderInfo.getWidthAlignment() == 0 && i2 % this.mVideoEncoderInfo.getHeightAlignment() == 0;
        }
        return true;
    }

    @Override // androidx.camera.video.internal.encoder.VideoEncoderInfo
    public Range<Integer> getSupportedWidths() {
        return this.mSupportedWidths;
    }

    @Override // androidx.camera.video.internal.encoder.VideoEncoderInfo
    public Range<Integer> getSupportedHeights() {
        return this.mSupportedHeights;
    }

    @Override // androidx.camera.video.internal.encoder.VideoEncoderInfo
    public Range<Integer> getSupportedWidthsFor(int i) {
        Preconditions.checkArgument(this.mSupportedHeights.contains(Integer.valueOf(i)) && i % this.mVideoEncoderInfo.getHeightAlignment() == 0, "Not supported height: " + i + " which is not in " + this.mSupportedHeights + " or can not be divided by alignment " + this.mVideoEncoderInfo.getHeightAlignment());
        return this.mSupportedWidths;
    }

    @Override // androidx.camera.video.internal.encoder.VideoEncoderInfo
    public Range<Integer> getSupportedHeightsFor(int i) {
        Preconditions.checkArgument(this.mSupportedWidths.contains(Integer.valueOf(i)) && i % this.mVideoEncoderInfo.getWidthAlignment() == 0, "Not supported width: " + i + " which is not in " + this.mSupportedWidths + " or can not be divided by alignment " + this.mVideoEncoderInfo.getWidthAlignment());
        return this.mSupportedHeights;
    }

    @Override // androidx.camera.video.internal.encoder.VideoEncoderInfo
    public int getWidthAlignment() {
        return this.mVideoEncoderInfo.getWidthAlignment();
    }

    @Override // androidx.camera.video.internal.encoder.VideoEncoderInfo
    public int getHeightAlignment() {
        return this.mVideoEncoderInfo.getHeightAlignment();
    }

    @Override // androidx.camera.video.internal.encoder.VideoEncoderInfo
    public Range<Integer> getSupportedBitrateRange() {
        return this.mVideoEncoderInfo.getSupportedBitrateRange();
    }
}

