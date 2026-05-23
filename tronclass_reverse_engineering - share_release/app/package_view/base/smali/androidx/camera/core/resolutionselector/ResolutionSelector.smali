.class public final Landroidx/camera/core/resolutionselector/ResolutionSelector;
.super Ljava/lang/Object;
.source "ResolutionSelector.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/resolutionselector/ResolutionSelector$Builder;,
        Landroidx/camera/core/resolutionselector/ResolutionSelector$AllowedResolutionMode;
    }
.end annotation


# static fields
.field public static final PREFER_CAPTURE_RATE_OVER_HIGHER_RESOLUTION:I = 0x0

.field public static final PREFER_HIGHER_RESOLUTION_OVER_CAPTURE_RATE:I = 0x1


# instance fields
.field private final mAllowedResolutionMode:I

.field private final mAspectRatioStrategy:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

.field private final mResolutionFilter:Landroidx/camera/core/resolutionselector/ResolutionFilter;

.field private final mResolutionStrategy:Landroidx/camera/core/resolutionselector/ResolutionStrategy;


# direct methods
.method constructor <init>(Landroidx/camera/core/resolutionselector/AspectRatioStrategy;Landroidx/camera/core/resolutionselector/ResolutionStrategy;Landroidx/camera/core/resolutionselector/ResolutionFilter;I)V
    .locals 0

    .line 142
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 143
    iput-object p1, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector;->mAspectRatioStrategy:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    .line 144
    iput-object p2, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector;->mResolutionStrategy:Landroidx/camera/core/resolutionselector/ResolutionStrategy;

    .line 145
    iput-object p3, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector;->mResolutionFilter:Landroidx/camera/core/resolutionselector/ResolutionFilter;

    .line 146
    iput p4, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector;->mAllowedResolutionMode:I

    return-void
.end method


# virtual methods
.method public getAllowedResolutionMode()I
    .locals 1

    .line 180
    iget v0, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector;->mAllowedResolutionMode:I

    return v0
.end method

.method public getAspectRatioStrategy()Landroidx/camera/core/resolutionselector/AspectRatioStrategy;
    .locals 1

    .line 156
    iget-object v0, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector;->mAspectRatioStrategy:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    return-object v0
.end method

.method public getResolutionFilter()Landroidx/camera/core/resolutionselector/ResolutionFilter;
    .locals 1

    .line 172
    iget-object v0, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector;->mResolutionFilter:Landroidx/camera/core/resolutionselector/ResolutionFilter;

    return-object v0
.end method

.method public getResolutionStrategy()Landroidx/camera/core/resolutionselector/ResolutionStrategy;
    .locals 1

    .line 164
    iget-object v0, p0, Landroidx/camera/core/resolutionselector/ResolutionSelector;->mResolutionStrategy:Landroidx/camera/core/resolutionselector/ResolutionStrategy;

    return-object v0
.end method
