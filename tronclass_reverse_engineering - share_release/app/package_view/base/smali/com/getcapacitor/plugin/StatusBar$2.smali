.class Lcom/getcapacitor/plugin/StatusBar$2;
.super Ljava/lang/Object;
.source "StatusBar.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/StatusBar;->setBackgroundColor(Lcom/getcapacitor/PluginCall;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/plugin/StatusBar;

.field final synthetic val$call:Lcom/getcapacitor/PluginCall;

.field final synthetic val$color:Ljava/lang/String;


# direct methods
.method constructor <init>(Lcom/getcapacitor/plugin/StatusBar;Ljava/lang/String;Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 58
    iput-object p1, p0, Lcom/getcapacitor/plugin/StatusBar$2;->this$0:Lcom/getcapacitor/plugin/StatusBar;

    iput-object p2, p0, Lcom/getcapacitor/plugin/StatusBar$2;->val$color:Ljava/lang/String;

    iput-object p3, p0, Lcom/getcapacitor/plugin/StatusBar$2;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 2

    .line 61
    iget-object v0, p0, Lcom/getcapacitor/plugin/StatusBar$2;->this$0:Lcom/getcapacitor/plugin/StatusBar;

    invoke-virtual {v0}, Lcom/getcapacitor/plugin/StatusBar;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    invoke-virtual {v0}, Landroidx/appcompat/app/AppCompatActivity;->getWindow()Landroid/view/Window;

    move-result-object v0

    const/high16 v1, 0x4000000

    .line 62
    invoke-virtual {v0, v1}, Landroid/view/Window;->clearFlags(I)V

    const/high16 v1, -0x80000000

    .line 63
    invoke-virtual {v0, v1}, Landroid/view/Window;->addFlags(I)V

    .line 65
    :try_start_0
    iget-object v1, p0, Lcom/getcapacitor/plugin/StatusBar$2;->val$color:Ljava/lang/String;

    invoke-virtual {v1}, Ljava/lang/String;->toUpperCase()Ljava/lang/String;

    move-result-object v1

    invoke-static {v1}, Landroid/graphics/Color;->parseColor(Ljava/lang/String;)I

    move-result v1

    .line 66
    invoke-virtual {v0, v1}, Landroid/view/Window;->setStatusBarColor(I)V

    .line 68
    iget-object v0, p0, Lcom/getcapacitor/plugin/StatusBar$2;->this$0:Lcom/getcapacitor/plugin/StatusBar;

    invoke-static {v0, v1}, Lcom/getcapacitor/plugin/StatusBar;->access$002(Lcom/getcapacitor/plugin/StatusBar;I)I

    .line 69
    iget-object v0, p0, Lcom/getcapacitor/plugin/StatusBar$2;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-virtual {v0}, Lcom/getcapacitor/PluginCall;->success()V
    :try_end_0
    .catch Ljava/lang/IllegalArgumentException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    .line 71
    :catch_0
    iget-object v0, p0, Lcom/getcapacitor/plugin/StatusBar$2;->val$call:Lcom/getcapacitor/PluginCall;

    const-string v1, "Invalid color provided. Must be a hex string (ex: #ff0000"

    invoke-virtual {v0, v1}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    :goto_0
    return-void
.end method
