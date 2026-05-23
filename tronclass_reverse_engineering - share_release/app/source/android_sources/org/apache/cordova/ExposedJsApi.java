package org.apache.cordova;

import org.json.JSONException;
public interface ExposedJsApi {
    String exec(int i, String str, String str2, String str3, String str4) throws JSONException, IllegalAccessException;

    String retrieveJsMessages(int i, boolean z) throws IllegalAccessException;

    void setNativeToJsBridgeMode(int i, int i2) throws IllegalAccessException;
}

