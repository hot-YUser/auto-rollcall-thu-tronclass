.class abstract Lcom/onesignal/OneSignalDbContract$InAppMessageTable;
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
    name = "InAppMessageTable"
.end annotation


# static fields
.field public static final COLUMN_CLICK_IDS:Ljava/lang/String; = "click_ids"

.field public static final COLUMN_DISPLAYED_IN_SESSION:Ljava/lang/String; = "displayed_in_session"

.field public static final COLUMN_NAME_DISPLAY_QUANTITY:Ljava/lang/String; = "display_quantity"

.field public static final COLUMN_NAME_LAST_DISPLAY:Ljava/lang/String; = "last_display"

.field public static final COLUMN_NAME_MESSAGE_ID:Ljava/lang/String; = "message_id"

.field public static final TABLE_NAME:Ljava/lang/String; = "in_app_message"


# direct methods
.method constructor <init>()V
    .locals 0

    .line 63
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method
