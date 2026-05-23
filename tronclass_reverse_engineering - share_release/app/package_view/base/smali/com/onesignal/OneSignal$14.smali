.class Lcom/onesignal/OneSignal$14;
.super Ljava/lang/Object;
.source "OneSignal.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->logoutEmail(Lcom/onesignal/OneSignal$EmailUpdateHandler;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$callback:Lcom/onesignal/OneSignal$EmailUpdateHandler;


# direct methods
.method constructor <init>(Lcom/onesignal/OneSignal$EmailUpdateHandler;)V
    .locals 0

    .line 1741
    iput-object p1, p0, Lcom/onesignal/OneSignal$14;->val$callback:Lcom/onesignal/OneSignal$EmailUpdateHandler;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 1744
    invoke-static {}, Lcom/onesignal/OneSignal;->access$100()Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Running  logoutEmail() operation from pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 1745
    iget-object v0, p0, Lcom/onesignal/OneSignal$14;->val$callback:Lcom/onesignal/OneSignal$EmailUpdateHandler;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->logoutEmail(Lcom/onesignal/OneSignal$EmailUpdateHandler;)V

    return-void
.end method
