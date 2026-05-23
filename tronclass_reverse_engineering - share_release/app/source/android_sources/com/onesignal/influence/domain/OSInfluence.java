package com.onesignal.influence.domain;

import com.onesignal.NotificationBundleProcessor;
import com.onesignal.influence.OSInfluenceConstants;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
@Metadata(d1 = {"\u00006\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0011\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0003\u0018\u00002\u00020\u0001B\u000f\b\u0016\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0002\u0010\u0004B!\b\u0016\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\n¢\u0006\u0002\u0010\u000bJ\u0006\u0010\u001a\u001a\u00020\u0000J\u0013\u0010\u001b\u001a\u00020\u001c2\b\u0010\u001d\u001a\u0004\u0018\u00010\u0001H\u0096\u0002J\b\u0010\u001e\u001a\u00020\u001fH\u0016J\u0006\u0010 \u001a\u00020\u0003J\b\u0010!\u001a\u00020\u0003H\u0016R\u0013\u0010\f\u001a\u0004\u0018\u00010\u00038F¢\u0006\u0006\u001a\u0004\b\r\u0010\u000eR\u001c\u0010\t\u001a\u0004\u0018\u00010\nX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u000f\u0010\u0010\"\u0004\b\u0011\u0010\u0012R\u001e\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0013\u001a\u00020\u0006@BX\u0086\u000e¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u001a\u0010\u0007\u001a\u00020\bX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0016\u0010\u0017\"\u0004\b\u0018\u0010\u0019¨\u0006\""}, d2 = {"Lcom/onesignal/influence/domain/OSInfluence;", "", "jsonString", "", "(Ljava/lang/String;)V", "influenceChannel", "Lcom/onesignal/influence/domain/OSInfluenceChannel;", "influenceType", "Lcom/onesignal/influence/domain/OSInfluenceType;", "ids", "Lorg/json/JSONArray;", "(Lcom/onesignal/influence/domain/OSInfluenceChannel;Lcom/onesignal/influence/domain/OSInfluenceType;Lorg/json/JSONArray;)V", "directId", "getDirectId", "()Ljava/lang/String;", "getIds", "()Lorg/json/JSONArray;", "setIds", "(Lorg/json/JSONArray;)V", "<set-?>", "getInfluenceChannel", "()Lcom/onesignal/influence/domain/OSInfluenceChannel;", "getInfluenceType", "()Lcom/onesignal/influence/domain/OSInfluenceType;", "setInfluenceType", "(Lcom/onesignal/influence/domain/OSInfluenceType;)V", "copy", "equals", "", NotificationBundleProcessor.PUSH_MINIFIED_BUTTONS_LIST, "hashCode", "", "toJSONString", "toString", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public final class OSInfluence {
    private JSONArray ids;
    private OSInfluenceChannel influenceChannel;
    private OSInfluenceType influenceType;

    public final OSInfluenceType getInfluenceType() {
        return this.influenceType;
    }

    public final void setInfluenceType(OSInfluenceType oSInfluenceType) {
        Intrinsics.checkNotNullParameter(oSInfluenceType, "<set-?>");
        this.influenceType = oSInfluenceType;
    }

    public final OSInfluenceChannel getInfluenceChannel() {
        return this.influenceChannel;
    }

    public final JSONArray getIds() {
        return this.ids;
    }

    public final void setIds(JSONArray jSONArray) {
        this.ids = jSONArray;
    }

    public OSInfluence(String jsonString) throws JSONException {
        Intrinsics.checkNotNullParameter(jsonString, "jsonString");
        JSONObject jSONObject = new JSONObject(jsonString);
        String string = jSONObject.getString(OSInfluenceConstants.INFLUENCE_CHANNEL);
        String string2 = jSONObject.getString(OSInfluenceConstants.INFLUENCE_TYPE);
        String ids = jSONObject.getString(OSInfluenceConstants.INFLUENCE_IDS);
        this.influenceChannel = OSInfluenceChannel.INSTANCE.fromString(string);
        this.influenceType = OSInfluenceType.INSTANCE.fromString(string2);
        Intrinsics.checkNotNullExpressionValue(ids, "ids");
        this.ids = ids.length() == 0 ? null : new JSONArray(ids);
    }

    public OSInfluence(OSInfluenceChannel influenceChannel, OSInfluenceType influenceType, JSONArray jSONArray) {
        Intrinsics.checkNotNullParameter(influenceChannel, "influenceChannel");
        Intrinsics.checkNotNullParameter(influenceType, "influenceType");
        this.influenceChannel = influenceChannel;
        this.influenceType = influenceType;
        this.ids = jSONArray;
    }

    public final String getDirectId() throws JSONException {
        JSONArray jSONArray = this.ids;
        if (jSONArray != null && jSONArray.length() > 0) {
            return jSONArray.getString(0);
        }
        return null;
    }

    public final OSInfluence copy() {
        return new OSInfluence(this.influenceChannel, this.influenceType, this.ids);
    }

    public final String toJSONString() throws JSONException {
        JSONObject jSONObjectPut = new JSONObject().put(OSInfluenceConstants.INFLUENCE_CHANNEL, this.influenceChannel.getNameValue()).put(OSInfluenceConstants.INFLUENCE_TYPE, this.influenceType.toString());
        JSONArray jSONArray = this.ids;
        String string = jSONObjectPut.put(OSInfluenceConstants.INFLUENCE_IDS, jSONArray != null ? String.valueOf(jSONArray) : "").toString();
        Intrinsics.checkNotNullExpressionValue(string, "JSONObject()\n        .pu…e \"\")\n        .toString()");
        return string;
    }

    public String toString() {
        return "SessionInfluence{influenceChannel=" + this.influenceChannel + ", influenceType=" + this.influenceType + ", ids=" + this.ids + '}';
    }

    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || !Intrinsics.areEqual(getClass(), o.getClass())) {
            return false;
        }
        OSInfluence oSInfluence = (OSInfluence) o;
        return this.influenceChannel == oSInfluence.influenceChannel && this.influenceType == oSInfluence.influenceType;
    }

    public int hashCode() {
        return (this.influenceChannel.hashCode() * 31) + this.influenceType.hashCode();
    }
}

