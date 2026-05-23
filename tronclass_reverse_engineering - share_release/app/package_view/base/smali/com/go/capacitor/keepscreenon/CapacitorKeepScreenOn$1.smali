.class Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn$1;
.super Ljava/lang/Object;
.source "CapacitorKeepScreenOn.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn;->enable(Lcom/getcapacitor/PluginCall;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn;

.field final synthetic val$call:Lcom/getcapacitor/PluginCall;


# direct methods
.method constructor <init>(Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn;Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 22
    iput-object p1, p0, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn$1;->this$0:Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn;

    iput-object p2, p0, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn$1;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 25
    iget-object v0, p0, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn$1;->this$0:Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn;

    invoke-virtual {v0}, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    invoke-virtual {v0}, Landroidx/appcompat/app/AppCompatActivity;->getWindow()Landroid/view/Window;

    move-result-object v0

    const/16 v1, 0x80

    .line 26
    invoke-virtual {v0, v1}, Landroid/view/Window;->addFlags(I)V

    .line 27
    invoke-virtual {v0}, Landroid/view/Window;->getAttributes()Landroid/view/WindowManager$LayoutParams;

    move-result-object v0

    iget v0, v0, Landroid/view/WindowManager$LayoutParams;->flags:I

    and-int/2addr v0, v1

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    .line 28
    :goto_0
    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    .line 29
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 30
    const-string v2, "isEnabled"

    invoke-virtual {v1, v2, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 31
    iget-object v0, p0, Lcom/go/capacitor/keepscreenon/CapacitorKeepScreenOn$1;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-virtual {v0, v1}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    return-void
.end method
