package androidx.core.os;

import android.os.Message;
public final class MessageCompat {
    private static boolean sTryIsAsynchronous = true;
    private static boolean sTrySetAsynchronous = true;

    public static void setAsynchronous(Message message, boolean z) {
        Api22Impl.setAsynchronous(message, z);
    }

    public static boolean isAsynchronous(Message message) {
        return Api22Impl.isAsynchronous(message);
    }

    private MessageCompat() {
    }

    static class Api22Impl {
        private Api22Impl() {
        }

        static boolean isAsynchronous(Message message) {
            return message.isAsynchronous();
        }

        static void setAsynchronous(Message message, boolean z) {
            message.setAsynchronous(z);
        }
    }
}

