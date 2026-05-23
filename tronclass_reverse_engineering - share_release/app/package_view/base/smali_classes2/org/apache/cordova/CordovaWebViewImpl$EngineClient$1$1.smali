.class Lorg/apache/cordova/CordovaWebViewImpl$EngineClient$1$1;
.super Ljava/lang/Object;
.source "CordovaWebViewImpl.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lorg/apache/cordova/CordovaWebViewImpl$EngineClient$1;->run()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$2:Lorg/apache/cordova/CordovaWebViewImpl$EngineClient$1;


# direct methods
.method constructor <init>(Lorg/apache/cordova/CordovaWebViewImpl$EngineClient$1;)V
    .locals 0

    .line 536
    iput-object p1, p0, Lorg/apache/cordova/CordovaWebViewImpl$EngineClient$1$1;->this$2:Lorg/apache/cordova/CordovaWebViewImpl$EngineClient$1;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 538
    iget-object v0, p0, Lorg/apache/cordova/CordovaWebViewImpl$EngineClient$1$1;->this$2:Lorg/apache/cordova/CordovaWebViewImpl$EngineClient$1;

    iget-object v0, v0, Lorg/apache/cordova/CordovaWebViewImpl$EngineClient$1;->this$1:Lorg/apache/cordova/CordovaWebViewImpl$EngineClient;

    iget-object v0, v0, Lorg/apache/cordova/CordovaWebViewImpl$EngineClient;->this$0:Lorg/apache/cordova/CordovaWebViewImpl;

    invoke-static {v0}, Lorg/apache/cordova/CordovaWebViewImpl;->access$000(Lorg/apache/cordova/CordovaWebViewImpl;)Lorg/apache/cordova/PluginManager;

    move-result-object v0

    const-string v1, "spinner"

    const-string v2, "stop"

    invoke-virtual {v0, v1, v2}, Lorg/apache/cordova/PluginManager;->postMessage(Ljava/lang/String;Ljava/lang/Object;)Ljava/lang/Object;

    return-void
.end method
