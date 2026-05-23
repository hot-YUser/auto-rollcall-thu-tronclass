.class public Lcordova/plugins/Diagnostic_Location;
.super Lorg/apache/cordova/CordovaPlugin;
.source "Diagnostic_Location.java"


# static fields
.field private static final LOCATION_MODE_BATTERY_SAVING:Ljava/lang/String; = "battery_saving"

.field private static final LOCATION_MODE_DEVICE_ONLY:Ljava/lang/String; = "device_only"

.field private static final LOCATION_MODE_HIGH_ACCURACY:Ljava/lang/String; = "high_accuracy"

.field private static final LOCATION_MODE_OFF:Ljava/lang/String; = "location_off"

.field private static final LOCATION_MODE_UNKNOWN:Ljava/lang/String; = "unknown"

.field public static final TAG:Ljava/lang/String; = "Diagnostic_Location"

.field private static backgroundLocationPermission:Ljava/lang/String; = "ACCESS_BACKGROUND_LOCATION"

.field private static gpsLocationPermission:Ljava/lang/String; = "ACCESS_FINE_LOCATION"

.field public static instance:Lcordova/plugins/Diagnostic_Location; = null

.field public static locationManager:Landroid/location/LocationManager; = null

.field private static networkLocationPermission:Ljava/lang/String; = "ACCESS_COARSE_LOCATION"


# instance fields
.field protected currentContext:Lorg/apache/cordova/CallbackContext;

.field private currentLocationMode:Ljava/lang/String;

.field private diagnostic:Lcordova/plugins/Diagnostic;

.field protected final locationProviderChangedReceiver:Landroid/content/BroadcastReceiver;


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method public constructor <init>()V
    .locals 1

    .line 95
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    const/4 v0, 0x0

    .line 86
    iput-object v0, p0, Lcordova/plugins/Diagnostic_Location;->currentLocationMode:Ljava/lang/String;

    .line 308
    new-instance v0, Lcordova/plugins/Diagnostic_Location$1;

    invoke-direct {v0, p0}, Lcordova/plugins/Diagnostic_Location$1;-><init>(Lcordova/plugins/Diagnostic_Location;)V

    iput-object v0, p0, Lcordova/plugins/Diagnostic_Location;->locationProviderChangedReceiver:Landroid/content/BroadcastReceiver;

    return-void
.end method

.method static synthetic access$000(Lcordova/plugins/Diagnostic_Location;)Lcordova/plugins/Diagnostic;
    .locals 0

    .line 45
    iget-object p0, p0, Lcordova/plugins/Diagnostic_Location;->diagnostic:Lcordova/plugins/Diagnostic;

    return-object p0
.end method

.method private getLocationMode()I
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 277
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x1c

    if-ge v0, v1, :cond_0

    .line 278
    iget-object v0, p0, Lcordova/plugins/Diagnostic_Location;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object v0

    const-string v1, "location_mode"

    invoke-static {v0, v1}, Landroid/provider/Settings$Secure;->getInt(Landroid/content/ContentResolver;Ljava/lang/String;)I

    move-result v0

    goto :goto_0

    .line 280
    :cond_0
    const-string v0, "gps"

    invoke-direct {p0, v0}, Lcordova/plugins/Diagnostic_Location;->isLocationProviderEnabled(Ljava/lang/String;)Z

    move-result v1

    const-string v2, "network"

    if-eqz v1, :cond_1

    invoke-direct {p0, v2}, Lcordova/plugins/Diagnostic_Location;->isLocationProviderEnabled(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_1

    const/4 v0, 0x3

    goto :goto_0

    .line 282
    :cond_1
    invoke-direct {p0, v0}, Lcordova/plugins/Diagnostic_Location;->isLocationProviderEnabled(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_2

    const/4 v0, 0x1

    goto :goto_0

    .line 284
    :cond_2
    invoke-direct {p0, v2}, Lcordova/plugins/Diagnostic_Location;->isLocationProviderEnabled(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_3

    const/4 v0, 0x2

    goto :goto_0

    :cond_3
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method private isLocationAuthorized()Z
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 294
    iget-object v0, p0, Lcordova/plugins/Diagnostic_Location;->diagnostic:Lcordova/plugins/Diagnostic;

    sget-object v1, Lcordova/plugins/Diagnostic;->permissionsMap:Ljava/util/Map;

    sget-object v2, Lcordova/plugins/Diagnostic_Location;->gpsLocationPermission:Ljava/lang/String;

    invoke-interface {v1, v2}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcordova/plugins/Diagnostic;->hasRuntimePermission(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_1

    iget-object v0, p0, Lcordova/plugins/Diagnostic_Location;->diagnostic:Lcordova/plugins/Diagnostic;

    sget-object v1, Lcordova/plugins/Diagnostic;->permissionsMap:Ljava/util/Map;

    sget-object v2, Lcordova/plugins/Diagnostic_Location;->networkLocationPermission:Ljava/lang/String;

    invoke-interface {v1, v2}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/String;

    invoke-virtual {v0, v1}, Lcordova/plugins/Diagnostic;->hasRuntimePermission(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 v0, 0x1

    :goto_1
    if-eqz v0, :cond_2

    .line 295
    const-string v1, "authorized"

    goto :goto_2

    :cond_2
    const-string v1, "unauthorized"

    :goto_2
    const-string v2, "Location permission is "

    invoke-virtual {v2, v1}, Ljava/lang/String;->concat(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    const-string v2, "Diagnostic_Location"

    invoke-static {v2, v1}, Landroid/util/Log;->v(Ljava/lang/String;Ljava/lang/String;)I

    return v0
.end method

.method private isLocationProviderEnabled(Ljava/lang/String;)Z
    .locals 1

    .line 300
    sget-object v0, Lcordova/plugins/Diagnostic_Location;->locationManager:Landroid/location/LocationManager;

    invoke-virtual {v0, p1}, Landroid/location/LocationManager;->isProviderEnabled(Ljava/lang/String;)Z

    move-result p1

    return p1
.end method


# virtual methods
.method public execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 145
    sget-object v0, Lcordova/plugins/Diagnostic;->instance:Lcordova/plugins/Diagnostic;

    iput-object p3, p0, Lcordova/plugins/Diagnostic_Location;->currentContext:Lorg/apache/cordova/CallbackContext;

    iput-object p3, v0, Lcordova/plugins/Diagnostic;->currentContext:Lorg/apache/cordova/CallbackContext;

    const/4 v0, 0x0

    .line 148
    :try_start_0
    const-string v1, "switchToLocationSettings"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    const/4 v2, 0x1

    if-eqz v1, :cond_0

    .line 149
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Location;->switchToLocationSettings()V

    .line 150
    invoke-virtual {p3}, Lorg/apache/cordova/CallbackContext;->success()V

    goto/16 :goto_4

    .line 151
    :cond_0
    const-string v1, "isLocationAvailable"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_3

    .line 152
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Location;->isGpsLocationAvailable()Z

    move-result p1

    if-nez p1, :cond_2

    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Location;->isNetworkLocationAvailable()Z

    move-result p1

    if-eqz p1, :cond_1

    goto :goto_0

    :cond_1
    move p1, v0

    goto :goto_1

    :cond_2
    :goto_0
    move p1, v2

    :goto_1
    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    goto/16 :goto_4

    .line 153
    :cond_3
    const-string v1, "isLocationEnabled"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_6

    .line 154
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Location;->isGpsLocationEnabled()Z

    move-result p1

    if-nez p1, :cond_5

    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Location;->isNetworkLocationEnabled()Z

    move-result p1

    if-eqz p1, :cond_4

    goto :goto_2

    :cond_4
    move p1, v0

    goto :goto_3

    :cond_5
    :goto_2
    move p1, v2

    :goto_3
    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    goto :goto_4

    .line 155
    :cond_6
    const-string v1, "isGpsLocationAvailable"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_7

    .line 156
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Location;->isGpsLocationAvailable()Z

    move-result p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    goto :goto_4

    .line 157
    :cond_7
    const-string v1, "isNetworkLocationAvailable"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_8

    .line 158
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Location;->isNetworkLocationAvailable()Z

    move-result p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    goto :goto_4

    .line 159
    :cond_8
    const-string v1, "isGpsLocationEnabled"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_9

    .line 160
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Location;->isGpsLocationEnabled()Z

    move-result p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    goto :goto_4

    .line 161
    :cond_9
    const-string v1, "isNetworkLocationEnabled"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_a

    .line 162
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Location;->isNetworkLocationEnabled()Z

    move-result p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(I)V

    goto :goto_4

    .line 163
    :cond_a
    const-string v1, "getLocationMode"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_b

    .line 164
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Location;->getLocationModeName()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p3, p1}, Lorg/apache/cordova/CallbackContext;->success(Ljava/lang/String;)V

    goto :goto_4

    .line 165
    :cond_b
    const-string v1, "requestLocationAuthorization"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_c

    .line 166
    invoke-virtual {p0, p2, p3}, Lcordova/plugins/Diagnostic_Location;->requestLocationAuthorization(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V

    :goto_4
    return v2

    .line 168
    :cond_c
    iget-object p1, p0, Lcordova/plugins/Diagnostic_Location;->diagnostic:Lcordova/plugins/Diagnostic;

    const-string p2, "Invalid action"

    invoke-virtual {p1, p2}, Lcordova/plugins/Diagnostic;->handleError(Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    return v0

    :catch_0
    move-exception p1

    .line 172
    iget-object p2, p0, Lcordova/plugins/Diagnostic_Location;->diagnostic:Lcordova/plugins/Diagnostic;

    const-string p3, "Exception occurred: "

    invoke-virtual {p1}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p3, p1}, Ljava/lang/String;->concat(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p2, p1}, Lcordova/plugins/Diagnostic;->handleError(Ljava/lang/String;)V

    return v0
.end method

.method public getLocationModeName()Ljava/lang/String;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 206
    invoke-direct {p0}, Lcordova/plugins/Diagnostic_Location;->getLocationMode()I

    move-result v0

    if-eqz v0, :cond_3

    const/4 v1, 0x1

    if-eq v0, v1, :cond_2

    const/4 v1, 0x2

    if-eq v0, v1, :cond_1

    const/4 v1, 0x3

    if-eq v0, v1, :cond_0

    .line 221
    const-string v0, "unknown"

    goto :goto_0

    .line 210
    :cond_0
    const-string v0, "high_accuracy"

    goto :goto_0

    .line 216
    :cond_1
    const-string v0, "battery_saving"

    goto :goto_0

    .line 213
    :cond_2
    const-string v0, "device_only"

    goto :goto_0

    .line 219
    :cond_3
    const-string v0, "location_off"

    :goto_0
    return-object v0
.end method

.method public initialize(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebView;)V
    .locals 4

    .line 105
    const-string v0, "Diagnostic_Location"

    const-string v1, "initialize()"

    invoke-static {v0, v1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 106
    sput-object p0, Lcordova/plugins/Diagnostic_Location;->instance:Lcordova/plugins/Diagnostic_Location;

    .line 107
    invoke-static {}, Lcordova/plugins/Diagnostic;->getInstance()Lcordova/plugins/Diagnostic;

    move-result-object v0

    iput-object v0, p0, Lcordova/plugins/Diagnostic_Location;->diagnostic:Lcordova/plugins/Diagnostic;

    .line 110
    :try_start_0
    iget-object v0, v0, Lcordova/plugins/Diagnostic;->applicationContext:Landroid/content/Context;

    iget-object v1, p0, Lcordova/plugins/Diagnostic_Location;->locationProviderChangedReceiver:Landroid/content/BroadcastReceiver;

    new-instance v2, Landroid/content/IntentFilter;

    const-string v3, "android.location.PROVIDERS_CHANGED"

    invoke-direct {v2, v3}, Landroid/content/IntentFilter;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, v1, v2}, Landroid/content/Context;->registerReceiver(Landroid/content/BroadcastReceiver;Landroid/content/IntentFilter;)Landroid/content/Intent;

    .line 111
    iget-object v0, p0, Lcordova/plugins/Diagnostic_Location;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    const-string v1, "location"

    invoke-virtual {v0, v1}, Landroid/app/Activity;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/location/LocationManager;

    sput-object v0, Lcordova/plugins/Diagnostic_Location;->locationManager:Landroid/location/LocationManager;
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 113
    iget-object v1, p0, Lcordova/plugins/Diagnostic_Location;->diagnostic:Lcordova/plugins/Diagnostic;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Unable to register Location Provider Change receiver: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lcordova/plugins/Diagnostic;->logWarning(Ljava/lang/String;)V

    .line 117
    :goto_0
    :try_start_1
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Location;->getLocationModeName()Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcordova/plugins/Diagnostic_Location;->currentLocationMode:Ljava/lang/String;
    :try_end_1
    .catch Ljava/lang/Exception; {:try_start_1 .. :try_end_1} :catch_1

    goto :goto_1

    :catch_1
    move-exception v0

    .line 119
    iget-object v1, p0, Lcordova/plugins/Diagnostic_Location;->diagnostic:Lcordova/plugins/Diagnostic;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Unable to get initial location mode: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lcordova/plugins/Diagnostic;->logWarning(Ljava/lang/String;)V

    .line 122
    :goto_1
    invoke-super {p0, p1, p2}, Lorg/apache/cordova/CordovaPlugin;->initialize(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebView;)V

    return-void
.end method

.method public isGpsLocationAvailable()Z
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 179
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Location;->isGpsLocationEnabled()Z

    move-result v0

    if-eqz v0, :cond_0

    invoke-direct {p0}, Lcordova/plugins/Diagnostic_Location;->isLocationAuthorized()Z

    move-result v0

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    .line 180
    :goto_0
    iget-object v1, p0, Lcordova/plugins/Diagnostic_Location;->diagnostic:Lcordova/plugins/Diagnostic;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "GPS location available: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V

    return v0
.end method

.method public isGpsLocationEnabled()Z
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 185
    invoke-direct {p0}, Lcordova/plugins/Diagnostic_Location;->getLocationMode()I

    move-result v0

    const/4 v1, 0x3

    const/4 v2, 0x1

    if-eq v0, v1, :cond_1

    if-ne v0, v2, :cond_0

    goto :goto_0

    :cond_0
    const/4 v2, 0x0

    .line 187
    :cond_1
    :goto_0
    iget-object v0, p0, Lcordova/plugins/Diagnostic_Location;->diagnostic:Lcordova/plugins/Diagnostic;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v3, "GPS location setting enabled: "

    invoke-direct {v1, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V

    return v2
.end method

.method public isNetworkLocationAvailable()Z
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 192
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Location;->isNetworkLocationEnabled()Z

    move-result v0

    if-eqz v0, :cond_0

    invoke-direct {p0}, Lcordova/plugins/Diagnostic_Location;->isLocationAuthorized()Z

    move-result v0

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    .line 193
    :goto_0
    iget-object v1, p0, Lcordova/plugins/Diagnostic_Location;->diagnostic:Lcordova/plugins/Diagnostic;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Network location available: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V

    return v0
.end method

.method public isNetworkLocationEnabled()Z
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 198
    invoke-direct {p0}, Lcordova/plugins/Diagnostic_Location;->getLocationMode()I

    move-result v0

    const/4 v1, 0x3

    if-eq v0, v1, :cond_1

    const/4 v1, 0x2

    if-ne v0, v1, :cond_0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 v0, 0x1

    .line 200
    :goto_1
    iget-object v1, p0, Lcordova/plugins/Diagnostic_Location;->diagnostic:Lcordova/plugins/Diagnostic;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Network location setting enabled: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V

    return v0
.end method

.method public notifyLocationStateChange()V
    .locals 5

    const-string v0, "location._onLocationStateChange(\""

    const-string v1, "Location mode change to: "

    .line 228
    :try_start_0
    invoke-virtual {p0}, Lcordova/plugins/Diagnostic_Location;->getLocationModeName()Ljava/lang/String;

    move-result-object v2

    .line 229
    iget-object v3, p0, Lcordova/plugins/Diagnostic_Location;->currentLocationMode:Ljava/lang/String;

    invoke-virtual {v2, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    if-nez v3, :cond_0

    .line 230
    iget-object v3, p0, Lcordova/plugins/Diagnostic_Location;->diagnostic:Lcordova/plugins/Diagnostic;

    new-instance v4, Ljava/lang/StringBuilder;

    invoke-direct {v4, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v4, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v3, v1}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V

    .line 231
    iget-object v1, p0, Lcordova/plugins/Diagnostic_Location;->diagnostic:Lcordova/plugins/Diagnostic;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v3, "\");"

    invoke-virtual {v0, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lcordova/plugins/Diagnostic;->executePluginJavascript(Ljava/lang/String;)V

    .line 232
    iput-object v2, p0, Lcordova/plugins/Diagnostic_Location;->currentLocationMode:Ljava/lang/String;
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 235
    iget-object v1, p0, Lcordova/plugins/Diagnostic_Location;->diagnostic:Lcordova/plugins/Diagnostic;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Error retrieving current location mode on location state change: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0}, Ljava/lang/Exception;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lcordova/plugins/Diagnostic;->logError(Ljava/lang/String;)V

    :cond_0
    :goto_0
    return-void
.end method

.method public onDestroy()V
    .locals 4

    .line 130
    :try_start_0
    iget-object v0, p0, Lcordova/plugins/Diagnostic_Location;->diagnostic:Lcordova/plugins/Diagnostic;

    iget-object v0, v0, Lcordova/plugins/Diagnostic;->applicationContext:Landroid/content/Context;

    iget-object v1, p0, Lcordova/plugins/Diagnostic_Location;->locationProviderChangedReceiver:Landroid/content/BroadcastReceiver;

    invoke-virtual {v0, v1}, Landroid/content/Context;->unregisterReceiver(Landroid/content/BroadcastReceiver;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 132
    iget-object v1, p0, Lcordova/plugins/Diagnostic_Location;->diagnostic:Lcordova/plugins/Diagnostic;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Unable to unregister Location Provider Change receiver: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Lcordova/plugins/Diagnostic;->logWarning(Ljava/lang/String;)V

    :goto_0
    return-void
.end method

.method public requestLocationAuthorization(Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)V
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/Exception;
        }
    .end annotation

    .line 246
    new-instance v0, Lorg/json/JSONArray;

    invoke-direct {v0}, Lorg/json/JSONArray;-><init>()V

    const/4 v1, 0x0

    .line 247
    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result v1

    const/4 v2, 0x1

    .line 248
    invoke-virtual {p1, v2}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result p1

    .line 250
    sget-object v3, Lcordova/plugins/Diagnostic_Location;->networkLocationPermission:Ljava/lang/String;

    invoke-virtual {v0, v3}, Lorg/json/JSONArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    if-nez p1, :cond_0

    .line 251
    sget p1, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v3, 0x1f

    if-ge p1, v3, :cond_1

    .line 252
    :cond_0
    sget-object p1, Lcordova/plugins/Diagnostic_Location;->gpsLocationPermission:Ljava/lang/String;

    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    :cond_1
    if-eqz v1, :cond_2

    .line 255
    sget p1, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x1d

    if-lt p1, v1, :cond_2

    .line 256
    sget-object p1, Lcordova/plugins/Diagnostic_Location;->backgroundLocationPermission:Ljava/lang/String;

    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    .line 259
    :cond_2
    sget-object p1, Lcordova/plugins/Diagnostic;->instance:Lcordova/plugins/Diagnostic;

    invoke-virtual {p1, p2}, Lcordova/plugins/Diagnostic;->storeContextByRequestId(Lorg/apache/cordova/CallbackContext;)I

    move-result p1

    .line 260
    sget-object v1, Lcordova/plugins/Diagnostic;->instance:Lcordova/plugins/Diagnostic;

    invoke-virtual {v1, v0, p1}, Lcordova/plugins/Diagnostic;->_requestRuntimePermissions(Lorg/json/JSONArray;I)V

    .line 262
    new-instance p1, Lorg/apache/cordova/PluginResult;

    sget-object v0, Lorg/apache/cordova/PluginResult$Status;->NO_RESULT:Lorg/apache/cordova/PluginResult$Status;

    invoke-direct {p1, v0}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;)V

    .line 263
    invoke-virtual {p1, v2}, Lorg/apache/cordova/PluginResult;->setKeepCallback(Z)V

    .line 264
    invoke-virtual {p2, p1}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    return-void
.end method

.method public switchToLocationSettings()V
    .locals 2

    .line 240
    iget-object v0, p0, Lcordova/plugins/Diagnostic_Location;->diagnostic:Lcordova/plugins/Diagnostic;

    const-string v1, "Switch to Location Settings"

    invoke-virtual {v0, v1}, Lcordova/plugins/Diagnostic;->logDebug(Ljava/lang/String;)V

    .line 241
    new-instance v0, Landroid/content/Intent;

    const-string v1, "android.settings.LOCATION_SOURCE_SETTINGS"

    invoke-direct {v0, v1}, Landroid/content/Intent;-><init>(Ljava/lang/String;)V

    .line 242
    iget-object v1, p0, Lcordova/plugins/Diagnostic_Location;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-virtual {v1, v0}, Landroid/app/Activity;->startActivity(Landroid/content/Intent;)V

    return-void
.end method
