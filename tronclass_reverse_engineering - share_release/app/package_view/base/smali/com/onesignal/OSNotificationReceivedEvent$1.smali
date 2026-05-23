.class Lcom/onesignal/OSNotificationReceivedEvent$1;
.super Ljava/lang/Object;
.source "OSNotificationReceivedEvent.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSNotificationReceivedEvent;-><init>(Lcom/onesignal/OSNotificationController;Lcom/onesignal/OSNotification;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSNotificationReceivedEvent;


# direct methods
.method constructor <init>(Lcom/onesignal/OSNotificationReceivedEvent;)V
    .locals 0

    .line 53
    iput-object p1, p0, Lcom/onesignal/OSNotificationReceivedEvent$1;->this$0:Lcom/onesignal/OSNotificationReceivedEvent;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 56
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "Running complete from OSNotificationReceivedEvent timeout runnable!"

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 57
    iget-object v0, p0, Lcom/onesignal/OSNotificationReceivedEvent$1;->this$0:Lcom/onesignal/OSNotificationReceivedEvent;

    invoke-virtual {v0}, Lcom/onesignal/OSNotificationReceivedEvent;->getNotification()Lcom/onesignal/OSNotification;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotificationReceivedEvent;->complete(Lcom/onesignal/OSNotification;)V

    return-void
.end method
