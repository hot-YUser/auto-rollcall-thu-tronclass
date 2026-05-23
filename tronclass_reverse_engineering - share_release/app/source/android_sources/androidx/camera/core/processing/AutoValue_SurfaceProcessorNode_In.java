package androidx.camera.core.processing;

import androidx.camera.core.processing.SurfaceProcessorNode;
import java.util.List;
final class AutoValue_SurfaceProcessorNode_In extends SurfaceProcessorNode.In {
    private final List<SurfaceProcessorNode.OutConfig> outConfigs;
    private final SurfaceEdge surfaceEdge;

    AutoValue_SurfaceProcessorNode_In(SurfaceEdge surfaceEdge, List<SurfaceProcessorNode.OutConfig> list) {
        if (surfaceEdge == null) {
            throw new NullPointerException("Null surfaceEdge");
        }
        this.surfaceEdge = surfaceEdge;
        if (list == null) {
            throw new NullPointerException("Null outConfigs");
        }
        this.outConfigs = list;
    }

    @Override // androidx.camera.core.processing.SurfaceProcessorNode.In
    public SurfaceEdge getSurfaceEdge() {
        return this.surfaceEdge;
    }

    @Override // androidx.camera.core.processing.SurfaceProcessorNode.In
    public List<SurfaceProcessorNode.OutConfig> getOutConfigs() {
        return this.outConfigs;
    }

    public String toString() {
        return "In{surfaceEdge=" + this.surfaceEdge + ", outConfigs=" + this.outConfigs + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof SurfaceProcessorNode.In)) {
            return false;
        }
        SurfaceProcessorNode.In in = (SurfaceProcessorNode.In) obj;
        return this.surfaceEdge.equals(in.getSurfaceEdge()) && this.outConfigs.equals(in.getOutConfigs());
    }

    public int hashCode() {
        return ((this.surfaceEdge.hashCode() ^ 1000003) * 1000003) ^ this.outConfigs.hashCode();
    }
}

