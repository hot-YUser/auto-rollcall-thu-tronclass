.class public final synthetic Landroidx/camera/video/Recorder$RecordingRecord$$ExternalSyntheticLambda2;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/core/util/Consumer;


# instance fields
.field public final synthetic f$0:Landroidx/camera/video/MediaStoreOutputOptions;

.field public final synthetic f$1:Landroid/content/Context;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/video/MediaStoreOutputOptions;Landroid/content/Context;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/video/Recorder$RecordingRecord$$ExternalSyntheticLambda2;->f$0:Landroidx/camera/video/MediaStoreOutputOptions;

    iput-object p2, p0, Landroidx/camera/video/Recorder$RecordingRecord$$ExternalSyntheticLambda2;->f$1:Landroid/content/Context;

    return-void
.end method


# virtual methods
.method public final accept(Ljava/lang/Object;)V
    .locals 2

    .line 0
    iget-object v0, p0, Landroidx/camera/video/Recorder$RecordingRecord$$ExternalSyntheticLambda2;->f$0:Landroidx/camera/video/MediaStoreOutputOptions;

    iget-object v1, p0, Landroidx/camera/video/Recorder$RecordingRecord$$ExternalSyntheticLambda2;->f$1:Landroid/content/Context;

    check-cast p1, Landroid/net/Uri;

    invoke-static {v0, v1, p1}, Landroidx/camera/video/Recorder$RecordingRecord;->lambda$initializeRecording$4(Landroidx/camera/video/MediaStoreOutputOptions;Landroid/content/Context;Landroid/net/Uri;)V

    return-void
.end method
