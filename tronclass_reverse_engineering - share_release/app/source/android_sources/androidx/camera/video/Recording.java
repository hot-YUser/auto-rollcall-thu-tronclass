package androidx.camera.video;

import androidx.camera.core.impl.utils.CloseGuardHelper;
import androidx.core.util.Preconditions;
import java.util.concurrent.atomic.AtomicBoolean;
public final class Recording implements AutoCloseable {
    private final CloseGuardHelper mCloseGuard;
    private final AtomicBoolean mIsClosed;
    private final boolean mIsPersistent;
    private final OutputOptions mOutputOptions;
    private final Recorder mRecorder;
    private final long mRecordingId;

    Recording(Recorder recorder, long j, OutputOptions outputOptions, boolean z, boolean z2) {
        AtomicBoolean atomicBoolean = new AtomicBoolean(false);
        this.mIsClosed = atomicBoolean;
        CloseGuardHelper closeGuardHelperCreate = CloseGuardHelper.create();
        this.mCloseGuard = closeGuardHelperCreate;
        this.mRecorder = recorder;
        this.mRecordingId = j;
        this.mOutputOptions = outputOptions;
        this.mIsPersistent = z;
        if (z2) {
            atomicBoolean.set(true);
        } else {
            closeGuardHelperCreate.open("stop");
        }
    }

    static Recording from(PendingRecording pendingRecording, long j) {
        Preconditions.checkNotNull(pendingRecording, "The given PendingRecording cannot be null.");
        return new Recording(pendingRecording.getRecorder(), j, pendingRecording.getOutputOptions(), pendingRecording.isPersistent(), false);
    }

    static Recording createFinalizedFrom(PendingRecording pendingRecording, long j) {
        Preconditions.checkNotNull(pendingRecording, "The given PendingRecording cannot be null.");
        return new Recording(pendingRecording.getRecorder(), j, pendingRecording.getOutputOptions(), pendingRecording.isPersistent(), true);
    }

    OutputOptions getOutputOptions() {
        return this.mOutputOptions;
    }

    public boolean isPersistent() {
        return this.mIsPersistent;
    }

    public void pause() {
        if (this.mIsClosed.get()) {
            throw new IllegalStateException("The recording has been stopped.");
        }
        this.mRecorder.pause(this);
    }

    public void resume() {
        if (this.mIsClosed.get()) {
            throw new IllegalStateException("The recording has been stopped.");
        }
        this.mRecorder.resume(this);
    }

    public void stop() {
        close();
    }

    public void mute(boolean z) {
        if (this.mIsClosed.get()) {
            throw new IllegalStateException("The recording has been stopped.");
        }
        this.mRecorder.mute(this, z);
    }

    @Override // java.lang.AutoCloseable
    public void close() {
        stopWithError(0, null);
    }

    protected void finalize() throws Throwable {
        try {
            this.mCloseGuard.warnIfOpen();
            stopWithError(10, new RuntimeException("Recording stopped due to being garbage collected."));
        } finally {
            super.finalize();
        }
    }

    long getRecordingId() {
        return this.mRecordingId;
    }

    public boolean isClosed() {
        return this.mIsClosed.get();
    }

    private void stopWithError(int i, Throwable th) {
        this.mCloseGuard.close();
        if (this.mIsClosed.getAndSet(true)) {
            return;
        }
        this.mRecorder.stop(this, i, th);
    }
}

