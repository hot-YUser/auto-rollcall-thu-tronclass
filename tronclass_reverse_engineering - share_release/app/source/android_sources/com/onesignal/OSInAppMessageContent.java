package com.onesignal;

import com.onesignal.WebViewManager;
import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.json.JSONObject;
@Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0010\u0006\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\u000b\n\u0002\b\u0004\n\u0002\u0010\b\n\u0002\b\u000b\b\u0010\u0018\u00002\u00020\u0001B\r\u0012\u0006\u0010\u0002\u001a\u00020\u0003¢\u0006\u0002\u0010\u0004R\u001c\u0010\u0005\u001a\u0004\u0018\u00010\u0006X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0007\u0010\b\"\u0004\b\t\u0010\nR\u001e\u0010\u000b\u001a\u0004\u0018\u00010\fX\u0086\u000e¢\u0006\u0010\n\u0002\u0010\u0011\u001a\u0004\b\r\u0010\u000e\"\u0004\b\u000f\u0010\u0010R\u001c\u0010\u0012\u001a\u0004\u0018\u00010\u0013X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0014\u0010\u0015\"\u0004\b\u0016\u0010\u0017R\u001a\u0010\u0018\u001a\u00020\u0019X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0018\u0010\u001a\"\u0004\b\u001b\u0010\u001cR\u001a\u0010\u001d\u001a\u00020\u001eX\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u001f\u0010 \"\u0004\b!\u0010\"R\u001a\u0010#\u001a\u00020\u0019X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b$\u0010\u001a\"\u0004\b%\u0010\u001cR\u001a\u0010&\u001a\u00020\u0019X\u0086\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b'\u0010\u001a\"\u0004\b(\u0010\u001c¨\u0006)"}, d2 = {"Lcom/onesignal/OSInAppMessageContent;", "", "jsonObject", "Lorg/json/JSONObject;", "(Lorg/json/JSONObject;)V", "contentHtml", "", "getContentHtml", "()Ljava/lang/String;", "setContentHtml", "(Ljava/lang/String;)V", "displayDuration", "", "getDisplayDuration", "()Ljava/lang/Double;", "setDisplayDuration", "(Ljava/lang/Double;)V", "Ljava/lang/Double;", "displayLocation", "Lcom/onesignal/WebViewManager$Position;", "getDisplayLocation", "()Lcom/onesignal/WebViewManager$Position;", "setDisplayLocation", "(Lcom/onesignal/WebViewManager$Position;)V", "isFullBleed", "", "()Z", "setFullBleed", "(Z)V", "pageHeight", "", "getPageHeight", "()I", "setPageHeight", "(I)V", "useHeightMargin", "getUseHeightMargin", "setUseHeightMargin", "useWidthMargin", "getUseWidthMargin", "setUseWidthMargin", "onesignal_release"}, k = 1, mv = {1, 5, 1}, xi = 48)
public class OSInAppMessageContent {
    private String contentHtml;
    private Double displayDuration;
    private WebViewManager.Position displayLocation;
    private boolean isFullBleed;
    private int pageHeight;
    private boolean useHeightMargin;
    private boolean useWidthMargin;

    public OSInAppMessageContent(JSONObject jsonObject) {
        Intrinsics.checkNotNullParameter(jsonObject, "jsonObject");
        this.useHeightMargin = true;
        this.useWidthMargin = true;
        this.contentHtml = jsonObject.optString(OSInAppMessageContentKt.HTML);
        this.displayDuration = Double.valueOf(jsonObject.optDouble(OSInAppMessageContentKt.DISPLAY_DURATION));
        JSONObject jSONObjectOptJSONObject = jsonObject.optJSONObject(OSInAppMessageContentKt.STYLES);
        this.useHeightMargin = !(jSONObjectOptJSONObject == null ? false : jSONObjectOptJSONObject.optBoolean(OSInAppMessageContentKt.REMOVE_HEIGHT_MARGIN, false));
        this.useWidthMargin = !(jSONObjectOptJSONObject != null ? jSONObjectOptJSONObject.optBoolean(OSInAppMessageContentKt.REMOVE_WIDTH_MARGIN, false) : false);
        this.isFullBleed = !this.useHeightMargin;
    }

    public final String getContentHtml() {
        return this.contentHtml;
    }

    public final void setContentHtml(String str) {
        this.contentHtml = str;
    }

    public final boolean getUseHeightMargin() {
        return this.useHeightMargin;
    }

    public final void setUseHeightMargin(boolean z) {
        this.useHeightMargin = z;
    }

    public final boolean getUseWidthMargin() {
        return this.useWidthMargin;
    }

    public final void setUseWidthMargin(boolean z) {
        this.useWidthMargin = z;
    }
    public final boolean getIsFullBleed() {
        return this.isFullBleed;
    }

    public final void setFullBleed(boolean z) {
        this.isFullBleed = z;
    }

    public final WebViewManager.Position getDisplayLocation() {
        return this.displayLocation;
    }

    public final void setDisplayLocation(WebViewManager.Position position) {
        this.displayLocation = position;
    }

    public final Double getDisplayDuration() {
        return this.displayDuration;
    }

    public final void setDisplayDuration(Double d) {
        this.displayDuration = d;
    }

    public final int getPageHeight() {
        return this.pageHeight;
    }

    public final void setPageHeight(int i) {
        this.pageHeight = i;
    }
}

