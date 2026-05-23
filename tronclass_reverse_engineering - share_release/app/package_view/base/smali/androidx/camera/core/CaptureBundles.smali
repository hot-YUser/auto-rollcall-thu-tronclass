.class public final Landroidx/camera/core/CaptureBundles;
.super Ljava/lang/Object;
.source "CaptureBundles.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/CaptureBundles$CaptureBundleImpl;
    }
.end annotation


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 75
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static createCaptureBundle(Ljava/util/List;)Landroidx/camera/core/impl/CaptureBundle;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/CaptureStage;",
            ">;)",
            "Landroidx/camera/core/impl/CaptureBundle;"
        }
    .end annotation

    .line 52
    new-instance v0, Landroidx/camera/core/CaptureBundles$CaptureBundleImpl;

    invoke-direct {v0, p0}, Landroidx/camera/core/CaptureBundles$CaptureBundleImpl;-><init>(Ljava/util/List;)V

    return-object v0
.end method

.method static varargs createCaptureBundle([Landroidx/camera/core/impl/CaptureStage;)Landroidx/camera/core/impl/CaptureBundle;
    .locals 1

    .line 46
    new-instance v0, Landroidx/camera/core/CaptureBundles$CaptureBundleImpl;

    invoke-static {p0}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object p0

    invoke-direct {v0, p0}, Landroidx/camera/core/CaptureBundles$CaptureBundleImpl;-><init>(Ljava/util/List;)V

    return-object v0
.end method

.method public static singleDefaultCaptureBundle()Landroidx/camera/core/impl/CaptureBundle;
    .locals 3

    const/4 v0, 0x1

    .line 40
    new-array v0, v0, [Landroidx/camera/core/impl/CaptureStage;

    new-instance v1, Landroidx/camera/core/impl/CaptureStage$DefaultCaptureStage;

    invoke-direct {v1}, Landroidx/camera/core/impl/CaptureStage$DefaultCaptureStage;-><init>()V

    const/4 v2, 0x0

    aput-object v1, v0, v2

    invoke-static {v0}, Landroidx/camera/core/CaptureBundles;->createCaptureBundle([Landroidx/camera/core/impl/CaptureStage;)Landroidx/camera/core/impl/CaptureBundle;

    move-result-object v0

    return-object v0
.end method
