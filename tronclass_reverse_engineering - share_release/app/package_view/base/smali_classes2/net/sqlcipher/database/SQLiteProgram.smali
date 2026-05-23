.class public abstract Lnet/sqlcipher/database/SQLiteProgram;
.super Lnet/sqlcipher/database/SQLiteClosable;
.source "SQLiteProgram.java"

# interfaces
.implements Landroidx/sqlite/db/SupportSQLiteProgram;


# static fields
.field private static final TAG:Ljava/lang/String; = "SQLiteProgram"


# instance fields
.field mClosed:Z

.field private mCompiledSql:Lnet/sqlcipher/database/SQLiteCompiledSql;

.field protected mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;
    .annotation runtime Ljava/lang/Deprecated;
    .end annotation
.end field

.field final mSql:Ljava/lang/String;

.field protected nHandle:J
    .annotation runtime Ljava/lang/Deprecated;
    .end annotation
.end field

.field protected nStatement:J
    .annotation runtime Ljava/lang/Deprecated;
    .end annotation
.end field


# direct methods
.method constructor <init>(Lnet/sqlcipher/database/SQLiteDatabase;Ljava/lang/String;)V
    .locals 6

    .line 68
    invoke-direct {p0}, Lnet/sqlcipher/database/SQLiteClosable;-><init>()V

    const-wide/16 v0, 0x0

    .line 47
    iput-wide v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->nHandle:J

    .line 60
    iput-wide v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->nStatement:J

    const/4 v0, 0x0

    .line 66
    iput-boolean v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mClosed:Z

    .line 69
    iput-object p1, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    .line 70
    invoke-virtual {p2}, Ljava/lang/String;->trim()Ljava/lang/String;

    move-result-object v1

    iput-object v1, p0, Lnet/sqlcipher/database/SQLiteProgram;->mSql:Ljava/lang/String;

    .line 71
    invoke-virtual {p1}, Lnet/sqlcipher/database/SQLiteDatabase;->acquireReference()V

    .line 72
    invoke-virtual {p1, p0}, Lnet/sqlcipher/database/SQLiteDatabase;->addSQLiteClosable(Lnet/sqlcipher/database/SQLiteClosable;)V

    .line 73
    iget-wide v2, p1, Lnet/sqlcipher/database/SQLiteDatabase;->mNativeHandle:J

    iput-wide v2, p0, Lnet/sqlcipher/database/SQLiteProgram;->nHandle:J

    .line 77
    invoke-virtual {v1}, Ljava/lang/String;->length()I

    move-result v2

    const/4 v3, 0x6

    if-lt v2, v3, :cond_0

    invoke-virtual {v1, v0, v3}, Ljava/lang/String;->substring(II)Ljava/lang/String;

    move-result-object v1

    .line 78
    :cond_0
    const-string v0, "INSERT"

    invoke-virtual {v1, v0}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_1

    const-string v0, "UPDATE"

    invoke-virtual {v1, v0}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_1

    const-string v0, "REPLAC"

    .line 79
    invoke-virtual {v1, v0}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_1

    const-string v0, "DELETE"

    .line 80
    invoke-virtual {v1, v0}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_1

    const-string v0, "SELECT"

    invoke-virtual {v1, v0}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_1

    .line 81
    new-instance v0, Lnet/sqlcipher/database/SQLiteCompiledSql;

    invoke-direct {v0, p1, p2}, Lnet/sqlcipher/database/SQLiteCompiledSql;-><init>(Lnet/sqlcipher/database/SQLiteDatabase;Ljava/lang/String;)V

    iput-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mCompiledSql:Lnet/sqlcipher/database/SQLiteCompiledSql;

    .line 82
    iget-wide p1, v0, Lnet/sqlcipher/database/SQLiteCompiledSql;->nStatement:J

    iput-wide p1, p0, Lnet/sqlcipher/database/SQLiteProgram;->nStatement:J

    return-void

    .line 88
    :cond_1
    invoke-virtual {p1, p2}, Lnet/sqlcipher/database/SQLiteDatabase;->getCompiledStatementForSql(Ljava/lang/String;)Lnet/sqlcipher/database/SQLiteCompiledSql;

    move-result-object v0

    iput-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mCompiledSql:Lnet/sqlcipher/database/SQLiteCompiledSql;

    .line 89
    const-string v1, "SQLiteProgram"

    if-nez v0, :cond_2

    .line 91
    new-instance v0, Lnet/sqlcipher/database/SQLiteCompiledSql;

    invoke-direct {v0, p1, p2}, Lnet/sqlcipher/database/SQLiteCompiledSql;-><init>(Lnet/sqlcipher/database/SQLiteDatabase;Ljava/lang/String;)V

    iput-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mCompiledSql:Lnet/sqlcipher/database/SQLiteCompiledSql;

    .line 96
    invoke-virtual {v0}, Lnet/sqlcipher/database/SQLiteCompiledSql;->acquire()Z

    .line 97
    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mCompiledSql:Lnet/sqlcipher/database/SQLiteCompiledSql;

    invoke-virtual {p1, p2, v0}, Lnet/sqlcipher/database/SQLiteDatabase;->addToCompiledQueries(Ljava/lang/String;Lnet/sqlcipher/database/SQLiteCompiledSql;)V

    .line 98
    sget-boolean p1, Lnet/sqlcipher/database/SQLiteDebug;->DEBUG_ACTIVE_CURSOR_FINALIZATION:Z

    if-eqz p1, :cond_3

    .line 99
    new-instance p1, Ljava/lang/StringBuilder;

    const-string v0, "Created DbObj (id#"

    invoke-direct {p1, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mCompiledSql:Lnet/sqlcipher/database/SQLiteCompiledSql;

    iget-wide v2, v0, Lnet/sqlcipher/database/SQLiteCompiledSql;->nStatement:J

    invoke-virtual {p1, v2, v3}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, ") for sql: "

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v1, p1}, Landroid/util/Log;->v(Ljava/lang/String;Ljava/lang/String;)I

    goto :goto_0

    .line 105
    :cond_2
    invoke-virtual {v0}, Lnet/sqlcipher/database/SQLiteCompiledSql;->acquire()Z

    move-result v0

    if-nez v0, :cond_3

    .line 106
    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mCompiledSql:Lnet/sqlcipher/database/SQLiteCompiledSql;

    iget-wide v2, v0, Lnet/sqlcipher/database/SQLiteCompiledSql;->nStatement:J

    .line 111
    new-instance v0, Lnet/sqlcipher/database/SQLiteCompiledSql;

    invoke-direct {v0, p1, p2}, Lnet/sqlcipher/database/SQLiteCompiledSql;-><init>(Lnet/sqlcipher/database/SQLiteDatabase;Ljava/lang/String;)V

    iput-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mCompiledSql:Lnet/sqlcipher/database/SQLiteCompiledSql;

    .line 112
    sget-boolean p1, Lnet/sqlcipher/database/SQLiteDebug;->DEBUG_ACTIVE_CURSOR_FINALIZATION:Z

    if-eqz p1, :cond_3

    .line 113
    new-instance p1, Ljava/lang/StringBuilder;

    const-string v0, "** possible bug ** Created NEW DbObj (id#"

    invoke-direct {p1, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mCompiledSql:Lnet/sqlcipher/database/SQLiteCompiledSql;

    iget-wide v4, v0, Lnet/sqlcipher/database/SQLiteCompiledSql;->nStatement:J

    invoke-virtual {p1, v4, v5}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, ") because the previously created DbObj (id#"

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, v2, v3}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, ") was not released for sql:"

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v1, p1}, Landroid/util/Log;->v(Ljava/lang/String;Ljava/lang/String;)I

    .line 121
    :cond_3
    :goto_0
    iget-object p1, p0, Lnet/sqlcipher/database/SQLiteProgram;->mCompiledSql:Lnet/sqlcipher/database/SQLiteCompiledSql;

    iget-wide p1, p1, Lnet/sqlcipher/database/SQLiteCompiledSql;->nStatement:J

    iput-wide p1, p0, Lnet/sqlcipher/database/SQLiteProgram;->nStatement:J

    return-void
.end method

.method private final native native_clear_bindings()V
.end method

.method private releaseCompiledSqlIfNotInCache()V
    .locals 3

    .line 138
    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mCompiledSql:Lnet/sqlcipher/database/SQLiteCompiledSql;

    if-nez v0, :cond_0

    return-void

    .line 141
    :cond_0
    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    iget-object v0, v0, Lnet/sqlcipher/database/SQLiteDatabase;->mCompiledQueries:Ljava/util/Map;

    monitor-enter v0

    .line 142
    :try_start_0
    iget-object v1, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    iget-object v1, v1, Lnet/sqlcipher/database/SQLiteDatabase;->mCompiledQueries:Ljava/util/Map;

    iget-object v2, p0, Lnet/sqlcipher/database/SQLiteProgram;->mCompiledSql:Lnet/sqlcipher/database/SQLiteCompiledSql;

    invoke-interface {v1, v2}, Ljava/util/Map;->containsValue(Ljava/lang/Object;)Z

    move-result v1

    if-nez v1, :cond_1

    .line 145
    iget-object v1, p0, Lnet/sqlcipher/database/SQLiteProgram;->mCompiledSql:Lnet/sqlcipher/database/SQLiteCompiledSql;

    invoke-virtual {v1}, Lnet/sqlcipher/database/SQLiteCompiledSql;->releaseSqlStatement()V

    const/4 v1, 0x0

    .line 146
    iput-object v1, p0, Lnet/sqlcipher/database/SQLiteProgram;->mCompiledSql:Lnet/sqlcipher/database/SQLiteCompiledSql;

    const-wide/16 v1, 0x0

    .line 147
    iput-wide v1, p0, Lnet/sqlcipher/database/SQLiteProgram;->nStatement:J

    goto :goto_0

    .line 150
    :cond_1
    iget-object v1, p0, Lnet/sqlcipher/database/SQLiteProgram;->mCompiledSql:Lnet/sqlcipher/database/SQLiteCompiledSql;

    invoke-virtual {v1}, Lnet/sqlcipher/database/SQLiteCompiledSql;->release()V

    .line 152
    :goto_0
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method


# virtual methods
.method public bindBlob(I[B)V
    .locals 2

    if-eqz p2, :cond_2

    .line 286
    iget-boolean v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mClosed:Z

    if-nez v0, :cond_1

    .line 289
    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    invoke-virtual {v0}, Lnet/sqlcipher/database/SQLiteDatabase;->isOpen()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 292
    invoke-virtual {p0}, Lnet/sqlcipher/database/SQLiteProgram;->acquireReference()V

    .line 294
    :try_start_0
    invoke-virtual {p0, p1, p2}, Lnet/sqlcipher/database/SQLiteProgram;->native_bind_blob(I[B)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 296
    invoke-virtual {p0}, Lnet/sqlcipher/database/SQLiteProgram;->releaseReference()V

    return-void

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/database/SQLiteProgram;->releaseReference()V

    .line 297
    throw p1

    .line 290
    :cond_0
    new-instance p1, Ljava/lang/IllegalStateException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v0, "database "

    invoke-direct {p2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    invoke-virtual {v0}, Lnet/sqlcipher/database/SQLiteDatabase;->getPath()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v0, " already closed"

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 287
    :cond_1
    new-instance p1, Ljava/lang/IllegalStateException;

    const-string p2, "program already closed"

    invoke-direct {p1, p2}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 284
    :cond_2
    new-instance p2, Ljava/lang/IllegalArgumentException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "the bind value at index "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, " is null"

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-direct {p2, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p2
.end method

.method public bindDouble(ID)V
    .locals 1

    .line 234
    iget-boolean v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mClosed:Z

    if-nez v0, :cond_1

    .line 237
    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    invoke-virtual {v0}, Lnet/sqlcipher/database/SQLiteDatabase;->isOpen()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 240
    invoke-virtual {p0}, Lnet/sqlcipher/database/SQLiteProgram;->acquireReference()V

    .line 242
    :try_start_0
    invoke-virtual {p0, p1, p2, p3}, Lnet/sqlcipher/database/SQLiteProgram;->native_bind_double(ID)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 244
    invoke-virtual {p0}, Lnet/sqlcipher/database/SQLiteProgram;->releaseReference()V

    return-void

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/database/SQLiteProgram;->releaseReference()V

    .line 245
    throw p1

    .line 238
    :cond_0
    new-instance p1, Ljava/lang/IllegalStateException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "database "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object p3, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    invoke-virtual {p3}, Lnet/sqlcipher/database/SQLiteDatabase;->getPath()Ljava/lang/String;

    move-result-object p3

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, " already closed"

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 235
    :cond_1
    new-instance p1, Ljava/lang/IllegalStateException;

    const-string p2, "program already closed"

    invoke-direct {p1, p2}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public bindLong(IJ)V
    .locals 1

    .line 211
    iget-boolean v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mClosed:Z

    if-nez v0, :cond_1

    .line 214
    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    invoke-virtual {v0}, Lnet/sqlcipher/database/SQLiteDatabase;->isOpen()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 217
    invoke-virtual {p0}, Lnet/sqlcipher/database/SQLiteProgram;->acquireReference()V

    .line 219
    :try_start_0
    invoke-virtual {p0, p1, p2, p3}, Lnet/sqlcipher/database/SQLiteProgram;->native_bind_long(IJ)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 221
    invoke-virtual {p0}, Lnet/sqlcipher/database/SQLiteProgram;->releaseReference()V

    return-void

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/database/SQLiteProgram;->releaseReference()V

    .line 222
    throw p1

    .line 215
    :cond_0
    new-instance p1, Ljava/lang/IllegalStateException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "database "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object p3, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    invoke-virtual {p3}, Lnet/sqlcipher/database/SQLiteDatabase;->getPath()Ljava/lang/String;

    move-result-object p3

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string p3, " already closed"

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 212
    :cond_1
    new-instance p1, Ljava/lang/IllegalStateException;

    const-string p2, "program already closed"

    invoke-direct {p1, p2}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public bindNull(I)V
    .locals 2

    .line 188
    iget-boolean v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mClosed:Z

    if-nez v0, :cond_1

    .line 191
    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    invoke-virtual {v0}, Lnet/sqlcipher/database/SQLiteDatabase;->isOpen()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 194
    invoke-virtual {p0}, Lnet/sqlcipher/database/SQLiteProgram;->acquireReference()V

    .line 196
    :try_start_0
    invoke-virtual {p0, p1}, Lnet/sqlcipher/database/SQLiteProgram;->native_bind_null(I)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 198
    invoke-virtual {p0}, Lnet/sqlcipher/database/SQLiteProgram;->releaseReference()V

    return-void

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/database/SQLiteProgram;->releaseReference()V

    .line 199
    throw p1

    .line 192
    :cond_0
    new-instance p1, Ljava/lang/IllegalStateException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "database "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    invoke-virtual {v1}, Lnet/sqlcipher/database/SQLiteDatabase;->getPath()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " already closed"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-direct {p1, v0}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 189
    :cond_1
    new-instance p1, Ljava/lang/IllegalStateException;

    const-string v0, "program already closed"

    invoke-direct {p1, v0}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public bindString(ILjava/lang/String;)V
    .locals 2

    if-eqz p2, :cond_2

    .line 260
    iget-boolean v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mClosed:Z

    if-nez v0, :cond_1

    .line 263
    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    invoke-virtual {v0}, Lnet/sqlcipher/database/SQLiteDatabase;->isOpen()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 266
    invoke-virtual {p0}, Lnet/sqlcipher/database/SQLiteProgram;->acquireReference()V

    .line 268
    :try_start_0
    invoke-virtual {p0, p1, p2}, Lnet/sqlcipher/database/SQLiteProgram;->native_bind_string(ILjava/lang/String;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 270
    invoke-virtual {p0}, Lnet/sqlcipher/database/SQLiteProgram;->releaseReference()V

    return-void

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/database/SQLiteProgram;->releaseReference()V

    .line 271
    throw p1

    .line 264
    :cond_0
    new-instance p1, Ljava/lang/IllegalStateException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v0, "database "

    invoke-direct {p2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    invoke-virtual {v0}, Lnet/sqlcipher/database/SQLiteDatabase;->getPath()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v0, " already closed"

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 261
    :cond_1
    new-instance p1, Ljava/lang/IllegalStateException;

    const-string p2, "program already closed"

    invoke-direct {p1, p2}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 258
    :cond_2
    new-instance p2, Ljava/lang/IllegalArgumentException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "the bind value at index "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, " is null"

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-direct {p2, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p2
.end method

.method public clearBindings()V
    .locals 3

    .line 305
    iget-boolean v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mClosed:Z

    if-nez v0, :cond_1

    .line 308
    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    invoke-virtual {v0}, Lnet/sqlcipher/database/SQLiteDatabase;->isOpen()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 311
    invoke-virtual {p0}, Lnet/sqlcipher/database/SQLiteProgram;->acquireReference()V

    .line 313
    :try_start_0
    invoke-direct {p0}, Lnet/sqlcipher/database/SQLiteProgram;->native_clear_bindings()V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 315
    invoke-virtual {p0}, Lnet/sqlcipher/database/SQLiteProgram;->releaseReference()V

    return-void

    :catchall_0
    move-exception v0

    invoke-virtual {p0}, Lnet/sqlcipher/database/SQLiteProgram;->releaseReference()V

    .line 316
    throw v0

    .line 309
    :cond_0
    new-instance v0, Ljava/lang/IllegalStateException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "database "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    invoke-virtual {v2}, Lnet/sqlcipher/database/SQLiteDatabase;->getPath()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, " already closed"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-direct {v0, v1}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw v0

    .line 306
    :cond_1
    new-instance v0, Ljava/lang/IllegalStateException;

    const-string v1, "program already closed"

    invoke-direct {v0, v1}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw v0
.end method

.method public close()V
    .locals 2

    .line 323
    iget-boolean v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mClosed:Z

    if-eqz v0, :cond_0

    return-void

    .line 326
    :cond_0
    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    invoke-virtual {v0}, Lnet/sqlcipher/database/SQLiteDatabase;->isOpen()Z

    move-result v0

    if-nez v0, :cond_1

    return-void

    .line 329
    :cond_1
    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    invoke-virtual {v0}, Lnet/sqlcipher/database/SQLiteDatabase;->lock()V

    .line 331
    :try_start_0
    invoke-virtual {p0}, Lnet/sqlcipher/database/SQLiteProgram;->releaseReference()V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 333
    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    invoke-virtual {v0}, Lnet/sqlcipher/database/SQLiteDatabase;->unlock()V

    const/4 v0, 0x1

    .line 335
    iput-boolean v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mClosed:Z

    return-void

    :catchall_0
    move-exception v0

    .line 333
    iget-object v1, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    invoke-virtual {v1}, Lnet/sqlcipher/database/SQLiteDatabase;->unlock()V

    .line 334
    throw v0
.end method

.method protected compile(Ljava/lang/String;Z)V
    .locals 0
    .annotation runtime Ljava/lang/Deprecated;
    .end annotation

    return-void
.end method

.method getSqlString()Ljava/lang/String;
    .locals 1

    .line 165
    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mSql:Ljava/lang/String;

    return-object v0
.end method

.method public final getUniqueId()J
    .locals 2

    .line 161
    iget-wide v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->nStatement:J

    return-wide v0
.end method

.method protected final native native_bind_blob(I[B)V
.end method

.method protected final native native_bind_double(ID)V
.end method

.method protected final native native_bind_long(IJ)V
.end method

.method protected final native native_bind_null(I)V
.end method

.method protected final native native_bind_string(ILjava/lang/String;)V
.end method

.method protected final native native_compile(Ljava/lang/String;)V
    .annotation runtime Ljava/lang/Deprecated;
    .end annotation
.end method

.method protected final native native_finalize()V
    .annotation runtime Ljava/lang/Deprecated;
    .end annotation
.end method

.method protected onAllReferencesReleased()V
    .locals 1

    .line 126
    invoke-direct {p0}, Lnet/sqlcipher/database/SQLiteProgram;->releaseCompiledSqlIfNotInCache()V

    .line 127
    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    invoke-virtual {v0}, Lnet/sqlcipher/database/SQLiteDatabase;->releaseReference()V

    .line 128
    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    invoke-virtual {v0, p0}, Lnet/sqlcipher/database/SQLiteDatabase;->removeSQLiteClosable(Lnet/sqlcipher/database/SQLiteClosable;)V

    return-void
.end method

.method protected onAllReferencesReleasedFromContainer()V
    .locals 1

    .line 133
    invoke-direct {p0}, Lnet/sqlcipher/database/SQLiteProgram;->releaseCompiledSqlIfNotInCache()V

    .line 134
    iget-object v0, p0, Lnet/sqlcipher/database/SQLiteProgram;->mDatabase:Lnet/sqlcipher/database/SQLiteDatabase;

    invoke-virtual {v0}, Lnet/sqlcipher/database/SQLiteDatabase;->releaseReference()V

    return-void
.end method
