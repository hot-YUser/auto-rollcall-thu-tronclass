.class public abstract Lcom/wisdomgarden/qrcode/scanning/WisdomGardenCameraScanFragment;
.super Lcom/king/camera/scan/BaseCameraScanFragment;
.source "WisdomGardenCameraScanFragment.java"


# annotations
.annotation system Ldalvik/annotation/Signature;
    value = {
        "Lcom/king/camera/scan/BaseCameraScanFragment<",
        "Ljava/util/List<",
        "Ljava/lang/String;",
        ">;>;"
    }
.end annotation


# instance fields
.field protected viewfinderView:Lcom/king/view/viewfinderview/ViewfinderView;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 23
    invoke-direct {p0}, Lcom/king/camera/scan/BaseCameraScanFragment;-><init>()V

    return-void
.end method


# virtual methods
.method public createAnalyzer()Lcom/king/camera/scan/analyze/Analyzer;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/king/camera/scan/analyze/Analyzer<",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;>;"
        }
    .end annotation

    .line 38
    new-instance v0, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer;

    invoke-direct {v0}, Lcom/wisdomgarden/qrcode/scanning/analyze/WisdomGardenScanningAnalyzer;-><init>()V

    return-object v0
.end method

.method public getLayoutId()I
    .locals 1

    .line 48
    sget v0, Lcom/wisdomgarden/qrcode/scanning/R$layout;->wisdomgarden_camera_scan:I

    return v0
.end method

.method public getViewfinderViewId()I
    .locals 1

    .line 58
    sget v0, Lcom/wisdomgarden/qrcode/scanning/R$id;->viewfinderView:I

    return v0
.end method

.method public initUI()V
    .locals 2

    .line 28
    invoke-virtual {p0}, Lcom/wisdomgarden/qrcode/scanning/WisdomGardenCameraScanFragment;->getViewfinderViewId()I

    move-result v0

    const/4 v1, -0x1

    if-eq v0, v1, :cond_0

    if-eqz v0, :cond_0

    .line 30
    invoke-virtual {p0}, Lcom/wisdomgarden/qrcode/scanning/WisdomGardenCameraScanFragment;->getRootView()Landroid/view/View;

    move-result-object v1

    invoke-virtual {v1, v0}, Landroid/view/View;->findViewById(I)Landroid/view/View;

    move-result-object v0

    check-cast v0, Lcom/king/view/viewfinderview/ViewfinderView;

    iput-object v0, p0, Lcom/wisdomgarden/qrcode/scanning/WisdomGardenCameraScanFragment;->viewfinderView:Lcom/king/view/viewfinderview/ViewfinderView;

    .line 32
    :cond_0
    invoke-super {p0}, Lcom/king/camera/scan/BaseCameraScanFragment;->initUI()V

    return-void
.end method
