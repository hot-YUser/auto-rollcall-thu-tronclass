.class Lcom/wisdomgarden/mobile/CapacitorUpdater$1;
.super Ljava/lang/Object;
.source "CapacitorUpdater.java"

# interfaces
.implements Ljava/lang/Runnable;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/wisdomgarden/mobile/CapacitorUpdater;->download(Lcom/getcapacitor/PluginCall;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/wisdomgarden/mobile/CapacitorUpdater;

.field final synthetic val$call:Lcom/getcapacitor/PluginCall;


# direct methods
.method constructor <init>(Lcom/wisdomgarden/mobile/CapacitorUpdater;Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 33
    iput-object p1, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater$1;->this$0:Lcom/wisdomgarden/mobile/CapacitorUpdater;

    iput-object p2, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater$1;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public run()V
    .locals 4

    .line 36
    iget-object v0, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater$1;->val$call:Lcom/getcapacitor/PluginCall;

    const-string v1, "url"

    invoke-virtual {v0, v1}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 37
    iget-object v1, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater$1;->val$call:Lcom/getcapacitor/PluginCall;

    const-string v2, "version"

    invoke-virtual {v1, v2}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    .line 38
    iget-object v3, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater$1;->this$0:Lcom/wisdomgarden/mobile/CapacitorUpdater;

    invoke-static {v3}, Lcom/wisdomgarden/mobile/CapacitorUpdater;->access$000(Lcom/wisdomgarden/mobile/CapacitorUpdater;)Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;

    move-result-object v3

    invoke-virtual {v3, v0, v1}, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;->download(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/Boolean;

    move-result-object v0

    .line 39
    invoke-virtual {v0}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 40
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 41
    invoke-virtual {v0, v2, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 42
    iget-object v1, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater$1;->val$call:Lcom/getcapacitor/PluginCall;

    invoke-virtual {v1, v0}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    goto :goto_0

    .line 44
    :cond_0
    iget-object v0, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater$1;->val$call:Lcom/getcapacitor/PluginCall;

    const-string v1, "download failed"

    invoke-virtual {v0, v1}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    :goto_0
    return-void
.end method
