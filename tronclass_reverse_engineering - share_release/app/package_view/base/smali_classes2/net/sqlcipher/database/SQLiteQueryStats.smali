.class public Lnet/sqlcipher/database/SQLiteQueryStats;
.super Ljava/lang/Object;
.source "SQLiteQueryStats.java"


# instance fields
.field largestIndividualRowSize:J

.field totalQueryResultSize:J


# direct methods
.method public constructor <init>(JJ)V
    .locals 0

    .line 8
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 9
    iput-wide p1, p0, Lnet/sqlcipher/database/SQLiteQueryStats;->totalQueryResultSize:J

    .line 10
    iput-wide p3, p0, Lnet/sqlcipher/database/SQLiteQueryStats;->largestIndividualRowSize:J

    return-void
.end method


# virtual methods
.method public getLargestIndividualRowSize()J
    .locals 2

    .line 18
    iget-wide v0, p0, Lnet/sqlcipher/database/SQLiteQueryStats;->largestIndividualRowSize:J

    return-wide v0
.end method

.method public getTotalQueryResultSize()J
    .locals 2

    .line 14
    iget-wide v0, p0, Lnet/sqlcipher/database/SQLiteQueryStats;->totalQueryResultSize:J

    return-wide v0
.end method
