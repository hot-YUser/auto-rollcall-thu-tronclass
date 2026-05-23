.class Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;
.super Ljava/lang/Object;
.source "BufferedAudioStream.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/internal/audio/BufferedAudioStream;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0xa
    name = "AudioData"
.end annotation


# instance fields
.field private final mByteBuffer:Ljava/nio/ByteBuffer;

.field private final mBytesPerFrame:I

.field private final mSampleRate:I

.field private mTimestampNs:J


# direct methods
.method constructor <init>(Ljava/nio/ByteBuffer;Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;II)V
    .locals 2

    .line 288
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 290
    invoke-virtual {p1}, Ljava/nio/ByteBuffer;->rewind()Ljava/nio/Buffer;

    .line 293
    invoke-virtual {p1}, Ljava/nio/ByteBuffer;->limit()I

    move-result v0

    invoke-virtual {p1}, Ljava/nio/ByteBuffer;->position()I

    move-result v1

    sub-int/2addr v0, v1

    .line 294
    invoke-virtual {p2}, Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;->getSizeInBytes()I

    move-result v1

    if-ne v0, v1, :cond_0

    .line 300
    iput p3, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;->mBytesPerFrame:I

    .line 301
    iput p4, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;->mSampleRate:I

    .line 302
    iput-object p1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;->mByteBuffer:Ljava/nio/ByteBuffer;

    .line 303
    invoke-virtual {p2}, Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;->getTimestampNs()J

    move-result-wide p1

    iput-wide p1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;->mTimestampNs:J

    return-void

    .line 295
    :cond_0
    new-instance p1, Ljava/lang/IllegalStateException;

    new-instance p3, Ljava/lang/StringBuilder;

    const-string p4, "Byte buffer size is not match with packet info: "

    invoke-direct {p3, p4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p3, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p3

    const-string p4, " != "

    invoke-virtual {p3, p4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p3

    .line 297
    invoke-virtual {p2}, Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;->getSizeInBytes()I

    move-result p2

    invoke-virtual {p3, p2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw p1
.end method


# virtual methods
.method public getRemainingBufferSizeInBytes()I
    .locals 1

    .line 307
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;->mByteBuffer:Ljava/nio/ByteBuffer;

    invoke-virtual {v0}, Ljava/nio/ByteBuffer;->remaining()I

    move-result v0

    return v0
.end method

.method public read(Ljava/nio/ByteBuffer;)Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;
    .locals 9

    .line 311
    iget-wide v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;->mTimestampNs:J

    .line 315
    iget-object v2, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;->mByteBuffer:Ljava/nio/ByteBuffer;

    invoke-virtual {v2}, Ljava/nio/ByteBuffer;->position()I

    move-result v2

    .line 316
    invoke-virtual {p1}, Ljava/nio/ByteBuffer;->position()I

    move-result v3

    .line 317
    iget-object v4, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;->mByteBuffer:Ljava/nio/ByteBuffer;

    invoke-virtual {v4}, Ljava/nio/ByteBuffer;->remaining()I

    move-result v4

    invoke-virtual {p1}, Ljava/nio/ByteBuffer;->remaining()I

    move-result v5

    if-le v4, v5, :cond_0

    .line 318
    invoke-virtual {p1}, Ljava/nio/ByteBuffer;->remaining()I

    move-result v4

    int-to-long v5, v4

    .line 321
    iget v7, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;->mBytesPerFrame:I

    invoke-static {v5, v6, v7}, Landroidx/camera/video/internal/audio/AudioUtils;->sizeToFrameCount(JI)J

    move-result-wide v5

    .line 322
    iget v7, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;->mSampleRate:I

    invoke-static {v5, v6, v7}, Landroidx/camera/video/internal/audio/AudioUtils;->frameCountToDurationNs(JI)J

    move-result-wide v5

    .line 323
    iget-wide v7, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;->mTimestampNs:J

    add-long/2addr v7, v5

    iput-wide v7, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;->mTimestampNs:J

    .line 327
    iget-object v5, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;->mByteBuffer:Ljava/nio/ByteBuffer;

    invoke-virtual {v5}, Ljava/nio/ByteBuffer;->duplicate()Ljava/nio/ByteBuffer;

    move-result-object v5

    .line 328
    invoke-virtual {v5, v2}, Ljava/nio/ByteBuffer;->position(I)Ljava/nio/Buffer;

    move-result-object v6

    add-int v7, v2, v4

    .line 329
    invoke-virtual {v6, v7}, Ljava/nio/Buffer;->limit(I)Ljava/nio/Buffer;

    .line 330
    invoke-virtual {p1, v5}, Ljava/nio/ByteBuffer;->put(Ljava/nio/ByteBuffer;)Ljava/nio/ByteBuffer;

    move-result-object p1

    add-int v5, v3, v4

    .line 331
    invoke-virtual {p1, v5}, Ljava/nio/ByteBuffer;->limit(I)Ljava/nio/Buffer;

    move-result-object p1

    .line 332
    invoke-virtual {p1, v3}, Ljava/nio/Buffer;->position(I)Ljava/nio/Buffer;

    goto :goto_0

    .line 335
    :cond_0
    iget-object v4, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;->mByteBuffer:Ljava/nio/ByteBuffer;

    invoke-virtual {v4}, Ljava/nio/ByteBuffer;->remaining()I

    move-result v4

    .line 338
    iget-object v5, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;->mByteBuffer:Ljava/nio/ByteBuffer;

    invoke-virtual {p1, v5}, Ljava/nio/ByteBuffer;->put(Ljava/nio/ByteBuffer;)Ljava/nio/ByteBuffer;

    move-result-object p1

    add-int v5, v3, v4

    .line 339
    invoke-virtual {p1, v5}, Ljava/nio/ByteBuffer;->limit(I)Ljava/nio/Buffer;

    move-result-object p1

    .line 340
    invoke-virtual {p1, v3}, Ljava/nio/Buffer;->position(I)Ljava/nio/Buffer;

    .line 344
    :goto_0
    iget-object p1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$AudioData;->mByteBuffer:Ljava/nio/ByteBuffer;

    add-int/2addr v2, v4

    invoke-virtual {p1, v2}, Ljava/nio/ByteBuffer;->position(I)Ljava/nio/Buffer;

    .line 346
    invoke-static {v4, v0, v1}, Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;->of(IJ)Landroidx/camera/video/internal/audio/AudioStream$PacketInfo;

    move-result-object p1

    return-object p1
.end method
