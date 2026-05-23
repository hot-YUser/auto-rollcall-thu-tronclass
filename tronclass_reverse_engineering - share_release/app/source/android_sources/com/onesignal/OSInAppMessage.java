package com.onesignal;

import org.json.JSONException;
import org.json.JSONObject;
public class OSInAppMessage {
    public static final String IAM_ID = "messageId";
    protected String messageId;

    OSInAppMessage(String str) {
        this.messageId = str;
    }

    public String getMessageId() {
        return this.messageId;
    }

    public JSONObject toJSONObject() {
        JSONObject jSONObject = new JSONObject();
        try {
            jSONObject.put(IAM_ID, this.messageId);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jSONObject;
    }
}

