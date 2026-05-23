.class Lcom/getcapacitor/BridgeWebChromeClient$5;
.super Lorg/apache/cordova/CordovaPlugin;
.source "BridgeWebChromeClient.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/BridgeWebChromeClient;->onShowFileChooser(Landroid/webkit/WebView;Landroid/webkit/ValueCallback;Landroid/webkit/WebChromeClient$FileChooserParams;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/BridgeWebChromeClient;

.field final synthetic val$captureVideo:Z

.field final synthetic val$fileChooserParams:Landroid/webkit/WebChromeClient$FileChooserParams;

.field final synthetic val$filePathCallback:Landroid/webkit/ValueCallback;


# direct methods
.method constructor <init>(Lcom/getcapacitor/BridgeWebChromeClient;Landroid/webkit/ValueCallback;Landroid/webkit/WebChromeClient$FileChooserParams;Z)V
    .locals 0

    .line 206
    iput-object p1, p0, Lcom/getcapacitor/BridgeWebChromeClient$5;->this$0:Lcom/getcapacitor/BridgeWebChromeClient;

    iput-object p2, p0, Lcom/getcapacitor/BridgeWebChromeClient$5;->val$filePathCallback:Landroid/webkit/ValueCallback;

    iput-object p3, p0, Lcom/getcapacitor/BridgeWebChromeClient$5;->val$fileChooserParams:Landroid/webkit/WebChromeClient$FileChooserParams;

    iput-boolean p4, p0, Lcom/getcapacitor/BridgeWebChromeClient$5;->val$captureVideo:Z

    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    return-void
.end method


# virtual methods
.method public onRequestPermissionResult(I[Ljava/lang/String;[I)V
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    const/16 p2, 0x2332

    if-ne p2, p1, :cond_1

    const/4 p1, 0x0

    .line 210
    aget p2, p3, p1

    if-nez p2, :cond_0

    .line 211
    iget-object p1, p0, Lcom/getcapacitor/BridgeWebChromeClient$5;->this$0:Lcom/getcapacitor/BridgeWebChromeClient;

    iget-object p2, p0, Lcom/getcapacitor/BridgeWebChromeClient$5;->val$filePathCallback:Landroid/webkit/ValueCallback;

    iget-object p3, p0, Lcom/getcapacitor/BridgeWebChromeClient$5;->val$fileChooserParams:Landroid/webkit/WebChromeClient$FileChooserParams;

    iget-boolean v0, p0, Lcom/getcapacitor/BridgeWebChromeClient$5;->val$captureVideo:Z

    invoke-static {p1, p2, p3, v0}, Lcom/getcapacitor/BridgeWebChromeClient;->access$000(Lcom/getcapacitor/BridgeWebChromeClient;Landroid/webkit/ValueCallback;Landroid/webkit/WebChromeClient$FileChooserParams;Z)V

    goto :goto_0

    :cond_0
    const/4 p2, 0x1

    .line 213
    new-array p2, p2, [Ljava/lang/String;

    const-string p3, "FileChooser"

    aput-object p3, p2, p1

    invoke-static {p2}, Lcom/getcapacitor/Logger;->tags([Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    const-string p2, "Camera permission not granted"

    invoke-static {p1, p2}, Lcom/getcapacitor/Logger;->warn(Ljava/lang/String;Ljava/lang/String;)V

    .line 214
    iget-object p1, p0, Lcom/getcapacitor/BridgeWebChromeClient$5;->val$filePathCallback:Landroid/webkit/ValueCallback;

    const/4 p2, 0x0

    invoke-interface {p1, p2}, Landroid/webkit/ValueCallback;->onReceiveValue(Ljava/lang/Object;)V

    :cond_1
    :goto_0
    return-void
.end method
