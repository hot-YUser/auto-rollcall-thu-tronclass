.class public Lcom/getcapacitor/plugin/Network;
.super Lcom/getcapacitor/Plugin;
.source "Network.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
    permissions = {
        "android.permission.ACCESS_NETWORK_STATE"
    }
.end annotation


# static fields
.field public static final NETWORK_CHANGE_EVENT:Ljava/lang/String; = "networkStatusChange"

.field private static final PERMISSION_NOT_SET:Ljava/lang/String; = "android.permission.ACCESS_NETWORK_STATE not set in AndroidManifest.xml"


# instance fields
.field private cm:Landroid/net/ConnectivityManager;

.field private receiver:Landroid/content/BroadcastReceiver;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 28
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    return-void
.end method

.method static synthetic access$000(Lcom/getcapacitor/plugin/Network;)Landroid/net/ConnectivityManager;
    .locals 0

    .line 28
    iget-object p0, p0, Lcom/getcapacitor/plugin/Network;->cm:Landroid/net/ConnectivityManager;

    return-object p0
.end method

.method static synthetic access$100(Lcom/getcapacitor/plugin/Network;Landroid/net/NetworkInfo;)Lcom/getcapacitor/JSObject;
    .locals 0

    .line 28
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Network;->getStatusJSObject(Landroid/net/NetworkInfo;)Lcom/getcapacitor/JSObject;

    move-result-object p0

    return-object p0
.end method

.method static synthetic access$200(Lcom/getcapacitor/plugin/Network;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V
    .locals 0

    .line 28
    invoke-virtual {p0, p1, p2}, Lcom/getcapacitor/plugin/Network;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method static synthetic access$300(Lcom/getcapacitor/plugin/Network;)Ljava/lang/String;
    .locals 0

    .line 28
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Network;->getLogTag()Ljava/lang/String;

    move-result-object p0

    return-object p0
.end method

.method private getNormalizedTypeName(Landroid/net/NetworkInfo;)Ljava/lang/String;
    .locals 1

    .line 114
    invoke-virtual {p1}, Landroid/net/NetworkInfo;->getTypeName()Ljava/lang/String;

    move-result-object p1

    .line 115
    const-string v0, "WIFI"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 116
    const-string p1, "wifi"

    return-object p1

    .line 118
    :cond_0
    const-string v0, "MOBILE"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_1

    .line 119
    const-string p1, "cellular"

    return-object p1

    .line 121
    :cond_1
    const-string p1, "none"

    return-object p1
.end method

.method private getStatusJSObject(Landroid/net/NetworkInfo;)Lcom/getcapacitor/JSObject;
    .locals 4

    .line 97
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 98
    const-string v1, "connectionType"

    const-string v2, "connected"

    if-nez p1, :cond_0

    const/4 p1, 0x0

    .line 99
    invoke-virtual {v0, v2, p1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 100
    const-string p1, "none"

    invoke-virtual {v0, v1, p1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    goto :goto_0

    .line 102
    :cond_0
    invoke-virtual {p1}, Landroid/net/NetworkInfo;->isConnected()Z

    move-result v3

    invoke-virtual {v0, v2, v3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 103
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Network;->getNormalizedTypeName(Landroid/net/NetworkInfo;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, v1, p1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    :goto_0
    return-object v0
.end method


# virtual methods
.method public getStatus(Lcom/getcapacitor/PluginCall;)V
    .locals 2
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 61
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Network;->hasRequiredPermissions()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 63
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Network;->getContext()Landroid/content/Context;

    move-result-object v0

    const-string v1, "connectivity"

    invoke-virtual {v0, v1}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/net/ConnectivityManager;

    .line 65
    invoke-virtual {v0}, Landroid/net/ConnectivityManager;->getActiveNetworkInfo()Landroid/net/NetworkInfo;

    move-result-object v0

    .line 67
    invoke-direct {p0, v0}, Lcom/getcapacitor/plugin/Network;->getStatusJSObject(Landroid/net/NetworkInfo;)Lcom/getcapacitor/JSObject;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    goto :goto_0

    .line 69
    :cond_0
    const-string v0, "android.permission.ACCESS_NETWORK_STATE not set in AndroidManifest.xml"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    :goto_0
    return-void
.end method

.method protected handleOnPause()V
    .locals 2

    .line 87
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Network;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/plugin/Network;->receiver:Landroid/content/BroadcastReceiver;

    invoke-virtual {v0, v1}, Landroidx/appcompat/app/AppCompatActivity;->unregisterReceiver(Landroid/content/BroadcastReceiver;)V

    return-void
.end method

.method protected handleOnResume()V
    .locals 3

    .line 78
    new-instance v0, Landroid/content/IntentFilter;

    const-string v1, "android.net.conn.CONNECTIVITY_CHANGE"

    invoke-direct {v0, v1}, Landroid/content/IntentFilter;-><init>(Ljava/lang/String;)V

    .line 79
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Network;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v1

    iget-object v2, p0, Lcom/getcapacitor/plugin/Network;->receiver:Landroid/content/BroadcastReceiver;

    invoke-virtual {v1, v2, v0}, Landroidx/appcompat/app/AppCompatActivity;->registerReceiver(Landroid/content/BroadcastReceiver;Landroid/content/IntentFilter;)Landroid/content/Intent;

    return-void
.end method

.method public load()V
    .locals 2

    .line 40
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Network;->getContext()Landroid/content/Context;

    move-result-object v0

    const-string v1, "connectivity"

    invoke-virtual {v0, v1}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/net/ConnectivityManager;

    iput-object v0, p0, Lcom/getcapacitor/plugin/Network;->cm:Landroid/net/ConnectivityManager;

    .line 42
    new-instance v0, Lcom/getcapacitor/plugin/Network$1;

    invoke-direct {v0, p0}, Lcom/getcapacitor/plugin/Network$1;-><init>(Lcom/getcapacitor/plugin/Network;)V

    iput-object v0, p0, Lcom/getcapacitor/plugin/Network;->receiver:Landroid/content/BroadcastReceiver;

    return-void
.end method
