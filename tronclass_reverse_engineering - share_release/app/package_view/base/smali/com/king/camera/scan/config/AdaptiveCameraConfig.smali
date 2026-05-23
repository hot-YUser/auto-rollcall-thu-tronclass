.class public Lcom/king/camera/scan/config/AdaptiveCameraConfig;
.super Lcom/king/camera/scan/config/CameraConfig;
.source "AdaptiveCameraConfig.java"


# static fields
.field private static final IMAGE_QUALITY_1080P:I = 0x438

.field private static final IMAGE_QUALITY_720P:I = 0x2d0


# instance fields
.field private mAnalysisQuality:I

.field private mAnalysisTargetSize:Landroid/util/Size;

.field private mAspectRatioStrategy:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

.field private mPreviewQuality:I

.field private mPreviewTargetSize:Landroid/util/Size;


# direct methods
.method public constructor <init>(Landroid/content/Context;)V
    .locals 0

    .line 52
    invoke-direct {p0}, Lcom/king/camera/scan/config/CameraConfig;-><init>()V

    .line 53
    invoke-direct {p0, p1}, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->initAdaptiveCameraConfig(Landroid/content/Context;)V

    return-void
.end method

.method private createAnalysisResolutionSelector()Landroidx/camera/core/resolutionselector/ResolutionSelector;
    .locals 4

    .line 149
    new-instance v0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;

    invoke-direct {v0}, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;-><init>()V

    iget-object v1, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mAspectRatioStrategy:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    .line 150
    invoke-virtual {v0, v1}, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->setAspectRatioStrategy(Landroidx/camera/core/resolutionselector/AspectRatioStrategy;)Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;

    move-result-object v0

    new-instance v1, Landroidx/camera/core/resolutionselector/ResolutionStrategy;

    iget-object v2, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mAnalysisTargetSize:Landroid/util/Size;

    const/4 v3, 0x1

    invoke-direct {v1, v2, v3}, Landroidx/camera/core/resolutionselector/ResolutionStrategy;-><init>(Landroid/util/Size;I)V

    .line 151
    invoke-virtual {v0, v1}, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->setResolutionStrategy(Landroidx/camera/core/resolutionselector/ResolutionStrategy;)Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;

    move-result-object v0

    new-instance v1, Lcom/king/camera/scan/config/AdaptiveCameraConfig$$ExternalSyntheticLambda0;

    invoke-direct {v1, p0}, Lcom/king/camera/scan/config/AdaptiveCameraConfig$$ExternalSyntheticLambda0;-><init>(Lcom/king/camera/scan/config/AdaptiveCameraConfig;)V

    .line 152
    invoke-virtual {v0, v1}, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->setResolutionFilter(Landroidx/camera/core/resolutionselector/ResolutionFilter;)Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;

    move-result-object v0

    .line 163
    invoke-virtual {v0}, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->build()Landroidx/camera/core/resolutionselector/ResolutionSelector;

    move-result-object v0

    return-object v0
.end method

.method private createPreviewResolutionSelector()Landroidx/camera/core/resolutionselector/ResolutionSelector;
    .locals 4

    .line 126
    new-instance v0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;

    invoke-direct {v0}, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;-><init>()V

    iget-object v1, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mAspectRatioStrategy:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    .line 127
    invoke-virtual {v0, v1}, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->setAspectRatioStrategy(Landroidx/camera/core/resolutionselector/AspectRatioStrategy;)Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;

    move-result-object v0

    new-instance v1, Landroidx/camera/core/resolutionselector/ResolutionStrategy;

    iget-object v2, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mPreviewTargetSize:Landroid/util/Size;

    const/4 v3, 0x1

    invoke-direct {v1, v2, v3}, Landroidx/camera/core/resolutionselector/ResolutionStrategy;-><init>(Landroid/util/Size;I)V

    .line 128
    invoke-virtual {v0, v1}, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->setResolutionStrategy(Landroidx/camera/core/resolutionselector/ResolutionStrategy;)Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;

    move-result-object v0

    new-instance v1, Lcom/king/camera/scan/config/AdaptiveCameraConfig$$ExternalSyntheticLambda1;

    invoke-direct {v1, p0}, Lcom/king/camera/scan/config/AdaptiveCameraConfig$$ExternalSyntheticLambda1;-><init>(Lcom/king/camera/scan/config/AdaptiveCameraConfig;)V

    .line 129
    invoke-virtual {v0, v1}, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->setResolutionFilter(Landroidx/camera/core/resolutionselector/ResolutionFilter;)Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;

    move-result-object v0

    .line 140
    invoke-virtual {v0}, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->build()Landroidx/camera/core/resolutionselector/ResolutionSelector;

    move-result-object v0

    return-object v0
.end method

.method private initAdaptiveCameraConfig(Landroid/content/Context;)V
    .locals 6

    .line 62
    invoke-virtual {p1}, Landroid/content/Context;->getResources()Landroid/content/res/Resources;

    move-result-object p1

    invoke-virtual {p1}, Landroid/content/res/Resources;->getDisplayMetrics()Landroid/util/DisplayMetrics;

    move-result-object p1

    .line 63
    iget v0, p1, Landroid/util/DisplayMetrics;->widthPixels:I

    .line 64
    iget p1, p1, Landroid/util/DisplayMetrics;->heightPixels:I

    .line 65
    invoke-static {v0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    filled-new-array {v1, v2}, [Ljava/lang/Object;

    move-result-object v1

    const-string v2, "displayMetrics: %dx%d"

    invoke-static {v2, v1}, Lcom/king/logx/LogX;->d(Ljava/lang/String;[Ljava/lang/Object;)V

    const/16 v1, 0x2d0

    const v2, 0x3fe38e39

    const v3, 0x3faaaaab

    const/16 v4, 0x438

    if-ge v0, p1, :cond_2

    int-to-float p1, p1

    int-to-float v5, v0

    div-float/2addr p1, v5

    .line 69
    invoke-static {v0, v4}, Ljava/lang/Math;->min(II)I

    move-result v5

    iput v5, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mPreviewQuality:I

    sub-float v3, p1, v3

    .line 70
    invoke-static {v3}, Ljava/lang/Math;->abs(F)F

    move-result v3

    sub-float v2, p1, v2

    invoke-static {v2}, Ljava/lang/Math;->abs(F)F

    move-result v2

    cmpg-float v2, v3, v2

    if-gez v2, :cond_0

    .line 71
    sget-object v2, Landroidx/camera/core/resolutionselector/AspectRatioStrategy;->RATIO_4_3_FALLBACK_AUTO_STRATEGY:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    iput-object v2, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mAspectRatioStrategy:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    goto :goto_0

    .line 73
    :cond_0
    sget-object v2, Landroidx/camera/core/resolutionselector/AspectRatioStrategy;->RATIO_16_9_FALLBACK_AUTO_STRATEGY:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    iput-object v2, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mAspectRatioStrategy:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    .line 75
    :goto_0
    new-instance v2, Landroid/util/Size;

    iget v3, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mPreviewQuality:I

    int-to-float v5, v3

    mul-float/2addr v5, p1

    invoke-static {v5}, Ljava/lang/Math;->round(F)I

    move-result v5

    invoke-direct {v2, v3, v5}, Landroid/util/Size;-><init>(II)V

    iput-object v2, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mPreviewTargetSize:Landroid/util/Size;

    if-le v0, v4, :cond_1

    .line 77
    iput v4, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mAnalysisQuality:I

    goto :goto_1

    .line 79
    :cond_1
    invoke-static {v0, v1}, Ljava/lang/Math;->min(II)I

    move-result v0

    iput v0, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mAnalysisQuality:I

    .line 81
    :goto_1
    new-instance v0, Landroid/util/Size;

    iget v1, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mAnalysisQuality:I

    int-to-float v2, v1

    mul-float/2addr v2, p1

    invoke-static {v2}, Ljava/lang/Math;->round(F)I

    move-result p1

    invoke-direct {v0, v1, p1}, Landroid/util/Size;-><init>(II)V

    iput-object v0, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mAnalysisTargetSize:Landroid/util/Size;

    goto :goto_4

    .line 83
    :cond_2
    invoke-static {p1, v4}, Ljava/lang/Math;->min(II)I

    move-result v5

    iput v5, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mPreviewQuality:I

    int-to-float v0, v0

    int-to-float v5, p1

    div-float/2addr v0, v5

    sub-float v3, v0, v3

    .line 85
    invoke-static {v3}, Ljava/lang/Math;->abs(F)F

    move-result v3

    sub-float v2, v0, v2

    invoke-static {v2}, Ljava/lang/Math;->abs(F)F

    move-result v2

    cmpg-float v2, v3, v2

    if-gez v2, :cond_3

    .line 86
    sget-object v2, Landroidx/camera/core/resolutionselector/AspectRatioStrategy;->RATIO_4_3_FALLBACK_AUTO_STRATEGY:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    iput-object v2, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mAspectRatioStrategy:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    goto :goto_2

    .line 88
    :cond_3
    sget-object v2, Landroidx/camera/core/resolutionselector/AspectRatioStrategy;->RATIO_16_9_FALLBACK_AUTO_STRATEGY:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    iput-object v2, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mAspectRatioStrategy:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    .line 90
    :goto_2
    new-instance v2, Landroid/util/Size;

    iget v3, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mPreviewQuality:I

    int-to-float v3, v3

    mul-float/2addr v3, v0

    invoke-static {v3}, Ljava/lang/Math;->round(F)I

    move-result v3

    iget v5, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mPreviewQuality:I

    invoke-direct {v2, v3, v5}, Landroid/util/Size;-><init>(II)V

    iput-object v2, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mPreviewTargetSize:Landroid/util/Size;

    if-le p1, v4, :cond_4

    .line 92
    iput v4, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mAnalysisQuality:I

    goto :goto_3

    .line 94
    :cond_4
    invoke-static {p1, v1}, Ljava/lang/Math;->min(II)I

    move-result p1

    iput p1, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mAnalysisQuality:I

    .line 96
    :goto_3
    new-instance p1, Landroid/util/Size;

    iget v1, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mAnalysisQuality:I

    int-to-float v1, v1

    mul-float/2addr v1, v0

    invoke-static {v1}, Ljava/lang/Math;->round(F)I

    move-result v0

    iget v1, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mAnalysisQuality:I

    invoke-direct {p1, v0, v1}, Landroid/util/Size;-><init>(II)V

    iput-object p1, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mAnalysisTargetSize:Landroid/util/Size;

    :goto_4
    return-void
.end method


# virtual methods
.method synthetic lambda$createAnalysisResolutionSelector$1$com-king-camera-scan-config-AdaptiveCameraConfig(Ljava/util/List;I)Ljava/util/List;
    .locals 3

    .line 153
    new-instance p2, Ljava/lang/StringBuilder;

    const-string v0, "ImageAnalysis supportedSizes: "

    invoke-direct {p2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    const/4 v0, 0x0

    new-array v0, v0, [Ljava/lang/Object;

    invoke-static {p2, v0}, Lcom/king/logx/LogX;->d(Ljava/lang/String;[Ljava/lang/Object;)V

    .line 154
    new-instance p2, Ljava/util/ArrayList;

    invoke-direct {p2}, Ljava/util/ArrayList;-><init>()V

    .line 155
    invoke-interface {p1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :cond_0
    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_1

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/util/Size;

    .line 156
    invoke-virtual {v0}, Landroid/util/Size;->getWidth()I

    move-result v1

    invoke-virtual {v0}, Landroid/util/Size;->getHeight()I

    move-result v2

    invoke-static {v1, v2}, Ljava/lang/Math;->min(II)I

    move-result v1

    .line 157
    iget v2, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mAnalysisQuality:I

    if-gt v1, v2, :cond_0

    .line 158
    invoke-interface {p2, v0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    goto :goto_0

    :cond_1
    return-object p2
.end method

.method synthetic lambda$createPreviewResolutionSelector$0$com-king-camera-scan-config-AdaptiveCameraConfig(Ljava/util/List;I)Ljava/util/List;
    .locals 3

    .line 130
    new-instance p2, Ljava/lang/StringBuilder;

    const-string v0, "Preview supportedSizes: "

    invoke-direct {p2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    const/4 v0, 0x0

    new-array v0, v0, [Ljava/lang/Object;

    invoke-static {p2, v0}, Lcom/king/logx/LogX;->d(Ljava/lang/String;[Ljava/lang/Object;)V

    .line 131
    new-instance p2, Ljava/util/ArrayList;

    invoke-direct {p2}, Ljava/util/ArrayList;-><init>()V

    .line 132
    invoke-interface {p1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :cond_0
    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_1

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/util/Size;

    .line 133
    invoke-virtual {v0}, Landroid/util/Size;->getWidth()I

    move-result v1

    invoke-virtual {v0}, Landroid/util/Size;->getHeight()I

    move-result v2

    invoke-static {v1, v2}, Ljava/lang/Math;->min(II)I

    move-result v1

    .line 134
    iget v2, p0, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->mPreviewQuality:I

    if-gt v1, v2, :cond_0

    .line 135
    invoke-interface {p2, v0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    goto :goto_0

    :cond_1
    return-object p2
.end method

.method public options(Landroidx/camera/core/CameraSelector$Builder;)Landroidx/camera/core/CameraSelector;
    .locals 0

    .line 103
    invoke-super {p0, p1}, Lcom/king/camera/scan/config/CameraConfig;->options(Landroidx/camera/core/CameraSelector$Builder;)Landroidx/camera/core/CameraSelector;

    move-result-object p1

    return-object p1
.end method

.method public options(Landroidx/camera/core/ImageAnalysis$Builder;)Landroidx/camera/core/ImageAnalysis;
    .locals 1

    .line 116
    invoke-direct {p0}, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->createAnalysisResolutionSelector()Landroidx/camera/core/resolutionselector/ResolutionSelector;

    move-result-object v0

    invoke-virtual {p1, v0}, Landroidx/camera/core/ImageAnalysis$Builder;->setResolutionSelector(Landroidx/camera/core/resolutionselector/ResolutionSelector;)Landroidx/camera/core/ImageAnalysis$Builder;

    .line 117
    invoke-super {p0, p1}, Lcom/king/camera/scan/config/CameraConfig;->options(Landroidx/camera/core/ImageAnalysis$Builder;)Landroidx/camera/core/ImageAnalysis;

    move-result-object p1

    return-object p1
.end method

.method public options(Landroidx/camera/core/Preview$Builder;)Landroidx/camera/core/Preview;
    .locals 1

    .line 109
    invoke-direct {p0}, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->createPreviewResolutionSelector()Landroidx/camera/core/resolutionselector/ResolutionSelector;

    move-result-object v0

    invoke-virtual {p1, v0}, Landroidx/camera/core/Preview$Builder;->setResolutionSelector(Landroidx/camera/core/resolutionselector/ResolutionSelector;)Landroidx/camera/core/Preview$Builder;

    .line 110
    invoke-super {p0, p1}, Lcom/king/camera/scan/config/CameraConfig;->options(Landroidx/camera/core/Preview$Builder;)Landroidx/camera/core/Preview;

    move-result-object p1

    return-object p1
.end method
