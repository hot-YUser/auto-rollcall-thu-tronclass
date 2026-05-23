.class public abstract Landroidx/camera/video/internal/audio/AudioSettings;
.super Ljava/lang/Object;
.source "AudioSettings.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/internal/audio/AudioSettings$Builder;
    }
.end annotation


# static fields
.field public static final COMMON_SAMPLE_RATES:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method static constructor <clinit>()V
    .locals 3

    const/4 v0, 0x6

    .line 41
    new-array v0, v0, [Ljava/lang/Integer;

    const v1, 0xbb80

    .line 42
    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    const/4 v2, 0x0

    aput-object v1, v0, v2

    const v1, 0xac44

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    const/4 v2, 0x1

    aput-object v1, v0, v2

    const/16 v1, 0x5622

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    const/4 v2, 0x2

    aput-object v1, v0, v2

    const/16 v1, 0x2b11

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    const/4 v2, 0x3

    aput-object v1, v0, v2

    const/16 v1, 0x1f40

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    const/4 v2, 0x4

    aput-object v1, v0, v2

    const/16 v1, 0x12c0

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    const/4 v2, 0x5

    aput-object v1, v0, v2

    invoke-static {v0}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v0

    .line 41
    invoke-static {v0}, Ljava/util/Collections;->unmodifiableList(Ljava/util/List;)Ljava/util/List;

    move-result-object v0

    sput-object v0, Landroidx/camera/video/internal/audio/AudioSettings;->COMMON_SAMPLE_RATES:Ljava/util/List;

    return-void
.end method

.method constructor <init>()V
    .locals 0

    .line 87
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static builder()Landroidx/camera/video/internal/audio/AudioSettings$Builder;
    .locals 2

    .line 48
    new-instance v0, Landroidx/camera/video/internal/audio/AutoValue_AudioSettings$Builder;

    invoke-direct {v0}, Landroidx/camera/video/internal/audio/AutoValue_AudioSettings$Builder;-><init>()V

    const/4 v1, -0x1

    .line 49
    invoke-virtual {v0, v1}, Landroidx/camera/video/internal/audio/AutoValue_AudioSettings$Builder;->setAudioSource(I)Landroidx/camera/video/internal/audio/AudioSettings$Builder;

    move-result-object v0

    .line 50
    invoke-virtual {v0, v1}, Landroidx/camera/video/internal/audio/AudioSettings$Builder;->setSampleRate(I)Landroidx/camera/video/internal/audio/AudioSettings$Builder;

    move-result-object v0

    .line 51
    invoke-virtual {v0, v1}, Landroidx/camera/video/internal/audio/AudioSettings$Builder;->setChannelCount(I)Landroidx/camera/video/internal/audio/AudioSettings$Builder;

    move-result-object v0

    .line 52
    invoke-virtual {v0, v1}, Landroidx/camera/video/internal/audio/AudioSettings$Builder;->setAudioFormat(I)Landroidx/camera/video/internal/audio/AudioSettings$Builder;

    move-result-object v0

    return-object v0
.end method


# virtual methods
.method public abstract getAudioFormat()I
.end method

.method public abstract getAudioSource()I
.end method

.method public getBytesPerFrame()I
    .locals 2

    .line 92
    invoke-virtual {p0}, Landroidx/camera/video/internal/audio/AudioSettings;->getAudioFormat()I

    move-result v0

    invoke-virtual {p0}, Landroidx/camera/video/internal/audio/AudioSettings;->getChannelCount()I

    move-result v1

    invoke-static {v0, v1}, Landroidx/camera/video/internal/audio/AudioUtils;->getBytesPerFrame(II)I

    move-result v0

    return v0
.end method

.method public abstract getChannelCount()I
.end method

.method public abstract getSampleRate()I
.end method

.method public abstract toBuilder()Landroidx/camera/video/internal/audio/AudioSettings$Builder;
.end method
