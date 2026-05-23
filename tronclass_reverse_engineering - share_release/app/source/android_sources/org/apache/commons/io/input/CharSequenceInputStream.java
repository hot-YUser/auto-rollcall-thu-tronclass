package org.apache.commons.io.input;

import java.io.IOException;
import java.io.InputStream;
import java.nio.ByteBuffer;
import java.nio.CharBuffer;
import java.nio.charset.CharacterCodingException;
import java.nio.charset.Charset;
import java.nio.charset.CharsetEncoder;
import java.nio.charset.CoderResult;
import java.nio.charset.CodingErrorAction;
import kotlin.UByte;
public class CharSequenceInputStream extends InputStream {
    private final ByteBuffer bbuf;
    private final CharBuffer cbuf;
    private final CharsetEncoder encoder;
    private int mark;

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() throws IOException {
    }

    @Override // java.io.InputStream
    public boolean markSupported() {
        return true;
    }

    public CharSequenceInputStream(CharSequence charSequence, Charset charset, int i) {
        this.encoder = charset.newEncoder().onMalformedInput(CodingErrorAction.REPLACE).onUnmappableCharacter(CodingErrorAction.REPLACE);
        ByteBuffer byteBufferAllocate = ByteBuffer.allocate(i);
        this.bbuf = byteBufferAllocate;
        byteBufferAllocate.flip();
        this.cbuf = CharBuffer.wrap(charSequence);
        this.mark = -1;
    }

    public CharSequenceInputStream(CharSequence charSequence, String str, int i) {
        this(charSequence, Charset.forName(str), i);
    }

    public CharSequenceInputStream(CharSequence charSequence, Charset charset) {
        this(charSequence, charset, 2048);
    }

    public CharSequenceInputStream(CharSequence charSequence, String str) {
        this(charSequence, str, 2048);
    }

    private void fillBuffer() throws CharacterCodingException {
        this.bbuf.compact();
        CoderResult coderResultEncode = this.encoder.encode(this.cbuf, this.bbuf, true);
        if (coderResultEncode.isError()) {
            coderResultEncode.throwException();
        }
        this.bbuf.flip();
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr, int i, int i2) throws IOException {
        if (bArr == null) {
            throw new NullPointerException("Byte array is null");
        }
        if (i2 < 0 || i + i2 > bArr.length) {
            throw new IndexOutOfBoundsException("Array Size=" + bArr.length + ", offset=" + i + ", length=" + i2);
        }
        int i3 = 0;
        if (i2 == 0) {
            return 0;
        }
        if (!this.bbuf.hasRemaining() && !this.cbuf.hasRemaining()) {
            return -1;
        }
        while (i2 > 0) {
            if (this.bbuf.hasRemaining()) {
                int iMin = Math.min(this.bbuf.remaining(), i2);
                this.bbuf.get(bArr, i, iMin);
                i += iMin;
                i2 -= iMin;
                i3 += iMin;
            } else {
                fillBuffer();
                if (!this.bbuf.hasRemaining() && !this.cbuf.hasRemaining()) {
                    break;
                }
            }
        }
        if (i3 != 0 || this.cbuf.hasRemaining()) {
            return i3;
        }
        return -1;
    }

    @Override // java.io.InputStream
    public int read() throws IOException {
        while (!this.bbuf.hasRemaining()) {
            fillBuffer();
            if (!this.bbuf.hasRemaining() && !this.cbuf.hasRemaining()) {
                return -1;
            }
        }
        return this.bbuf.get() & UByte.MAX_VALUE;
    }

    @Override // java.io.InputStream
    public int read(byte[] bArr) throws IOException {
        return read(bArr, 0, bArr.length);
    }

    @Override // java.io.InputStream
    public long skip(long j) throws IOException {
        int i = 0;
        while (j > 0 && this.cbuf.hasRemaining()) {
            this.cbuf.get();
            j--;
            i++;
        }
        return i;
    }

    @Override // java.io.InputStream
    public int available() throws IOException {
        return this.cbuf.remaining();
    }

    @Override // java.io.InputStream
    public synchronized void mark(int i) {
        this.mark = this.cbuf.position();
    }

    @Override // java.io.InputStream
    public synchronized void reset() throws IOException {
        int i = this.mark;
        if (i != -1) {
            this.cbuf.position(i);
            this.mark = -1;
        }
    }
}

