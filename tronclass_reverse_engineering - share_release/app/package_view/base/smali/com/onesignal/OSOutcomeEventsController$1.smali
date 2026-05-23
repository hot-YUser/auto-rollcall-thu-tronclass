.class Lcom/onesignal/OSOutcomeEventsController$1;
.super Ljava/lang/Object;
.source "OSOutcomeEventsController.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSOutcomeEventsController;->cleanCachedUniqueOutcomes()V
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

    .line 66
    iput-object p1, p0, Lcom/onesignal/OSOutcomeEventsController$1;->this$0:Lcom/onesignal/OSOutcomeEventsController;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 69
    invoke-static {}, Ljava/lang/Thread;->currentThread()Ljava/lang/Thread;

    move-result-object v0

    const/16 v1, 0xa

    invoke-virtual {v0, v1}, Ljava/lang/Thread;->setPriority(I)V

    .line 71
    iget-object v0, p0, Lcom/onesignal/OSOutcomeEventsController$1;->this$0:Lcom/onesignal/OSOutcomeEventsController;

    invoke-static {v0}, Lcom/onesignal/OSOutcomeEventsController;->access$000(Lcom/onesignal/OSOutcomeEventsController;)Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->getRepository()Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;

    move-result-object v0

    const-string v1, "notification"

    const-string v2, "notification_id"

    invoke-interface {v0, v1, v2}, Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;->cleanCachedUniqueOutcomeEventNotifications(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method
