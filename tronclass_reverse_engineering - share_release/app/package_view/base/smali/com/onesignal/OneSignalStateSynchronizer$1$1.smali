.class Lcom/onesignal/OneSignalStateSynchronizer$1$1;
.super Ljava/lang/Object;
.source "OneSignalStateSynchronizer.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignalStateSynchronizer$1;->onComplete(Ljava/lang/String;Z)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OneSignalStateSynchronizer$1;


# direct methods
.method constructor <init>(Lcom/onesignal/OneSignalStateSynchronizer$1;)V
    .locals 0

    .line 309
    iput-object p1, p0, Lcom/onesignal/OneSignalStateSynchronizer$1$1;->this$0:Lcom/onesignal/OneSignalStateSynchronizer$1;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 312
    iget-object v0, p0, Lcom/onesignal/OneSignalStateSynchronizer$1$1;->this$0:Lcom/onesignal/OneSignalStateSynchronizer$1;

    iget-object v0, v0, Lcom/onesignal/OneSignalStateSynchronizer$1;->val$completionHandler:Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;

    if-eqz v0, :cond_0

    .line 313
    iget-object v0, p0, Lcom/onesignal/OneSignalStateSynchronizer$1$1;->this$0:Lcom/onesignal/OneSignalStateSynchronizer$1;

    iget-object v0, v0, Lcom/onesignal/OneSignalStateSynchronizer$1;->val$completionHandler:Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;

    iget-object v1, p0, Lcom/onesignal/OneSignalStateSynchronizer$1$1;->this$0:Lcom/onesignal/OneSignalStateSynchronizer$1;

    iget-object v1, v1, Lcom/onesignal/OneSignalStateSynchronizer$1;->val$responses:Lorg/json/JSONObject;

    invoke-interface {v0, v1}, Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;->onSuccess(Lorg/json/JSONObject;)V

    :cond_0
    return-void
.end method
