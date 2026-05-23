.class Lorg/apache/cordova/inappbrowser/InAppBrowser$7$5;
.super Lorg/apache/cordova/inappbrowser/InAppChromeClient;
.source "InAppBrowser.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lorg/apache/cordova/inappbrowser/InAppBrowser$7;->run()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;


# direct methods
.method constructor <init>(Lorg/apache/cordova/inappbrowser/InAppBrowser$7;Lorg/apache/cordova/CordovaWebView;)V
    .locals 0

    .line 977
    iput-object p1, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$5;->this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;

    invoke-direct {p0, p2}, Lorg/apache/cordova/inappbrowser/InAppChromeClient;-><init>(Lorg/apache/cordova/CordovaWebView;)V

    return-void
.end method


# virtual methods
.method public onShowFileChooser(Landroid/webkit/WebView;Landroid/webkit/ValueCallback;Landroid/webkit/WebChromeClient$FileChooserParams;)Z
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/webkit/WebView;",
            "Landroid/webkit/ValueCallback<",
            "[",
            "Landroid/net/Uri;",
            ">;",
            "Landroid/webkit/WebChromeClient$FileChooserParams;",
            ")Z"
        }
    .end annotation

    .line 981
    iget-object v0, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$5;->this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;

    iget-object v0, v0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    iget-object v0, v0, Lorg/apache/cordova/inappbrowser/InAppBrowser;->cordova:Lorg/apache/cordova/CordovaInterface;

    iget-object v1, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$5;->this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;

    iget-object v1, v1, Lorg/apache/cordova/inappbrowser/InAppBrowser$7;->val$plugin:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    invoke-static {v0, v1}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->getInstance(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/inappbrowser/InAppBrowser;)Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;

    move-result-object v0

    iget-object v1, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$5;->this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;

    iget-object v1, v1, Lorg/apache/cordova/inappbrowser/InAppBrowser$7;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    iget-object v1, v1, Lorg/apache/cordova/inappbrowser/InAppBrowser;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-virtual {v0, p1, p2, v1, p3}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->recordVideoForApi21(Landroid/webkit/WebView;Landroid/webkit/ValueCallback;Landroid/app/Activity;Landroid/webkit/WebChromeClient$FileChooserParams;)Z

    move-result p1

    const/4 p3, 0x1

    if-eqz p1, :cond_0

    return p3

    .line 984
    :cond_0
    const-string p1, "InAppBrowser"

    const-string v0, "File Chooser 5.0+"

    invoke-static {p1, v0}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 986
    iget-object p1, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$5;->this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;

    iget-object p1, p1, Lorg/apache/cordova/inappbrowser/InAppBrowser$7;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    invoke-static {p1}, Lorg/apache/cordova/inappbrowser/InAppBrowser;->access$1500(Lorg/apache/cordova/inappbrowser/InAppBrowser;)Landroid/webkit/ValueCallback;

    move-result-object p1

    if-eqz p1, :cond_1

    .line 987
    iget-object p1, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$5;->this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;

    iget-object p1, p1, Lorg/apache/cordova/inappbrowser/InAppBrowser$7;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    invoke-static {p1}, Lorg/apache/cordova/inappbrowser/InAppBrowser;->access$1500(Lorg/apache/cordova/inappbrowser/InAppBrowser;)Landroid/webkit/ValueCallback;

    move-result-object p1

    const/4 v0, 0x0

    invoke-interface {p1, v0}, Landroid/webkit/ValueCallback;->onReceiveValue(Ljava/lang/Object;)V

    .line 989
    :cond_1
    iget-object p1, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$5;->this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;

    iget-object p1, p1, Lorg/apache/cordova/inappbrowser/InAppBrowser$7;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    invoke-static {p1, p2}, Lorg/apache/cordova/inappbrowser/InAppBrowser;->access$1502(Lorg/apache/cordova/inappbrowser/InAppBrowser;Landroid/webkit/ValueCallback;)Landroid/webkit/ValueCallback;

    .line 992
    new-instance p1, Landroid/content/Intent;

    const-string p2, "android.intent.action.GET_CONTENT"

    invoke-direct {p1, p2}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 993
    const-string p2, "android.intent.category.OPENABLE"

    invoke-virtual {p1, p2}, Landroid/content/Intent;->addCategory(Ljava/lang/String;)Landroid/content/Intent;

    .line 994
    const-string p2, "*/*"

    invoke-virtual {p1, p2}, Landroid/content/Intent;->setType(Ljava/lang/String;)Landroid/content/Intent;

    .line 997
    iget-object p2, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$5;->this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;

    iget-object p2, p2, Lorg/apache/cordova/inappbrowser/InAppBrowser$7;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    iget-object p2, p2, Lorg/apache/cordova/inappbrowser/InAppBrowser;->cordova:Lorg/apache/cordova/CordovaInterface;

    iget-object v0, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$5;->this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;

    iget-object v0, v0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    const-string v1, "Select File"

    invoke-static {p1, v1}, Landroid/content/Intent;->createChooser(Landroid/content/Intent;Ljava/lang/CharSequence;)Landroid/content/Intent;

    move-result-object p1

    const/4 v1, 0x2

    invoke-interface {p2, v0, p1, v1}, Lorg/apache/cordova/CordovaInterface;->startActivityForResult(Lorg/apache/cordova/CordovaPlugin;Landroid/content/Intent;I)V

    return p3
.end method

.method public openFileChooser(Landroid/webkit/ValueCallback;Ljava/lang/String;)V
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/webkit/ValueCallback<",
            "Landroid/net/Uri;",
            ">;",
            "Ljava/lang/String;",
            ")V"
        }
    .end annotation

    .line 1015
    iget-object v0, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$5;->this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;

    iget-object v0, v0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    iget-object v0, v0, Lorg/apache/cordova/inappbrowser/InAppBrowser;->cordova:Lorg/apache/cordova/CordovaInterface;

    iget-object v1, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$5;->this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;

    iget-object v1, v1, Lorg/apache/cordova/inappbrowser/InAppBrowser$7;->val$plugin:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    invoke-static {v0, v1}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->getInstance(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/inappbrowser/InAppBrowser;)Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;

    move-result-object v0

    iget-object v1, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$5;->this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;

    iget-object v1, v1, Lorg/apache/cordova/inappbrowser/InAppBrowser$7;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    iget-object v1, v1, Lorg/apache/cordova/inappbrowser/InAppBrowser;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-virtual {v0, p1, p2, v1}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->recordVideoForApiBelow21(Landroid/webkit/ValueCallback;Ljava/lang/String;Landroid/app/Activity;)Z

    move-result p2

    if-eqz p2, :cond_0

    return-void

    .line 1018
    :cond_0
    const-string p2, "InAppBrowser"

    const-string v0, "File Chooser 3.0+"

    invoke-static {p2, v0}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 1019
    iget-object p2, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$5;->this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;

    iget-object p2, p2, Lorg/apache/cordova/inappbrowser/InAppBrowser$7;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    invoke-static {p2, p1}, Lorg/apache/cordova/inappbrowser/InAppBrowser;->access$1602(Lorg/apache/cordova/inappbrowser/InAppBrowser;Landroid/webkit/ValueCallback;)Landroid/webkit/ValueCallback;

    .line 1020
    new-instance p1, Landroid/content/Intent;

    const-string p2, "android.intent.action.GET_CONTENT"

    invoke-direct {p1, p2}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 1021
    const-string p2, "android.intent.category.OPENABLE"

    invoke-virtual {p1, p2}, Landroid/content/Intent;->addCategory(Ljava/lang/String;)Landroid/content/Intent;

    .line 1024
    iget-object p2, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$5;->this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;

    iget-object p2, p2, Lorg/apache/cordova/inappbrowser/InAppBrowser$7;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    iget-object p2, p2, Lorg/apache/cordova/inappbrowser/InAppBrowser;->cordova:Lorg/apache/cordova/CordovaInterface;

    iget-object v0, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$5;->this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;

    iget-object v0, v0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    const-string v1, "Select File"

    invoke-static {p1, v1}, Landroid/content/Intent;->createChooser(Landroid/content/Intent;Ljava/lang/CharSequence;)Landroid/content/Intent;

    move-result-object p1

    const/4 v1, 0x1

    invoke-interface {p2, v0, p1, v1}, Lorg/apache/cordova/CordovaInterface;->startActivityForResult(Lorg/apache/cordova/CordovaPlugin;Landroid/content/Intent;I)V

    return-void
.end method

.method public openFileChooser(Landroid/webkit/ValueCallback;Ljava/lang/String;Ljava/lang/String;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/webkit/ValueCallback<",
            "Landroid/net/Uri;",
            ">;",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            ")V"
        }
    .end annotation

    .line 1004
    iget-object p3, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$5;->this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;

    iget-object p3, p3, Lorg/apache/cordova/inappbrowser/InAppBrowser$7;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    iget-object p3, p3, Lorg/apache/cordova/inappbrowser/InAppBrowser;->cordova:Lorg/apache/cordova/CordovaInterface;

    iget-object v0, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$5;->this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;

    iget-object v0, v0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7;->val$plugin:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    invoke-static {p3, v0}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->getInstance(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/inappbrowser/InAppBrowser;)Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;

    move-result-object p3

    iget-object v0, p0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$5;->this$1:Lorg/apache/cordova/inappbrowser/InAppBrowser$7;

    iget-object v0, v0, Lorg/apache/cordova/inappbrowser/InAppBrowser$7;->this$0:Lorg/apache/cordova/inappbrowser/InAppBrowser;

    iget-object v0, v0, Lorg/apache/cordova/inappbrowser/InAppBrowser;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {p3, p1, p2, v0}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->recordVideoForApiBelow21(Landroid/webkit/ValueCallback;Ljava/lang/String;Landroid/app/Activity;)Z

    move-result p3

    if-eqz p3, :cond_0

    return-void

    .line 1007
    :cond_0
    const-string p3, "InAppBrowser"

    const-string v0, "File Chooser 4.1+"

    invoke-static {p3, v0}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 1009
    invoke-virtual {p0, p1, p2}, Lorg/apache/cordova/inappbrowser/InAppBrowser$7$5;->openFileChooser(Landroid/webkit/ValueCallback;Ljava/lang/String;)V

    return-void
.end method
