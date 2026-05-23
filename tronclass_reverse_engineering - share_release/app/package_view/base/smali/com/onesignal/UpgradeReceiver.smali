.class public Lcom/onesignal/UpgradeReceiver;
.super Landroid/content/BroadcastReceiver;
.source "UpgradeReceiver.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 35
    invoke-direct {p0}, Landroid/content/BroadcastReceiver;-><init>()V

    return-void
.end method


# virtual methods
.method public onReceive(Landroid/content/Context;Landroid/content/Intent;)V
    .locals 1

    .line 44
    sget p2, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v0, 0x18

    if-ne p2, v0, :cond_0

    return-void

    :cond_0
    const/4 p2, 0x1

    .line 47
    invoke-static {p1, p2}, Lcom/onesignal/OSNotificationRestoreWorkManager;->beginEnqueueingWork(Landroid/content/Context;Z)V

    return-void
.end method
