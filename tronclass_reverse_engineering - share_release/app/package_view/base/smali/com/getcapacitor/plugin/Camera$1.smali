.class Lcom/getcapacitor/plugin/Camera$1;
.super Ljava/lang/Object;
.source "Camera.java"

# interfaces
.implements Lcom/getcapacitor/Dialogs$OnSelectListener;


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

    .line 118
    iput-object p1, p0, Lcom/getcapacitor/plugin/Camera$1;->this$0:Lcom/getcapacitor/plugin/Camera;

    iput-object p2, p0, Lcom/getcapacitor/plugin/Camera$1;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onSelect(I)V
    .locals 1

    if-nez p1, :cond_0

    .line 122
    iget-object p1, p0, Lcom/getcapacitor/plugin/Camera$1;->this$0:Lcom/getcapacitor/plugin/Camera;

    invoke-static {p1}, Lcom/getcapacitor/plugin/Camera;->access$000(Lcom/getcapacitor/plugin/Camera;)Lcom/getcapacitor/plugin/camera/CameraSettings;

    move-result-object p1

    sget-object v0, Lcom/getcapacitor/plugin/camera/CameraSource;->PHOTOS:Lcom/getcapacitor/plugin/camera/CameraSource;

    invoke-virtual {p1, v0}, Lcom/getcapacitor/plugin/camera/CameraSettings;->setSource(Lcom/getcapacitor/plugin/camera/CameraSource;)V

    .line 123
    iget-object p1, p0, Lcom/getcapacitor/plugin/Camera$1;->this$0:Lcom/getcapacitor/plugin/Camera;

    iget-object v0, p0, Lcom/getcapacitor/plugin/Camera$1;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-virtual {p1, v0}, Lcom/getcapacitor/plugin/Camera;->openPhotos(Lcom/getcapacitor/PluginCall;)V

    goto :goto_0

    :cond_0
    const/4 v0, 0x1

    if-ne p1, v0, :cond_1

    .line 125
    iget-object p1, p0, Lcom/getcapacitor/plugin/Camera$1;->this$0:Lcom/getcapacitor/plugin/Camera;

    invoke-static {p1}, Lcom/getcapacitor/plugin/Camera;->access$000(Lcom/getcapacitor/plugin/Camera;)Lcom/getcapacitor/plugin/camera/CameraSettings;

    move-result-object p1

    sget-object v0, Lcom/getcapacitor/plugin/camera/CameraSource;->CAMERA:Lcom/getcapacitor/plugin/camera/CameraSource;

    invoke-virtual {p1, v0}, Lcom/getcapacitor/plugin/camera/CameraSettings;->setSource(Lcom/getcapacitor/plugin/camera/CameraSource;)V

    .line 126
    iget-object p1, p0, Lcom/getcapacitor/plugin/Camera$1;->this$0:Lcom/getcapacitor/plugin/Camera;

    iget-object v0, p0, Lcom/getcapacitor/plugin/Camera$1;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-virtual {p1, v0}, Lcom/getcapacitor/plugin/Camera;->openCamera(Lcom/getcapacitor/PluginCall;)V

    :cond_1
    :goto_0
    return-void
.end method
