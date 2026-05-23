.class public final synthetic Landroidx/camera/video/internal/audio/BufferedAudioStream$$ExternalSyntheticLambda1;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field public final synthetic f$0:Landroidx/camera/video/internal/audio/BufferedAudioStream;

.field public final synthetic f$1:Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;

.field public final synthetic f$2:Ljava/util/concurrent/Executor;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/video/internal/audio/BufferedAudioStream;Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;Ljava/util/concurrent/Executor;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$$ExternalSyntheticLambda1;->f$0:Landroidx/camera/video/internal/audio/BufferedAudioStream;

    iput-object p2, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$$ExternalSyntheticLambda1;->f$1:Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;

    iput-object p3, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$$ExternalSyntheticLambda1;->f$2:Ljava/util/concurrent/Executor;

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 3

    .line 0
    iget-object v0, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$$ExternalSyntheticLambda1;->f$0:Landroidx/camera/video/internal/audio/BufferedAudioStream;

    iget-object v1, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$$ExternalSyntheticLambda1;->f$1:Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;

    iget-object v2, p0, Landroidx/camera/video/internal/audio/BufferedAudioStream$$ExternalSyntheticLambda1;->f$2:Ljava/util/concurrent/Executor;

    invoke-virtual {v0, v1, v2}, Landroidx/camera/video/internal/audio/BufferedAudioStream;->lambda$setCallback$3$androidx-camera-video-internal-audio-BufferedAudioStream(Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;Ljava/util/concurrent/Executor;)V

    return-void
.end method
