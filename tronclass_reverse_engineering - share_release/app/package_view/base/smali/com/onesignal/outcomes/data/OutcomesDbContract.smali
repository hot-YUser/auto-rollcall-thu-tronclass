.class public final Lcom/onesignal/outcomes/data/OutcomesDbContract;
.super Ljava/lang/Object;
.source "OSOutcomesDbContract.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0008\u0002\n\u0002\u0010\u000e\n\u0002\u0008\u000e\u0008\u00c0\u0002\u0018\u00002\u00020\u0001B\u0007\u0008\u0002\u00a2\u0006\u0002\u0010\u0002R\u000e\u0010\u0003\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0008\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\n\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u000c\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\r\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u000e\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u000f\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0010\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0011\u001a\u00020\u0004X\u0082T\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u0012"
    }
    d2 = {
        "Lcom/onesignal/outcomes/data/OutcomesDbContract;",
        "",
        "()V",
        "CACHE_UNIQUE_OUTCOME_COLUMN_CHANNEL_INFLUENCE_ID",
        "",
        "CACHE_UNIQUE_OUTCOME_COLUMN_CHANNEL_TYPE",
        "CACHE_UNIQUE_OUTCOME_TABLE",
        "FLOAT_TYPE",
        "INTEGER_PRIMARY_KEY_TYPE",
        "INT_TYPE",
        "OUTCOME_EVENT_TABLE",
        "SQL_CREATE_OUTCOME_ENTRIES_V1",
        "SQL_CREATE_OUTCOME_ENTRIES_V2",
        "SQL_CREATE_OUTCOME_ENTRIES_V3",
        "SQL_CREATE_UNIQUE_OUTCOME_ENTRIES_V1",
        "SQL_CREATE_UNIQUE_OUTCOME_ENTRIES_V2",
        "TEXT_TYPE",
        "TIMESTAMP_TYPE",
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
.field public static final CACHE_UNIQUE_OUTCOME_COLUMN_CHANNEL_INFLUENCE_ID:Ljava/lang/String; = "channel_influence_id"

.field public static final CACHE_UNIQUE_OUTCOME_COLUMN_CHANNEL_TYPE:Ljava/lang/String; = "channel_type"

.field public static final CACHE_UNIQUE_OUTCOME_TABLE:Ljava/lang/String; = "cached_unique_outcome"

.field private static final FLOAT_TYPE:Ljava/lang/String; = " FLOAT"

.field public static final INSTANCE:Lcom/onesignal/outcomes/data/OutcomesDbContract;

.field private static final INTEGER_PRIMARY_KEY_TYPE:Ljava/lang/String; = " INTEGER PRIMARY KEY"

.field private static final INT_TYPE:Ljava/lang/String; = " INTEGER"

.field public static final OUTCOME_EVENT_TABLE:Ljava/lang/String; = "outcome"

.field public static final SQL_CREATE_OUTCOME_ENTRIES_V1:Ljava/lang/String; = "CREATE TABLE outcome (_id INTEGER PRIMARY KEY,notification_ids TEXT,name TEXT,session TEXT,params TEXT,timestamp TIMESTAMP);"

.field public static final SQL_CREATE_OUTCOME_ENTRIES_V2:Ljava/lang/String; = "CREATE TABLE outcome (_id INTEGER PRIMARY KEY,session TEXT,notification_ids TEXT,name TEXT,timestamp TIMESTAMP,weight FLOAT);"

.field public static final SQL_CREATE_OUTCOME_ENTRIES_V3:Ljava/lang/String; = "CREATE TABLE outcome (_id INTEGER PRIMARY KEY,notification_influence_type TEXT,iam_influence_type TEXT,notification_ids TEXT,iam_ids TEXT,name TEXT,timestamp TIMESTAMP,weight FLOAT);"

.field public static final SQL_CREATE_UNIQUE_OUTCOME_ENTRIES_V1:Ljava/lang/String; = "CREATE TABLE cached_unique_outcome_notification (_id INTEGER PRIMARY KEY,notification_id TEXT,name TEXT);"

.field public static final SQL_CREATE_UNIQUE_OUTCOME_ENTRIES_V2:Ljava/lang/String; = "CREATE TABLE cached_unique_outcome (_id INTEGER PRIMARY KEY,channel_influence_id TEXT,channel_type TEXT,name TEXT);"

.field private static final TEXT_TYPE:Ljava/lang/String; = " TEXT"

.field private static final TIMESTAMP_TYPE:Ljava/lang/String; = " TIMESTAMP"


# direct methods
.method static constructor <clinit>()V
    .locals 1

    new-instance v0, Lcom/onesignal/outcomes/data/OutcomesDbContract;

    invoke-direct {v0}, Lcom/onesignal/outcomes/data/OutcomesDbContract;-><init>()V

    sput-object v0, Lcom/onesignal/outcomes/data/OutcomesDbContract;->INSTANCE:Lcom/onesignal/outcomes/data/OutcomesDbContract;

    return-void
.end method

.method private constructor <init>()V
    .locals 0

    .line 36
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method
