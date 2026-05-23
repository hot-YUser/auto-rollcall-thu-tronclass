.class public Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;
.super Lcom/getcapacitor/Plugin;
.source "BarcodeScanner.java"

# interfaces
.implements Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment$OnScanResultListener;


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
.end annotation


# static fields
.field private static final TAG_SCANNER_FRAGMENT:Ljava/lang/String; = "ScannerFragment"


# instance fields
.field private canUseCamera:Z

.field private closeButton:Landroid/widget/Button;

.field private didRunCameraPrepare:Z

.field private handler:Landroid/os/Handler;

.field private rootContainer:Landroid/widget/FrameLayout;

.field private scannerFragment:Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;

.field private timerRunnable:Ljava/lang/Runnable;

.field private tipsDelaySeconds:I

.field private tipsMessage:Ljava/lang/String;

.field private toast:Landroid/widget/Toast;


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 24
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    const/4 v0, 0x0

    .line 26
    iput-boolean v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->didRunCameraPrepare:Z

    .line 27
    iput-boolean v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->canUseCamera:Z

    .line 34
    const-string v0, ""

    iput-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->tipsMessage:Ljava/lang/String;

    const/4 v0, 0x3

    .line 35
    iput v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->tipsDelaySeconds:I

    return-void
.end method

.method static synthetic access$000(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)Landroid/widget/FrameLayout;
    .locals 0

    .line 24
    iget-object p0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->rootContainer:Landroid/widget/FrameLayout;

    return-object p0
.end method

.method static synthetic access$100(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)Landroid/widget/Button;
    .locals 0

    .line 24
    iget-object p0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->closeButton:Landroid/widget/Button;

    return-object p0
.end method

.method static synthetic access$200(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;
    .locals 0

    .line 24
    iget-object p0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->scannerFragment:Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;

    return-object p0
.end method

.method static synthetic access$202(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;)Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;
    .locals 0

    .line 24
    iput-object p1, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->scannerFragment:Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;

    return-object p1
.end method

.method static synthetic access$300(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;Ljava/lang/String;)V
    .locals 0

    .line 24
    invoke-direct {p0, p1}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->onAction(Ljava/lang/String;)V

    return-void
.end method

.method static synthetic access$400(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)Landroid/widget/Toast;
    .locals 0

    .line 24
    iget-object p0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->toast:Landroid/widget/Toast;

    return-object p0
.end method

.method static synthetic access$402(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;Landroid/widget/Toast;)Landroid/widget/Toast;
    .locals 0

    .line 24
    iput-object p1, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->toast:Landroid/widget/Toast;

    return-object p1
.end method

.method static synthetic access$500(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)Lcom/getcapacitor/Bridge;
    .locals 0

    .line 24
    iget-object p0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->bridge:Lcom/getcapacitor/Bridge;

    return-object p0
.end method

.method static synthetic access$600(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)Ljava/lang/String;
    .locals 0

    .line 24
    iget-object p0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->tipsMessage:Ljava/lang/String;

    return-object p0
.end method

.method private cancelTimer()V
    .locals 2

    .line 252
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->toast:Landroid/widget/Toast;

    if-eqz v0, :cond_0

    .line 253
    invoke-virtual {v0}, Landroid/widget/Toast;->cancel()V

    const/4 v0, 0x0

    .line 254
    iput-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->toast:Landroid/widget/Toast;

    .line 256
    :cond_0
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->handler:Landroid/os/Handler;

    if-eqz v0, :cond_1

    iget-object v1, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->timerRunnable:Ljava/lang/Runnable;

    if-eqz v1, :cond_1

    .line 257
    invoke-virtual {v0, v1}, Landroid/os/Handler;->removeCallbacks(Ljava/lang/Runnable;)V

    :cond_1
    return-void
.end method

.method private destroy()V
    .locals 0

    .line 79
    invoke-direct {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->cancelTimer()V

    .line 80
    invoke-direct {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->showBackground()V

    .line 81
    invoke-direct {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->dismantleCamera()V

    return-void
.end method

.method private dismantleCamera()V
    .locals 3

    .line 57
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->rootContainer:Landroid/widget/FrameLayout;

    const/4 v1, 0x0

    if-eqz v0, :cond_0

    .line 58
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->closeButton:Landroid/widget/Button;

    invoke-virtual {v0, v1}, Landroid/widget/Button;->setOnClickListener(Landroid/view/View$OnClickListener;)V

    .line 59
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->rootContainer:Landroid/widget/FrameLayout;

    const/4 v2, 0x4

    invoke-virtual {v0, v2}, Landroid/widget/FrameLayout;->setVisibility(I)V

    .line 60
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->rootContainer:Landroid/widget/FrameLayout;

    const/4 v2, 0x0

    invoke-virtual {v0, v2}, Landroid/widget/FrameLayout;->setClickable(Z)V

    .line 61
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->rootContainer:Landroid/widget/FrameLayout;

    invoke-virtual {v0, v2}, Landroid/widget/FrameLayout;->setFocusable(Z)V

    .line 63
    :cond_0
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->scannerFragment:Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;

    if-eqz v0, :cond_1

    .line 64
    invoke-virtual {v0}, Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;->onPause()V

    .line 65
    invoke-virtual {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    invoke-virtual {v0}, Landroidx/appcompat/app/AppCompatActivity;->getSupportFragmentManager()Landroidx/fragment/app/FragmentManager;

    move-result-object v0

    .line 66
    invoke-virtual {v0}, Landroidx/fragment/app/FragmentManager;->beginTransaction()Landroidx/fragment/app/FragmentTransaction;

    move-result-object v0

    .line 67
    iget-object v2, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->scannerFragment:Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;

    invoke-virtual {v0, v2}, Landroidx/fragment/app/FragmentTransaction;->remove(Landroidx/fragment/app/Fragment;)Landroidx/fragment/app/FragmentTransaction;

    .line 68
    invoke-virtual {v0}, Landroidx/fragment/app/FragmentTransaction;->commit()I

    .line 69
    iput-object v1, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->scannerFragment:Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;

    .line 73
    :cond_1
    invoke-virtual {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->getSavedCall()Lcom/getcapacitor/PluginCall;

    move-result-object v0

    if-eqz v0, :cond_2

    .line 74
    invoke-virtual {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->freeSavedCall()V

    :cond_2
    return-void
.end method

.method private hasCamera()Z
    .locals 2

    .line 47
    invoke-virtual {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    invoke-virtual {v0}, Landroidx/appcompat/app/AppCompatActivity;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v0

    const-string v1, "android.hardware.camera.any"

    invoke-virtual {v0, v1}, Landroid/content/pm/PackageManager;->hasSystemFeature(Ljava/lang/String;)Z

    move-result v0

    return v0
.end method

.method private hideBackground()V
    .locals 2

    .line 154
    invoke-virtual {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    new-instance v1, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$$ExternalSyntheticLambda1;

    invoke-direct {v1, p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$$ExternalSyntheticLambda1;-><init>(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)V

    .line 155
    invoke-virtual {v0, v1}, Landroidx/appcompat/app/AppCompatActivity;->runOnUiThread(Ljava/lang/Runnable;)V

    return-void
.end method

.method private onAction(Ljava/lang/String;)V
    .locals 2

    .line 51
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 52
    const-string v1, "action"

    invoke-virtual {v0, v1, p1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 53
    const-string p1, "BarcodeScannerAction"

    invoke-virtual {p0, p1, v0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method private prepare()V
    .locals 3

    .line 85
    iget-boolean v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->didRunCameraPrepare:Z

    if-eqz v0, :cond_0

    return-void

    .line 88
    :cond_0
    invoke-direct {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->hasCamera()Z

    move-result v0

    const/4 v1, 0x1

    const/4 v2, 0x0

    if-eqz v0, :cond_2

    .line 89
    const-string v0, "android.permission.CAMERA"

    invoke-virtual {p0, v0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->hasPermission(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_1

    .line 90
    iput-boolean v2, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->canUseCamera:Z

    goto :goto_0

    .line 92
    :cond_1
    invoke-static {}, Lorg/opencv/OpenCV;->initOpenCV()Z

    .line 93
    invoke-virtual {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->getContext()Landroid/content/Context;

    move-result-object v0

    invoke-static {v0}, Lcom/wisdomgarden/qrcode/WisdomGardenQRCodeDetector;->init(Landroid/content/Context;)V

    .line 94
    iput-boolean v1, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->canUseCamera:Z

    goto :goto_0

    .line 97
    :cond_2
    iput-boolean v2, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->canUseCamera:Z

    .line 99
    :goto_0
    iput-boolean v1, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->didRunCameraPrepare:Z

    .line 100
    invoke-direct {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->dismantleCamera()V

    return-void
.end method

.method private scan()V
    .locals 2

    .line 104
    iget-boolean v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->didRunCameraPrepare:Z

    if-nez v0, :cond_0

    .line 105
    invoke-direct {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->prepare()V

    .line 108
    :cond_0
    iget-boolean v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->canUseCamera:Z

    if-nez v0, :cond_1

    const/4 v0, 0x0

    .line 109
    invoke-virtual {p0, v0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->onScanResult(Ljava/lang/String;)V

    return-void

    .line 113
    :cond_1
    iget v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->tipsDelaySeconds:I

    invoke-direct {p0, v0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->startTimer(I)V

    .line 115
    invoke-virtual {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    new-instance v1, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$1;

    invoke-direct {v1, p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$1;-><init>(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)V

    .line 116
    invoke-virtual {v0, v1}, Landroidx/appcompat/app/AppCompatActivity;->runOnUiThread(Ljava/lang/Runnable;)V

    .line 150
    invoke-direct {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->hideBackground()V

    return-void
.end method

.method private showBackground()V
    .locals 2

    .line 164
    invoke-virtual {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    new-instance v1, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$$ExternalSyntheticLambda0;

    invoke-direct {v1, p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$$ExternalSyntheticLambda0;-><init>(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)V

    .line 165
    invoke-virtual {v0, v1}, Landroidx/appcompat/app/AppCompatActivity;->runOnUiThread(Ljava/lang/Runnable;)V

    return-void
.end method

.method private startTimer(I)V
    .locals 4

    .line 237
    new-instance v0, Landroid/os/Handler;

    invoke-static {}, Landroid/os/Looper;->getMainLooper()Landroid/os/Looper;

    move-result-object v1

    invoke-direct {v0, v1}, Landroid/os/Handler;-><init>(Landroid/os/Looper;)V

    iput-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->handler:Landroid/os/Handler;

    .line 238
    new-instance v0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$2;

    invoke-direct {v0, p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$2;-><init>(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)V

    iput-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->timerRunnable:Ljava/lang/Runnable;

    .line 248
    iget-object v1, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->handler:Landroid/os/Handler;

    mul-int/lit16 p1, p1, 0x3e8

    int-to-long v2, p1

    invoke-virtual {v1, v0, v2, v3}, Landroid/os/Handler;->postDelayed(Ljava/lang/Runnable;J)Z

    return-void
.end method


# virtual methods
.method public handleOnPause()V
    .locals 1

    .line 175
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->scannerFragment:Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;

    if-eqz v0, :cond_0

    .line 176
    invoke-virtual {v0}, Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;->pauseScan()V

    :cond_0
    return-void
.end method

.method public handleOnResume()V
    .locals 1

    .line 182
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->scannerFragment:Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;

    if-eqz v0, :cond_0

    .line 183
    invoke-virtual {v0}, Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;->resumeScan()V

    :cond_0
    return-void
.end method

.method public hideBackground(Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 189
    invoke-direct {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->hideBackground()V

    .line 190
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->resolve()V

    return-void
.end method

.method synthetic lambda$hideBackground$0$com-wisdomgarden-capacitor-barcodescanner-BarcodeScanner()V
    .locals 2

    .line 157
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0}, Lcom/getcapacitor/Bridge;->getWebView()Landroid/webkit/WebView;

    move-result-object v0

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Landroid/webkit/WebView;->setBackgroundColor(I)V

    .line 158
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0}, Lcom/getcapacitor/Bridge;->getWebView()Landroid/webkit/WebView;

    move-result-object v0

    const-string v1, "javascript:document.documentElement.style.backgroundColor = \'transparent\';void(0);"

    invoke-virtual {v0, v1}, Landroid/webkit/WebView;->loadUrl(Ljava/lang/String;)V

    return-void
.end method

.method synthetic lambda$showBackground$1$com-wisdomgarden-capacitor-barcodescanner-BarcodeScanner()V
    .locals 2

    .line 167
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0}, Lcom/getcapacitor/Bridge;->getWebView()Landroid/webkit/WebView;

    move-result-object v0

    const/4 v1, -0x1

    invoke-virtual {v0, v1}, Landroid/webkit/WebView;->setBackgroundColor(I)V

    .line 168
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0}, Lcom/getcapacitor/Bridge;->getWebView()Landroid/webkit/WebView;

    move-result-object v0

    const-string v1, "javascript:document.documentElement.style.backgroundColor = \'\';void(0);"

    invoke-virtual {v0, v1}, Landroid/webkit/WebView;->loadUrl(Ljava/lang/String;)V

    return-void
.end method

.method public load()V
    .locals 2

    .line 40
    invoke-super {p0}, Lcom/getcapacitor/Plugin;->load()V

    .line 41
    invoke-virtual {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    sget v1, Lcom/wisdomgarden/capacitor/barcodescanner/R$id;->barcode_root_container:I

    invoke-virtual {v0, v1}, Landroidx/appcompat/app/AppCompatActivity;->findViewById(I)Landroid/view/View;

    move-result-object v0

    check-cast v0, Landroid/widget/FrameLayout;

    iput-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->rootContainer:Landroid/widget/FrameLayout;

    .line 42
    sget v1, Lcom/wisdomgarden/capacitor/barcodescanner/R$id;->close_button:I

    invoke-virtual {v0, v1}, Landroid/widget/FrameLayout;->findViewById(I)Landroid/view/View;

    move-result-object v0

    check-cast v0, Landroid/widget/Button;

    iput-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->closeButton:Landroid/widget/Button;

    return-void
.end method

.method public onScanResult(Ljava/lang/String;)V
    .locals 3

    .line 221
    invoke-direct {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->cancelTimer()V

    .line 222
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 223
    const-string v1, "hasContent"

    if-eqz p1, :cond_0

    const/4 v2, 0x1

    .line 224
    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 225
    const-string v1, "content"

    invoke-virtual {v0, v1, p1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    .line 227
    invoke-virtual {v0, v1, p1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 229
    :goto_0
    invoke-virtual {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->getSavedCall()Lcom/getcapacitor/PluginCall;

    move-result-object p1

    if-eqz p1, :cond_1

    .line 231
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    .line 233
    :cond_1
    invoke-direct {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->destroy()V

    return-void
.end method

.method public prepare(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 213
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->getData()Lcom/getcapacitor/JSObject;

    move-result-object v0

    const-string v1, "Not able to scan the QR code? Try zooming in with two fingers."

    const-string v2, "tips"

    invoke-virtual {v0, v2, v1}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->tipsMessage:Ljava/lang/String;

    .line 214
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->getData()Lcom/getcapacitor/JSObject;

    move-result-object v0

    const/4 v1, 0x3

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {v0, v2, v1}, Lcom/getcapacitor/JSObject;->getInteger(Ljava/lang/String;Ljava/lang/Integer;)Ljava/lang/Integer;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v0

    iput v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->tipsDelaySeconds:I

    .line 215
    invoke-direct {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->prepare()V

    .line 216
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->resolve()V

    return-void
.end method

.method public showBackground(Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 195
    invoke-direct {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->showBackground()V

    .line 196
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->resolve()V

    return-void
.end method

.method public startScan(Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 201
    invoke-virtual {p0, p1}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->saveCall(Lcom/getcapacitor/PluginCall;)V

    .line 202
    invoke-direct {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->scan()V

    return-void
.end method

.method public stopScan(Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 207
    invoke-direct {p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->destroy()V

    .line 208
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->resolve()V

    return-void
.end method
