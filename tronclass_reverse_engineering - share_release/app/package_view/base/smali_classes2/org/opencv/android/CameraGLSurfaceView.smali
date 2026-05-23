.class public Lorg/opencv/android/CameraGLSurfaceView;
.super Landroid/opengl/GLSurfaceView;
.source "CameraGLSurfaceView.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lorg/opencv/android/CameraGLSurfaceView$CameraTextureListener;
    }
.end annotation


# static fields
.field private static final LOGTAG:Ljava/lang/String; = "CameraGLSurfaceView"


# instance fields
.field private mRenderer:Lorg/opencv/android/CameraGLRendererBase;

.field private mTexListener:Lorg/opencv/android/CameraGLSurfaceView$CameraTextureListener;


# direct methods
.method public constructor <init>(Landroid/content/Context;Landroid/util/AttributeSet;)V
    .locals 1

    .line 46
    invoke-direct {p0, p1, p2}, Landroid/opengl/GLSurfaceView;-><init>(Landroid/content/Context;Landroid/util/AttributeSet;)V

    .line 48
    invoke-virtual {p0}, Lorg/opencv/android/CameraGLSurfaceView;->getContext()Landroid/content/Context;

    move-result-object p1

    sget-object v0, Lorg/opencv/R$styleable;->CameraBridgeViewBase:[I

    invoke-virtual {p1, p2, v0}, Landroid/content/Context;->obtainStyledAttributes(Landroid/util/AttributeSet;[I)Landroid/content/res/TypedArray;

    move-result-object p1

    .line 49
    sget p2, Lorg/opencv/R$styleable;->CameraBridgeViewBase_camera_id:I

    const/4 v0, -0x1

    invoke-virtual {p1, p2, v0}, Landroid/content/res/TypedArray;->getInt(II)I

    move-result p2

    .line 50
    invoke-virtual {p1}, Landroid/content/res/TypedArray;->recycle()V

    .line 53
    new-instance p1, Lorg/opencv/android/Camera2Renderer;

    invoke-direct {p1, p0}, Lorg/opencv/android/Camera2Renderer;-><init>(Lorg/opencv/android/CameraGLSurfaceView;)V

    iput-object p1, p0, Lorg/opencv/android/CameraGLSurfaceView;->mRenderer:Lorg/opencv/android/CameraGLRendererBase;

    .line 57
    invoke-virtual {p0, p2}, Lorg/opencv/android/CameraGLSurfaceView;->setCameraIndex(I)V

    const/4 p1, 0x2

    .line 59
    invoke-virtual {p0, p1}, Lorg/opencv/android/CameraGLSurfaceView;->setEGLContextClientVersion(I)V

    .line 60
    iget-object p1, p0, Lorg/opencv/android/CameraGLSurfaceView;->mRenderer:Lorg/opencv/android/CameraGLRendererBase;

    invoke-virtual {p0, p1}, Lorg/opencv/android/CameraGLSurfaceView;->setRenderer(Landroid/opengl/GLSurfaceView$Renderer;)V

    const/4 p1, 0x0

    .line 61
    invoke-virtual {p0, p1}, Lorg/opencv/android/CameraGLSurfaceView;->setRenderMode(I)V

    return-void
.end method


# virtual methods
.method public disableView()V
    .locals 1

    .line 117
    iget-object v0, p0, Lorg/opencv/android/CameraGLSurfaceView;->mRenderer:Lorg/opencv/android/CameraGLRendererBase;

    invoke-virtual {v0}, Lorg/opencv/android/CameraGLRendererBase;->disableView()V

    return-void
.end method

.method public enableView()V
    .locals 1

    .line 113
    iget-object v0, p0, Lorg/opencv/android/CameraGLSurfaceView;->mRenderer:Lorg/opencv/android/CameraGLRendererBase;

    invoke-virtual {v0}, Lorg/opencv/android/CameraGLRendererBase;->enableView()V

    return-void
.end method

.method public getCameraTextureListener()Lorg/opencv/android/CameraGLSurfaceView$CameraTextureListener;
    .locals 1

    .line 71
    iget-object v0, p0, Lorg/opencv/android/CameraGLSurfaceView;->mTexListener:Lorg/opencv/android/CameraGLSurfaceView$CameraTextureListener;

    return-object v0
.end method

.method public onPause()V
    .locals 2

    .line 107
    const-string v0, "CameraGLSurfaceView"

    const-string v1, "onPause"

    invoke-static {v0, v1}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 108
    iget-object v0, p0, Lorg/opencv/android/CameraGLSurfaceView;->mRenderer:Lorg/opencv/android/CameraGLRendererBase;

    invoke-virtual {v0}, Lorg/opencv/android/CameraGLRendererBase;->onPause()V

    .line 109
    invoke-super {p0}, Landroid/opengl/GLSurfaceView;->onPause()V

    return-void
.end method

.method public onResume()V
    .locals 2

    .line 100
    const-string v0, "CameraGLSurfaceView"

    const-string v1, "onResume"

    invoke-static {v0, v1}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 101
    invoke-super {p0}, Landroid/opengl/GLSurfaceView;->onResume()V

    .line 102
    iget-object v0, p0, Lorg/opencv/android/CameraGLSurfaceView;->mRenderer:Lorg/opencv/android/CameraGLRendererBase;

    invoke-virtual {v0}, Lorg/opencv/android/CameraGLRendererBase;->onResume()V

    return-void
.end method

.method public setCameraIndex(I)V
    .locals 1

    .line 75
    iget-object v0, p0, Lorg/opencv/android/CameraGLSurfaceView;->mRenderer:Lorg/opencv/android/CameraGLRendererBase;

    invoke-virtual {v0, p1}, Lorg/opencv/android/CameraGLRendererBase;->setCameraIndex(I)V

    return-void
.end method

.method public setCameraTextureListener(Lorg/opencv/android/CameraGLSurfaceView$CameraTextureListener;)V
    .locals 0

    .line 66
    iput-object p1, p0, Lorg/opencv/android/CameraGLSurfaceView;->mTexListener:Lorg/opencv/android/CameraGLSurfaceView$CameraTextureListener;

    return-void
.end method

.method public setMaxCameraPreviewSize(II)V
    .locals 1

    .line 79
    iget-object v0, p0, Lorg/opencv/android/CameraGLSurfaceView;->mRenderer:Lorg/opencv/android/CameraGLRendererBase;

    invoke-virtual {v0, p1, p2}, Lorg/opencv/android/CameraGLRendererBase;->setMaxCameraPreviewSize(II)V

    return-void
.end method

.method public surfaceChanged(Landroid/view/SurfaceHolder;III)V
    .locals 0

    .line 95
    invoke-super {p0, p1, p2, p3, p4}, Landroid/opengl/GLSurfaceView;->surfaceChanged(Landroid/view/SurfaceHolder;III)V

    return-void
.end method

.method public surfaceCreated(Landroid/view/SurfaceHolder;)V
    .locals 0

    .line 84
    invoke-super {p0, p1}, Landroid/opengl/GLSurfaceView;->surfaceCreated(Landroid/view/SurfaceHolder;)V

    return-void
.end method

.method public surfaceDestroyed(Landroid/view/SurfaceHolder;)V
    .locals 2

    .line 89
    iget-object v0, p0, Lorg/opencv/android/CameraGLSurfaceView;->mRenderer:Lorg/opencv/android/CameraGLRendererBase;

    const/4 v1, 0x0

    iput-boolean v1, v0, Lorg/opencv/android/CameraGLRendererBase;->mHaveSurface:Z

    .line 90
    invoke-super {p0, p1}, Landroid/opengl/GLSurfaceView;->surfaceDestroyed(Landroid/view/SurfaceHolder;)V

    return-void
.end method
