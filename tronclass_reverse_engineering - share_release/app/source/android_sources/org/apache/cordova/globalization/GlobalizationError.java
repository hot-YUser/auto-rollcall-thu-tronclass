package org.apache.cordova.globalization;

import com.onesignal.OneSignalDbContract;
import org.json.JSONException;
import org.json.JSONObject;
public class GlobalizationError extends Exception {
    public static final String FORMATTING_ERROR = "FORMATTING_ERROR";
    public static final String PARSING_ERROR = "PARSING_ERROR";
    public static final String PATTERN_ERROR = "PATTERN_ERROR";
    public static final String UNKNOWN_ERROR = "UNKNOWN_ERROR";
    private static final long serialVersionUID = 1;
    int error;

    public GlobalizationError() {
        this.error = 0;
    }

    public GlobalizationError(String str) {
        this.error = 0;
        if (str.equalsIgnoreCase(FORMATTING_ERROR)) {
            this.error = 1;
        } else if (str.equalsIgnoreCase(PARSING_ERROR)) {
            this.error = 2;
        } else if (str.equalsIgnoreCase(PATTERN_ERROR)) {
            this.error = 3;
        }
    }

    public String getErrorString() {
        int i = this.error;
        if (i == 0) {
            return UNKNOWN_ERROR;
        }
        if (i == 1) {
            return FORMATTING_ERROR;
        }
        if (i != 2) {
            return i != 3 ? "" : PATTERN_ERROR;
        }
        return PARSING_ERROR;
    }

    public int getErrorCode() {
        return this.error;
    }

    public JSONObject toJson() {
        JSONObject jSONObject = new JSONObject();
        try {
            jSONObject.put("code", getErrorCode());
            jSONObject.put(OneSignalDbContract.NotificationTable.COLUMN_NAME_MESSAGE, getErrorString());
        } catch (JSONException unused) {
        }
        return jSONObject;
    }
}

