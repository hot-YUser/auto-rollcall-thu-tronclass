.class public final synthetic Landroidx/camera/video/Recorder$$ExternalSyntheticLambda18;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field public final synthetic f$0:Landroidx/camera/video/Recorder;

.field public final synthetic f$1:Landroidx/camera/video/Recorder$RecordingRecord;

.field public final synthetic f$2:J

.field public final synthetic f$3:I

.field public final synthetic f$4:Ljava/lang/Throwable;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/video/Recorder;Landroidx/camera/video/Recorder$RecordingRecord;JILjava/lang/Throwable;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/video/Recorder$$ExternalSyntheticLambda18;->f$0:Landroidx/camera/video/Recorder;

    iput-object p2, p0, Landroidx/camera/video/Recorder$$ExternalSyntheticLambda18;->f$1:Landroidx/camera/video/Recorder$RecordingRecord;

    iput-wide p3, p0, Landroidx/camera/video/Recorder$$ExternalSyntheticLambda18;->f$2:J

    iput p5, p0, Landroidx/camera/video/Recorder$$ExternalSyntheticLambda18;->f$3:I

    iput-object p6, p0, Landroidx/camera/video/Recorder$$ExternalSyntheticLambda18;->f$4:Ljava/lang/Throwable;

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 6

    .line 0
    iget-object v0, p0, Landroidx/camera/video/Recorder$$ExternalSyntheticLambda18;->f$0:Landroidx/camera/video/Recorder;

    iget-object v1, p0, Landroidx/camera/video/Recorder$$ExternalSyntheticLambda18;->f$1:Landroidx/camera/video/Recorder$RecordingRecord;

    iget-wide v2, p0, Landroidx/camera/video/Recorder$$ExternalSyntheticLambda18;->f$2:J

    iget v4, p0, Landroidx/camera/video/Recorder$$ExternalSyntheticLambda18;->f$3:I

    iget-object v5, p0, Landroidx/camera/video/Recorder$$ExternalSyntheticLambda18;->f$4:Ljava/lang/Throwable;

    invoke-virtual/range {v0 .. v5}, Landroidx/camera/video/Recorder;->lambda$stop$5$androidx-camera-video-Recorder(Landroidx/camera/video/Recorder$RecordingRecord;JILjava/lang/Throwable;)V

    return-void
.end method
