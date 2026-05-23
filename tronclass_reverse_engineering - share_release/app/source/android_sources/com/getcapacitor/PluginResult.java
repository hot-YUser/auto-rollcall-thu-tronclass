package com.getcapacitor;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;
public class PluginResult {
    private final JSObject json;

    public PluginResult() {
        this(new JSObject());
    }

    public PluginResult(JSObject jSObject) {
        this.json = jSObject;
    }

    public PluginResult put(String str, boolean z) {
        return jsonPut(str, Boolean.valueOf(z));
    }

    public PluginResult put(String str, double d) {
        return jsonPut(str, Double.valueOf(d));
    }

    public PluginResult put(String str, int i) {
        return jsonPut(str, Integer.valueOf(i));
    }

    public PluginResult put(String str, long j) {
        return jsonPut(str, Long.valueOf(j));
    }

    public PluginResult put(String str, Date date) {
        TimeZone timeZone = TimeZone.getTimeZone("UTC");
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm'Z'");
        simpleDateFormat.setTimeZone(timeZone);
        return jsonPut(str, simpleDateFormat.format(date));
    }

    public PluginResult put(String str, Object obj) {
        return jsonPut(str, obj);
    }

    public PluginResult put(String str, PluginResult pluginResult) {
        return jsonPut(str, pluginResult.json);
    }

    PluginResult jsonPut(String str, Object obj) {
        try {
            this.json.put(str, obj);
        } catch (Exception e) {
            Logger.error(Logger.tags("Plugin"), "", e);
        }
        return this;
    }

    public String toString() {
        return this.json.toString();
    }

    public JSObject getWrappedResult() {
        JSObject jSObject = new JSObject();
        jSObject.put("pluginId", this.json.getString("pluginId"));
        jSObject.put("methodName", this.json.getString("methodName"));
        jSObject.put("success", (Object) this.json.getBoolean("success", false));
        jSObject.put("data", (Object) this.json.getJSObject("data"));
        jSObject.put("error", (Object) this.json.getJSObject("error"));
        return jSObject;
    }
}

