package androidx.camera.camera2.internal.concurrent;

import android.hardware.camera2.CameraCharacteristics;
import androidx.camera.camera2.internal.compat.CameraAccessExceptionCompat;
import androidx.camera.camera2.internal.compat.CameraManagerCompat;
import androidx.camera.camera2.interop.Camera2CameraInfo;
import androidx.camera.core.CameraFilter;
import androidx.camera.core.CameraInfo;
import androidx.camera.core.CameraSelector;
import androidx.camera.core.Logger;
import androidx.camera.core.concurrent.CameraCoordinator;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
public class Camera2CameraCoordinator implements CameraCoordinator {
    private static final String TAG = "Camera2CameraCoordinator";
    private final CameraManagerCompat mCameraManager;
    private int mCameraOperatingMode = 0;
    private final Map<String, List<String>> mConcurrentCameraIdMap = new HashMap();
    private Set<Set<String>> mConcurrentCameraIds = new HashSet();
    private final List<CameraCoordinator.ConcurrentCameraModeListener> mConcurrentCameraModeListeners = new ArrayList();
    private List<CameraInfo> mActiveConcurrentCameraInfos = new ArrayList();

    public Camera2CameraCoordinator(CameraManagerCompat cameraManagerCompat) {
        this.mCameraManager = cameraManagerCompat;
        retrieveConcurrentCameraIds();
    }

    @Override // androidx.camera.core.concurrent.CameraCoordinator
    public List<List<CameraSelector>> getConcurrentCameraSelectors() {
        ArrayList arrayList = new ArrayList();
        for (Set<String> set : this.mConcurrentCameraIds) {
            ArrayList arrayList2 = new ArrayList();
            Iterator<String> it = set.iterator();
            while (it.hasNext()) {
                arrayList2.add(createCameraSelectorById(this.mCameraManager, it.next()));
            }
            arrayList.add(arrayList2);
        }
        return arrayList;
    }

    @Override // androidx.camera.core.concurrent.CameraCoordinator
    public List<CameraInfo> getActiveConcurrentCameraInfos() {
        return this.mActiveConcurrentCameraInfos;
    }

    @Override // androidx.camera.core.concurrent.CameraCoordinator
    public void setActiveConcurrentCameraInfos(List<CameraInfo> list) {
        this.mActiveConcurrentCameraInfos = new ArrayList(list);
    }

    @Override // androidx.camera.core.concurrent.CameraCoordinator
    public String getPairedConcurrentCameraId(String str) {
        if (!this.mConcurrentCameraIdMap.containsKey(str)) {
            return null;
        }
        for (String str2 : this.mConcurrentCameraIdMap.get(str)) {
            Iterator<CameraInfo> it = this.mActiveConcurrentCameraInfos.iterator();
            while (it.hasNext()) {
                if (str2.equals(Camera2CameraInfo.from(it.next()).getCameraId())) {
                    return str2;
                }
            }
        }
        return null;
    }

    @Override // androidx.camera.core.concurrent.CameraCoordinator
    public int getCameraOperatingMode() {
        return this.mCameraOperatingMode;
    }

    @Override // androidx.camera.core.concurrent.CameraCoordinator
    public void setCameraOperatingMode(int i) {
        if (i != this.mCameraOperatingMode) {
            Iterator<CameraCoordinator.ConcurrentCameraModeListener> it = this.mConcurrentCameraModeListeners.iterator();
            while (it.hasNext()) {
                it.next().onCameraOperatingModeUpdated(this.mCameraOperatingMode, i);
            }
        }
        if (this.mCameraOperatingMode == 2 && i != 2) {
            this.mActiveConcurrentCameraInfos.clear();
        }
        this.mCameraOperatingMode = i;
    }

    @Override // androidx.camera.core.concurrent.CameraCoordinator
    public void addListener(CameraCoordinator.ConcurrentCameraModeListener concurrentCameraModeListener) {
        this.mConcurrentCameraModeListeners.add(concurrentCameraModeListener);
    }

    @Override // androidx.camera.core.concurrent.CameraCoordinator
    public void removeListener(CameraCoordinator.ConcurrentCameraModeListener concurrentCameraModeListener) {
        this.mConcurrentCameraModeListeners.remove(concurrentCameraModeListener);
    }

    @Override // androidx.camera.core.concurrent.CameraCoordinator
    public void shutdown() {
        this.mConcurrentCameraModeListeners.clear();
        this.mConcurrentCameraIdMap.clear();
        this.mActiveConcurrentCameraInfos.clear();
        this.mConcurrentCameraIds.clear();
        this.mCameraOperatingMode = 0;
    }

    private void retrieveConcurrentCameraIds() {
        try {
            this.mConcurrentCameraIds = this.mCameraManager.getConcurrentCameraIds();
        } catch (CameraAccessExceptionCompat unused) {
            Logger.e(TAG, "Failed to get concurrent camera ids");
        }
        Iterator<Set<String>> it = this.mConcurrentCameraIds.iterator();
        while (it.hasNext()) {
            ArrayList arrayList = new ArrayList(it.next());
            if (arrayList.size() >= 2) {
                String str = (String) arrayList.get(0);
                String str2 = (String) arrayList.get(1);
                if (!this.mConcurrentCameraIdMap.containsKey(str)) {
                    this.mConcurrentCameraIdMap.put(str, new ArrayList());
                }
                if (!this.mConcurrentCameraIdMap.containsKey(str2)) {
                    this.mConcurrentCameraIdMap.put(str2, new ArrayList());
                }
                this.mConcurrentCameraIdMap.get(str).add((String) arrayList.get(1));
                this.mConcurrentCameraIdMap.get(str2).add((String) arrayList.get(0));
            }
        }
    }

    private static CameraSelector createCameraSelectorById(CameraManagerCompat cameraManagerCompat, final String str) {
        CameraSelector.Builder builderAddCameraFilter = new CameraSelector.Builder().addCameraFilter(new CameraFilter() { // from class: androidx.camera.camera2.internal.concurrent.Camera2CameraCoordinator$$ExternalSyntheticLambda0
            @Override // androidx.camera.core.CameraFilter
            public final List filter(List list) {
                return Camera2CameraCoordinator.lambda$createCameraSelectorById$0(str, list);
            }
        });
        try {
            builderAddCameraFilter.requireLensFacing(((Integer) cameraManagerCompat.getCameraCharacteristicsCompat(str).get(CameraCharacteristics.LENS_FACING)).intValue());
            return builderAddCameraFilter.build();
        } catch (CameraAccessExceptionCompat e) {
            throw new RuntimeException(e);
        }
    }

    static /* synthetic */ List lambda$createCameraSelectorById$0(String str, List list) {
        Iterator it = list.iterator();
        while (it.hasNext()) {
            CameraInfo cameraInfo = (CameraInfo) it.next();
            if (str.equals(Camera2CameraInfo.from(cameraInfo).getCameraId())) {
                return Collections.singletonList(cameraInfo);
            }
        }
        throw new IllegalArgumentException("No camera can be find for id: " + str);
    }
}

