.class public Lcom/onesignal/OSInAppMessagePage;
.super Ljava/lang/Object;
.source "OSInAppMessagePage.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u001a\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0010\u000e\n\u0002\u0008\t\u0008\u0010\u0018\u00002\u00020\u0001B\r\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u00a2\u0006\u0002\u0010\u0004J\u0006\u0010\u000e\u001a\u00020\u0003R\u001c\u0010\u0005\u001a\u0004\u0018\u00010\u0006X\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\u0008\u0007\u0010\u0008\"\u0004\u0008\t\u0010\nR\u001c\u0010\u000b\u001a\u0004\u0018\u00010\u0006X\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\u0008\u000c\u0010\u0008\"\u0004\u0008\r\u0010\n\u00a8\u0006\u000f"
    }
    d2 = {
        "Lcom/onesignal/OSInAppMessagePage;",
        "",
        "jsonObject",
        "Lorg/json/JSONObject;",
        "(Lorg/json/JSONObject;)V",
        "pageId",
        "",
        "getPageId",
        "()Ljava/lang/String;",
        "setPageId",
        "(Ljava/lang/String;)V",
        "pageIndex",
        "getPageIndex",
        "setPageIndex",
        "toJSONObject",
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
.field private pageId:Ljava/lang/String;

.field private pageIndex:Ljava/lang/String;


# direct methods
.method public constructor <init>(Lorg/json/JSONObject;)V
    .locals 2

    const-string v0, "jsonObject"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 9
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 14
    const-string v0, "pageId"

    const/4 v1, 0x0

    invoke-virtual {p1, v0, v1}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/OSInAppMessagePage;->pageId:Ljava/lang/String;

    .line 15
    const-string v0, "pageIndex"

    invoke-virtual {p1, v0, v1}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    iput-object p1, p0, Lcom/onesignal/OSInAppMessagePage;->pageIndex:Ljava/lang/String;

    return-void
.end method


# virtual methods
.method public final getPageId()Ljava/lang/String;
    .locals 1

    .line 10
    iget-object v0, p0, Lcom/onesignal/OSInAppMessagePage;->pageId:Ljava/lang/String;

    return-object v0
.end method

.method public final getPageIndex()Ljava/lang/String;
    .locals 1

    .line 11
    iget-object v0, p0, Lcom/onesignal/OSInAppMessagePage;->pageIndex:Ljava/lang/String;

    return-object v0
.end method

.method public final setPageId(Ljava/lang/String;)V
    .locals 0

    .line 10
    iput-object p1, p0, Lcom/onesignal/OSInAppMessagePage;->pageId:Ljava/lang/String;

    return-void
.end method

.method public final setPageIndex(Ljava/lang/String;)V
    .locals 0

    .line 11
    iput-object p1, p0, Lcom/onesignal/OSInAppMessagePage;->pageIndex:Ljava/lang/String;

    return-void
.end method

.method public final toJSONObject()Lorg/json/JSONObject;
    .locals 3

    .line 19
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 21
    :try_start_0
    const-string v1, "pageId"

    iget-object v2, p0, Lcom/onesignal/OSInAppMessagePage;->pageId:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 22
    const-string v1, "pageIndex"

    iget-object v2, p0, Lcom/onesignal/OSInAppMessagePage;->pageIndex:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v1

    .line 24
    invoke-virtual {v1}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-object v0
.end method
