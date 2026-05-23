.class Lcom/onesignal/OSOutcomeEventsController$5;
.super Ljava/lang/Object;
.source "OSOutcomeEventsController.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSOutcomeEventsController;->saveAttributedUniqueOutcomeNotifications(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSOutcomeEventsController;

.field final synthetic val$eventParams:Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;


# direct methods
.method constructor <init>(Lcom/onesignal/OSOutcomeEventsController;Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V
    .locals 0

    .line 316
    iput-object p1, p0, Lcom/onesignal/OSOutcomeEventsController$5;->this$0:Lcom/onesignal/OSOutcomeEventsController;

    iput-object p2, p0, Lcom/onesignal/OSOutcomeEventsController$5;->val$eventParams:Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 319
    invoke-static {}, Ljava/lang/Thread;->currentThread()Ljava/lang/Thread;

    move-result-object v0

    const/16 v1, 0xa

    invoke-virtual {v0, v1}, Ljava/lang/Thread;->setPriority(I)V

    .line 320
    iget-object v0, p0, Lcom/onesignal/OSOutcomeEventsController$5;->this$0:Lcom/onesignal/OSOutcomeEventsController;

    invoke-static {v0}, Lcom/onesignal/OSOutcomeEventsController;->access$000(Lcom/onesignal/OSOutcomeEventsController;)Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->getRepository()Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSOutcomeEventsController$5;->val$eventParams:Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;

    invoke-interface {v0, v1}, Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;->saveUniqueOutcomeNotifications(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V

    return-void
.end method
