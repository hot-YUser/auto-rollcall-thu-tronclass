.class Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase$1;
.super Lcom/onesignal/OneSignalRestClient$ResponseHandler;
.source "FocusTimeController.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;->sendOnFocusToPlayer(Ljava/lang/String;Lorg/json/JSONObject;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;


# direct methods
.method constructor <init>(Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;)V
    .locals 0

    .line 296
    iput-object p1, p0, Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase$1;->this$0:Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;

    invoke-direct {p0}, Lcom/onesignal/OneSignalRestClient$ResponseHandler;-><init>()V

    return-void
.end method


# virtual methods
.method onFailure(ILjava/lang/String;Ljava/lang/Throwable;)V
    .locals 1

    .line 299
    const-string v0, "sending on_focus Failed"

    invoke-static {v0, p1, p3, p2}, Lcom/onesignal/OneSignal;->logHttpError(Ljava/lang/String;ILjava/lang/Throwable;Ljava/lang/String;)V

    return-void
.end method

.method onSuccess(Ljava/lang/String;)V
    .locals 2

    .line 307
    iget-object p1, p0, Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase$1;->this$0:Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;

    const-wide/16 v0, 0x0

    invoke-static {p1, v0, v1}, Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;->access$500(Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;J)V

    return-void
.end method
