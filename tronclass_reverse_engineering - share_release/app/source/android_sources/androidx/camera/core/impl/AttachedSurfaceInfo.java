package androidx.camera.core.impl;

import android.util.Range;
import android.util.Size;
import androidx.camera.core.DynamicRange;
import androidx.camera.core.impl.StreamSpec;
import androidx.camera.core.impl.UseCaseConfigFactory;
import java.util.List;
public abstract class AttachedSurfaceInfo {
    public abstract List<UseCaseConfigFactory.CaptureType> getCaptureTypes();

    public abstract DynamicRange getDynamicRange();

    public abstract int getImageFormat();

    public abstract Config getImplementationOptions();

    public abstract Size getSize();

    public abstract SurfaceConfig getSurfaceConfig();

    public abstract Range<Integer> getTargetFrameRate();

    AttachedSurfaceInfo() {
    }

    public static AttachedSurfaceInfo create(SurfaceConfig surfaceConfig, int i, Size size, DynamicRange dynamicRange, List<UseCaseConfigFactory.CaptureType> list, Config config, Range<Integer> range) {
        return new AutoValue_AttachedSurfaceInfo(surfaceConfig, i, size, dynamicRange, list, config, range);
    }

    public StreamSpec toStreamSpec(Config config) {
        StreamSpec.Builder implementationOptions = StreamSpec.builder(getSize()).setDynamicRange(getDynamicRange()).setImplementationOptions(config);
        if (getTargetFrameRate() != null) {
            implementationOptions.setExpectedFrameRateRange(getTargetFrameRate());
        }
        return implementationOptions.build();
    }
}

