.class public Lcom/onesignal/OSInAppMessageContent;
.super Ljava/lang/Object;
.source "OSInAppMessageContent.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000:\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0010\u000e\n\u0002\u0008\u0005\n\u0002\u0010\u0006\n\u0002\u0008\u0006\n\u0002\u0018\u0002\n\u0002\u0008\u0005\n\u0002\u0010\u000b\n\u0002\u0008\u0004\n\u0002\u0010\u0008\n\u0002\u0008\u000b\u0008\u0010\u0018\u00002\u00020\u0001B\r\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u00a2\u0006\u0002\u0010\u0004R\u001c\u0010\u0005\u001a\u0004\u0018\u00010\u0006X\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\u0008\u0007\u0010\u0008\"\u0004\u0008\t\u0010\nR\u001e\u0010\u000b\u001a\u0004\u0018\u00010\u000cX\u0086\u000e\u00a2\u0006\u0010\n\u0002\u0010\u0011\u001a\u0004\u0008\r\u0010\u000e\"\u0004\u0008\u000f\u0010\u0010R\u001c\u0010\u0012\u001a\u0004\u0018\u00010\u0013X\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\u0008\u0014\u0010\u0015\"\u0004\u0008\u0016\u0010\u0017R\u001a\u0010\u0018\u001a\u00020\u0019X\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\u0008\u0018\u0010\u001a\"\u0004\u0008\u001b\u0010\u001cR\u001a\u0010\u001d\u001a\u00020\u001eX\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\u0008\u001f\u0010 \"\u0004\u0008!\u0010\"R\u001a\u0010#\u001a\u00020\u0019X\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\u0008$\u0010\u001a\"\u0004\u0008%\u0010\u001cR\u001a\u0010&\u001a\u00020\u0019X\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\u0008\'\u0010\u001a\"\u0004\u0008(\u0010\u001c\u00a8\u0006)"
    }
    d2 = {
        "Lcom/onesignal/OSInAppMessageContent;",
        "",
        "jsonObject",
        "Lorg/json/JSONObject;",
        "(Lorg/json/JSONObject;)V",
        "contentHtml",
        "",
        "getContentHtml",
        "()Ljava/lang/String;",
        "setContentHtml",
        "(Ljava/lang/String;)V",
        "displayDuration",
        "",
        "getDisplayDuration",
        "()Ljava/lang/Double;",
        "setDisplayDuration",
        "(Ljava/lang/Double;)V",
        "Ljava/lang/Double;",
        "displayLocation",
        "Lcom/onesignal/WebViewManager$Position;",
        "getDisplayLocation",
        "()Lcom/onesignal/WebViewManager$Position;",
        "setDisplayLocation",
        "(Lcom/onesignal/WebViewManager$Position;)V",
        "isFullBleed",
        "",
        "()Z",
        "setFullBleed",
        "(Z)V",
        "pageHeight",
        "",
        "getPageHeight",
        "()I",
        "setPageHeight",
        "(I)V",
        "useHeightMargin",
        "getUseHeightMargin",
        "setUseHeightMargin",
        "useWidthMargin",
        "getUseWidthMargin",
        "setUseWidthMargin",
        "onesignal_release"
    }
    k = 0x1
    mv = {
        0x1,
        0x5,
        0x1
    }
    xi = 0x30
.end annotation


# instance fields
.field private contentHtml:Ljava/lang/String;

.field private displayDuration:Ljava/lang/Double;

.field private displayLocation:Lcom/onesignal/WebViewManager$Position;

.field private isFullBleed:Z

.field private pageHeight:I

.field private useHeightMargin:Z

.field private useWidthMargin:Z


# direct methods
.method public constructor <init>(Lorg/json/JSONObject;)V
    .locals 3

    const-string v0, "jsonObject"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 11
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x1

    .line 13
    iput-boolean v0, p0, Lcom/onesignal/OSInAppMessageContent;->useHeightMargin:Z

    .line 14
    iput-boolean v0, p0, Lcom/onesignal/OSInAppMessageContent;->useWidthMargin:Z

    .line 23
    const-string v1, "html"

    invoke-virtual {p1, v1}, Lorg/json/JSONObject;->optString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    iput-object v1, p0, Lcom/onesignal/OSInAppMessageContent;->contentHtml:Ljava/lang/String;

    .line 24
    const-string v1, "display_duration"

    invoke-virtual {p1, v1}, Lorg/json/JSONObject;->optDouble(Ljava/lang/String;)D

    move-result-wide v1

    invoke-static {v1, v2}, Ljava/lang/Double;->valueOf(D)Ljava/lang/Double;

    move-result-object v1

    iput-object v1, p0, Lcom/onesignal/OSInAppMessageContent;->displayDuration:Ljava/lang/Double;

    .line 25
    const-string v1, "styles"

    invoke-virtual {p1, v1}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p1

    const/4 v1, 0x0

    if-nez p1, :cond_0

    move v2, v1

    goto :goto_0

    .line 26
    :cond_0
    const-string v2, "remove_height_margin"

    invoke-virtual {p1, v2, v1}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v2

    :goto_0
    xor-int/2addr v2, v0

    iput-boolean v2, p0, Lcom/onesignal/OSInAppMessageContent;->useHeightMargin:Z

    if-nez p1, :cond_1

    goto :goto_1

    .line 27
    :cond_1
    const-string v2, "remove_width_margin"

    invoke-virtual {p1, v2, v1}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v1

    :goto_1
    xor-int/lit8 p1, v1, 0x1

    iput-boolean p1, p0, Lcom/onesignal/OSInAppMessageContent;->useWidthMargin:Z

    .line 28
    iget-boolean p1, p0, Lcom/onesignal/OSInAppMessageContent;->useHeightMargin:Z

    xor-int/2addr p1, v0

    iput-boolean p1, p0, Lcom/onesignal/OSInAppMessageContent;->isFullBleed:Z

    return-void
.end method


# virtual methods
.method public final getContentHtml()Ljava/lang/String;
    .locals 1

    .line 12
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageContent;->contentHtml:Ljava/lang/String;

    return-object v0
.end method

.method public final getDisplayDuration()Ljava/lang/Double;
    .locals 1

    .line 19
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageContent;->displayDuration:Ljava/lang/Double;

    return-object v0
.end method

.method public final getDisplayLocation()Lcom/onesignal/WebViewManager$Position;
    .locals 1

    .line 18
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageContent;->displayLocation:Lcom/onesignal/WebViewManager$Position;

    return-object v0
.end method

.method public final getPageHeight()I
    .locals 1

    .line 20
    iget v0, p0, Lcom/onesignal/OSInAppMessageContent;->pageHeight:I

    return v0
.end method

.method public final getUseHeightMargin()Z
    .locals 1

    .line 13
    iget-boolean v0, p0, Lcom/onesignal/OSInAppMessageContent;->useHeightMargin:Z

    return v0
.end method

.method public final getUseWidthMargin()Z
    .locals 1

    .line 14
    iget-boolean v0, p0, Lcom/onesignal/OSInAppMessageContent;->useWidthMargin:Z

    return v0
.end method

.method public final isFullBleed()Z
    .locals 1

    .line 15
    iget-boolean v0, p0, Lcom/onesignal/OSInAppMessageContent;->isFullBleed:Z

    return v0
.end method

.method public final setContentHtml(Ljava/lang/String;)V
    .locals 0

    .line 12
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageContent;->contentHtml:Ljava/lang/String;

    return-void
.end method

.method public final setDisplayDuration(Ljava/lang/Double;)V
    .locals 0

    .line 19
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageContent;->displayDuration:Ljava/lang/Double;

    return-void
.end method

.method public final setDisplayLocation(Lcom/onesignal/WebViewManager$Position;)V
    .locals 0

    .line 18
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageContent;->displayLocation:Lcom/onesignal/WebViewManager$Position;

    return-void
.end method

.method public final setFullBleed(Z)V
    .locals 0

    .line 15
    iput-boolean p1, p0, Lcom/onesignal/OSInAppMessageContent;->isFullBleed:Z

    return-void
.end method

.method public final setPageHeight(I)V
    .locals 0

    .line 20
    iput p1, p0, Lcom/onesignal/OSInAppMessageContent;->pageHeight:I

    return-void
.end method

.method public final setUseHeightMargin(Z)V
    .locals 0

    .line 13
    iput-boolean p1, p0, Lcom/onesignal/OSInAppMessageContent;->useHeightMargin:Z

    return-void
.end method

.method public final setUseWidthMargin(Z)V
    .locals 0

    .line 14
    iput-boolean p1, p0, Lcom/onesignal/OSInAppMessageContent;->useWidthMargin:Z

    return-void
.end method
