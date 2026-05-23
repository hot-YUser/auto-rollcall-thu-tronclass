.class public final Landroidx/camera/camera2/impl/CameraEventCallbacks;
.super Landroidx/camera/core/impl/MultiValueSet;
.source "CameraEventCallbacks.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/camera2/impl/CameraEventCallbacks$ComboCameraEventCallback;
    }
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Landroidx/camera/core/impl/MultiValueSet<",
        "Landroidx/camera/camera2/impl/CameraEventCallback;",
        ">;"
    }
.end annotation


# direct methods
.method public varargs constructor <init>([Landroidx/camera/camera2/impl/CameraEventCallback;)V
    .locals 0

    .line 35
    invoke-direct {p0}, Landroidx/camera/core/impl/MultiValueSet;-><init>()V

    .line 36
    invoke-static {p1}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object p1

    invoke-virtual {p0, p1}, Landroidx/camera/camera2/impl/CameraEventCallbacks;->addAll(Ljava/util/List;)V

    return-void
.end method

.method public static createEmptyCallback()Landroidx/camera/camera2/impl/CameraEventCallbacks;
    .locals 2

    .line 48
    new-instance v0, Landroidx/camera/camera2/impl/CameraEventCallbacks;

    const/4 v1, 0x0

    new-array v1, v1, [Landroidx/camera/camera2/impl/CameraEventCallback;

    invoke-direct {v0, v1}, Landroidx/camera/camera2/impl/CameraEventCallbacks;-><init>([Landroidx/camera/camera2/impl/CameraEventCallback;)V

    return-object v0
.end method


# virtual methods
.method public clone()Landroidx/camera/core/impl/MultiValueSet;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroidx/camera/core/impl/MultiValueSet<",
            "Landroidx/camera/camera2/impl/CameraEventCallback;",
            ">;"
        }
    .end annotation

    .line 54
    invoke-static {}, Landroidx/camera/camera2/impl/CameraEventCallbacks;->createEmptyCallback()Landroidx/camera/camera2/impl/CameraEventCallbacks;

    move-result-object v0

    .line 55
    invoke-virtual {p0}, Landroidx/camera/camera2/impl/CameraEventCallbacks;->getAllItems()Ljava/util/List;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroidx/camera/camera2/impl/CameraEventCallbacks;->addAll(Ljava/util/List;)V

    return-object v0
.end method

.method public bridge synthetic clone()Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/CloneNotSupportedException;
        }
    .end annotation

    .line 32
    invoke-virtual {p0}, Landroidx/camera/camera2/impl/CameraEventCallbacks;->clone()Landroidx/camera/core/impl/MultiValueSet;

    move-result-object v0

    return-object v0
.end method

.method public createComboCallback()Landroidx/camera/camera2/impl/CameraEventCallbacks$ComboCameraEventCallback;
    .locals 2

    .line 42
    new-instance v0, Landroidx/camera/camera2/impl/CameraEventCallbacks$ComboCameraEventCallback;

    invoke-virtual {p0}, Landroidx/camera/camera2/impl/CameraEventCallbacks;->getAllItems()Ljava/util/List;

    move-result-object v1

    invoke-direct {v0, v1}, Landroidx/camera/camera2/impl/CameraEventCallbacks$ComboCameraEventCallback;-><init>(Ljava/util/List;)V

    return-object v0
.end method
