.class Lcom/mesmotronic/plugins/FullScreenPlugin$5;
.super Ljava/lang/Object;
.source "FullScreenPlugin.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/mesmotronic/plugins/FullScreenPlugin;->leanMode()Z
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

    .line 205
    iput-object p1, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$5;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 211
    :try_start_0
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$5;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-virtual {v0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->resetWindow()V

    .line 220
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$5;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    const/16 v1, 0x706

    invoke-static {v0, v1}, Lcom/mesmotronic/plugins/FullScreenPlugin;->access$402(Lcom/mesmotronic/plugins/FullScreenPlugin;I)I

    .line 221
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$5;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-static {v0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->access$200(Lcom/mesmotronic/plugins/FullScreenPlugin;)Landroid/view/View;

    move-result-object v0

    new-instance v2, Lcom/mesmotronic/plugins/FullScreenPlugin$5$1;

    invoke-direct {v2, p0}, Lcom/mesmotronic/plugins/FullScreenPlugin$5$1;-><init>(Lcom/mesmotronic/plugins/FullScreenPlugin$5;)V

    invoke-virtual {v0, v2}, Landroid/view/View;->setOnSystemUiVisibilityChangeListener(Landroid/view/View$OnSystemUiVisibilityChangeListener;)V

    .line 234
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$5;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-static {v0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->access$200(Lcom/mesmotronic/plugins/FullScreenPlugin;)Landroid/view/View;

    move-result-object v0

    invoke-virtual {v0, v1}, Landroid/view/View;->setSystemUiVisibility(I)V

    .line 236
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$5;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-static {v0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->access$300(Lcom/mesmotronic/plugins/FullScreenPlugin;)Lorg/apache/cordova/CallbackContext;

    move-result-object v0

    invoke-virtual {v0}, Lorg/apache/cordova/CallbackContext;->success()V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 240
    iget-object v1, p0, Lcom/mesmotronic/plugins/FullScreenPlugin$5;->this$0:Lcom/mesmotronic/plugins/FullScreenPlugin;

    invoke-static {v1}, Lcom/mesmotronic/plugins/FullScreenPlugin;->access$300(Lcom/mesmotronic/plugins/FullScreenPlugin;)Lorg/apache/cordova/CallbackContext;

    move-result-object v1

    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    :goto_0
    return-void
.end method
