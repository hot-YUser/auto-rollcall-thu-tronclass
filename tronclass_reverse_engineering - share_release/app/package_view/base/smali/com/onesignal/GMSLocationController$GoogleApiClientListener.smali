.class Lcom/onesignal/GMSLocationController$GoogleApiClientListener;
.super Ljava/lang/Object;
.source "GMSLocationController.java"

# interfaces
.implements Lcom/google/android/gms/common/api/GoogleApiClient$ConnectionCallbacks;
.implements Lcom/google/android/gms/common/api/GoogleApiClient$OnConnectionFailedListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/GMSLocationController;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0xa
    name = "GoogleApiClientListener"
.end annotation


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 123
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method synthetic constructor <init>(Lcom/onesignal/GMSLocationController$1;)V
    .locals 0

    .line 123
    invoke-direct {p0}, Lcom/onesignal/GMSLocationController$GoogleApiClientListener;-><init>()V

    return-void
.end method


# virtual methods
.method public onConnected(Landroid/os/Bundle;)V
    .locals 4

    const-string p1, "GMSLocationController GoogleApiClientListener lastLocation: "

    const-string v0, "GMSLocationController GoogleApiClientListener onConnected lastLocation: "

    .line 126
    sget-object v1, Lcom/onesignal/LocationController;->syncLock:Ljava/lang/Object;

    monitor-enter v1

    .line 127
    :try_start_0
    invoke-static {}, Lcom/onesignal/GMSLocationController;->access$200()Lcom/onesignal/GoogleApiClientCompatProxy;

    move-result-object v2

    if-eqz v2, :cond_2

    invoke-static {}, Lcom/onesignal/GMSLocationController;->access$200()Lcom/onesignal/GoogleApiClientCompatProxy;

    move-result-object v2

    invoke-virtual {v2}, Lcom/onesignal/GoogleApiClientCompatProxy;->realInstance()Lcom/google/android/gms/common/api/GoogleApiClient;

    move-result-object v2

    if-nez v2, :cond_0

    goto :goto_0

    .line 132
    :cond_0
    sget-object v2, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    sget-object v0, Lcom/onesignal/LocationController;->lastLocation:Landroid/location/Location;

    invoke-virtual {v3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v2, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 133
    sget-object v0, Lcom/onesignal/LocationController;->lastLocation:Landroid/location/Location;

    if-nez v0, :cond_1

    .line 134
    invoke-static {}, Lcom/onesignal/GMSLocationController;->access$200()Lcom/onesignal/GoogleApiClientCompatProxy;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/GoogleApiClientCompatProxy;->realInstance()Lcom/google/android/gms/common/api/GoogleApiClient;

    move-result-object v0

    invoke-static {v0}, Lcom/onesignal/GMSLocationController$FusedLocationApiWrapper;->getLastLocation(Lcom/google/android/gms/common/api/GoogleApiClient;)Landroid/location/Location;

    move-result-object v0

    sput-object v0, Lcom/onesignal/LocationController;->lastLocation:Landroid/location/Location;

    .line 135
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2, p1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    sget-object p1, Lcom/onesignal/LocationController;->lastLocation:Landroid/location/Location;

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 136
    sget-object p1, Lcom/onesignal/LocationController;->lastLocation:Landroid/location/Location;

    if-eqz p1, :cond_1

    .line 137
    sget-object p1, Lcom/onesignal/LocationController;->lastLocation:Landroid/location/Location;

    invoke-static {p1}, Lcom/onesignal/LocationController;->fireCompleteForLocation(Landroid/location/Location;)V

    .line 140
    :cond_1
    new-instance p1, Lcom/onesignal/GMSLocationController$LocationUpdateListener;

    invoke-static {}, Lcom/onesignal/GMSLocationController;->access$200()Lcom/onesignal/GoogleApiClientCompatProxy;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/GoogleApiClientCompatProxy;->realInstance()Lcom/google/android/gms/common/api/GoogleApiClient;

    move-result-object v0

    invoke-direct {p1, v0}, Lcom/onesignal/GMSLocationController$LocationUpdateListener;-><init>(Lcom/google/android/gms/common/api/GoogleApiClient;)V

    sput-object p1, Lcom/onesignal/GMSLocationController;->locationUpdateListener:Lcom/onesignal/GMSLocationController$LocationUpdateListener;

    .line 141
    monitor-exit v1

    return-void

    .line 128
    :cond_2
    :goto_0
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v0, "GMSLocationController GoogleApiClientListener onConnected googleApiClient not available, returning"

    invoke-static {p1, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 129
    monitor-exit v1

    return-void

    :catchall_0
    move-exception p1

    .line 141
    monitor-exit v1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method

.method public onConnectionFailed(Lcom/google/android/gms/common/ConnectionResult;)V
    .locals 3

    .line 152
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "GMSLocationController GoogleApiClientListener onConnectionSuspended connectionResult: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 153
    invoke-static {}, Lcom/onesignal/GMSLocationController;->fireFailedComplete()V

    return-void
.end method

.method public onConnectionSuspended(I)V
    .locals 3

    .line 146
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "GMSLocationController GoogleApiClientListener onConnectionSuspended i: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 147
    invoke-static {}, Lcom/onesignal/GMSLocationController;->fireFailedComplete()V

    return-void
.end method
