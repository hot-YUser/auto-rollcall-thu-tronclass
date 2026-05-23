package androidx.camera.core.imagecapture;

import androidx.camera.core.ImageProxy;
import androidx.camera.core.imagecapture.Image2JpegBytes;
import androidx.camera.core.processing.Packet;
final class AutoValue_Image2JpegBytes_In extends Image2JpegBytes.In {
    private final int jpegQuality;
    private final Packet<ImageProxy> packet;

    AutoValue_Image2JpegBytes_In(Packet<ImageProxy> packet, int i) {
        if (packet == null) {
            throw new NullPointerException("Null packet");
        }
        this.packet = packet;
        this.jpegQuality = i;
    }

    @Override // androidx.camera.core.imagecapture.Image2JpegBytes.In
    Packet<ImageProxy> getPacket() {
        return this.packet;
    }

    @Override // androidx.camera.core.imagecapture.Image2JpegBytes.In
    int getJpegQuality() {
        return this.jpegQuality;
    }

    public String toString() {
        return "In{packet=" + this.packet + ", jpegQuality=" + this.jpegQuality + "}";
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof Image2JpegBytes.In)) {
            return false;
        }
        Image2JpegBytes.In in = (Image2JpegBytes.In) obj;
        return this.packet.equals(in.getPacket()) && this.jpegQuality == in.getJpegQuality();
    }

    public int hashCode() {
        return ((this.packet.hashCode() ^ 1000003) * 1000003) ^ this.jpegQuality;
    }
}

