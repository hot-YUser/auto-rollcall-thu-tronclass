.class public final Lcom/onesignal/outcomes/data/CachedUniqueOutcomeTable;
.super Ljava/lang/Object;
.source "OSOutcomesDbContract.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0008\u0002\n\u0002\u0010\u000e\n\u0002\u0008\u0008\u0008\u00c0\u0002\u0018\u00002\u00020\u0001B\u0007\u0008\u0002\u00a2\u0006\u0002\u0010\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0008\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u000c"
    }
    d2 = {
        "Lcom/onesignal/outcomes/data/CachedUniqueOutcomeTable;",
        "",
        "()V",
        "COLUMN_CHANNEL_INFLUENCE_ID",
        "",
        "COLUMN_CHANNEL_TYPE",
        "COLUMN_NAME_NAME",
        "COLUMN_NAME_NOTIFICATION_ID",
        "ID",
        "TABLE_NAME",
        "TABLE_NAME_V1",
        "TABLE_NAME_V2",
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
.field public static final COLUMN_CHANNEL_INFLUENCE_ID:Ljava/lang/String; = "channel_influence_id"

.field public static final COLUMN_CHANNEL_TYPE:Ljava/lang/String; = "channel_type"

.field public static final COLUMN_NAME_NAME:Ljava/lang/String; = "name"

.field public static final COLUMN_NAME_NOTIFICATION_ID:Ljava/lang/String; = "notification_id"

.field public static final ID:Ljava/lang/String; = "_id"

.field public static final INSTANCE:Lcom/onesignal/outcomes/data/CachedUniqueOutcomeTable;

.field public static final TABLE_NAME:Ljava/lang/String; = "cached_unique_outcome"

.field public static final TABLE_NAME_V1:Ljava/lang/String; = "cached_unique_outcome_notification"

.field public static final TABLE_NAME_V2:Ljava/lang/String; = "cached_unique_outcome"


# direct methods
.method static constructor <clinit>()V
    .locals 1

    new-instance v0, Lcom/onesignal/outcomes/data/CachedUniqueOutcomeTable;

    invoke-direct {v0}, Lcom/onesignal/outcomes/data/CachedUniqueOutcomeTable;-><init>()V

    sput-object v0, Lcom/onesignal/outcomes/data/CachedUniqueOutcomeTable;->INSTANCE:Lcom/onesignal/outcomes/data/CachedUniqueOutcomeTable;

    return-void
.end method

.method private constructor <init>()V
    .locals 0

    .line 25
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method
