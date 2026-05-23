package com.google.android.gms.common.util;

import android.os.Process;
import android.os.StrictMode;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import javax.annotation.Nullable;
public class ProcessUtils {
    private static String zzhf;
    private static int zzhg;

    private ProcessUtils() {
    }

    @Nullable
    public static String getMyProcessName() {
        if (zzhf == null) {
            if (zzhg == 0) {
                zzhg = Process.myPid();
            }
            zzhf = zzd(zzhg);
        }
        return zzhf;
    }

    @Nullable
    private static String zzd(int i) throws Throwable {
        Throwable th;
        BufferedReader bufferedReaderZzk;
        String strTrim = null;
        if (i <= 0) {
            return null;
        }
        try {
            bufferedReaderZzk = zzk(new StringBuilder(25).append("/proc/").append(i).append("/cmdline").toString());
        } catch (IOException unused) {
            bufferedReaderZzk = null;
        } catch (Throwable th2) {
            th = th2;
            bufferedReaderZzk = null;
        }
        try {
            strTrim = bufferedReaderZzk.readLine().trim();
            IOUtils.closeQuietly(bufferedReaderZzk);
        } catch (IOException unused2) {
            IOUtils.closeQuietly(bufferedReaderZzk);
        } catch (Throwable th3) {
            th = th3;
            IOUtils.closeQuietly(bufferedReaderZzk);
            throw th;
        }
        return strTrim;
    }

    private static BufferedReader zzk(String str) throws IOException {
        StrictMode.ThreadPolicy threadPolicyAllowThreadDiskReads = StrictMode.allowThreadDiskReads();
        try {
            return new BufferedReader(new FileReader(str));
        } finally {
            StrictMode.setThreadPolicy(threadPolicyAllowThreadDiskReads);
        }
    }
}

