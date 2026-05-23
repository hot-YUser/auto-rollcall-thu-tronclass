.class public abstract Landroidx/camera/video/internal/config/AudioMimeInfo;
.super Landroidx/camera/video/internal/config/MimeInfo;
.source "AudioMimeInfo.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/internal/config/AudioMimeInfo$Builder;
    }
.end annotation


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 37
    invoke-direct {p0}, Landroidx/camera/video/internal/config/MimeInfo;-><init>()V

    return-void
.end method

.method public static builder(Ljava/lang/String;)Landroidx/camera/video/internal/config/AudioMimeInfo$Builder;
    .locals 1

    .line 51
    new-instance v0, Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo$Builder;

    invoke-direct {v0}, Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo$Builder;-><init>()V

    .line 52
    invoke-virtual {v0, p0}, Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo$Builder;->setMimeType(Ljava/lang/String;)Landroidx/camera/video/internal/config/AudioMimeInfo$Builder;

    move-result-object p0

    const/4 v0, -0x1

    .line 53
    invoke-virtual {p0, v0}, Landroidx/camera/video/internal/config/AudioMimeInfo$Builder;->setProfile(I)Ljava/lang/Object;

    move-result-object p0

    check-cast p0, Landroidx/camera/video/internal/config/AudioMimeInfo$Builder;

    return-object p0
.end method


# virtual methods
.method public abstract getCompatibleAudioProfile()Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;
.end method
