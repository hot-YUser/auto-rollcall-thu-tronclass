package org.apache.commons.io;

import java.io.IOException;
import java.io.OutputStream;
public class HexDump {
    public static final String EOL = System.getProperty("line.separator");
    private static final char[] _hexcodes = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'};
    private static final int[] _shifts = {28, 24, 20, 16, 12, 8, 4, 0};

    public static void dump(byte[] bArr, long j, OutputStream outputStream, int i) throws IOException, ArrayIndexOutOfBoundsException, IllegalArgumentException {
        if (i < 0 || i >= bArr.length) {
            throw new ArrayIndexOutOfBoundsException("illegal index: " + i + " into array of length " + bArr.length);
        }
        if (outputStream == null) {
            throw new IllegalArgumentException("cannot write to nullstream");
        }
        long j2 = j + ((long) i);
        StringBuilder sb = new StringBuilder(74);
        while (i < bArr.length) {
            int length = bArr.length - i;
            if (length > 16) {
                length = 16;
            }
            dump(sb, j2).append(' ');
            for (int i2 = 0; i2 < 16; i2++) {
                if (i2 < length) {
                    dump(sb, bArr[i2 + i]);
                } else {
                    sb.append("  ");
                }
                sb.append(' ');
            }
            for (int i3 = 0; i3 < length; i3++) {
                byte b = bArr[i3 + i];
                if (b >= 32 && b < 127) {
                    sb.append((char) b);
                } else {
                    sb.append(FilenameUtils.EXTENSION_SEPARATOR);
                }
            }
            sb.append(EOL);
            outputStream.write(sb.toString().getBytes());
            outputStream.flush();
            sb.setLength(0);
            j2 += (long) length;
            i += 16;
        }
    }

    private static StringBuilder dump(StringBuilder sb, long j) {
        for (int i = 0; i < 8; i++) {
            sb.append(_hexcodes[((int) (j >> _shifts[i])) & 15]);
        }
        return sb;
    }

    private static StringBuilder dump(StringBuilder sb, byte b) {
        for (int i = 0; i < 2; i++) {
            sb.append(_hexcodes[(b >> _shifts[i + 6]) & 15]);
        }
        return sb;
    }
}

