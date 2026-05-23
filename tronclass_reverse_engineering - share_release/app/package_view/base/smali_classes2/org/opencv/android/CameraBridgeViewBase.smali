.class public abstract Lorg/opencv/android/CameraBridgeViewBase;
.super Landroid/view/SurfaceView;
.source "CameraBridgeViewBase.java"

# interfaces
.implements Landroid/view/SurfaceHolder$Callback;


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListener2;,
        Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListenerAdapter;,
        Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListener;,
        Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewFrame;,
        Lorg/opencv/android/CameraBridgeViewBase$ListItemAccessor;
    }
.end annotation


# static fields
.field public static final CAMERA_ID_ANY:I = -0x1

.field public static final CAMERA_ID_BACK:I = 0x63

.field public static final CAMERA_ID_FRONT:I = 0x62

.field public static final GRAY:I = 0x2

.field protected static final MAX_UNSPECIFIED:I = -0x1

.field public static final RGBA:I = 0x1

.field private static final STARTED:I = 0x1

.field private static final STOPPED:I = 0x0

.field private static final TAG:Ljava/lang/String; = "CameraBridge"


# instance fields
.field private mCacheBitmap:Landroid/graphics/Bitmap;

.field protected mCameraIndex:I

.field protected mCameraPermissionGranted:Z

.field protected mEnabled:Z

.field protected mFpsMeter:Lorg/opencv/android/FpsMeter;

.field protected mFrameHeight:I

.field protected mFrameWidth:I

.field private mListener:Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListener2;

.field protected mMaxHeight:I

.field protected mMaxWidth:I

.field protected mPreviewFormat:I

.field protected mScale:F

.field private mState:I

.field private mSurfaceExist:Z

.field private final mSyncObject:Ljava/lang/Object;


# direct methods
.method public constructor <init>(Landroid/content/Context;I)V
    .locals 1

    .line 61
    invoke-direct {p0, p1}, Landroid/view/SurfaceView;-><init>(Landroid/content/Context;)V

    const/4 p1, 0x0

    .line 37
    iput p1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mState:I

    .line 41
    new-instance v0, Ljava/lang/Object;

    invoke-direct {v0}, Ljava/lang/Object;-><init>()V

    iput-object v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mSyncObject:Ljava/lang/Object;

    const/4 v0, 0x0

    .line 47
    iput v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mScale:F

    const/4 v0, 0x1

    .line 48
    iput v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mPreviewFormat:I

    .line 51
    iput-boolean p1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCameraPermissionGranted:Z

    const/4 p1, 0x0

    .line 52
    iput-object p1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mFpsMeter:Lorg/opencv/android/FpsMeter;

    .line 62
    iput p2, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCameraIndex:I

    .line 63
    invoke-virtual {p0}, Lorg/opencv/android/CameraBridgeViewBase;->getHolder()Landroid/view/SurfaceHolder;

    move-result-object p1

    invoke-interface {p1, p0}, Landroid/view/SurfaceHolder;->addCallback(Landroid/view/SurfaceHolder$Callback;)V

    const/4 p1, -0x1

    .line 64
    iput p1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mMaxWidth:I

    .line 65
    iput p1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mMaxHeight:I

    return-void
.end method

.method public constructor <init>(Landroid/content/Context;Landroid/util/AttributeSet;)V
    .locals 4

    .line 69
    invoke-direct {p0, p1, p2}, Landroid/view/SurfaceView;-><init>(Landroid/content/Context;Landroid/util/AttributeSet;)V

    const/4 p1, 0x0

    .line 37
    iput p1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mState:I

    .line 41
    new-instance v0, Ljava/lang/Object;

    invoke-direct {v0}, Ljava/lang/Object;-><init>()V

    iput-object v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mSyncObject:Ljava/lang/Object;

    const/4 v0, 0x0

    .line 47
    iput v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mScale:F

    const/4 v0, 0x1

    .line 48
    iput v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mPreviewFormat:I

    const/4 v0, -0x1

    .line 49
    iput v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCameraIndex:I

    .line 51
    iput-boolean p1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCameraPermissionGranted:Z

    const/4 v1, 0x0

    .line 52
    iput-object v1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mFpsMeter:Lorg/opencv/android/FpsMeter;

    .line 71
    invoke-interface {p2}, Landroid/util/AttributeSet;->getAttributeCount()I

    move-result v1

    .line 72
    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Attr count: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {v2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    const-string v2, "CameraBridge"

    invoke-static {v2, v1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 74
    invoke-virtual {p0}, Lorg/opencv/android/CameraBridgeViewBase;->getContext()Landroid/content/Context;

    move-result-object v1

    sget-object v2, Lorg/opencv/R$styleable;->CameraBridgeViewBase:[I

    invoke-virtual {v1, p2, v2}, Landroid/content/Context;->obtainStyledAttributes(Landroid/util/AttributeSet;[I)Landroid/content/res/TypedArray;

    move-result-object p2

    .line 75
    sget v1, Lorg/opencv/R$styleable;->CameraBridgeViewBase_show_fps:I

    invoke-virtual {p2, v1, p1}, Landroid/content/res/TypedArray;->getBoolean(IZ)Z

    move-result p1

    if-eqz p1, :cond_0

    .line 76
    invoke-virtual {p0}, Lorg/opencv/android/CameraBridgeViewBase;->enableFpsMeter()V

    .line 78
    :cond_0
    sget p1, Lorg/opencv/R$styleable;->CameraBridgeViewBase_camera_id:I

    invoke-virtual {p2, p1, v0}, Landroid/content/res/TypedArray;->getInt(II)I

    move-result p1

    iput p1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCameraIndex:I

    .line 80
    invoke-virtual {p0}, Lorg/opencv/android/CameraBridgeViewBase;->getHolder()Landroid/view/SurfaceHolder;

    move-result-object p1

    invoke-interface {p1, p0}, Landroid/view/SurfaceHolder;->addCallback(Landroid/view/SurfaceHolder$Callback;)V

    .line 81
    iput v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mMaxWidth:I

    .line 82
    iput v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mMaxHeight:I

    .line 83
    invoke-virtual {p2}, Landroid/content/res/TypedArray;->recycle()V

    return-void
.end method

.method private checkCurrentState()V
    .locals 2

    .line 316
    const-string v0, "CameraBridge"

    const-string v1, "call checkCurrentState"

    invoke-static {v0, v1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 319
    iget-boolean v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mEnabled:Z

    if-eqz v0, :cond_0

    iget-boolean v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCameraPermissionGranted:Z

    if-eqz v0, :cond_0

    iget-boolean v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mSurfaceExist:Z

    if-eqz v0, :cond_0

    invoke-virtual {p0}, Lorg/opencv/android/CameraBridgeViewBase;->getVisibility()I

    move-result v0

    if-nez v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    .line 325
    :goto_0
    iget v1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mState:I

    if-eq v0, v1, :cond_1

    .line 327
    invoke-direct {p0, v1}, Lorg/opencv/android/CameraBridgeViewBase;->processExitState(I)V

    .line 328
    iput v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mState:I

    .line 329
    invoke-direct {p0, v0}, Lorg/opencv/android/CameraBridgeViewBase;->processEnterState(I)V

    :cond_1
    return-void
.end method

.method private onEnterStartedState()V
    .locals 4

    .line 374
    const-string v0, "CameraBridge"

    const-string v1, "call onEnterStartedState"

    invoke-static {v0, v1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 376
    invoke-virtual {p0}, Lorg/opencv/android/CameraBridgeViewBase;->getWidth()I

    move-result v0

    invoke-virtual {p0}, Lorg/opencv/android/CameraBridgeViewBase;->getHeight()I

    move-result v1

    invoke-virtual {p0, v0, v1}, Lorg/opencv/android/CameraBridgeViewBase;->connectCamera(II)Z

    move-result v0

    if-nez v0, :cond_0

    .line 377
    new-instance v0, Landroid/app/AlertDialog$Builder;

    invoke-virtual {p0}, Lorg/opencv/android/CameraBridgeViewBase;->getContext()Landroid/content/Context;

    move-result-object v1

    invoke-direct {v0, v1}, Landroid/app/AlertDialog$Builder;-><init>(Landroid/content/Context;)V

    invoke-virtual {v0}, Landroid/app/AlertDialog$Builder;->create()Landroid/app/AlertDialog;

    move-result-object v0

    const/4 v1, 0x0

    .line 378
    invoke-virtual {v0, v1}, Landroid/app/AlertDialog;->setCancelable(Z)V

    .line 379
    const-string v1, "It seems that your device does not support camera (or it is locked). Application will be closed."

    invoke-virtual {v0, v1}, Landroid/app/AlertDialog;->setMessage(Ljava/lang/CharSequence;)V

    .line 380
    new-instance v1, Lorg/opencv/android/CameraBridgeViewBase$1;

    invoke-direct {v1, p0}, Lorg/opencv/android/CameraBridgeViewBase$1;-><init>(Lorg/opencv/android/CameraBridgeViewBase;)V

    const/4 v2, -0x3

    const-string v3, "OK"

    invoke-virtual {v0, v2, v3, v1}, Landroid/app/AlertDialog;->setButton(ILjava/lang/CharSequence;Landroid/content/DialogInterface$OnClickListener;)V

    .line 386
    invoke-virtual {v0}, Landroid/app/AlertDialog;->show()V

    :cond_0
    return-void
.end method

.method private onEnterStoppedState()V
    .locals 0

    return-void
.end method

.method private onExitStartedState()V
    .locals 1

    .line 392
    invoke-virtual {p0}, Lorg/opencv/android/CameraBridgeViewBase;->disconnectCamera()V

    .line 393
    iget-object v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    if-eqz v0, :cond_0

    .line 394
    invoke-virtual {v0}, Landroid/graphics/Bitmap;->recycle()V

    :cond_0
    return-void
.end method

.method private onExitStoppedState()V
    .locals 0

    return-void
.end method

.method private processEnterState(I)V
    .locals 2

    .line 334
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "call processEnterState: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    const-string v1, "CameraBridge"

    invoke-static {v1, v0}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    if-eqz p1, :cond_1

    const/4 v0, 0x1

    if-eq p1, v0, :cond_0

    goto :goto_0

    .line 337
    :cond_0
    invoke-direct {p0}, Lorg/opencv/android/CameraBridgeViewBase;->onEnterStartedState()V

    .line 338
    iget-object p1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mListener:Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListener2;

    if-eqz p1, :cond_2

    .line 339
    iget v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mFrameWidth:I

    iget v1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mFrameHeight:I

    invoke-interface {p1, v0, v1}, Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListener2;->onCameraViewStarted(II)V

    goto :goto_0

    .line 343
    :cond_1
    invoke-direct {p0}, Lorg/opencv/android/CameraBridgeViewBase;->onEnterStoppedState()V

    .line 344
    iget-object p1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mListener:Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListener2;

    if-eqz p1, :cond_2

    .line 345
    invoke-interface {p1}, Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListener2;->onCameraViewStopped()V

    :cond_2
    :goto_0
    return-void
.end method

.method private processExitState(I)V
    .locals 2

    .line 352
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "call processExitState: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    const-string v1, "CameraBridge"

    invoke-static {v1, v0}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    if-eqz p1, :cond_1

    const/4 v0, 0x1

    if-eq p1, v0, :cond_0

    goto :goto_0

    .line 355
    :cond_0
    invoke-direct {p0}, Lorg/opencv/android/CameraBridgeViewBase;->onExitStartedState()V

    goto :goto_0

    .line 358
    :cond_1
    invoke-direct {p0}, Lorg/opencv/android/CameraBridgeViewBase;->onExitStoppedState()V

    :goto_0
    return-void
.end method


# virtual methods
.method protected AllocateCache()V
    .locals 3

    .line 473
    iget v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mFrameWidth:I

    iget v1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mFrameHeight:I

    sget-object v2, Landroid/graphics/Bitmap$Config;->ARGB_8888:Landroid/graphics/Bitmap$Config;

    invoke-static {v0, v1, v2}, Landroid/graphics/Bitmap;->createBitmap(IILandroid/graphics/Bitmap$Config;)Landroid/graphics/Bitmap;

    move-result-object v0

    iput-object v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    return-void
.end method

.method public SetCaptureFormat(I)V
    .locals 2

    .line 305
    iput p1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mPreviewFormat:I

    .line 306
    iget-object v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mListener:Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListener2;

    instance-of v1, v0, Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListenerAdapter;

    if-eqz v1, :cond_0

    .line 307
    check-cast v0, Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListenerAdapter;

    .line 308
    invoke-virtual {v0, p1}, Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListenerAdapter;->setFrameFormat(I)V

    :cond_0
    return-void
.end method

.method protected calculateCameraFrameSize(Ljava/util/List;Lorg/opencv/android/CameraBridgeViewBase$ListItemAccessor;II)Lorg/opencv/core/Size;
    .locals 9
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "*>;",
            "Lorg/opencv/android/CameraBridgeViewBase$ListItemAccessor;",
            "II)",
            "Lorg/opencv/core/Size;"
        }
    .end annotation

    .line 494
    iget v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mMaxWidth:I

    const/4 v1, -0x1

    if-eq v0, v1, :cond_0

    if-ge v0, p3, :cond_0

    move p3, v0

    .line 495
    :cond_0
    iget v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mMaxHeight:I

    if-eq v0, v1, :cond_1

    if-ge v0, p4, :cond_1

    move p4, v0

    .line 497
    :cond_1
    invoke-interface {p1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    const/4 v1, 0x0

    move v2, v1

    move v3, v2

    :cond_2
    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v4

    const-string v5, "CameraBridge"

    if-eqz v4, :cond_3

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v4

    .line 498
    invoke-interface {p2, v4}, Lorg/opencv/android/CameraBridgeViewBase$ListItemAccessor;->getWidth(Ljava/lang/Object;)I

    move-result v6

    .line 499
    invoke-interface {p2, v4}, Lorg/opencv/android/CameraBridgeViewBase$ListItemAccessor;->getHeight(Ljava/lang/Object;)I

    move-result v4

    .line 500
    new-instance v7, Ljava/lang/StringBuilder;

    const-string v8, "trying size: "

    invoke-direct {v7, v8}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v7, v6}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v7

    const-string v8, "x"

    invoke-virtual {v7, v8}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v7

    invoke-virtual {v7, v4}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v7

    invoke-virtual {v7}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v7

    invoke-static {v5, v7}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    if-gt v6, p3, :cond_2

    if-gt v4, p4, :cond_2

    if-lt v6, v2, :cond_2

    if-lt v4, v3, :cond_2

    move v3, v4

    move v2, v6

    goto :goto_0

    :cond_3
    if-eqz v2, :cond_4

    if-nez v3, :cond_5

    .line 509
    :cond_4
    invoke-interface {p1}, Ljava/util/List;->size()I

    move-result p3

    if-lez p3, :cond_5

    .line 511
    const-string p3, "fallback to the first frame size"

    invoke-static {v5, p3}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 512
    invoke-interface {p1, v1}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object p1

    .line 513
    invoke-interface {p2, p1}, Lorg/opencv/android/CameraBridgeViewBase$ListItemAccessor;->getWidth(Ljava/lang/Object;)I

    move-result v2

    .line 514
    invoke-interface {p2, p1}, Lorg/opencv/android/CameraBridgeViewBase$ListItemAccessor;->getHeight(Ljava/lang/Object;)I

    move-result v3

    .line 517
    :cond_5
    new-instance p1, Lorg/opencv/core/Size;

    int-to-double p2, v2

    int-to-double v0, v3

    invoke-direct {p1, p2, p3, v0, v1}, Lorg/opencv/core/Size;-><init>(DD)V

    return-object p1
.end method

.method protected abstract connectCamera(II)Z
.end method

.method protected deliverAndDrawFrame(Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewFrame;)V
    .locals 11

    .line 407
    iget-object v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mListener:Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListener2;

    if-eqz v0, :cond_0

    .line 408
    invoke-interface {v0, p1}, Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListener2;->onCameraFrame(Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewFrame;)Lorg/opencv/core/Mat;

    move-result-object p1

    goto :goto_0

    .line 410
    :cond_0
    invoke-interface {p1}, Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewFrame;->rgba()Lorg/opencv/core/Mat;

    move-result-object p1

    :goto_0
    if-eqz p1, :cond_1

    .line 416
    :try_start_0
    iget-object v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    invoke-static {p1, v0}, Lorg/opencv/android/Utils;->matToBitmap(Lorg/opencv/core/Mat;Landroid/graphics/Bitmap;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    :catch_0
    move-exception v0

    .line 418
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Mat type: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    const-string v1, "CameraBridge"

    invoke-static {v1, p1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    .line 419
    new-instance p1, Ljava/lang/StringBuilder;

    const-string v2, "Bitmap type: "

    invoke-direct {p1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v2}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v2

    invoke-virtual {p1, v2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v2, "*"

    invoke-virtual {p1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    iget-object v2, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v2}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v2

    invoke-virtual {p1, v2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v1, p1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    .line 420
    new-instance p1, Ljava/lang/StringBuilder;

    const-string v2, "Utils.matToBitmap() throws an exception: "

    invoke-direct {p1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v1, p1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    goto/16 :goto_3

    .line 425
    :cond_1
    :goto_1
    iget-object p1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    if-eqz p1, :cond_4

    .line 426
    invoke-virtual {p0}, Lorg/opencv/android/CameraBridgeViewBase;->getHolder()Landroid/view/SurfaceHolder;

    move-result-object p1

    invoke-interface {p1}, Landroid/view/SurfaceHolder;->lockCanvas()Landroid/graphics/Canvas;

    move-result-object p1

    if-eqz p1, :cond_4

    .line 428
    sget-object v0, Landroid/graphics/PorterDuff$Mode;->CLEAR:Landroid/graphics/PorterDuff$Mode;

    const/4 v1, 0x0

    invoke-virtual {p1, v1, v0}, Landroid/graphics/Canvas;->drawColor(ILandroid/graphics/PorterDuff$Mode;)V

    .line 432
    iget v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mScale:F

    const/4 v2, 0x0

    cmpl-float v0, v0, v2

    const/4 v2, 0x0

    if-eqz v0, :cond_2

    .line 433
    iget-object v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    new-instance v3, Landroid/graphics/Rect;

    iget-object v4, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v4}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v4

    iget-object v5, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v5}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v5

    invoke-direct {v3, v1, v1, v4, v5}, Landroid/graphics/Rect;-><init>(IIII)V

    new-instance v1, Landroid/graphics/Rect;

    .line 434
    invoke-virtual {p1}, Landroid/graphics/Canvas;->getWidth()I

    move-result v4

    int-to-float v4, v4

    iget v5, p0, Lorg/opencv/android/CameraBridgeViewBase;->mScale:F

    iget-object v6, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v6}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v6

    int-to-float v6, v6

    mul-float/2addr v5, v6

    sub-float/2addr v4, v5

    const/high16 v5, 0x40000000    # 2.0f

    div-float/2addr v4, v5

    float-to-int v4, v4

    .line 435
    invoke-virtual {p1}, Landroid/graphics/Canvas;->getHeight()I

    move-result v6

    int-to-float v6, v6

    iget v7, p0, Lorg/opencv/android/CameraBridgeViewBase;->mScale:F

    iget-object v8, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v8}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v8

    int-to-float v8, v8

    mul-float/2addr v7, v8

    sub-float/2addr v6, v7

    div-float/2addr v6, v5

    float-to-int v6, v6

    .line 436
    invoke-virtual {p1}, Landroid/graphics/Canvas;->getWidth()I

    move-result v7

    int-to-float v7, v7

    iget v8, p0, Lorg/opencv/android/CameraBridgeViewBase;->mScale:F

    iget-object v9, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v9}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v9

    int-to-float v9, v9

    mul-float/2addr v8, v9

    sub-float/2addr v7, v8

    div-float/2addr v7, v5

    iget v8, p0, Lorg/opencv/android/CameraBridgeViewBase;->mScale:F

    iget-object v9, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v9}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v9

    int-to-float v9, v9

    mul-float/2addr v8, v9

    add-float/2addr v7, v8

    float-to-int v7, v7

    .line 437
    invoke-virtual {p1}, Landroid/graphics/Canvas;->getHeight()I

    move-result v8

    int-to-float v8, v8

    iget v9, p0, Lorg/opencv/android/CameraBridgeViewBase;->mScale:F

    iget-object v10, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v10}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v10

    int-to-float v10, v10

    mul-float/2addr v9, v10

    sub-float/2addr v8, v9

    div-float/2addr v8, v5

    iget v5, p0, Lorg/opencv/android/CameraBridgeViewBase;->mScale:F

    iget-object v9, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v9}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v9

    int-to-float v9, v9

    mul-float/2addr v5, v9

    add-float/2addr v8, v5

    float-to-int v5, v8

    invoke-direct {v1, v4, v6, v7, v5}, Landroid/graphics/Rect;-><init>(IIII)V

    .line 433
    invoke-virtual {p1, v0, v3, v1, v2}, Landroid/graphics/Canvas;->drawBitmap(Landroid/graphics/Bitmap;Landroid/graphics/Rect;Landroid/graphics/Rect;Landroid/graphics/Paint;)V

    goto :goto_2

    .line 439
    :cond_2
    iget-object v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    new-instance v3, Landroid/graphics/Rect;

    iget-object v4, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v4}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v4

    iget-object v5, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v5}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v5

    invoke-direct {v3, v1, v1, v4, v5}, Landroid/graphics/Rect;-><init>(IIII)V

    new-instance v1, Landroid/graphics/Rect;

    .line 440
    invoke-virtual {p1}, Landroid/graphics/Canvas;->getWidth()I

    move-result v4

    iget-object v5, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v5}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v5

    sub-int/2addr v4, v5

    div-int/lit8 v4, v4, 0x2

    .line 441
    invoke-virtual {p1}, Landroid/graphics/Canvas;->getHeight()I

    move-result v5

    iget-object v6, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v6}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v6

    sub-int/2addr v5, v6

    div-int/lit8 v5, v5, 0x2

    .line 442
    invoke-virtual {p1}, Landroid/graphics/Canvas;->getWidth()I

    move-result v6

    iget-object v7, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v7}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v7

    sub-int/2addr v6, v7

    div-int/lit8 v6, v6, 0x2

    iget-object v7, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v7}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v7

    add-int/2addr v6, v7

    .line 443
    invoke-virtual {p1}, Landroid/graphics/Canvas;->getHeight()I

    move-result v7

    iget-object v8, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v8}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v8

    sub-int/2addr v7, v8

    div-int/lit8 v7, v7, 0x2

    iget-object v8, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCacheBitmap:Landroid/graphics/Bitmap;

    invoke-virtual {v8}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v8

    add-int/2addr v7, v8

    invoke-direct {v1, v4, v5, v6, v7}, Landroid/graphics/Rect;-><init>(IIII)V

    .line 439
    invoke-virtual {p1, v0, v3, v1, v2}, Landroid/graphics/Canvas;->drawBitmap(Landroid/graphics/Bitmap;Landroid/graphics/Rect;Landroid/graphics/Rect;Landroid/graphics/Paint;)V

    .line 446
    :goto_2
    iget-object v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mFpsMeter:Lorg/opencv/android/FpsMeter;

    if-eqz v0, :cond_3

    .line 447
    invoke-virtual {v0}, Lorg/opencv/android/FpsMeter;->measure()V

    .line 448
    iget-object v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mFpsMeter:Lorg/opencv/android/FpsMeter;

    const/high16 v1, 0x41a00000    # 20.0f

    const/high16 v2, 0x41f00000    # 30.0f

    invoke-virtual {v0, p1, v1, v2}, Lorg/opencv/android/FpsMeter;->draw(Landroid/graphics/Canvas;FF)V

    .line 450
    :cond_3
    invoke-virtual {p0}, Lorg/opencv/android/CameraBridgeViewBase;->getHolder()Landroid/view/SurfaceHolder;

    move-result-object v0

    invoke-interface {v0, p1}, Landroid/view/SurfaceHolder;->unlockCanvasAndPost(Landroid/graphics/Canvas;)V

    :cond_4
    :goto_3
    return-void
.end method

.method public disableFpsMeter()V
    .locals 1

    const/4 v0, 0x0

    .line 271
    iput-object v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mFpsMeter:Lorg/opencv/android/FpsMeter;

    return-void
.end method

.method public disableView()V
    .locals 2

    .line 254
    iget-object v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mSyncObject:Ljava/lang/Object;

    monitor-enter v0

    const/4 v1, 0x0

    .line 255
    :try_start_0
    iput-boolean v1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mEnabled:Z

    .line 256
    invoke-direct {p0}, Lorg/opencv/android/CameraBridgeViewBase;->checkCurrentState()V

    .line 257
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method protected abstract disconnectCamera()V
.end method

.method public enableFpsMeter()V
    .locals 3

    .line 264
    iget-object v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mFpsMeter:Lorg/opencv/android/FpsMeter;

    if-nez v0, :cond_0

    .line 265
    new-instance v0, Lorg/opencv/android/FpsMeter;

    invoke-direct {v0}, Lorg/opencv/android/FpsMeter;-><init>()V

    iput-object v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mFpsMeter:Lorg/opencv/android/FpsMeter;

    .line 266
    iget v1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mFrameWidth:I

    iget v2, p0, Lorg/opencv/android/CameraBridgeViewBase;->mFrameHeight:I

    invoke-virtual {v0, v1, v2}, Lorg/opencv/android/FpsMeter;->setResolution(II)V

    :cond_0
    return-void
.end method

.method public enableView()V
    .locals 2

    .line 243
    iget-object v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mSyncObject:Ljava/lang/Object;

    monitor-enter v0

    const/4 v1, 0x1

    .line 244
    :try_start_0
    iput-boolean v1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mEnabled:Z

    .line 245
    invoke-direct {p0}, Lorg/opencv/android/CameraBridgeViewBase;->checkCurrentState()V

    .line 246
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public setCameraIndex(I)V
    .locals 0

    .line 91
    iput p1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCameraIndex:I

    return-void
.end method

.method public setCameraPermissionGranted()V
    .locals 2

    .line 230
    iget-object v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mSyncObject:Ljava/lang/Object;

    monitor-enter v0

    const/4 v1, 0x1

    .line 231
    :try_start_0
    iput-boolean v1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mCameraPermissionGranted:Z

    .line 232
    invoke-direct {p0}, Lorg/opencv/android/CameraBridgeViewBase;->checkCurrentState()V

    .line 233
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public setCvCameraViewListener(Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListener2;)V
    .locals 0

    .line 280
    iput-object p1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mListener:Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListener2;

    return-void
.end method

.method public setCvCameraViewListener(Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListener;)V
    .locals 1

    .line 284
    new-instance v0, Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListenerAdapter;

    invoke-direct {v0, p0, p1}, Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListenerAdapter;-><init>(Lorg/opencv/android/CameraBridgeViewBase;Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListener;)V

    .line 285
    iget p1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mPreviewFormat:I

    invoke-virtual {v0, p1}, Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListenerAdapter;->setFrameFormat(I)V

    .line 286
    iput-object v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mListener:Lorg/opencv/android/CameraBridgeViewBase$CvCameraViewListener2;

    return-void
.end method

.method public setMaxFrameSize(II)V
    .locals 0

    .line 299
    iput p1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mMaxWidth:I

    .line 300
    iput p2, p0, Lorg/opencv/android/CameraBridgeViewBase;->mMaxHeight:I

    return-void
.end method

.method public surfaceChanged(Landroid/view/SurfaceHolder;III)V
    .locals 0

    .line 195
    const-string p1, "CameraBridge"

    const-string p2, "call surfaceChanged event"

    invoke-static {p1, p2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 196
    iget-object p1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mSyncObject:Ljava/lang/Object;

    monitor-enter p1

    .line 197
    :try_start_0
    iget-boolean p2, p0, Lorg/opencv/android/CameraBridgeViewBase;->mSurfaceExist:Z

    const/4 p3, 0x1

    if-nez p2, :cond_0

    .line 198
    iput-boolean p3, p0, Lorg/opencv/android/CameraBridgeViewBase;->mSurfaceExist:Z

    .line 199
    invoke-direct {p0}, Lorg/opencv/android/CameraBridgeViewBase;->checkCurrentState()V

    goto :goto_0

    :cond_0
    const/4 p2, 0x0

    .line 203
    iput-boolean p2, p0, Lorg/opencv/android/CameraBridgeViewBase;->mSurfaceExist:Z

    .line 204
    invoke-direct {p0}, Lorg/opencv/android/CameraBridgeViewBase;->checkCurrentState()V

    .line 206
    iput-boolean p3, p0, Lorg/opencv/android/CameraBridgeViewBase;->mSurfaceExist:Z

    .line 207
    invoke-direct {p0}, Lorg/opencv/android/CameraBridgeViewBase;->checkCurrentState()V

    .line 209
    :goto_0
    monitor-exit p1

    return-void

    :catchall_0
    move-exception p2

    monitor-exit p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p2
.end method

.method public surfaceCreated(Landroid/view/SurfaceHolder;)V
    .locals 0

    return-void
.end method

.method public surfaceDestroyed(Landroid/view/SurfaceHolder;)V
    .locals 1

    .line 217
    iget-object p1, p0, Lorg/opencv/android/CameraBridgeViewBase;->mSyncObject:Ljava/lang/Object;

    monitor-enter p1

    const/4 v0, 0x0

    .line 218
    :try_start_0
    iput-boolean v0, p0, Lorg/opencv/android/CameraBridgeViewBase;->mSurfaceExist:Z

    .line 219
    invoke-direct {p0}, Lorg/opencv/android/CameraBridgeViewBase;->checkCurrentState()V

    .line 220
    monitor-exit p1

    return-void

    :catchall_0
    move-exception v0

    monitor-exit p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v0
.end method
