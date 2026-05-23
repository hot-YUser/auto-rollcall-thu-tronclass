.class public Lorg/opencv/core/DMatch;
.super Ljava/lang/Object;
.source "DMatch.java"


# instance fields
.field public distance:F

.field public imgIdx:I

.field public queryIdx:I

.field public trainIdx:I


# direct methods
.method public constructor <init>()V
    .locals 2

    const/4 v0, -0x1

    const v1, 0x7f7fffff    # Float.MAX_VALUE

    .line 29
    invoke-direct {p0, v0, v0, v1}, Lorg/opencv/core/DMatch;-><init>(IIF)V

    return-void
.end method

.method public constructor <init>(IIF)V
    .locals 0

    .line 33
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 34
    iput p1, p0, Lorg/opencv/core/DMatch;->queryIdx:I

    .line 35
    iput p2, p0, Lorg/opencv/core/DMatch;->trainIdx:I

    const/4 p1, -0x1

    .line 36
    iput p1, p0, Lorg/opencv/core/DMatch;->imgIdx:I

    .line 37
    iput p3, p0, Lorg/opencv/core/DMatch;->distance:F

    return-void
.end method

.method public constructor <init>(IIIF)V
    .locals 0

    .line 41
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 42
    iput p1, p0, Lorg/opencv/core/DMatch;->queryIdx:I

    .line 43
    iput p2, p0, Lorg/opencv/core/DMatch;->trainIdx:I

    .line 44
    iput p3, p0, Lorg/opencv/core/DMatch;->imgIdx:I

    .line 45
    iput p4, p0, Lorg/opencv/core/DMatch;->distance:F

    return-void
.end method


# virtual methods
.method public lessThan(Lorg/opencv/core/DMatch;)Z
    .locals 1

    .line 49
    iget v0, p0, Lorg/opencv/core/DMatch;->distance:F

    iget p1, p1, Lorg/opencv/core/DMatch;->distance:F

    cmpg-float p1, v0, p1

    if-gez p1, :cond_0

    const/4 p1, 0x1

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    :goto_0
    return p1
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 54
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "DMatch [queryIdx="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget v1, p0, Lorg/opencv/core/DMatch;->queryIdx:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", trainIdx="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lorg/opencv/core/DMatch;->trainIdx:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", imgIdx="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lorg/opencv/core/DMatch;->imgIdx:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", distance="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lorg/opencv/core/DMatch;->distance:F

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(F)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "]"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
