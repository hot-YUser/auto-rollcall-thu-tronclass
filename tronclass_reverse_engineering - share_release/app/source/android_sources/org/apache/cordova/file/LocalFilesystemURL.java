package org.apache.cordova.file;

import android.net.Uri;
public class LocalFilesystemURL {
    public static final String FILESYSTEM_PROTOCOL = "cdvfile";
    public final String fsName;
    public final boolean isDirectory;
    public final String path;
    public final Uri uri;

    private LocalFilesystemURL(Uri uri, String str, String str2, boolean z) {
        this.uri = uri;
        this.fsName = str;
        this.path = str2;
        this.isDirectory = z;
    }

    public static LocalFilesystemURL parse(Uri uri) {
        int iIndexOf;
        if (!FILESYSTEM_PROTOCOL.equals(uri.getScheme())) {
            return null;
        }
        String path = uri.getPath();
        if (path.length() < 1 || (iIndexOf = path.indexOf(47, 1)) < 0) {
            return null;
        }
        String strSubstring = path.substring(1, iIndexOf);
        String strSubstring2 = path.substring(iIndexOf);
        return new LocalFilesystemURL(uri, strSubstring, strSubstring2, strSubstring2.charAt(strSubstring2.length() - 1) == '/');
    }

    public static LocalFilesystemURL parse(String str) {
        return parse(Uri.parse(str));
    }

    public String toString() {
        return this.uri.toString();
    }
}

