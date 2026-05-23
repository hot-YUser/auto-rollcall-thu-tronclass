package org.apache.commons.io;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.Reader;
import java.io.StringReader;
import java.io.Writer;
@Deprecated
public class CopyUtils {
    private static final int DEFAULT_BUFFER_SIZE = 4096;

    public static void copy(byte[] bArr, OutputStream outputStream) throws IOException {
        outputStream.write(bArr);
    }

    public static void copy(byte[] bArr, Writer writer) throws IOException {
        copy(new ByteArrayInputStream(bArr), writer);
    }

    public static void copy(byte[] bArr, Writer writer, String str) throws IOException {
        copy(new ByteArrayInputStream(bArr), writer, str);
    }

    public static int copy(InputStream inputStream, OutputStream outputStream) throws IOException {
        byte[] bArr = new byte[4096];
        int i = 0;
        while (true) {
            int i2 = inputStream.read(bArr);
            if (-1 == i2) {
                return i;
            }
            outputStream.write(bArr, 0, i2);
            i += i2;
        }
    }

    public static int copy(Reader reader, Writer writer) throws IOException {
        char[] cArr = new char[4096];
        int i = 0;
        while (true) {
            int i2 = reader.read(cArr);
            if (-1 == i2) {
                return i;
            }
            writer.write(cArr, 0, i2);
            i += i2;
        }
    }

    public static void copy(InputStream inputStream, Writer writer) throws IOException {
        copy(new InputStreamReader(inputStream), writer);
    }

    public static void copy(InputStream inputStream, Writer writer, String str) throws IOException {
        copy(new InputStreamReader(inputStream, str), writer);
    }

    public static void copy(Reader reader, OutputStream outputStream) throws IOException {
        OutputStreamWriter outputStreamWriter = new OutputStreamWriter(outputStream);
        copy(reader, outputStreamWriter);
        outputStreamWriter.flush();
    }

    public static void copy(String str, OutputStream outputStream) throws IOException {
        StringReader stringReader = new StringReader(str);
        OutputStreamWriter outputStreamWriter = new OutputStreamWriter(outputStream);
        copy(stringReader, outputStreamWriter);
        outputStreamWriter.flush();
    }

    public static void copy(String str, Writer writer) throws IOException {
        writer.write(str);
    }
}

