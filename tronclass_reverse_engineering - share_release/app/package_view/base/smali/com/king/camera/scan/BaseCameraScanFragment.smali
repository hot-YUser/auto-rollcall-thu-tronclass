.class public abstract Lcom/king/camera/scan/BaseCameraScanFragment;
.super Landroidx/fragment/app/Fragment;
.source "BaseCameraScanFragment.java"

# interfaces
.implements Lcom/king/camera/scan/CameraScan$OnScanResultCallback;


# annotations
.annotation system Ldalvik/annotation/Signature;
    value = {
        "<T:",
        "Ljava/lang/Object;",
        ">",
        "Landroidx/fragment/app/Fragment;",
        "Lcom/king/camera/scan/CameraScan$OnScanResultCallback<",
        "TT;>;"
    }
.end annotation


# static fields
.field private static final CAMERA_PERMISSION_REQUEST_CODE:I = 0x86


# instance fields
.field protected ivFlashlight:Landroid/view/View;

.field private mCameraScan:Lcom/king/camera/scan/CameraScan;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lcom/king/camera/scan/CameraScan<",
            "TT;>;"
        }
    .end annotation
.end field

.field private mRootView:Landroid/view/View;

.field protected previewView:Landroidx/camera/view/PreviewView;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 51
    invoke-direct {p0}, Landroidx/fragment/app/Fragment;-><init>()V

    return-void
.end method

.method private releaseCamera()V
    .locals 1

    .line 153
    iget-object v0, p0, Lcom/king/camera/scan/BaseCameraScanFragment;->mCameraScan:Lcom/king/camera/scan/CameraScan;

    if-eqz v0, :cond_0

    .line 154
    invoke-virtual {v0}, Lcom/king/camera/scan/CameraScan;->release()V

    :cond_0
    return-void
.end method


# virtual methods
.method public abstract createAnalyzer()Lcom/king/camera/scan/analyze/Analyzer;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/king/camera/scan/analyze/Analyzer<",
            "TT;>;"
        }
    .end annotation
.end method

.method public createCameraScan(Landroidx/camera/view/PreviewView;)Lcom/king/camera/scan/CameraScan;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/view/PreviewView;",
            ")",
            "Lcom/king/camera/scan/CameraScan<",
            "TT;>;"
        }
    .end annotation

    .line 260
    new-instance v0, Lcom/king/camera/scan/BaseCameraScan;

    invoke-direct {v0, p0, p1}, Lcom/king/camera/scan/BaseCameraScan;-><init>(Landroidx/fragment/app/Fragment;Landroidx/camera/view/PreviewView;)V

    return-object v0
.end method

.method public createRootView(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;)Landroid/view/View;
    .locals 2

    .line 204
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanFragment;->getLayoutId()I

    move-result v0

    const/4 v1, 0x0

    invoke-virtual {p1, v0, p2, v1}, Landroid/view/LayoutInflater;->inflate(ILandroid/view/ViewGroup;Z)Landroid/view/View;

    move-result-object p1

    return-object p1
.end method

.method public getCameraScan()Lcom/king/camera/scan/CameraScan;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/king/camera/scan/CameraScan<",
            "TT;>;"
        }
    .end annotation

    .line 240
    iget-object v0, p0, Lcom/king/camera/scan/BaseCameraScanFragment;->mCameraScan:Lcom/king/camera/scan/CameraScan;

    return-object v0
.end method

.method public getFlashlightId()I
    .locals 1

    .line 231
    sget v0, Lcom/king/camera/scan/R$id;->ivFlashlight:I

    return v0
.end method

.method public getLayoutId()I
    .locals 1

    .line 213
    sget v0, Lcom/king/camera/scan/R$layout;->camera_scan:I

    return v0
.end method

.method public getPreviewViewId()I
    .locals 1

    .line 222
    sget v0, Lcom/king/camera/scan/R$id;->previewView:I

    return v0
.end method

.method public getRootView()Landroid/view/View;
    .locals 1

    .line 249
    iget-object v0, p0, Lcom/king/camera/scan/BaseCameraScanFragment;->mRootView:Landroid/view/View;

    return-object v0
.end method

.method public initCameraScan(Lcom/king/camera/scan/CameraScan;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/king/camera/scan/CameraScan<",
            "TT;>;)V"
        }
    .end annotation

    .line 110
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanFragment;->createAnalyzer()Lcom/king/camera/scan/analyze/Analyzer;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/king/camera/scan/CameraScan;->setAnalyzer(Lcom/king/camera/scan/analyze/Analyzer;)Lcom/king/camera/scan/CameraScan;

    move-result-object p1

    iget-object v0, p0, Lcom/king/camera/scan/BaseCameraScanFragment;->ivFlashlight:Landroid/view/View;

    .line 111
    invoke-virtual {p1, v0}, Lcom/king/camera/scan/CameraScan;->bindFlashlightView(Landroid/view/View;)Lcom/king/camera/scan/CameraScan;

    move-result-object p1

    .line 112
    invoke-virtual {p1, p0}, Lcom/king/camera/scan/CameraScan;->setOnScanResultCallback(Lcom/king/camera/scan/CameraScan$OnScanResultCallback;)Lcom/king/camera/scan/CameraScan;

    return-void
.end method

.method public initUI()V
    .locals 2

    .line 93
    iget-object v0, p0, Lcom/king/camera/scan/BaseCameraScanFragment;->mRootView:Landroid/view/View;

    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanFragment;->getPreviewViewId()I

    move-result v1

    invoke-virtual {v0, v1}, Landroid/view/View;->findViewById(I)Landroid/view/View;

    move-result-object v0

    check-cast v0, Landroidx/camera/view/PreviewView;

    iput-object v0, p0, Lcom/king/camera/scan/BaseCameraScanFragment;->previewView:Landroidx/camera/view/PreviewView;

    .line 94
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanFragment;->getFlashlightId()I

    move-result v0

    const/4 v1, -0x1

    if-eq v0, v1, :cond_0

    if-eqz v0, :cond_0

    .line 96
    iget-object v1, p0, Lcom/king/camera/scan/BaseCameraScanFragment;->mRootView:Landroid/view/View;

    invoke-virtual {v1, v0}, Landroid/view/View;->findViewById(I)Landroid/view/View;

    move-result-object v0

    iput-object v0, p0, Lcom/king/camera/scan/BaseCameraScanFragment;->ivFlashlight:Landroid/view/View;

    if-eqz v0, :cond_0

    .line 98
    new-instance v1, Lcom/king/camera/scan/BaseCameraScanFragment$$ExternalSyntheticLambda0;

    invoke-direct {v1, p0}, Lcom/king/camera/scan/BaseCameraScanFragment$$ExternalSyntheticLambda0;-><init>(Lcom/king/camera/scan/BaseCameraScanFragment;)V

    invoke-virtual {v0, v1}, Landroid/view/View;->setOnClickListener(Landroid/view/View$OnClickListener;)V

    .line 101
    :cond_0
    iget-object v0, p0, Lcom/king/camera/scan/BaseCameraScanFragment;->previewView:Landroidx/camera/view/PreviewView;

    invoke-virtual {p0, v0}, Lcom/king/camera/scan/BaseCameraScanFragment;->createCameraScan(Landroidx/camera/view/PreviewView;)Lcom/king/camera/scan/CameraScan;

    move-result-object v0

    iput-object v0, p0, Lcom/king/camera/scan/BaseCameraScanFragment;->mCameraScan:Lcom/king/camera/scan/CameraScan;

    .line 102
    invoke-virtual {p0, v0}, Lcom/king/camera/scan/BaseCameraScanFragment;->initCameraScan(Lcom/king/camera/scan/CameraScan;)V

    .line 103
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanFragment;->startCamera()V

    return-void
.end method

.method public isContentView()Z
    .locals 1

    const/4 v0, 0x1

    return v0
.end method

.method synthetic lambda$initUI$0$com-king-camera-scan-BaseCameraScanFragment(Landroid/view/View;)V
    .locals 0

    .line 98
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanFragment;->onClickFlashlight()V

    return-void
.end method

.method protected onClickFlashlight()V
    .locals 0

    .line 119
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanFragment;->toggleTorchState()V

    return-void
.end method

.method public onCreateView(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Landroid/os/Bundle;)Landroid/view/View;
    .locals 0

    .line 77
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanFragment;->isContentView()Z

    move-result p3

    if-eqz p3, :cond_0

    .line 78
    invoke-virtual {p0, p1, p2}, Lcom/king/camera/scan/BaseCameraScanFragment;->createRootView(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;)Landroid/view/View;

    move-result-object p1

    iput-object p1, p0, Lcom/king/camera/scan/BaseCameraScanFragment;->mRootView:Landroid/view/View;

    .line 80
    :cond_0
    iget-object p1, p0, Lcom/king/camera/scan/BaseCameraScanFragment;->mRootView:Landroid/view/View;

    return-object p1
.end method

.method public onDestroyView()V
    .locals 0

    .line 182
    invoke-direct {p0}, Lcom/king/camera/scan/BaseCameraScanFragment;->releaseCamera()V

    .line 183
    invoke-super {p0}, Landroidx/fragment/app/Fragment;->onDestroyView()V

    return-void
.end method

.method public onRequestPermissionsResult(I[Ljava/lang/String;[I)V
    .locals 1

    .line 160
    invoke-super {p0, p1, p2, p3}, Landroidx/fragment/app/Fragment;->onRequestPermissionsResult(I[Ljava/lang/String;[I)V

    const/16 v0, 0x86

    if-ne p1, v0, :cond_0

    .line 162
    invoke-virtual {p0, p2, p3}, Lcom/king/camera/scan/BaseCameraScanFragment;->requestCameraPermissionResult([Ljava/lang/String;[I)V

    :cond_0
    return-void
.end method

.method public onViewCreated(Landroid/view/View;Landroid/os/Bundle;)V
    .locals 0

    .line 85
    invoke-super {p0, p1, p2}, Landroidx/fragment/app/Fragment;->onViewCreated(Landroid/view/View;Landroid/os/Bundle;)V

    .line 86
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanFragment;->initUI()V

    return-void
.end method

.method public requestCameraPermissionResult([Ljava/lang/String;[I)V
    .locals 1

    .line 173
    const-string v0, "android.permission.CAMERA"

    invoke-static {v0, p1, p2}, Lcom/king/camera/scan/util/PermissionUtils;->requestPermissionsResult(Ljava/lang/String;[Ljava/lang/String;[I)Z

    move-result p1

    if-eqz p1, :cond_0

    .line 174
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanFragment;->startCamera()V

    goto :goto_0

    .line 176
    :cond_0
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanFragment;->requireActivity()Landroidx/fragment/app/FragmentActivity;

    move-result-object p1

    invoke-virtual {p1}, Landroidx/fragment/app/FragmentActivity;->finish()V

    :goto_0
    return-void
.end method

.method public startCamera()V
    .locals 3

    .line 139
    iget-object v0, p0, Lcom/king/camera/scan/BaseCameraScanFragment;->mCameraScan:Lcom/king/camera/scan/CameraScan;

    if-eqz v0, :cond_1

    .line 140
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanFragment;->requireContext()Landroid/content/Context;

    move-result-object v0

    const-string v1, "android.permission.CAMERA"

    invoke-static {v0, v1}, Lcom/king/camera/scan/util/PermissionUtils;->checkPermission(Landroid/content/Context;Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 141
    iget-object v0, p0, Lcom/king/camera/scan/BaseCameraScanFragment;->mCameraScan:Lcom/king/camera/scan/CameraScan;

    invoke-virtual {v0}, Lcom/king/camera/scan/CameraScan;->startCamera()V

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    .line 143
    new-array v0, v0, [Ljava/lang/Object;

    const-string v2, "checkPermissionResult != PERMISSION_GRANTED"

    invoke-static {v2, v0}, Lcom/king/logx/LogX;->d(Ljava/lang/String;[Ljava/lang/Object;)V

    const/16 v0, 0x86

    .line 144
    invoke-static {p0, v1, v0}, Lcom/king/camera/scan/util/PermissionUtils;->requestPermission(Landroidx/fragment/app/Fragment;Ljava/lang/String;I)V

    :cond_1
    :goto_0
    return-void
.end method

.method protected toggleTorchState()V
    .locals 3

    .line 126
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanFragment;->getCameraScan()Lcom/king/camera/scan/CameraScan;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 127
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanFragment;->getCameraScan()Lcom/king/camera/scan/CameraScan;

    move-result-object v0

    invoke-virtual {v0}, Lcom/king/camera/scan/CameraScan;->isTorchEnabled()Z

    move-result v0

    .line 128
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanFragment;->getCameraScan()Lcom/king/camera/scan/CameraScan;

    move-result-object v1

    xor-int/lit8 v2, v0, 0x1

    invoke-virtual {v1, v2}, Lcom/king/camera/scan/CameraScan;->enableTorch(Z)V

    .line 129
    iget-object v1, p0, Lcom/king/camera/scan/BaseCameraScanFragment;->ivFlashlight:Landroid/view/View;

    if-eqz v1, :cond_0

    xor-int/lit8 v0, v0, 0x1

    .line 130
    invoke-virtual {v1, v0}, Landroid/view/View;->setSelected(Z)V

    :cond_0
    return-void
.end method
