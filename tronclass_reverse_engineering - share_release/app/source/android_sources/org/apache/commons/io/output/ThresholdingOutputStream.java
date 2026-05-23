package org.apache.commons.io.output;

import java.io.IOException;
import java.io.OutputStream;
public abstract class ThresholdingOutputStream extends OutputStream {
    private final int threshold;
    private boolean thresholdExceeded;
    private long written;

    protected abstract OutputStream getStream() throws IOException;

    protected abstract void thresholdReached() throws IOException;

    public ThresholdingOutputStream(int i) {
        this.threshold = i;
    }

    @Override // java.io.OutputStream
    public void write(int i) throws IOException {
        checkThreshold(1);
        getStream().write(i);
        this.written++;
    }

    @Override // java.io.OutputStream
    public void write(byte[] bArr) throws IOException {
        checkThreshold(bArr.length);
        getStream().write(bArr);
        this.written += (long) bArr.length;
    }

    @Override // java.io.OutputStream
    public void write(byte[] bArr, int i, int i2) throws IOException {
        checkThreshold(i2);
        getStream().write(bArr, i, i2);
        this.written += (long) i2;
    }

    @Override // java.io.OutputStream, java.io.Flushable
    public void flush() throws IOException {
        getStream().flush();
    }

    @Override // java.io.OutputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() throws IOException {
        try {
            flush();
        } catch (IOException unused) {
        }
        getStream().close();
    }

    public int getThreshold() {
        return this.threshold;
    }

    public long getByteCount() {
        return this.written;
    }

    public boolean isThresholdExceeded() {
        return this.written > ((long) this.threshold);
    }

    protected void checkThreshold(int i) throws IOException {
        if (this.thresholdExceeded || this.written + ((long) i) <= this.threshold) {
            return;
        }
        this.thresholdExceeded = true;
        thresholdReached();
    }

    protected void resetByteCount() {
        this.thresholdExceeded = false;
        this.written = 0L;
    }
}

