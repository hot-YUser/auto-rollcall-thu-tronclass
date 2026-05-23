.class Lcom/onesignal/OneSignal$4;
.super Ljava/lang/Object;
.source "OneSignal.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->setInAppMessageLifecycleHandler(Lcom/onesignal/OSInAppMessageLifecycleHandler;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$handler:Lcom/onesignal/OSInAppMessageLifecycleHandler;


# direct methods
.method constructor <init>(Lcom/onesignal/OSInAppMessageLifecycleHandler;)V
    .locals 0

    .line 792
    iput-object p1, p0, Lcom/onesignal/OneSignal$4;->val$handler:Lcom/onesignal/OSInAppMessageLifecycleHandler;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 795
    invoke-static {}, Lcom/onesignal/OneSignal;->access$100()Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Running setInAppMessageLifecycleHandler() operation from pending queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 796
    iget-object v0, p0, Lcom/onesignal/OneSignal$4;->val$handler:Lcom/onesignal/OSInAppMessageLifecycleHandler;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->setInAppMessageLifecycleHandler(Lcom/onesignal/OSInAppMessageLifecycleHandler;)V

    return-void
.end method
