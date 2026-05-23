package androidx.camera.core.processing;

import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.Size;
import androidx.camera.core.impl.CameraCaptureResult;
import androidx.camera.core.impl.utils.Exif;
final class AutoValue_Packet<T> extends Packet<T> {
    private final CameraCaptureResult cameraCaptureResult;
    private final Rect cropRect;
    private final T data;
    private final Exif exif;
    private final int format;
    private final int rotationDegrees;
    private final Matrix sensorToBufferTransform;
    private final Size size;

    AutoValue_Packet(T t, Exif exif, int i, Size size, Rect rect, int i2, Matrix matrix, CameraCaptureResult cameraCaptureResult) {
        if (t == null) {
            throw new NullPointerException("Null data");
        }
        this.data = t;
        this.exif = exif;
        this.format = i;
        if (size == null) {
            throw new NullPointerException("Null size");
        }
        this.size = size;
        if (rect == null) {
            throw new NullPointerException("Null cropRect");
        }
        this.cropRect = rect;
        this.rotationDegrees = i2;
        if (matrix == null) {
            throw new NullPointerException("Null sensorToBufferTransform");
        }
        this.sensorToBufferTransform = matrix;
        if (cameraCaptureResult == null) {
            throw new NullPointerException("Null cameraCaptureResult");
        }
        this.cameraCaptureResult = cameraCaptureResult;
    }

    @Override // androidx.camera.core.processing.Packet
    public T getData() {
        return this.data;
    }

    @Override // androidx.camera.core.processing.Packet
    public Exif getExif() {
        return this.exif;
    }

    @Override // androidx.camera.core.processing.Packet
    public int getFormat() {
        return this.format;
    }

    @Override // androidx.camera.core.processing.Packet
    public Size getSize() {
        return this.size;
    }

    @Override // androidx.camera.core.processing.Packet
    public Rect getCropRect() {
        return this.cropRect;
    }

    @Override // androidx.camera.core.processing.Packet
    public int getRotationDegrees() {
        return this.rotationDegrees;
    }

    @Override // androidx.camera.core.processing.Packet
    public Matrix getSensorToBufferTransform() {
        return this.sensorToBufferTransform;
    }

    @Override // androidx.camera.core.processing.Packet
    public CameraCaptureResult getCameraCaptureResult() {
        return this.cameraCaptureResult;
    }

    public String toString() {
        return "Packet{data=" + this.data + ", exif=" + this.exif + ", format=" + this.format + ", size=" + this.size + ", cropRect=" + this.cropRect + ", rotationDegrees=" + this.rotationDegrees + ", sensorToBufferTransform=" + this.sensorToBufferTransform + ", cameraCaptureResult=" + this.cameraCaptureResult + "}";
    }

    public boolean equals(Object obj) {
        Exif exif;
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof Packet)) {
            return false;
        }
        Packet packet = (Packet) obj;
        return this.data.equals(packet.getData()) && ((exif = this.exif) != null ? exif.equals(packet.getExif()) : packet.getExif() == null) && this.format == packet.getFormat() && this.size.equals(packet.getSize()) && this.cropRect.equals(packet.getCropRect()) && this.rotationDegrees == packet.getRotationDegrees() && this.sensorToBufferTransform.equals(packet.getSensorToBufferTransform()) && this.cameraCaptureResult.equals(packet.getCameraCaptureResult());
    }

    public int hashCode() {
        int iHashCode = (this.data.hashCode() ^ 1000003) * 1000003;
        Exif exif = this.exif;
        return ((((((((((((iHashCode ^ (exif == null ? 0 : exif.hashCode())) * 1000003) ^ this.format) * 1000003) ^ this.size.hashCode()) * 1000003) ^ this.cropRect.hashCode()) * 1000003) ^ this.rotationDegrees) * 1000003) ^ this.sensorToBufferTransform.hashCode()) * 1000003) ^ this.cameraCaptureResult.hashCode();
    }
}

