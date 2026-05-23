.class final Lcom/onesignal/JobIntentService$CommandProcessor;
.super Landroid/os/AsyncTask;
.source "JobIntentService.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/JobIntentService;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x10
    name = "CommandProcessor"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Landroid/os/AsyncTask<",
        "Ljava/lang/Void;",
        "Ljava/lang/Void;",
        "Ljava/lang/Void;",
        ">;"
    }
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/JobIntentService;


# direct methods
.method constructor <init>(Lcom/onesignal/JobIntentService;)V
    .locals 0

    .line 430
    iput-object p1, p0, Lcom/onesignal/JobIntentService$CommandProcessor;->this$0:Lcom/onesignal/JobIntentService;

    invoke-direct {p0}, Landroid/os/AsyncTask;-><init>()V

    return-void
.end method


# virtual methods
.method protected bridge synthetic doInBackground([Ljava/lang/Object;)Ljava/lang/Object;
    .locals 0

    .line 430
    check-cast p1, [Ljava/lang/Void;

    invoke-virtual {p0, p1}, Lcom/onesignal/JobIntentService$CommandProcessor;->doInBackground([Ljava/lang/Void;)Ljava/lang/Void;

    move-result-object p1

    return-object p1
.end method

.method protected varargs doInBackground([Ljava/lang/Void;)Ljava/lang/Void;
    .locals 2

    .line 437
    :goto_0
    iget-object p1, p0, Lcom/onesignal/JobIntentService$CommandProcessor;->this$0:Lcom/onesignal/JobIntentService;

    invoke-virtual {p1}, Lcom/onesignal/JobIntentService;->dequeueWork()Lcom/onesignal/JobIntentService$GenericWorkItem;

    move-result-object p1

    if-eqz p1, :cond_0

    .line 439
    iget-object v0, p0, Lcom/onesignal/JobIntentService$CommandProcessor;->this$0:Lcom/onesignal/JobIntentService;

    invoke-interface {p1}, Lcom/onesignal/JobIntentService$GenericWorkItem;->getIntent()Landroid/content/Intent;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/onesignal/JobIntentService;->onHandleWork(Landroid/content/Intent;)V

    .line 441
    invoke-interface {p1}, Lcom/onesignal/JobIntentService$GenericWorkItem;->complete()V

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    return-object p1
.end method

.method protected bridge synthetic onCancelled(Ljava/lang/Object;)V
    .locals 0

    .line 430
    check-cast p1, Ljava/lang/Void;

    invoke-virtual {p0, p1}, Lcom/onesignal/JobIntentService$CommandProcessor;->onCancelled(Ljava/lang/Void;)V

    return-void
.end method

.method protected onCancelled(Ljava/lang/Void;)V
    .locals 0

    .line 451
    iget-object p1, p0, Lcom/onesignal/JobIntentService$CommandProcessor;->this$0:Lcom/onesignal/JobIntentService;

    invoke-virtual {p1}, Lcom/onesignal/JobIntentService;->processorFinished()V

    return-void
.end method

.method protected bridge synthetic onPostExecute(Ljava/lang/Object;)V
    .locals 0

    .line 430
    check-cast p1, Ljava/lang/Void;

    invoke-virtual {p0, p1}, Lcom/onesignal/JobIntentService$CommandProcessor;->onPostExecute(Ljava/lang/Void;)V

    return-void
.end method

.method protected onPostExecute(Ljava/lang/Void;)V
    .locals 0

    .line 456
    iget-object p1, p0, Lcom/onesignal/JobIntentService$CommandProcessor;->this$0:Lcom/onesignal/JobIntentService;

    invoke-virtual {p1}, Lcom/onesignal/JobIntentService;->processorFinished()V

    return-void
.end method
