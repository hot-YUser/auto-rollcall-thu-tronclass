.class final Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;
.super Landroidx/camera/core/impl/SessionConfig$OutputConfig;
.source "AutoValue_SessionConfig_OutputConfig.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig$Builder;
    }
.end annotation


# instance fields
.field private final dynamicRange:Landroidx/camera/core/DynamicRange;

.field private final physicalCameraId:Ljava/lang/String;

.field private final sharedSurfaces:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/DeferrableSurface;",
            ">;"
        }
    .end annotation
.end field

.field private final surface:Landroidx/camera/core/impl/DeferrableSurface;

.field private final surfaceGroupId:I


# direct methods
.method private constructor <init>(Landroidx/camera/core/impl/DeferrableSurface;Ljava/util/List;Ljava/lang/String;ILandroidx/camera/core/DynamicRange;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/impl/DeferrableSurface;",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/DeferrableSurface;",
            ">;",
            "Ljava/lang/String;",
            "I",
            "Landroidx/camera/core/DynamicRange;",
            ")V"
        }
    .end annotation

    .line 28
    invoke-direct {p0}, Landroidx/camera/core/impl/SessionConfig$OutputConfig;-><init>()V

    .line 29
    iput-object p1, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->surface:Landroidx/camera/core/impl/DeferrableSurface;

    .line 30
    iput-object p2, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->sharedSurfaces:Ljava/util/List;

    .line 31
    iput-object p3, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->physicalCameraId:Ljava/lang/String;

    .line 32
    iput p4, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->surfaceGroupId:I

    .line 33
    iput-object p5, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->dynamicRange:Landroidx/camera/core/DynamicRange;

    return-void
.end method

.method synthetic constructor <init>(Landroidx/camera/core/impl/DeferrableSurface;Ljava/util/List;Ljava/lang/String;ILandroidx/camera/core/DynamicRange;Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig$1;)V
    .locals 0

    .line 11
    invoke-direct/range {p0 .. p5}, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;-><init>(Landroidx/camera/core/impl/DeferrableSurface;Ljava/util/List;Ljava/lang/String;ILandroidx/camera/core/DynamicRange;)V

    return-void
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 4

    const/4 v0, 0x1

    if-ne p1, p0, :cond_0

    return v0

    .line 81
    :cond_0
    instance-of v1, p1, Landroidx/camera/core/impl/SessionConfig$OutputConfig;

    const/4 v2, 0x0

    if-eqz v1, :cond_3

    .line 82
    check-cast p1, Landroidx/camera/core/impl/SessionConfig$OutputConfig;

    .line 83
    iget-object v1, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->surface:Landroidx/camera/core/impl/DeferrableSurface;

    invoke-virtual {p1}, Landroidx/camera/core/impl/SessionConfig$OutputConfig;->getSurface()Landroidx/camera/core/impl/DeferrableSurface;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_2

    iget-object v1, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->sharedSurfaces:Ljava/util/List;

    .line 84
    invoke-virtual {p1}, Landroidx/camera/core/impl/SessionConfig$OutputConfig;->getSharedSurfaces()Ljava/util/List;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_2

    iget-object v1, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->physicalCameraId:Ljava/lang/String;

    if-nez v1, :cond_1

    .line 85
    invoke-virtual {p1}, Landroidx/camera/core/impl/SessionConfig$OutputConfig;->getPhysicalCameraId()Ljava/lang/String;

    move-result-object v1

    if-nez v1, :cond_2

    goto :goto_0

    :cond_1
    invoke-virtual {p1}, Landroidx/camera/core/impl/SessionConfig$OutputConfig;->getPhysicalCameraId()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_2

    :goto_0
    iget v1, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->surfaceGroupId:I

    .line 86
    invoke-virtual {p1}, Landroidx/camera/core/impl/SessionConfig$OutputConfig;->getSurfaceGroupId()I

    move-result v3

    if-ne v1, v3, :cond_2

    iget-object v1, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->dynamicRange:Landroidx/camera/core/DynamicRange;

    .line 87
    invoke-virtual {p1}, Landroidx/camera/core/impl/SessionConfig$OutputConfig;->getDynamicRange()Landroidx/camera/core/DynamicRange;

    move-result-object p1

    invoke-virtual {v1, p1}, Landroidx/camera/core/DynamicRange;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_2

    goto :goto_1

    :cond_2
    move v0, v2

    :goto_1
    return v0

    :cond_3
    return v2
.end method

.method public getDynamicRange()Landroidx/camera/core/DynamicRange;
    .locals 1

    .line 62
    iget-object v0, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->dynamicRange:Landroidx/camera/core/DynamicRange;

    return-object v0
.end method

.method public getPhysicalCameraId()Ljava/lang/String;
    .locals 1

    .line 51
    iget-object v0, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->physicalCameraId:Ljava/lang/String;

    return-object v0
.end method

.method public getSharedSurfaces()Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/DeferrableSurface;",
            ">;"
        }
    .end annotation

    .line 45
    iget-object v0, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->sharedSurfaces:Ljava/util/List;

    return-object v0
.end method

.method public getSurface()Landroidx/camera/core/impl/DeferrableSurface;
    .locals 1

    .line 39
    iget-object v0, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->surface:Landroidx/camera/core/impl/DeferrableSurface;

    return-object v0
.end method

.method public getSurfaceGroupId()I
    .locals 1

    .line 56
    iget v0, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->surfaceGroupId:I

    return v0
.end method

.method public hashCode()I
    .locals 3

    .line 96
    iget-object v0, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->surface:Landroidx/camera/core/impl/DeferrableSurface;

    invoke-virtual {v0}, Ljava/lang/Object;->hashCode()I

    move-result v0

    const v1, 0xf4243

    xor-int/2addr v0, v1

    mul-int/2addr v0, v1

    .line 98
    iget-object v2, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->sharedSurfaces:Ljava/util/List;

    invoke-virtual {v2}, Ljava/lang/Object;->hashCode()I

    move-result v2

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 100
    iget-object v2, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->physicalCameraId:Ljava/lang/String;

    if-nez v2, :cond_0

    const/4 v2, 0x0

    goto :goto_0

    :cond_0
    invoke-virtual {v2}, Ljava/lang/String;->hashCode()I

    move-result v2

    :goto_0
    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 102
    iget v2, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->surfaceGroupId:I

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 104
    iget-object v1, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->dynamicRange:Landroidx/camera/core/DynamicRange;

    invoke-virtual {v1}, Landroidx/camera/core/DynamicRange;->hashCode()I

    move-result v1

    xor-int/2addr v0, v1

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 67
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "OutputConfig{surface="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->surface:Landroidx/camera/core/impl/DeferrableSurface;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", sharedSurfaces="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->sharedSurfaces:Ljava/util/List;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", physicalCameraId="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->physicalCameraId:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", surfaceGroupId="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->surfaceGroupId:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", dynamicRange="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig;->dynamicRange:Landroidx/camera/core/DynamicRange;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
