.class Lcom/getcapacitor/plugin/Keyboard$2;
.super Ljava/lang/Object;
.source "Keyboard.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/Keyboard;->show(Lcom/getcapacitor/PluginCall;)V
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

    .line 103
    iput-object p1, p0, Lcom/getcapacitor/plugin/Keyboard$2;->this$0:Lcom/getcapacitor/plugin/Keyboard;

    iput-object p2, p0, Lcom/getcapacitor/plugin/Keyboard$2;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 4

    .line 106
    new-instance v0, Landroid/os/Handler;

    invoke-direct {v0}, Landroid/os/Handler;-><init>()V

    new-instance v1, Lcom/getcapacitor/plugin/Keyboard$2$1;

    invoke-direct {v1, p0}, Lcom/getcapacitor/plugin/Keyboard$2$1;-><init>(Lcom/getcapacitor/plugin/Keyboard$2;)V

    const-wide/16 v2, 0x15e

    invoke-virtual {v0, v1, v2, v3}, Landroid/os/Handler;->postDelayed(Ljava/lang/Runnable;J)Z

    return-void
.end method
