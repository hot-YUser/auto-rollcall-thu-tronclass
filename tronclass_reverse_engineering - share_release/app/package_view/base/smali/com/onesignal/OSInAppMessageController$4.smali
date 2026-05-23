.class Lcom/onesignal/OSInAppMessageController$4;
.super Ljava/lang/Object;
.source "OSInAppMessageController.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSInAppMessageController;->evaluateInAppMessages()V
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

    .line 254
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageController$4;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 257
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$4;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-static {v0}, Lcom/onesignal/OSInAppMessageController;->access$300(Lcom/onesignal/OSInAppMessageController;)Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Delaying evaluateInAppMessages due to redisplay data not retrieved yet"

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 258
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$4;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-static {v0}, Lcom/onesignal/OSInAppMessageController;->access$600(Lcom/onesignal/OSInAppMessageController;)V

    return-void
.end method
