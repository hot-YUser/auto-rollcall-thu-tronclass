package com.onesignal.language;

import com.onesignal.OSSharedPreferences;
public class LanguageProviderAppDefined implements LanguageProvider {
    private static final String DEFAULT_LANGUAGE = "en";
    public static final String PREFS_OS_LANGUAGE = "PREFS_OS_LANGUAGE";
    private final OSSharedPreferences preferences;

    public LanguageProviderAppDefined(OSSharedPreferences oSSharedPreferences) {
        this.preferences = oSSharedPreferences;
    }

    public void setLanguage(String str) {
        OSSharedPreferences oSSharedPreferences = this.preferences;
        oSSharedPreferences.saveString(oSSharedPreferences.getPreferencesName(), PREFS_OS_LANGUAGE, str);
    }

    @Override // com.onesignal.language.LanguageProvider
    public String getLanguage() {
        OSSharedPreferences oSSharedPreferences = this.preferences;
        return oSSharedPreferences.getString(oSSharedPreferences.getPreferencesName(), PREFS_OS_LANGUAGE, DEFAULT_LANGUAGE);
    }
}

