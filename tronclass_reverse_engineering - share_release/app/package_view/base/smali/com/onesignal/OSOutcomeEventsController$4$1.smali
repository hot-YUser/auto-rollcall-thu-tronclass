.class Lcom/onesignal/OSOutcomeEventsController$4$1;
.super Ljava/lang/Object;
.source "OSOutcomeEventsController.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSOutcomeEventsController$4;->onFailure(ILjava/lang/String;Ljava/lang/Throwable;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$1:Lcom/onesignal/OSOutcomeEventsController$4;


# direct methods
.method constructor <init>(Lcom/onesignal/OSOutcomeEventsController$4;)V
    .locals 0

    .line 255
    iput-object p1, p0, Lcom/onesignal/OSOutcomeEventsController$4$1;->this$1:Lcom/onesignal/OSOutcomeEventsController$4;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 258
    invoke-static {}, Ljava/lang/Thread;->currentThread()Ljava/lang/Thread;

    move-result-object v0

    const/16 v1, 0xa

    invoke-virtual {v0, v1}, Ljava/lang/Thread;->setPriority(I)V

    .line 260
    iget-object v0, p0, Lcom/onesignal/OSOutcomeEventsController$4$1;->this$1:Lcom/onesignal/OSOutcomeEventsController$4;

    iget-object v0, v0, Lcom/onesignal/OSOutcomeEventsController$4;->val$eventParams:Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;

    iget-object v1, p0, Lcom/onesignal/OSOutcomeEventsController$4$1;->this$1:Lcom/onesignal/OSOutcomeEventsController$4;

    iget-wide v1, v1, Lcom/onesignal/OSOutcomeEventsController$4;->val$timestampSeconds:J

    invoke-virtual {v0, v1, v2}, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->setTimestamp(J)V

    .line 261
    iget-object v0, p0, Lcom/onesignal/OSOutcomeEventsController$4$1;->this$1:Lcom/onesignal/OSOutcomeEventsController$4;

    iget-object v0, v0, Lcom/onesignal/OSOutcomeEventsController$4;->this$0:Lcom/onesignal/OSOutcomeEventsController;

    invoke-static {v0}, Lcom/onesignal/OSOutcomeEventsController;->access$000(Lcom/onesignal/OSOutcomeEventsController;)Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->getRepository()Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSOutcomeEventsController$4$1;->this$1:Lcom/onesignal/OSOutcomeEventsController$4;

    iget-object v1, v1, Lcom/onesignal/OSOutcomeEventsController$4;->val$eventParams:Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;

    invoke-interface {v0, v1}, Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;->saveOutcomeEvent(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V

    return-void
.end method
