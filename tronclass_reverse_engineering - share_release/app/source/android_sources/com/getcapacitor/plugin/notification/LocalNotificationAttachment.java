package com.getcapacitor.plugin.notification;

import com.getcapacitor.JSObject;
import com.onesignal.outcomes.OSOutcomeConstants;
import java.util.ArrayList;
import java.util.List;
import org.apache.cordova.globalization.Globalization;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
public class LocalNotificationAttachment {
    private String id;
    private JSONObject options;
    private String url;

    public String getId() {
        return this.id;
    }

    public void setId(String str) {
        this.id = str;
    }

    public String getUrl() {
        return this.url;
    }

    public void setUrl(String str) {
        this.url = str;
    }

    public JSONObject getOptions() {
        return this.options;
    }

    public void setOptions(JSONObject jSONObject) {
        this.options = jSONObject;
    }

    public static List<LocalNotificationAttachment> getAttachments(JSObject jSObject) {
        JSONArray jSONArray;
        JSONObject jSONObject;
        JSObject jSObjectFromJSONObject;
        ArrayList arrayList = new ArrayList();
        try {
            jSONArray = jSObject.getJSONArray("attachments");
        } catch (Exception unused) {
            jSONArray = null;
        }
        if (jSONArray != null) {
            for (int i = 0; i < jSONArray.length(); i++) {
                LocalNotificationAttachment localNotificationAttachment = new LocalNotificationAttachment();
                try {
                    jSONObject = jSONArray.getJSONObject(i);
                } catch (JSONException unused2) {
                    jSONObject = null;
                }
                if (jSONObject != null) {
                    try {
                        jSObjectFromJSONObject = JSObject.fromJSONObject(jSONObject);
                    } catch (JSONException unused3) {
                        jSObjectFromJSONObject = null;
                    }
                    localNotificationAttachment.setId(jSObjectFromJSONObject.getString(OSOutcomeConstants.OUTCOME_ID));
                    localNotificationAttachment.setUrl(jSObjectFromJSONObject.getString("url"));
                    try {
                        localNotificationAttachment.setOptions(jSObjectFromJSONObject.getJSONObject(Globalization.OPTIONS));
                    } catch (JSONException unused4) {
                    }
                    arrayList.add(localNotificationAttachment);
                }
            }
        }
        return arrayList;
    }
}

