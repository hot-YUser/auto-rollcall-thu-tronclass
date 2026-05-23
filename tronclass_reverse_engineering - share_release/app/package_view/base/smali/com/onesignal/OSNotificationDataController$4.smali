.class Lcom/onesignal/OSNotificationDataController$4;
.super Lcom/onesignal/BackgroundRunnable;
.source "OSNotificationDataController.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSNotificationDataController;->removeNotification(ILjava/lang/ref/WeakReference;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSNotificationDataController;

.field final synthetic val$id:I

.field final synthetic val$weakReference:Ljava/lang/ref/WeakReference;


# direct methods
.method constructor <init>(Lcom/onesignal/OSNotificationDataController;Ljava/lang/ref/WeakReference;I)V
    .locals 0

    .line 164
    iput-object p1, p0, Lcom/onesignal/OSNotificationDataController$4;->this$0:Lcom/onesignal/OSNotificationDataController;

    iput-object p2, p0, Lcom/onesignal/OSNotificationDataController$4;->val$weakReference:Ljava/lang/ref/WeakReference;

    iput p3, p0, Lcom/onesignal/OSNotificationDataController$4;->val$id:I

    invoke-direct {p0}, Lcom/onesignal/BackgroundRunnable;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 6

    .line 167
    invoke-super {p0}, Lcom/onesignal/BackgroundRunnable;->run()V

    .line 169
    iget-object v0, p0, Lcom/onesignal/OSNotificationDataController$4;->val$weakReference:Ljava/lang/ref/WeakReference;

    invoke-virtual {v0}, Ljava/lang/ref/WeakReference;->get()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/content/Context;

    if-nez v0, :cond_0

    return-void

    .line 173
    :cond_0
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "android_notification_id = "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget v2, p0, Lcom/onesignal/OSNotificationDataController$4;->val$id:I

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, " AND opened = 0 AND dismissed = 0"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    .line 177
    new-instance v2, Landroid/content/ContentValues;

    invoke-direct {v2}, Landroid/content/ContentValues;-><init>()V

    const/4 v3, 0x1

    .line 178
    invoke-static {v3}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v3

    const-string v4, "dismissed"

    invoke-virtual {v2, v4, v3}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/Integer;)V

    .line 180
    iget-object v3, p0, Lcom/onesignal/OSNotificationDataController$4;->this$0:Lcom/onesignal/OSNotificationDataController;

    invoke-static {v3}, Lcom/onesignal/OSNotificationDataController;->access$000(Lcom/onesignal/OSNotificationDataController;)Lcom/onesignal/OneSignalDbHelper;

    move-result-object v3

    const-string v4, "notification"

    const/4 v5, 0x0

    invoke-virtual {v3, v4, v2, v1, v5}, Lcom/onesignal/OneSignalDbHelper;->update(Ljava/lang/String;Landroid/content/ContentValues;Ljava/lang/String;[Ljava/lang/String;)I

    move-result v1

    if-lez v1, :cond_1

    .line 183
    iget-object v1, p0, Lcom/onesignal/OSNotificationDataController$4;->this$0:Lcom/onesignal/OSNotificationDataController;

    invoke-static {v1}, Lcom/onesignal/OSNotificationDataController;->access$000(Lcom/onesignal/OSNotificationDataController;)Lcom/onesignal/OneSignalDbHelper;

    move-result-object v1

    iget v2, p0, Lcom/onesignal/OSNotificationDataController$4;->val$id:I

    invoke-static {v0, v1, v2}, Lcom/onesignal/NotificationSummaryManager;->updatePossibleDependentSummaryOnDismiss(Landroid/content/Context;Lcom/onesignal/OneSignalDb;I)V

    .line 184
    :cond_1
    iget-object v1, p0, Lcom/onesignal/OSNotificationDataController$4;->this$0:Lcom/onesignal/OSNotificationDataController;

    invoke-static {v1}, Lcom/onesignal/OSNotificationDataController;->access$000(Lcom/onesignal/OSNotificationDataController;)Lcom/onesignal/OneSignalDbHelper;

    move-result-object v1

    invoke-static {v1, v0}, Lcom/onesignal/BadgeCountUpdater;->update(Lcom/onesignal/OneSignalDb;Landroid/content/Context;)V

    .line 186
    invoke-static {v0}, Lcom/onesignal/OneSignalNotificationManager;->getNotificationManager(Landroid/content/Context;)Landroid/app/NotificationManager;

    move-result-object v0

    .line 187
    iget v1, p0, Lcom/onesignal/OSNotificationDataController$4;->val$id:I

    invoke-virtual {v0, v1}, Landroid/app/NotificationManager;->cancel(I)V

    return-void
.end method
