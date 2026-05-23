.class final Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo$Builder;
.super Landroidx/camera/video/internal/config/VideoMimeInfo$Builder;
.source "AutoValue_VideoMimeInfo.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x18
    name = "Builder"
.end annotation


# instance fields
.field private compatibleVideoProfile:Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;

.field private mimeType:Ljava/lang/String;

.field private profile:Ljava/lang/Integer;


# direct methods
.method constructor <init>()V
    .locals 0

    .line 83
    invoke-direct {p0}, Landroidx/camera/video/internal/config/VideoMimeInfo$Builder;-><init>()V

    return-void
.end method


# virtual methods
.method public bridge synthetic build()Landroidx/camera/video/internal/config/MimeInfo;
    .locals 1

    .line 79
    invoke-virtual {p0}, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo$Builder;->build()Landroidx/camera/video/internal/config/VideoMimeInfo;

    move-result-object v0

    return-object v0
.end method

.method public build()Landroidx/camera/video/internal/config/VideoMimeInfo;
    .locals 5

    .line 106
    iget-object v0, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo$Builder;->mimeType:Ljava/lang/String;

    if-nez v0, :cond_0

    .line 107
    const-string v0, " mimeType"

    goto :goto_0

    .line 106
    :cond_0
    const-string v0, ""

    .line 109
    :goto_0
    iget-object v1, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo$Builder;->profile:Ljava/lang/Integer;

    if-nez v1, :cond_1

    .line 110
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " profile"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    .line 112
    :cond_1
    invoke-virtual {v0}, Ljava/lang/String;->isEmpty()Z

    move-result v1

    if-eqz v1, :cond_2

    .line 115
    new-instance v0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo;

    iget-object v1, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo$Builder;->mimeType:Ljava/lang/String;

    iget-object v2, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo$Builder;->profile:Ljava/lang/Integer;

    .line 117
    invoke-virtual {v2}, Ljava/lang/Integer;->intValue()I

    move-result v2

    iget-object v3, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo$Builder;->compatibleVideoProfile:Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;

    const/4 v4, 0x0

    invoke-direct {v0, v1, v2, v3, v4}, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo;-><init>(Ljava/lang/String;ILandroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo$1;)V

    return-object v0

    .line 113
    :cond_2
    new-instance v1, Ljava/lang/IllegalStateException;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Missing required properties:"

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-direct {v1, v0}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw v1
.end method

.method public setCompatibleVideoProfile(Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;)Landroidx/camera/video/internal/config/VideoMimeInfo$Builder;
    .locals 0

    .line 100
    iput-object p1, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo$Builder;->compatibleVideoProfile:Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;

    return-object p0
.end method

.method protected setMimeType(Ljava/lang/String;)Landroidx/camera/video/internal/config/VideoMimeInfo$Builder;
    .locals 1

    if-eqz p1, :cond_0

    .line 90
    iput-object p1, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo$Builder;->mimeType:Ljava/lang/String;

    return-object p0

    .line 88
    :cond_0
    new-instance p1, Ljava/lang/NullPointerException;

    const-string v0, "Null mimeType"

    invoke-direct {p1, v0}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method protected bridge synthetic setMimeType(Ljava/lang/String;)Ljava/lang/Object;
    .locals 0

    .line 79
    invoke-virtual {p0, p1}, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo$Builder;->setMimeType(Ljava/lang/String;)Landroidx/camera/video/internal/config/VideoMimeInfo$Builder;

    move-result-object p1

    return-object p1
.end method

.method public setProfile(I)Landroidx/camera/video/internal/config/VideoMimeInfo$Builder;
    .locals 0

    .line 95
    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    iput-object p1, p0, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo$Builder;->profile:Ljava/lang/Integer;

    return-object p0
.end method

.method public bridge synthetic setProfile(I)Ljava/lang/Object;
    .locals 0

    .line 79
    invoke-virtual {p0, p1}, Landroidx/camera/video/internal/config/AutoValue_VideoMimeInfo$Builder;->setProfile(I)Landroidx/camera/video/internal/config/VideoMimeInfo$Builder;

    move-result-object p1

    return-object p1
.end method
