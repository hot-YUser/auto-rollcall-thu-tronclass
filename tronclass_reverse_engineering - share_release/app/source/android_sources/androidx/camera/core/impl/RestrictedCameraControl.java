package androidx.camera.core.impl;

import androidx.camera.core.FocusMeteringAction;
import androidx.camera.core.FocusMeteringResult;
import androidx.camera.core.impl.utils.futures.Futures;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
import java.util.Set;
public class RestrictedCameraControl extends ForwardingCameraControl {
    public static final int AE_REGION = 3;
    public static final int AF_REGION = 2;
    public static final int AUTO_FOCUS = 1;
    public static final int AWB_REGION = 4;
    public static final int EXPOSURE_COMPENSATION = 7;
    public static final int FLASH = 5;
    public static final int TORCH = 6;
    public static final int ZOOM = 0;
    private final CameraControlInternal mCameraControl;
    private volatile Set<Integer> mRestrictedCameraOperations;
    private volatile boolean mUseRestrictedCameraOperations;

    public @interface CameraOperation {
    }

    public RestrictedCameraControl(CameraControlInternal cameraControlInternal) {
        super(cameraControlInternal);
        this.mUseRestrictedCameraOperations = false;
        this.mCameraControl = cameraControlInternal;
    }

    public void enableRestrictedOperations(boolean z, Set<Integer> set) {
        this.mUseRestrictedCameraOperations = z;
        this.mRestrictedCameraOperations = set;
    }

    @Override // androidx.camera.core.impl.ForwardingCameraControl, androidx.camera.core.impl.CameraControlInternal
    public CameraControlInternal getImplementation() {
        return this.mCameraControl;
    }

    boolean isOperationSupported(int... iArr) {
        if (!this.mUseRestrictedCameraOperations || this.mRestrictedCameraOperations == null) {
            return true;
        }
        ArrayList arrayList = new ArrayList(iArr.length);
        for (int i : iArr) {
            arrayList.add(Integer.valueOf(i));
        }
        return this.mRestrictedCameraOperations.containsAll(arrayList);
    }

    @Override // androidx.camera.core.impl.ForwardingCameraControl, androidx.camera.core.CameraControl
    public ListenableFuture<Void> enableTorch(boolean z) {
        if (!isOperationSupported(6)) {
            return Futures.immediateFailedFuture(new IllegalStateException("Torch is not supported"));
        }
        return this.mCameraControl.enableTorch(z);
    }

    @Override // androidx.camera.core.impl.ForwardingCameraControl, androidx.camera.core.CameraControl
    public ListenableFuture<FocusMeteringResult> startFocusAndMetering(FocusMeteringAction focusMeteringAction) {
        FocusMeteringAction modifiedFocusMeteringAction = getModifiedFocusMeteringAction(focusMeteringAction);
        if (modifiedFocusMeteringAction == null) {
            return Futures.immediateFailedFuture(new IllegalStateException("FocusMetering is not supported"));
        }
        return this.mCameraControl.startFocusAndMetering(modifiedFocusMeteringAction);
    }

    @Override // androidx.camera.core.impl.ForwardingCameraControl, androidx.camera.core.CameraControl
    public ListenableFuture<Void> cancelFocusAndMetering() {
        return this.mCameraControl.cancelFocusAndMetering();
    }

    @Override // androidx.camera.core.impl.ForwardingCameraControl, androidx.camera.core.CameraControl
    public ListenableFuture<Void> setZoomRatio(float f) {
        if (!isOperationSupported(0)) {
            return Futures.immediateFailedFuture(new IllegalStateException("Zoom is not supported"));
        }
        return this.mCameraControl.setZoomRatio(f);
    }

    @Override // androidx.camera.core.impl.ForwardingCameraControl, androidx.camera.core.CameraControl
    public ListenableFuture<Void> setLinearZoom(float f) {
        if (!isOperationSupported(0)) {
            return Futures.immediateFailedFuture(new IllegalStateException("Zoom is not supported"));
        }
        return this.mCameraControl.setLinearZoom(f);
    }

    @Override // androidx.camera.core.impl.ForwardingCameraControl, androidx.camera.core.CameraControl
    public ListenableFuture<Integer> setExposureCompensationIndex(int i) {
        if (!isOperationSupported(7)) {
            return Futures.immediateFailedFuture(new IllegalStateException("ExposureCompensation is not supported"));
        }
        return this.mCameraControl.setExposureCompensationIndex(i);
    }

    FocusMeteringAction getModifiedFocusMeteringAction(FocusMeteringAction focusMeteringAction) {
        boolean z;
        FocusMeteringAction.Builder builder = new FocusMeteringAction.Builder(focusMeteringAction);
        boolean z2 = true;
        if (focusMeteringAction.getMeteringPointsAf().isEmpty() || isOperationSupported(1, 2)) {
            z = false;
        } else {
            builder.removePoints(1);
            z = true;
        }
        if (!focusMeteringAction.getMeteringPointsAe().isEmpty() && !isOperationSupported(3)) {
            builder.removePoints(2);
            z = true;
        }
        if (focusMeteringAction.getMeteringPointsAwb().isEmpty() || isOperationSupported(4)) {
            z2 = z;
        } else {
            builder.removePoints(4);
        }
        if (!z2) {
            return focusMeteringAction;
        }
        FocusMeteringAction focusMeteringActionBuild = builder.build();
        if (focusMeteringActionBuild.getMeteringPointsAf().isEmpty() && focusMeteringActionBuild.getMeteringPointsAe().isEmpty() && focusMeteringActionBuild.getMeteringPointsAwb().isEmpty()) {
            return null;
        }
        return builder.build();
    }
}

