.class public final Lcom/onesignal/GenerateNotificationOpenIntentFromPushPayload;
.super Ljava/lang/Object;
.source "GenerateNotificationOpenIntentFromPushPayload.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u00000\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\u0008\u00c6\u0002\u0018\u00002\u00020\u0001B\u0007\u0008\u0002\u00a2\u0006\u0002\u0010\u0002J\u0016\u0010\u0003\u001a\u00020\u00042\u0006\u0010\u0005\u001a\u00020\u00062\u0006\u0010\u0007\u001a\u00020\u0008J\u0014\u0010\t\u001a\u0004\u0018\u00010\n2\u0008\u0010\u000b\u001a\u0004\u0018\u00010\u000cH\u0002J\u0018\u0010\r\u001a\u00020\u000e2\u0006\u0010\r\u001a\u00020\u000e2\u0006\u0010\u0007\u001a\u00020\u0008H\u0002\u00a8\u0006\u000f"
    }
    d2 = {
        "Lcom/onesignal/GenerateNotificationOpenIntentFromPushPayload;",
        "",
        "()V",
        "create",
        "Lcom/onesignal/GenerateNotificationOpenIntent;",
        "context",
        "Landroid/content/Context;",
        "fcmPayload",
        "Lorg/json/JSONObject;",
        "openBrowserIntent",
        "Landroid/content/Intent;",
        "uri",
        "Landroid/net/Uri;",
        "shouldOpenApp",
        "",
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
.field public static final INSTANCE:Lcom/onesignal/GenerateNotificationOpenIntentFromPushPayload;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    new-instance v0, Lcom/onesignal/GenerateNotificationOpenIntentFromPushPayload;

    invoke-direct {v0}, Lcom/onesignal/GenerateNotificationOpenIntentFromPushPayload;-><init>()V

    sput-object v0, Lcom/onesignal/GenerateNotificationOpenIntentFromPushPayload;->INSTANCE:Lcom/onesignal/GenerateNotificationOpenIntentFromPushPayload;

    return-void
.end method

.method private constructor <init>()V
    .locals 0

    .line 13
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method private final openBrowserIntent(Landroid/net/Uri;)Landroid/content/Intent;
    .locals 0

    if-nez p1, :cond_0

    const/4 p1, 0x0

    return-object p1

    .line 40
    :cond_0
    invoke-static {p1}, Lcom/onesignal/OSUtils;->openURLInBrowserIntent(Landroid/net/Uri;)Landroid/content/Intent;

    move-result-object p1

    return-object p1
.end method

.method private final shouldOpenApp(ZLorg/json/JSONObject;)Z
    .locals 0

    .line 31
    invoke-static {p2}, Lcom/onesignal/OSInAppMessagePreviewHandler;->inAppPreviewPushUUID(Lorg/json/JSONObject;)Ljava/lang/String;

    move-result-object p2

    if-eqz p2, :cond_0

    const/4 p2, 0x1

    goto :goto_0

    :cond_0
    const/4 p2, 0x0

    :goto_0
    or-int/2addr p1, p2

    return p1
.end method


# virtual methods
.method public final create(Landroid/content/Context;Lorg/json/JSONObject;)Lcom/onesignal/GenerateNotificationOpenIntent;
    .locals 3

    const-string v0, "context"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "fcmPayload"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 18
    new-instance v0, Lcom/onesignal/OSNotificationOpenBehaviorFromPushPayload;

    invoke-direct {v0, p1, p2}, Lcom/onesignal/OSNotificationOpenBehaviorFromPushPayload;-><init>(Landroid/content/Context;Lorg/json/JSONObject;)V

    .line 23
    new-instance v1, Lcom/onesignal/GenerateNotificationOpenIntent;

    .line 25
    invoke-virtual {v0}, Lcom/onesignal/OSNotificationOpenBehaviorFromPushPayload;->getUri()Landroid/net/Uri;

    move-result-object v2

    invoke-direct {p0, v2}, Lcom/onesignal/GenerateNotificationOpenIntentFromPushPayload;->openBrowserIntent(Landroid/net/Uri;)Landroid/content/Intent;

    move-result-object v2

    .line 26
    invoke-virtual {v0}, Lcom/onesignal/OSNotificationOpenBehaviorFromPushPayload;->getShouldOpenApp()Z

    move-result v0

    invoke-direct {p0, v0, p2}, Lcom/onesignal/GenerateNotificationOpenIntentFromPushPayload;->shouldOpenApp(ZLorg/json/JSONObject;)Z

    move-result p2

    .line 23
    invoke-direct {v1, p1, v2, p2}, Lcom/onesignal/GenerateNotificationOpenIntent;-><init>(Landroid/content/Context;Landroid/content/Intent;Z)V

    return-object v1
.end method
