package org.apache.commons.io.input;

import com.silkimen.http.HttpRequest;
import java.io.Closeable;
import java.io.File;
import java.io.IOException;
import java.io.RandomAccessFile;
import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import org.apache.commons.io.Charsets;
import org.apache.commons.io.IOUtils;
public class ReversedLinesFileReader implements Closeable {
    private final int avoidNewlineSplitBufferSize;
    private final int blockSize;
    private final int byteDecrement;
    private FilePart currentFilePart;
    private final Charset encoding;
    private final byte[][] newLineSequences;
    private final RandomAccessFile randomAccessFile;
    private final long totalBlockCount;
    private final long totalByteLength;
    private boolean trailingNewlineOfFileSkipped;

    public ReversedLinesFileReader(File file) throws IOException {
        this(file, 4096, Charset.defaultCharset().toString());
    }

    public ReversedLinesFileReader(File file, int i, Charset charset) throws IOException {
        int i2;
        Charset charset2;
        this.trailingNewlineOfFileSkipped = false;
        this.blockSize = i;
        this.encoding = charset;
        RandomAccessFile randomAccessFile = new RandomAccessFile(file, "r");
        this.randomAccessFile = randomAccessFile;
        long length = randomAccessFile.length();
        this.totalByteLength = length;
        long j = i;
        int i3 = (int) (length % j);
        if (i3 > 0) {
            this.totalBlockCount = (length / j) + 1;
        } else {
            this.totalBlockCount = length / j;
            i2 = length > 0 ? i : i2;
            this.currentFilePart = new FilePart(this.totalBlockCount, i2, null);
            charset2 = Charsets.toCharset(charset);
            if (charset2.newEncoder().maxBytesPerChar() != 1.0f || charset2 == Charset.forName(HttpRequest.CHARSET_UTF8) || charset2 == Charset.forName("Shift_JIS")) {
                this.byteDecrement = 1;
            } else if (charset2 != Charset.forName("UTF-16BE") || charset2 == Charset.forName("UTF-16LE")) {
                this.byteDecrement = 2;
            } else {
                if (charset2 == Charset.forName("UTF-16")) {
                    throw new UnsupportedEncodingException("For UTF-16, you need to specify the byte order (use UTF-16BE or UTF-16LE)");
                }
                throw new UnsupportedEncodingException("Encoding " + charset + " is not supported yet (feel free to submit a patch)");
            }
            byte[][] bArr = {IOUtils.LINE_SEPARATOR_WINDOWS.getBytes(charset), IOUtils.LINE_SEPARATOR_UNIX.getBytes(charset), "\r".getBytes(charset)};
            this.newLineSequences = bArr;
            this.avoidNewlineSplitBufferSize = bArr[0].length;
        }
        i2 = i3;
        this.currentFilePart = new FilePart(this.totalBlockCount, i2, null);
        charset2 = Charsets.toCharset(charset);
        if (charset2.newEncoder().maxBytesPerChar() != 1.0f) {
            this.byteDecrement = 1;
        } else {
            if (charset2 != Charset.forName("UTF-16BE")) {
            }
            this.byteDecrement = 2;
        }
        byte[][] bArr2 = {IOUtils.LINE_SEPARATOR_WINDOWS.getBytes(charset), IOUtils.LINE_SEPARATOR_UNIX.getBytes(charset), "\r".getBytes(charset)};
        this.newLineSequences = bArr2;
        this.avoidNewlineSplitBufferSize = bArr2[0].length;
    }

    public ReversedLinesFileReader(File file, int i, String str) throws IOException {
        this(file, i, Charsets.toCharset(str));
    }

    public String readLine() throws IOException {
        String line = this.currentFilePart.readLine();
        while (line == null) {
            FilePart filePartRollOver = this.currentFilePart.rollOver();
            this.currentFilePart = filePartRollOver;
            if (filePartRollOver == null) {
                break;
            }
            line = filePartRollOver.readLine();
        }
        if (!"".equals(line) || this.trailingNewlineOfFileSkipped) {
            return line;
        }
        this.trailingNewlineOfFileSkipped = true;
        return readLine();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() throws IOException {
        this.randomAccessFile.close();
    }

    private class FilePart {
        private int currentLastBytePos;
        private final byte[] data;
        private byte[] leftOver;
        private final long no;

        private FilePart(long j, int i, byte[] bArr) throws IOException {
            this.no = j;
            byte[] bArr2 = new byte[(bArr != null ? bArr.length : 0) + i];
            this.data = bArr2;
            long j2 = (j - 1) * ((long) ReversedLinesFileReader.this.blockSize);
            if (j > 0) {
                ReversedLinesFileReader.this.randomAccessFile.seek(j2);
                if (ReversedLinesFileReader.this.randomAccessFile.read(bArr2, 0, i) != i) {
                    throw new IllegalStateException("Count of requested bytes and actually read bytes don't match");
                }
            }
            if (bArr != null) {
                System.arraycopy(bArr, 0, bArr2, i, bArr.length);
            }
            this.currentLastBytePos = bArr2.length - 1;
            this.leftOver = null;
        }
        public FilePart rollOver() throws IOException {
            if (this.currentLastBytePos > -1) {
                throw new IllegalStateException("Current currentLastCharPos unexpectedly positive... last readLine() should have returned something! currentLastCharPos=" + this.currentLastBytePos);
            }
            long j = this.no;
            if (j > 1) {
                ReversedLinesFileReader reversedLinesFileReader = ReversedLinesFileReader.this;
                return reversedLinesFileReader.new FilePart(j - 1, reversedLinesFileReader.blockSize, this.leftOver);
            }
            if (this.leftOver == null) {
                return null;
            }
            throw new IllegalStateException("Unexpected leftover of the last block: leftOverOfThisFilePart=".concat(new String(this.leftOver, ReversedLinesFileReader.this.encoding)));
        }
        /* high-level source view WARN: Code restructure failed: missing block: B:23:0x0068, code lost:
        
            r1 = null;
         */
        /* high-level source view WARN: Code restructure failed: missing block: B:24:0x0069, code lost:
        
            if (r0 == false) goto L34;
         */
        /* high-level source view WARN: Code restructure failed: missing block: B:26:0x006d, code lost:
        
            if (r9.leftOver == null) goto L35;
         */
        /* high-level source view WARN: Code restructure failed: missing block: B:27:0x006f, code lost:
        
            r1 = new java.lang.String(r9.leftOver, r9.this$0.encoding);
            r9.leftOver = null;
         */
        /* high-level source view WARN: Code restructure failed: missing block: B:28:0x007e, code lost:
        
            return r1;
         */
        /* high-level source view WARN: Code restructure failed: missing block: B:34:?, code lost:
        
            return r1;
         */
        /* high-level source view WARN: Code restructure failed: missing block: B:35:?, code lost:
        
            return r1;
         */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
        */
        public String readLine() throws IOException {
            boolean z = this.no == 1;
            int i = this.currentLastBytePos;
            while (true) {
                if (i > -1) {
                    if (!z && i < ReversedLinesFileReader.this.avoidNewlineSplitBufferSize) {
                        createLeftOver();
                        break;
                    }
                    int newLineMatchByteCount = getNewLineMatchByteCount(this.data, i);
                    if (newLineMatchByteCount <= 0) {
                        i -= ReversedLinesFileReader.this.byteDecrement;
                        if (i < 0) {
                            createLeftOver();
                            break;
                        }
                    } else {
                        int i2 = i + 1;
                        int i3 = (this.currentLastBytePos - i2) + 1;
                        if (i3 < 0) {
                            throw new IllegalStateException("Unexpected negative line length=" + i3);
                        }
                        byte[] bArr = new byte[i3];
                        System.arraycopy(this.data, i2, bArr, 0, i3);
                        String str = new String(bArr, ReversedLinesFileReader.this.encoding);
                        this.currentLastBytePos = i - newLineMatchByteCount;
                    }
                } else {
                    break;
                }
            }
        }

        private void createLeftOver() {
            int i = this.currentLastBytePos + 1;
            if (i > 0) {
                byte[] bArr = new byte[i];
                this.leftOver = bArr;
                System.arraycopy(this.data, 0, bArr, 0, i);
            } else {
                this.leftOver = null;
            }
            this.currentLastBytePos = -1;
        }

        private int getNewLineMatchByteCount(byte[] bArr, int i) {
            for (byte[] bArr2 : ReversedLinesFileReader.this.newLineSequences) {
                boolean z = true;
                for (int length = bArr2.length - 1; length >= 0; length--) {
                    int length2 = (i + length) - (bArr2.length - 1);
                    z &= length2 >= 0 && bArr[length2] == bArr2[length];
                }
                if (z) {
                    return bArr2.length;
                }
            }
            return 0;
        }
    }
}

