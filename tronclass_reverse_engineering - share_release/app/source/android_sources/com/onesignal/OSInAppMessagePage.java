package com.onesignal;

import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.json.JSONException;
import org.json.JSONObject;
@Metadata(d1 = {"\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\t\b\u0010\u0018\u00002\u00020\u0001B\r\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0002\u0010\u0004J\u0006\u0010\u000e\u001a\u00020\u0003R\u001c\u0010\u0005\u001a\u0004\u0018\u00010\u0006X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0007\u0010\b\"\u0004\b\t\u0010\nR\u001c\u0010\u000b\u001a\u0004\u0018\u00010\u0006X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\f\u0010\b\"\u0004\b\r\u0010\n¨\u0006\u000f"}, d2 = {"Lcom/onesignal/OSInAppMessagePage;", "", "jsonObject", "Lorg/json/JSONObject;", "(Lorg/json/JSONObject;)V", OSInAppMessagePageKt.PAGE_ID, "", "getPageId", "()Ljava/lang/String;", "setPageId", "(Ljava/lang/String;)V", OSInAppMessagePageKt.PAGE_INDEX, "getPageIndex", "setPageIndex", "toJSONObject", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public class OSInAppMessagePage {
    private String pageId;
    private String pageIndex;

    public OSInAppMessagePage(JSONObject jsonObject) {
        Intrinsics.checkNotNullParameter(jsonObject, "jsonObject");
        this.pageId = jsonObject.optString(OSInAppMessagePageKt.PAGE_ID, null);
        this.pageIndex = jsonObject.optString(OSInAppMessagePageKt.PAGE_INDEX, null);
    }

    public final String getPageId() {
        return this.pageId;
    }

    public final void setPageId(String str) {
        this.pageId = str;
    }

    public final String getPageIndex() {
        return this.pageIndex;
    }

    public final void setPageIndex(String str) {
        this.pageIndex = str;
    }

    public final JSONObject toJSONObject() {
        JSONObject jSONObject = new JSONObject();
        try {
            jSONObject.put(OSInAppMessagePageKt.PAGE_ID, this.pageId);
            jSONObject.put(OSInAppMessagePageKt.PAGE_INDEX, this.pageIndex);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return jSONObject;
    }
}

