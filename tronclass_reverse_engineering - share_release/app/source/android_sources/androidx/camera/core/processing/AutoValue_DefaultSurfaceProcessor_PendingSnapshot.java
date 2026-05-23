package androidx.camera.core.processing;

import androidx.camera.core.processing.DefaultSurfaceProcessor;
import androidx.concurrent.futures.CallbackToFutureAdapter;
final class AutoValue_DefaultSurfaceProcessor_PendingSnapshot extends DefaultSurfaceProcessor.PendingSnapshot {
    private final CallbackToFutureAdapter.Completer<Void> completer;
    private final int jpegQuality;
    private final int rotationDegrees;

    AutoValue_DefaultSurfaceProcessor_PendingSnapshot(int i, int i2, CallbackToFutureAdapter.Completer<Void> completer) {
        this.jpegQuality = i;
        this.rotationDegrees = i2;
        if (completer == null) {
            throw new NullPointerException("Null completer");
        }
        this.completer = completer;
    }

    @Override // androidx.camera.core.processing.DefaultSurfaceProcessor.PendingSnapshot
    int getJpegQuality() {
        return this.jpegQuality;
    }

    @Override // androidx.camera.core.processing.DefaultSurfaceProcessor.PendingSnapshot
    int getRotationDegrees() {
        return this.rotationDegrees;
    }

    @Override // androidx.camera.core.processing.DefaultSurfaceProcessor.PendingSnapshot
    CallbackToFutureAdapter.Completer<Void> getCompleter() {
        return this.completer;
    }

    public String toString() {
        return "PendingSnapshot{jpegQuality=" + this.jpegQuality + ", rotationDegrees=" + this.rotationDegrees + ", completer=" + this.completer + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof DefaultSurfaceProcessor.PendingSnapshot)) {
            return false;
        }
        DefaultSurfaceProcessor.PendingSnapshot pendingSnapshot = (DefaultSurfaceProcessor.PendingSnapshot) obj;
        return this.jpegQuality == pendingSnapshot.getJpegQuality() && this.rotationDegrees == pendingSnapshot.getRotationDegrees() && this.completer.equals(pendingSnapshot.getCompleter());
    }

    public int hashCode() {
        return ((((this.jpegQuality ^ 1000003) * 1000003) ^ this.rotationDegrees) * 1000003) ^ this.completer.hashCode();
    }
}

