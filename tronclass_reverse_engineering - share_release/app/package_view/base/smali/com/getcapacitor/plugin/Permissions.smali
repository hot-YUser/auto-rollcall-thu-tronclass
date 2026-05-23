.class public Lcom/getcapacitor/plugin/Permissions;
.super Lcom/getcapacitor/Plugin;
.source "Permissions.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
.end annotation


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 18
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    return-void
.end method

.method private checkCamera(Lcom/getcapacitor/PluginCall;)V
    .locals 1

    .line 61
    const-string v0, "android.permission.CAMERA"

    invoke-direct {p0, v0, p1}, Lcom/getcapacitor/plugin/Permissions;->checkPerm(Ljava/lang/String;Lcom/getcapacitor/PluginCall;)V

    return-void
.end method

.method private checkClipboard(Lcom/getcapacitor/PluginCall;)V
    .locals 3

    .line 85
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 86
    const-string v1, "state"

    const-string v2, "granted"

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 87
    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method private checkGeo(Lcom/getcapacitor/PluginCall;)V
    .locals 1

    .line 74
    const-string v0, "android.permission.ACCESS_COARSE_LOCATION"

    invoke-direct {p0, v0, p1}, Lcom/getcapacitor/plugin/Permissions;->checkPerm(Ljava/lang/String;Lcom/getcapacitor/PluginCall;)V

    return-void
.end method

.method private checkMicrophone(Lcom/getcapacitor/PluginCall;)V
    .locals 1

    .line 91
    const-string v0, "android.permission.RECORD_AUDIO"

    invoke-direct {p0, v0, p1}, Lcom/getcapacitor/plugin/Permissions;->checkPerm(Ljava/lang/String;Lcom/getcapacitor/PluginCall;)V

    return-void
.end method

.method private checkNotifications(Lcom/getcapacitor/PluginCall;)V
    .locals 3

    .line 78
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Permissions;->getContext()Landroid/content/Context;

    move-result-object v0

    invoke-static {v0}, Landroidx/core/app/NotificationManagerCompat;->from(Landroid/content/Context;)Landroidx/core/app/NotificationManagerCompat;

    move-result-object v0

    invoke-virtual {v0}, Landroidx/core/app/NotificationManagerCompat;->areNotificationsEnabled()Z

    move-result v0

    .line 79
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    if-eqz v0, :cond_0

    .line 80
    const-string v0, "granted"

    goto :goto_0

    :cond_0
    const-string v0, "denied"

    :goto_0
    const-string v2, "state"

    invoke-virtual {v1, v2, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 81
    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method private checkPerm(Ljava/lang/String;Lcom/getcapacitor/PluginCall;)V
    .locals 4

    .line 49
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 50
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Permissions;->getContext()Landroid/content/Context;

    move-result-object v1

    invoke-static {v1, p1}, Landroidx/core/content/ContextCompat;->checkSelfPermission(Landroid/content/Context;Ljava/lang/String;)I

    move-result v1

    const/4 v2, -0x1

    const-string v3, "state"

    if-ne v1, v2, :cond_0

    .line 51
    const-string p1, "denied"

    invoke-virtual {v0, v3, p1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    goto :goto_0

    .line 52
    :cond_0
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Permissions;->getContext()Landroid/content/Context;

    move-result-object v1

    invoke-static {v1, p1}, Landroidx/core/content/ContextCompat;->checkSelfPermission(Landroid/content/Context;Ljava/lang/String;)I

    move-result p1

    if-nez p1, :cond_1

    .line 53
    const-string p1, "granted"

    invoke-virtual {v0, v3, p1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    goto :goto_0

    .line 55
    :cond_1
    const-string p1, "prompt"

    invoke-virtual {v0, v3, p1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 57
    :goto_0
    invoke-virtual {p2, v0}, Lcom/getcapacitor/PluginCall;->resolve(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method private checkPhotos(Lcom/getcapacitor/PluginCall;)V
    .locals 2

    .line 66
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x21

    if-lt v0, v1, :cond_0

    .line 67
    const-string v0, "Not implement on Android 13+"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    return-void

    .line 70
    :cond_0
    const-string v0, "android.permission.READ_EXTERNAL_STORAGE"

    invoke-direct {p0, v0, p1}, Lcom/getcapacitor/plugin/Permissions;->checkPerm(Ljava/lang/String;Lcom/getcapacitor/PluginCall;)V

    return-void
.end method


# virtual methods
.method public query(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 22
    const-string v0, "name"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 24
    invoke-virtual {v0}, Ljava/lang/String;->hashCode()I

    invoke-virtual {v0}, Ljava/lang/String;->hashCode()I

    move-result v1

    const/4 v2, -0x1

    sparse-switch v1, :sswitch_data_0

    goto :goto_0

    :sswitch_0
    const-string v1, "microphone"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_0

    goto :goto_0

    :cond_0
    const/4 v2, 0x6

    goto :goto_0

    :sswitch_1
    const-string v1, "notifications"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_1

    goto :goto_0

    :cond_1
    const/4 v2, 0x5

    goto :goto_0

    :sswitch_2
    const-string v1, "geolocation"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_2

    goto :goto_0

    :cond_2
    const/4 v2, 0x4

    goto :goto_0

    :sswitch_3
    const-string v1, "photos"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_3

    goto :goto_0

    :cond_3
    const/4 v2, 0x3

    goto :goto_0

    :sswitch_4
    const-string v1, "camera"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_4

    goto :goto_0

    :cond_4
    const/4 v2, 0x2

    goto :goto_0

    :sswitch_5
    const-string v1, "clipboard-read"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_5

    goto :goto_0

    :cond_5
    const/4 v2, 0x1

    goto :goto_0

    :sswitch_6
    const-string v1, "clipboard-write"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_6

    goto :goto_0

    :cond_6
    const/4 v2, 0x0

    :goto_0
    packed-switch v2, :pswitch_data_0

    .line 44
    const-string v0, "Unknown permission type"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->reject(Ljava/lang/String;)V

    goto :goto_1

    .line 35
    :pswitch_0
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Permissions;->checkNotifications(Lcom/getcapacitor/PluginCall;)V

    goto :goto_1

    .line 32
    :pswitch_1
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Permissions;->checkGeo(Lcom/getcapacitor/PluginCall;)V

    goto :goto_1

    .line 29
    :pswitch_2
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Permissions;->checkPhotos(Lcom/getcapacitor/PluginCall;)V

    goto :goto_1

    .line 26
    :pswitch_3
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Permissions;->checkCamera(Lcom/getcapacitor/PluginCall;)V

    goto :goto_1

    .line 39
    :pswitch_4
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Permissions;->checkClipboard(Lcom/getcapacitor/PluginCall;)V

    .line 41
    :pswitch_5
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Permissions;->checkMicrophone(Lcom/getcapacitor/PluginCall;)V

    :goto_1
    return-void

    :sswitch_data_0
    .sparse-switch
        -0x6c0abf18 -> :sswitch_6
        -0x56135493 -> :sswitch_5
        -0x51863cdb -> :sswitch_4
        -0x3af3777f -> :sswitch_3
        0x3f94e06 -> :sswitch_2
        0x4bd694e8 -> :sswitch_1
        0x51b6992a -> :sswitch_0
    .end sparse-switch

    :pswitch_data_0
    .packed-switch 0x0
        :pswitch_4
        :pswitch_4
        :pswitch_3
        :pswitch_2
        :pswitch_1
        :pswitch_0
        :pswitch_5
    .end packed-switch
.end method
