package androidx.camera.core;

import androidx.camera.core.ImageReaderFormatRecommender;
final class AutoValue_ImageReaderFormatRecommender_FormatCombo extends ImageReaderFormatRecommender.FormatCombo {
    private final int imageAnalysisFormat;
    private final int imageCaptureFormat;

    AutoValue_ImageReaderFormatRecommender_FormatCombo(int i, int i2) {
        this.imageCaptureFormat = i;
        this.imageAnalysisFormat = i2;
    }

    @Override // androidx.camera.core.ImageReaderFormatRecommender.FormatCombo
    int imageCaptureFormat() {
        return this.imageCaptureFormat;
    }

    @Override // androidx.camera.core.ImageReaderFormatRecommender.FormatCombo
    int imageAnalysisFormat() {
        return this.imageAnalysisFormat;
    }

    public String toString() {
        return "FormatCombo{imageCaptureFormat=" + this.imageCaptureFormat + ", imageAnalysisFormat=" + this.imageAnalysisFormat + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof ImageReaderFormatRecommender.FormatCombo)) {
            return false;
        }
        ImageReaderFormatRecommender.FormatCombo formatCombo = (ImageReaderFormatRecommender.FormatCombo) obj;
        return this.imageCaptureFormat == formatCombo.imageCaptureFormat() && this.imageAnalysisFormat == formatCombo.imageAnalysisFormat();
    }

    public int hashCode() {
        return ((this.imageCaptureFormat ^ 1000003) * 1000003) ^ this.imageAnalysisFormat;
    }
}

