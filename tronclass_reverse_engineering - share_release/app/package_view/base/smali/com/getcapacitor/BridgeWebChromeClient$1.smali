.class Lcom/getcapacitor/BridgeWebChromeClient$1;
.super Lorg/apache/cordova/CordovaPlugin;
.source "BridgeWebChromeClient.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/BridgeWebChromeClient;->onPermissionRequest(Landroid/webkit/PermissionRequest;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/BridgeWebChromeClient;

.field final synthetic val$request:Landroid/webkit/PermissionRequest;


# direct methods
.method constructor <init>(Lcom/getcapacitor/BridgeWebChromeClient;Landroid/webkit/PermissionRequest;)V
    .locals 0

    .line 71
    iput-object p1, p0, Lcom/getcapacitor/BridgeWebChromeClient$1;->this$0:Lcom/getcapacitor/BridgeWebChromeClient;

    iput-object p2, p0, Lcom/getcapacitor/BridgeWebChromeClient$1;->val$request:Landroid/webkit/PermissionRequest;

    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    return-void
.end method


# virtual methods
.method public onRequestPermissionResult(I[Ljava/lang/String;[I)V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    const/16 p2, 0x2333

    if-ne p2, p1, :cond_2

    .line 75
    array-length p1, p3

    const/4 p2, 0x0

    :goto_0
    if-ge p2, p1, :cond_1

    aget v0, p3, p2

    const/4 v1, -0x1

    if-ne v0, v1, :cond_0

    .line 77
    iget-object p1, p0, Lcom/getcapacitor/BridgeWebChromeClient$1;->val$request:Landroid/webkit/PermissionRequest;

    invoke-virtual {p1}, Landroid/webkit/PermissionRequest;->deny()V

    return-void

    :cond_0
    add-int/lit8 p2, p2, 0x1

    goto :goto_0

    .line 81
    :cond_1
    iget-object p1, p0, Lcom/getcapacitor/BridgeWebChromeClient$1;->val$request:Landroid/webkit/PermissionRequest;

    invoke-virtual {p1}, Landroid/webkit/PermissionRequest;->getResources()[Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p1, p2}, Landroid/webkit/PermissionRequest;->grant([Ljava/lang/String;)V

    :cond_2
    return-void
.end method
