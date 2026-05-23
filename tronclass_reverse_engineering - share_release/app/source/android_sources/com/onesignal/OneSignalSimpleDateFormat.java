package com.onesignal;

import java.text.SimpleDateFormat;
import java.util.Locale;
class OneSignalSimpleDateFormat {
    OneSignalSimpleDateFormat() {
    }

    static SimpleDateFormat iso8601Format() {
        return new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.US);
    }
}

