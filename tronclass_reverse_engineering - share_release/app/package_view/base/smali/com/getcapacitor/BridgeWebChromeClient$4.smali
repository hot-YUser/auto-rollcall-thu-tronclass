.class Lcom/getcapacitor/BridgeWebChromeClient$4;
.super Ljava/lang/Object;
.source "BridgeWebChromeClient.java"

# interfaces
.implements Lcom/getcapacitor/Dialogs$OnResultListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/BridgeWebChromeClient;->onJsPrompt(Landroid/webkit/WebView;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Landroid/webkit/JsPromptResult;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/BridgeWebChromeClient;

.field final synthetic val$result:Landroid/webkit/JsPromptResult;


# direct methods
.method constructor <init>(Lcom/getcapacitor/BridgeWebChromeClient;Landroid/webkit/JsPromptResult;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 161
    iput-object p1, p0, Lcom/getcapacitor/BridgeWebChromeClient$4;->this$0:Lcom/getcapacitor/BridgeWebChromeClient;

    iput-object p2, p0, Lcom/getcapacitor/BridgeWebChromeClient$4;->val$result:Landroid/webkit/JsPromptResult;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onResult(ZZLjava/lang/String;)V
    .locals 0

    if-eqz p1, :cond_0

    .line 165
    iget-object p1, p0, Lcom/getcapacitor/BridgeWebChromeClient$4;->val$result:Landroid/webkit/JsPromptResult;

    invoke-virtual {p1, p3}, Landroid/webkit/JsPromptResult;->confirm(Ljava/lang/String;)V

    goto :goto_0

    .line 167
    :cond_0
    iget-object p1, p0, Lcom/getcapacitor/BridgeWebChromeClient$4;->val$result:Landroid/webkit/JsPromptResult;

    invoke-virtual {p1}, Landroid/webkit/JsPromptResult;->cancel()V

    :goto_0
    return-void
.end method
