package androidx.camera.core.impl.utils;

import androidx.camera.core.Logger;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import org.apache.commons.io.IOUtils;
final class ExifAttribute {
    public static final long BYTES_OFFSET_UNKNOWN = -1;
    static final int IFD_FORMAT_BYTE = 1;
    static final int IFD_FORMAT_DOUBLE = 12;
    static final int IFD_FORMAT_SBYTE = 6;
    static final int IFD_FORMAT_SINGLE = 11;
    static final int IFD_FORMAT_SLONG = 9;
    static final int IFD_FORMAT_SRATIONAL = 10;
    static final int IFD_FORMAT_SSHORT = 8;
    static final int IFD_FORMAT_STRING = 2;
    static final int IFD_FORMAT_ULONG = 4;
    static final int IFD_FORMAT_UNDEFINED = 7;
    static final int IFD_FORMAT_URATIONAL = 5;
    static final int IFD_FORMAT_USHORT = 3;
    private static final String TAG = "ExifAttribute";
    public final byte[] bytes;
    public final long bytesOffset;
    public final int format;
    public final int numberOfComponents;
    static final Charset ASCII = StandardCharsets.US_ASCII;
    static final String[] IFD_FORMAT_NAMES = {"", "BYTE", "STRING", "USHORT", "ULONG", "URATIONAL", "SBYTE", "UNDEFINED", "SSHORT", "SLONG", "SRATIONAL", "SINGLE", "DOUBLE", "IFD"};
    static final int[] IFD_FORMAT_BYTES_PER_FORMAT = {0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, 1};
    static final byte[] EXIF_ASCII_PREFIX = {65, 83, 67, 73, 73, 0, 0, 0};

    ExifAttribute(int i, int i2, byte[] bArr) {
        this(i, i2, -1L, bArr);
    }

    ExifAttribute(int i, int i2, long j, byte[] bArr) {
        this.format = i;
        this.numberOfComponents = i2;
        this.bytesOffset = j;
        this.bytes = bArr;
    }

    public static ExifAttribute createUShort(int[] iArr, ByteOrder byteOrder) {
        ByteBuffer byteBufferWrap = ByteBuffer.wrap(new byte[IFD_FORMAT_BYTES_PER_FORMAT[3] * iArr.length]);
        byteBufferWrap.order(byteOrder);
        for (int i : iArr) {
            byteBufferWrap.putShort((short) i);
        }
        return new ExifAttribute(3, iArr.length, byteBufferWrap.array());
    }

    public static ExifAttribute createUShort(int i, ByteOrder byteOrder) {
        return createUShort(new int[]{i}, byteOrder);
    }

    public static ExifAttribute createULong(long[] jArr, ByteOrder byteOrder) {
        ByteBuffer byteBufferWrap = ByteBuffer.wrap(new byte[IFD_FORMAT_BYTES_PER_FORMAT[4] * jArr.length]);
        byteBufferWrap.order(byteOrder);
        for (long j : jArr) {
            byteBufferWrap.putInt((int) j);
        }
        return new ExifAttribute(4, jArr.length, byteBufferWrap.array());
    }

    public static ExifAttribute createULong(long j, ByteOrder byteOrder) {
        return createULong(new long[]{j}, byteOrder);
    }

    public static ExifAttribute createSLong(int[] iArr, ByteOrder byteOrder) {
        ByteBuffer byteBufferWrap = ByteBuffer.wrap(new byte[IFD_FORMAT_BYTES_PER_FORMAT[9] * iArr.length]);
        byteBufferWrap.order(byteOrder);
        for (int i : iArr) {
            byteBufferWrap.putInt(i);
        }
        return new ExifAttribute(9, iArr.length, byteBufferWrap.array());
    }

    public static ExifAttribute createSLong(int i, ByteOrder byteOrder) {
        return createSLong(new int[]{i}, byteOrder);
    }

    public static ExifAttribute createByte(String str) {
        if (str.length() == 1 && str.charAt(0) >= '0' && str.charAt(0) <= '1') {
            return new ExifAttribute(1, 1, new byte[]{(byte) (str.charAt(0) - '0')});
        }
        byte[] bytes = str.getBytes(ASCII);
        return new ExifAttribute(1, bytes.length, bytes);
    }

    public static ExifAttribute createString(String str) {
        byte[] bytes = (str + (char) 0).getBytes(ASCII);
        return new ExifAttribute(2, bytes.length, bytes);
    }

    public static ExifAttribute createURational(LongRational[] longRationalArr, ByteOrder byteOrder) {
        ByteBuffer byteBufferWrap = ByteBuffer.wrap(new byte[IFD_FORMAT_BYTES_PER_FORMAT[5] * longRationalArr.length]);
        byteBufferWrap.order(byteOrder);
        for (LongRational longRational : longRationalArr) {
            byteBufferWrap.putInt((int) longRational.getNumerator());
            byteBufferWrap.putInt((int) longRational.getDenominator());
        }
        return new ExifAttribute(5, longRationalArr.length, byteBufferWrap.array());
    }

    public static ExifAttribute createURational(LongRational longRational, ByteOrder byteOrder) {
        return createURational(new LongRational[]{longRational}, byteOrder);
    }

    public static ExifAttribute createSRational(LongRational[] longRationalArr, ByteOrder byteOrder) {
        ByteBuffer byteBufferWrap = ByteBuffer.wrap(new byte[IFD_FORMAT_BYTES_PER_FORMAT[10] * longRationalArr.length]);
        byteBufferWrap.order(byteOrder);
        for (LongRational longRational : longRationalArr) {
            byteBufferWrap.putInt((int) longRational.getNumerator());
            byteBufferWrap.putInt((int) longRational.getDenominator());
        }
        return new ExifAttribute(10, longRationalArr.length, byteBufferWrap.array());
    }

    public static ExifAttribute createSRational(LongRational longRational, ByteOrder byteOrder) {
        return createSRational(new LongRational[]{longRational}, byteOrder);
    }

    public static ExifAttribute createDouble(double[] dArr, ByteOrder byteOrder) {
        ByteBuffer byteBufferWrap = ByteBuffer.wrap(new byte[IFD_FORMAT_BYTES_PER_FORMAT[12] * dArr.length]);
        byteBufferWrap.order(byteOrder);
        for (double d : dArr) {
            byteBufferWrap.putDouble(d);
        }
        return new ExifAttribute(12, dArr.length, byteBufferWrap.array());
    }

    public static ExifAttribute createDouble(double d, ByteOrder byteOrder) {
        return createDouble(new double[]{d}, byteOrder);
    }

    public String toString() {
        return "(" + IFD_FORMAT_NAMES[this.format] + ", data length:" + this.bytes.length + ")";
    }

    /* high-level source view WARN: Not initialized variable reg: 3, insn: 0x019a: MOVE (r2 I:??[OBJECT, ARRAY]) = (r3 I:??[OBJECT, ARRAY]), block:B:150:0x019a */
    /* high-level source view WARN: Removed duplicated region for block: B:178:0x019d A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    Object getValue(ByteOrder byteOrder) throws Throwable {
        ByteOrderedDataInputStream byteOrderedDataInputStream;
        ByteOrderedDataInputStream byteOrderedDataInputStream2;
        byte b;
        byte b2;
        ByteOrderedDataInputStream byteOrderedDataInputStream3 = null;
        try {
            try {
                byteOrderedDataInputStream = new ByteOrderedDataInputStream(this.bytes);
                try {
                    byteOrderedDataInputStream.setByteOrder(byteOrder);
                    int length = 0;
                    switch (this.format) {
                        case 1:
                        case 6:
                            byte[] bArr = this.bytes;
                            if (bArr.length != 1 || (b = bArr[0]) < 0 || b > 1) {
                                String str = new String(this.bytes, ASCII);
                                try {
                                    byteOrderedDataInputStream.close();
                                    break;
                                } catch (IOException e) {
                                    Logger.e(TAG, "IOException occurred while closing InputStream", e);
                                }
                                return str;
                            }
                            String str2 = new String(new char[]{(char) (this.bytes[0] + 48)});
                            try {
                                byteOrderedDataInputStream.close();
                                break;
                            } catch (IOException e2) {
                                Logger.e(TAG, "IOException occurred while closing InputStream", e2);
                            }
                            return str2;
                        case 2:
                        case 7:
                            if (this.numberOfComponents >= EXIF_ASCII_PREFIX.length) {
                                int i = 0;
                                while (true) {
                                    byte[] bArr2 = EXIF_ASCII_PREFIX;
                                    if (i >= bArr2.length) {
                                        length = bArr2.length;
                                    } else if (this.bytes[i] == bArr2[i]) {
                                        i++;
                                    }
                                }
                            }
                            StringBuilder sb = new StringBuilder();
                            while (length < this.numberOfComponents && (b2 = this.bytes[length]) != 0) {
                                if (b2 >= 32) {
                                    sb.append((char) b2);
                                } else {
                                    sb.append('?');
                                }
                                length++;
                            }
                            String string = sb.toString();
                            try {
                                byteOrderedDataInputStream.close();
                                break;
                            } catch (IOException e3) {
                                Logger.e(TAG, "IOException occurred while closing InputStream", e3);
                            }
                            return string;
                        case 3:
                            int[] iArr = new int[this.numberOfComponents];
                            while (length < this.numberOfComponents) {
                                iArr[length] = byteOrderedDataInputStream.readUnsignedShort();
                                length++;
                            }
                            try {
                                byteOrderedDataInputStream.close();
                                break;
                            } catch (IOException e4) {
                                Logger.e(TAG, "IOException occurred while closing InputStream", e4);
                            }
                            return iArr;
                        case 4:
                            long[] jArr = new long[this.numberOfComponents];
                            while (length < this.numberOfComponents) {
                                jArr[length] = byteOrderedDataInputStream.readUnsignedInt();
                                length++;
                            }
                            try {
                                byteOrderedDataInputStream.close();
                                break;
                            } catch (IOException e5) {
                                Logger.e(TAG, "IOException occurred while closing InputStream", e5);
                            }
                            return jArr;
                        case 5:
                            LongRational[] longRationalArr = new LongRational[this.numberOfComponents];
                            while (length < this.numberOfComponents) {
                                longRationalArr[length] = new LongRational(byteOrderedDataInputStream.readUnsignedInt(), byteOrderedDataInputStream.readUnsignedInt());
                                length++;
                            }
                            try {
                                byteOrderedDataInputStream.close();
                                break;
                            } catch (IOException e6) {
                                Logger.e(TAG, "IOException occurred while closing InputStream", e6);
                            }
                            return longRationalArr;
                        case 8:
                            int[] iArr2 = new int[this.numberOfComponents];
                            while (length < this.numberOfComponents) {
                                iArr2[length] = byteOrderedDataInputStream.readShort();
                                length++;
                            }
                            try {
                                byteOrderedDataInputStream.close();
                                break;
                            } catch (IOException e7) {
                                Logger.e(TAG, "IOException occurred while closing InputStream", e7);
                            }
                            return iArr2;
                        case 9:
                            int[] iArr3 = new int[this.numberOfComponents];
                            while (length < this.numberOfComponents) {
                                iArr3[length] = byteOrderedDataInputStream.readInt();
                                length++;
                            }
                            try {
                                byteOrderedDataInputStream.close();
                                break;
                            } catch (IOException e8) {
                                Logger.e(TAG, "IOException occurred while closing InputStream", e8);
                            }
                            return iArr3;
                        case 10:
                            LongRational[] longRationalArr2 = new LongRational[this.numberOfComponents];
                            while (length < this.numberOfComponents) {
                                longRationalArr2[length] = new LongRational(byteOrderedDataInputStream.readInt(), byteOrderedDataInputStream.readInt());
                                length++;
                            }
                            try {
                                byteOrderedDataInputStream.close();
                                break;
                            } catch (IOException e9) {
                                Logger.e(TAG, "IOException occurred while closing InputStream", e9);
                            }
                            return longRationalArr2;
                        case 11:
                            double[] dArr = new double[this.numberOfComponents];
                            while (length < this.numberOfComponents) {
                                dArr[length] = byteOrderedDataInputStream.readFloat();
                                length++;
                            }
                            try {
                                byteOrderedDataInputStream.close();
                                break;
                            } catch (IOException e10) {
                                Logger.e(TAG, "IOException occurred while closing InputStream", e10);
                            }
                            return dArr;
                        case 12:
                            double[] dArr2 = new double[this.numberOfComponents];
                            while (length < this.numberOfComponents) {
                                dArr2[length] = byteOrderedDataInputStream.readDouble();
                                length++;
                            }
                            try {
                                byteOrderedDataInputStream.close();
                                break;
                            } catch (IOException e11) {
                                Logger.e(TAG, "IOException occurred while closing InputStream", e11);
                            }
                            return dArr2;
                        default:
                            try {
                                byteOrderedDataInputStream.close();
                                break;
                            } catch (IOException e12) {
                                Logger.e(TAG, "IOException occurred while closing InputStream", e12);
                            }
                            return null;
                    }
                } catch (IOException e13) {
                    e = e13;
                    Logger.w(TAG, "IOException occurred during reading a value", e);
                    if (byteOrderedDataInputStream != null) {
                        try {
                            byteOrderedDataInputStream.close();
                        } catch (IOException e14) {
                            Logger.e(TAG, "IOException occurred while closing InputStream", e14);
                        }
                    }
                    return null;
                }
            } catch (Throwable th) {
                th = th;
                byteOrderedDataInputStream3 = byteOrderedDataInputStream2;
                if (byteOrderedDataInputStream3 != null) {
                    try {
                        byteOrderedDataInputStream3.close();
                    } catch (IOException e15) {
                        Logger.e(TAG, "IOException occurred while closing InputStream", e15);
                    }
                }
                throw th;
            }
        } catch (IOException e16) {
            e = e16;
            byteOrderedDataInputStream = null;
        } catch (Throwable th2) {
            th = th2;
            if (byteOrderedDataInputStream3 != null) {
            }
            throw th;
        }
    }

    public double getDoubleValue(ByteOrder byteOrder) throws Throwable {
        Object value = getValue(byteOrder);
        if (value == null) {
            throw new NumberFormatException("NULL can't be converted to a double value");
        }
        if (value instanceof String) {
            return Double.parseDouble((String) value);
        }
        if (value instanceof long[]) {
            if (((long[]) value).length == 1) {
                return r5[0];
            }
            throw new NumberFormatException("There are more than one component");
        }
        if (value instanceof int[]) {
            if (((int[]) value).length == 1) {
                return r5[0];
            }
            throw new NumberFormatException("There are more than one component");
        }
        if (value instanceof double[]) {
            double[] dArr = (double[]) value;
            if (dArr.length == 1) {
                return dArr[0];
            }
            throw new NumberFormatException("There are more than one component");
        }
        if (value instanceof LongRational[]) {
            LongRational[] longRationalArr = (LongRational[]) value;
            if (longRationalArr.length == 1) {
                return longRationalArr[0].toDouble();
            }
            throw new NumberFormatException("There are more than one component");
        }
        throw new NumberFormatException("Couldn't find a double value");
    }

    public int getIntValue(ByteOrder byteOrder) throws Throwable {
        Object value = getValue(byteOrder);
        if (value == null) {
            throw new NumberFormatException("NULL can't be converted to a integer value");
        }
        if (value instanceof String) {
            return Integer.parseInt((String) value);
        }
        if (value instanceof long[]) {
            long[] jArr = (long[]) value;
            if (jArr.length == 1) {
                return (int) jArr[0];
            }
            throw new NumberFormatException("There are more than one component");
        }
        if (value instanceof int[]) {
            int[] iArr = (int[]) value;
            if (iArr.length == 1) {
                return iArr[0];
            }
            throw new NumberFormatException("There are more than one component");
        }
        throw new NumberFormatException("Couldn't find a integer value");
    }

    public String getStringValue(ByteOrder byteOrder) throws Throwable {
        Object value = getValue(byteOrder);
        if (value == null) {
            return null;
        }
        if (value instanceof String) {
            return (String) value;
        }
        StringBuilder sb = new StringBuilder();
        int i = 0;
        if (value instanceof long[]) {
            long[] jArr = (long[]) value;
            while (i < jArr.length) {
                sb.append(jArr[i]);
                i++;
                if (i != jArr.length) {
                    sb.append(",");
                }
            }
            return sb.toString();
        }
        if (value instanceof int[]) {
            int[] iArr = (int[]) value;
            while (i < iArr.length) {
                sb.append(iArr[i]);
                i++;
                if (i != iArr.length) {
                    sb.append(",");
                }
            }
            return sb.toString();
        }
        if (value instanceof double[]) {
            double[] dArr = (double[]) value;
            while (i < dArr.length) {
                sb.append(dArr[i]);
                i++;
                if (i != dArr.length) {
                    sb.append(",");
                }
            }
            return sb.toString();
        }
        if (!(value instanceof LongRational[])) {
            return null;
        }
        LongRational[] longRationalArr = (LongRational[]) value;
        while (i < longRationalArr.length) {
            sb.append(longRationalArr[i].getNumerator());
            sb.append(IOUtils.DIR_SEPARATOR_UNIX);
            sb.append(longRationalArr[i].getDenominator());
            i++;
            if (i != longRationalArr.length) {
                sb.append(",");
            }
        }
        return sb.toString();
    }

    public int size() {
        return IFD_FORMAT_BYTES_PER_FORMAT[this.format] * this.numberOfComponents;
    }
}

