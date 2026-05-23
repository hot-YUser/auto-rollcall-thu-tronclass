package androidx.camera.core.streamsharing;

import androidx.camera.core.ImageCapture;
import androidx.camera.core.Preview;
import androidx.camera.core.UseCase;
import androidx.camera.core.impl.CameraCaptureCallback;
import androidx.camera.core.impl.CameraCaptureResult;
import androidx.camera.core.impl.CameraControlInternal;
import androidx.camera.core.impl.CameraInfoInternal;
import androidx.camera.core.impl.CameraInternal;
import androidx.camera.core.impl.DeferrableSurface;
import androidx.camera.core.impl.ImageOutputConfig;
import androidx.camera.core.impl.MutableConfig;
import androidx.camera.core.impl.Observable;
import androidx.camera.core.impl.SessionConfig;
import androidx.camera.core.impl.UseCaseConfig;
import androidx.camera.core.impl.UseCaseConfigFactory;
import androidx.camera.core.impl.utils.Threads;
import androidx.camera.core.impl.utils.TransformUtils;
import androidx.camera.core.processing.SurfaceEdge;
import androidx.camera.core.processing.SurfaceProcessorNode;
import androidx.camera.core.streamsharing.StreamSharing;
import androidx.core.util.Preconditions;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
class VirtualCamera implements CameraInternal {
    private static final String UNSUPPORTED_MESSAGE = "Operation not supported by VirtualCamera.";
    final Set<UseCase> mChildren;
    private final CameraInternal mParentCamera;
    private final UseCaseConfigFactory mUseCaseConfigFactory;
    private final VirtualCameraControl mVirtualCameraControl;
    final Map<UseCase, SurfaceEdge> mChildrenEdges = new HashMap();
    final Map<UseCase, Boolean> mChildrenActiveState = new HashMap();
    private final CameraCaptureCallback mParentMetadataCallback = createCameraCaptureCallback();

    @Override // androidx.camera.core.impl.CameraInternal
    public boolean getHasTransform() {
        return false;
    }

    VirtualCamera(CameraInternal cameraInternal, Set<UseCase> set, UseCaseConfigFactory useCaseConfigFactory, StreamSharing.Control control) {
        this.mParentCamera = cameraInternal;
        this.mUseCaseConfigFactory = useCaseConfigFactory;
        this.mChildren = set;
        this.mVirtualCameraControl = new VirtualCameraControl(cameraInternal.getCameraControlInternal(), control);
        Iterator<UseCase> it = set.iterator();
        while (it.hasNext()) {
            this.mChildrenActiveState.put(it.next(), false);
        }
    }

    void mergeChildrenConfigs(MutableConfig mutableConfig) {
        HashSet hashSet = new HashSet();
        for (UseCase useCase : this.mChildren) {
            hashSet.add(useCase.mergeConfigs(this.mParentCamera.getCameraInfoInternal(), null, useCase.getDefaultConfig(true, this.mUseCaseConfigFactory)));
        }
        mutableConfig.insertOption(ImageOutputConfig.OPTION_CUSTOM_ORDERED_RESOLUTIONS, ResolutionUtils.getMergedResolutions(new ArrayList(this.mParentCamera.getCameraInfoInternal().getSupportedResolutions(34)), TransformUtils.rectToSize(this.mParentCamera.getCameraControlInternal().getSensorRect()), hashSet));
        mutableConfig.insertOption(UseCaseConfig.OPTION_SURFACE_OCCUPANCY_PRIORITY, Integer.valueOf(getHighestSurfacePriority(hashSet)));
    }

    void bindChildren() {
        for (UseCase useCase : this.mChildren) {
            useCase.bindToCamera(this, null, useCase.getDefaultConfig(true, this.mUseCaseConfigFactory));
        }
    }

    void unbindChildren() {
        Iterator<UseCase> it = this.mChildren.iterator();
        while (it.hasNext()) {
            it.next().unbindFromCamera(this);
        }
    }

    void notifyStateAttached() {
        Iterator<UseCase> it = this.mChildren.iterator();
        while (it.hasNext()) {
            it.next().onStateAttached();
        }
    }

    void notifyStateDetached() {
        Iterator<UseCase> it = this.mChildren.iterator();
        while (it.hasNext()) {
            it.next().onStateDetached();
        }
    }

    Set<UseCase> getChildren() {
        return this.mChildren;
    }

    Map<UseCase, SurfaceProcessorNode.OutConfig> getChildrenOutConfigs(SurfaceEdge surfaceEdge) {
        HashMap map = new HashMap();
        for (UseCase useCase : this.mChildren) {
            int childRotationDegrees = getChildRotationDegrees(useCase);
            map.put(useCase, SurfaceProcessorNode.OutConfig.of(getChildTargetType(useCase), getChildFormat(useCase), surfaceEdge.getCropRect(), TransformUtils.getRotatedSize(surfaceEdge.getCropRect(), childRotationDegrees), childRotationDegrees, useCase.isMirroringRequired(this)));
        }
        return map;
    }

    void setChildrenEdges(Map<UseCase, SurfaceEdge> map) {
        this.mChildrenEdges.clear();
        this.mChildrenEdges.putAll(map);
        for (Map.Entry<UseCase, SurfaceEdge> entry : this.mChildrenEdges.entrySet()) {
            UseCase key = entry.getKey();
            SurfaceEdge value = entry.getValue();
            key.setViewPortCropRect(value.getCropRect());
            key.setSensorToBufferTransformMatrix(value.getSensorToBufferTransform());
            key.updateSuggestedStreamSpec(value.getStreamSpec());
            key.notifyState();
        }
    }

    void resetChildren() {
        Threads.checkMainThread();
        Iterator<UseCase> it = this.mChildren.iterator();
        while (it.hasNext()) {
            onUseCaseReset(it.next());
        }
    }

    CameraCaptureCallback getParentMetadataCallback() {
        return this.mParentMetadataCallback;
    }

    @Override // androidx.camera.core.UseCase.StateChangeCallback
    public void onUseCaseActive(UseCase useCase) {
        Threads.checkMainThread();
        if (isUseCaseActive(useCase)) {
            return;
        }
        this.mChildrenActiveState.put(useCase, true);
        DeferrableSurface childSurface = getChildSurface(useCase);
        if (childSurface != null) {
            forceSetProvider(getUseCaseEdge(useCase), childSurface, useCase.getSessionConfig());
        }
    }

    @Override // androidx.camera.core.UseCase.StateChangeCallback
    public void onUseCaseInactive(UseCase useCase) {
        Threads.checkMainThread();
        if (isUseCaseActive(useCase)) {
            this.mChildrenActiveState.put(useCase, false);
            getUseCaseEdge(useCase).disconnect();
        }
    }

    @Override // androidx.camera.core.UseCase.StateChangeCallback
    public void onUseCaseUpdated(UseCase useCase) {
        Threads.checkMainThread();
        if (isUseCaseActive(useCase)) {
            SurfaceEdge useCaseEdge = getUseCaseEdge(useCase);
            DeferrableSurface childSurface = getChildSurface(useCase);
            if (childSurface != null) {
                forceSetProvider(useCaseEdge, childSurface, useCase.getSessionConfig());
            } else {
                useCaseEdge.disconnect();
            }
        }
    }

    @Override // androidx.camera.core.UseCase.StateChangeCallback
    public void onUseCaseReset(UseCase useCase) {
        DeferrableSurface childSurface;
        Threads.checkMainThread();
        SurfaceEdge useCaseEdge = getUseCaseEdge(useCase);
        useCaseEdge.invalidate();
        if (isUseCaseActive(useCase) && (childSurface = getChildSurface(useCase)) != null) {
            forceSetProvider(useCaseEdge, childSurface, useCase.getSessionConfig());
        }
    }

    @Override // androidx.camera.core.impl.CameraInternal
    public CameraControlInternal getCameraControlInternal() {
        return this.mVirtualCameraControl;
    }

    @Override // androidx.camera.core.impl.CameraInternal
    public CameraInfoInternal getCameraInfoInternal() {
        return this.mParentCamera.getCameraInfoInternal();
    }

    @Override // androidx.camera.core.impl.CameraInternal
    public Observable<CameraInternal.State> getCameraState() {
        return this.mParentCamera.getCameraState();
    }

    private int getChildRotationDegrees(UseCase useCase) {
        if (useCase instanceof Preview) {
            return this.mParentCamera.getCameraInfo().getSensorRotationDegrees(((Preview) useCase).getTargetRotation());
        }
        return 0;
    }

    private static int getChildFormat(UseCase useCase) {
        return useCase instanceof ImageCapture ? 256 : 34;
    }

    private static int getChildTargetType(UseCase useCase) {
        if (useCase instanceof Preview) {
            return 1;
        }
        return useCase instanceof ImageCapture ? 4 : 2;
    }

    private static int getHighestSurfacePriority(Set<UseCaseConfig<?>> set) {
        Iterator<UseCaseConfig<?>> it = set.iterator();
        int iMax = 0;
        while (it.hasNext()) {
            iMax = Math.max(iMax, it.next().getSurfaceOccupancyPriority());
        }
        return iMax;
    }

    private SurfaceEdge getUseCaseEdge(UseCase useCase) {
        return (SurfaceEdge) Objects.requireNonNull(this.mChildrenEdges.get(useCase));
    }

    private boolean isUseCaseActive(UseCase useCase) {
        return ((Boolean) Objects.requireNonNull(this.mChildrenActiveState.get(useCase))).booleanValue();
    }

    private void forceSetProvider(SurfaceEdge surfaceEdge, DeferrableSurface deferrableSurface, SessionConfig sessionConfig) {
        surfaceEdge.invalidate();
        try {
            surfaceEdge.setProvider(deferrableSurface);
        } catch (DeferrableSurface.SurfaceClosedException unused) {
            Iterator<SessionConfig.ErrorListener> it = sessionConfig.getErrorListeners().iterator();
            while (it.hasNext()) {
                it.next().onError(sessionConfig, SessionConfig.SessionError.SESSION_ERROR_SURFACE_NEEDS_RESET);
            }
        }
    }

    static DeferrableSurface getChildSurface(UseCase useCase) {
        List<DeferrableSurface> surfaces;
        if (useCase instanceof ImageCapture) {
            surfaces = useCase.getSessionConfig().getSurfaces();
        } else {
            surfaces = useCase.getSessionConfig().getRepeatingCaptureConfig().getSurfaces();
        }
        Preconditions.checkState(surfaces.size() <= 1);
        if (surfaces.size() == 1) {
            return surfaces.get(0);
        }
        return null;
    }

    CameraCaptureCallback createCameraCaptureCallback() {
        return new CameraCaptureCallback() { // from class: androidx.camera.core.streamsharing.VirtualCamera.1
            @Override // androidx.camera.core.impl.CameraCaptureCallback
            public void onCaptureCompleted(CameraCaptureResult cameraCaptureResult) {
                super.onCaptureCompleted(cameraCaptureResult);
                Iterator<UseCase> it = VirtualCamera.this.mChildren.iterator();
                while (it.hasNext()) {
                    VirtualCamera.sendCameraCaptureResultToChild(cameraCaptureResult, it.next().getSessionConfig());
                }
            }
        };
    }

    static void sendCameraCaptureResultToChild(CameraCaptureResult cameraCaptureResult, SessionConfig sessionConfig) {
        Iterator<CameraCaptureCallback> it = sessionConfig.getRepeatingCameraCaptureCallbacks().iterator();
        while (it.hasNext()) {
            it.next().onCaptureCompleted(new VirtualCameraCaptureResult(sessionConfig.getRepeatingCaptureConfig().getTagBundle(), cameraCaptureResult));
        }
    }

    @Override // androidx.camera.core.impl.CameraInternal
    public void open() {
        throw new UnsupportedOperationException(UNSUPPORTED_MESSAGE);
    }

    @Override // androidx.camera.core.impl.CameraInternal
    public void close() {
        throw new UnsupportedOperationException(UNSUPPORTED_MESSAGE);
    }

    @Override // androidx.camera.core.impl.CameraInternal
    public ListenableFuture<Void> release() {
        throw new UnsupportedOperationException(UNSUPPORTED_MESSAGE);
    }

    @Override // androidx.camera.core.impl.CameraInternal
    public void attachUseCases(Collection<UseCase> collection) {
        throw new UnsupportedOperationException(UNSUPPORTED_MESSAGE);
    }

    @Override // androidx.camera.core.impl.CameraInternal
    public void detachUseCases(Collection<UseCase> collection) {
        throw new UnsupportedOperationException(UNSUPPORTED_MESSAGE);
    }
}

