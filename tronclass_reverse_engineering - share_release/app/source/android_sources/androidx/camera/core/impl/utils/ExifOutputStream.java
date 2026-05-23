package androidx.camera.core.impl.utils;

import androidx.camera.core.impl.utils.ExifData;
import androidx.core.util.Preconditions;
import java.io.BufferedOutputStream;
import java.io.FilterOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.util.Iterator;
import java.util.Map;
import kotlin.UShort;
public final class ExifOutputStream extends FilterOutputStream {
    private static final short BYTE_ALIGN_II = 18761;
    private static final short BYTE_ALIGN_MM = 19789;
    private static final boolean DEBUG = false;
    private static final byte[] IDENTIFIER_EXIF_APP1 = "Exif\u0000\u0000".getBytes(ExifAttribute.ASCII);
    private static final int IFD_OFFSET = 8;
    private static final byte START_CODE = 42;
    private static final int STATE_FRAME_HEADER = 1;
    private static final int STATE_JPEG_DATA = 2;
    private static final int STATE_SOI = 0;
    private static final int STREAMBUFFER_SIZE = 65536;
    private static final String TAG = "ExifOutputStream";
    private final ByteBuffer mBuffer;
    private int mByteToCopy;
    private int mByteToSkip;
    private final ExifData mExifData;
    private final byte[] mSingleByteArray;
    private int mState;

    public ExifOutputStream(OutputStream outputStream, ExifData exifData) {
        super(new BufferedOutputStream(outputStream, 65536));
        this.mSingleByteArray = new byte[1];
        this.mBuffer = ByteBuffer.allocate(4);
        this.mState = 0;
        this.mExifData = exifData;
    }

    private int requestByteToBuffer(int i, byte[] bArr, int i2, int i3) {
        int iMin = Math.min(i3, i - this.mBuffer.position());
        this.mBuffer.put(bArr, i2, iMin);
        return iMin;
    }

    /* high-level source view WARN: Code restructure failed: missing block: B:44:0x0106, code lost:
    
        if (r9 <= 0) goto L60;
     */
    /* high-level source view WARN: Code restructure failed: missing block: B:45:0x0108, code lost:
    
        r6.out.write(r7, r8, r9);
     */
    /* high-level source view WARN: Code restructure failed: missing block: B:46:0x010d, code lost:
    
        return;
     */
    /* high-level source view WARN: Code restructure failed: missing block: B:60:?, code lost:
    
        return;
     */
    @Override // java.io.FilterOutputStream, java.io.OutputStream
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public void write(byte[] bArr, int i, int i2) throws IOException {
        while (true) {
            int i3 = this.mByteToSkip;
            if ((i3 <= 0 && this.mByteToCopy <= 0 && this.mState == 2) || i2 <= 0) {
                break;
            }
            if (i3 > 0) {
                int iMin = Math.min(i2, i3);
                i2 -= iMin;
                this.mByteToSkip -= iMin;
                i += iMin;
            }
            int i4 = this.mByteToCopy;
            if (i4 > 0) {
                int iMin2 = Math.min(i2, i4);
                this.out.write(bArr, i, iMin2);
                i2 -= iMin2;
                this.mByteToCopy -= iMin2;
                i += iMin2;
            }
            if (i2 == 0) {
                return;
            }
            int i5 = this.mState;
            if (i5 == 0) {
                int iRequestByteToBuffer = requestByteToBuffer(2, bArr, i, i2);
                i += iRequestByteToBuffer;
                i2 -= iRequestByteToBuffer;
                if (this.mBuffer.position() < 2) {
                    return;
                }
                this.mBuffer.rewind();
                if (this.mBuffer.getShort() != -40) {
                    throw new IOException("Not a valid jpeg image, cannot write exif");
                }
                this.out.write(this.mBuffer.array(), 0, 2);
                this.mState = 1;
                this.mBuffer.rewind();
                ByteOrderedDataOutputStream byteOrderedDataOutputStream = new ByteOrderedDataOutputStream(this.out, ByteOrder.BIG_ENDIAN);
                byteOrderedDataOutputStream.writeShort((short) -31);
                writeExifSegment(byteOrderedDataOutputStream);
            } else if (i5 != 1) {
                continue;
            } else {
                int iRequestByteToBuffer2 = requestByteToBuffer(4, bArr, i, i2);
                i += iRequestByteToBuffer2;
                i2 -= iRequestByteToBuffer2;
                if (this.mBuffer.position() == 2 && this.mBuffer.getShort() == -39) {
                    this.out.write(this.mBuffer.array(), 0, 2);
                    this.mBuffer.rewind();
                }
                if (this.mBuffer.position() < 4) {
                    return;
                }
                this.mBuffer.rewind();
                short s = this.mBuffer.getShort();
                if (s == -31) {
                    this.mByteToSkip = (this.mBuffer.getShort() & UShort.MAX_VALUE) - 2;
                    this.mState = 2;
                } else if (!JpegHeader.isSofMarker(s)) {
                    this.out.write(this.mBuffer.array(), 0, 4);
                    this.mByteToCopy = (this.mBuffer.getShort() & UShort.MAX_VALUE) - 2;
                } else {
                    this.out.write(this.mBuffer.array(), 0, 4);
                    this.mState = 2;
                }
                this.mBuffer.rewind();
            }
        }
    }

    @Override // java.io.FilterOutputStream, java.io.OutputStream
    public void write(int i) throws IOException {
        byte[] bArr = this.mSingleByteArray;
        bArr[0] = (byte) (i & 255);
        write(bArr);
    }

    @Override // java.io.FilterOutputStream, java.io.OutputStream
    public void write(byte[] bArr) throws IOException {
        write(bArr, 0, bArr.length);
    }

    private void writeExifSegment(ByteOrderedDataOutputStream byteOrderedDataOutputStream) throws IOException {
        int[] iArr = new int[ExifData.EXIF_TAGS.length];
        int[] iArr2 = new int[ExifData.EXIF_TAGS.length];
        for (ExifTag exifTag : ExifData.EXIF_POINTER_TAGS) {
            for (int i = 0; i < ExifData.EXIF_TAGS.length; i++) {
                this.mExifData.getAttributes(i).remove(exifTag.name);
            }
        }
        if (!this.mExifData.getAttributes(1).isEmpty()) {
            this.mExifData.getAttributes(0).put(ExifData.EXIF_POINTER_TAGS[1].name, ExifAttribute.createULong(0L, this.mExifData.getByteOrder()));
        }
        if (!this.mExifData.getAttributes(2).isEmpty()) {
            this.mExifData.getAttributes(0).put(ExifData.EXIF_POINTER_TAGS[2].name, ExifAttribute.createULong(0L, this.mExifData.getByteOrder()));
        }
        if (!this.mExifData.getAttributes(3).isEmpty()) {
            this.mExifData.getAttributes(1).put(ExifData.EXIF_POINTER_TAGS[3].name, ExifAttribute.createULong(0L, this.mExifData.getByteOrder()));
        }
        for (int i2 = 0; i2 < ExifData.EXIF_TAGS.length; i2++) {
            Iterator<Map.Entry<String, ExifAttribute>> it = this.mExifData.getAttributes(i2).entrySet().iterator();
            int i3 = 0;
            while (it.hasNext()) {
                int size = it.next().getValue().size();
                if (size > 4) {
                    i3 += size;
                }
            }
            iArr2[i2] = iArr2[i2] + i3;
        }
        int size2 = 8;
        for (int i4 = 0; i4 < ExifData.EXIF_TAGS.length; i4++) {
            if (!this.mExifData.getAttributes(i4).isEmpty()) {
                iArr[i4] = size2;
                size2 += (this.mExifData.getAttributes(i4).size() * 12) + 6 + iArr2[i4];
            }
        }
        int i5 = size2 + 8;
        if (!this.mExifData.getAttributes(1).isEmpty()) {
            this.mExifData.getAttributes(0).put(ExifData.EXIF_POINTER_TAGS[1].name, ExifAttribute.createULong(iArr[1], this.mExifData.getByteOrder()));
        }
        if (!this.mExifData.getAttributes(2).isEmpty()) {
            this.mExifData.getAttributes(0).put(ExifData.EXIF_POINTER_TAGS[2].name, ExifAttribute.createULong(iArr[2], this.mExifData.getByteOrder()));
        }
        if (!this.mExifData.getAttributes(3).isEmpty()) {
            this.mExifData.getAttributes(1).put(ExifData.EXIF_POINTER_TAGS[3].name, ExifAttribute.createULong(iArr[3], this.mExifData.getByteOrder()));
        }
        byteOrderedDataOutputStream.writeUnsignedShort(i5);
        byteOrderedDataOutputStream.write(IDENTIFIER_EXIF_APP1);
        byteOrderedDataOutputStream.writeShort(this.mExifData.getByteOrder() == ByteOrder.BIG_ENDIAN ? BYTE_ALIGN_MM : BYTE_ALIGN_II);
        byteOrderedDataOutputStream.setByteOrder(this.mExifData.getByteOrder());
        byteOrderedDataOutputStream.writeUnsignedShort(42);
        byteOrderedDataOutputStream.writeUnsignedInt(8L);
        for (int i6 = 0; i6 < ExifData.EXIF_TAGS.length; i6++) {
            if (!this.mExifData.getAttributes(i6).isEmpty()) {
                byteOrderedDataOutputStream.writeUnsignedShort(this.mExifData.getAttributes(i6).size());
                int size3 = iArr[i6] + 2 + (this.mExifData.getAttributes(i6).size() * 12) + 4;
                for (Map.Entry<String, ExifAttribute> entry : this.mExifData.getAttributes(i6).entrySet()) {
                    int i7 = ((ExifTag) Preconditions.checkNotNull(ExifData.Builder.sExifTagMapsForWriting.get(i6).get(entry.getKey()), "Tag not supported: " + entry.getKey() + ". Tag needs to be ported from ExifInterface to ExifData.")).number;
                    ExifAttribute value = entry.getValue();
                    int size4 = value.size();
                    byteOrderedDataOutputStream.writeUnsignedShort(i7);
                    byteOrderedDataOutputStream.writeUnsignedShort(value.format);
                    byteOrderedDataOutputStream.writeInt(value.numberOfComponents);
                    if (size4 > 4) {
                        byteOrderedDataOutputStream.writeUnsignedInt(size3);
                        size3 += size4;
                    } else {
                        byteOrderedDataOutputStream.write(value.bytes);
                        if (size4 < 4) {
                            while (size4 < 4) {
                                byteOrderedDataOutputStream.writeByte(0);
                                size4++;
                            }
                        }
                    }
                }
                byteOrderedDataOutputStream.writeUnsignedInt(0L);
                Iterator<Map.Entry<String, ExifAttribute>> it2 = this.mExifData.getAttributes(i6).entrySet().iterator();
                while (it2.hasNext()) {
                    ExifAttribute value2 = it2.next().getValue();
                    if (value2.bytes.length > 4) {
                        byteOrderedDataOutputStream.write(value2.bytes, 0, value2.bytes.length);
                    }
                }
            }
        }
        byteOrderedDataOutputStream.setByteOrder(ByteOrder.BIG_ENDIAN);
    }

    static final class JpegHeader {
        public static final short APP1 = -31;
        public static final short DAC = -52;
        public static final short DHT = -60;
        public static final short EOI = -39;
        public static final short JPG = -56;
        public static final short SOF0 = -64;
        public static final short SOF15 = -49;
        public static final short SOI = -40;

        public static boolean isSofMarker(short s) {
            return (s < -64 || s > -49 || s == -60 || s == -56 || s == -52) ? false : true;
        }

        private JpegHeader() {
        }
    }
}

