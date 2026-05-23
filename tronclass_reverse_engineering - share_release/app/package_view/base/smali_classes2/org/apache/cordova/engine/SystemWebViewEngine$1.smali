.class Lorg/apache/cordova/engine/SystemWebViewEngine$1;
.super Ljava/lang/Object;
.source "SystemWebViewEngine.java"

# interfaces
.implements Lorg/apache/cordova/NativeToJsMessageQueue$OnlineEventsBridgeMode$OnlineEventsBridgeModeDelegate;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lorg/apache/cordova/engine/SystemWebViewEngine;->init(Lorg/apache/cordova/CordovaWebView;Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebViewEngine$Client;Lorg/apache/cordova/CordovaResourceApi;Lorg/apache/cordova/PluginManager;Lorg/apache/cordova/NativeToJsMessageQueue;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lorg/apache/cordova/engine/SystemWebViewEngine;


# direct methods
.method constructor <init>(Lorg/apache/cordova/engine/SystemWebViewEngine;)V
    .locals 0

    .line 110
    iput-object p1, p0, Lorg/apache/cordova/engine/SystemWebViewEngine$1;->this$0:Lorg/apache/cordova/engine/SystemWebViewEngine;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public runOnUiThread(Ljava/lang/Runnable;)V
    .locals 1

    .line 121
    iget-object v0, p0, Lorg/apache/cordova/engine/SystemWebViewEngine$1;->this$0:Lorg/apache/cordova/engine/SystemWebViewEngine;

    iget-object v0, v0, Lorg/apache/cordova/engine/SystemWebViewEngine;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0, p1}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    return-void
.end method

.method public setNetworkAvailable(Z)V
    .locals 1

    .line 115
    iget-object v0, p0, Lorg/apache/cordova/engine/SystemWebViewEngine$1;->this$0:Lorg/apache/cordova/engine/SystemWebViewEngine;

    iget-object v0, v0, Lorg/apache/cordova/engine/SystemWebViewEngine;->webView:Lorg/apache/cordova/engine/SystemWebView;

    if-eqz v0, :cond_0

    .line 116
    iget-object v0, p0, Lorg/apache/cordova/engine/SystemWebViewEngine$1;->this$0:Lorg/apache/cordova/engine/SystemWebViewEngine;

    iget-object v0, v0, Lorg/apache/cordova/engine/SystemWebViewEngine;->webView:Lorg/apache/cordova/engine/SystemWebView;

    invoke-virtual {v0, p1}, Lorg/apache/cordova/engine/SystemWebView;->setNetworkAvailable(Z)V

    :cond_0
    return-void
.end method
