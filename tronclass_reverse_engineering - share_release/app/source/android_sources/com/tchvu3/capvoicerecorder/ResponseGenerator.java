package com.tchvu3.capvoicerecorder;

import com.getcapacitor.JSObject;
public abstract class ResponseGenerator {
    private static final String RESPONSE_KEY = "value";

    public static JSObject fromBoolean(boolean z) {
        return z ? successResponse() : failResponse();
    }

    public static JSObject successResponse() {
        JSObject jSObject = new JSObject();
        jSObject.put(RESPONSE_KEY, true);
        return jSObject;
    }

    public static JSObject failResponse() {
        JSObject jSObject = new JSObject();
        jSObject.put(RESPONSE_KEY, false);
        return jSObject;
    }

    public static JSObject dataResponse(Object obj) {
        JSObject jSObject = new JSObject();
        jSObject.put(RESPONSE_KEY, obj);
        return jSObject;
    }
}

