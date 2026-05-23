.class public Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer$QRCodeAnalyzeResult;
.super Lcom/king/camera/scan/AnalyzeResult;
.source "WisdomGardenScanningAnalyzer.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "QRCodeAnalyzeResult"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "<T:",
        "Ljava/lang/Object;",
        ">",
        "Lcom/king/camera/scan/AnalyzeResult<",
        "TT;>;"
    }
.end annotation


# instance fields
.field private points:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method public constructor <init>([BILcom/king/camera/scan/FrameMetadata;Ljava/lang/Object;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "([BI",
            "Lcom/king/camera/scan/FrameMetadata;",
            "TT;)V"
        }
    .end annotation

    .line 167
    invoke-direct {p0, p1, p2, p3, p4}, Lcom/king/camera/scan/AnalyzeResult;-><init>([BILcom/king/camera/scan/FrameMetadata;Ljava/lang/Object;)V

    return-void
.end method

.method public constructor <init>([BILcom/king/camera/scan/FrameMetadata;Ljava/lang/Object;Ljava/util/List;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "([BI",
            "Lcom/king/camera/scan/FrameMetadata;",
            "TT;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)V"
        }
    .end annotation

    .line 171
    invoke-direct {p0, p1, p2, p3, p4}, Lcom/king/camera/scan/AnalyzeResult;-><init>([BILcom/king/camera/scan/FrameMetadata;Ljava/lang/Object;)V

    .line 172
    iput-object p5, p0, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer$QRCodeAnalyzeResult;->points:Ljava/util/List;

    return-void
.end method


# virtual methods
.method public getPoints()Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;"
        }
    .end annotation

    .line 182
    iget-object v0, p0, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer$QRCodeAnalyzeResult;->points:Ljava/util/List;

    return-object v0
.end method
