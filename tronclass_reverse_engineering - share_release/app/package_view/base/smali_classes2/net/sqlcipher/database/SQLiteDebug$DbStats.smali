.class public Lnet/sqlcipher/database/SQLiteDebug$DbStats;
.super Ljava/lang/Object;
.source "SQLiteDebug.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lnet/sqlcipher/database/SQLiteDebug;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "DbStats"
.end annotation


# instance fields
.field public dbName:Ljava/lang/String;

.field public dbSize:J

.field public lookaside:I

.field public pageSize:J


# direct methods
.method public constructor <init>(Ljava/lang/String;JJI)V
    .locals 0

    .line 135
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 136
    iput-object p1, p0, Lnet/sqlcipher/database/SQLiteDebug$DbStats;->dbName:Ljava/lang/String;

    .line 137
    iput-wide p4, p0, Lnet/sqlcipher/database/SQLiteDebug$DbStats;->pageSize:J

    mul-long/2addr p2, p4

    const-wide/16 p4, 0x400

    .line 138
    div-long/2addr p2, p4

    iput-wide p2, p0, Lnet/sqlcipher/database/SQLiteDebug$DbStats;->dbSize:J

    .line 139
    iput p6, p0, Lnet/sqlcipher/database/SQLiteDebug$DbStats;->lookaside:I

    return-void
.end method
