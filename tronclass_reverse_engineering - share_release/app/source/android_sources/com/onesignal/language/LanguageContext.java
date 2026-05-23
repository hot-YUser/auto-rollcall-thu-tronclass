package com.onesignal.language;

import com.onesignal.OSSharedPreferences;
public class LanguageContext {
    private static LanguageContext instance;
    private LanguageProvider strategy;

    public static LanguageContext getInstance() {
        return instance;
    }

    public LanguageContext(OSSharedPreferences oSSharedPreferences) {
        instance = this;
        if (oSSharedPreferences.getString(oSSharedPreferences.getPreferencesName(), LanguageProviderAppDefined.PREFS_OS_LANGUAGE, null) != null) {
            this.strategy = new LanguageProviderAppDefined(oSSharedPreferences);
        } else {
            this.strategy = new LanguageProviderDevice();
        }
    }

    public void setStrategy(LanguageProvider languageProvider) {
        this.strategy = languageProvider;
    }

    public String getLanguage() {
        return this.strategy.getLanguage();
    }
}

