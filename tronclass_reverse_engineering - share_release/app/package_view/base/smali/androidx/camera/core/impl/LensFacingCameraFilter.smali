.class public Landroidx/camera/core/impl/LensFacingCameraFilter;
.super Ljava/lang/Object;
.source "LensFacingCameraFilter.java"

# interfaces
.implements Landroidx/camera/core/CameraFilter;


# instance fields
.field private final mLensFacing:I


# direct methods
.method public constructor <init>(I)V
    .locals 0

    .line 37
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 38
    iput p1, p0, Landroidx/camera/core/impl/LensFacingCameraFilter;->mLensFacing:I

    return-void
.end method


# virtual methods
.method public filter(Ljava/util/List;)Ljava/util/List;
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroidx/camera/core/CameraInfo;",
            ">;)",
            "Ljava/util/List<",
            "Landroidx/camera/core/CameraInfo;",
            ">;"
        }
    .end annotation

    .line 44
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 45
    invoke-interface {p1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :cond_0
    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Landroidx/camera/core/CameraInfo;

    .line 46
    instance-of v2, v1, Landroidx/camera/core/impl/CameraInfoInternal;

    const-string v3, "The camera info doesn\'t contain internal implementation."

    invoke-static {v2, v3}, Landroidx/core/util/Preconditions;->checkArgument(ZLjava/lang/Object;)V

    .line 48
    invoke-interface {v1}, Landroidx/camera/core/CameraInfo;->getLensFacing()I

    move-result v2

    .line 49
    iget v3, p0, Landroidx/camera/core/impl/LensFacingCameraFilter;->mLensFacing:I

    if-ne v2, v3, :cond_0

    .line 50
    invoke-interface {v0, v1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    goto :goto_0

    :cond_1
    return-object v0
.end method

.method public getLensFacing()I
    .locals 1

    .line 60
    iget v0, p0, Landroidx/camera/core/impl/LensFacingCameraFilter;->mLensFacing:I

    return v0
.end method
