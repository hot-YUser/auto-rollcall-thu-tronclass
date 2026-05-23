.class Lcom/getcapacitor/plugin/StatusBar$3;
.super Ljava/lang/Object;
.source "StatusBar.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/StatusBar;->hide(Lcom/getcapacitor/PluginCall;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/plugin/StatusBar;

.field final synthetic val$call:Lcom/getcapacitor/PluginCall;


# direct methods
.method constructor <init>(Lcom/getcapacitor/plugin/StatusBar;Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 80
    iput-object p1, p0, Lcom/getcapacitor/plugin/StatusBar$3;->this$0:Lcom/getcapacitor/plugin/StatusBar;

    iput-object p2, p0, Lcom/getcapacitor/plugin/StatusBar$3;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 83
    iget-object v0, p0, Lcom/getcapacitor/plugin/StatusBar$3;->this$0:Lcom/getcapacitor/plugin/StatusBar;

    invoke-virtual {v0}, Lcom/getcapacitor/plugin/StatusBar;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    invoke-virtual {v0}, Landroidx/appcompat/app/AppCompatActivity;->getWindow()Landroid/view/Window;

    move-result-object v0

    invoke-virtual {v0}, Landroid/view/Window;->getDecorView()Landroid/view/View;

    move-result-object v0

    .line 84
    invoke-virtual {v0}, Landroid/view/View;->getSystemUiVisibility()I

    move-result v1

    or-int/lit8 v1, v1, 0x4

    .line 87
    invoke-virtual {v0, v1}, Landroid/view/View;->setSystemUiVisibility(I)V

    .line 88
    iget-object v0, p0, Lcom/getcapacitor/plugin/StatusBar$3;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-virtual {v0}, Lcom/getcapacitor/PluginCall;->success()V

    return-void
.end method
