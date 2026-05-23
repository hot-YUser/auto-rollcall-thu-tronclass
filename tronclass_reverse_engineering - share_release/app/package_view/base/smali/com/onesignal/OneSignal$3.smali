.class Lcom/onesignal/OneSignal$3;
.super Ljava/lang/Object;
.source "OneSignal.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->unsubscribeWhenNotificationsAreDisabled(Z)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$set:Z


# direct methods
.method constructor <init>(Z)V
    .locals 0

    .line 692
    iput-boolean p1, p0, Lcom/onesignal/OneSignal$3;->val$set:Z

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 695
    invoke-static {}, Lcom/onesignal/OneSignal;->access$100()Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Running unsubscribeWhenNotificationsAreDisabled() operation from pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 696
    iget-boolean v0, p0, Lcom/onesignal/OneSignal$3;->val$set:Z

    invoke-static {v0}, Lcom/onesignal/OneSignal;->unsubscribeWhenNotificationsAreDisabled(Z)V

    return-void
.end method
