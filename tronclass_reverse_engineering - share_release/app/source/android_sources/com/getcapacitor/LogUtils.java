package com.getcapacitor;

import android.text.TextUtils;
public abstract class LogUtils {
    public static final String LOG_TAG_CORE = "Capacitor";
    public static final String LOG_TAG_PLUGIN = "Capacitor/Plugin";

    public static String getCoreTag(String... strArr) {
        return getLogTag("Capacitor", strArr);
    }

    public static String getPluginTag(String... strArr) {
        return getLogTag(LOG_TAG_PLUGIN, strArr);
    }

    private static String getLogTag(String str, String[] strArr) {
        return (strArr == null || strArr.length <= 0) ? str : str + "/" + TextUtils.join("/", strArr);
    }
}

