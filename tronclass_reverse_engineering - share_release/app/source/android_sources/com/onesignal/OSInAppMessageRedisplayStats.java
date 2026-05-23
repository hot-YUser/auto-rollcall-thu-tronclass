package com.onesignal;

import com.onesignal.OneSignal;
import org.json.JSONException;
import org.json.JSONObject;
class OSInAppMessageRedisplayStats {
    private static final String DISPLAY_DELAY = "delay";
    private static final String DISPLAY_LIMIT = "limit";
    private long displayDelay;
    private int displayLimit;
    private int displayQuantity;
    private long lastDisplayTime;
    private boolean redisplayEnabled;

    OSInAppMessageRedisplayStats() {
        this.lastDisplayTime = -1L;
        this.displayQuantity = 0;
        this.displayLimit = 1;
        this.displayDelay = 0L;
        this.redisplayEnabled = false;
    }

    OSInAppMessageRedisplayStats(int i, long j) {
        this.displayLimit = 1;
        this.displayDelay = 0L;
        this.redisplayEnabled = false;
        this.displayQuantity = i;
        this.lastDisplayTime = j;
    }

    OSInAppMessageRedisplayStats(JSONObject jSONObject) throws JSONException {
        this.lastDisplayTime = -1L;
        this.displayQuantity = 0;
        this.displayLimit = 1;
        this.displayDelay = 0L;
        this.redisplayEnabled = true;
        Object obj = jSONObject.get(DISPLAY_LIMIT);
        Object obj2 = jSONObject.get(DISPLAY_DELAY);
        if (obj instanceof Integer) {
            this.displayLimit = ((Integer) obj).intValue();
        }
        if (obj2 instanceof Long) {
            this.displayDelay = ((Long) obj2).longValue();
        } else if (obj2 instanceof Integer) {
            this.displayDelay = ((Integer) obj2).intValue();
        }
    }

    void setDisplayStats(OSInAppMessageRedisplayStats oSInAppMessageRedisplayStats) {
        setLastDisplayTime(oSInAppMessageRedisplayStats.getLastDisplayTime());
        setDisplayQuantity(oSInAppMessageRedisplayStats.getDisplayQuantity());
    }

    long getLastDisplayTime() {
        return this.lastDisplayTime;
    }

    void setLastDisplayTime(long j) {
        this.lastDisplayTime = j;
    }

    void incrementDisplayQuantity() {
        this.displayQuantity++;
    }

    int getDisplayQuantity() {
        return this.displayQuantity;
    }

    void setDisplayQuantity(int i) {
        this.displayQuantity = i;
    }

    int getDisplayLimit() {
        return this.displayLimit;
    }

    void setDisplayLimit(int i) {
        this.displayLimit = i;
    }

    long getDisplayDelay() {
        return this.displayDelay;
    }

    void setDisplayDelay(long j) {
        this.displayDelay = j;
    }

    boolean shouldDisplayAgain() {
        boolean z = this.displayQuantity < this.displayLimit;
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "OSInAppMessage shouldDisplayAgain: " + z);
        return z;
    }

    boolean isDelayTimeSatisfied() {
        if (this.lastDisplayTime < 0) {
            return true;
        }
        long currentTimeMillis = OneSignal.getTime().getCurrentTimeMillis() / 1000;
        long j = currentTimeMillis - this.lastDisplayTime;
        OneSignal.Log(OneSignal.LOG_LEVEL.DEBUG, "OSInAppMessage lastDisplayTime: " + this.lastDisplayTime + " currentTimeInSeconds: " + currentTimeMillis + " diffInSeconds: " + j + " displayDelay: " + this.displayDelay);
        return j >= this.displayDelay;
    }

    public boolean isRedisplayEnabled() {
        return this.redisplayEnabled;
    }

    JSONObject toJSONObject() {
        JSONObject jSONObject = new JSONObject();
        try {
            jSONObject.put(DISPLAY_LIMIT, this.displayLimit);
            jSONObject.put(DISPLAY_DELAY, this.displayDelay);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jSONObject;
    }

    public String toString() {
        return "OSInAppMessageDisplayStats{lastDisplayTime=" + this.lastDisplayTime + ", displayQuantity=" + this.displayQuantity + ", displayLimit=" + this.displayLimit + ", displayDelay=" + this.displayDelay + '}';
    }
}

