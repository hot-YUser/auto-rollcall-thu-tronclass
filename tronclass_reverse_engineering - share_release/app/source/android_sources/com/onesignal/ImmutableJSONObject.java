package com.onesignal;

import org.json.JSONException;
import org.json.JSONObject;
class ImmutableJSONObject {
    private final JSONObject jsonObject;

    public ImmutableJSONObject() {
        this.jsonObject = new JSONObject();
    }

    public ImmutableJSONObject(JSONObject jSONObject) {
        this.jsonObject = jSONObject;
    }

    public long getLong(String str) throws JSONException {
        return this.jsonObject.getLong(str);
    }

    public boolean has(String str) {
        return this.jsonObject.has(str);
    }

    public Object opt(String str) {
        return this.jsonObject.opt(str);
    }

    public String optString(String str) {
        return this.jsonObject.optString(str);
    }

    public String optString(String str, String str2) {
        return this.jsonObject.optString(str, str2);
    }

    public boolean optBoolean(String str) {
        return this.jsonObject.optBoolean(str);
    }

    public boolean optBoolean(String str, boolean z) {
        return this.jsonObject.optBoolean(str, z);
    }

    public long optLong(String str) {
        return this.jsonObject.optLong(str);
    }

    public int optInt(String str) {
        return this.jsonObject.optInt(str);
    }

    public int optInt(String str, int i) {
        return this.jsonObject.optInt(str, i);
    }

    public JSONObject optJSONObject(String str) {
        return this.jsonObject.optJSONObject(str);
    }

    public String toString() {
        return "ImmutableJSONObject{jsonObject=" + this.jsonObject + '}';
    }
}

