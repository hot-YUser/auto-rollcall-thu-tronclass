.class public abstract Landroidx/camera/video/AudioSpec;
.super Ljava/lang/Object;
.source "AudioSpec.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/AudioSpec$Builder;,
        Landroidx/camera/video/AudioSpec$Source;,
        Landroidx/camera/video/AudioSpec$ChannelCount;
    }
.end annotation


# static fields
.field public static final BITRATE_RANGE_AUTO:Landroid/util/Range;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation
.end field

.field public static final CHANNEL_COUNT_AUTO:I = -0x1

.field public static final CHANNEL_COUNT_MONO:I = 0x1

.field public static final CHANNEL_COUNT_NONE:I = 0x0

.field public static final CHANNEL_COUNT_STEREO:I = 0x2

.field public static final NO_AUDIO:Landroidx/camera/video/AudioSpec;

.field public static final SAMPLE_RATE_RANGE_AUTO:Landroid/util/Range;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation
.end field

.field public static final SOURCE_AUTO:I = -0x1

.field public static final SOURCE_CAMCORDER:I = 0x5

.field public static final SOURCE_FORMAT_AUTO:I = -0x1

.field public static final SOURCE_FORMAT_PCM_16BIT:I = 0x2


# direct methods
.method static constructor <clinit>()V
    .locals 4

    .line 104
    new-instance v0, Landroid/util/Range;

    const/4 v1, 0x0

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    const v3, 0x7fffffff

    .line 105
    invoke-static {v3}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v3

    invoke-direct {v0, v2, v3}, Landroid/util/Range;-><init>(Ljava/lang/Comparable;Ljava/lang/Comparable;)V

    sput-object v0, Landroidx/camera/video/AudioSpec;->BITRATE_RANGE_AUTO:Landroid/util/Range;

    .line 114
    new-instance v0, Landroid/util/Range;

    .line 115
    invoke-direct {v0, v2, v3}, Landroid/util/Range;-><init>(Ljava/lang/Comparable;Ljava/lang/Comparable;)V

    sput-object v0, Landroidx/camera/video/AudioSpec;->SAMPLE_RATE_RANGE_AUTO:Landroid/util/Range;

    .line 239
    invoke-static {}, Landroidx/camera/video/AudioSpec;->builder()Landroidx/camera/video/AudioSpec$Builder;

    move-result-object v0

    invoke-virtual {v0, v1}, Landroidx/camera/video/AudioSpec$Builder;->setChannelCount(I)Landroidx/camera/video/AudioSpec$Builder;

    move-result-object v0

    invoke-virtual {v0}, Landroidx/camera/video/AudioSpec$Builder;->build()Landroidx/camera/video/AudioSpec;

    move-result-object v0

    sput-object v0, Landroidx/camera/video/AudioSpec;->NO_AUDIO:Landroidx/camera/video/AudioSpec;

    return-void
.end method

.method constructor <init>()V
    .locals 0

    .line 118
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static builder()Landroidx/camera/video/AudioSpec$Builder;
    .locals 2

    .line 124
    new-instance v0, Landroidx/camera/video/AutoValue_AudioSpec$Builder;

    invoke-direct {v0}, Landroidx/camera/video/AutoValue_AudioSpec$Builder;-><init>()V

    const/4 v1, -0x1

    .line 125
    invoke-virtual {v0, v1}, Landroidx/camera/video/AutoValue_AudioSpec$Builder;->setSourceFormat(I)Landroidx/camera/video/AudioSpec$Builder;

    move-result-object v0

    .line 126
    invoke-virtual {v0, v1}, Landroidx/camera/video/AudioSpec$Builder;->setSource(I)Landroidx/camera/video/AudioSpec$Builder;

    move-result-object v0

    .line 127
    invoke-virtual {v0, v1}, Landroidx/camera/video/AudioSpec$Builder;->setChannelCount(I)Landroidx/camera/video/AudioSpec$Builder;

    move-result-object v0

    sget-object v1, Landroidx/camera/video/AudioSpec;->BITRATE_RANGE_AUTO:Landroid/util/Range;

    .line 128
    invoke-virtual {v0, v1}, Landroidx/camera/video/AudioSpec$Builder;->setBitrate(Landroid/util/Range;)Landroidx/camera/video/AudioSpec$Builder;

    move-result-object v0

    sget-object v1, Landroidx/camera/video/AudioSpec;->SAMPLE_RATE_RANGE_AUTO:Landroid/util/Range;

    .line 129
    invoke-virtual {v0, v1}, Landroidx/camera/video/AudioSpec$Builder;->setSampleRate(Landroid/util/Range;)Landroidx/camera/video/AudioSpec$Builder;

    move-result-object v0

    return-object v0
.end method


# virtual methods
.method public abstract getBitrate()Landroid/util/Range;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation
.end method

.method public abstract getChannelCount()I
.end method

.method public abstract getSampleRate()Landroid/util/Range;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation
.end method

.method public abstract getSource()I
.end method

.method public abstract getSourceFormat()I
.end method

.method public abstract toBuilder()Landroidx/camera/video/AudioSpec$Builder;
.end method
