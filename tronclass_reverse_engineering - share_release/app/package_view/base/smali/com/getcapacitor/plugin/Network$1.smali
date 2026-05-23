.class Lcom/getcapacitor/plugin/Network$1;
.super Landroid/content/BroadcastReceiver;
.source "Network.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/getcapacitor/plugin/Network;->load()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic this$0:Lcom/getcapacitor/plugin/Network;


# direct methods
.method constructor <init>(Lcom/getcapacitor/plugin/Network;)V
    .locals 0

    .line 42
    iput-object p1, p0, Lcom/getcapacitor/plugin/Network$1;->this$0:Lcom/getcapacitor/plugin/Network;

    invoke-direct {p0}, Landroid/content/BroadcastReceiver;-><init>()V

    return-void
.end method


# virtual methods
.method public onReceive(Landroid/content/Context;Landroid/content/Intent;)V
    .locals 1

    .line 45
    iget-object p1, p0, Lcom/getcapacitor/plugin/Network$1;->this$0:Lcom/getcapacitor/plugin/Network;

    invoke-virtual {p1}, Lcom/getcapacitor/plugin/Network;->hasRequiredPermissions()Z

    move-result p1

    if-eqz p1, :cond_0

    .line 46
    iget-object p1, p0, Lcom/getcapacitor/plugin/Network$1;->this$0:Lcom/getcapacitor/plugin/Network;

    invoke-static {p1}, Lcom/getcapacitor/plugin/Network;->access$000(Lcom/getcapacitor/plugin/Network;)Landroid/net/ConnectivityManager;

    move-result-object p2

    invoke-virtual {p2}, Landroid/net/ConnectivityManager;->getActiveNetworkInfo()Landroid/net/NetworkInfo;

    move-result-object p2

    invoke-static {p1, p2}, Lcom/getcapacitor/plugin/Network;->access$100(Lcom/getcapacitor/plugin/Network;Landroid/net/NetworkInfo;)Lcom/getcapacitor/JSObject;

    move-result-object p2

    const-string v0, "networkStatusChange"

    invoke-static {p1, v0, p2}, Lcom/getcapacitor/plugin/Network;->access$200(Lcom/getcapacitor/plugin/Network;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    goto :goto_0

    .line 48
    :cond_0
    iget-object p1, p0, Lcom/getcapacitor/plugin/Network$1;->this$0:Lcom/getcapacitor/plugin/Network;

    invoke-static {p1}, Lcom/getcapacitor/plugin/Network;->access$300(Lcom/getcapacitor/plugin/Network;)Ljava/lang/String;

    move-result-object p1

    const-string p2, "android.permission.ACCESS_NETWORK_STATE not set in AndroidManifest.xml"

    const/4 v0, 0x0

    invoke-static {p1, p2, v0}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_0
    return-void
.end method
