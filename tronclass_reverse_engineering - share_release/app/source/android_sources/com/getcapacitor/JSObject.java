package com.getcapacitor;

import java.util.ArrayList;
import java.util.Iterator;
import org.json.JSONException;
import org.json.JSONObject;
public class JSObject extends JSONObject {
    public JSObject() {
    }

    public JSObject(String str) throws JSONException {
        super(str);
    }

    public JSObject(JSONObject jSONObject, String[] strArr) throws JSONException {
        super(jSONObject, strArr);
    }

    public static JSObject fromJSONObject(JSONObject jSONObject) throws JSONException {
        Iterator<String> itKeys = jSONObject.keys();
        ArrayList arrayList = new ArrayList();
        while (itKeys.hasNext()) {
            arrayList.add(itKeys.next());
        }
        return new JSObject(jSONObject, (String[]) arrayList.toArray(new String[arrayList.size()]));
    }

    @Override // org.json.JSONObject
    public String getString(String str) {
        return getString(str, null);
    }

    public String getString(String str, String str2) {
        String string;
        try {
            string = super.getString(str);
        } catch (JSONException unused) {
        }
        return (super.isNull(str) || string == null) ? str2 : string;
    }

    public Integer getInteger(String str) {
        return getInteger(str, null);
    }

    public Integer getInteger(String str, Integer num) {
        try {
            return Integer.valueOf(super.getInt(str));
        } catch (JSONException unused) {
            return num;
        }
    }

    public Boolean getBoolean(String str, Boolean bool) {
        try {
            return Boolean.valueOf(super.getBoolean(str));
        } catch (JSONException unused) {
            return bool;
        }
    }

    public Boolean getBool(String str) {
        return getBoolean(str, null);
    }

    public JSObject getJSObject(String str) {
        try {
            return getJSObject(str, null);
        } catch (JSONException unused) {
            return null;
        }
    }

    public JSObject getJSObject(String str, JSObject jSObject) throws JSONException {
        try {
            Object obj = get(str);
            if (obj instanceof JSONObject) {
                Iterator<String> itKeys = ((JSONObject) obj).keys();
                ArrayList arrayList = new ArrayList();
                while (itKeys.hasNext()) {
                    arrayList.add(itKeys.next());
                }
                return new JSObject((JSONObject) obj, (String[]) arrayList.toArray(new String[arrayList.size()]));
            }
        } catch (JSONException unused) {
        }
        return jSObject;
    }

    @Override // org.json.JSONObject
    public JSObject put(String str, boolean z) {
        try {
            super.put(str, z);
        } catch (JSONException unused) {
        }
        return this;
    }

    @Override // org.json.JSONObject
    public JSObject put(String str, int i) {
        try {
            super.put(str, i);
        } catch (JSONException unused) {
        }
        return this;
    }

    @Override // org.json.JSONObject
    public JSObject put(String str, long j) {
        try {
            super.put(str, j);
        } catch (JSONException unused) {
        }
        return this;
    }

    @Override // org.json.JSONObject
    public JSObject put(String str, double d) {
        try {
            super.put(str, d);
        } catch (JSONException unused) {
        }
        return this;
    }

    @Override // org.json.JSONObject
    public JSObject put(String str, Object obj) {
        try {
            super.put(str, obj);
        } catch (JSONException unused) {
        }
        return this;
    }

    public JSObject put(String str, String str2) {
        try {
            super.put(str, (Object) str2);
        } catch (JSONException unused) {
        }
        return this;
    }

    public JSObject putSafe(String str, Object obj) throws JSONException {
        return (JSObject) super.put(str, obj);
    }
}

