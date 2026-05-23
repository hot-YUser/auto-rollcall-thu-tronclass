.class public Lcom/getcapacitor/PluginHandle;
.super Ljava/lang/Object;
.source "PluginHandle.java"


# instance fields
.field private final bridge:Lcom/getcapacitor/Bridge;

.field private instance:Lcom/getcapacitor/Plugin;

.field private pluginAnnotation:Lcom/getcapacitor/NativePlugin;

.field private final pluginClass:Ljava/lang/Class;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/lang/Class<",
            "+",
            "Lcom/getcapacitor/Plugin;",
            ">;"
        }
    .end annotation
.end field

.field private final pluginId:Ljava/lang/String;

.field private pluginMethods:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Lcom/getcapacitor/PluginMethodHandle;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method public constructor <init>(Lcom/getcapacitor/Bridge;Ljava/lang/Class;)V
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/getcapacitor/Bridge;",
            "Ljava/lang/Class<",
            "+",
            "Lcom/getcapacitor/Plugin;",
            ">;)V"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/getcapacitor/InvalidPluginException;,
            Lcom/getcapacitor/PluginLoadException;
        }
    .end annotation

    .line 25
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 17
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    iput-object v0, p0, Lcom/getcapacitor/PluginHandle;->pluginMethods:Ljava/util/Map;

    .line 26
    iput-object p1, p0, Lcom/getcapacitor/PluginHandle;->bridge:Lcom/getcapacitor/Bridge;

    .line 27
    iput-object p2, p0, Lcom/getcapacitor/PluginHandle;->pluginClass:Ljava/lang/Class;

    .line 29
    const-class p1, Lcom/getcapacitor/NativePlugin;

    invoke-virtual {p2, p1}, Ljava/lang/Class;->getAnnotation(Ljava/lang/Class;)Ljava/lang/annotation/Annotation;

    move-result-object p1

    check-cast p1, Lcom/getcapacitor/NativePlugin;

    if-eqz p1, :cond_1

    .line 34
    invoke-interface {p1}, Lcom/getcapacitor/NativePlugin;->name()Ljava/lang/String;

    move-result-object v0

    const-string v1, ""

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_0

    .line 35
    invoke-interface {p1}, Lcom/getcapacitor/NativePlugin;->name()Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/getcapacitor/PluginHandle;->pluginId:Ljava/lang/String;

    goto :goto_0

    .line 37
    :cond_0
    invoke-virtual {p2}, Ljava/lang/Class;->getSimpleName()Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/getcapacitor/PluginHandle;->pluginId:Ljava/lang/String;

    .line 40
    :goto_0
    iput-object p1, p0, Lcom/getcapacitor/PluginHandle;->pluginAnnotation:Lcom/getcapacitor/NativePlugin;

    .line 42
    invoke-direct {p0, p2}, Lcom/getcapacitor/PluginHandle;->indexMethods(Ljava/lang/Class;)V

    .line 44
    invoke-virtual {p0}, Lcom/getcapacitor/PluginHandle;->load()Lcom/getcapacitor/Plugin;

    return-void

    .line 31
    :cond_1
    new-instance p1, Lcom/getcapacitor/InvalidPluginException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "No @NativePlugin annotation found for plugin "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2}, Ljava/lang/Class;->getName()Ljava/lang/String;

    move-result-object p2

    invoke-virtual {v0, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Lcom/getcapacitor/InvalidPluginException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method private indexMethods(Ljava/lang/Class;)V
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/Class<",
            "+",
            "Lcom/getcapacitor/Plugin;",
            ">;)V"
        }
    .end annotation

    .line 109
    iget-object p1, p0, Lcom/getcapacitor/PluginHandle;->pluginClass:Ljava/lang/Class;

    invoke-virtual {p1}, Ljava/lang/Class;->getMethods()[Ljava/lang/reflect/Method;

    move-result-object p1

    .line 111
    array-length v0, p1

    const/4 v1, 0x0

    :goto_0
    if-ge v1, v0, :cond_1

    aget-object v2, p1, v1

    .line 112
    const-class v3, Lcom/getcapacitor/PluginMethod;

    invoke-virtual {v2, v3}, Ljava/lang/reflect/Method;->getAnnotation(Ljava/lang/Class;)Ljava/lang/annotation/Annotation;

    move-result-object v3

    check-cast v3, Lcom/getcapacitor/PluginMethod;

    if-nez v3, :cond_0

    goto :goto_1

    .line 118
    :cond_0
    new-instance v4, Lcom/getcapacitor/PluginMethodHandle;

    invoke-direct {v4, v2, v3}, Lcom/getcapacitor/PluginMethodHandle;-><init>(Ljava/lang/reflect/Method;Lcom/getcapacitor/PluginMethod;)V

    .line 119
    iget-object v3, p0, Lcom/getcapacitor/PluginHandle;->pluginMethods:Ljava/util/Map;

    invoke-virtual {v2}, Ljava/lang/reflect/Method;->getName()Ljava/lang/String;

    move-result-object v2

    invoke-interface {v3, v2, v4}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    :goto_1
    add-int/lit8 v1, v1, 0x1

    goto :goto_0

    :cond_1
    return-void
.end method


# virtual methods
.method public getId()Ljava/lang/String;
    .locals 1

    .line 52
    iget-object v0, p0, Lcom/getcapacitor/PluginHandle;->pluginId:Ljava/lang/String;

    return-object v0
.end method

.method public getInstance()Lcom/getcapacitor/Plugin;
    .locals 1

    .line 56
    iget-object v0, p0, Lcom/getcapacitor/PluginHandle;->instance:Lcom/getcapacitor/Plugin;

    return-object v0
.end method

.method public getMethods()Ljava/util/Collection;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Collection<",
            "Lcom/getcapacitor/PluginMethodHandle;",
            ">;"
        }
    .end annotation

    .line 60
    iget-object v0, p0, Lcom/getcapacitor/PluginHandle;->pluginMethods:Ljava/util/Map;

    invoke-interface {v0}, Ljava/util/Map;->values()Ljava/util/Collection;

    move-result-object v0

    return-object v0
.end method

.method public getPluginAnnotation()Lcom/getcapacitor/NativePlugin;
    .locals 1

    .line 54
    iget-object v0, p0, Lcom/getcapacitor/PluginHandle;->pluginAnnotation:Lcom/getcapacitor/NativePlugin;

    return-object v0
.end method

.method public getPluginClass()Ljava/lang/Class;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/lang/Class<",
            "+",
            "Lcom/getcapacitor/Plugin;",
            ">;"
        }
    .end annotation

    .line 48
    iget-object v0, p0, Lcom/getcapacitor/PluginHandle;->pluginClass:Ljava/lang/Class;

    return-object v0
.end method

.method public invoke(Ljava/lang/String;Lcom/getcapacitor/PluginCall;)V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/getcapacitor/PluginLoadException;,
            Lcom/getcapacitor/InvalidPluginMethodException;,
            Ljava/lang/reflect/InvocationTargetException;,
            Ljava/lang/IllegalAccessException;
        }
    .end annotation

    .line 89
    iget-object v0, p0, Lcom/getcapacitor/PluginHandle;->instance:Lcom/getcapacitor/Plugin;

    if-nez v0, :cond_0

    .line 91
    invoke-virtual {p0}, Lcom/getcapacitor/PluginHandle;->load()Lcom/getcapacitor/Plugin;

    .line 94
    :cond_0
    iget-object v0, p0, Lcom/getcapacitor/PluginHandle;->pluginMethods:Ljava/util/Map;

    invoke-interface {v0, p1}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/getcapacitor/PluginMethodHandle;

    if-eqz v0, :cond_1

    .line 99
    invoke-virtual {v0}, Lcom/getcapacitor/PluginMethodHandle;->getMethod()Ljava/lang/reflect/Method;

    move-result-object p1

    iget-object v0, p0, Lcom/getcapacitor/PluginHandle;->instance:Lcom/getcapacitor/Plugin;

    filled-new-array {p2}, [Ljava/lang/Object;

    move-result-object p2

    invoke-virtual {p1, v0, p2}, Ljava/lang/reflect/Method;->invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;

    return-void

    .line 96
    :cond_1
    new-instance p2, Lcom/getcapacitor/InvalidPluginMethodException;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "No method "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, " found for plugin "

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    iget-object v0, p0, Lcom/getcapacitor/PluginHandle;->pluginClass:Ljava/lang/Class;

    invoke-virtual {v0}, Ljava/lang/Class;->getName()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-direct {p2, p1}, Lcom/getcapacitor/InvalidPluginMethodException;-><init>(Ljava/lang/String;)V

    throw p2
.end method

.method public load()Lcom/getcapacitor/Plugin;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/getcapacitor/PluginLoadException;
        }
    .end annotation

    .line 64
    iget-object v0, p0, Lcom/getcapacitor/PluginHandle;->instance:Lcom/getcapacitor/Plugin;

    if-eqz v0, :cond_0

    return-object v0

    .line 69
    :cond_0
    :try_start_0
    iget-object v0, p0, Lcom/getcapacitor/PluginHandle;->pluginClass:Ljava/lang/Class;

    invoke-virtual {v0}, Ljava/lang/Class;->newInstance()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/getcapacitor/Plugin;

    iput-object v0, p0, Lcom/getcapacitor/PluginHandle;->instance:Lcom/getcapacitor/Plugin;

    .line 70
    invoke-virtual {v0, p0}, Lcom/getcapacitor/Plugin;->setPluginHandle(Lcom/getcapacitor/PluginHandle;)V

    .line 71
    iget-object v0, p0, Lcom/getcapacitor/PluginHandle;->instance:Lcom/getcapacitor/Plugin;

    iget-object v1, p0, Lcom/getcapacitor/PluginHandle;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0, v1}, Lcom/getcapacitor/Plugin;->setBridge(Lcom/getcapacitor/Bridge;)V

    .line 72
    iget-object v0, p0, Lcom/getcapacitor/PluginHandle;->instance:Lcom/getcapacitor/Plugin;

    invoke-virtual {v0}, Lcom/getcapacitor/Plugin;->load()V

    .line 73
    iget-object v0, p0, Lcom/getcapacitor/PluginHandle;->instance:Lcom/getcapacitor/Plugin;
    :try_end_0
    .catch Ljava/lang/InstantiationException; {:try_start_0 .. :try_end_0} :catch_0
    .catch Ljava/lang/IllegalAccessException; {:try_start_0 .. :try_end_0} :catch_0

    return-object v0

    .line 75
    :catch_0
    new-instance v0, Lcom/getcapacitor/PluginLoadException;

    const-string v1, "Unable to load plugin instance. Ensure plugin is publicly accessible"

    invoke-direct {v0, v1}, Lcom/getcapacitor/PluginLoadException;-><init>(Ljava/lang/String;)V

    throw v0
.end method
