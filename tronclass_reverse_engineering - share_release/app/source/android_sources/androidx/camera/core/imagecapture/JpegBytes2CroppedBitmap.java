package androidx.camera.core.imagecapture;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.BitmapRegionDecoder;
import android.graphics.Rect;
import androidx.camera.core.ImageCaptureException;
import androidx.camera.core.impl.utils.Exif;
import androidx.camera.core.impl.utils.TransformUtils;
import androidx.camera.core.processing.Operation;
import androidx.camera.core.processing.Packet;
import java.io.IOException;
import java.util.Objects;
final class JpegBytes2CroppedBitmap implements Operation<Packet<byte[]>, Packet<Bitmap>> {
    JpegBytes2CroppedBitmap() {
    }

    @Override // androidx.camera.core.processing.Operation
    public Packet<Bitmap> apply(Packet<byte[]> packet) throws ImageCaptureException {
        Rect cropRect = packet.getCropRect();
        Bitmap bitmapCreateCroppedBitmap = createCroppedBitmap(packet.getData(), cropRect);
        return Packet.of(bitmapCreateCroppedBitmap, (Exif) Objects.requireNonNull(packet.getExif()), new Rect(0, 0, bitmapCreateCroppedBitmap.getWidth(), bitmapCreateCroppedBitmap.getHeight()), packet.getRotationDegrees(), TransformUtils.updateSensorToBufferTransform(packet.getSensorToBufferTransform(), cropRect), packet.getCameraCaptureResult());
    }

    private Bitmap createCroppedBitmap(byte[] bArr, Rect rect) throws ImageCaptureException {
        try {
            return BitmapRegionDecoder.newInstance(bArr, 0, bArr.length, false).decodeRegion(rect, new BitmapFactory.Options());
        } catch (IOException e) {
            throw new ImageCaptureException(1, "Failed to decode JPEG.", e);
        }
    }
}

