.class Lcom/onesignal/OSInAppMessageController$13;
.super Ljava/lang/Object;
.source "OSInAppMessageController.java"

# interfaces
.implements Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSInAppMessageController;->displayMessage(Lcom/onesignal/OSInAppMessageInternal;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSInAppMessageController;

.field final synthetic val$message:Lcom/onesignal/OSInAppMessageInternal;


# direct methods
.method constructor <init>(Lcom/onesignal/OSInAppMessageController;Lcom/onesignal/OSInAppMessageInternal;)V
    .locals 0

    .line 808
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageController$13;->this$0:Lcom/onesignal/OSInAppMessageController;

    iput-object p2, p0, Lcom/onesignal/OSInAppMessageController$13;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onFailure(Ljava/lang/String;)V
    .locals 2

    .line 833
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$13;->this$0:Lcom/onesignal/OSInAppMessageController;

    const/4 v1, 0x0

    invoke-static {v0, v1}, Lcom/onesignal/OSInAppMessageController;->access$1702(Lcom/onesignal/OSInAppMessageController;Z)Z

    .line 835
    :try_start_0
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0, p1}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    .line 836
    const-string p1, "retry"

    invoke-virtual {v0, p1}, Lorg/json/JSONObject;->getBoolean(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_0

    .line 841
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController$13;->this$0:Lcom/onesignal/OSInAppMessageController;

    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$13;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    invoke-static {p1, v0}, Lcom/onesignal/OSInAppMessageController;->access$1800(Lcom/onesignal/OSInAppMessageController;Lcom/onesignal/OSInAppMessageInternal;)V

    goto :goto_0

    .line 843
    :cond_0
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController$13;->this$0:Lcom/onesignal/OSInAppMessageController;

    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$13;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    const/4 v1, 0x1

    invoke-virtual {p1, v0, v1}, Lcom/onesignal/OSInAppMessageController;->messageWasDismissed(Lcom/onesignal/OSInAppMessageInternal;Z)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 846
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-void
.end method

.method public onSuccess(Ljava/lang/String;)V
    .locals 2

    .line 812
    :try_start_0
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0, p1}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    .line 813
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController$13;->this$0:Lcom/onesignal/OSInAppMessageController;

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController$13;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    invoke-static {p1, v0, v1}, Lcom/onesignal/OSInAppMessageController;->access$1600(Lcom/onesignal/OSInAppMessageController;Lorg/json/JSONObject;Lcom/onesignal/OSInAppMessageInternal;)Lcom/onesignal/OSInAppMessageContent;

    move-result-object p1

    .line 814
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageContent;->getContentHtml()Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    .line 815
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController$13;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-static {p1}, Lcom/onesignal/OSInAppMessageController;->access$300(Lcom/onesignal/OSInAppMessageController;)Lcom/onesignal/OSLogger;

    move-result-object p1

    const-string v0, "displayMessage:OnSuccess: No HTML retrieved from loadMessageContent"

    invoke-interface {p1, v0}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    return-void

    .line 818
    :cond_0
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$13;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-static {v0}, Lcom/onesignal/OSInAppMessageController;->access$1300(Lcom/onesignal/OSInAppMessageController;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 819
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$13;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-static {v0, p1}, Lcom/onesignal/OSInAppMessageController;->access$1502(Lcom/onesignal/OSInAppMessageController;Lcom/onesignal/OSInAppMessageContent;)Lcom/onesignal/OSInAppMessageContent;

    return-void

    .line 822
    :cond_1
    invoke-static {}, Lcom/onesignal/OneSignal;->getSessionManager()Lcom/onesignal/OSSessionManager;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController$13;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    iget-object v1, v1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSSessionManager;->onInAppMessageReceived(Ljava/lang/String;)V

    .line 823
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$13;->this$0:Lcom/onesignal/OSInAppMessageController;

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController$13;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSInAppMessageController;->onMessageWillDisplay(Lcom/onesignal/OSInAppMessageInternal;)V

    .line 824
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$13;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageContent;->getContentHtml()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/onesignal/OSInAppMessageController;->taggedHTMLString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/onesignal/OSInAppMessageContent;->setContentHtml(Ljava/lang/String;)V

    .line 825
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$13;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    invoke-static {v0, p1}, Lcom/onesignal/WebViewManager;->showMessageContent(Lcom/onesignal/OSInAppMessageInternal;Lcom/onesignal/OSInAppMessageContent;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 827
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-void
.end method
