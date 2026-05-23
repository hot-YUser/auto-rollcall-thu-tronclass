.class public Lcom/getcapacitor/plugin/background/BackgroundTask;
.super Lcom/getcapacitor/Plugin;
.source "BackgroundTask.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
.end annotation


# static fields
.field public static TASK_BROADCAST_ACTION:Ljava/lang/String; = "com.getcapacitor.app.BACKGROUND_TASK_BROADCAST"


# instance fields
.field serviceIntent:Landroid/content/Intent;

.field private taskReceiver:Landroid/content/BroadcastReceiver;


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method public constructor <init>()V
    .locals 1

    .line 19
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    const/4 v0, 0x0

    .line 23
    iput-object v0, p0, Lcom/getcapacitor/plugin/background/BackgroundTask;->serviceIntent:Landroid/content/Intent;

    return-void
.end method

.method private callTaskCallback(Ljava/lang/String;)V
    .locals 0

    return-void
.end method


# virtual methods
.method public beforeExit(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
        returnType = "callback"
    .end annotation

    .line 57
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 58
    const-string v1, "taskId"

    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->getCallbackId()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 59
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public finish(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 64
    const-string v0, "taskId"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    .line 66
    const-string v0, "Must provide taskId"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 70
    :cond_0
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->success()V

    return-void
.end method

.method public load()V
    .locals 3

    .line 28
    new-instance v0, Landroid/content/IntentFilter;

    sget-object v1, Lcom/getcapacitor/plugin/background/BackgroundTask;->TASK_BROADCAST_ACTION:Ljava/lang/String;

    invoke-direct {v0, v1}, Landroid/content/IntentFilter;-><init>(Ljava/lang/String;)V

    .line 30
    new-instance v1, Lcom/getcapacitor/plugin/background/BackgroundTask$1;

    invoke-direct {v1, p0}, Lcom/getcapacitor/plugin/background/BackgroundTask$1;-><init>(Lcom/getcapacitor/plugin/background/BackgroundTask;)V

    iput-object v1, p0, Lcom/getcapacitor/plugin/background/BackgroundTask;->taskReceiver:Landroid/content/BroadcastReceiver;

    .line 39
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/background/BackgroundTask;->getContext()Landroid/content/Context;

    move-result-object v1

    invoke-static {v1}, Landroidx/localbroadcastmanager/content/LocalBroadcastManager;->getInstance(Landroid/content/Context;)Landroidx/localbroadcastmanager/content/LocalBroadcastManager;

    move-result-object v1

    iget-object v2, p0, Lcom/getcapacitor/plugin/background/BackgroundTask;->taskReceiver:Landroid/content/BroadcastReceiver;

    invoke-virtual {v1, v2, v0}, Landroidx/localbroadcastmanager/content/LocalBroadcastManager;->registerReceiver(Landroid/content/BroadcastReceiver;Landroid/content/IntentFilter;)V

    return-void
.end method
