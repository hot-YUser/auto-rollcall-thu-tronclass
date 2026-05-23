package org.apache.commons.io.input;

import java.io.IOException;
import java.io.InputStream;
public class DemuxInputStream extends InputStream {
    private final InheritableThreadLocal<InputStream> m_streams = new InheritableThreadLocal<>();

    public InputStream bindStream(InputStream inputStream) {
        InputStream inputStream2 = this.m_streams.get();
        this.m_streams.set(inputStream);
        return inputStream2;
    }

    @Override // java.io.InputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() throws IOException {
        InputStream inputStream = this.m_streams.get();
        if (inputStream != null) {
            inputStream.close();
        }
    }

    @Override // java.io.InputStream
    public int read() throws IOException {
        InputStream inputStream = this.m_streams.get();
        if (inputStream != null) {
            return inputStream.read();
        }
        return -1;
    }
}

