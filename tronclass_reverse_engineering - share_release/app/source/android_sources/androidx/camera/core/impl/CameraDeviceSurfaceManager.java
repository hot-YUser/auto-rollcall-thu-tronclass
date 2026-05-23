package androidx.camera.core.impl;

import android.content.Context;
import android.util.Pair;
import android.util.Size;
import androidx.camera.core.InitializationException;
import java.util.List;
import java.util.Map;
import java.util.Set;
public interface CameraDeviceSurfaceManager {

    public interface Provider {
        CameraDeviceSurfaceManager newInstance(Context context, Object obj, Set<String> set) throws InitializationException;
    }

    Pair<Map<UseCaseConfig<?>, StreamSpec>, Map<AttachedSurfaceInfo, StreamSpec>> getSuggestedStreamSpecs(int i, String str, List<AttachedSurfaceInfo> list, Map<UseCaseConfig<?>, List<Size>> map);

    SurfaceConfig transformSurfaceConfig(int i, String str, int i2, Size size);
}

