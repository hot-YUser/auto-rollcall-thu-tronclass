.class Lcom/mesmotronic/plugins/FullScreenPlugin$3;
.super Ljava/lang/Object;
.source "FullScreenPlugin.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/mesmotronic/plugins/FullScreenPlugin;->immersiveWidth()Z
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;


# direct methods
.method constructor <init>(Lcom/mesmotronic/plugins/FullScreenPlugin;)V
    .locals 0

    .line 141
    iput-object p1, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$3;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 147
    :try_start_0
    new-instance v0, Landroid/graphics/Point;

    invoke-direct {v0}, Landroid/graphics/Point;-><init>()V

    .line 149
    iget-object v1, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$3;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-static {v1}, Lcom/mesmotronic/plugins/FullScreenPlugin;->access$200(Lcom/mesmotronic/plugins/FullScreenPlugin;)Landroid/view/View;

    move-result-object v1

    invoke-virtual {v1}, Landroid/view/View;->getDisplay()Landroid/view/Display;

    move-result-object v1

    invoke-virtual {v1, v0}, Landroid/view/Display;->getRealSize(Landroid/graphics/Point;)V

    .line 151
    new-instance v1, Lorg/apache/cordova/PluginResult;

    sget-object v2, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    iget v0, v0, Landroid/graphics/Point;->x:I

    invoke-direct {v1, v2, v0}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;I)V

    .line 152
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$3;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-static {v0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->access$300(Lcom/mesmotronic/plugins/FullScreenPlugin;)Lorg/apache/cordova/CallbackContext;

    move-result-object v0

    invoke-virtual {v0, v1}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 156
    iget-object v1, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$3;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-static {v1}, Lcom/mesmotronic/plugins/FullScreenPlugin;->access$300(Lcom/mesmotronic/plugins/FullScreenPlugin;)Lorg/apache/cordova/CallbackContext;

    move-result-object v1

    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    :goto_0
    return-void
.end method
