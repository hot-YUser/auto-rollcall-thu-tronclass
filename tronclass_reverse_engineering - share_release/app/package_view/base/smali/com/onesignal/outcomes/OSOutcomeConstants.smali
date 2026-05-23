.class public final Lcom/onesignal/outcomes/OSOutcomeConstants;
.super Ljava/lang/Object;
.source "OSOutcomeConstants.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0008\u0002\n\u0002\u0010\u000e\n\u0002\u0008\u000c\u0008\u00c0\u0002\u0018\u00002\u00020\u0001B\u0007\u0008\u0002\u00a2\u0006\u0002\u0010\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0008\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u000c\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u0010"
    }
    d2 = {
        "Lcom/onesignal/outcomes/OSOutcomeConstants;",
        "",
        "()V",
        "APP_ID",
        "",
        "DEVICE_TYPE",
        "DIRECT",
        "DIRECT_PARAM",
        "IAM_IDS",
        "INDIRECT",
        "NOTIFICATION_IDS",
        "OUTCOME_ID",
        "OUTCOME_SOURCES",
        "PREFS_OS_UNATTRIBUTED_UNIQUE_OUTCOME_EVENTS_SENT",
        "TIMESTAMP",
        "WEIGHT",
        "onesignal_release"
    }
    k = 0x1
    mv = {
        0x1,
        0x5,
        0x1
    }
    xi = 0x30
.end annotation


# static fields
.field public static final APP_ID:Ljava/lang/String; = "app_id"

.field public static final DEVICE_TYPE:Ljava/lang/String; = "device_type"

.field public static final DIRECT:Ljava/lang/String; = "direct"

.field public static final DIRECT_PARAM:Ljava/lang/String; = "direct"

.field public static final IAM_IDS:Ljava/lang/String; = "in_app_message_ids"

.field public static final INDIRECT:Ljava/lang/String; = "indirect"

.field public static final INSTANCE:Lcom/onesignal/outcomes/OSOutcomeConstants;

.field public static final NOTIFICATION_IDS:Ljava/lang/String; = "notification_ids"

.field public static final OUTCOME_ID:Ljava/lang/String; = "id"

.field public static final OUTCOME_SOURCES:Ljava/lang/String; = "sources"

.field public static final PREFS_OS_UNATTRIBUTED_UNIQUE_OUTCOME_EVENTS_SENT:Ljava/lang/String; = "PREFS_OS_UNATTRIBUTED_UNIQUE_OUTCOME_EVENTS_SENT"

.field public static final TIMESTAMP:Ljava/lang/String; = "timestamp"

.field public static final WEIGHT:Ljava/lang/String; = "weight"


# direct methods
.method static constructor <clinit>()V
    .locals 1

    new-instance v0, Lcom/onesignal/outcomes/OSOutcomeConstants;

    invoke-direct {v0}, Lcom/onesignal/outcomes/OSOutcomeConstants;-><init>()V

    sput-object v0, Lcom/onesignal/outcomes/OSOutcomeConstants;->INSTANCE:Lcom/onesignal/outcomes/OSOutcomeConstants;

    return-void
.end method

.method private constructor <init>()V
    .locals 0

    .line 3
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method
