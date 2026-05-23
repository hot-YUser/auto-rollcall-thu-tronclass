package org.apache.cordova.file;

import android.os.Environment;
import android.os.StatFs;
import java.io.File;
public class DirectoryManager {
    private static final String LOG_TAG = "DirectoryManager";

    public static boolean testFileExists(String str) {
        if (!testSaveLocationExists() || str.equals("")) {
            return false;
        }
        return constructFilePaths(Environment.getExternalStorageDirectory().toString(), str).exists();
    }

    public static long getFreeExternalStorageSpace() {
        if (Environment.getExternalStorageState().equals("mounted")) {
            return getFreeSpaceInBytes(Environment.getExternalStorageDirectory().getPath()) / 1024;
        }
        return -1L;
    }

    public static long getFreeSpaceInBytes(String str) {
        try {
            StatFs statFs = new StatFs(str);
            return ((long) statFs.getAvailableBlocks()) * ((long) statFs.getBlockSize());
        } catch (IllegalArgumentException unused) {
            return 0L;
        }
    }

    public static boolean testSaveLocationExists() {
        return Environment.getExternalStorageState().equals("mounted");
    }

    private static File constructFilePaths(String str, String str2) {
        if (str2.startsWith(str)) {
            return new File(str2);
        }
        return new File(str + "/" + str2);
    }
}

