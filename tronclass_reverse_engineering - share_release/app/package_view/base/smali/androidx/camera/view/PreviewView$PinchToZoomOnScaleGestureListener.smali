.class Landroidx/camera/view/PreviewView$PinchToZoomOnScaleGestureListener;
.super Landroid/view/ScaleGestureDetector$SimpleOnScaleGestureListener;
.source "PreviewView.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/view/PreviewView;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = "PinchToZoomOnScaleGestureListener"
.end annotation


# instance fields
.field final synthetic this$0:Landroidx/camera/view/PreviewView;


# direct methods
.method constructor <init>(Landroidx/camera/view/PreviewView;)V
    .locals 0

    .line 915
    iput-object p1, p0, Landroidx/camera/view/PreviewView$PinchToZoomOnScaleGestureListener;->this$0:Landroidx/camera/view/PreviewView;

    invoke-direct {p0}, Landroid/view/ScaleGestureDetector$SimpleOnScaleGestureListener;-><init>()V

    return-void
.end method


# virtual methods
.method public onScale(Landroid/view/ScaleGestureDetector;)Z
    .locals 1

    .line 919
    iget-object v0, p0, Landroidx/camera/view/PreviewView$PinchToZoomOnScaleGestureListener;->this$0:Landroidx/camera/view/PreviewView;

    iget-object v0, v0, Landroidx/camera/view/PreviewView;->mCameraController:Landroidx/camera/view/CameraController;

    if-eqz v0, :cond_0

    .line 920
    iget-object v0, p0, Landroidx/camera/view/PreviewView$PinchToZoomOnScaleGestureListener;->this$0:Landroidx/camera/view/PreviewView;

    iget-object v0, v0, Landroidx/camera/view/PreviewView;->mCameraController:Landroidx/camera/view/CameraController;

    invoke-virtual {p1}, Landroid/view/ScaleGestureDetector;->getScaleFactor()F

    move-result p1

    invoke-virtual {v0, p1}, Landroidx/camera/view/CameraController;->onPinchToZoom(F)V

    :cond_0
    const/4 p1, 0x1

    return p1
.end method
