.class public abstract Landroidx/camera/video/AudioStats;
.super Ljava/lang/Object;
.source "AudioStats.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/AudioStats$AudioState;
    }
.end annotation


# static fields
.field public static final AUDIO_AMPLITUDE_NONE:D = 0.0

.field public static final AUDIO_STATE_ACTIVE:I = 0x0

.field public static final AUDIO_STATE_DISABLED:I = 0x1

.field public static final AUDIO_STATE_ENCODER_ERROR:I = 0x3

.field public static final AUDIO_STATE_MUTED:I = 0x5

.field public static final AUDIO_STATE_SOURCE_ERROR:I = 0x4

.field public static final AUDIO_STATE_SOURCE_SILENCED:I = 0x2

.field private static final ERROR_STATES:Ljava/util/Set;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Set<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method static constructor <clinit>()V
    .locals 6

    .line 122
    new-instance v0, Ljava/util/HashSet;

    const/4 v1, 0x3

    new-array v2, v1, [Ljava/lang/Integer;

    const/4 v3, 0x2

    .line 123
    invoke-static {v3}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v4

    const/4 v5, 0x0

    aput-object v4, v2, v5

    const/4 v4, 0x1

    .line 124
    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    aput-object v1, v2, v4

    const/4 v1, 0x4

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    aput-object v1, v2, v3

    .line 123
    invoke-static {v2}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v1

    invoke-direct {v0, v1}, Ljava/util/HashSet;-><init>(Ljava/util/Collection;)V

    invoke-static {v0}, Ljava/util/Collections;->unmodifiableSet(Ljava/util/Set;)Ljava/util/Set;

    move-result-object v0

    sput-object v0, Landroidx/camera/video/AudioStats;->ERROR_STATES:Ljava/util/Set;

    return-void
.end method

.method constructor <init>()V
    .locals 0

    .line 45
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static of(ILjava/lang/Throwable;D)Landroidx/camera/video/AudioStats;
    .locals 1

    .line 52
    new-instance v0, Landroidx/camera/video/AutoValue_AudioStats;

    invoke-direct {v0, p0, p2, p3, p1}, Landroidx/camera/video/AutoValue_AudioStats;-><init>(IDLjava/lang/Throwable;)V

    return-object v0
.end method


# virtual methods
.method public getAudioAmplitude()D
    .locals 2

    .line 185
    invoke-virtual {p0}, Landroidx/camera/video/AudioStats;->getAudioState()I

    move-result v0

    const/4 v1, 0x1

    if-ne v0, v1, :cond_0

    const-wide/16 v0, 0x0

    return-wide v0

    .line 188
    :cond_0
    invoke-virtual {p0}, Landroidx/camera/video/AudioStats;->getAudioAmplitudeInternal()D

    move-result-wide v0

    return-wide v0
.end method

.method abstract getAudioAmplitudeInternal()D
.end method

.method public abstract getAudioState()I
.end method

.method public abstract getErrorCause()Ljava/lang/Throwable;
.end method

.method public hasAudio()Z
    .locals 1

    .line 130
    invoke-virtual {p0}, Landroidx/camera/video/AudioStats;->getAudioState()I

    move-result v0

    if-nez v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public hasError()Z
    .locals 2

    .line 140
    sget-object v0, Landroidx/camera/video/AudioStats;->ERROR_STATES:Ljava/util/Set;

    invoke-virtual {p0}, Landroidx/camera/video/AudioStats;->getAudioState()I

    move-result v1

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-interface {v0, v1}, Ljava/util/Set;->contains(Ljava/lang/Object;)Z

    move-result v0

    return v0
.end method
