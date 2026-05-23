.class public Landroidx/camera/core/impl/RestrictedCameraControl;
.super Landroidx/camera/core/impl/ForwardingCameraControl;
.source "RestrictedCameraControl.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/impl/RestrictedCameraControl$CameraOperation;
    }
.end annotation


# static fields
.field public static final AE_REGION:I = 0x3

.field public static final AF_REGION:I = 0x2

.field public static final AUTO_FOCUS:I = 0x1

.field public static final AWB_REGION:I = 0x4

.field public static final EXPOSURE_COMPENSATION:I = 0x7

.field public static final FLASH:I = 0x5

.field public static final TORCH:I = 0x6

.field public static final ZOOM:I


# instance fields
.field private final mCameraControl:Landroidx/camera/core/impl/CameraControlInternal;

.field private volatile mRestrictedCameraOperations:Ljava/util/Set;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Set<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation
.end field

.field private volatile mUseRestrictedCameraOperations:Z


# direct methods
.method public constructor <init>(Landroidx/camera/core/impl/CameraControlInternal;)V
    .locals 1

    .line 62
    invoke-direct {p0, p1}, Landroidx/camera/core/impl/ForwardingCameraControl;-><init>(Landroidx/camera/core/impl/CameraControlInternal;)V

    const/4 v0, 0x0

    .line 54
    iput-boolean v0, p0, Landroidx/camera/core/impl/RestrictedCameraControl;->mUseRestrictedCameraOperations:Z

    .line 63
    iput-object p1, p0, Landroidx/camera/core/impl/RestrictedCameraControl;->mCameraControl:Landroidx/camera/core/impl/CameraControlInternal;

    return-void
.end method


# virtual methods
.method public cancelFocusAndMetering()Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Void;",
            ">;"
        }
    .end annotation

    .line 126
    iget-object v0, p0, Landroidx/camera/core/impl/RestrictedCameraControl;->mCameraControl:Landroidx/camera/core/impl/CameraControlInternal;

    invoke-interface {v0}, Landroidx/camera/core/impl/CameraControlInternal;->cancelFocusAndMetering()Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object v0

    return-object v0
.end method

.method public enableRestrictedOperations(ZLjava/util/Set;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(Z",
            "Ljava/util/Set<",
            "Ljava/lang/Integer;",
            ">;)V"
        }
    .end annotation

    .line 72
    iput-boolean p1, p0, Landroidx/camera/core/impl/RestrictedCameraControl;->mUseRestrictedCameraOperations:Z

    .line 73
    iput-object p2, p0, Landroidx/camera/core/impl/RestrictedCameraControl;->mRestrictedCameraOperations:Ljava/util/Set;

    return-void
.end method

.method public enableTorch(Z)Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(Z)",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Void;",
            ">;"
        }
    .end annotation

    const/4 v0, 0x6

    .line 103
    filled-new-array {v0}, [I

    move-result-object v0

    invoke-virtual {p0, v0}, Landroidx/camera/core/impl/RestrictedCameraControl;->isOperationSupported([I)Z

    move-result v0

    if-nez v0, :cond_0

    .line 104
    new-instance p1, Ljava/lang/IllegalStateException;

    const-string v0, "Torch is not supported"

    invoke-direct {p1, v0}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    invoke-static {p1}, Landroidx/camera/core/impl/utils/futures/Futures;->immediateFailedFuture(Ljava/lang/Throwable;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1

    .line 107
    :cond_0
    iget-object v0, p0, Landroidx/camera/core/impl/RestrictedCameraControl;->mCameraControl:Landroidx/camera/core/impl/CameraControlInternal;

    invoke-interface {v0, p1}, Landroidx/camera/core/impl/CameraControlInternal;->enableTorch(Z)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1
.end method

.method public getImplementation()Landroidx/camera/core/impl/CameraControlInternal;
    .locals 1

    .line 82
    iget-object v0, p0, Landroidx/camera/core/impl/RestrictedCameraControl;->mCameraControl:Landroidx/camera/core/impl/CameraControlInternal;

    return-object v0
.end method

.method getModifiedFocusMeteringAction(Landroidx/camera/core/FocusMeteringAction;)Landroidx/camera/core/FocusMeteringAction;
    .locals 5

    .line 166
    new-instance v0, Landroidx/camera/core/FocusMeteringAction$Builder;

    invoke-direct {v0, p1}, Landroidx/camera/core/FocusMeteringAction$Builder;-><init>(Landroidx/camera/core/FocusMeteringAction;)V

    .line 167
    invoke-virtual {p1}, Landroidx/camera/core/FocusMeteringAction;->getMeteringPointsAf()Ljava/util/List;

    move-result-object v1

    invoke-interface {v1}, Ljava/util/List;->isEmpty()Z

    move-result v1

    const/4 v2, 0x2

    const/4 v3, 0x1

    if-nez v1, :cond_0

    filled-new-array {v3, v2}, [I

    move-result-object v1

    .line 168
    invoke-virtual {p0, v1}, Landroidx/camera/core/impl/RestrictedCameraControl;->isOperationSupported([I)Z

    move-result v1

    if-nez v1, :cond_0

    .line 170
    invoke-virtual {v0, v3}, Landroidx/camera/core/FocusMeteringAction$Builder;->removePoints(I)Landroidx/camera/core/FocusMeteringAction$Builder;

    move v1, v3

    goto :goto_0

    :cond_0
    const/4 v1, 0x0

    .line 173
    :goto_0
    invoke-virtual {p1}, Landroidx/camera/core/FocusMeteringAction;->getMeteringPointsAe()Ljava/util/List;

    move-result-object v4

    invoke-interface {v4}, Ljava/util/List;->isEmpty()Z

    move-result v4

    if-nez v4, :cond_1

    const/4 v4, 0x3

    filled-new-array {v4}, [I

    move-result-object v4

    .line 174
    invoke-virtual {p0, v4}, Landroidx/camera/core/impl/RestrictedCameraControl;->isOperationSupported([I)Z

    move-result v4

    if-nez v4, :cond_1

    .line 176
    invoke-virtual {v0, v2}, Landroidx/camera/core/FocusMeteringAction$Builder;->removePoints(I)Landroidx/camera/core/FocusMeteringAction$Builder;

    move v1, v3

    .line 179
    :cond_1
    invoke-virtual {p1}, Landroidx/camera/core/FocusMeteringAction;->getMeteringPointsAwb()Ljava/util/List;

    move-result-object v2

    invoke-interface {v2}, Ljava/util/List;->isEmpty()Z

    move-result v2

    if-nez v2, :cond_2

    const/4 v2, 0x4

    filled-new-array {v2}, [I

    move-result-object v4

    .line 180
    invoke-virtual {p0, v4}, Landroidx/camera/core/impl/RestrictedCameraControl;->isOperationSupported([I)Z

    move-result v4

    if-nez v4, :cond_2

    .line 182
    invoke-virtual {v0, v2}, Landroidx/camera/core/FocusMeteringAction$Builder;->removePoints(I)Landroidx/camera/core/FocusMeteringAction$Builder;

    goto :goto_1

    :cond_2
    move v3, v1

    :goto_1
    if-nez v3, :cond_3

    return-object p1

    .line 190
    :cond_3
    invoke-virtual {v0}, Landroidx/camera/core/FocusMeteringAction$Builder;->build()Landroidx/camera/core/FocusMeteringAction;

    move-result-object p1

    .line 191
    invoke-virtual {p1}, Landroidx/camera/core/FocusMeteringAction;->getMeteringPointsAf()Ljava/util/List;

    move-result-object v1

    invoke-interface {v1}, Ljava/util/List;->isEmpty()Z

    move-result v1

    if-eqz v1, :cond_4

    .line 192
    invoke-virtual {p1}, Landroidx/camera/core/FocusMeteringAction;->getMeteringPointsAe()Ljava/util/List;

    move-result-object v1

    invoke-interface {v1}, Ljava/util/List;->isEmpty()Z

    move-result v1

    if-eqz v1, :cond_4

    .line 193
    invoke-virtual {p1}, Landroidx/camera/core/FocusMeteringAction;->getMeteringPointsAwb()Ljava/util/List;

    move-result-object p1

    invoke-interface {p1}, Ljava/util/List;->isEmpty()Z

    move-result p1

    if-eqz p1, :cond_4

    const/4 p1, 0x0

    return-object p1

    .line 197
    :cond_4
    invoke-virtual {v0}, Landroidx/camera/core/FocusMeteringAction$Builder;->build()Landroidx/camera/core/FocusMeteringAction;

    move-result-object p1

    return-object p1
.end method

.method varargs isOperationSupported([I)Z
    .locals 4

    .line 87
    iget-boolean v0, p0, Landroidx/camera/core/impl/RestrictedCameraControl;->mUseRestrictedCameraOperations:Z

    if-eqz v0, :cond_2

    iget-object v0, p0, Landroidx/camera/core/impl/RestrictedCameraControl;->mRestrictedCameraOperations:Ljava/util/Set;

    if-nez v0, :cond_0

    goto :goto_1

    .line 92
    :cond_0
    new-instance v0, Ljava/util/ArrayList;

    array-length v1, p1

    invoke-direct {v0, v1}, Ljava/util/ArrayList;-><init>(I)V

    .line 93
    array-length v1, p1

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_1

    aget v3, p1, v2

    .line 94
    invoke-static {v3}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v3

    invoke-interface {v0, v3}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 97
    :cond_1
    iget-object p1, p0, Landroidx/camera/core/impl/RestrictedCameraControl;->mRestrictedCameraOperations:Ljava/util/Set;

    invoke-interface {p1, v0}, Ljava/util/Set;->containsAll(Ljava/util/Collection;)Z

    move-result p1

    return p1

    :cond_2
    :goto_1
    const/4 p1, 0x1

    return p1
.end method

.method public setExposureCompensationIndex(I)Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(I)",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    const/4 v0, 0x7

    .line 152
    filled-new-array {v0}, [I

    move-result-object v0

    invoke-virtual {p0, v0}, Landroidx/camera/core/impl/RestrictedCameraControl;->isOperationSupported([I)Z

    move-result v0

    if-nez v0, :cond_0

    .line 153
    new-instance p1, Ljava/lang/IllegalStateException;

    const-string v0, "ExposureCompensation is not supported"

    invoke-direct {p1, v0}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    invoke-static {p1}, Landroidx/camera/core/impl/utils/futures/Futures;->immediateFailedFuture(Ljava/lang/Throwable;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1

    .line 156
    :cond_0
    iget-object v0, p0, Landroidx/camera/core/impl/RestrictedCameraControl;->mCameraControl:Landroidx/camera/core/impl/CameraControlInternal;

    invoke-interface {v0, p1}, Landroidx/camera/core/impl/CameraControlInternal;->setExposureCompensationIndex(I)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1
.end method

.method public setLinearZoom(F)Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(F)",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Void;",
            ">;"
        }
    .end annotation

    const/4 v0, 0x0

    .line 142
    filled-new-array {v0}, [I

    move-result-object v0

    invoke-virtual {p0, v0}, Landroidx/camera/core/impl/RestrictedCameraControl;->isOperationSupported([I)Z

    move-result v0

    if-nez v0, :cond_0

    .line 143
    new-instance p1, Ljava/lang/IllegalStateException;

    const-string v0, "Zoom is not supported"

    invoke-direct {p1, v0}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    invoke-static {p1}, Landroidx/camera/core/impl/utils/futures/Futures;->immediateFailedFuture(Ljava/lang/Throwable;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1

    .line 146
    :cond_0
    iget-object v0, p0, Landroidx/camera/core/impl/RestrictedCameraControl;->mCameraControl:Landroidx/camera/core/impl/CameraControlInternal;

    invoke-interface {v0, p1}, Landroidx/camera/core/impl/CameraControlInternal;->setLinearZoom(F)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1
.end method

.method public setZoomRatio(F)Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(F)",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Void;",
            ">;"
        }
    .end annotation

    const/4 v0, 0x0

    .line 132
    filled-new-array {v0}, [I

    move-result-object v0

    invoke-virtual {p0, v0}, Landroidx/camera/core/impl/RestrictedCameraControl;->isOperationSupported([I)Z

    move-result v0

    if-nez v0, :cond_0

    .line 133
    new-instance p1, Ljava/lang/IllegalStateException;

    const-string v0, "Zoom is not supported"

    invoke-direct {p1, v0}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    invoke-static {p1}, Landroidx/camera/core/impl/utils/futures/Futures;->immediateFailedFuture(Ljava/lang/Throwable;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1

    .line 136
    :cond_0
    iget-object v0, p0, Landroidx/camera/core/impl/RestrictedCameraControl;->mCameraControl:Landroidx/camera/core/impl/CameraControlInternal;

    invoke-interface {v0, p1}, Landroidx/camera/core/impl/CameraControlInternal;->setZoomRatio(F)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1
.end method

.method public startFocusAndMetering(Landroidx/camera/core/FocusMeteringAction;)Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/FocusMeteringAction;",
            ")",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Landroidx/camera/core/FocusMeteringResult;",
            ">;"
        }
    .end annotation

    .line 114
    invoke-virtual {p0, p1}, Landroidx/camera/core/impl/RestrictedCameraControl;->getModifiedFocusMeteringAction(Landroidx/camera/core/FocusMeteringAction;)Landroidx/camera/core/FocusMeteringAction;

    move-result-object p1

    if-nez p1, :cond_0

    .line 116
    new-instance p1, Ljava/lang/IllegalStateException;

    const-string v0, "FocusMetering is not supported"

    invoke-direct {p1, v0}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    invoke-static {p1}, Landroidx/camera/core/impl/utils/futures/Futures;->immediateFailedFuture(Ljava/lang/Throwable;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1

    .line 120
    :cond_0
    iget-object v0, p0, Landroidx/camera/core/impl/RestrictedCameraControl;->mCameraControl:Landroidx/camera/core/impl/CameraControlInternal;

    invoke-interface {v0, p1}, Landroidx/camera/core/impl/CameraControlInternal;->startFocusAndMetering(Landroidx/camera/core/FocusMeteringAction;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object p1

    return-object p1
.end method
