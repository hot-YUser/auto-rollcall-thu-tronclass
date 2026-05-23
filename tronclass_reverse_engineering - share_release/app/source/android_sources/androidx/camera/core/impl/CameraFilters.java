package androidx.camera.core.impl;

import androidx.camera.core.CameraFilter;
import java.util.Collections;
import java.util.List;
public class CameraFilters {
    public static final CameraFilter ANY = new CameraFilter() { // from class: androidx.camera.core.impl.CameraFilters$$ExternalSyntheticLambda0
        @Override // androidx.camera.core.CameraFilter
        public final List filter(List list) {
            return CameraFilters.lambda$static$0(list);
        }
    };
    public static final CameraFilter NONE = new CameraFilter() { // from class: androidx.camera.core.impl.CameraFilters$$ExternalSyntheticLambda1
        @Override // androidx.camera.core.CameraFilter
        public final List filter(List list) {
            return Collections.emptyList();
        }
    };

    static /* synthetic */ List lambda$static$0(List list) {
        return list;
    }

    private CameraFilters() {
    }
}

