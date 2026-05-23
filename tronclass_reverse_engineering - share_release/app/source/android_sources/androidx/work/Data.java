package androidx.work;

import android.util.Log;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
public final class Data {
    public static final int MAX_DATA_BYTES = 10240;
    Map<String, Object> mValues;
    private static final String TAG = Logger.tagWithPrefix("Data");
    public static final Data EMPTY = new Builder().build();

    Data() {
    }

    public Data(Data other) {
        this.mValues = new HashMap(other.mValues);
    }

    public Data(Map<String, ?> values) {
        this.mValues = new HashMap(values);
    }

    public boolean getBoolean(String key, boolean defaultValue) {
        Object obj = this.mValues.get(key);
        return obj instanceof Boolean ? ((Boolean) obj).booleanValue() : defaultValue;
    }

    public boolean[] getBooleanArray(String key) {
        Object obj = this.mValues.get(key);
        if (obj instanceof Boolean[]) {
            return convertToPrimitiveArray((Boolean[]) obj);
        }
        return null;
    }

    public byte getByte(String key, byte defaultValue) {
        Object obj = this.mValues.get(key);
        return obj instanceof Byte ? ((Byte) obj).byteValue() : defaultValue;
    }

    public byte[] getByteArray(String key) {
        Object obj = this.mValues.get(key);
        if (obj instanceof Byte[]) {
            return convertToPrimitiveArray((Byte[]) obj);
        }
        return null;
    }

    public int getInt(String key, int defaultValue) {
        Object obj = this.mValues.get(key);
        return obj instanceof Integer ? ((Integer) obj).intValue() : defaultValue;
    }

    public int[] getIntArray(String key) {
        Object obj = this.mValues.get(key);
        if (obj instanceof Integer[]) {
            return convertToPrimitiveArray((Integer[]) obj);
        }
        return null;
    }

    public long getLong(String key, long defaultValue) {
        Object obj = this.mValues.get(key);
        return obj instanceof Long ? ((Long) obj).longValue() : defaultValue;
    }

    public long[] getLongArray(String key) {
        Object obj = this.mValues.get(key);
        if (obj instanceof Long[]) {
            return convertToPrimitiveArray((Long[]) obj);
        }
        return null;
    }

    public float getFloat(String key, float defaultValue) {
        Object obj = this.mValues.get(key);
        return obj instanceof Float ? ((Float) obj).floatValue() : defaultValue;
    }

    public float[] getFloatArray(String key) {
        Object obj = this.mValues.get(key);
        if (obj instanceof Float[]) {
            return convertToPrimitiveArray((Float[]) obj);
        }
        return null;
    }

    public double getDouble(String key, double defaultValue) {
        Object obj = this.mValues.get(key);
        return obj instanceof Double ? ((Double) obj).doubleValue() : defaultValue;
    }

    public double[] getDoubleArray(String key) {
        Object obj = this.mValues.get(key);
        if (obj instanceof Double[]) {
            return convertToPrimitiveArray((Double[]) obj);
        }
        return null;
    }

    public String getString(String key) {
        Object obj = this.mValues.get(key);
        if (obj instanceof String) {
            return (String) obj;
        }
        return null;
    }

    public String[] getStringArray(String key) {
        Object obj = this.mValues.get(key);
        if (obj instanceof String[]) {
            return (String[]) obj;
        }
        return null;
    }

    public Map<String, Object> getKeyValueMap() {
        return Collections.unmodifiableMap(this.mValues);
    }

    public byte[] toByteArray() {
        return toByteArrayInternal(this);
    }

    public <T> boolean hasKeyWithValueOfType(String key, Class<T> klass) {
        Object obj = this.mValues.get(key);
        return obj != null && klass.isAssignableFrom(obj.getClass());
    }

    public int size() {
        return this.mValues.size();
    }

    public static byte[] toByteArrayInternal(Data data) throws Throwable {
        ObjectOutputStream objectOutputStream;
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        ObjectOutputStream objectOutputStream2 = null;
        try {
            try {
                objectOutputStream = new ObjectOutputStream(byteArrayOutputStream);
            } catch (Throwable th) {
                th = th;
            }
        } catch (IOException e) {
            e = e;
        }
        try {
            objectOutputStream.writeInt(data.size());
            for (Map.Entry<String, Object> entry : data.mValues.entrySet()) {
                objectOutputStream.writeUTF(entry.getKey());
                objectOutputStream.writeObject(entry.getValue());
            }
            try {
                objectOutputStream.close();
            } catch (IOException e2) {
                Log.e(TAG, "Error in Data#toByteArray: ", e2);
            }
            try {
                byteArrayOutputStream.close();
            } catch (IOException e3) {
                Log.e(TAG, "Error in Data#toByteArray: ", e3);
            }
            if (byteArrayOutputStream.size() > 10240) {
                throw new IllegalStateException("Data cannot occupy more than 10240 bytes when serialized");
            }
            return byteArrayOutputStream.toByteArray();
        } catch (IOException e4) {
            e = e4;
            objectOutputStream2 = objectOutputStream;
            Log.e(TAG, "Error in Data#toByteArray: ", e);
            byte[] byteArray = byteArrayOutputStream.toByteArray();
            if (objectOutputStream2 != null) {
                try {
                    objectOutputStream2.close();
                } catch (IOException e5) {
                    Log.e(TAG, "Error in Data#toByteArray: ", e5);
                }
            }
            try {
                byteArrayOutputStream.close();
            } catch (IOException e6) {
                Log.e(TAG, "Error in Data#toByteArray: ", e6);
            }
            return byteArray;
        } catch (Throwable th2) {
            th = th2;
            objectOutputStream2 = objectOutputStream;
            if (objectOutputStream2 != null) {
                try {
                    objectOutputStream2.close();
                } catch (IOException e7) {
                    Log.e(TAG, "Error in Data#toByteArray: ", e7);
                }
            }
            try {
                byteArrayOutputStream.close();
                throw th;
            } catch (IOException e8) {
                Log.e(TAG, "Error in Data#toByteArray: ", e8);
                throw th;
            }
        }
    }

    /* high-level source view WARN: Removed duplicated region for block: B:54:0x004e A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /* high-level source view WARN: Removed duplicated region for block: B:56:0x006b A[EXC_TOP_SPLITTER, SYNTHETIC] */
    /* high-level source view WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:35:0x005d -> B:36:0x0062). Please report as a decompilation issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    public static Data fromByteArray(byte[] bytes) throws Throwable {
        Throwable th;
        ObjectInputStream objectInputStream;
        Throwable e;
        if (bytes.length > 10240) {
            throw new IllegalStateException("Data cannot occupy more than 10240 bytes when serialized");
        }
        HashMap map = new HashMap();
        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(bytes);
        ObjectInputStream objectInputStream2 = null;
        try {
        } catch (IOException e2) {
            Log.e(TAG, "Error in Data#fromByteArray: ", e2);
        }
        try {
            try {
                objectInputStream = new ObjectInputStream(byteArrayInputStream);
                try {
                    for (int i = objectInputStream.readInt(); i > 0; i--) {
                        map.put(objectInputStream.readUTF(), objectInputStream.readObject());
                    }
                    try {
                        objectInputStream.close();
                    } catch (IOException e3) {
                        Log.e(TAG, "Error in Data#fromByteArray: ", e3);
                    }
                    byteArrayInputStream.close();
                } catch (IOException e4) {
                    e = e4;
                    Log.e(TAG, "Error in Data#fromByteArray: ", e);
                    if (objectInputStream != null) {
                        try {
                            objectInputStream.close();
                        } catch (IOException e5) {
                            Log.e(TAG, "Error in Data#fromByteArray: ", e5);
                        }
                    }
                    byteArrayInputStream.close();
                } catch (ClassNotFoundException e6) {
                    e = e6;
                    Log.e(TAG, "Error in Data#fromByteArray: ", e);
                    if (objectInputStream != null) {
                    }
                    byteArrayInputStream.close();
                }
            } catch (Throwable th2) {
                th = th2;
                if (0 != 0) {
                    try {
                        objectInputStream2.close();
                    } catch (IOException e7) {
                        Log.e(TAG, "Error in Data#fromByteArray: ", e7);
                    }
                }
                try {
                    byteArrayInputStream.close();
                    throw th;
                } catch (IOException e8) {
                    Log.e(TAG, "Error in Data#fromByteArray: ", e8);
                    throw th;
                }
            }
        } catch (IOException e9) {
            e = e9;
            Throwable th3 = e;
            objectInputStream = null;
            e = th3;
            Log.e(TAG, "Error in Data#fromByteArray: ", e);
            if (objectInputStream != null) {
            }
            byteArrayInputStream.close();
            return new Data(map);
        } catch (ClassNotFoundException e10) {
            e = e10;
            Throwable th32 = e;
            objectInputStream = null;
            e = th32;
            Log.e(TAG, "Error in Data#fromByteArray: ", e);
            if (objectInputStream != null) {
            }
            byteArrayInputStream.close();
            return new Data(map);
        } catch (Throwable th4) {
            th = th4;
            if (0 != 0) {
            }
            byteArrayInputStream.close();
            throw th;
        }
        return new Data(map);
    }

    public boolean equals(Object o) {
        boolean zEquals;
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Data data = (Data) o;
        Set<String> setKeySet = this.mValues.keySet();
        if (!setKeySet.equals(data.mValues.keySet())) {
            return false;
        }
        for (String str : setKeySet) {
            Object obj = this.mValues.get(str);
            Object obj2 = data.mValues.get(str);
            if (obj == null || obj2 == null) {
                zEquals = obj == obj2;
            } else if ((obj instanceof Object[]) && (obj2 instanceof Object[])) {
                zEquals = Arrays.deepEquals((Object[]) obj, (Object[]) obj2);
            } else {
                zEquals = obj.equals(obj2);
            }
            if (!zEquals) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        return this.mValues.hashCode() * 31;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder("Data {");
        if (!this.mValues.isEmpty()) {
            for (String str : this.mValues.keySet()) {
                sb.append(str).append(" : ");
                Object obj = this.mValues.get(str);
                if (obj instanceof Object[]) {
                    sb.append(Arrays.toString((Object[]) obj));
                } else {
                    sb.append(obj);
                }
                sb.append(", ");
            }
        }
        sb.append("}");
        return sb.toString();
    }

    public static Boolean[] convertPrimitiveBooleanArray(boolean[] value) {
        Boolean[] boolArr = new Boolean[value.length];
        for (int i = 0; i < value.length; i++) {
            boolArr[i] = Boolean.valueOf(value[i]);
        }
        return boolArr;
    }

    public static Byte[] convertPrimitiveByteArray(byte[] value) {
        Byte[] bArr = new Byte[value.length];
        for (int i = 0; i < value.length; i++) {
            bArr[i] = Byte.valueOf(value[i]);
        }
        return bArr;
    }

    public static Integer[] convertPrimitiveIntArray(int[] value) {
        Integer[] numArr = new Integer[value.length];
        for (int i = 0; i < value.length; i++) {
            numArr[i] = Integer.valueOf(value[i]);
        }
        return numArr;
    }

    public static Long[] convertPrimitiveLongArray(long[] value) {
        Long[] lArr = new Long[value.length];
        for (int i = 0; i < value.length; i++) {
            lArr[i] = Long.valueOf(value[i]);
        }
        return lArr;
    }

    public static Float[] convertPrimitiveFloatArray(float[] value) {
        Float[] fArr = new Float[value.length];
        for (int i = 0; i < value.length; i++) {
            fArr[i] = Float.valueOf(value[i]);
        }
        return fArr;
    }

    public static Double[] convertPrimitiveDoubleArray(double[] value) {
        Double[] dArr = new Double[value.length];
        for (int i = 0; i < value.length; i++) {
            dArr[i] = Double.valueOf(value[i]);
        }
        return dArr;
    }

    public static boolean[] convertToPrimitiveArray(Boolean[] array) {
        boolean[] zArr = new boolean[array.length];
        for (int i = 0; i < array.length; i++) {
            zArr[i] = array[i].booleanValue();
        }
        return zArr;
    }

    public static byte[] convertToPrimitiveArray(Byte[] array) {
        byte[] bArr = new byte[array.length];
        for (int i = 0; i < array.length; i++) {
            bArr[i] = array[i].byteValue();
        }
        return bArr;
    }

    public static int[] convertToPrimitiveArray(Integer[] array) {
        int[] iArr = new int[array.length];
        for (int i = 0; i < array.length; i++) {
            iArr[i] = array[i].intValue();
        }
        return iArr;
    }

    public static long[] convertToPrimitiveArray(Long[] array) {
        long[] jArr = new long[array.length];
        for (int i = 0; i < array.length; i++) {
            jArr[i] = array[i].longValue();
        }
        return jArr;
    }

    public static float[] convertToPrimitiveArray(Float[] array) {
        float[] fArr = new float[array.length];
        for (int i = 0; i < array.length; i++) {
            fArr[i] = array[i].floatValue();
        }
        return fArr;
    }

    public static double[] convertToPrimitiveArray(Double[] array) {
        double[] dArr = new double[array.length];
        for (int i = 0; i < array.length; i++) {
            dArr[i] = array[i].doubleValue();
        }
        return dArr;
    }

    public static final class Builder {
        private Map<String, Object> mValues = new HashMap();

        public Builder putBoolean(String key, boolean value) {
            this.mValues.put(key, Boolean.valueOf(value));
            return this;
        }

        public Builder putBooleanArray(String key, boolean[] value) {
            this.mValues.put(key, Data.convertPrimitiveBooleanArray(value));
            return this;
        }

        public Builder putByte(String key, byte value) {
            this.mValues.put(key, Byte.valueOf(value));
            return this;
        }

        public Builder putByteArray(String key, byte[] value) {
            this.mValues.put(key, Data.convertPrimitiveByteArray(value));
            return this;
        }

        public Builder putInt(String key, int value) {
            this.mValues.put(key, Integer.valueOf(value));
            return this;
        }

        public Builder putIntArray(String key, int[] value) {
            this.mValues.put(key, Data.convertPrimitiveIntArray(value));
            return this;
        }

        public Builder putLong(String key, long value) {
            this.mValues.put(key, Long.valueOf(value));
            return this;
        }

        public Builder putLongArray(String key, long[] value) {
            this.mValues.put(key, Data.convertPrimitiveLongArray(value));
            return this;
        }

        public Builder putFloat(String key, float value) {
            this.mValues.put(key, Float.valueOf(value));
            return this;
        }

        public Builder putFloatArray(String key, float[] value) {
            this.mValues.put(key, Data.convertPrimitiveFloatArray(value));
            return this;
        }

        public Builder putDouble(String key, double value) {
            this.mValues.put(key, Double.valueOf(value));
            return this;
        }

        public Builder putDoubleArray(String key, double[] value) {
            this.mValues.put(key, Data.convertPrimitiveDoubleArray(value));
            return this;
        }

        public Builder putString(String key, String value) {
            this.mValues.put(key, value);
            return this;
        }

        public Builder putStringArray(String key, String[] value) {
            this.mValues.put(key, value);
            return this;
        }

        public Builder putAll(Data data) {
            putAll(data.mValues);
            return this;
        }

        public Builder putAll(Map<String, Object> values) {
            for (Map.Entry<String, Object> entry : values.entrySet()) {
                put(entry.getKey(), entry.getValue());
            }
            return this;
        }

        public Builder put(String key, Object value) {
            if (value == null) {
                this.mValues.put(key, null);
            } else {
                Class<?> cls = value.getClass();
                if (cls == Boolean.class || cls == Byte.class || cls == Integer.class || cls == Long.class || cls == Float.class || cls == Double.class || cls == String.class || cls == Boolean[].class || cls == Byte[].class || cls == Integer[].class || cls == Long[].class || cls == Float[].class || cls == Double[].class || cls == String[].class) {
                    this.mValues.put(key, value);
                } else if (cls == boolean[].class) {
                    this.mValues.put(key, Data.convertPrimitiveBooleanArray((boolean[]) value));
                } else if (cls == byte[].class) {
                    this.mValues.put(key, Data.convertPrimitiveByteArray((byte[]) value));
                } else if (cls == int[].class) {
                    this.mValues.put(key, Data.convertPrimitiveIntArray((int[]) value));
                } else if (cls == long[].class) {
                    this.mValues.put(key, Data.convertPrimitiveLongArray((long[]) value));
                } else if (cls == float[].class) {
                    this.mValues.put(key, Data.convertPrimitiveFloatArray((float[]) value));
                } else if (cls == double[].class) {
                    this.mValues.put(key, Data.convertPrimitiveDoubleArray((double[]) value));
                } else {
                    throw new IllegalArgumentException(String.format("Key %s has invalid type %s", key, cls));
                }
            }
            return this;
        }

        public Data build() throws Throwable {
            Data data = new Data((Map<String, ?>) this.mValues);
            Data.toByteArrayInternal(data);
            return data;
        }
    }
}

