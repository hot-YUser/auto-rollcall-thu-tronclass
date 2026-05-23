package org.apache.commons.io.input;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.RandomAccessFile;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
public class Tailer implements Runnable {
    private static final int DEFAULT_BUFSIZE = 4096;
    private static final int DEFAULT_DELAY_MILLIS = 1000;
    private static final String RAF_MODE = "r";
    private final long delayMillis;
    private final boolean end;
    private final File file;
    private final byte[] inbuf;
    private final TailerListener listener;
    private final boolean reOpen;
    private volatile boolean run;

    public Tailer(File file, TailerListener tailerListener) {
        this(file, tailerListener, 1000L);
    }

    public Tailer(File file, TailerListener tailerListener, long j) {
        this(file, tailerListener, j, false);
    }

    public Tailer(File file, TailerListener tailerListener, long j, boolean z) {
        this(file, tailerListener, j, z, 4096);
    }

    public Tailer(File file, TailerListener tailerListener, long j, boolean z, boolean z2) {
        this(file, tailerListener, j, z, z2, 4096);
    }

    public Tailer(File file, TailerListener tailerListener, long j, boolean z, int i) {
        this(file, tailerListener, j, z, false, i);
    }

    public Tailer(File file, TailerListener tailerListener, long j, boolean z, boolean z2, int i) {
        this.run = true;
        this.file = file;
        this.delayMillis = j;
        this.end = z;
        this.inbuf = new byte[i];
        this.listener = tailerListener;
        tailerListener.init(this);
        this.reOpen = z2;
    }

    public static Tailer create(File file, TailerListener tailerListener, long j, boolean z, int i) {
        Tailer tailer = new Tailer(file, tailerListener, j, z, i);
        Thread thread = new Thread(tailer);
        thread.setDaemon(true);
        thread.start();
        return tailer;
    }

    public static Tailer create(File file, TailerListener tailerListener, long j, boolean z, boolean z2, int i) {
        Tailer tailer = new Tailer(file, tailerListener, j, z, z2, i);
        Thread thread = new Thread(tailer);
        thread.setDaemon(true);
        thread.start();
        return tailer;
    }

    public static Tailer create(File file, TailerListener tailerListener, long j, boolean z) {
        return create(file, tailerListener, j, z, 4096);
    }

    public static Tailer create(File file, TailerListener tailerListener, long j, boolean z, boolean z2) {
        return create(file, tailerListener, j, z, z2, 4096);
    }

    public static Tailer create(File file, TailerListener tailerListener, long j) {
        return create(file, tailerListener, j, false);
    }

    public static Tailer create(File file, TailerListener tailerListener) {
        return create(file, tailerListener, 1000L, false);
    }

    public File getFile() {
        return this.file;
    }

    public long getDelay() {
        return this.delayMillis;
    }

    /* high-level source view WARN: Can't wrap try/catch for region: R(9:80|(1:34)(7:(1:37)|38|(1:40)|62|41|42|(1:87)(5:84|46|47|26|88))|35|38|(0)|62|41|42|(3:82|44|87)(1:86)) */
    /* high-level source view WARN: Removed duplicated region for block: B:40:0x008c A[Catch: all -> 0x00a7, Exception -> 0x00a9, TRY_LEAVE, TryCatch #3 {Exception -> 0x00a9, blocks: (B:3:0x0005, B:7:0x000d, B:11:0x001d, B:13:0x0023, B:15:0x0027, B:17:0x0030, B:9:0x0016, B:18:0x0038, B:20:0x003c, B:22:0x004c, B:23:0x0051, B:32:0x0066, B:34:0x006e, B:38:0x0088, B:40:0x008c, B:41:0x008f, B:42:0x0094, B:44:0x0098, B:46:0x009c, B:37:0x007c), top: B:66:0x0005 }] */
    @Override // java.lang.Runnable
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public void run() throws Throwable {
        RandomAccessFile randomAccessFile;
        long lines;
        long jCurrentTimeMillis;
        RandomAccessFile randomAccessFile2 = null;
        long jCurrentTimeMillis2 = 0;
        long length = 0;
        while (this.run && randomAccessFile2 == null) {
            try {
                try {
                    try {
                        randomAccessFile2 = new RandomAccessFile(this.file, RAF_MODE);
                    } catch (FileNotFoundException unused) {
                        this.listener.fileNotFound();
                    }
                    if (randomAccessFile2 == null) {
                        try {
                            Thread.sleep(this.delayMillis);
                        } catch (InterruptedException unused2) {
                        }
                    } else {
                        length = this.end ? this.file.length() : 0L;
                        jCurrentTimeMillis2 = System.currentTimeMillis();
                        randomAccessFile2.seek(length);
                    }
                } catch (Exception e) {
                    e = e;
                }
            } catch (Throwable th) {
                th = th;
            }
        }
        while (this.run) {
            boolean zIsFileNewer = FileUtils.isFileNewer(this.file, jCurrentTimeMillis2);
            long length2 = this.file.length();
            if (length2 < length) {
                this.listener.fileRotated();
                try {
                    randomAccessFile = new RandomAccessFile(this.file, RAF_MODE);
                    try {
                        try {
                            IOUtils.closeQuietly(randomAccessFile2);
                            length = 0;
                            randomAccessFile2 = randomAccessFile;
                        } catch (FileNotFoundException unused3) {
                            length = 0;
                            randomAccessFile2 = randomAccessFile;
                            this.listener.fileNotFound();
                        }
                    } catch (Exception e2) {
                        e = e2;
                        randomAccessFile2 = randomAccessFile;
                        this.listener.handle(e);
                        IOUtils.closeQuietly(randomAccessFile2);
                    } catch (Throwable th2) {
                        th = th2;
                        randomAccessFile2 = randomAccessFile;
                        IOUtils.closeQuietly(randomAccessFile2);
                        throw th;
                    }
                } catch (FileNotFoundException unused4) {
                }
            } else {
                if (length2 > length) {
                    lines = readLines(randomAccessFile2);
                    jCurrentTimeMillis = System.currentTimeMillis();
                } else {
                    if (zIsFileNewer) {
                        randomAccessFile2.seek(0L);
                        lines = readLines(randomAccessFile2);
                        jCurrentTimeMillis = System.currentTimeMillis();
                    }
                    if (this.reOpen) {
                        IOUtils.closeQuietly(randomAccessFile2);
                    }
                    Thread.sleep(this.delayMillis);
                    if (!this.run && this.reOpen) {
                        randomAccessFile = new RandomAccessFile(this.file, RAF_MODE);
                        randomAccessFile.seek(length);
                        randomAccessFile2 = randomAccessFile;
                    }
                }
                long j = lines;
                jCurrentTimeMillis2 = jCurrentTimeMillis;
                length = j;
                if (this.reOpen) {
                }
                Thread.sleep(this.delayMillis);
                if (!this.run) {
                }
            }
        }
        IOUtils.closeQuietly(randomAccessFile2);
    }

    public void stop() {
        this.run = false;
    }

    private long readLines(RandomAccessFile randomAccessFile) throws IOException {
        int i;
        StringBuilder sb = new StringBuilder();
        long filePointer = randomAccessFile.getFilePointer();
        long filePointer2 = filePointer;
        boolean z = false;
        while (this.run && (i = randomAccessFile.read(this.inbuf)) != -1) {
            for (int i2 = 0; i2 < i; i2++) {
                byte b = this.inbuf[i2];
                if (b == 10) {
                    this.listener.handle(sb.toString());
                    sb.setLength(0);
                    filePointer = ((long) i2) + filePointer2 + 1;
                    z = false;
                } else if (b != 13) {
                    if (z) {
                        this.listener.handle(sb.toString());
                        sb.setLength(0);
                        filePointer = ((long) i2) + filePointer2 + 1;
                        z = false;
                    }
                    sb.append((char) b);
                } else {
                    if (z) {
                        sb.append('\r');
                    }
                    z = true;
                }
            }
            filePointer2 = randomAccessFile.getFilePointer();
        }
        randomAccessFile.seek(filePointer);
        return filePointer;
    }
}

