.class Lcom/mesmotronic/plugins/FullScreenPlugin$6;
.super Ljava/lang/Object;
.source "FullScreenPlugin.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/mesmotronic/plugins/FullScreenPlugin;->showSystemUI()Z
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

    .line 267
    iput-object p1, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$6;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 273
    :try_start_0
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$6;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-virtual {v0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->resetWindow()V

    .line 277
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$6;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-static {v0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->access$600(Lcom/mesmotronic/plugins/FullScreenPlugin;)Landroid/view/Window;

    move-result-object v0

    const v1, 0xc000400

    .line 278
    invoke-virtual {v0, v1}, Landroid/view/Window;->clearFlags(I)V

    .line 286
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$6;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-static {v0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->access$200(Lcom/mesmotronic/plugins/FullScreenPlugin;)Landroid/view/View;

    move-result-object v0

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Landroid/view/View;->setOnSystemUiVisibilityChangeListener(Landroid/view/View$OnSystemUiVisibilityChangeListener;)V

    .line 287
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$6;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-static {v0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->access$200(Lcom/mesmotronic/plugins/FullScreenPlugin;)Landroid/view/View;

    move-result-object v0

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Landroid/view/View;->setSystemUiVisibility(I)V

    .line 289
    new-instance v0, Lorg/apache/cordova/PluginResult;

    sget-object v1, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Z)V

    .line 290
    iget-object v1, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$6;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-static {v1}, Lcom/mesmotronic/plugins/FullScreenPlugin;->access$300(Lcom/mesmotronic/plugins/FullScreenPlugin;)Lorg/apache/cordova/CallbackContext;

    move-result-object v1

    invoke-virtual {v1, v0}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    .line 292
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$6;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-static {v0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->access$300(Lcom/mesmotronic/plugins/FullScreenPlugin;)Lorg/apache/cordova/CallbackContext;

    move-result-object v0

    invoke-virtual {v0}, Lorg/apache/cordova/CallbackContext;->success()V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 296
    iget-object v1, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$6;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-static {v1}, Lcom/mesmotronic/plugins/FullScreenPlugin;->access$300(Lcom/mesmotronic/plugins/FullScreenPlugin;)Lorg/apache/cordova/CallbackContext;

    move-result-object v1

    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    :goto_0
    return-void
.end method
