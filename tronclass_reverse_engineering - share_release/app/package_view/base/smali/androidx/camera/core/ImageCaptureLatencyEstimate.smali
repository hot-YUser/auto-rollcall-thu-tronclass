.class public Landroidx/camera/core/ImageCaptureLatencyEstimate;
.super Ljava/lang/Object;
.source "ImageCaptureLatencyEstimate.java"


# static fields
.field public static final UNDEFINED_CAPTURE_LATENCY:J = -0x1L

.field public static final UNDEFINED_IMAGE_CAPTURE_LATENCY:Landroidx/camera/core/ImageCaptureLatencyEstimate;

.field public static final UNDEFINED_PROCESSING_LATENCY:J = -0x1L


# instance fields
.field public final captureLatencyMillis:J

.field public final processingLatencyMillis:J


# direct methods
.method static constructor <clinit>()V
    .locals 3

    .line 43
    new-instance v0, Landroidx/camera/core/ImageCaptureLatencyEstimate;

    const-wide/16 v1, -0x1

    invoke-direct {v0, v1, v2, v1, v2}, Landroidx/camera/core/ImageCaptureLatencyEstimate;-><init>(JJ)V

    sput-object v0, Landroidx/camera/core/ImageCaptureLatencyEstimate;->UNDEFINED_IMAGE_CAPTURE_LATENCY:Landroidx/camera/core/ImageCaptureLatencyEstimate;

    return-void
.end method

.method constructor <init>(JJ)V
    .locals 0

    .line 61
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 62
    iput-wide p1, p0, Landroidx/camera/core/ImageCaptureLatencyEstimate;->captureLatencyMillis:J

    .line 63
    iput-wide p3, p0, Landroidx/camera/core/ImageCaptureLatencyEstimate;->processingLatencyMillis:J

    return-void
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 7

    const/4 v0, 0x1

    if-ne p0, p1, :cond_0

    return v0

    .line 69
    :cond_0
    instance-of v1, p1, Landroidx/camera/core/ImageCaptureLatencyEstimate;

    const/4 v2, 0x0

    if-nez v1, :cond_1

    return v2

    .line 70
    :cond_1
    check-cast p1, Landroidx/camera/core/ImageCaptureLatencyEstimate;

    .line 71
    iget-wide v3, p0, Landroidx/camera/core/ImageCaptureLatencyEstimate;->captureLatencyMillis:J

    iget-wide v5, p1, Landroidx/camera/core/ImageCaptureLatencyEstimate;->captureLatencyMillis:J

    cmp-long v1, v3, v5

    if-nez v1, :cond_2

    iget-wide v3, p0, Landroidx/camera/core/ImageCaptureLatencyEstimate;->processingLatencyMillis:J

    iget-wide v5, p1, Landroidx/camera/core/ImageCaptureLatencyEstimate;->processingLatencyMillis:J

    cmp-long p1, v3, v5

    if-nez p1, :cond_2

    goto :goto_0

    :cond_2
    move v0, v2

    :goto_0
    return v0
.end method

.method public hashCode()I
    .locals 3

    .line 77
    iget-wide v0, p0, Landroidx/camera/core/ImageCaptureLatencyEstimate;->captureLatencyMillis:J

    invoke-static {v0, v1}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object v0

    iget-wide v1, p0, Landroidx/camera/core/ImageCaptureLatencyEstimate;->processingLatencyMillis:J

    invoke-static {v1, v2}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object v1

    filled-new-array {v0, v1}, [Ljava/lang/Object;

    move-result-object v0

    invoke-static {v0}, Ljava/util/Objects;->hash([Ljava/lang/Object;)I

    move-result v0

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 3

    .line 83
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "captureLatencyMillis="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-wide v1, p0, Landroidx/camera/core/ImageCaptureLatencyEstimate;->captureLatencyMillis:J

    invoke-virtual {v0, v1, v2}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", processingLatencyMillis="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-wide v1, p0, Landroidx/camera/core/ImageCaptureLatencyEstimate;->processingLatencyMillis:J

    invoke-virtual {v0, v1, v2}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
