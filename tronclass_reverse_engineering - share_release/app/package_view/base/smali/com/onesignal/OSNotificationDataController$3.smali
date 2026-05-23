.class Lcom/onesignal/OSNotificationDataController$3;
.super Lcom/onesignal/BackgroundRunnable;
.source "OSNotificationDataController.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OSNotificationDataController;->removeGroupedNotifications(Ljava/lang/String;Ljava/lang/ref/WeakReference;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/onesignal/OSNotificationDataController;

.field final synthetic val$group:Ljava/lang/String;

.field final synthetic val$weakReference:Ljava/lang/ref/WeakReference;


# direct methods
.method constructor <init>(Lcom/onesignal/OSNotificationDataController;Ljava/lang/ref/WeakReference;Ljava/lang/String;)V
    .locals 0

    .line 115
    iput-object p1, p0, Lcom/onesignal/OSNotificationDataController$3;->this$0:Lcom/onesignal/OSNotificationDataController;

    iput-object p2, p0, Lcom/onesignal/OSNotificationDataController$3;->val$weakReference:Ljava/lang/ref/WeakReference;

    iput-object p3, p0, Lcom/onesignal/OSNotificationDataController$3;->val$group:Ljava/lang/String;

    invoke-direct {p0}, Lcom/onesignal/BackgroundRunnable;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 13

    .line 118
    invoke-super {p0}, Lcom/onesignal/BackgroundRunnable;->run()V

    .line 120
    iget-object v0, p0, Lcom/onesignal/OSNotificationDataController$3;->val$weakReference:Ljava/lang/ref/WeakReference;

    invoke-virtual {v0}, Ljava/lang/ref/WeakReference;->get()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/content/Context;

    if-nez v0, :cond_0

    return-void

    .line 124
    :cond_0
    invoke-static {v0}, Lcom/onesignal/OneSignalNotificationManager;->getNotificationManager(Landroid/content/Context;)Landroid/app/NotificationManager;

    move-result-object v1

    const/4 v2, 0x1

    .line 126
    new-array v5, v2, [Ljava/lang/String;

    const/4 v3, 0x0

    const-string v11, "android_notification_id"

    aput-object v11, v5, v3

    .line 128
    new-array v12, v2, [Ljava/lang/String;

    iget-object v4, p0, Lcom/onesignal/OSNotificationDataController$3;->val$group:Ljava/lang/String;

    aput-object v4, v12, v3

    .line 134
    iget-object v3, p0, Lcom/onesignal/OSNotificationDataController$3;->this$0:Lcom/onesignal/OSNotificationDataController;

    invoke-static {v3}, Lcom/onesignal/OSNotificationDataController;->access$000(Lcom/onesignal/OSNotificationDataController;)Lcom/onesignal/OneSignalDbHelper;

    move-result-object v3

    const/4 v9, 0x0

    const/4 v10, 0x0

    const-string v4, "notification"

    const-string v6, "group_id = ? AND dismissed = 0 AND opened = 0"

    const/4 v8, 0x0

    move-object v7, v12

    invoke-virtual/range {v3 .. v10}, Lcom/onesignal/OneSignalDbHelper;->query(Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Landroid/database/Cursor;

    move-result-object v3

    .line 141
    :cond_1
    :goto_0
    invoke-interface {v3}, Landroid/database/Cursor;->moveToNext()Z

    move-result v4

    if-eqz v4, :cond_2

    .line 142
    invoke-interface {v3, v11}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v4

    invoke-interface {v3, v4}, Landroid/database/Cursor;->getInt(I)I

    move-result v4

    const/4 v5, -0x1

    if-eq v4, v5, :cond_1

    .line 144
    invoke-virtual {v1, v4}, Landroid/app/NotificationManager;->cancel(I)V

    goto :goto_0

    .line 146
    :cond_2
    invoke-interface {v3}, Landroid/database/Cursor;->close()V

    .line 152
    new-instance v1, Landroid/content/ContentValues;

    invoke-direct {v1}, Landroid/content/ContentValues;-><init>()V

    .line 153
    const-string v3, "dismissed"

    invoke-static {v2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    invoke-virtual {v1, v3, v2}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/Integer;)V

    .line 155
    iget-object v2, p0, Lcom/onesignal/OSNotificationDataController$3;->this$0:Lcom/onesignal/OSNotificationDataController;

    invoke-static {v2}, Lcom/onesignal/OSNotificationDataController;->access$000(Lcom/onesignal/OSNotificationDataController;)Lcom/onesignal/OneSignalDbHelper;

    move-result-object v2

    const-string v3, "notification"

    const-string v4, "group_id = ? AND opened = 0 AND dismissed = 0"

    invoke-virtual {v2, v3, v1, v4, v12}, Lcom/onesignal/OneSignalDbHelper;->update(Ljava/lang/String;Landroid/content/ContentValues;Ljava/lang/String;[Ljava/lang/String;)I

    .line 156
    iget-object v1, p0, Lcom/onesignal/OSNotificationDataController$3;->this$0:Lcom/onesignal/OSNotificationDataController;

    invoke-static {v1}, Lcom/onesignal/OSNotificationDataController;->access$000(Lcom/onesignal/OSNotificationDataController;)Lcom/onesignal/OneSignalDbHelper;

    move-result-object v1

    invoke-static {v1, v0}, Lcom/onesignal/BadgeCountUpdater;->update(Lcom/onesignal/OneSignalDb;Landroid/content/Context;)V

    return-void
.end method
