package com.google.android.gms.common.util;

import androidx.collection.ArrayMap;
import androidx.collection.ArraySet;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
public final class CollectionUtils {
    private CollectionUtils() {
    }

    public static boolean isEmpty(Collection<?> collection) {
        if (collection == null) {
            return true;
        }
        return collection.isEmpty();
    }

    @Deprecated
    public static <T> List<T> listOf() {
        return Collections.emptyList();
    }

    @Deprecated
    public static <T> List<T> listOf(T t) {
        return Collections.singletonList(t);
    }

    @Deprecated
    public static <T> List<T> listOf(T... tArr) {
        int length = tArr.length;
        if (length == 0) {
            return listOf();
        }
        if (length == 1) {
            return listOf(tArr[0]);
        }
        return Collections.unmodifiableList(Arrays.asList(tArr));
    }

    private static <T> Set<T> zza(int i, boolean z) {
        float f = z ? 0.75f : 1.0f;
        if (i <= (z ? 128 : 256)) {
            return new ArraySet(i);
        }
        return new HashSet(i, f);
    }

    @Deprecated
    public static <T> Set<T> setOf(T t, T t2, T t3) {
        Set setZza = zza(3, false);
        setZza.add(t);
        setZza.add(t2);
        setZza.add(t3);
        return Collections.unmodifiableSet(setZza);
    }

    @Deprecated
    public static <T> Set<T> setOf(T... tArr) {
        int length = tArr.length;
        if (length == 0) {
            return Collections.emptySet();
        }
        if (length == 1) {
            return Collections.singleton(tArr[0]);
        }
        if (length == 2) {
            T t = tArr[0];
            T t2 = tArr[1];
            Set setZza = zza(2, false);
            setZza.add(t);
            setZza.add(t2);
            return Collections.unmodifiableSet(setZza);
        }
        if (length == 3) {
            return setOf(tArr[0], tArr[1], tArr[2]);
        }
        if (length == 4) {
            T t3 = tArr[0];
            T t4 = tArr[1];
            T t5 = tArr[2];
            T t6 = tArr[3];
            Set setZza2 = zza(4, false);
            setZza2.add(t3);
            setZza2.add(t4);
            setZza2.add(t5);
            setZza2.add(t6);
            return Collections.unmodifiableSet(setZza2);
        }
        Set setZza3 = zza(tArr.length, false);
        Collections.addAll(setZza3, tArr);
        return Collections.unmodifiableSet(setZza3);
    }

    public static <T> Set<T> mutableSetOfWithSize(int i) {
        if (i == 0) {
            return new ArraySet();
        }
        return zza(i, true);
    }

    private static <K, V> Map<K, V> zzb(int i, boolean z) {
        if (i <= 256) {
            return new ArrayMap(i);
        }
        return new HashMap(i, 1.0f);
    }

    public static <K, V> Map<K, V> mapOf(K k, V v, K k2, V v2, K k3, V v3) {
        Map mapZzb = zzb(3, false);
        mapZzb.put(k, v);
        mapZzb.put(k2, v2);
        mapZzb.put(k3, v3);
        return Collections.unmodifiableMap(mapZzb);
    }

    public static <K, V> Map<K, V> mapOf(K k, V v, K k2, V v2, K k3, V v3, K k4, V v4, K k5, V v5, K k6, V v6) {
        Map mapZzb = zzb(6, false);
        mapZzb.put(k, v);
        mapZzb.put(k2, v2);
        mapZzb.put(k3, v3);
        mapZzb.put(k4, v4);
        mapZzb.put(k5, v5);
        mapZzb.put(k6, v6);
        return Collections.unmodifiableMap(mapZzb);
    }

    public static <K, V> Map<K, V> mapOfKeyValueArrays(K[] kArr, V[] vArr) {
        if (kArr.length != vArr.length) {
            int length = kArr.length;
            throw new IllegalArgumentException(new StringBuilder(66).append("Key and values array lengths not equal: ").append(length).append(" != ").append(vArr.length).toString());
        }
        int length2 = kArr.length;
        if (length2 == 0) {
            return Collections.emptyMap();
        }
        if (length2 == 1) {
            return Collections.singletonMap(kArr[0], vArr[0]);
        }
        Map mapZzb = zzb(kArr.length, false);
        for (int i = 0; i < kArr.length; i++) {
            mapZzb.put(kArr[i], vArr[i]);
        }
        return Collections.unmodifiableMap(mapZzb);
    }
}

