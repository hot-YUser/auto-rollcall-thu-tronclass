package com.google.android.gms.common.internal.safeparcel;

import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.SparseArray;
import android.util.SparseBooleanArray;
import android.util.SparseIntArray;
import android.util.SparseLongArray;
import androidx.core.internal.view.SupportMenu;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
public class SafeParcelReader {

    public static class ParseException extends RuntimeException {
        /* high-level source view WARN: Illegal instructions before constructor call */
        public ParseException(String str, Parcel parcel) {
            int iDataPosition = parcel.dataPosition();
            super(new StringBuilder(String.valueOf(str).length() + 41).append(str).append(" Parcel: pos=").append(iDataPosition).append(" size=").append(parcel.dataSize()).toString());
        }
    }

    private SafeParcelReader() {
    }

    public static int getFieldId(int i) {
        return i & 65535;
    }

    public static int readHeader(Parcel parcel) {
        return parcel.readInt();
    }

    public static int readSize(Parcel parcel, int i) {
        return (i & SupportMenu.CATEGORY_MASK) != -65536 ? (i >> 16) & 65535 : parcel.readInt();
    }

    public static void skipUnknownField(Parcel parcel, int i) {
        parcel.setDataPosition(parcel.dataPosition() + readSize(parcel, i));
    }

    private static void zza(Parcel parcel, int i, int i2) {
        int size = readSize(parcel, i);
        if (size == i2) {
            return;
        }
        String hexString = Integer.toHexString(size);
        throw new ParseException(new StringBuilder(String.valueOf(hexString).length() + 46).append("Expected size ").append(i2).append(" got ").append(size).append(" (0x").append(hexString).append(")").toString(), parcel);
    }

    private static void zza(Parcel parcel, int i, int i2, int i3) {
        if (i2 == i3) {
            return;
        }
        String hexString = Integer.toHexString(i2);
        throw new ParseException(new StringBuilder(String.valueOf(hexString).length() + 46).append("Expected size ").append(i3).append(" got ").append(i2).append(" (0x").append(hexString).append(")").toString(), parcel);
    }

    public static int validateObjectHeader(Parcel parcel) {
        int header = readHeader(parcel);
        int size = readSize(parcel, header);
        int iDataPosition = parcel.dataPosition();
        if (getFieldId(header) != 20293) {
            String strValueOf = String.valueOf(Integer.toHexString(header));
            throw new ParseException(strValueOf.length() != 0 ? "Expected object header. Got 0x".concat(strValueOf) : new String("Expected object header. Got 0x"), parcel);
        }
        int i = size + iDataPosition;
        if (i < iDataPosition || i > parcel.dataSize()) {
            throw new ParseException(new StringBuilder(54).append("Size read is invalid start=").append(iDataPosition).append(" end=").append(i).toString(), parcel);
        }
        return i;
    }

    public static boolean readBoolean(Parcel parcel, int i) {
        zza(parcel, i, 4);
        return parcel.readInt() != 0;
    }

    public static Boolean readBooleanObject(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        if (size == 0) {
            return null;
        }
        zza(parcel, i, size, 4);
        return Boolean.valueOf(parcel.readInt() != 0);
    }

    public static byte readByte(Parcel parcel, int i) {
        zza(parcel, i, 4);
        return (byte) parcel.readInt();
    }

    public static char readChar(Parcel parcel, int i) {
        zza(parcel, i, 4);
        return (char) parcel.readInt();
    }

    public static short readShort(Parcel parcel, int i) {
        zza(parcel, i, 4);
        return (short) parcel.readInt();
    }

    public static int readInt(Parcel parcel, int i) {
        zza(parcel, i, 4);
        return parcel.readInt();
    }

    public static Integer readIntegerObject(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        if (size == 0) {
            return null;
        }
        zza(parcel, i, size, 4);
        return Integer.valueOf(parcel.readInt());
    }

    public static long readLong(Parcel parcel, int i) {
        zza(parcel, i, 8);
        return parcel.readLong();
    }

    public static Long readLongObject(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        if (size == 0) {
            return null;
        }
        zza(parcel, i, size, 8);
        return Long.valueOf(parcel.readLong());
    }

    public static BigInteger createBigInteger(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        byte[] bArrCreateByteArray = parcel.createByteArray();
        parcel.setDataPosition(iDataPosition + size);
        return new BigInteger(bArrCreateByteArray);
    }

    public static float readFloat(Parcel parcel, int i) {
        zza(parcel, i, 4);
        return parcel.readFloat();
    }

    public static Float readFloatObject(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        if (size == 0) {
            return null;
        }
        zza(parcel, i, size, 4);
        return Float.valueOf(parcel.readFloat());
    }

    public static double readDouble(Parcel parcel, int i) {
        zza(parcel, i, 8);
        return parcel.readDouble();
    }

    public static Double readDoubleObject(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        if (size == 0) {
            return null;
        }
        zza(parcel, i, size, 8);
        return Double.valueOf(parcel.readDouble());
    }

    public static BigDecimal createBigDecimal(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        byte[] bArrCreateByteArray = parcel.createByteArray();
        int i2 = parcel.readInt();
        parcel.setDataPosition(iDataPosition + size);
        return new BigDecimal(new BigInteger(bArrCreateByteArray), i2);
    }

    public static String createString(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        String string = parcel.readString();
        parcel.setDataPosition(iDataPosition + size);
        return string;
    }

    public static IBinder readIBinder(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        IBinder strongBinder = parcel.readStrongBinder();
        parcel.setDataPosition(iDataPosition + size);
        return strongBinder;
    }

    public static <T extends Parcelable> T createParcelable(Parcel parcel, int i, Parcelable.Creator<T> creator) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        T tCreateFromParcel = creator.createFromParcel(parcel);
        parcel.setDataPosition(iDataPosition + size);
        return tCreateFromParcel;
    }

    public static Bundle createBundle(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        Bundle bundle = parcel.readBundle();
        parcel.setDataPosition(iDataPosition + size);
        return bundle;
    }

    public static byte[] createByteArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        byte[] bArrCreateByteArray = parcel.createByteArray();
        parcel.setDataPosition(iDataPosition + size);
        return bArrCreateByteArray;
    }

    public static byte[][] createByteArrayArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        int i2 = parcel.readInt();
        byte[][] bArr = new byte[i2][];
        for (int i3 = 0; i3 < i2; i3++) {
            bArr[i3] = parcel.createByteArray();
        }
        parcel.setDataPosition(iDataPosition + size);
        return bArr;
    }

    public static boolean[] createBooleanArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        boolean[] zArrCreateBooleanArray = parcel.createBooleanArray();
        parcel.setDataPosition(iDataPosition + size);
        return zArrCreateBooleanArray;
    }

    public static char[] createCharArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        char[] cArrCreateCharArray = parcel.createCharArray();
        parcel.setDataPosition(iDataPosition + size);
        return cArrCreateCharArray;
    }

    public static int[] createIntArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        int[] iArrCreateIntArray = parcel.createIntArray();
        parcel.setDataPosition(iDataPosition + size);
        return iArrCreateIntArray;
    }

    public static long[] createLongArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        long[] jArrCreateLongArray = parcel.createLongArray();
        parcel.setDataPosition(iDataPosition + size);
        return jArrCreateLongArray;
    }

    public static BigInteger[] createBigIntegerArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        int i2 = parcel.readInt();
        BigInteger[] bigIntegerArr = new BigInteger[i2];
        for (int i3 = 0; i3 < i2; i3++) {
            bigIntegerArr[i3] = new BigInteger(parcel.createByteArray());
        }
        parcel.setDataPosition(iDataPosition + size);
        return bigIntegerArr;
    }

    public static float[] createFloatArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        float[] fArrCreateFloatArray = parcel.createFloatArray();
        parcel.setDataPosition(iDataPosition + size);
        return fArrCreateFloatArray;
    }

    public static double[] createDoubleArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        double[] dArrCreateDoubleArray = parcel.createDoubleArray();
        parcel.setDataPosition(iDataPosition + size);
        return dArrCreateDoubleArray;
    }

    public static BigDecimal[] createBigDecimalArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        int i2 = parcel.readInt();
        BigDecimal[] bigDecimalArr = new BigDecimal[i2];
        for (int i3 = 0; i3 < i2; i3++) {
            byte[] bArrCreateByteArray = parcel.createByteArray();
            bigDecimalArr[i3] = new BigDecimal(new BigInteger(bArrCreateByteArray), parcel.readInt());
        }
        parcel.setDataPosition(iDataPosition + size);
        return bigDecimalArr;
    }

    public static String[] createStringArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        String[] strArrCreateStringArray = parcel.createStringArray();
        parcel.setDataPosition(iDataPosition + size);
        return strArrCreateStringArray;
    }

    public static IBinder[] createIBinderArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        IBinder[] iBinderArrCreateBinderArray = parcel.createBinderArray();
        parcel.setDataPosition(iDataPosition + size);
        return iBinderArrCreateBinderArray;
    }

    public static ArrayList<Boolean> createBooleanList(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        ArrayList<Boolean> arrayList = new ArrayList<>();
        int i2 = parcel.readInt();
        for (int i3 = 0; i3 < i2; i3++) {
            arrayList.add(Boolean.valueOf(parcel.readInt() != 0));
        }
        parcel.setDataPosition(iDataPosition + size);
        return arrayList;
    }

    public static ArrayList<Integer> createIntegerList(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        ArrayList<Integer> arrayList = new ArrayList<>();
        int i2 = parcel.readInt();
        for (int i3 = 0; i3 < i2; i3++) {
            arrayList.add(Integer.valueOf(parcel.readInt()));
        }
        parcel.setDataPosition(iDataPosition + size);
        return arrayList;
    }

    public static SparseBooleanArray createSparseBooleanArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        SparseBooleanArray sparseBooleanArray = parcel.readSparseBooleanArray();
        parcel.setDataPosition(iDataPosition + size);
        return sparseBooleanArray;
    }

    public static SparseIntArray createSparseIntArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        SparseIntArray sparseIntArray = new SparseIntArray();
        int i2 = parcel.readInt();
        for (int i3 = 0; i3 < i2; i3++) {
            sparseIntArray.append(parcel.readInt(), parcel.readInt());
        }
        parcel.setDataPosition(iDataPosition + size);
        return sparseIntArray;
    }

    public static SparseArray<Float> createFloatSparseArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        SparseArray<Float> sparseArray = new SparseArray<>();
        int i2 = parcel.readInt();
        for (int i3 = 0; i3 < i2; i3++) {
            sparseArray.append(parcel.readInt(), Float.valueOf(parcel.readFloat()));
        }
        parcel.setDataPosition(iDataPosition + size);
        return sparseArray;
    }

    public static SparseArray<Double> createDoubleSparseArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        SparseArray<Double> sparseArray = new SparseArray<>();
        int i2 = parcel.readInt();
        for (int i3 = 0; i3 < i2; i3++) {
            sparseArray.append(parcel.readInt(), Double.valueOf(parcel.readDouble()));
        }
        parcel.setDataPosition(iDataPosition + size);
        return sparseArray;
    }

    public static SparseLongArray createSparseLongArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        SparseLongArray sparseLongArray = new SparseLongArray();
        int i2 = parcel.readInt();
        for (int i3 = 0; i3 < i2; i3++) {
            sparseLongArray.append(parcel.readInt(), parcel.readLong());
        }
        parcel.setDataPosition(iDataPosition + size);
        return sparseLongArray;
    }

    public static SparseArray<String> createStringSparseArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        SparseArray<String> sparseArray = new SparseArray<>();
        int i2 = parcel.readInt();
        for (int i3 = 0; i3 < i2; i3++) {
            sparseArray.append(parcel.readInt(), parcel.readString());
        }
        parcel.setDataPosition(iDataPosition + size);
        return sparseArray;
    }

    public static SparseArray<Parcel> createParcelSparseArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        int i2 = parcel.readInt();
        SparseArray<Parcel> sparseArray = new SparseArray<>();
        for (int i3 = 0; i3 < i2; i3++) {
            int i4 = parcel.readInt();
            int i5 = parcel.readInt();
            if (i5 != 0) {
                int iDataPosition2 = parcel.dataPosition();
                Parcel parcelObtain = Parcel.obtain();
                parcelObtain.appendFrom(parcel, iDataPosition2, i5);
                sparseArray.append(i4, parcelObtain);
                parcel.setDataPosition(iDataPosition2 + i5);
            } else {
                sparseArray.append(i4, null);
            }
        }
        parcel.setDataPosition(iDataPosition + size);
        return sparseArray;
    }

    public static <T> SparseArray<T> createTypedSparseArray(Parcel parcel, int i, Parcelable.Creator<T> creator) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        int i2 = parcel.readInt();
        SparseArray<T> sparseArray = new SparseArray<>();
        for (int i3 = 0; i3 < i2; i3++) {
            sparseArray.append(parcel.readInt(), parcel.readInt() != 0 ? creator.createFromParcel(parcel) : null);
        }
        parcel.setDataPosition(iDataPosition + size);
        return sparseArray;
    }

    public static SparseArray<IBinder> createIBinderSparseArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        int i2 = parcel.readInt();
        SparseArray<IBinder> sparseArray = new SparseArray<>(i2);
        for (int i3 = 0; i3 < i2; i3++) {
            sparseArray.append(parcel.readInt(), parcel.readStrongBinder());
        }
        parcel.setDataPosition(iDataPosition + size);
        return sparseArray;
    }

    public static SparseArray<byte[]> createByteArraySparseArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        int i2 = parcel.readInt();
        SparseArray<byte[]> sparseArray = new SparseArray<>(i2);
        for (int i3 = 0; i3 < i2; i3++) {
            sparseArray.append(parcel.readInt(), parcel.createByteArray());
        }
        parcel.setDataPosition(iDataPosition + size);
        return sparseArray;
    }

    public static ArrayList<Long> createLongList(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        ArrayList<Long> arrayList = new ArrayList<>();
        int i2 = parcel.readInt();
        for (int i3 = 0; i3 < i2; i3++) {
            arrayList.add(Long.valueOf(parcel.readLong()));
        }
        parcel.setDataPosition(iDataPosition + size);
        return arrayList;
    }

    public static ArrayList<Float> createFloatList(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        ArrayList<Float> arrayList = new ArrayList<>();
        int i2 = parcel.readInt();
        for (int i3 = 0; i3 < i2; i3++) {
            arrayList.add(Float.valueOf(parcel.readFloat()));
        }
        parcel.setDataPosition(iDataPosition + size);
        return arrayList;
    }

    public static ArrayList<Double> createDoubleList(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        ArrayList<Double> arrayList = new ArrayList<>();
        int i2 = parcel.readInt();
        for (int i3 = 0; i3 < i2; i3++) {
            arrayList.add(Double.valueOf(parcel.readDouble()));
        }
        parcel.setDataPosition(iDataPosition + size);
        return arrayList;
    }

    public static ArrayList<String> createStringList(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        ArrayList<String> arrayListCreateStringArrayList = parcel.createStringArrayList();
        parcel.setDataPosition(iDataPosition + size);
        return arrayListCreateStringArrayList;
    }

    public static ArrayList<IBinder> createIBinderList(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        ArrayList<IBinder> arrayListCreateBinderArrayList = parcel.createBinderArrayList();
        parcel.setDataPosition(iDataPosition + size);
        return arrayListCreateBinderArrayList;
    }

    public static <T> T[] createTypedArray(Parcel parcel, int i, Parcelable.Creator<T> creator) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        T[] tArr = (T[]) parcel.createTypedArray(creator);
        parcel.setDataPosition(iDataPosition + size);
        return tArr;
    }

    public static <T> ArrayList<T> createTypedList(Parcel parcel, int i, Parcelable.Creator<T> creator) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        ArrayList<T> arrayListCreateTypedArrayList = parcel.createTypedArrayList(creator);
        parcel.setDataPosition(iDataPosition + size);
        return arrayListCreateTypedArrayList;
    }

    public static Parcel createParcel(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        Parcel parcelObtain = Parcel.obtain();
        parcelObtain.appendFrom(parcel, iDataPosition, size);
        parcel.setDataPosition(iDataPosition + size);
        return parcelObtain;
    }

    public static Parcel[] createParcelArray(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        int i2 = parcel.readInt();
        Parcel[] parcelArr = new Parcel[i2];
        for (int i3 = 0; i3 < i2; i3++) {
            int i4 = parcel.readInt();
            if (i4 != 0) {
                int iDataPosition2 = parcel.dataPosition();
                Parcel parcelObtain = Parcel.obtain();
                parcelObtain.appendFrom(parcel, iDataPosition2, i4);
                parcelArr[i3] = parcelObtain;
                parcel.setDataPosition(iDataPosition2 + i4);
            } else {
                parcelArr[i3] = null;
            }
        }
        parcel.setDataPosition(iDataPosition + size);
        return parcelArr;
    }

    public static ArrayList<Parcel> createParcelList(Parcel parcel, int i) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return null;
        }
        int i2 = parcel.readInt();
        ArrayList<Parcel> arrayList = new ArrayList<>();
        for (int i3 = 0; i3 < i2; i3++) {
            int i4 = parcel.readInt();
            if (i4 != 0) {
                int iDataPosition2 = parcel.dataPosition();
                Parcel parcelObtain = Parcel.obtain();
                parcelObtain.appendFrom(parcel, iDataPosition2, i4);
                arrayList.add(parcelObtain);
                parcel.setDataPosition(iDataPosition2 + i4);
            } else {
                arrayList.add(null);
            }
        }
        parcel.setDataPosition(iDataPosition + size);
        return arrayList;
    }

    public static void readList(Parcel parcel, int i, List list, ClassLoader classLoader) {
        int size = readSize(parcel, i);
        int iDataPosition = parcel.dataPosition();
        if (size == 0) {
            return;
        }
        parcel.readList(list, classLoader);
        parcel.setDataPosition(iDataPosition + size);
    }

    public static void ensureAtEnd(Parcel parcel, int i) {
        if (parcel.dataPosition() != i) {
            throw new ParseException(new StringBuilder(37).append("Overread allowed size end=").append(i).toString(), parcel);
        }
    }
}

