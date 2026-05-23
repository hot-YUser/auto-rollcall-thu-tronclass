package com.google.firebase.messaging;

import java.util.Locale;
public final class SendException extends Exception {
    public static final int ERROR_INVALID_PARAMETERS = 1;
    public static final int ERROR_SIZE = 2;
    public static final int ERROR_TOO_MANY_MESSAGES = 4;
    public static final int ERROR_TTL_EXCEEDED = 3;
    public static final int ERROR_UNKNOWN = 0;
    private final int zza;

    SendException(String str) {
        super(str);
        int i = 0;
        if (str != null) {
            String lowerCase = str.toLowerCase(Locale.US);
            lowerCase.hashCode();
            switch (lowerCase) {
                case "service_not_available":
                    i = 3;
                    break;
                case "toomanymessages":
                    i = 4;
                    break;
                case "invalid_parameters":
                case "missing_to":
                    i = 1;
                    break;
                case "messagetoobig":
                    i = 2;
                    break;
            }
        }
        this.zza = i;
    }

    public final int getErrorCode() {
        return this.zza;
    }
}

