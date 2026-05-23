.class public Lcom/king/camera/scan/config/ResolutionCameraConfig;
.super Lcom/king/camera/scan/config/CameraConfig;
.source "ResolutionCameraConfig.java"


# annotations
.annotation runtime Ljava/lang/Deprecated;
.end annotation


# static fields
.field public static final IMAGE_QUALITY_1080P:I = 0x438

.field public static final IMAGE_QUALITY_720P:I = 0x2d0


# instance fields
.field private mTargetSize:Landroid/util/Size;


# direct methods
.method public constructor <init>(Landroid/content/Context;)V
    .locals 1

    const/16 v0, 0x438

    .line 62
    invoke-direct {p0, p1, v0}, Lcom/king/camera/scan/config/ResolutionCameraConfig;-><init>(Landroid/content/Context;I)V

    return-void
.end method

.method public constructor <init>(Landroid/content/Context;I)V
    .locals 0

    .line 72
    invoke-direct {p0}, Lcom/king/camera/scan/config/CameraConfig;-><init>()V

    .line 73
    invoke-direct {p0, p1, p2}, Lcom/king/camera/scan/config/ResolutionCameraConfig;->initTargetResolutionSize(Landroid/content/Context;I)V

    return-void
.end method

.method private initTargetResolutionSize(Landroid/content/Context;I)V
    .locals 4

    .line 83
    invoke-virtual {p1}, Landroid/content/Context;->getResources()Landroid/content/res/Resources;

    move-result-object p1

    invoke-virtual {p1}, Landroid/content/res/Resources;->getDisplayMetrics()Landroid/util/DisplayMetrics;

    move-result-object p1

    .line 84
    iget v0, p1, Landroid/util/DisplayMetrics;->widthPixels:I

    .line 85
    iget p1, p1, Landroid/util/DisplayMetrics;->heightPixels:I

    .line 86
    invoke-static {v0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    filled-new-array {v1, v2}, [Ljava/lang/Object;

    move-result-object v1

    const-string v2, "displayMetrics: %dx%d"

    invoke-static {v2, v1}, Lcom/king/logx/LogX;->d(Ljava/lang/String;[Ljava/lang/Object;)V

    const v1, 0x3fe38e39

    const v2, 0x3faaaaab

    if-ge v0, p1, :cond_1

    int-to-float p1, p1

    int-to-float v3, v0

    div-float/2addr p1, v3

    .line 91
    invoke-static {v0, p2}, Ljava/lang/Math;->min(II)I

    move-result p2

    sub-float v0, p1, v2

    .line 92
    invoke-static {v0}, Ljava/lang/Math;->abs(F)F

    move-result v0

    sub-float/2addr p1, v1

    invoke-static {p1}, Ljava/lang/Math;->abs(F)F

    move-result p1

    cmpg-float p1, v0, p1

    if-gez p1, :cond_0

    .line 93
    new-instance p1, Landroid/util/Size;

    int-to-float v0, p2

    mul-float/2addr v0, v2

    invoke-static {v0}, Ljava/lang/Math;->round(F)I

    move-result v0

    invoke-direct {p1, p2, v0}, Landroid/util/Size;-><init>(II)V

    iput-object p1, p0, Lcom/king/camera/scan/config/ResolutionCameraConfig;->mTargetSize:Landroid/util/Size;

    goto :goto_0

    .line 95
    :cond_0
    new-instance p1, Landroid/util/Size;

    int-to-float v0, p2

    mul-float/2addr v0, v1

    invoke-static {v0}, Ljava/lang/Math;->round(F)I

    move-result v0

    invoke-direct {p1, p2, v0}, Landroid/util/Size;-><init>(II)V

    iput-object p1, p0, Lcom/king/camera/scan/config/ResolutionCameraConfig;->mTargetSize:Landroid/util/Size;

    goto :goto_0

    .line 98
    :cond_1
    invoke-static {p1, p2}, Ljava/lang/Math;->min(II)I

    move-result p2

    int-to-float v0, v0

    int-to-float p1, p1

    div-float/2addr v0, p1

    sub-float p1, v0, v2

    .line 100
    invoke-static {p1}, Ljava/lang/Math;->abs(F)F

    move-result p1

    sub-float/2addr v0, v1

    invoke-static {v0}, Ljava/lang/Math;->abs(F)F

    move-result v0

    cmpg-float p1, p1, v0

    if-gez p1, :cond_2

    .line 101
    new-instance p1, Landroid/util/Size;

    int-to-float v0, p2

    mul-float/2addr v0, v2

    invoke-static {v0}, Ljava/lang/Math;->round(F)I

    move-result v0

    invoke-direct {p1, v0, p2}, Landroid/util/Size;-><init>(II)V

    iput-object p1, p0, Lcom/king/camera/scan/config/ResolutionCameraConfig;->mTargetSize:Landroid/util/Size;

    goto :goto_0

    .line 103
    :cond_2
    new-instance p1, Landroid/util/Size;

    int-to-float v0, p2

    mul-float/2addr v0, v1

    invoke-static {v0}, Ljava/lang/Math;->round(F)I

    move-result v0

    invoke-direct {p1, v0, p2}, Landroid/util/Size;-><init>(II)V

    iput-object p1, p0, Lcom/king/camera/scan/config/ResolutionCameraConfig;->mTargetSize:Landroid/util/Size;

    .line 106
    :goto_0
    new-instance p1, Ljava/lang/StringBuilder;

    const-string p2, "targetSize: "

    invoke-direct {p1, p2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object p2, p0, Lcom/king/camera/scan/config/ResolutionCameraConfig;->mTargetSize:Landroid/util/Size;

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    const/4 p2, 0x0

    new-array p2, p2, [Ljava/lang/Object;

    invoke-static {p1, p2}, Lcom/king/logx/LogX;->d(Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method


# virtual methods
.method public options(Landroidx/camera/core/CameraSelector$Builder;)Landroidx/camera/core/CameraSelector;
    .locals 0

    .line 112
    invoke-super {p0, p1}, Lcom/king/camera/scan/config/CameraConfig;->options(Landroidx/camera/core/CameraSelector$Builder;)Landroidx/camera/core/CameraSelector;

    move-result-object p1

    return-object p1
.end method

.method public options(Landroidx/camera/core/ImageAnalysis$Builder;)Landroidx/camera/core/ImageAnalysis;
    .locals 1

    .line 124
    iget-object v0, p0, Lcom/king/camera/scan/config/ResolutionCameraConfig;->mTargetSize:Landroid/util/Size;

    invoke-virtual {p1, v0}, Landroidx/camera/core/ImageAnalysis$Builder;->setTargetResolution(Landroid/util/Size;)Landroidx/camera/core/ImageAnalysis$Builder;

    .line 125
    invoke-super {p0, p1}, Lcom/king/camera/scan/config/CameraConfig;->options(Landroidx/camera/core/ImageAnalysis$Builder;)Landroidx/camera/core/ImageAnalysis;

    move-result-object p1

    return-object p1
.end method

.method public options(Landroidx/camera/core/Preview$Builder;)Landroidx/camera/core/Preview;
    .locals 0

    .line 118
    invoke-super {p0, p1}, Lcom/king/camera/scan/config/CameraConfig;->options(Landroidx/camera/core/Preview$Builder;)Landroidx/camera/core/Preview;

    move-result-object p1

    return-object p1
.end method
