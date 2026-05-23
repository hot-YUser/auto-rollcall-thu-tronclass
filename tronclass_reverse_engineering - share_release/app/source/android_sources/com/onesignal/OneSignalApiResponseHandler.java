package com.onesignal;
public interface OneSignalApiResponseHandler {
    void onFailure(int i, String str, Throwable th);

    void onSuccess(String str);
}

