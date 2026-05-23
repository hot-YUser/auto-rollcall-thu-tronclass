package dagger.internal;
public final class Preconditions {
    public static <T> T checkNotNull(T t) {
        t.getClass();
        return t;
    }

    public static <T> T checkNotNull(T t, String str) {
        if (t != null) {
            return t;
        }
        throw new NullPointerException(str);
    }

    public static <T> T checkNotNull(T t, String str, Object obj) {
        String strValueOf;
        if (t != null) {
            return t;
        }
        if (str.contains("%s")) {
            if (str.indexOf("%s") != str.lastIndexOf("%s")) {
                throw new IllegalArgumentException("errorMessageTemplate has more than one format specifier");
            }
            if (obj instanceof Class) {
                strValueOf = ((Class) obj).getCanonicalName();
            } else {
                strValueOf = String.valueOf(obj);
            }
            throw new NullPointerException(str.replace("%s", strValueOf));
        }
        throw new IllegalArgumentException("errorMessageTemplate has no format specifiers");
    }

    public static <T> void checkBuilderRequirement(T t, Class<T> cls) {
        if (t == null) {
            throw new IllegalStateException(cls.getCanonicalName() + " must be set");
        }
    }

    private Preconditions() {
    }
}

