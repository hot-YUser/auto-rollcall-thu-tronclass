.class abstract Landroidx/camera/camera2/internal/Camera2CameraImpl$UseCaseInfo;
.super Ljava/lang/Object;
.source "Camera2CameraImpl.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/camera2/internal/Camera2CameraImpl;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x408
    name = "UseCaseInfo"
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 1613
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static create(Ljava/lang/String;Ljava/lang/Class;Landroidx/camera/core/impl/SessionConfig;Landroidx/camera/core/impl/UseCaseConfig;Landroid/util/Size;)Landroidx/camera/camera2/internal/Camera2CameraImpl$UseCaseInfo;
    .locals 7
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/lang/Class<",
            "*>;",
            "Landroidx/camera/core/impl/SessionConfig;",
            "Landroidx/camera/core/impl/UseCaseConfig<",
            "*>;",
            "Landroid/util/Size;",
            ")",
            "Landroidx/camera/camera2/internal/Camera2CameraImpl$UseCaseInfo;"
        }
    .end annotation

    .line 1620
    new-instance v6, Landroidx/camera/camera2/internal/AutoValue_Camera2CameraImpl_UseCaseInfo;

    move-object v0, v6

    move-object v1, p0

    move-object v2, p1

    move-object v3, p2

    move-object v4, p3

    move-object v5, p4

    invoke-direct/range {v0 .. v5}, Landroidx/camera/camera2/internal/AutoValue_Camera2CameraImpl_UseCaseInfo;-><init>(Ljava/lang/String;Ljava/lang/Class;Landroidx/camera/core/impl/SessionConfig;Landroidx/camera/core/impl/UseCaseConfig;Landroid/util/Size;)V

    return-object v6
.end method

.method static from(Landroidx/camera/core/UseCase;)Landroidx/camera/camera2/internal/Camera2CameraImpl$UseCaseInfo;
    .locals 4

    .line 1626
    invoke-static {p0}, Landroidx/camera/camera2/internal/Camera2CameraImpl;->getUseCaseId(Landroidx/camera/core/UseCase;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p0}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v1

    .line 1627
    invoke-virtual {p0}, Landroidx/camera/core/UseCase;->getSessionConfig()Landroidx/camera/core/impl/SessionConfig;

    move-result-object v2

    invoke-virtual {p0}, Landroidx/camera/core/UseCase;->getCurrentConfig()Landroidx/camera/core/impl/UseCaseConfig;

    move-result-object v3

    .line 1628
    invoke-virtual {p0}, Landroidx/camera/core/UseCase;->getAttachedSurfaceResolution()Landroid/util/Size;

    move-result-object p0

    .line 1626
    invoke-static {v0, v1, v2, v3, p0}, Landroidx/camera/camera2/internal/Camera2CameraImpl$UseCaseInfo;->create(Ljava/lang/String;Ljava/lang/Class;Landroidx/camera/core/impl/SessionConfig;Landroidx/camera/core/impl/UseCaseConfig;Landroid/util/Size;)Landroidx/camera/camera2/internal/Camera2CameraImpl$UseCaseInfo;

    move-result-object p0

    return-object p0
.end method


# virtual methods
.method abstract getSessionConfig()Landroidx/camera/core/impl/SessionConfig;
.end method

.method abstract getSurfaceResolution()Landroid/util/Size;
.end method

.method abstract getUseCaseConfig()Landroidx/camera/core/impl/UseCaseConfig;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroidx/camera/core/impl/UseCaseConfig<",
            "*>;"
        }
    .end annotation
.end method

.method abstract getUseCaseId()Ljava/lang/String;
.end method

.method abstract getUseCaseType()Ljava/lang/Class;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/lang/Class<",
            "*>;"
        }
    .end annotation
.end method
