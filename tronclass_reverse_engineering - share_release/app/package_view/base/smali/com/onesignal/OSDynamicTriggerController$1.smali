.class Lcom/onesignal/OSDynamicTriggerController$1;
.super Ljava/util/TimerTask;
.source "OSDynamicTriggerController.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSDynamicTriggerController;->dynamicTriggerShouldFire(Lcom/onesignal/OSTrigger;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSDynamicTriggerController;

.field final synthetic val$triggerId:Ljava/lang/String;


# direct methods
.method constructor <init>(Lcom/onesignal/OSDynamicTriggerController;Ljava/lang/String;)V
    .locals 0

    .line 72
    iput-object p1, p0, Lcom/onesignal/OSDynamicTriggerController$1;->this$0:Lcom/onesignal/OSDynamicTriggerController;

    iput-object p2, p0, Lcom/onesignal/OSDynamicTriggerController$1;->val$triggerId:Ljava/lang/String;

    invoke-direct {p0}, Ljava/util/TimerTask;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 75
    iget-object v0, p0, Lcom/onesignal/OSDynamicTriggerController$1;->this$0:Lcom/onesignal/OSDynamicTriggerController;

    invoke-static {v0}, Lcom/onesignal/OSDynamicTriggerController;->access$000(Lcom/onesignal/OSDynamicTriggerController;)Ljava/util/ArrayList;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSDynamicTriggerController$1;->val$triggerId:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/util/ArrayList;->remove(Ljava/lang/Object;)Z

    .line 76
    iget-object v0, p0, Lcom/onesignal/OSDynamicTriggerController$1;->this$0:Lcom/onesignal/OSDynamicTriggerController;

    invoke-static {v0}, Lcom/onesignal/OSDynamicTriggerController;->access$100(Lcom/onesignal/OSDynamicTriggerController;)Lcom/onesignal/OSDynamicTriggerController$OSDynamicTriggerControllerObserver;

    move-result-object v0

    invoke-interface {v0}, Lcom/onesignal/OSDynamicTriggerController$OSDynamicTriggerControllerObserver;->messageTriggerConditionChanged()V

    return-void
.end method
