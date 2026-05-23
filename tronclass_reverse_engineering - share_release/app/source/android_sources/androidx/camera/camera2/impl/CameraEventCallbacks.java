package androidx.camera.camera2.impl;

import androidx.camera.core.impl.CaptureConfig;
import androidx.camera.core.impl.MultiValueSet;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
public final class CameraEventCallbacks extends MultiValueSet<CameraEventCallback> {
    public CameraEventCallbacks(CameraEventCallback... cameraEventCallbackArr) {
        addAll(Arrays.asList(cameraEventCallbackArr));
    }

    public ComboCameraEventCallback createComboCallback() {
        return new ComboCameraEventCallback(getAllItems());
    }

    public static CameraEventCallbacks createEmptyCallback() {
        return new CameraEventCallbacks(new CameraEventCallback[0]);
    }

    @Override // androidx.camera.core.impl.MultiValueSet
    public MultiValueSet<CameraEventCallback> mo8clone() {
        CameraEventCallbacks cameraEventCallbacksCreateEmptyCallback = createEmptyCallback();
        cameraEventCallbacksCreateEmptyCallback.addAll(getAllItems());
        return cameraEventCallbacksCreateEmptyCallback;
    }

    public static final class ComboCameraEventCallback {
        private final List<CameraEventCallback> mCallbacks = new ArrayList();

        ComboCameraEventCallback(List<CameraEventCallback> list) {
            Iterator<CameraEventCallback> it = list.iterator();
            while (it.hasNext()) {
                this.mCallbacks.add(it.next());
            }
        }

        public List<CaptureConfig> onInitSession() {
            ArrayList arrayList = new ArrayList();
            Iterator<CameraEventCallback> it = this.mCallbacks.iterator();
            while (it.hasNext()) {
                CaptureConfig captureConfigOnInitSession = it.next().onInitSession();
                if (captureConfigOnInitSession != null) {
                    arrayList.add(captureConfigOnInitSession);
                }
            }
            return arrayList;
        }

        public List<CaptureConfig> onEnableSession() {
            ArrayList arrayList = new ArrayList();
            Iterator<CameraEventCallback> it = this.mCallbacks.iterator();
            while (it.hasNext()) {
                CaptureConfig captureConfigOnEnableSession = it.next().onEnableSession();
                if (captureConfigOnEnableSession != null) {
                    arrayList.add(captureConfigOnEnableSession);
                }
            }
            return arrayList;
        }

        public List<CaptureConfig> onRepeating() {
            ArrayList arrayList = new ArrayList();
            Iterator<CameraEventCallback> it = this.mCallbacks.iterator();
            while (it.hasNext()) {
                CaptureConfig captureConfigOnRepeating = it.next().onRepeating();
                if (captureConfigOnRepeating != null) {
                    arrayList.add(captureConfigOnRepeating);
                }
            }
            return arrayList;
        }

        public List<CaptureConfig> onDisableSession() {
            ArrayList arrayList = new ArrayList();
            Iterator<CameraEventCallback> it = this.mCallbacks.iterator();
            while (it.hasNext()) {
                CaptureConfig captureConfigOnDisableSession = it.next().onDisableSession();
                if (captureConfigOnDisableSession != null) {
                    arrayList.add(captureConfigOnDisableSession);
                }
            }
            return arrayList;
        }

        public void onDeInitSession() {
            Iterator<CameraEventCallback> it = this.mCallbacks.iterator();
            while (it.hasNext()) {
                it.next().onDeInitSession();
            }
        }

        public List<CameraEventCallback> getCallbacks() {
            return this.mCallbacks;
        }
    }
}

