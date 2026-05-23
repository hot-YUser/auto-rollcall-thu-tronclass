.class public Lcom/king/view/viewfinderview/ViewfinderView;
.super Landroid/view/View;
.source "ViewfinderView.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/king/view/viewfinderview/ViewfinderView$ViewfinderStyle;,
        Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;,
        Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;,
        Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;,
        Lcom/king/view/viewfinderview/ViewfinderView$OnItemClickListener;
    }
.end annotation


# static fields
.field private static final DEFAULT_RANGE_RATIO:F = 1.2f

.field private static final MAX_ZOOM_RATIO:F = 1.2f

.field private static final POINT_ANIMATION_INTERVAL:I = 0xbb8


# instance fields
.field private currentZoomRatio:F

.field private frame:Landroid/graphics/Rect;

.field private frameBitmap:Landroid/graphics/Bitmap;

.field private frameColor:I

.field private frameCornerColor:I

.field private frameCornerSize:I

.field private frameCornerStrokeWidth:I

.field private frameGravity:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

.field private frameHeight:I

.field private frameLineStrokeWidth:I

.field private framePaddingBottom:F

.field private framePaddingLeft:F

.field private framePaddingRight:F

.field private framePaddingTop:F

.field private frameRatio:F

.field private frameWidth:I

.field private gestureDetector:Landroid/view/GestureDetector;

.field private isPointAnimation:Z

.field private isShowPoints:Z

.field private labelText:Ljava/lang/String;

.field private labelTextColor:I

.field private labelTextLocation:Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

.field private labelTextPadding:F

.field private labelTextSize:F

.field private labelTextWidth:I

.field private laserAnimationInterval:I

.field private laserBitmap:Landroid/graphics/Bitmap;

.field private laserBitmapRatio:F

.field private laserBitmapWidth:F

.field private laserColor:I

.field private laserGridColumn:I

.field private laserGridHeight:I

.field private laserLineHeight:I

.field private laserMovementSpeed:I

.field private laserStyle:Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

.field private lastZoomRatio:F

.field private maskColor:I

.field private minDimension:I

.field private onItemClickListener:Lcom/king/view/viewfinderview/ViewfinderView$OnItemClickListener;

.field private paint:Landroid/graphics/Paint;

.field private pointAnimationInterval:I

.field private pointBitmap:Landroid/graphics/Bitmap;

.field private pointColor:I

.field private pointList:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Landroid/graphics/Point;",
            ">;"
        }
    .end annotation
.end field

.field private pointRadius:F

.field private pointRangeRadius:F

.field private pointStrokeColor:I

.field private pointStrokeRadius:F

.field private pointStrokeRatio:F

.field private scannerEnd:I

.field private scannerStart:I

.field private textPaint:Landroid/text/TextPaint;

.field private viewfinderStyle:I

.field private zoomCount:I

.field private zoomSpeed:F


# direct methods
.method public constructor <init>(Landroid/content/Context;)V
    .locals 1

    const/4 v0, 0x0

    .line 376
    invoke-direct {p0, p1, v0}, Lcom/king/view/viewfinderview/ViewfinderView;-><init>(Landroid/content/Context;Landroid/util/AttributeSet;)V

    return-void
.end method

.method public constructor <init>(Landroid/content/Context;Landroid/util/AttributeSet;)V
    .locals 1

    const/4 v0, 0x0

    .line 380
    invoke-direct {p0, p1, p2, v0}, Lcom/king/view/viewfinderview/ViewfinderView;-><init>(Landroid/content/Context;Landroid/util/AttributeSet;I)V

    return-void
.end method

.method public constructor <init>(Landroid/content/Context;Landroid/util/AttributeSet;I)V
    .locals 1

    .line 384
    invoke-direct {p0, p1, p2, p3}, Landroid/view/View;-><init>(Landroid/content/Context;Landroid/util/AttributeSet;I)V

    const/4 p3, 0x0

    .line 133
    iput p3, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    .line 137
    iput p3, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerEnd:I

    const/4 v0, 0x1

    .line 221
    iput-boolean v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->isPointAnimation:Z

    const/high16 v0, 0x3f800000    # 1.0f

    .line 243
    iput v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->currentZoomRatio:F

    const v0, 0x3ca3d70a    # 0.02f

    .line 251
    iput v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->zoomSpeed:F

    .line 266
    iput p3, p0, Lcom/king/view/viewfinderview/ViewfinderView;->viewfinderStyle:I

    .line 270
    iput-boolean p3, p0, Lcom/king/view/viewfinderview/ViewfinderView;->isShowPoints:Z

    .line 385
    invoke-direct {p0, p1, p2}, Lcom/king/view/viewfinderview/ViewfinderView;->init(Landroid/content/Context;Landroid/util/AttributeSet;)V

    return-void
.end method

.method static synthetic access$500(Lcom/king/view/viewfinderview/ViewfinderView;)Z
    .locals 0

    .line 65
    iget-boolean p0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->isShowPoints:Z

    return p0
.end method

.method static synthetic access$600(Lcom/king/view/viewfinderview/ViewfinderView;FF)Z
    .locals 0

    .line 65
    invoke-direct {p0, p1, p2}, Lcom/king/view/viewfinderview/ViewfinderView;->checkSingleTap(FF)Z

    move-result p0

    return p0
.end method

.method private calcPointZoomAnimation()V
    .locals 4

    .line 823
    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->currentZoomRatio:F

    const/high16 v1, 0x3f800000    # 1.0f

    cmpg-float v2, v0, v1

    if-gtz v2, :cond_1

    .line 824
    iput v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->lastZoomRatio:F

    .line 825
    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->zoomSpeed:F

    add-float/2addr v0, v2

    iput v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->currentZoomRatio:F

    .line 827
    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->zoomCount:I

    const/4 v2, 0x2

    if-ge v0, v2, :cond_0

    add-int/lit8 v0, v0, 0x1

    .line 829
    iput v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->zoomCount:I

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    .line 831
    iput v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->zoomCount:I

    goto :goto_0

    :cond_1
    const v2, 0x3f99999a    # 1.2f

    cmpl-float v2, v0, v2

    if-ltz v2, :cond_2

    .line 834
    iput v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->lastZoomRatio:F

    .line 835
    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->zoomSpeed:F

    sub-float/2addr v0, v2

    iput v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->currentZoomRatio:F

    goto :goto_0

    .line 837
    :cond_2
    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->lastZoomRatio:F

    cmpl-float v2, v2, v0

    if-lez v2, :cond_3

    .line 838
    iput v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->lastZoomRatio:F

    .line 839
    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->zoomSpeed:F

    sub-float/2addr v0, v2

    iput v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->currentZoomRatio:F

    goto :goto_0

    .line 841
    :cond_3
    iput v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->lastZoomRatio:F

    .line 842
    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->zoomSpeed:F

    add-float/2addr v0, v2

    iput v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->currentZoomRatio:F

    .line 847
    :goto_0
    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->zoomCount:I

    if-nez v0, :cond_4

    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->lastZoomRatio:F

    cmpl-float v0, v0, v1

    if-nez v0, :cond_4

    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointAnimationInterval:I

    int-to-long v0, v0

    goto :goto_1

    :cond_4
    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserAnimationInterval:I

    int-to-long v0, v0

    const-wide/16 v2, 0x2

    mul-long/2addr v0, v2

    :goto_1
    invoke-virtual {p0, v0, v1}, Lcom/king/view/viewfinderview/ViewfinderView;->postInvalidateDelayed(J)V

    return-void
.end method

.method private checkSingleTap(FF)Z
    .locals 4

    .line 887
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointList:Ljava/util/List;

    const/4 v1, 0x0

    if-eqz v0, :cond_2

    move v0, v1

    .line 888
    :goto_0
    iget-object v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointList:Ljava/util/List;

    invoke-interface {v2}, Ljava/util/List;->size()I

    move-result v2

    if-ge v0, v2, :cond_2

    .line 889
    iget-object v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointList:Ljava/util/List;

    invoke-interface {v2, v0}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Landroid/graphics/Point;

    .line 890
    iget v3, v2, Landroid/graphics/Point;->x:I

    int-to-float v3, v3

    iget v2, v2, Landroid/graphics/Point;->y:I

    int-to-float v2, v2

    invoke-direct {p0, p1, p2, v3, v2}, Lcom/king/view/viewfinderview/ViewfinderView;->getDistance(FFFF)F

    move-result v2

    .line 891
    iget v3, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointRangeRadius:F

    cmpg-float v2, v2, v3

    if-gtz v2, :cond_1

    .line 892
    iget-object p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->onItemClickListener:Lcom/king/view/viewfinderview/ViewfinderView$OnItemClickListener;

    if-eqz p1, :cond_0

    .line 893
    invoke-interface {p1, v0}, Lcom/king/view/viewfinderview/ViewfinderView$OnItemClickListener;->onItemClick(I)V

    :cond_0
    const/4 p1, 0x1

    return p1

    :cond_1
    add-int/lit8 v0, v0, 0x1

    goto :goto_0

    :cond_2
    return v1
.end method

.method private drawCorner(Landroid/graphics/Canvas;Landroid/graphics/Rect;)V
    .locals 7

    .line 640
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerColor:I

    invoke-virtual {v0, v1}, Landroid/graphics/Paint;->setColor(I)V

    .line 642
    iget v0, p2, Landroid/graphics/Rect;->left:I

    int-to-float v2, v0

    iget v0, p2, Landroid/graphics/Rect;->top:I

    int-to-float v3, v0

    iget v0, p2, Landroid/graphics/Rect;->left:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerStrokeWidth:I

    add-int/2addr v0, v1

    int-to-float v4, v0

    iget v0, p2, Landroid/graphics/Rect;->top:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerSize:I

    add-int/2addr v0, v1

    int-to-float v5, v0

    iget-object v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    move-object v1, p1

    invoke-virtual/range {v1 .. v6}, Landroid/graphics/Canvas;->drawRect(FFFFLandroid/graphics/Paint;)V

    .line 643
    iget v0, p2, Landroid/graphics/Rect;->left:I

    int-to-float v2, v0

    iget v0, p2, Landroid/graphics/Rect;->top:I

    int-to-float v3, v0

    iget v0, p2, Landroid/graphics/Rect;->left:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerSize:I

    add-int/2addr v0, v1

    int-to-float v4, v0

    iget v0, p2, Landroid/graphics/Rect;->top:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerStrokeWidth:I

    add-int/2addr v0, v1

    int-to-float v5, v0

    iget-object v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    move-object v1, p1

    invoke-virtual/range {v1 .. v6}, Landroid/graphics/Canvas;->drawRect(FFFFLandroid/graphics/Paint;)V

    .line 645
    iget v0, p2, Landroid/graphics/Rect;->right:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerStrokeWidth:I

    sub-int/2addr v0, v1

    int-to-float v2, v0

    iget v0, p2, Landroid/graphics/Rect;->top:I

    int-to-float v3, v0

    iget v0, p2, Landroid/graphics/Rect;->right:I

    int-to-float v4, v0

    iget v0, p2, Landroid/graphics/Rect;->top:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerSize:I

    add-int/2addr v0, v1

    int-to-float v5, v0

    iget-object v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    move-object v1, p1

    invoke-virtual/range {v1 .. v6}, Landroid/graphics/Canvas;->drawRect(FFFFLandroid/graphics/Paint;)V

    .line 646
    iget v0, p2, Landroid/graphics/Rect;->right:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerSize:I

    sub-int/2addr v0, v1

    int-to-float v2, v0

    iget v0, p2, Landroid/graphics/Rect;->top:I

    int-to-float v3, v0

    iget v0, p2, Landroid/graphics/Rect;->right:I

    int-to-float v4, v0

    iget v0, p2, Landroid/graphics/Rect;->top:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerStrokeWidth:I

    add-int/2addr v0, v1

    int-to-float v5, v0

    iget-object v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    move-object v1, p1

    invoke-virtual/range {v1 .. v6}, Landroid/graphics/Canvas;->drawRect(FFFFLandroid/graphics/Paint;)V

    .line 648
    iget v0, p2, Landroid/graphics/Rect;->left:I

    int-to-float v2, v0

    iget v0, p2, Landroid/graphics/Rect;->bottom:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerStrokeWidth:I

    sub-int/2addr v0, v1

    int-to-float v3, v0

    iget v0, p2, Landroid/graphics/Rect;->left:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerSize:I

    add-int/2addr v0, v1

    int-to-float v4, v0

    iget v0, p2, Landroid/graphics/Rect;->bottom:I

    int-to-float v5, v0

    iget-object v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    move-object v1, p1

    invoke-virtual/range {v1 .. v6}, Landroid/graphics/Canvas;->drawRect(FFFFLandroid/graphics/Paint;)V

    .line 649
    iget v0, p2, Landroid/graphics/Rect;->left:I

    int-to-float v2, v0

    iget v0, p2, Landroid/graphics/Rect;->bottom:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerSize:I

    sub-int/2addr v0, v1

    int-to-float v3, v0

    iget v0, p2, Landroid/graphics/Rect;->left:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerStrokeWidth:I

    add-int/2addr v0, v1

    int-to-float v4, v0

    iget v0, p2, Landroid/graphics/Rect;->bottom:I

    int-to-float v5, v0

    iget-object v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    move-object v1, p1

    invoke-virtual/range {v1 .. v6}, Landroid/graphics/Canvas;->drawRect(FFFFLandroid/graphics/Paint;)V

    .line 651
    iget v0, p2, Landroid/graphics/Rect;->right:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerStrokeWidth:I

    sub-int/2addr v0, v1

    int-to-float v2, v0

    iget v0, p2, Landroid/graphics/Rect;->bottom:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerSize:I

    sub-int/2addr v0, v1

    int-to-float v3, v0

    iget v0, p2, Landroid/graphics/Rect;->right:I

    int-to-float v4, v0

    iget v0, p2, Landroid/graphics/Rect;->bottom:I

    int-to-float v5, v0

    iget-object v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    move-object v1, p1

    invoke-virtual/range {v1 .. v6}, Landroid/graphics/Canvas;->drawRect(FFFFLandroid/graphics/Paint;)V

    .line 652
    iget v0, p2, Landroid/graphics/Rect;->right:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerSize:I

    sub-int/2addr v0, v1

    int-to-float v2, v0

    iget v0, p2, Landroid/graphics/Rect;->bottom:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerStrokeWidth:I

    sub-int/2addr v0, v1

    int-to-float v3, v0

    iget v0, p2, Landroid/graphics/Rect;->right:I

    int-to-float v4, v0

    iget p2, p2, Landroid/graphics/Rect;->bottom:I

    int-to-float v5, p2

    iget-object v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    move-object v1, p1

    invoke-virtual/range {v1 .. v6}, Landroid/graphics/Canvas;->drawRect(FFFFLandroid/graphics/Paint;)V

    return-void
.end method

.method private drawExterior(Landroid/graphics/Canvas;Landroid/graphics/Rect;II)V
    .locals 8

    .line 786
    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->maskColor:I

    if-eqz v0, :cond_0

    .line 787
    iget-object v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    invoke-virtual {v1, v0}, Landroid/graphics/Paint;->setColor(I)V

    int-to-float p3, p3

    .line 788
    iget v0, p2, Landroid/graphics/Rect;->top:I

    int-to-float v6, v0

    iget-object v7, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    const/4 v3, 0x0

    const/4 v4, 0x0

    move-object v2, p1

    move v5, p3

    invoke-virtual/range {v2 .. v7}, Landroid/graphics/Canvas;->drawRect(FFFFLandroid/graphics/Paint;)V

    .line 789
    iget v0, p2, Landroid/graphics/Rect;->top:I

    int-to-float v3, v0

    iget v0, p2, Landroid/graphics/Rect;->left:I

    int-to-float v4, v0

    iget v0, p2, Landroid/graphics/Rect;->bottom:I

    int-to-float v5, v0

    iget-object v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    const/4 v2, 0x0

    move-object v1, p1

    invoke-virtual/range {v1 .. v6}, Landroid/graphics/Canvas;->drawRect(FFFFLandroid/graphics/Paint;)V

    .line 790
    iget v0, p2, Landroid/graphics/Rect;->right:I

    int-to-float v3, v0

    iget v0, p2, Landroid/graphics/Rect;->top:I

    int-to-float v4, v0

    iget v0, p2, Landroid/graphics/Rect;->bottom:I

    int-to-float v6, v0

    iget-object v7, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    move-object v2, p1

    move v5, p3

    invoke-virtual/range {v2 .. v7}, Landroid/graphics/Canvas;->drawRect(FFFFLandroid/graphics/Paint;)V

    .line 791
    iget p2, p2, Landroid/graphics/Rect;->bottom:I

    int-to-float v4, p2

    int-to-float v6, p4

    iget-object v7, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    const/4 v3, 0x0

    invoke-virtual/range {v2 .. v7}, Landroid/graphics/Canvas;->drawRect(FFFFLandroid/graphics/Paint;)V

    :cond_0
    return-void
.end method

.method private drawFrame(Landroid/graphics/Canvas;Landroid/graphics/Rect;)V
    .locals 7

    .line 767
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameColor:I

    invoke-virtual {v0, v1}, Landroid/graphics/Paint;->setColor(I)V

    .line 768
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameBitmap:Landroid/graphics/Bitmap;

    if-eqz v0, :cond_0

    const/4 v1, 0x0

    .line 769
    iget-object v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    invoke-virtual {p1, v0, v1, p2, v2}, Landroid/graphics/Canvas;->drawBitmap(Landroid/graphics/Bitmap;Landroid/graphics/Rect;Landroid/graphics/Rect;Landroid/graphics/Paint;)V

    goto :goto_0

    .line 771
    :cond_0
    iget v0, p2, Landroid/graphics/Rect;->left:I

    int-to-float v2, v0

    iget v0, p2, Landroid/graphics/Rect;->top:I

    int-to-float v3, v0

    iget v0, p2, Landroid/graphics/Rect;->right:I

    int-to-float v4, v0

    iget v0, p2, Landroid/graphics/Rect;->top:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameLineStrokeWidth:I

    add-int/2addr v0, v1

    int-to-float v5, v0

    iget-object v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    move-object v1, p1

    invoke-virtual/range {v1 .. v6}, Landroid/graphics/Canvas;->drawRect(FFFFLandroid/graphics/Paint;)V

    .line 772
    iget v0, p2, Landroid/graphics/Rect;->left:I

    int-to-float v2, v0

    iget v0, p2, Landroid/graphics/Rect;->top:I

    int-to-float v3, v0

    iget v0, p2, Landroid/graphics/Rect;->left:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameLineStrokeWidth:I

    add-int/2addr v0, v1

    int-to-float v4, v0

    iget v0, p2, Landroid/graphics/Rect;->bottom:I

    int-to-float v5, v0

    iget-object v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    move-object v1, p1

    invoke-virtual/range {v1 .. v6}, Landroid/graphics/Canvas;->drawRect(FFFFLandroid/graphics/Paint;)V

    .line 773
    iget v0, p2, Landroid/graphics/Rect;->right:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameLineStrokeWidth:I

    sub-int/2addr v0, v1

    int-to-float v2, v0

    iget v0, p2, Landroid/graphics/Rect;->top:I

    int-to-float v3, v0

    iget v0, p2, Landroid/graphics/Rect;->right:I

    int-to-float v4, v0

    iget v0, p2, Landroid/graphics/Rect;->bottom:I

    int-to-float v5, v0

    iget-object v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    move-object v1, p1

    invoke-virtual/range {v1 .. v6}, Landroid/graphics/Canvas;->drawRect(FFFFLandroid/graphics/Paint;)V

    .line 774
    iget v0, p2, Landroid/graphics/Rect;->left:I

    int-to-float v2, v0

    iget v0, p2, Landroid/graphics/Rect;->bottom:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameLineStrokeWidth:I

    sub-int/2addr v0, v1

    int-to-float v3, v0

    iget v0, p2, Landroid/graphics/Rect;->right:I

    int-to-float v4, v0

    iget v0, p2, Landroid/graphics/Rect;->bottom:I

    int-to-float v5, v0

    iget-object v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    move-object v1, p1

    invoke-virtual/range {v1 .. v6}, Landroid/graphics/Canvas;->drawRect(FFFFLandroid/graphics/Paint;)V

    .line 776
    invoke-direct {p0, p1, p2}, Lcom/king/view/viewfinderview/ViewfinderView;->drawCorner(Landroid/graphics/Canvas;Landroid/graphics/Rect;)V

    :goto_0
    return-void
.end method

.method private drawGridScanner(Landroid/graphics/Canvas;Landroid/graphics/Rect;)V
    .locals 11

    .line 724
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    const/4 v1, 0x2

    int-to-float v2, v1

    invoke-virtual {v0, v2}, Landroid/graphics/Paint;->setStrokeWidth(F)V

    .line 726
    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserGridHeight:I

    if-lez v0, :cond_0

    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    iget v2, p2, Landroid/graphics/Rect;->top:I

    sub-int/2addr v0, v2

    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserGridHeight:I

    if-le v0, v2, :cond_0

    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    sub-int/2addr v0, v2

    goto :goto_0

    :cond_0
    iget v0, p2, Landroid/graphics/Rect;->top:I

    .line 728
    :goto_0
    new-instance v10, Landroid/graphics/LinearGradient;

    invoke-virtual {p2}, Landroid/graphics/Rect;->centerX()I

    move-result v2

    int-to-float v3, v2

    int-to-float v0, v0

    invoke-virtual {p2}, Landroid/graphics/Rect;->centerX()I

    move-result v2

    int-to-float v5, v2

    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    int-to-float v6, v2

    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserColor:I

    invoke-direct {p0, v2}, Lcom/king/view/viewfinderview/ViewfinderView;->shadeColor(I)I

    move-result v2

    iget v4, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserColor:I

    filled-new-array {v2, v4}, [I

    move-result-object v7

    new-array v8, v1, [F

    fill-array-data v8, :array_0

    sget-object v9, Landroid/graphics/Shader$TileMode;->CLAMP:Landroid/graphics/Shader$TileMode;

    move-object v2, v10

    move v4, v0

    invoke-direct/range {v2 .. v9}, Landroid/graphics/LinearGradient;-><init>(FFFF[I[FLandroid/graphics/Shader$TileMode;)V

    .line 730
    iget-object v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    invoke-virtual {v1, v10}, Landroid/graphics/Paint;->setShader(Landroid/graphics/Shader;)Landroid/graphics/Shader;

    .line 732
    invoke-virtual {p2}, Landroid/graphics/Rect;->width()I

    move-result v1

    int-to-float v1, v1

    const/high16 v2, 0x3f800000    # 1.0f

    mul-float/2addr v1, v2

    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserGridColumn:I

    int-to-float v2, v2

    div-float/2addr v1, v2

    const/4 v2, 0x1

    .line 734
    :goto_1
    iget v3, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserGridColumn:I

    if-ge v2, v3, :cond_1

    .line 735
    iget v3, p2, Landroid/graphics/Rect;->left:I

    int-to-float v3, v3

    int-to-float v4, v2

    mul-float/2addr v4, v1

    add-float v5, v3, v4

    iget v3, p2, Landroid/graphics/Rect;->left:I

    int-to-float v3, v3

    add-float v7, v3, v4

    iget v3, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    int-to-float v8, v3

    iget-object v9, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    move-object v4, p1

    move v6, v0

    invoke-virtual/range {v4 .. v9}, Landroid/graphics/Canvas;->drawLine(FFFFLandroid/graphics/Paint;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_1

    .line 737
    :cond_1
    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserGridHeight:I

    if-lez v0, :cond_2

    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    iget v2, p2, Landroid/graphics/Rect;->top:I

    sub-int/2addr v0, v2

    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserGridHeight:I

    if-le v0, v2, :cond_2

    goto :goto_2

    :cond_2
    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    iget v2, p2, Landroid/graphics/Rect;->top:I

    sub-int v2, v0, v2

    :goto_2
    const/4 v0, 0x0

    :goto_3
    int-to-float v3, v0

    int-to-float v4, v2

    div-float/2addr v4, v1

    cmpg-float v4, v3, v4

    if-gtz v4, :cond_3

    .line 741
    iget v4, p2, Landroid/graphics/Rect;->left:I

    iget v5, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameLineStrokeWidth:I

    add-int/2addr v4, v5

    int-to-float v6, v4

    iget v4, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    int-to-float v4, v4

    mul-float/2addr v3, v1

    sub-float v7, v4, v3

    iget v4, p2, Landroid/graphics/Rect;->right:I

    iget v5, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameLineStrokeWidth:I

    sub-int/2addr v4, v5

    int-to-float v8, v4

    iget v4, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    int-to-float v4, v4

    sub-float v9, v4, v3

    iget-object v10, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    move-object v5, p1

    invoke-virtual/range {v5 .. v10}, Landroid/graphics/Canvas;->drawLine(FFFFLandroid/graphics/Paint;)V

    add-int/lit8 v0, v0, 0x1

    goto :goto_3

    .line 744
    :cond_3
    iget p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerEnd:I

    if-ge p1, v0, :cond_4

    .line 745
    iget p2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserMovementSpeed:I

    add-int/2addr p1, p2

    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    goto :goto_4

    .line 747
    :cond_4
    iget p1, p2, Landroid/graphics/Rect;->top:I

    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    :goto_4
    return-void

    :array_0
    .array-data 4
        0x0
        0x3f800000    # 1.0f
    .end array-data
.end method

.method private drawImageScanner(Landroid/graphics/Canvas;Landroid/graphics/Rect;)V
    .locals 4

    .line 660
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserBitmap:Landroid/graphics/Bitmap;

    if-eqz v0, :cond_1

    .line 661
    invoke-virtual {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->getWidth()I

    move-result v1

    iget-object v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v2}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v2

    sub-int/2addr v1, v2

    int-to-float v1, v1

    const/high16 v2, 0x40000000    # 2.0f

    div-float/2addr v1, v2

    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    int-to-float v2, v2

    iget-object v3, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    invoke-virtual {p1, v0, v1, v2, v3}, Landroid/graphics/Canvas;->drawBitmap(Landroid/graphics/Bitmap;FFLandroid/graphics/Paint;)V

    .line 662
    iget p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerEnd:I

    if-ge p1, v0, :cond_0

    .line 663
    iget p2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserMovementSpeed:I

    add-int/2addr p1, p2

    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    goto :goto_0

    .line 665
    :cond_0
    iget p1, p2, Landroid/graphics/Rect;->top:I

    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    goto :goto_0

    .line 668
    :cond_1
    invoke-direct {p0, p1, p2}, Lcom/king/view/viewfinderview/ViewfinderView;->drawLineScanner(Landroid/graphics/Canvas;Landroid/graphics/Rect;)V

    :goto_0
    return-void
.end method

.method private drawLaserScanner(Landroid/graphics/Canvas;Landroid/graphics/Rect;)V
    .locals 2

    .line 677
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserStyle:Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    if-eqz v0, :cond_3

    .line 678
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserColor:I

    invoke-virtual {v0, v1}, Landroid/graphics/Paint;->setColor(I)V

    .line 679
    sget-object v0, Lcom/king/view/viewfinderview/ViewfinderView$2;->$SwitchMap$com$king$view$viewfinderview$ViewfinderView$LaserStyle:[I

    iget-object v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserStyle:Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    invoke-virtual {v1}, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->ordinal()I

    move-result v1

    aget v0, v0, v1

    const/4 v1, 0x1

    if-eq v0, v1, :cond_2

    const/4 v1, 0x2

    if-eq v0, v1, :cond_1

    const/4 v1, 0x3

    if-eq v0, v1, :cond_0

    goto :goto_0

    .line 687
    :cond_0
    invoke-direct {p0, p1, p2}, Lcom/king/view/viewfinderview/ViewfinderView;->drawImageScanner(Landroid/graphics/Canvas;Landroid/graphics/Rect;)V

    goto :goto_0

    .line 684
    :cond_1
    invoke-direct {p0, p1, p2}, Lcom/king/view/viewfinderview/ViewfinderView;->drawGridScanner(Landroid/graphics/Canvas;Landroid/graphics/Rect;)V

    goto :goto_0

    .line 681
    :cond_2
    invoke-direct {p0, p1, p2}, Lcom/king/view/viewfinderview/ViewfinderView;->drawLineScanner(Landroid/graphics/Canvas;Landroid/graphics/Rect;)V

    .line 690
    :goto_0
    iget-object p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    const/4 p2, 0x0

    invoke-virtual {p1, p2}, Landroid/graphics/Paint;->setShader(Landroid/graphics/Shader;)Landroid/graphics/Shader;

    :cond_3
    return-void
.end method

.method private drawLineScanner(Landroid/graphics/Canvas;Landroid/graphics/Rect;)V
    .locals 9

    .line 700
    new-instance v8, Landroid/graphics/LinearGradient;

    .line 701
    invoke-virtual {p2}, Landroid/graphics/Rect;->centerX()I

    move-result v0

    int-to-float v1, v0

    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    int-to-float v2, v0

    .line 702
    invoke-virtual {p2}, Landroid/graphics/Rect;->centerX()I

    move-result v0

    int-to-float v3, v0

    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    iget v4, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserLineHeight:I

    add-int/2addr v0, v4

    int-to-float v4, v0

    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserColor:I

    .line 703
    invoke-direct {p0, v0}, Lcom/king/view/viewfinderview/ViewfinderView;->shadeColor(I)I

    move-result v5

    iget v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserColor:I

    sget-object v7, Landroid/graphics/Shader$TileMode;->MIRROR:Landroid/graphics/Shader$TileMode;

    move-object v0, v8

    invoke-direct/range {v0 .. v7}, Landroid/graphics/LinearGradient;-><init>(FFFFIILandroid/graphics/Shader$TileMode;)V

    .line 707
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    invoke-virtual {v0, v8}, Landroid/graphics/Paint;->setShader(Landroid/graphics/Shader;)Landroid/graphics/Shader;

    .line 708
    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerEnd:I

    if-ge v0, v1, :cond_0

    .line 710
    new-instance v0, Landroid/graphics/RectF;

    iget v1, p2, Landroid/graphics/Rect;->left:I

    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerSize:I

    add-int/2addr v1, v2

    int-to-float v1, v1

    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    int-to-float v2, v2

    iget p2, p2, Landroid/graphics/Rect;->right:I

    iget v3, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerSize:I

    sub-int/2addr p2, v3

    int-to-float p2, p2

    iget v3, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    iget v4, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserLineHeight:I

    add-int/2addr v3, v4

    int-to-float v3, v3

    invoke-direct {v0, v1, v2, p2, v3}, Landroid/graphics/RectF;-><init>(FFFF)V

    .line 711
    iget-object p2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    invoke-virtual {p1, v0, p2}, Landroid/graphics/Canvas;->drawOval(Landroid/graphics/RectF;Landroid/graphics/Paint;)V

    .line 712
    iget p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    iget p2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserMovementSpeed:I

    add-int/2addr p1, p2

    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    goto :goto_0

    .line 714
    :cond_0
    iget p1, p2, Landroid/graphics/Rect;->top:I

    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    :goto_0
    return-void
.end method

.method private drawMask(Landroid/graphics/Canvas;II)V
    .locals 8

    .line 800
    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->maskColor:I

    if-eqz v0, :cond_0

    .line 801
    iget-object v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    invoke-virtual {v1, v0}, Landroid/graphics/Paint;->setColor(I)V

    int-to-float v5, p2

    int-to-float v6, p3

    .line 802
    iget-object v7, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    const/4 v3, 0x0

    const/4 v4, 0x0

    move-object v2, p1

    invoke-virtual/range {v2 .. v7}, Landroid/graphics/Canvas;->drawRect(FFFFLandroid/graphics/Paint;)V

    :cond_0
    return-void
.end method

.method private drawResultPoint(Landroid/graphics/Canvas;Landroid/graphics/Point;F)V
    .locals 4

    .line 856
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointBitmap:Landroid/graphics/Bitmap;

    if-eqz v0, :cond_1

    .line 857
    iget v0, p2, Landroid/graphics/Point;->x:I

    int-to-float v0, v0

    iget-object v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v1}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v1

    int-to-float v1, v1

    const/high16 v2, 0x40000000    # 2.0f

    div-float/2addr v1, v2

    sub-float/2addr v0, v1

    .line 858
    iget v1, p2, Landroid/graphics/Point;->y:I

    int-to-float v1, v1

    iget-object v3, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v3}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v3

    int-to-float v3, v3

    div-float/2addr v3, v2

    sub-float/2addr v1, v3

    .line 859
    iget-boolean v3, p0, Lcom/king/view/viewfinderview/ViewfinderView;->isPointAnimation:Z

    if-eqz v3, :cond_0

    .line 860
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v0}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v0

    int-to-float v0, v0

    mul-float/2addr v0, p3

    invoke-static {v0}, Ljava/lang/Math;->round(F)I

    move-result v0

    .line 861
    iget-object v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v1}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v1

    int-to-float v1, v1

    mul-float/2addr v1, p3

    invoke-static {v1}, Ljava/lang/Math;->round(F)I

    move-result p3

    .line 862
    iget v1, p2, Landroid/graphics/Point;->x:I

    int-to-float v3, v0

    div-float/2addr v3, v2

    invoke-static {v3}, Ljava/lang/Math;->round(F)I

    move-result v3

    sub-int/2addr v1, v3

    .line 863
    iget p2, p2, Landroid/graphics/Point;->y:I

    int-to-float v3, p3

    div-float/2addr v3, v2

    invoke-static {v3}, Ljava/lang/Math;->round(F)I

    move-result v2

    sub-int/2addr p2, v2

    .line 864
    new-instance v2, Landroid/graphics/Rect;

    add-int/2addr v0, v1

    add-int/2addr p3, p2

    invoke-direct {v2, v1, p2, v0, p3}, Landroid/graphics/Rect;-><init>(IIII)V

    .line 865
    iget-object p2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointBitmap:Landroid/graphics/Bitmap;

    const/4 p3, 0x0

    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    invoke-virtual {p1, p2, p3, v2, v0}, Landroid/graphics/Canvas;->drawBitmap(Landroid/graphics/Bitmap;Landroid/graphics/Rect;Landroid/graphics/Rect;Landroid/graphics/Paint;)V

    goto :goto_0

    .line 867
    :cond_0
    iget-object p2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointBitmap:Landroid/graphics/Bitmap;

    iget-object p3, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    invoke-virtual {p1, p2, v0, v1, p3}, Landroid/graphics/Canvas;->drawBitmap(Landroid/graphics/Bitmap;FFLandroid/graphics/Paint;)V

    goto :goto_0

    .line 870
    :cond_1
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointStrokeColor:I

    invoke-virtual {v0, v1}, Landroid/graphics/Paint;->setColor(I)V

    .line 871
    iget v0, p2, Landroid/graphics/Point;->x:I

    int-to-float v0, v0

    iget v1, p2, Landroid/graphics/Point;->y:I

    int-to-float v1, v1

    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointStrokeRadius:F

    mul-float/2addr v2, p3

    iget-object v3, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    invoke-virtual {p1, v0, v1, v2, v3}, Landroid/graphics/Canvas;->drawCircle(FFFLandroid/graphics/Paint;)V

    .line 873
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointColor:I

    invoke-virtual {v0, v1}, Landroid/graphics/Paint;->setColor(I)V

    .line 874
    iget v0, p2, Landroid/graphics/Point;->x:I

    int-to-float v0, v0

    iget p2, p2, Landroid/graphics/Point;->y:I

    int-to-float p2, p2

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointRadius:F

    mul-float/2addr v1, p3

    iget-object p3, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    invoke-virtual {p1, v0, p2, v1, p3}, Landroid/graphics/Canvas;->drawCircle(FFFLandroid/graphics/Paint;)V

    :goto_0
    return-void
.end method

.method private drawResultPoints(Landroid/graphics/Canvas;Ljava/util/List;)V
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/graphics/Canvas;",
            "Ljava/util/List<",
            "Landroid/graphics/Point;",
            ">;)V"
        }
    .end annotation

    .line 811
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    const/4 v1, -0x1

    invoke-virtual {v0, v1}, Landroid/graphics/Paint;->setColor(I)V

    if-eqz p2, :cond_0

    .line 813
    invoke-interface {p2}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p2

    :goto_0
    invoke-interface {p2}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_0

    invoke-interface {p2}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/graphics/Point;

    .line 814
    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->currentZoomRatio:F

    invoke-direct {p0, p1, v0, v1}, Lcom/king/view/viewfinderview/ViewfinderView;->drawResultPoint(Landroid/graphics/Canvas;Landroid/graphics/Point;F)V

    goto :goto_0

    :cond_0
    return-void
.end method

.method private drawTextInfo(Landroid/graphics/Canvas;Landroid/graphics/Rect;)V
    .locals 10

    .line 619
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelText:Ljava/lang/String;

    invoke-static {v0}, Landroid/text/TextUtils;->isEmpty(Ljava/lang/CharSequence;)Z

    move-result v0

    if-nez v0, :cond_1

    .line 620
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->textPaint:Landroid/text/TextPaint;

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextColor:I

    invoke-virtual {v0, v1}, Landroid/text/TextPaint;->setColor(I)V

    .line 621
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->textPaint:Landroid/text/TextPaint;

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextSize:F

    invoke-virtual {v0, v1}, Landroid/text/TextPaint;->setTextSize(F)V

    .line 622
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->textPaint:Landroid/text/TextPaint;

    sget-object v1, Landroid/graphics/Paint$Align;->CENTER:Landroid/graphics/Paint$Align;

    invoke-virtual {v0, v1}, Landroid/text/TextPaint;->setTextAlign(Landroid/graphics/Paint$Align;)V

    .line 624
    new-instance v0, Landroid/text/StaticLayout;

    iget-object v3, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelText:Ljava/lang/String;

    iget-object v4, p0, Lcom/king/view/viewfinderview/ViewfinderView;->textPaint:Landroid/text/TextPaint;

    iget v5, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextWidth:I

    sget-object v6, Landroid/text/Layout$Alignment;->ALIGN_NORMAL:Landroid/text/Layout$Alignment;

    const/4 v8, 0x0

    const/4 v9, 0x1

    const v7, 0x3f99999a    # 1.2f

    move-object v2, v0

    invoke-direct/range {v2 .. v9}, Landroid/text/StaticLayout;-><init>(Ljava/lang/CharSequence;Landroid/text/TextPaint;ILandroid/text/Layout$Alignment;FFZ)V

    .line 625
    iget-object v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextLocation:Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    sget-object v2, Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;->BOTTOM:Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    const/high16 v3, 0x40000000    # 2.0f

    if-ne v1, v2, :cond_0

    .line 626
    iget v1, p2, Landroid/graphics/Rect;->left:I

    int-to-float v1, v1

    invoke-virtual {p2}, Landroid/graphics/Rect;->width()I

    move-result v2

    int-to-float v2, v2

    div-float/2addr v2, v3

    add-float/2addr v1, v2

    iget p2, p2, Landroid/graphics/Rect;->bottom:I

    int-to-float p2, p2

    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextPadding:F

    add-float/2addr p2, v2

    invoke-virtual {p1, v1, p2}, Landroid/graphics/Canvas;->translate(FF)V

    goto :goto_0

    .line 628
    :cond_0
    iget v1, p2, Landroid/graphics/Rect;->left:I

    int-to-float v1, v1

    invoke-virtual {p2}, Landroid/graphics/Rect;->width()I

    move-result v2

    int-to-float v2, v2

    div-float/2addr v2, v3

    add-float/2addr v1, v2

    iget p2, p2, Landroid/graphics/Rect;->top:I

    int-to-float p2, p2

    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextPadding:F

    sub-float/2addr p2, v2

    invoke-virtual {v0}, Landroid/text/StaticLayout;->getHeight()I

    move-result v2

    int-to-float v2, v2

    sub-float/2addr p2, v2

    invoke-virtual {p1, v1, p2}, Landroid/graphics/Canvas;->translate(FF)V

    .line 630
    :goto_0
    invoke-virtual {v0, p1}, Landroid/text/StaticLayout;->draw(Landroid/graphics/Canvas;)V

    :cond_1
    return-void
.end method

.method private getBitmapFormDrawable(Landroid/graphics/drawable/Drawable;)Landroid/graphics/Bitmap;
    .locals 5

    .line 496
    invoke-virtual {p1}, Landroid/graphics/drawable/Drawable;->getIntrinsicWidth()I

    move-result v0

    invoke-virtual {p1}, Landroid/graphics/drawable/Drawable;->getIntrinsicHeight()I

    move-result v1

    invoke-virtual {p1}, Landroid/graphics/drawable/Drawable;->getOpacity()I

    move-result v2

    const/4 v3, -0x1

    if-eq v2, v3, :cond_0

    sget-object v2, Landroid/graphics/Bitmap$Config;->ARGB_8888:Landroid/graphics/Bitmap$Config;

    goto :goto_0

    :cond_0
    sget-object v2, Landroid/graphics/Bitmap$Config;->RGB_565:Landroid/graphics/Bitmap$Config;

    :goto_0
    invoke-static {v0, v1, v2}, Landroid/graphics/Bitmap;->createBitmap(IILandroid/graphics/Bitmap$Config;)Landroid/graphics/Bitmap;

    move-result-object v0

    .line 497
    new-instance v1, Landroid/graphics/Canvas;

    invoke-direct {v1, v0}, Landroid/graphics/Canvas;-><init>(Landroid/graphics/Bitmap;)V

    .line 498
    invoke-virtual {v0}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v2

    invoke-virtual {v0}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v3

    const/4 v4, 0x0

    invoke-virtual {p1, v4, v4, v2, v3}, Landroid/graphics/drawable/Drawable;->setBounds(IIII)V

    .line 499
    invoke-virtual {p1, v1}, Landroid/graphics/drawable/Drawable;->draw(Landroid/graphics/Canvas;)V

    return-object v0
.end method

.method private getColor(Landroid/content/Context;I)I
    .locals 0

    .line 485
    invoke-virtual {p1, p2}, Landroid/content/Context;->getColor(I)I

    move-result p1

    return p1
.end method

.method private getDistance(FFFF)F
    .locals 4

    sub-float/2addr p1, p3

    float-to-double v0, p1

    const-wide/high16 v2, 0x4000000000000000L    # 2.0

    .line 908
    invoke-static {v0, v1, v2, v3}, Ljava/lang/Math;->pow(DD)D

    move-result-wide v0

    sub-float/2addr p2, p4

    float-to-double p1, p2

    invoke-static {p1, p2, v2, v3}, Ljava/lang/Math;->pow(DD)D

    move-result-wide p1

    add-double/2addr v0, p1

    invoke-static {v0, v1}, Ljava/lang/Math;->sqrt(D)D

    move-result-wide p1

    double-to-float p1, p1

    return p1
.end method

.method private init(Landroid/content/Context;Landroid/util/AttributeSet;)V
    .locals 9

    .line 394
    sget-object v0, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView:[I

    invoke-virtual {p1, p2, v0}, Landroid/content/Context;->obtainStyledAttributes(Landroid/util/AttributeSet;[I)Landroid/content/res/TypedArray;

    move-result-object p2

    .line 396
    invoke-virtual {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->getResources()Landroid/content/res/Resources;

    move-result-object v0

    invoke-virtual {v0}, Landroid/content/res/Resources;->getDisplayMetrics()Landroid/util/DisplayMetrics;

    move-result-object v0

    .line 398
    sget v1, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvViewfinderStyle:I

    const/4 v2, 0x0

    invoke-virtual {p2, v1, v2}, Landroid/content/res/TypedArray;->getInt(II)I

    move-result v1

    iput v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->viewfinderStyle:I

    .line 400
    sget v1, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvMaskColor:I

    sget v3, Lcom/king/view/viewfinderview/R$color;->viewfinder_mask:I

    invoke-direct {p0, p1, v3}, Lcom/king/view/viewfinderview/ViewfinderView;->getColor(Landroid/content/Context;I)I

    move-result v3

    invoke-virtual {p2, v1, v3}, Landroid/content/res/TypedArray;->getColor(II)I

    move-result v1

    iput v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->maskColor:I

    .line 402
    sget v1, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvFrameColor:I

    sget v3, Lcom/king/view/viewfinderview/R$color;->viewfinder_frame:I

    invoke-direct {p0, p1, v3}, Lcom/king/view/viewfinderview/ViewfinderView;->getColor(Landroid/content/Context;I)I

    move-result v3

    invoke-virtual {p2, v1, v3}, Landroid/content/res/TypedArray;->getColor(II)I

    move-result v1

    iput v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameColor:I

    .line 403
    sget v1, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvFrameWidth:I

    invoke-virtual {p2, v1, v2}, Landroid/content/res/TypedArray;->getDimensionPixelSize(II)I

    move-result v1

    iput v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameWidth:I

    .line 404
    sget v1, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvFrameHeight:I

    invoke-virtual {p2, v1, v2}, Landroid/content/res/TypedArray;->getDimensionPixelSize(II)I

    move-result v1

    iput v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameHeight:I

    .line 405
    sget v1, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvFrameRatio:I

    const/high16 v3, 0x3f200000    # 0.625f

    invoke-virtual {p2, v1, v3}, Landroid/content/res/TypedArray;->getFloat(IF)F

    move-result v1

    iput v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameRatio:F

    .line 406
    sget v1, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvFrameLineStrokeWidth:I

    const/high16 v4, 0x3f800000    # 1.0f

    const/4 v5, 0x1

    invoke-static {v5, v4, v0}, Landroid/util/TypedValue;->applyDimension(IFLandroid/util/DisplayMetrics;)F

    move-result v4

    invoke-virtual {p2, v1, v4}, Landroid/content/res/TypedArray;->getDimension(IF)F

    move-result v1

    float-to-int v1, v1

    iput v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameLineStrokeWidth:I

    .line 407
    sget v1, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvFramePaddingLeft:I

    const/4 v4, 0x0

    invoke-virtual {p2, v1, v4}, Landroid/content/res/TypedArray;->getDimension(IF)F

    move-result v1

    iput v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->framePaddingLeft:F

    .line 408
    sget v1, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvFramePaddingTop:I

    invoke-virtual {p2, v1, v4}, Landroid/content/res/TypedArray;->getDimension(IF)F

    move-result v1

    iput v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->framePaddingTop:F

    .line 409
    sget v1, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvFramePaddingRight:I

    invoke-virtual {p2, v1, v4}, Landroid/content/res/TypedArray;->getDimension(IF)F

    move-result v1

    iput v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->framePaddingRight:F

    .line 410
    sget v1, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvFramePaddingBottom:I

    invoke-virtual {p2, v1, v4}, Landroid/content/res/TypedArray;->getDimension(IF)F

    move-result v1

    iput v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->framePaddingBottom:F

    .line 411
    sget v1, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvFrameGravity:I

    sget-object v4, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->CENTER:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    invoke-static {v4}, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->access$000(Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;)I

    move-result v4

    invoke-virtual {p2, v1, v4}, Landroid/content/res/TypedArray;->getInt(II)I

    move-result v1

    invoke-static {v1}, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->access$100(I)Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    move-result-object v1

    iput-object v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameGravity:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    .line 412
    sget v1, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvFrameCornerColor:I

    sget v4, Lcom/king/view/viewfinderview/R$color;->viewfinder_corner:I

    invoke-direct {p0, p1, v4}, Lcom/king/view/viewfinderview/ViewfinderView;->getColor(Landroid/content/Context;I)I

    move-result v4

    invoke-virtual {p2, v1, v4}, Landroid/content/res/TypedArray;->getColor(II)I

    move-result v1

    iput v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerColor:I

    .line 413
    sget v1, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvFrameCornerSize:I

    const/high16 v4, 0x41800000    # 16.0f

    invoke-static {v5, v4, v0}, Landroid/util/TypedValue;->applyDimension(IFLandroid/util/DisplayMetrics;)F

    move-result v4

    invoke-virtual {p2, v1, v4}, Landroid/content/res/TypedArray;->getDimension(IF)F

    move-result v1

    float-to-int v1, v1

    iput v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerSize:I

    .line 414
    sget v1, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvFrameCornerStrokeWidth:I

    const/high16 v4, 0x40800000    # 4.0f

    invoke-static {v5, v4, v0}, Landroid/util/TypedValue;->applyDimension(IFLandroid/util/DisplayMetrics;)F

    move-result v6

    invoke-virtual {p2, v1, v6}, Landroid/content/res/TypedArray;->getDimension(IF)F

    move-result v1

    float-to-int v1, v1

    iput v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerStrokeWidth:I

    .line 415
    sget v1, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvFrameDrawable:I

    invoke-virtual {p2, v1}, Landroid/content/res/TypedArray;->getDrawable(I)Landroid/graphics/drawable/Drawable;

    move-result-object v1

    .line 417
    sget v6, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvLaserLineHeight:I

    const/high16 v7, 0x40a00000    # 5.0f

    invoke-static {v5, v7, v0}, Landroid/util/TypedValue;->applyDimension(IFLandroid/util/DisplayMetrics;)F

    move-result v7

    invoke-virtual {p2, v6, v7}, Landroid/content/res/TypedArray;->getDimension(IF)F

    move-result v6

    float-to-int v6, v6

    iput v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserLineHeight:I

    .line 418
    sget v6, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvLaserMovementSpeed:I

    const/high16 v7, 0x40000000    # 2.0f

    invoke-static {v5, v7, v0}, Landroid/util/TypedValue;->applyDimension(IFLandroid/util/DisplayMetrics;)F

    move-result v7

    invoke-virtual {p2, v6, v7}, Landroid/content/res/TypedArray;->getDimension(IF)F

    move-result v6

    float-to-int v6, v6

    iput v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserMovementSpeed:I

    .line 419
    sget v6, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvLaserAnimationInterval:I

    const/16 v7, 0x14

    invoke-virtual {p2, v6, v7}, Landroid/content/res/TypedArray;->getInteger(II)I

    move-result v6

    iput v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserAnimationInterval:I

    .line 421
    sget v6, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvLaserGridColumn:I

    invoke-virtual {p2, v6, v7}, Landroid/content/res/TypedArray;->getInt(II)I

    move-result v6

    iput v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserGridColumn:I

    .line 422
    sget v6, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvLaserGridHeight:I

    const/high16 v7, 0x42200000    # 40.0f

    invoke-static {v5, v7, v0}, Landroid/util/TypedValue;->applyDimension(IFLandroid/util/DisplayMetrics;)F

    move-result v7

    invoke-virtual {p2, v6, v7}, Landroid/content/res/TypedArray;->getDimension(IF)F

    move-result v6

    float-to-int v6, v6

    iput v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserGridHeight:I

    .line 424
    sget v6, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvLaserColor:I

    sget v7, Lcom/king/view/viewfinderview/R$color;->viewfinder_laser:I

    invoke-direct {p0, p1, v7}, Lcom/king/view/viewfinderview/ViewfinderView;->getColor(Landroid/content/Context;I)I

    move-result v7

    invoke-virtual {p2, v6, v7}, Landroid/content/res/TypedArray;->getColor(II)I

    move-result v6

    iput v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserColor:I

    .line 425
    sget v6, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvLaserStyle:I

    sget-object v7, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->LINE:Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    invoke-static {v7}, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->access$200(Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;)I

    move-result v7

    invoke-virtual {p2, v6, v7}, Landroid/content/res/TypedArray;->getInt(II)I

    move-result v6

    invoke-static {v6}, Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;->access$300(I)Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    move-result-object v6

    iput-object v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserStyle:Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    .line 426
    sget v6, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvLaserDrawableRatio:I

    invoke-virtual {p2, v6, v3}, Landroid/content/res/TypedArray;->getFloat(IF)F

    move-result v3

    iput v3, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserBitmapRatio:F

    .line 427
    sget v3, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvLaserDrawable:I

    invoke-virtual {p2, v3}, Landroid/content/res/TypedArray;->getDrawable(I)Landroid/graphics/drawable/Drawable;

    move-result-object v3

    .line 429
    sget v6, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvLabelText:I

    invoke-virtual {p2, v6}, Landroid/content/res/TypedArray;->getString(I)Ljava/lang/String;

    move-result-object v6

    iput-object v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelText:Ljava/lang/String;

    .line 430
    sget v6, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvLabelTextColor:I

    sget v7, Lcom/king/view/viewfinderview/R$color;->viewfinder_label_text:I

    invoke-direct {p0, p1, v7}, Lcom/king/view/viewfinderview/ViewfinderView;->getColor(Landroid/content/Context;I)I

    move-result v7

    invoke-virtual {p2, v6, v7}, Landroid/content/res/TypedArray;->getColor(II)I

    move-result v6

    iput v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextColor:I

    .line 431
    sget v6, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvLabelTextSize:I

    const/4 v7, 0x2

    const/high16 v8, 0x41600000    # 14.0f

    invoke-static {v7, v8, v0}, Landroid/util/TypedValue;->applyDimension(IFLandroid/util/DisplayMetrics;)F

    move-result v7

    invoke-virtual {p2, v6, v7}, Landroid/content/res/TypedArray;->getDimension(IF)F

    move-result v6

    iput v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextSize:F

    .line 432
    sget v6, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvLabelTextPadding:I

    const/high16 v7, 0x41c00000    # 24.0f

    invoke-static {v5, v7, v0}, Landroid/util/TypedValue;->applyDimension(IFLandroid/util/DisplayMetrics;)F

    move-result v7

    invoke-virtual {p2, v6, v7}, Landroid/content/res/TypedArray;->getDimension(IF)F

    move-result v6

    iput v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextPadding:F

    .line 433
    sget v6, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvLabelTextWidth:I

    invoke-virtual {p2, v6, v2}, Landroid/content/res/TypedArray;->getDimensionPixelSize(II)I

    move-result v6

    iput v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextWidth:I

    .line 434
    sget v6, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvLabelTextLocation:I

    invoke-virtual {p2, v6, v2}, Landroid/content/res/TypedArray;->getInt(II)I

    move-result v2

    invoke-static {v2}, Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;->access$400(I)Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    move-result-object v2

    iput-object v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextLocation:Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    .line 436
    sget v2, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvPointColor:I

    sget v6, Lcom/king/view/viewfinderview/R$color;->viewfinder_point:I

    invoke-direct {p0, p1, v6}, Lcom/king/view/viewfinderview/ViewfinderView;->getColor(Landroid/content/Context;I)I

    move-result v6

    invoke-virtual {p2, v2, v6}, Landroid/content/res/TypedArray;->getColor(II)I

    move-result v2

    iput v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointColor:I

    .line 437
    sget v2, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvPointStrokeColor:I

    sget v6, Lcom/king/view/viewfinderview/R$color;->viewfinder_point_stroke:I

    invoke-direct {p0, p1, v6}, Lcom/king/view/viewfinderview/ViewfinderView;->getColor(Landroid/content/Context;I)I

    move-result v6

    invoke-virtual {p2, v2, v6}, Landroid/content/res/TypedArray;->getColor(II)I

    move-result v2

    iput v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointStrokeColor:I

    .line 438
    sget v2, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvPointRadius:I

    const/high16 v6, 0x41700000    # 15.0f

    invoke-static {v5, v6, v0}, Landroid/util/TypedValue;->applyDimension(IFLandroid/util/DisplayMetrics;)F

    move-result v0

    invoke-virtual {p2, v2, v0}, Landroid/content/res/TypedArray;->getDimension(IF)F

    move-result v0

    iput v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointRadius:F

    .line 439
    sget v0, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvPointStrokeRatio:I

    const v2, 0x3f99999a    # 1.2f

    invoke-virtual {p2, v0, v2}, Landroid/content/res/TypedArray;->getFloat(IF)F

    move-result v0

    iput v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointStrokeRatio:F

    .line 440
    sget v0, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvPointDrawable:I

    invoke-virtual {p2, v0}, Landroid/content/res/TypedArray;->getDrawable(I)Landroid/graphics/drawable/Drawable;

    move-result-object v0

    .line 442
    sget v6, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvPointAnimation:I

    invoke-virtual {p2, v6, v5}, Landroid/content/res/TypedArray;->getBoolean(IZ)Z

    move-result v6

    iput-boolean v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->isPointAnimation:Z

    .line 443
    sget v6, Lcom/king/view/viewfinderview/R$styleable;->ViewfinderView_vvPointAnimationInterval:I

    const/16 v7, 0xbb8

    invoke-virtual {p2, v6, v7}, Landroid/content/res/TypedArray;->getInt(II)I

    move-result v6

    iput v6, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointAnimationInterval:I

    .line 445
    invoke-virtual {p2}, Landroid/content/res/TypedArray;->recycle()V

    if-eqz v1, :cond_0

    .line 448
    invoke-direct {p0, v1}, Lcom/king/view/viewfinderview/ViewfinderView;->getBitmapFormDrawable(Landroid/graphics/drawable/Drawable;)Landroid/graphics/Bitmap;

    move-result-object p2

    iput-object p2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameBitmap:Landroid/graphics/Bitmap;

    :cond_0
    if-eqz v3, :cond_1

    .line 452
    invoke-direct {p0, v3}, Lcom/king/view/viewfinderview/ViewfinderView;->getBitmapFormDrawable(Landroid/graphics/drawable/Drawable;)Landroid/graphics/Bitmap;

    move-result-object p2

    iput-object p2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserBitmap:Landroid/graphics/Bitmap;

    :cond_1
    if-eqz v0, :cond_2

    .line 456
    invoke-direct {p0, v0}, Lcom/king/view/viewfinderview/ViewfinderView;->getBitmapFormDrawable(Landroid/graphics/drawable/Drawable;)Landroid/graphics/Bitmap;

    move-result-object p2

    iput-object p2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointBitmap:Landroid/graphics/Bitmap;

    .line 457
    invoke-virtual {p2}, Landroid/graphics/Bitmap;->getWidth()I

    move-result p2

    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v0}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v0

    add-int/2addr p2, v0

    int-to-float p2, p2

    div-float/2addr p2, v4

    mul-float/2addr p2, v2

    iput p2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointRangeRadius:F

    goto :goto_0

    .line 459
    :cond_2
    iget p2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointRadius:F

    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointStrokeRatio:F

    mul-float/2addr p2, v0

    iput p2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointStrokeRadius:F

    mul-float/2addr p2, v2

    .line 460
    iput p2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointRangeRadius:F

    .line 463
    :goto_0
    new-instance p2, Landroid/graphics/Paint;

    invoke-direct {p2, v5}, Landroid/graphics/Paint;-><init>(I)V

    iput-object p2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->paint:Landroid/graphics/Paint;

    .line 464
    invoke-virtual {p2, v5}, Landroid/graphics/Paint;->setAntiAlias(Z)V

    .line 465
    new-instance p2, Landroid/text/TextPaint;

    invoke-direct {p2, v5}, Landroid/text/TextPaint;-><init>(I)V

    iput-object p2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->textPaint:Landroid/text/TextPaint;

    .line 467
    new-instance p2, Landroid/view/GestureDetector;

    new-instance v0, Lcom/king/view/viewfinderview/ViewfinderView$1;

    invoke-direct {v0, p0}, Lcom/king/view/viewfinderview/ViewfinderView$1;-><init>(Lcom/king/view/viewfinderview/ViewfinderView;)V

    invoke-direct {p2, p1, v0}, Landroid/view/GestureDetector;-><init>(Landroid/content/Context;Landroid/view/GestureDetector$OnGestureListener;)V

    iput-object p2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->gestureDetector:Landroid/view/GestureDetector;

    return-void
.end method

.method private initFrame(II)V
    .locals 4

    .line 529
    invoke-static {p1, p2}, Ljava/lang/Math;->min(II)I

    move-result v0

    iput v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->minDimension:I

    int-to-float v1, v0

    .line 530
    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameRatio:F

    mul-float/2addr v1, v2

    float-to-int v1, v1

    .line 532
    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserBitmapWidth:F

    const/4 v3, 0x0

    cmpg-float v2, v2, v3

    if-gtz v2, :cond_0

    int-to-float v0, v0

    .line 533
    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserBitmapRatio:F

    mul-float/2addr v0, v2

    iput v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserBitmapWidth:F

    .line 534
    invoke-direct {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->scaleLaserBitmap()V

    .line 537
    :cond_0
    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameWidth:I

    if-lez v0, :cond_1

    if-le v0, p1, :cond_2

    .line 538
    :cond_1
    iput v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameWidth:I

    .line 541
    :cond_2
    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameHeight:I

    if-lez v0, :cond_3

    if-le v0, p2, :cond_4

    .line 542
    :cond_3
    iput v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameHeight:I

    .line 545
    :cond_4
    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextWidth:I

    if-gtz v0, :cond_5

    .line 546
    invoke-virtual {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->getPaddingLeft()I

    move-result v0

    sub-int v0, p1, v0

    invoke-virtual {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->getPaddingRight()I

    move-result v1

    sub-int/2addr v0, v1

    iput v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextWidth:I

    .line 549
    :cond_5
    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameWidth:I

    sub-int v0, p1, v0

    int-to-float v0, v0

    const/high16 v1, 0x40000000    # 2.0f

    div-float/2addr v0, v1

    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->framePaddingLeft:F

    add-float/2addr v0, v2

    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->framePaddingRight:F

    sub-float/2addr v0, v2

    .line 550
    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameHeight:I

    sub-int v2, p2, v2

    int-to-float v2, v2

    div-float/2addr v2, v1

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->framePaddingTop:F

    add-float/2addr v2, v1

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->framePaddingBottom:F

    sub-float/2addr v2, v1

    .line 551
    sget-object v1, Lcom/king/view/viewfinderview/ViewfinderView$2;->$SwitchMap$com$king$view$viewfinderview$ViewfinderView$FrameGravity:[I

    iget-object v3, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameGravity:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    invoke-virtual {v3}, Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;->ordinal()I

    move-result v3

    aget v1, v1, v3

    const/4 v3, 0x1

    if-eq v1, v3, :cond_9

    const/4 v3, 0x2

    if-eq v1, v3, :cond_8

    const/4 v3, 0x3

    if-eq v1, v3, :cond_7

    const/4 p1, 0x4

    if-eq v1, p1, :cond_6

    goto :goto_0

    .line 562
    :cond_6
    iget p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameHeight:I

    sub-int/2addr p2, p1

    int-to-float p1, p2

    iget p2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->framePaddingBottom:F

    add-float v2, p1, p2

    goto :goto_0

    .line 559
    :cond_7
    iget p2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameWidth:I

    sub-int/2addr p1, p2

    int-to-float p1, p1

    iget p2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->framePaddingRight:F

    add-float v0, p1, p2

    goto :goto_0

    .line 556
    :cond_8
    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->framePaddingTop:F

    goto :goto_0

    .line 553
    :cond_9
    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->framePaddingLeft:F

    .line 566
    :goto_0
    new-instance p1, Landroid/graphics/Rect;

    float-to-int p2, v0

    float-to-int v0, v2

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameWidth:I

    add-int/2addr v1, p2

    iget v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameHeight:I

    add-int/2addr v2, v0

    invoke-direct {p1, p2, v0, v1, v2}, Landroid/graphics/Rect;-><init>(IIII)V

    iput-object p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frame:Landroid/graphics/Rect;

    return-void
.end method

.method private scaleLaserBitmap()V
    .locals 9

    .line 513
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserBitmap:Landroid/graphics/Bitmap;

    if-eqz v0, :cond_0

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserBitmapWidth:F

    const/4 v2, 0x0

    cmpl-float v2, v1, v2

    if-lez v2, :cond_0

    .line 514
    invoke-virtual {v0}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v0

    int-to-float v0, v0

    div-float/2addr v1, v0

    .line 515
    new-instance v7, Landroid/graphics/Matrix;

    invoke-direct {v7}, Landroid/graphics/Matrix;-><init>()V

    .line 516
    invoke-virtual {v7, v1, v1}, Landroid/graphics/Matrix;->postScale(FF)Z

    .line 517
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v0}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v5

    .line 518
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v0}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v6

    .line 519
    iget-object v2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserBitmap:Landroid/graphics/Bitmap;

    const/4 v4, 0x0

    const/4 v8, 0x1

    const/4 v3, 0x0

    invoke-static/range {v2 .. v8}, Landroid/graphics/Bitmap;->createBitmap(Landroid/graphics/Bitmap;IIIILandroid/graphics/Matrix;Z)Landroid/graphics/Bitmap;

    move-result-object v0

    iput-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserBitmap:Landroid/graphics/Bitmap;

    :cond_0
    return-void
.end method

.method private shadeColor(I)I
    .locals 2

    .line 757
    invoke-static {p1}, Ljava/lang/Integer;->toHexString(I)Ljava/lang/String;

    move-result-object p1

    .line 758
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "01"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    const/4 v1, 0x2

    invoke-virtual {p1, v1}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    const/16 v0, 0x10

    .line 759
    invoke-static {p1, v0}, Ljava/lang/Integer;->valueOf(Ljava/lang/String;I)Ljava/lang/Integer;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/Integer;->intValue()I

    move-result p1

    return p1
.end method


# virtual methods
.method public isShowPoints()Z
    .locals 1

    .line 917
    iget-boolean v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->isShowPoints:Z

    return v0
.end method

.method public onDraw(Landroid/graphics/Canvas;)V
    .locals 7

    .line 571
    iget-boolean v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->isShowPoints:Z

    if-eqz v0, :cond_1

    .line 573
    invoke-virtual {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->getWidth()I

    move-result v0

    invoke-virtual {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->getHeight()I

    move-result v1

    invoke-direct {p0, p1, v0, v1}, Lcom/king/view/viewfinderview/ViewfinderView;->drawMask(Landroid/graphics/Canvas;II)V

    .line 574
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointList:Ljava/util/List;

    invoke-direct {p0, p1, v0}, Lcom/king/view/viewfinderview/ViewfinderView;->drawResultPoints(Landroid/graphics/Canvas;Ljava/util/List;)V

    .line 575
    iget-boolean p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->isPointAnimation:Z

    if-eqz p1, :cond_0

    .line 577
    invoke-direct {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->calcPointZoomAnimation()V

    :cond_0
    return-void

    .line 582
    :cond_1
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frame:Landroid/graphics/Rect;

    if-nez v0, :cond_2

    return-void

    .line 586
    :cond_2
    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    if-eqz v1, :cond_3

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerEnd:I

    if-nez v1, :cond_4

    .line 587
    :cond_3
    iget v0, v0, Landroid/graphics/Rect;->top:I

    iput v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerStart:I

    .line 588
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frame:Landroid/graphics/Rect;

    iget v0, v0, Landroid/graphics/Rect;->bottom:I

    iget v1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserLineHeight:I

    sub-int/2addr v0, v1

    iput v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->scannerEnd:I

    .line 592
    :cond_4
    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->viewfinderStyle:I

    if-nez v0, :cond_5

    .line 594
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frame:Landroid/graphics/Rect;

    invoke-virtual {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->getWidth()I

    move-result v1

    invoke-virtual {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->getHeight()I

    move-result v2

    invoke-direct {p0, p1, v0, v1, v2}, Lcom/king/view/viewfinderview/ViewfinderView;->drawExterior(Landroid/graphics/Canvas;Landroid/graphics/Rect;II)V

    .line 596
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frame:Landroid/graphics/Rect;

    invoke-direct {p0, p1, v0}, Lcom/king/view/viewfinderview/ViewfinderView;->drawLaserScanner(Landroid/graphics/Canvas;Landroid/graphics/Rect;)V

    .line 598
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frame:Landroid/graphics/Rect;

    invoke-direct {p0, p1, v0}, Lcom/king/view/viewfinderview/ViewfinderView;->drawFrame(Landroid/graphics/Canvas;Landroid/graphics/Rect;)V

    .line 600
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frame:Landroid/graphics/Rect;

    invoke-direct {p0, p1, v0}, Lcom/king/view/viewfinderview/ViewfinderView;->drawTextInfo(Landroid/graphics/Canvas;Landroid/graphics/Rect;)V

    .line 602
    iget p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserAnimationInterval:I

    int-to-long v1, p1

    iget-object p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frame:Landroid/graphics/Rect;

    iget v3, p1, Landroid/graphics/Rect;->left:I

    iget-object p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frame:Landroid/graphics/Rect;

    iget v4, p1, Landroid/graphics/Rect;->top:I

    iget-object p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frame:Landroid/graphics/Rect;

    iget v5, p1, Landroid/graphics/Rect;->right:I

    iget-object p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frame:Landroid/graphics/Rect;

    iget v6, p1, Landroid/graphics/Rect;->bottom:I

    move-object v0, p0

    invoke-virtual/range {v0 .. v6}, Lcom/king/view/viewfinderview/ViewfinderView;->postInvalidateDelayed(JIIII)V

    goto :goto_0

    :cond_5
    const/4 v1, 0x1

    if-ne v0, v1, :cond_6

    .line 606
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frame:Landroid/graphics/Rect;

    invoke-direct {p0, p1, v0}, Lcom/king/view/viewfinderview/ViewfinderView;->drawLaserScanner(Landroid/graphics/Canvas;Landroid/graphics/Rect;)V

    .line 608
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frame:Landroid/graphics/Rect;

    invoke-direct {p0, p1, v0}, Lcom/king/view/viewfinderview/ViewfinderView;->drawTextInfo(Landroid/graphics/Canvas;Landroid/graphics/Rect;)V

    .line 609
    iget p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserAnimationInterval:I

    int-to-long v0, p1

    invoke-virtual {p0, v0, v1}, Lcom/king/view/viewfinderview/ViewfinderView;->postInvalidateDelayed(J)V

    :cond_6
    :goto_0
    return-void
.end method

.method protected onLayout(ZIIII)V
    .locals 0

    .line 505
    invoke-super/range {p0 .. p5}, Landroid/view/View;->onLayout(ZIIII)V

    .line 506
    invoke-virtual {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->getWidth()I

    move-result p1

    invoke-virtual {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->getHeight()I

    move-result p2

    invoke-direct {p0, p1, p2}, Lcom/king/view/viewfinderview/ViewfinderView;->initFrame(II)V

    return-void
.end method

.method public onTouchEvent(Landroid/view/MotionEvent;)Z
    .locals 1

    .line 882
    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->gestureDetector:Landroid/view/GestureDetector;

    invoke-virtual {v0, p1}, Landroid/view/GestureDetector;->onTouchEvent(Landroid/view/MotionEvent;)Z

    .line 883
    iget-boolean v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->isShowPoints:Z

    if-nez v0, :cond_1

    invoke-super {p0, p1}, Landroid/view/View;->onTouchEvent(Landroid/view/MotionEvent;)Z

    move-result p1

    if-eqz p1, :cond_0

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 p1, 0x1

    :goto_1
    return p1
.end method

.method public setFrameBitmap(Landroid/graphics/Bitmap;)V
    .locals 0

    .line 1159
    iput-object p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameBitmap:Landroid/graphics/Bitmap;

    return-void
.end method

.method public setFrameColor(I)V
    .locals 0

    .line 957
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameColor:I

    return-void
.end method

.method public setFrameCornerColor(I)V
    .locals 0

    .line 975
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerColor:I

    return-void
.end method

.method public setFrameCornerSize(I)V
    .locals 0

    .line 1103
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerSize:I

    return-void
.end method

.method public setFrameCornerSize(II)V
    .locals 1

    int-to-float p1, p1

    .line 1113
    invoke-virtual {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->getResources()Landroid/content/res/Resources;

    move-result-object v0

    invoke-virtual {v0}, Landroid/content/res/Resources;->getDisplayMetrics()Landroid/util/DisplayMetrics;

    move-result-object v0

    invoke-static {p2, p1, v0}, Landroid/util/TypedValue;->applyDimension(IFLandroid/util/DisplayMetrics;)F

    move-result p1

    float-to-int p1, p1

    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerSize:I

    return-void
.end method

.method public setFrameCornerStrokeWidth(I)V
    .locals 0

    .line 1094
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameCornerStrokeWidth:I

    return-void
.end method

.method public setFrameDrawable(I)V
    .locals 1

    .line 1150
    invoke-virtual {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->getResources()Landroid/content/res/Resources;

    move-result-object v0

    invoke-static {v0, p1}, Landroid/graphics/BitmapFactory;->decodeResource(Landroid/content/res/Resources;I)Landroid/graphics/Bitmap;

    move-result-object p1

    invoke-virtual {p0, p1}, Lcom/king/view/viewfinderview/ViewfinderView;->setFrameBitmap(Landroid/graphics/Bitmap;)V

    return-void
.end method

.method public setFrameGravity(Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;)V
    .locals 0

    .line 1348
    iput-object p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameGravity:Lcom/king/view/viewfinderview/ViewfinderView$FrameGravity;

    return-void
.end method

.method public setFrameHeight(I)V
    .locals 0

    .line 1279
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameHeight:I

    return-void
.end method

.method public setFrameLineStrokeWidth(I)V
    .locals 0

    .line 1141
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameLineStrokeWidth:I

    return-void
.end method

.method public setFramePadding(FFFF)V
    .locals 0

    .line 1327
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->framePaddingLeft:F

    .line 1328
    iput p2, p0, Lcom/king/view/viewfinderview/ViewfinderView;->framePaddingTop:F

    .line 1329
    iput p3, p0, Lcom/king/view/viewfinderview/ViewfinderView;->framePaddingRight:F

    .line 1330
    iput p4, p0, Lcom/king/view/viewfinderview/ViewfinderView;->framePaddingBottom:F

    return-void
.end method

.method public setFramePaddingBottom(F)V
    .locals 0

    .line 1339
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->framePaddingBottom:F

    return-void
.end method

.method public setFramePaddingLeft(F)V
    .locals 0

    .line 1297
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->framePaddingLeft:F

    return-void
.end method

.method public setFramePaddingRight(F)V
    .locals 0

    .line 1315
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->framePaddingRight:F

    return-void
.end method

.method public setFramePaddingTop(F)V
    .locals 0

    .line 1306
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->framePaddingTop:F

    return-void
.end method

.method public setFrameRatio(F)V
    .locals 0

    .line 1288
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameRatio:F

    return-void
.end method

.method public setFrameWidth(I)V
    .locals 0

    .line 1270
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->frameWidth:I

    return-void
.end method

.method public setLabelText(Ljava/lang/String;)V
    .locals 0

    .line 1021
    iput-object p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelText:Ljava/lang/String;

    return-void
.end method

.method public setLabelTextColor(I)V
    .locals 0

    .line 1030
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextColor:I

    return-void
.end method

.method public setLabelTextColorResource(I)V
    .locals 1

    .line 1039
    invoke-virtual {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->getContext()Landroid/content/Context;

    move-result-object v0

    invoke-direct {p0, v0, p1}, Lcom/king/view/viewfinderview/ViewfinderView;->getColor(Landroid/content/Context;I)I

    move-result p1

    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextColor:I

    return-void
.end method

.method public setLabelTextLocation(Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;)V
    .locals 0

    .line 1012
    iput-object p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextLocation:Lcom/king/view/viewfinderview/ViewfinderView$TextLocation;

    return-void
.end method

.method public setLabelTextPadding(F)V
    .locals 0

    .line 984
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextPadding:F

    return-void
.end method

.method public setLabelTextPadding(FI)V
    .locals 1

    .line 994
    invoke-virtual {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->getResources()Landroid/content/res/Resources;

    move-result-object v0

    invoke-virtual {v0}, Landroid/content/res/Resources;->getDisplayMetrics()Landroid/util/DisplayMetrics;

    move-result-object v0

    invoke-static {p2, p1, v0}, Landroid/util/TypedValue;->applyDimension(IFLandroid/util/DisplayMetrics;)F

    move-result p1

    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextPadding:F

    return-void
.end method

.method public setLabelTextSize(F)V
    .locals 0

    .line 1048
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextSize:F

    return-void
.end method

.method public setLabelTextSize(FI)V
    .locals 1

    .line 1058
    invoke-virtual {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->getResources()Landroid/content/res/Resources;

    move-result-object v0

    invoke-virtual {v0}, Landroid/content/res/Resources;->getDisplayMetrics()Landroid/util/DisplayMetrics;

    move-result-object v0

    invoke-static {p2, p1, v0}, Landroid/util/TypedValue;->applyDimension(IFLandroid/util/DisplayMetrics;)F

    move-result p1

    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextSize:F

    return-void
.end method

.method public setLabelTextWidth(I)V
    .locals 0

    .line 1003
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->labelTextWidth:I

    return-void
.end method

.method public setLaserAnimationInterval(I)V
    .locals 0

    .line 1168
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserAnimationInterval:I

    return-void
.end method

.method public setLaserBitmap(Landroid/graphics/Bitmap;)V
    .locals 0

    .line 1223
    iput-object p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserBitmap:Landroid/graphics/Bitmap;

    .line 1224
    invoke-direct {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->scaleLaserBitmap()V

    return-void
.end method

.method public setLaserBitmapRatio(F)V
    .locals 1

    .line 1395
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserBitmapRatio:F

    .line 1396
    iget v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->minDimension:I

    if-lez v0, :cond_0

    int-to-float v0, v0

    mul-float/2addr v0, p1

    .line 1397
    iput v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserBitmapWidth:F

    .line 1398
    invoke-direct {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->scaleLaserBitmap()V

    :cond_0
    return-void
.end method

.method public setLaserBitmapWidth(F)V
    .locals 0

    .line 1409
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserBitmapWidth:F

    .line 1410
    invoke-direct {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->scaleLaserBitmap()V

    return-void
.end method

.method public setLaserColor(I)V
    .locals 0

    .line 966
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserColor:I

    return-void
.end method

.method public setLaserDrawable(I)V
    .locals 1

    .line 1214
    invoke-virtual {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->getResources()Landroid/content/res/Resources;

    move-result-object v0

    invoke-static {v0, p1}, Landroid/graphics/BitmapFactory;->decodeResource(Landroid/content/res/Resources;I)Landroid/graphics/Bitmap;

    move-result-object p1

    invoke-virtual {p0, p1}, Lcom/king/view/viewfinderview/ViewfinderView;->setLaserBitmap(Landroid/graphics/Bitmap;)V

    return-void
.end method

.method public setLaserGridColumn(I)V
    .locals 0

    .line 1076
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserGridColumn:I

    return-void
.end method

.method public setLaserGridHeight(I)V
    .locals 0

    .line 1085
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserGridHeight:I

    return-void
.end method

.method public setLaserLineHeight(I)V
    .locals 0

    .line 1132
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserLineHeight:I

    return-void
.end method

.method public setLaserMovementSpeed(I)V
    .locals 0

    .line 1123
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserMovementSpeed:I

    return-void
.end method

.method public setLaserStyle(Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;)V
    .locals 0

    .line 1067
    iput-object p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->laserStyle:Lcom/king/view/viewfinderview/ViewfinderView$LaserStyle;

    return-void
.end method

.method public setMaskColor(I)V
    .locals 0

    .line 948
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->maskColor:I

    return-void
.end method

.method public setOnItemClickListener(Lcom/king/view/viewfinderview/ViewfinderView$OnItemClickListener;)V
    .locals 0

    .line 1419
    iput-object p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->onItemClickListener:Lcom/king/view/viewfinderview/ViewfinderView$OnItemClickListener;

    return-void
.end method

.method public setPointAnimation(Z)V
    .locals 0

    .line 1357
    iput-boolean p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->isPointAnimation:Z

    return-void
.end method

.method public setPointAnimationInterval(I)V
    .locals 0

    .line 1252
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointAnimationInterval:I

    return-void
.end method

.method public setPointBitmap(Landroid/graphics/Bitmap;)V
    .locals 1

    .line 1242
    iput-object p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointBitmap:Landroid/graphics/Bitmap;

    .line 1243
    invoke-virtual {p1}, Landroid/graphics/Bitmap;->getWidth()I

    move-result p1

    iget-object v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v0}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v0

    add-int/2addr p1, v0

    int-to-float p1, p1

    const/high16 v0, 0x40800000    # 4.0f

    div-float/2addr p1, v0

    const v0, 0x3f99999a    # 1.2f

    mul-float/2addr p1, v0

    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointRangeRadius:F

    return-void
.end method

.method public setPointColor(I)V
    .locals 0

    .line 1177
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointColor:I

    return-void
.end method

.method public setPointDrawable(I)V
    .locals 1

    .line 1233
    invoke-virtual {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->getResources()Landroid/content/res/Resources;

    move-result-object v0

    invoke-static {v0, p1}, Landroid/graphics/BitmapFactory;->decodeResource(Landroid/content/res/Resources;I)Landroid/graphics/Bitmap;

    move-result-object p1

    invoke-virtual {p0, p1}, Lcom/king/view/viewfinderview/ViewfinderView;->setPointBitmap(Landroid/graphics/Bitmap;)V

    return-void
.end method

.method public setPointRadius(F)V
    .locals 0

    .line 1195
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointRadius:F

    return-void
.end method

.method public setPointRadius(FI)V
    .locals 1

    .line 1205
    invoke-virtual {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->getResources()Landroid/content/res/Resources;

    move-result-object v0

    invoke-virtual {v0}, Landroid/content/res/Resources;->getDisplayMetrics()Landroid/util/DisplayMetrics;

    move-result-object v0

    invoke-static {p2, p1, v0}, Landroid/util/TypedValue;->applyDimension(IFLandroid/util/DisplayMetrics;)F

    move-result p1

    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointRadius:F

    return-void
.end method

.method public setPointRangeRadius(F)V
    .locals 0

    .line 1386
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointRangeRadius:F

    return-void
.end method

.method public setPointStrokeColor(I)V
    .locals 0

    .line 1186
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointStrokeColor:I

    return-void
.end method

.method public setPointStrokeRadius(F)V
    .locals 0

    .line 1366
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointStrokeRadius:F

    return-void
.end method

.method public setViewfinderStyle(I)V
    .locals 0

    .line 1261
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->viewfinderStyle:I

    return-void
.end method

.method public setZoomSpeed(F)V
    .locals 0

    .line 1375
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->zoomSpeed:F

    return-void
.end method

.method public showResultPoints(Ljava/util/List;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroid/graphics/Point;",
            ">;)V"
        }
    .end annotation

    .line 934
    iput-object p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->pointList:Ljava/util/List;

    const/4 p1, 0x1

    .line 935
    iput-boolean p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->isShowPoints:Z

    const/4 p1, 0x0

    .line 936
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->zoomCount:I

    const/4 p1, 0x0

    .line 937
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->lastZoomRatio:F

    const/high16 p1, 0x3f800000    # 1.0f

    .line 938
    iput p1, p0, Lcom/king/view/viewfinderview/ViewfinderView;->currentZoomRatio:F

    .line 939
    invoke-virtual {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->invalidate()V

    return-void
.end method

.method public showScanner()V
    .locals 1

    const/4 v0, 0x0

    .line 924
    iput-boolean v0, p0, Lcom/king/view/viewfinderview/ViewfinderView;->isShowPoints:Z

    .line 925
    invoke-virtual {p0}, Lcom/king/view/viewfinderview/ViewfinderView;->invalidate()V

    return-void
.end method
