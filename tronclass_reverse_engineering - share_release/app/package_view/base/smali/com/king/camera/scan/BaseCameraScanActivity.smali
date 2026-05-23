.class public abstract Lcom/king/camera/scan/BaseCameraScanActivity;
.super Landroidx/appcompat/app/AppCompatActivity;
.source "BaseCameraScanActivity.java"

# interfaces
.implements Lcom/king/camera/scan/CameraScan$OnScanResultCallback;


# annotations
.annotation system Ldalvik/annotation/Signature;
    value = {
        "<T:",
        "Ljava/lang/Object;",
        ">",
        "Landroidx/appcompat/app/AppCompatActivity;",
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

.field protected previewView:Landroidx/camera/view/PreviewView;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 47
    invoke-direct {p0}, Landroidx/appcompat/app/AppCompatActivity;-><init>()V

    return-void
.end method

.method private releaseCamera()V
    .locals 1

    .line 139
    iget-object v0, p0, Lcom/king/camera/scan/BaseCameraScanActivity;->mCameraScan:Lcom/king/camera/scan/CameraScan;

    if-eqz v0, :cond_0

    .line 140
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

    .line 226
    new-instance v0, Lcom/king/camera/scan/BaseCameraScan;

    invoke-direct {v0, p0, p1}, Lcom/king/camera/scan/BaseCameraScan;-><init>(Landroidx/core/app/ComponentActivity;Landroidx/camera/view/PreviewView;)V

    return-object v0
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

    .line 214
    iget-object v0, p0, Lcom/king/camera/scan/BaseCameraScanActivity;->mCameraScan:Lcom/king/camera/scan/CameraScan;

    return-object v0
.end method

.method public getFlashlightId()I
    .locals 1

    .line 205
    sget v0, Lcom/king/camera/scan/R$id;->ivFlashlight:I

    return v0
.end method

.method public getLayoutId()I
    .locals 1

    .line 187
    sget v0, Lcom/king/camera/scan/R$layout;->camera_scan:I

    return v0
.end method

.method public getPreviewViewId()I
    .locals 1

    .line 196
    sget v0, Lcom/king/camera/scan/R$id;->previewView:I

    return v0
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

    .line 96
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanActivity;->createAnalyzer()Lcom/king/camera/scan/analyze/Analyzer;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/king/camera/scan/CameraScan;->setAnalyzer(Lcom/king/camera/scan/analyze/Analyzer;)Lcom/king/camera/scan/CameraScan;

    move-result-object p1

    iget-object v0, p0, Lcom/king/camera/scan/BaseCameraScanActivity;->ivFlashlight:Landroid/view/View;

    .line 97
    invoke-virtual {p1, v0}, Lcom/king/camera/scan/CameraScan;->bindFlashlightView(Landroid/view/View;)Lcom/king/camera/scan/CameraScan;

    move-result-object p1

    .line 98
    invoke-virtual {p1, p0}, Lcom/king/camera/scan/CameraScan;->setOnScanResultCallback(Lcom/king/camera/scan/CameraScan$OnScanResultCallback;)Lcom/king/camera/scan/CameraScan;

    return-void
.end method

.method public initUI()V
    .locals 2

    .line 79
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanActivity;->getPreviewViewId()I

    move-result v0

    invoke-virtual {p0, v0}, Lcom/king/camera/scan/BaseCameraScanActivity;->findViewById(I)Landroid/view/View;

    move-result-object v0

    check-cast v0, Landroidx/camera/view/PreviewView;

    iput-object v0, p0, Lcom/king/camera/scan/BaseCameraScanActivity;->previewView:Landroidx/camera/view/PreviewView;

    .line 80
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanActivity;->getFlashlightId()I

    move-result v0

    const/4 v1, -0x1

    if-eq v0, v1, :cond_0

    if-eqz v0, :cond_0

    .line 82
    invoke-virtual {p0, v0}, Lcom/king/camera/scan/BaseCameraScanActivity;->findViewById(I)Landroid/view/View;

    move-result-object v0

    iput-object v0, p0, Lcom/king/camera/scan/BaseCameraScanActivity;->ivFlashlight:Landroid/view/View;

    if-eqz v0, :cond_0

    .line 84
    new-instance v1, Lcom/king/camera/scan/BaseCameraScanActivity$$ExternalSyntheticLambda0;

    invoke-direct {v1, p0}, Lcom/king/camera/scan/BaseCameraScanActivity$$ExternalSyntheticLambda0;-><init>(Lcom/king/camera/scan/BaseCameraScanActivity;)V

    invoke-virtual {v0, v1}, Landroid/view/View;->setOnClickListener(Landroid/view/View$OnClickListener;)V

    .line 87
    :cond_0
    iget-object v0, p0, Lcom/king/camera/scan/BaseCameraScanActivity;->previewView:Landroidx/camera/view/PreviewView;

    invoke-virtual {p0, v0}, Lcom/king/camera/scan/BaseCameraScanActivity;->createCameraScan(Landroidx/camera/view/PreviewView;)Lcom/king/camera/scan/CameraScan;

    move-result-object v0

    iput-object v0, p0, Lcom/king/camera/scan/BaseCameraScanActivity;->mCameraScan:Lcom/king/camera/scan/CameraScan;

    .line 88
    invoke-virtual {p0, v0}, Lcom/king/camera/scan/BaseCameraScanActivity;->initCameraScan(Lcom/king/camera/scan/CameraScan;)V

    .line 89
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanActivity;->startCamera()V

    return-void
.end method

.method public isContentView()Z
    .locals 1

    const/4 v0, 0x1

    return v0
.end method

.method synthetic lambda$initUI$0$com-king-camera-scan-BaseCameraScanActivity(Landroid/view/View;)V
    .locals 0

    .line 84
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanActivity;->onClickFlashlight()V

    return-void
.end method

.method protected onClickFlashlight()V
    .locals 0

    .line 106
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanActivity;->toggleTorchState()V

    return-void
.end method

.method protected onCreate(Landroid/os/Bundle;)V
    .locals 0

    .line 68
    invoke-super {p0, p1}, Landroidx/appcompat/app/AppCompatActivity;->onCreate(Landroid/os/Bundle;)V

    .line 69
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanActivity;->isContentView()Z

    move-result p1

    if-eqz p1, :cond_0

    .line 70
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanActivity;->getLayoutId()I

    move-result p1

    invoke-virtual {p0, p1}, Lcom/king/camera/scan/BaseCameraScanActivity;->setContentView(I)V

    .line 72
    :cond_0
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanActivity;->initUI()V

    return-void
.end method

.method protected onDestroy()V
    .locals 0

    .line 168
    invoke-direct {p0}, Lcom/king/camera/scan/BaseCameraScanActivity;->releaseCamera()V

    .line 169
    invoke-super {p0}, Landroidx/appcompat/app/AppCompatActivity;->onDestroy()V

    return-void
.end method

.method public onRequestPermissionsResult(I[Ljava/lang/String;[I)V
    .locals 1

    .line 146
    invoke-super {p0, p1, p2, p3}, Landroidx/appcompat/app/AppCompatActivity;->onRequestPermissionsResult(I[Ljava/lang/String;[I)V

    const/16 v0, 0x86

    if-ne p1, v0, :cond_0

    .line 148
    invoke-virtual {p0, p2, p3}, Lcom/king/camera/scan/BaseCameraScanActivity;->requestCameraPermissionResult([Ljava/lang/String;[I)V

    :cond_0
    return-void
.end method

.method public requestCameraPermissionResult([Ljava/lang/String;[I)V
    .locals 1

    .line 159
    const-string v0, "android.permission.CAMERA"

    invoke-static {v0, p1, p2}, Lcom/king/camera/scan/util/PermissionUtils;->requestPermissionsResult(Ljava/lang/String;[Ljava/lang/String;[I)Z

    move-result p1

    if-eqz p1, :cond_0

    .line 160
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanActivity;->startCamera()V

    goto :goto_0

    .line 162
    :cond_0
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanActivity;->finish()V

    :goto_0
    return-void
.end method

.method public startCamera()V
    .locals 2

    .line 126
    iget-object v0, p0, Lcom/king/camera/scan/BaseCameraScanActivity;->mCameraScan:Lcom/king/camera/scan/CameraScan;

    if-eqz v0, :cond_1

    .line 127
    const-string v0, "android.permission.CAMERA"

    invoke-static {p0, v0}, Lcom/king/camera/scan/util/PermissionUtils;->checkPermission(Landroid/content/Context;Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 128
    iget-object v0, p0, Lcom/king/camera/scan/BaseCameraScanActivity;->mCameraScan:Lcom/king/camera/scan/CameraScan;

    invoke-virtual {v0}, Lcom/king/camera/scan/CameraScan;->startCamera()V

    goto :goto_0

    :cond_0
    const/16 v1, 0x86

    .line 130
    invoke-static {p0, v0, v1}, Lcom/king/camera/scan/util/PermissionUtils;->requestPermission(Landroid/app/Activity;Ljava/lang/String;I)V

    :cond_1
    :goto_0
    return-void
.end method

.method protected toggleTorchState()V
    .locals 3

    .line 113
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanActivity;->getCameraScan()Lcom/king/camera/scan/CameraScan;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 114
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanActivity;->getCameraScan()Lcom/king/camera/scan/CameraScan;

    move-result-object v0

    invoke-virtual {v0}, Lcom/king/camera/scan/CameraScan;->isTorchEnabled()Z

    move-result v0

    .line 115
    invoke-virtual {p0}, Lcom/king/camera/scan/BaseCameraScanActivity;->getCameraScan()Lcom/king/camera/scan/CameraScan;

    move-result-object v1

    xor-int/lit8 v2, v0, 0x1

    invoke-virtual {v1, v2}, Lcom/king/camera/scan/CameraScan;->enableTorch(Z)V

    .line 116
    iget-object v1, p0, Lcom/king/camera/scan/BaseCameraScanActivity;->ivFlashlight:Landroid/view/View;

    if-eqz v1, :cond_0

    xor-int/lit8 v0, v0, 0x1

    .line 117
    invoke-virtual {v1, v0}, Landroid/view/View;->setSelected(Z)V

    :cond_0
    return-void
.end method
