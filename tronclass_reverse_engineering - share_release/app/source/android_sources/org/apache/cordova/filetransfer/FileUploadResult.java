package org.apache.cordova.filetransfer;

import org.json.JSONException;
import org.json.JSONObject;
public class FileUploadResult {
    private long bytesSent = 0;
    private int responseCode = -1;
    private String response = null;
    private String objectId = null;

    public long getBytesSent() {
        return this.bytesSent;
    }

    public void setBytesSent(long j) {
        this.bytesSent = j;
    }

    public int getResponseCode() {
        return this.responseCode;
    }

    public void setResponseCode(int i) {
        this.responseCode = i;
    }

    public String getResponse() {
        return this.response;
    }

    public void setResponse(String str) {
        this.response = str;
    }

    public String getObjectId() {
        return this.objectId;
    }

    public void setObjectId(String str) {
        this.objectId = str;
    }

    public JSONObject toJSONObject() throws JSONException {
        return new JSONObject("{bytesSent:" + this.bytesSent + ",responseCode:" + this.responseCode + ",response:" + JSONObject.quote(this.response) + ",objectId:" + JSONObject.quote(this.objectId) + "}");
    }
}

