package org.apache.cordova;

import android.os.Bundle;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
public class CordovaPreferences {
    private Bundle preferencesBundleExtras;
    private HashMap<String, String> prefs = new HashMap<>(20);

    public void setPreferencesBundle(Bundle bundle) {
        this.preferencesBundleExtras = bundle;
    }

    public void set(String str, String str2) {
        this.prefs.put(str.toLowerCase(Locale.ENGLISH), str2);
    }

    public void set(String str, boolean z) {
        set(str, "" + z);
    }

    public void set(String str, int i) {
        set(str, "" + i);
    }

    public void set(String str, double d) {
        set(str, "" + d);
    }

    public Map<String, String> getAll() {
        return this.prefs;
    }

    public boolean getBoolean(String str, boolean z) {
        String str2 = this.prefs.get(str.toLowerCase(Locale.ENGLISH));
        return str2 != null ? Boolean.parseBoolean(str2) : z;
    }

    public boolean contains(String str) {
        return getString(str, null) != null;
    }

    public int getInteger(String str, int i) {
        String str2 = this.prefs.get(str.toLowerCase(Locale.ENGLISH));
        return str2 != null ? (int) Long.decode(str2).longValue() : i;
    }

    public double getDouble(String str, double d) {
        String str2 = this.prefs.get(str.toLowerCase(Locale.ENGLISH));
        return str2 != null ? Double.valueOf(str2).doubleValue() : d;
    }

    public String getString(String str, String str2) {
        String str3 = this.prefs.get(str.toLowerCase(Locale.ENGLISH));
        return str3 != null ? str3 : str2;
    }
}

