.class Lcom/onesignal/OSOutcomeEventsController$3;
.super Ljava/lang/Object;
.source "OSOutcomeEventsController.java"

# interfaces
.implements Lcom/onesignal/OneSignalApiResponseHandler;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSOutcomeEventsController;->sendSavedOutcomeEvent(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSOutcomeEventsController;

.field final synthetic val$event:Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;


# direct methods
.method constructor <init>(Lcom/onesignal/OSOutcomeEventsController;Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V
    .locals 0

    .line 99
    iput-object p1, p0, Lcom/onesignal/OSOutcomeEventsController$3;->this$0:Lcom/onesignal/OSOutcomeEventsController;

    iput-object p2, p0, Lcom/onesignal/OSOutcomeEventsController$3;->val$event:Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onFailure(ILjava/lang/String;Ljava/lang/Throwable;)V
    .locals 0

    return-void
.end method

.method public onSuccess(Ljava/lang/String;)V
    .locals 1

    .line 102
    iget-object p1, p0, Lcom/onesignal/OSOutcomeEventsController$3;->this$0:Lcom/onesignal/OSOutcomeEventsController;

    invoke-static {p1}, Lcom/onesignal/OSOutcomeEventsController;->access$000(Lcom/onesignal/OSOutcomeEventsController;)Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

    move-result-object p1

    invoke-virtual {p1}, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->getRepository()Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;

    move-result-object p1

    iget-object v0, p0, Lcom/onesignal/OSOutcomeEventsController$3;->val$event:Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;

    invoke-interface {p1, v0}, Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;->removeEvent(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V

    return-void
.end method
