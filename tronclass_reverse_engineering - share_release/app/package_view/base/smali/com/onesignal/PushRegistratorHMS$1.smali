.class Lcom/onesignal/PushRegistratorHMS$1;
.super Ljava/lang/Object;
.source "PushRegistratorHMS.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/PushRegistratorHMS;->registerForPush(Landroid/content/Context;Ljava/lang/String;Lcom/onesignal/PushRegistrator$RegisteredHandler;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/PushRegistratorHMS;

.field final synthetic val$callback:Lcom/onesignal/PushRegistrator$RegisteredHandler;

.field final synthetic val$context:Landroid/content/Context;


# direct methods
.method constructor <init>(Lcom/onesignal/PushRegistratorHMS;Landroid/content/Context;Lcom/onesignal/PushRegistrator$RegisteredHandler;)V
    .locals 0

    .line 35
    iput-object p1, p0, Lcom/onesignal/PushRegistratorHMS$1;->this$0:Lcom/onesignal/PushRegistratorHMS;

    iput-object p2, p0, Lcom/onesignal/PushRegistratorHMS$1;->val$context:Landroid/content/Context;

    iput-object p3, p0, Lcom/onesignal/PushRegistratorHMS$1;->val$callback:Lcom/onesignal/PushRegistrator$RegisteredHandler;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 39
    :try_start_0
    iget-object v0, p0, Lcom/onesignal/PushRegistratorHMS$1;->this$0:Lcom/onesignal/PushRegistratorHMS;

    iget-object v1, p0, Lcom/onesignal/PushRegistratorHMS$1;->val$context:Landroid/content/Context;

    iget-object v2, p0, Lcom/onesignal/PushRegistratorHMS$1;->val$callback:Lcom/onesignal/PushRegistrator$RegisteredHandler;

    invoke-static {v0, v1, v2}, Lcom/onesignal/PushRegistratorHMS;->access$000(Lcom/onesignal/PushRegistratorHMS;Landroid/content/Context;Lcom/onesignal/PushRegistrator$RegisteredHandler;)V
    :try_end_0
    .catch Lcom/huawei/hms/common/ApiException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    :catch_0
    move-exception v0

    .line 41
    sget-object v1, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v2, "HMS ApiException getting Huawei push token!"

    invoke-static {v1, v2, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 44
    invoke-virtual {v0}, Lcom/huawei/hms/common/ApiException;->getStatusCode()I

    move-result v0

    const v1, 0x3611c818

    if-ne v0, v1, :cond_0

    const/16 v0, -0x1a

    goto :goto_0

    :cond_0
    const/16 v0, -0x1b

    .line 49
    :goto_0
    iget-object v1, p0, Lcom/onesignal/PushRegistratorHMS$1;->val$callback:Lcom/onesignal/PushRegistrator$RegisteredHandler;

    const/4 v2, 0x0

    invoke-interface {v1, v2, v0}, Lcom/onesignal/PushRegistrator$RegisteredHandler;->complete(Ljava/lang/String;I)V

    :goto_1
    return-void
.end method
