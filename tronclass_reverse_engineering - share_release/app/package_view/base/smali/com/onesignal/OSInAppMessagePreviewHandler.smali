.class public final Lcom/onesignal/OSInAppMessagePreviewHandler;
.super Ljava/lang/Object;
.source "OSInAppMessagePreviewHandler.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u00004\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0008\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0002\u0008\u00c0\u0002\u0018\u00002\u00020\u0001B\u0007\u0008\u0002\u00a2\u0006\u0002\u0010\u0002J\u0012\u0010\u0003\u001a\u0004\u0018\u00010\u00042\u0006\u0010\u0005\u001a\u00020\u0006H\u0007J\u0018\u0010\u0007\u001a\u00020\u00082\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\u0006H\u0007J\u001c\u0010\u000c\u001a\u00020\u00082\u0008\u0010\r\u001a\u0004\u0018\u00010\u000e2\u0008\u0010\u000f\u001a\u0004\u0018\u00010\u0010H\u0007J\u0008\u0010\u0011\u001a\u00020\u0008H\u0003\u00a8\u0006\u0012"
    }
    d2 = {
        "Lcom/onesignal/OSInAppMessagePreviewHandler;",
        "",
        "()V",
        "inAppPreviewPushUUID",
        "",
        "payload",
        "Lorg/json/JSONObject;",
        "notificationOpened",
        "",
        "activity",
        "Landroid/app/Activity;",
        "jsonData",
        "notificationReceived",
        "context",
        "Landroid/content/Context;",
        "bundle",
        "Landroid/os/Bundle;",
        "shouldDisplayNotification",
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


# static fields
.field public static final INSTANCE:Lcom/onesignal/OSInAppMessagePreviewHandler;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    new-instance v0, Lcom/onesignal/OSInAppMessagePreviewHandler;

    invoke-direct {v0}, Lcom/onesignal/OSInAppMessagePreviewHandler;-><init>()V

    sput-object v0, Lcom/onesignal/OSInAppMessagePreviewHandler;->INSTANCE:Lcom/onesignal/OSInAppMessagePreviewHandler;

    return-void
.end method

.method private constructor <init>()V
    .locals 0

    .line 12
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static final inAppPreviewPushUUID(Lorg/json/JSONObject;)Ljava/lang/String;
    .locals 3
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    const-string v0, "payload"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const/4 v0, 0x0

    .line 41
    :try_start_0
    invoke-static {p0}, Lcom/onesignal/NotificationBundleProcessor;->getCustomJSONObject(Lorg/json/JSONObject;)Lorg/json/JSONObject;

    move-result-object p0

    .line 40
    const-string v1, "{\n            Notificati\u2026Object(payload)\n        }"

    invoke-static {p0, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    .line 46
    const-string v1, "a"

    invoke-virtual {p0, v1}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v2

    if-nez v2, :cond_0

    return-object v0

    .line 50
    :cond_0
    invoke-virtual {p0, v1}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p0

    if-nez p0, :cond_1

    goto :goto_0

    .line 51
    :cond_1
    const-string v1, "os_in_app_message_preview_id"

    invoke-virtual {p0, v1}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v2

    if-eqz v2, :cond_2

    .line 52
    invoke-virtual {p0, v1}, Lorg/json/JSONObject;->optString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    move-object v0, p0

    goto :goto_0

    .line 54
    :cond_2
    move-object p0, v0

    check-cast p0, Ljava/lang/String;

    :catch_0
    :goto_0
    return-object v0
.end method

.method public static final notificationOpened(Landroid/app/Activity;Lorg/json/JSONObject;)Z
    .locals 2
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    const-string v0, "activity"

    invoke-static {p0, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "jsonData"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 31
    invoke-static {p1}, Lcom/onesignal/OSInAppMessagePreviewHandler;->inAppPreviewPushUUID(Lorg/json/JSONObject;)Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    const/4 p0, 0x0

    return p0

    .line 33
    :cond_0
    new-instance v1, Lorg/json/JSONArray;

    invoke-direct {v1}, Lorg/json/JSONArray;-><init>()V

    invoke-virtual {v1, p1}, Lorg/json/JSONArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    move-result-object p1

    invoke-static {p0, p1}, Lcom/onesignal/OneSignal;->openDestinationActivity(Landroid/app/Activity;Lorg/json/JSONArray;)V

    .line 34
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object p0

    invoke-virtual {p0, v0}, Lcom/onesignal/OSInAppMessageController;->displayPreviewMessage(Ljava/lang/String;)V

    const/4 p0, 0x1

    return p0
.end method

.method public static final notificationReceived(Landroid/content/Context;Landroid/os/Bundle;)Z
    .locals 3
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    .line 15
    invoke-static {p1}, Lcom/onesignal/NotificationBundleProcessor;->bundleAsJSONObject(Landroid/os/Bundle;)Lorg/json/JSONObject;

    move-result-object p1

    const-string v0, "bundleAsJSONObject(bundle)"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    .line 17
    sget-object v0, Lcom/onesignal/OSInAppMessagePreviewHandler;->INSTANCE:Lcom/onesignal/OSInAppMessagePreviewHandler;

    invoke-static {p1}, Lcom/onesignal/OSInAppMessagePreviewHandler;->inAppPreviewPushUUID(Lorg/json/JSONObject;)Ljava/lang/String;

    move-result-object v1

    if-nez v1, :cond_0

    const/4 p0, 0x0

    return p0

    .line 20
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->isAppActive()Z

    move-result v2

    if-eqz v2, :cond_1

    .line 21
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object p0

    invoke-virtual {p0, v1}, Lcom/onesignal/OSInAppMessageController;->displayPreviewMessage(Ljava/lang/String;)V

    goto :goto_0

    .line 22
    :cond_1
    invoke-direct {v0}, Lcom/onesignal/OSInAppMessagePreviewHandler;->shouldDisplayNotification()Z

    move-result v0

    if-eqz v0, :cond_2

    .line 23
    new-instance v0, Lcom/onesignal/OSNotificationGenerationJob;

    invoke-direct {v0, p0, p1}, Lcom/onesignal/OSNotificationGenerationJob;-><init>(Landroid/content/Context;Lorg/json/JSONObject;)V

    .line 24
    invoke-static {v0}, Lcom/onesignal/GenerateNotification;->displayIAMPreviewNotification(Lcom/onesignal/OSNotificationGenerationJob;)Z

    :cond_2
    :goto_0
    const/4 p0, 0x1

    return p0
.end method

.method private final shouldDisplayNotification()Z
    .locals 1

    const/4 v0, 0x1

    return v0
.end method
