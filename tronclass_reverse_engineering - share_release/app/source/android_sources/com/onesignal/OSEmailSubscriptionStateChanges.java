package com.onesignal;

import org.json.JSONException;
import org.json.JSONObject;
public class OSEmailSubscriptionStateChanges {
    private OSEmailSubscriptionState from;
    private OSEmailSubscriptionState to;

    public OSEmailSubscriptionStateChanges(OSEmailSubscriptionState oSEmailSubscriptionState, OSEmailSubscriptionState oSEmailSubscriptionState2) {
        this.from = oSEmailSubscriptionState;
        this.to = oSEmailSubscriptionState2;
    }

    public OSEmailSubscriptionState getTo() {
        return this.to;
    }

    public OSEmailSubscriptionState getFrom() {
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

