.class Lcom/onesignal/OSInAppMessageController$12;
.super Ljava/lang/Object;
.source "OSInAppMessageController.java"

# interfaces
.implements Lcom/onesignal/OneSignal$OSGetTagsHandler;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSInAppMessageController;->getTagsForLiquidTemplating(Lcom/onesignal/OSInAppMessageInternal;Z)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSInAppMessageController;

.field final synthetic val$isPreview:Z

.field final synthetic val$message:Lcom/onesignal/OSInAppMessageInternal;


# direct methods
.method constructor <init>(Lcom/onesignal/OSInAppMessageController;ZLcom/onesignal/OSInAppMessageInternal;)V
    .locals 0

    .line 771
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageController$12;->this$0:Lcom/onesignal/OSInAppMessageController;

    iput-boolean p2, p0, Lcom/onesignal/OSInAppMessageController$12;->val$isPreview:Z

    iput-object p3, p0, Lcom/onesignal/OSInAppMessageController$12;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public tagsAvailable(Lorg/json/JSONObject;)V
    .locals 2

    .line 774
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$12;->this$0:Lcom/onesignal/OSInAppMessageController;

    const/4 v1, 0x0

    invoke-static {v0, v1}, Lcom/onesignal/OSInAppMessageController;->access$1302(Lcom/onesignal/OSInAppMessageController;Z)Z

    if-eqz p1, :cond_0

    .line 776
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$12;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-virtual {p1}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/onesignal/OSInAppMessageController;->access$1402(Lcom/onesignal/OSInAppMessageController;Ljava/lang/String;)Ljava/lang/String;

    .line 778
    :cond_0
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController$12;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-static {p1}, Lcom/onesignal/OSInAppMessageController;->access$1500(Lcom/onesignal/OSInAppMessageController;)Lcom/onesignal/OSInAppMessageContent;

    move-result-object p1

    if-eqz p1, :cond_2

    .line 779
    iget-boolean p1, p0, Lcom/onesignal/OSInAppMessageController$12;->val$isPreview:Z

    if-nez p1, :cond_1

    .line 780
    invoke-static {}, Lcom/onesignal/OneSignal;->getSessionManager()Lcom/onesignal/OSSessionManager;

    move-result-object p1

    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$12;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    iget-object v0, v0, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-virtual {p1, v0}, Lcom/onesignal/OSSessionManager;->onInAppMessageReceived(Ljava/lang/String;)V

    .line 782
    :cond_1
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController$12;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-static {p1}, Lcom/onesignal/OSInAppMessageController;->access$1500(Lcom/onesignal/OSInAppMessageController;)Lcom/onesignal/OSInAppMessageContent;

    move-result-object p1

    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$12;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-static {v0}, Lcom/onesignal/OSInAppMessageController;->access$1500(Lcom/onesignal/OSInAppMessageController;)Lcom/onesignal/OSInAppMessageContent;

    move-result-object v1

    invoke-virtual {v1}, Lcom/onesignal/OSInAppMessageContent;->getContentHtml()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/onesignal/OSInAppMessageController;->taggedHTMLString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/onesignal/OSInAppMessageContent;->setContentHtml(Ljava/lang/String;)V

    .line 783
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController$12;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$12;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-static {v0}, Lcom/onesignal/OSInAppMessageController;->access$1500(Lcom/onesignal/OSInAppMessageController;)Lcom/onesignal/OSInAppMessageContent;

    move-result-object v0

    invoke-static {p1, v0}, Lcom/onesignal/WebViewManager;->showMessageContent(Lcom/onesignal/OSInAppMessageInternal;Lcom/onesignal/OSInAppMessageContent;)V

    .line 784
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController$12;->this$0:Lcom/onesignal/OSInAppMessageController;

    const/4 v0, 0x0

    invoke-static {p1, v0}, Lcom/onesignal/OSInAppMessageController;->access$1502(Lcom/onesignal/OSInAppMessageController;Lcom/onesignal/OSInAppMessageContent;)Lcom/onesignal/OSInAppMessageContent;

    :cond_2
    return-void
.end method
