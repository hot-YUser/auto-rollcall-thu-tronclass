.class public final Landroidx/camera/view/CameraController$OutputSize;
.super Ljava/lang/Object;
.source "CameraController.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/view/CameraController;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = "OutputSize"
.end annotation

.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/view/CameraController$OutputSize$OutputAspectRatio;
    }
.end annotation


# static fields
.field public static final UNASSIGNED_ASPECT_RATIO:I = -0x1


# instance fields
.field private final mAspectRatio:I

.field private final mResolution:Landroid/util/Size;


# direct methods
.method public constructor <init>(I)V
    .locals 1

    .line 2060
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, -0x1

    if-eq p1, v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    .line 2061
    :goto_0
    invoke-static {v0}, Landroidx/core/util/Preconditions;->checkArgument(Z)V

    .line 2062
    iput p1, p0, Landroidx/camera/view/CameraController$OutputSize;->mAspectRatio:I

    const/4 p1, 0x0

    .line 2063
    iput-object p1, p0, Landroidx/camera/view/CameraController$OutputSize;->mResolution:Landroid/util/Size;

    return-void
.end method

.method public constructor <init>(Landroid/util/Size;)V
    .locals 1

    .line 2072
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 2073
    invoke-static {p1}, Landroidx/core/util/Preconditions;->checkNotNull(Ljava/lang/Object;)Ljava/lang/Object;

    const/4 v0, -0x1

    .line 2074
    iput v0, p0, Landroidx/camera/view/CameraController$OutputSize;->mAspectRatio:I

    .line 2075
    iput-object p1, p0, Landroidx/camera/view/CameraController$OutputSize;->mResolution:Landroid/util/Size;

    return-void
.end method


# virtual methods
.method public getAspectRatio()I
    .locals 1

    .line 2085
    iget v0, p0, Landroidx/camera/view/CameraController$OutputSize;->mAspectRatio:I

    return v0
.end method

.method public getResolution()Landroid/util/Size;
    .locals 1

    .line 2095
    iget-object v0, p0, Landroidx/camera/view/CameraController$OutputSize;->mResolution:Landroid/util/Size;

    return-object v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 2101
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "aspect ratio: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget v1, p0, Landroidx/camera/view/CameraController$OutputSize;->mAspectRatio:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " resolution: "

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/view/CameraController$OutputSize;->mResolution:Landroid/util/Size;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
