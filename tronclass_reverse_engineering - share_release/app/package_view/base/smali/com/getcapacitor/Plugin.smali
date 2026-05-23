.class public Lcom/getcapacitor/Plugin;
.super Ljava/lang/Object;
.source "Plugin.java"


# static fields
.field private static final BUNDLE_PERSISTED_OPTIONS_JSON_KEY:Ljava/lang/String; = "_json"


# instance fields
.field protected bridge:Lcom/getcapacitor/Bridge;

.field private final eventListeners:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/util/List<",
            "Lcom/getcapacitor/PluginCall;",
            ">;>;"
        }
    .end annotation
.end field

.field protected handle:Lcom/getcapacitor/PluginHandle;

.field private final retainedEventArguments:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Lcom/getcapacitor/JSObject;",
            ">;"
        }
    .end annotation
.end field

.field protected savedLastCall:Lcom/getcapacitor/PluginCall;


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 54
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 55
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    iput-object v0, p0, Lcom/getcapacitor/Plugin;->eventListeners:Ljava/util/Map;

    .line 56
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    iput-object v0, p0, Lcom/getcapacitor/Plugin;->retainedEventArguments:Ljava/util/Map;

    return-void
.end method

.method private addEventListener(Ljava/lang/String;Lcom/getcapacitor/PluginCall;)V
    .locals 2

    .line 304
    iget-object v0, p0, Lcom/getcapacitor/Plugin;->eventListeners:Ljava/util/Map;

    invoke-interface {v0, p1}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/util/List;

    if-eqz v0, :cond_1

    .line 305
    invoke-interface {v0}, Ljava/util/List;->isEmpty()Z

    move-result v1

    if-eqz v1, :cond_0

    goto :goto_0

    .line 314
    :cond_0
    invoke-interface {v0, p2}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    goto :goto_1

    .line 306
    :cond_1
    :goto_0
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 307
    iget-object v1, p0, Lcom/getcapacitor/Plugin;->eventListeners:Ljava/util/Map;

    invoke-interface {v1, p1, v0}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 310
    invoke-interface {v0, p2}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 312
    invoke-direct {p0, p1}, Lcom/getcapacitor/Plugin;->sendRetainedArgumentsForEvent(Ljava/lang/String;)V

    :goto_1
    return-void
.end method

.method private getManifestPermissions()[Ljava/lang/String;
    .locals 4

    const/4 v0, 0x0

    .line 210
    :try_start_0
    invoke-virtual {p0}, Lcom/getcapacitor/Plugin;->getContext()Landroid/content/Context;

    move-result-object v1

    invoke-virtual {v1}, Landroid/content/Context;->getPackageManager()Landroid/content/pm/PackageManager;

    move-result-object v1

    .line 211
    invoke-virtual {p0}, Lcom/getcapacitor/Plugin;->getAppId()Ljava/lang/String;

    move-result-object v2

    const/16 v3, 0x1000

    invoke-virtual {v1, v2, v3}, Landroid/content/pm/PackageManager;->getPackageInfo(Ljava/lang/String;I)Landroid/content/pm/PackageInfo;

    move-result-object v1

    if-eqz v1, :cond_0

    .line 214
    iget-object v0, v1, Landroid/content/pm/PackageInfo;->requestedPermissions:[Ljava/lang/String;
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    :catch_0
    :cond_0
    return-object v0
.end method

.method private removeEventListener(Ljava/lang/String;Lcom/getcapacitor/PluginCall;)V
    .locals 1

    .line 324
    iget-object v0, p0, Lcom/getcapacitor/Plugin;->eventListeners:Ljava/util/Map;

    invoke-interface {v0, p1}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/util/List;

    if-nez p1, :cond_0

    return-void

    .line 329
    :cond_0
    invoke-interface {p1, p2}, Ljava/util/List;->remove(Ljava/lang/Object;)Z

    return-void
.end method

.method private sendRetainedArgumentsForEvent(Ljava/lang/String;)V
    .locals 1

    .line 381
    iget-object v0, p0, Lcom/getcapacitor/Plugin;->retainedEventArguments:Ljava/util/Map;

    invoke-interface {v0, p1}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/getcapacitor/JSObject;

    if-nez v0, :cond_0

    return-void

    .line 386
    :cond_0
    invoke-virtual {p0, p1, v0}, Lcom/getcapacitor/Plugin;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;)V

    .line 387
    iget-object v0, p0, Lcom/getcapacitor/Plugin;->retainedEventArguments:Ljava/util/Map;

    invoke-interface {v0, p1}, Ljava/util/Map;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    return-void
.end method


# virtual methods
.method public addListener(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
        returnType = "none"
    .end annotation

    .line 398
    const-string v0, "eventName"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 399
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->save()V

    .line 400
    invoke-direct {p0, v0, p1}, Lcom/getcapacitor/Plugin;->addEventListener(Ljava/lang/String;Lcom/getcapacitor/PluginCall;)V

    return-void
.end method

.method public execute(Ljava/lang/Runnable;)V
    .locals 1

    .line 580
    iget-object v0, p0, Lcom/getcapacitor/Plugin;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/Bridge;->execute(Ljava/lang/Runnable;)V

    return-void
.end method

.method public freeSavedCall()V
    .locals 2

    .line 130
    iget-object v0, p0, Lcom/getcapacitor/Plugin;->savedLastCall:Lcom/getcapacitor/PluginCall;

    invoke-virtual {v0}, Lcom/getcapacitor/PluginCall;->isReleased()Z

    move-result v0

    if-nez v0, :cond_0

    .line 131
    iget-object v0, p0, Lcom/getcapacitor/Plugin;->savedLastCall:Lcom/getcapacitor/PluginCall;

    iget-object v1, p0, Lcom/getcapacitor/Plugin;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0, v1}, Lcom/getcapacitor/PluginCall;->release(Lcom/getcapacitor/Bridge;)V

    :cond_0
    const/4 v0, 0x0

    .line 133
    iput-object v0, p0, Lcom/getcapacitor/Plugin;->savedLastCall:Lcom/getcapacitor/PluginCall;

    return-void
.end method

.method public getActivity()Landroidx/appcompat/app/AppCompatActivity;
    .locals 1

    .line 75
    iget-object v0, p0, Lcom/getcapacitor/Plugin;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0}, Lcom/getcapacitor/Bridge;->getActivity()Landroid/app/Activity;

    move-result-object v0

    check-cast v0, Landroidx/appcompat/app/AppCompatActivity;

    return-object v0
.end method

.method public getAppId()Ljava/lang/String;
    .locals 1

    .line 114
    invoke-virtual {p0}, Lcom/getcapacitor/Plugin;->getContext()Landroid/content/Context;

    move-result-object v0

    invoke-virtual {v0}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public getBridge()Lcom/getcapacitor/Bridge;
    .locals 1

    .line 88
    iget-object v0, p0, Lcom/getcapacitor/Plugin;->bridge:Lcom/getcapacitor/Bridge;

    return-object v0
.end method

.method public getConfigValue(Ljava/lang/String;)Ljava/lang/Object;
    .locals 3

    const/4 v0, 0x0

    .line 146
    :try_start_0
    iget-object v1, p0, Lcom/getcapacitor/Plugin;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v1}, Lcom/getcapacitor/Bridge;->getConfig()Lcom/getcapacitor/CapConfig;

    move-result-object v1

    const-string v2, "plugins"

    invoke-virtual {v1, v2}, Lcom/getcapacitor/CapConfig;->getObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v1

    if-nez v1, :cond_0

    return-object v0

    .line 150
    :cond_0
    invoke-virtual {p0}, Lcom/getcapacitor/Plugin;->getPluginHandle()Lcom/getcapacitor/PluginHandle;

    move-result-object v2

    invoke-virtual {v2}, Lcom/getcapacitor/PluginHandle;->getId()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v1

    .line 151
    invoke-virtual {v1, p1}, Lorg/json/JSONObject;->get(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object p1
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    return-object p1

    :catch_0
    return-object v0
.end method

.method public getContext()Landroid/content/Context;
    .locals 1

    .line 69
    iget-object v0, p0, Lcom/getcapacitor/Plugin;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0}, Lcom/getcapacitor/Bridge;->getContext()Landroid/content/Context;

    move-result-object v0

    return-object v0
.end method

.method protected getLogTag()Ljava/lang/String;
    .locals 3

    const/4 v0, 0x1

    .line 595
    new-array v0, v0, [Ljava/lang/String;

    invoke-virtual {p0}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/Class;->getSimpleName()Ljava/lang/String;

    move-result-object v1

    const/4 v2, 0x0

    aput-object v1, v0, v2

    invoke-static {v0}, Lcom/getcapacitor/Logger;->tags([Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method protected varargs getLogTag([Ljava/lang/String;)Ljava/lang/String;
    .locals 0

    .line 588
    invoke-static {p1}, Lcom/getcapacitor/Logger;->tags([Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method public getPluginHandle()Lcom/getcapacitor/PluginHandle;
    .locals 1

    .line 107
    iget-object v0, p0, Lcom/getcapacitor/Plugin;->handle:Lcom/getcapacitor/PluginHandle;

    return-object v0
.end method

.method public getSavedCall()Lcom/getcapacitor/PluginCall;
    .locals 1

    .line 141
    iget-object v0, p0, Lcom/getcapacitor/Plugin;->savedLastCall:Lcom/getcapacitor/PluginCall;

    return-object v0
.end method

.method public getUndefinedPermissions([Ljava/lang/String;)[Ljava/lang/String;
    .locals 6

    .line 163
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 164
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;->getManifestPermissions()[Ljava/lang/String;

    move-result-object v1

    if-eqz v1, :cond_2

    .line 165
    array-length v2, v1

    if-lez v2, :cond_2

    .line 167
    invoke-static {v1}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v1

    .line 168
    new-instance v2, Ljava/util/ArrayList;

    invoke-direct {v2}, Ljava/util/ArrayList;-><init>()V

    .line 169
    invoke-virtual {v2, v1}, Ljava/util/ArrayList;->addAll(Ljava/util/Collection;)Z

    .line 170
    array-length v1, p1

    const/4 v3, 0x0

    :goto_0
    if-ge v3, v1, :cond_1

    aget-object v4, p1, v3

    .line 171
    invoke-virtual {v2, v4}, Ljava/util/ArrayList;->contains(Ljava/lang/Object;)Z

    move-result v5

    if-nez v5, :cond_0

    .line 172
    invoke-virtual {v0, v4}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    :cond_0
    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    .line 175
    :cond_1
    invoke-virtual {v0}, Ljava/util/ArrayList;->size()I

    move-result p1

    new-array p1, p1, [Ljava/lang/String;

    .line 176
    invoke-virtual {v0, p1}, Ljava/util/ArrayList;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [Ljava/lang/String;

    :cond_2
    return-object p1
.end method

.method protected handleOnActivityResult(IILandroid/content/Intent;)V
    .locals 0

    return-void
.end method

.method protected handleOnDestroy()V
    .locals 0

    return-void
.end method

.method protected handleOnNewIntent(Landroid/content/Intent;)V
    .locals 0

    return-void
.end method

.method protected handleOnPause()V
    .locals 0

    return-void
.end method

.method protected handleOnRestart()V
    .locals 0

    return-void
.end method

.method protected handleOnResume()V
    .locals 0

    return-void
.end method

.method protected handleOnStart()V
    .locals 0

    return-void
.end method

.method protected handleOnStop()V
    .locals 0

    return-void
.end method

.method protected handleRequestPermissionsResult(I[Ljava/lang/String;[I)V
    .locals 3

    .line 460
    invoke-virtual {p0, p2}, Lcom/getcapacitor/Plugin;->hasDefinedPermissions([Ljava/lang/String;)Z

    move-result p1

    if-nez p1, :cond_1

    .line 461
    new-instance p1, Ljava/lang/StringBuilder;

    const-string p3, "Missing the following permissions in AndroidManifest.xml:\n"

    invoke-direct {p1, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    .line 463
    invoke-virtual {p0, p2}, Lcom/getcapacitor/Plugin;->getUndefinedPermissions([Ljava/lang/String;)[Ljava/lang/String;

    move-result-object p2

    .line 464
    array-length p3, p2

    const/4 v0, 0x0

    :goto_0
    if-ge v0, p3, :cond_0

    aget-object v1, p2, v0

    .line 465
    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, "\n"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {p1, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    add-int/lit8 v0, v0, 0x1

    goto :goto_0

    .line 467
    :cond_0
    iget-object p2, p0, Lcom/getcapacitor/Plugin;->savedLastCall:Lcom/getcapacitor/PluginCall;

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    const/4 p1, 0x0

    .line 468
    iput-object p1, p0, Lcom/getcapacitor/Plugin;->savedLastCall:Lcom/getcapacitor/PluginCall;

    :cond_1
    return-void
.end method

.method public hasDefinedPermission(Ljava/lang/String;)Z
    .locals 2

    .line 190
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;->getManifestPermissions()[Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 191
    array-length v1, v0

    if-lez v1, :cond_0

    .line 193
    invoke-static {v0}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v0

    .line 194
    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1}, Ljava/util/ArrayList;-><init>()V

    .line 195
    invoke-virtual {v1, v0}, Ljava/util/ArrayList;->addAll(Ljava/util/Collection;)Z

    .line 196
    invoke-virtual {v1, p1}, Ljava/util/ArrayList;->contains(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_0

    const/4 p1, 0x1

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    :goto_0
    return p1
.end method

.method public hasDefinedPermissions([Ljava/lang/String;)Z
    .locals 4

    .line 228
    array-length v0, p1

    const/4 v1, 0x0

    move v2, v1

    :goto_0
    if-ge v2, v0, :cond_1

    aget-object v3, p1, v2

    .line 229
    invoke-virtual {p0, v3}, Lcom/getcapacitor/Plugin;->hasDefinedPermission(Ljava/lang/String;)Z

    move-result v3

    if-nez v3, :cond_0

    return v1

    :cond_0
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_1
    const/4 p1, 0x1

    return p1
.end method

.method public hasDefinedRequiredPermissions()Z
    .locals 1

    .line 241
    iget-object v0, p0, Lcom/getcapacitor/Plugin;->handle:Lcom/getcapacitor/PluginHandle;

    invoke-virtual {v0}, Lcom/getcapacitor/PluginHandle;->getPluginAnnotation()Lcom/getcapacitor/NativePlugin;

    move-result-object v0

    .line 242
    invoke-interface {v0}, Lcom/getcapacitor/NativePlugin;->permissions()[Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p0, v0}, Lcom/getcapacitor/Plugin;->hasDefinedPermissions([Ljava/lang/String;)Z

    move-result v0

    return v0
.end method

.method protected hasListeners(Ljava/lang/String;)Z
    .locals 1

    .line 368
    iget-object v0, p0, Lcom/getcapacitor/Plugin;->eventListeners:Ljava/util/Map;

    invoke-interface {v0, p1}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/util/List;

    const/4 v0, 0x0

    if-nez p1, :cond_0

    return v0

    .line 372
    :cond_0
    invoke-interface {p1}, Ljava/util/List;->size()I

    move-result p1

    if-lez p1, :cond_1

    const/4 v0, 0x1

    :cond_1
    return v0
.end method

.method public hasPermission(Ljava/lang/String;)Z
    .locals 1

    .line 251
    invoke-virtual {p0}, Lcom/getcapacitor/Plugin;->getContext()Landroid/content/Context;

    move-result-object v0

    invoke-static {v0, p1}, Landroidx/core/app/ActivityCompat;->checkSelfPermission(Landroid/content/Context;Ljava/lang/String;)I

    move-result p1

    if-nez p1, :cond_0

    const/4 p1, 0x1

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    :goto_0
    return p1
.end method

.method public hasRequiredPermissions()Z
    .locals 5

    .line 262
    iget-object v0, p0, Lcom/getcapacitor/Plugin;->handle:Lcom/getcapacitor/PluginHandle;

    invoke-virtual {v0}, Lcom/getcapacitor/PluginHandle;->getPluginAnnotation()Lcom/getcapacitor/NativePlugin;

    move-result-object v0

    .line 263
    invoke-interface {v0}, Lcom/getcapacitor/NativePlugin;->permissions()[Ljava/lang/String;

    move-result-object v0

    array-length v1, v0

    const/4 v2, 0x0

    move v3, v2

    :goto_0
    if-ge v3, v1, :cond_1

    aget-object v4, v0, v3

    .line 264
    invoke-virtual {p0, v4}, Lcom/getcapacitor/Plugin;->hasPermission(Ljava/lang/String;)Z

    move-result v4

    if-nez v4, :cond_0

    return v2

    :cond_0
    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    :cond_1
    const/4 v0, 0x1

    return v0
.end method

.method public load()V
    .locals 0

    return-void
.end method

.method protected notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;)V
    .locals 1

    const/4 v0, 0x0

    .line 361
    invoke-virtual {p0, p1, p2, v0}, Lcom/getcapacitor/Plugin;->notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;Z)V

    return-void
.end method

.method protected notifyListeners(Ljava/lang/String;Lcom/getcapacitor/JSObject;Z)V
    .locals 3

    .line 338
    invoke-virtual {p0}, Lcom/getcapacitor/Plugin;->getLogTag()Ljava/lang/String;

    move-result-object v0

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Notifying listeners for event "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/getcapacitor/Logger;->verbose(Ljava/lang/String;Ljava/lang/String;)V

    .line 339
    iget-object v0, p0, Lcom/getcapacitor/Plugin;->eventListeners:Ljava/util/Map;

    invoke-interface {v0, p1}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/util/List;

    if-eqz v0, :cond_2

    .line 340
    invoke-interface {v0}, Ljava/util/List;->isEmpty()Z

    move-result v1

    if-eqz v1, :cond_0

    goto :goto_1

    .line 348
    :cond_0
    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result p3

    if-eqz p3, :cond_1

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object p3

    check-cast p3, Lcom/getcapacitor/PluginCall;

    .line 349
    invoke-virtual {p3, p2}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    goto :goto_0

    :cond_1
    return-void

    .line 341
    :cond_2
    :goto_1
    invoke-virtual {p0}, Lcom/getcapacitor/Plugin;->getLogTag()Ljava/lang/String;

    move-result-object v0

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "No listeners found for event "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    if-eqz p3, :cond_3

    .line 343
    iget-object p3, p0, Lcom/getcapacitor/Plugin;->retainedEventArguments:Ljava/util/Map;

    invoke-interface {p3, p1, p2}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    :cond_3
    return-void
.end method

.method public pluginRequestAllPermissions()V
    .locals 3

    .line 284
    iget-object v0, p0, Lcom/getcapacitor/Plugin;->handle:Lcom/getcapacitor/PluginHandle;

    invoke-virtual {v0}, Lcom/getcapacitor/PluginHandle;->getPluginAnnotation()Lcom/getcapacitor/NativePlugin;

    move-result-object v0

    .line 285
    invoke-virtual {p0}, Lcom/getcapacitor/Plugin;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v1

    invoke-interface {v0}, Lcom/getcapacitor/NativePlugin;->permissions()[Ljava/lang/String;

    move-result-object v2

    invoke-interface {v0}, Lcom/getcapacitor/NativePlugin;->permissionRequestCode()I

    move-result v0

    invoke-static {v1, v2, v0}, Landroidx/core/app/ActivityCompat;->requestPermissions(Landroid/app/Activity;[Ljava/lang/String;I)V

    return-void
.end method

.method public pluginRequestPermission(Ljava/lang/String;I)V
    .locals 3

    .line 294
    invoke-virtual {p0}, Lcom/getcapacitor/Plugin;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    const/4 v1, 0x1

    new-array v1, v1, [Ljava/lang/String;

    const/4 v2, 0x0

    aput-object p1, v1, v2

    invoke-static {v0, v1, p2}, Landroidx/core/app/ActivityCompat;->requestPermissions(Landroid/app/Activity;[Ljava/lang/String;I)V

    return-void
.end method

.method public pluginRequestPermissions([Ljava/lang/String;I)V
    .locals 1

    .line 277
    invoke-virtual {p0}, Lcom/getcapacitor/Plugin;->getActivity()Landroidx/appcompat/app/AppCompatActivity;

    move-result-object v0

    invoke-static {v0, p1, p2}, Landroidx/core/app/ActivityCompat;->requestPermissions(Landroid/app/Activity;[Ljava/lang/String;I)V

    return-void
.end method

.method public removeAllListeners(Lcom/getcapacitor/PluginCall;)V
    .locals 0
    .annotation runtime Lcom/getcapacitor/PluginMethod;
        returnType = "none"
    .end annotation

    .line 426
    iget-object p1, p0, Lcom/getcapacitor/Plugin;->eventListeners:Ljava/util/Map;

    invoke-interface {p1}, Ljava/util/Map;->clear()V

    return-void
.end method

.method public removeListener(Lcom/getcapacitor/PluginCall;)V
    .locals 2
    .annotation runtime Lcom/getcapacitor/PluginMethod;
        returnType = "none"
    .end annotation

    .line 410
    const-string v0, "eventName"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 411
    const-string v1, "callbackId"

    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    .line 412
    iget-object v1, p0, Lcom/getcapacitor/Plugin;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v1, p1}, Lcom/getcapacitor/Bridge;->getSavedCall(Ljava/lang/String;)Lcom/getcapacitor/PluginCall;

    move-result-object p1

    if-eqz p1, :cond_0

    .line 414
    invoke-direct {p0, v0, p1}, Lcom/getcapacitor/Plugin;->removeEventListener(Ljava/lang/String;Lcom/getcapacitor/PluginCall;)V

    .line 415
    iget-object v0, p0, Lcom/getcapacitor/Plugin;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/Bridge;->releaseCall(Lcom/getcapacitor/PluginCall;)V

    :cond_0
    return-void
.end method

.method public requestPermissions(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 437
    iget-object v0, p0, Lcom/getcapacitor/Plugin;->handle:Lcom/getcapacitor/PluginHandle;

    invoke-virtual {v0}, Lcom/getcapacitor/PluginHandle;->getPluginAnnotation()Lcom/getcapacitor/NativePlugin;

    move-result-object v0

    .line 438
    invoke-interface {v0}, Lcom/getcapacitor/NativePlugin;->permissions()[Ljava/lang/String;

    move-result-object v1

    .line 440
    array-length v2, v1

    if-lez v2, :cond_0

    .line 442
    invoke-virtual {p0, p1}, Lcom/getcapacitor/Plugin;->saveCall(Lcom/getcapacitor/PluginCall;)V

    .line 444
    invoke-interface {v0}, Lcom/getcapacitor/NativePlugin;->permissionRequestCode()I

    move-result p1

    invoke-virtual {p0, v1, p1}, Lcom/getcapacitor/Plugin;->pluginRequestPermissions([Ljava/lang/String;I)V

    goto :goto_0

    .line 446
    :cond_0
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->success()V

    :goto_0
    return-void
.end method

.method protected restoreState(Landroid/os/Bundle;)V
    .locals 0

    return-void
.end method

.method public saveCall(Lcom/getcapacitor/PluginCall;)V
    .locals 0

    .line 123
    iput-object p1, p0, Lcom/getcapacitor/Plugin;->savedLastCall:Lcom/getcapacitor/PluginCall;

    return-void
.end method

.method protected saveInstanceState()Landroid/os/Bundle;
    .locals 3

    .line 482
    invoke-virtual {p0}, Lcom/getcapacitor/Plugin;->getSavedCall()Lcom/getcapacitor/PluginCall;

    move-result-object v0

    if-nez v0, :cond_0

    const/4 v0, 0x0

    return-object v0

    .line 488
    :cond_0
    new-instance v1, Landroid/os/Bundle;

    invoke-direct {v1}, Landroid/os/Bundle;-><init>()V

    .line 489
    invoke-virtual {v0}, Lcom/getcapacitor/PluginCall;->getData()Lcom/getcapacitor/JSObject;

    move-result-object v0

    if-eqz v0, :cond_1

    .line 492
    const-string v2, "_json"

    invoke-virtual {v0}, Lcom/getcapacitor/JSObject;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v2, v0}, Landroid/os/Bundle;->putString(Ljava/lang/String;Ljava/lang/String;)V

    :cond_1
    return-object v1
.end method

.method public setBridge(Lcom/getcapacitor/Bridge;)V
    .locals 0

    .line 82
    iput-object p1, p0, Lcom/getcapacitor/Plugin;->bridge:Lcom/getcapacitor/Bridge;

    return-void
.end method

.method public setPluginHandle(Lcom/getcapacitor/PluginHandle;)V
    .locals 0

    .line 97
    iput-object p1, p0, Lcom/getcapacitor/Plugin;->handle:Lcom/getcapacitor/PluginHandle;

    return-void
.end method

.method public shouldOverrideLoad(Landroid/net/Uri;)Ljava/lang/Boolean;
    .locals 0

    const/4 p1, 0x0

    return-object p1
.end method

.method protected startActivityForResult(Lcom/getcapacitor/PluginCall;Landroid/content/Intent;I)V
    .locals 1

    .line 572
    iget-object v0, p0, Lcom/getcapacitor/Plugin;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0, p1, p2, p3}, Lcom/getcapacitor/Bridge;->startActivityForPluginWithResult(Lcom/getcapacitor/PluginCall;Landroid/content/Intent;I)V

    return-void
.end method
