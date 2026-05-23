.class public final Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;
.super Ljava/lang/Object;
.source "ResolutionSelector.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/resolutionselector/ResolutionSelector;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = "Builder"
.end annotation


# instance fields
.field private mAllowedResolutionMode:I

.field private mAspectRatioStrategy:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

.field private mResolutionFilter:Landroidx/camera/core/resolutionselector/ResolutionFilter;

.field private mResolutionStrategy:Landroidx/camera/core/resolutionselector/ResolutionStrategy;


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 199
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 187
    sget-object v0, Landroidx/camera/core/resolutionselector/AspectRatioStrategy;->RATIO_4_3_FALLBACK_AUTO_STRATEGY:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    iput-object v0, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->mAspectRatioStrategy:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    const/4 v0, 0x0

    .line 189
    iput-object v0, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->mResolutionStrategy:Landroidx/camera/core/resolutionselector/ResolutionStrategy;

    .line 191
    iput-object v0, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->mResolutionFilter:Landroidx/camera/core/resolutionselector/ResolutionFilter;

    const/4 v0, 0x0

    .line 193
    iput v0, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->mAllowedResolutionMode:I

    return-void
.end method

.method private constructor <init>(Landroidx/camera/core/resolutionselector/ResolutionSelector;)V
    .locals 1

    .line 202
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 187
    sget-object v0, Landroidx/camera/core/resolutionselector/AspectRatioStrategy;->RATIO_4_3_FALLBACK_AUTO_STRATEGY:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    iput-object v0, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->mAspectRatioStrategy:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    const/4 v0, 0x0

    .line 189
    iput-object v0, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->mResolutionStrategy:Landroidx/camera/core/resolutionselector/ResolutionStrategy;

    .line 191
    iput-object v0, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->mResolutionFilter:Landroidx/camera/core/resolutionselector/ResolutionFilter;

    const/4 v0, 0x0

    .line 193
    iput v0, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->mAllowedResolutionMode:I

    .line 203
    invoke-virtual {p1}, Landroidx/camera/core/resolutionselector/ResolutionSelector;->getAspectRatioStrategy()Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    move-result-object v0

    iput-object v0, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->mAspectRatioStrategy:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    .line 204
    invoke-virtual {p1}, Landroidx/camera/core/resolutionselector/ResolutionSelector;->getResolutionStrategy()Landroidx/camera/core/resolutionselector/ResolutionStrategy;

    move-result-object v0

    iput-object v0, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->mResolutionStrategy:Landroidx/camera/core/resolutionselector/ResolutionStrategy;

    .line 205
    invoke-virtual {p1}, Landroidx/camera/core/resolutionselector/ResolutionSelector;->getResolutionFilter()Landroidx/camera/core/resolutionselector/ResolutionFilter;

    move-result-object v0

    iput-object v0, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->mResolutionFilter:Landroidx/camera/core/resolutionselector/ResolutionFilter;

    .line 206
    invoke-virtual {p1}, Landroidx/camera/core/resolutionselector/ResolutionSelector;->getAllowedResolutionMode()I

    move-result p1

    iput p1, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->mAllowedResolutionMode:I

    return-void
.end method

.method public static fromResolutionSelector(Landroidx/camera/core/resolutionselector/ResolutionSelector;)Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;
    .locals 1

    .line 216
    new-instance v0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;

    invoke-direct {v0, p0}, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;-><init>(Landroidx/camera/core/resolutionselector/ResolutionSelector;)V

    return-object v0
.end method


# virtual methods
.method public build()Landroidx/camera/core/resolutionselector/ResolutionSelector;
    .locals 5

    .line 273
    new-instance v0, Landroidx/camera/core/resolutionselector/ResolutionSelector;

    iget-object v1, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->mAspectRatioStrategy:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    iget-object v2, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->mResolutionStrategy:Landroidx/camera/core/resolutionselector/ResolutionStrategy;

    iget-object v3, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->mResolutionFilter:Landroidx/camera/core/resolutionselector/ResolutionFilter;

    iget v4, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->mAllowedResolutionMode:I

    invoke-direct {v0, v1, v2, v3, v4}, Landroidx/camera/core/resolutionselector/ResolutionSelector;-><init>(Landroidx/camera/core/resolutionselector/AspectRatioStrategy;Landroidx/camera/core/resolutionselector/ResolutionStrategy;Landroidx/camera/core/resolutionselector/ResolutionFilter;I)V

    return-object v0
.end method

.method public setAllowedResolutionMode(I)Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;
    .locals 0

    .line 263
    iput p1, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->mAllowedResolutionMode:I

    return-object p0
.end method

.method public setAspectRatioStrategy(Landroidx/camera/core/resolutionselector/AspectRatioStrategy;)Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;
    .locals 0

    .line 229
    iput-object p1, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->mAspectRatioStrategy:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    return-object p0
.end method

.method public setResolutionFilter(Landroidx/camera/core/resolutionselector/ResolutionFilter;)Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;
    .locals 0

    .line 251
    iput-object p1, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->mResolutionFilter:Landroidx/camera/core/resolutionselector/ResolutionFilter;

    return-object p0
.end method

.method public setResolutionStrategy(Landroidx/camera/core/resolutionselector/ResolutionStrategy;)Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;
    .locals 0

    .line 240
    iput-object p1, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;->mResolutionStrategy:Landroidx/camera/core/resolutionselector/ResolutionStrategy;

    return-object p0
.end method
