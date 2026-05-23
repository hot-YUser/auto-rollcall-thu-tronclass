.class public final Landroidx/camera/core/resolutionselector/AspectRatioStrategy;
.super Ljava/lang/Object;
.source "AspectRatioStrategy.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/resolutionselector/AspectRatioStrategy$AspectRatioFallbackRule;
    }
.end annotation


# static fields
.field public static final FALLBACK_RULE_AUTO:I = 0x1

.field public static final FALLBACK_RULE_NONE:I

.field public static final RATIO_16_9_FALLBACK_AUTO_STRATEGY:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

.field public static final RATIO_4_3_FALLBACK_AUTO_STRATEGY:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;


# instance fields
.field private final mFallbackRule:I

.field private final mPreferredAspectRatio:I


# direct methods
.method static constructor <clinit>()V
    .locals 3

    .line 80
    new-instance v0, Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    const/4 v1, 0x0

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Landroidx/camera/core/resolutionselector/AspectRatioStrategy;-><init>(II)V

    sput-object v0, Landroidx/camera/core/resolutionselector/AspectRatioStrategy;->RATIO_4_3_FALLBACK_AUTO_STRATEGY:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    .line 93
    new-instance v0, Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    invoke-direct {v0, v2, v2}, Landroidx/camera/core/resolutionselector/AspectRatioStrategy;-><init>(II)V

    sput-object v0, Landroidx/camera/core/resolutionselector/AspectRatioStrategy;->RATIO_16_9_FALLBACK_AUTO_STRATEGY:Landroidx/camera/core/resolutionselector/AspectRatioStrategy;

    return-void
.end method

.method public constructor <init>(II)V
    .locals 0

    .line 123
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 124
    iput p1, p0, Landroidx/camera/core/resolutionselector/AspectRatioStrategy;->mPreferredAspectRatio:I

    .line 125
    iput p2, p0, Landroidx/camera/core/resolutionselector/AspectRatioStrategy;->mFallbackRule:I

    return-void
.end method


# virtual methods
.method public getFallbackRule()I
    .locals 1

    .line 142
    iget v0, p0, Landroidx/camera/core/resolutionselector/AspectRatioStrategy;->mFallbackRule:I

    return v0
.end method

.method public getPreferredAspectRatio()I
    .locals 1

    .line 133
    iget v0, p0, Landroidx/camera/core/resolutionselector/AspectRatioStrategy;->mPreferredAspectRatio:I

    return v0
.end method
