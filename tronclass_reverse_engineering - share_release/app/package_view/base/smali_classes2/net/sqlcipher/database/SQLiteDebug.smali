.class public final Lnet/sqlcipher/database/SQLiteDebug;
.super Ljava/lang/Object;
.source "SQLiteDebug.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lnet/sqlcipher/database/SQLiteDebug$DbStats;,
        Lnet/sqlcipher/database/SQLiteDebug$PagerStats;
    }
.end annotation


# static fields
.field public static final DEBUG_ACTIVE_CURSOR_FINALIZATION:Z

.field public static final DEBUG_LOCK_TIME_TRACKING:Z

.field public static final DEBUG_LOCK_TIME_TRACKING_STACK_TRACE:Z

.field public static final DEBUG_SQL_CACHE:Z

.field public static final DEBUG_SQL_STATEMENTS:Z

.field public static final DEBUG_SQL_TIME:Z

.field private static sNumActiveCursorsFinalized:I


# direct methods
.method static constructor <clinit>()V
    .locals 2

    .line 33
    const-string v0, "SQLiteStatements"

    const/4 v1, 0x2

    invoke-static {v0, v1}, Landroid/util/Log;->isLoggable(Ljava/lang/String;I)Z

    move-result v0

    sput-boolean v0, Lnet/sqlcipher/database/SQLiteDebug;->DEBUG_SQL_STATEMENTS:Z

    .line 39
    const-string v0, "SQLiteTime"

    .line 40
    invoke-static {v0, v1}, Landroid/util/Log;->isLoggable(Ljava/lang/String;I)Z

    move-result v0

    sput-boolean v0, Lnet/sqlcipher/database/SQLiteDebug;->DEBUG_SQL_TIME:Z

    .line 45
    const-string v0, "SQLiteCompiledSql"

    .line 46
    invoke-static {v0, v1}, Landroid/util/Log;->isLoggable(Ljava/lang/String;I)Z

    move-result v0

    sput-boolean v0, Lnet/sqlcipher/database/SQLiteDebug;->DEBUG_SQL_CACHE:Z

    .line 52
    const-string v0, "SQLiteCursorClosing"

    .line 53
    invoke-static {v0, v1}, Landroid/util/Log;->isLoggable(Ljava/lang/String;I)Z

    move-result v0

    sput-boolean v0, Lnet/sqlcipher/database/SQLiteDebug;->DEBUG_ACTIVE_CURSOR_FINALIZATION:Z

    .line 58
    const-string v0, "SQLiteLockTime"

    .line 59
    invoke-static {v0, v1}, Landroid/util/Log;->isLoggable(Ljava/lang/String;I)Z

    move-result v0

    sput-boolean v0, Lnet/sqlcipher/database/SQLiteDebug;->DEBUG_LOCK_TIME_TRACKING:Z

    .line 64
    const-string v0, "SQLiteLockStackTrace"

    .line 65
    invoke-static {v0, v1}, Landroid/util/Log;->isLoggable(Ljava/lang/String;I)Z

    move-result v0

    sput-boolean v0, Lnet/sqlcipher/database/SQLiteDebug;->DEBUG_LOCK_TIME_TRACKING_STACK_TRACE:Z

    const/4 v0, 0x0

    .line 184
    sput v0, Lnet/sqlcipher/database/SQLiteDebug;->sNumActiveCursorsFinalized:I

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 28
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static getDatabaseInfo()Lnet/sqlcipher/database/SQLiteDebug$PagerStats;
    .locals 2

    .line 148
    new-instance v0, Lnet/sqlcipher/database/SQLiteDebug$PagerStats;

    invoke-direct {v0}, Lnet/sqlcipher/database/SQLiteDebug$PagerStats;-><init>()V

    .line 149
    invoke-static {v0}, Lnet/sqlcipher/database/SQLiteDebug;->getPagerStats(Lnet/sqlcipher/database/SQLiteDebug$PagerStats;)V

    .line 150
    invoke-static {}, Lnet/sqlcipher/database/SQLiteDatabase;->getDbStats()Ljava/util/ArrayList;

    move-result-object v1

    iput-object v1, v0, Lnet/sqlcipher/database/SQLiteDebug$PagerStats;->dbStats:Ljava/util/ArrayList;

    return-object v0
.end method

.method public static native getHeapAllocatedSize()J
.end method

.method public static native getHeapDirtyPages([I)V
.end method

.method public static native getHeapFreeSize()J
.end method

.method public static native getHeapSize()J
.end method

.method public static getNumActiveCursorsFinalized()I
    .locals 1

    .line 191
    sget v0, Lnet/sqlcipher/database/SQLiteDebug;->sNumActiveCursorsFinalized:I

    return v0
.end method

.method public static native getPagerStats(Lnet/sqlcipher/database/SQLiteDebug$PagerStats;)V
.end method

.method static declared-synchronized notifyActiveCursorFinalized()V
    .locals 2

    const-class v0, Lnet/sqlcipher/database/SQLiteDebug;

    monitor-enter v0

    .line 195
    :try_start_0
    sget v1, Lnet/sqlcipher/database/SQLiteDebug;->sNumActiveCursorsFinalized:I

    add-int/lit8 v1, v1, 0x1

    sput v1, Lnet/sqlcipher/database/SQLiteDebug;->sNumActiveCursorsFinalized:I
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 196
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw v1
.end method
