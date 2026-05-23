.class Lcom/getcapacitor/plugin/Keyboard$2$1;
.super Ljava/lang/Object;
.source "Keyboard.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/Keyboard$2;->run()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$1:Lcom/getcapacitor/plugin/Keyboard$2;


# direct methods
.method constructor <init>(Lcom/getcapacitor/plugin/Keyboard$2;)V
    .locals 0

    .line 106
    iput-object p1, p0, Lcom/getcapacitor/plugin/Keyboard$2$1;->this$1:Lcom/getcapacitor/plugin/Keyboard$2;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 3

    .line 109
    iget-object v0, p0, Lcom/getcapacitor/plugin/Keyboard$2$1;->this$1:Lcom/getcapacitor/plugin/Keyboard$2;

    iget-object v0, v0, Lcom/getcapacitor/plugin/Keyboard$2;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    invoke-virtual {v0}, Lcom/getcapacitor/plugin/Keyboard;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    const-string v1, "input_method"

    invoke-virtual {v0, v1}, Landroidx/appcompat/app/AppCompatActivity;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/view/inputmethod/InputMethodManager;

    const/4 v1, 0x0

    const/4 v2, 0x1

    invoke-virtual {v0, v1, v2}, Landroid/view/inputmethod/InputMethodManager;->toggleSoftInput(II)V

    .line 110
    iget-object v0, p0, Lcom/getcapacitor/plugin/Keyboard$2$1;->this$1:Lcom/getcapacitor/plugin/Keyboard$2;

    iget-object v0, v0, Lcom/getcapacitor/plugin/Keyboard$2;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-virtual {v0}, Lcom/getcapacitor/PluginCall;->success()V

    return-void
.end method
