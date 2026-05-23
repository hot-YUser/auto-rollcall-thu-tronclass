.class Lcom/getcapacitor/plugin/Modals$2;
.super Ljava/lang/Object;
.source "Modals.java"

# interfaces
.implements Lcom/getcapacitor/Dialogs$OnResultListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/Modals;->confirm(Lcom/getcapacitor/PluginCall;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/plugin/Modals;

.field final synthetic val$call:Lcom/getcapacitor/PluginCall;


# direct methods
.method constructor <init>(Lcom/getcapacitor/plugin/Modals;Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 63
    iput-object p1, p0, Lcom/getcapacitor/plugin/Modals$2;->this$0:Lcom/getcapacitor/plugin/Modals;

    iput-object p2, p0, Lcom/getcapacitor/plugin/Modals$2;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onResult(ZZLjava/lang/String;)V
    .locals 0

    .line 66
    new-instance p2, Lcom/getcapacitor/JSObject;

    invoke-direct {p2}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 67
    const-string p3, "value"

    invoke-virtual {p2, p3, p1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 68
    iget-object p1, p0, Lcom/getcapacitor/plugin/Modals$2;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    return-void
.end method
