package androidx.camera.core.impl;

import android.os.Build;
public abstract class DeviceProperties {
    public abstract String manufacturer();

    public abstract String model();

    public abstract int sdkVersion();

    public static DeviceProperties create() {
        return create(Build.MANUFACTURER, Build.MODEL, Build.VERSION.SDK_INT);
    }

    public static DeviceProperties create(String str, String str2, int i) {
        return new AutoValue_DeviceProperties(str, str2, i);
    }
}

