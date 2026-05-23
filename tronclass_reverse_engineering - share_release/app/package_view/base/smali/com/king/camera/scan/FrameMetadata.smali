.class public Lcom/king/camera/scan/FrameMetadata;
.super Ljava/lang/Object;
.source "FrameMetadata.java"


# instance fields
.field private final height:I

.field private final rotation:I

.field private final width:I


# direct methods
.method public constructor <init>(III)V
    .locals 0

    .line 60
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 61
    iput p1, p0, Lcom/king/camera/scan/FrameMetadata;->width:I

    .line 62
    iput p2, p0, Lcom/king/camera/scan/FrameMetadata;->height:I

    .line 63
    iput p3, p0, Lcom/king/camera/scan/FrameMetadata;->rotation:I

    return-void
.end method


# virtual methods
.method public getHeight()I
    .locals 1

    .line 48
    iget v0, p0, Lcom/king/camera/scan/FrameMetadata;->height:I

    return v0
.end method

.method public getRotation()I
    .locals 1

    .line 57
    iget v0, p0, Lcom/king/camera/scan/FrameMetadata;->rotation:I

    return v0
.end method

.method public getWidth()I
    .locals 1

    .line 39
    iget v0, p0, Lcom/king/camera/scan/FrameMetadata;->width:I

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 69
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "FrameMetadata{width="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget v1, p0, Lcom/king/camera/scan/FrameMetadata;->width:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", height="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lcom/king/camera/scan/FrameMetadata;->height:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", rotation="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lcom/king/camera/scan/FrameMetadata;->rotation:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const/16 v1, 0x7d

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
