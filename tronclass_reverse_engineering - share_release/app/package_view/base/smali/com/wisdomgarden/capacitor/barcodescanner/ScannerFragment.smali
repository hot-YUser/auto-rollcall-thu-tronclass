.class public Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;
.super Lcom/wisdomgarden/qrcode/scanning/WisdomGardenCameraScanFragment;
.source "ScannerFragment.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment$OnScanResultListener;
    }
.end annotation


# instance fields
.field private cameraScan:Lcom/king/camera/scan/CameraScan;

.field private scanResultListener:Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment$OnScanResultListener;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 9
    invoke-direct {p0}, Lcom/wisdomgarden/qrcode/scanning/WisdomGardenCameraScanFragment;-><init>()V

    return-void
.end method


# virtual methods
.method public initUI()V
    .locals 1

    .line 24
    invoke-super {p0}, Lcom/wisdomgarden/qrcode/scanning/WisdomGardenCameraScanFragment;->initUI()V

    .line 25
    invoke-virtual {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;->getCameraScan()Lcom/king/camera/scan/CameraScan;

    move-result-object v0

    iput-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;->cameraScan:Lcom/king/camera/scan/CameraScan;

    return-void
.end method

.method public onScanResultCallback(Lcom/king/camera/scan/AnalyzeResult;)V
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/king/camera/scan/AnalyzeResult<",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;>;)V"
        }
    .end annotation

    .line 30
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;->cameraScan:Lcom/king/camera/scan/CameraScan;

    const/4 v1, 0x0

    if-eqz v0, :cond_0

    .line 31
    invoke-virtual {v0, v1}, Lcom/king/camera/scan/CameraScan;->setAnalyzeImage(Z)Lcom/king/camera/scan/CameraScan;

    .line 33
    :cond_0
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;->scanResultListener:Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment$OnScanResultListener;

    if-eqz v0, :cond_2

    .line 34
    invoke-virtual {p1}, Lcom/king/camera/scan/AnalyzeResult;->getResult()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/util/List;

    invoke-interface {v0}, Ljava/util/List;->isEmpty()Z

    move-result v0

    if-nez v0, :cond_1

    .line 35
    invoke-virtual {p1}, Lcom/king/camera/scan/AnalyzeResult;->getResult()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/util/List;

    invoke-interface {p1, v1}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/lang/String;

    .line 36
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;->scanResultListener:Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment$OnScanResultListener;

    invoke-interface {v0, p1}, Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment$OnScanResultListener;->onScanResult(Ljava/lang/String;)V

    goto :goto_0

    .line 38
    :cond_1
    iget-object p1, p0, Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;->scanResultListener:Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment$OnScanResultListener;

    const/4 v0, 0x0

    invoke-interface {p1, v0}, Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment$OnScanResultListener;->onScanResult(Ljava/lang/String;)V

    :cond_2
    :goto_0
    return-void
.end method

.method public pauseScan()V
    .locals 2

    .line 44
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;->cameraScan:Lcom/king/camera/scan/CameraScan;

    if-eqz v0, :cond_0

    const/4 v1, 0x0

    .line 45
    invoke-virtual {v0, v1}, Lcom/king/camera/scan/CameraScan;->setAnalyzeImage(Z)Lcom/king/camera/scan/CameraScan;

    :cond_0
    return-void
.end method

.method public resumeScan()V
    .locals 2

    .line 50
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;->cameraScan:Lcom/king/camera/scan/CameraScan;

    if-eqz v0, :cond_0

    const/4 v1, 0x1

    .line 51
    invoke-virtual {v0, v1}, Lcom/king/camera/scan/CameraScan;->setAnalyzeImage(Z)Lcom/king/camera/scan/CameraScan;

    :cond_0
    return-void
.end method

.method public setOnScanResultListener(Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment$OnScanResultListener;)V
    .locals 0

    .line 19
    iput-object p1, p0, Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;->scanResultListener:Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment$OnScanResultListener;

    return-void
.end method
