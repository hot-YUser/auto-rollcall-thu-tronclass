package com.tchvu3.capvoicerecorder;

import com.getcapacitor.JSObject;
import java.io.Serializable;
public class RecordData implements Serializable {
    private String mimeType;
    private int msDuration;
    private String recordDataBase64;

    public RecordData() {
    }

    public RecordData(String str, int i, String str2) {
        this.recordDataBase64 = str;
        this.msDuration = i;
        this.mimeType = str2;
    }

    public String getRecordDataBase64() {
        return this.recordDataBase64;
    }

    public void setRecordDataBase64(String str) {
        this.recordDataBase64 = str;
    }

    public int getMsDuration() {
        return this.msDuration;
    }

    public void setMsDuration(int i) {
        this.msDuration = i;
    }

    public String getMimeType() {
        return this.mimeType;
    }

    public void setMimeType(String str) {
        this.mimeType = str;
    }

    public JSObject toJSObject() {
        JSObject jSObject = new JSObject();
        jSObject.put("recordDataBase64", this.recordDataBase64);
        jSObject.put("msDuration", this.msDuration);
        jSObject.put("mimeType", this.mimeType);
        return jSObject;
    }
}

