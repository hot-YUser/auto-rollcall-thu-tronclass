package com.onesignal;

import com.onesignal.outcomes.OSOutcomeConstants;
import org.json.JSONException;
import org.json.JSONObject;
class OSTrigger {
    public OSTriggerKind kind;
    public OSTriggerOperator operatorType;
    public String property;
    String triggerId;
    public Object value;

    public enum OSTriggerOperator {
        GREATER_THAN("greater"),
        LESS_THAN("less"),
        EQUAL_TO("equal"),
        NOT_EQUAL_TO("not_equal"),
        LESS_THAN_OR_EQUAL_TO("less_or_equal"),
        GREATER_THAN_OR_EQUAL_TO("greater_or_equal"),
        EXISTS("exists"),
        NOT_EXISTS("not_exists"),
        CONTAINS("in");

        private String text;

        OSTriggerOperator(String str) {
            this.text = str;
        }

        @Override // java.lang.Enum
        public String toString() {
            return this.text;
        }

        public static OSTriggerOperator fromString(String str) {
            for (OSTriggerOperator oSTriggerOperator : values()) {
                if (oSTriggerOperator.text.equalsIgnoreCase(str)) {
                    return oSTriggerOperator;
                }
            }
            return EQUAL_TO;
        }

        public boolean checksEquality() {
            return this == EQUAL_TO || this == NOT_EQUAL_TO;
        }
    }

    public enum OSTriggerKind {
        TIME_SINCE_LAST_IN_APP("min_time_since"),
        SESSION_TIME("session_time"),
        CUSTOM(OSNotificationFormatHelper.PAYLOAD_OS_ROOT_CUSTOM),
        UNKNOWN("unknown");

        private String value;

        OSTriggerKind(String str) {
            this.value = str;
        }

        @Override // java.lang.Enum
        public String toString() {
            return this.value;
        }

        public static OSTriggerKind fromString(String str) {
            for (OSTriggerKind oSTriggerKind : values()) {
                if (oSTriggerKind.value.equalsIgnoreCase(str)) {
                    return oSTriggerKind;
                }
            }
            return UNKNOWN;
        }
    }

    OSTrigger(JSONObject jSONObject) throws JSONException {
        this.triggerId = jSONObject.getString(OSOutcomeConstants.OUTCOME_ID);
        this.kind = OSTriggerKind.fromString(jSONObject.getString("kind"));
        this.property = jSONObject.optString("property", null);
        this.operatorType = OSTriggerOperator.fromString(jSONObject.getString("operator"));
        this.value = jSONObject.opt("value");
    }

    public JSONObject toJSONObject() {
        JSONObject jSONObject = new JSONObject();
        try {
            jSONObject.put(OSOutcomeConstants.OUTCOME_ID, this.triggerId);
            jSONObject.put("kind", this.kind);
            jSONObject.put("property", this.property);
            jSONObject.put("operator", this.operatorType.toString());
            jSONObject.put("value", this.value);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jSONObject;
    }

    public String toString() {
        return "OSTrigger{triggerId='" + this.triggerId + "', kind=" + this.kind + ", property='" + this.property + "', operatorType=" + this.operatorType + ", value=" + this.value + '}';
    }
}

