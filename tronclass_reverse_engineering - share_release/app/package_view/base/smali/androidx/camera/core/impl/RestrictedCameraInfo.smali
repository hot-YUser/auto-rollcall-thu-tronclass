.class public Landroidx/camera/core/impl/RestrictedCameraInfo;
.super Landroidx/camera/core/impl/ForwardingCameraInfo;
.source "RestrictedCameraInfo.java"


# instance fields
.field private final mCameraInfo:Landroidx/camera/core/impl/CameraInfoInternal;

.field private final mRestrictedCameraControl:Landroidx/camera/core/impl/RestrictedCameraControl;


# direct methods
.method public constructor <init>(Landroidx/camera/core/impl/CameraInfoInternal;Landroidx/camera/core/impl/RestrictedCameraControl;)V
    .locals 0

    .line 43
    invoke-direct {p0, p1}, Landroidx/camera/core/impl/ForwardingCameraInfo;-><init>(Landroidx/camera/core/impl/CameraInfoInternal;)V

    .line 44
    iput-object p1, p0, Landroidx/camera/core/impl/RestrictedCameraInfo;->mCameraInfo:Landroidx/camera/core/impl/CameraInfoInternal;

    .line 45
    iput-object p2, p0, Landroidx/camera/core/impl/RestrictedCameraInfo;->mRestrictedCameraControl:Landroidx/camera/core/impl/RestrictedCameraControl;

    return-void
.end method


# virtual methods
.method public getExposureState()Landroidx/camera/core/ExposureState;
    .locals 2

    .line 87
    iget-object v0, p0, Landroidx/camera/core/impl/RestrictedCameraInfo;->mRestrictedCameraControl:Landroidx/camera/core/impl/RestrictedCameraControl;

    const/4 v1, 0x7

    filled-new-array {v1}, [I

    move-result-object v1

    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/RestrictedCameraControl;->isOperationSupported([I)Z

    move-result v0

    if-nez v0, :cond_0

    .line 89
    new-instance v0, Landroidx/camera/core/impl/RestrictedCameraInfo$1;

    invoke-direct {v0, p0}, Landroidx/camera/core/impl/RestrictedCameraInfo$1;-><init>(Landroidx/camera/core/impl/RestrictedCameraInfo;)V

    return-object v0

    .line 113
    :cond_0
    iget-object v0, p0, Landroidx/camera/core/impl/RestrictedCameraInfo;->mCameraInfo:Landroidx/camera/core/impl/CameraInfoInternal;

    invoke-interface {v0}, Landroidx/camera/core/impl/CameraInfoInternal;->getExposureState()Landroidx/camera/core/ExposureState;

    move-result-object v0

    return-object v0
.end method

.method public getImplementation()Landroidx/camera/core/impl/CameraInfoInternal;
    .locals 1

    .line 51
    iget-object v0, p0, Landroidx/camera/core/impl/RestrictedCameraInfo;->mCameraInfo:Landroidx/camera/core/impl/CameraInfoInternal;

    return-object v0
.end method

.method public getTorchState()Landroidx/lifecycle/LiveData;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroidx/lifecycle/LiveData<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 66
    iget-object v0, p0, Landroidx/camera/core/impl/RestrictedCameraInfo;->mRestrictedCameraControl:Landroidx/camera/core/impl/RestrictedCameraControl;

    const/4 v1, 0x6

    filled-new-array {v1}, [I

    move-result-object v1

    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/RestrictedCameraControl;->isOperationSupported([I)Z

    move-result v0

    if-nez v0, :cond_0

    .line 67
    new-instance v0, Landroidx/lifecycle/MutableLiveData;

    const/4 v1, 0x0

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-direct {v0, v1}, Landroidx/lifecycle/MutableLiveData;-><init>(Ljava/lang/Object;)V

    return-object v0

    .line 70
    :cond_0
    iget-object v0, p0, Landroidx/camera/core/impl/RestrictedCameraInfo;->mCameraInfo:Landroidx/camera/core/impl/CameraInfoInternal;

    invoke-interface {v0}, Landroidx/camera/core/impl/CameraInfoInternal;->getTorchState()Landroidx/lifecycle/LiveData;

    move-result-object v0

    return-object v0
.end method

.method public getZoomState()Landroidx/lifecycle/LiveData;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroidx/lifecycle/LiveData<",
            "Landroidx/camera/core/ZoomState;",
            ">;"
        }
    .end annotation

    .line 76
    iget-object v0, p0, Landroidx/camera/core/impl/RestrictedCameraInfo;->mRestrictedCameraControl:Landroidx/camera/core/impl/RestrictedCameraControl;

    const/4 v1, 0x0

    filled-new-array {v1}, [I

    move-result-object v1

    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/RestrictedCameraControl;->isOperationSupported([I)Z

    move-result v0

    if-nez v0, :cond_0

    .line 77
    new-instance v0, Landroidx/lifecycle/MutableLiveData;

    const/4 v1, 0x0

    const/high16 v2, 0x3f800000    # 1.0f

    invoke-static {v2, v2, v2, v1}, Landroidx/camera/core/internal/ImmutableZoomState;->create(FFFF)Landroidx/camera/core/ZoomState;

    move-result-object v1

    invoke-direct {v0, v1}, Landroidx/lifecycle/MutableLiveData;-><init>(Ljava/lang/Object;)V

    return-object v0

    .line 81
    :cond_0
    iget-object v0, p0, Landroidx/camera/core/impl/RestrictedCameraInfo;->mCameraInfo:Landroidx/camera/core/impl/CameraInfoInternal;

    invoke-interface {v0}, Landroidx/camera/core/impl/CameraInfoInternal;->getZoomState()Landroidx/lifecycle/LiveData;

    move-result-object v0

    return-object v0
.end method

.method public hasFlashUnit()Z
    .locals 2

    .line 56
    iget-object v0, p0, Landroidx/camera/core/impl/RestrictedCameraInfo;->mRestrictedCameraControl:Landroidx/camera/core/impl/RestrictedCameraControl;

    const/4 v1, 0x5

    filled-new-array {v1}, [I

    move-result-object v1

    invoke-virtual {v0, v1}, Landroidx/camera/core/impl/RestrictedCameraControl;->isOperationSupported([I)Z

    move-result v0

    if-nez v0, :cond_0

    const/4 v0, 0x0

    return v0

    .line 60
    :cond_0
    iget-object v0, p0, Landroidx/camera/core/impl/RestrictedCameraInfo;->mCameraInfo:Landroidx/camera/core/impl/CameraInfoInternal;

    invoke-interface {v0}, Landroidx/camera/core/impl/CameraInfoInternal;->hasFlashUnit()Z

    move-result v0

    return v0
.end method

.method public isFocusMeteringSupported(Landroidx/camera/core/FocusMeteringAction;)Z
    .locals 1

    .line 118
    iget-object v0, p0, Landroidx/camera/core/impl/RestrictedCameraInfo;->mRestrictedCameraControl:Landroidx/camera/core/impl/RestrictedCameraControl;

    invoke-virtual {v0, p1}, Landroidx/camera/core/impl/RestrictedCameraControl;->getModifiedFocusMeteringAction(Landroidx/camera/core/FocusMeteringAction;)Landroidx/camera/core/FocusMeteringAction;

    move-result-object v0

    if-nez v0, :cond_0

    const/4 p1, 0x0

    return p1

    .line 121
    :cond_0
    iget-object v0, p0, Landroidx/camera/core/impl/RestrictedCameraInfo;->mCameraInfo:Landroidx/camera/core/impl/CameraInfoInternal;

    invoke-interface {v0, p1}, Landroidx/camera/core/impl/CameraInfoInternal;->isFocusMeteringSupported(Landroidx/camera/core/FocusMeteringAction;)Z

    move-result p1

    return p1
.end method
