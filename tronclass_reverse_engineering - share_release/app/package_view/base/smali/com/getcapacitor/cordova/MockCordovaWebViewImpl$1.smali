.class Lcom/getcapacitor/cordova/MockCordovaWebViewImpl$1;
.super Ljava/lang/Object;
.source "MockCordovaWebViewImpl.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;->eval(Ljava/lang/String;Landroid/webkit/ValueCallback;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;

.field final synthetic val$callback:Landroid/webkit/ValueCallback;

.field final synthetic val$js:Ljava/lang/String;


# direct methods
.method constructor <init>(Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;Ljava/lang/String;Landroid/webkit/ValueCallback;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 200
    iput-object p1, p0, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl$1;->this$0:Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;

    iput-object p2, p0, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl$1;->val$js:Ljava/lang/String;

    iput-object p3, p0, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl$1;->val$callback:Landroid/webkit/ValueCallback;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 203
    iget-object v0, p0, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl$1;->this$0:Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;

    invoke-static {v0}, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;->access$100(Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;)Landroid/webkit/WebView;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl$1;->val$js:Ljava/lang/String;

    iget-object v2, p0, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl$1;->val$callback:Landroid/webkit/ValueCallback;

    invoke-virtual {v0, v1, v2}, Landroid/webkit/WebView;->evaluateJavascript(Ljava/lang/String;Landroid/webkit/ValueCallback;)V

    return-void
.end method
