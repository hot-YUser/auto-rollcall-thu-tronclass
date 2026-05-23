package com.google.android.gms.common.server.response;

import android.util.Log;
import androidx.camera.video.AudioStats;
import com.google.android.gms.common.server.response.FastJsonResponse;
import com.google.android.gms.common.util.Base64Utils;
import com.google.android.gms.common.util.JsonUtils;
import com.wisdomgarden.trpc.MainActivity;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Stack;
import kotlin.text.Typography;
public class FastParser<T extends FastJsonResponse> {
    private static final char[] zaqg = {'u', 'l', 'l'};
    private static final char[] zaqh = {'r', 'u', 'e'};
    private static final char[] zaqi = {'r', 'u', 'e', Typography.quote};
    private static final char[] zaqj = {'a', 'l', 's', 'e'};
    private static final char[] zaqk = {'a', 'l', 's', 'e', Typography.quote};
    private static final char[] zaql = {'\n'};
    private static final zaa<Integer> zaqn = new com.google.android.gms.common.server.response.zaa();
    private static final zaa<Long> zaqo = new zab();
    private static final zaa<Float> zaqp = new zac();
    private static final zaa<Double> zaqq = new zad();
    private static final zaa<Boolean> zaqr = new zae();
    private static final zaa<String> zaqs = new zaf();
    private static final zaa<BigInteger> zaqt = new zag();
    private static final zaa<BigDecimal> zaqu = new zah();
    private final char[] zaqb = new char[1];
    private final char[] zaqc = new char[32];
    private final char[] zaqd = new char[1024];
    private final StringBuilder zaqe = new StringBuilder(32);
    private final StringBuilder zaqf = new StringBuilder(1024);
    private final Stack<Integer> zaqm = new Stack<>();
    interface zaa<O> {
        O zah(FastParser fastParser, BufferedReader bufferedReader) throws ParseException, IOException;
    }

    public static class ParseException extends Exception {
        public ParseException(String str) {
            super(str);
        }

        public ParseException(String str, Throwable th) {
            super(str, th);
        }

        public ParseException(Throwable th) {
            super(th);
        }
    }

    public void parse(InputStream inputStream, T t) throws ParseException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream), 1024);
        try {
            try {
                this.zaqm.push(0);
                char cZaj = zaj(bufferedReader);
                if (cZaj == 0) {
                    throw new ParseException("No data to parse");
                }
                if (cZaj == '[') {
                    this.zaqm.push(5);
                    Map<String, FastJsonResponse.Field<?, ?>> fieldMappings = t.getFieldMappings();
                    if (fieldMappings.size() != 1) {
                        throw new ParseException("Object array response class must have a single Field");
                    }
                    FastJsonResponse.Field<?, ?> value = fieldMappings.entrySet().iterator().next().getValue();
                    t.addConcreteTypeArrayInternal(value, value.zapv, zaa(bufferedReader, value));
                } else if (cZaj == '{') {
                    this.zaqm.push(1);
                    zaa(bufferedReader, t);
                } else {
                    throw new ParseException(new StringBuilder(19).append("Unexpected token: ").append(cZaj).toString());
                }
                zak(0);
            } catch (IOException e) {
                throw new ParseException(e);
            }
        } finally {
            try {
                bufferedReader.close();
            } catch (IOException unused) {
                Log.w("FastParser", "Failed to close reader while parsing.");
            }
        }
    }

    /* high-level source view WARN: Multi-variable type inference failed */
    /* high-level source view WARN: Removed duplicated region for block: B:138:0x029d A[SYNTHETIC] */
    /* high-level source view WARN: Removed duplicated region for block: B:140:0x027d A[SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private final boolean zaa(BufferedReader bufferedReader, FastJsonResponse fastJsonResponse) throws ParseException, IOException {
        int i;
        HashMap map;
        char cZaj;
        Map<String, FastJsonResponse.Field<?, ?>> fieldMappings = fastJsonResponse.getFieldMappings();
        String strZaa = zaa(bufferedReader);
        if (strZaa == null) {
            zak(1);
            return false;
        }
        while (strZaa != null) {
            FastJsonResponse.Field<?, ?> field = fieldMappings.get(strZaa);
            if (field == null) {
                strZaa = zab(bufferedReader);
            } else {
                this.zaqm.push(4);
                switch (field.zapr) {
                    case 0:
                        if (field.zaps) {
                            fastJsonResponse.zaa((FastJsonResponse.Field) field, (ArrayList<Integer>) zaa(bufferedReader, zaqn));
                        } else {
                            fastJsonResponse.zaa((FastJsonResponse.Field) field, zad(bufferedReader));
                        }
                        i = 4;
                        zak(i);
                        zak(2);
                        cZaj = zaj(bufferedReader);
                        if (cZaj != ',') {
                            strZaa = zaa(bufferedReader);
                        } else {
                            if (cZaj != '}') {
                                throw new ParseException(new StringBuilder(55).append("Expected end of object or field separator, but found: ").append(cZaj).toString());
                            }
                            strZaa = null;
                        }
                        break;
                    case 1:
                        if (field.zaps) {
                            fastJsonResponse.zab((FastJsonResponse.Field) field, (ArrayList<BigInteger>) zaa(bufferedReader, zaqt));
                        } else {
                            fastJsonResponse.zaa((FastJsonResponse.Field) field, zaf(bufferedReader));
                        }
                        i = 4;
                        zak(i);
                        zak(2);
                        cZaj = zaj(bufferedReader);
                        if (cZaj != ',') {
                        }
                        break;
                    case 2:
                        if (field.zaps) {
                            fastJsonResponse.zac(field, zaa(bufferedReader, zaqo));
                        } else {
                            fastJsonResponse.zaa((FastJsonResponse.Field) field, zae(bufferedReader));
                        }
                        i = 4;
                        zak(i);
                        zak(2);
                        cZaj = zaj(bufferedReader);
                        if (cZaj != ',') {
                        }
                        break;
                    case 3:
                        if (field.zaps) {
                            fastJsonResponse.zad(field, zaa(bufferedReader, zaqp));
                        } else {
                            fastJsonResponse.zaa((FastJsonResponse.Field) field, zag(bufferedReader));
                        }
                        i = 4;
                        zak(i);
                        zak(2);
                        cZaj = zaj(bufferedReader);
                        if (cZaj != ',') {
                        }
                        break;
                    case 4:
                        if (field.zaps) {
                            fastJsonResponse.zae(field, zaa(bufferedReader, zaqq));
                        } else {
                            fastJsonResponse.zaa(field, zah(bufferedReader));
                        }
                        i = 4;
                        zak(i);
                        zak(2);
                        cZaj = zaj(bufferedReader);
                        if (cZaj != ',') {
                        }
                        break;
                    case 5:
                        if (field.zaps) {
                            fastJsonResponse.zaf(field, zaa(bufferedReader, zaqu));
                        } else {
                            fastJsonResponse.zaa((FastJsonResponse.Field) field, zai(bufferedReader));
                        }
                        i = 4;
                        zak(i);
                        zak(2);
                        cZaj = zaj(bufferedReader);
                        if (cZaj != ',') {
                        }
                        break;
                    case 6:
                        if (field.zaps) {
                            fastJsonResponse.zag(field, zaa(bufferedReader, zaqr));
                            i = 4;
                            zak(i);
                            zak(2);
                            cZaj = zaj(bufferedReader);
                            if (cZaj != ',') {
                            }
                        } else {
                            fastJsonResponse.zaa(field, zaa(bufferedReader, false));
                            i = 4;
                            zak(i);
                            zak(2);
                            cZaj = zaj(bufferedReader);
                            if (cZaj != ',') {
                            }
                        }
                        break;
                    case 7:
                        if (field.zaps) {
                            fastJsonResponse.zah(field, zaa(bufferedReader, zaqs));
                        } else {
                            fastJsonResponse.zaa((FastJsonResponse.Field) field, zac(bufferedReader));
                        }
                        i = 4;
                        zak(i);
                        zak(2);
                        cZaj = zaj(bufferedReader);
                        if (cZaj != ',') {
                        }
                        break;
                    case 8:
                        fastJsonResponse.zaa((FastJsonResponse.Field) field, Base64Utils.decode(zaa(bufferedReader, this.zaqd, this.zaqf, zaql)));
                        i = 4;
                        zak(i);
                        zak(2);
                        cZaj = zaj(bufferedReader);
                        if (cZaj != ',') {
                        }
                        break;
                    case 9:
                        fastJsonResponse.zaa((FastJsonResponse.Field) field, Base64Utils.decodeUrlSafe(zaa(bufferedReader, this.zaqd, this.zaqf, zaql)));
                        i = 4;
                        zak(i);
                        zak(2);
                        cZaj = zaj(bufferedReader);
                        if (cZaj != ',') {
                        }
                        break;
                    case 10:
                        char cZaj2 = zaj(bufferedReader);
                        if (cZaj2 == 'n') {
                            zab(bufferedReader, zaqg);
                            map = null;
                        } else {
                            if (cZaj2 != '{') {
                                throw new ParseException("Expected start of a map object");
                            }
                            this.zaqm.push(1);
                            map = new HashMap();
                            while (true) {
                                char cZaj3 = zaj(bufferedReader);
                                if (cZaj3 == 0) {
                                    throw new ParseException("Unexpected EOF");
                                }
                                if (cZaj3 == '\"') {
                                    String strZab = zab(bufferedReader, this.zaqc, this.zaqe, null);
                                    if (zaj(bufferedReader) != ':') {
                                        String strValueOf = String.valueOf(strZab);
                                        throw new ParseException(strValueOf.length() != 0 ? "No map value found for key ".concat(strValueOf) : new String("No map value found for key "));
                                    }
                                    if (zaj(bufferedReader) != '\"') {
                                        String strValueOf2 = String.valueOf(strZab);
                                        throw new ParseException(strValueOf2.length() != 0 ? "Expected String value for key ".concat(strValueOf2) : new String("Expected String value for key "));
                                    }
                                    map.put(strZab, zab(bufferedReader, this.zaqc, this.zaqe, null));
                                    char cZaj4 = zaj(bufferedReader);
                                    if (cZaj4 != ',') {
                                        if (cZaj4 == '}') {
                                            zak(1);
                                        } else {
                                            throw new ParseException(new StringBuilder(48).append("Unexpected character while parsing string map: ").append(cZaj4).toString());
                                        }
                                    }
                                } else if (cZaj3 == '}') {
                                    zak(1);
                                }
                                i = 4;
                                zak(i);
                                zak(2);
                                cZaj = zaj(bufferedReader);
                                if (cZaj != ',') {
                                }
                            }
                        }
                        fastJsonResponse.zaa((FastJsonResponse.Field) field, (Map<String, String>) map);
                        i = 4;
                        zak(i);
                        zak(2);
                        cZaj = zaj(bufferedReader);
                        if (cZaj != ',') {
                        }
                        break;
                    case 11:
                        if (field.zaps) {
                            char cZaj5 = zaj(bufferedReader);
                            if (cZaj5 == 'n') {
                                zab(bufferedReader, zaqg);
                                fastJsonResponse.addConcreteTypeArrayInternal(field, field.zapv, null);
                            } else {
                                this.zaqm.push(5);
                                if (cZaj5 != '[') {
                                    throw new ParseException("Expected array start");
                                }
                                fastJsonResponse.addConcreteTypeArrayInternal(field, field.zapv, zaa(bufferedReader, field));
                            }
                        } else {
                            char cZaj6 = zaj(bufferedReader);
                            if (cZaj6 != 'n') {
                                this.zaqm.push(1);
                                if (cZaj6 != '{') {
                                    throw new ParseException("Expected start of object");
                                }
                                try {
                                    FastJsonResponse fastJsonResponseZacp = field.zacp();
                                    zaa(bufferedReader, fastJsonResponseZacp);
                                    fastJsonResponse.addConcreteTypeInternal(field, field.zapv, fastJsonResponseZacp);
                                } catch (IllegalAccessException e) {
                                    throw new ParseException("Error instantiating inner object", e);
                                } catch (InstantiationException e2) {
                                    throw new ParseException("Error instantiating inner object", e2);
                                }
                            } else {
                                zab(bufferedReader, zaqg);
                                fastJsonResponse.addConcreteTypeInternal(field, field.zapv, null);
                            }
                            break;
                        }
                        i = 4;
                        zak(i);
                        zak(2);
                        cZaj = zaj(bufferedReader);
                        if (cZaj != ',') {
                        }
                        break;
                    default:
                        throw new ParseException(new StringBuilder(30).append("Invalid field type ").append(field.zapr).toString());
                }
            }
        }
        zak(1);
        return true;
    }

    private final String zaa(BufferedReader bufferedReader) throws ParseException, IOException {
        this.zaqm.push(2);
        char cZaj = zaj(bufferedReader);
        if (cZaj == '\"') {
            this.zaqm.push(3);
            String strZab = zab(bufferedReader, this.zaqc, this.zaqe, null);
            zak(3);
            if (zaj(bufferedReader) == ':') {
                return strZab;
            }
            throw new ParseException("Expected key/value separator");
        }
        if (cZaj != ']') {
            if (cZaj == '}') {
                zak(2);
                return null;
            }
            throw new ParseException(new StringBuilder(19).append("Unexpected token: ").append(cZaj).toString());
        }
        zak(2);
        zak(1);
        zak(5);
        return null;
    }

    private final String zab(BufferedReader bufferedReader) throws ParseException, IOException {
        bufferedReader.mark(1024);
        char cZaj = zaj(bufferedReader);
        if (cZaj == '\"') {
            if (bufferedReader.read(this.zaqb) == -1) {
                throw new ParseException("Unexpected EOF while parsing string");
            }
            char c = this.zaqb[0];
            boolean z = false;
            do {
                if (c != '\"' || z) {
                    z = c == '\\' ? !z : false;
                    if (bufferedReader.read(this.zaqb) == -1) {
                        throw new ParseException("Unexpected EOF while parsing string");
                    }
                    c = this.zaqb[0];
                }
            } while (!Character.isISOControl(c));
            throw new ParseException("Unexpected control character while reading string");
        }
        if (cZaj == ',') {
            throw new ParseException("Missing value");
        }
        int i = 1;
        if (cZaj == '[') {
            this.zaqm.push(5);
            bufferedReader.mark(32);
            if (zaj(bufferedReader) == ']') {
                zak(5);
            } else {
                bufferedReader.reset();
                boolean z2 = false;
                boolean z3 = false;
                while (i > 0) {
                    char cZaj2 = zaj(bufferedReader);
                    if (cZaj2 == 0) {
                        throw new ParseException("Unexpected EOF while parsing array");
                    }
                    if (Character.isISOControl(cZaj2)) {
                        throw new ParseException("Unexpected control character while reading array");
                    }
                    if (cZaj2 == '\"' && !z2) {
                        z3 = !z3;
                    }
                    if (cZaj2 == '[' && !z3) {
                        i++;
                    }
                    if (cZaj2 == ']' && !z3) {
                        i--;
                    }
                    z2 = (cZaj2 == '\\' && z3) ? !z2 : false;
                }
                zak(5);
            }
        } else if (cZaj == '{') {
            this.zaqm.push(1);
            bufferedReader.mark(32);
            char cZaj3 = zaj(bufferedReader);
            if (cZaj3 == '}') {
                zak(1);
            } else if (cZaj3 == '\"') {
                bufferedReader.reset();
                zaa(bufferedReader);
                while (zab(bufferedReader) != null) {
                }
                zak(1);
            } else {
                throw new ParseException(new StringBuilder(18).append("Unexpected token ").append(cZaj3).toString());
            }
        } else {
            bufferedReader.reset();
            zaa(bufferedReader, this.zaqd);
        }
        char cZaj4 = zaj(bufferedReader);
        if (cZaj4 == ',') {
            zak(2);
            return zaa(bufferedReader);
        }
        if (cZaj4 == '}') {
            zak(2);
            return null;
        }
        throw new ParseException(new StringBuilder(18).append("Unexpected token ").append(cZaj4).toString());
    }
    public final String zac(BufferedReader bufferedReader) throws ParseException, IOException {
        return zaa(bufferedReader, this.zaqc, this.zaqe, null);
    }

    private final <O> ArrayList<O> zaa(BufferedReader bufferedReader, zaa<O> zaaVar) throws ParseException, IOException {
        char cZaj = zaj(bufferedReader);
        if (cZaj == 'n') {
            zab(bufferedReader, zaqg);
            return null;
        }
        if (cZaj != '[') {
            throw new ParseException("Expected start of array");
        }
        this.zaqm.push(5);
        ArrayList<O> arrayList = new ArrayList<>();
        while (true) {
            bufferedReader.mark(1024);
            char cZaj2 = zaj(bufferedReader);
            if (cZaj2 == 0) {
                throw new ParseException("Unexpected EOF");
            }
            if (cZaj2 != ',') {
                if (cZaj2 == ']') {
                    zak(5);
                    return arrayList;
                }
                bufferedReader.reset();
                arrayList.add(zaaVar.zah(this, bufferedReader));
            }
        }
    }

    private final String zaa(BufferedReader bufferedReader, char[] cArr, StringBuilder sb, char[] cArr2) throws ParseException, IOException {
        char cZaj = zaj(bufferedReader);
        if (cZaj == '\"') {
            return zab(bufferedReader, cArr, sb, cArr2);
        }
        if (cZaj == 'n') {
            zab(bufferedReader, zaqg);
            return null;
        }
        throw new ParseException("Expected string");
    }

    /* high-level source view WARN: Code restructure failed: missing block: B:18:0x0031, code lost:
    
        throw new com.google.android.gms.common.server.response.FastParser.ParseException("Unexpected control character while reading string");
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
    */
    private static String zab(BufferedReader bufferedReader, char[] cArr, StringBuilder sb, char[] cArr2) throws ParseException, IOException {
        sb.setLength(0);
        bufferedReader.mark(cArr.length);
        boolean z = false;
        boolean z2 = false;
        loop0: while (true) {
            int i = bufferedReader.read(cArr);
            if (i != -1) {
                for (int i2 = 0; i2 < i; i2++) {
                    char c = cArr[i2];
                    if (Character.isISOControl(c)) {
                        if (cArr2 == null) {
                            break loop0;
                        }
                        for (char c2 : cArr2) {
                            if (c2 != c) {
                            }
                        }
                        break loop0;
                    }
                    if (c == '\"' && !z) {
                        sb.append(cArr, 0, i2);
                        bufferedReader.reset();
                        bufferedReader.skip(i2 + 1);
                        if (z2) {
                            return JsonUtils.unescapeString(sb.toString());
                        }
                        return sb.toString();
                    }
                    if (c == '\\') {
                        z = !z;
                        z2 = true;
                    } else {
                        z = false;
                    }
                }
                sb.append(cArr, 0, i);
                bufferedReader.mark(cArr.length);
            } else {
                throw new ParseException("Unexpected EOF while parsing string");
            }
        }
    }
    public final int zad(BufferedReader bufferedReader) throws ParseException, IOException {
        int i;
        int i2;
        int iZaa = zaa(bufferedReader, this.zaqd);
        int i3 = 0;
        if (iZaa == 0) {
            return 0;
        }
        char[] cArr = this.zaqd;
        if (iZaa > 0) {
            if (cArr[0] == '-') {
                i = Integer.MIN_VALUE;
                i2 = 1;
            } else {
                i = -2147483647;
                i2 = 0;
            }
            int i4 = i2;
            if (i2 < iZaa) {
                int i5 = i2 + 1;
                int iDigit = Character.digit(cArr[i2], 10);
                if (iDigit < 0) {
                    throw new ParseException("Unexpected non-digit character");
                }
                int i6 = -iDigit;
                i2 = i5;
                i3 = i6;
            }
            while (i2 < iZaa) {
                int i7 = i2 + 1;
                int iDigit2 = Character.digit(cArr[i2], 10);
                if (iDigit2 < 0) {
                    throw new ParseException("Unexpected non-digit character");
                }
                if (i3 < -214748364) {
                    throw new ParseException("Number too large");
                }
                int i8 = i3 * 10;
                if (i8 < i + iDigit2) {
                    throw new ParseException("Number too large");
                }
                i3 = i8 - iDigit2;
                i2 = i7;
            }
            if (i4 == 0) {
                return -i3;
            }
            if (i2 > 1) {
                return i3;
            }
            throw new ParseException("No digits to parse");
        }
        throw new ParseException("No number to parse");
    }
    public final long zae(BufferedReader bufferedReader) throws ParseException, IOException {
        long j;
        int iZaa = zaa(bufferedReader, this.zaqd);
        long j2 = 0;
        if (iZaa == 0) {
            return 0L;
        }
        char[] cArr = this.zaqd;
        if (iZaa > 0) {
            int i = 0;
            if (cArr[0] == '-') {
                j = Long.MIN_VALUE;
                i = 1;
            } else {
                j = -9223372036854775807L;
            }
            int i2 = i;
            int i3 = 10;
            if (i < iZaa) {
                int i4 = i + 1;
                int iDigit = Character.digit(cArr[i], 10);
                if (iDigit < 0) {
                    throw new ParseException("Unexpected non-digit character");
                }
                i = i4;
                j2 = -iDigit;
            }
            while (i < iZaa) {
                int i5 = i + 1;
                int iDigit2 = Character.digit(cArr[i], i3);
                if (iDigit2 < 0) {
                    throw new ParseException("Unexpected non-digit character");
                }
                if (j2 < -922337203685477580L) {
                    throw new ParseException("Number too large");
                }
                long j3 = j2 * 10;
                long j4 = iDigit2;
                if (j3 < j + j4) {
                    throw new ParseException("Number too large");
                }
                j2 = j3 - j4;
                i = i5;
                i3 = 10;
            }
            if (i2 == 0) {
                return -j2;
            }
            if (i > 1) {
                return j2;
            }
            throw new ParseException("No digits to parse");
        }
        throw new ParseException("No number to parse");
    }
    public final BigInteger zaf(BufferedReader bufferedReader) throws ParseException, IOException {
        int iZaa = zaa(bufferedReader, this.zaqd);
        if (iZaa == 0) {
            return null;
        }
        return new BigInteger(new String(this.zaqd, 0, iZaa));
    }
    public final boolean zaa(BufferedReader bufferedReader, boolean z) throws ParseException, IOException {
        while (true) {
            char cZaj = zaj(bufferedReader);
            if (cZaj != '\"') {
                if (cZaj == 'f') {
                    zab(bufferedReader, z ? zaqk : zaqj);
                    return false;
                }
                if (cZaj == 'n') {
                    zab(bufferedReader, zaqg);
                    return false;
                }
                if (cZaj == 't') {
                    zab(bufferedReader, z ? zaqi : zaqh);
                    return true;
                }
                throw new ParseException(new StringBuilder(19).append("Unexpected token: ").append(cZaj).toString());
            }
            if (z) {
                throw new ParseException("No boolean value found in string");
            }
            z = true;
        }
    }
    public final float zag(BufferedReader bufferedReader) throws ParseException, IOException {
        int iZaa = zaa(bufferedReader, this.zaqd);
        if (iZaa == 0) {
            return 0.0f;
        }
        return Float.parseFloat(new String(this.zaqd, 0, iZaa));
    }
    public final double zah(BufferedReader bufferedReader) throws ParseException, IOException {
        int iZaa = zaa(bufferedReader, this.zaqd);
        return iZaa == 0 ? AudioStats.AUDIO_AMPLITUDE_NONE : Double.parseDouble(new String(this.zaqd, 0, iZaa));
    }
    public final BigDecimal zai(BufferedReader bufferedReader) throws ParseException, IOException {
        int iZaa = zaa(bufferedReader, this.zaqd);
        if (iZaa == 0) {
            return null;
        }
        return new BigDecimal(new String(this.zaqd, 0, iZaa));
    }

    private final <T extends FastJsonResponse> ArrayList<T> zaa(BufferedReader bufferedReader, FastJsonResponse.Field<?, ?> field) throws ParseException, IOException {
        MainActivity.AnonymousClass1 anonymousClass1 = (ArrayList<T>) new ArrayList();
        char cZaj = zaj(bufferedReader);
        if (cZaj == ']') {
            zak(5);
            return anonymousClass1;
        }
        if (cZaj == 'n') {
            zab(bufferedReader, zaqg);
            zak(5);
            return null;
        }
        if (cZaj == '{') {
            this.zaqm.push(1);
            while (true) {
                try {
                    FastJsonResponse fastJsonResponseZacp = field.zacp();
                    if (!zaa(bufferedReader, fastJsonResponseZacp)) {
                        return anonymousClass1;
                    }
                    anonymousClass1.add(fastJsonResponseZacp);
                    char cZaj2 = zaj(bufferedReader);
                    if (cZaj2 != ',') {
                        if (cZaj2 == ']') {
                            zak(5);
                            return anonymousClass1;
                        }
                        throw new ParseException(new StringBuilder(19).append("Unexpected token: ").append(cZaj2).toString());
                    }
                    if (zaj(bufferedReader) != '{') {
                        throw new ParseException("Expected start of next object in array");
                    }
                    this.zaqm.push(1);
                } catch (IllegalAccessException e) {
                    throw new ParseException("Error instantiating inner object", e);
                } catch (InstantiationException e2) {
                    throw new ParseException("Error instantiating inner object", e2);
                }
            }
        } else {
            throw new ParseException(new StringBuilder(19).append("Unexpected token: ").append(cZaj).toString());
        }
    }

    private final char zaj(BufferedReader bufferedReader) throws ParseException, IOException {
        if (bufferedReader.read(this.zaqb) == -1) {
            return (char) 0;
        }
        while (Character.isWhitespace(this.zaqb[0])) {
            if (bufferedReader.read(this.zaqb) == -1) {
                return (char) 0;
            }
        }
        return this.zaqb[0];
    }

    private final int zaa(BufferedReader bufferedReader, char[] cArr) throws ParseException, IOException {
        int i;
        char cZaj = zaj(bufferedReader);
        if (cZaj == 0) {
            throw new ParseException("Unexpected EOF");
        }
        if (cZaj == ',') {
            throw new ParseException("Missing value");
        }
        if (cZaj == 'n') {
            zab(bufferedReader, zaqg);
            return 0;
        }
        bufferedReader.mark(1024);
        if (cZaj == '\"') {
            i = 0;
            boolean z = false;
            while (i < cArr.length && bufferedReader.read(cArr, i, 1) != -1) {
                char c = cArr[i];
                if (Character.isISOControl(c)) {
                    throw new ParseException("Unexpected control character while reading string");
                }
                if (c == '\"' && !z) {
                    bufferedReader.reset();
                    bufferedReader.skip(i + 1);
                    return i;
                }
                z = c == '\\' ? !z : false;
                i++;
            }
        } else {
            cArr[0] = cZaj;
            i = 1;
            while (i < cArr.length && bufferedReader.read(cArr, i, 1) != -1) {
                char c2 = cArr[i];
                if (c2 == '}' || c2 == ',' || Character.isWhitespace(c2) || cArr[i] == ']') {
                    bufferedReader.reset();
                    bufferedReader.skip(i - 1);
                    cArr[i] = 0;
                    return i;
                }
                i++;
            }
        }
        if (i == cArr.length) {
            throw new ParseException("Absurdly long value");
        }
        throw new ParseException("Unexpected EOF");
    }

    private final void zab(BufferedReader bufferedReader, char[] cArr) throws ParseException, IOException {
        int i = 0;
        while (i < cArr.length) {
            int i2 = bufferedReader.read(this.zaqc, 0, cArr.length - i);
            if (i2 == -1) {
                throw new ParseException("Unexpected EOF");
            }
            for (int i3 = 0; i3 < i2; i3++) {
                if (cArr[i3 + i] != this.zaqc[i3]) {
                    throw new ParseException("Unexpected character");
                }
            }
            i += i2;
        }
    }

    private final void zak(int i) throws ParseException {
        if (this.zaqm.isEmpty()) {
            throw new ParseException(new StringBuilder(46).append("Expected state ").append(i).append(" but had empty stack").toString());
        }
        int iIntValue = this.zaqm.pop().intValue();
        if (iIntValue != i) {
            throw new ParseException(new StringBuilder(46).append("Expected state ").append(i).append(" but had ").append(iIntValue).toString());
        }
    }
}

