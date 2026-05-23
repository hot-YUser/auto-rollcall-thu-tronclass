.class Lcom/onesignal/UserStateSynchronizer$2;
.super Lcom/onesignal/OneSignalRestClient$ResponseHandler;
.source "UserStateSynchronizer.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/UserStateSynchronizer;->doEmailLogout(Ljava/lang/String;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/UserStateSynchronizer;


# direct methods
.method constructor <init>(Lcom/onesignal/UserStateSynchronizer;)V
    .locals 0

    .line 307
    iput-object p1, p0, Lcom/onesignal/UserStateSynchronizer$2;->this$0:Lcom/onesignal/UserStateSynchronizer;

    invoke-direct {p0}, Lcom/onesignal/OneSignalRestClient$ResponseHandler;-><init>()V

    return-void
.end method


# virtual methods
.method onFailure(ILjava/lang/String;Ljava/lang/Throwable;)V
    .locals 2

    .line 310
    sget-object p3, Lcom/onesignal/OneSignal$LOG_LEVEL;->WARN:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Failed last request. statusCode: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "\nresponse: "

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {p3, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 312
    iget-object p3, p0, Lcom/onesignal/UserStateSynchronizer$2;->this$0:Lcom/onesignal/UserStateSynchronizer;

    const-string v0, "already logged out of email"

    invoke-static {p3, p1, p2, v0}, Lcom/onesignal/UserStateSynchronizer;->access$300(Lcom/onesignal/UserStateSynchronizer;ILjava/lang/String;Ljava/lang/String;)Z

    move-result p3

    if-eqz p3, :cond_0

    .line 313
    iget-object p1, p0, Lcom/onesignal/UserStateSynchronizer$2;->this$0:Lcom/onesignal/UserStateSynchronizer;

    invoke-static {p1}, Lcom/onesignal/UserStateSynchronizer;->access$400(Lcom/onesignal/UserStateSynchronizer;)V

    return-void

    .line 317
    :cond_0
    iget-object p3, p0, Lcom/onesignal/UserStateSynchronizer$2;->this$0:Lcom/onesignal/UserStateSynchronizer;

    const-string v0, "not a valid device_type"

    invoke-static {p3, p1, p2, v0}, Lcom/onesignal/UserStateSynchronizer;->access$300(Lcom/onesignal/UserStateSynchronizer;ILjava/lang/String;Ljava/lang/String;)Z

    move-result p2

    if-eqz p2, :cond_1

    .line 318
    iget-object p1, p0, Lcom/onesignal/UserStateSynchronizer$2;->this$0:Lcom/onesignal/UserStateSynchronizer;

    invoke-static {p1}, Lcom/onesignal/UserStateSynchronizer;->access$500(Lcom/onesignal/UserStateSynchronizer;)V

    goto :goto_0

    .line 320
    :cond_1
    iget-object p2, p0, Lcom/onesignal/UserStateSynchronizer$2;->this$0:Lcom/onesignal/UserStateSynchronizer;

    invoke-static {p2, p1}, Lcom/onesignal/UserStateSynchronizer;->access$600(Lcom/onesignal/UserStateSynchronizer;I)V

    :goto_0
    return-void
.end method

.method onSuccess(Ljava/lang/String;)V
    .locals 0

    .line 325
    iget-object p1, p0, Lcom/onesignal/UserStateSynchronizer$2;->this$0:Lcom/onesignal/UserStateSynchronizer;

    invoke-static {p1}, Lcom/onesignal/UserStateSynchronizer;->access$400(Lcom/onesignal/UserStateSynchronizer;)V

    return-void
.end method
