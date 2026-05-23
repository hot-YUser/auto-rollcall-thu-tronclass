.class Lorg/apache/cordova/inappbrowser/InAppBrowser$2;
.super Ljava/lang/Object;
.source "InAppBrowser.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lorg/apache/cordova/inappbrowser/InAppBrowser;->execute(Ljava/lang/String;Lorg/apache/cordova/CordovaArgs;Lorg/apache/cordova/CallbackContext;)Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

.field final synthetic val$url:Ljava/lang/String;


# direct methods
.method constructor <init>(Lorg/apache/cordova/inappbrowser/InAppBrowser;Ljava/lang/String;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 280
    iput-object p1, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$2;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    iput-object p2, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$2;->val$url:Ljava/lang/String;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 284
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x1a

    const/4 v2, 0x0

    if-ge v0, v1, :cond_0

    .line 285
    iget-object v0, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$2;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    invoke-static {v0}, Lorg/apache/cordova/inappbrowser/InAppBrowser;->access$000(Lorg/apache/cordova/inappbrowser/InAppBrowser;)Lorg/apache/cordova/inappbrowser/InAppBrowser$InAppBrowserClient;

    move-result-object v0

    iput-boolean v2, v0, Lorg/apache/cordova/inappbrowser/InAppBrowser$InAppBrowserClient;->waitForBeforeload:Z

    .line 286
    iget-object v0, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$2;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    invoke-static {v0}, Lorg/apache/cordova/inappbrowser/InAppBrowser;->access$100(Lorg/apache/cordova/inappbrowser/InAppBrowser;)Landroid/webkit/WebView;

    move-result-object v0

    iget-object v1, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$2;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    invoke-static {v1}, Lorg/apache/cordova/inappbrowser/InAppBrowser;->access$000(Lorg/apache/cordova/inappbrowser/InAppBrowser;)Lorg/apache/cordova/inappbrowser/InAppBrowser$InAppBrowserClient;

    move-result-object v1

    invoke-virtual {v0, v1}, Landroid/webkit/WebView;->setWebViewClient(Landroid/webkit/WebViewClient;)V

    goto :goto_0

    .line 288
    :cond_0
    iget-object v0, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$2;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    invoke-static {v0}, Lorg/apache/cordova/inappbrowser/InAppBrowser;->access$100(Lorg/apache/cordova/inappbrowser/InAppBrowser;)Landroid/webkit/WebView;

    move-result-object v0

    invoke-virtual {v0}, Landroid/webkit/WebView;->getWebViewClient()Landroid/webkit/WebViewClient;

    move-result-object v0

    check-cast v0, Lorg/apache/cordova/inappbrowser/InAppBrowser$InAppBrowserClient;

    iput-boolean v2, v0, Lorg/apache/cordova/inappbrowser/InAppBrowser$InAppBrowserClient;->waitForBeforeload:Z

    .line 290
    :goto_0
    iget-object v0, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$2;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    invoke-static {v0}, Lorg/apache/cordova/inappbrowser/InAppBrowser;->access$100(Lorg/apache/cordova/inappbrowser/InAppBrowser;)Landroid/webkit/WebView;

    move-result-object v0

    iget-object v1, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$2;->val$url:Ljava/lang/String;

    invoke-virtual {v0, v1}, Landroid/webkit/WebView;->loadUrl(Ljava/lang/String;)V

    return-void
.end method
