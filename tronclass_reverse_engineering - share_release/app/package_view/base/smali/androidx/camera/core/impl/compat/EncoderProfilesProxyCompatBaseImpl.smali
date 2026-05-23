.class Landroidx/camera/core/impl/compat/EncoderProfilesProxyCompatBaseImpl;
.super Ljava/lang/Object;
.source "EncoderProfilesProxyCompatBaseImpl.java"


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 88
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static from(Landroid/media/CamcorderProfile;)Landroidx/camera/core/impl/EncoderProfilesProxy;
    .locals 3

    .line 43
    iget v0, p0, Landroid/media/CamcorderProfile;->duration:I

    iget v1, p0, Landroid/media/CamcorderProfile;->fileFormat:I

    .line 46
    invoke-static {p0}, Landroidx/camera/core/impl/compat/EncoderProfilesProxyCompatBaseImpl;->toAudioProfiles(Landroid/media/CamcorderProfile;)Ljava/util/List;

    move-result-object v2

    .line 47
    invoke-static {p0}, Landroidx/camera/core/impl/compat/EncoderProfilesProxyCompatBaseImpl;->toVideoProfiles(Landroid/media/CamcorderProfile;)Ljava/util/List;

    move-result-object p0

    .line 43
    invoke-static {v0, v1, v2, p0}, Landroidx/camera/core/impl/EncoderProfilesProxy$ImmutableEncoderProfilesProxy;->create(IILjava/util/List;Ljava/util/List;)Landroidx/camera/core/impl/EncoderProfilesProxy$ImmutableEncoderProfilesProxy;

    move-result-object p0

    return-object p0
.end method

.method private static toAudioProfiles(Landroid/media/CamcorderProfile;)Ljava/util/List;
    .locals 7
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/media/CamcorderProfile;",
            ")",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;",
            ">;"
        }
    .end annotation

    .line 75
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 76
    iget v1, p0, Landroid/media/CamcorderProfile;->audioCodec:I

    iget v2, p0, Landroid/media/CamcorderProfile;->audioCodec:I

    .line 78
    invoke-static {v2}, Landroidx/camera/core/impl/EncoderProfilesProxy;->getAudioCodecMimeType(I)Ljava/lang/String;

    move-result-object v2

    iget v3, p0, Landroid/media/CamcorderProfile;->audioBitRate:I

    iget v4, p0, Landroid/media/CamcorderProfile;->audioSampleRate:I

    iget v5, p0, Landroid/media/CamcorderProfile;->audioChannels:I

    iget p0, p0, Landroid/media/CamcorderProfile;->audioCodec:I

    .line 82
    invoke-static {p0}, Landroidx/camera/core/impl/EncoderProfilesProxy;->getRequiredAudioProfile(I)I

    move-result v6

    .line 76
    invoke-static/range {v1 .. v6}, Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;->create(ILjava/lang/String;IIII)Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;

    move-result-object p0

    invoke-interface {v0, p0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    return-object v0
.end method

.method private static toVideoProfiles(Landroid/media/CamcorderProfile;)Ljava/util/List;
    .locals 11
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/media/CamcorderProfile;",
            ")",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;",
            ">;"
        }
    .end annotation

    .line 55
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 56
    iget v1, p0, Landroid/media/CamcorderProfile;->videoCodec:I

    iget v2, p0, Landroid/media/CamcorderProfile;->videoCodec:I

    .line 58
    invoke-static {v2}, Landroidx/camera/core/impl/EncoderProfilesProxy;->getVideoCodecMimeType(I)Ljava/lang/String;

    move-result-object v2

    iget v3, p0, Landroid/media/CamcorderProfile;->videoBitRate:I

    iget v4, p0, Landroid/media/CamcorderProfile;->videoFrameRate:I

    iget v5, p0, Landroid/media/CamcorderProfile;->videoFrameWidth:I

    iget v6, p0, Landroid/media/CamcorderProfile;->videoFrameHeight:I

    const/4 v9, 0x0

    const/4 v10, 0x0

    const/4 v7, -0x1

    const/16 v8, 0x8

    .line 56
    invoke-static/range {v1 .. v10}, Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;->create(ILjava/lang/String;IIIIIIII)Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;

    move-result-object p0

    invoke-interface {v0, p0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    return-object v0
.end method
