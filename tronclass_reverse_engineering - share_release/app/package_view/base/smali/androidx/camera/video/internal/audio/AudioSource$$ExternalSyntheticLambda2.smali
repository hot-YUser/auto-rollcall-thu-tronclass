.class public final synthetic Landroidx/camera/video/internal/audio/AudioSource$$ExternalSyntheticLambda2;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field public final synthetic f$0:Landroidx/camera/video/internal/audio/AudioSource$AudioSourceCallback;

.field public final synthetic f$1:Ljava/lang/Throwable;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/video/internal/audio/AudioSource$AudioSourceCallback;Ljava/lang/Throwable;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/video/internal/audio/AudioSource$$ExternalSyntheticLambda2;->f$0:Landroidx/camera/video/internal/audio/AudioSource$AudioSourceCallback;

    iput-object p2, p0, Landroidx/camera/video/internal/audio/AudioSource$$ExternalSyntheticLambda2;->f$1:Ljava/lang/Throwable;

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 2

    .line 0
    iget-object v0, p0, Landroidx/camera/video/internal/audio/AudioSource$$ExternalSyntheticLambda2;->f$0:Landroidx/camera/video/internal/audio/AudioSource$AudioSourceCallback;

    iget-object v1, p0, Landroidx/camera/video/internal/audio/AudioSource$$ExternalSyntheticLambda2;->f$1:Ljava/lang/Throwable;

    invoke-static {v0, v1}, Landroidx/camera/video/internal/audio/AudioSource;->lambda$notifyError$8(Landroidx/camera/video/internal/audio/AudioSource$AudioSourceCallback;Ljava/lang/Throwable;)V

    return-void
.end method
