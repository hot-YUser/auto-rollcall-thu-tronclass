package androidx.camera.video;

import android.util.Range;
import androidx.camera.video.VideoSpec;
final class AutoValue_VideoSpec extends VideoSpec {
    private final int aspectRatio;
    private final Range<Integer> bitrate;
    private final Range<Integer> frameRate;
    private final QualitySelector qualitySelector;

    private AutoValue_VideoSpec(QualitySelector qualitySelector, Range<Integer> range, Range<Integer> range2, int i) {
        this.qualitySelector = qualitySelector;
        this.frameRate = range;
        this.bitrate = range2;
        this.aspectRatio = i;
    }

    @Override // androidx.camera.video.VideoSpec
    public QualitySelector getQualitySelector() {
        return this.qualitySelector;
    }

    @Override // androidx.camera.video.VideoSpec
    public Range<Integer> getFrameRate() {
        return this.frameRate;
    }

    @Override // androidx.camera.video.VideoSpec
    public Range<Integer> getBitrate() {
        return this.bitrate;
    }

    @Override // androidx.camera.video.VideoSpec
    int getAspectRatio() {
        return this.aspectRatio;
    }

    public String toString() {
        return "VideoSpec{qualitySelector=" + this.qualitySelector + ", frameRate=" + this.frameRate + ", bitrate=" + this.bitrate + ", aspectRatio=" + this.aspectRatio + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof VideoSpec)) {
            return false;
        }
        VideoSpec videoSpec = (VideoSpec) obj;
        return this.qualitySelector.equals(videoSpec.getQualitySelector()) && this.frameRate.equals(videoSpec.getFrameRate()) && this.bitrate.equals(videoSpec.getBitrate()) && this.aspectRatio == videoSpec.getAspectRatio();
    }

    public int hashCode() {
        return ((((((this.qualitySelector.hashCode() ^ 1000003) * 1000003) ^ this.frameRate.hashCode()) * 1000003) ^ this.bitrate.hashCode()) * 1000003) ^ this.aspectRatio;
    }

    @Override // androidx.camera.video.VideoSpec
    public VideoSpec.Builder toBuilder() {
        return new Builder(this);
    }

    static final class Builder extends VideoSpec.Builder {
        private Integer aspectRatio;
        private Range<Integer> bitrate;
        private Range<Integer> frameRate;
        private QualitySelector qualitySelector;

        Builder() {
        }

        private Builder(VideoSpec videoSpec) {
            this.qualitySelector = videoSpec.getQualitySelector();
            this.frameRate = videoSpec.getFrameRate();
            this.bitrate = videoSpec.getBitrate();
            this.aspectRatio = Integer.valueOf(videoSpec.getAspectRatio());
        }

        @Override // androidx.camera.video.VideoSpec.Builder
        public VideoSpec.Builder setQualitySelector(QualitySelector qualitySelector) {
            if (qualitySelector == null) {
                throw new NullPointerException("Null qualitySelector");
            }
            this.qualitySelector = qualitySelector;
            return this;
        }

        @Override // androidx.camera.video.VideoSpec.Builder
        public VideoSpec.Builder setFrameRate(Range<Integer> range) {
            if (range == null) {
                throw new NullPointerException("Null frameRate");
            }
            this.frameRate = range;
            return this;
        }

        @Override // androidx.camera.video.VideoSpec.Builder
        public VideoSpec.Builder setBitrate(Range<Integer> range) {
            if (range == null) {
                throw new NullPointerException("Null bitrate");
            }
            this.bitrate = range;
            return this;
        }

        @Override // androidx.camera.video.VideoSpec.Builder
        VideoSpec.Builder setAspectRatio(int i) {
            this.aspectRatio = Integer.valueOf(i);
            return this;
        }

        @Override // androidx.camera.video.VideoSpec.Builder
        public VideoSpec build() {
            String str;
            if (this.qualitySelector != null) {
                str = "";
            } else {
                str = " qualitySelector";
            }
            if (this.frameRate == null) {
                str = str + " frameRate";
            }
            if (this.bitrate == null) {
                str = str + " bitrate";
            }
            if (this.aspectRatio == null) {
                str = str + " aspectRatio";
            }
            if (!str.isEmpty()) {
                throw new IllegalStateException("Missing required properties:" + str);
            }
            return new AutoValue_VideoSpec(this.qualitySelector, this.frameRate, this.bitrate, this.aspectRatio.intValue());
        }
    }
}

