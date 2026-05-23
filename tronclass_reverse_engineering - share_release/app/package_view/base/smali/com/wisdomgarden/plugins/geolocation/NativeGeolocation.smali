.class public Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;
.super Lcom/getcapacitor/Plugin;
.source "NativeGeolocation.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
    permissionRequestCode = 0x232c
    permissions = {
        "android.permission.ACCESS_COARSE_LOCATION",
        "android.permission.ACCESS_FINE_LOCATION"
    }
.end annotation


# instance fields
.field private context:Landroid/content/Context;

.field private listener:Landroid/location/LocationListener;

.field private locationManager:Landroid/location/LocationManager;

.field private provider:Ljava/lang/String;

.field private watchingCalls:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Lcom/getcapacitor/PluginCall;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 27
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    .line 30
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    iput-object v0, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->watchingCalls:Ljava/util/Map;

    return-void
.end method

.method static synthetic access$000(Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;Landroid/location/Location;)Lcom/getcapacitor/JSObject;
    .locals 0

    .line 27
    invoke-direct {p0, p1}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->getJSObjectForLocation(Landroid/location/Location;)Lcom/getcapacitor/JSObject;

    move-result-object p0

    return-object p0
.end method

.method static synthetic access$102(Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;Landroid/location/LocationManager;)Landroid/location/LocationManager;
    .locals 0

    .line 27
    iput-object p1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->locationManager:Landroid/location/LocationManager;

    return-object p1
.end method

.method static synthetic access$200(Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;)V
    .locals 0

    .line 27
    invoke-direct {p0}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->clearLocationUpdates()V

    return-void
.end method

.method private clearLocationUpdates()V
    .locals 2

    .line 266
    iget-object v0, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->listener:Landroid/location/LocationListener;

    if-eqz v0, :cond_0

    iget-object v1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->locationManager:Landroid/location/LocationManager;

    if-eqz v1, :cond_0

    .line 267
    invoke-virtual {v1, v0}, Landroid/location/LocationManager;->removeUpdates(Landroid/location/LocationListener;)V

    const/4 v0, 0x0

    .line 268
    iput-object v0, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->listener:Landroid/location/LocationListener;

    :cond_0
    return-void
.end method

.method private getJSObjectForLocation(Landroid/location/Location;)Lcom/getcapacitor/JSObject;
    .locals 5

    .line 196
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 197
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 198
    const-string v2, "coords"

    invoke-virtual {v0, v2, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 199
    const-string v2, "timestamp"

    invoke-virtual {p1}, Landroid/location/Location;->getTime()J

    move-result-wide v3

    invoke-virtual {v0, v2, v3, v4}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;J)Lcom/getcapacitor/JSObject;

    .line 200
    const-string v2, "latitude"

    invoke-virtual {p1}, Landroid/location/Location;->getLatitude()D

    move-result-wide v3

    invoke-virtual {v1, v2, v3, v4}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;D)Lcom/getcapacitor/JSObject;

    .line 201
    const-string v2, "longitude"

    invoke-virtual {p1}, Landroid/location/Location;->getLongitude()D

    move-result-wide v3

    invoke-virtual {v1, v2, v3, v4}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;D)Lcom/getcapacitor/JSObject;

    .line 202
    invoke-virtual {p1}, Landroid/location/Location;->getAccuracy()F

    move-result v2

    float-to-double v2, v2

    const-string v4, "accuracy"

    invoke-virtual {v1, v4, v2, v3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;D)Lcom/getcapacitor/JSObject;

    .line 203
    const-string v2, "altitude"

    invoke-virtual {p1}, Landroid/location/Location;->getAltitude()D

    move-result-wide v3

    invoke-virtual {v1, v2, v3, v4}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;D)Lcom/getcapacitor/JSObject;

    .line 204
    sget v2, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v3, 0x1a

    if-lt v2, v3, :cond_0

    .line 205
    invoke-virtual {p1}, Landroid/location/Location;->getVerticalAccuracyMeters()F

    move-result v2

    float-to-double v2, v2

    const-string v4, "altitudeAccuracy"

    invoke-virtual {v1, v4, v2, v3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;D)Lcom/getcapacitor/JSObject;

    .line 207
    :cond_0
    invoke-virtual {p1}, Landroid/location/Location;->getSpeed()F

    move-result v2

    float-to-double v2, v2

    const-string v4, "speed"

    invoke-virtual {v1, v4, v2, v3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;D)Lcom/getcapacitor/JSObject;

    .line 208
    invoke-virtual {p1}, Landroid/location/Location;->getBearing()F

    move-result p1

    float-to-double v2, p1

    const-string p1, "heading"

    invoke-virtual {v1, p1, v2, v3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;D)Lcom/getcapacitor/JSObject;

    return-object v0
.end method

.method private getNativeBestProvider(Z)V
    .locals 2

    .line 52
    new-instance v0, Landroid/location/Criteria;

    invoke-direct {v0}, Landroid/location/Criteria;-><init>()V

    const/4 v1, 0x1

    if-eqz p1, :cond_0

    .line 56
    invoke-virtual {v0, v1}, Landroid/location/Criteria;->setAccuracy(I)V

    goto :goto_0

    :cond_0
    const/4 p1, 0x2

    .line 59
    invoke-virtual {v0, p1}, Landroid/location/Criteria;->setAccuracy(I)V

    .line 63
    :goto_0
    invoke-virtual {p0}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->checkControlCenterToggle()Ljava/lang/Boolean;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result p1

    if-eqz p1, :cond_1

    .line 65
    iget-object p1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->locationManager:Landroid/location/LocationManager;

    invoke-virtual {p1, v0, v1}, Landroid/location/LocationManager;->getBestProvider(Landroid/location/Criteria;Z)Ljava/lang/String;

    move-result-object p1

    iput-object p1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->provider:Ljava/lang/String;

    :cond_1
    return-void
.end method

.method private processLocation(Landroid/location/Location;)V
    .locals 3

    .line 164
    iget-object v0, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->watchingCalls:Ljava/util/Map;

    invoke-interface {v0}, Ljava/util/Map;->entrySet()Ljava/util/Set;

    move-result-object v0

    invoke-interface {v0}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/util/Map$Entry;

    .line 165
    invoke-interface {v1}, Ljava/util/Map$Entry;->getValue()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lcom/getcapacitor/PluginCall;

    invoke-direct {p0, p1}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->getJSObjectForLocation(Landroid/location/Location;)Lcom/getcapacitor/JSObject;

    move-result-object v2

    invoke-virtual {v1, v2}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    goto :goto_0

    :cond_0
    return-void
.end method

.method private requestLocationUpdates(Lcom/getcapacitor/PluginCall;)V
    .locals 7

    .line 214
    invoke-direct {p0}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->clearLocationUpdates()V

    const/4 v0, 0x0

    .line 215
    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    const-string v1, "enableHighAccuracy"

    invoke-virtual {p1, v1, v0}, Lcom/getcapacitor/PluginCall;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v0

    .line 216
    invoke-direct {p0, v0}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->getNativeBestProvider(Z)V

    .line 217
    invoke-virtual {p0}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->checkControlCenterToggle()Ljava/lang/Boolean;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v1

    if-eqz v1, :cond_3

    .line 218
    invoke-virtual {p0}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->isLocationServicesEnabled()Ljava/lang/Boolean;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v1

    if-eqz v1, :cond_2

    .line 219
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->getMethodName()Ljava/lang/String;

    move-result-object v1

    const-string v2, "getCurrentPosition"

    invoke-virtual {v1, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    .line 220
    invoke-virtual {p0, v0}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->getLastLocation(Z)Landroid/location/Location;

    move-result-object v0

    if-nez v0, :cond_0

    .line 222
    new-instance v0, Ljava/lang/Exception;

    const-string v1, "location services not restored"

    invoke-direct {v0, v1}, Ljava/lang/Exception;-><init>(Ljava/lang/String;)V

    const-string v2, "4"

    invoke-virtual {p1, v1, v2, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Exception;)V

    .line 223
    invoke-direct {p0}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->clearLocationUpdates()V

    goto :goto_0

    .line 225
    :cond_0
    invoke-direct {p0, v0}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->getJSObjectForLocation(Landroid/location/Location;)Lcom/getcapacitor/JSObject;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    .line 229
    :cond_1
    :goto_0
    new-instance v6, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation$1;

    invoke-direct {v6, p0, p1}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation$1;-><init>(Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;Lcom/getcapacitor/PluginCall;)V

    iput-object v6, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->listener:Landroid/location/LocationListener;

    .line 255
    iget-object v1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->locationManager:Landroid/location/LocationManager;

    iget-object v2, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->provider:Ljava/lang/String;

    const-wide/16 v3, 0x0

    const/4 v5, 0x0

    invoke-virtual/range {v1 .. v6}, Landroid/location/LocationManager;->requestLocationUpdates(Ljava/lang/String;JFLandroid/location/LocationListener;)V

    goto :goto_1

    .line 257
    :cond_2
    new-instance v0, Ljava/lang/Exception;

    const-string v1, "location unavailable"

    invoke-direct {v0, v1}, Ljava/lang/Exception;-><init>(Ljava/lang/String;)V

    const-string v2, "2"

    invoke-virtual {p1, v1, v2, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Exception;)V

    goto :goto_1

    .line 261
    :cond_3
    new-instance v0, Ljava/lang/Exception;

    const-string v1, "open location service"

    invoke-direct {v0, v1}, Ljava/lang/Exception;-><init>(Ljava/lang/String;)V

    const-string v2, "1"

    invoke-virtual {p1, v1, v2, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Exception;)V

    :goto_1
    return-void
.end method

.method private sendLocation(Lcom/getcapacitor/PluginCall;)V
    .locals 0

    .line 122
    invoke-direct {p0, p1}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->requestLocationUpdates(Lcom/getcapacitor/PluginCall;)V

    return-void
.end method

.method private startWatch(Lcom/getcapacitor/PluginCall;)V
    .locals 2

    .line 138
    invoke-direct {p0, p1}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->requestLocationUpdates(Lcom/getcapacitor/PluginCall;)V

    .line 139
    iget-object v0, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->watchingCalls:Ljava/util/Map;

    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->getCallbackId()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1, p1}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    return-void
.end method


# virtual methods
.method public checkControlCenterToggle()Ljava/lang/Boolean;
    .locals 3

    .line 74
    iget-object v0, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->locationManager:Landroid/location/LocationManager;

    const-string v1, "gps"

    invoke-virtual {v0, v1}, Landroid/location/LocationManager;->isProviderEnabled(Ljava/lang/String;)Z

    move-result v0

    .line 75
    iget-object v1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->locationManager:Landroid/location/LocationManager;

    const-string v2, "network"

    invoke-virtual {v1, v2}, Landroid/location/LocationManager;->isProviderEnabled(Ljava/lang/String;)Z

    move-result v1

    if-nez v0, :cond_1

    if-eqz v1, :cond_0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 v0, 0x1

    .line 76
    :goto_1
    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    return-object v0
.end method

.method public clearWatch(Lcom/getcapacitor/PluginCall;)V
    .locals 2
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 145
    const-string v0, "id"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 147
    iget-object v1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->watchingCalls:Ljava/util/Map;

    invoke-interface {v1, v0}, Ljava/util/Map;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/getcapacitor/PluginCall;

    if-eqz v0, :cond_0

    .line 149
    iget-object v1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0, v1}, Lcom/getcapacitor/PluginCall;->release(Lcom/getcapacitor/Bridge;)V

    .line 152
    :cond_0
    iget-object v0, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->watchingCalls:Ljava/util/Map;

    invoke-interface {v0}, Ljava/util/Map;->size()I

    move-result v0

    if-nez v0, :cond_1

    .line 153
    invoke-direct {p0}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->clearLocationUpdates()V

    .line 155
    :cond_1
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->success()V

    return-void
.end method

.method public getCurrentPosition(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 113
    invoke-virtual {p0}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->hasRequiredPermissions()Z

    move-result v0

    if-nez v0, :cond_0

    .line 114
    invoke-virtual {p0, p1}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->saveCall(Lcom/getcapacitor/PluginCall;)V

    .line 115
    invoke-virtual {p0}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->pluginRequestAllPermissions()V

    goto :goto_0

    .line 117
    :cond_0
    invoke-direct {p0, p1}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->sendLocation(Lcom/getcapacitor/PluginCall;)V

    :goto_0
    return-void
.end method

.method public getLastLocation(Z)Landroid/location/Location;
    .locals 2

    .line 82
    invoke-direct {p0, p1}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->getNativeBestProvider(Z)V

    .line 83
    iget-object p1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->locationManager:Landroid/location/LocationManager;

    iget-object v0, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->provider:Ljava/lang/String;

    invoke-virtual {p1, v0}, Landroid/location/LocationManager;->getLastKnownLocation(Ljava/lang/String;)Landroid/location/Location;

    move-result-object p1

    if-eqz p1, :cond_0

    goto :goto_0

    .line 87
    :cond_0
    iget-object p1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->locationManager:Landroid/location/LocationManager;

    const-string v0, "gps"

    invoke-virtual {p1, v0}, Landroid/location/LocationManager;->getLastKnownLocation(Ljava/lang/String;)Landroid/location/Location;

    move-result-object p1

    if-eqz p1, :cond_1

    .line 88
    iput-object v0, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->provider:Ljava/lang/String;

    .line 89
    iget-object p1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->locationManager:Landroid/location/LocationManager;

    invoke-virtual {p1, v0}, Landroid/location/LocationManager;->getLastKnownLocation(Ljava/lang/String;)Landroid/location/Location;

    move-result-object p1

    goto :goto_0

    .line 90
    :cond_1
    iget-object p1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->locationManager:Landroid/location/LocationManager;

    const-string v0, "network"

    invoke-virtual {p1, v0}, Landroid/location/LocationManager;->getLastKnownLocation(Ljava/lang/String;)Landroid/location/Location;

    move-result-object p1

    if-eqz p1, :cond_2

    .line 91
    iput-object v0, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->provider:Ljava/lang/String;

    .line 92
    iget-object p1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->locationManager:Landroid/location/LocationManager;

    invoke-virtual {p1, v0}, Landroid/location/LocationManager;->getLastKnownLocation(Ljava/lang/String;)Landroid/location/Location;

    move-result-object p1

    goto :goto_0

    .line 95
    :cond_2
    iget-object p1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->locationManager:Landroid/location/LocationManager;

    invoke-virtual {p1}, Landroid/location/LocationManager;->getAllProviders()Ljava/util/List;

    move-result-object p1

    invoke-interface {p1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :cond_3
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_4

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/String;

    .line 96
    iget-object v1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->provider:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-nez v1, :cond_3

    .line 97
    iget-object v1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->locationManager:Landroid/location/LocationManager;

    invoke-virtual {v1, v0}, Landroid/location/LocationManager;->getLastKnownLocation(Ljava/lang/String;)Landroid/location/Location;

    move-result-object v1

    if-eqz v1, :cond_3

    .line 99
    iput-object v0, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->provider:Ljava/lang/String;

    move-object p1, v1

    goto :goto_0

    :cond_4
    const/4 p1, 0x0

    :goto_0
    return-object p1
.end method

.method protected handleRequestPermissionsResult(I[Ljava/lang/String;[I)V
    .locals 3

    .line 171
    invoke-super {p0, p1, p2, p3}, Lcom/getcapacitor/Plugin;->handleRequestPermissionsResult(I[Ljava/lang/String;[I)V

    .line 173
    invoke-virtual {p0}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->getSavedCall()Lcom/getcapacitor/PluginCall;

    move-result-object p1

    if-nez p1, :cond_0

    return-void

    .line 178
    :cond_0
    array-length p2, p3

    const/4 v0, 0x0

    :goto_0
    if-ge v0, p2, :cond_2

    aget v1, p3, v0

    const/4 v2, -0x1

    if-ne v1, v2, :cond_1

    .line 180
    new-instance p2, Ljava/lang/Exception;

    const-string p3, "User denied location permission"

    invoke-direct {p2, p3}, Ljava/lang/Exception;-><init>(Ljava/lang/String;)V

    const-string v0, "1"

    invoke-virtual {p1, p3, v0, p2}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Exception;)V

    return-void

    :cond_1
    add-int/lit8 v0, v0, 0x1

    goto :goto_0

    .line 185
    :cond_2
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->getMethodName()Ljava/lang/String;

    move-result-object p2

    const-string p3, "getCurrentPosition"

    invoke-virtual {p2, p3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_3

    .line 186
    invoke-direct {p0, p1}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->sendLocation(Lcom/getcapacitor/PluginCall;)V

    goto :goto_1

    .line 187
    :cond_3
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->getMethodName()Ljava/lang/String;

    move-result-object p2

    const-string p3, "watchPosition"

    invoke-virtual {p2, p3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_4

    .line 188
    invoke-direct {p0, p1}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->startWatch(Lcom/getcapacitor/PluginCall;)V

    goto :goto_1

    .line 190
    :cond_4
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->resolve()V

    .line 191
    iget-object p2, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->release(Lcom/getcapacitor/Bridge;)V

    :goto_1
    return-void
.end method

.method public isLocationServicesEnabled()Ljava/lang/Boolean;
    .locals 2

    .line 70
    iget-object v0, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->locationManager:Landroid/location/LocationManager;

    iget-object v1, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->provider:Ljava/lang/String;

    invoke-virtual {v0, v1}, Landroid/location/LocationManager;->isProviderEnabled(Ljava/lang/String;)Z

    move-result v0

    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    return-object v0
.end method

.method public load()V
    .locals 2

    .line 45
    invoke-virtual {p0}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->getContext()Landroid/content/Context;

    move-result-object v0

    iput-object v0, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->context:Landroid/content/Context;

    .line 46
    const-string v1, "location"

    invoke-virtual {v0, v1}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/location/LocationManager;

    iput-object v0, p0, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->locationManager:Landroid/location/LocationManager;

    return-void
.end method

.method public watchPosition(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
        returnType = "callback"
    .end annotation

    .line 127
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->save()V

    .line 128
    invoke-virtual {p0}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->hasRequiredPermissions()Z

    move-result v0

    if-nez v0, :cond_0

    .line 129
    invoke-virtual {p0, p1}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->saveCall(Lcom/getcapacitor/PluginCall;)V

    .line 130
    invoke-virtual {p0}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->pluginRequestAllPermissions()V

    goto :goto_0

    .line 132
    :cond_0
    invoke-direct {p0, p1}, Lcom/wisdomgarden/plugins/geolocation/NativeGeolocation;->startWatch(Lcom/getcapacitor/PluginCall;)V

    :goto_0
    return-void
.end method
