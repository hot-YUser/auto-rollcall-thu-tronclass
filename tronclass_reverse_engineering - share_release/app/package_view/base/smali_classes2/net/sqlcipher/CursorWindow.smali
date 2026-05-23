.class public Lnet/sqlcipher/CursorWindow;
.super Landroid/database/CursorWindow;
.source "CursorWindow.java"

# interfaces
.implements Landroid/os/Parcelable;


# static fields
.field public static final CREATOR:Landroid/os/Parcelable$Creator;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroid/os/Parcelable$Creator<",
            "Lnet/sqlcipher/CursorWindow;",
            ">;"
        }
    .end annotation
.end field

.field private static allocation:Lnet/sqlcipher/CursorWindowAllocation;


# instance fields
.field private mRequiredPos:I

.field private mStartPos:I

.field private nWindow:J


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 51
    new-instance v0, Lnet/sqlcipher/DefaultCursorWindowAllocation;

    invoke-direct {v0}, Lnet/sqlcipher/DefaultCursorWindowAllocation;-><init>()V

    sput-object v0, Lnet/sqlcipher/CursorWindow;->allocation:Lnet/sqlcipher/CursorWindowAllocation;

    .line 612
    new-instance v0, Lnet/sqlcipher/CursorWindow$1;

    invoke-direct {v0}, Lnet/sqlcipher/CursorWindow$1;-><init>()V

    sput-object v0, Lnet/sqlcipher/CursorWindow;->CREATOR:Landroid/os/Parcelable$Creator;

    return-void
.end method

.method public constructor <init>(Landroid/os/Parcel;I)V
    .locals 0

    const/4 p2, 0x1

    .line 638
    invoke-direct {p0, p2}, Landroid/database/CursorWindow;-><init>(Z)V

    .line 640
    invoke-virtual {p1}, Landroid/os/Parcel;->readStrongBinder()Landroid/os/IBinder;

    move-result-object p2

    .line 641
    invoke-virtual {p1}, Landroid/os/Parcel;->readInt()I

    move-result p1

    iput p1, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    .line 643
    invoke-direct {p0, p2}, Lnet/sqlcipher/CursorWindow;->native_init(Landroid/os/IBinder;)V

    return-void
.end method

.method public constructor <init>(Z)V
    .locals 9

    .line 67
    invoke-direct {p0, p1}, Landroid/database/CursorWindow;-><init>(Z)V

    const/4 v0, 0x0

    .line 68
    iput v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    .line 69
    sget-object v0, Lnet/sqlcipher/CursorWindow;->allocation:Lnet/sqlcipher/CursorWindowAllocation;

    if-nez v0, :cond_0

    .line 70
    new-instance v0, Lnet/sqlcipher/DefaultCursorWindowAllocation;

    invoke-direct {v0}, Lnet/sqlcipher/DefaultCursorWindowAllocation;-><init>()V

    sput-object v0, Lnet/sqlcipher/CursorWindow;->allocation:Lnet/sqlcipher/CursorWindowAllocation;

    .line 72
    :cond_0
    sget-object v0, Lnet/sqlcipher/CursorWindow;->allocation:Lnet/sqlcipher/CursorWindowAllocation;

    .line 73
    invoke-interface {v0}, Lnet/sqlcipher/CursorWindowAllocation;->getInitialAllocationSize()J

    move-result-wide v3

    sget-object v0, Lnet/sqlcipher/CursorWindow;->allocation:Lnet/sqlcipher/CursorWindowAllocation;

    .line 74
    invoke-interface {v0}, Lnet/sqlcipher/CursorWindowAllocation;->getGrowthPaddingSize()J

    move-result-wide v5

    sget-object v0, Lnet/sqlcipher/CursorWindow;->allocation:Lnet/sqlcipher/CursorWindowAllocation;

    .line 75
    invoke-interface {v0}, Lnet/sqlcipher/CursorWindowAllocation;->getMaxAllocationSize()J

    move-result-wide v7

    move-object v1, p0

    move v2, p1

    .line 72
    invoke-direct/range {v1 .. v8}, Lnet/sqlcipher/CursorWindow;->native_init(ZJJJ)V

    return-void
.end method

.method private native allocRow_native()Z
.end method

.method private native close_native()V
.end method

.method private native copyStringToBuffer_native(IIILandroid/database/CharArrayBuffer;)[C
.end method

.method private native freeLastRow_native()V
.end method

.method private native getBlob_native(II)[B
.end method

.method public static getCursorWindowAllocation()Lnet/sqlcipher/CursorWindowAllocation;
    .locals 1

    .line 58
    sget-object v0, Lnet/sqlcipher/CursorWindow;->allocation:Lnet/sqlcipher/CursorWindowAllocation;

    return-object v0
.end method

.method private native getDouble_native(II)D
.end method

.method private native getLong_native(II)J
.end method

.method private native getNumRows_native()I
.end method

.method private native getString_native(II)Ljava/lang/String;
.end method

.method private native getType_native(II)I
.end method

.method private native isBlob_native(II)Z
.end method

.method private native isFloat_native(II)Z
.end method

.method private native isInteger_native(II)Z
.end method

.method private native isNull_native(II)Z
.end method

.method private native isString_native(II)Z
.end method

.method private native native_clear()V
.end method

.method private native native_getBinder()Landroid/os/IBinder;
.end method

.method private native native_init(Landroid/os/IBinder;)V
.end method

.method private native native_init(ZJJJ)V
.end method

.method public static newFromParcel(Landroid/os/Parcel;)Lnet/sqlcipher/CursorWindow;
    .locals 1

    .line 624
    sget-object v0, Lnet/sqlcipher/CursorWindow;->CREATOR:Landroid/os/Parcelable$Creator;

    invoke-interface {v0, p0}, Landroid/os/Parcelable$Creator;->createFromParcel(Landroid/os/Parcel;)Ljava/lang/Object;

    move-result-object p0

    check-cast p0, Lnet/sqlcipher/CursorWindow;

    return-object p0
.end method

.method private native putBlob_native([BII)Z
.end method

.method private native putDouble_native(DII)Z
.end method

.method private native putLong_native(JII)Z
.end method

.method private native putNull_native(II)Z
.end method

.method private native putString_native(Ljava/lang/String;II)Z
.end method

.method public static setCursorWindowAllocation(Lnet/sqlcipher/CursorWindowAllocation;)V
    .locals 0

    .line 54
    sput-object p0, Lnet/sqlcipher/CursorWindow;->allocation:Lnet/sqlcipher/CursorWindowAllocation;

    return-void
.end method

.method private native setNumColumns_native(I)Z
.end method


# virtual methods
.method public allocRow()Z
    .locals 1

    .line 141
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 143
    :try_start_0
    invoke-direct {p0}, Lnet/sqlcipher/CursorWindow;->allocRow_native()Z

    move-result v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 145
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return v0

    :catchall_0
    move-exception v0

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 146
    throw v0
.end method

.method public clear()V
    .locals 1

    .line 582
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    const/4 v0, 0x0

    .line 584
    :try_start_0
    iput v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    .line 585
    invoke-direct {p0}, Lnet/sqlcipher/CursorWindow;->native_clear()V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 587
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return-void

    :catchall_0
    move-exception v0

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 588
    throw v0
.end method

.method public close()V
    .locals 0

    .line 598
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return-void
.end method

.method public copyStringToBuffer(IILandroid/database/CharArrayBuffer;)V
    .locals 1

    if-eqz p3, :cond_2

    .line 448
    iget-object v0, p3, Landroid/database/CharArrayBuffer;->data:[C

    if-nez v0, :cond_0

    const/16 v0, 0x40

    .line 449
    new-array v0, v0, [C

    iput-object v0, p3, Landroid/database/CharArrayBuffer;->data:[C

    .line 451
    :cond_0
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 453
    :try_start_0
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    sub-int/2addr p1, v0

    iget-object v0, p3, Landroid/database/CharArrayBuffer;->data:[C

    array-length v0, v0

    invoke-direct {p0, p1, p2, v0, p3}, Lnet/sqlcipher/CursorWindow;->copyStringToBuffer_native(IIILandroid/database/CharArrayBuffer;)[C

    move-result-object p1

    if-eqz p1, :cond_1

    .line 456
    iput-object p1, p3, Landroid/database/CharArrayBuffer;->data:[C
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 459
    :cond_1
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return-void

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 460
    throw p1

    .line 446
    :cond_2
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string p2, "CharArrayBuffer should not be null"

    invoke-direct {p1, p2}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public describeContents()I
    .locals 1

    const/4 v0, 0x0

    return v0
.end method

.method protected finalize()V
    .locals 4

    .line 606
    iget-wide v0, p0, Lnet/sqlcipher/CursorWindow;->nWindow:J

    const-wide/16 v2, 0x0

    cmp-long v0, v0, v2

    if-nez v0, :cond_0

    return-void

    .line 609
    :cond_0
    invoke-direct {p0}, Lnet/sqlcipher/CursorWindow;->close_native()V

    return-void
.end method

.method public freeLastRow()V
    .locals 1

    .line 155
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 157
    :try_start_0
    invoke-direct {p0}, Lnet/sqlcipher/CursorWindow;->freeLastRow_native()V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 159
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return-void

    :catchall_0
    move-exception v0

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 160
    throw v0
.end method

.method public getBlob(II)[B
    .locals 1

    .line 282
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 284
    :try_start_0
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    sub-int/2addr p1, v0

    invoke-direct {p0, p1, p2}, Lnet/sqlcipher/CursorWindow;->getBlob_native(II)[B

    move-result-object p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 286
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return-object p1

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 287
    throw p1
.end method

.method public getDouble(II)D
    .locals 1

    .line 505
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 507
    :try_start_0
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    sub-int/2addr p1, v0

    invoke-direct {p0, p1, p2}, Lnet/sqlcipher/CursorWindow;->getDouble_native(II)D

    move-result-wide p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 509
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return-wide p1

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 510
    throw p1
.end method

.method public getFloat(II)F
    .locals 1

    .line 568
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 570
    :try_start_0
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    sub-int/2addr p1, v0

    invoke-direct {p0, p1, p2}, Lnet/sqlcipher/CursorWindow;->getDouble_native(II)D

    move-result-wide p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    double-to-float p1, p1

    .line 572
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return p1

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 573
    throw p1
.end method

.method public getInt(II)I
    .locals 1

    .line 551
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 553
    :try_start_0
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    sub-int/2addr p1, v0

    invoke-direct {p0, p1, p2}, Lnet/sqlcipher/CursorWindow;->getLong_native(II)J

    move-result-wide p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    long-to-int p1, p1

    .line 555
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return p1

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 556
    throw p1
.end method

.method public getLong(II)J
    .locals 1

    .line 475
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 477
    :try_start_0
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    sub-int/2addr p1, v0

    invoke-direct {p0, p1, p2}, Lnet/sqlcipher/CursorWindow;->getLong_native(II)J

    move-result-wide p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 479
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return-wide p1

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 480
    throw p1
.end method

.method public getNumRows()I
    .locals 1

    .line 111
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 113
    :try_start_0
    invoke-direct {p0}, Lnet/sqlcipher/CursorWindow;->getNumRows_native()I

    move-result v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 115
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return v0

    :catchall_0
    move-exception v0

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 116
    throw v0
.end method

.method public getRequiredPosition()I
    .locals 1

    .line 98
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mRequiredPos:I

    return v0
.end method

.method public getShort(II)S
    .locals 1

    .line 535
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 537
    :try_start_0
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    sub-int/2addr p1, v0

    invoke-direct {p0, p1, p2}, Lnet/sqlcipher/CursorWindow;->getLong_native(II)J

    move-result-wide p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    long-to-int p1, p1

    int-to-short p1, p1

    .line 539
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return p1

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 540
    throw p1
.end method

.method public getStartPosition()I
    .locals 1

    .line 86
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    return v0
.end method

.method public getString(II)Ljava/lang/String;
    .locals 1

    .line 410
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 412
    :try_start_0
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    sub-int/2addr p1, v0

    invoke-direct {p0, p1, p2}, Lnet/sqlcipher/CursorWindow;->getString_native(II)Ljava/lang/String;

    move-result-object p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 414
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return-object p1

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 415
    throw p1
.end method

.method public getType(II)I
    .locals 1

    .line 319
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 321
    :try_start_0
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    sub-int/2addr p1, v0

    invoke-direct {p0, p1, p2}, Lnet/sqlcipher/CursorWindow;->getType_native(II)I

    move-result p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 323
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return p1

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 324
    throw p1
.end method

.method public isBlob(II)Z
    .locals 1

    .line 336
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 338
    :try_start_0
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    sub-int/2addr p1, v0

    invoke-direct {p0, p1, p2}, Lnet/sqlcipher/CursorWindow;->isBlob_native(II)Z

    move-result p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 340
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return p1

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 341
    throw p1
.end method

.method public isFloat(II)Z
    .locals 1

    .line 370
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 372
    :try_start_0
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    sub-int/2addr p1, v0

    invoke-direct {p0, p1, p2}, Lnet/sqlcipher/CursorWindow;->isFloat_native(II)Z

    move-result p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 374
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return p1

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 375
    throw p1
.end method

.method public isLong(II)Z
    .locals 1

    .line 353
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 355
    :try_start_0
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    sub-int/2addr p1, v0

    invoke-direct {p0, p1, p2}, Lnet/sqlcipher/CursorWindow;->isInteger_native(II)Z

    move-result p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 357
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return p1

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 358
    throw p1
.end method

.method public isNull(II)Z
    .locals 1

    .line 264
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 266
    :try_start_0
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    sub-int/2addr p1, v0

    invoke-direct {p0, p1, p2}, Lnet/sqlcipher/CursorWindow;->isNull_native(II)Z

    move-result p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 268
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return p1

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 269
    throw p1
.end method

.method public isString(II)Z
    .locals 1

    .line 387
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 389
    :try_start_0
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    sub-int/2addr p1, v0

    invoke-direct {p0, p1, p2}, Lnet/sqlcipher/CursorWindow;->isString_native(II)Z

    move-result p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 391
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return p1

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 392
    throw p1
.end method

.method protected onAllReferencesReleased()V
    .locals 0

    .line 658
    invoke-direct {p0}, Lnet/sqlcipher/CursorWindow;->close_native()V

    .line 660
    invoke-super {p0}, Landroid/database/CursorWindow;->onAllReferencesReleased()V

    return-void
.end method

.method public putBlob([BII)Z
    .locals 1

    .line 173
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 175
    :try_start_0
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    sub-int/2addr p2, v0

    invoke-direct {p0, p1, p2, p3}, Lnet/sqlcipher/CursorWindow;->putBlob_native([BII)Z

    move-result p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 177
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return p1

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 178
    throw p1
.end method

.method public putDouble(DII)Z
    .locals 1

    .line 228
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 230
    :try_start_0
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    sub-int/2addr p3, v0

    invoke-direct {p0, p1, p2, p3, p4}, Lnet/sqlcipher/CursorWindow;->putDouble_native(DII)Z

    move-result p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 232
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return p1

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 233
    throw p1
.end method

.method public putLong(JII)Z
    .locals 1

    .line 209
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 211
    :try_start_0
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    sub-int/2addr p3, v0

    invoke-direct {p0, p1, p2, p3, p4}, Lnet/sqlcipher/CursorWindow;->putLong_native(JII)Z

    move-result p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 213
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return p1

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 214
    throw p1
.end method

.method public putNull(II)Z
    .locals 1

    .line 245
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 247
    :try_start_0
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    sub-int/2addr p1, v0

    invoke-direct {p0, p1, p2}, Lnet/sqlcipher/CursorWindow;->putNull_native(II)Z

    move-result p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 249
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return p1

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 250
    throw p1
.end method

.method public putString(Ljava/lang/String;II)Z
    .locals 1

    .line 191
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 193
    :try_start_0
    iget v0, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    sub-int/2addr p2, v0

    invoke-direct {p0, p1, p2, p3}, Lnet/sqlcipher/CursorWindow;->putString_native(Ljava/lang/String;II)Z

    move-result p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 195
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return p1

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 196
    throw p1
.end method

.method public setNumColumns(I)Z
    .locals 0

    .line 126
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->acquireReference()V

    .line 128
    :try_start_0
    invoke-direct {p0, p1}, Lnet/sqlcipher/CursorWindow;->setNumColumns_native(I)Z

    move-result p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 130
    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    return p1

    :catchall_0
    move-exception p1

    invoke-virtual {p0}, Lnet/sqlcipher/CursorWindow;->releaseReference()V

    .line 131
    throw p1
.end method

.method public setRequiredPosition(I)V
    .locals 0

    .line 102
    iput p1, p0, Lnet/sqlcipher/CursorWindow;->mRequiredPos:I

    return-void
.end method

.method public setStartPosition(I)V
    .locals 0

    .line 94
    iput p1, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    return-void
.end method

.method public writeToParcel(Landroid/os/Parcel;I)V
    .locals 0

    .line 632
    invoke-direct {p0}, Lnet/sqlcipher/CursorWindow;->native_getBinder()Landroid/os/IBinder;

    move-result-object p2

    invoke-virtual {p1, p2}, Landroid/os/Parcel;->writeStrongBinder(Landroid/os/IBinder;)V

    .line 633
    iget p2, p0, Lnet/sqlcipher/CursorWindow;->mStartPos:I

    invoke-virtual {p1, p2}, Landroid/os/Parcel;->writeInt(I)V

    return-void
.end method
