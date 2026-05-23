.class public Lcom/getcapacitor/BridgeActivity;
.super Landroidx/appcompat/app/AppCompatActivity;
.source "BridgeActivity.java"


# instance fields
.field private activityDepth:I

.field protected bridge:Lcom/getcapacitor/Bridge;

.field private config:Lorg/json/JSONObject;

.field protected cordovaInterface:Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;

.field private initialPlugins:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Ljava/lang/Class<",
            "+",
            "Lcom/getcapacitor/Plugin;",
            ">;>;"
        }
    .end annotation
.end field

.field protected keepRunning:Z

.field private lastActivityPlugin:Ljava/lang/String;

.field private mockWebView:Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;

.field private pluginEntries:Ljava/util/ArrayList;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/ArrayList<",
            "Lorg/apache/cordova/PluginEntry;",
            ">;"
        }
    .end annotation
.end field

.field private pluginManager:Lorg/apache/cordova/PluginManager;

.field private preferences:Lorg/apache/cordova/CordovaPreferences;

.field private webView:Landroid/webkit/WebView;


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 25
    invoke-direct {p0}, Landroidx/appcompat/app/AppCompatActivity;-><init>()V

    const/4 v0, 0x1

    .line 29
    iput-boolean v0, p0, Lcom/getcapacitor/BridgeActivity;->keepRunning:Z

    const/4 v0, 0x0

    .line 36
    iput v0, p0, Lcom/getcapacitor/BridgeActivity;->activityDepth:I

    .line 40
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    iput-object v0, p0, Lcom/getcapacitor/BridgeActivity;->initialPlugins:Ljava/util/List;

    return-void
.end method

.method private fireAppStateChanged(Z)V
    .locals 2

    .line 101
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->bridge:Lcom/getcapacitor/Bridge;

    const-string v1, "App"

    invoke-virtual {v0, v1}, Lcom/getcapacitor/Bridge;->getPlugin(Ljava/lang/String;)Lcom/getcapacitor/PluginHandle;

    move-result-object v0

    if-nez v0, :cond_0

    return-void

    .line 106
    :cond_0
    invoke-virtual {v0}, Lcom/getcapacitor/PluginHandle;->getInstance()Lcom/getcapacitor/Plugin;

    move-result-object v0

    check-cast v0, Lcom/getcapacitor/plugin/App;

    if-eqz v0, :cond_1

    .line 108
    invoke-virtual {v0, p1}, Lcom/getcapacitor/plugin/App;->fireChange(Z)V

    :cond_1
    return-void
.end method


# virtual methods
.method public getBridge()Lcom/getcapacitor/Bridge;
    .locals 1

    .line 93
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->bridge:Lcom/getcapacitor/Bridge;

    return-object v0
.end method

.method protected init(Landroid/os/Bundle;Ljava/util/List;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/os/Bundle;",
            "Ljava/util/List<",
            "Ljava/lang/Class<",
            "+",
            "Lcom/getcapacitor/Plugin;",
            ">;>;)V"
        }
    .end annotation

    const/4 v0, 0x0

    .line 48
    invoke-virtual {p0, p1, p2, v0}, Lcom/getcapacitor/BridgeActivity;->init(Landroid/os/Bundle;Ljava/util/List;Lorg/json/JSONObject;)V

    return-void
.end method

.method protected init(Landroid/os/Bundle;Ljava/util/List;Lorg/json/JSONObject;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/os/Bundle;",
            "Ljava/util/List<",
            "Ljava/lang/Class<",
            "+",
            "Lcom/getcapacitor/Plugin;",
            ">;>;",
            "Lorg/json/JSONObject;",
            ")V"
        }
    .end annotation

    .line 51
    iput-object p2, p0, Lcom/getcapacitor/BridgeActivity;->initialPlugins:Ljava/util/List;

    .line 52
    iput-object p3, p0, Lcom/getcapacitor/BridgeActivity;->config:Lorg/json/JSONObject;

    .line 53
    invoke-virtual {p0}, Lcom/getcapacitor/BridgeActivity;->getApplicationContext()Landroid/content/Context;

    move-result-object p2

    invoke-virtual {p0, p2, p0}, Lcom/getcapacitor/BridgeActivity;->loadConfig(Landroid/content/Context;Landroid/app/Activity;)V

    .line 55
    invoke-virtual {p0}, Lcom/getcapacitor/BridgeActivity;->getApplication()Landroid/app/Application;

    move-result-object p2

    invoke-virtual {p0}, Lcom/getcapacitor/BridgeActivity;->getResources()Landroid/content/res/Resources;

    move-result-object p3

    invoke-virtual {p0}, Lcom/getcapacitor/BridgeActivity;->getPackageName()Ljava/lang/String;

    move-result-object v0

    const-string v1, "AppTheme_NoActionBar"

    const-string v2, "style"

    invoke-virtual {p3, v1, v2, v0}, Landroid/content/res/Resources;->getIdentifier(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)I

    move-result p3

    invoke-virtual {p2, p3}, Landroid/app/Application;->setTheme(I)V

    .line 56
    invoke-virtual {p0}, Lcom/getcapacitor/BridgeActivity;->getResources()Landroid/content/res/Resources;

    move-result-object p2

    invoke-virtual {p0}, Lcom/getcapacitor/BridgeActivity;->getPackageName()Ljava/lang/String;

    move-result-object p3

    invoke-virtual {p2, v1, v2, p3}, Landroid/content/res/Resources;->getIdentifier(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)I

    move-result p2

    invoke-virtual {p0, p2}, Lcom/getcapacitor/BridgeActivity;->setTheme(I)V

    .line 57
    sget p2, Lcom/getcapacitor/android/R$style;->AppTheme_NoActionBar:I

    invoke-virtual {p0, p2}, Lcom/getcapacitor/BridgeActivity;->setTheme(I)V

    .line 60
    sget p2, Lcom/getcapacitor/android/R$layout;->bridge_layout_main:I

    invoke-virtual {p0, p2}, Lcom/getcapacitor/BridgeActivity;->setContentView(I)V

    .line 62
    invoke-virtual {p0, p1}, Lcom/getcapacitor/BridgeActivity;->load(Landroid/os/Bundle;)V

    return-void
.end method

.method protected load(Landroid/os/Bundle;)V
    .locals 10

    .line 69
    const-string v0, "Starting BridgeActivity"

    invoke-static {v0}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;)V

    .line 71
    sget v0, Lcom/getcapacitor/android/R$id;->webview:I

    invoke-virtual {p0, v0}, Lcom/getcapacitor/BridgeActivity;->findViewById(I)Landroid/view/View;

    move-result-object v0

    check-cast v0, Landroid/webkit/WebView;

    iput-object v0, p0, Lcom/getcapacitor/BridgeActivity;->webView:Landroid/webkit/WebView;

    .line 73
    new-instance v0, Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;

    invoke-direct {v0, p0}, Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;-><init>(Landroid/app/Activity;)V

    iput-object v0, p0, Lcom/getcapacitor/BridgeActivity;->cordovaInterface:Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;

    if-eqz p1, :cond_0

    .line 75
    invoke-virtual {v0, p1}, Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;->restoreInstanceState(Landroid/os/Bundle;)V

    .line 78
    :cond_0
    new-instance v0, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;

    invoke-virtual {p0}, Lcom/getcapacitor/BridgeActivity;->getApplicationContext()Landroid/content/Context;

    move-result-object v1

    invoke-direct {v0, v1}, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;-><init>(Landroid/content/Context;)V

    iput-object v0, p0, Lcom/getcapacitor/BridgeActivity;->mockWebView:Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;

    .line 79
    iget-object v1, p0, Lcom/getcapacitor/BridgeActivity;->cordovaInterface:Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;

    iget-object v2, p0, Lcom/getcapacitor/BridgeActivity;->pluginEntries:Ljava/util/ArrayList;

    iget-object v3, p0, Lcom/getcapacitor/BridgeActivity;->preferences:Lorg/apache/cordova/CordovaPreferences;

    iget-object v4, p0, Lcom/getcapacitor/BridgeActivity;->webView:Landroid/webkit/WebView;

    invoke-virtual {v0, v1, v2, v3, v4}, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;->init(Lorg/apache/cordova/CordovaInterface;Ljava/util/List;Lorg/apache/cordova/CordovaPreferences;Landroid/webkit/WebView;)V

    .line 81
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->mockWebView:Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;

    invoke-virtual {v0}, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;->getPluginManager()Lorg/apache/cordova/PluginManager;

    move-result-object v0

    iput-object v0, p0, Lcom/getcapacitor/BridgeActivity;->pluginManager:Lorg/apache/cordova/PluginManager;

    .line 82
    iget-object v1, p0, Lcom/getcapacitor/BridgeActivity;->cordovaInterface:Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;

    invoke-virtual {v1, v0}, Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;->onCordovaInit(Lorg/apache/cordova/PluginManager;)V

    .line 83
    new-instance v0, Lcom/getcapacitor/Bridge;

    iget-object v4, p0, Lcom/getcapacitor/BridgeActivity;->webView:Landroid/webkit/WebView;

    iget-object v5, p0, Lcom/getcapacitor/BridgeActivity;->initialPlugins:Ljava/util/List;

    iget-object v6, p0, Lcom/getcapacitor/BridgeActivity;->cordovaInterface:Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;

    iget-object v7, p0, Lcom/getcapacitor/BridgeActivity;->pluginManager:Lorg/apache/cordova/PluginManager;

    iget-object v8, p0, Lcom/getcapacitor/BridgeActivity;->preferences:Lorg/apache/cordova/CordovaPreferences;

    iget-object v9, p0, Lcom/getcapacitor/BridgeActivity;->config:Lorg/json/JSONObject;

    move-object v2, v0

    move-object v3, p0

    invoke-direct/range {v2 .. v9}, Lcom/getcapacitor/Bridge;-><init>(Landroid/app/Activity;Landroid/webkit/WebView;Ljava/util/List;Lorg/apache/cordova/CordovaInterfaceImpl;Lorg/apache/cordova/PluginManager;Lorg/apache/cordova/CordovaPreferences;Lorg/json/JSONObject;)V

    iput-object v0, p0, Lcom/getcapacitor/BridgeActivity;->bridge:Lcom/getcapacitor/Bridge;

    if-eqz p1, :cond_1

    .line 86
    invoke-virtual {v0, p1}, Lcom/getcapacitor/Bridge;->restoreInstanceState(Landroid/os/Bundle;)V

    .line 88
    :cond_1
    iget-object p1, p0, Lcom/getcapacitor/BridgeActivity;->preferences:Lorg/apache/cordova/CordovaPreferences;

    const-string v0, "KeepRunning"

    const/4 v1, 0x1

    invoke-virtual {p1, v0, v1}, Lorg/apache/cordova/CordovaPreferences;->getBoolean(Ljava/lang/String;Z)Z

    move-result p1

    iput-boolean p1, p0, Lcom/getcapacitor/BridgeActivity;->keepRunning:Z

    .line 89
    invoke-virtual {p0}, Lcom/getcapacitor/BridgeActivity;->getIntent()Landroid/content/Intent;

    move-result-object p1

    invoke-virtual {p0, p1}, Lcom/getcapacitor/BridgeActivity;->onNewIntent(Landroid/content/Intent;)V

    return-void
.end method

.method public loadConfig(Landroid/content/Context;Landroid/app/Activity;)V
    .locals 1

    .line 237
    new-instance v0, Lorg/apache/cordova/ConfigXmlParser;

    invoke-direct {v0}, Lorg/apache/cordova/ConfigXmlParser;-><init>()V

    .line 238
    invoke-virtual {v0, p1}, Lorg/apache/cordova/ConfigXmlParser;->parse(Landroid/content/Context;)V

    .line 239
    invoke-virtual {v0}, Lorg/apache/cordova/ConfigXmlParser;->getPreferences()Lorg/apache/cordova/CordovaPreferences;

    move-result-object p1

    iput-object p1, p0, Lcom/getcapacitor/BridgeActivity;->preferences:Lorg/apache/cordova/CordovaPreferences;

    .line 240
    invoke-virtual {p2}, Landroid/app/Activity;->getIntent()Landroid/content/Intent;

    move-result-object p2

    invoke-virtual {p2}, Landroid/content/Intent;->getExtras()Landroid/os/Bundle;

    move-result-object p2

    invoke-virtual {p1, p2}, Lorg/apache/cordova/CordovaPreferences;->setPreferencesBundle(Landroid/os/Bundle;)V

    .line 241
    invoke-virtual {v0}, Lorg/apache/cordova/ConfigXmlParser;->getPluginEntries()Ljava/util/ArrayList;

    move-result-object p1

    iput-object p1, p0, Lcom/getcapacitor/BridgeActivity;->pluginEntries:Ljava/util/ArrayList;

    return-void
.end method

.method protected onActivityResult(IILandroid/content/Intent;)V
    .locals 1

    .line 211
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->bridge:Lcom/getcapacitor/Bridge;

    if-nez v0, :cond_0

    return-void

    .line 214
    :cond_0
    invoke-virtual {v0, p1, p2, p3}, Lcom/getcapacitor/Bridge;->onActivityResult(IILandroid/content/Intent;)V

    return-void
.end method

.method public onBackPressed()V
    .locals 1

    .line 229
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->bridge:Lcom/getcapacitor/Bridge;

    if-nez v0, :cond_0

    return-void

    .line 233
    :cond_0
    invoke-virtual {v0}, Lcom/getcapacitor/Bridge;->onBackPressed()V

    return-void
.end method

.method protected onCreate(Landroid/os/Bundle;)V
    .locals 0

    .line 44
    invoke-super {p0, p1}, Landroidx/appcompat/app/AppCompatActivity;->onCreate(Landroid/os/Bundle;)V

    return-void
.end method

.method public onDestroy()V
    .locals 1

    .line 183
    invoke-super {p0}, Landroidx/appcompat/app/AppCompatActivity;->onDestroy()V

    .line 184
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0}, Lcom/getcapacitor/Bridge;->onDestroy()V

    .line 185
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->mockWebView:Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;

    if-eqz v0, :cond_0

    .line 186
    invoke-virtual {v0}, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;->handleDestroy()V

    .line 188
    :cond_0
    const-string v0, "App destroyed"

    invoke-static {v0}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;)V

    return-void
.end method

.method public onDetachedFromWindow()V
    .locals 1

    .line 193
    invoke-super {p0}, Landroidx/appcompat/app/AppCompatActivity;->onDetachedFromWindow()V

    .line 194
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->webView:Landroid/webkit/WebView;

    if-eqz v0, :cond_0

    .line 195
    invoke-virtual {v0}, Landroid/webkit/WebView;->removeAllViews()V

    .line 196
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->webView:Landroid/webkit/WebView;

    invoke-virtual {v0}, Landroid/webkit/WebView;->destroy()V

    :cond_0
    return-void
.end method

.method protected onNewIntent(Landroid/content/Intent;)V
    .locals 1

    .line 219
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->bridge:Lcom/getcapacitor/Bridge;

    if-eqz v0, :cond_1

    if-nez p1, :cond_0

    goto :goto_0

    .line 223
    :cond_0
    invoke-virtual {v0, p1}, Lcom/getcapacitor/Bridge;->onNewIntent(Landroid/content/Intent;)V

    .line 224
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->mockWebView:Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;->onNewIntent(Landroid/content/Intent;)V

    :cond_1
    :goto_0
    return-void
.end method

.method public onPause()V
    .locals 2

    .line 152
    invoke-super {p0}, Landroidx/appcompat/app/AppCompatActivity;->onPause()V

    .line 154
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0}, Lcom/getcapacitor/Bridge;->onPause()V

    .line 155
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->mockWebView:Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;

    if-eqz v0, :cond_2

    .line 156
    iget-boolean v0, p0, Lcom/getcapacitor/BridgeActivity;->keepRunning:Z

    if-nez v0, :cond_1

    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->cordovaInterface:Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;

    invoke-virtual {v0}, Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;->getActivityResultCallback()Lorg/apache/cordova/CordovaPlugin;

    move-result-object v0

    if-eqz v0, :cond_0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 v0, 0x1

    .line 157
    :goto_1
    iget-object v1, p0, Lcom/getcapacitor/BridgeActivity;->mockWebView:Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;

    invoke-virtual {v1, v0}, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;->handlePause(Z)V

    .line 160
    :cond_2
    const-string v0, "App paused"

    invoke-static {v0}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;)V

    return-void
.end method

.method public onRequestPermissionsResult(I[Ljava/lang/String;[I)V
    .locals 1

    .line 202
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->bridge:Lcom/getcapacitor/Bridge;

    if-nez v0, :cond_0

    return-void

    .line 206
    :cond_0
    invoke-virtual {v0, p1, p2, p3}, Lcom/getcapacitor/Bridge;->onRequestPermissionsResult(I[Ljava/lang/String;[I)V

    return-void
.end method

.method public onRestart()V
    .locals 1

    .line 132
    invoke-super {p0}, Landroidx/appcompat/app/AppCompatActivity;->onRestart()V

    .line 133
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0}, Lcom/getcapacitor/Bridge;->onRestart()V

    .line 134
    const-string v0, "App restarted"

    invoke-static {v0}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;)V

    return-void
.end method

.method public onResume()V
    .locals 2

    .line 139
    invoke-super {p0}, Landroidx/appcompat/app/AppCompatActivity;->onResume()V

    const/4 v0, 0x1

    .line 141
    invoke-direct {p0, v0}, Lcom/getcapacitor/BridgeActivity;->fireAppStateChanged(Z)V

    .line 143
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0}, Lcom/getcapacitor/Bridge;->onResume()V

    .line 145
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->mockWebView:Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;

    iget-boolean v1, p0, Lcom/getcapacitor/BridgeActivity;->keepRunning:Z

    invoke-virtual {v0, v1}, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;->handleResume(Z)V

    .line 147
    const-string v0, "App resumed"

    invoke-static {v0}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;)V

    return-void
.end method

.method public onSaveInstanceState(Landroid/os/Bundle;)V
    .locals 1

    .line 114
    invoke-super {p0, p1}, Landroidx/appcompat/app/AppCompatActivity;->onSaveInstanceState(Landroid/os/Bundle;)V

    .line 115
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/Bridge;->saveInstanceState(Landroid/os/Bundle;)V

    return-void
.end method

.method public onStart()V
    .locals 1

    .line 120
    invoke-super {p0}, Landroidx/appcompat/app/AppCompatActivity;->onStart()V

    .line 122
    iget v0, p0, Lcom/getcapacitor/BridgeActivity;->activityDepth:I

    add-int/lit8 v0, v0, 0x1

    iput v0, p0, Lcom/getcapacitor/BridgeActivity;->activityDepth:I

    .line 124
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0}, Lcom/getcapacitor/Bridge;->onStart()V

    .line 125
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->mockWebView:Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;

    invoke-virtual {v0}, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;->handleStart()V

    .line 127
    const-string v0, "App started"

    invoke-static {v0}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;)V

    return-void
.end method

.method public onStop()V
    .locals 2

    .line 165
    invoke-super {p0}, Landroidx/appcompat/app/AppCompatActivity;->onStop()V

    .line 167
    iget v0, p0, Lcom/getcapacitor/BridgeActivity;->activityDepth:I

    add-int/lit8 v0, v0, -0x1

    const/4 v1, 0x0

    invoke-static {v1, v0}, Ljava/lang/Math;->max(II)I

    move-result v0

    iput v0, p0, Lcom/getcapacitor/BridgeActivity;->activityDepth:I

    if-nez v0, :cond_0

    .line 169
    invoke-direct {p0, v1}, Lcom/getcapacitor/BridgeActivity;->fireAppStateChanged(Z)V

    .line 172
    :cond_0
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0}, Lcom/getcapacitor/Bridge;->onStop()V

    .line 174
    iget-object v0, p0, Lcom/getcapacitor/BridgeActivity;->mockWebView:Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;

    if-eqz v0, :cond_1

    .line 175
    invoke-virtual {v0}, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;->handleStop()V

    .line 178
    :cond_1
    const-string v0, "App stopped"

    invoke-static {v0}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;)V

    return-void
.end method
