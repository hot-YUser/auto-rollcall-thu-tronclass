package androidx.camera.core.imagecapture;

import androidx.camera.core.imagecapture.ProcessingNode;
import androidx.camera.core.processing.Edge;
final class AutoValue_ProcessingNode_In extends ProcessingNode.In {
    private final Edge<ProcessingNode.InputPacket> edge;
    private final int inputFormat;
    private final int outputFormat;

    AutoValue_ProcessingNode_In(Edge<ProcessingNode.InputPacket> edge, int i, int i2) {
        if (edge == null) {
            throw new NullPointerException("Null edge");
        }
        this.edge = edge;
        this.inputFormat = i;
        this.outputFormat = i2;
    }

    @Override // androidx.camera.core.imagecapture.ProcessingNode.In
    Edge<ProcessingNode.InputPacket> getEdge() {
        return this.edge;
    }

    @Override // androidx.camera.core.imagecapture.ProcessingNode.In
    int getInputFormat() {
        return this.inputFormat;
    }

    @Override // androidx.camera.core.imagecapture.ProcessingNode.In
    int getOutputFormat() {
        return this.outputFormat;
    }

    public String toString() {
        return "In{edge=" + this.edge + ", inputFormat=" + this.inputFormat + ", outputFormat=" + this.outputFormat + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof ProcessingNode.In)) {
            return false;
        }
        ProcessingNode.In in = (ProcessingNode.In) obj;
        return this.edge.equals(in.getEdge()) && this.inputFormat == in.getInputFormat() && this.outputFormat == in.getOutputFormat();
    }

    public int hashCode() {
        return ((((this.edge.hashCode() ^ 1000003) * 1000003) ^ this.inputFormat) * 1000003) ^ this.outputFormat;
    }
}

