.class Lcom/onesignal/OSInAppMessageController$11;
.super Lcom/onesignal/BackgroundRunnable;
.source "OSInAppMessageController.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSInAppMessageController;->persistInAppMessage(Lcom/onesignal/OSInAppMessageInternal;)V
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

    .line 744
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageController$11;->this$0:Lcom/onesignal/OSInAppMessageController;

    iput-object p2, p0, Lcom/onesignal/OSInAppMessageController$11;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    invoke-direct {p0}, Lcom/onesignal/BackgroundRunnable;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 747
    invoke-super {p0}, Lcom/onesignal/BackgroundRunnable;->run()V

    .line 749
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$11;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-static {v0}, Lcom/onesignal/OSInAppMessageController;->access$200(Lcom/onesignal/OSInAppMessageController;)Lcom/onesignal/OSInAppMessageRepository;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController$11;->val$message:Lcom/onesignal/OSInAppMessageInternal;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSInAppMessageRepository;->saveInAppMessage(Lcom/onesignal/OSInAppMessageInternal;)V

    .line 750
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$11;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-static {v0}, Lcom/onesignal/OSInAppMessageController;->access$200(Lcom/onesignal/OSInAppMessageController;)Lcom/onesignal/OSInAppMessageRepository;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController$11;->this$0:Lcom/onesignal/OSInAppMessageController;

    iget-object v1, v1, Lcom/onesignal/OSInAppMessageController;->lastTimeInAppDismissed:Ljava/util/Date;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSInAppMessageRepository;->saveLastTimeInAppDismissed(Ljava/util/Date;)V

    return-void
.end method
