package com.getcapacitor.plugin.notification;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Logger;
import com.onesignal.OneSignalDbContract;
import com.onesignal.outcomes.OSOutcomeConstants;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import org.json.JSONArray;
import org.json.JSONObject;
public class NotificationAction {
    private String id;
    private Boolean input;
    private String title;

    public NotificationAction() {
    }

    public NotificationAction(String str, String str2, Boolean bool) {
        this.id = str;
        this.title = str2;
        this.input = bool;
    }

    public static Map<String, NotificationAction[]> buildTypes(JSArray jSArray) {
        HashMap map = new HashMap();
        try {
            Iterator it = jSArray.toList().iterator();
            while (it.hasNext()) {
                JSObject jSObjectFromJSONObject = JSObject.fromJSONObject((JSONObject) it.next());
                String string = jSObjectFromJSONObject.getString(OSOutcomeConstants.OUTCOME_ID);
                if (string == null) {
                    return null;
                }
                JSONArray jSONArray = jSObjectFromJSONObject.getJSONArray("actions");
                if (jSONArray != null) {
                    int length = jSONArray.length();
                    NotificationAction[] notificationActionArr = new NotificationAction[length];
                    for (int i = 0; i < length; i++) {
                        NotificationAction notificationAction = new NotificationAction();
                        JSObject jSObjectFromJSONObject2 = JSObject.fromJSONObject(jSONArray.getJSONObject(i));
                        notificationAction.setId(jSObjectFromJSONObject2.getString(OSOutcomeConstants.OUTCOME_ID));
                        notificationAction.setTitle(jSObjectFromJSONObject2.getString(OneSignalDbContract.NotificationTable.COLUMN_NAME_TITLE));
                        notificationAction.setInput(jSObjectFromJSONObject2.getBool("input"));
                        notificationActionArr[i] = notificationAction;
                    }
                    map.put(string, notificationActionArr);
                }
            }
        } catch (Exception e) {
            Logger.error(Logger.tags("LN"), "Error when building action types", e);
        }
        return map;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String str) {
        this.id = str;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String str) {
        this.title = str;
    }

    public boolean isInput() {
        return Boolean.TRUE.equals(this.input);
    }

    public void setInput(Boolean bool) {
        this.input = bool;
    }
}

