.class Lorg/apache/cordova/CordovaWebViewImpl$3;
.super Ljava/lang/Object;
.source "CordovaWebViewImpl.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lorg/apache/cordova/CordovaWebViewImpl;->loadUrlIntoView(Ljava/lang/String;Z)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lorg/apache/cordova/CordovaWebViewImpl;

.field final synthetic val$_recreatePlugins:Z

.field final synthetic val$loadUrlTimeoutValue:I

.field final synthetic val$timeoutCheck:Ljava/lang/Runnable;

.field final synthetic val$url:Ljava/lang/String;


# direct methods
.method constructor <init>(Lorg/apache/cordova/CordovaWebViewImpl;ILjava/lang/Runnable;Ljava/lang/String;Z)V
    .locals 0

    .line 187
    iput-object p1, p0, Lorg/apache/cordova/CordovaWebViewImpl$3;->this$0:Lorg/apache/cordova/CordovaWebViewImpl;

    iput p2, p0, Lorg/apache/cordova/CordovaWebViewImpl$3;->val$loadUrlTimeoutValue:I

    iput-object p3, p0, Lorg/apache/cordova/CordovaWebViewImpl$3;->val$timeoutCheck:Ljava/lang/Runnable;

    iput-object p4, p0, Lorg/apache/cordova/CordovaWebViewImpl$3;->val$url:Ljava/lang/String;

    iput-boolean p5, p0, Lorg/apache/cordova/CordovaWebViewImpl$3;->val$_recreatePlugins:Z

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 189
    iget v0, p0, Lorg/apache/cordova/CordovaWebViewImpl$3;->val$loadUrlTimeoutValue:I

    if-lez v0, :cond_0

    .line 190
    iget-object v0, p0, Lorg/apache/cordova/CordovaWebViewImpl$3;->this$0:Lorg/apache/cordova/CordovaWebViewImpl;

    invoke-static {v0}, Lorg/apache/cordova/CordovaWebViewImpl;->access$200(Lorg/apache/cordova/CordovaWebViewImpl;)Lorg/apache/cordova/CordovaInterface;

    move-result-object v0

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object v0

    iget-object v1, p0, Lorg/apache/cordova/CordovaWebViewImpl$3;->val$timeoutCheck:Ljava/lang/Runnable;

    invoke-interface {v0, v1}, Ljava/util/concurrent/ExecutorService;->execute(Ljava/lang/Runnable;)V

    .line 192
    :cond_0
    iget-object v0, p0, Lorg/apache/cordova/CordovaWebViewImpl$3;->this$0:Lorg/apache/cordova/CordovaWebViewImpl;

    iget-object v0, v0, Lorg/apache/cordova/CordovaWebViewImpl;->engine:Lorg/apache/cordova/CordovaWebViewEngine;

    iget-object v1, p0, Lorg/apache/cordova/CordovaWebViewImpl$3;->val$url:Ljava/lang/String;

    iget-boolean v2, p0, Lorg/apache/cordova/CordovaWebViewImpl$3;->val$_recreatePlugins:Z

    invoke-interface {v0, v1, v2}, Lorg/apache/cordova/CordovaWebViewEngine;->loadUrl(Ljava/lang/String;Z)V

    return-void
.end method
