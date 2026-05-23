.class Lcom/king/camera/scan/BaseCameraScan$1;
.super Landroid/view/ScaleGestureDetector$SimpleOnScaleGestureListener;
.source "BaseCameraScan.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/king/camera/scan/BaseCameraScan;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/king/camera/scan/BaseCameraScan;


# direct methods
.method constructor <init>(Lcom/king/camera/scan/BaseCameraScan;)V
    .locals 0

    .line 183
    iput-object p1, p0, Lcom/king/camera/scan/BaseCameraScan$1;->this$0:Lcom/king/camera/scan/BaseCameraScan;

    invoke-direct {p0}, Landroid/view/ScaleGestureDetector$SimpleOnScaleGestureListener;-><init>()V

    return-void
.end method


# virtual methods
.method public onScale(Landroid/view/ScaleGestureDetector;)Z
    .locals 2

    .line 186
    invoke-virtual {p1}, Landroid/view/ScaleGestureDetector;->getScaleFactor()F

    move-result p1

    .line 187
    iget-object v0, p0, Lcom/king/camera/scan/BaseCameraScan$1;->this$0:Lcom/king/camera/scan/BaseCameraScan;

    invoke-static {v0}, Lcom/king/camera/scan/BaseCameraScan;->access$000(Lcom/king/camera/scan/BaseCameraScan;)Landroidx/camera/core/ZoomState;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 189
    invoke-interface {v0}, Landroidx/camera/core/ZoomState;->getZoomRatio()F

    move-result v0

    .line 191
    iget-object v1, p0, Lcom/king/camera/scan/BaseCameraScan$1;->this$0:Lcom/king/camera/scan/BaseCameraScan;

    mul-float/2addr v0, p1

    invoke-virtual {v1, v0}, Lcom/king/camera/scan/BaseCameraScan;->zoomTo(F)V

    const/4 p1, 0x1

    return p1

    :cond_0
    const/4 p1, 0x0

    return p1
.end method
