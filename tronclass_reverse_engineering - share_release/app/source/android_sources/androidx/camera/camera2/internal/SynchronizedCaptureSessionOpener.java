package androidx.camera.camera2.internal;

import android.hardware.camera2.CameraDevice;
import android.os.Handler;
import android.view.Surface;
import androidx.camera.camera2.internal.SynchronizedCaptureSession;
import androidx.camera.camera2.internal.compat.params.OutputConfigurationCompat;
import androidx.camera.camera2.internal.compat.params.SessionConfigurationCompat;
import androidx.camera.camera2.internal.compat.workaround.ForceCloseCaptureSession;
import androidx.camera.camera2.internal.compat.workaround.ForceCloseDeferrableSurface;
import androidx.camera.camera2.internal.compat.workaround.WaitForRepeatingRequestStart;
import androidx.camera.core.impl.DeferrableSurface;
import androidx.camera.core.impl.Quirks;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.List;
import java.util.concurrent.Executor;
import java.util.concurrent.ScheduledExecutorService;
final class SynchronizedCaptureSessionOpener {
    private final OpenerImpl mImpl;

    interface OpenerImpl {
        SessionConfigurationCompat createSessionConfigurationCompat(int i, List<OutputConfigurationCompat> list, SynchronizedCaptureSession.StateCallback stateCallback);

        Executor getExecutor();

        ListenableFuture<Void> openCaptureSession(CameraDevice cameraDevice, SessionConfigurationCompat sessionConfigurationCompat, List<DeferrableSurface> list);

        ListenableFuture<List<Surface>> startWithDeferrableSurface(List<DeferrableSurface> list, long j);

        boolean stop();
    }

    SynchronizedCaptureSessionOpener(OpenerImpl openerImpl) {
        this.mImpl = openerImpl;
    }

    ListenableFuture<Void> openCaptureSession(CameraDevice cameraDevice, SessionConfigurationCompat sessionConfigurationCompat, List<DeferrableSurface> list) {
        return this.mImpl.openCaptureSession(cameraDevice, sessionConfigurationCompat, list);
    }

    SessionConfigurationCompat createSessionConfigurationCompat(int i, List<OutputConfigurationCompat> list, SynchronizedCaptureSession.StateCallback stateCallback) {
        return this.mImpl.createSessionConfigurationCompat(i, list, stateCallback);
    }

    ListenableFuture<List<Surface>> startWithDeferrableSurface(List<DeferrableSurface> list, long j) {
        return this.mImpl.startWithDeferrableSurface(list, j);
    }

    boolean stop() {
        return this.mImpl.stop();
    }

    public Executor getExecutor() {
        return this.mImpl.getExecutor();
    }

    static class Builder {
        private final Quirks mCameraQuirks;
        private final CaptureSessionRepository mCaptureSessionRepository;
        private final Handler mCompatHandler;
        private final Quirks mDeviceQuirks;
        private final Executor mExecutor;
        private final boolean mQuirkExist;
        private final ScheduledExecutorService mScheduledExecutorService;

        Builder(Executor executor, ScheduledExecutorService scheduledExecutorService, Handler handler, CaptureSessionRepository captureSessionRepository, Quirks quirks, Quirks quirks2) {
            this.mExecutor = executor;
            this.mScheduledExecutorService = scheduledExecutorService;
            this.mCompatHandler = handler;
            this.mCaptureSessionRepository = captureSessionRepository;
            this.mCameraQuirks = quirks;
            this.mDeviceQuirks = quirks2;
            this.mQuirkExist = new ForceCloseDeferrableSurface(quirks, quirks2).shouldForceClose() || new WaitForRepeatingRequestStart(quirks).shouldWaitRepeatingSubmit() || new ForceCloseCaptureSession(quirks2).shouldForceClose();
        }

        SynchronizedCaptureSessionOpener build() {
            return new SynchronizedCaptureSessionOpener(this.mQuirkExist ? new SynchronizedCaptureSessionImpl(this.mCameraQuirks, this.mDeviceQuirks, this.mCaptureSessionRepository, this.mExecutor, this.mScheduledExecutorService, this.mCompatHandler) : new SynchronizedCaptureSessionBaseImpl(this.mCaptureSessionRepository, this.mExecutor, this.mScheduledExecutorService, this.mCompatHandler));
        }
    }
}

