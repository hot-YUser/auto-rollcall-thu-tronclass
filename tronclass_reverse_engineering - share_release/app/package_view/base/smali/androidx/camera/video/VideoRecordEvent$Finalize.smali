.class public final Landroidx/camera/video/VideoRecordEvent$Finalize;
.super Landroidx/camera/video/VideoRecordEvent;
.source "VideoRecordEvent.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/VideoRecordEvent;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = "Finalize"
.end annotation

.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/VideoRecordEvent$Finalize$VideoRecordError;
    }
.end annotation


# static fields
.field public static final ERROR_DURATION_LIMIT_REACHED:I = 0x9

.field public static final ERROR_ENCODING_FAILED:I = 0x6

.field public static final ERROR_FILE_SIZE_LIMIT_REACHED:I = 0x2

.field public static final ERROR_INSUFFICIENT_STORAGE:I = 0x3

.field public static final ERROR_INVALID_OUTPUT_OPTIONS:I = 0x5

.field public static final ERROR_NONE:I = 0x0

.field public static final ERROR_NO_VALID_DATA:I = 0x8

.field public static final ERROR_RECORDER_ERROR:I = 0x7

.field public static final ERROR_RECORDING_GARBAGE_COLLECTED:I = 0xa

.field public static final ERROR_SOURCE_INACTIVE:I = 0x4

.field public static final ERROR_UNKNOWN:I = 0x1


# instance fields
.field private final mCause:Ljava/lang/Throwable;

.field private final mError:I

.field private final mOutputResults:Landroidx/camera/video/OutputResults;


# direct methods
.method constructor <init>(Landroidx/camera/video/OutputOptions;Landroidx/camera/video/RecordingStats;Landroidx/camera/video/OutputResults;ILjava/lang/Throwable;)V
    .locals 0

    .line 372
    invoke-direct {p0, p1, p2}, Landroidx/camera/video/VideoRecordEvent;-><init>(Landroidx/camera/video/OutputOptions;Landroidx/camera/video/RecordingStats;)V

    .line 373
    iput-object p3, p0, Landroidx/camera/video/VideoRecordEvent$Finalize;->mOutputResults:Landroidx/camera/video/OutputResults;

    .line 374
    iput p4, p0, Landroidx/camera/video/VideoRecordEvent$Finalize;->mError:I

    .line 375
    iput-object p5, p0, Landroidx/camera/video/VideoRecordEvent$Finalize;->mCause:Ljava/lang/Throwable;

    return-void
.end method

.method static errorToString(I)Ljava/lang/String;
    .locals 2

    packed-switch p0, :pswitch_data_0

    .line 437
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Unknown("

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p0

    const-string v0, ")"

    invoke-virtual {p0, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    return-object p0

    .line 433
    :pswitch_0
    const-string p0, "ERROR_RECORDING_GARBAGE_COLLECTED"

    return-object p0

    .line 432
    :pswitch_1
    const-string p0, "ERROR_DURATION_LIMIT_REACHED"

    return-object p0

    .line 430
    :pswitch_2
    const-string p0, "ERROR_NO_VALID_DATA"

    return-object p0

    .line 429
    :pswitch_3
    const-string p0, "ERROR_RECORDER_ERROR"

    return-object p0

    .line 428
    :pswitch_4
    const-string p0, "ERROR_ENCODING_FAILED"

    return-object p0

    .line 427
    :pswitch_5
    const-string p0, "ERROR_INVALID_OUTPUT_OPTIONS"

    return-object p0

    .line 431
    :pswitch_6
    const-string p0, "ERROR_SOURCE_INACTIVE"

    return-object p0

    .line 426
    :pswitch_7
    const-string p0, "ERROR_INSUFFICIENT_STORAGE"

    return-object p0

    .line 425
    :pswitch_8
    const-string p0, "ERROR_FILE_SIZE_LIMIT_REACHED"

    return-object p0

    .line 424
    :pswitch_9
    const-string p0, "ERROR_UNKNOWN"

    return-object p0

    .line 423
    :pswitch_a
    const-string p0, "ERROR_NONE"

    return-object p0

    :pswitch_data_0
    .packed-switch 0x0
        :pswitch_a
        :pswitch_9
        :pswitch_8
        :pswitch_7
        :pswitch_6
        :pswitch_5
        :pswitch_4
        :pswitch_3
        :pswitch_2
        :pswitch_1
        :pswitch_0
    .end packed-switch
.end method


# virtual methods
.method public getCause()Ljava/lang/Throwable;
    .locals 1

    .line 417
    iget-object v0, p0, Landroidx/camera/video/VideoRecordEvent$Finalize;->mCause:Ljava/lang/Throwable;

    return-object v0
.end method

.method public getError()I
    .locals 1

    .line 407
    iget v0, p0, Landroidx/camera/video/VideoRecordEvent$Finalize;->mError:I

    return v0
.end method

.method public getOutputResults()Landroidx/camera/video/OutputResults;
    .locals 1

    .line 383
    iget-object v0, p0, Landroidx/camera/video/VideoRecordEvent$Finalize;->mOutputResults:Landroidx/camera/video/OutputResults;

    return-object v0
.end method

.method public hasError()Z
    .locals 1

    .line 393
    iget v0, p0, Landroidx/camera/video/VideoRecordEvent$Finalize;->mError:I

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method
