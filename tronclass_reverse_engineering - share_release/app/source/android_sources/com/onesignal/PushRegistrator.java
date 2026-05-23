package com.onesignal;

import android.content.Context;
public interface PushRegistrator {

    public interface RegisteredHandler {
        void complete(String str, int i);
    }

    void registerForPush(Context context, String str, RegisteredHandler registeredHandler);
}

