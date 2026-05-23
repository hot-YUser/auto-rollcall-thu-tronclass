.class public Lorg/opencv/android/FpsMeter;
.super Ljava/lang/Object;
.source "FpsMeter.java"


# static fields
.field private static final FPS_FORMAT:Ljava/text/DecimalFormat;

.field private static final STEP:I = 0x14

.field private static final TAG:Ljava/lang/String; = "FpsMeter"


# instance fields
.field private mFramesCounter:I

.field private mFrequency:D

.field mHeight:I

.field mIsInitialized:Z

.field mPaint:Landroid/graphics/Paint;

.field private mStrfps:Ljava/lang/String;

.field mWidth:I

.field private mprevFrameTime:J


# direct methods
.method static constructor <clinit>()V
    .locals 2

    .line 15
    new-instance v0, Ljava/text/DecimalFormat;

    const-string v1, "0.00"

    invoke-direct {v0, v1}, Ljava/text/DecimalFormat;-><init>(Ljava/lang/String;)V

    sput-object v0, Lorg/opencv/android/FpsMeter;->FPS_FORMAT:Ljava/text/DecimalFormat;

    return-void
.end method

.method public constructor <init>()V
    .locals 1

    .line 12
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 22
    iput-boolean v0, p0, Lorg/opencv/android/FpsMeter;->mIsInitialized:Z

    .line 23
    iput v0, p0, Lorg/opencv/android/FpsMeter;->mWidth:I

    .line 24
    iput v0, p0, Lorg/opencv/android/FpsMeter;->mHeight:I

    return-void
.end method


# virtual methods
.method public draw(Landroid/graphics/Canvas;FF)V
    .locals 2

    .line 63
    const-string v0, "FpsMeter"

    iget-object v1, p0, Lorg/opencv/android/FpsMeter;->mStrfps:Ljava/lang/String;

    invoke-static {v0, v1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 64
    iget-object v0, p0, Lorg/opencv/android/FpsMeter;->mStrfps:Ljava/lang/String;

    iget-object v1, p0, Lorg/opencv/android/FpsMeter;->mPaint:Landroid/graphics/Paint;

    invoke-virtual {p1, v0, p2, p3, v1}, Landroid/graphics/Canvas;->drawText(Ljava/lang/String;FFLandroid/graphics/Paint;)V

    return-void
.end method

.method public init()V
    .locals 2

    const/4 v0, 0x0

    .line 27
    iput v0, p0, Lorg/opencv/android/FpsMeter;->mFramesCounter:I

    .line 28
    invoke-static {}, Lorg/opencv/core/Core;->getTickFrequency()D

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/android/FpsMeter;->mFrequency:D

    .line 29
    invoke-static {}, Lorg/opencv/core/Core;->getTickCount()J

    move-result-wide v0

    iput-wide v0, p0, Lorg/opencv/android/FpsMeter;->mprevFrameTime:J

    .line 30
    const-string v0, ""

    iput-object v0, p0, Lorg/opencv/android/FpsMeter;->mStrfps:Ljava/lang/String;

    .line 32
    new-instance v0, Landroid/graphics/Paint;

    invoke-direct {v0}, Landroid/graphics/Paint;-><init>()V

    iput-object v0, p0, Lorg/opencv/android/FpsMeter;->mPaint:Landroid/graphics/Paint;

    const v1, -0xffff01

    .line 33
    invoke-virtual {v0, v1}, Landroid/graphics/Paint;->setColor(I)V

    .line 34
    iget-object v0, p0, Lorg/opencv/android/FpsMeter;->mPaint:Landroid/graphics/Paint;

    const/high16 v1, 0x41a00000    # 20.0f

    invoke-virtual {v0, v1}, Landroid/graphics/Paint;->setTextSize(F)V

    return-void
.end method

.method public measure()V
    .locals 6

    .line 38
    iget-boolean v0, p0, Lorg/opencv/android/FpsMeter;->mIsInitialized:Z

    const/4 v1, 0x1

    if-nez v0, :cond_0

    .line 39
    invoke-virtual {p0}, Lorg/opencv/android/FpsMeter;->init()V

    .line 40
    iput-boolean v1, p0, Lorg/opencv/android/FpsMeter;->mIsInitialized:Z

    goto/16 :goto_1

    .line 42
    :cond_0
    iget v0, p0, Lorg/opencv/android/FpsMeter;->mFramesCounter:I

    add-int/2addr v0, v1

    iput v0, p0, Lorg/opencv/android/FpsMeter;->mFramesCounter:I

    .line 43
    rem-int/lit8 v0, v0, 0x14

    if-nez v0, :cond_2

    .line 44
    invoke-static {}, Lorg/opencv/core/Core;->getTickCount()J

    move-result-wide v0

    const-wide/high16 v2, 0x4034000000000000L    # 20.0

    .line 45
    iget-wide v4, p0, Lorg/opencv/android/FpsMeter;->mFrequency:D

    mul-double/2addr v4, v2

    iget-wide v2, p0, Lorg/opencv/android/FpsMeter;->mprevFrameTime:J

    sub-long v2, v0, v2

    long-to-double v2, v2

    div-double/2addr v4, v2

    .line 46
    iput-wide v0, p0, Lorg/opencv/android/FpsMeter;->mprevFrameTime:J

    .line 47
    iget v0, p0, Lorg/opencv/android/FpsMeter;->mWidth:I

    if-eqz v0, :cond_1

    iget v0, p0, Lorg/opencv/android/FpsMeter;->mHeight:I

    if-eqz v0, :cond_1

    .line 48
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    sget-object v1, Lorg/opencv/android/FpsMeter;->FPS_FORMAT:Ljava/text/DecimalFormat;

    invoke-virtual {v1, v4, v5}, Ljava/text/DecimalFormat;->format(D)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " FPS@"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lorg/opencv/android/FpsMeter;->mWidth:I

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "x"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lorg/opencv/android/FpsMeter;->mHeight:I

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/opencv/android/FpsMeter;->mStrfps:Ljava/lang/String;

    goto :goto_0

    .line 50
    :cond_1
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    sget-object v1, Lorg/opencv/android/FpsMeter;->FPS_FORMAT:Ljava/text/DecimalFormat;

    invoke-virtual {v1, v4, v5}, Ljava/text/DecimalFormat;->format(D)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " FPS"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lorg/opencv/android/FpsMeter;->mStrfps:Ljava/lang/String;

    .line 51
    :goto_0
    const-string v0, "FpsMeter"

    iget-object v1, p0, Lorg/opencv/android/FpsMeter;->mStrfps:Ljava/lang/String;

    invoke-static {v0, v1}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    :cond_2
    :goto_1
    return-void
.end method

.method public setResolution(II)V
    .locals 2

    .line 57
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "FpsMeter.setResolution "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget v1, p0, Lorg/opencv/android/FpsMeter;->mWidth:I

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "x"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lorg/opencv/android/FpsMeter;->mHeight:I

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    const-string v1, "FpsMeter"

    invoke-static {v1, v0}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 58
    iput p1, p0, Lorg/opencv/android/FpsMeter;->mWidth:I

    .line 59
    iput p2, p0, Lorg/opencv/android/FpsMeter;->mHeight:I

    return-void
.end method
