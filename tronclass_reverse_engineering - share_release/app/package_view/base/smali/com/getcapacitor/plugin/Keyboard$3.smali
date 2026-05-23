.class Lcom/getcapacitor/plugin/Keyboard$3;
.super Ljava/lang/Object;
.source "Keyboard.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/Keyboard;->hide(Lcom/getcapacitor/PluginCall;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/plugin/Keyboard;

.field final synthetic val$call:Lcom/getcapacitor/PluginCall;


# direct methods
.method constructor <init>(Lcom/getcapacitor/plugin/Keyboard;Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 119
    iput-object p1, p0, Lcom/getcapacitor/plugin/Keyboard$3;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    iput-object p2, p0, Lcom/getcapacitor/plugin/Keyboard$3;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 123
    iget-object v0, p0, Lcom/getcapacitor/plugin/Keyboard$3;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    invoke-virtual {v0}, Lcom/getcapacitor/plugin/Keyboard;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    const-string v1, "input_method"

    invoke-virtual {v0, v1}, Landroidx/appcompat/app/AppCompatActivity;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/view/inputmethod/InputMethodManager;

    .line 124
    iget-object v1, p0, Lcom/getcapacitor/plugin/Keyboard$3;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    invoke-virtual {v1}, Lcom/getcapacitor/plugin/Keyboard;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v1

    invoke-virtual {v1}, Landroidx/appcompat/app/AppCompatActivity;->getCurrentFocus()Landroid/view/View;

    move-result-object v1

    if-nez v1, :cond_0

    .line 127
    iget-object v0, p0, Lcom/getcapacitor/plugin/Keyboard$3;->val$call:Lcom/getcapacitor/PluginCall;

    const-string v1, "Can\'t close keyboard, not currently focused"

    invoke-virtual {v0, v1}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    goto :goto_0

    .line 129
    :cond_0
    invoke-virtual {v1}, Landroid/view/View;->getWindowToken()Landroid/os/IBinder;

    move-result-object v1

    const/4 v2, 0x2

    invoke-virtual {v0, v1, v2}, Landroid/view/inputmethod/InputMethodManager;->hideSoftInputFromWindow(Landroid/os/IBinder;I)Z

    .line 130
    iget-object v0, p0, Lcom/getcapacitor/plugin/Keyboard$3;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-virtual {v0}, Lcom/getcapacitor/PluginCall;->success()V

    :goto_0
    return-void
.end method
