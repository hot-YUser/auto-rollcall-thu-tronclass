package com.google.android.gms.common.internal;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import java.util.concurrent.ConcurrentHashMap;
public class LibraryVersion {
    private static final GmsLogger zzel = new GmsLogger("LibraryVersion", "");
    private static LibraryVersion zzem = new LibraryVersion();
    private ConcurrentHashMap<String, String> zzen = new ConcurrentHashMap<>();

    public static LibraryVersion getInstance() {
        return zzem;
    }

    protected LibraryVersion() {
    }

    public String getVersion(String str) {
        Preconditions.checkNotEmpty(str, "Please provide a valid libraryName");
        if (this.zzen.containsKey(str)) {
            return this.zzen.get(str);
        }
        Properties properties = new Properties();
        String property = null;
        try {
            InputStream resourceAsStream = LibraryVersion.class.getResourceAsStream(String.format("/%s.properties", str));
            if (resourceAsStream != null) {
                properties.load(resourceAsStream);
                property = properties.getProperty("version", null);
                zzel.v("LibraryVersion", new StringBuilder(String.valueOf(str).length() + 12 + String.valueOf(property).length()).append(str).append(" version is ").append(property).toString());
            } else {
                GmsLogger gmsLogger = zzel;
                String strValueOf = String.valueOf(str);
                gmsLogger.e("LibraryVersion", strValueOf.length() != 0 ? "Failed to get app version for libraryName: ".concat(strValueOf) : new String("Failed to get app version for libraryName: "));
            }
        } catch (IOException e) {
            GmsLogger gmsLogger2 = zzel;
            String strValueOf2 = String.valueOf(str);
            gmsLogger2.e("LibraryVersion", strValueOf2.length() != 0 ? "Failed to get app version for libraryName: ".concat(strValueOf2) : new String("Failed to get app version for libraryName: "), e);
        }
        if (property == null) {
            zzel.d("LibraryVersion", ".properties file is dropped during release process. Failure to read app version isexpected druing Google internal testing where locally-built libraries are used");
            property = "UNKNOWN";
        }
        this.zzen.put(str, property);
        return property;
    }
}

