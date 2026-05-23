.class Lcom/onesignal/OSNotificationDataController$1;
.super Lcom/onesignal/BackgroundRunnable;
.source "OSNotificationDataController.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSNotificationDataController;->cleanNotificationCache()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSNotificationDataController;


# direct methods
.method constructor <init>(Lcom/onesignal/OSNotificationDataController;)V
    .locals 0

    .line 47
    iput-object p1, p0, Lcom/onesignal/OSNotificationDataController$1;->this$0:Lcom/onesignal/OSNotificationDataController;

    invoke-direct {p0}, Lcom/onesignal/BackgroundRunnable;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 4

    .line 50
    invoke-super {p0}, Lcom/onesignal/BackgroundRunnable;->run()V

    .line 54
    invoke-static {}, Lcom/onesignal/OneSignal;->getTime()Lcom/onesignal/OSTime;

    move-result-object v0

    invoke-interface {v0}, Lcom/onesignal/OSTime;->getCurrentTimeMillis()J

    move-result-wide v0

    const-wide/16 v2, 0x3e8

    div-long/2addr v0, v2

    const-wide/32 v2, 0x93a80

    sub-long/2addr v0, v2

    invoke-static {v0, v1}, Ljava/lang/String;->valueOf(J)Ljava/lang/String;

    move-result-object v0

    const/4 v1, 0x1

    .line 55
    new-array v1, v1, [Ljava/lang/String;

    const/4 v2, 0x0

    aput-object v0, v1, v2

    .line 57
    iget-object v0, p0, Lcom/onesignal/OSNotificationDataController$1;->this$0:Lcom/onesignal/OSNotificationDataController;

    invoke-static {v0}, Lcom/onesignal/OSNotificationDataController;->access$000(Lcom/onesignal/OSNotificationDataController;)Lcom/onesignal/OneSignalDbHelper;

    move-result-object v0

    const-string v2, "notification"

    const-string v3, "created_time < ?"

    invoke-virtual {v0, v2, v3, v1}, Lcom/onesignal/OneSignalDbHelper;->delete(Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;)V

    return-void
.end method
