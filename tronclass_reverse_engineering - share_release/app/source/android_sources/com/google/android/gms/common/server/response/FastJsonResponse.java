package com.google.android.gms.common.server.response;

import android.os.Parcel;
import android.util.Log;
import com.google.android.gms.common.internal.Objects;
import com.google.android.gms.common.internal.Preconditions;
import com.google.android.gms.common.internal.safeparcel.AbstractSafeParcelable;
import com.google.android.gms.common.internal.safeparcel.SafeParcelWriter;
import com.google.android.gms.common.util.Base64Utils;
import com.google.android.gms.common.util.JsonUtils;
import com.google.android.gms.common.util.MapUtils;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
public abstract class FastJsonResponse {

    public interface FieldConverter<I, O> {
        O convert(I i);

        I convertBack(O o);

        int zacj();

        int zack();
    }

    public abstract Map<String, Field<?, ?>> getFieldMappings();

    protected abstract Object getValueObject(String str);

    protected abstract boolean isPrimitiveFieldSet(String str);

    protected boolean isFieldSet(Field field) {
        if (field.zapt == 11) {
            if (field.zapu) {
                String str = field.zapv;
                throw new UnsupportedOperationException("Concrete type arrays not supported");
            }
            String str2 = field.zapv;
            throw new UnsupportedOperationException("Concrete types not supported");
        }
        return isPrimitiveFieldSet(field.zapv);
    }

    public static class Field<I, O> extends AbstractSafeParcelable {
        public static final zai CREATOR = new zai();
        private final int zalf;
        protected final int zapr;
        protected final boolean zaps;
        protected final int zapt;
        protected final boolean zapu;
        protected final String zapv;
        protected final int zapw;
        protected final Class<? extends FastJsonResponse> zapx;
        private final String zapy;
        private zak zapz;
        private FieldConverter<I, O> zaqa;

        Field(int i, int i2, boolean z, int i3, boolean z2, String str, int i4, String str2, com.google.android.gms.common.server.converter.zaa zaaVar) {
            this.zalf = i;
            this.zapr = i2;
            this.zaps = z;
            this.zapt = i3;
            this.zapu = z2;
            this.zapv = str;
            this.zapw = i4;
            if (str2 == null) {
                this.zapx = null;
                this.zapy = null;
            } else {
                this.zapx = SafeParcelResponse.class;
                this.zapy = str2;
            }
            if (zaaVar == null) {
                this.zaqa = null;
            } else {
                this.zaqa = (FieldConverter<I, O>) zaaVar.zaci();
            }
        }

        private Field(int i, boolean z, int i2, boolean z2, String str, int i3, Class<? extends FastJsonResponse> cls, FieldConverter<I, O> fieldConverter) {
            this.zalf = 1;
            this.zapr = i;
            this.zaps = z;
            this.zapt = i2;
            this.zapu = z2;
            this.zapv = str;
            this.zapw = i3;
            this.zapx = cls;
            if (cls == null) {
                this.zapy = null;
            } else {
                this.zapy = cls.getCanonicalName();
            }
            this.zaqa = fieldConverter;
        }

        public final Field<I, O> zacl() {
            return new Field<>(this.zalf, this.zapr, this.zaps, this.zapt, this.zapu, this.zapv, this.zapw, this.zapy, zaco());
        }

        public int getSafeParcelableFieldId() {
            return this.zapw;
        }

        private final String zacm() {
            String str = this.zapy;
            if (str == null) {
                return null;
            }
            return str;
        }

        public final boolean zacn() {
            return this.zaqa != null;
        }

        public final void zaa(zak zakVar) {
            this.zapz = zakVar;
        }

        private final com.google.android.gms.common.server.converter.zaa zaco() {
            FieldConverter<I, O> fieldConverter = this.zaqa;
            if (fieldConverter == null) {
                return null;
            }
            return com.google.android.gms.common.server.converter.zaa.zaa(fieldConverter);
        }

        public final FastJsonResponse zacp() throws IllegalAccessException, InstantiationException {
            Class<? extends FastJsonResponse> cls = this.zapx;
            if (cls == SafeParcelResponse.class) {
                Preconditions.checkNotNull(this.zapz, "The field mapping dictionary must be set if the concrete type is a SafeParcelResponse object.");
                return new SafeParcelResponse(this.zapz, this.zapy);
            }
            return cls.newInstance();
        }

        public final Map<String, Field<?, ?>> zacq() {
            Preconditions.checkNotNull(this.zapy);
            Preconditions.checkNotNull(this.zapz);
            return this.zapz.zai(this.zapy);
        }

        public final O convert(I i) {
            return this.zaqa.convert(i);
        }

        public final I convertBack(O o) {
            return this.zaqa.convertBack(o);
        }

        public static Field<Integer, Integer> forInteger(String str, int i) {
            return new Field<>(0, false, 0, false, str, i, null, null);
        }

        public static Field<Long, Long> forLong(String str, int i) {
            return new Field<>(2, false, 2, false, str, i, null, null);
        }

        public static Field<Float, Float> forFloat(String str, int i) {
            return new Field<>(3, false, 3, false, str, i, null, null);
        }

        public static Field<Double, Double> forDouble(String str, int i) {
            return new Field<>(4, false, 4, false, str, i, null, null);
        }

        public static Field<Boolean, Boolean> forBoolean(String str, int i) {
            return new Field<>(6, false, 6, false, str, i, null, null);
        }

        public static Field<String, String> forString(String str, int i) {
            return new Field<>(7, false, 7, false, str, i, null, null);
        }

        public static Field<ArrayList<String>, ArrayList<String>> forStrings(String str, int i) {
            return new Field<>(7, true, 7, true, str, i, null, null);
        }

        public static Field<byte[], byte[]> forBase64(String str, int i) {
            return new Field<>(8, false, 8, false, str, i, null, null);
        }

        public static <T extends FastJsonResponse> Field<T, T> forConcreteType(String str, int i, Class<T> cls) {
            return new Field<>(11, false, 11, false, str, i, cls, null);
        }

        public static <T extends FastJsonResponse> Field<ArrayList<T>, ArrayList<T>> forConcreteTypeArray(String str, int i, Class<T> cls) {
            return new Field<>(11, true, 11, true, str, i, cls, null);
        }

        public static Field withConverter(String str, int i, FieldConverter<?, ?> fieldConverter, boolean z) {
            return new Field(fieldConverter.zacj(), z, fieldConverter.zack(), false, str, i, null, fieldConverter);
        }

        @Override // android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i) {
            int iBeginObjectHeader = SafeParcelWriter.beginObjectHeader(parcel);
            SafeParcelWriter.writeInt(parcel, 1, this.zalf);
            SafeParcelWriter.writeInt(parcel, 2, this.zapr);
            SafeParcelWriter.writeBoolean(parcel, 3, this.zaps);
            SafeParcelWriter.writeInt(parcel, 4, this.zapt);
            SafeParcelWriter.writeBoolean(parcel, 5, this.zapu);
            SafeParcelWriter.writeString(parcel, 6, this.zapv, false);
            SafeParcelWriter.writeInt(parcel, 7, getSafeParcelableFieldId());
            SafeParcelWriter.writeString(parcel, 8, zacm(), false);
            SafeParcelWriter.writeParcelable(parcel, 9, zaco(), i, false);
            SafeParcelWriter.finishObjectHeader(parcel, iBeginObjectHeader);
        }

        public String toString() {
            Objects.ToStringHelper toStringHelperAdd = Objects.toStringHelper(this).add("versionCode", Integer.valueOf(this.zalf)).add("typeIn", Integer.valueOf(this.zapr)).add("typeInArray", Boolean.valueOf(this.zaps)).add("typeOut", Integer.valueOf(this.zapt)).add("typeOutArray", Boolean.valueOf(this.zapu)).add("outputFieldName", this.zapv).add("safeParcelFieldId", Integer.valueOf(this.zapw)).add("concreteTypeName", zacm());
            Class<? extends FastJsonResponse> cls = this.zapx;
            if (cls != null) {
                toStringHelperAdd.add("concreteType.class", cls.getCanonicalName());
            }
            FieldConverter<I, O> fieldConverter = this.zaqa;
            if (fieldConverter != null) {
                toStringHelperAdd.add("converterName", fieldConverter.getClass().getCanonicalName());
            }
            return toStringHelperAdd.toString();
        }
    }

    private final <I, O> void zaa(Field<I, O> field, I i) {
        String str = field.zapv;
        O oConvert = field.convert(i);
        switch (field.zapt) {
            case 0:
                if (zaa(str, oConvert)) {
                    setIntegerInternal(field, str, ((Integer) oConvert).intValue());
                    return;
                }
                return;
            case 1:
                zaa((Field<?, ?>) field, str, (BigInteger) oConvert);
                return;
            case 2:
                if (zaa(str, oConvert)) {
                    setLongInternal(field, str, ((Long) oConvert).longValue());
                    return;
                }
                return;
            case 3:
            default:
                throw new IllegalStateException(new StringBuilder(44).append("Unsupported type for conversion: ").append(field.zapt).toString());
            case 4:
                if (zaa(str, oConvert)) {
                    zaa((Field<?, ?>) field, str, ((Double) oConvert).doubleValue());
                    return;
                }
                return;
            case 5:
                zaa((Field<?, ?>) field, str, (BigDecimal) oConvert);
                return;
            case 6:
                if (zaa(str, oConvert)) {
                    setBooleanInternal(field, str, ((Boolean) oConvert).booleanValue());
                    return;
                }
                return;
            case 7:
                setStringInternal(field, str, (String) oConvert);
                return;
            case 8:
            case 9:
                if (zaa(str, oConvert)) {
                    setDecodedBytesInternal(field, str, (byte[]) oConvert);
                    return;
                }
                return;
        }
    }

    /* high-level source view WARN: Multi-variable type inference failed */
    protected static <O, I> I zab(Field<I, O> field, Object obj) {
        return ((Field) field).zaqa != null ? field.convertBack(obj) : obj;
    }

    public final <O> void zaa(Field<Integer, O> field, int i) {
        if (((Field) field).zaqa != null) {
            zaa(field, Integer.valueOf(i));
        } else {
            setIntegerInternal(field, field.zapv, i);
        }
    }

    public final <O> void zaa(Field<ArrayList<Integer>, O> field, ArrayList<Integer> arrayList) {
        if (((Field) field).zaqa != null) {
            zaa(field, arrayList);
        } else {
            zaa(field, field.zapv, arrayList);
        }
    }

    public final <O> void zaa(Field<BigInteger, O> field, BigInteger bigInteger) {
        if (((Field) field).zaqa != null) {
            zaa(field, bigInteger);
        } else {
            zaa(field, field.zapv, bigInteger);
        }
    }

    public final <O> void zab(Field<ArrayList<BigInteger>, O> field, ArrayList<BigInteger> arrayList) {
        if (((Field) field).zaqa != null) {
            zaa(field, arrayList);
        } else {
            zab(field, field.zapv, arrayList);
        }
    }

    public final <O> void zaa(Field<Long, O> field, long j) {
        if (((Field) field).zaqa != null) {
            zaa(field, Long.valueOf(j));
        } else {
            setLongInternal(field, field.zapv, j);
        }
    }

    public final <O> void zac(Field<ArrayList<Long>, O> field, ArrayList<Long> arrayList) {
        if (((Field) field).zaqa != null) {
            zaa(field, arrayList);
        } else {
            zac(field, field.zapv, arrayList);
        }
    }

    public final <O> void zaa(Field<Float, O> field, float f) {
        if (((Field) field).zaqa != null) {
            zaa(field, Float.valueOf(f));
        } else {
            zaa((Field<?, ?>) field, field.zapv, f);
        }
    }

    public final <O> void zad(Field<ArrayList<Float>, O> field, ArrayList<Float> arrayList) {
        if (((Field) field).zaqa != null) {
            zaa(field, arrayList);
        } else {
            zad(field, field.zapv, arrayList);
        }
    }

    public final <O> void zaa(Field<Double, O> field, double d) {
        if (((Field) field).zaqa != null) {
            zaa(field, Double.valueOf(d));
        } else {
            zaa(field, field.zapv, d);
        }
    }

    public final <O> void zae(Field<ArrayList<Double>, O> field, ArrayList<Double> arrayList) {
        if (((Field) field).zaqa != null) {
            zaa(field, arrayList);
        } else {
            zae(field, field.zapv, arrayList);
        }
    }

    public final <O> void zaa(Field<BigDecimal, O> field, BigDecimal bigDecimal) {
        if (((Field) field).zaqa != null) {
            zaa(field, bigDecimal);
        } else {
            zaa(field, field.zapv, bigDecimal);
        }
    }

    public final <O> void zaf(Field<ArrayList<BigDecimal>, O> field, ArrayList<BigDecimal> arrayList) {
        if (((Field) field).zaqa != null) {
            zaa(field, arrayList);
        } else {
            zaf(field, field.zapv, arrayList);
        }
    }

    public final <O> void zaa(Field<Boolean, O> field, boolean z) {
        if (((Field) field).zaqa != null) {
            zaa(field, Boolean.valueOf(z));
        } else {
            setBooleanInternal(field, field.zapv, z);
        }
    }

    public final <O> void zag(Field<ArrayList<Boolean>, O> field, ArrayList<Boolean> arrayList) {
        if (((Field) field).zaqa != null) {
            zaa(field, arrayList);
        } else {
            zag(field, field.zapv, arrayList);
        }
    }

    public final <O> void zaa(Field<String, O> field, String str) {
        if (((Field) field).zaqa != null) {
            zaa(field, str);
        } else {
            setStringInternal(field, field.zapv, str);
        }
    }

    public final <O> void zah(Field<ArrayList<String>, O> field, ArrayList<String> arrayList) {
        if (((Field) field).zaqa != null) {
            zaa(field, arrayList);
        } else {
            setStringsInternal(field, field.zapv, arrayList);
        }
    }

    public final <O> void zaa(Field<byte[], O> field, byte[] bArr) {
        if (((Field) field).zaqa != null) {
            zaa(field, bArr);
        } else {
            setDecodedBytesInternal(field, field.zapv, bArr);
        }
    }

    public final <O> void zaa(Field<Map<String, String>, O> field, Map<String, String> map) {
        if (((Field) field).zaqa != null) {
            zaa(field, map);
        } else {
            zaa(field, field.zapv, map);
        }
    }

    protected void setIntegerInternal(Field<?, ?> field, String str, int i) {
        throw new UnsupportedOperationException("Integer not supported");
    }

    protected void zaa(Field<?, ?> field, String str, ArrayList<Integer> arrayList) {
        throw new UnsupportedOperationException("Integer list not supported");
    }

    protected void zaa(Field<?, ?> field, String str, BigInteger bigInteger) {
        throw new UnsupportedOperationException("BigInteger not supported");
    }

    protected void zab(Field<?, ?> field, String str, ArrayList<BigInteger> arrayList) {
        throw new UnsupportedOperationException("BigInteger list not supported");
    }

    protected void setLongInternal(Field<?, ?> field, String str, long j) {
        throw new UnsupportedOperationException("Long not supported");
    }

    protected void zac(Field<?, ?> field, String str, ArrayList<Long> arrayList) {
        throw new UnsupportedOperationException("Long list not supported");
    }

    protected void zaa(Field<?, ?> field, String str, float f) {
        throw new UnsupportedOperationException("Float not supported");
    }

    protected void zad(Field<?, ?> field, String str, ArrayList<Float> arrayList) {
        throw new UnsupportedOperationException("Float list not supported");
    }

    protected void zaa(Field<?, ?> field, String str, double d) {
        throw new UnsupportedOperationException("Double not supported");
    }

    protected void zae(Field<?, ?> field, String str, ArrayList<Double> arrayList) {
        throw new UnsupportedOperationException("Double list not supported");
    }

    protected void zaa(Field<?, ?> field, String str, BigDecimal bigDecimal) {
        throw new UnsupportedOperationException("BigDecimal not supported");
    }

    protected void zaf(Field<?, ?> field, String str, ArrayList<BigDecimal> arrayList) {
        throw new UnsupportedOperationException("BigDecimal list not supported");
    }

    protected void setBooleanInternal(Field<?, ?> field, String str, boolean z) {
        throw new UnsupportedOperationException("Boolean not supported");
    }

    protected void zag(Field<?, ?> field, String str, ArrayList<Boolean> arrayList) {
        throw new UnsupportedOperationException("Boolean list not supported");
    }

    protected void setStringInternal(Field<?, ?> field, String str, String str2) {
        throw new UnsupportedOperationException("String not supported");
    }

    protected void setStringsInternal(Field<?, ?> field, String str, ArrayList<String> arrayList) {
        throw new UnsupportedOperationException("String list not supported");
    }

    protected void setDecodedBytesInternal(Field<?, ?> field, String str, byte[] bArr) {
        throw new UnsupportedOperationException("byte[] not supported");
    }

    protected void zaa(Field<?, ?> field, String str, Map<String, String> map) {
        throw new UnsupportedOperationException("String map not supported");
    }

    private static <O> boolean zaa(String str, O o) {
        if (o != null) {
            return true;
        }
        if (!Log.isLoggable("FastJsonResponse", 6)) {
            return false;
        }
        Log.e("FastJsonResponse", new StringBuilder(String.valueOf(str).length() + 58).append("Output field (").append(str).append(") has a null value, but expected a primitive").toString());
        return false;
    }

    public <T extends FastJsonResponse> void addConcreteTypeInternal(Field<?, ?> field, String str, T t) {
        throw new UnsupportedOperationException("Concrete type not supported");
    }

    public <T extends FastJsonResponse> void addConcreteTypeArrayInternal(Field<?, ?> field, String str, ArrayList<T> arrayList) {
        throw new UnsupportedOperationException("Concrete type array not supported");
    }

    public String toString() {
        Map<String, Field<?, ?>> fieldMappings = getFieldMappings();
        StringBuilder sb = new StringBuilder(100);
        for (String str : fieldMappings.keySet()) {
            Field<?, ?> field = fieldMappings.get(str);
            if (isFieldSet(field)) {
                Object objZab = zab(field, getFieldValue(field));
                if (sb.length() == 0) {
                    sb.append("{");
                } else {
                    sb.append(",");
                }
                sb.append("\"").append(str).append("\":");
                if (objZab != null) {
                    switch (field.zapt) {
                        case 8:
                            sb.append("\"").append(Base64Utils.encode((byte[]) objZab)).append("\"");
                            break;
                        case 9:
                            sb.append("\"").append(Base64Utils.encodeUrlSafe((byte[]) objZab)).append("\"");
                            break;
                        case 10:
                            MapUtils.writeStringMapToJson(sb, (HashMap) objZab);
                            break;
                        default:
                            if (field.zaps) {
                                ArrayList arrayList = (ArrayList) objZab;
                                sb.append("[");
                                int size = arrayList.size();
                                for (int i = 0; i < size; i++) {
                                    if (i > 0) {
                                        sb.append(",");
                                    }
                                    Object obj = arrayList.get(i);
                                    if (obj != null) {
                                        zaa(sb, field, obj);
                                    }
                                }
                                sb.append("]");
                            } else {
                                zaa(sb, field, objZab);
                            }
                            break;
                    }
                } else {
                    sb.append("null");
                }
            }
        }
        if (sb.length() > 0) {
            sb.append("}");
        } else {
            sb.append("{}");
        }
        return sb.toString();
    }

    protected Object getFieldValue(Field field) {
        String str = field.zapv;
        if (field.zapx != null) {
            Preconditions.checkState(getValueObject(field.zapv) == null, "Concrete field shouldn't be value object: %s", field.zapv);
            boolean z = field.zapu;
            try {
                char upperCase = Character.toUpperCase(str.charAt(0));
                String strSubstring = str.substring(1);
                return getClass().getMethod(new StringBuilder(String.valueOf(strSubstring).length() + 4).append("get").append(upperCase).append(strSubstring).toString(), new Class[0]).invoke(this, new Object[0]);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        return getValueObject(field.zapv);
    }

    private static void zaa(StringBuilder sb, Field field, Object obj) {
        if (field.zapr == 11) {
            sb.append(field.zapx.cast(obj).toString());
        } else {
            if (field.zapr == 7) {
                sb.append("\"");
                sb.append(JsonUtils.escapeString((String) obj));
                sb.append("\"");
                return;
            }
            sb.append(obj);
        }
    }
}

