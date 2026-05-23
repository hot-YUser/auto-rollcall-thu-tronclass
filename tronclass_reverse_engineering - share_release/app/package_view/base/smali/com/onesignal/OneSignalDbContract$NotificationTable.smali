.class abstract Lcom/onesignal/OneSignalDbContract$NotificationTable;
.super Ljava/lang/Object;
.source "OneSignalDbContract.java"

# interfaces
.implements Landroid/provider/BaseColumns;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OneSignalDbContract;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x408
    name = "NotificationTable"
.end annotation


# static fields
.field public static final COLUMN_NAME_ANDROID_NOTIFICATION_ID:Ljava/lang/String; = "android_notification_id"

.field public static final COLUMN_NAME_COLLAPSE_ID:Ljava/lang/String; = "collapse_id"

.field public static final COLUMN_NAME_CREATED_TIME:Ljava/lang/String; = "created_time"

.field public static final COLUMN_NAME_DISMISSED:Ljava/lang/String; = "dismissed"

.field public static final COLUMN_NAME_EXPIRE_TIME:Ljava/lang/String; = "expire_time"

.field public static final COLUMN_NAME_FULL_DATA:Ljava/lang/String; = "full_data"

.field public static final COLUMN_NAME_GROUP_ID:Ljava/lang/String; = "group_id"

.field public static final COLUMN_NAME_IS_SUMMARY:Ljava/lang/String; = "is_summary"

.field public static final COLUMN_NAME_MESSAGE:Ljava/lang/String; = "message"

.field public static final COLUMN_NAME_NOTIFICATION_ID:Ljava/lang/String; = "notification_id"

.field public static final COLUMN_NAME_OPENED:Ljava/lang/String; = "opened"

.field public static final COLUMN_NAME_TITLE:Ljava/lang/String; = "title"

.field public static final INDEX_CREATE_ANDROID_NOTIFICATION_ID:Ljava/lang/String; = "CREATE INDEX notification_android_notification_id_idx ON notification(android_notification_id); "

.field public static final INDEX_CREATE_COLLAPSE_ID:Ljava/lang/String; = "CREATE INDEX notification_collapse_id_idx ON notification(collapse_id); "

.field public static final INDEX_CREATE_CREATED_TIME:Ljava/lang/String; = "CREATE INDEX notification_created_time_idx ON notification(created_time); "

.field public static final INDEX_CREATE_EXPIRE_TIME:Ljava/lang/String; = "CREATE INDEX notification_expire_time_idx ON notification(expire_time); "

.field public static final INDEX_CREATE_GROUP_ID:Ljava/lang/String; = "CREATE INDEX notification_group_id_idx ON notification(group_id); "

.field public static final INDEX_CREATE_NOTIFICATION_ID:Ljava/lang/String; = "CREATE INDEX notification_notification_id_idx ON notification(notification_id); "

.field public static final TABLE_NAME:Ljava/lang/String; = "notification"


# direct methods
.method constructor <init>()V
    .locals 0

    .line 38
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method
