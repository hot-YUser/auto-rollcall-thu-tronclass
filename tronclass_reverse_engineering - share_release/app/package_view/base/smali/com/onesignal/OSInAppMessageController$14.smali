.class Lcom/onesignal/OSInAppMessageController$14;
.super Ljava/lang/Object;
.source "OSInAppMessageController.java"

# interfaces
.implements Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSInAppMessageController;->displayPreviewMessage(Ljava/lang/String;)V
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

    .line 865
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageController$14;->this$0:Lcom/onesignal/OSInAppMessageController;

    iput-object p2, p0, Lcom/onesignal/OSInAppMessageController$14;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onFailure(Ljava/lang/String;)V
    .locals 1

    .line 889
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController$14;->this$0:Lcom/onesignal/OSInAppMessageController;

    const/4 v0, 0x0

    invoke-static {p1, v0}, Lcom/onesignal/OSInAppMessageController;->access$1900(Lcom/onesignal/OSInAppMessageController;Lcom/onesignal/OSInAppMessageInternal;)V

    return-void
.end method

.method public onSuccess(Ljava/lang/String;)V
    .locals 2

    .line 869
    :try_start_0
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0, p1}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    .line 870
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController$14;->this$0:Lcom/onesignal/OSInAppMessageController;

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController$14;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    invoke-static {p1, v0, v1}, Lcom/onesignal/OSInAppMessageController;->access$1600(Lcom/onesignal/OSInAppMessageController;Lorg/json/JSONObject;Lcom/onesignal/OSInAppMessageInternal;)Lcom/onesignal/OSInAppMessageContent;

    move-result-object p1

    .line 871
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageContent;->getContentHtml()Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    .line 872
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController$14;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-static {p1}, Lcom/onesignal/OSInAppMessageController;->access$300(Lcom/onesignal/OSInAppMessageController;)Lcom/onesignal/OSLogger;

    move-result-object p1

    const-string v0, "displayPreviewMessage:OnSuccess: No HTML retrieved from loadMessageContent"

    invoke-interface {p1, v0}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    return-void

    .line 875
    :cond_0
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$14;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-static {v0}, Lcom/onesignal/OSInAppMessageController;->access$1300(Lcom/onesignal/OSInAppMessageController;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 876
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$14;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-static {v0, p1}, Lcom/onesignal/OSInAppMessageController;->access$1502(Lcom/onesignal/OSInAppMessageController;Lcom/onesignal/OSInAppMessageContent;)Lcom/onesignal/OSInAppMessageContent;

    return-void

    .line 879
    :cond_1
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$14;->this$0:Lcom/onesignal/OSInAppMessageController;

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController$14;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSInAppMessageController;->onMessageWillDisplay(Lcom/onesignal/OSInAppMessageInternal;)V

    .line 880
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$14;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageContent;->getContentHtml()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/onesignal/OSInAppMessageController;->taggedHTMLString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/onesignal/OSInAppMessageContent;->setContentHtml(Ljava/lang/String;)V

    .line 881
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$14;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    invoke-static {v0, p1}, Lcom/onesignal/WebViewManager;->showMessageContent(Lcom/onesignal/OSInAppMessageInternal;Lcom/onesignal/OSInAppMessageContent;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 883
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-void
.end method
