.class Lcom/onesignal/OneSignal$31;
.super Ljava/lang/Object;
.source "OneSignal.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->clearOneSignalNotifications()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 2890
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 2893
    invoke-static {}, Lcom/onesignal/OneSignal;->access$100()Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Running clearOneSignalNotifications() operation from pending queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 2894
    invoke-static {}, Lcom/onesignal/OneSignal;->clearOneSignalNotifications()V

    return-void
.end method
