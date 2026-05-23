.class Lcom/onesignal/OSOutcomeEventsController$4;
.super Ljava/lang/Object;
.source "OSOutcomeEventsController.java"

# interfaces
.implements Lcom/onesignal/OneSignalApiResponseHandler;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSOutcomeEventsController;->sendAndCreateOutcomeEvent(Ljava/lang/String;FLjava/util/List;Lcom/onesignal/OneSignal$OutcomeCallback;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSOutcomeEventsController;

.field final synthetic val$callback:Lcom/onesignal/OneSignal$OutcomeCallback;

.field final synthetic val$eventParams:Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;

.field final synthetic val$name:Ljava/lang/String;

.field final synthetic val$timestampSeconds:J


# direct methods
.method constructor <init>(Lcom/onesignal/OSOutcomeEventsController;Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;Lcom/onesignal/OneSignal$OutcomeCallback;JLjava/lang/String;)V
    .locals 0

    .line 243
    iput-object p1, p0, Lcom/onesignal/OSOutcomeEventsController$4;->this$0:Lcom/onesignal/OSOutcomeEventsController;

    iput-object p2, p0, Lcom/onesignal/OSOutcomeEventsController$4;->val$eventParams:Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;

    iput-object p3, p0, Lcom/onesignal/OSOutcomeEventsController$4;->val$callback:Lcom/onesignal/OneSignal$OutcomeCallback;

    iput-wide p4, p0, Lcom/onesignal/OSOutcomeEventsController$4;->val$timestampSeconds:J

    iput-object p6, p0, Lcom/onesignal/OSOutcomeEventsController$4;->val$name:Ljava/lang/String;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onFailure(ILjava/lang/String;Ljava/lang/Throwable;)V
    .locals 2

    .line 255
    new-instance p3, Ljava/lang/Thread;

    new-instance v0, Lcom/onesignal/OSOutcomeEventsController$4$1;

    invoke-direct {v0, p0}, Lcom/onesignal/OSOutcomeEventsController$4$1;-><init>(Lcom/onesignal/OSOutcomeEventsController$4;)V

    const-string v1, "OS_SAVE_OUTCOMES"

    invoke-direct {p3, v0, v1}, Ljava/lang/Thread;-><init>(Ljava/lang/Runnable;Ljava/lang/String;)V

    .line 263
    invoke-virtual {p3}, Ljava/lang/Thread;->start()V

    .line 265
    sget-object p3, Lcom/onesignal/OneSignal$LOG_LEVEL;->WARN:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Sending outcome with name: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lcom/onesignal/OSOutcomeEventsController$4;->val$name:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " failed with status code: "

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, " and response: "

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string p2, "\nOutcome event was cached and will be reattempted on app cold start"

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {p3, p1}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 270
    iget-object p1, p0, Lcom/onesignal/OSOutcomeEventsController$4;->val$callback:Lcom/onesignal/OneSignal$OutcomeCallback;

    if-eqz p1, :cond_0

    const/4 p2, 0x0

    .line 271
    invoke-interface {p1, p2}, Lcom/onesignal/OneSignal$OutcomeCallback;->onSuccess(Lcom/onesignal/OSOutcomeEvent;)V

    :cond_0
    return-void
.end method

.method public onSuccess(Ljava/lang/String;)V
    .locals 1

    .line 246
    iget-object p1, p0, Lcom/onesignal/OSOutcomeEventsController$4;->this$0:Lcom/onesignal/OSOutcomeEventsController;

    iget-object v0, p0, Lcom/onesignal/OSOutcomeEventsController$4;->val$eventParams:Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;

    invoke-static {p1, v0}, Lcom/onesignal/OSOutcomeEventsController;->access$200(Lcom/onesignal/OSOutcomeEventsController;Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V

    .line 249
    iget-object p1, p0, Lcom/onesignal/OSOutcomeEventsController$4;->val$callback:Lcom/onesignal/OneSignal$OutcomeCallback;

    if-eqz p1, :cond_0

    .line 250
    iget-object v0, p0, Lcom/onesignal/OSOutcomeEventsController$4;->val$eventParams:Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;

    invoke-static {v0}, Lcom/onesignal/OSOutcomeEvent;->fromOutcomeEventParamsV2toOutcomeEventV1(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)Lcom/onesignal/OSOutcomeEvent;

    move-result-object v0

    invoke-interface {p1, v0}, Lcom/onesignal/OneSignal$OutcomeCallback;->onSuccess(Lcom/onesignal/OSOutcomeEvent;)V

    :cond_0
    return-void
.end method
