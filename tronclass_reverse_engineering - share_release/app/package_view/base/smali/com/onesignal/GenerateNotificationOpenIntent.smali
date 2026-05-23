.class public final Lcom/onesignal/GenerateNotificationOpenIntent;
.super Ljava/lang/Object;
.source "GenerateNotificationOpenIntent.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\u0008\u0004\u0018\u00002\u00020\u0001B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u00a2\u0006\u0002\u0010\u0008J\n\u0010\t\u001a\u0004\u0018\u00010\u0005H\u0002J\u0008\u0010\n\u001a\u0004\u0018\u00010\u0005R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u0010\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u000b"
    }
    d2 = {
        "Lcom/onesignal/GenerateNotificationOpenIntent;",
        "",
        "context",
        "Landroid/content/Context;",
        "intent",
        "Landroid/content/Intent;",
        "startApp",
        "",
        "(Landroid/content/Context;Landroid/content/Intent;Z)V",
        "getIntentAppOpen",
        "getIntentVisible",
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

.field private final intent:Landroid/content/Intent;

.field private final startApp:Z


# direct methods
.method public constructor <init>(Landroid/content/Context;Landroid/content/Intent;Z)V
    .locals 1

    const-string v0, "context"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 6
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 7
    iput-object p1, p0, Lcom/onesignal/GenerateNotificationOpenIntent;->context:Landroid/content/Context;

    .line 8
    iput-object p2, p0, Lcom/onesignal/GenerateNotificationOpenIntent;->intent:Landroid/content/Intent;

    .line 9
    iput-boolean p3, p0, Lcom/onesignal/GenerateNotificationOpenIntent;->startApp:Z

    return-void
.end method

.method private final getIntentAppOpen()Landroid/content/Intent;
    .locals 3

    .line 26
    iget-boolean v0, p0, Lcom/onesignal/GenerateNotificationOpenIntent;->startApp:Z

    const/4 v1, 0x0

    if-nez v0, :cond_0

    return-object v1

    .line 30
    :cond_0
    iget-object v0, p0, Lcom/onesignal/GenerateNotificationOpenIntent;->context:Landroid/content/Context;

    invoke-virtual {v0}, Landroid/content/Context;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v0

    .line 31
    iget-object v2, p0, Lcom/onesignal/GenerateNotificationOpenIntent;->context:Landroid/content/Context;

    invoke-virtual {v2}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object v2

    .line 30
    invoke-virtual {v0, v2}, Landroid/content/pm/PackageManager;->getLaunchIntentForPackage(Ljava/lang/String;)Landroid/content/Intent;

    move-result-object v0

    if-nez v0, :cond_1

    return-object v1

    .line 39
    :cond_1
    invoke-virtual {v0, v1}, Landroid/content/Intent;->setPackage(Ljava/lang/String;)Landroid/content/Intent;

    const/high16 v1, 0x10200000

    .line 40
    invoke-virtual {v0, v1}, Landroid/content/Intent;->setFlags(I)Landroid/content/Intent;

    return-object v0
.end method


# virtual methods
.method public final getIntentVisible()Landroid/content/Intent;
    .locals 1

    .line 12
    iget-object v0, p0, Lcom/onesignal/GenerateNotificationOpenIntent;->intent:Landroid/content/Intent;

    if-eqz v0, :cond_0

    return-object v0

    .line 13
    :cond_0
    invoke-direct {p0}, Lcom/onesignal/GenerateNotificationOpenIntent;->getIntentAppOpen()Landroid/content/Intent;

    move-result-object v0

    return-object v0
.end method
