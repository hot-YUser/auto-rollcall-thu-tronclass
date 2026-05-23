package androidx.camera.core.impl;

import android.util.Size;
import java.util.Map;
final class AutoValue_SurfaceSizeDefinition extends SurfaceSizeDefinition {
    private final Size analysisSize;
    private final Map<Integer, Size> maximumSizeMap;
    private final Size previewSize;
    private final Size recordSize;
    private final Map<Integer, Size> s1440pSizeMap;
    private final Map<Integer, Size> s720pSizeMap;
    private final Map<Integer, Size> ultraMaximumSizeMap;

    AutoValue_SurfaceSizeDefinition(Size size, Map<Integer, Size> map, Size size2, Map<Integer, Size> map2, Size size3, Map<Integer, Size> map3, Map<Integer, Size> map4) {
        if (size == null) {
            throw new NullPointerException("Null analysisSize");
        }
        this.analysisSize = size;
        if (map == null) {
            throw new NullPointerException("Null s720pSizeMap");
        }
        this.s720pSizeMap = map;
        if (size2 == null) {
            throw new NullPointerException("Null previewSize");
        }
        this.previewSize = size2;
        if (map2 == null) {
            throw new NullPointerException("Null s1440pSizeMap");
        }
        this.s1440pSizeMap = map2;
        if (size3 == null) {
            throw new NullPointerException("Null recordSize");
        }
        this.recordSize = size3;
        if (map3 == null) {
            throw new NullPointerException("Null maximumSizeMap");
        }
        this.maximumSizeMap = map3;
        if (map4 == null) {
            throw new NullPointerException("Null ultraMaximumSizeMap");
        }
        this.ultraMaximumSizeMap = map4;
    }

    @Override // androidx.camera.core.impl.SurfaceSizeDefinition
    public Size getAnalysisSize() {
        return this.analysisSize;
    }

    @Override // androidx.camera.core.impl.SurfaceSizeDefinition
    public Map<Integer, Size> getS720pSizeMap() {
        return this.s720pSizeMap;
    }

    @Override // androidx.camera.core.impl.SurfaceSizeDefinition
    public Size getPreviewSize() {
        return this.previewSize;
    }

    @Override // androidx.camera.core.impl.SurfaceSizeDefinition
    public Map<Integer, Size> getS1440pSizeMap() {
        return this.s1440pSizeMap;
    }

    @Override // androidx.camera.core.impl.SurfaceSizeDefinition
    public Size getRecordSize() {
        return this.recordSize;
    }

    @Override // androidx.camera.core.impl.SurfaceSizeDefinition
    public Map<Integer, Size> getMaximumSizeMap() {
        return this.maximumSizeMap;
    }

    @Override // androidx.camera.core.impl.SurfaceSizeDefinition
    public Map<Integer, Size> getUltraMaximumSizeMap() {
        return this.ultraMaximumSizeMap;
    }

    public String toString() {
        return "SurfaceSizeDefinition{analysisSize=" + this.analysisSize + ", s720pSizeMap=" + this.s720pSizeMap + ", previewSize=" + this.previewSize + ", s1440pSizeMap=" + this.s1440pSizeMap + ", recordSize=" + this.recordSize + ", maximumSizeMap=" + this.maximumSizeMap + ", ultraMaximumSizeMap=" + this.ultraMaximumSizeMap + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof SurfaceSizeDefinition)) {
            return false;
        }
        SurfaceSizeDefinition surfaceSizeDefinition = (SurfaceSizeDefinition) obj;
        return this.analysisSize.equals(surfaceSizeDefinition.getAnalysisSize()) && this.s720pSizeMap.equals(surfaceSizeDefinition.getS720pSizeMap()) && this.previewSize.equals(surfaceSizeDefinition.getPreviewSize()) && this.s1440pSizeMap.equals(surfaceSizeDefinition.getS1440pSizeMap()) && this.recordSize.equals(surfaceSizeDefinition.getRecordSize()) && this.maximumSizeMap.equals(surfaceSizeDefinition.getMaximumSizeMap()) && this.ultraMaximumSizeMap.equals(surfaceSizeDefinition.getUltraMaximumSizeMap());
    }

    public int hashCode() {
        return ((((((((((((this.analysisSize.hashCode() ^ 1000003) * 1000003) ^ this.s720pSizeMap.hashCode()) * 1000003) ^ this.previewSize.hashCode()) * 1000003) ^ this.s1440pSizeMap.hashCode()) * 1000003) ^ this.recordSize.hashCode()) * 1000003) ^ this.maximumSizeMap.hashCode()) * 1000003) ^ this.ultraMaximumSizeMap.hashCode();
    }
}

