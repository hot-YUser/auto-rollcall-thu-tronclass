.class Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$2;
.super Ljava/lang/Object;
.source "BarcodeScanner.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->startTimer(I)V
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

    .line 239
    iput-object p1, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$2;->this$0:Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 4

    .line 242
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$2;->this$0:Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;

    invoke-static {v0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->access$200(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)Lcom/wisdomgarden/capacitor/barcodescanner/ScannerFragment;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 243
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$2;->this$0:Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;

    invoke-static {v0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->access$500(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)Lcom/getcapacitor/Bridge;

    move-result-object v1

    invoke-virtual {v1}, Lcom/getcapacitor/Bridge;->getActivity()Landroid/app/Activity;

    move-result-object v1

    iget-object v2, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$2;->this$0:Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;

    invoke-static {v2}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->access$600(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)Ljava/lang/String;

    move-result-object v2

    const/4 v3, 0x1

    invoke-static {v1, v2, v3}, Landroid/widget/Toast;->makeText(Landroid/content/Context;Ljava/lang/CharSequence;I)Landroid/widget/Toast;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->access$402(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;Landroid/widget/Toast;)Landroid/widget/Toast;

    .line 244
    iget-object v0, p0, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner$2;->this$0:Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;

    invoke-static {v0}, Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;->access$400(Lcom/wisdomgarden/capacitor/barcodescanner/BarcodeScanner;)Landroid/widget/Toast;

    move-result-object v0

    invoke-virtual {v0}, Landroid/widget/Toast;->show()V

    :cond_0
    return-void
.end method
