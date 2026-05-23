package androidx.camera.camera2.interop;

import android.hardware.camera2.TotalCaptureResult;
import androidx.camera.camera2.impl.Camera2ImplConfig;
import androidx.camera.camera2.internal.Camera2CameraControlImpl;
import androidx.camera.camera2.interop.CaptureRequestOptions;
import androidx.camera.core.CameraControl;
import androidx.camera.core.impl.CameraControlInternal;
import androidx.camera.core.impl.Config;
import androidx.camera.core.impl.TagBundle;
import androidx.camera.core.impl.utils.futures.Futures;
import androidx.concurrent.futures.CallbackToFutureAdapter;
import androidx.core.util.Preconditions;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.concurrent.Executor;
public final class Camera2CameraControl {
    public static final String TAG_KEY = "Camera2CameraControl";
    private final Camera2CameraControlImpl mCamera2CameraControlImpl;
    CallbackToFutureAdapter.Completer<Void> mCompleter;
    final Executor mExecutor;
    private boolean mIsActive = false;
    private boolean mPendingUpdate = false;
    final Object mLock = new Object();
    private Camera2ImplConfig.Builder mBuilder = new Camera2ImplConfig.Builder();
    private final Camera2CameraControlImpl.CaptureResultListener mCaptureResultListener = new Camera2CameraControlImpl.CaptureResultListener() { // from class: androidx.camera.camera2.interop.Camera2CameraControl$$ExternalSyntheticLambda5
        @Override // androidx.camera.camera2.internal.Camera2CameraControlImpl.CaptureResultListener
        public final boolean onCaptureResult(TotalCaptureResult totalCaptureResult) {
            return this.f$0.m105xe2aa3654(totalCaptureResult);
        }
    };

    /* high-level source view WARN: Removed duplicated region for block: B:11:0x0032  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    /* synthetic */ boolean m105xe2aa3654(TotalCaptureResult totalCaptureResult) {
        CallbackToFutureAdapter.Completer<Void> completer;
        Integer num;
        if (this.mCompleter != null) {
            Object tag = totalCaptureResult.getRequest().getTag();
            if ((tag instanceof TagBundle) && (num = (Integer) ((TagBundle) tag).getTag(TAG_KEY)) != null && num.equals(Integer.valueOf(this.mCompleter.hashCode()))) {
                completer = this.mCompleter;
                this.mCompleter = null;
            } else {
                completer = null;
            }
        }
        if (completer == null) {
            return false;
        }
        completer.set(null);
        return false;
    }

    public Camera2CameraControl(Camera2CameraControlImpl camera2CameraControlImpl, Executor executor) {
        this.mCamera2CameraControlImpl = camera2CameraControlImpl;
        this.mExecutor = executor;
    }

    public Camera2CameraControlImpl.CaptureResultListener getCaptureRequestListener() {
        return this.mCaptureResultListener;
    }

    public static Camera2CameraControl from(CameraControl cameraControl) {
        CameraControlInternal implementation = ((CameraControlInternal) cameraControl).getImplementation();
        Preconditions.checkArgument(implementation instanceof Camera2CameraControlImpl, "CameraControl doesn't contain Camera2 implementation.");
        return ((Camera2CameraControlImpl) implementation).getCamera2CameraControl();
    }

    public ListenableFuture<Void> setCaptureRequestOptions(CaptureRequestOptions captureRequestOptions) {
        clearCaptureRequestOptionsInternal();
        addCaptureRequestOptionsInternal(captureRequestOptions);
        return Futures.nonCancellationPropagating(CallbackToFutureAdapter.getFuture(new CallbackToFutureAdapter.Resolver() { // from class: androidx.camera.camera2.interop.Camera2CameraControl$$ExternalSyntheticLambda4
            @Override // androidx.concurrent.futures.CallbackToFutureAdapter.Resolver
            public final Object attachCompleter(CallbackToFutureAdapter.Completer completer) {
                return this.f$0.m108x2c33d345(completer);
            }
        }));
    }
    /* synthetic */ Object m108x2c33d345(final CallbackToFutureAdapter.Completer completer) throws Exception {
        this.mExecutor.execute(new Runnable() { // from class: androidx.camera.camera2.interop.Camera2CameraControl$$ExternalSyntheticLambda3
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m107x121854a6(completer);
            }
        });
        return "setCaptureRequestOptions";
    }

    public ListenableFuture<Void> addCaptureRequestOptions(CaptureRequestOptions captureRequestOptions) {
        addCaptureRequestOptionsInternal(captureRequestOptions);
        return Futures.nonCancellationPropagating(CallbackToFutureAdapter.getFuture(new CallbackToFutureAdapter.Resolver() { // from class: androidx.camera.camera2.interop.Camera2CameraControl$$ExternalSyntheticLambda0
            @Override // androidx.concurrent.futures.CallbackToFutureAdapter.Resolver
            public final Object attachCompleter(CallbackToFutureAdapter.Completer completer) {
                return this.f$0.m102xb9a1ae42(completer);
            }
        }));
    }
    /* synthetic */ Object m102xb9a1ae42(final CallbackToFutureAdapter.Completer completer) throws Exception {
        this.mExecutor.execute(new Runnable() { // from class: androidx.camera.camera2.interop.Camera2CameraControl$$ExternalSyntheticLambda1
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m101x9f862fa3(completer);
            }
        });
        return "addCaptureRequestOptions";
    }

    public CaptureRequestOptions getCaptureRequestOptions() {
        CaptureRequestOptions captureRequestOptionsBuild;
        synchronized (this.mLock) {
            captureRequestOptionsBuild = CaptureRequestOptions.Builder.from(this.mBuilder.build()).build();
        }
        return captureRequestOptionsBuild;
    }

    public ListenableFuture<Void> clearCaptureRequestOptions() {
        clearCaptureRequestOptionsInternal();
        return Futures.nonCancellationPropagating(CallbackToFutureAdapter.getFuture(new CallbackToFutureAdapter.Resolver() { // from class: androidx.camera.camera2.interop.Camera2CameraControl$$ExternalSyntheticLambda6
            @Override // androidx.concurrent.futures.CallbackToFutureAdapter.Resolver
            public final Object attachCompleter(CallbackToFutureAdapter.Completer completer) {
                return this.f$0.m104x7982aa6c(completer);
            }
        }));
    }
    /* synthetic */ Object m104x7982aa6c(final CallbackToFutureAdapter.Completer completer) throws Exception {
        this.mExecutor.execute(new Runnable() { // from class: androidx.camera.camera2.interop.Camera2CameraControl$$ExternalSyntheticLambda7
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m103x5f672bcd(completer);
            }
        });
        return "clearCaptureRequestOptions";
    }

    public Camera2ImplConfig getCamera2ImplConfig() {
        Camera2ImplConfig camera2ImplConfigBuild;
        synchronized (this.mLock) {
            if (this.mCompleter != null) {
                this.mBuilder.getMutableConfig().insertOption(Camera2ImplConfig.CAPTURE_REQUEST_TAG_OPTION, Integer.valueOf(this.mCompleter.hashCode()));
            }
            camera2ImplConfigBuild = this.mBuilder.build();
        }
        return camera2ImplConfigBuild;
    }

    private void addCaptureRequestOptionsInternal(CaptureRequestOptions captureRequestOptions) {
        synchronized (this.mLock) {
            for (Config.Option<?> option : captureRequestOptions.listOptions()) {
                this.mBuilder.getMutableConfig().insertOption(option, captureRequestOptions.retrieveOption(option));
            }
        }
    }

    private void clearCaptureRequestOptionsInternal() {
        synchronized (this.mLock) {
            this.mBuilder = new Camera2ImplConfig.Builder();
        }
    }
    public void m107x121854a6(CallbackToFutureAdapter.Completer<Void> completer) {
        this.mPendingUpdate = true;
        CallbackToFutureAdapter.Completer<Void> completer2 = this.mCompleter;
        if (completer2 == null) {
            completer2 = null;
        }
        this.mCompleter = completer;
        if (this.mIsActive) {
            updateSession();
        }
        if (completer2 != null) {
            completer2.setException(new CameraControl.OperationCanceledException("Camera2CameraControl was updated with new options."));
        }
    }

    private void updateSession() {
        this.mCamera2CameraControlImpl.updateSessionConfig();
        this.mPendingUpdate = false;
    }

    public void setActive(final boolean z) {
        this.mExecutor.execute(new Runnable() { // from class: androidx.camera.camera2.interop.Camera2CameraControl$$ExternalSyntheticLambda2
            @Override // java.lang.Runnable
            public final void run() {
                this.f$0.m106xf64eb985(z);
            }
        });
    }
    public void m106xf64eb985(boolean z) {
        if (this.mIsActive == z) {
            return;
        }
        this.mIsActive = z;
        if (z) {
            if (this.mPendingUpdate) {
                updateSession();
            }
        } else {
            CallbackToFutureAdapter.Completer<Void> completer = this.mCompleter;
            if (completer != null) {
                completer.setException(new CameraControl.OperationCanceledException("The camera control has became inactive."));
                this.mCompleter = null;
            }
        }
    }
}

