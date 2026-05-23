.class Lcom/onesignal/OSNotificationOpenedResult$1;
.super Ljava/lang/Object;
.source "OSNotificationOpenedResult.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSNotificationOpenedResult;-><init>(Lcom/onesignal/OSNotification;Lcom/onesignal/OSNotificationAction;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSNotificationOpenedResult;


# direct methods
.method constructor <init>(Lcom/onesignal/OSNotificationOpenedResult;)V
    .locals 0

    .line 65
    iput-object p1, p0, Lcom/onesignal/OSNotificationOpenedResult$1;->this$0:Lcom/onesignal/OSNotificationOpenedResult;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 68
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "Running complete from OSNotificationOpenedResult timeout runnable!"

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 69
    iget-object v0, p0, Lcom/onesignal/OSNotificationOpenedResult$1;->this$0:Lcom/onesignal/OSNotificationOpenedResult;

    const/4 v1, 0x0

    invoke-static {v0, v1}, Lcom/onesignal/OSNotificationOpenedResult;->access$000(Lcom/onesignal/OSNotificationOpenedResult;Z)V

    return-void
.end method
