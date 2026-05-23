.class Lcom/getcapacitor/plugin/StatusBar$1;
.super Ljava/lang/Object;
.source "StatusBar.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/StatusBar;->setStyle(Lcom/getcapacitor/PluginCall;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/plugin/StatusBar;

.field final synthetic val$call:Lcom/getcapacitor/PluginCall;

.field final synthetic val$style:Ljava/lang/String;


# direct methods
.method constructor <init>(Lcom/getcapacitor/plugin/StatusBar;Ljava/lang/String;Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 32
    iput-object p1, p0, Lcom/getcapacitor/plugin/StatusBar$1;->this$0:Lcom/getcapacitor/plugin/StatusBar;

    iput-object p2, p0, Lcom/getcapacitor/plugin/StatusBar$1;->val$style:Ljava/lang/String;

    iput-object p3, p0, Lcom/getcapacitor/plugin/StatusBar$1;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 4

    .line 35
    iget-object v0, p0, Lcom/getcapacitor/plugin/StatusBar$1;->this$0:Lcom/getcapacitor/plugin/StatusBar;

    invoke-virtual {v0}, Lcom/getcapacitor/plugin/StatusBar;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    invoke-virtual {v0}, Landroidx/appcompat/app/AppCompatActivity;->getWindow()Landroid/view/Window;

    move-result-object v0

    .line 36
    invoke-virtual {v0}, Landroid/view/Window;->getDecorView()Landroid/view/View;

    move-result-object v0

    .line 38
    invoke-virtual {v0}, Landroid/view/View;->getSystemUiVisibility()I

    move-result v1

    .line 40
    iget-object v2, p0, Lcom/getcapacitor/plugin/StatusBar$1;->val$style:Ljava/lang/String;

    const-string v3, "DARK"

    invoke-virtual {v2, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v2

    if-eqz v2, :cond_0

    and-int/lit16 v1, v1, -0x2001

    .line 41
    invoke-virtual {v0, v1}, Landroid/view/View;->setSystemUiVisibility(I)V

    goto :goto_0

    :cond_0
    or-int/lit16 v1, v1, 0x2000

    .line 43
    invoke-virtual {v0, v1}, Landroid/view/View;->setSystemUiVisibility(I)V

    .line 45
    :goto_0
    iget-object v0, p0, Lcom/getcapacitor/plugin/StatusBar$1;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-virtual {v0}, Lcom/getcapacitor/PluginCall;->success()V

    return-void
.end method
