.class Lcom/getcapacitor/BridgeWebChromeClient$2;
.super Ljava/lang/Object;
.source "BridgeWebChromeClient.java"

# interfaces
.implements Lcom/getcapacitor/Dialogs$OnResultListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/BridgeWebChromeClient;->onJsAlert(Landroid/webkit/WebView;Ljava/lang/String;Ljava/lang/String;Landroid/webkit/JsResult;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/BridgeWebChromeClient;

.field final synthetic val$result:Landroid/webkit/JsResult;


# direct methods
.method constructor <init>(Lcom/getcapacitor/BridgeWebChromeClient;Landroid/webkit/JsResult;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 104
    iput-object p1, p0, Lcom/getcapacitor/BridgeWebChromeClient$2;->this$0:Lcom/getcapacitor/BridgeWebChromeClient;

    iput-object p2, p0, Lcom/getcapacitor/BridgeWebChromeClient$2;->val$result:Landroid/webkit/JsResult;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onResult(ZZLjava/lang/String;)V
    .locals 0

    if-eqz p1, :cond_0

    .line 108
    iget-object p1, p0, Lcom/getcapacitor/BridgeWebChromeClient$2;->val$result:Landroid/webkit/JsResult;

    invoke-virtual {p1}, Landroid/webkit/JsResult;->confirm()V

    goto :goto_0

    .line 110
    :cond_0
    iget-object p1, p0, Lcom/getcapacitor/BridgeWebChromeClient$2;->val$result:Landroid/webkit/JsResult;

    invoke-virtual {p1}, Landroid/webkit/JsResult;->cancel()V

    :goto_0
    return-void
.end method
