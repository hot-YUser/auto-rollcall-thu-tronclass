.class Landroidx/camera/core/impl/compat/EncoderProfilesProxyCompatApi31Impl;
.super Ljava/lang/Object;
.source "EncoderProfilesProxyCompatApi31Impl.java"


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 89
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static from(Landroid/media/EncoderProfiles;)Landroidx/camera/core/impl/EncoderProfilesProxy;
    .locals 3

    .line 41
    invoke-virtual {p0}, Landroid/media/EncoderProfiles;->getDefaultDurationSeconds()I

    move-result v0

    .line 42
    invoke-virtual {p0}, Landroid/media/EncoderProfiles;->getRecommendedFileFormat()I

    move-result v1

    .line 43
    invoke-virtual {p0}, Landroid/media/EncoderProfiles;->getAudioProfiles()Ljava/util/List;

    move-result-object v2

    invoke-static {v2}, Landroidx/camera/core/impl/compat/EncoderProfilesProxyCompatApi31Impl;->fromAudioProfiles(Ljava/util/List;)Ljava/util/List;

    move-result-object v2

    .line 44
    invoke-virtual {p0}, Landroid/media/EncoderProfiles;->getVideoProfiles()Ljava/util/List;

    move-result-object p0

    invoke-static {p0}, Landroidx/camera/core/impl/compat/EncoderProfilesProxyCompatApi31Impl;->fromVideoProfiles(Ljava/util/List;)Ljava/util/List;

    move-result-object p0

    .line 40
    invoke-static {v0, v1, v2, p0}, Landroidx/camera/core/impl/EncoderProfilesProxy$ImmutableEncoderProfilesProxy;->create(IILjava/util/List;Ljava/util/List;)Landroidx/camera/core/impl/EncoderProfilesProxy$ImmutableEncoderProfilesProxy;

    move-result-object p0

    return-object p0
.end method

.method private static fromAudioProfiles(Ljava/util/List;)Ljava/util/List;
    .locals 8
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroid/media/EncoderProfiles$AudioProfile;",
            ">;)",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;",
            ">;"
        }
    .end annotation

    .line 74
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 75
    invoke-interface {p0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p0

    :goto_0
    invoke-interface {p0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {p0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Landroid/media/EncoderProfiles$AudioProfile;

    .line 77
    invoke-virtual {v1}, Landroid/media/EncoderProfiles$AudioProfile;->getCodec()I

    move-result v2

    .line 78
    invoke-virtual {v1}, Landroid/media/EncoderProfiles$AudioProfile;->getMediaType()Ljava/lang/String;

    move-result-object v3

    .line 79
    invoke-virtual {v1}, Landroid/media/EncoderProfiles$AudioProfile;->getBitrate()I

    move-result v4

    .line 80
    invoke-virtual {v1}, Landroid/media/EncoderProfiles$AudioProfile;->getSampleRate()I

    move-result v5

    .line 81
    invoke-virtual {v1}, Landroid/media/EncoderProfiles$AudioProfile;->getChannels()I

    move-result v6

    .line 82
    invoke-virtual {v1}, Landroid/media/EncoderProfiles$AudioProfile;->getProfile()I

    move-result v7

    .line 76
    invoke-static/range {v2 .. v7}, Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;->create(ILjava/lang/String;IIII)Landroidx/camera/core/impl/EncoderProfilesProxy$AudioProfileProxy;

    move-result-object v1

    invoke-interface {v0, v1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    goto :goto_0

    :cond_0
    return-object v0
.end method

.method private static fromVideoProfiles(Ljava/util/List;)Ljava/util/List;
    .locals 12
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroid/media/EncoderProfiles$VideoProfile;",
            ">;)",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;",
            ">;"
        }
    .end annotation

    .line 52
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 53
    invoke-interface {p0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p0

    :goto_0
    invoke-interface {p0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {p0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Landroid/media/EncoderProfiles$VideoProfile;

    .line 55
    invoke-virtual {v1}, Landroid/media/EncoderProfiles$VideoProfile;->getCodec()I

    move-result v2

    .line 56
    invoke-virtual {v1}, Landroid/media/EncoderProfiles$VideoProfile;->getMediaType()Ljava/lang/String;

    move-result-object v3

    .line 57
    invoke-virtual {v1}, Landroid/media/EncoderProfiles$VideoProfile;->getBitrate()I

    move-result v4

    .line 58
    invoke-virtual {v1}, Landroid/media/EncoderProfiles$VideoProfile;->getFrameRate()I

    move-result v5

    .line 59
    invoke-virtual {v1}, Landroid/media/EncoderProfiles$VideoProfile;->getWidth()I

    move-result v6

    .line 60
    invoke-virtual {v1}, Landroid/media/EncoderProfiles$VideoProfile;->getHeight()I

    move-result v7

    .line 61
    invoke-virtual {v1}, Landroid/media/EncoderProfiles$VideoProfile;->getProfile()I

    move-result v8

    const/4 v10, 0x0

    const/4 v11, 0x0

    const/16 v9, 0x8

    .line 54
    invoke-static/range {v2 .. v11}, Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;->create(ILjava/lang/String;IIIIIIII)Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;

    move-result-object v1

    invoke-interface {v0, v1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    goto :goto_0

    :cond_0
    return-object v0
.end method
