.class public Lcom/seppedev/plugins/badge/Badge;
.super Lcom/getcapacitor/Plugin;
.source "Badge.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
.end annotation


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 12
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    return-void
.end method


# virtual methods
.method public clearBadgeCount(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 33
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 35
    invoke-virtual {p0}, Lcom/seppedev/plugins/badge/Badge;->getContext()Landroid/content/Context;

    move-result-object v1

    invoke-static {v1}, Lme/leolin/shortcutbadger/ShortcutBadger;->isBadgeCounterSupported(Landroid/content/Context;)Z

    move-result v1

    const-string v2, "success"

    if-eqz v1, :cond_0

    .line 36
    invoke-virtual {p0}, Lcom/seppedev/plugins/badge/Badge;->getContext()Landroid/content/Context;

    move-result-object v1

    invoke-static {v1}, Lme/leolin/shortcutbadger/ShortcutBadger;->removeCount(Landroid/content/Context;)Z

    const/4 v1, 0x1

    .line 37
    invoke-virtual {v0, v2, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 38
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    goto :goto_0

    :cond_0
    const/4 v1, 0x0

    .line 40
    invoke-virtual {v0, v2, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 41
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    :goto_0
    return-void
.end method

.method public hasPermission(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 54
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 55
    const-string v1, "success"

    const/4 v2, 0x1

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 56
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public requestPermission(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 47
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 48
    const-string v1, "success"

    const/4 v2, 0x1

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 49
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public setBadgeCount(Lcom/getcapacitor/PluginCall;)V
    .locals 5
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    const/4 v0, 0x0

    .line 16
    invoke-static {v0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    const-string v2, "count"

    invoke-virtual {p1, v2, v1}, Lcom/getcapacitor/PluginCall;->getInt(Ljava/lang/String;Ljava/lang/Integer;)Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/Integer;->intValue()I

    move-result v1

    .line 17
    new-instance v2, Lcom/getcapacitor/JSObject;

    invoke-direct {v2}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 19
    invoke-virtual {p0}, Lcom/seppedev/plugins/badge/Badge;->getContext()Landroid/content/Context;

    move-result-object v3

    invoke-static {v3}, Lme/leolin/shortcutbadger/ShortcutBadger;->isBadgeCounterSupported(Landroid/content/Context;)Z

    move-result v3

    const-string v4, "success"

    if-eqz v3, :cond_0

    .line 20
    invoke-virtual {p0}, Lcom/seppedev/plugins/badge/Badge;->getContext()Landroid/content/Context;

    move-result-object v0

    invoke-static {v0, v1}, Lme/leolin/shortcutbadger/ShortcutBadger;->applyCount(Landroid/content/Context;I)Z

    const/4 v0, 0x1

    .line 21
    invoke-virtual {v2, v4, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 22
    const-string v0, "value"

    invoke-virtual {v2, v0, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;I)Lcom/getcapacitor/JSObject;

    .line 23
    invoke-virtual {p1, v2}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    goto :goto_0

    .line 25
    :cond_0
    invoke-virtual {v2, v4, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    .line 26
    invoke-virtual {p1, v2}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    :goto_0
    return-void
.end method
