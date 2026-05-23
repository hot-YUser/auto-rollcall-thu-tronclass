.class public interface abstract Lorg/apache/cordova/CordovaWebViewEngine;
.super Ljava/lang/Object;
.source "CordovaWebViewEngine.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lorg/apache/cordova/CordovaWebViewEngine$Client;,
        Lorg/apache/cordova/CordovaWebViewEngine$EngineView;
    }
.end annotation


# virtual methods
.method public abstract canGoBack()Z
.end method

.method public abstract clearCache()V
.end method

.method public abstract clearHistory()V
.end method

.method public abstract destroy()V
.end method

.method public abstract evaluateJavascript(Ljava/lang/String;Landroid/webkit/ValueCallback;)V
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Landroid/webkit/ValueCallback<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation
.end method

.method public abstract getCookieManager()Lorg/apache/cordova/ICordovaCookieManager;
.end method

.method public abstract getCordovaWebView()Lorg/apache/cordova/CordovaWebView;
.end method

.method public abstract getUrl()Ljava/lang/String;
.end method

.method public abstract getView()Landroid/view/View;
.end method

.method public abstract goBack()Z
.end method

.method public abstract init(Lorg/apache/cordova/CordovaWebView;Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebViewEngine$Client;Lorg/apache/cordova/CordovaResourceApi;Lorg/apache/cordova/PluginManager;Lorg/apache/cordova/NativeToJsMessageQueue;)V
.end method

.method public abstract loadUrl(Ljava/lang/String;Z)V
.end method

.method public abstract setPaused(Z)V
.end method

.method public abstract stopLoading()V
.end method
