package androidx.camera.core.streamsharing;

import android.util.Size;
import androidx.camera.core.impl.ImageOutputConfig;
import androidx.camera.core.impl.UseCaseConfig;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
class ResolutionUtils {
    private ResolutionUtils() {
    }

    static List<Size> getMergedResolutions(List<Size> list, Size size, Set<UseCaseConfig<?>> set) {
        Iterator<UseCaseConfig<?>> it = set.iterator();
        while (it.hasNext()) {
            List<Size> list2 = (List) it.next().retrieveOption(ImageOutputConfig.OPTION_CUSTOM_ORDERED_RESOLUTIONS, null);
            if (list2 != null) {
                return list2;
            }
        }
        return list;
    }
}

