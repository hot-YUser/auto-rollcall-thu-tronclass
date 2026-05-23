.class public abstract Landroidx/camera/video/VideoSpec$Builder;
.super Ljava/lang/Object;
.source "VideoSpec.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/VideoSpec;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x409
    name = "Builder"
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 115
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public abstract build()Landroidx/camera/video/VideoSpec;
.end method

.method abstract setAspectRatio(I)Landroidx/camera/video/VideoSpec$Builder;
.end method

.method public abstract setBitrate(Landroid/util/Range;)Landroidx/camera/video/VideoSpec$Builder;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;)",
            "Landroidx/camera/video/VideoSpec$Builder;"
        }
    .end annotation
.end method

.method public abstract setFrameRate(Landroid/util/Range;)Landroidx/camera/video/VideoSpec$Builder;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;)",
            "Landroidx/camera/video/VideoSpec$Builder;"
        }
    .end annotation
.end method

.method public abstract setQualitySelector(Landroidx/camera/video/QualitySelector;)Landroidx/camera/video/VideoSpec$Builder;
.end method
