.class public final synthetic Landroidx/camera/video/internal/audio/AudioStreamImpl$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field public final synthetic f$0:Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;

.field public final synthetic f$1:Z


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;Z)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;

    iput-boolean p2, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl$$ExternalSyntheticLambda0;->f$1:Z

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 2

    .line 0
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;

    iget-boolean v1, p0, Landroidx/camera/video/internal/audio/AudioStreamImpl$$ExternalSyntheticLambda0;->f$1:Z

    invoke-static {v0, v1}, Landroidx/camera/video/internal/audio/AudioStreamImpl;->lambda$notifySilenced$0(Landroidx/camera/video/internal/audio/AudioStream$AudioStreamCallback;Z)V

    return-void
.end method
