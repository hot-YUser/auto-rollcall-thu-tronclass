.class final Landroidx/camera/core/AutoValue_ResolutionInfo_ResolutionInfoInternal;
.super Landroidx/camera/core/ResolutionInfo$ResolutionInfoInternal;
.source "AutoValue_ResolutionInfo_ResolutionInfoInternal.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/AutoValue_ResolutionInfo_ResolutionInfoInternal$Builder;
    }
.end annotation


# instance fields
.field private final cropRect:Landroid/graphics/Rect;

.field private final resolution:Landroid/util/Size;

.field private final rotationDegrees:I


# direct methods
.method private constructor <init>(Landroid/util/Size;Landroid/graphics/Rect;I)V
    .locals 0

    .line 22
    invoke-direct {p0}, Landroidx/camera/core/ResolutionInfo$ResolutionInfoInternal;-><init>()V

    .line 23
    iput-object p1, p0, Landroidx/camera/core/AutoValue_ResolutionInfo_ResolutionInfoInternal;->resolution:Landroid/util/Size;

    .line 24
    iput-object p2, p0, Landroidx/camera/core/AutoValue_ResolutionInfo_ResolutionInfoInternal;->cropRect:Landroid/graphics/Rect;

    .line 25
    iput p3, p0, Landroidx/camera/core/AutoValue_ResolutionInfo_ResolutionInfoInternal;->rotationDegrees:I

    return-void
.end method

.method synthetic constructor <init>(Landroid/util/Size;Landroid/graphics/Rect;ILandroidx/camera/core/AutoValue_ResolutionInfo_ResolutionInfoInternal$1;)V
    .locals 0

    .line 11
    invoke-direct {p0, p1, p2, p3}, Landroidx/camera/core/AutoValue_ResolutionInfo_ResolutionInfoInternal;-><init>(Landroid/util/Size;Landroid/graphics/Rect;I)V

    return-void
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 4

    const/4 v0, 0x1

    if-ne p1, p0, :cond_0

    return v0

    .line 60
    :cond_0
    instance-of v1, p1, Landroidx/camera/core/ResolutionInfo$ResolutionInfoInternal;

    const/4 v2, 0x0

    if-eqz v1, :cond_2

    .line 61
    check-cast p1, Landroidx/camera/core/ResolutionInfo$ResolutionInfoInternal;

    .line 62
    iget-object v1, p0, Landroidx/camera/core/AutoValue_ResolutionInfo_ResolutionInfoInternal;->resolution:Landroid/util/Size;

    invoke-virtual {p1}, Landroidx/camera/core/ResolutionInfo$ResolutionInfoInternal;->getResolution()Landroid/util/Size;

    move-result-object v3

    invoke-virtual {v1, v3}, Landroid/util/Size;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    iget-object v1, p0, Landroidx/camera/core/AutoValue_ResolutionInfo_ResolutionInfoInternal;->cropRect:Landroid/graphics/Rect;

    .line 63
    invoke-virtual {p1}, Landroidx/camera/core/ResolutionInfo$ResolutionInfoInternal;->getCropRect()Landroid/graphics/Rect;

    move-result-object v3

    invoke-virtual {v1, v3}, Landroid/graphics/Rect;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    iget v1, p0, Landroidx/camera/core/AutoValue_ResolutionInfo_ResolutionInfoInternal;->rotationDegrees:I

    .line 64
    invoke-virtual {p1}, Landroidx/camera/core/ResolutionInfo$ResolutionInfoInternal;->getRotationDegrees()I

    move-result p1

    if-ne v1, p1, :cond_1

    goto :goto_0

    :cond_1
    move v0, v2

    :goto_0
    return v0

    :cond_2
    return v2
.end method

.method getCropRect()Landroid/graphics/Rect;
    .locals 1

    .line 37
    iget-object v0, p0, Landroidx/camera/core/AutoValue_ResolutionInfo_ResolutionInfoInternal;->cropRect:Landroid/graphics/Rect;

    return-object v0
.end method

.method getResolution()Landroid/util/Size;
    .locals 1

    .line 31
    iget-object v0, p0, Landroidx/camera/core/AutoValue_ResolutionInfo_ResolutionInfoInternal;->resolution:Landroid/util/Size;

    return-object v0
.end method

.method getRotationDegrees()I
    .locals 1

    .line 43
    iget v0, p0, Landroidx/camera/core/AutoValue_ResolutionInfo_ResolutionInfoInternal;->rotationDegrees:I

    return v0
.end method

.method public hashCode()I
    .locals 3

    .line 73
    iget-object v0, p0, Landroidx/camera/core/AutoValue_ResolutionInfo_ResolutionInfoInternal;->resolution:Landroid/util/Size;

    invoke-virtual {v0}, Landroid/util/Size;->hashCode()I

    move-result v0

    const v1, 0xf4243

    xor-int/2addr v0, v1

    mul-int/2addr v0, v1

    .line 75
    iget-object v2, p0, Landroidx/camera/core/AutoValue_ResolutionInfo_ResolutionInfoInternal;->cropRect:Landroid/graphics/Rect;

    invoke-virtual {v2}, Landroid/graphics/Rect;->hashCode()I

    move-result v2

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 77
    iget v1, p0, Landroidx/camera/core/AutoValue_ResolutionInfo_ResolutionInfoInternal;->rotationDegrees:I

    xor-int/2addr v0, v1

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 48
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "ResolutionInfoInternal{resolution="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Landroidx/camera/core/AutoValue_ResolutionInfo_ResolutionInfoInternal;->resolution:Landroid/util/Size;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", cropRect="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/core/AutoValue_ResolutionInfo_ResolutionInfoInternal;->cropRect:Landroid/graphics/Rect;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", rotationDegrees="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Landroidx/camera/core/AutoValue_ResolutionInfo_ResolutionInfoInternal;->rotationDegrees:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
