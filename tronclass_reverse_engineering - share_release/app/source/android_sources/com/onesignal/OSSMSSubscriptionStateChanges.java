package com.onesignal;

import org.json.JSONException;
import org.json.JSONObject;
public class OSSMSSubscriptionStateChanges {
    private OSSMSSubscriptionState from;
    private OSSMSSubscriptionState to;

    public OSSMSSubscriptionStateChanges(OSSMSSubscriptionState oSSMSSubscriptionState, OSSMSSubscriptionState oSSMSSubscriptionState2) {
        this.from = oSSMSSubscriptionState;
        this.to = oSSMSSubscriptionState2;
    }

    public OSSMSSubscriptionState getTo() {
        return this.to;
    }

    public OSSMSSubscriptionState getFrom() {
        return this.from;
    }

    public JSONObject toJSONObject() {
        JSONObject jSONObject = new JSONObject();
        try {
            jSONObject.put("from", this.from.toJSONObject());
            jSONObject.put("to", this.to.toJSONObject());
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jSONObject;
    }

    public String toString() {
        return toJSONObject().toString();
    }
}

