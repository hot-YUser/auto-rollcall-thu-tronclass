package okhttp3.internal.cache2;

import java.io.File;
import java.io.IOException;
import java.io.RandomAccessFile;
import okhttp3.internal.Util;
import okio.Buffer;
import okio.ByteString;
import okio.Source;
import okio.Timeout;
final class Relay {
    private static final long FILE_HEADER_SIZE = 32;
    static final ByteString PREFIX_CLEAN = ByteString.encodeUtf8("OkHttp cache v1\n");
    static final ByteString PREFIX_DIRTY = ByteString.encodeUtf8("OkHttp DIRTY :(\n");
    private static final int SOURCE_FILE = 2;
    private static final int SOURCE_UPSTREAM = 1;
    final long bufferMaxSize;
    boolean complete;
    RandomAccessFile file;
    private final ByteString metadata;
    int sourceCount;
    Source upstream;
    long upstreamPos;
    Thread upstreamReader;
    final Buffer upstreamBuffer = new Buffer();
    final Buffer buffer = new Buffer();

    private Relay(RandomAccessFile randomAccessFile, Source source, long j, ByteString byteString, long j2) {
        this.file = randomAccessFile;
        this.upstream = source;
        this.complete = source == null;
        this.upstreamPos = j;
        this.metadata = byteString;
        this.bufferMaxSize = j2;
    }

    public static Relay edit(File file, Source source, ByteString byteString, long j) throws IOException {
        RandomAccessFile randomAccessFile = new RandomAccessFile(file, "rw");
        Relay relay = new Relay(randomAccessFile, source, 0L, byteString, j);
        randomAccessFile.setLength(0L);
        relay.writeHeader(PREFIX_DIRTY, -1L, -1L);
        return relay;
    }

    public static Relay read(File file) throws IOException {
        RandomAccessFile randomAccessFile = new RandomAccessFile(file, "rw");
        FileOperator fileOperator = new FileOperator(randomAccessFile.getChannel());
        Buffer buffer = new Buffer();
        fileOperator.read(0L, buffer, 32L);
        if (!buffer.readByteString(r2.size()).equals(PREFIX_CLEAN)) {
            throw new IOException("unreadable cache file");
        }
        long j = buffer.readLong();
        long j2 = buffer.readLong();
        Buffer buffer2 = new Buffer();
        fileOperator.read(j + 32, buffer2, j2);
        return new Relay(randomAccessFile, null, j, buffer2.readByteString(), 0L);
    }

    private void writeHeader(ByteString byteString, long j, long j2) throws IOException {
        Buffer buffer = new Buffer();
        buffer.write(byteString);
        buffer.writeLong(j);
        buffer.writeLong(j2);
        if (buffer.size() != 32) {
            throw new IllegalArgumentException();
        }
        new FileOperator(this.file.getChannel()).write(0L, buffer, 32L);
    }

    private void writeMetadata(long j) throws IOException {
        Buffer buffer = new Buffer();
        buffer.write(this.metadata);
        new FileOperator(this.file.getChannel()).write(32 + j, buffer, this.metadata.size());
    }

    void commit(long j) throws IOException {
        writeMetadata(j);
        this.file.getChannel().force(false);
        writeHeader(PREFIX_CLEAN, j, this.metadata.size());
        this.file.getChannel().force(false);
        synchronized (this) {
            this.complete = true;
        }
        Util.closeQuietly(this.upstream);
        this.upstream = null;
    }

    boolean isClosed() {
        return this.file == null;
    }

    public ByteString metadata() {
        return this.metadata;
    }

    public Source newSource() {
        synchronized (this) {
            if (this.file == null) {
                return null;
            }
            this.sourceCount++;
            return new RelaySource();
        }
    }

    class RelaySource implements Source {
        private FileOperator fileOperator;
        private long sourcePos;
        private final Timeout timeout = new Timeout();

        RelaySource() {
            this.fileOperator = new FileOperator(Relay.this.file.getChannel());
        }

        @Override // okio.Source
        public long read(Buffer buffer, long j) throws IOException {
            if (this.fileOperator == null) {
                throw new IllegalStateException("closed");
            }
            synchronized (Relay.this) {
                while (true) {
                    long j2 = this.sourcePos;
                    long j3 = Relay.this.upstreamPos;
                    if (j2 == j3) {
                        if (Relay.this.complete) {
                            return -1L;
                        }
                        if (Relay.this.upstreamReader != null) {
                            this.timeout.waitUntilNotified(Relay.this);
                        } else {
                            Relay.this.upstreamReader = Thread.currentThread();
                            try {
                                long j4 = Relay.this.upstream.read(Relay.this.upstreamBuffer, Relay.this.bufferMaxSize);
                                if (j4 == -1) {
                                    Relay.this.commit(j3);
                                    synchronized (Relay.this) {
                                        Relay.this.upstreamReader = null;
                                        Relay.this.notifyAll();
                                    }
                                    return -1L;
                                }
                                long jMin = Math.min(j4, j);
                                Relay.this.upstreamBuffer.copyTo(buffer, 0L, jMin);
                                this.sourcePos += jMin;
                                this.fileOperator.write(j3 + 32, Relay.this.upstreamBuffer.clone(), j4);
                                synchronized (Relay.this) {
                                    Relay.this.buffer.write(Relay.this.upstreamBuffer, j4);
                                    if (Relay.this.buffer.size() > Relay.this.bufferMaxSize) {
                                        Relay.this.buffer.skip(Relay.this.buffer.size() - Relay.this.bufferMaxSize);
                                    }
                                    Relay.this.upstreamPos += j4;
                                }
                                synchronized (Relay.this) {
                                    Relay.this.upstreamReader = null;
                                    Relay.this.notifyAll();
                                }
                                return jMin;
                            } catch (Throwable th) {
                                synchronized (Relay.this) {
                                    Relay.this.upstreamReader = null;
                                    Relay.this.notifyAll();
                                    throw th;
                                }
                            }
                        }
                    } else {
                        long size = j3 - Relay.this.buffer.size();
                        long j5 = this.sourcePos;
                        if (j5 >= size) {
                            long jMin2 = Math.min(j, j3 - j5);
                            Relay.this.buffer.copyTo(buffer, this.sourcePos - size, jMin2);
                            this.sourcePos += jMin2;
                            return jMin2;
                        }
                        long jMin3 = Math.min(j, j3 - j5);
                        this.fileOperator.read(this.sourcePos + 32, buffer, jMin3);
                        this.sourcePos += jMin3;
                        return jMin3;
                    }
                }
            }
        }

        @Override // okio.Source
        public Timeout timeout() {
            return this.timeout;
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() throws IOException {
            if (this.fileOperator == null) {
                return;
            }
            RandomAccessFile randomAccessFile = null;
            this.fileOperator = null;
            synchronized (Relay.this) {
                Relay relay = Relay.this;
                relay.sourceCount--;
                if (Relay.this.sourceCount == 0) {
                    RandomAccessFile randomAccessFile2 = Relay.this.file;
                    Relay.this.file = null;
                    randomAccessFile = randomAccessFile2;
                }
            }
            if (randomAccessFile != null) {
                Util.closeQuietly(randomAccessFile);
            }
        }
    }
}

