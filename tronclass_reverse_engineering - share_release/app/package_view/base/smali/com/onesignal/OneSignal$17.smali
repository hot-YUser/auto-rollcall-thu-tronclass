.class Lcom/onesignal/OneSignal$17;
.super Ljava/lang/Object;
.source "OneSignal.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignal;->setExternalUserId(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$completionCallback:Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;

.field final synthetic val$externalId:Ljava/lang/String;

.field final synthetic val$externalIdAuthHash:Ljava/lang/String;


# direct methods
.method constructor <init>(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;)V
    .locals 0

    .line 1834
    iput-object p1, p0, Lcom/onesignal/OneSignal$17;->val$externalId:Ljava/lang/String;

    iput-object p2, p0, Lcom/onesignal/OneSignal$17;->val$externalIdAuthHash:Ljava/lang/String;

    iput-object p3, p0, Lcom/onesignal/OneSignal$17;->val$completionCallback:Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 1837
    invoke-static {}, Lcom/onesignal/OneSignal;->access$100()Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Running setExternalUserId() operation from pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 1838
    iget-object v0, p0, Lcom/onesignal/OneSignal$17;->val$externalId:Ljava/lang/String;

    iget-object v1, p0, Lcom/onesignal/OneSignal$17;->val$externalIdAuthHash:Ljava/lang/String;

    iget-object v2, p0, Lcom/onesignal/OneSignal$17;->val$completionCallback:Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;

    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignal;->setExternalUserId(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;)V

    return-void
.end method
