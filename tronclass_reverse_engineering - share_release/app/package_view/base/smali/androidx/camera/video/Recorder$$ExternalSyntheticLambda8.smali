.class public final synthetic Landroidx/camera/video/Recorder$$ExternalSyntheticLambda8;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field public final synthetic f$0:Landroidx/camera/video/Recorder;

.field public final synthetic f$1:Landroidx/camera/video/Recorder$RecordingRecord;

.field public final synthetic f$2:Z


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/video/Recorder;Landroidx/camera/video/Recorder$RecordingRecord;Z)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/video/Recorder$$ExternalSyntheticLambda8;->f$0:Landroidx/camera/video/Recorder;

    iput-object p2, p0, Landroidx/camera/video/Recorder$$ExternalSyntheticLambda8;->f$1:Landroidx/camera/video/Recorder$RecordingRecord;

    iput-boolean p3, p0, Landroidx/camera/video/Recorder$$ExternalSyntheticLambda8;->f$2:Z

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 3

    .line 0
    iget-object v0, p0, Landroidx/camera/video/Recorder$$ExternalSyntheticLambda8;->f$0:Landroidx/camera/video/Recorder;

    iget-object v1, p0, Landroidx/camera/video/Recorder$$ExternalSyntheticLambda8;->f$1:Landroidx/camera/video/Recorder$RecordingRecord;

    iget-boolean v2, p0, Landroidx/camera/video/Recorder$$ExternalSyntheticLambda8;->f$2:Z

    invoke-virtual {v0, v1, v2}, Landroidx/camera/video/Recorder;->lambda$mute$6$androidx-camera-video-Recorder(Landroidx/camera/video/Recorder$RecordingRecord;Z)V

    return-void
.end method
