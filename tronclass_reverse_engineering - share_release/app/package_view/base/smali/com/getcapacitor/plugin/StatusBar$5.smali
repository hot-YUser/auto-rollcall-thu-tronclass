.class Lcom/getcapacitor/plugin/StatusBar$5;
.super Ljava/lang/Object;
.source "StatusBar.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/StatusBar;->setOverlaysWebView(Lcom/getcapacitor/PluginCall;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/plugin/StatusBar;

.field final synthetic val$call:Lcom/getcapacitor/PluginCall;

.field final synthetic val$overlays:Ljava/lang/Boolean;


# direct methods
.method constructor <init>(Lcom/getcapacitor/plugin/StatusBar;Ljava/lang/Boolean;Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 132
    iput-object p1, p0, Lcom/getcapacitor/plugin/StatusBar$5;->this$0:Lcom/getcapacitor/plugin/StatusBar;

    iput-object p2, p0, Lcom/getcapacitor/plugin/StatusBar$5;->val$overlays:Ljava/lang/Boolean;

    iput-object p3, p0, Lcom/getcapacitor/plugin/StatusBar$5;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 135
    iget-object v0, p0, Lcom/getcapacitor/plugin/StatusBar$5;->val$overlays:Ljava/lang/Boolean;

    invoke-virtual {v0}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 137
    iget-object v0, p0, Lcom/getcapacitor/plugin/StatusBar$5;->this$0:Lcom/getcapacitor/plugin/StatusBar;

    invoke-virtual {v0}, Lcom/getcapacitor/plugin/StatusBar;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    invoke-virtual {v0}, Landroidx/appcompat/app/AppCompatActivity;->getWindow()Landroid/view/Window;

    move-result-object v0

    invoke-virtual {v0}, Landroid/view/Window;->getDecorView()Landroid/view/View;

    move-result-object v0

    .line 138
    invoke-virtual {v0}, Landroid/view/View;->getSystemUiVisibility()I

    move-result v1

    or-int/lit16 v1, v1, 0x500

    .line 140
    invoke-virtual {v0, v1}, Landroid/view/View;->setSystemUiVisibility(I)V

    .line 141
    iget-object v0, p0, Lcom/getcapacitor/plugin/StatusBar$5;->this$0:Lcom/getcapacitor/plugin/StatusBar;

    invoke-virtual {v0}, Lcom/getcapacitor/plugin/StatusBar;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v1

    invoke-virtual {v1}, Landroidx/appcompat/app/AppCompatActivity;->getWindow()Landroid/view/Window;

    move-result-object v1

    invoke-virtual {v1}, Landroid/view/Window;->getStatusBarColor()I

    move-result v1

    invoke-static {v0, v1}, Lcom/getcapacitor/plugin/StatusBar;->access$002(Lcom/getcapacitor/plugin/StatusBar;I)I

    .line 142
    iget-object v0, p0, Lcom/getcapacitor/plugin/StatusBar$5;->this$0:Lcom/getcapacitor/plugin/StatusBar;

    invoke-virtual {v0}, Lcom/getcapacitor/plugin/StatusBar;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    invoke-virtual {v0}, Landroidx/appcompat/app/AppCompatActivity;->getWindow()Landroid/view/Window;

    move-result-object v0

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Landroid/view/Window;->setStatusBarColor(I)V

    .line 144
    iget-object v0, p0, Lcom/getcapacitor/plugin/StatusBar$5;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-virtual {v0}, Lcom/getcapacitor/PluginCall;->success()V

    goto :goto_0

    .line 147
    :cond_0
    iget-object v0, p0, Lcom/getcapacitor/plugin/StatusBar$5;->this$0:Lcom/getcapacitor/plugin/StatusBar;

    invoke-virtual {v0}, Lcom/getcapacitor/plugin/StatusBar;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    invoke-virtual {v0}, Landroidx/appcompat/app/AppCompatActivity;->getWindow()Landroid/view/Window;

    move-result-object v0

    invoke-virtual {v0}, Landroid/view/Window;->getDecorView()Landroid/view/View;

    move-result-object v0

    .line 148
    invoke-virtual {v0}, Landroid/view/View;->getSystemUiVisibility()I

    move-result v1

    and-int/lit16 v1, v1, -0x501

    .line 150
    invoke-virtual {v0, v1}, Landroid/view/View;->setSystemUiVisibility(I)V

    .line 152
    iget-object v0, p0, Lcom/getcapacitor/plugin/StatusBar$5;->this$0:Lcom/getcapacitor/plugin/StatusBar;

    invoke-virtual {v0}, Lcom/getcapacitor/plugin/StatusBar;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    invoke-virtual {v0}, Landroidx/appcompat/app/AppCompatActivity;->getWindow()Landroid/view/Window;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/plugin/StatusBar$5;->this$0:Lcom/getcapacitor/plugin/StatusBar;

    invoke-static {v1}, Lcom/getcapacitor/plugin/StatusBar;->access$000(Lcom/getcapacitor/plugin/StatusBar;)I

    move-result v1

    invoke-virtual {v0, v1}, Landroid/view/Window;->setStatusBarColor(I)V

    .line 154
    iget-object v0, p0, Lcom/getcapacitor/plugin/StatusBar$5;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-virtual {v0}, Lcom/getcapacitor/PluginCall;->success()V

    :goto_0
    return-void
.end method
