.class Lcom/getcapacitor/BridgeWebChromeClient$7;
.super Lorg/apache/cordova/CordovaPlugin;
.source "BridgeWebChromeClient.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/BridgeWebChromeClient;->showVideoCapturePicker(Landroid/webkit/ValueCallback;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/BridgeWebChromeClient;

.field final synthetic val$filePathCallback:Landroid/webkit/ValueCallback;


# direct methods
.method constructor <init>(Lcom/getcapacitor/BridgeWebChromeClient;Landroid/webkit/ValueCallback;)V
    .locals 0

    .line 286
    iput-object p1, p0, Lcom/getcapacitor/BridgeWebChromeClient$7;->this$0:Lcom/getcapacitor/BridgeWebChromeClient;

    iput-object p2, p0, Lcom/getcapacitor/BridgeWebChromeClient$7;->val$filePathCallback:Landroid/webkit/ValueCallback;

    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    return-void
.end method


# virtual methods
.method public onActivityResult(IILandroid/content/Intent;)V
    .locals 0

    const/4 p1, -0x1

    if-ne p2, p1, :cond_0

    const/4 p1, 0x1

    .line 291
    new-array p1, p1, [Landroid/net/Uri;

    const/4 p2, 0x0

    invoke-virtual {p3}, Landroid/content/Intent;->getData()Landroid/net/Uri;

    move-result-object p3

    aput-object p3, p1, p2

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    .line 293
    :goto_0
    iget-object p2, p0, Lcom/getcapacitor/BridgeWebChromeClient$7;->val$filePathCallback:Landroid/webkit/ValueCallback;

    invoke-interface {p2, p1}, Landroid/webkit/ValueCallback;->onReceiveValue(Ljava/lang/Object;)V

    return-void
.end method
