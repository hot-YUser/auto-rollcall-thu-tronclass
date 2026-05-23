.class public Lcom/bkon/capacitor/DarkMode/DarkMode;
.super Lcom/getcapacitor/Plugin;
.source "DarkMode.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
.end annotation


# static fields
.field private static final EVENT_DARK_MODE_CHANGE:Ljava/lang/String; = "darkModeStateChanged"


# instance fields
.field private isDarkModeOn:Z


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 17
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    const/4 v0, 0x0

    .line 19
    iput-boolean v0, p0, Lcom/bkon/capacitor/DarkMode/DarkMode;->isDarkModeOn:Z

    return-void
.end method


# virtual methods
.method public checkMode()Lcom/getcapacitor/JSObject;
    .locals 5

    .line 57
    invoke-virtual {p0}, Lcom/bkon/capacitor/DarkMode/DarkMode;->getContext()Landroid/content/Context;

    move-result-object v0

    .line 58
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 60
    invoke-virtual {v0}, Landroid/content/Context;->getResources()Landroid/content/res/Resources;

    move-result-object v0

    invoke-virtual {v0}, Landroid/content/res/Resources;->getConfiguration()Landroid/content/res/Configuration;

    move-result-object v0

    iget v0, v0, Landroid/content/res/Configuration;->uiMode:I

    and-int/lit8 v0, v0, 0x30

    const/4 v2, 0x0

    .line 61
    const-string v3, "isDarkModeOn"

    if-eqz v0, :cond_2

    const/16 v4, 0x10

    if-eq v0, v4, :cond_1

    const/16 v2, 0x20

    if-eq v0, v2, :cond_0

    goto :goto_0

    :cond_0
    const/4 v0, 0x1

    .line 63
    iput-boolean v0, p0, Lcom/bkon/capacitor/DarkMode/DarkMode;->isDarkModeOn:Z

    .line 64
    invoke-virtual {v1, v3, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    goto :goto_0

    .line 68
    :cond_1
    iput-boolean v2, p0, Lcom/bkon/capacitor/DarkMode/DarkMode;->isDarkModeOn:Z

    .line 69
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 70
    iget-boolean v0, p0, Lcom/bkon/capacitor/DarkMode/DarkMode;->isDarkModeOn:Z

    invoke-virtual {v1, v3, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    goto :goto_0

    .line 74
    :cond_2
    iput-boolean v2, p0, Lcom/bkon/capacitor/DarkMode/DarkMode;->isDarkModeOn:Z

    .line 75
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 76
    iget-boolean v0, p0, Lcom/bkon/capacitor/DarkMode/DarkMode;->isDarkModeOn:Z

    invoke-virtual {v1, v3, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    :goto_0
    return-object v1
.end method

.method protected handleOnRestart()V
    .locals 2

    .line 24
    invoke-super {p0}, Lcom/getcapacitor/Plugin;->handleOnRestart()V

    .line 25
    const-string v0, "capacitor"

    const-string v1, "restarted"

    invoke-static {v0, v1}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 26
    invoke-virtual {p0}, Lcom/bkon/capacitor/DarkMode/DarkMode;->notifyWeb()V

    return-void
.end method

.method protected handleOnResume()V
    .locals 2

    .line 31
    invoke-super {p0}, Lcom/getcapacitor/Plugin;->handleOnResume()V

    .line 32
    const-string v0, "capacitor"

    const-string v1, "resumed"

    invoke-static {v0, v1}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 33
    invoke-virtual {p0}, Lcom/bkon/capacitor/DarkMode/DarkMode;->notifyWeb()V

    return-void
.end method

.method public isDarkModeOn(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 52
    invoke-virtual {p0}, Lcom/bkon/capacitor/DarkMode/DarkMode;->checkMode()Lcom/getcapacitor/JSObject;

    move-result-object v0

    .line 53
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public notifyWeb()V
    .locals 5

    .line 37
    const-string v0, "isDarkModeOn"

    invoke-virtual {p0}, Lcom/bkon/capacitor/DarkMode/DarkMode;->checkMode()Lcom/getcapacitor/JSObject;

    move-result-object v1

    .line 39
    :try_start_0
    invoke-virtual {v1, v0}, Lcom/getcapacitor/JSObject;->getBoolean(Ljava/lang/String;)Z

    move-result v2

    if-eqz v2, :cond_0

    .line 40
    invoke-virtual {p0}, Lcom/bkon/capacitor/DarkMode/DarkMode;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object v2

    invoke-virtual {v2}, Lcom/getcapacitor/Bridge;->getActivity()Landroid/app/Activity;

    move-result-object v2

    invoke-virtual {v2}, Landroid/app/Activity;->getWindow()Landroid/view/Window;

    move-result-object v2

    .line 41
    invoke-virtual {p0}, Lcom/bkon/capacitor/DarkMode/DarkMode;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object v3

    invoke-virtual {v3}, Lcom/getcapacitor/Bridge;->getActivity()Landroid/app/Activity;

    move-result-object v3

    invoke-virtual {v3}, Landroid/app/Activity;->getResources()Landroid/content/res/Resources;

    move-result-object v3

    sget v4, Lcom/bkon/capacitor/DarkMode/capacitordarkmode/R$color;->black:I

    invoke-virtual {v3, v4}, Landroid/content/res/Resources;->getColor(I)I

    move-result v3

    invoke-virtual {v2, v3}, Landroid/view/Window;->setNavigationBarColor(I)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v2

    .line 44
    invoke-virtual {v2}, Lorg/json/JSONException;->printStackTrace()V

    .line 46
    :cond_0
    :goto_0
    const-string v2, "capacitor"

    invoke-virtual {v1, v0}, Lcom/getcapacitor/JSObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-static {v2, v0}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    .line 47
    const-string v0, "darkModeStateChanged"

    const/4 v2, 0x1

    invoke-virtual {p0, v0, v1, v2}, Lcom/bkon/capacitor/DarkMode/DarkMode;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;Z)V

    return-void
.end method
