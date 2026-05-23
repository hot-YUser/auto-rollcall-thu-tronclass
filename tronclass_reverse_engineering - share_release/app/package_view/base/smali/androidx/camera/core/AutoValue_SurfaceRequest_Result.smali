.class final Landroidx/camera/core/AutoValue_SurfaceRequest_Result;
.super Landroidx/camera/core/SurfaceRequest$Result;
.source "AutoValue_SurfaceRequest_Result.java"


# instance fields
.field private final resultCode:I

.field private final surface:Landroid/view/Surface;


# direct methods
.method constructor <init>(ILandroid/view/Surface;)V
    .locals 0

    .line 17
    invoke-direct {p0}, Landroidx/camera/core/SurfaceRequest$Result;-><init>()V

    .line 18
    iput p1, p0, Landroidx/camera/core/AutoValue_SurfaceRequest_Result;->resultCode:I

    if-eqz p2, :cond_0

    .line 22
    iput-object p2, p0, Landroidx/camera/core/AutoValue_SurfaceRequest_Result;->surface:Landroid/view/Surface;

    return-void

    .line 20
    :cond_0
    new-instance p1, Ljava/lang/NullPointerException;

    const-string p2, "Null surface"

    invoke-direct {p1, p2}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 4

    const/4 v0, 0x1

    if-ne p1, p0, :cond_0

    return v0

    .line 50
    :cond_0
    instance-of v1, p1, Landroidx/camera/core/SurfaceRequest$Result;

    const/4 v2, 0x0

    if-eqz v1, :cond_2

    .line 51
    check-cast p1, Landroidx/camera/core/SurfaceRequest$Result;

    .line 52
    iget v1, p0, Landroidx/camera/core/AutoValue_SurfaceRequest_Result;->resultCode:I

    invoke-virtual {p1}, Landroidx/camera/core/SurfaceRequest$Result;->getResultCode()I

    move-result v3

    if-ne v1, v3, :cond_1

    iget-object v1, p0, Landroidx/camera/core/AutoValue_SurfaceRequest_Result;->surface:Landroid/view/Surface;

    .line 53
    invoke-virtual {p1}, Landroidx/camera/core/SurfaceRequest$Result;->getSurface()Landroid/view/Surface;

    move-result-object p1

    invoke-virtual {v1, p1}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_1

    goto :goto_0

    :cond_1
    move v0, v2

    :goto_0
    return v0

    :cond_2
    return v2
.end method

.method public getResultCode()I
    .locals 1

    .line 28
    iget v0, p0, Landroidx/camera/core/AutoValue_SurfaceRequest_Result;->resultCode:I

    return v0
.end method

.method public getSurface()Landroid/view/Surface;
    .locals 1

    .line 34
    iget-object v0, p0, Landroidx/camera/core/AutoValue_SurfaceRequest_Result;->surface:Landroid/view/Surface;

    return-object v0
.end method

.method public hashCode()I
    .locals 2

    .line 62
    iget v0, p0, Landroidx/camera/core/AutoValue_SurfaceRequest_Result;->resultCode:I

    const v1, 0xf4243

    xor-int/2addr v0, v1

    mul-int/2addr v0, v1

    .line 64
    iget-object v1, p0, Landroidx/camera/core/AutoValue_SurfaceRequest_Result;->surface:Landroid/view/Surface;

    invoke-virtual {v1}, Ljava/lang/Object;->hashCode()I

    move-result v1

    xor-int/2addr v0, v1

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 39
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Result{resultCode="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget v1, p0, Landroidx/camera/core/AutoValue_SurfaceRequest_Result;->resultCode:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", surface="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/core/AutoValue_SurfaceRequest_Result;->surface:Landroid/view/Surface;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
