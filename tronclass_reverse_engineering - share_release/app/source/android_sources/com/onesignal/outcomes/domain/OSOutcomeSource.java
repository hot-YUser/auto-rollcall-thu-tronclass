package com.onesignal.outcomes.domain;

import com.onesignal.outcomes.OSOutcomeConstants;
import kotlin.Metadata;
import org.json.JSONException;
import org.json.JSONObject;
@Metadata(d1 = {"\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\t\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\u0018\u00002\u00020\u0001B\u0019\u0012\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\u0002\u0010\u0005J\u0010\u0010\b\u001a\u00020\u00002\b\u0010\u0002\u001a\u0004\u0018\u00010\u0003J\u0010\u0010\u000b\u001a\u00020\u00002\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003J\u0006\u0010\f\u001a\u00020\rJ\b\u0010\u000e\u001a\u00020\u000fH\u0016R\u001c\u0010\u0002\u001a\u0004\u0018\u00010\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0006\u0010\u0007\"\u0004\b\b\u0010\tR\u001c\u0010\u0004\u001a\u0004\u0018\u00010\u0003X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\n\u0010\u0007\"\u0004\b\u000b\u0010\t¨\u0006\u0010"}, d2 = {"Lcom/onesignal/outcomes/domain/OSOutcomeSource;", "", "directBody", "Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;", "indirectBody", "(Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)V", "getDirectBody", "()Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;", "setDirectBody", "(Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)V", "getIndirectBody", "setIndirectBody", "toJSONObject", "Lorg/json/JSONObject;", "toString", "", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public final class OSOutcomeSource {
    private OSOutcomeSourceBody directBody;
    private OSOutcomeSourceBody indirectBody;

    public OSOutcomeSource(OSOutcomeSourceBody oSOutcomeSourceBody, OSOutcomeSourceBody oSOutcomeSourceBody2) {
        this.directBody = oSOutcomeSourceBody;
        this.indirectBody = oSOutcomeSourceBody2;
    }

    public final OSOutcomeSourceBody getDirectBody() {
        return this.directBody;
    }
    public final void m321setDirectBody(OSOutcomeSourceBody oSOutcomeSourceBody) {
        this.directBody = oSOutcomeSourceBody;
    }

    public final OSOutcomeSourceBody getIndirectBody() {
        return this.indirectBody;
    }
    public final void m322setIndirectBody(OSOutcomeSourceBody oSOutcomeSourceBody) {
        this.indirectBody = oSOutcomeSourceBody;
    }

    public final JSONObject toJSONObject() throws JSONException {
        JSONObject jSONObject = new JSONObject();
        OSOutcomeSourceBody oSOutcomeSourceBody = this.directBody;
        if (oSOutcomeSourceBody != null) {
            jSONObject.put("direct", oSOutcomeSourceBody.toJSONObject());
        }
        OSOutcomeSourceBody oSOutcomeSourceBody2 = this.indirectBody;
        if (oSOutcomeSourceBody2 != null) {
            jSONObject.put(OSOutcomeConstants.INDIRECT, oSOutcomeSourceBody2.toJSONObject());
        }
        return jSONObject;
    }

    public final OSOutcomeSource setDirectBody(OSOutcomeSourceBody directBody) {
        m321setDirectBody(directBody);
        return this;
    }

    public final OSOutcomeSource setIndirectBody(OSOutcomeSourceBody indirectBody) {
        m322setIndirectBody(indirectBody);
        return this;
    }

    public String toString() {
        return "OSOutcomeSource{directBody=" + this.directBody + ", indirectBody=" + this.indirectBody + '}';
    }
}

