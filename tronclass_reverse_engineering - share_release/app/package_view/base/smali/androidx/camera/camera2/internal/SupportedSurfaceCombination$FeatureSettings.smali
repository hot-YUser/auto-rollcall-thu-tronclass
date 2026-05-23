.class abstract Landroidx/camera/camera2/internal/SupportedSurfaceCombination$FeatureSettings;
.super Ljava/lang/Object;
.source "SupportedSurfaceCombination.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/camera2/internal/SupportedSurfaceCombination;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x408
    name = "FeatureSettings"
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 1485
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static of(II)Landroidx/camera/camera2/internal/SupportedSurfaceCombination$FeatureSettings;
    .locals 1

    .line 1489
    new-instance v0, Landroidx/camera/camera2/internal/AutoValue_SupportedSurfaceCombination_FeatureSettings;

    invoke-direct {v0, p0, p1}, Landroidx/camera/camera2/internal/AutoValue_SupportedSurfaceCombination_FeatureSettings;-><init>(II)V

    return-object v0
.end method


# virtual methods
.method abstract getCameraMode()I
.end method

.method abstract getRequiredMaxBitDepth()I
.end method
