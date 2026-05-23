package androidx.core.text;

import android.text.TextUtils;
import java.util.Locale;
public final class TextUtilsCompat {
    private static final String ARAB_SCRIPT_SUBTAG = "Arab";
    private static final String HEBR_SCRIPT_SUBTAG = "Hebr";
    private static final Locale ROOT = new Locale("", "");

    public static String htmlEncode(String str) {
        return TextUtils.htmlEncode(str);
    }

    public static int getLayoutDirectionFromLocale(Locale locale) {
        return Api17Impl.getLayoutDirectionFromLocale(locale);
    }

    private static int getLayoutDirectionFromFirstChar(Locale locale) {
        byte directionality = Character.getDirectionality(locale.getDisplayName(locale).charAt(0));
        return (directionality == 1 || directionality == 2) ? 1 : 0;
    }

    private TextUtilsCompat() {
    }

    static class Api17Impl {
        private Api17Impl() {
        }

        static int getLayoutDirectionFromLocale(Locale locale) {
            return TextUtils.getLayoutDirectionFromLocale(locale);
        }
    }
}

