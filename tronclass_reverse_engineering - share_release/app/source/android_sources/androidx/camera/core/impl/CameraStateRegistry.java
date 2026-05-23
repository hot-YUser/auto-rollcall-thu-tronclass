package androidx.camera.core.impl;

import androidx.camera.core.Camera;
import androidx.camera.core.Logger;
import androidx.camera.core.concurrent.CameraCoordinator;
import androidx.camera.core.impl.CameraInternal;
import androidx.core.util.Preconditions;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Locale;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.Executor;
import java.util.concurrent.RejectedExecutionException;
public final class CameraStateRegistry implements CameraCoordinator.ConcurrentCameraModeListener {
    private static final int MAX_ALLOWED_CONCURRENT_CAMERAS_IN_CONCURRENT_MODE = 2;
    private static final int MAX_ALLOWED_CONCURRENT_CAMERAS_IN_SINGLE_MODE = 1;
    private static final String TAG = "CameraStateRegistry";
    private int mAvailableCameras;
    private final CameraCoordinator mCameraCoordinator;
    private final Map<Camera, CameraRegistration> mCameraStates;
    private final StringBuilder mDebugString = new StringBuilder();
    private final Object mLock;
    private int mMaxAllowedOpenedCameras;

    public interface OnConfigureAvailableListener {
        void onConfigureAvailable();
    }

    public interface OnOpenAvailableListener {
        void onOpenAvailable();
    }

    public CameraStateRegistry(CameraCoordinator cameraCoordinator, int i) {
        Object obj = new Object();
        this.mLock = obj;
        this.mCameraStates = new HashMap();
        this.mMaxAllowedOpenedCameras = i;
        synchronized (obj) {
            this.mCameraCoordinator = cameraCoordinator;
            this.mAvailableCameras = this.mMaxAllowedOpenedCameras;
        }
    }

    public void registerCamera(Camera camera, Executor executor, OnConfigureAvailableListener onConfigureAvailableListener, OnOpenAvailableListener onOpenAvailableListener) {
        synchronized (this.mLock) {
            Preconditions.checkState(!this.mCameraStates.containsKey(camera), "Camera is already registered: " + camera);
            this.mCameraStates.put(camera, new CameraRegistration(null, executor, onConfigureAvailableListener, onOpenAvailableListener));
        }
    }

    public boolean tryOpenCamera(Camera camera) {
        boolean z;
        synchronized (this.mLock) {
            CameraRegistration cameraRegistration = (CameraRegistration) Preconditions.checkNotNull(this.mCameraStates.get(camera), "Camera must first be registered with registerCamera()");
            z = false;
            if (Logger.isDebugEnabled(TAG)) {
                this.mDebugString.setLength(0);
                this.mDebugString.append(String.format(Locale.US, "tryOpenCamera(%s) [Available Cameras: %d, Already Open: %b (Previous state: %s)]", camera, Integer.valueOf(this.mAvailableCameras), Boolean.valueOf(isOpen(cameraRegistration.getState())), cameraRegistration.getState()));
            }
            if (this.mAvailableCameras > 0 || isOpen(cameraRegistration.getState())) {
                cameraRegistration.setState(CameraInternal.State.OPENING);
                z = true;
            }
            if (Logger.isDebugEnabled(TAG)) {
                this.mDebugString.append(String.format(Locale.US, " --> %s", z ? "SUCCESS" : "FAIL"));
                Logger.d(TAG, this.mDebugString.toString());
            }
            if (z) {
                recalculateAvailableCameras();
            }
        }
        return z;
    }

    public boolean tryOpenCaptureSession(String str, String str2) {
        synchronized (this.mLock) {
            boolean z = true;
            if (this.mCameraCoordinator.getCameraOperatingMode() != 2) {
                return true;
            }
            CameraInternal.State state = null;
            CameraInternal.State state2 = getCameraRegistration(str) != null ? getCameraRegistration(str).getState() : null;
            if (str2 != null && getCameraRegistration(str2) != null) {
                state = getCameraRegistration(str2).getState();
            }
            boolean z2 = CameraInternal.State.OPEN.equals(state2) || CameraInternal.State.CONFIGURED.equals(state2);
            boolean z3 = CameraInternal.State.OPEN.equals(state) || CameraInternal.State.CONFIGURED.equals(state);
            if (!z2 || !z3) {
                z = false;
            }
            return z;
        }
    }

    public void markCameraState(Camera camera, CameraInternal.State state) {
        markCameraState(camera, state, true);
    }

    /* high-level source view WARN: Removed duplicated region for block: B:18:0x003b  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public void markCameraState(Camera camera, CameraInternal.State state, boolean z) {
        CameraInternal.State stateUpdateAndVerifyState;
        CameraRegistration cameraRegistration;
        synchronized (this.mLock) {
            int i = this.mAvailableCameras;
            if (state == CameraInternal.State.RELEASED) {
                stateUpdateAndVerifyState = unregisterCamera(camera);
            } else {
                stateUpdateAndVerifyState = updateAndVerifyState(camera, state);
            }
            if (stateUpdateAndVerifyState == state) {
                return;
            }
            HashMap map = null;
            if (this.mCameraCoordinator.getCameraOperatingMode() == 2 && state == CameraInternal.State.CONFIGURED) {
                String pairedConcurrentCameraId = this.mCameraCoordinator.getPairedConcurrentCameraId(((CameraInfoInternal) camera.getCameraInfo()).getCameraId());
                if (pairedConcurrentCameraId != null) {
                    cameraRegistration = getCameraRegistration(pairedConcurrentCameraId);
                }
            } else {
                cameraRegistration = null;
            }
            if (i < 1 && this.mAvailableCameras > 0) {
                map = new HashMap();
                for (Map.Entry<Camera, CameraRegistration> entry : this.mCameraStates.entrySet()) {
                    if (entry.getValue().getState() == CameraInternal.State.PENDING_OPEN) {
                        map.put(entry.getKey(), entry.getValue());
                    }
                }
            } else if (state == CameraInternal.State.PENDING_OPEN && this.mAvailableCameras > 0) {
                map = new HashMap();
                map.put(camera, this.mCameraStates.get(camera));
            }
            if (map != null && !z) {
                map.remove(camera);
            }
            if (map != null) {
                Iterator it = map.values().iterator();
                while (it.hasNext()) {
                    ((CameraRegistration) it.next()).notifyOnOpenAvailableListener();
                }
            }
            if (cameraRegistration != null) {
                cameraRegistration.notifyOnConfigureAvailableListener();
            }
        }
    }

    @Override // androidx.camera.core.concurrent.CameraCoordinator.ConcurrentCameraModeListener
    public void onCameraOperatingModeUpdated(int i, int i2) {
        synchronized (this.mLock) {
            boolean z = true;
            this.mMaxAllowedOpenedCameras = i2 == 2 ? 2 : 1;
            boolean z2 = i != 2 && i2 == 2;
            if (i != 2 || i2 == 2) {
                z = false;
            }
            if (z2 || z) {
                recalculateAvailableCameras();
            }
        }
    }

    private CameraInternal.State unregisterCamera(Camera camera) {
        CameraRegistration cameraRegistrationRemove = this.mCameraStates.remove(camera);
        if (cameraRegistrationRemove == null) {
            return null;
        }
        recalculateAvailableCameras();
        return cameraRegistrationRemove.getState();
    }

    private CameraInternal.State updateAndVerifyState(Camera camera, CameraInternal.State state) {
        CameraInternal.State state2 = ((CameraRegistration) Preconditions.checkNotNull(this.mCameraStates.get(camera), "Cannot update state of camera which has not yet been registered. Register with CameraStateRegistry.registerCamera()")).setState(state);
        if (state == CameraInternal.State.OPENING) {
            Preconditions.checkState(isOpen(state) || state2 == CameraInternal.State.OPENING, "Cannot mark camera as opening until camera was successful at calling CameraStateRegistry.tryOpenCamera()");
        }
        if (state2 != state) {
            recalculateAvailableCameras();
        }
        return state2;
    }

    private static boolean isOpen(CameraInternal.State state) {
        return state != null && state.holdsCameraSlot();
    }

    private void recalculateAvailableCameras() {
        if (Logger.isDebugEnabled(TAG)) {
            this.mDebugString.setLength(0);
            this.mDebugString.append("Recalculating open cameras:\n");
            this.mDebugString.append(String.format(Locale.US, "%-45s%-22s\n", "Camera", "State"));
            this.mDebugString.append("-------------------------------------------------------------------\n");
        }
        int i = 0;
        for (Map.Entry<Camera, CameraRegistration> entry : this.mCameraStates.entrySet()) {
            if (Logger.isDebugEnabled(TAG)) {
                this.mDebugString.append(String.format(Locale.US, "%-45s%-22s\n", entry.getKey().toString(), entry.getValue().getState() != null ? entry.getValue().getState().toString() : "UNKNOWN"));
            }
            if (isOpen(entry.getValue().getState())) {
                i++;
            }
        }
        if (Logger.isDebugEnabled(TAG)) {
            this.mDebugString.append("-------------------------------------------------------------------\n");
            this.mDebugString.append(String.format(Locale.US, "Open count: %d (Max allowed: %d)", Integer.valueOf(i), Integer.valueOf(this.mMaxAllowedOpenedCameras)));
            Logger.d(TAG, this.mDebugString.toString());
        }
        this.mAvailableCameras = Math.max(this.mMaxAllowedOpenedCameras - i, 0);
    }

    public boolean isCameraClosing() {
        synchronized (this.mLock) {
            Iterator<Map.Entry<Camera, CameraRegistration>> it = this.mCameraStates.entrySet().iterator();
            while (it.hasNext()) {
                if (it.next().getValue().getState() == CameraInternal.State.CLOSING) {
                    return true;
                }
            }
            return false;
        }
    }

    private CameraRegistration getCameraRegistration(String str) {
        for (Camera camera : this.mCameraStates.keySet()) {
            if (str.equals(((CameraInfoInternal) camera.getCameraInfo()).getCameraId())) {
                return this.mCameraStates.get(camera);
            }
        }
        return null;
    }

    private static class CameraRegistration {
        private final Executor mNotifyExecutor;
        private final OnConfigureAvailableListener mOnConfigureAvailableListener;
        private final OnOpenAvailableListener mOnOpenAvailableListener;
        private CameraInternal.State mState;

        CameraRegistration(CameraInternal.State state, Executor executor, OnConfigureAvailableListener onConfigureAvailableListener, OnOpenAvailableListener onOpenAvailableListener) {
            this.mState = state;
            this.mNotifyExecutor = executor;
            this.mOnConfigureAvailableListener = onConfigureAvailableListener;
            this.mOnOpenAvailableListener = onOpenAvailableListener;
        }

        CameraInternal.State setState(CameraInternal.State state) {
            CameraInternal.State state2 = this.mState;
            this.mState = state;
            return state2;
        }

        CameraInternal.State getState() {
            return this.mState;
        }

        void notifyOnConfigureAvailableListener() {
            try {
                Executor executor = this.mNotifyExecutor;
                final OnConfigureAvailableListener onConfigureAvailableListener = this.mOnConfigureAvailableListener;
                Objects.requireNonNull(onConfigureAvailableListener);
                executor.execute(new Runnable() { // from class: androidx.camera.core.impl.CameraStateRegistry$CameraRegistration$$ExternalSyntheticLambda1
                    @Override // java.lang.Runnable
                    public final void run() {
                        onConfigureAvailableListener.onConfigureAvailable();
                    }
                });
            } catch (RejectedExecutionException e) {
                Logger.e(CameraStateRegistry.TAG, "Unable to notify camera to configure.", e);
            }
        }

        void notifyOnOpenAvailableListener() {
            try {
                Executor executor = this.mNotifyExecutor;
                final OnOpenAvailableListener onOpenAvailableListener = this.mOnOpenAvailableListener;
                Objects.requireNonNull(onOpenAvailableListener);
                executor.execute(new Runnable() { // from class: androidx.camera.core.impl.CameraStateRegistry$CameraRegistration$$ExternalSyntheticLambda0
                    @Override // java.lang.Runnable
                    public final void run() {
                        onOpenAvailableListener.onOpenAvailable();
                    }
                });
            } catch (RejectedExecutionException e) {
                Logger.e(CameraStateRegistry.TAG, "Unable to notify camera to open.", e);
            }
        }
    }
}

