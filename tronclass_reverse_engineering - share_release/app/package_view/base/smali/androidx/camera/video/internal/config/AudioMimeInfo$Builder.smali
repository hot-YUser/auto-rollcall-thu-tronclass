.class public abstract Landroidx/camera/video/internal/config/AudioMimeInfo$Builder;
.super Landroidx/camera/video/internal/config/MimeInfo$Builder;
.source "AudioMimeInfo.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/internal/config/AudioMimeInfo;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x409
    name = "Builder"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Landroidx/camera/video/internal/config/MimeInfo$Builder<",
        "Landroidx/camera/video/internal/config/AudioMimeInfo$Builder;",
        ">;"
    }
.end annotation


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 59
    invoke-direct {p0}, Landroidx/camera/video/internal/config/MimeInfo$Builder;-><init>()V

    return-void
.end method


# virtual methods
.method public abstract build()Landroidx/camera/video/internal/config/AudioMimeInfo;
.end method

.method public bridge synthetic build()Landroidx/camera/video/internal/config/MimeInfo;
    .locals 1

    .line 57
    invoke-virtual {p0}, Landroidx/camera/video/internal/config/AudioMimeInfo$Builder;->build()Landroidx/camera/video/internal/config/AudioMimeInfo;

    move-result-object v0

    return-object v0
.end method

.method public abstract setCompatibleAudioProfile(Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;)Landroidx/camera/video/internal/config/AudioMimeInfo$Builder;
.end method
