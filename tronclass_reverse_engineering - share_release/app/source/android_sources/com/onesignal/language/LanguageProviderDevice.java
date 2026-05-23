package com.onesignal.language;

import java.util.Locale;
public class LanguageProviderDevice implements LanguageProvider {
    private static final String CHINESE = "zh";
    private static final String HEBREW_CORRECTED = "he";
    private static final String HEBREW_INCORRECT = "iw";
    private static final String INDONESIAN_CORRECTED = "id";
    private static final String INDONESIAN_INCORRECT = "in";
    private static final String YIDDISH_CORRECTED = "yi";
    private static final String YIDDISH_INCORRECT = "ji";

    @Override // com.onesignal.language.LanguageProvider
    public String getLanguage() {
        String language;
        language = Locale.getDefault().getLanguage();
        language.hashCode();
        switch (language) {
            case "in":
                return "id";
            case "iw":
                return HEBREW_CORRECTED;
            case "ji":
                return YIDDISH_CORRECTED;
            case "zh":
                return language + "-" + Locale.getDefault().getCountry();
            default:
                return language;
        }
    }
}

