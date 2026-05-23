.class final Landroidx/camera/video/AutoValue_AudioSpec;
.super Landroidx/camera/video/AudioSpec;
.source "AutoValue_AudioSpec.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/AutoValue_AudioSpec$Builder;
    }
.end annotation


# instance fields
.field private final bitrate:Landroid/util/Range;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation
.end field

.field private final channelCount:I

.field private final sampleRate:Landroid/util/Range;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation
.end field

.field private final source:I

.field private final sourceFormat:I


# direct methods
.method private constructor <init>(Landroid/util/Range;IILandroid/util/Range;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;II",
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;I)V"
        }
    .end annotation

    .line 26
    invoke-direct {p0}, Landroidx/camera/video/AudioSpec;-><init>()V

    .line 27
    iput-object p1, p0, Landroidx/camera/video/AutoValue_AudioSpec;->bitrate:Landroid/util/Range;

    .line 28
    iput p2, p0, Landroidx/camera/video/AutoValue_AudioSpec;->sourceFormat:I

    .line 29
    iput p3, p0, Landroidx/camera/video/AutoValue_AudioSpec;->source:I

    .line 30
    iput-object p4, p0, Landroidx/camera/video/AutoValue_AudioSpec;->sampleRate:Landroid/util/Range;

    .line 31
    iput p5, p0, Landroidx/camera/video/AutoValue_AudioSpec;->channelCount:I

    return-void
.end method

.method synthetic constructor <init>(Landroid/util/Range;IILandroid/util/Range;ILandroidx/camera/video/AutoValue_AudioSpec$1;)V
    .locals 0

    .line 9
    invoke-direct/range {p0 .. p5}, Landroidx/camera/video/AutoValue_AudioSpec;-><init>(Landroid/util/Range;IILandroid/util/Range;I)V

    return-void
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 4

    const/4 v0, 0x1

    if-ne p1, p0, :cond_0

    return v0

    .line 80
    :cond_0
    instance-of v1, p1, Landroidx/camera/video/AudioSpec;

    const/4 v2, 0x0

    if-eqz v1, :cond_2

    .line 81
    check-cast p1, Landroidx/camera/video/AudioSpec;

    .line 82
    iget-object v1, p0, Landroidx/camera/video/AutoValue_AudioSpec;->bitrate:Landroid/util/Range;

    invoke-virtual {p1}, Landroidx/camera/video/AudioSpec;->getBitrate()Landroid/util/Range;

    move-result-object v3

    invoke-virtual {v1, v3}, Landroid/util/Range;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    iget v1, p0, Landroidx/camera/video/AutoValue_AudioSpec;->sourceFormat:I

    .line 83
    invoke-virtual {p1}, Landroidx/camera/video/AudioSpec;->getSourceFormat()I

    move-result v3

    if-ne v1, v3, :cond_1

    iget v1, p0, Landroidx/camera/video/AutoValue_AudioSpec;->source:I

    .line 84
    invoke-virtual {p1}, Landroidx/camera/video/AudioSpec;->getSource()I

    move-result v3

    if-ne v1, v3, :cond_1

    iget-object v1, p0, Landroidx/camera/video/AutoValue_AudioSpec;->sampleRate:Landroid/util/Range;

    .line 85
    invoke-virtual {p1}, Landroidx/camera/video/AudioSpec;->getSampleRate()Landroid/util/Range;

    move-result-object v3

    invoke-virtual {v1, v3}, Landroid/util/Range;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    iget v1, p0, Landroidx/camera/video/AutoValue_AudioSpec;->channelCount:I

    .line 86
    invoke-virtual {p1}, Landroidx/camera/video/AudioSpec;->getChannelCount()I

    move-result p1

    if-ne v1, p1, :cond_1

    goto :goto_0

    :cond_1
    move v0, v2

    :goto_0
    return v0

    :cond_2
    return v2
.end method

.method public getBitrate()Landroid/util/Range;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 37
    iget-object v0, p0, Landroidx/camera/video/AutoValue_AudioSpec;->bitrate:Landroid/util/Range;

    return-object v0
.end method

.method public getChannelCount()I
    .locals 1

    .line 61
    iget v0, p0, Landroidx/camera/video/AutoValue_AudioSpec;->channelCount:I

    return v0
.end method

.method public getSampleRate()Landroid/util/Range;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation

    .line 55
    iget-object v0, p0, Landroidx/camera/video/AutoValue_AudioSpec;->sampleRate:Landroid/util/Range;

    return-object v0
.end method

.method public getSource()I
    .locals 1

    .line 49
    iget v0, p0, Landroidx/camera/video/AutoValue_AudioSpec;->source:I

    return v0
.end method

.method public getSourceFormat()I
    .locals 1

    .line 43
    iget v0, p0, Landroidx/camera/video/AutoValue_AudioSpec;->sourceFormat:I

    return v0
.end method

.method public hashCode()I
    .locals 3

    .line 95
    iget-object v0, p0, Landroidx/camera/video/AutoValue_AudioSpec;->bitrate:Landroid/util/Range;

    invoke-virtual {v0}, Landroid/util/Range;->hashCode()I

    move-result v0

    const v1, 0xf4243

    xor-int/2addr v0, v1

    mul-int/2addr v0, v1

    .line 97
    iget v2, p0, Landroidx/camera/video/AutoValue_AudioSpec;->sourceFormat:I

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 99
    iget v2, p0, Landroidx/camera/video/AutoValue_AudioSpec;->source:I

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 101
    iget-object v2, p0, Landroidx/camera/video/AutoValue_AudioSpec;->sampleRate:Landroid/util/Range;

    invoke-virtual {v2}, Landroid/util/Range;->hashCode()I

    move-result v2

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 103
    iget v1, p0, Landroidx/camera/video/AutoValue_AudioSpec;->channelCount:I

    xor-int/2addr v0, v1

    return v0
.end method

.method public toBuilder()Landroidx/camera/video/AudioSpec$Builder;
    .locals 2

    .line 109
    new-instance v0, Landroidx/camera/video/AutoValue_AudioSpec$Builder;

    const/4 v1, 0x0

    invoke-direct {v0, p0, v1}, Landroidx/camera/video/AutoValue_AudioSpec$Builder;-><init>(Landroidx/camera/video/AudioSpec;Landroidx/camera/video/AutoValue_AudioSpec$1;)V

    return-object v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 66
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "AudioSpec{bitrate="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Landroidx/camera/video/AutoValue_AudioSpec;->bitrate:Landroid/util/Range;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", sourceFormat="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Landroidx/camera/video/AutoValue_AudioSpec;->sourceFormat:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", source="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Landroidx/camera/video/AutoValue_AudioSpec;->source:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", sampleRate="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/video/AutoValue_AudioSpec;->sampleRate:Landroid/util/Range;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", channelCount="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Landroidx/camera/video/AutoValue_AudioSpec;->channelCount:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
