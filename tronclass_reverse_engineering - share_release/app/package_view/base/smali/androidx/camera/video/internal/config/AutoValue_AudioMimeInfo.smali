.class final Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo;
.super Landroidx/camera/video/internal/config/AudioMimeInfo;
.source "AutoValue_AudioMimeInfo.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo$Builder;
    }
.end annotation


# instance fields
.field private final compatibleAudioProfile:Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;

.field private final mimeType:Ljava/lang/String;

.field private final profile:I


# direct methods
.method private constructor <init>(Ljava/lang/String;ILandroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;)V
    .locals 0

    .line 21
    invoke-direct {p0}, Landroidx/camera/video/internal/config/AudioMimeInfo;-><init>()V

    .line 22
    iput-object p1, p0, Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo;->mimeType:Ljava/lang/String;

    .line 23
    iput p2, p0, Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo;->profile:I

    .line 24
    iput-object p3, p0, Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo;->compatibleAudioProfile:Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;

    return-void
.end method

.method synthetic constructor <init>(Ljava/lang/String;ILandroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo$1;)V
    .locals 0

    .line 10
    invoke-direct {p0, p1, p2, p3}, Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo;-><init>(Ljava/lang/String;ILandroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;)V

    return-void
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 4

    const/4 v0, 0x1

    if-ne p1, p0, :cond_0

    return v0

    .line 58
    :cond_0
    instance-of v1, p1, Landroidx/camera/video/internal/config/AudioMimeInfo;

    const/4 v2, 0x0

    if-eqz v1, :cond_3

    .line 59
    check-cast p1, Landroidx/camera/video/internal/config/AudioMimeInfo;

    .line 60
    iget-object v1, p0, Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo;->mimeType:Ljava/lang/String;

    invoke-virtual {p1}, Landroidx/camera/video/internal/config/AudioMimeInfo;->getMimeType()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_2

    iget v1, p0, Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo;->profile:I

    .line 61
    invoke-virtual {p1}, Landroidx/camera/video/internal/config/AudioMimeInfo;->getProfile()I

    move-result v3

    if-ne v1, v3, :cond_2

    iget-object v1, p0, Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo;->compatibleAudioProfile:Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;

    if-nez v1, :cond_1

    .line 62
    invoke-virtual {p1}, Landroidx/camera/video/internal/config/AudioMimeInfo;->getCompatibleAudioProfile()Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;

    move-result-object p1

    if-nez p1, :cond_2

    goto :goto_0

    :cond_1
    invoke-virtual {p1}, Landroidx/camera/video/internal/config/AudioMimeInfo;->getCompatibleAudioProfile()Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;

    move-result-object p1

    invoke-virtual {v1, p1}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_2

    goto :goto_0

    :cond_2
    move v0, v2

    :goto_0
    return v0

    :cond_3
    return v2
.end method

.method public getCompatibleAudioProfile()Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;
    .locals 1

    .line 41
    iget-object v0, p0, Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo;->compatibleAudioProfile:Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;

    return-object v0
.end method

.method public getMimeType()Ljava/lang/String;
    .locals 1

    .line 30
    iget-object v0, p0, Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo;->mimeType:Ljava/lang/String;

    return-object v0
.end method

.method public getProfile()I
    .locals 1

    .line 35
    iget v0, p0, Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo;->profile:I

    return v0
.end method

.method public hashCode()I
    .locals 3

    .line 71
    iget-object v0, p0, Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo;->mimeType:Ljava/lang/String;

    invoke-virtual {v0}, Ljava/lang/String;->hashCode()I

    move-result v0

    const v1, 0xf4243

    xor-int/2addr v0, v1

    mul-int/2addr v0, v1

    .line 73
    iget v2, p0, Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo;->profile:I

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 75
    iget-object v1, p0, Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo;->compatibleAudioProfile:Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;

    if-nez v1, :cond_0

    const/4 v1, 0x0

    goto :goto_0

    :cond_0
    invoke-virtual {v1}, Ljava/lang/Object;->hashCode()I

    move-result v1

    :goto_0
    xor-int/2addr v0, v1

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 46
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "AudioMimeInfo{mimeType="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo;->mimeType:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", profile="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo;->profile:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", compatibleAudioProfile="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/video/internal/config/AutoValue_AudioMimeInfo;->compatibleAudioProfile:Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
