.class Lcom/onesignal/InAppMessageView;
.super Ljava/lang/Object;
.source "InAppMessageView.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/InAppMessageView$InAppMessageViewListener;
    }
.end annotation


# static fields
.field private static final ACTIVITY_BACKGROUND_COLOR_EMPTY:I

.field private static final ACTIVITY_BACKGROUND_COLOR_FULL:I

.field private static final ACTIVITY_FINISH_AFTER_DISMISS_DELAY_MS:I = 0x258

.field private static final ACTIVITY_INIT_DELAY:I = 0xc8

.field private static final DRAG_THRESHOLD_PX_SIZE:I

.field private static final IN_APP_BACKGROUND_ANIMATION_DURATION_MS:I = 0x190

.field private static final IN_APP_BANNER_ANIMATION_DURATION_MS:I = 0x3e8

.field private static final IN_APP_CENTER_ANIMATION_DURATION_MS:I = 0x3e8

.field private static final IN_APP_MESSAGE_CARD_VIEW_TAG:Ljava/lang/String; = "IN_APP_MESSAGE_CARD_VIEW_TAG"


# instance fields
.field private currentActivity:Landroid/app/Activity;

.field private disableDragDismiss:Z

.field private displayDuration:D

.field private displayLocation:Lcom/onesignal/WebViewManager$Position;

.field private draggableRelativeLayout:Lcom/onesignal/DraggableRelativeLayout;

.field private final handler:Landroid/os/Handler;

.field private hasBackground:Z

.field private isDragging:Z

.field private marginPxSizeBottom:I

.field private marginPxSizeLeft:I

.field private marginPxSizeRight:I

.field private marginPxSizeTop:I

.field private messageContent:Lcom/onesignal/OSInAppMessageContent;

.field private messageController:Lcom/onesignal/InAppMessageView$InAppMessageViewListener;

.field private pageHeight:I

.field private pageWidth:I

.field private parentRelativeLayout:Landroid/widget/RelativeLayout;

.field private popupWindow:Landroid/widget/PopupWindow;

.field private scheduleDismissRunnable:Ljava/lang/Runnable;

.field private shouldDismissWhenActive:Z

.field private webView:Landroid/webkit/WebView;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 50
    const-string v0, "#00000000"

    invoke-static {v0}, Landroid/graphics/Color;->parseColor(Ljava/lang/String;)I

    move-result v0

    sput v0, Lcom/onesignal/InAppMessageView;->ACTIVITY_BACKGROUND_COLOR_EMPTY:I

    .line 51
    const-string v0, "#BB000000"

    invoke-static {v0}, Landroid/graphics/Color;->parseColor(Ljava/lang/String;)I

    move-result v0

    sput v0, Lcom/onesignal/InAppMessageView;->ACTIVITY_BACKGROUND_COLOR_FULL:I

    const/4 v0, 0x4

    .line 59
    invoke-static {v0}, Lcom/onesignal/OSViewUtils;->dpToPx(I)I

    move-result v0

    sput v0, Lcom/onesignal/InAppMessageView;->DRAG_THRESHOLD_PX_SIZE:I

    return-void
.end method

.method constructor <init>(Landroid/webkit/WebView;Lcom/onesignal/OSInAppMessageContent;Z)V
    .locals 2

    .line 89
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 69
    new-instance v0, Landroid/os/Handler;

    invoke-direct {v0}, Landroid/os/Handler;-><init>()V

    iput-object v0, p0, Lcom/onesignal/InAppMessageView;->handler:Landroid/os/Handler;

    const/16 v0, 0x18

    .line 72
    invoke-static {v0}, Lcom/onesignal/OSViewUtils;->dpToPx(I)I

    move-result v1

    iput v1, p0, Lcom/onesignal/InAppMessageView;->marginPxSizeLeft:I

    .line 73
    invoke-static {v0}, Lcom/onesignal/OSViewUtils;->dpToPx(I)I

    move-result v1

    iput v1, p0, Lcom/onesignal/InAppMessageView;->marginPxSizeRight:I

    .line 74
    invoke-static {v0}, Lcom/onesignal/OSViewUtils;->dpToPx(I)I

    move-result v1

    iput v1, p0, Lcom/onesignal/InAppMessageView;->marginPxSizeTop:I

    .line 75
    invoke-static {v0}, Lcom/onesignal/OSViewUtils;->dpToPx(I)I

    move-result v0

    iput v0, p0, Lcom/onesignal/InAppMessageView;->marginPxSizeBottom:I

    const/4 v0, 0x0

    .line 78
    iput-boolean v0, p0, Lcom/onesignal/InAppMessageView;->shouldDismissWhenActive:Z

    .line 79
    iput-boolean v0, p0, Lcom/onesignal/InAppMessageView;->isDragging:Z

    .line 80
    iput-boolean v0, p0, Lcom/onesignal/InAppMessageView;->disableDragDismiss:Z

    .line 90
    iput-object p1, p0, Lcom/onesignal/InAppMessageView;->webView:Landroid/webkit/WebView;

    .line 91
    invoke-virtual {p2}, Lcom/onesignal/OSInAppMessageContent;->getDisplayLocation()Lcom/onesignal/WebViewManager$Position;

    move-result-object p1

    iput-object p1, p0, Lcom/onesignal/InAppMessageView;->displayLocation:Lcom/onesignal/WebViewManager$Position;

    .line 92
    invoke-virtual {p2}, Lcom/onesignal/OSInAppMessageContent;->getPageHeight()I

    move-result p1

    iput p1, p0, Lcom/onesignal/InAppMessageView;->pageHeight:I

    const/4 p1, -0x1

    .line 93
    iput p1, p0, Lcom/onesignal/InAppMessageView;->pageWidth:I

    .line 94
    invoke-virtual {p2}, Lcom/onesignal/OSInAppMessageContent;->getDisplayDuration()Ljava/lang/Double;

    move-result-object p1

    if-nez p1, :cond_0

    const-wide/16 v0, 0x0

    goto :goto_0

    :cond_0
    invoke-virtual {p2}, Lcom/onesignal/OSInAppMessageContent;->getDisplayDuration()Ljava/lang/Double;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/Double;->doubleValue()D

    move-result-wide v0

    :goto_0
    iput-wide v0, p0, Lcom/onesignal/InAppMessageView;->displayDuration:D

    .line 95
    iget-object p1, p0, Lcom/onesignal/InAppMessageView;->displayLocation:Lcom/onesignal/WebViewManager$Position;

    invoke-virtual {p1}, Lcom/onesignal/WebViewManager$Position;->isBanner()Z

    move-result p1

    xor-int/lit8 p1, p1, 0x1

    iput-boolean p1, p0, Lcom/onesignal/InAppMessageView;->hasBackground:Z

    .line 96
    iput-boolean p3, p0, Lcom/onesignal/InAppMessageView;->disableDragDismiss:Z

    .line 97
    iput-object p2, p0, Lcom/onesignal/InAppMessageView;->messageContent:Lcom/onesignal/OSInAppMessageContent;

    .line 98
    invoke-direct {p0, p2}, Lcom/onesignal/InAppMessageView;->setMarginsFromContent(Lcom/onesignal/OSInAppMessageContent;)V

    return-void
.end method

.method static synthetic access$000(Lcom/onesignal/InAppMessageView;)Landroid/webkit/WebView;
    .locals 0

    .line 46
    iget-object p0, p0, Lcom/onesignal/InAppMessageView;->webView:Landroid/webkit/WebView;

    return-object p0
.end method

.method static synthetic access$100(Lcom/onesignal/InAppMessageView;)Lcom/onesignal/DraggableRelativeLayout;
    .locals 0

    .line 46
    iget-object p0, p0, Lcom/onesignal/InAppMessageView;->draggableRelativeLayout:Lcom/onesignal/DraggableRelativeLayout;

    return-object p0
.end method

.method static synthetic access$1000(Lcom/onesignal/InAppMessageView;)Lcom/onesignal/InAppMessageView$InAppMessageViewListener;
    .locals 0

    .line 46
    iget-object p0, p0, Lcom/onesignal/InAppMessageView;->messageController:Lcom/onesignal/InAppMessageView$InAppMessageViewListener;

    return-object p0
.end method

.method static synthetic access$1100(Lcom/onesignal/InAppMessageView;Lcom/onesignal/WebViewManager$Position;Landroid/view/View;Landroid/view/View;)V
    .locals 0

    .line 46
    invoke-direct {p0, p1, p2, p3}, Lcom/onesignal/InAppMessageView;->animateInAppMessage(Lcom/onesignal/WebViewManager$Position;Landroid/view/View;Landroid/view/View;)V

    return-void
.end method

.method static synthetic access$1200(Lcom/onesignal/InAppMessageView;)V
    .locals 0

    .line 46
    invoke-direct {p0}, Lcom/onesignal/InAppMessageView;->startDismissTimerIfNeeded()V

    return-void
.end method

.method static synthetic access$1300(Lcom/onesignal/InAppMessageView;Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V
    .locals 0

    .line 46
    invoke-direct {p0, p1}, Lcom/onesignal/InAppMessageView;->finishAfterDelay(Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V

    return-void
.end method

.method static synthetic access$1402(Lcom/onesignal/InAppMessageView;Z)Z
    .locals 0

    .line 46
    iput-boolean p1, p0, Lcom/onesignal/InAppMessageView;->isDragging:Z

    return p1
.end method

.method static synthetic access$1502(Lcom/onesignal/InAppMessageView;Ljava/lang/Runnable;)Ljava/lang/Runnable;
    .locals 0

    .line 46
    iput-object p1, p0, Lcom/onesignal/InAppMessageView;->scheduleDismissRunnable:Ljava/lang/Runnable;

    return-object p1
.end method

.method static synthetic access$1602(Lcom/onesignal/InAppMessageView;Z)Z
    .locals 0

    .line 46
    iput-boolean p1, p0, Lcom/onesignal/InAppMessageView;->shouldDismissWhenActive:Z

    return p1
.end method

.method static synthetic access$1700(Lcom/onesignal/InAppMessageView;Landroid/app/Activity;)V
    .locals 0

    .line 46
    invoke-direct {p0, p1}, Lcom/onesignal/InAppMessageView;->delayShowUntilAvailable(Landroid/app/Activity;)V

    return-void
.end method

.method static synthetic access$1800(Lcom/onesignal/InAppMessageView;)Z
    .locals 0

    .line 46
    iget-boolean p0, p0, Lcom/onesignal/InAppMessageView;->hasBackground:Z

    return p0
.end method

.method static synthetic access$1900(Lcom/onesignal/InAppMessageView;Landroid/view/View;Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V
    .locals 0

    .line 46
    invoke-direct {p0, p1, p2}, Lcom/onesignal/InAppMessageView;->animateAndDismissLayout(Landroid/view/View;Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V

    return-void
.end method

.method static synthetic access$200(Lcom/onesignal/InAppMessageView;)Lcom/onesignal/WebViewManager$Position;
    .locals 0

    .line 46
    iget-object p0, p0, Lcom/onesignal/InAppMessageView;->displayLocation:Lcom/onesignal/WebViewManager$Position;

    return-object p0
.end method

.method static synthetic access$2000(Lcom/onesignal/InAppMessageView;)V
    .locals 0

    .line 46
    invoke-direct {p0}, Lcom/onesignal/InAppMessageView;->cleanupViewsAfterDismiss()V

    return-void
.end method

.method static synthetic access$300(Lcom/onesignal/InAppMessageView;)Z
    .locals 0

    .line 46
    iget-boolean p0, p0, Lcom/onesignal/InAppMessageView;->disableDragDismiss:Z

    return p0
.end method

.method static synthetic access$400(Lcom/onesignal/InAppMessageView;ILcom/onesignal/WebViewManager$Position;Z)Lcom/onesignal/DraggableRelativeLayout$Params;
    .locals 0

    .line 46
    invoke-direct {p0, p1, p2, p3}, Lcom/onesignal/InAppMessageView;->createDraggableLayoutParams(ILcom/onesignal/WebViewManager$Position;Z)Lcom/onesignal/DraggableRelativeLayout$Params;

    move-result-object p0

    return-object p0
.end method

.method static synthetic access$500(Lcom/onesignal/InAppMessageView;)Landroid/app/Activity;
    .locals 0

    .line 46
    iget-object p0, p0, Lcom/onesignal/InAppMessageView;->currentActivity:Landroid/app/Activity;

    return-object p0
.end method

.method static synthetic access$600(Lcom/onesignal/InAppMessageView;Landroid/content/Context;Landroid/widget/RelativeLayout$LayoutParams;Lcom/onesignal/DraggableRelativeLayout$Params;)V
    .locals 0

    .line 46
    invoke-direct {p0, p1, p2, p3}, Lcom/onesignal/InAppMessageView;->setUpDraggableLayout(Landroid/content/Context;Landroid/widget/RelativeLayout$LayoutParams;Lcom/onesignal/DraggableRelativeLayout$Params;)V

    return-void
.end method

.method static synthetic access$700(Lcom/onesignal/InAppMessageView;Landroid/content/Context;)V
    .locals 0

    .line 46
    invoke-direct {p0, p1}, Lcom/onesignal/InAppMessageView;->setUpParentRelativeLayout(Landroid/content/Context;)V

    return-void
.end method

.method static synthetic access$800(Lcom/onesignal/InAppMessageView;)Landroid/widget/RelativeLayout;
    .locals 0

    .line 46
    iget-object p0, p0, Lcom/onesignal/InAppMessageView;->parentRelativeLayout:Landroid/widget/RelativeLayout;

    return-object p0
.end method

.method static synthetic access$900(Lcom/onesignal/InAppMessageView;Landroid/widget/RelativeLayout;)V
    .locals 0

    .line 46
    invoke-direct {p0, p1}, Lcom/onesignal/InAppMessageView;->createPopupWindow(Landroid/widget/RelativeLayout;)V

    return-void
.end method

.method private animateAndDismissLayout(Landroid/view/View;Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V
    .locals 6

    .line 626
    new-instance v5, Lcom/onesignal/InAppMessageView$8;

    invoke-direct {v5, p0, p2}, Lcom/onesignal/InAppMessageView$8;-><init>(Lcom/onesignal/InAppMessageView;Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V

    .line 636
    sget v3, Lcom/onesignal/InAppMessageView;->ACTIVITY_BACKGROUND_COLOR_FULL:I

    sget v4, Lcom/onesignal/InAppMessageView;->ACTIVITY_BACKGROUND_COLOR_EMPTY:I

    const/16 v2, 0x190

    move-object v0, p0

    move-object v1, p1

    invoke-direct/range {v0 .. v5}, Lcom/onesignal/InAppMessageView;->animateBackgroundColor(Landroid/view/View;IIILandroid/animation/Animator$AnimatorListener;)Landroid/animation/ValueAnimator;

    move-result-object p1

    .line 642
    invoke-virtual {p1}, Landroid/animation/ValueAnimator;->start()V

    return-void
.end method

.method private animateBackgroundColor(Landroid/view/View;IIILandroid/animation/Animator$AnimatorListener;)Landroid/animation/ValueAnimator;
    .locals 0

    .line 646
    invoke-static {p1, p2, p3, p4, p5}, Lcom/onesignal/OneSignalAnimate;->animateViewColor(Landroid/view/View;IIILandroid/animation/Animator$AnimatorListener;)Landroid/animation/ValueAnimator;

    move-result-object p1

    return-object p1
.end method

.method private animateBottom(Landroid/view/View;ILandroid/view/animation/Animation$AnimationListener;)V
    .locals 7

    .line 595
    iget v0, p0, Lcom/onesignal/InAppMessageView;->marginPxSizeBottom:I

    add-int/2addr p2, v0

    int-to-float v1, p2

    new-instance v4, Lcom/onesignal/OneSignalBounceInterpolator;

    const-wide v2, 0x3fb999999999999aL    # 0.1

    const-wide/high16 v5, 0x4020000000000000L    # 8.0

    invoke-direct {v4, v2, v3, v5, v6}, Lcom/onesignal/OneSignalBounceInterpolator;-><init>(DD)V

    const/4 v2, 0x0

    const/16 v3, 0x3e8

    move-object v0, p1

    move-object v5, p3

    invoke-static/range {v0 .. v5}, Lcom/onesignal/OneSignalAnimate;->animateViewByTranslation(Landroid/view/View;FFILandroid/view/animation/Interpolator;Landroid/view/animation/Animation$AnimationListener;)Landroid/view/animation/Animation;

    move-result-object p1

    .line 602
    invoke-virtual {p1}, Landroid/view/animation/Animation;->start()V

    return-void
.end method

.method private animateCenter(Landroid/view/View;Landroid/view/View;Landroid/view/animation/Animation$AnimationListener;Landroid/animation/Animator$AnimatorListener;)V
    .locals 6

    .line 607
    new-instance v0, Lcom/onesignal/OneSignalBounceInterpolator;

    const-wide v1, 0x3fb999999999999aL    # 0.1

    const-wide/high16 v3, 0x4020000000000000L    # 8.0

    invoke-direct {v0, v1, v2, v3, v4}, Lcom/onesignal/OneSignalBounceInterpolator;-><init>(DD)V

    const/16 v1, 0x3e8

    invoke-static {p1, v1, v0, p3}, Lcom/onesignal/OneSignalAnimate;->animateViewSmallToLarge(Landroid/view/View;ILandroid/view/animation/Interpolator;Landroid/view/animation/Animation$AnimationListener;)Landroid/view/animation/Animation;

    move-result-object p1

    .line 614
    sget v3, Lcom/onesignal/InAppMessageView;->ACTIVITY_BACKGROUND_COLOR_EMPTY:I

    sget v4, Lcom/onesignal/InAppMessageView;->ACTIVITY_BACKGROUND_COLOR_FULL:I

    const/16 v2, 0x190

    move-object v0, p0

    move-object v1, p2

    move-object v5, p4

    invoke-direct/range {v0 .. v5}, Lcom/onesignal/InAppMessageView;->animateBackgroundColor(Landroid/view/View;IIILandroid/animation/Animator$AnimatorListener;)Landroid/animation/ValueAnimator;

    move-result-object p2

    .line 621
    invoke-virtual {p1}, Landroid/view/animation/Animation;->start()V

    .line 622
    invoke-virtual {p2}, Landroid/animation/ValueAnimator;->start()V

    return-void
.end method

.method private animateInAppMessage(Lcom/onesignal/WebViewManager$Position;Landroid/view/View;Landroid/view/View;)V
    .locals 3

    .line 537
    const-string v0, "IN_APP_MESSAGE_CARD_VIEW_TAG"

    invoke-virtual {p2, v0}, Landroid/view/View;->findViewWithTag(Ljava/lang/Object;)Landroid/view/View;

    move-result-object v0

    check-cast v0, Landroidx/cardview/widget/CardView;

    .line 539
    invoke-direct {p0, v0}, Lcom/onesignal/InAppMessageView;->createAnimationListener(Landroidx/cardview/widget/CardView;)Landroid/view/animation/Animation$AnimationListener;

    move-result-object v1

    .line 542
    sget-object v2, Lcom/onesignal/InAppMessageView$9;->$SwitchMap$com$onesignal$WebViewManager$Position:[I

    invoke-virtual {p1}, Lcom/onesignal/WebViewManager$Position;->ordinal()I

    move-result p1

    aget p1, v2, p1

    const/4 v2, 0x1

    if-eq p1, v2, :cond_2

    const/4 v2, 0x2

    if-eq p1, v2, :cond_1

    const/4 v0, 0x3

    if-eq p1, v0, :cond_0

    const/4 v0, 0x4

    if-eq p1, v0, :cond_0

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    .line 551
    invoke-direct {p0, p2, p3, v1, p1}, Lcom/onesignal/InAppMessageView;->animateCenter(Landroid/view/View;Landroid/view/View;Landroid/view/animation/Animation$AnimationListener;Landroid/animation/Animator$AnimatorListener;)V

    goto :goto_0

    .line 547
    :cond_1
    iget-object p1, p0, Lcom/onesignal/InAppMessageView;->webView:Landroid/webkit/WebView;

    invoke-virtual {p1}, Landroid/webkit/WebView;->getHeight()I

    move-result p1

    invoke-direct {p0, v0, p1, v1}, Lcom/onesignal/InAppMessageView;->animateBottom(Landroid/view/View;ILandroid/view/animation/Animation$AnimationListener;)V

    goto :goto_0

    .line 544
    :cond_2
    iget-object p1, p0, Lcom/onesignal/InAppMessageView;->webView:Landroid/webkit/WebView;

    invoke-virtual {p1}, Landroid/webkit/WebView;->getHeight()I

    move-result p1

    invoke-direct {p0, v0, p1, v1}, Lcom/onesignal/InAppMessageView;->animateTop(Landroid/view/View;ILandroid/view/animation/Animation$AnimationListener;)V

    :goto_0
    return-void
.end method

.method private animateTop(Landroid/view/View;ILandroid/view/animation/Animation$AnimationListener;)V
    .locals 7

    neg-int p2, p2

    .line 583
    iget v0, p0, Lcom/onesignal/InAppMessageView;->marginPxSizeTop:I

    sub-int/2addr p2, v0

    int-to-float v1, p2

    new-instance v4, Lcom/onesignal/OneSignalBounceInterpolator;

    const-wide v2, 0x3fb999999999999aL    # 0.1

    const-wide/high16 v5, 0x4020000000000000L    # 8.0

    invoke-direct {v4, v2, v3, v5, v6}, Lcom/onesignal/OneSignalBounceInterpolator;-><init>(DD)V

    const/4 v2, 0x0

    const/16 v3, 0x3e8

    move-object v0, p1

    move-object v5, p3

    invoke-static/range {v0 .. v5}, Lcom/onesignal/OneSignalAnimate;->animateViewByTranslation(Landroid/view/View;FFILandroid/view/animation/Interpolator;Landroid/view/animation/Animation$AnimationListener;)Landroid/view/animation/Animation;

    move-result-object p1

    .line 590
    invoke-virtual {p1}, Landroid/view/animation/Animation;->start()V

    return-void
.end method

.method private cleanupViewsAfterDismiss()V
    .locals 1

    .line 503
    invoke-virtual {p0}, Lcom/onesignal/InAppMessageView;->removeAllViews()V

    .line 504
    iget-object v0, p0, Lcom/onesignal/InAppMessageView;->messageController:Lcom/onesignal/InAppMessageView$InAppMessageViewListener;

    if-eqz v0, :cond_0

    .line 505
    invoke-interface {v0}, Lcom/onesignal/InAppMessageView$InAppMessageViewListener;->onMessageWasDismissed()V

    :cond_0
    return-void
.end method

.method private createAnimationListener(Landroidx/cardview/widget/CardView;)Landroid/view/animation/Animation$AnimationListener;
    .locals 1

    .line 557
    new-instance v0, Lcom/onesignal/InAppMessageView$7;

    invoke-direct {v0, p0, p1}, Lcom/onesignal/InAppMessageView$7;-><init>(Lcom/onesignal/InAppMessageView;Landroidx/cardview/widget/CardView;)V

    return-object v0
.end method

.method private createCardView(Landroid/content/Context;)Landroidx/cardview/widget/CardView;
    .locals 3

    .line 395
    new-instance v0, Landroidx/cardview/widget/CardView;

    invoke-direct {v0, p1}, Landroidx/cardview/widget/CardView;-><init>(Landroid/content/Context;)V

    .line 397
    iget-object p1, p0, Lcom/onesignal/InAppMessageView;->displayLocation:Lcom/onesignal/WebViewManager$Position;

    sget-object v1, Lcom/onesignal/WebViewManager$Position;->FULL_SCREEN:Lcom/onesignal/WebViewManager$Position;

    const/4 v2, -0x1

    if-ne p1, v1, :cond_0

    move p1, v2

    goto :goto_0

    :cond_0
    const/4 p1, -0x2

    .line 400
    :goto_0
    new-instance v1, Landroid/widget/RelativeLayout$LayoutParams;

    invoke-direct {v1, v2, p1}, Landroid/widget/RelativeLayout$LayoutParams;-><init>(II)V

    const/16 p1, 0xd

    .line 404
    invoke-virtual {v1, p1}, Landroid/widget/RelativeLayout$LayoutParams;->addRule(I)V

    .line 405
    invoke-virtual {v0, v1}, Landroidx/cardview/widget/CardView;->setLayoutParams(Landroid/view/ViewGroup$LayoutParams;)V

    const/4 p1, 0x5

    .line 412
    invoke-static {p1}, Lcom/onesignal/OSViewUtils;->dpToPx(I)I

    move-result p1

    int-to-float p1, p1

    invoke-virtual {v0, p1}, Landroidx/cardview/widget/CardView;->setCardElevation(F)V

    const/16 p1, 0x8

    .line 414
    invoke-static {p1}, Lcom/onesignal/OSViewUtils;->dpToPx(I)I

    move-result p1

    int-to-float p1, p1

    invoke-virtual {v0, p1}, Landroidx/cardview/widget/CardView;->setRadius(F)V

    const/4 p1, 0x0

    .line 415
    invoke-virtual {v0, p1}, Landroidx/cardview/widget/CardView;->setClipChildren(Z)V

    .line 416
    invoke-virtual {v0, p1}, Landroidx/cardview/widget/CardView;->setClipToPadding(Z)V

    .line 417
    invoke-virtual {v0, p1}, Landroidx/cardview/widget/CardView;->setPreventCornerOverlap(Z)V

    .line 418
    invoke-virtual {v0, p1}, Landroidx/cardview/widget/CardView;->setCardBackgroundColor(I)V

    return-object v0
.end method

.method private createDraggableLayoutParams(ILcom/onesignal/WebViewManager$Position;Z)Lcom/onesignal/DraggableRelativeLayout$Params;
    .locals 4

    .line 223
    new-instance v0, Lcom/onesignal/DraggableRelativeLayout$Params;

    invoke-direct {v0}, Lcom/onesignal/DraggableRelativeLayout$Params;-><init>()V

    .line 224
    iget v1, p0, Lcom/onesignal/InAppMessageView;->marginPxSizeRight:I

    iput v1, v0, Lcom/onesignal/DraggableRelativeLayout$Params;->maxXPos:I

    .line 225
    iget v1, p0, Lcom/onesignal/InAppMessageView;->marginPxSizeTop:I

    iput v1, v0, Lcom/onesignal/DraggableRelativeLayout$Params;->maxYPos:I

    .line 226
    iput-boolean p3, v0, Lcom/onesignal/DraggableRelativeLayout$Params;->draggingDisabled:Z

    .line 227
    iput p1, v0, Lcom/onesignal/DraggableRelativeLayout$Params;->messageHeight:I

    .line 228
    invoke-direct {p0}, Lcom/onesignal/InAppMessageView;->getDisplayYSize()I

    move-result p3

    iput p3, v0, Lcom/onesignal/DraggableRelativeLayout$Params;->height:I

    .line 230
    sget-object p3, Lcom/onesignal/InAppMessageView$9;->$SwitchMap$com$onesignal$WebViewManager$Position:[I

    invoke-virtual {p2}, Lcom/onesignal/WebViewManager$Position;->ordinal()I

    move-result v1

    aget p3, p3, v1

    const/4 v1, 0x1

    if-eq p3, v1, :cond_3

    const/4 v2, 0x2

    if-eq p3, v2, :cond_2

    const/4 v3, 0x3

    if-eq p3, v3, :cond_1

    const/4 p1, 0x4

    if-eq p3, p1, :cond_0

    goto :goto_0

    .line 239
    :cond_0
    invoke-direct {p0}, Lcom/onesignal/InAppMessageView;->getDisplayYSize()I

    move-result p1

    iget p3, p0, Lcom/onesignal/InAppMessageView;->marginPxSizeBottom:I

    iget v3, p0, Lcom/onesignal/InAppMessageView;->marginPxSizeTop:I

    add-int/2addr p3, v3

    sub-int/2addr p1, p3

    iput p1, v0, Lcom/onesignal/DraggableRelativeLayout$Params;->messageHeight:I

    .line 242
    :cond_1
    invoke-direct {p0}, Lcom/onesignal/InAppMessageView;->getDisplayYSize()I

    move-result p3

    div-int/2addr p3, v2

    div-int/2addr p1, v2

    sub-int/2addr p3, p1

    .line 243
    sget p1, Lcom/onesignal/InAppMessageView;->DRAG_THRESHOLD_PX_SIZE:I

    add-int/2addr p1, p3

    iput p1, v0, Lcom/onesignal/DraggableRelativeLayout$Params;->dragThresholdY:I

    .line 244
    iput p3, v0, Lcom/onesignal/DraggableRelativeLayout$Params;->maxYPos:I

    .line 245
    iput p3, v0, Lcom/onesignal/DraggableRelativeLayout$Params;->posY:I

    goto :goto_0

    .line 235
    :cond_2
    invoke-direct {p0}, Lcom/onesignal/InAppMessageView;->getDisplayYSize()I

    move-result p3

    sub-int/2addr p3, p1

    iput p3, v0, Lcom/onesignal/DraggableRelativeLayout$Params;->posY:I

    .line 236
    iget p1, p0, Lcom/onesignal/InAppMessageView;->marginPxSizeBottom:I

    sget p3, Lcom/onesignal/InAppMessageView;->DRAG_THRESHOLD_PX_SIZE:I

    add-int/2addr p1, p3

    iput p1, v0, Lcom/onesignal/DraggableRelativeLayout$Params;->dragThresholdY:I

    goto :goto_0

    .line 232
    :cond_3
    iget p1, p0, Lcom/onesignal/InAppMessageView;->marginPxSizeTop:I

    sget p3, Lcom/onesignal/InAppMessageView;->DRAG_THRESHOLD_PX_SIZE:I

    sub-int/2addr p1, p3

    iput p1, v0, Lcom/onesignal/DraggableRelativeLayout$Params;->dragThresholdY:I

    .line 249
    :goto_0
    sget-object p1, Lcom/onesignal/WebViewManager$Position;->TOP_BANNER:Lcom/onesignal/WebViewManager$Position;

    if-ne p2, p1, :cond_4

    const/4 v1, 0x0

    .line 251
    :cond_4
    iput v1, v0, Lcom/onesignal/DraggableRelativeLayout$Params;->dragDirection:I

    return-object v0
.end method

.method private createParentRelativeLayoutParams()Landroid/widget/RelativeLayout$LayoutParams;
    .locals 4

    .line 204
    new-instance v0, Landroid/widget/RelativeLayout$LayoutParams;

    iget v1, p0, Lcom/onesignal/InAppMessageView;->pageWidth:I

    const/4 v2, -0x1

    invoke-direct {v0, v1, v2}, Landroid/widget/RelativeLayout$LayoutParams;-><init>(II)V

    .line 205
    sget-object v1, Lcom/onesignal/InAppMessageView$9;->$SwitchMap$com$onesignal$WebViewManager$Position:[I

    iget-object v2, p0, Lcom/onesignal/InAppMessageView;->displayLocation:Lcom/onesignal/WebViewManager$Position;

    invoke-virtual {v2}, Lcom/onesignal/WebViewManager$Position;->ordinal()I

    move-result v2

    aget v1, v1, v2

    const/4 v2, 0x1

    const/16 v3, 0xe

    if-eq v1, v2, :cond_2

    const/4 v2, 0x2

    if-eq v1, v2, :cond_1

    const/4 v2, 0x3

    if-eq v1, v2, :cond_0

    const/4 v2, 0x4

    if-eq v1, v2, :cond_0

    goto :goto_0

    :cond_0
    const/16 v1, 0xd

    .line 216
    invoke-virtual {v0, v1}, Landroid/widget/RelativeLayout$LayoutParams;->addRule(I)V

    goto :goto_0

    :cond_1
    const/16 v1, 0xc

    .line 211
    invoke-virtual {v0, v1}, Landroid/widget/RelativeLayout$LayoutParams;->addRule(I)V

    .line 212
    invoke-virtual {v0, v3}, Landroid/widget/RelativeLayout$LayoutParams;->addRule(I)V

    goto :goto_0

    :cond_2
    const/16 v1, 0xa

    .line 207
    invoke-virtual {v0, v1}, Landroid/widget/RelativeLayout$LayoutParams;->addRule(I)V

    .line 208
    invoke-virtual {v0, v3}, Landroid/widget/RelativeLayout$LayoutParams;->addRule(I)V

    :goto_0
    return-object v0
.end method

.method private createPopupWindow(Landroid/widget/RelativeLayout;)V
    .locals 4

    .line 289
    new-instance v0, Landroid/widget/PopupWindow;

    .line 291
    iget-boolean v1, p0, Lcom/onesignal/InAppMessageView;->hasBackground:Z

    const/4 v2, -0x1

    if-eqz v1, :cond_0

    move v3, v2

    goto :goto_0

    :cond_0
    iget v3, p0, Lcom/onesignal/InAppMessageView;->pageWidth:I

    :goto_0
    if-eqz v1, :cond_1

    goto :goto_1

    :cond_1
    const/4 v2, -0x2

    :goto_1
    const/4 v1, 0x1

    .line 292
    invoke-direct {v0, p1, v3, v2, v1}, Landroid/widget/PopupWindow;-><init>(Landroid/view/View;IIZ)V

    iput-object v0, p0, Lcom/onesignal/InAppMessageView;->popupWindow:Landroid/widget/PopupWindow;

    .line 296
    new-instance p1, Landroid/graphics/drawable/ColorDrawable;

    const/4 v2, 0x0

    invoke-direct {p1, v2}, Landroid/graphics/drawable/ColorDrawable;-><init>(I)V

    invoke-virtual {v0, p1}, Landroid/widget/PopupWindow;->setBackgroundDrawable(Landroid/graphics/drawable/Drawable;)V

    .line 297
    iget-object p1, p0, Lcom/onesignal/InAppMessageView;->popupWindow:Landroid/widget/PopupWindow;

    invoke-virtual {p1, v1}, Landroid/widget/PopupWindow;->setTouchable(Z)V

    .line 299
    iget-object p1, p0, Lcom/onesignal/InAppMessageView;->popupWindow:Landroid/widget/PopupWindow;

    invoke-virtual {p1, v2}, Landroid/widget/PopupWindow;->setClippingEnabled(Z)V

    .line 302
    iget-boolean p1, p0, Lcom/onesignal/InAppMessageView;->hasBackground:Z

    if-nez p1, :cond_4

    .line 303
    sget-object p1, Lcom/onesignal/InAppMessageView$9;->$SwitchMap$com$onesignal$WebViewManager$Position:[I

    iget-object v0, p0, Lcom/onesignal/InAppMessageView;->displayLocation:Lcom/onesignal/WebViewManager$Position;

    invoke-virtual {v0}, Lcom/onesignal/WebViewManager$Position;->ordinal()I

    move-result v0

    aget p1, p1, v0

    if-eq p1, v1, :cond_3

    const/4 v0, 0x2

    if-eq p1, v0, :cond_2

    const/4 v0, 0x3

    if-eq p1, v0, :cond_5

    const/4 v0, 0x4

    if-eq p1, v0, :cond_5

    goto :goto_2

    :cond_2
    const/16 v1, 0x51

    goto :goto_3

    :cond_3
    const/16 v1, 0x31

    goto :goto_3

    :cond_4
    :goto_2
    move v1, v2

    .line 319
    :cond_5
    :goto_3
    iget-object p1, p0, Lcom/onesignal/InAppMessageView;->messageContent:Lcom/onesignal/OSInAppMessageContent;

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageContent;->isFullBleed()Z

    move-result p1

    if-eqz p1, :cond_6

    const/16 p1, 0x3e8

    goto :goto_4

    :cond_6
    const/16 p1, 0x3eb

    .line 322
    :goto_4
    iget-object v0, p0, Lcom/onesignal/InAppMessageView;->popupWindow:Landroid/widget/PopupWindow;

    invoke-static {v0, p1}, Landroidx/core/widget/PopupWindowCompat;->setWindowLayoutType(Landroid/widget/PopupWindow;I)V

    .line 327
    iget-object p1, p0, Lcom/onesignal/InAppMessageView;->popupWindow:Landroid/widget/PopupWindow;

    iget-object v0, p0, Lcom/onesignal/InAppMessageView;->currentActivity:Landroid/app/Activity;

    .line 328
    invoke-virtual {v0}, Landroid/app/Activity;->getWindow()Landroid/view/Window;

    move-result-object v0

    invoke-virtual {v0}, Landroid/view/Window;->getDecorView()Landroid/view/View;

    move-result-object v0

    invoke-virtual {v0}, Landroid/view/View;->getRootView()Landroid/view/View;

    move-result-object v0

    .line 327
    invoke-virtual {p1, v0, v1, v2, v2}, Landroid/widget/PopupWindow;->showAtLocation(Landroid/view/View;III)V

    return-void
.end method

.method private delayShowUntilAvailable(Landroid/app/Activity;)V
    .locals 4

    .line 452
    invoke-static {p1}, Lcom/onesignal/OSViewUtils;->isActivityFullyReady(Landroid/app/Activity;)Z

    move-result v0

    if-eqz v0, :cond_0

    iget-object v0, p0, Lcom/onesignal/InAppMessageView;->parentRelativeLayout:Landroid/widget/RelativeLayout;

    if-nez v0, :cond_0

    .line 453
    invoke-virtual {p0, p1}, Lcom/onesignal/InAppMessageView;->showInAppMessageView(Landroid/app/Activity;)V

    return-void

    .line 456
    :cond_0
    new-instance v0, Landroid/os/Handler;

    invoke-direct {v0}, Landroid/os/Handler;-><init>()V

    new-instance v1, Lcom/onesignal/InAppMessageView$5;

    invoke-direct {v1, p0, p1}, Lcom/onesignal/InAppMessageView$5;-><init>(Lcom/onesignal/InAppMessageView;Landroid/app/Activity;)V

    const-wide/16 v2, 0xc8

    invoke-virtual {v0, v1, v2, v3}, Landroid/os/Handler;->postDelayed(Ljava/lang/Runnable;J)Z

    return-void
.end method

.method private dereferenceViews()V
    .locals 1

    const/4 v0, 0x0

    .line 531
    iput-object v0, p0, Lcom/onesignal/InAppMessageView;->parentRelativeLayout:Landroid/widget/RelativeLayout;

    .line 532
    iput-object v0, p0, Lcom/onesignal/InAppMessageView;->draggableRelativeLayout:Lcom/onesignal/DraggableRelativeLayout;

    .line 533
    iput-object v0, p0, Lcom/onesignal/InAppMessageView;->webView:Landroid/webkit/WebView;

    return-void
.end method

.method private finishAfterDelay(Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V
    .locals 1

    .line 485
    new-instance v0, Lcom/onesignal/InAppMessageView$6;

    invoke-direct {v0, p0, p1}, Lcom/onesignal/InAppMessageView$6;-><init>(Lcom/onesignal/InAppMessageView;Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V

    const/16 p1, 0x258

    invoke-static {v0, p1}, Lcom/onesignal/OSUtils;->runOnMainThreadDelayed(Ljava/lang/Runnable;I)V

    return-void
.end method

.method private getDisplayYSize()I
    .locals 1

    .line 200
    iget-object v0, p0, Lcom/onesignal/InAppMessageView;->currentActivity:Landroid/app/Activity;

    invoke-static {v0}, Lcom/onesignal/OSViewUtils;->getWindowHeight(Landroid/app/Activity;)I

    move-result v0

    return v0
.end method

.method private setMarginsFromContent(Lcom/onesignal/OSInAppMessageContent;)V
    .locals 3

    .line 107
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageContent;->getUseHeightMargin()Z

    move-result v0

    const/16 v1, 0x18

    const/4 v2, 0x0

    if-eqz v0, :cond_0

    invoke-static {v1}, Lcom/onesignal/OSViewUtils;->dpToPx(I)I

    move-result v0

    goto :goto_0

    :cond_0
    move v0, v2

    :goto_0
    iput v0, p0, Lcom/onesignal/InAppMessageView;->marginPxSizeTop:I

    .line 108
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageContent;->getUseHeightMargin()Z

    move-result v0

    if-eqz v0, :cond_1

    invoke-static {v1}, Lcom/onesignal/OSViewUtils;->dpToPx(I)I

    move-result v0

    goto :goto_1

    :cond_1
    move v0, v2

    :goto_1
    iput v0, p0, Lcom/onesignal/InAppMessageView;->marginPxSizeBottom:I

    .line 109
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageContent;->getUseWidthMargin()Z

    move-result v0

    if-eqz v0, :cond_2

    invoke-static {v1}, Lcom/onesignal/OSViewUtils;->dpToPx(I)I

    move-result v0

    goto :goto_2

    :cond_2
    move v0, v2

    :goto_2
    iput v0, p0, Lcom/onesignal/InAppMessageView;->marginPxSizeLeft:I

    .line 110
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageContent;->getUseWidthMargin()Z

    move-result p1

    if-eqz p1, :cond_3

    invoke-static {v1}, Lcom/onesignal/OSViewUtils;->dpToPx(I)I

    move-result v2

    :cond_3
    iput v2, p0, Lcom/onesignal/InAppMessageView;->marginPxSizeRight:I

    return-void
.end method

.method private setUpDraggableLayout(Landroid/content/Context;Landroid/widget/RelativeLayout$LayoutParams;Lcom/onesignal/DraggableRelativeLayout$Params;)V
    .locals 3

    .line 346
    new-instance v0, Lcom/onesignal/DraggableRelativeLayout;

    invoke-direct {v0, p1}, Lcom/onesignal/DraggableRelativeLayout;-><init>(Landroid/content/Context;)V

    iput-object v0, p0, Lcom/onesignal/InAppMessageView;->draggableRelativeLayout:Lcom/onesignal/DraggableRelativeLayout;

    if-eqz p2, :cond_0

    .line 348
    invoke-virtual {v0, p2}, Lcom/onesignal/DraggableRelativeLayout;->setLayoutParams(Landroid/view/ViewGroup$LayoutParams;)V

    .line 349
    :cond_0
    iget-object p2, p0, Lcom/onesignal/InAppMessageView;->draggableRelativeLayout:Lcom/onesignal/DraggableRelativeLayout;

    invoke-virtual {p2, p3}, Lcom/onesignal/DraggableRelativeLayout;->setParams(Lcom/onesignal/DraggableRelativeLayout$Params;)V

    .line 350
    iget-object p2, p0, Lcom/onesignal/InAppMessageView;->draggableRelativeLayout:Lcom/onesignal/DraggableRelativeLayout;

    new-instance p3, Lcom/onesignal/InAppMessageView$3;

    invoke-direct {p3, p0}, Lcom/onesignal/InAppMessageView$3;-><init>(Lcom/onesignal/InAppMessageView;)V

    invoke-virtual {p2, p3}, Lcom/onesignal/DraggableRelativeLayout;->setListener(Lcom/onesignal/DraggableRelativeLayout$DraggableListener;)V

    .line 370
    iget-object p2, p0, Lcom/onesignal/InAppMessageView;->webView:Landroid/webkit/WebView;

    invoke-virtual {p2}, Landroid/webkit/WebView;->getParent()Landroid/view/ViewParent;

    move-result-object p2

    if-eqz p2, :cond_1

    .line 371
    iget-object p2, p0, Lcom/onesignal/InAppMessageView;->webView:Landroid/webkit/WebView;

    invoke-virtual {p2}, Landroid/webkit/WebView;->getParent()Landroid/view/ViewParent;

    move-result-object p2

    check-cast p2, Landroid/view/ViewGroup;

    invoke-virtual {p2}, Landroid/view/ViewGroup;->removeAllViews()V

    .line 373
    :cond_1
    invoke-direct {p0, p1}, Lcom/onesignal/InAppMessageView;->createCardView(Landroid/content/Context;)Landroidx/cardview/widget/CardView;

    move-result-object p1

    .line 374
    const-string p2, "IN_APP_MESSAGE_CARD_VIEW_TAG"

    invoke-virtual {p1, p2}, Landroidx/cardview/widget/CardView;->setTag(Ljava/lang/Object;)V

    .line 375
    iget-object p2, p0, Lcom/onesignal/InAppMessageView;->webView:Landroid/webkit/WebView;

    invoke-virtual {p1, p2}, Landroidx/cardview/widget/CardView;->addView(Landroid/view/View;)V

    .line 377
    iget-object p2, p0, Lcom/onesignal/InAppMessageView;->draggableRelativeLayout:Lcom/onesignal/DraggableRelativeLayout;

    iget p3, p0, Lcom/onesignal/InAppMessageView;->marginPxSizeLeft:I

    iget v0, p0, Lcom/onesignal/InAppMessageView;->marginPxSizeTop:I

    iget v1, p0, Lcom/onesignal/InAppMessageView;->marginPxSizeRight:I

    iget v2, p0, Lcom/onesignal/InAppMessageView;->marginPxSizeBottom:I

    invoke-virtual {p2, p3, v0, v1, v2}, Lcom/onesignal/DraggableRelativeLayout;->setPadding(IIII)V

    .line 378
    iget-object p2, p0, Lcom/onesignal/InAppMessageView;->draggableRelativeLayout:Lcom/onesignal/DraggableRelativeLayout;

    const/4 p3, 0x0

    invoke-virtual {p2, p3}, Lcom/onesignal/DraggableRelativeLayout;->setClipChildren(Z)V

    .line 379
    iget-object p2, p0, Lcom/onesignal/InAppMessageView;->draggableRelativeLayout:Lcom/onesignal/DraggableRelativeLayout;

    invoke-virtual {p2, p3}, Lcom/onesignal/DraggableRelativeLayout;->setClipToPadding(Z)V

    .line 380
    iget-object p2, p0, Lcom/onesignal/InAppMessageView;->draggableRelativeLayout:Lcom/onesignal/DraggableRelativeLayout;

    invoke-virtual {p2, p1}, Lcom/onesignal/DraggableRelativeLayout;->addView(Landroid/view/View;)V

    return-void
.end method

.method private setUpParentRelativeLayout(Landroid/content/Context;)V
    .locals 2

    .line 336
    new-instance v0, Landroid/widget/RelativeLayout;

    invoke-direct {v0, p1}, Landroid/widget/RelativeLayout;-><init>(Landroid/content/Context;)V

    iput-object v0, p0, Lcom/onesignal/InAppMessageView;->parentRelativeLayout:Landroid/widget/RelativeLayout;

    .line 337
    new-instance p1, Landroid/graphics/drawable/ColorDrawable;

    const/4 v1, 0x0

    invoke-direct {p1, v1}, Landroid/graphics/drawable/ColorDrawable;-><init>(I)V

    invoke-virtual {v0, p1}, Landroid/widget/RelativeLayout;->setBackgroundDrawable(Landroid/graphics/drawable/Drawable;)V

    .line 338
    iget-object p1, p0, Lcom/onesignal/InAppMessageView;->parentRelativeLayout:Landroid/widget/RelativeLayout;

    invoke-virtual {p1, v1}, Landroid/widget/RelativeLayout;->setClipChildren(Z)V

    .line 339
    iget-object p1, p0, Lcom/onesignal/InAppMessageView;->parentRelativeLayout:Landroid/widget/RelativeLayout;

    invoke-virtual {p1, v1}, Landroid/widget/RelativeLayout;->setClipToPadding(Z)V

    .line 340
    iget-object p1, p0, Lcom/onesignal/InAppMessageView;->parentRelativeLayout:Landroid/widget/RelativeLayout;

    iget-object v0, p0, Lcom/onesignal/InAppMessageView;->draggableRelativeLayout:Lcom/onesignal/DraggableRelativeLayout;

    invoke-virtual {p1, v0}, Landroid/widget/RelativeLayout;->addView(Landroid/view/View;)V

    return-void
.end method

.method private showDraggableView(Lcom/onesignal/WebViewManager$Position;Landroid/widget/RelativeLayout$LayoutParams;Landroid/widget/RelativeLayout$LayoutParams;Lcom/onesignal/DraggableRelativeLayout$Params;)V
    .locals 7

    .line 260
    new-instance v6, Lcom/onesignal/InAppMessageView$2;

    move-object v0, v6

    move-object v1, p0

    move-object v2, p2

    move-object v3, p3

    move-object v4, p4

    move-object v5, p1

    invoke-direct/range {v0 .. v5}, Lcom/onesignal/InAppMessageView$2;-><init>(Lcom/onesignal/InAppMessageView;Landroid/widget/RelativeLayout$LayoutParams;Landroid/widget/RelativeLayout$LayoutParams;Lcom/onesignal/DraggableRelativeLayout$Params;Lcom/onesignal/WebViewManager$Position;)V

    invoke-static {v6}, Lcom/onesignal/OSUtils;->runOnMainUIThread(Ljava/lang/Runnable;)V

    return-void
.end method

.method private startDismissTimerIfNeeded()V
    .locals 6

    .line 427
    iget-wide v0, p0, Lcom/onesignal/InAppMessageView;->displayDuration:D

    const-wide/16 v2, 0x0

    cmpg-double v0, v0, v2

    if-gtz v0, :cond_0

    return-void

    .line 430
    :cond_0
    iget-object v0, p0, Lcom/onesignal/InAppMessageView;->scheduleDismissRunnable:Ljava/lang/Runnable;

    if-eqz v0, :cond_1

    return-void

    .line 433
    :cond_1
    new-instance v0, Lcom/onesignal/InAppMessageView$4;

    invoke-direct {v0, p0}, Lcom/onesignal/InAppMessageView$4;-><init>(Lcom/onesignal/InAppMessageView;)V

    iput-object v0, p0, Lcom/onesignal/InAppMessageView;->scheduleDismissRunnable:Ljava/lang/Runnable;

    .line 447
    iget-object v1, p0, Lcom/onesignal/InAppMessageView;->handler:Landroid/os/Handler;

    iget-wide v2, p0, Lcom/onesignal/InAppMessageView;->displayDuration:D

    double-to-long v2, v2

    const-wide/16 v4, 0x3e8

    mul-long/2addr v2, v4

    invoke-virtual {v1, v0, v2, v3}, Landroid/os/Handler;->postDelayed(Ljava/lang/Runnable;J)Z

    return-void
.end method


# virtual methods
.method checkIfShouldDismiss()V
    .locals 1

    .line 131
    iget-boolean v0, p0, Lcom/onesignal/InAppMessageView;->shouldDismissWhenActive:Z

    if-eqz v0, :cond_0

    const/4 v0, 0x0

    .line 132
    iput-boolean v0, p0, Lcom/onesignal/InAppMessageView;->shouldDismissWhenActive:Z

    const/4 v0, 0x0

    .line 133
    invoke-direct {p0, v0}, Lcom/onesignal/InAppMessageView;->finishAfterDelay(Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V

    :cond_0
    return-void
.end method

.method dismissAndAwaitNextMessage(Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V
    .locals 3

    .line 468
    iget-object v0, p0, Lcom/onesignal/InAppMessageView;->draggableRelativeLayout:Lcom/onesignal/DraggableRelativeLayout;

    if-nez v0, :cond_1

    .line 469
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/Throwable;

    invoke-direct {v1}, Ljava/lang/Throwable;-><init>()V

    const-string v2, "No host presenter to trigger dismiss animation, counting as dismissed already"

    invoke-static {v0, v2, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 470
    invoke-direct {p0}, Lcom/onesignal/InAppMessageView;->dereferenceViews()V

    if-eqz p1, :cond_0

    .line 472
    invoke-interface {p1}, Lcom/onesignal/WebViewManager$OneSignalGenericCallback;->onComplete()V

    :cond_0
    return-void

    .line 476
    :cond_1
    invoke-virtual {v0}, Lcom/onesignal/DraggableRelativeLayout;->dismiss()V

    .line 477
    invoke-direct {p0, p1}, Lcom/onesignal/InAppMessageView;->finishAfterDelay(Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V

    return-void
.end method

.method getDisplayPosition()Lcom/onesignal/WebViewManager$Position;
    .locals 1

    .line 123
    iget-object v0, p0, Lcom/onesignal/InAppMessageView;->displayLocation:Lcom/onesignal/WebViewManager$Position;

    return-object v0
.end method

.method isDragging()Z
    .locals 1

    .line 387
    iget-boolean v0, p0, Lcom/onesignal/InAppMessageView;->isDragging:Z

    return v0
.end method

.method removeAllViews()V
    .locals 2

    .line 512
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "InAppMessageView removing views"

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 513
    iget-object v0, p0, Lcom/onesignal/InAppMessageView;->scheduleDismissRunnable:Ljava/lang/Runnable;

    if-eqz v0, :cond_0

    .line 515
    iget-object v1, p0, Lcom/onesignal/InAppMessageView;->handler:Landroid/os/Handler;

    invoke-virtual {v1, v0}, Landroid/os/Handler;->removeCallbacks(Ljava/lang/Runnable;)V

    const/4 v0, 0x0

    .line 516
    iput-object v0, p0, Lcom/onesignal/InAppMessageView;->scheduleDismissRunnable:Ljava/lang/Runnable;

    .line 518
    :cond_0
    iget-object v0, p0, Lcom/onesignal/InAppMessageView;->draggableRelativeLayout:Lcom/onesignal/DraggableRelativeLayout;

    if-eqz v0, :cond_1

    .line 519
    invoke-virtual {v0}, Lcom/onesignal/DraggableRelativeLayout;->removeAllViews()V

    .line 521
    :cond_1
    iget-object v0, p0, Lcom/onesignal/InAppMessageView;->popupWindow:Landroid/widget/PopupWindow;

    if-eqz v0, :cond_2

    .line 522
    invoke-virtual {v0}, Landroid/widget/PopupWindow;->dismiss()V

    .line 523
    :cond_2
    invoke-direct {p0}, Lcom/onesignal/InAppMessageView;->dereferenceViews()V

    return-void
.end method

.method setMessageController(Lcom/onesignal/InAppMessageView$InAppMessageViewListener;)V
    .locals 0

    .line 119
    iput-object p1, p0, Lcom/onesignal/InAppMessageView;->messageController:Lcom/onesignal/InAppMessageView$InAppMessageViewListener;

    return-void
.end method

.method setWebView(Landroid/webkit/WebView;)V
    .locals 1

    .line 114
    iput-object p1, p0, Lcom/onesignal/InAppMessageView;->webView:Landroid/webkit/WebView;

    const/4 v0, 0x0

    .line 115
    invoke-virtual {p1, v0}, Landroid/webkit/WebView;->setBackgroundColor(I)V

    return-void
.end method

.method showInAppMessageView(Landroid/app/Activity;)V
    .locals 4

    .line 181
    iput-object p1, p0, Lcom/onesignal/InAppMessageView;->currentActivity:Landroid/app/Activity;

    .line 183
    new-instance p1, Landroid/widget/RelativeLayout$LayoutParams;

    const/4 v0, -0x1

    iget v1, p0, Lcom/onesignal/InAppMessageView;->pageHeight:I

    invoke-direct {p1, v0, v1}, Landroid/widget/RelativeLayout$LayoutParams;-><init>(II)V

    const/16 v0, 0xd

    .line 187
    invoke-virtual {p1, v0}, Landroid/widget/RelativeLayout$LayoutParams;->addRule(I)V

    .line 189
    iget-boolean v0, p0, Lcom/onesignal/InAppMessageView;->hasBackground:Z

    if-eqz v0, :cond_0

    invoke-direct {p0}, Lcom/onesignal/InAppMessageView;->createParentRelativeLayoutParams()Landroid/widget/RelativeLayout$LayoutParams;

    move-result-object v0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    .line 191
    :goto_0
    iget-object v1, p0, Lcom/onesignal/InAppMessageView;->displayLocation:Lcom/onesignal/WebViewManager$Position;

    iget v2, p0, Lcom/onesignal/InAppMessageView;->pageHeight:I

    iget-boolean v3, p0, Lcom/onesignal/InAppMessageView;->disableDragDismiss:Z

    .line 195
    invoke-direct {p0, v2, v1, v3}, Lcom/onesignal/InAppMessageView;->createDraggableLayoutParams(ILcom/onesignal/WebViewManager$Position;Z)Lcom/onesignal/DraggableRelativeLayout$Params;

    move-result-object v2

    .line 191
    invoke-direct {p0, v1, p1, v0, v2}, Lcom/onesignal/InAppMessageView;->showDraggableView(Lcom/onesignal/WebViewManager$Position;Landroid/widget/RelativeLayout$LayoutParams;Landroid/widget/RelativeLayout$LayoutParams;Lcom/onesignal/DraggableRelativeLayout$Params;)V

    return-void
.end method

.method showView(Landroid/app/Activity;)V
    .locals 0

    .line 127
    invoke-direct {p0, p1}, Lcom/onesignal/InAppMessageView;->delayShowUntilAvailable(Landroid/app/Activity;)V

    return-void
.end method

.method public toString()Ljava/lang/String;
    .locals 3

    .line 656
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "InAppMessageView{currentActivity="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lcom/onesignal/InAppMessageView;->currentActivity:Landroid/app/Activity;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", pageWidth="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lcom/onesignal/InAppMessageView;->pageWidth:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", pageHeight="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lcom/onesignal/InAppMessageView;->pageHeight:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", displayDuration="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-wide v1, p0, Lcom/onesignal/InAppMessageView;->displayDuration:D

    invoke-virtual {v0, v1, v2}, Ljava/lang/StringBuilder;->append(D)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", hasBackground="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/onesignal/InAppMessageView;->hasBackground:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", shouldDismissWhenActive="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/onesignal/InAppMessageView;->shouldDismissWhenActive:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", isDragging="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/onesignal/InAppMessageView;->isDragging:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", disableDragDismiss="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/onesignal/InAppMessageView;->disableDragDismiss:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", displayLocation="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/InAppMessageView;->displayLocation:Lcom/onesignal/WebViewManager$Position;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", webView="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/InAppMessageView;->webView:Landroid/webkit/WebView;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const/16 v1, 0x7d

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method updateHeight(I)V
    .locals 1

    .line 144
    iput p1, p0, Lcom/onesignal/InAppMessageView;->pageHeight:I

    .line 145
    new-instance v0, Lcom/onesignal/InAppMessageView$1;

    invoke-direct {v0, p0, p1}, Lcom/onesignal/InAppMessageView$1;-><init>(Lcom/onesignal/InAppMessageView;I)V

    invoke-static {v0}, Lcom/onesignal/OSUtils;->runOnMainUIThread(Ljava/lang/Runnable;)V

    return-void
.end method
