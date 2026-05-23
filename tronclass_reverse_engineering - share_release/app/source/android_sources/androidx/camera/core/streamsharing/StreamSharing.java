package androidx.camera.core.streamsharing;

import android.graphics.Rect;
import android.util.Log;
import android.util.Size;
import androidx.camera.core.UseCase;
import androidx.camera.core.impl.CameraInfoInternal;
import androidx.camera.core.impl.CameraInternal;
import androidx.camera.core.impl.Config;
import androidx.camera.core.impl.ImageInputConfig;
import androidx.camera.core.impl.ImageOutputConfig;
import androidx.camera.core.impl.MutableConfig;
import androidx.camera.core.impl.MutableOptionsBundle;
import androidx.camera.core.impl.OptionsBundle;
import androidx.camera.core.impl.SessionConfig;
import androidx.camera.core.impl.StreamSpec;
import androidx.camera.core.impl.UseCaseConfig;
import androidx.camera.core.impl.UseCaseConfigFactory;
import androidx.camera.core.impl.utils.Threads;
import androidx.camera.core.impl.utils.TransformUtils;
import androidx.camera.core.impl.utils.futures.Futures;
import androidx.camera.core.processing.DefaultSurfaceProcessor;
import androidx.camera.core.processing.SurfaceEdge;
import androidx.camera.core.processing.SurfaceProcessorNode;
import androidx.core.util.Preconditions;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
public class StreamSharing extends UseCase {
    private static final String TAG = "StreamSharing";
    private SurfaceEdge mCameraEdge;
    private final StreamSharingConfig mDefaultConfig;
    private SurfaceProcessorNode mEffectNode;
    SessionConfig.Builder mSessionConfigBuilder;
    private SurfaceEdge mSharingInputEdge;
    private SurfaceProcessorNode mSharingNode;
    private final VirtualCamera mVirtualCamera;

    interface Control {
        ListenableFuture<Void> jpegSnapshot(int i, int i2);
    }

    private static StreamSharingConfig getDefaultConfig(Set<UseCase> set) {
        MutableConfig mutableConfig = new StreamSharingBuilder().getMutableConfig();
        mutableConfig.insertOption(ImageInputConfig.OPTION_INPUT_FORMAT, 34);
        mutableConfig.insertOption(UseCaseConfig.OPTION_CAPTURE_TYPE, UseCaseConfigFactory.CaptureType.STREAM_SHARING);
        ArrayList arrayList = new ArrayList();
        for (UseCase useCase : set) {
            if (useCase.getCurrentConfig().containsOption(UseCaseConfig.OPTION_CAPTURE_TYPE)) {
                arrayList.add(useCase.getCurrentConfig().getCaptureType());
            } else {
                Log.e(TAG, "A child does not have capture type.");
            }
        }
        mutableConfig.insertOption(StreamSharingConfig.OPTION_CAPTURE_TYPES, arrayList);
        mutableConfig.insertOption(ImageOutputConfig.OPTION_MIRROR_MODE, 2);
        return new StreamSharingConfig(OptionsBundle.from(mutableConfig));
    }

    public StreamSharing(CameraInternal cameraInternal, Set<UseCase> set, UseCaseConfigFactory useCaseConfigFactory) {
        super(getDefaultConfig(set));
        this.mDefaultConfig = getDefaultConfig(set);
        this.mVirtualCamera = new VirtualCamera(cameraInternal, set, useCaseConfigFactory, new Control() { // from class: androidx.camera.core.streamsharing.StreamSharing$$ExternalSyntheticLambda1
            @Override // androidx.camera.core.streamsharing.StreamSharing.Control
            public final ListenableFuture jpegSnapshot(int i, int i2) {
                return this.f$0.m186lambda$new$0$androidxcameracorestreamsharingStreamSharing(i, i2);
            }
        });
    }
    /* synthetic */ ListenableFuture m186lambda$new$0$androidxcameracorestreamsharingStreamSharing(int i, int i2) {
        SurfaceProcessorNode surfaceProcessorNode = this.mSharingNode;
        if (surfaceProcessorNode != null) {
            return surfaceProcessorNode.getSurfaceProcessor().snapshot(i, i2);
        }
        return Futures.immediateFailedFuture(new Exception("Failed to take picture: pipeline is not ready."));
    }

    @Override // androidx.camera.core.UseCase
    public UseCaseConfig<?> getDefaultConfig(boolean z, UseCaseConfigFactory useCaseConfigFactory) {
        Config config = useCaseConfigFactory.getConfig(this.mDefaultConfig.getCaptureType(), 1);
        if (z) {
            config = Config.mergeConfigs(config, this.mDefaultConfig.getConfig());
        }
        if (config == null) {
            return null;
        }
        return getUseCaseConfigBuilder(config).getUseCaseConfig();
    }

    @Override // androidx.camera.core.UseCase
    public UseCaseConfig.Builder<?, ?, ?> getUseCaseConfigBuilder(Config config) {
        return new StreamSharingBuilder(MutableOptionsBundle.from(config));
    }

    @Override // androidx.camera.core.UseCase
    protected UseCaseConfig<?> onMergeConfig(CameraInfoInternal cameraInfoInternal, UseCaseConfig.Builder<?, ?, ?> builder) {
        this.mVirtualCamera.mergeChildrenConfigs(builder.getMutableConfig());
        return builder.getUseCaseConfig();
    }

    @Override // androidx.camera.core.UseCase
    protected StreamSpec onSuggestedStreamSpecUpdated(StreamSpec streamSpec) {
        updateSessionConfig(createPipelineAndUpdateChildrenSpecs(getCameraId(), getCurrentConfig(), streamSpec));
        notifyActive();
        return streamSpec;
    }

    @Override // androidx.camera.core.UseCase
    protected StreamSpec onSuggestedStreamSpecImplementationOptionsUpdated(Config config) {
        this.mSessionConfigBuilder.addImplementationOptions(config);
        updateSessionConfig(this.mSessionConfigBuilder.build());
        return getAttachedStreamSpec().toBuilder().setImplementationOptions(config).build();
    }

    @Override // androidx.camera.core.UseCase
    public void onBind() {
        super.onBind();
        this.mVirtualCamera.bindChildren();
    }

    @Override // androidx.camera.core.UseCase
    public void onUnbind() {
        super.onUnbind();
        clearPipeline();
        this.mVirtualCamera.unbindChildren();
    }

    @Override // androidx.camera.core.UseCase
    public void onStateAttached() {
        super.onStateAttached();
        this.mVirtualCamera.notifyStateAttached();
    }

    @Override // androidx.camera.core.UseCase
    public void onStateDetached() {
        super.onStateDetached();
        this.mVirtualCamera.notifyStateDetached();
    }

    public Set<UseCase> getChildren() {
        return this.mVirtualCamera.getChildren();
    }

    @Override // androidx.camera.core.UseCase
    public Set<Integer> getSupportedEffectTargets() {
        HashSet hashSet = new HashSet();
        hashSet.add(3);
        return hashSet;
    }

    private SessionConfig createPipelineAndUpdateChildrenSpecs(String str, UseCaseConfig<?> useCaseConfig, StreamSpec streamSpec) {
        Threads.checkMainThread();
        CameraInternal cameraInternal = (CameraInternal) Preconditions.checkNotNull(getCamera());
        SurfaceEdge surfaceEdge = new SurfaceEdge(3, 34, streamSpec, getSensorToBufferTransformMatrix(), cameraInternal.getHasTransform(), (Rect) Objects.requireNonNull(getCropRect(streamSpec.getResolution())), getRelativeRotation(cameraInternal), -1, isMirroringRequired(cameraInternal));
        this.mCameraEdge = surfaceEdge;
        this.mSharingInputEdge = getSharingInputEdge(surfaceEdge, cameraInternal);
        this.mSharingNode = new SurfaceProcessorNode(cameraInternal, DefaultSurfaceProcessor.Factory.newInstance(streamSpec.getDynamicRange()));
        Map<UseCase, SurfaceProcessorNode.OutConfig> childrenOutConfigs = this.mVirtualCamera.getChildrenOutConfigs(this.mSharingInputEdge);
        SurfaceProcessorNode.Out outTransform = this.mSharingNode.transform(SurfaceProcessorNode.In.of(this.mSharingInputEdge, new ArrayList(childrenOutConfigs.values())));
        HashMap map = new HashMap();
        for (Map.Entry<UseCase, SurfaceProcessorNode.OutConfig> entry : childrenOutConfigs.entrySet()) {
            map.put(entry.getKey(), outTransform.get(entry.getValue()));
        }
        this.mVirtualCamera.setChildrenEdges(map);
        SessionConfig.Builder builderCreateFrom = SessionConfig.Builder.createFrom(useCaseConfig, streamSpec.getResolution());
        builderCreateFrom.addSurface(this.mCameraEdge.getDeferrableSurface());
        builderCreateFrom.addRepeatingCameraCaptureCallback(this.mVirtualCamera.getParentMetadataCallback());
        if (streamSpec.getImplementationOptions() != null) {
            builderCreateFrom.addImplementationOptions(streamSpec.getImplementationOptions());
        }
        addCameraErrorListener(builderCreateFrom, str, useCaseConfig, streamSpec);
        this.mSessionConfigBuilder = builderCreateFrom;
        return builderCreateFrom.build();
    }

    private SurfaceEdge getSharingInputEdge(SurfaceEdge surfaceEdge, CameraInternal cameraInternal) {
        if (getEffect() == null) {
            return surfaceEdge;
        }
        this.mEffectNode = new SurfaceProcessorNode(cameraInternal, getEffect().createSurfaceProcessorInternal());
        SurfaceProcessorNode.OutConfig outConfigOf = SurfaceProcessorNode.OutConfig.of(surfaceEdge.getTargets(), surfaceEdge.getFormat(), surfaceEdge.getCropRect(), TransformUtils.getRotatedSize(surfaceEdge.getCropRect(), 0), 0, false);
        return (SurfaceEdge) Objects.requireNonNull(this.mEffectNode.transform(SurfaceProcessorNode.In.of(surfaceEdge, Collections.singletonList(outConfigOf))).get(outConfigOf));
    }

    private void addCameraErrorListener(SessionConfig.Builder builder, final String str, final UseCaseConfig<?> useCaseConfig, final StreamSpec streamSpec) {
        builder.addErrorListener(new SessionConfig.ErrorListener() { // from class: androidx.camera.core.streamsharing.StreamSharing$$ExternalSyntheticLambda0
            @Override // androidx.camera.core.impl.SessionConfig.ErrorListener
            public final void onError(SessionConfig sessionConfig, SessionConfig.SessionError sessionError) {
                this.f$0.m185x83a3b685(str, useCaseConfig, streamSpec, sessionConfig, sessionError);
            }
        });
    }
    /* synthetic */ void m185x83a3b685(String str, UseCaseConfig useCaseConfig, StreamSpec streamSpec, SessionConfig sessionConfig, SessionConfig.SessionError sessionError) {
        clearPipeline();
        if (isCurrentCamera(str)) {
            updateSessionConfig(createPipelineAndUpdateChildrenSpecs(str, useCaseConfig, streamSpec));
            notifyReset();
            this.mVirtualCamera.resetChildren();
        }
    }

    private void clearPipeline() {
        SurfaceEdge surfaceEdge = this.mCameraEdge;
        if (surfaceEdge != null) {
            surfaceEdge.close();
            this.mCameraEdge = null;
        }
        SurfaceEdge surfaceEdge2 = this.mSharingInputEdge;
        if (surfaceEdge2 != null) {
            surfaceEdge2.close();
            this.mSharingInputEdge = null;
        }
        SurfaceProcessorNode surfaceProcessorNode = this.mSharingNode;
        if (surfaceProcessorNode != null) {
            surfaceProcessorNode.release();
            this.mSharingNode = null;
        }
        SurfaceProcessorNode surfaceProcessorNode2 = this.mEffectNode;
        if (surfaceProcessorNode2 != null) {
            surfaceProcessorNode2.release();
            this.mEffectNode = null;
        }
    }

    private Rect getCropRect(Size size) {
        if (getViewPortCropRect() != null) {
            return getViewPortCropRect();
        }
        return new Rect(0, 0, size.getWidth(), size.getHeight());
    }

    SurfaceEdge getCameraEdge() {
        return this.mCameraEdge;
    }

    SurfaceProcessorNode getSharingNode() {
        return this.mSharingNode;
    }

    VirtualCamera getVirtualCamera() {
        return this.mVirtualCamera;
    }
}

