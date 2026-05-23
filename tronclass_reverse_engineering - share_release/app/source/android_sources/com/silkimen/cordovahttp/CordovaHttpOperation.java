package com.silkimen.cordovahttp;

import com.silkimen.http.TLSConfiguration;
import org.apache.cordova.CallbackContext;
import org.json.JSONObject;
class CordovaHttpOperation extends CordovaHttpBase {
    public CordovaHttpOperation(String str, String str2, String str3, Object obj, JSONObject jSONObject, int i, boolean z, String str4, TLSConfiguration tLSConfiguration, CallbackContext callbackContext) {
        super(str, str2, str3, obj, jSONObject, i, z, str4, tLSConfiguration, callbackContext);
    }

    public CordovaHttpOperation(String str, String str2, JSONObject jSONObject, int i, boolean z, String str3, TLSConfiguration tLSConfiguration, CallbackContext callbackContext) {
        super(str, str2, jSONObject, i, z, str3, tLSConfiguration, callbackContext);
    }
}

