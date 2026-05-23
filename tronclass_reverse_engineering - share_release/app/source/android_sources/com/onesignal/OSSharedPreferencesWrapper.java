package com.onesignal;

import java.util.Set;
class OSSharedPreferencesWrapper implements OSSharedPreferences {
    OSSharedPreferencesWrapper() {
    }

    @Override // com.onesignal.OSSharedPreferences
    public String getOutcomesV2KeyName() {
        return "PREFS_OS_OUTCOMES_V2";
    }

    @Override // com.onesignal.OSSharedPreferences
    public String getPreferencesName() {
        return OneSignalPrefs.PREFS_ONESIGNAL;
    }

    @Override // com.onesignal.OSSharedPreferences
    public String getString(String str, String str2, String str3) {
        return OneSignalPrefs.getString(str, str2, str3);
    }

    @Override // com.onesignal.OSSharedPreferences
    public void saveString(String str, String str2, String str3) {
        OneSignalPrefs.saveString(str, str2, str3);
    }

    @Override // com.onesignal.OSSharedPreferences
    public boolean getBool(String str, String str2, boolean z) {
        return OneSignalPrefs.getBool(str, str2, z);
    }

    @Override // com.onesignal.OSSharedPreferences
    public void saveBool(String str, String str2, boolean z) {
        OneSignalPrefs.saveBool(str, str2, z);
    }

    @Override // com.onesignal.OSSharedPreferences
    public int getInt(String str, String str2, int i) {
        return OneSignalPrefs.getInt(str, str2, i);
    }

    @Override // com.onesignal.OSSharedPreferences
    public void saveInt(String str, String str2, int i) {
        OneSignalPrefs.saveInt(str, str2, i);
    }

    @Override // com.onesignal.OSSharedPreferences
    public long getLong(String str, String str2, long j) {
        return OneSignalPrefs.getLong(str, str2, j);
    }

    @Override // com.onesignal.OSSharedPreferences
    public void saveLong(String str, String str2, long j) {
        OneSignalPrefs.saveLong(str, str2, j);
    }

    @Override // com.onesignal.OSSharedPreferences
    public Set<String> getStringSet(String str, String str2, Set<String> set) {
        return OneSignalPrefs.getStringSet(str, str2, set);
    }

    @Override // com.onesignal.OSSharedPreferences
    public void saveStringSet(String str, String str2, Set<String> set) {
        OneSignalPrefs.saveStringSet(str, str2, set);
    }

    @Override // com.onesignal.OSSharedPreferences
    public Object getObject(String str, String str2, Object obj) {
        return OneSignalPrefs.getObject(str, str2, obj);
    }

    @Override // com.onesignal.OSSharedPreferences
    public void saveObject(String str, String str2, Object obj) {
        OneSignalPrefs.saveObject(str, str2, obj);
    }
}

