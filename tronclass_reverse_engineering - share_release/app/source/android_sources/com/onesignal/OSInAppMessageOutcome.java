package com.onesignal;

import org.json.JSONException;
import org.json.JSONObject;
public class OSInAppMessageOutcome {
    private static final String OUTCOME_NAME = "name";
    private static final String OUTCOME_UNIQUE = "unique";
    private static final String OUTCOME_WEIGHT = "weight";
    private String name;
    private boolean unique;
    private float weight;

    OSInAppMessageOutcome(JSONObject jSONObject) throws JSONException {
        this.name = jSONObject.getString("name");
        this.weight = jSONObject.has("weight") ? (float) jSONObject.getDouble("weight") : 0.0f;
        this.unique = jSONObject.has(OUTCOME_UNIQUE) && jSONObject.getBoolean(OUTCOME_UNIQUE);
    }

    public JSONObject toJSONObject() {
        JSONObject jSONObject = new JSONObject();
        try {
            jSONObject.put("name", this.name);
            jSONObject.put("weight", this.weight);
            jSONObject.put(OUTCOME_UNIQUE, this.unique);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jSONObject;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String str) {
        this.name = str;
    }

    public float getWeight() {
        return this.weight;
    }

    public void setWeight(float f) {
        this.weight = f;
    }

    public boolean isUnique() {
        return this.unique;
    }

    public void setUnique(boolean z) {
        this.unique = z;
    }

    public String toString() {
        return "OSInAppMessageOutcome{name='" + this.name + "', weight=" + this.weight + ", unique=" + this.unique + '}';
    }
}

