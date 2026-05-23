package androidx.camera.core.imagecapture;

import androidx.camera.core.ImageProxy;
import androidx.camera.core.imagecapture.CaptureNode;
import androidx.camera.core.imagecapture.ProcessingNode;
import androidx.camera.core.impl.utils.Threads;
import androidx.camera.core.impl.utils.executor.CameraXExecutors;
import androidx.camera.core.impl.utils.futures.FutureCallback;
import androidx.camera.core.impl.utils.futures.Futures;
import androidx.core.util.Consumer;
import androidx.core.util.Preconditions;
import java.util.Objects;
class SingleBundlingNode implements BundlingNode {
    private ProcessingNode.In mOutputEdge;
    ProcessingRequest mPendingRequest;

    @Override // androidx.camera.core.processing.Node
    public void release() {
    }

    SingleBundlingNode() {
    }

    @Override // androidx.camera.core.processing.Node
    public ProcessingNode.In transform(CaptureNode.Out out) {
        out.getImageEdge().setListener(new Consumer() { // from class: androidx.camera.core.imagecapture.SingleBundlingNode$$ExternalSyntheticLambda0
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                this.f$0.matchImageWithRequest((ImageProxy) obj);
            }
        });
        out.getRequestEdge().setListener(new Consumer() { // from class: androidx.camera.core.imagecapture.SingleBundlingNode$$ExternalSyntheticLambda1
            @Override // androidx.core.util.Consumer
            public final void accept(Object obj) {
                this.f$0.trackIncomingRequest((ProcessingRequest) obj);
            }
        });
        ProcessingNode.In inOf = ProcessingNode.In.of(out.getInputFormat(), out.getOutputFormat());
        this.mOutputEdge = inOf;
        return inOf;
    }
    public void trackIncomingRequest(final ProcessingRequest processingRequest) {
        Threads.checkMainThread();
        Preconditions.checkState(processingRequest.getStageIds().size() == 1, "Cannot handle multi-image capture.");
        Preconditions.checkState(this.mPendingRequest == null, "Already has an existing request.");
        this.mPendingRequest = processingRequest;
        Futures.addCallback(processingRequest.getCaptureFuture(), new FutureCallback<Void>() { // from class: androidx.camera.core.imagecapture.SingleBundlingNode.1
            @Override // androidx.camera.core.impl.utils.futures.FutureCallback
            public void onSuccess(Void r1) {
            }

            @Override // androidx.camera.core.impl.utils.futures.FutureCallback
            public void onFailure(Throwable th) {
                Threads.checkMainThread();
                if (processingRequest == SingleBundlingNode.this.mPendingRequest) {
                    SingleBundlingNode.this.mPendingRequest = null;
                }
            }
        }, CameraXExecutors.directExecutor());
    }
    public void matchImageWithRequest(ImageProxy imageProxy) {
        Threads.checkMainThread();
        Preconditions.checkState(this.mPendingRequest != null);
        Preconditions.checkState(((Integer) Objects.requireNonNull(imageProxy.getImageInfo().getTagBundle().getTag(this.mPendingRequest.getTagBundleKey()))).intValue() == this.mPendingRequest.getStageIds().get(0).intValue());
        this.mOutputEdge.getEdge().accept(ProcessingNode.InputPacket.of(this.mPendingRequest, imageProxy));
        this.mPendingRequest = null;
    }
}

