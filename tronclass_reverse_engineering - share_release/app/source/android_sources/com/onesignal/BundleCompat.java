package com.onesignal;

import android.os.Parcelable;
public interface BundleCompat<T> {
    boolean containsKey(String str);

    boolean getBoolean(String str);

    boolean getBoolean(String str, boolean z);

    T getBundle();

    Integer getInt(String str);

    Long getLong(String str);

    String getString(String str);

    void putBoolean(String str, Boolean bool);

    void putInt(String str, Integer num);

    void putLong(String str, Long l);

    void putString(String str, String str2);

    void setBundle(Parcelable parcelable);
}

