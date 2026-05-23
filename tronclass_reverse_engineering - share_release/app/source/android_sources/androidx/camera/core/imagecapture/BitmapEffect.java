package androidx.camera.core.imagecapture;

import android.graphics.Bitmap;
import androidx.camera.core.ImageCaptureException;
import androidx.camera.core.ImageProxy;
import androidx.camera.core.impl.utils.Exif;
import androidx.camera.core.internal.utils.ImageUtil;
import androidx.camera.core.processing.ImageProcessorRequest;
import androidx.camera.core.processing.InternalImageProcessor;
import androidx.camera.core.processing.Operation;
import androidx.camera.core.processing.Packet;
import java.util.Objects;
public class BitmapEffect implements Operation<Packet<Bitmap>, Packet<Bitmap>> {
    private final InternalImageProcessor mProcessor;

    BitmapEffect(InternalImageProcessor internalImageProcessor) {
        this.mProcessor = internalImageProcessor;
    }

    @Override // androidx.camera.core.processing.Operation
    public Packet<Bitmap> apply(Packet<Bitmap> packet) throws ImageCaptureException {
        ImageProxy outputImage = this.mProcessor.safeProcess(new ImageProcessorRequest(new RgbaImageProxy(packet), 1)).getOutputImage();
        return Packet.of(ImageUtil.createBitmapFromPlane(((ImageProxy) Objects.requireNonNull(outputImage)).getPlanes(), outputImage.getWidth(), outputImage.getHeight()), (Exif) Objects.requireNonNull(packet.getExif()), packet.getCropRect(), packet.getRotationDegrees(), packet.getSensorToBufferTransform(), packet.getCameraCaptureResult());
    }
}

