package androidx.camera.camera2.internal;

import android.hardware.camera2.CameraCaptureSession;
import android.hardware.camera2.CaptureFailure;
import android.hardware.camera2.CaptureRequest;
import android.hardware.camera2.CaptureResult;
import android.hardware.camera2.TotalCaptureResult;
import android.view.Surface;
import androidx.camera.camera2.internal.CaptureSession;
import androidx.camera.core.Logger;
import androidx.camera.core.impl.CameraCaptureCallback;
import androidx.camera.core.impl.CameraCaptureFailure;
import androidx.camera.core.impl.CaptureConfig;
import androidx.camera.core.impl.DeferrableSurface;
import androidx.camera.core.impl.RequestProcessor;
import androidx.camera.core.impl.SessionConfig;
import androidx.camera.core.impl.SessionProcessorSurface;
import androidx.camera.core.impl.TagBundle;
import androidx.core.util.Preconditions;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutionException;
public class Camera2RequestProcessor implements RequestProcessor {
    private static final String TAG = "Camera2RequestProcessor";
    private final CaptureSession mCaptureSession;
    private volatile boolean mIsClosed = false;
    private final List<SessionProcessorSurface> mProcessorSurfaces;
    private volatile SessionConfig mSessionConfig;

    public Camera2RequestProcessor(CaptureSession captureSession, List<SessionProcessorSurface> list) {
        Preconditions.checkArgument(captureSession.mState == CaptureSession.State.OPENED, "CaptureSession state must be OPENED. Current state:" + captureSession.mState);
        this.mCaptureSession = captureSession;
        this.mProcessorSurfaces = Collections.unmodifiableList(new ArrayList(list));
    }

    public void close() {
        this.mIsClosed = true;
    }

    public void updateSessionConfig(SessionConfig sessionConfig) {
        this.mSessionConfig = sessionConfig;
    }

    private boolean areRequestsValid(List<RequestProcessor.Request> list) {
        Iterator<RequestProcessor.Request> it = list.iterator();
        while (it.hasNext()) {
            if (!isRequestValid(it.next())) {
                return false;
            }
        }
        return true;
    }

    private boolean isRequestValid(RequestProcessor.Request request) {
        if (request.getTargetOutputConfigIds().isEmpty()) {
            Logger.e(TAG, "Unable to submit the RequestProcessor.Request: empty targetOutputConfigIds");
            return false;
        }
        for (Integer num : request.getTargetOutputConfigIds()) {
            if (findSurface(num.intValue()) == null) {
                Logger.e(TAG, "Unable to submit the RequestProcessor.Request: targetOutputConfigId(" + num + ") is not a valid id");
                return false;
            }
        }
        return true;
    }

    @Override // androidx.camera.core.impl.RequestProcessor
    public int submit(RequestProcessor.Request request, RequestProcessor.Callback callback) {
        return submit(Arrays.asList(request), callback);
    }

    @Override // androidx.camera.core.impl.RequestProcessor
    public int submit(List<RequestProcessor.Request> list, RequestProcessor.Callback callback) {
        if (this.mIsClosed || !areRequestsValid(list)) {
            return -1;
        }
        ArrayList arrayList = new ArrayList();
        boolean z = true;
        for (RequestProcessor.Request request : list) {
            CaptureConfig.Builder builder = new CaptureConfig.Builder();
            builder.setTemplateType(request.getTemplateId());
            builder.setImplementationOptions(request.getParameters());
            builder.addCameraCaptureCallback(CaptureCallbackContainer.create(new Camera2CallbackWrapper(request, callback, z)));
            Iterator<Integer> it = request.getTargetOutputConfigIds().iterator();
            while (it.hasNext()) {
                builder.addSurface(findSurface(it.next().intValue()));
            }
            arrayList.add(builder.build());
            z = false;
        }
        return this.mCaptureSession.issueBurstCaptureRequest(arrayList);
    }

    @Override // androidx.camera.core.impl.RequestProcessor
    public int setRepeating(RequestProcessor.Request request, RequestProcessor.Callback callback) {
        if (this.mIsClosed || !isRequestValid(request)) {
            return -1;
        }
        SessionConfig.Builder builder = new SessionConfig.Builder();
        builder.setTemplateType(request.getTemplateId());
        builder.setImplementationOptions(request.getParameters());
        builder.addCameraCaptureCallback(CaptureCallbackContainer.create(new Camera2CallbackWrapper(request, callback, true)));
        if (this.mSessionConfig != null) {
            Iterator<CameraCaptureCallback> it = this.mSessionConfig.getRepeatingCameraCaptureCallbacks().iterator();
            while (it.hasNext()) {
                builder.addCameraCaptureCallback(it.next());
            }
            TagBundle tagBundle = this.mSessionConfig.getRepeatingCaptureConfig().getTagBundle();
            for (String str : tagBundle.listKeys()) {
                builder.addTag(str, tagBundle.getTag(str));
            }
        }
        Iterator<Integer> it2 = request.getTargetOutputConfigIds().iterator();
        while (it2.hasNext()) {
            builder.addSurface(findSurface(it2.next().intValue()));
        }
        return this.mCaptureSession.issueRepeatingCaptureRequests(builder.build());
    }

    @Override // androidx.camera.core.impl.RequestProcessor
    public void abortCaptures() {
        if (this.mIsClosed) {
            return;
        }
        this.mCaptureSession.abortCaptures();
    }

    @Override // androidx.camera.core.impl.RequestProcessor
    public void stopRepeating() {
        if (this.mIsClosed) {
            return;
        }
        this.mCaptureSession.stopRepeating();
    }

    private class Camera2CallbackWrapper extends CameraCaptureSession.CaptureCallback {
        private final RequestProcessor.Callback mCallback;
        private final boolean mInvokeSequenceCallback;
        private final RequestProcessor.Request mRequest;

        Camera2CallbackWrapper(RequestProcessor.Request request, RequestProcessor.Callback callback, boolean z) {
            this.mCallback = callback;
            this.mRequest = request;
            this.mInvokeSequenceCallback = z;
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureStarted(CameraCaptureSession cameraCaptureSession, CaptureRequest captureRequest, long j, long j2) {
            this.mCallback.onCaptureStarted(this.mRequest, j2, j);
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureProgressed(CameraCaptureSession cameraCaptureSession, CaptureRequest captureRequest, CaptureResult captureResult) {
            this.mCallback.onCaptureProgressed(this.mRequest, new Camera2CameraCaptureResult(captureResult));
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureCompleted(CameraCaptureSession cameraCaptureSession, CaptureRequest captureRequest, TotalCaptureResult totalCaptureResult) {
            this.mCallback.onCaptureCompleted(this.mRequest, new Camera2CameraCaptureResult(totalCaptureResult));
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureFailed(CameraCaptureSession cameraCaptureSession, CaptureRequest captureRequest, CaptureFailure captureFailure) {
            this.mCallback.onCaptureFailed(this.mRequest, new Camera2CameraCaptureFailure(CameraCaptureFailure.Reason.ERROR, captureFailure));
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureSequenceCompleted(CameraCaptureSession cameraCaptureSession, int i, long j) {
            if (this.mInvokeSequenceCallback) {
                this.mCallback.onCaptureSequenceCompleted(i, j);
            }
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureSequenceAborted(CameraCaptureSession cameraCaptureSession, int i) {
            if (this.mInvokeSequenceCallback) {
                this.mCallback.onCaptureSequenceAborted(i);
            }
        }

        @Override // android.hardware.camera2.CameraCaptureSession.CaptureCallback
        public void onCaptureBufferLost(CameraCaptureSession cameraCaptureSession, CaptureRequest captureRequest, Surface surface, long j) {
            this.mCallback.onCaptureBufferLost(this.mRequest, j, Camera2RequestProcessor.this.findOutputConfigId(surface));
        }
    }

    int findOutputConfigId(Surface surface) {
        for (SessionProcessorSurface sessionProcessorSurface : this.mProcessorSurfaces) {
            try {
                if (sessionProcessorSurface.getSurface().get() == surface) {
                    return sessionProcessorSurface.getOutputConfigId();
                }
                continue;
            } catch (InterruptedException | ExecutionException unused) {
            }
        }
        return -1;
    }

    private DeferrableSurface findSurface(int i) {
        for (SessionProcessorSurface sessionProcessorSurface : this.mProcessorSurfaces) {
            if (sessionProcessorSurface.getOutputConfigId() == i) {
                return sessionProcessorSurface;
            }
        }
        return null;
    }
}

