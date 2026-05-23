package org.apache.commons.io;

import java.io.EOFException;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import kotlin.UByte;
public class EndianUtils {
    public static int swapInteger(int i) {
        return ((i & 255) << 24) + (((i >> 8) & 255) << 16) + (((i >> 16) & 255) << 8) + ((i >> 24) & 255);
    }

    public static long swapLong(long j) {
        return ((j & 255) << 56) + (((j >> 8) & 255) << 48) + (((j >> 16) & 255) << 40) + (((j >> 24) & 255) << 32) + (((j >> 32) & 255) << 24) + (((j >> 40) & 255) << 16) + (((j >> 48) & 255) << 8) + ((j >> 56) & 255);
    }

    public static short swapShort(short s) {
        return (short) (((s & 255) << 8) + ((s >> 8) & 255));
    }

    public static float swapFloat(float f) {
        return Float.intBitsToFloat(swapInteger(Float.floatToIntBits(f)));
    }

    public static double swapDouble(double d) {
        return Double.longBitsToDouble(swapLong(Double.doubleToLongBits(d)));
    }

    public static void writeSwappedShort(byte[] bArr, int i, short s) {
        bArr[i] = (byte) (s & 255);
        bArr[i + 1] = (byte) ((s >> 8) & 255);
    }

    public static short readSwappedShort(byte[] bArr, int i) {
        return (short) ((bArr[i] & UByte.MAX_VALUE) + ((bArr[i + 1] & UByte.MAX_VALUE) << 8));
    }

    public static int readSwappedUnsignedShort(byte[] bArr, int i) {
        return (bArr[i] & UByte.MAX_VALUE) + ((bArr[i + 1] & UByte.MAX_VALUE) << 8);
    }

    public static void writeSwappedInteger(byte[] bArr, int i, int i2) {
        bArr[i] = (byte) (i2 & 255);
        bArr[i + 1] = (byte) ((i2 >> 8) & 255);
        bArr[i + 2] = (byte) ((i2 >> 16) & 255);
        bArr[i + 3] = (byte) ((i2 >> 24) & 255);
    }

    public static int readSwappedInteger(byte[] bArr, int i) {
        return (bArr[i] & UByte.MAX_VALUE) + ((bArr[i + 1] & UByte.MAX_VALUE) << 8) + ((bArr[i + 2] & UByte.MAX_VALUE) << 16) + ((bArr[i + 3] & UByte.MAX_VALUE) << 24);
    }

    public static long readSwappedUnsignedInteger(byte[] bArr, int i) {
        return (((long) (bArr[i + 3] & UByte.MAX_VALUE)) << 24) + (((long) ((bArr[i] & UByte.MAX_VALUE) + ((bArr[i + 1] & UByte.MAX_VALUE) << 8) + ((bArr[i + 2] & UByte.MAX_VALUE) << 16))) & 4294967295L);
    }

    public static void writeSwappedLong(byte[] bArr, int i, long j) {
        bArr[i] = (byte) (j & 255);
        bArr[i + 1] = (byte) ((j >> 8) & 255);
        bArr[i + 2] = (byte) ((j >> 16) & 255);
        bArr[i + 3] = (byte) ((j >> 24) & 255);
        bArr[i + 4] = (byte) ((j >> 32) & 255);
        bArr[i + 5] = (byte) ((j >> 40) & 255);
        bArr[i + 6] = (byte) ((j >> 48) & 255);
        bArr[i + 7] = (byte) ((j >> 56) & 255);
    }

    public static long readSwappedLong(byte[] bArr, int i) {
        return (((long) ((((bArr[i + 4] & UByte.MAX_VALUE) + ((bArr[i + 5] & UByte.MAX_VALUE) << 8)) + ((bArr[i + 6] & UByte.MAX_VALUE) << 16)) + ((bArr[i + 7] & UByte.MAX_VALUE) << 24))) << 32) + (((long) ((bArr[i] & UByte.MAX_VALUE) + ((bArr[i + 1] & UByte.MAX_VALUE) << 8) + ((bArr[i + 2] & UByte.MAX_VALUE) << 16) + ((bArr[i + 3] & UByte.MAX_VALUE) << 24))) & 4294967295L);
    }

    public static void writeSwappedFloat(byte[] bArr, int i, float f) {
        writeSwappedInteger(bArr, i, Float.floatToIntBits(f));
    }

    public static float readSwappedFloat(byte[] bArr, int i) {
        return Float.intBitsToFloat(readSwappedInteger(bArr, i));
    }

    public static void writeSwappedDouble(byte[] bArr, int i, double d) {
        writeSwappedLong(bArr, i, Double.doubleToLongBits(d));
    }

    public static double readSwappedDouble(byte[] bArr, int i) {
        return Double.longBitsToDouble(readSwappedLong(bArr, i));
    }

    public static void writeSwappedShort(OutputStream outputStream, short s) throws IOException {
        outputStream.write((byte) (s & 255));
        outputStream.write((byte) ((s >> 8) & 255));
    }

    public static short readSwappedShort(InputStream inputStream) throws IOException {
        return (short) ((read(inputStream) & 255) + ((read(inputStream) & 255) << 8));
    }

    public static int readSwappedUnsignedShort(InputStream inputStream) throws IOException {
        return (read(inputStream) & 255) + ((read(inputStream) & 255) << 8);
    }

    public static void writeSwappedInteger(OutputStream outputStream, int i) throws IOException {
        outputStream.write((byte) (i & 255));
        outputStream.write((byte) ((i >> 8) & 255));
        outputStream.write((byte) ((i >> 16) & 255));
        outputStream.write((byte) ((i >> 24) & 255));
    }

    public static int readSwappedInteger(InputStream inputStream) throws IOException {
        return (read(inputStream) & 255) + ((read(inputStream) & 255) << 8) + ((read(inputStream) & 255) << 16) + ((read(inputStream) & 255) << 24);
    }

    public static long readSwappedUnsignedInteger(InputStream inputStream) throws IOException {
        return (((long) (read(inputStream) & 255)) << 24) + (((long) ((read(inputStream) & 255) + ((read(inputStream) & 255) << 8) + ((read(inputStream) & 255) << 16))) & 4294967295L);
    }

    public static void writeSwappedLong(OutputStream outputStream, long j) throws IOException {
        outputStream.write((byte) (j & 255));
        outputStream.write((byte) ((j >> 8) & 255));
        outputStream.write((byte) ((j >> 16) & 255));
        outputStream.write((byte) ((j >> 24) & 255));
        outputStream.write((byte) ((j >> 32) & 255));
        outputStream.write((byte) ((j >> 40) & 255));
        outputStream.write((byte) ((j >> 48) & 255));
        outputStream.write((byte) ((j >> 56) & 255));
    }

    public static long readSwappedLong(InputStream inputStream) throws IOException {
        byte[] bArr = new byte[8];
        for (int i = 0; i < 8; i++) {
            bArr[i] = (byte) read(inputStream);
        }
        return readSwappedLong(bArr, 0);
    }

    public static void writeSwappedFloat(OutputStream outputStream, float f) throws IOException {
        writeSwappedInteger(outputStream, Float.floatToIntBits(f));
    }

    public static float readSwappedFloat(InputStream inputStream) throws IOException {
        return Float.intBitsToFloat(readSwappedInteger(inputStream));
    }

    public static void writeSwappedDouble(OutputStream outputStream, double d) throws IOException {
        writeSwappedLong(outputStream, Double.doubleToLongBits(d));
    }

    public static double readSwappedDouble(InputStream inputStream) throws IOException {
        return Double.longBitsToDouble(readSwappedLong(inputStream));
    }

    private static int read(InputStream inputStream) throws IOException {
        int i = inputStream.read();
        if (-1 != i) {
            return i;
        }
        throw new EOFException("Unexpected EOF reached");
    }
}

