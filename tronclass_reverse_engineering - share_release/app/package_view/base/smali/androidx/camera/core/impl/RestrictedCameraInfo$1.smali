.class Landroidx/camera/core/impl/RestrictedCameraInfo$1;
.super Ljava/lang/Object;
.source "RestrictedCameraInfo.java"

# interfaces
.implements Landroidx/camera/core/ExposureState;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/camera/core/impl/RestrictedCameraInfo;->getExposureState()Landroidx/camera/core/ExposureState;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Landroidx/camera/core/impl/RestrictedCameraInfo;


# direct methods
.method constructor <init>(Landroidx/camera/core/impl/RestrictedCameraInfo;)V
    .locals 0

    .line 89
    iput-object p1, p0, Landroidx/camera/core/impl/RestrictedCameraInfo$1;->this$0:Landroidx/camera/core/impl/RestrictedCameraInfo;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public getExposureCompensationIndex()I
    .locals 1

    const/4 v0, 0x0

    return v0
.end method

.method public getExposureCompensationRange()Landroid/util/Range;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 98
    new-instance v0, Landroid/util/Range;

    const/4 v1, 0x0

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-direct {v0, v1, v1}, Landroid/util/Range;-><init>(Ljava/lang/Comparable;Ljava/lang/Comparable;)V

    return-object v0
.end method

.method public getExposureCompensationStep()Landroid/util/Rational;
    .locals 1

    .line 104
    sget-object v0, Landroid/util/Rational;->ZERO:Landroid/util/Rational;

    return-object v0
.end method

.method public isExposureCompensationSupported()Z
    .locals 1

    const/4 v0, 0x0

    return v0
.end method
