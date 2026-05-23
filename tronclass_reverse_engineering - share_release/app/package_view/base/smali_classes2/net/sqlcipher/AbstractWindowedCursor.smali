.class public abstract Lnet/sqlcipher/AbstractWindowedCursor;
.super Lnet/sqlcipher/AbstractCursor;
.source "AbstractWindowedCursor.java"


# instance fields
.field protected mWindow:Lnet/sqlcipher/CursorWindow;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 24
    invoke-direct {p0}, Lnet/sqlcipher/AbstractCursor;-><init>()V

    return-void
.end method


# virtual methods
.method protected checkPosition()V
    .locals 2

    .line 222
    invoke-super {p0}, Lnet/sqlcipher/AbstractCursor;->checkPosition()V

    .line 224
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mWindow:Lnet/sqlcipher/CursorWindow;

    if-eqz v0, :cond_0

    return-void

    .line 225
    :cond_0
    new-instance v0, Lnet/sqlcipher/StaleDataException;

    const-string v1, "Access closed cursor"

    invoke-direct {v0, v1}, Lnet/sqlcipher/StaleDataException;-><init>(Ljava/lang/String;)V

    throw v0
.end method

.method public copyStringToBuffer(ILandroid/database/CharArrayBuffer;)V
    .locals 2

    .line 57
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractWindowedCursor;->checkPosition()V

    .line 59
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mUpdatedRows:Ljava/util/HashMap;

    monitor-enter v0

    .line 60
    :try_start_0
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->isFieldUpdated(I)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 61
    invoke-super {p0, p1, p2}, Lnet/sqlcipher/AbstractCursor;->copyStringToBuffer(ILandroid/database/CharArrayBuffer;)V

    .line 63
    :cond_0
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 65
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mWindow:Lnet/sqlcipher/CursorWindow;

    iget v1, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mPos:I

    invoke-virtual {v0, v1, p1, p2}, Lnet/sqlcipher/CursorWindow;->copyStringToBuffer(IILandroid/database/CharArrayBuffer;)V

    return-void

    :catchall_0
    move-exception p1

    .line 63
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method public getBlob(I)[B
    .locals 2

    .line 29
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractWindowedCursor;->checkPosition()V

    .line 31
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mUpdatedRows:Ljava/util/HashMap;

    monitor-enter v0

    .line 32
    :try_start_0
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->isFieldUpdated(I)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 33
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->getUpdatedField(I)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [B

    check-cast p1, [B

    monitor-exit v0

    return-object p1

    .line 35
    :cond_0
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 37
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mWindow:Lnet/sqlcipher/CursorWindow;

    iget v1, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mPos:I

    invoke-virtual {v0, v1, p1}, Lnet/sqlcipher/CursorWindow;->getBlob(II)[B

    move-result-object p1

    return-object p1

    :catchall_0
    move-exception p1

    .line 35
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method public getDouble(I)D
    .locals 3

    .line 131
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractWindowedCursor;->checkPosition()V

    .line 133
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mUpdatedRows:Ljava/util/HashMap;

    monitor-enter v0

    .line 134
    :try_start_0
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->isFieldUpdated(I)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 135
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->getUpdatedField(I)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/lang/Number;

    .line 136
    invoke-virtual {p1}, Ljava/lang/Number;->doubleValue()D

    move-result-wide v1

    monitor-exit v0

    return-wide v1

    .line 138
    :cond_0
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 140
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mWindow:Lnet/sqlcipher/CursorWindow;

    iget v1, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mPos:I

    invoke-virtual {v0, v1, p1}, Lnet/sqlcipher/CursorWindow;->getDouble(II)D

    move-result-wide v0

    return-wide v0

    :catchall_0
    move-exception p1

    .line 138
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method public getFloat(I)F
    .locals 2

    .line 116
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractWindowedCursor;->checkPosition()V

    .line 118
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mUpdatedRows:Ljava/util/HashMap;

    monitor-enter v0

    .line 119
    :try_start_0
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->isFieldUpdated(I)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 120
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->getUpdatedField(I)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/lang/Number;

    .line 121
    invoke-virtual {p1}, Ljava/lang/Number;->floatValue()F

    move-result p1

    monitor-exit v0

    return p1

    .line 123
    :cond_0
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 125
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mWindow:Lnet/sqlcipher/CursorWindow;

    iget v1, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mPos:I

    invoke-virtual {v0, v1, p1}, Lnet/sqlcipher/CursorWindow;->getFloat(II)F

    move-result p1

    return p1

    :catchall_0
    move-exception p1

    .line 123
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method public getInt(I)I
    .locals 2

    .line 86
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractWindowedCursor;->checkPosition()V

    .line 88
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mUpdatedRows:Ljava/util/HashMap;

    monitor-enter v0

    .line 89
    :try_start_0
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->isFieldUpdated(I)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 90
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->getUpdatedField(I)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/lang/Number;

    .line 91
    invoke-virtual {p1}, Ljava/lang/Number;->intValue()I

    move-result p1

    monitor-exit v0

    return p1

    .line 93
    :cond_0
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 95
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mWindow:Lnet/sqlcipher/CursorWindow;

    iget v1, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mPos:I

    invoke-virtual {v0, v1, p1}, Lnet/sqlcipher/CursorWindow;->getInt(II)I

    move-result p1

    return p1

    :catchall_0
    move-exception p1

    .line 93
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method public getLong(I)J
    .locals 3

    .line 101
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractWindowedCursor;->checkPosition()V

    .line 103
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mUpdatedRows:Ljava/util/HashMap;

    monitor-enter v0

    .line 104
    :try_start_0
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->isFieldUpdated(I)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 105
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->getUpdatedField(I)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/lang/Number;

    .line 106
    invoke-virtual {p1}, Ljava/lang/Number;->longValue()J

    move-result-wide v1

    monitor-exit v0

    return-wide v1

    .line 108
    :cond_0
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 110
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mWindow:Lnet/sqlcipher/CursorWindow;

    iget v1, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mPos:I

    invoke-virtual {v0, v1, p1}, Lnet/sqlcipher/CursorWindow;->getLong(II)J

    move-result-wide v0

    return-wide v0

    :catchall_0
    move-exception p1

    .line 108
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method public getShort(I)S
    .locals 2

    .line 71
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractWindowedCursor;->checkPosition()V

    .line 73
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mUpdatedRows:Ljava/util/HashMap;

    monitor-enter v0

    .line 74
    :try_start_0
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->isFieldUpdated(I)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 75
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->getUpdatedField(I)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/lang/Number;

    .line 76
    invoke-virtual {p1}, Ljava/lang/Number;->shortValue()S

    move-result p1

    monitor-exit v0

    return p1

    .line 78
    :cond_0
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 80
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mWindow:Lnet/sqlcipher/CursorWindow;

    iget v1, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mPos:I

    invoke-virtual {v0, v1, p1}, Lnet/sqlcipher/CursorWindow;->getShort(II)S

    move-result p1

    return p1

    :catchall_0
    move-exception p1

    .line 78
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method public getString(I)Ljava/lang/String;
    .locals 2

    .line 43
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractWindowedCursor;->checkPosition()V

    .line 45
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mUpdatedRows:Ljava/util/HashMap;

    monitor-enter v0

    .line 46
    :try_start_0
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->isFieldUpdated(I)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 47
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->getUpdatedField(I)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/lang/String;

    monitor-exit v0

    return-object p1

    .line 49
    :cond_0
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 51
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mWindow:Lnet/sqlcipher/CursorWindow;

    iget v1, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mPos:I

    invoke-virtual {v0, v1, p1}, Lnet/sqlcipher/CursorWindow;->getString(II)Ljava/lang/String;

    move-result-object p1

    return-object p1

    :catchall_0
    move-exception p1

    .line 49
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method public getType(I)I
    .locals 2

    .line 215
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractWindowedCursor;->checkPosition()V

    .line 216
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mWindow:Lnet/sqlcipher/CursorWindow;

    iget v1, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mPos:I

    invoke-virtual {v0, v1, p1}, Lnet/sqlcipher/CursorWindow;->getType(II)I

    move-result p1

    return p1
.end method

.method public bridge synthetic getWindow()Landroid/database/CursorWindow;
    .locals 1

    .line 24
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractWindowedCursor;->getWindow()Lnet/sqlcipher/CursorWindow;

    move-result-object v0

    return-object v0
.end method

.method public getWindow()Lnet/sqlcipher/CursorWindow;
    .locals 1

    .line 231
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mWindow:Lnet/sqlcipher/CursorWindow;

    return-object v0
.end method

.method public hasWindow()Z
    .locals 1

    .line 246
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mWindow:Lnet/sqlcipher/CursorWindow;

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public isBlob(I)Z
    .locals 2

    .line 159
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractWindowedCursor;->checkPosition()V

    .line 161
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mUpdatedRows:Ljava/util/HashMap;

    monitor-enter v0

    .line 162
    :try_start_0
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->isFieldUpdated(I)Z

    move-result v1

    if-eqz v1, :cond_2

    .line 163
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->getUpdatedField(I)Ljava/lang/Object;

    move-result-object p1

    if-eqz p1, :cond_1

    .line 164
    instance-of p1, p1, [B

    if-eqz p1, :cond_0

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 p1, 0x1

    :goto_1
    monitor-exit v0

    return p1

    .line 166
    :cond_2
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 168
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mWindow:Lnet/sqlcipher/CursorWindow;

    iget v1, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mPos:I

    invoke-virtual {v0, v1, p1}, Lnet/sqlcipher/CursorWindow;->isBlob(II)Z

    move-result p1

    return p1

    :catchall_0
    move-exception p1

    .line 166
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method public isFloat(I)Z
    .locals 2

    .line 201
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractWindowedCursor;->checkPosition()V

    .line 203
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mUpdatedRows:Ljava/util/HashMap;

    monitor-enter v0

    .line 204
    :try_start_0
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->isFieldUpdated(I)Z

    move-result v1

    if-eqz v1, :cond_2

    .line 205
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->getUpdatedField(I)Ljava/lang/Object;

    move-result-object p1

    if-eqz p1, :cond_1

    .line 206
    instance-of v1, p1, Ljava/lang/Float;

    if-nez v1, :cond_0

    instance-of p1, p1, Ljava/lang/Double;

    if-eqz p1, :cond_1

    :cond_0
    const/4 p1, 0x1

    goto :goto_0

    :cond_1
    const/4 p1, 0x0

    :goto_0
    monitor-exit v0

    return p1

    .line 208
    :cond_2
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 210
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mWindow:Lnet/sqlcipher/CursorWindow;

    iget v1, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mPos:I

    invoke-virtual {v0, v1, p1}, Lnet/sqlcipher/CursorWindow;->isFloat(II)Z

    move-result p1

    return p1

    :catchall_0
    move-exception p1

    .line 208
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method public isLong(I)Z
    .locals 2

    .line 187
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractWindowedCursor;->checkPosition()V

    .line 189
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mUpdatedRows:Ljava/util/HashMap;

    monitor-enter v0

    .line 190
    :try_start_0
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->isFieldUpdated(I)Z

    move-result v1

    if-eqz v1, :cond_2

    .line 191
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->getUpdatedField(I)Ljava/lang/Object;

    move-result-object p1

    if-eqz p1, :cond_1

    .line 192
    instance-of v1, p1, Ljava/lang/Integer;

    if-nez v1, :cond_0

    instance-of p1, p1, Ljava/lang/Long;

    if-eqz p1, :cond_1

    :cond_0
    const/4 p1, 0x1

    goto :goto_0

    :cond_1
    const/4 p1, 0x0

    :goto_0
    monitor-exit v0

    return p1

    .line 194
    :cond_2
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 196
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mWindow:Lnet/sqlcipher/CursorWindow;

    iget v1, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mPos:I

    invoke-virtual {v0, v1, p1}, Lnet/sqlcipher/CursorWindow;->isLong(II)Z

    move-result p1

    return p1

    :catchall_0
    move-exception p1

    .line 194
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method public isNull(I)Z
    .locals 2

    .line 146
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractWindowedCursor;->checkPosition()V

    .line 148
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mUpdatedRows:Ljava/util/HashMap;

    monitor-enter v0

    .line 149
    :try_start_0
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->isFieldUpdated(I)Z

    move-result v1

    if-eqz v1, :cond_1

    .line 150
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->getUpdatedField(I)Ljava/lang/Object;

    move-result-object p1

    if-nez p1, :cond_0

    const/4 p1, 0x1

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    :goto_0
    monitor-exit v0

    return p1

    .line 152
    :cond_1
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 154
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mWindow:Lnet/sqlcipher/CursorWindow;

    iget v1, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mPos:I

    invoke-virtual {v0, v1, p1}, Lnet/sqlcipher/CursorWindow;->isNull(II)Z

    move-result p1

    return p1

    :catchall_0
    move-exception p1

    .line 152
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method public isString(I)Z
    .locals 2

    .line 173
    invoke-virtual {p0}, Lnet/sqlcipher/AbstractWindowedCursor;->checkPosition()V

    .line 175
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mUpdatedRows:Ljava/util/HashMap;

    monitor-enter v0

    .line 176
    :try_start_0
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->isFieldUpdated(I)Z

    move-result v1

    if-eqz v1, :cond_2

    .line 177
    invoke-virtual {p0, p1}, Lnet/sqlcipher/AbstractWindowedCursor;->getUpdatedField(I)Ljava/lang/Object;

    move-result-object p1

    if-eqz p1, :cond_1

    .line 178
    instance-of p1, p1, Ljava/lang/String;

    if-eqz p1, :cond_0

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 p1, 0x1

    :goto_1
    monitor-exit v0

    return p1

    .line 180
    :cond_2
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 182
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mWindow:Lnet/sqlcipher/CursorWindow;

    iget v1, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mPos:I

    invoke-virtual {v0, v1, p1}, Lnet/sqlcipher/CursorWindow;->isString(II)Z

    move-result p1

    return p1

    :catchall_0
    move-exception p1

    .line 180
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method public setWindow(Lnet/sqlcipher/CursorWindow;)V
    .locals 1

    .line 239
    iget-object v0, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mWindow:Lnet/sqlcipher/CursorWindow;

    if-eqz v0, :cond_0

    .line 240
    invoke-virtual {v0}, Lnet/sqlcipher/CursorWindow;->close()V

    .line 242
    :cond_0
    iput-object p1, p0, Lnet/sqlcipher/AbstractWindowedCursor;->mWindow:Lnet/sqlcipher/CursorWindow;

    return-void
.end method
