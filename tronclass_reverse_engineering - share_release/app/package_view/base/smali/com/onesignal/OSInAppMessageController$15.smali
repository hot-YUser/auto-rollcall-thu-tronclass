.class Lcom/onesignal/OSInAppMessageController$15;
.super Lcom/onesignal/BackgroundRunnable;
.source "OSInAppMessageController.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSInAppMessageController;->cleanCachedInAppMessages()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSInAppMessageController;


# direct methods
.method constructor <init>(Lcom/onesignal/OSInAppMessageController;)V
    .locals 0

    .line 901
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageController$15;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-direct {p0}, Lcom/onesignal/BackgroundRunnable;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 1

    .line 904
    invoke-super {p0}, Lcom/onesignal/BackgroundRunnable;->run()V

    .line 906
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$15;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-static {v0}, Lcom/onesignal/OSInAppMessageController;->access$200(Lcom/onesignal/OSInAppMessageController;)Lcom/onesignal/OSInAppMessageRepository;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageRepository;->cleanCachedInAppMessages()V

    return-void
.end method
