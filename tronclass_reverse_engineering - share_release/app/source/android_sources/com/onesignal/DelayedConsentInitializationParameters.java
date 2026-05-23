package com.onesignal;

import android.content.Context;
class DelayedConsentInitializationParameters {
    private final String appId;
    private final Context context;

    DelayedConsentInitializationParameters(Context context, String str) {
        this.context = context;
        this.appId = str;
    }

    Context getContext() {
        return this.context;
    }

    String getAppId() {
        return this.appId;
    }
}

