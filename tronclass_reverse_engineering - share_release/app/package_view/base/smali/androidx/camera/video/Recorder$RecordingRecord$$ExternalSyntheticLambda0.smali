.class public final synthetic Landroidx/camera/video/Recorder$RecordingRecord$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/camera/video/Recorder$RecordingRecord$MediaMuxerSupplier;


# instance fields
.field public final synthetic f$0:Landroidx/camera/video/OutputOptions;

.field public final synthetic f$1:Landroid/os/ParcelFileDescriptor;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/video/OutputOptions;Landroid/os/ParcelFileDescriptor;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/video/Recorder$RecordingRecord$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/video/OutputOptions;

    iput-object p2, p0, Landroidx/camera/video/Recorder$RecordingRecord$$ExternalSyntheticLambda0;->f$1:Landroid/os/ParcelFileDescriptor;

    return-void
.end method


# virtual methods
.method public final get(ILandroidx/core/util/Consumer;)Landroid/media/MediaMuxer;
    .locals 2

    .line 0
    iget-object v0, p0, Landroidx/camera/video/Recorder$RecordingRecord$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/video/OutputOptions;

    iget-object v1, p0, Landroidx/camera/video/Recorder$RecordingRecord$$ExternalSyntheticLambda0;->f$1:Landroid/os/ParcelFileDescriptor;

    invoke-static {v0, v1, p1, p2}, Landroidx/camera/video/Recorder$RecordingRecord;->lambda$initializeRecording$1(Landroidx/camera/video/OutputOptions;Landroid/os/ParcelFileDescriptor;ILandroidx/core/util/Consumer;)Landroid/media/MediaMuxer;

    move-result-object p1

    return-object p1
.end method
