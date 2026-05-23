.class public Lorg/opencv/core/KeyPoint;
.super Ljava/lang/Object;
.source "KeyPoint.java"


# instance fields
.field public angle:F

.field public class_id:I

.field public octave:I

.field public pt:Lorg/opencv/core/Point;

.field public response:F

.field public size:F


# direct methods
.method public constructor <init>()V
    .locals 8

    const/4 v6, 0x0

    const/4 v7, -0x1

    const/4 v1, 0x0

    const/4 v2, 0x0

    const/4 v3, 0x0

    const/high16 v4, -0x40800000    # -1.0f

    const/4 v5, 0x0

    move-object v0, p0

    .line 47
    invoke-direct/range {v0 .. v7}, Lorg/opencv/core/KeyPoint;-><init>(FFFFFII)V

    return-void
.end method

.method public constructor <init>(FFF)V
    .locals 8

    const/4 v6, 0x0

    const/4 v7, -0x1

    const/high16 v4, -0x40800000    # -1.0f

    const/4 v5, 0x0

    move-object v0, p0

    move v1, p1

    move v2, p2

    move v3, p3

    .line 67
    invoke-direct/range {v0 .. v7}, Lorg/opencv/core/KeyPoint;-><init>(FFFFFII)V

    return-void
.end method

.method public constructor <init>(FFFF)V
    .locals 8

    const/4 v6, 0x0

    const/4 v7, -0x1

    const/4 v5, 0x0

    move-object v0, p0

    move v1, p1

    move v2, p2

    move v3, p3

    move v4, p4

    .line 62
    invoke-direct/range {v0 .. v7}, Lorg/opencv/core/KeyPoint;-><init>(FFFFFII)V

    return-void
.end method

.method public constructor <init>(FFFFF)V
    .locals 8

    const/4 v6, 0x0

    const/4 v7, -0x1

    move-object v0, p0

    move v1, p1

    move v2, p2

    move v3, p3

    move v4, p4

    move v5, p5

    .line 57
    invoke-direct/range {v0 .. v7}, Lorg/opencv/core/KeyPoint;-><init>(FFFFFII)V

    return-void
.end method

.method public constructor <init>(FFFFFI)V
    .locals 8

    const/4 v7, -0x1

    move-object v0, p0

    move v1, p1

    move v2, p2

    move v3, p3

    move v4, p4

    move v5, p5

    move v6, p6

    .line 52
    invoke-direct/range {v0 .. v7}, Lorg/opencv/core/KeyPoint;-><init>(FFFFFII)V

    return-void
.end method

.method public constructor <init>(FFFFFII)V
    .locals 3

    .line 36
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 37
    new-instance v0, Lorg/opencv/core/Point;

    float-to-double v1, p1

    float-to-double p1, p2

    invoke-direct {v0, v1, v2, p1, p2}, Lorg/opencv/core/Point;-><init>(DD)V

    iput-object v0, p0, Lorg/opencv/core/KeyPoint;->pt:Lorg/opencv/core/Point;

    .line 38
    iput p3, p0, Lorg/opencv/core/KeyPoint;->size:F

    .line 39
    iput p4, p0, Lorg/opencv/core/KeyPoint;->angle:F

    .line 40
    iput p5, p0, Lorg/opencv/core/KeyPoint;->response:F

    .line 41
    iput p6, p0, Lorg/opencv/core/KeyPoint;->octave:I

    .line 42
    iput p7, p0, Lorg/opencv/core/KeyPoint;->class_id:I

    return-void
.end method


# virtual methods
.method public toString()Ljava/lang/String;
    .locals 2

    .line 72
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "KeyPoint [pt="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lorg/opencv/core/KeyPoint;->pt:Lorg/opencv/core/Point;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", size="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lorg/opencv/core/KeyPoint;->size:F

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(F)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", angle="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lorg/opencv/core/KeyPoint;->angle:F

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(F)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", response="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lorg/opencv/core/KeyPoint;->response:F

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(F)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", octave="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lorg/opencv/core/KeyPoint;->octave:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", class_id="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lorg/opencv/core/KeyPoint;->class_id:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "]"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
