.class public abstract Lnet/sqlcipher/AbstractCursor;
.super Ljava/lang/Object;
.source "AbstractCursor.java"

# interfaces
.implements Landroid/database/CrossProcessCursor;
.implements Lnet/sqlcipher/Cursor;


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lnet/sqlcipher/AbstractCursor$SelfContentObserver;
    }
.end annotation


# static fields
.field private static final TAG:Ljava/lang/String; = "Cursor"


# instance fields
.field protected mClosed:Z

.field mContentObservable:Landroid/database/ContentObservable;

.field protected mContentResolver:Landroid/content/ContentResolver;

.field protected mCurrentRowID:Ljava/lang/Long;

.field mDataSetObservable:Landroid/database/DataSetObservable;

.field private mExtras:Landroid/os/Bundle;

.field private mNotifyUri:Landroid/net/Uri;

.field protected mPos:I

.field protected mRowIdColumnIndex:I

.field private mSelfObserver:Landroid/database/ContentObserver;

.field private final mSelfObserverLock:Ljava/lang/Object;

.field private mSelfObserverRegistered:Z

.field protected mUpdatedRows:Ljava/util/HashMap;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/HashMap<",
            "Ljava/lang/Long;",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/Object;",
            ">;>;"
        }
    .end annotation
.end field


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 165
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 42
    new-instance v0, Landroid/database/DataSetObservable;

    invoke-direct {v0}, Landroid/database/DataSetObservable;-><init>()V

    iput-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mDataSetObservable:Landroid/database/DataSetObservable;

    .line 43
    new-instance v0, Landroid/database/ContentObservable;

    invoke-direct {v0}, Landroid/database/ContentObservable;-><init>()V

    iput-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mContentObservable:Landroid/database/ContentObservable;

    .line 45
    sget-object v0, Landroid/os/Bundle;->EMPTY:Landroid/os/Bundle;

    iput-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mExtras:Landroid/os/Bundle;

    const/4 v0, 0x0

    .line 622
    iput-boolean v0, p0, Lnet/sqlcipher/AbstractCursor;->mClosed:Z

    .line 625
    new-instance v0, Ljava/lang/Object;

    invoke-direct {v0}, Ljava/lang/Object;-><init>()V

    iput-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mSelfObserverLock:Ljava/lang/Object;

    const/4 v0, -0x1

    .line 166
    iput v0, p0, Lnet/sqlcipher/AbstractCursor;->mPos:I

    .line 167
    iput v0, p0, Lnet/sqlcipher/AbstractCursor;->mRowIdColumnIndex:I

    const/4 v0, 0x0

    .line 168
    iput-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mCurrentRowID:Ljava/lang/Long;

    .line 169
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    iput-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mUpdatedRows:Ljava/util/HashMap;

    return-void
.end method


# virtual methods
.method public abortUpdates()V
    .locals 2

    .line 407
    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mUpdatedRows:Ljava/util/HashMap;

    monitor-enter v0

    .line 408
    :try_start_0
    iget-object v1, p0, Lnet/sqlcipher/AbstractCursor;->mUpdatedRows:Ljava/util/HashMap;

    invoke-virtual {v1}, Ljava/util/HashMap;->clear()V

    .line 409
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method protected checkPosition()V
    .locals 3

    const/4 v0, -0x1

    .line 561
    iget v1, p0, Lnet/sqlcipher/AbstractCursor;->mPos:I

    if-eq v0, v1, :cond_0

    invoke-virtual {p0}, Lnet/sqlcipher/AbstractCursor;->getCount()I

    move-result v0

    iget v1, p0, Lnet/sqlcipher/AbstractCursor;->mPos:I

    if-eq v0, v1, :cond_0

    return-void

    .line 562
    :cond_0
    new-instance v0, Lnet/sqlcipher/CursorIndexOutOfBoundsException;

    iget v1, p0, Lnet/sqlcipher/AbstractCursor;->mPos:I

    invoke-virtual {p0}, Lnet/sqlcipher/AbstractCursor;->getCount()I

    move-result v2

    invoke-direct {v0, v1, v2}, Lnet/sqlcipher/CursorIndexOutOfBoundsException;-><init>(II)V

    throw v0
.end method

.method public close()V
    .locals 1

    const/4 v0, 0x1

    .line 111
    iput-boolean v0, p0, Lnet/sqlcipher/AbstractCursor;->mClosed:Z

    .line 112
    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mContentObservable:Landroid/database/ContentObservable;

    invoke-virtual {v0}, Landroid/database/ContentObservable;->unregisterAll()V

    .line 113
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractCursor;->deactivateInternal()V

    return-void
.end method

.method public commitUpdates()Z
    .locals 1

    const/4 v0, 0x0

    .line 417
    invoke-virtual {p0, v0}, Lnet/sqlcipher/AbstractCursor;->commitUpdates(Ljava/util/Map;)Z

    move-result v0

    return v0
.end method

.method public commitUpdates(Ljava/util/Map;)Z
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Map<",
            "+",
            "Ljava/lang/Long;",
            "+",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/Object;",
            ">;>;)Z"
        }
    .end annotation

    const/4 p1, 0x0

    return p1
.end method

.method public copyStringToBuffer(ILandroid/database/CharArrayBuffer;)V
    .locals 4

    .line 149
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractCursor;->getString(I)Ljava/lang/String;

    move-result-object p1

    const/4 v0, 0x0

    if-eqz p1, :cond_2

    .line 151
    iget-object v1, p2, Landroid/database/CharArrayBuffer;->data:[C

    if-eqz v1, :cond_1

    .line 152
    array-length v2, v1

    invoke-virtual {p1}, Ljava/lang/String;->length()I

    move-result v3

    if-ge v2, v3, :cond_0

    goto :goto_0

    .line 155
    :cond_0
    invoke-virtual {p1}, Ljava/lang/String;->length()I

    move-result v2

    invoke-virtual {p1, v0, v2, v1, v0}, Ljava/lang/String;->getChars(II[CI)V

    goto :goto_1

    .line 153
    :cond_1
    :goto_0
    invoke-virtual {p1}, Ljava/lang/String;->toCharArray()[C

    move-result-object v0

    iput-object v0, p2, Landroid/database/CharArrayBuffer;->data:[C

    .line 157
    :goto_1
    invoke-virtual {p1}, Ljava/lang/String;->length()I

    move-result p1

    iput p1, p2, Landroid/database/CharArrayBuffer;->sizeCopied:I

    goto :goto_2

    .line 159
    :cond_2
    iput v0, p2, Landroid/database/CharArrayBuffer;->sizeCopied:I

    :goto_2
    return-void
.end method

.method public deactivate()V
    .locals 0

    .line 82
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractCursor;->deactivateInternal()V

    return-void
.end method

.method public deactivateInternal()V
    .locals 2

    .line 89
    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mSelfObserver:Landroid/database/ContentObserver;

    if-eqz v0, :cond_0

    .line 90
    iget-object v1, p0, Lnet/sqlcipher/AbstractCursor;->mContentResolver:Landroid/content/ContentResolver;

    invoke-virtual {v1, v0}, Landroid/content/ContentResolver;->unregisterContentObserver(Landroid/database/ContentObserver;)V

    const/4 v0, 0x0

    .line 91
    iput-boolean v0, p0, Lnet/sqlcipher/AbstractCursor;->mSelfObserverRegistered:Z

    .line 93
    :cond_0
    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mDataSetObservable:Landroid/database/DataSetObservable;

    invoke-virtual {v0}, Landroid/database/DataSetObservable;->notifyInvalidated()V

    return-void
.end method

.method public deleteRow()Z
    .locals 1

    const/4 v0, 0x0

    return v0
.end method

.method public fillWindow(ILandroid/database/CursorWindow;)V
    .locals 0

    .line 214
    invoke-static {p0, p1, p2}, Lnet/sqlcipher/DatabaseUtils;->cursorFillWindow(Lnet/sqlcipher/Cursor;ILandroid/database/CursorWindow;)V

    return-void
.end method

.method protected finalize()V
    .locals 3

    .line 568
    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mSelfObserver:Landroid/database/ContentObserver;

    if-eqz v0, :cond_0

    iget-boolean v1, p0, Lnet/sqlcipher/AbstractCursor;->mSelfObserverRegistered:Z

    const/4 v2, 0x1

    if-ne v1, v2, :cond_0

    .line 569
    iget-object v1, p0, Lnet/sqlcipher/AbstractCursor;->mContentResolver:Landroid/content/ContentResolver;

    invoke-virtual {v1, v0}, Landroid/content/ContentResolver;->unregisterContentObserver(Landroid/database/ContentObserver;)V

    :cond_0
    return-void
.end method

.method public getBlob(I)[B
    .locals 1

    .line 65
    new-instance p1, Ljava/lang/UnsupportedOperationException;

    const-string v0, "getBlob is not supported"

    invoke-direct {p1, v0}, Ljava/lang/UnsupportedOperationException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public getColumnCount()I
    .locals 1

    .line 78
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractCursor;->getColumnNames()[Ljava/lang/String;

    move-result-object v0

    array-length v0, v0

    return v0
.end method

.method public getColumnIndex(Ljava/lang/String;)I
    .locals 5

    const/16 v0, 0x2e

    .line 262
    invoke-virtual {p1, v0}, Ljava/lang/String;->lastIndexOf(I)I

    move-result v0

    const/4 v1, -0x1

    if-eq v0, v1, :cond_0

    .line 264
    new-instance v2, Ljava/lang/Exception;

    invoke-direct {v2}, Ljava/lang/Exception;-><init>()V

    .line 265
    new-instance v3, Ljava/lang/StringBuilder;

    const-string v4, "requesting column name with table name -- "

    invoke-direct {v3, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v3

    const-string v4, "Cursor"

    invoke-static {v4, v3, v2}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    add-int/lit8 v0, v0, 0x1

    .line 266
    invoke-virtual {p1, v0}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object p1

    .line 269
    :cond_0
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractCursor;->getColumnNames()[Ljava/lang/String;

    move-result-object v0

    .line 270
    array-length v2, v0

    const/4 v3, 0x0

    :goto_0
    if-ge v3, v2, :cond_2

    .line 272
    aget-object v4, v0, v3

    invoke-virtual {v4, p1}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result v4

    if-eqz v4, :cond_1

    return v3

    :cond_1
    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    :cond_2
    return v1
.end method

.method public getColumnIndexOrThrow(Ljava/lang/String;)I
    .locals 3

    .line 286
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractCursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v0

    if-ltz v0, :cond_0

    return v0

    .line 288
    :cond_0
    new-instance v0, Ljava/lang/IllegalArgumentException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "column \'"

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v1, "\' does not exist"

    invoke-virtual {p1, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-direct {v0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw v0
.end method

.method public getColumnName(I)Ljava/lang/String;
    .locals 1

    .line 294
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractCursor;->getColumnNames()[Ljava/lang/String;

    move-result-object v0

    aget-object p1, v0, p1

    return-object p1
.end method

.method public abstract getColumnNames()[Ljava/lang/String;
.end method

.method public abstract getCount()I
.end method

.method protected getDataSetObservable()Landroid/database/DataSetObservable;
    .locals 1

    .line 452
    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mDataSetObservable:Landroid/database/DataSetObservable;

    return-object v0
.end method

.method public abstract getDouble(I)D
.end method

.method public getExtras()Landroid/os/Bundle;
    .locals 1

    .line 512
    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mExtras:Landroid/os/Bundle;

    return-object v0
.end method

.method public abstract getFloat(I)F
.end method

.method public abstract getInt(I)I
.end method

.method public abstract getLong(I)J
.end method

.method public getNotificationUri()Landroid/net/Uri;
    .locals 1

    .line 500
    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mNotifyUri:Landroid/net/Uri;

    return-object v0
.end method

.method public final getPosition()I
    .locals 1

    .line 173
    iget v0, p0, Lnet/sqlcipher/AbstractCursor;->mPos:I

    return v0
.end method

.method public abstract getShort(I)S
.end method

.method public abstract getString(I)Ljava/lang/String;
.end method

.method public abstract getType(I)I
.end method

.method protected getUpdatedField(I)Ljava/lang/Object;
    .locals 2

    .line 548
    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mUpdatedRows:Ljava/util/HashMap;

    iget-object v1, p0, Lnet/sqlcipher/AbstractCursor;->mCurrentRowID:Ljava/lang/Long;

    invoke-virtual {v0, v1}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/util/Map;

    .line 549
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractCursor;->getColumnNames()[Ljava/lang/String;

    move-result-object v1

    aget-object p1, v1, p1

    invoke-interface {v0, p1}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    return-object p1
.end method

.method public getWantsAllOnMoveCalls()Z
    .locals 1

    const/4 v0, 0x0

    return v0
.end method

.method public bridge synthetic getWindow()Landroid/database/CursorWindow;
    .locals 1

    .line 39
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractCursor;->getWindow()Lnet/sqlcipher/CursorWindow;

    move-result-object v0

    return-object v0
.end method

.method public getWindow()Lnet/sqlcipher/CursorWindow;
    .locals 1

    const/4 v0, 0x0

    return-object v0
.end method

.method public hasUpdates()Z
    .locals 2

    .line 397
    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mUpdatedRows:Ljava/util/HashMap;

    monitor-enter v0

    .line 398
    :try_start_0
    iget-object v1, p0, Lnet/sqlcipher/AbstractCursor;->mUpdatedRows:Ljava/util/HashMap;

    invoke-virtual {v1}, Ljava/util/HashMap;->size()I

    move-result v1

    if-lez v1, :cond_0

    const/4 v1, 0x1

    goto :goto_0

    :cond_0
    const/4 v1, 0x0

    :goto_0
    monitor-exit v0

    return v1

    :catchall_0
    move-exception v1

    .line 399
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public final isAfterLast()Z
    .locals 3

    .line 254
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractCursor;->getCount()I

    move-result v0

    const/4 v1, 0x1

    if-nez v0, :cond_0

    return v1

    .line 257
    :cond_0
    iget v0, p0, Lnet/sqlcipher/AbstractCursor;->mPos:I

    invoke-virtual {p0}, Lnet/sqlcipher/AbstractCursor;->getCount()I

    move-result v2

    if-ne v0, v2, :cond_1

    goto :goto_0

    :cond_1
    const/4 v1, 0x0

    :goto_0
    return v1
.end method

.method public final isBeforeFirst()Z
    .locals 3

    .line 247
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractCursor;->getCount()I

    move-result v0

    const/4 v1, 0x1

    if-nez v0, :cond_0

    return v1

    .line 250
    :cond_0
    iget v0, p0, Lnet/sqlcipher/AbstractCursor;->mPos:I

    const/4 v2, -0x1

    if-ne v0, v2, :cond_1

    goto :goto_0

    :cond_1
    const/4 v1, 0x0

    :goto_0
    return v1
.end method

.method public isClosed()Z
    .locals 1

    .line 107
    iget-boolean v0, p0, Lnet/sqlcipher/AbstractCursor;->mClosed:Z

    return v0
.end method

.method protected isFieldUpdated(I)Z
    .locals 2

    .line 530
    iget v0, p0, Lnet/sqlcipher/AbstractCursor;->mRowIdColumnIndex:I

    const/4 v1, -0x1

    if-eq v0, v1, :cond_0

    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mUpdatedRows:Ljava/util/HashMap;

    invoke-virtual {v0}, Ljava/util/HashMap;->size()I

    move-result v0

    if-lez v0, :cond_0

    .line 531
    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mUpdatedRows:Ljava/util/HashMap;

    iget-object v1, p0, Lnet/sqlcipher/AbstractCursor;->mCurrentRowID:Ljava/lang/Long;

    invoke-virtual {v0, v1}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/util/Map;

    if-eqz v0, :cond_0

    .line 532
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractCursor;->getColumnNames()[Ljava/lang/String;

    move-result-object v1

    aget-object p1, v1, p1

    invoke-interface {v0, p1}, Ljava/util/Map;->containsKey(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_0

    const/4 p1, 0x1

    return p1

    :cond_0
    const/4 p1, 0x0

    return p1
.end method

.method public final isFirst()Z
    .locals 1

    .line 238
    iget v0, p0, Lnet/sqlcipher/AbstractCursor;->mPos:I

    if-nez v0, :cond_0

    invoke-virtual {p0}, Lnet/sqlcipher/AbstractCursor;->getCount()I

    move-result v0

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public final isLast()Z
    .locals 3

    .line 242
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractCursor;->getCount()I

    move-result v0

    .line 243
    iget v1, p0, Lnet/sqlcipher/AbstractCursor;->mPos:I

    add-int/lit8 v2, v0, -0x1

    if-ne v1, v2, :cond_0

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public abstract isNull(I)Z
.end method

.method public final move(I)Z
    .locals 1

    .line 218
    iget v0, p0, Lnet/sqlcipher/AbstractCursor;->mPos:I

    add-int/2addr v0, p1

    invoke-virtual {p0, v0}, Lnet/sqlcipher/AbstractCursor;->moveToPosition(I)Z

    move-result p1

    return p1
.end method

.method public final moveToFirst()Z
    .locals 1

    const/4 v0, 0x0

    .line 222
    invoke-virtual {p0, v0}, Lnet/sqlcipher/AbstractCursor;->moveToPosition(I)Z

    move-result v0

    return v0
.end method

.method public final moveToLast()Z
    .locals 1

    .line 226
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractCursor;->getCount()I

    move-result v0

    add-int/lit8 v0, v0, -0x1

    invoke-virtual {p0, v0}, Lnet/sqlcipher/AbstractCursor;->moveToPosition(I)Z

    move-result v0

    return v0
.end method

.method public final moveToNext()Z
    .locals 1

    .line 230
    iget v0, p0, Lnet/sqlcipher/AbstractCursor;->mPos:I

    add-int/lit8 v0, v0, 0x1

    invoke-virtual {p0, v0}, Lnet/sqlcipher/AbstractCursor;->moveToPosition(I)Z

    move-result v0

    return v0
.end method

.method public final moveToPosition(I)Z
    .locals 4

    .line 178
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractCursor;->getCount()I

    move-result v0

    const/4 v1, 0x0

    if-lt p1, v0, :cond_0

    .line 180
    iput v0, p0, Lnet/sqlcipher/AbstractCursor;->mPos:I

    return v1

    :cond_0
    const/4 v0, -0x1

    if-gez p1, :cond_1

    .line 186
    iput v0, p0, Lnet/sqlcipher/AbstractCursor;->mPos:I

    return v1

    .line 191
    :cond_1
    iget v1, p0, Lnet/sqlcipher/AbstractCursor;->mPos:I

    if-ne p1, v1, :cond_2

    const/4 p1, 0x1

    return p1

    .line 195
    :cond_2
    invoke-virtual {p0, v1, p1}, Lnet/sqlcipher/AbstractCursor;->onMove(II)Z

    move-result v1

    if-nez v1, :cond_3

    .line 197
    iput v0, p0, Lnet/sqlcipher/AbstractCursor;->mPos:I

    goto :goto_0

    .line 199
    :cond_3
    iput p1, p0, Lnet/sqlcipher/AbstractCursor;->mPos:I

    .line 200
    iget p1, p0, Lnet/sqlcipher/AbstractCursor;->mRowIdColumnIndex:I

    if-eq p1, v0, :cond_4

    .line 201
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractCursor;->getLong(I)J

    move-result-wide v2

    invoke-static {v2, v3}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object p1

    iput-object p1, p0, Lnet/sqlcipher/AbstractCursor;->mCurrentRowID:Ljava/lang/Long;

    :cond_4
    :goto_0
    return v1
.end method

.method public final moveToPrevious()Z
    .locals 1

    .line 234
    iget v0, p0, Lnet/sqlcipher/AbstractCursor;->mPos:I

    add-int/lit8 v0, v0, -0x1

    invoke-virtual {p0, v0}, Lnet/sqlcipher/AbstractCursor;->moveToPosition(I)Z

    move-result v0

    return v0
.end method

.method protected notifyDataSetChange()V
    .locals 1

    .line 444
    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mDataSetObservable:Landroid/database/DataSetObservable;

    invoke-virtual {v0}, Landroid/database/DataSetObservable;->notifyChanged()V

    return-void
.end method

.method protected onChange(Z)V
    .locals 3

    .line 471
    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mSelfObserverLock:Ljava/lang/Object;

    monitor-enter v0

    .line 472
    :try_start_0
    iget-object v1, p0, Lnet/sqlcipher/AbstractCursor;->mContentObservable:Landroid/database/ContentObservable;

    invoke-virtual {v1, p1}, Landroid/database/ContentObservable;->dispatchChange(Z)V

    .line 473
    iget-object v1, p0, Lnet/sqlcipher/AbstractCursor;->mNotifyUri:Landroid/net/Uri;

    if-eqz v1, :cond_0

    if-eqz p1, :cond_0

    .line 474
    iget-object p1, p0, Lnet/sqlcipher/AbstractCursor;->mContentResolver:Landroid/content/ContentResolver;

    iget-object v2, p0, Lnet/sqlcipher/AbstractCursor;->mSelfObserver:Landroid/database/ContentObserver;

    invoke-virtual {p1, v1, v2}, Landroid/content/ContentResolver;->notifyChange(Landroid/net/Uri;Landroid/database/ContentObserver;)V

    .line 476
    :cond_0
    monitor-exit v0

    return-void

    :catchall_0
    move-exception p1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method

.method public onMove(II)Z
    .locals 0

    const/4 p1, 0x1

    return p1
.end method

.method public registerContentObserver(Landroid/database/ContentObserver;)V
    .locals 1

    .line 429
    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mContentObservable:Landroid/database/ContentObservable;

    invoke-virtual {v0, p1}, Landroid/database/ContentObservable;->registerObserver(Landroid/database/ContentObserver;)V

    return-void
.end method

.method public registerDataSetObserver(Landroid/database/DataSetObserver;)V
    .locals 1

    .line 456
    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mDataSetObservable:Landroid/database/DataSetObservable;

    invoke-virtual {v0, p1}, Landroid/database/DataSetObservable;->registerObserver(Ljava/lang/Object;)V

    return-void
.end method

.method public requery()Z
    .locals 4

    .line 97
    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mSelfObserver:Landroid/database/ContentObserver;

    const/4 v1, 0x1

    if-eqz v0, :cond_0

    iget-boolean v2, p0, Lnet/sqlcipher/AbstractCursor;->mSelfObserverRegistered:Z

    if-nez v2, :cond_0

    .line 99
    iget-object v2, p0, Lnet/sqlcipher/AbstractCursor;->mContentResolver:Landroid/content/ContentResolver;

    iget-object v3, p0, Lnet/sqlcipher/AbstractCursor;->mNotifyUri:Landroid/net/Uri;

    invoke-virtual {v2, v3, v1, v0}, Landroid/content/ContentResolver;->registerContentObserver(Landroid/net/Uri;ZLandroid/database/ContentObserver;)V

    .line 100
    iput-boolean v1, p0, Lnet/sqlcipher/AbstractCursor;->mSelfObserverRegistered:Z

    .line 102
    :cond_0
    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mDataSetObservable:Landroid/database/DataSetObservable;

    invoke-virtual {v0}, Landroid/database/DataSetObservable;->notifyChanged()V

    return v1
.end method

.method public respond(Landroid/os/Bundle;)Landroid/os/Bundle;
    .locals 0

    .line 516
    sget-object p1, Landroid/os/Bundle;->EMPTY:Landroid/os/Bundle;

    return-object p1
.end method

.method public setExtras(Landroid/os/Bundle;)V
    .locals 0

    if-nez p1, :cond_0

    .line 508
    sget-object p1, Landroid/os/Bundle;->EMPTY:Landroid/os/Bundle;

    :cond_0
    iput-object p1, p0, Lnet/sqlcipher/AbstractCursor;->mExtras:Landroid/os/Bundle;

    return-void
.end method

.method public setNotificationUri(Landroid/content/ContentResolver;Landroid/net/Uri;)V
    .locals 3

    .line 487
    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mSelfObserverLock:Ljava/lang/Object;

    monitor-enter v0

    .line 488
    :try_start_0
    iput-object p2, p0, Lnet/sqlcipher/AbstractCursor;->mNotifyUri:Landroid/net/Uri;

    .line 489
    iput-object p1, p0, Lnet/sqlcipher/AbstractCursor;->mContentResolver:Landroid/content/ContentResolver;

    .line 490
    iget-object p2, p0, Lnet/sqlcipher/AbstractCursor;->mSelfObserver:Landroid/database/ContentObserver;

    if-eqz p2, :cond_0

    .line 491
    invoke-virtual {p1, p2}, Landroid/content/ContentResolver;->unregisterContentObserver(Landroid/database/ContentObserver;)V

    .line 493
    :cond_0
    new-instance p1, Lnet/sqlcipher/AbstractCursor$SelfContentObserver;

    invoke-direct {p1, p0}, Lnet/sqlcipher/AbstractCursor$SelfContentObserver;-><init>(Lnet/sqlcipher/AbstractCursor;)V

    iput-object p1, p0, Lnet/sqlcipher/AbstractCursor;->mSelfObserver:Landroid/database/ContentObserver;

    .line 494
    iget-object p2, p0, Lnet/sqlcipher/AbstractCursor;->mContentResolver:Landroid/content/ContentResolver;

    iget-object v1, p0, Lnet/sqlcipher/AbstractCursor;->mNotifyUri:Landroid/net/Uri;

    const/4 v2, 0x1

    invoke-virtual {p2, v1, v2, p1}, Landroid/content/ContentResolver;->registerContentObserver(Landroid/net/Uri;ZLandroid/database/ContentObserver;)V

    .line 495
    iput-boolean v2, p0, Lnet/sqlcipher/AbstractCursor;->mSelfObserverRegistered:Z

    .line 496
    monitor-exit v0

    return-void

    :catchall_0
    move-exception p1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method

.method public supportsUpdates()Z
    .locals 2

    .line 425
    iget v0, p0, Lnet/sqlcipher/AbstractCursor;->mRowIdColumnIndex:I

    const/4 v1, -0x1

    if-eq v0, v1, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public unregisterContentObserver(Landroid/database/ContentObserver;)V
    .locals 1

    .line 434
    iget-boolean v0, p0, Lnet/sqlcipher/AbstractCursor;->mClosed:Z

    if-nez v0, :cond_0

    .line 435
    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mContentObservable:Landroid/database/ContentObservable;

    invoke-virtual {v0, p1}, Landroid/database/ContentObservable;->unregisterObserver(Ljava/lang/Object;)V

    :cond_0
    return-void
.end method

.method public unregisterDataSetObserver(Landroid/database/DataSetObserver;)V
    .locals 1

    .line 461
    iget-object v0, p0, Lnet/sqlcipher/AbstractCursor;->mDataSetObservable:Landroid/database/DataSetObservable;

    invoke-virtual {v0, p1}, Landroid/database/DataSetObservable;->unregisterObserver(Ljava/lang/Object;)V

    return-void
.end method

.method public update(ILjava/lang/Object;)Z
    .locals 4

    .line 366
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractCursor;->supportsUpdates()Z

    move-result v0

    if-nez v0, :cond_0

    const/4 p1, 0x0

    return p1

    .line 372
    :cond_0
    iget v0, p0, Lnet/sqlcipher/AbstractCursor;->mRowIdColumnIndex:I

    invoke-virtual {p0, v0}, Lnet/sqlcipher/AbstractCursor;->getLong(I)J

    move-result-wide v0

    invoke-static {v0, v1}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object v0

    if-eqz v0, :cond_2

    .line 377
    iget-object v1, p0, Lnet/sqlcipher/AbstractCursor;->mUpdatedRows:Ljava/util/HashMap;

    monitor-enter v1

    .line 378
    :try_start_0
    iget-object v2, p0, Lnet/sqlcipher/AbstractCursor;->mUpdatedRows:Ljava/util/HashMap;

    invoke-virtual {v2, v0}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/util/Map;

    if-nez v2, :cond_1

    .line 380
    new-instance v2, Ljava/util/HashMap;

    invoke-direct {v2}, Ljava/util/HashMap;-><init>()V

    .line 381
    iget-object v3, p0, Lnet/sqlcipher/AbstractCursor;->mUpdatedRows:Ljava/util/HashMap;

    invoke-virtual {v3, v0, v2}, Ljava/util/HashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 383
    :cond_1
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractCursor;->getColumnNames()[Ljava/lang/String;

    move-result-object v0

    aget-object p1, v0, p1

    invoke-interface {v2, p1, p2}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 384
    monitor-exit v1

    const/4 p1, 0x1

    return p1

    :catchall_0
    move-exception p1

    monitor-exit v1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1

    .line 374
    :cond_2
    new-instance p1, Ljava/lang/IllegalStateException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v0, "null rowid. mRowIdColumnIndex = "

    invoke-direct {p2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget v0, p0, Lnet/sqlcipher/AbstractCursor;->mRowIdColumnIndex:I

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public updateBlob(I[B)Z
    .locals 0

    .line 302
    invoke-virtual {p0, p1, p2}, Lnet/sqlcipher/AbstractCursor;->update(ILjava/lang/Object;)Z

    move-result p1

    return p1
.end method

.method public updateDouble(ID)Z
    .locals 0

    .line 350
    invoke-static {p2, p3}, Ljava/lang/Double;->valueOf(D)Ljava/lang/Double;

    move-result-object p2

    invoke-virtual {p0, p1, p2}, Lnet/sqlcipher/AbstractCursor;->update(ILjava/lang/Object;)Z

    move-result p1

    return p1
.end method

.method public updateFloat(IF)Z
    .locals 0

    .line 342
    invoke-static {p2}, Ljava/lang/Float;->valueOf(F)Ljava/lang/Float;

    move-result-object p2

    invoke-virtual {p0, p1, p2}, Lnet/sqlcipher/AbstractCursor;->update(ILjava/lang/Object;)Z

    move-result p1

    return p1
.end method

.method public updateInt(II)Z
    .locals 0

    .line 326
    invoke-static {p2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p2

    invoke-virtual {p0, p1, p2}, Lnet/sqlcipher/AbstractCursor;->update(ILjava/lang/Object;)Z

    move-result p1

    return p1
.end method

.method public updateLong(IJ)Z
    .locals 0

    .line 334
    invoke-static {p2, p3}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object p2

    invoke-virtual {p0, p1, p2}, Lnet/sqlcipher/AbstractCursor;->update(ILjava/lang/Object;)Z

    move-result p1

    return p1
.end method

.method public updateShort(IS)Z
    .locals 0

    .line 318
    invoke-static {p2}, Ljava/lang/Short;->valueOf(S)Ljava/lang/Short;

    move-result-object p2

    invoke-virtual {p0, p1, p2}, Lnet/sqlcipher/AbstractCursor;->update(ILjava/lang/Object;)Z

    move-result p1

    return p1
.end method

.method public updateString(ILjava/lang/String;)Z
    .locals 0

    .line 310
    invoke-virtual {p0, p1, p2}, Lnet/sqlcipher/AbstractCursor;->update(ILjava/lang/Object;)Z

    move-result p1

    return p1
.end method

.method public updateToNull(I)Z
    .locals 1

    const/4 v0, 0x0

    .line 358
    invoke-virtual {p0, p1, v0}, Lnet/sqlcipher/AbstractCursor;->update(ILjava/lang/Object;)Z

    move-result p1

    return p1
.end method
