.class public Landroidx/camera/camera2/internal/compat/quirk/AspectRatioLegacyApi21Quirk;
.super Ljava/lang/Object;
.source "AspectRatioLegacyApi21Quirk.java"

# interfaces
.implements Landroidx/camera/core/impl/Quirk;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 41
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static load(Landroidx/camera/camera2/internal/compat/CameraCharacteristicsCompat;)Z
    .locals 1

    .line 44
    sget-object v0, Landroid/hardware/camera2/CameraCharacteristics;->INFO_SUPPORTED_HARDWARE_LEVEL:Landroid/hardware/camera2/CameraCharacteristics$Key;

    invoke-virtual {p0, v0}, Landroidx/camera/camera2/internal/compat/CameraCharacteristicsCompat;->get(Landroid/hardware/camera2/CameraCharacteristics$Key;)Ljava/lang/Object;

    move-result-object p0

    check-cast p0, Ljava/lang/Integer;

    if-eqz p0, :cond_0

    .line 46
    invoke-virtual {p0}, Ljava/lang/Integer;->intValue()I

    :cond_0
    const/4 p0, 0x0

    return p0
.end method


# virtual methods
.method public getCorrectedAspectRatio()I
    .locals 1

    const/4 v0, 0x2

    return v0
.end method
