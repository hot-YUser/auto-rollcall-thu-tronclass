.class abstract Landroidx/camera/video/QualityRatioToResolutionsTable$QualityRatio;
.super Ljava/lang/Object;
.source "QualityRatioToResolutionsTable.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/QualityRatioToResolutionsTable;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x408
    name = "QualityRatio"
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 190
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static of(Landroidx/camera/video/Quality;I)Landroidx/camera/video/QualityRatioToResolutionsTable$QualityRatio;
    .locals 1

    .line 193
    new-instance v0, Landroidx/camera/video/AutoValue_QualityRatioToResolutionsTable_QualityRatio;

    invoke-direct {v0, p0, p1}, Landroidx/camera/video/AutoValue_QualityRatioToResolutionsTable_QualityRatio;-><init>(Landroidx/camera/video/Quality;I)V

    return-object v0
.end method


# virtual methods
.method abstract getAspectRatio()I
.end method

.method abstract getQuality()Landroidx/camera/video/Quality;
.end method
