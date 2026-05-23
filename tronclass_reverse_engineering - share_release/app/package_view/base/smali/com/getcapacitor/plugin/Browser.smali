.class public Lcom/getcapacitor/plugin/Browser;
.super Lcom/getcapacitor/Plugin;
.source "Browser.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
    requestCodes = {
        0x2329
    }
.end annotation


# static fields
.field public static final CUSTOM_TAB_PACKAGE_NAME:Ljava/lang/String; = "com.android.chrome"


# instance fields
.field connection:Landroidx/browser/customtabs/CustomTabsServiceConnection;

.field private currentSession:Landroidx/browser/customtabs/CustomTabsSession;

.field private customTabsClient:Landroidx/browser/customtabs/CustomTabsClient;

.field private fireFinished:Z


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 31
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    const/4 v0, 0x0

    .line 36
    iput-boolean v0, p0, Lcom/getcapacitor/plugin/Browser;->fireFinished:Z

    .line 107
    new-instance v0, Lcom/getcapacitor/plugin/Browser$1;

    invoke-direct {v0, p0}, Lcom/getcapacitor/plugin/Browser$1;-><init>(Lcom/getcapacitor/plugin/Browser;)V

    iput-object v0, p0, Lcom/getcapacitor/plugin/Browser;->connection:Landroidx/browser/customtabs/CustomTabsServiceConnection;

    return-void
.end method

.method static synthetic access$002(Lcom/getcapacitor/plugin/Browser;Landroidx/browser/customtabs/CustomTabsClient;)Landroidx/browser/customtabs/CustomTabsClient;
    .locals 0

    .line 31
    iput-object p1, p0, Lcom/getcapacitor/plugin/Browser;->customTabsClient:Landroidx/browser/customtabs/CustomTabsClient;

    return-object p1
.end method

.method static synthetic access$100(Lcom/getcapacitor/plugin/Browser;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V
    .locals 0

    .line 31
    invoke-virtual {p0, p1, p2}, Lcom/getcapacitor/plugin/Browser;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method static synthetic access$202(Lcom/getcapacitor/plugin/Browser;Z)Z
    .locals 0

    .line 31
    iput-boolean p1, p0, Lcom/getcapacitor/plugin/Browser;->fireFinished:Z

    return p1
.end method


# virtual methods
.method public close(Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 78
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->unimplemented()V

    return-void
.end method

.method public getCustomTabsSession()Landroidx/browser/customtabs/CustomTabsSession;
    .locals 2

    .line 137
    iget-object v0, p0, Lcom/getcapacitor/plugin/Browser;->customTabsClient:Landroidx/browser/customtabs/CustomTabsClient;

    if-nez v0, :cond_0

    const/4 v0, 0x0

    return-object v0

    .line 141
    :cond_0
    iget-object v1, p0, Lcom/getcapacitor/plugin/Browser;->currentSession:Landroidx/browser/customtabs/CustomTabsSession;

    if-nez v1, :cond_1

    .line 142
    new-instance v1, Lcom/getcapacitor/plugin/Browser$2;

    invoke-direct {v1, p0}, Lcom/getcapacitor/plugin/Browser$2;-><init>(Lcom/getcapacitor/plugin/Browser;)V

    invoke-virtual {v0, v1}, Landroidx/browser/customtabs/CustomTabsClient;->newSession(Landroidx/browser/customtabs/CustomTabsCallback;)Landroidx/browser/customtabs/CustomTabsSession;

    move-result-object v0

    iput-object v0, p0, Lcom/getcapacitor/plugin/Browser;->currentSession:Landroidx/browser/customtabs/CustomTabsSession;

    .line 160
    :cond_1
    iget-object v0, p0, Lcom/getcapacitor/plugin/Browser;->currentSession:Landroidx/browser/customtabs/CustomTabsSession;

    return-object v0
.end method

.method protected handleOnActivityResult(IILandroid/content/Intent;)V
    .locals 0

    .line 165
    invoke-super {p0, p1, p2, p3}, Lcom/getcapacitor/Plugin;->handleOnActivityResult(IILandroid/content/Intent;)V

    return-void
.end method

.method protected handleOnPause()V
    .locals 2

    .line 133
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Browser;->getContext()Landroid/content/Context;

    move-result-object v0

    iget-object v1, p0, Lcom/getcapacitor/plugin/Browser;->connection:Landroidx/browser/customtabs/CustomTabsServiceConnection;

    invoke-virtual {v0, v1}, Landroid/content/Context;->unbindService(Landroid/content/ServiceConnection;)V

    return-void
.end method

.method protected handleOnResume()V
    .locals 3

    .line 123
    iget-boolean v0, p0, Lcom/getcapacitor/plugin/Browser;->fireFinished:Z

    if-eqz v0, :cond_0

    .line 124
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    const-string v1, "browserFinished"

    invoke-virtual {p0, v1, v0}, Lcom/getcapacitor/plugin/Browser;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    .line 126
    :cond_0
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Browser;->getContext()Landroid/content/Context;

    move-result-object v0

    const-string v1, "com.android.chrome"

    iget-object v2, p0, Lcom/getcapacitor/plugin/Browser;->connection:Landroidx/browser/customtabs/CustomTabsServiceConnection;

    invoke-static {v0, v1, v2}, Landroidx/browser/customtabs/CustomTabsClient;->bindCustomTabsService(Landroid/content/Context;Ljava/lang/String;Landroidx/browser/customtabs/CustomTabsServiceConnection;)Z

    move-result v0

    if-nez v0, :cond_1

    .line 128
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Browser;->getLogTag()Ljava/lang/String;

    move-result-object v0

    const-string v1, "Error binding to custom tabs service"

    const/4 v2, 0x0

    invoke-static {v0, v1, v2}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :cond_1
    return-void
.end method

.method public load()V
    .locals 0

    return-void
.end method

.method public open(Lcom/getcapacitor/PluginCall;)V
    .locals 5
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 40
    const-string v0, "url"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 41
    const-string v1, "toolbarColor"

    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    if-nez v0, :cond_0

    .line 44
    const-string v0, "Must provide a URL to open"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 48
    :cond_0
    invoke-virtual {v0}, Ljava/lang/String;->isEmpty()Z

    move-result v2

    if-eqz v2, :cond_1

    .line 49
    const-string v0, "URL must not be empty"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 53
    :cond_1
    new-instance v2, Landroidx/browser/customtabs/CustomTabsIntent$Builder;

    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Browser;->getCustomTabsSession()Landroidx/browser/customtabs/CustomTabsSession;

    move-result-object v3

    invoke-direct {v2, v3}, Landroidx/browser/customtabs/CustomTabsIntent$Builder;-><init>(Landroidx/browser/customtabs/CustomTabsSession;)V

    .line 55
    invoke-virtual {v2}, Landroidx/browser/customtabs/CustomTabsIntent$Builder;->addDefaultShareMenuItem()Landroidx/browser/customtabs/CustomTabsIntent$Builder;

    if-eqz v1, :cond_2

    .line 59
    :try_start_0
    invoke-static {v1}, Landroid/graphics/Color;->parseColor(Ljava/lang/String;)I

    move-result v1

    invoke-virtual {v2, v1}, Landroidx/browser/customtabs/CustomTabsIntent$Builder;->setToolbarColor(I)Landroidx/browser/customtabs/CustomTabsIntent$Builder;
    :try_end_0
    .catch Ljava/lang/IllegalArgumentException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    .line 61
    :catch_0
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Browser;->getLogTag()Ljava/lang/String;

    move-result-object v1

    const-string v3, "Invalid color provided for toolbarColor. Using default"

    const/4 v4, 0x0

    invoke-static {v1, v3, v4}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 65
    :cond_2
    :goto_0
    invoke-virtual {v2}, Landroidx/browser/customtabs/CustomTabsIntent$Builder;->build()Landroidx/browser/customtabs/CustomTabsIntent;

    move-result-object v1

    .line 66
    iget-object v2, v1, Landroidx/browser/customtabs/CustomTabsIntent;->intent:Landroid/content/Intent;

    new-instance v3, Ljava/lang/StringBuilder;

    const-string v4, "2//"

    invoke-direct {v3, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    .line 67
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Browser;->getContext()Landroid/content/Context;

    move-result-object v4

    invoke-virtual {v4}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v3, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-static {v3}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v3

    .line 66
    const-string v4, "android.intent.extra.REFERRER"

    invoke-virtual {v2, v4, v3}, Landroid/content/Intent;->putExtra(Ljava/lang/String;Landroid/os/Parcelable;)Landroid/content/Intent;

    .line 69
    :try_start_1
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Browser;->getContext()Landroid/content/Context;

    move-result-object v2

    invoke-static {v0}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v0

    invoke-virtual {v1, v2, v0}, Landroidx/browser/customtabs/CustomTabsIntent;->launchUrl(Landroid/content/Context;Landroid/net/Uri;)V

    .line 70
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->success()V
    :try_end_1
    .catch Ljava/lang/Exception; {:try_start_1 .. :try_end_1} :catch_1

    goto :goto_1

    :catch_1
    move-exception v0

    .line 72
    invoke-virtual {v0}, Ljava/lang/Exception;->getLocalizedMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    :goto_1
    return-void
.end method

.method public prefetch(Lcom/getcapacitor/PluginCall;)V
    .locals 4
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 84
    const-string v0, "urls"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getArray(Ljava/lang/String;)Lcom/getcapacitor/JSArray;

    move-result-object v0

    if-eqz v0, :cond_3

    .line 85
    invoke-virtual {v0}, Lcom/getcapacitor/JSArray;->length()I

    move-result v1

    if-nez v1, :cond_0

    goto :goto_1

    .line 90
    :cond_0
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Browser;->getCustomTabsSession()Landroidx/browser/customtabs/CustomTabsSession;

    move-result-object v1

    if-nez v1, :cond_1

    .line 93
    const-string v0, "Browser session isn\'t ready yet"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 98
    :cond_1
    :try_start_0
    invoke-virtual {v0}, Lcom/getcapacitor/JSArray;->toList()Ljava/util/List;

    move-result-object v0

    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_2

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/String;

    .line 99
    invoke-static {v2}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v2

    const/4 v3, 0x0

    invoke-virtual {v1, v2, v3, v3}, Landroidx/browser/customtabs/CustomTabsSession;->mayLaunchUrl(Landroid/net/Uri;Landroid/os/Bundle;Ljava/util/List;)Z
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :cond_2
    return-void

    :catch_0
    move-exception v0

    .line 102
    const-string v1, "Unable to process provided urls list. Ensure each item is a string and valid URL"

    invoke-virtual {p1, v1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/Exception;)V

    return-void

    .line 86
    :cond_3
    :goto_1
    const-string v0, "Must provide an array of URLs to prefetch"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void
.end method
