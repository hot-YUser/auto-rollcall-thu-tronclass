.class final Landroidx/camera/core/AutoValue_ImageReaderFormatRecommender_FormatCombo;
.super Landroidx/camera/core/ImageReaderFormatRecommender$FormatCombo;
.source "AutoValue_ImageReaderFormatRecommender_FormatCombo.java"


# instance fields
.field private final imageAnalysisFormat:I

.field private final imageCaptureFormat:I


# direct methods
.method constructor <init>(II)V
    .locals 0

    .line 14
    invoke-direct {p0}, Landroidx/camera/core/ImageReaderFormatRecommender$FormatCombo;-><init>()V

    .line 15
    iput p1, p0, Landroidx/camera/core/AutoValue_ImageReaderFormatRecommender_FormatCombo;->imageCaptureFormat:I

    .line 16
    iput p2, p0, Landroidx/camera/core/AutoValue_ImageReaderFormatRecommender_FormatCombo;->imageAnalysisFormat:I

    return-void
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 4

    const/4 v0, 0x1

    if-ne p1, p0, :cond_0

    return v0

    .line 42
    :cond_0
    instance-of v1, p1, Landroidx/camera/core/ImageReaderFormatRecommender$FormatCombo;

    const/4 v2, 0x0

    if-eqz v1, :cond_2

    .line 43
    check-cast p1, Landroidx/camera/core/ImageReaderFormatRecommender$FormatCombo;

    .line 44
    iget v1, p0, Landroidx/camera/core/AutoValue_ImageReaderFormatRecommender_FormatCombo;->imageCaptureFormat:I

    invoke-virtual {p1}, Landroidx/camera/core/ImageReaderFormatRecommender$FormatCombo;->imageCaptureFormat()I

    move-result v3

    if-ne v1, v3, :cond_1

    iget v1, p0, Landroidx/camera/core/AutoValue_ImageReaderFormatRecommender_FormatCombo;->imageAnalysisFormat:I

    .line 45
    invoke-virtual {p1}, Landroidx/camera/core/ImageReaderFormatRecommender$FormatCombo;->imageAnalysisFormat()I

    move-result p1

    if-ne v1, p1, :cond_1

    goto :goto_0

    :cond_1
    move v0, v2

    :goto_0
    return v0

    :cond_2
    return v2
.end method

.method public hashCode()I
    .locals 2

    .line 54
    iget v0, p0, Landroidx/camera/core/AutoValue_ImageReaderFormatRecommender_FormatCombo;->imageCaptureFormat:I

    const v1, 0xf4243

    xor-int/2addr v0, v1

    mul-int/2addr v0, v1

    .line 56
    iget v1, p0, Landroidx/camera/core/AutoValue_ImageReaderFormatRecommender_FormatCombo;->imageAnalysisFormat:I

    xor-int/2addr v0, v1

    return v0
.end method

.method imageAnalysisFormat()I
    .locals 1

    .line 26
    iget v0, p0, Landroidx/camera/core/AutoValue_ImageReaderFormatRecommender_FormatCombo;->imageAnalysisFormat:I

    return v0
.end method

.method imageCaptureFormat()I
    .locals 1

    .line 21
    iget v0, p0, Landroidx/camera/core/AutoValue_ImageReaderFormatRecommender_FormatCombo;->imageCaptureFormat:I

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 31
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "FormatCombo{imageCaptureFormat="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget v1, p0, Landroidx/camera/core/AutoValue_ImageReaderFormatRecommender_FormatCombo;->imageCaptureFormat:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", imageAnalysisFormat="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Landroidx/camera/core/AutoValue_ImageReaderFormatRecommender_FormatCombo;->imageAnalysisFormat:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
