package androidx.camera.core.imagecapture;

import androidx.camera.core.ImageCapture;
import androidx.camera.core.imagecapture.JpegBytes2Disk;
import androidx.camera.core.processing.Packet;
final class AutoValue_JpegBytes2Disk_In extends JpegBytes2Disk.In {
    private final ImageCapture.OutputFileOptions outputFileOptions;
    private final Packet<byte[]> packet;

    AutoValue_JpegBytes2Disk_In(Packet<byte[]> packet, ImageCapture.OutputFileOptions outputFileOptions) {
        if (packet == null) {
            throw new NullPointerException("Null packet");
        }
        this.packet = packet;
        if (outputFileOptions == null) {
            throw new NullPointerException("Null outputFileOptions");
        }
        this.outputFileOptions = outputFileOptions;
    }

    @Override // androidx.camera.core.imagecapture.JpegBytes2Disk.In
    Packet<byte[]> getPacket() {
        return this.packet;
    }

    @Override // androidx.camera.core.imagecapture.JpegBytes2Disk.In
    ImageCapture.OutputFileOptions getOutputFileOptions() {
        return this.outputFileOptions;
    }

    public String toString() {
        return "In{packet=" + this.packet + ", outputFileOptions=" + this.outputFileOptions + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof JpegBytes2Disk.In)) {
            return false;
        }
        JpegBytes2Disk.In in = (JpegBytes2Disk.In) obj;
        return this.packet.equals(in.getPacket()) && this.outputFileOptions.equals(in.getOutputFileOptions());
    }

    public int hashCode() {
        return ((this.packet.hashCode() ^ 1000003) * 1000003) ^ this.outputFileOptions.hashCode();
    }
}

