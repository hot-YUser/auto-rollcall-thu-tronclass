package androidx.camera.camera2.internal;

import android.hardware.camera2.CameraCharacteristics;
import androidx.camera.camera2.internal.compat.CameraAccessExceptionCompat;
import androidx.camera.camera2.internal.compat.CameraManagerCompat;
import androidx.camera.core.CameraInfo;
import androidx.camera.core.CameraSelector;
import androidx.camera.core.CameraUnavailableException;
import androidx.camera.core.InitializationException;
import androidx.camera.core.impl.CameraInfoInternal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
class CameraSelectionOptimizer {
    private CameraSelectionOptimizer() {
    }

    static List<String> getSelectedAvailableCameraIds(Camera2CameraFactory camera2CameraFactory, CameraSelector cameraSelector) throws InitializationException {
        String strDecideSkippedCameraIdByHeuristic;
        try {
            ArrayList arrayList = new ArrayList();
            List<String> listAsList = Arrays.asList(camera2CameraFactory.getCameraManager().getCameraIdList());
            if (cameraSelector == null) {
                Iterator it = listAsList.iterator();
                while (it.hasNext()) {
                    arrayList.add((String) it.next());
                }
                return arrayList;
            }
            try {
                strDecideSkippedCameraIdByHeuristic = decideSkippedCameraIdByHeuristic(camera2CameraFactory.getCameraManager(), cameraSelector.getLensFacing(), listAsList);
            } catch (IllegalStateException unused) {
                strDecideSkippedCameraIdByHeuristic = null;
            }
            ArrayList arrayList2 = new ArrayList();
            for (String str : listAsList) {
                if (!str.equals(strDecideSkippedCameraIdByHeuristic)) {
                    arrayList2.add(camera2CameraFactory.getCameraInfo(str));
                }
            }
            Iterator<CameraInfo> it2 = cameraSelector.filter(arrayList2).iterator();
            while (it2.hasNext()) {
                arrayList.add(((CameraInfoInternal) it2.next()).getCameraId());
            }
            return arrayList;
        } catch (CameraAccessExceptionCompat e) {
            throw new InitializationException(CameraUnavailableExceptionHelper.createFrom(e));
        } catch (CameraUnavailableException e2) {
            throw new InitializationException(e2);
        }
    }

    private static String decideSkippedCameraIdByHeuristic(CameraManagerCompat cameraManagerCompat, Integer num, List<String> list) throws CameraAccessExceptionCompat {
        if (num == null || !list.contains("0") || !list.contains("1")) {
            return null;
        }
        if (num.intValue() == 1) {
            if (((Integer) cameraManagerCompat.getCameraCharacteristicsCompat("0").get(CameraCharacteristics.LENS_FACING)).intValue() == 1) {
                return "1";
            }
            return null;
        }
        if (num.intValue() == 0 && ((Integer) cameraManagerCompat.getCameraCharacteristicsCompat("1").get(CameraCharacteristics.LENS_FACING)).intValue() == 0) {
            return "0";
        }
        return null;
    }
}

