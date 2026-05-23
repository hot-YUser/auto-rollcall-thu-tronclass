.class Lcom/onesignal/OSNotificationReceivedEvent$2;
.super Ljava/lang/Object;
.source "OSNotificationReceivedEvent.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSNotificationReceivedEvent;->complete(Lcom/onesignal/OSNotification;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSNotificationReceivedEvent;

.field final synthetic val$notification:Lcom/onesignal/OSNotification;


# direct methods
.method constructor <init>(Lcom/onesignal/OSNotificationReceivedEvent;Lcom/onesignal/OSNotification;)V
    .locals 0

    .line 81
    iput-object p1, p0, Lcom/onesignal/OSNotificationReceivedEvent$2;->this$0:Lcom/onesignal/OSNotificationReceivedEvent;

    iput-object p2, p0, Lcom/onesignal/OSNotificationReceivedEvent$2;->val$notification:Lcom/onesignal/OSNotification;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 84
    iget-object v0, p0, Lcom/onesignal/OSNotificationReceivedEvent$2;->this$0:Lcom/onesignal/OSNotificationReceivedEvent;

    iget-object v1, p0, Lcom/onesignal/OSNotificationReceivedEvent$2;->val$notification:Lcom/onesignal/OSNotification;

    invoke-static {v0, v1}, Lcom/onesignal/OSNotificationReceivedEvent;->access$000(Lcom/onesignal/OSNotificationReceivedEvent;Lcom/onesignal/OSNotification;)V

    return-void
.end method
