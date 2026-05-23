package androidx.camera.core.impl;

import android.util.Size;
import java.util.Map;
public abstract class SurfaceSizeDefinition {
    public abstract Size getAnalysisSize();

    public abstract Map<Integer, Size> getMaximumSizeMap();

    public abstract Size getPreviewSize();

    public abstract Size getRecordSize();

    public abstract Map<Integer, Size> getS1440pSizeMap();

    public abstract Map<Integer, Size> getS720pSizeMap();

    public abstract Map<Integer, Size> getUltraMaximumSizeMap();

    SurfaceSizeDefinition() {
    }

    public static SurfaceSizeDefinition create(Size size, Map<Integer, Size> map, Size size2, Map<Integer, Size> map2, Size size3, Map<Integer, Size> map3, Map<Integer, Size> map4) {
        return new AutoValue_SurfaceSizeDefinition(size, map, size2, map2, size3, map3, map4);
    }

    public Size getS720pSize(int i) {
        return getS720pSizeMap().get(Integer.valueOf(i));
    }

    public Size getS1440pSize(int i) {
        return getS1440pSizeMap().get(Integer.valueOf(i));
    }

    public Size getMaximumSize(int i) {
        return getMaximumSizeMap().get(Integer.valueOf(i));
    }

    public Size getUltraMaximumSize(int i) {
        return getUltraMaximumSizeMap().get(Integer.valueOf(i));
    }
}

