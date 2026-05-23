.class public interface abstract Lorg/apache/cordova/CordovaWebViewEngine$Client;
.super Ljava/lang/Object;
.source "CordovaWebViewEngine.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lorg/apache/cordova/CordovaWebViewEngine;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x609
    name = "Client"
.end annotation


# virtual methods
.method public abstract clearLoadTimeoutTimer()V
.end method

.method public abstract onDispatchKeyEvent(Landroid/view/KeyEvent;)Ljava/lang/Boolean;
.end method

.method public abstract onNavigationAttempt(Ljava/lang/String;)Z
.end method

.method public abstract onPageFinishedLoading(Ljava/lang/String;)V
.end method

.method public abstract onPageStarted(Ljava/lang/String;)V
.end method

.method public abstract onReceivedError(ILjava/lang/String;Ljava/lang/String;)V
.end method
