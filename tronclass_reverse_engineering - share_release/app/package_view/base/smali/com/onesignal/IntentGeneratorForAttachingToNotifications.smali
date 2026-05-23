.class public final Lcom/onesignal/IntentGeneratorForAttachingToNotifications;
.super Ljava/lang/Object;
.source "IntentGeneratorForAttachingToNotifications.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000.\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0004\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0008\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0005\u0018\u00002\u00020\u0001B\r\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u00a2\u0006\u0002\u0010\u0004J\u0018\u0010\n\u001a\u0004\u0018\u00010\u000b2\u0006\u0010\u000c\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u000fJ\u000e\u0010\u0010\u001a\u00020\u000f2\u0006\u0010\u0011\u001a\u00020\rJ\u0008\u0010\u0012\u001a\u00020\u000fH\u0003J\u0008\u0010\u0013\u001a\u00020\u000fH\u0003R\u0011\u0010\u0002\u001a\u00020\u0003\u00a2\u0006\u0008\n\u0000\u001a\u0004\u0008\u0005\u0010\u0006R\u0012\u0010\u0007\u001a\u0006\u0012\u0002\u0008\u00030\u0008X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u0012\u0010\t\u001a\u0006\u0012\u0002\u0008\u00030\u0008X\u0082\u0004\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u0014"
    }
    d2 = {
        "Lcom/onesignal/IntentGeneratorForAttachingToNotifications;",
        "",
        "context",
        "Landroid/content/Context;",
        "(Landroid/content/Context;)V",
        "getContext",
        "()Landroid/content/Context;",
        "notificationOpenedClassAndroid22AndOlder",
        "Ljava/lang/Class;",
        "notificationOpenedClassAndroid23Plus",
        "getNewActionPendingIntent",
        "Landroid/app/PendingIntent;",
        "requestCode",
        "",
        "oneSignalIntent",
        "Landroid/content/Intent;",
        "getNewBaseIntent",
        "notificationId",
        "getNewBaseIntentAndroidAPI22AndOlder",
        "getNewBaseIntentAndroidAPI23Plus",
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

.field private final notificationOpenedClassAndroid22AndOlder:Ljava/lang/Class;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/lang/Class<",
            "*>;"
        }
    .end annotation
.end field

.field private final notificationOpenedClassAndroid23Plus:Ljava/lang/Class;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/lang/Class<",
            "*>;"
        }
    .end annotation
.end field


# direct methods
.method public constructor <init>(Landroid/content/Context;)V
    .locals 1

    const-string v0, "context"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 8
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 9
    iput-object p1, p0, Lcom/onesignal/IntentGeneratorForAttachingToNotifications;->context:Landroid/content/Context;

    .line 11
    const-class p1, Lcom/onesignal/NotificationOpenedReceiver;

    iput-object p1, p0, Lcom/onesignal/IntentGeneratorForAttachingToNotifications;->notificationOpenedClassAndroid23Plus:Ljava/lang/Class;

    .line 12
    const-class p1, Lcom/onesignal/NotificationOpenedReceiverAndroid22AndOlder;

    iput-object p1, p0, Lcom/onesignal/IntentGeneratorForAttachingToNotifications;->notificationOpenedClassAndroid22AndOlder:Ljava/lang/Class;

    return-void
.end method

.method private final getNewBaseIntentAndroidAPI22AndOlder()Landroid/content/Intent;
    .locals 3
    .annotation runtime Lkotlin/Deprecated;
        message = "Use getNewBaseIntentAndroidAPI23Plus instead for Android 6+"
    .end annotation

    .line 48
    new-instance v0, Landroid/content/Intent;

    .line 49
    iget-object v1, p0, Lcom/onesignal/IntentGeneratorForAttachingToNotifications;->context:Landroid/content/Context;

    .line 50
    iget-object v2, p0, Lcom/onesignal/IntentGeneratorForAttachingToNotifications;->notificationOpenedClassAndroid22AndOlder:Ljava/lang/Class;

    .line 48
    invoke-direct {v0, v1, v2}, Landroid/content/Intent;-><init>(Landroid/content/Context;Ljava/lang/Class;)V

    const/high16 v1, 0x18080000

    .line 52
    invoke-virtual {v0, v1}, Landroid/content/Intent;->addFlags(I)Landroid/content/Intent;

    return-object v0
.end method

.method private final getNewBaseIntentAndroidAPI23Plus()Landroid/content/Intent;
    .locals 3

    .line 39
    new-instance v0, Landroid/content/Intent;

    .line 40
    iget-object v1, p0, Lcom/onesignal/IntentGeneratorForAttachingToNotifications;->context:Landroid/content/Context;

    .line 41
    iget-object v2, p0, Lcom/onesignal/IntentGeneratorForAttachingToNotifications;->notificationOpenedClassAndroid23Plus:Ljava/lang/Class;

    .line 39
    invoke-direct {v0, v1, v2}, Landroid/content/Intent;-><init>(Landroid/content/Context;Ljava/lang/Class;)V

    return-object v0
.end method


# virtual methods
.method public final getContext()Landroid/content/Context;
    .locals 1

    .line 9
    iget-object v0, p0, Lcom/onesignal/IntentGeneratorForAttachingToNotifications;->context:Landroid/content/Context;

    return-object v0
.end method

.method public final getNewActionPendingIntent(ILandroid/content/Intent;)Landroid/app/PendingIntent;
    .locals 2

    const-string v0, "oneSignalIntent"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const/high16 v0, 0xc000000

    .line 66
    iget-object v1, p0, Lcom/onesignal/IntentGeneratorForAttachingToNotifications;->context:Landroid/content/Context;

    .line 65
    invoke-static {v1, p1, p2, v0}, Landroid/app/PendingIntent;->getActivity(Landroid/content/Context;ILandroid/content/Intent;I)Landroid/app/PendingIntent;

    move-result-object p1

    return-object p1
.end method

.method public final getNewBaseIntent(I)Landroid/content/Intent;
    .locals 2

    .line 19
    invoke-direct {p0}, Lcom/onesignal/IntentGeneratorForAttachingToNotifications;->getNewBaseIntentAndroidAPI23Plus()Landroid/content/Intent;

    move-result-object v0

    .line 26
    const-string v1, "androidNotificationId"

    .line 25
    invoke-virtual {v0, v1, p1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;I)Landroid/content/Intent;

    move-result-object p1

    const/high16 v0, 0x24000000

    .line 31
    invoke-virtual {p1, v0}, Landroid/content/Intent;->addFlags(I)Landroid/content/Intent;

    move-result-object p1

    const-string v0, "intent\n            .putE\u2026Y_CLEAR_TOP\n            )"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    return-object p1
.end method
