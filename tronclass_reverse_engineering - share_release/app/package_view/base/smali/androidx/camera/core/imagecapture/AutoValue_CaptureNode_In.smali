.class final Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;
.super Landroidx/camera/core/imagecapture/CaptureNode$In;
.source "AutoValue_CaptureNode_In.java"


# instance fields
.field private final errorEdge:Landroidx/camera/core/processing/Edge;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroidx/camera/core/processing/Edge<",
            "Landroidx/camera/core/ImageCaptureException;",
            ">;"
        }
    .end annotation
.end field

.field private final imageReaderProxyProvider:Landroidx/camera/core/ImageReaderProxyProvider;

.field private final inputFormat:I

.field private final outputFormat:I

.field private final requestEdge:Landroidx/camera/core/processing/Edge;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroidx/camera/core/processing/Edge<",
            "Landroidx/camera/core/imagecapture/ProcessingRequest;",
            ">;"
        }
    .end annotation
.end field

.field private final size:Landroid/util/Size;

.field private final virtualCamera:Z


# direct methods
.method constructor <init>(Landroid/util/Size;IIZLandroidx/camera/core/ImageReaderProxyProvider;Landroidx/camera/core/processing/Edge;Landroidx/camera/core/processing/Edge;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/util/Size;",
            "IIZ",
            "Landroidx/camera/core/ImageReaderProxyProvider;",
            "Landroidx/camera/core/processing/Edge<",
            "Landroidx/camera/core/imagecapture/ProcessingRequest;",
            ">;",
            "Landroidx/camera/core/processing/Edge<",
            "Landroidx/camera/core/ImageCaptureException;",
            ">;)V"
        }
    .end annotation

    .line 36
    invoke-direct {p0}, Landroidx/camera/core/imagecapture/CaptureNode$In;-><init>()V

    if-eqz p1, :cond_2

    .line 40
    iput-object p1, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->size:Landroid/util/Size;

    .line 41
    iput p2, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->inputFormat:I

    .line 42
    iput p3, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->outputFormat:I

    .line 43
    iput-boolean p4, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->virtualCamera:Z

    .line 44
    iput-object p5, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->imageReaderProxyProvider:Landroidx/camera/core/ImageReaderProxyProvider;

    if-eqz p6, :cond_1

    .line 48
    iput-object p6, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->requestEdge:Landroidx/camera/core/processing/Edge;

    if-eqz p7, :cond_0

    .line 52
    iput-object p7, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->errorEdge:Landroidx/camera/core/processing/Edge;

    return-void

    .line 50
    :cond_0
    new-instance p1, Ljava/lang/NullPointerException;

    const-string p2, "Null errorEdge"

    invoke-direct {p1, p2}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 46
    :cond_1
    new-instance p1, Ljava/lang/NullPointerException;

    const-string p2, "Null requestEdge"

    invoke-direct {p1, p2}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 38
    :cond_2
    new-instance p1, Ljava/lang/NullPointerException;

    const-string p2, "Null size"

    invoke-direct {p1, p2}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 4

    const/4 v0, 0x1

    if-ne p1, p0, :cond_0

    return v0

    .line 111
    :cond_0
    instance-of v1, p1, Landroidx/camera/core/imagecapture/CaptureNode$In;

    const/4 v2, 0x0

    if-eqz v1, :cond_3

    .line 112
    check-cast p1, Landroidx/camera/core/imagecapture/CaptureNode$In;

    .line 113
    iget-object v1, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->size:Landroid/util/Size;

    invoke-virtual {p1}, Landroidx/camera/core/imagecapture/CaptureNode$In;->getSize()Landroid/util/Size;

    move-result-object v3

    invoke-virtual {v1, v3}, Landroid/util/Size;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_2

    iget v1, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->inputFormat:I

    .line 114
    invoke-virtual {p1}, Landroidx/camera/core/imagecapture/CaptureNode$In;->getInputFormat()I

    move-result v3

    if-ne v1, v3, :cond_2

    iget v1, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->outputFormat:I

    .line 115
    invoke-virtual {p1}, Landroidx/camera/core/imagecapture/CaptureNode$In;->getOutputFormat()I

    move-result v3

    if-ne v1, v3, :cond_2

    iget-boolean v1, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->virtualCamera:Z

    .line 116
    invoke-virtual {p1}, Landroidx/camera/core/imagecapture/CaptureNode$In;->isVirtualCamera()Z

    move-result v3

    if-ne v1, v3, :cond_2

    iget-object v1, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->imageReaderProxyProvider:Landroidx/camera/core/ImageReaderProxyProvider;

    if-nez v1, :cond_1

    .line 117
    invoke-virtual {p1}, Landroidx/camera/core/imagecapture/CaptureNode$In;->getImageReaderProxyProvider()Landroidx/camera/core/ImageReaderProxyProvider;

    move-result-object v1

    if-nez v1, :cond_2

    goto :goto_0

    :cond_1
    invoke-virtual {p1}, Landroidx/camera/core/imagecapture/CaptureNode$In;->getImageReaderProxyProvider()Landroidx/camera/core/ImageReaderProxyProvider;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_2

    :goto_0
    iget-object v1, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->requestEdge:Landroidx/camera/core/processing/Edge;

    .line 118
    invoke-virtual {p1}, Landroidx/camera/core/imagecapture/CaptureNode$In;->getRequestEdge()Landroidx/camera/core/processing/Edge;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_2

    iget-object v1, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->errorEdge:Landroidx/camera/core/processing/Edge;

    .line 119
    invoke-virtual {p1}, Landroidx/camera/core/imagecapture/CaptureNode$In;->getErrorEdge()Landroidx/camera/core/processing/Edge;

    move-result-object p1

    invoke-virtual {v1, p1}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_2

    goto :goto_1

    :cond_2
    move v0, v2

    :goto_1
    return v0

    :cond_3
    return v2
.end method

.method getErrorEdge()Landroidx/camera/core/processing/Edge;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroidx/camera/core/processing/Edge<",
            "Landroidx/camera/core/ImageCaptureException;",
            ">;"
        }
    .end annotation

    .line 90
    iget-object v0, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->errorEdge:Landroidx/camera/core/processing/Edge;

    return-object v0
.end method

.method getImageReaderProxyProvider()Landroidx/camera/core/ImageReaderProxyProvider;
    .locals 1

    .line 78
    iget-object v0, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->imageReaderProxyProvider:Landroidx/camera/core/ImageReaderProxyProvider;

    return-object v0
.end method

.method getInputFormat()I
    .locals 1

    .line 62
    iget v0, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->inputFormat:I

    return v0
.end method

.method getOutputFormat()I
    .locals 1

    .line 67
    iget v0, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->outputFormat:I

    return v0
.end method

.method getRequestEdge()Landroidx/camera/core/processing/Edge;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroidx/camera/core/processing/Edge<",
            "Landroidx/camera/core/imagecapture/ProcessingRequest;",
            ">;"
        }
    .end annotation

    .line 84
    iget-object v0, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->requestEdge:Landroidx/camera/core/processing/Edge;

    return-object v0
.end method

.method getSize()Landroid/util/Size;
    .locals 1

    .line 57
    iget-object v0, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->size:Landroid/util/Size;

    return-object v0
.end method

.method public hashCode()I
    .locals 3

    .line 128
    iget-object v0, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->size:Landroid/util/Size;

    invoke-virtual {v0}, Landroid/util/Size;->hashCode()I

    move-result v0

    const v1, 0xf4243

    xor-int/2addr v0, v1

    mul-int/2addr v0, v1

    .line 130
    iget v2, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->inputFormat:I

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 132
    iget v2, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->outputFormat:I

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 134
    iget-boolean v2, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->virtualCamera:Z

    if-eqz v2, :cond_0

    const/16 v2, 0x4cf

    goto :goto_0

    :cond_0
    const/16 v2, 0x4d5

    :goto_0
    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 136
    iget-object v2, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->imageReaderProxyProvider:Landroidx/camera/core/ImageReaderProxyProvider;

    if-nez v2, :cond_1

    const/4 v2, 0x0

    goto :goto_1

    :cond_1
    invoke-virtual {v2}, Ljava/lang/Object;->hashCode()I

    move-result v2

    :goto_1
    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 138
    iget-object v2, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->requestEdge:Landroidx/camera/core/processing/Edge;

    invoke-virtual {v2}, Ljava/lang/Object;->hashCode()I

    move-result v2

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 140
    iget-object v1, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->errorEdge:Landroidx/camera/core/processing/Edge;

    invoke-virtual {v1}, Ljava/lang/Object;->hashCode()I

    move-result v1

    xor-int/2addr v0, v1

    return v0
.end method

.method isVirtualCamera()Z
    .locals 1

    .line 72
    iget-boolean v0, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->virtualCamera:Z

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 95
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "In{size="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->size:Landroid/util/Size;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", inputFormat="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->inputFormat:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", outputFormat="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->outputFormat:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", virtualCamera="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->virtualCamera:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", imageReaderProxyProvider="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->imageReaderProxyProvider:Landroidx/camera/core/ImageReaderProxyProvider;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", requestEdge="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->requestEdge:Landroidx/camera/core/processing/Edge;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", errorEdge="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/core/imagecapture/AutoValue_CaptureNode_In;->errorEdge:Landroidx/camera/core/processing/Edge;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
