package androidx.camera.camera2.internal;

import androidx.camera.camera2.internal.SupportedSurfaceCombination;
final class AutoValue_SupportedSurfaceCombination_FeatureSettings extends SupportedSurfaceCombination.FeatureSettings {
    private final int cameraMode;
    private final int requiredMaxBitDepth;

    AutoValue_SupportedSurfaceCombination_FeatureSettings(int i, int i2) {
        this.cameraMode = i;
        this.requiredMaxBitDepth = i2;
    }

    @Override // androidx.camera.camera2.internal.SupportedSurfaceCombination.FeatureSettings
    int getCameraMode() {
        return this.cameraMode;
    }

    @Override // androidx.camera.camera2.internal.SupportedSurfaceCombination.FeatureSettings
    int getRequiredMaxBitDepth() {
        return this.requiredMaxBitDepth;
    }

    public String toString() {
        return "FeatureSettings{cameraMode=" + this.cameraMode + ", requiredMaxBitDepth=" + this.requiredMaxBitDepth + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof SupportedSurfaceCombination.FeatureSettings)) {
            return false;
        }
        SupportedSurfaceCombination.FeatureSettings featureSettings = (SupportedSurfaceCombination.FeatureSettings) obj;
        return this.cameraMode == featureSettings.getCameraMode() && this.requiredMaxBitDepth == featureSettings.getRequiredMaxBitDepth();
    }

    public int hashCode() {
        return ((this.cameraMode ^ 1000003) * 1000003) ^ this.requiredMaxBitDepth;
    }
}

