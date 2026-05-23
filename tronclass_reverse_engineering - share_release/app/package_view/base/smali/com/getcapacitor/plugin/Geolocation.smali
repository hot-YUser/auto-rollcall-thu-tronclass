.class public Lcom/getcapacitor/plugin/Geolocation;
.super Lcom/getcapacitor/Plugin;
.source "Geolocation.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
    permissionRequestCode = 0x232c
    permissions = {
        "android.permission.ACCESS_COARSE_LOCATION",
        "android.permission.ACCESS_FINE_LOCATION"
    }
.end annotation


# instance fields
.field private fusedLocationClient:Lcom/google/android/gms/location/FusedLocationProviderClient;

.field private locationCallback:Lcom/google/android/gms/location/LocationCallback;

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

    .line 35
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    .line 37
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    iput-object v0, p0, Lcom/getcapacitor/plugin/Geolocation;->watchingCalls:Ljava/util/Map;

    return-void
.end method

.method static synthetic access$000(Lcom/getcapacitor/plugin/Geolocation;)V
    .locals 0

    .line 35
    invoke-direct {p0}, Lcom/getcapacitor/plugin/Geolocation;->clearLocationUpdates()V

    return-void
.end method

.method static synthetic access$100(Lcom/getcapacitor/plugin/Geolocation;Landroid/location/Location;)Lcom/getcapacitor/JSObject;
    .locals 0

    .line 35
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Geolocation;->getJSObjectForLocation(Landroid/location/Location;)Lcom/getcapacitor/JSObject;

    move-result-object p0

    return-object p0
.end method

.method private clearLocationUpdates()V
    .locals 2

    .line 188
    iget-object v0, p0, Lcom/getcapacitor/plugin/Geolocation;->locationCallback:Lcom/google/android/gms/location/LocationCallback;

    if-eqz v0, :cond_0

    .line 189
    iget-object v1, p0, Lcom/getcapacitor/plugin/Geolocation;->fusedLocationClient:Lcom/google/android/gms/location/FusedLocationProviderClient;

    invoke-virtual {v1, v0}, Lcom/google/android/gms/location/FusedLocationProviderClient;->removeLocationUpdates(Lcom/google/android/gms/location/LocationCallback;)Lcom/google/android/gms/tasks/Task;

    const/4 v0, 0x0

    .line 190
    iput-object v0, p0, Lcom/getcapacitor/plugin/Geolocation;->locationCallback:Lcom/google/android/gms/location/LocationCallback;

    :cond_0
    return-void
.end method

.method private getJSObjectForLocation(Landroid/location/Location;)Lcom/getcapacitor/JSObject;
    .locals 5

    .line 126
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 127
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 128
    const-string v2, "coords"

    invoke-virtual {v0, v2, v1}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 129
    const-string v2, "timestamp"

    invoke-virtual {p1}, Landroid/location/Location;->getTime()J

    move-result-wide v3

    invoke-virtual {v0, v2, v3, v4}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;J)Lcom/getcapacitor/JSObject;

    .line 130
    const-string v2, "latitude"

    invoke-virtual {p1}, Landroid/location/Location;->getLatitude()D

    move-result-wide v3

    invoke-virtual {v1, v2, v3, v4}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;D)Lcom/getcapacitor/JSObject;

    .line 131
    const-string v2, "longitude"

    invoke-virtual {p1}, Landroid/location/Location;->getLongitude()D

    move-result-wide v3

    invoke-virtual {v1, v2, v3, v4}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;D)Lcom/getcapacitor/JSObject;

    .line 132
    invoke-virtual {p1}, Landroid/location/Location;->getAccuracy()F

    move-result v2

    float-to-double v2, v2

    const-string v4, "accuracy"

    invoke-virtual {v1, v4, v2, v3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;D)Lcom/getcapacitor/JSObject;

    .line 133
    const-string v2, "altitude"

    invoke-virtual {p1}, Landroid/location/Location;->getAltitude()D

    move-result-wide v3

    invoke-virtual {v1, v2, v3, v4}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;D)Lcom/getcapacitor/JSObject;

    .line 134
    sget v2, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v3, 0x1a

    if-lt v2, v3, :cond_0

    .line 135
    invoke-virtual {p1}, Landroid/location/Location;->getVerticalAccuracyMeters()F

    move-result v2

    float-to-double v2, v2

    const-string v4, "altitudeAccuracy"

    invoke-virtual {v1, v4, v2, v3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;D)Lcom/getcapacitor/JSObject;

    .line 137
    :cond_0
    invoke-virtual {p1}, Landroid/location/Location;->getSpeed()F

    move-result v2

    float-to-double v2, v2

    const-string v4, "speed"

    invoke-virtual {v1, v4, v2, v3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;D)Lcom/getcapacitor/JSObject;

    .line 138
    invoke-virtual {p1}, Landroid/location/Location;->getBearing()F

    move-result p1

    float-to-double v2, p1

    const-string p1, "heading"

    invoke-virtual {v1, p1, v2, v3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;D)Lcom/getcapacitor/JSObject;

    return-object v0
.end method

.method private processLocation(Landroid/location/Location;)V
    .locals 3

    .line 94
    iget-object v0, p0, Lcom/getcapacitor/plugin/Geolocation;->watchingCalls:Ljava/util/Map;

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

    .line 95
    invoke-interface {v1}, Ljava/util/Map$Entry;->getValue()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lcom/getcapacitor/PluginCall;

    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Geolocation;->getJSObjectForLocation(Landroid/location/Location;)Lcom/getcapacitor/JSObject;

    move-result-object v2

    invoke-virtual {v1, v2}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    goto :goto_0

    :cond_0
    return-void
.end method

.method private requestLocationUpdates(Lcom/getcapacitor/PluginCall;)V
    .locals 6

    .line 144
    invoke-direct {p0}, Lcom/getcapacitor/plugin/Geolocation;->clearLocationUpdates()V

    const/4 v0, 0x0

    .line 145
    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v1

    const-string v2, "enableHighAccuracy"

    invoke-virtual {p1, v2, v1}, Lcom/getcapacitor/PluginCall;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v1

    const/16 v2, 0x2710

    .line 146
    invoke-static {v2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    const-string v3, "timeout"

    invoke-virtual {p1, v3, v2}, Lcom/getcapacitor/PluginCall;->getInt(Ljava/lang/String;Ljava/lang/Integer;)Ljava/lang/Integer;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/Integer;->intValue()I

    move-result v2

    .line 147
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Geolocation;->getContext()Landroid/content/Context;

    move-result-object v3

    invoke-static {v3}, Lcom/google/android/gms/location/LocationServices;->getFusedLocationProviderClient(Landroid/content/Context;)Lcom/google/android/gms/location/FusedLocationProviderClient;

    move-result-object v3

    iput-object v3, p0, Lcom/getcapacitor/plugin/Geolocation;->fusedLocationClient:Lcom/google/android/gms/location/FusedLocationProviderClient;

    .line 149
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Geolocation;->getContext()Landroid/content/Context;

    move-result-object v3

    const-string v4, "location"

    invoke-virtual {v3, v4}, Landroid/content/Context;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Landroid/location/LocationManager;

    .line 152
    :try_start_0
    const-string v4, "network"

    invoke-virtual {v3, v4}, Landroid/location/LocationManager;->isProviderEnabled(Ljava/lang/String;)Z

    move-result v0
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    .line 154
    :catch_0
    new-instance v3, Lcom/google/android/gms/location/LocationRequest;

    invoke-direct {v3}, Lcom/google/android/gms/location/LocationRequest;-><init>()V

    int-to-long v4, v2

    .line 155
    invoke-virtual {v3, v4, v5}, Lcom/google/android/gms/location/LocationRequest;->setMaxWaitTime(J)Lcom/google/android/gms/location/LocationRequest;

    const-wide/16 v4, 0x2710

    .line 156
    invoke-virtual {v3, v4, v5}, Lcom/google/android/gms/location/LocationRequest;->setInterval(J)Lcom/google/android/gms/location/LocationRequest;

    const-wide/16 v4, 0x1388

    .line 157
    invoke-virtual {v3, v4, v5}, Lcom/google/android/gms/location/LocationRequest;->setFastestInterval(J)Lcom/google/android/gms/location/LocationRequest;

    if-eqz v0, :cond_0

    const/16 v0, 0x66

    goto :goto_0

    :cond_0
    const/16 v0, 0x68

    :goto_0
    if-eqz v1, :cond_1

    const/16 v0, 0x64

    .line 160
    :cond_1
    invoke-virtual {v3, v0}, Lcom/google/android/gms/location/LocationRequest;->setPriority(I)Lcom/google/android/gms/location/LocationRequest;

    .line 162
    new-instance v0, Lcom/getcapacitor/plugin/Geolocation$1;

    invoke-direct {v0, p0, p1}, Lcom/getcapacitor/plugin/Geolocation$1;-><init>(Lcom/getcapacitor/plugin/Geolocation;Lcom/getcapacitor/PluginCall;)V

    iput-object v0, p0, Lcom/getcapacitor/plugin/Geolocation;->locationCallback:Lcom/google/android/gms/location/LocationCallback;

    .line 184
    iget-object p1, p0, Lcom/getcapacitor/plugin/Geolocation;->fusedLocationClient:Lcom/google/android/gms/location/FusedLocationProviderClient;

    const/4 v1, 0x0

    invoke-virtual {p1, v3, v0, v1}, Lcom/google/android/gms/location/FusedLocationProviderClient;->requestLocationUpdates(Lcom/google/android/gms/location/LocationRequest;Lcom/google/android/gms/location/LocationCallback;Landroid/os/Looper;)Lcom/google/android/gms/tasks/Task;

    return-void
.end method

.method private sendLocation(Lcom/getcapacitor/PluginCall;)V
    .locals 0

    .line 53
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Geolocation;->requestLocationUpdates(Lcom/getcapacitor/PluginCall;)V

    return-void
.end method

.method private startWatch(Lcom/getcapacitor/PluginCall;)V
    .locals 2

    .line 69
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Geolocation;->requestLocationUpdates(Lcom/getcapacitor/PluginCall;)V

    .line 70
    iget-object v0, p0, Lcom/getcapacitor/plugin/Geolocation;->watchingCalls:Ljava/util/Map;

    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->getCallbackId()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1, p1}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    return-void
.end method


# virtual methods
.method public clearWatch(Lcom/getcapacitor/PluginCall;)V
    .locals 2
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 76
    const-string v0, "id"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 78
    iget-object v1, p0, Lcom/getcapacitor/plugin/Geolocation;->watchingCalls:Ljava/util/Map;

    invoke-interface {v1, v0}, Ljava/util/Map;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/getcapacitor/PluginCall;

    if-eqz v0, :cond_0

    .line 80
    iget-object v1, p0, Lcom/getcapacitor/plugin/Geolocation;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0, v1}, Lcom/getcapacitor/PluginCall;->release(Lcom/getcapacitor/Bridge;)V

    .line 83
    :cond_0
    iget-object v0, p0, Lcom/getcapacitor/plugin/Geolocation;->watchingCalls:Ljava/util/Map;

    invoke-interface {v0}, Ljava/util/Map;->size()I

    move-result v0

    if-nez v0, :cond_1

    .line 84
    invoke-direct {p0}, Lcom/getcapacitor/plugin/Geolocation;->clearLocationUpdates()V

    .line 86
    :cond_1
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->success()V

    return-void
.end method

.method public getCurrentPosition(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 44
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Geolocation;->hasRequiredPermissions()Z

    move-result v0

    if-nez v0, :cond_0

    .line 45
    invoke-virtual {p0, p1}, Lcom/getcapacitor/plugin/Geolocation;->saveCall(Lcom/getcapacitor/PluginCall;)V

    .line 46
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Geolocation;->pluginRequestAllPermissions()V

    goto :goto_0

    .line 48
    :cond_0
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Geolocation;->sendLocation(Lcom/getcapacitor/PluginCall;)V

    :goto_0
    return-void
.end method

.method protected handleRequestPermissionsResult(I[Ljava/lang/String;[I)V
    .locals 3

    .line 101
    invoke-super {p0, p1, p2, p3}, Lcom/getcapacitor/Plugin;->handleRequestPermissionsResult(I[Ljava/lang/String;[I)V

    .line 103
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Geolocation;->getSavedCall()Lcom/getcapacitor/PluginCall;

    move-result-object p1

    if-nez p1, :cond_0

    return-void

    .line 108
    :cond_0
    array-length p2, p3

    const/4 v0, 0x0

    :goto_0
    if-ge v0, p2, :cond_2

    aget v1, p3, v0

    const/4 v2, -0x1

    if-ne v1, v2, :cond_1

    .line 110
    const-string p2, "User denied location permission"

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    :cond_1
    add-int/lit8 v0, v0, 0x1

    goto :goto_0

    .line 115
    :cond_2
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->getMethodName()Ljava/lang/String;

    move-result-object p2

    const-string p3, "getCurrentPosition"

    invoke-virtual {p2, p3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_3

    .line 116
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Geolocation;->sendLocation(Lcom/getcapacitor/PluginCall;)V

    goto :goto_1

    .line 117
    :cond_3
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->getMethodName()Ljava/lang/String;

    move-result-object p2

    const-string p3, "watchPosition"

    invoke-virtual {p2, p3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_4

    .line 118
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Geolocation;->startWatch(Lcom/getcapacitor/PluginCall;)V

    goto :goto_1

    .line 120
    :cond_4
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->resolve()V

    .line 121
    iget-object p2, p0, Lcom/getcapacitor/plugin/Geolocation;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->release(Lcom/getcapacitor/Bridge;)V

    :goto_1
    return-void
.end method

.method public watchPosition(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
        returnType = "callback"
    .end annotation

    .line 58
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->save()V

    .line 59
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Geolocation;->hasRequiredPermissions()Z

    move-result v0

    if-nez v0, :cond_0

    .line 60
    invoke-virtual {p0, p1}, Lcom/getcapacitor/plugin/Geolocation;->saveCall(Lcom/getcapacitor/PluginCall;)V

    .line 61
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Geolocation;->pluginRequestAllPermissions()V

    goto :goto_0

    .line 63
    :cond_0
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Geolocation;->startWatch(Lcom/getcapacitor/PluginCall;)V

    :goto_0
    return-void
.end method
