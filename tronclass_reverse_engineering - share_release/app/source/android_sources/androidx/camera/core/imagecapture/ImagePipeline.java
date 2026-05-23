package androidx.camera.core.imagecapture;

import android.util.Size;
import androidx.camera.core.CameraEffect;
import androidx.camera.core.CaptureBundles;
import androidx.camera.core.ForwardingImageProxy;
import androidx.camera.core.ImageCaptureException;
import androidx.camera.core.MetadataImageReader;
import androidx.camera.core.imagecapture.CaptureNode;
import androidx.camera.core.impl.CaptureBundle;
import androidx.camera.core.impl.CaptureConfig;
import androidx.camera.core.impl.CaptureStage;
import androidx.camera.core.impl.ImageCaptureConfig;
import androidx.camera.core.impl.SessionConfig;
import androidx.camera.core.impl.utils.Threads;
import androidx.camera.core.impl.utils.TransformUtils;
import androidx.camera.core.impl.utils.executor.CameraXExecutors;
import androidx.camera.core.internal.compat.workaround.ExifRotationAvailability;
import androidx.camera.core.processing.InternalImageProcessor;
import androidx.core.util.Pair;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.Executor;
public class ImagePipeline {
    static final ExifRotationAvailability EXIF_ROTATION_AVAILABILITY = new ExifRotationAvailability();
    static final byte JPEG_QUALITY_MAX_QUALITY = 100;
    static final byte JPEG_QUALITY_MIN_LATENCY = 95;
    private final SingleBundlingNode mBundlingNode;
    private final CaptureConfig mCaptureConfig;
    private final CaptureNode mCaptureNode;
    private final CaptureNode.In mPipelineIn;
    private final ProcessingNode mProcessingNode;
    private final ImageCaptureConfig mUseCaseConfig;

    public ImagePipeline(ImageCaptureConfig imageCaptureConfig, Size size) {
        this(imageCaptureConfig, size, null, false);
    }

    public ImagePipeline(ImageCaptureConfig imageCaptureConfig, Size size, CameraEffect cameraEffect, boolean z) {
        Threads.checkMainThread();
        this.mUseCaseConfig = imageCaptureConfig;
        this.mCaptureConfig = CaptureConfig.Builder.createFrom(imageCaptureConfig).build();
        CaptureNode captureNode = new CaptureNode();
        this.mCaptureNode = captureNode;
        SingleBundlingNode singleBundlingNode = new SingleBundlingNode();
        this.mBundlingNode = singleBundlingNode;
        ProcessingNode processingNode = new ProcessingNode((Executor) Objects.requireNonNull(imageCaptureConfig.getIoExecutor(CameraXExecutors.ioExecutor())), cameraEffect != null ? new InternalImageProcessor(cameraEffect) : null);
        this.mProcessingNode = processingNode;
        CaptureNode.In inOf = CaptureNode.In.of(size, imageCaptureConfig.getInputFormat(), getOutputFormat(), z, imageCaptureConfig.getImageReaderProxyProvider());
        this.mPipelineIn = inOf;
        processingNode.transform(singleBundlingNode.transform(captureNode.transform(inOf)));
    }

    public SessionConfig.Builder createSessionConfigBuilder(Size size) {
        SessionConfig.Builder builderCreateFrom = SessionConfig.Builder.createFrom(this.mUseCaseConfig, size);
        builderCreateFrom.addNonRepeatingSurface(this.mPipelineIn.getSurface());
        return builderCreateFrom;
    }

    public void close() {
        Threads.checkMainThread();
        this.mCaptureNode.release();
        this.mBundlingNode.release();
        this.mProcessingNode.release();
    }

    public int getCapacity() {
        Threads.checkMainThread();
        return this.mCaptureNode.getCapacity();
    }

    public void setOnImageCloseListener(ForwardingImageProxy.OnImageCloseListener onImageCloseListener) {
        Threads.checkMainThread();
        this.mCaptureNode.setOnImageCloseListener(onImageCloseListener);
    }

    Pair<CameraRequest, ProcessingRequest> createRequests(TakePictureRequest takePictureRequest, TakePictureCallback takePictureCallback, ListenableFuture<Void> listenableFuture) {
        Threads.checkMainThread();
        CaptureBundle captureBundleCreateCaptureBundle = createCaptureBundle();
        return new Pair<>(createCameraRequest(captureBundleCreateCaptureBundle, takePictureRequest, takePictureCallback), createProcessingRequest(captureBundleCreateCaptureBundle, takePictureRequest, takePictureCallback, listenableFuture));
    }

    void submitProcessingRequest(ProcessingRequest processingRequest) {
        Threads.checkMainThread();
        this.mPipelineIn.getRequestEdge().accept(processingRequest);
    }

    void notifyCaptureError(ImageCaptureException imageCaptureException) {
        Threads.checkMainThread();
        this.mPipelineIn.getErrorEdge().accept(imageCaptureException);
    }

    private int getOutputFormat() {
        Integer num = (Integer) this.mUseCaseConfig.retrieveOption(ImageCaptureConfig.OPTION_BUFFER_FORMAT, null);
        if (num != null) {
            return num.intValue();
        }
        return 256;
    }

    private CaptureBundle createCaptureBundle() {
        return (CaptureBundle) Objects.requireNonNull(this.mUseCaseConfig.getCaptureBundle(CaptureBundles.singleDefaultCaptureBundle()));
    }

    private ProcessingRequest createProcessingRequest(CaptureBundle captureBundle, TakePictureRequest takePictureRequest, TakePictureCallback takePictureCallback, ListenableFuture<Void> listenableFuture) {
        return new ProcessingRequest(captureBundle, takePictureRequest.getOutputFileOptions(), takePictureRequest.getCropRect(), takePictureRequest.getRotationDegrees(), takePictureRequest.getJpegQuality(), takePictureRequest.getSensorToBufferTransform(), takePictureCallback, listenableFuture);
    }

    private CameraRequest createCameraRequest(CaptureBundle captureBundle, TakePictureRequest takePictureRequest, TakePictureCallback takePictureCallback) {
        ArrayList arrayList = new ArrayList();
        String strValueOf = String.valueOf(captureBundle.hashCode());
        for (CaptureStage captureStage : (List) Objects.requireNonNull(captureBundle.getCaptureStages())) {
            CaptureConfig.Builder builder = new CaptureConfig.Builder();
            builder.setTemplateType(this.mCaptureConfig.getTemplateType());
            builder.addImplementationOptions(this.mCaptureConfig.getImplementationOptions());
            builder.addAllCameraCaptureCallbacks(takePictureRequest.getSessionConfigCameraCaptureCallbacks());
            builder.addSurface(this.mPipelineIn.getSurface());
            if (this.mPipelineIn.getInputFormat() == 256) {
                if (EXIF_ROTATION_AVAILABILITY.isRotationOptionSupported()) {
                    builder.addImplementationOption(CaptureConfig.OPTION_ROTATION, Integer.valueOf(takePictureRequest.getRotationDegrees()));
                }
                builder.addImplementationOption(CaptureConfig.OPTION_JPEG_QUALITY, Integer.valueOf(getCameraRequestJpegQuality(takePictureRequest)));
            }
            builder.addImplementationOptions(captureStage.getCaptureConfig().getImplementationOptions());
            builder.addTag(strValueOf, Integer.valueOf(captureStage.getId()));
            builder.addCameraCaptureCallback(this.mPipelineIn.getCameraCaptureCallback());
            arrayList.add(builder.build());
        }
        return new CameraRequest(arrayList, takePictureCallback);
    }

    int getCameraRequestJpegQuality(TakePictureRequest takePictureRequest) {
        boolean z = takePictureRequest.getOnDiskCallback() != null;
        boolean zHasCropping = TransformUtils.hasCropping(takePictureRequest.getCropRect(), this.mPipelineIn.getSize());
        if (z && zHasCropping) {
            return takePictureRequest.getCaptureMode() == 0 ? 100 : 95;
        }
        return takePictureRequest.getJpegQuality();
    }

    CaptureNode getCaptureNode() {
        return this.mCaptureNode;
    }

    ProcessingNode getProcessingNode() {
        return this.mProcessingNode;
    }

    public boolean expectsMetadata() {
        return this.mCaptureNode.getSafeCloseImageReaderProxy().getImageReaderProxy() instanceof MetadataImageReader;
    }
}

