.class public final synthetic Landroidx/camera/video/internal/audio/AudioSource$$ExternalSyntheticLambda10;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field public final synthetic f$0:Landroidx/camera/video/internal/audio/AudioSource;

.field public final synthetic f$1:Ljava/util/concurrent/Executor;

.field public final synthetic f$2:Landroidx/camera/video/internal/audio/AudioSource$AudioSourceCallback;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/video/internal/audio/AudioSource;Ljava/util/concurrent/Executor;Landroidx/camera/video/internal/audio/AudioSource$AudioSourceCallback;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/video/internal/audio/AudioSource$$ExternalSyntheticLambda10;->f$0:Landroidx/camera/video/internal/audio/AudioSource;

    iput-object p2, p0, Landroidx/camera/video/internal/audio/AudioSource$$ExternalSyntheticLambda10;->f$1:Ljava/util/concurrent/Executor;

    iput-object p3, p0, Landroidx/camera/video/internal/audio/AudioSource$$ExternalSyntheticLambda10;->f$2:Landroidx/camera/video/internal/audio/AudioSource$AudioSourceCallback;

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 3

    .line 0
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioSource$$ExternalSyntheticLambda10;->f$0:Landroidx/camera/video/internal/audio/AudioSource;

    iget-object v1, p0, Landroidx/camera/video/internal/audio/AudioSource$$ExternalSyntheticLambda10;->f$1:Ljava/util/concurrent/Executor;

    iget-object v2, p0, Landroidx/camera/video/internal/audio/AudioSource$$ExternalSyntheticLambda10;->f$2:Landroidx/camera/video/internal/audio/AudioSource$AudioSourceCallback;

    invoke-virtual {v0, v1, v2}, Landroidx/camera/video/internal/audio/AudioSource;->lambda$setAudioSourceCallback$6$androidx-camera-video-internal-audio-AudioSource(Ljava/util/concurrent/Executor;Landroidx/camera/video/internal/audio/AudioSource$AudioSourceCallback;)V

    return-void
.end method
