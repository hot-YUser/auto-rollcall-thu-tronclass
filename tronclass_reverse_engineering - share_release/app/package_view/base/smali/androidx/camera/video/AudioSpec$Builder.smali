.class public abstract Landroidx/camera/video/AudioSpec$Builder;
.super Ljava/lang/Object;
.source "AudioSpec.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/AudioSpec;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x409
    name = "Builder"
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 171
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public abstract build()Landroidx/camera/video/AudioSpec;
.end method

.method public abstract setBitrate(Landroid/util/Range;)Landroidx/camera/video/AudioSpec$Builder;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;)",
            "Landroidx/camera/video/AudioSpec$Builder;"
        }
    .end annotation
.end method

.method public abstract setChannelCount(I)Landroidx/camera/video/AudioSpec$Builder;
.end method

.method public abstract setSampleRate(Landroid/util/Range;)Landroidx/camera/video/AudioSpec$Builder;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;)",
            "Landroidx/camera/video/AudioSpec$Builder;"
        }
    .end annotation
.end method

.method public abstract setSource(I)Landroidx/camera/video/AudioSpec$Builder;
.end method

.method public abstract setSourceFormat(I)Landroidx/camera/video/AudioSpec$Builder;
.end method
