.class public final Lcom/onesignal/NotificationPermissionController$showFallbackAlertDialog$1;
.super Ljava/lang/Object;
.source "NotificationPermissionController.kt"

# interfaces
.implements Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$Callback;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/NotificationPermissionController;->showFallbackAlertDialog()Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = null
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u0013\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\u0008\u0002*\u0001\u0000\u0008\n\u0018\u00002\u00020\u0001J\u0008\u0010\u0002\u001a\u00020\u0003H\u0016J\u0008\u0010\u0004\u001a\u00020\u0003H\u0016\u00a8\u0006\u0005"
    }
    d2 = {
        "com/onesignal/NotificationPermissionController$showFallbackAlertDialog$1",
        "Lcom/onesignal/AlertDialogPrepromptForAndroidSettings$Callback;",
        "onAccept",
        "",
        "onDecline",
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
.field final synthetic $activity:Landroid/app/Activity;


# direct methods
.method constructor <init>(Landroid/app/Activity;)V
    .locals 0

    iput-object p1, p0, Lcom/onesignal/NotificationPermissionController$showFallbackAlertDialog$1;->$activity:Landroid/app/Activity;

    .line 99
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onAccept()V
    .locals 2

    .line 101
    sget-object v0, Lcom/onesignal/NavigateToAndroidSettingsForNotifications;->INSTANCE:Lcom/onesignal/NavigateToAndroidSettingsForNotifications;

    iget-object v1, p0, Lcom/onesignal/NotificationPermissionController$showFallbackAlertDialog$1;->$activity:Landroid/app/Activity;

    check-cast v1, Landroid/content/Context;

    invoke-virtual {v0, v1}, Lcom/onesignal/NavigateToAndroidSettingsForNotifications;->show(Landroid/content/Context;)V

    .line 102
    sget-object v0, Lcom/onesignal/NotificationPermissionController;->INSTANCE:Lcom/onesignal/NotificationPermissionController;

    const/4 v0, 0x1

    invoke-static {v0}, Lcom/onesignal/NotificationPermissionController;->access$setAwaitingForReturnFromSystemSettings$p(Z)V

    return-void
.end method

.method public onDecline()V
    .locals 2

    .line 105
    sget-object v0, Lcom/onesignal/NotificationPermissionController;->INSTANCE:Lcom/onesignal/NotificationPermissionController;

    const/4 v1, 0x0

    invoke-static {v0, v1}, Lcom/onesignal/NotificationPermissionController;->access$fireCallBacks(Lcom/onesignal/NotificationPermissionController;Z)V

    return-void
.end method
