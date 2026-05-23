.class public Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer;
.super Ljava/lang/Object;
.source "WisdomGardenScanningAnalyzer.java"

# interfaces
.implements Lcom/king/camera/scan/analyze/Analyzer;


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer$QRCodeAnalyzeResult;
    }
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Lcom/king/camera/scan/analyze/Analyzer<",
        "Ljava/util/List<",
        "Ljava/lang/String;",
        ">;>;"
    }
.end annotation


# static fields
.field private static final ROTATION_180:I = 0xb4

.field private static final ROTATION_270:I = 0x10e

.field private static final ROTATION_90:I = 0x5a


# instance fields
.field private final isOutputVertices:Z

.field private final joinQueue:Ljava/util/concurrent/atomic/AtomicBoolean;

.field private final queue:Ljava/util/Queue;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Queue<",
            "[B>;"
        }
    .end annotation
.end field


# direct methods
.method public constructor <init>()V
    .locals 1

    const/4 v0, 0x0

    .line 49
    invoke-direct {p0, v0}, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer;-><init>(Z)V

    return-void
.end method

.method public constructor <init>(Z)V
    .locals 2

    .line 57
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 39
    new-instance v0, Ljava/util/concurrent/ConcurrentLinkedQueue;

    invoke-direct {v0}, Ljava/util/concurrent/ConcurrentLinkedQueue;-><init>()V

    iput-object v0, p0, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer;->queue:Ljava/util/Queue;

    .line 41
    new-instance v0, Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x0

    invoke-direct {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;-><init>(Z)V

    iput-object v0, p0, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer;->joinQueue:Ljava/util/concurrent/atomic/AtomicBoolean;

    .line 58
    iput-boolean p1, p0, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer;->isOutputVertices:Z

    return-void
.end method

.method private detectAndDecode([BLcom/king/camera/scan/FrameMetadata;)Lcom/king/camera/scan/AnalyzeResult;
    .locals 8
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "([B",
            "Lcom/king/camera/scan/FrameMetadata;",
            ")",
            "Lcom/king/camera/scan/AnalyzeResult<",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;>;"
        }
    .end annotation

    .line 103
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-virtual {p2}, Lcom/king/camera/scan/FrameMetadata;->getHeight()I

    move-result v1

    invoke-virtual {p2}, Lcom/king/camera/scan/FrameMetadata;->getHeight()I

    move-result v2

    div-int/lit8 v2, v2, 0x2

    add-int/2addr v1, v2

    invoke-virtual {p2}, Lcom/king/camera/scan/FrameMetadata;->getWidth()I

    move-result v2

    sget v3, Lorg/opencv/core/CvType;->CV_8UC1:I

    invoke-direct {v0, v1, v2, v3}, Lorg/opencv/core/Mat;-><init>(III)V

    const/4 v1, 0x0

    .line 104
    invoke-virtual {v0, v1, v1, p1}, Lorg/opencv/core/Mat;->put(II[B)I

    .line 105
    new-instance v1, Lorg/opencv/core/Mat;

    invoke-direct {v1}, Lorg/opencv/core/Mat;-><init>()V

    const/16 v2, 0x5d

    .line 106
    invoke-static {v0, v1, v2}, Lorg/opencv/imgproc/Imgproc;->cvtColor(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;I)V

    .line 107
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    .line 108
    invoke-virtual {p2}, Lcom/king/camera/scan/FrameMetadata;->getRotation()I

    move-result v0

    invoke-direct {p0, v1, v0}, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer;->rotation(Lorg/opencv/core/Mat;I)V

    .line 109
    iget-boolean v0, p0, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer;->isOutputVertices:Z

    if-eqz v0, :cond_0

    .line 111
    new-instance v7, Ljava/util/ArrayList;

    invoke-direct {v7}, Ljava/util/ArrayList;-><init>()V

    .line 112
    invoke-static {v1, v7}, Lcom/wisdomgarden/qrcode/WisdomGardenQRCodeDetector;->detectAndDecode(Lorg/opencv/core/Mat;Ljava/util/List;)Ljava/util/List;

    move-result-object v6

    .line 113
    invoke-virtual {v1}, Lorg/opencv/core/Mat;->release()V

    if-eqz v6, :cond_1

    .line 114
    invoke-interface {v6}, Ljava/util/List;->isEmpty()Z

    move-result v0

    if-nez v0, :cond_1

    .line 115
    new-instance v0, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer$QRCodeAnalyzeResult;

    const/16 v4, 0x11

    move-object v2, v0

    move-object v3, p1

    move-object v5, p2

    invoke-direct/range {v2 .. v7}, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer$QRCodeAnalyzeResult;-><init>([BILcom/king/camera/scan/FrameMetadata;Ljava/lang/Object;Ljava/util/List;)V

    return-object v0

    .line 119
    :cond_0
    invoke-static {v1}, Lcom/wisdomgarden/qrcode/WisdomGardenQRCodeDetector;->detectAndDecode(Lorg/opencv/core/Mat;)Ljava/util/List;

    move-result-object v0

    .line 120
    invoke-virtual {v1}, Lorg/opencv/core/Mat;->release()V

    if-eqz v0, :cond_1

    .line 121
    invoke-interface {v0}, Ljava/util/List;->isEmpty()Z

    move-result v1

    if-nez v1, :cond_1

    .line 122
    new-instance v1, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer$QRCodeAnalyzeResult;

    const/16 v2, 0x11

    invoke-direct {v1, p1, v2, p2, v0}, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer$QRCodeAnalyzeResult;-><init>([BILcom/king/camera/scan/FrameMetadata;Ljava/lang/Object;)V

    return-object v1

    :cond_1
    const/4 p1, 0x0

    return-object p1
.end method

.method private rotation(Lorg/opencv/core/Mat;I)V
    .locals 3

    const/16 v0, 0x5a

    const/4 v1, 0x1

    if-ne p2, v0, :cond_0

    .line 138
    invoke-static {p1, p1}, Lorg/opencv/core/Core;->transpose(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)V

    .line 140
    invoke-static {p1, p1, v1}, Lorg/opencv/core/Core;->flip(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;I)V

    goto :goto_0

    :cond_0
    const/16 v0, 0xb4

    const/4 v2, 0x0

    if-ne p2, v0, :cond_1

    .line 143
    invoke-static {p1, p1, v2}, Lorg/opencv/core/Core;->flip(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;I)V

    .line 145
    invoke-static {p1, p1, v1}, Lorg/opencv/core/Core;->flip(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;I)V

    goto :goto_0

    :cond_1
    const/16 v0, 0x10e

    if-ne p2, v0, :cond_2

    .line 148
    invoke-static {p1, p1}, Lorg/opencv/core/Core;->transpose(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;)V

    .line 150
    invoke-static {p1, p1, v2}, Lorg/opencv/core/Core;->flip(Lorg/opencv/core/Mat;Lorg/opencv/core/Mat;I)V

    :cond_2
    :goto_0
    return-void
.end method


# virtual methods
.method public analyze(Landroidx/camera/core/ImageProxy;Lcom/king/camera/scan/analyze/Analyzer$OnAnalyzeListener;)V
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/ImageProxy;",
            "Lcom/king/camera/scan/analyze/Analyzer$OnAnalyzeListener<",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;>;)V"
        }
    .end annotation

    .line 63
    iget-object v0, p0, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer;->joinQueue:Ljava/util/concurrent/atomic/AtomicBoolean;

    invoke-virtual {v0}, Ljava/util/concurrent/atomic/AtomicBoolean;->get()Z

    move-result v0

    if-nez v0, :cond_0

    .line 64
    invoke-interface {p1}, Landroidx/camera/core/ImageProxy;->getWidth()I

    move-result v0

    invoke-interface {p1}, Landroidx/camera/core/ImageProxy;->getHeight()I

    move-result v1

    mul-int/2addr v0, v1

    .line 65
    div-int/lit8 v1, v0, 0x4

    mul-int/lit8 v1, v1, 0x2

    add-int/2addr v0, v1

    new-array v0, v0, [B

    .line 66
    iget-object v1, p0, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer;->queue:Ljava/util/Queue;

    invoke-interface {v1, v0}, Ljava/util/Queue;->add(Ljava/lang/Object;)Z

    .line 67
    iget-object v0, p0, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer;->joinQueue:Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x1

    invoke-virtual {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;->set(Z)V

    .line 70
    :cond_0
    iget-object v0, p0, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer;->queue:Ljava/util/Queue;

    invoke-interface {v0}, Ljava/util/Queue;->poll()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [B

    if-nez v0, :cond_1

    return-void

    :cond_1
    const/4 v1, 0x0

    .line 76
    :try_start_0
    invoke-static {p1, v0}, Lcom/king/camera/scan/util/ImageUtils;->yuv_420_888toNv21(Landroidx/camera/core/ImageProxy;[B)V

    .line 77
    new-instance v2, Lcom/king/camera/scan/FrameMetadata;

    .line 78
    invoke-interface {p1}, Landroidx/camera/core/ImageProxy;->getWidth()I

    move-result v3

    .line 79
    invoke-interface {p1}, Landroidx/camera/core/ImageProxy;->getHeight()I

    move-result v4

    .line 80
    invoke-interface {p1}, Landroidx/camera/core/ImageProxy;->getImageInfo()Landroidx/camera/core/ImageInfo;

    move-result-object p1

    invoke-interface {p1}, Landroidx/camera/core/ImageInfo;->getRotationDegrees()I

    move-result p1

    invoke-direct {v2, v3, v4, p1}, Lcom/king/camera/scan/FrameMetadata;-><init>(III)V

    .line 81
    invoke-direct {p0, v0, v2}, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer;->detectAndDecode([BLcom/king/camera/scan/FrameMetadata;)Lcom/king/camera/scan/AnalyzeResult;

    move-result-object p1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 83
    invoke-static {p1}, Lcom/king/logx/LogX;->w(Ljava/lang/Throwable;)V

    move-object p1, v1

    :goto_0
    if-eqz p1, :cond_2

    .line 86
    iget-object v0, p0, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer;->joinQueue:Ljava/util/concurrent/atomic/AtomicBoolean;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Ljava/util/concurrent/atomic/AtomicBoolean;->set(Z)V

    .line 87
    invoke-interface {p2, p1}, Lcom/king/camera/scan/analyze/Analyzer$OnAnalyzeListener;->onSuccess(Lcom/king/camera/scan/AnalyzeResult;)V

    goto :goto_1

    .line 89
    :cond_2
    iget-object p1, p0, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer;->queue:Ljava/util/Queue;

    invoke-interface {p1, v0}, Ljava/util/Queue;->add(Ljava/lang/Object;)Z

    .line 90
    invoke-interface {p2, v1}, Lcom/king/camera/scan/analyze/Analyzer$OnAnalyzeListener;->onFailure(Ljava/lang/Exception;)V

    :goto_1
    return-void
.end method
