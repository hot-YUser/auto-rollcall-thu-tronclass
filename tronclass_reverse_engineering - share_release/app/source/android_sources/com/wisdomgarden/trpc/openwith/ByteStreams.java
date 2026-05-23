package com.wisdomgarden.trpc.openwith;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
public final class ByteStreams {
    public static <T> T checkNotNull(T t) {
        t.getClass();
        return t;
    }

    public static void checkArgument(boolean z) {
        if (!z) {
            throw new IllegalArgumentException();
        }
    }

    public static int checkPositionIndex(int i, int i2) {
        if (i < 0 || i > i2) {
            throw new IndexOutOfBoundsException("invalid index");
        }
        return i;
    }

    static byte[] createBuffer() {
        return new byte[8192];
    }

    private ByteStreams() {
    }

    public static long copy(InputStream inputStream, OutputStream outputStream) throws IOException {
        checkNotNull(inputStream);
        checkNotNull(outputStream);
        byte[] bArrCreateBuffer = createBuffer();
        long j = 0;
        while (true) {
            int i = inputStream.read(bArrCreateBuffer);
            if (i == -1) {
                return j;
            }
            outputStream.write(bArrCreateBuffer, 0, i);
            j += (long) i;
        }
    }

    public static byte[] toByteArray(InputStream inputStream) throws IOException {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream(Math.max(32, inputStream.available()));
        copy(inputStream, byteArrayOutputStream);
        return byteArrayOutputStream.toByteArray();
    }
}

