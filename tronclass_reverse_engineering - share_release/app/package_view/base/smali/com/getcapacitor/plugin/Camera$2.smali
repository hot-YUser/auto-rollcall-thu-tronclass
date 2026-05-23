.class Lcom/getcapacitor/plugin/Camera$2;
.super Ljava/lang/Object;
.source "Camera.java"

# interfaces
.implements Lcom/getcapacitor/Dialogs$OnCancelListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/Camera;->showPrompt(Lcom/getcapacitor/PluginCall;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/plugin/Camera;

.field final synthetic val$call:Lcom/getcapacitor/PluginCall;


# direct methods
.method constructor <init>(Lcom/getcapacitor/plugin/Camera;Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 129
    iput-object p1, p0, Lcom/getcapacitor/plugin/Camera$2;->this$0:Lcom/getcapacitor/plugin/Camera;

    iput-object p2, p0, Lcom/getcapacitor/plugin/Camera$2;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onCancel()V
    .locals 2

    .line 132
    iget-object v0, p0, Lcom/getcapacitor/plugin/Camera$2;->val$call:Lcom/getcapacitor/PluginCall;

    const-string v1, "User cancelled photos app"

    invoke-virtual {v0, v1}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void
.end method
