.class Lorg/opencv/android/NativeCameraView$CameraWorker;
.super Ljava/lang/Object;
.source "NativeCameraView.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lorg/opencv/android/NativeCameraView;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x2
    name = "CameraWorker"
.end annotation


# instance fields
.field final synthetic this$0:Lorg/opencv/android/NativeCameraView;


# direct methods
.method private constructor <init>(Lorg/opencv/android/NativeCameraView;)V
    .locals 0

    .line 177
    iput-object p1, p0, Lorg/opencv/android/NativeCameraView$CameraWorker;->this$0:Lorg/opencv/android/NativeCameraView;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method synthetic constructor <init>(Lorg/opencv/android/NativeCameraView;Lorg/opencv/android/NativeCameraView$1;)V
    .locals 0

    .line 177
    invoke-direct {p0, p1}, Lorg/opencv/android/NativeCameraView$CameraWorker;-><init>(Lorg/opencv/android/NativeCameraView;)V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 181
    :cond_0
    iget-object v0, p0, Lorg/opencv/android/NativeCameraView$CameraWorker;->this$0:Lorg/opencv/android/NativeCameraView;

    iget-object v0, v0, Lorg/opencv/android/NativeCameraView;->mCamera:Lorg/opencv/videoio/VideoCapture;

    invoke-virtual {v0}, Lorg/opencv/videoio/VideoCapture;->grab()Z

    move-result v0

    if-nez v0, :cond_1

    .line 182
    const-string v0, "NativeCameraView"

    const-string v1, "Camera frame grab failed"

    invoke-static {v0, v1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    goto :goto_0

    .line 186
    :cond_1
    iget-object v0, p0, Lorg/opencv/android/NativeCameraView$CameraWorker;->this$0:Lorg/opencv/android/NativeCameraView;

    iget-object v1, v0, Lorg/opencv/android/NativeCameraView;->mFrame:Lorg/opencv/android/NativeCameraView$NativeCameraFrame;

    invoke-virtual {v0, v1}, Lorg/opencv/android/NativeCameraView;->deliverAndDrawFrame(Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewFrame;)V

    .line 187
    iget-object v0, p0, Lorg/opencv/android/NativeCameraView$CameraWorker;->this$0:Lorg/opencv/android/NativeCameraView;

    invoke-static {v0}, Lorg/opencv/android/NativeCameraView;->access$100(Lorg/opencv/android/NativeCameraView;)Z

    move-result v0

    if-eqz v0, :cond_0

    :goto_0
    return-void
.end method
