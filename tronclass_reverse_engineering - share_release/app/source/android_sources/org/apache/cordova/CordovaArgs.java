package org.apache.cordova;

import android.util.Base64;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class CordovaArgs {
    private JSONArray baseArgs;

    public CordovaArgs(JSONArray jSONArray) {
        this.baseArgs = jSONArray;
    }

    public Object get(int i) throws JSONException {
        return this.baseArgs.get(i);
    }

    public boolean getBoolean(int i) throws JSONException {
        return this.baseArgs.getBoolean(i);
    }

    public double getDouble(int i) throws JSONException {
        return this.baseArgs.getDouble(i);
    }

    public int getInt(int i) throws JSONException {
        return this.baseArgs.getInt(i);
    }

    public JSONArray getJSONArray(int i) throws JSONException {
        return this.baseArgs.getJSONArray(i);
    }

    public JSONObject getJSONObject(int i) throws JSONException {
        return this.baseArgs.getJSONObject(i);
    }

    public long getLong(int i) throws JSONException {
        return this.baseArgs.getLong(i);
    }

    public String getString(int i) throws JSONException {
        return this.baseArgs.getString(i);
    }

    public Object opt(int i) {
        return this.baseArgs.opt(i);
    }

    public boolean optBoolean(int i) {
        return this.baseArgs.optBoolean(i);
    }

    public double optDouble(int i) {
        return this.baseArgs.optDouble(i);
    }

    public int optInt(int i) {
        return this.baseArgs.optInt(i);
    }

    public JSONArray optJSONArray(int i) {
        return this.baseArgs.optJSONArray(i);
    }

    public JSONObject optJSONObject(int i) {
        return this.baseArgs.optJSONObject(i);
    }

    public long optLong(int i) {
        return this.baseArgs.optLong(i);
    }

    public String optString(int i) {
        return this.baseArgs.optString(i);
    }

    public boolean isNull(int i) {
        return this.baseArgs.isNull(i);
    }

    public byte[] getArrayBuffer(int i) throws JSONException {
        return Base64.decode(this.baseArgs.getString(i), 0);
    }
}

