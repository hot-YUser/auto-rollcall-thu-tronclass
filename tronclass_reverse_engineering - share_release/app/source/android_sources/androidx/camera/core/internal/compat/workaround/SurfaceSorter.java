package androidx.camera.core.internal.compat.workaround;

import android.media.MediaCodec;
import androidx.camera.core.Preview;
import androidx.camera.core.impl.DeferrableSurface;
import androidx.camera.core.impl.SessionConfig;
import androidx.camera.core.internal.compat.quirk.DeviceQuirks;
import androidx.camera.core.internal.compat.quirk.SurfaceOrderQuirk;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
public class SurfaceSorter {
    private static final int PRIORITY_MEDIA_CODEC_SURFACE = 2;
    private static final int PRIORITY_OTHERS = 1;
    private static final int PRIORITY_PREVIEW_SURFACE = 0;
    private final boolean mHasQuirk;

    public SurfaceSorter() {
        this.mHasQuirk = DeviceQuirks.get(SurfaceOrderQuirk.class) != null;
    }

    public void sort(List<SessionConfig.OutputConfig> list) {
        if (this.mHasQuirk) {
            Collections.sort(list, new Comparator() { // from class: androidx.camera.core.internal.compat.workaround.SurfaceSorter$$ExternalSyntheticLambda0
                @Override // java.util.Comparator
                public final int compare(Object obj, Object obj2) {
                    return this.f$0.m160xa3d7ce91((SessionConfig.OutputConfig) obj, (SessionConfig.OutputConfig) obj2);
                }
            });
        }
    }
    /* synthetic */ int m160xa3d7ce91(SessionConfig.OutputConfig outputConfig, SessionConfig.OutputConfig outputConfig2) {
        return getSurfacePriority(outputConfig.getSurface()) - getSurfacePriority(outputConfig2.getSurface());
    }

    private int getSurfacePriority(DeferrableSurface deferrableSurface) {
        if (deferrableSurface.getContainerClass() == MediaCodec.class) {
            return 2;
        }
        return deferrableSurface.getContainerClass() == Preview.class ? 0 : 1;
    }
}

