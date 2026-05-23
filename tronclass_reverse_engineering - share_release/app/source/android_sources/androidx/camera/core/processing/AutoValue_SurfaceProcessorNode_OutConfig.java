package androidx.camera.core.processing;

import android.graphics.Rect;
import android.util.Size;
import androidx.camera.core.processing.SurfaceProcessorNode;
import java.util.UUID;
final class AutoValue_SurfaceProcessorNode_OutConfig extends SurfaceProcessorNode.OutConfig {
    private final Rect cropRect;
    private final int format;
    private final boolean mirroring;
    private final int rotationDegrees;
    private final Size size;
    private final int targets;
    private final UUID uuid;

    AutoValue_SurfaceProcessorNode_OutConfig(UUID uuid, int i, int i2, Rect rect, Size size, int i3, boolean z) {
        if (uuid == null) {
            throw new NullPointerException("Null uuid");
        }
        this.uuid = uuid;
        this.targets = i;
        this.format = i2;
        if (rect == null) {
            throw new NullPointerException("Null cropRect");
        }
        this.cropRect = rect;
        if (size == null) {
            throw new NullPointerException("Null size");
        }
        this.size = size;
        this.rotationDegrees = i3;
        this.mirroring = z;
    }

    @Override // androidx.camera.core.processing.SurfaceProcessorNode.OutConfig
    UUID getUuid() {
        return this.uuid;
    }

    @Override // androidx.camera.core.processing.SurfaceProcessorNode.OutConfig
    public int getTargets() {
        return this.targets;
    }

    @Override // androidx.camera.core.processing.SurfaceProcessorNode.OutConfig
    public int getFormat() {
        return this.format;
    }

    @Override // androidx.camera.core.processing.SurfaceProcessorNode.OutConfig
    public Rect getCropRect() {
        return this.cropRect;
    }

    @Override // androidx.camera.core.processing.SurfaceProcessorNode.OutConfig
    public Size getSize() {
        return this.size;
    }

    @Override // androidx.camera.core.processing.SurfaceProcessorNode.OutConfig
    public int getRotationDegrees() {
        return this.rotationDegrees;
    }

    @Override // androidx.camera.core.processing.SurfaceProcessorNode.OutConfig
    public boolean getMirroring() {
        return this.mirroring;
    }

    public String toString() {
        return "OutConfig{uuid=" + this.uuid + ", targets=" + this.targets + ", format=" + this.format + ", cropRect=" + this.cropRect + ", size=" + this.size + ", rotationDegrees=" + this.rotationDegrees + ", mirroring=" + this.mirroring + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof SurfaceProcessorNode.OutConfig)) {
            return false;
        }
        SurfaceProcessorNode.OutConfig outConfig = (SurfaceProcessorNode.OutConfig) obj;
        return this.uuid.equals(outConfig.getUuid()) && this.targets == outConfig.getTargets() && this.format == outConfig.getFormat() && this.cropRect.equals(outConfig.getCropRect()) && this.size.equals(outConfig.getSize()) && this.rotationDegrees == outConfig.getRotationDegrees() && this.mirroring == outConfig.getMirroring();
    }

    public int hashCode() {
        return ((((((((((((this.uuid.hashCode() ^ 1000003) * 1000003) ^ this.targets) * 1000003) ^ this.format) * 1000003) ^ this.cropRect.hashCode()) * 1000003) ^ this.size.hashCode()) * 1000003) ^ this.rotationDegrees) * 1000003) ^ (this.mirroring ? 1231 : 1237);
    }
}

