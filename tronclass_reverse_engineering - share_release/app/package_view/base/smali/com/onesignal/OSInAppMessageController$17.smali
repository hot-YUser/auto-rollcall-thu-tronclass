.class Lcom/onesignal/OSInAppMessageController$17;
.super Ljava/lang/Object;
.source "OSInAppMessageController.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSInAppMessageController;->removeTriggersForKeys(Ljava/util/Collection;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSInAppMessageController;

.field final synthetic val$keys:Ljava/util/Collection;


# direct methods
.method constructor <init>(Lcom/onesignal/OSInAppMessageController;Ljava/util/Collection;)V
    .locals 0

    .line 1007
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageController$17;->this$0:Lcom/onesignal/OSInAppMessageController;

    iput-object p2, p0, Lcom/onesignal/OSInAppMessageController$17;->val$keys:Ljava/util/Collection;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 1010
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$17;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-static {v0}, Lcom/onesignal/OSInAppMessageController;->access$300(Lcom/onesignal/OSInAppMessageController;)Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Delaying removeTriggersForKeys due to redisplay data not retrieved yet"

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 1011
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$17;->this$0:Lcom/onesignal/OSInAppMessageController;

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController$17;->val$keys:Ljava/util/Collection;

    invoke-static {v0, v1}, Lcom/onesignal/OSInAppMessageController;->access$2000(Lcom/onesignal/OSInAppMessageController;Ljava/util/Collection;)V

    return-void
.end method
