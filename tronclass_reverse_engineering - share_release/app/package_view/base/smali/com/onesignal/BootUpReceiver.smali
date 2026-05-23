.class public Lcom/onesignal/BootUpReceiver;
.super Landroid/content/BroadcastReceiver;
.source "BootUpReceiver.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 34
    invoke-direct {p0}, Landroid/content/BroadcastReceiver;-><init>()V

    return-void
.end method


# virtual methods
.method public onReceive(Landroid/content/Context;Landroid/content/Intent;)V
    .locals 0

    const/4 p2, 0x1

    .line 38
    invoke-static {p1, p2}, Lcom/onesignal/OSNotificationRestoreWorkManager;->beginEnqueueingWork(Landroid/content/Context;Z)V

    return-void
.end method
