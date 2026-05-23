package androidx.camera.core.imagecapture;

import androidx.camera.core.ImageCaptureException;
import androidx.camera.core.ImageProxy;
import androidx.camera.core.ImmutableImageInfo;
import androidx.camera.core.SettableImageProxy;
import androidx.camera.core.processing.Operation;
import androidx.camera.core.processing.Packet;
public class JpegImage2Result implements Operation<Packet<ImageProxy>, ImageProxy> {
    @Override // androidx.camera.core.processing.Operation
    public ImageProxy apply(Packet<ImageProxy> packet) throws ImageCaptureException {
        ImageProxy data = packet.getData();
        SettableImageProxy settableImageProxy = new SettableImageProxy(data, packet.getSize(), ImmutableImageInfo.create(data.getImageInfo().getTagBundle(), data.getImageInfo().getTimestamp(), packet.getRotationDegrees(), packet.getSensorToBufferTransform()));
        settableImageProxy.setCropRect(packet.getCropRect());
        return settableImageProxy;
    }
}

