package com.onesignal;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
class OSInAppMessageInternal extends OSInAppMessage {
    private static final String DISPLAY_DURATION = "displayDuration";
    private static final String END_TIME = "end_time";
    private static final String HAS_LIQUID = "has_liquid";
    private static final String IAM_ID = "messageId";
    private static final String IAM_REDISPLAY_STATS = "redisplay";
    private static final String IAM_TRIGGERS = "triggers";
    private static final String IAM_VARIANTS = "variants";
    private static final String ID = "id";
    private boolean actionTaken;
    private Set<String> clickedClickIds;
    private double displayDuration;
    private boolean displayedInSession;
    private Date endTime;
    private boolean hasLiquid;
    boolean isPreview;
    private OSInAppMessageRedisplayStats redisplayStats;
    private boolean triggerChanged;
    public ArrayList<ArrayList<OSTrigger>> triggers;
    public HashMap<String, HashMap<String, String>> variants;

    OSInAppMessageInternal(boolean z) {
        super("");
        this.redisplayStats = new OSInAppMessageRedisplayStats();
        this.displayedInSession = false;
        this.triggerChanged = false;
        this.isPreview = z;
    }

    OSInAppMessageInternal(String str, Set<String> set, boolean z, OSInAppMessageRedisplayStats oSInAppMessageRedisplayStats) {
        super(str);
        new OSInAppMessageRedisplayStats();
        this.triggerChanged = false;
        this.clickedClickIds = set;
        this.displayedInSession = z;
        this.redisplayStats = oSInAppMessageRedisplayStats;
    }

    OSInAppMessageInternal(JSONObject jSONObject) throws JSONException {
        super(jSONObject.getString("id"));
        this.redisplayStats = new OSInAppMessageRedisplayStats();
        this.displayedInSession = false;
        this.triggerChanged = false;
        this.variants = parseVariants(jSONObject.getJSONObject(IAM_VARIANTS));
        this.triggers = parseTriggerJson(jSONObject.getJSONArray(IAM_TRIGGERS));
        this.clickedClickIds = new HashSet();
        this.endTime = parseEndTimeJson(jSONObject);
        if (jSONObject.has(HAS_LIQUID)) {
            this.hasLiquid = jSONObject.getBoolean(HAS_LIQUID);
        }
        if (jSONObject.has(IAM_REDISPLAY_STATS)) {
            this.redisplayStats = new OSInAppMessageRedisplayStats(jSONObject.getJSONObject(IAM_REDISPLAY_STATS));
        }
    }

    private Date parseEndTimeJson(JSONObject jSONObject) {
        try {
            String string = jSONObject.getString(END_TIME);
            if (string.equals("null")) {
                return null;
            }
            try {
                return OneSignalSimpleDateFormat.iso8601Format().parse(string);
            } catch (ParseException e) {
                e.printStackTrace();
                return null;
            }
        } catch (JSONException unused) {
        }
    }

    private HashMap<String, HashMap<String, String>> parseVariants(JSONObject jSONObject) throws JSONException {
        HashMap<String, HashMap<String, String>> map = new HashMap<>();
        Iterator<String> itKeys = jSONObject.keys();
        while (itKeys.hasNext()) {
            String next = itKeys.next();
            JSONObject jSONObject2 = jSONObject.getJSONObject(next);
            HashMap<String, String> map2 = new HashMap<>();
            Iterator<String> itKeys2 = jSONObject2.keys();
            while (itKeys2.hasNext()) {
                String next2 = itKeys2.next();
                map2.put(next2, jSONObject2.getString(next2));
            }
            map.put(next, map2);
        }
        return map;
    }

    protected ArrayList<ArrayList<OSTrigger>> parseTriggerJson(JSONArray jSONArray) throws JSONException {
        ArrayList<ArrayList<OSTrigger>> arrayList = new ArrayList<>();
        for (int i = 0; i < jSONArray.length(); i++) {
            JSONArray jSONArray2 = jSONArray.getJSONArray(i);
            ArrayList<OSTrigger> arrayList2 = new ArrayList<>();
            for (int i2 = 0; i2 < jSONArray2.length(); i2++) {
                arrayList2.add(new OSTrigger(jSONArray2.getJSONObject(i2)));
            }
            arrayList.add(arrayList2);
        }
        return arrayList;
    }

    @Override // com.onesignal.OSInAppMessage
    public JSONObject toJSONObject() {
        JSONObject jSONObject = new JSONObject();
        try {
            jSONObject.put("messageId", this.messageId);
            JSONObject jSONObject2 = new JSONObject();
            for (String str : this.variants.keySet()) {
                HashMap<String, String> map = this.variants.get(str);
                JSONObject jSONObject3 = new JSONObject();
                for (String str2 : map.keySet()) {
                    jSONObject3.put(str2, map.get(str2));
                }
                jSONObject2.put(str, jSONObject3);
            }
            jSONObject.put(IAM_VARIANTS, jSONObject2);
            jSONObject.put(DISPLAY_DURATION, this.displayDuration);
            jSONObject.put(IAM_REDISPLAY_STATS, this.redisplayStats.toJSONObject());
            JSONArray jSONArray = new JSONArray();
            for (ArrayList<OSTrigger> arrayList : this.triggers) {
                JSONArray jSONArray2 = new JSONArray();
                Iterator<OSTrigger> it = arrayList.iterator();
                while (it.hasNext()) {
                    jSONArray2.put(it.next().toJSONObject());
                }
                jSONArray.put(jSONArray2);
            }
            jSONObject.put(IAM_TRIGGERS, jSONArray);
            if (this.endTime != null) {
                jSONObject.put(END_TIME, OneSignalSimpleDateFormat.iso8601Format().format(this.endTime));
            }
            jSONObject.put(HAS_LIQUID, this.hasLiquid);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jSONObject;
    }

    boolean takeActionAsUnique() {
        if (this.actionTaken) {
            return false;
        }
        this.actionTaken = true;
        return true;
    }

    double getDisplayDuration() {
        return this.displayDuration;
    }

    void setDisplayDuration(double d) {
        this.displayDuration = d;
    }

    boolean isTriggerChanged() {
        return this.triggerChanged;
    }

    void setTriggerChanged(boolean z) {
        this.triggerChanged = z;
    }

    public boolean isDisplayedInSession() {
        return this.displayedInSession;
    }

    public void setDisplayedInSession(boolean z) {
        this.displayedInSession = z;
    }

    boolean getHasLiquid() {
        return this.hasLiquid;
    }

    void setHasLiquid(boolean z) {
        this.hasLiquid = z;
    }

    Set<String> getClickedClickIds() {
        return this.clickedClickIds;
    }

    boolean isClickAvailable(String str) {
        return !this.clickedClickIds.contains(str);
    }

    void clearClickIds() {
        this.clickedClickIds.clear();
    }

    void addClickId(String str) {
        this.clickedClickIds.add(str);
    }

    void removeClickId(String str) {
        this.clickedClickIds.remove(str);
    }

    OSInAppMessageRedisplayStats getRedisplayStats() {
        return this.redisplayStats;
    }

    void setRedisplayStats(int i, long j) {
        this.redisplayStats = new OSInAppMessageRedisplayStats(i, j);
    }

    public String toString() {
        return "OSInAppMessage{messageId='" + this.messageId + "', variants=" + this.variants + ", triggers=" + this.triggers + ", clickedClickIds=" + this.clickedClickIds + ", redisplayStats=" + this.redisplayStats + ", displayDuration=" + this.displayDuration + ", displayedInSession=" + this.displayedInSession + ", triggerChanged=" + this.triggerChanged + ", actionTaken=" + this.actionTaken + ", isPreview=" + this.isPreview + ", endTime=" + this.endTime + ", hasLiquid=" + this.hasLiquid + '}';
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        return this.messageId.equals(((OSInAppMessageInternal) obj).messageId);
    }

    public int hashCode() {
        return this.messageId.hashCode();
    }

    public boolean isFinished() {
        if (this.endTime == null) {
            return false;
        }
        return this.endTime.before(new Date());
    }
}

