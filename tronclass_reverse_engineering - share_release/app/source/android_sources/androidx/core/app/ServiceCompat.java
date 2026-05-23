package androidx.core.app;

import android.app.Service;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
public final class ServiceCompat {
    public static final int START_STICKY = 1;
    public static final int STOP_FOREGROUND_DETACH = 2;
    public static final int STOP_FOREGROUND_REMOVE = 1;

    @Retention(RetentionPolicy.SOURCE)
    public @interface StopForegroundFlags {
    }

    private ServiceCompat() {
    }

    public static void stopForeground(Service service, int i) {
        Api24Impl.stopForeground(service, i);
    }

    static class Api24Impl {
        private Api24Impl() {
        }

        static void stopForeground(Service service, int i) {
            service.stopForeground(i);
        }
    }
}

