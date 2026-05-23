.class public abstract Landroidx/camera/video/MediaSpec$Builder;
.super Ljava/lang/Object;
.source "MediaSpec.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/MediaSpec;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x409
    name = "Builder"
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 166
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public abstract build()Landroidx/camera/video/MediaSpec;
.end method

.method public configureAudio(Landroidx/core/util/Consumer;)Landroidx/camera/video/MediaSpec$Builder;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/core/util/Consumer<",
            "Landroidx/camera/video/AudioSpec$Builder;",
            ">;)",
            "Landroidx/camera/video/MediaSpec$Builder;"
        }
    .end annotation

    .line 210
    invoke-virtual {p0}, Landroidx/camera/video/MediaSpec$Builder;->getAudioSpec()Landroidx/camera/video/AudioSpec;

    move-result-object v0

    invoke-virtual {v0}, Landroidx/camera/video/AudioSpec;->toBuilder()Landroidx/camera/video/AudioSpec$Builder;

    move-result-object v0

    .line 211
    invoke-interface {p1, v0}, Landroidx/core/util/Consumer;->accept(Ljava/lang/Object;)V

    .line 212
    invoke-virtual {v0}, Landroidx/camera/video/AudioSpec$Builder;->build()Landroidx/camera/video/AudioSpec;

    move-result-object p1

    invoke-virtual {p0, p1}, Landroidx/camera/video/MediaSpec$Builder;->setAudioSpec(Landroidx/camera/video/AudioSpec;)Landroidx/camera/video/MediaSpec$Builder;

    return-object p0
.end method

.method public configureVideo(Landroidx/core/util/Consumer;)Landroidx/camera/video/MediaSpec$Builder;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/core/util/Consumer<",
            "Landroidx/camera/video/VideoSpec$Builder;",
            ">;)",
            "Landroidx/camera/video/MediaSpec$Builder;"
        }
    .end annotation

    .line 262
    invoke-virtual {p0}, Landroidx/camera/video/MediaSpec$Builder;->getVideoSpec()Landroidx/camera/video/VideoSpec;

    move-result-object v0

    invoke-virtual {v0}, Landroidx/camera/video/VideoSpec;->toBuilder()Landroidx/camera/video/VideoSpec$Builder;

    move-result-object v0

    .line 263
    invoke-interface {p1, v0}, Landroidx/core/util/Consumer;->accept(Ljava/lang/Object;)V

    .line 264
    invoke-virtual {v0}, Landroidx/camera/video/VideoSpec$Builder;->build()Landroidx/camera/video/VideoSpec;

    move-result-object p1

    invoke-virtual {p0, p1}, Landroidx/camera/video/MediaSpec$Builder;->setVideoSpec(Landroidx/camera/video/VideoSpec;)Landroidx/camera/video/MediaSpec$Builder;

    return-object p0
.end method

.method abstract getAudioSpec()Landroidx/camera/video/AudioSpec;
.end method

.method abstract getVideoSpec()Landroidx/camera/video/VideoSpec;
.end method

.method public abstract setAudioSpec(Landroidx/camera/video/AudioSpec;)Landroidx/camera/video/MediaSpec$Builder;
.end method

.method public abstract setOutputFormat(I)Landroidx/camera/video/MediaSpec$Builder;
.end method

.method public abstract setVideoSpec(Landroidx/camera/video/VideoSpec;)Landroidx/camera/video/MediaSpec$Builder;
.end method
