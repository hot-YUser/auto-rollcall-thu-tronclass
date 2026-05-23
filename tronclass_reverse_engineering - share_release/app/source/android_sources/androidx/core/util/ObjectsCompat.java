package androidx.core.util;

import java.util.Objects;
public class ObjectsCompat {
    private ObjectsCompat() {
    }

    public static boolean equals(Object obj, Object obj2) {
        return Api19Impl.equals(obj, obj2);
    }

    public static int hashCode(Object obj) {
        if (obj != null) {
            return obj.hashCode();
        }
        return 0;
    }

    public static int hash(Object... objArr) {
        return Api19Impl.hash(objArr);
    }

    public static String toString(Object obj, String str) {
        return obj != null ? obj.toString() : str;
    }

    public static <T> T requireNonNull(T t) {
        t.getClass();
        return t;
    }

    public static <T> T requireNonNull(T t, String str) {
        if (t != null) {
            return t;
        }
        throw new NullPointerException(str);
    }

    static class Api19Impl {
        private Api19Impl() {
        }

        static boolean equals(Object obj, Object obj2) {
            return Objects.equals(obj, obj2);
        }

        static int hash(Object... objArr) {
            return Objects.hash(objArr);
        }
    }
}

