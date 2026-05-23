.class public abstract Landroidx/camera/video/VideoRecordEvent;
.super Ljava/lang/Object;
.source "VideoRecordEvent.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/VideoRecordEvent$Finalize;,
        Landroidx/camera/video/VideoRecordEvent$Start;,
        Landroidx/camera/video/VideoRecordEvent$Status;,
        Landroidx/camera/video/VideoRecordEvent$Pause;,
        Landroidx/camera/video/VideoRecordEvent$Resume;
    }
.end annotation


# instance fields
.field private final mOutputOptions:Landroidx/camera/video/OutputOptions;

.field private final mRecordingStats:Landroidx/camera/video/RecordingStats;


# direct methods
.method constructor <init>(Landroidx/camera/video/OutputOptions;Landroidx/camera/video/RecordingStats;)V
    .locals 0

    .line 103
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 104
    invoke-static {p1}, Landroidx/core/util/Preconditions;->checkNotNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroidx/camera/video/OutputOptions;

    iput-object p1, p0, Landroidx/camera/video/VideoRecordEvent;->mOutputOptions:Landroidx/camera/video/OutputOptions;

    .line 105
    invoke-static {p2}, Landroidx/core/util/Preconditions;->checkNotNull(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroidx/camera/video/RecordingStats;

    iput-object p1, p0, Landroidx/camera/video/VideoRecordEvent;->mRecordingStats:Landroidx/camera/video/RecordingStats;

    return-void
.end method

.method static finalize(Landroidx/camera/video/OutputOptions;Landroidx/camera/video/RecordingStats;Landroidx/camera/video/OutputResults;)Landroidx/camera/video/VideoRecordEvent$Finalize;
    .locals 7

    .line 150
    new-instance v6, Landroidx/camera/video/VideoRecordEvent$Finalize;

    const/4 v4, 0x0

    const/4 v5, 0x0

    move-object v0, v6

    move-object v1, p0

    move-object v2, p1

    move-object v3, p2

    invoke-direct/range {v0 .. v5}, Landroidx/camera/video/VideoRecordEvent$Finalize;-><init>(Landroidx/camera/video/OutputOptions;Landroidx/camera/video/RecordingStats;Landroidx/camera/video/OutputResults;ILjava/lang/Throwable;)V

    return-object v6
.end method

.method static finalizeWithError(Landroidx/camera/video/OutputOptions;Landroidx/camera/video/RecordingStats;Landroidx/camera/video/OutputResults;ILjava/lang/Throwable;)Landroidx/camera/video/VideoRecordEvent$Finalize;
    .locals 8

    if-eqz p3, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    .line 159
    :goto_0
    const-string v1, "An error type is required."

    invoke-static {v0, v1}, Landroidx/core/util/Preconditions;->checkArgument(ZLjava/lang/Object;)V

    .line 160
    new-instance v0, Landroidx/camera/video/VideoRecordEvent$Finalize;

    move-object v2, v0

    move-object v3, p0

    move-object v4, p1

    move-object v5, p2

    move v6, p3

    move-object v7, p4

    invoke-direct/range {v2 .. v7}, Landroidx/camera/video/VideoRecordEvent$Finalize;-><init>(Landroidx/camera/video/OutputOptions;Landroidx/camera/video/RecordingStats;Landroidx/camera/video/OutputResults;ILjava/lang/Throwable;)V

    return-object v0
.end method

.method static pause(Landroidx/camera/video/OutputOptions;Landroidx/camera/video/RecordingStats;)Landroidx/camera/video/VideoRecordEvent$Pause;
    .locals 1

    .line 462
    new-instance v0, Landroidx/camera/video/VideoRecordEvent$Pause;

    invoke-direct {v0, p0, p1}, Landroidx/camera/video/VideoRecordEvent$Pause;-><init>(Landroidx/camera/video/OutputOptions;Landroidx/camera/video/RecordingStats;)V

    return-object v0
.end method

.method static resume(Landroidx/camera/video/OutputOptions;Landroidx/camera/video/RecordingStats;)Landroidx/camera/video/VideoRecordEvent$Resume;
    .locals 1

    .line 482
    new-instance v0, Landroidx/camera/video/VideoRecordEvent$Resume;

    invoke-direct {v0, p0, p1}, Landroidx/camera/video/VideoRecordEvent$Resume;-><init>(Landroidx/camera/video/OutputOptions;Landroidx/camera/video/RecordingStats;)V

    return-object v0
.end method

.method static start(Landroidx/camera/video/OutputOptions;Landroidx/camera/video/RecordingStats;)Landroidx/camera/video/VideoRecordEvent$Start;
    .locals 1

    .line 127
    new-instance v0, Landroidx/camera/video/VideoRecordEvent$Start;

    invoke-direct {v0, p0, p1}, Landroidx/camera/video/VideoRecordEvent$Start;-><init>(Landroidx/camera/video/OutputOptions;Landroidx/camera/video/RecordingStats;)V

    return-object v0
.end method

.method static status(Landroidx/camera/video/OutputOptions;Landroidx/camera/video/RecordingStats;)Landroidx/camera/video/VideoRecordEvent$Status;
    .locals 1

    .line 444
    new-instance v0, Landroidx/camera/video/VideoRecordEvent$Status;

    invoke-direct {v0, p0, p1}, Landroidx/camera/video/VideoRecordEvent$Status;-><init>(Landroidx/camera/video/OutputOptions;Landroidx/camera/video/RecordingStats;)V

    return-object v0
.end method


# virtual methods
.method public getOutputOptions()Landroidx/camera/video/OutputOptions;
    .locals 1

    .line 121
    iget-object v0, p0, Landroidx/camera/video/VideoRecordEvent;->mOutputOptions:Landroidx/camera/video/OutputOptions;

    return-object v0
.end method

.method public getRecordingStats()Landroidx/camera/video/RecordingStats;
    .locals 1

    .line 113
    iget-object v0, p0, Landroidx/camera/video/VideoRecordEvent;->mRecordingStats:Landroidx/camera/video/RecordingStats;

    return-object v0
.end method
