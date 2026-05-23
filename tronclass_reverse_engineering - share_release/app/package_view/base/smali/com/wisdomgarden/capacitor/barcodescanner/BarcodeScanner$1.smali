.class Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$1;
.super Ljava/lang/Object;
.source "BarcodeScanner.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->scan()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;


# direct methods
.method constructor <init>(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)V
    .locals 0

    .line 117
    iput-object p1, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$1;->this$0:Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method synthetic lambda$run$0$com-wisdomgarden-capacitor-barcodescanner-BarcodeScanner$1(Landroid/view/View;)V
    .locals 1

    .line 126
    iget-object p1, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$1;->this$0:Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;

    const-string v0, "close"

    invoke-static {p1, v0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->access$300(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;Ljava/lang/String;)V

    return-void
.end method

.method public run()V
    .locals 4

    .line 120
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$1;->this$0:Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;

    invoke-static {v0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->access$000(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)Landroid/widget/FrameLayout;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 121
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$1;->this$0:Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;

    invoke-static {v0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->access$000(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)Landroid/widget/FrameLayout;

    move-result-object v0

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Landroid/widget/FrameLayout;->setVisibility(I)V

    .line 122
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$1;->this$0:Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;

    invoke-static {v0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->access$000(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)Landroid/widget/FrameLayout;

    move-result-object v0

    const/4 v1, 0x1

    invoke-virtual {v0, v1}, Landroid/widget/FrameLayout;->setClickable(Z)V

    .line 123
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$1;->this$0:Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;

    invoke-static {v0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->access$000(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)Landroid/widget/FrameLayout;

    move-result-object v0

    invoke-virtual {v0, v1}, Landroid/widget/FrameLayout;->setFocusable(Z)V

    .line 124
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$1;->this$0:Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;

    invoke-static {v0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->access$100(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)Landroid/widget/Button;

    move-result-object v0

    new-instance v1, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$1$$ExternalSyntheticLambda0;

    invoke-direct {v1, p0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$1$$ExternalSyntheticLambda0;-><init>(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$1;)V

    invoke-virtual {v0, v1}, Landroid/widget/Button;->setOnClickListener(Landroid/view/View$OnClickListener;)V

    .line 131
    :cond_0
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$1;->this$0:Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;

    invoke-static {v0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->access$200(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;

    move-result-object v0

    if-nez v0, :cond_1

    .line 132
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$1;->this$0:Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;

    new-instance v1, Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;

    invoke-direct {v1}, Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;-><init>()V

    invoke-static {v0, v1}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->access$202(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;)Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;

    .line 133
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$1;->this$0:Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;

    invoke-static {v0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->access$200(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;

    move-result-object v0

    iget-object v1, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$1;->this$0:Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;

    invoke-virtual {v0, v1}, Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;->setOnScanResultListener(Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment$OnScanResultListener;)V

    .line 136
    :cond_1
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$1;->this$0:Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;

    invoke-virtual {v0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    invoke-virtual {v0}, Landroidx/appcompat/app/AppCompatActivity;->getSupportFragmentManager()Landroidx/fragment/app/FragmentManager;

    move-result-object v0

    .line 137
    invoke-virtual {v0}, Landroidx/fragment/app/FragmentManager;->beginTransaction()Landroidx/fragment/app/FragmentTransaction;

    move-result-object v1

    .line 139
    const-string v2, "ScannerFragment"

    invoke-virtual {v0, v2}, Landroidx/fragment/app/FragmentManager;->findFragmentByTag(Ljava/lang/String;)Landroidx/fragment/app/Fragment;

    move-result-object v0

    if-nez v0, :cond_2

    .line 141
    sget v0, Lcom/wisdomgarden/capacitor/barcodescanner/R$id;->scanner_container:I

    iget-object v3, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$1;->this$0:Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;

    invoke-static {v3}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->access$200(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;

    move-result-object v3

    invoke-virtual {v1, v0, v3, v2}, Landroidx/fragment/app/FragmentTransaction;->add(ILandroidx/fragment/app/Fragment;Ljava/lang/String;)Landroidx/fragment/app/FragmentTransaction;

    goto :goto_0

    .line 143
    :cond_2
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$1;->this$0:Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;

    invoke-static {v0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->access$200(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;

    move-result-object v0

    invoke-virtual {v1, v0}, Landroidx/fragment/app/FragmentTransaction;->show(Landroidx/fragment/app/Fragment;)Landroidx/fragment/app/FragmentTransaction;

    .line 146
    :goto_0
    invoke-virtual {v1}, Landroidx/fragment/app/FragmentTransaction;->commit()I

    return-void
.end method
