package androidx.camera.core.impl;

import android.util.Range;
import android.util.Size;
import androidx.camera.core.DynamicRange;
import androidx.camera.core.impl.UseCaseConfigFactory;
import java.util.List;
final class AutoValue_AttachedSurfaceInfo extends AttachedSurfaceInfo {
    private final List<UseCaseConfigFactory.CaptureType> captureTypes;
    private final DynamicRange dynamicRange;
    private final int imageFormat;
    private final Config implementationOptions;
    private final Size size;
    private final SurfaceConfig surfaceConfig;
    private final Range<Integer> targetFrameRate;

    AutoValue_AttachedSurfaceInfo(SurfaceConfig surfaceConfig, int i, Size size, DynamicRange dynamicRange, List<UseCaseConfigFactory.CaptureType> list, Config config, Range<Integer> range) {
        if (surfaceConfig == null) {
            throw new NullPointerException("Null surfaceConfig");
        }
        this.surfaceConfig = surfaceConfig;
        this.imageFormat = i;
        if (size == null) {
            throw new NullPointerException("Null size");
        }
        this.size = size;
        if (dynamicRange == null) {
            throw new NullPointerException("Null dynamicRange");
        }
        this.dynamicRange = dynamicRange;
        if (list == null) {
            throw new NullPointerException("Null captureTypes");
        }
        this.captureTypes = list;
        this.implementationOptions = config;
        this.targetFrameRate = range;
    }

    @Override // androidx.camera.core.impl.AttachedSurfaceInfo
    public SurfaceConfig getSurfaceConfig() {
        return this.surfaceConfig;
    }

    @Override // androidx.camera.core.impl.AttachedSurfaceInfo
    public int getImageFormat() {
        return this.imageFormat;
    }

    @Override // androidx.camera.core.impl.AttachedSurfaceInfo
    public Size getSize() {
        return this.size;
    }

    @Override // androidx.camera.core.impl.AttachedSurfaceInfo
    public DynamicRange getDynamicRange() {
        return this.dynamicRange;
    }

    @Override // androidx.camera.core.impl.AttachedSurfaceInfo
    public List<UseCaseConfigFactory.CaptureType> getCaptureTypes() {
        return this.captureTypes;
    }

    @Override // androidx.camera.core.impl.AttachedSurfaceInfo
    public Config getImplementationOptions() {
        return this.implementationOptions;
    }

    @Override // androidx.camera.core.impl.AttachedSurfaceInfo
    public Range<Integer> getTargetFrameRate() {
        return this.targetFrameRate;
    }

    public String toString() {
        return "AttachedSurfaceInfo{surfaceConfig=" + this.surfaceConfig + ", imageFormat=" + this.imageFormat + ", size=" + this.size + ", dynamicRange=" + this.dynamicRange + ", captureTypes=" + this.captureTypes + ", implementationOptions=" + this.implementationOptions + ", targetFrameRate=" + this.targetFrameRate + "}";
    }

    public boolean equals(Object obj) {
        Config config;
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof AttachedSurfaceInfo)) {
            return false;
        }
        AttachedSurfaceInfo attachedSurfaceInfo = (AttachedSurfaceInfo) obj;
        if (this.surfaceConfig.equals(attachedSurfaceInfo.getSurfaceConfig()) && this.imageFormat == attachedSurfaceInfo.getImageFormat() && this.size.equals(attachedSurfaceInfo.getSize()) && this.dynamicRange.equals(attachedSurfaceInfo.getDynamicRange()) && this.captureTypes.equals(attachedSurfaceInfo.getCaptureTypes()) && ((config = this.implementationOptions) != null ? config.equals(attachedSurfaceInfo.getImplementationOptions()) : attachedSurfaceInfo.getImplementationOptions() == null)) {
            Range<Integer> range = this.targetFrameRate;
            if (range == null) {
                if (attachedSurfaceInfo.getTargetFrameRate() == null) {
                    return true;
                }
            } else if (range.equals(attachedSurfaceInfo.getTargetFrameRate())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int iHashCode = (((((((((this.surfaceConfig.hashCode() ^ 1000003) * 1000003) ^ this.imageFormat) * 1000003) ^ this.size.hashCode()) * 1000003) ^ this.dynamicRange.hashCode()) * 1000003) ^ this.captureTypes.hashCode()) * 1000003;
        Config config = this.implementationOptions;
        int iHashCode2 = (iHashCode ^ (config == null ? 0 : config.hashCode())) * 1000003;
        Range<Integer> range = this.targetFrameRate;
        return iHashCode2 ^ (range != null ? range.hashCode() : 0);
    }
}

