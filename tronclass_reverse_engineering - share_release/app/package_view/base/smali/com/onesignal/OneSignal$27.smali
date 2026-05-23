.class Lcom/onesignal/OneSignal$27;
.super Ljava/lang/Object;
.source "OneSignal.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->disablePush(Z)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$disable:Z


# direct methods
.method constructor <init>(Z)V
    .locals 0

    .line 2714
    iput-boolean p1, p0, Lcom/onesignal/OneSignal$27;->val$disable:Z

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 2717
    invoke-static {}, Lcom/onesignal/OneSignal;->access$100()Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Running setSubscription() operation from pending queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 2718
    iget-boolean v0, p0, Lcom/onesignal/OneSignal$27;->val$disable:Z

    invoke-static {v0}, Lcom/onesignal/OneSignal;->disablePush(Z)V

    return-void
.end method
