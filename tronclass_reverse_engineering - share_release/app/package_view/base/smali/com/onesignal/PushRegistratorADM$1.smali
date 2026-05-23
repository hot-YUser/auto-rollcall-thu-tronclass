.class Lcom/onesignal/PushRegistratorADM$1;
.super Ljava/lang/Object;
.source "PushRegistratorADM.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/PushRegistratorADM;->registerForPush(Landroid/content/Context;Ljava/lang/String;Lcom/onesignal/PushRegistrator$RegisteredHandler;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/PushRegistratorADM;

.field final synthetic val$callback:Lcom/onesignal/PushRegistrator$RegisteredHandler;

.field final synthetic val$context:Landroid/content/Context;


# direct methods
.method constructor <init>(Lcom/onesignal/PushRegistratorADM;Landroid/content/Context;Lcom/onesignal/PushRegistrator$RegisteredHandler;)V
    .locals 0

    .line 42
    iput-object p1, p0, Lcom/onesignal/PushRegistratorADM$1;->this$0:Lcom/onesignal/PushRegistratorADM;

    iput-object p2, p0, Lcom/onesignal/PushRegistratorADM$1;->val$context:Landroid/content/Context;

    iput-object p3, p0, Lcom/onesignal/PushRegistratorADM$1;->val$callback:Lcom/onesignal/PushRegistrator$RegisteredHandler;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 4

    .line 44
    new-instance v0, Lcom/amazon/device/messaging/ADM;

    iget-object v1, p0, Lcom/onesignal/PushRegistratorADM$1;->val$context:Landroid/content/Context;

    invoke-direct {v0, v1}, Lcom/amazon/device/messaging/ADM;-><init>(Landroid/content/Context;)V

    .line 45
    invoke-virtual {v0}, Lcom/amazon/device/messaging/ADM;->getRegistrationId()Ljava/lang/String;

    move-result-object v1

    if-nez v1, :cond_0

    .line 47
    invoke-virtual {v0}, Lcom/amazon/device/messaging/ADM;->startRegister()V

    goto :goto_0

    .line 49
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "ADM Already registered with ID:"

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-static {v0, v2}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 50
    iget-object v0, p0, Lcom/onesignal/PushRegistratorADM$1;->val$callback:Lcom/onesignal/PushRegistrator$RegisteredHandler;

    const/4 v2, 0x1

    invoke-interface {v0, v1, v2}, Lcom/onesignal/PushRegistrator$RegisteredHandler;->complete(Ljava/lang/String;I)V

    :goto_0
    const-wide/16 v0, 0x7530

    .line 54
    :try_start_0
    invoke-static {v0, v1}, Ljava/lang/Thread;->sleep(J)V
    :try_end_0
    .catch Ljava/lang/InterruptedException; {:try_start_0 .. :try_end_0} :catch_0

    .line 57
    :catch_0
    invoke-static {}, Lcom/onesignal/PushRegistratorADM;->access$000()Z

    move-result v0

    if-nez v0, :cond_1

    .line 58
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "com.onesignal.ADMMessageHandler timed out, please check that your have the receiver, service, and your package name matches(NOTE: Case Sensitive) per the OneSignal instructions."

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    const/4 v0, 0x0

    .line 59
    invoke-static {v0}, Lcom/onesignal/PushRegistratorADM;->fireCallback(Ljava/lang/String;)V

    :cond_1
    return-void
.end method
