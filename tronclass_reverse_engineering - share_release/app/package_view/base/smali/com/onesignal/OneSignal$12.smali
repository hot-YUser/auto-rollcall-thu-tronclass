.class Lcom/onesignal/OneSignal$12;
.super Ljava/lang/Object;
.source "OneSignal.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->logoutSMSNumber(Lcom/onesignal/OneSignal$OSSMSUpdateHandler;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$callback:Lcom/onesignal/OneSignal$OSSMSUpdateHandler;


# direct methods
.method constructor <init>(Lcom/onesignal/OneSignal$OSSMSUpdateHandler;)V
    .locals 0

    .line 1635
    iput-object p1, p0, Lcom/onesignal/OneSignal$12;->val$callback:Lcom/onesignal/OneSignal$OSSMSUpdateHandler;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 1638
    invoke-static {}, Lcom/onesignal/OneSignal;->access$100()Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Running  logoutSMSNumber() operation from pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 1639
    iget-object v0, p0, Lcom/onesignal/OneSignal$12;->val$callback:Lcom/onesignal/OneSignal$OSSMSUpdateHandler;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->logoutSMSNumber(Lcom/onesignal/OneSignal$OSSMSUpdateHandler;)V

    return-void
.end method
