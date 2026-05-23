package androidx.camera.core;

import android.graphics.Rect;
import android.util.Size;
import androidx.camera.core.ResolutionInfo;
final class AutoValue_ResolutionInfo_ResolutionInfoInternal extends ResolutionInfo.ResolutionInfoInternal {
    private final Rect cropRect;
    private final Size resolution;
    private final int rotationDegrees;

    private AutoValue_ResolutionInfo_ResolutionInfoInternal(Size size, Rect rect, int i) {
        this.resolution = size;
        this.cropRect = rect;
        this.rotationDegrees = i;
    }

    @Override // androidx.camera.core.ResolutionInfo.ResolutionInfoInternal
    Size getResolution() {
        return this.resolution;
    }

    @Override // androidx.camera.core.ResolutionInfo.ResolutionInfoInternal
    Rect getCropRect() {
        return this.cropRect;
    }

    @Override // androidx.camera.core.ResolutionInfo.ResolutionInfoInternal
    int getRotationDegrees() {
        return this.rotationDegrees;
    }

    public String toString() {
        return "ResolutionInfoInternal{resolution=" + this.resolution + ", cropRect=" + this.cropRect + ", rotationDegrees=" + this.rotationDegrees + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof ResolutionInfo.ResolutionInfoInternal)) {
            return false;
        }
        ResolutionInfo.ResolutionInfoInternal resolutionInfoInternal = (ResolutionInfo.ResolutionInfoInternal) obj;
        return this.resolution.equals(resolutionInfoInternal.getResolution()) && this.cropRect.equals(resolutionInfoInternal.getCropRect()) && this.rotationDegrees == resolutionInfoInternal.getRotationDegrees();
    }

    public int hashCode() {
        return ((((this.resolution.hashCode() ^ 1000003) * 1000003) ^ this.cropRect.hashCode()) * 1000003) ^ this.rotationDegrees;
    }

    static final class Builder extends ResolutionInfo.ResolutionInfoInternal.Builder {
        private Rect cropRect;
        private Size resolution;
        private Integer rotationDegrees;

        Builder() {
        }

        @Override // androidx.camera.core.ResolutionInfo.ResolutionInfoInternal.Builder
        ResolutionInfo.ResolutionInfoInternal.Builder setResolution(Size size) {
            if (size == null) {
                throw new NullPointerException("Null resolution");
            }
            this.resolution = size;
            return this;
        }

        @Override // androidx.camera.core.ResolutionInfo.ResolutionInfoInternal.Builder
        ResolutionInfo.ResolutionInfoInternal.Builder setCropRect(Rect rect) {
            if (rect == null) {
                throw new NullPointerException("Null cropRect");
            }
            this.cropRect = rect;
            return this;
        }

        @Override // androidx.camera.core.ResolutionInfo.ResolutionInfoInternal.Builder
        ResolutionInfo.ResolutionInfoInternal.Builder setRotationDegrees(int i) {
            this.rotationDegrees = Integer.valueOf(i);
            return this;
        }

        @Override // androidx.camera.core.ResolutionInfo.ResolutionInfoInternal.Builder
        ResolutionInfo.ResolutionInfoInternal build() {
            String str;
            if (this.resolution != null) {
                str = "";
            } else {
                str = " resolution";
            }
            if (this.cropRect == null) {
                str = str + " cropRect";
            }
            if (this.rotationDegrees == null) {
                str = str + " rotationDegrees";
            }
            if (!str.isEmpty()) {
                throw new IllegalStateException("Missing required properties:" + str);
            }
            return new AutoValue_ResolutionInfo_ResolutionInfoInternal(this.resolution, this.cropRect, this.rotationDegrees.intValue());
        }
    }
}

