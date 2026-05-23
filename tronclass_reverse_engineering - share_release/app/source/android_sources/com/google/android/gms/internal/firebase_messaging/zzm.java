package com.google.android.gms.internal.firebase_messaging;

import java.io.PrintStream;
import org.opencv.imgproc.Imgproc;
public final class zzm {
    private static final zzp zza;
    private static final int zzb;
    static final class zza extends zzp {
        zza() {
        }

        @Override // com.google.android.gms.internal.firebase_messaging.zzp
        public final void zza(Throwable th, Throwable th2) {
        }
    }

    public static void zza(Throwable th, Throwable th2) {
        zza.zza(th, th2);
    }

    private static Integer zza() {
        try {
            return (Integer) Class.forName("android.os.Build$VERSION").getField("SDK_INT").get(null);
        } catch (Exception e) {
            System.err.println("Failed to retrieve value from android.os.Build$VERSION.SDK_INT due to the following exception.");
            e.printStackTrace(System.err);
            return null;
        }
    }

    /* high-level source view WARN: Removed duplicated region for block: B:7:0x0014 A[Catch: all -> 0x0028, TryCatch #0 {all -> 0x0028, blocks: (B:4:0x0006, B:6:0x000e, B:7:0x0014, B:9:0x001c, B:10:0x0022), top: B:24:0x0006 }] */
    static {
        Integer numZza;
        zzp zzaVar;
        try {
            numZza = zza();
            if (numZza != null) {
                try {
                    if (numZza.intValue() >= 19) {
                        zzaVar = new zzs();
                    } else if (!Boolean.getBoolean("com.google.devtools.build.android.desugar.runtime.twr_disable_mimic")) {
                        zzaVar = new zzq();
                    } else {
                        zzaVar = new zza();
                    }
                } catch (Throwable th) {
                    th = th;
                    PrintStream printStream = System.err;
                    String name = zza.class.getName();
                    printStream.println(new StringBuilder(String.valueOf(name).length() + Imgproc.COLOR_RGBA2YUV_YV12).append("An error has occurred when initializing the try-with-resources desuguring strategy. The default strategy ").append(name).append("will be used. The error is: ").toString());
                    th.printStackTrace(System.err);
                    zzaVar = new zza();
                }
            }
        } catch (Throwable th2) {
            th = th2;
            numZza = null;
        }
        zza = zzaVar;
        zzb = numZza == null ? 1 : numZza.intValue();
    }
}

