package androidx.camera.video;

import androidx.camera.video.QualityRatioToResolutionsTable;
final class AutoValue_QualityRatioToResolutionsTable_QualityRatio extends QualityRatioToResolutionsTable.QualityRatio {
    private final int aspectRatio;
    private final Quality quality;

    AutoValue_QualityRatioToResolutionsTable_QualityRatio(Quality quality, int i) {
        if (quality == null) {
            throw new NullPointerException("Null quality");
        }
        this.quality = quality;
        this.aspectRatio = i;
    }

    @Override // androidx.camera.video.QualityRatioToResolutionsTable.QualityRatio
    Quality getQuality() {
        return this.quality;
    }

    @Override // androidx.camera.video.QualityRatioToResolutionsTable.QualityRatio
    int getAspectRatio() {
        return this.aspectRatio;
    }

    public String toString() {
        return "QualityRatio{quality=" + this.quality + ", aspectRatio=" + this.aspectRatio + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof QualityRatioToResolutionsTable.QualityRatio)) {
            return false;
        }
        QualityRatioToResolutionsTable.QualityRatio qualityRatio = (QualityRatioToResolutionsTable.QualityRatio) obj;
        return this.quality.equals(qualityRatio.getQuality()) && this.aspectRatio == qualityRatio.getAspectRatio();
    }

    public int hashCode() {
        return ((this.quality.hashCode() ^ 1000003) * 1000003) ^ this.aspectRatio;
    }
}

