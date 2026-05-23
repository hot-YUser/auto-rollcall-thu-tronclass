package androidx.camera.video.internal.encoder;
final class AutoValue_VideoEncoderDataSpace extends VideoEncoderDataSpace {
    private final int range;
    private final int standard;
    private final int transfer;

    AutoValue_VideoEncoderDataSpace(int i, int i2, int i3) {
        this.standard = i;
        this.transfer = i2;
        this.range = i3;
    }

    @Override // androidx.camera.video.internal.encoder.VideoEncoderDataSpace
    public int getStandard() {
        return this.standard;
    }

    @Override // androidx.camera.video.internal.encoder.VideoEncoderDataSpace
    public int getTransfer() {
        return this.transfer;
    }

    @Override // androidx.camera.video.internal.encoder.VideoEncoderDataSpace
    public int getRange() {
        return this.range;
    }

    public String toString() {
        return "VideoEncoderDataSpace{standard=" + this.standard + ", transfer=" + this.transfer + ", range=" + this.range + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof VideoEncoderDataSpace)) {
            return false;
        }
        VideoEncoderDataSpace videoEncoderDataSpace = (VideoEncoderDataSpace) obj;
        return this.standard == videoEncoderDataSpace.getStandard() && this.transfer == videoEncoderDataSpace.getTransfer() && this.range == videoEncoderDataSpace.getRange();
    }

    public int hashCode() {
        return ((((this.standard ^ 1000003) * 1000003) ^ this.transfer) * 1000003) ^ this.range;
    }
}

