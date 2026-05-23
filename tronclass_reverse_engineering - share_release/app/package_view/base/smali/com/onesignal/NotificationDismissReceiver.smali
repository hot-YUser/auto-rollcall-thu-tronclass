.class public Lcom/onesignal/NotificationDismissReceiver;
.super Landroid/content/BroadcastReceiver;
.source "NotificationDismissReceiver.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 32
    invoke-direct {p0}, Landroid/content/BroadcastReceiver;-><init>()V

    return-void
.end method


# virtual methods
.method public onReceive(Landroid/content/Context;Landroid/content/Intent;)V
    .locals 0

    .line 36
    invoke-static {p1, p2}, Lcom/onesignal/NotificationOpenedProcessor;->processFromContext(Landroid/content/Context;Landroid/content/Intent;)V

    return-void
.end method
