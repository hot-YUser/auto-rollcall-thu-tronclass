.class public Lcom/wisdomgarden/mobile/CapacitorUpdater;
.super Lcom/getcapacitor/Plugin;
.source "CapacitorUpdater.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
.end annotation


# instance fields
.field private TAG:Ljava/lang/String;

.field private implementation:Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;

.field private prefs:Landroid/content/SharedPreferences;


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 18
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    .line 19
    const-string v0, "Capacitor-updater"

    iput-object v0, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater;->TAG:Ljava/lang/String;

    return-void
.end method

.method private _reload()Z
    .locals 2

    .line 51
    iget-object v0, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater;->implementation:Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;

    invoke-virtual {v0}, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;->getLastPathHot()Ljava/lang/String;

    move-result-object v0

    .line 52
    invoke-virtual {v0}, Ljava/lang/String;->length()I

    move-result v1

    if-lez v1, :cond_0

    .line 53
    iget-object v1, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v1, v0}, Lcom/getcapacitor/Bridge;->setServerBasePath(Ljava/lang/String;)V

    :cond_0
    const/4 v0, 0x1

    return v0
.end method

.method private _reset(Ljava/lang/Boolean;)Z
    .locals 1

    .line 110
    iget-object v0, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater;->implementation:Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;

    invoke-virtual {v0}, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;->reset()V

    .line 111
    invoke-virtual {p1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result p1

    if-eqz p1, :cond_0

    .line 112
    iget-object p1, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater;->implementation:Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;

    invoke-virtual {p1}, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;->getLastPathHot()Ljava/lang/String;

    move-result-object p1

    .line 113
    iget-object v0, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/Bridge;->setServerAssetPath(Ljava/lang/String;)V

    :cond_0
    const/4 p1, 0x1

    return p1
.end method

.method static synthetic access$000(Lcom/wisdomgarden/mobile/CapacitorUpdater;)Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;
    .locals 0

    .line 18
    iget-object p0, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater;->implementation:Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;

    return-object p0
.end method


# virtual methods
.method public current(Lcom/getcapacitor/PluginCall;)V
    .locals 4
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 130
    iget-object v0, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater;->implementation:Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;

    invoke-virtual {v0}, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;->getLastPathHot()Ljava/lang/String;

    move-result-object v0

    .line 131
    iget-object v1, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater;->implementation:Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;

    invoke-virtual {v1}, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;->getCurrentVersion()Ljava/lang/String;

    move-result-object v1

    .line 132
    new-instance v2, Lcom/getcapacitor/JSObject;

    invoke-direct {v2}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 133
    invoke-virtual {v0}, Ljava/lang/String;->length()I

    move-result v3

    if-lez v3, :cond_0

    goto :goto_0

    :cond_0
    const-string v0, "builtin"

    :goto_0
    const-string v3, "serverBasePath"

    invoke-virtual {v2, v3, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 134
    const-string v0, "pathPersist"

    invoke-virtual {v2, v0, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 135
    invoke-virtual {p1, v2}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public delete(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    const-string v0, "Delete failed, version "

    .line 87
    const-string v1, "version"

    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    .line 89
    :try_start_0
    iget-object v2, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater;->implementation:Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;

    invoke-virtual {v2, v1}, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;->delete(Ljava/lang/String;)Ljava/lang/Boolean;

    move-result-object v2

    .line 90
    invoke-virtual {v2}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v2

    if-eqz v2, :cond_0

    .line 91
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->resolve()V

    goto :goto_0

    .line 93
    :cond_0
    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " doesn\'t exist"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 96
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "An unexpected error occurred during deletion of folder. Message: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0}, Ljava/io/IOException;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    const-string v1, "CapacitorUpdater"

    invoke-static {v1, v0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    .line 97
    const-string v0, "An unexpected error occurred during deletion of folder."

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    :goto_0
    return-void
.end method

.method public download(Lcom/getcapacitor/PluginCall;)V
    .locals 2
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 33
    new-instance v0, Ljava/lang/Thread;

    new-instance v1, Lcom/wisdomgarden/mobile/CapacitorUpdater$1;

    invoke-direct {v1, p0, p1}, Lcom/wisdomgarden/mobile/CapacitorUpdater$1;-><init>(Lcom/wisdomgarden/mobile/CapacitorUpdater;Lcom/getcapacitor/PluginCall;)V

    invoke-direct {v0, v1}, Ljava/lang/Thread;-><init>(Ljava/lang/Runnable;)V

    .line 47
    invoke-virtual {v0}, Ljava/lang/Thread;->start()V

    return-void
.end method

.method public list(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 103
    iget-object v0, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater;->implementation:Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;

    invoke-virtual {v0}, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;->list()Ljava/util/ArrayList;

    move-result-object v0

    .line 104
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 105
    new-instance v2, Lcom/getcapacitor/JSArray;

    invoke-direct {v2, v0}, Lcom/getcapacitor/JSArray;-><init>(Ljava/util/Collection;)V

    const-string v0, "versions"

    invoke-virtual {v1, v0, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 106
    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public load()V
    .locals 3

    .line 26
    invoke-super {p0}, Lcom/getcapacitor/Plugin;->load()V

    .line 27
    invoke-virtual {p0}, Lcom/wisdomgarden/mobile/CapacitorUpdater;->getContext()Landroid/content/Context;

    move-result-object v0

    const-string v1, "CapWebViewSettings"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Landroid/content/Context;->getSharedPreferences(Ljava/lang/String;I)Landroid/content/SharedPreferences;

    move-result-object v0

    iput-object v0, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater;->prefs:Landroid/content/SharedPreferences;

    .line 28
    new-instance v0, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;

    invoke-virtual {p0}, Lcom/wisdomgarden/mobile/CapacitorUpdater;->getContext()Landroid/content/Context;

    move-result-object v1

    invoke-direct {v0, v1, p0}, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;-><init>(Landroid/content/Context;Lcom/wisdomgarden/mobile/CapacitorUpdater;)V

    iput-object v0, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater;->implementation:Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;

    return-void
.end method

.method public reload(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 60
    invoke-direct {p0}, Lcom/wisdomgarden/mobile/CapacitorUpdater;->_reload()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 61
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->resolve()V

    goto :goto_0

    .line 63
    :cond_0
    const-string v0, "reload failed"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    :goto_0
    return-void
.end method

.method public reset(Lcom/getcapacitor/PluginCall;)V
    .locals 2
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    const/4 v0, 0x0

    .line 120
    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    const-string v1, "autoReload"

    invoke-virtual {p1, v1, v0}, Lcom/getcapacitor/PluginCall;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v0

    .line 121
    invoke-direct {p0, v0}, Lcom/wisdomgarden/mobile/CapacitorUpdater;->_reset(Ljava/lang/Boolean;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 122
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->resolve()V

    return-void

    .line 125
    :cond_0
    const-string v0, "\u2728  Capacitor-updater: Reset failed"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    return-void
.end method

.method public set(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 69
    const-string v0, "version"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const/4 v1, 0x0

    .line 70
    invoke-static {v1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v1

    const-string v2, "autoReload"

    invoke-virtual {p1, v2, v1}, Lcom/getcapacitor/PluginCall;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v1

    .line 71
    iget-object v2, p0, Lcom/wisdomgarden/mobile/CapacitorUpdater;->implementation:Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;

    invoke-virtual {v2, v0}, Lcom/wisdomgarden/mobile/CapacitorUpdaterCore;->set(Ljava/lang/String;)Ljava/lang/Boolean;

    move-result-object v2

    .line 73
    invoke-virtual {v2}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v2

    if-nez v2, :cond_0

    .line 74
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Update failed, version "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " doesn\'t exist"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    goto :goto_0

    .line 76
    :cond_0
    invoke-virtual {v1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v0

    if-eqz v0, :cond_1

    .line 77
    invoke-virtual {p0, p1}, Lcom/wisdomgarden/mobile/CapacitorUpdater;->reload(Lcom/getcapacitor/PluginCall;)V

    goto :goto_0

    .line 79
    :cond_1
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->resolve()V

    :goto_0
    return-void
.end method
