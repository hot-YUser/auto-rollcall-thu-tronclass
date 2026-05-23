.class final Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo;
.super Landroidx/camera/video/internal/config/VideoMimeInfo;
.source "AutoValue_VideoMimeInfo.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo$Builder;
    }
.end annotation


# instance fields
.field private final compatibleVideoProfile:Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;

.field private final mimeType:Ljava/lang/String;

.field private final profile:I


# direct methods
.method private constructor <init>(Ljava/lang/String;ILandroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;)V
    .locals 0

    .line 21
    invoke-direct {p0}, Landroidx/camera/video/internal/config/VideoMimeInfo;-><init>()V

    .line 22
    iput-object p1, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo;->mimeType:Ljava/lang/String;

    .line 23
    iput p2, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo;->profile:I

    .line 24
    iput-object p3, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo;->compatibleVideoProfile:Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;

    return-void
.end method

.method synthetic constructor <init>(Ljava/lang/String;ILandroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo$1;)V
    .locals 0

    .line 10
    invoke-direct {p0, p1, p2, p3}, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo;-><init>(Ljava/lang/String;ILandroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;)V

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
    instance-of v1, p1, Landroidx/camera/video/internal/config/VideoMimeInfo;

    const/4 v2, 0x0

    if-eqz v1, :cond_3

    .line 59
    check-cast p1, Landroidx/camera/video/internal/config/VideoMimeInfo;

    .line 60
    iget-object v1, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo;->mimeType:Ljava/lang/String;

    invoke-virtual {p1}, Landroidx/camera/video/internal/config/VideoMimeInfo;->getMimeType()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_2

    iget v1, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo;->profile:I

    .line 61
    invoke-virtual {p1}, Landroidx/camera/video/internal/config/VideoMimeInfo;->getProfile()I

    move-result v3

    if-ne v1, v3, :cond_2

    iget-object v1, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo;->compatibleVideoProfile:Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;

    if-nez v1, :cond_1

    .line 62
    invoke-virtual {p1}, Landroidx/camera/video/internal/config/VideoMimeInfo;->getCompatibleVideoProfile()Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;

    move-result-object p1

    if-nez p1, :cond_2

    goto :goto_0

    :cond_1
    invoke-virtual {p1}, Landroidx/camera/video/internal/config/VideoMimeInfo;->getCompatibleVideoProfile()Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;

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

.method public getCompatibleVideoProfile()Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;
    .locals 1

    .line 41
    iget-object v0, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo;->compatibleVideoProfile:Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;

    return-object v0
.end method

.method public getMimeType()Ljava/lang/String;
    .locals 1

    .line 30
    iget-object v0, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo;->mimeType:Ljava/lang/String;

    return-object v0
.end method

.method public getProfile()I
    .locals 1

    .line 35
    iget v0, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo;->profile:I

    return v0
.end method

.method public hashCode()I
    .locals 3

    .line 71
    iget-object v0, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo;->mimeType:Ljava/lang/String;

    invoke-virtual {v0}, Ljava/lang/String;->hashCode()I

    move-result v0

    const v1, 0xf4243

    xor-int/2addr v0, v1

    mul-int/2addr v0, v1

    .line 73
    iget v2, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo;->profile:I

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 75
    iget-object v1, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo;->compatibleVideoProfile:Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;

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

    const-string v1, "VideoMimeInfo{mimeType="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo;->mimeType:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", profile="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo;->profile:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", compatibleVideoProfile="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo;->compatibleVideoProfile:Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
