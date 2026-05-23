.class public Lcom/king/camera/scan/AnalyzeResult;
.super Ljava/lang/Object;
.source "AnalyzeResult.java"


# annotations
.annotation system Ldalvik/annotation/Signature;
    value = {
        "<T:",
        "Ljava/lang/Object;",
        ">",
        "Ljava/lang/Object;"
    }
.end annotation


# instance fields
.field private bitmap:Landroid/graphics/Bitmap;

.field private final frameMetadata:Lcom/king/camera/scan/FrameMetadata;

.field private final imageData:[B

.field private final imageFormat:I

.field private final result:Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "TT;"
        }
    .end annotation
.end field


# direct methods
.method public constructor <init>([BILcom/king/camera/scan/FrameMetadata;Ljava/lang/Object;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "([BI",
            "Lcom/king/camera/scan/FrameMetadata;",
            "TT;)V"
        }
    .end annotation

    .line 58
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 59
    iput-object p1, p0, Lcom/king/camera/scan/AnalyzeResult;->imageData:[B

    .line 60
    iput p2, p0, Lcom/king/camera/scan/AnalyzeResult;->imageFormat:I

    .line 61
    iput-object p3, p0, Lcom/king/camera/scan/AnalyzeResult;->frameMetadata:Lcom/king/camera/scan/FrameMetadata;

    .line 62
    iput-object p4, p0, Lcom/king/camera/scan/AnalyzeResult;->result:Ljava/lang/Object;

    return-void
.end method


# virtual methods
.method public getBitmap()Landroid/graphics/Bitmap;
    .locals 2

    .line 101
    iget v0, p0, Lcom/king/camera/scan/AnalyzeResult;->imageFormat:I

    const/16 v1, 0x11

    if-ne v0, v1, :cond_1

    .line 104
    iget-object v0, p0, Lcom/king/camera/scan/AnalyzeResult;->bitmap:Landroid/graphics/Bitmap;

    if-nez v0, :cond_0

    .line 105
    iget-object v0, p0, Lcom/king/camera/scan/AnalyzeResult;->imageData:[B

    iget-object v1, p0, Lcom/king/camera/scan/AnalyzeResult;->frameMetadata:Lcom/king/camera/scan/FrameMetadata;

    invoke-static {v0, v1}, Lcom/king/camera/scan/util/BitmapUtils;->getBitmap([BLcom/king/camera/scan/FrameMetadata;)Landroid/graphics/Bitmap;

    move-result-object v0

    iput-object v0, p0, Lcom/king/camera/scan/AnalyzeResult;->bitmap:Landroid/graphics/Bitmap;

    .line 107
    :cond_0
    iget-object v0, p0, Lcom/king/camera/scan/AnalyzeResult;->bitmap:Landroid/graphics/Bitmap;

    return-object v0

    .line 102
    :cond_1
    new-instance v0, Ljava/lang/IllegalArgumentException;

    const-string v1, "only support ImageFormat.NV21 for now."

    invoke-direct {v0, v1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw v0
.end method

.method public getBitmapHeight()I
    .locals 1
    .annotation runtime Ljava/lang/Deprecated;
    .end annotation

    .line 141
    invoke-virtual {p0}, Lcom/king/camera/scan/AnalyzeResult;->getImageHeight()I

    move-result v0

    return v0
.end method

.method public getBitmapWidth()I
    .locals 1
    .annotation runtime Ljava/lang/Deprecated;
    .end annotation

    .line 118
    invoke-virtual {p0}, Lcom/king/camera/scan/AnalyzeResult;->getImageWidth()I

    move-result v0

    return v0
.end method

.method public getFrameMetadata()Lcom/king/camera/scan/FrameMetadata;
    .locals 1

    .line 91
    iget-object v0, p0, Lcom/king/camera/scan/AnalyzeResult;->frameMetadata:Lcom/king/camera/scan/FrameMetadata;

    return-object v0
.end method

.method public getImageData()[B
    .locals 1

    .line 72
    iget-object v0, p0, Lcom/king/camera/scan/AnalyzeResult;->imageData:[B

    return-object v0
.end method

.method public getImageFormat()I
    .locals 1

    .line 81
    iget v0, p0, Lcom/king/camera/scan/AnalyzeResult;->imageFormat:I

    return v0
.end method

.method public getImageHeight()I
    .locals 1

    .line 150
    iget-object v0, p0, Lcom/king/camera/scan/AnalyzeResult;->frameMetadata:Lcom/king/camera/scan/FrameMetadata;

    invoke-virtual {v0}, Lcom/king/camera/scan/FrameMetadata;->getRotation()I

    move-result v0

    rem-int/lit16 v0, v0, 0xb4

    if-nez v0, :cond_0

    .line 151
    iget-object v0, p0, Lcom/king/camera/scan/AnalyzeResult;->frameMetadata:Lcom/king/camera/scan/FrameMetadata;

    invoke-virtual {v0}, Lcom/king/camera/scan/FrameMetadata;->getHeight()I

    move-result v0

    return v0

    .line 153
    :cond_0
    iget-object v0, p0, Lcom/king/camera/scan/AnalyzeResult;->frameMetadata:Lcom/king/camera/scan/FrameMetadata;

    invoke-virtual {v0}, Lcom/king/camera/scan/FrameMetadata;->getWidth()I

    move-result v0

    return v0
.end method

.method public getImageWidth()I
    .locals 1

    .line 127
    iget-object v0, p0, Lcom/king/camera/scan/AnalyzeResult;->frameMetadata:Lcom/king/camera/scan/FrameMetadata;

    invoke-virtual {v0}, Lcom/king/camera/scan/FrameMetadata;->getRotation()I

    move-result v0

    rem-int/lit16 v0, v0, 0xb4

    if-nez v0, :cond_0

    .line 128
    iget-object v0, p0, Lcom/king/camera/scan/AnalyzeResult;->frameMetadata:Lcom/king/camera/scan/FrameMetadata;

    invoke-virtual {v0}, Lcom/king/camera/scan/FrameMetadata;->getWidth()I

    move-result v0

    return v0

    .line 130
    :cond_0
    iget-object v0, p0, Lcom/king/camera/scan/AnalyzeResult;->frameMetadata:Lcom/king/camera/scan/FrameMetadata;

    invoke-virtual {v0}, Lcom/king/camera/scan/FrameMetadata;->getHeight()I

    move-result v0

    return v0
.end method

.method public getResult()Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()TT;"
        }
    .end annotation

    .line 163
    iget-object v0, p0, Lcom/king/camera/scan/AnalyzeResult;->result:Ljava/lang/Object;

    return-object v0
.end method
