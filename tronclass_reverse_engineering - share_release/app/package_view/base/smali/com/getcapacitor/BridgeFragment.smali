.class public Lcom/getcapacitor/BridgeFragment;
.super Landroidx/fragment/app/Fragment;
.source "BridgeFragment.java"


# static fields
.field private static final ARG_START_DIR:Ljava/lang/String; = "startDir"


# instance fields
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

    .line 44
    invoke-direct {p0}, Landroidx/fragment/app/Fragment;-><init>()V

    const/4 v0, 0x1

    .line 35
    iput-boolean v0, p0, Lcom/getcapacitor/BridgeFragment;->keepRunning:Z

    .line 41
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    iput-object v0, p0, Lcom/getcapacitor/BridgeFragment;->initialPlugins:Ljava/util/List;

    .line 42
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    iput-object v0, p0, Lcom/getcapacitor/BridgeFragment;->config:Lorg/json/JSONObject;

    return-void
.end method

.method public static newInstance(Ljava/lang/String;)Lcom/getcapacitor/BridgeFragment;
    .locals 3

    .line 56
    new-instance v0, Lcom/getcapacitor/BridgeFragment;

    invoke-direct {v0}, Lcom/getcapacitor/BridgeFragment;-><init>()V

    .line 57
    new-instance v1, Landroid/os/Bundle;

    invoke-direct {v1}, Landroid/os/Bundle;-><init>()V

    .line 58
    const-string v2, "startDir"

    invoke-virtual {v1, v2, p0}, Landroid/os/Bundle;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 59
    invoke-virtual {v0, v1}, Lcom/getcapacitor/BridgeFragment;->setArguments(Landroid/os/Bundle;)V

    return-object v0
.end method


# virtual methods
.method public addPlugin(Ljava/lang/Class;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/Class<",
            "+",
            "Lcom/getcapacitor/Plugin;",
            ">;)V"
        }
    .end annotation

    .line 68
    iget-object v0, p0, Lcom/getcapacitor/BridgeFragment;->initialPlugins:Ljava/util/List;

    invoke-interface {v0, p1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    return-void
.end method

.method protected init(Landroid/os/Bundle;)V
    .locals 1

    .line 64
    invoke-virtual {p0}, Lcom/getcapacitor/BridgeFragment;->getActivity()Landroidx/fragment/app/FragmentActivity;

    move-result-object p1

    invoke-virtual {p1}, Landroidx/fragment/app/FragmentActivity;->getApplicationContext()Landroid/content/Context;

    move-result-object p1

    invoke-virtual {p0}, Lcom/getcapacitor/BridgeFragment;->getActivity()Landroidx/fragment/app/FragmentActivity;

    move-result-object v0

    invoke-virtual {p0, p1, v0}, Lcom/getcapacitor/BridgeFragment;->loadConfig(Landroid/content/Context;Landroid/app/Activity;)V

    return-void
.end method

.method protected load(Landroid/os/Bundle;)V
    .locals 10

    .line 75
    const-string v0, "Starting BridgeActivity"

    invoke-static {v0}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;)V

    .line 77
    invoke-virtual {p0}, Lcom/getcapacitor/BridgeFragment;->getArguments()Landroid/os/Bundle;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 81
    invoke-virtual {p0}, Lcom/getcapacitor/BridgeFragment;->getArguments()Landroid/os/Bundle;

    move-result-object v0

    const-string v1, "startDir"

    invoke-virtual {v0, v1}, Landroid/os/Bundle;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    .line 84
    :goto_0
    invoke-virtual {p0}, Lcom/getcapacitor/BridgeFragment;->getView()Landroid/view/View;

    move-result-object v1

    sget v2, Lcom/getcapacitor/android/R$id;->webview:I

    invoke-virtual {v1, v2}, Landroid/view/View;->findViewById(I)Landroid/view/View;

    move-result-object v1

    check-cast v1, Landroid/webkit/WebView;

    iput-object v1, p0, Lcom/getcapacitor/BridgeFragment;->webView:Landroid/webkit/WebView;

    .line 85
    new-instance v1, Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;

    invoke-virtual {p0}, Lcom/getcapacitor/BridgeFragment;->getActivity()Landroidx/fragment/app/FragmentActivity;

    move-result-object v2

    invoke-direct {v1, v2}, Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;-><init>(Landroid/app/Activity;)V

    iput-object v1, p0, Lcom/getcapacitor/BridgeFragment;->cordovaInterface:Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;

    if-eqz p1, :cond_1

    .line 87
    invoke-virtual {v1, p1}, Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;->restoreInstanceState(Landroid/os/Bundle;)V

    .line 90
    :cond_1
    new-instance v1, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;

    invoke-virtual {p0}, Lcom/getcapacitor/BridgeFragment;->getActivity()Landroidx/fragment/app/FragmentActivity;

    move-result-object v2

    invoke-virtual {v2}, Landroidx/fragment/app/FragmentActivity;->getApplicationContext()Landroid/content/Context;

    move-result-object v2

    invoke-direct {v1, v2}, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;-><init>(Landroid/content/Context;)V

    iput-object v1, p0, Lcom/getcapacitor/BridgeFragment;->mockWebView:Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;

    .line 91
    iget-object v2, p0, Lcom/getcapacitor/BridgeFragment;->cordovaInterface:Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;

    iget-object v3, p0, Lcom/getcapacitor/BridgeFragment;->pluginEntries:Ljava/util/ArrayList;

    iget-object v4, p0, Lcom/getcapacitor/BridgeFragment;->preferences:Lorg/apache/cordova/CordovaPreferences;

    iget-object v5, p0, Lcom/getcapacitor/BridgeFragment;->webView:Landroid/webkit/WebView;

    invoke-virtual {v1, v2, v3, v4, v5}, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;->init(Lorg/apache/cordova/CordovaInterface;Ljava/util/List;Lorg/apache/cordova/CordovaPreferences;Landroid/webkit/WebView;)V

    .line 93
    iget-object v1, p0, Lcom/getcapacitor/BridgeFragment;->mockWebView:Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;

    invoke-virtual {v1}, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;->getPluginManager()Lorg/apache/cordova/PluginManager;

    move-result-object v1

    iput-object v1, p0, Lcom/getcapacitor/BridgeFragment;->pluginManager:Lorg/apache/cordova/PluginManager;

    .line 94
    iget-object v2, p0, Lcom/getcapacitor/BridgeFragment;->cordovaInterface:Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;

    invoke-virtual {v2, v1}, Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;->onCordovaInit(Lorg/apache/cordova/PluginManager;)V

    .line 96
    iget-object v1, p0, Lcom/getcapacitor/BridgeFragment;->preferences:Lorg/apache/cordova/CordovaPreferences;

    if-nez v1, :cond_2

    .line 97
    new-instance v1, Lorg/apache/cordova/CordovaPreferences;

    invoke-direct {v1}, Lorg/apache/cordova/CordovaPreferences;-><init>()V

    iput-object v1, p0, Lcom/getcapacitor/BridgeFragment;->preferences:Lorg/apache/cordova/CordovaPreferences;

    .line 100
    :cond_2
    new-instance v1, Lcom/getcapacitor/Bridge;

    invoke-virtual {p0}, Lcom/getcapacitor/BridgeFragment;->getActivity()Landroidx/fragment/app/FragmentActivity;

    move-result-object v3

    iget-object v4, p0, Lcom/getcapacitor/BridgeFragment;->webView:Landroid/webkit/WebView;

    iget-object v5, p0, Lcom/getcapacitor/BridgeFragment;->initialPlugins:Ljava/util/List;

    iget-object v6, p0, Lcom/getcapacitor/BridgeFragment;->cordovaInterface:Lcom/getcapacitor/cordova/MockCordovaInterfaceImpl;

    iget-object v7, p0, Lcom/getcapacitor/BridgeFragment;->pluginManager:Lorg/apache/cordova/PluginManager;

    iget-object v8, p0, Lcom/getcapacitor/BridgeFragment;->preferences:Lorg/apache/cordova/CordovaPreferences;

    iget-object v9, p0, Lcom/getcapacitor/BridgeFragment;->config:Lorg/json/JSONObject;

    move-object v2, v1

    invoke-direct/range {v2 .. v9}, Lcom/getcapacitor/Bridge;-><init>(Landroid/app/Activity;Landroid/webkit/WebView;Ljava/util/List;Lorg/apache/cordova/CordovaInterfaceImpl;Lorg/apache/cordova/PluginManager;Lorg/apache/cordova/CordovaPreferences;Lorg/json/JSONObject;)V

    iput-object v1, p0, Lcom/getcapacitor/BridgeFragment;->bridge:Lcom/getcapacitor/Bridge;

    if-eqz v0, :cond_3

    .line 103
    invoke-virtual {v1, v0}, Lcom/getcapacitor/Bridge;->setServerAssetPath(Ljava/lang/String;)V

    :cond_3
    if-eqz p1, :cond_4

    .line 107
    iget-object v0, p0, Lcom/getcapacitor/BridgeFragment;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/Bridge;->restoreInstanceState(Landroid/os/Bundle;)V

    .line 109
    :cond_4
    iget-object p1, p0, Lcom/getcapacitor/BridgeFragment;->preferences:Lorg/apache/cordova/CordovaPreferences;

    const-string v0, "KeepRunning"

    const/4 v1, 0x1

    invoke-virtual {p1, v0, v1}, Lorg/apache/cordova/CordovaPreferences;->getBoolean(Ljava/lang/String;Z)Z

    move-result p1

    iput-boolean p1, p0, Lcom/getcapacitor/BridgeFragment;->keepRunning:Z

    return-void
.end method

.method public loadConfig(Landroid/content/Context;Landroid/app/Activity;)V
    .locals 1

    .line 113
    new-instance v0, Lorg/apache/cordova/ConfigXmlParser;

    invoke-direct {v0}, Lorg/apache/cordova/ConfigXmlParser;-><init>()V

    .line 114
    invoke-virtual {v0, p1}, Lorg/apache/cordova/ConfigXmlParser;->parse(Landroid/content/Context;)V

    .line 115
    invoke-virtual {v0}, Lorg/apache/cordova/ConfigXmlParser;->getPreferences()Lorg/apache/cordova/CordovaPreferences;

    move-result-object p1

    iput-object p1, p0, Lcom/getcapacitor/BridgeFragment;->preferences:Lorg/apache/cordova/CordovaPreferences;

    .line 116
    invoke-virtual {p2}, Landroid/app/Activity;->getIntent()Landroid/content/Intent;

    move-result-object p2

    invoke-virtual {p2}, Landroid/content/Intent;->getExtras()Landroid/os/Bundle;

    move-result-object p2

    invoke-virtual {p1, p2}, Lorg/apache/cordova/CordovaPreferences;->setPreferencesBundle(Landroid/os/Bundle;)V

    .line 117
    invoke-virtual {v0}, Lorg/apache/cordova/ConfigXmlParser;->getPluginEntries()Ljava/util/ArrayList;

    move-result-object p1

    iput-object p1, p0, Lcom/getcapacitor/BridgeFragment;->pluginEntries:Ljava/util/ArrayList;

    return-void
.end method

.method public onActivityCreated(Landroid/os/Bundle;)V
    .locals 0

    .line 148
    invoke-super {p0, p1}, Landroidx/fragment/app/Fragment;->onActivityCreated(Landroid/os/Bundle;)V

    .line 149
    invoke-virtual {p0, p1}, Lcom/getcapacitor/BridgeFragment;->init(Landroid/os/Bundle;)V

    .line 150
    invoke-virtual {p0, p1}, Lcom/getcapacitor/BridgeFragment;->load(Landroid/os/Bundle;)V

    return-void
.end method

.method public onCreate(Landroid/os/Bundle;)V
    .locals 0

    .line 137
    invoke-super {p0, p1}, Landroidx/fragment/app/Fragment;->onCreate(Landroid/os/Bundle;)V

    return-void
.end method

.method public onCreateView(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Landroid/os/Bundle;)Landroid/view/View;
    .locals 1

    .line 143
    sget p3, Lcom/getcapacitor/android/R$layout;->fragment_bridge:I

    const/4 v0, 0x0

    invoke-virtual {p1, p3, p2, v0}, Landroid/view/LayoutInflater;->inflate(ILandroid/view/ViewGroup;Z)Landroid/view/View;

    move-result-object p1

    return-object p1
.end method

.method public onDestroy()V
    .locals 1

    .line 155
    invoke-super {p0}, Landroidx/fragment/app/Fragment;->onDestroy()V

    .line 156
    iget-object v0, p0, Lcom/getcapacitor/BridgeFragment;->bridge:Lcom/getcapacitor/Bridge;

    if-eqz v0, :cond_0

    .line 157
    invoke-virtual {v0}, Lcom/getcapacitor/Bridge;->onDestroy()V

    .line 159
    :cond_0
    iget-object v0, p0, Lcom/getcapacitor/BridgeFragment;->mockWebView:Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;

    if-eqz v0, :cond_1

    .line 160
    invoke-virtual {v0}, Lcom/getcapacitor/cordova/MockCordovaWebViewImpl;->handleDestroy()V

    :cond_1
    return-void
.end method

.method public onInflate(Landroid/content/Context;Landroid/util/AttributeSet;Landroid/os/Bundle;)V
    .locals 0

    .line 122
    invoke-super {p0, p1, p2, p3}, Landroidx/fragment/app/Fragment;->onInflate(Landroid/content/Context;Landroid/util/AttributeSet;Landroid/os/Bundle;)V

    .line 124
    sget-object p3, Lcom/getcapacitor/android/R$styleable;->bridge_fragment:[I

    invoke-virtual {p1, p2, p3}, Landroid/content/Context;->obtainStyledAttributes(Landroid/util/AttributeSet;[I)Landroid/content/res/TypedArray;

    move-result-object p1

    .line 125
    sget p2, Lcom/getcapacitor/android/R$styleable;->bridge_fragment_start_dir:I

    invoke-virtual {p1, p2}, Landroid/content/res/TypedArray;->getString(I)Ljava/lang/String;

    move-result-object p1

    if-eqz p1, :cond_0

    .line 128
    invoke-virtual {p1}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object p1

    .line 129
    new-instance p2, Landroid/os/Bundle;

    invoke-direct {p2}, Landroid/os/Bundle;-><init>()V

    .line 130
    const-string p3, "startDir"

    invoke-virtual {p2, p3, p1}, Landroid/os/Bundle;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 131
    invoke-virtual {p0, p2}, Lcom/getcapacitor/BridgeFragment;->setArguments(Landroid/os/Bundle;)V

    :cond_0
    return-void
.end method
