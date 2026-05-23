.class Lcom/onesignal/OSInAppMessageController$5;
.super Ljava/lang/Object;
.source "OSInAppMessageController.java"

# interfaces
.implements Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSInAppMessageController;->onMessageWasShown(Lcom/onesignal/OSInAppMessageInternal;)V
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

    .line 312
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageController$5;->this$0:Lcom/onesignal/OSInAppMessageController;

    iput-object p2, p0, Lcom/onesignal/OSInAppMessageController$5;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onFailure(Ljava/lang/String;)V
    .locals 1

    .line 321
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController$5;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-static {p1}, Lcom/onesignal/OSInAppMessageController;->access$700(Lcom/onesignal/OSInAppMessageController;)Ljava/util/Set;

    move-result-object p1

    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$5;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    iget-object v0, v0, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-interface {p1, v0}, Ljava/util/Set;->remove(Ljava/lang/Object;)Z

    return-void
.end method

.method public onSuccess(Ljava/lang/String;)V
    .locals 0

    return-void
.end method
