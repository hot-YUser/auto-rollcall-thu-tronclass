.class Lorg/opencv/android/JavaCameraView$JavaCameraFrame;
.super Ljava/lang/Object;
.source "JavaCameraView.java"

# interfaces
.implements Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewFrame;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lorg/opencv/android/JavaCameraView;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x2
    name = "JavaCameraFrame"
.end annotation


# instance fields
.field private mHeight:I

.field private mRgba:Lorg/opencv/core/Mat;

.field private mWidth:I

.field private mYuvFrameData:Lorg/opencv/core/Mat;

.field final synthetic this$0:Lorg/opencv/android/JavaCameraView;


# direct methods
.method public constructor <init>(Lorg/opencv/android/JavaCameraView;Lorg/opencv/core/Mat;II)V
    .locals 0

    .line 331
    iput-object p1, p0, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;->this$0:Lorg/opencv/android/JavaCameraView;

    .line 332
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 333
    iput p3, p0, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;->mWidth:I

    .line 334
    iput p4, p0, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;->mHeight:I

    .line 335
    iput-object p2, p0, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;->mYuvFrameData:Lorg/opencv/core/Mat;

    .line 336
    new-instance p1, Lorg/opencv/core/Mat;

    invoke-direct {p1}, Lorg/opencv/core/Mat;-><init>()V

    iput-object p1, p0, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;->mRgba:Lorg/opencv/core/Mat;

    return-void
.end method


# virtual methods
.method public gray()Lorg/opencv/core/Mat;
    .locals 4

    .line 316
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;->mYuvFrameData:Lorg/opencv/core/Mat;

    iget v1, p0, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;->mHeight:I

    iget v2, p0, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;->mWidth:I

    const/4 v3, 0x0

    invoke-virtual {v0, v3, v1, v3, v2}, Lorg/opencv/core/Mat;->submat(IIII)Lorg/opencv/core/Mat;

    move-result-object v0

    return-object v0
.end method

.method public release()V
    .locals 1

    .line 340
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;->mRgba:Lorg/opencv/core/Mat;

    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-void
.end method

.method public rgba()Lorg/opencv/core/Mat;
    .locals 4

    .line 321
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;->this$0:Lorg/opencv/android/JavaCameraView;

    invoke-static {v0}, Lorg/opencv/android/JavaCameraView;->access$100(Lorg/opencv/android/JavaCameraView;)I

    move-result v0

    const/16 v1, 0x11

    const/4 v2, 0x4

    if-ne v0, v1, :cond_0

    .line 322
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;->mYuvFrameData:Lorg/opencv/core/Mat;

    iget-object v1, p0, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;->mRgba:Lorg/opencv/core/Mat;

    const/16 v3, 0x60

    invoke-static {v0, v1, v3, v2}, Lorg/opencv/imgproc/Imgproc;->cvtColor(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;II)V

    goto :goto_0

    .line 323
    :cond_0
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;->this$0:Lorg/opencv/android/JavaCameraView;

    invoke-static {v0}, Lorg/opencv/android/JavaCameraView;->access$100(Lorg/opencv/android/JavaCameraView;)I

    move-result v0

    const v1, 0x32315659

    if-ne v0, v1, :cond_1

    .line 324
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;->mYuvFrameData:Lorg/opencv/core/Mat;

    iget-object v1, p0, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;->mRgba:Lorg/opencv/core/Mat;

    const/16 v3, 0x64

    invoke-static {v0, v1, v3, v2}, Lorg/opencv/imgproc/Imgproc;->cvtColor(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;II)V

    .line 328
    :goto_0
    iget-object v0, p0, Lorg/opencv/android/JavaCameraView$JavaCameraFrame;->mRgba:Lorg/opencv/core/Mat;

    return-object v0

    .line 326
    :cond_1
    new-instance v0, Ljava/lang/IllegalArgumentException;

    const-string v1, "Preview Format can be NV21 or YV12"

    invoke-direct {v0, v1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw v0
.end method
