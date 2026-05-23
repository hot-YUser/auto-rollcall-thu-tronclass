.class Lcom/getcapacitor/plugin/Modals$3;
.super Ljava/lang/Object;
.source "Modals.java"

# interfaces
.implements Lcom/getcapacitor/Dialogs$OnResultListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/Modals;->prompt(Lcom/getcapacitor/PluginCall;)V
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

    .line 93
    iput-object p1, p0, Lcom/getcapacitor/plugin/Modals$3;->this$0:Lcom/getcapacitor/plugin/Modals;

    iput-object p2, p0, Lcom/getcapacitor/plugin/Modals$3;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onResult(ZZLjava/lang/String;)V
    .locals 1

    .line 96
    new-instance p1, Lcom/getcapacitor/JSObject;

    invoke-direct {p1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 97
    const-string v0, "cancelled"

    invoke-virtual {p1, v0, p2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    if-nez p3, :cond_0

    .line 98
    const-string p3, ""

    :cond_0
    const-string p2, "value"

    invoke-virtual {p1, p2, p3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 99
    iget-object p2, p0, Lcom/getcapacitor/plugin/Modals$3;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-virtual {p2, p1}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    return-void
.end method
