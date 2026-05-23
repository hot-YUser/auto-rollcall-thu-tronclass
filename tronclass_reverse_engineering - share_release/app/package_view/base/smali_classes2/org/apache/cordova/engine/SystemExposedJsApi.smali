.class Lorg/apache/cordova/engine/SystemExposedJsApi;
.super Ljava/lang/Object;
.source "SystemExposedJsApi.java"

# interfaces
.implements Lorg/apache/cordova/ExposedJsApi;


# instance fields
.field private final bridge:Lorg/apache/cordova/CordovaBridge;


# direct methods
.method constructor <init>(Lorg/apache/cordova/CordovaBridge;)V
    .locals 0

    .line 35
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 36
    iput-object p1, p0, Lorg/apache/cordova/engine/SystemExposedJsApi;->bridge:Lorg/apache/cordova/CordovaBridge;

    return-void
.end method


# virtual methods
.method public exec(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;
    .locals 6
    .annotation runtime Landroid/webkit/JavascriptInterface;
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;,
            Ljava/lang/IllegalAccessException;
        }
    .end annotation

    .line 41
    iget-object v0, p0, Lorg/apache/cordova/engine/SystemExposedJsApi;->bridge:Lorg/apache/cordova/CordovaBridge;

    move v1, p1

    move-object v2, p2

    move-object v3, p3

    move-object v4, p4

    move-object v5, p5

    invoke-virtual/range {v0 .. v5}, Lorg/apache/cordova/CordovaBridge;->jsExec(ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method public retrieveJsMessages(IZ)Ljava/lang/String;
    .locals 1
    .annotation runtime Landroid/webkit/JavascriptInterface;
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/IllegalAccessException;
        }
    .end annotation

    .line 51
    iget-object v0, p0, Lorg/apache/cordova/engine/SystemExposedJsApi;->bridge:Lorg/apache/cordova/CordovaBridge;

    invoke-virtual {v0, p1, p2}, Lorg/apache/cordova/CordovaBridge;->jsRetrieveJsMessages(IZ)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method public setNativeToJsBridgeMode(II)V
    .locals 1
    .annotation runtime Landroid/webkit/JavascriptInterface;
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/IllegalAccessException;
        }
    .end annotation

    .line 46
    iget-object v0, p0, Lorg/apache/cordova/engine/SystemExposedJsApi;->bridge:Lorg/apache/cordova/CordovaBridge;

    invoke-virtual {v0, p1, p2}, Lorg/apache/cordova/CordovaBridge;->jsSetNativeToJsBridgeMode(II)V

    return-void
.end method
