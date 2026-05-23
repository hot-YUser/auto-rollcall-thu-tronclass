.class Lorg/apache/cordova/NativeToJsMessageQueue$EvalBridgeMode$1;
.super Ljava/lang/Object;
.source "NativeToJsMessageQueue.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lorg/apache/cordova/NativeToJsMessageQueue$EvalBridgeMode;->onNativeToJsMessageAvailable(Lorg/apache/cordova/NativeToJsMessageQueue;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lorg/apache/cordova/NativeToJsMessageQueue$EvalBridgeMode;

.field final synthetic val$queue:Lorg/apache/cordova/NativeToJsMessageQueue;


# direct methods
.method constructor <init>(Lorg/apache/cordova/NativeToJsMessageQueue$EvalBridgeMode;Lorg/apache/cordova/NativeToJsMessageQueue;)V
    .locals 0

    .line 364
    iput-object p1, p0, Lorg/apache/cordova/NativeToJsMessageQueue$EvalBridgeMode$1;->this$0:Lorg/apache/cordova/NativeToJsMessageQueue$EvalBridgeMode;

    iput-object p2, p0, Lorg/apache/cordova/NativeToJsMessageQueue$EvalBridgeMode$1;->val$queue:Lorg/apache/cordova/NativeToJsMessageQueue;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 366
    iget-object v0, p0, Lorg/apache/cordova/NativeToJsMessageQueue$EvalBridgeMode$1;->val$queue:Lorg/apache/cordova/NativeToJsMessageQueue;

    invoke-virtual {v0}, Lorg/apache/cordova/NativeToJsMessageQueue;->popAndEncodeAsJs()Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 368
    iget-object v1, p0, Lorg/apache/cordova/NativeToJsMessageQueue$EvalBridgeMode$1;->this$0:Lorg/apache/cordova/NativeToJsMessageQueue$EvalBridgeMode;

    invoke-static {v1}, Lorg/apache/cordova/NativeToJsMessageQueue$EvalBridgeMode;->access$400(Lorg/apache/cordova/NativeToJsMessageQueue$EvalBridgeMode;)Lorg/apache/cordova/CordovaWebViewEngine;

    move-result-object v1

    const/4 v2, 0x0

    invoke-interface {v1, v0, v2}, Lorg/apache/cordova/CordovaWebViewEngine;->evaluateJavascript(Ljava/lang/String;Landroid/webkit/ValueCallback;)V

    :cond_0
    return-void
.end method
