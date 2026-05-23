.class Lcom/getcapacitor/Bridge$1;
.super Ljava/lang/Object;
.source "Bridge.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/Bridge;->callPluginMethod(Ljava/lang/String;Ljava/lang/String;Lcom/getcapacitor/PluginCall;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/Bridge;

.field final synthetic val$call:Lcom/getcapacitor/PluginCall;

.field final synthetic val$methodName:Ljava/lang/String;

.field final synthetic val$plugin:Lcom/getcapacitor/PluginHandle;


# direct methods
.method constructor <init>(Lcom/getcapacitor/Bridge;Lcom/getcapacitor/PluginHandle;Ljava/lang/String;Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 523
    iput-object p1, p0, Lcom/getcapacitor/Bridge$1;->this$0:Lcom/getcapacitor/Bridge;

    iput-object p2, p0, Lcom/getcapacitor/Bridge$1;->val$plugin:Lcom/getcapacitor/PluginHandle;

    iput-object p3, p0, Lcom/getcapacitor/Bridge$1;->val$methodName:Ljava/lang/String;

    iput-object p4, p0, Lcom/getcapacitor/Bridge$1;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 527
    :try_start_0
    iget-object v0, p0, Lcom/getcapacitor/Bridge$1;->val$plugin:Lcom/getcapacitor/PluginHandle;

    iget-object v1, p0, Lcom/getcapacitor/Bridge$1;->val$methodName:Ljava/lang/String;

    iget-object v2, p0, Lcom/getcapacitor/Bridge$1;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/PluginHandle;->invoke(Ljava/lang/String;Lcom/getcapacitor/PluginCall;)V

    .line 529
    iget-object v0, p0, Lcom/getcapacitor/Bridge$1;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-virtual {v0}, Lcom/getcapacitor/PluginCall;->isSaved()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 530
    iget-object v0, p0, Lcom/getcapacitor/Bridge$1;->this$0:Lcom/getcapacitor/Bridge;

    iget-object v1, p0, Lcom/getcapacitor/Bridge$1;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-virtual {v0, v1}, Lcom/getcapacitor/Bridge;->saveCall(Lcom/getcapacitor/PluginCall;)V
    :try_end_0
    .catch Lcom/getcapacitor/PluginLoadException; {:try_start_0 .. :try_end_0} :catch_2
    .catch Lcom/getcapacitor/InvalidPluginMethodException; {:try_start_0 .. :try_end_0} :catch_1
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    :catch_0
    move-exception v0

    .line 535
    const-string v1, "Serious error executing plugin"

    invoke-static {v1, v0}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 536
    new-instance v1, Ljava/lang/RuntimeException;

    invoke-direct {v1, v0}, Ljava/lang/RuntimeException;-><init>(Ljava/lang/Throwable;)V

    throw v1

    :catch_1
    move-exception v0

    goto :goto_0

    :catch_2
    move-exception v0

    .line 533
    :goto_0
    const-string v1, "Unable to execute plugin method"

    invoke-static {v1, v0}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/Throwable;)V

    :cond_0
    :goto_1
    return-void
.end method
