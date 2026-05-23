package androidx.camera.core.impl.utils;

import java.io.FilterOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.ByteOrder;
class ByteOrderedDataOutputStream extends FilterOutputStream {
    private ByteOrder mByteOrder;
    final OutputStream mOutputStream;

    ByteOrderedDataOutputStream(OutputStream outputStream, ByteOrder byteOrder) {
        super(outputStream);
        this.mOutputStream = outputStream;
        this.mByteOrder = byteOrder;
    }

    public void setByteOrder(ByteOrder byteOrder) {
        this.mByteOrder = byteOrder;
    }

    @Override // java.io.FilterOutputStream, java.io.OutputStream
    public void write(byte[] bArr) throws IOException {
        this.mOutputStream.write(bArr);
    }

    @Override // java.io.FilterOutputStream, java.io.OutputStream
    public void write(byte[] bArr, int i, int i2) throws IOException {
        this.mOutputStream.write(bArr, i, i2);
    }

    public void writeByte(int i) throws IOException {
        this.mOutputStream.write(i);
    }

    public void writeShort(short s) throws IOException {
        if (this.mByteOrder == ByteOrder.LITTLE_ENDIAN) {
            this.mOutputStream.write(s & 255);
            this.mOutputStream.write((s >>> 8) & 255);
        } else if (this.mByteOrder == ByteOrder.BIG_ENDIAN) {
            this.mOutputStream.write((s >>> 8) & 255);
            this.mOutputStream.write(s & 255);
        }
    }

    public void writeInt(int i) throws IOException {
        if (this.mByteOrder == ByteOrder.LITTLE_ENDIAN) {
            this.mOutputStream.write(i & 255);
            this.mOutputStream.write((i >>> 8) & 255);
            this.mOutputStream.write((i >>> 16) & 255);
            this.mOutputStream.write((i >>> 24) & 255);
            return;
        }
        if (this.mByteOrder == ByteOrder.BIG_ENDIAN) {
            this.mOutputStream.write((i >>> 24) & 255);
            this.mOutputStream.write((i >>> 16) & 255);
            this.mOutputStream.write((i >>> 8) & 255);
            this.mOutputStream.write(i & 255);
        }
    }

    public void writeUnsignedShort(int i) throws IOException {
        writeShort((short) i);
    }

    public void writeUnsignedInt(long j) throws IOException {
        writeInt((int) j);
    }
}

