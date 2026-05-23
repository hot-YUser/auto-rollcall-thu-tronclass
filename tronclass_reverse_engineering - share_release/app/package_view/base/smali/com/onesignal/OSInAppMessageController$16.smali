.class Lcom/onesignal/OSInAppMessageController$16;
.super Ljava/lang/Object;
.source "OSInAppMessageController.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSInAppMessageController;->addTriggers(Ljava/util/Map;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSInAppMessageController;

.field final synthetic val$newTriggers:Ljava/util/Map;


# direct methods
.method constructor <init>(Lcom/onesignal/OSInAppMessageController;Ljava/util/Map;)V
    .locals 0

    .line 991
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageController$16;->this$0:Lcom/onesignal/OSInAppMessageController;

    iput-object p2, p0, Lcom/onesignal/OSInAppMessageController$16;->val$newTriggers:Ljava/util/Map;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 994
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$16;->this$0:Lcom/onesignal/OSInAppMessageController;

    invoke-static {v0}, Lcom/onesignal/OSInAppMessageController;->access$300(Lcom/onesignal/OSInAppMessageController;)Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Delaying addTriggers due to redisplay data not retrieved yet"

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 995
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController$16;->this$0:Lcom/onesignal/OSInAppMessageController;

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController$16;->val$newTriggers:Ljava/util/Map;

    invoke-interface {v1}, Ljava/util/Map;->keySet()Ljava/util/Set;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/onesignal/OSInAppMessageController;->access$2000(Lcom/onesignal/OSInAppMessageController;Ljava/util/Collection;)V

    return-void
.end method
