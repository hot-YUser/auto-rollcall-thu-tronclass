package androidx.camera.core.imagecapture;

import androidx.camera.core.imagecapture.CaptureNode;
import androidx.camera.core.imagecapture.ProcessingNode;
import androidx.camera.core.processing.Node;
public interface BundlingNode extends Node<CaptureNode.Out, ProcessingNode.In> {
}

