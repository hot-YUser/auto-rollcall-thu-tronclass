.class Lcom/onesignal/OSOutcomeEventsController$2;
.super Ljava/lang/Object;
.source "OSOutcomeEventsController.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSOutcomeEventsController;->sendSavedOutcomes()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSOutcomeEventsController;


# direct methods
.method constructor <init>(Lcom/onesignal/OSOutcomeEventsController;)V
    .locals 0

    .line 82
    iput-object p1, p0, Lcom/onesignal/OSOutcomeEventsController$2;->this$0:Lcom/onesignal/OSOutcomeEventsController;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 85
    invoke-static {}, Ljava/lang/Thread;->currentThread()Ljava/lang/Thread;

    move-result-object v0

    const/16 v1, 0xa

    invoke-virtual {v0, v1}, Ljava/lang/Thread;->setPriority(I)V

    .line 87
    iget-object v0, p0, Lcom/onesignal/OSOutcomeEventsController$2;->this$0:Lcom/onesignal/OSOutcomeEventsController;

    invoke-static {v0}, Lcom/onesignal/OSOutcomeEventsController;->access$000(Lcom/onesignal/OSOutcomeEventsController;)Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->getRepository()Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;

    move-result-object v0

    invoke-interface {v0}, Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;->getSavedOutcomeEvents()Ljava/util/List;

    move-result-object v0

    .line 88
    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;

    .line 89
    iget-object v2, p0, Lcom/onesignal/OSOutcomeEventsController$2;->this$0:Lcom/onesignal/OSOutcomeEventsController;

    invoke-static {v2, v1}, Lcom/onesignal/OSOutcomeEventsController;->access$100(Lcom/onesignal/OSOutcomeEventsController;Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V

    goto :goto_0

    :cond_0
    return-void
.end method
