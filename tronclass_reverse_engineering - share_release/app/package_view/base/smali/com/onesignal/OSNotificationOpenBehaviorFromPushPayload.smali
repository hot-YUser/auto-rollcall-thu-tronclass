.class public final Lcom/onesignal/OSNotificationOpenBehaviorFromPushPayload;
.super Ljava/lang/Object;
.source "OSNotificationOpenBehaviorFromPushPayload.kt"


# annotations
.annotation system Ldalvik/annotation/SourceDebugExtension;
    value = "SMAP\nOSNotificationOpenBehaviorFromPushPayload.kt\nKotlin\n*S Kotlin\n*F\n+ 1 OSNotificationOpenBehaviorFromPushPayload.kt\ncom/onesignal/OSNotificationOpenBehaviorFromPushPayload\n+ 2 Strings.kt\nkotlin/text/StringsKt__StringsKt\n*L\n1#1,35:1\n107#2:36\n79#2,22:37\n*S KotlinDebug\n*F\n+ 1 OSNotificationOpenBehaviorFromPushPayload.kt\ncom/onesignal/OSNotificationOpenBehaviorFromPushPayload\n*L\n28#1:36\n28#1:37,22\n*E\n"
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000(\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0010\u000b\n\u0002\u0008\u0003\n\u0002\u0018\u0002\n\u0002\u0008\u0003\u0018\u00002\u00020\u0001B\u0015\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u00a2\u0006\u0002\u0010\u0006R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u0011\u0010\u0007\u001a\u00020\u00088F\u00a2\u0006\u0006\u001a\u0004\u0008\t\u0010\nR\u0013\u0010\u000b\u001a\u0004\u0018\u00010\u000c8F\u00a2\u0006\u0006\u001a\u0004\u0008\r\u0010\u000e\u00a8\u0006\u000f"
    }
    d2 = {
        "Lcom/onesignal/OSNotificationOpenBehaviorFromPushPayload;",
        "",
        "context",
        "Landroid/content/Context;",
        "fcmPayload",
        "Lorg/json/JSONObject;",
        "(Landroid/content/Context;Lorg/json/JSONObject;)V",
        "shouldOpenApp",
        "",
        "getShouldOpenApp",
        "()Z",
        "uri",
        "Landroid/net/Uri;",
        "getUri",
        "()Landroid/net/Uri;",
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
.field private final context:Landroid/content/Context;

.field private final fcmPayload:Lorg/json/JSONObject;


# direct methods
.method public constructor <init>(Landroid/content/Context;Lorg/json/JSONObject;)V
    .locals 1

    const-string v0, "context"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "fcmPayload"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 7
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 8
    iput-object p1, p0, Lcom/onesignal/OSNotificationOpenBehaviorFromPushPayload;->context:Landroid/content/Context;

    .line 9
    iput-object p2, p0, Lcom/onesignal/OSNotificationOpenBehaviorFromPushPayload;->fcmPayload:Lorg/json/JSONObject;

    return-void
.end method


# virtual methods
.method public final getShouldOpenApp()Z
    .locals 2

    .line 14
    sget-object v0, Lcom/onesignal/OSNotificationOpenAppSettings;->INSTANCE:Lcom/onesignal/OSNotificationOpenAppSettings;

    iget-object v1, p0, Lcom/onesignal/OSNotificationOpenBehaviorFromPushPayload;->context:Landroid/content/Context;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotificationOpenAppSettings;->getShouldOpenActivity(Landroid/content/Context;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 15
    invoke-virtual {p0}, Lcom/onesignal/OSNotificationOpenBehaviorFromPushPayload;->getUri()Landroid/net/Uri;

    move-result-object v0

    if-nez v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public final getUri()Landroid/net/Uri;
    .locals 8

    .line 20
    sget-object v0, Lcom/onesignal/OSNotificationOpenAppSettings;->INSTANCE:Lcom/onesignal/OSNotificationOpenAppSettings;

    iget-object v1, p0, Lcom/onesignal/OSNotificationOpenBehaviorFromPushPayload;->context:Landroid/content/Context;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotificationOpenAppSettings;->getShouldOpenActivity(Landroid/content/Context;)Z

    move-result v0

    const/4 v1, 0x0

    if-nez v0, :cond_0

    return-object v1

    .line 21
    :cond_0
    sget-object v0, Lcom/onesignal/OSNotificationOpenAppSettings;->INSTANCE:Lcom/onesignal/OSNotificationOpenAppSettings;

    iget-object v2, p0, Lcom/onesignal/OSNotificationOpenBehaviorFromPushPayload;->context:Landroid/content/Context;

    invoke-virtual {v0, v2}, Lcom/onesignal/OSNotificationOpenAppSettings;->getSuppressLaunchURL(Landroid/content/Context;)Z

    move-result v0

    if-eqz v0, :cond_1

    return-object v1

    .line 23
    :cond_1
    new-instance v0, Lorg/json/JSONObject;

    iget-object v2, p0, Lcom/onesignal/OSNotificationOpenBehaviorFromPushPayload;->fcmPayload:Lorg/json/JSONObject;

    const-string v3, "custom"

    invoke-virtual {v2, v3}, Lorg/json/JSONObject;->optString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    invoke-direct {v0, v2}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    .line 25
    const-string v2, "u"

    invoke-virtual {v0, v2}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v3

    if-eqz v3, :cond_8

    .line 26
    invoke-virtual {v0, v2}, Lorg/json/JSONObject;->optString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 27
    const-string v2, ""

    invoke-static {v0, v2}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_8

    .line 28
    const-string v1, "url"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    .line 36
    check-cast v0, Ljava/lang/CharSequence;

    .line 38
    invoke-interface {v0}, Ljava/lang/CharSequence;->length()I

    move-result v1

    const/4 v2, 0x1

    sub-int/2addr v1, v2

    const/4 v3, 0x0

    move v4, v3

    move v5, v4

    :goto_0
    if-gt v4, v1, :cond_7

    if-nez v5, :cond_2

    move v6, v4

    goto :goto_1

    :cond_2
    move v6, v1

    .line 43
    :goto_1
    invoke-interface {v0, v6}, Ljava/lang/CharSequence;->charAt(I)C

    move-result v6

    const/16 v7, 0x20

    .line 28
    invoke-static {v6, v7}, Lkotlin/jvm/internal/Intrinsics;->compare(II)I

    move-result v6

    if-gtz v6, :cond_3

    move v6, v2

    goto :goto_2

    :cond_3
    move v6, v3

    :goto_2
    if-nez v5, :cond_5

    if-nez v6, :cond_4

    move v5, v2

    goto :goto_0

    :cond_4
    add-int/lit8 v4, v4, 0x1

    goto :goto_0

    :cond_5
    if-nez v6, :cond_6

    goto :goto_3

    :cond_6
    add-int/lit8 v1, v1, -0x1

    goto :goto_0

    :cond_7
    :goto_3
    add-int/2addr v1, v2

    .line 58
    invoke-interface {v0, v4, v1}, Ljava/lang/CharSequence;->subSequence(II)Ljava/lang/CharSequence;

    move-result-object v0

    .line 36
    invoke-virtual {v0}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v0

    .line 28
    invoke-static {v0}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v0

    return-object v0

    :cond_8
    return-object v1
.end method
