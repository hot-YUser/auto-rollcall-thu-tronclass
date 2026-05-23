.class public Lorg/apache/cordova/geolocation/Geolocation;
.super Lorg/apache/cordova/CordovaPlugin;
.source "Geolocation.java"


# instance fields
.field TAG:Ljava/lang/String;

.field context:Lorg/apache/cordova/CallbackContext;

.field permissions:[Ljava/lang/String;


# direct methods
.method public constructor <init>()V
    .locals 3

    .line 36
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    .line 38
    const-string v0, "GeolocationPlugin"

    iput-object v0, p0, Lorg/apache/cordova/geolocation/Geolocation;->TAG:Ljava/lang/String;

    const/4 v0, 0x2

    .line 41
    new-array v0, v0, [Ljava/lang/String;

    const/4 v1, 0x0

    const-string v2, "android.permission.ACCESS_COARSE_LOCATION"

    aput-object v2, v0, v1

    const/4 v1, 0x1

    const-string v2, "android.permission.ACCESS_FINE_LOCATION"

    aput-object v2, v0, v1

    iput-object v0, p0, Lorg/apache/cordova/geolocation/Geolocation;->permissions:[Ljava/lang/String;

    return-void
.end method


# virtual methods
.method public execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 45
    iget-object p2, p0, Lorg/apache/cordova/geolocation/Geolocation;->TAG:Ljava/lang/String;

    const-string v0, "We are entering execute"

    invoke-static {p2, v0}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 46
    iput-object p3, p0, Lorg/apache/cordova/geolocation/Geolocation;->context:Lorg/apache/cordova/CallbackContext;

    .line 47
    const-string p2, "getPermission"

    invoke-virtual {p1, p2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    const/4 p2, 0x0

    if-eqz p1, :cond_1

    .line 49
    invoke-virtual {p0}, Lorg/apache/cordova/geolocation/Geolocation;->hasPermisssion()Z

    move-result p1

    const/4 p3, 0x1

    if-eqz p1, :cond_0

    .line 51
    new-instance p1, Lorg/apache/cordova/PluginResult;

    sget-object p2, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {p1, p2}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;)V

    .line 52
    iget-object p2, p0, Lorg/apache/cordova/geolocation/Geolocation;->context:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    return p3

    .line 56
    :cond_0
    iget-object p1, p0, Lorg/apache/cordova/geolocation/Geolocation;->permissions:[Ljava/lang/String;

    invoke-static {p0, p2, p1}, Lorg/apache/cordova/PermissionHelper;->requestPermissions(Lorg/apache/cordova/CordovaPlugin;I[Ljava/lang/String;)V

    return p3

    :cond_1
    return p2
.end method

.method public hasPermisssion()Z
    .locals 5

    .line 85
    iget-object v0, p0, Lorg/apache/cordova/geolocation/Geolocation;->permissions:[Ljava/lang/String;

    array-length v1, v0

    const/4 v2, 0x0

    move v3, v2

    :goto_0
    if-ge v3, v1, :cond_1

    aget-object v4, v0, v3

    .line 87
    invoke-static {p0, v4}, Lorg/apache/cordova/PermissionHelper;->hasPermission(Lorg/apache/cordova/CordovaPlugin;Ljava/lang/String;)Z

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

.method public onRequestPermissionResult(I[Ljava/lang/String;[I)V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 69
    iget-object p1, p0, Lorg/apache/cordova/geolocation/Geolocation;->context:Lorg/apache/cordova/CallbackContext;

    if-eqz p1, :cond_2

    .line 70
    array-length p1, p3

    const/4 p2, 0x0

    :goto_0
    if-ge p2, p1, :cond_1

    aget v0, p3, p2

    const/4 v1, -0x1

    if-ne v0, v1, :cond_0

    .line 72
    iget-object p1, p0, Lorg/apache/cordova/geolocation/Geolocation;->TAG:Ljava/lang/String;

    const-string p2, "Permission Denied!"

    invoke-static {p1, p2}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 73
    new-instance p1, Lorg/apache/cordova/PluginResult;

    sget-object p2, Lorg/apache/cordova/PluginResult$Status;->ILLEGAL_ACCESS_EXCEPTION:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {p1, p2}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;)V

    .line 74
    iget-object p2, p0, Lorg/apache/cordova/geolocation/Geolocation;->context:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    return-void

    :cond_0
    add-int/lit8 p2, p2, 0x1

    goto :goto_0

    .line 79
    :cond_1
    new-instance p1, Lorg/apache/cordova/PluginResult;

    sget-object p2, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {p1, p2}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;)V

    .line 80
    iget-object p2, p0, Lorg/apache/cordova/geolocation/Geolocation;->context:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    :cond_2
    return-void
.end method

.method public requestPermissions(I)V
    .locals 1

    .line 102
    iget-object v0, p0, Lorg/apache/cordova/geolocation/Geolocation;->permissions:[Ljava/lang/String;

    invoke-static {p0, p1, v0}, Lorg/apache/cordova/PermissionHelper;->requestPermissions(Lorg/apache/cordova/CordovaPlugin;I[Ljava/lang/String;)V

    return-void
.end method
