.class public Lcom/king/camera/scan/config/AspectRatioCameraConfig;
.super Lcom/king/camera/scan/config/CameraConfig;
.source "AspectRatioCameraConfig.java"


# annotations
.annotation runtime Ljava/lang/Deprecated;
.end annotation


# instance fields
.field private mAspectRatio:I


# direct methods
.method public constructor <init>(Landroid/content/Context;)V
    .locals 0

    .line 48
    invoke-direct {p0}, Lcom/king/camera/scan/config/CameraConfig;-><init>()V

    .line 49
    invoke-direct {p0, p1}, Lcom/king/camera/scan/config/AspectRatioCameraConfig;->initTargetAspectRatio(Landroid/content/Context;)V

    return-void
.end method

.method private initTargetAspectRatio(Landroid/content/Context;)V
    .locals 3

    .line 58
    invoke-virtual {p1}, Landroid/content/Context;->getResources()Landroid/content/res/Resources;

    move-result-object p1

    invoke-virtual {p1}, Landroid/content/res/Resources;->getDisplayMetrics()Landroid/util/DisplayMetrics;

    move-result-object p1

    .line 59
    iget v0, p1, Landroid/util/DisplayMetrics;->widthPixels:I

    .line 60
    iget p1, p1, Landroid/util/DisplayMetrics;->heightPixels:I

    .line 61
    invoke-static {v0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    filled-new-array {v1, v2}, [Ljava/lang/Object;

    move-result-object v1

    const-string v2, "displayMetrics: %dx%d"

    invoke-static {v2, v1}, Lcom/king/logx/LogX;->d(Ljava/lang/String;[Ljava/lang/Object;)V

    .line 63
    invoke-static {v0, p1}, Ljava/lang/Math;->max(II)I

    move-result v1

    int-to-float v1, v1

    invoke-static {v0, p1}, Ljava/lang/Math;->min(II)I

    move-result p1

    int-to-float p1, p1

    div-float/2addr v1, p1

    const p1, 0x3faaaaab

    sub-float p1, v1, p1

    .line 64
    invoke-static {p1}, Ljava/lang/Math;->abs(F)F

    move-result p1

    const v0, 0x3fe38e39

    sub-float/2addr v1, v0

    invoke-static {v1}, Ljava/lang/Math;->abs(F)F

    move-result v0

    cmpg-float p1, p1, v0

    if-gez p1, :cond_0

    const/4 p1, 0x0

    .line 65
    iput p1, p0, Lcom/king/camera/scan/config/AspectRatioCameraConfig;->mAspectRatio:I

    goto :goto_0

    :cond_0
    const/4 p1, 0x1

    .line 67
    iput p1, p0, Lcom/king/camera/scan/config/AspectRatioCameraConfig;->mAspectRatio:I

    .line 69
    :goto_0
    iget p1, p0, Lcom/king/camera/scan/config/AspectRatioCameraConfig;->mAspectRatio:I

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    filled-new-array {p1}, [Ljava/lang/Object;

    move-result-object p1

    const-string v0, "aspectRatio: %d"

    invoke-static {v0, p1}, Lcom/king/logx/LogX;->d(Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method


# virtual methods
.method public options(Landroidx/camera/core/CameraSelector$Builder;)Landroidx/camera/core/CameraSelector;
    .locals 0

    .line 75
    invoke-super {p0, p1}, Lcom/king/camera/scan/config/CameraConfig;->options(Landroidx/camera/core/CameraSelector$Builder;)Landroidx/camera/core/CameraSelector;

    move-result-object p1

    return-object p1
.end method

.method public options(Landroidx/camera/core/ImageAnalysis$Builder;)Landroidx/camera/core/ImageAnalysis;
    .locals 1

    .line 87
    iget v0, p0, Lcom/king/camera/scan/config/AspectRatioCameraConfig;->mAspectRatio:I

    invoke-virtual {p1, v0}, Landroidx/camera/core/ImageAnalysis$Builder;->setTargetAspectRatio(I)Landroidx/camera/core/ImageAnalysis$Builder;

    .line 88
    invoke-super {p0, p1}, Lcom/king/camera/scan/config/CameraConfig;->options(Landroidx/camera/core/ImageAnalysis$Builder;)Landroidx/camera/core/ImageAnalysis;

    move-result-object p1

    return-object p1
.end method

.method public options(Landroidx/camera/core/Preview$Builder;)Landroidx/camera/core/Preview;
    .locals 0

    .line 81
    invoke-super {p0, p1}, Lcom/king/camera/scan/config/CameraConfig;->options(Landroidx/camera/core/Preview$Builder;)Landroidx/camera/core/Preview;

    move-result-object p1

    return-object p1
.end method
