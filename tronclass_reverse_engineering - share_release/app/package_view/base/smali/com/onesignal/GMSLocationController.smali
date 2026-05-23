.class Lcom/onesignal/GMSLocationController;
.super Lcom/onesignal/LocationController;
.source "GMSLocationController.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/GMSLocationController$FusedLocationApiWrapper;,
        Lcom/onesignal/GMSLocationController$LocationUpdateListener;,
        Lcom/onesignal/GMSLocationController$GoogleApiClientListener;
    }
.end annotation


# static fields
.field static final API_FALLBACK_TIME:I = 0x7530

.field private static googleApiClient:Lcom/onesignal/GoogleApiClientCompatProxy;

.field static locationUpdateListener:Lcom/onesignal/GMSLocationController$LocationUpdateListener;


# direct methods
.method constructor <init>()V
    .locals 0

    .line 42
    invoke-direct {p0}, Lcom/onesignal/LocationController;-><init>()V

    return-void
.end method

.method static synthetic access$100()I
    .locals 1

    .line 42
    invoke-static {}, Lcom/onesignal/GMSLocationController;->getApiFallbackWait()I

    move-result v0

    return v0
.end method

.method static synthetic access$200()Lcom/onesignal/GoogleApiClientCompatProxy;
    .locals 1

    .line 42
    sget-object v0, Lcom/onesignal/GMSLocationController;->googleApiClient:Lcom/onesignal/GoogleApiClientCompatProxy;

    return-object v0
.end method

.method static fireFailedComplete()V
    .locals 2

    .line 100
    sget-object v0, Lcom/onesignal/GMSLocationController;->syncLock:Ljava/lang/Object;

    monitor-enter v0

    .line 101
    :try_start_0
    sget-object v1, Lcom/onesignal/GMSLocationController;->googleApiClient:Lcom/onesignal/GoogleApiClientCompatProxy;

    if-eqz v1, :cond_0

    .line 102
    invoke-virtual {v1}, Lcom/onesignal/GoogleApiClientCompatProxy;->disconnect()V

    :cond_0
    const/4 v1, 0x0

    .line 103
    sput-object v1, Lcom/onesignal/GMSLocationController;->googleApiClient:Lcom/onesignal/GoogleApiClientCompatProxy;

    .line 104
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method private static getApiFallbackWait()I
    .locals 1

    const/16 v0, 0x7530

    return v0
.end method

.method private static initGoogleLocation()V
    .locals 4

    .line 56
    sget-object v0, Lcom/onesignal/GMSLocationController;->fallbackFailThread:Ljava/lang/Thread;

    if-eqz v0, :cond_0

    return-void

    .line 59
    :cond_0
    sget-object v0, Lcom/onesignal/GMSLocationController;->syncLock:Ljava/lang/Object;

    monitor-enter v0

    .line 60
    :try_start_0
    invoke-static {}, Lcom/onesignal/GMSLocationController;->startFallBackThread()V

    .line 62
    sget-object v1, Lcom/onesignal/GMSLocationController;->googleApiClient:Lcom/onesignal/GoogleApiClientCompatProxy;

    if-eqz v1, :cond_2

    sget-object v1, Lcom/onesignal/GMSLocationController;->lastLocation:Landroid/location/Location;

    if-nez v1, :cond_1

    goto :goto_0

    .line 74
    :cond_1
    sget-object v1, Lcom/onesignal/GMSLocationController;->lastLocation:Landroid/location/Location;

    invoke-static {v1}, Lcom/onesignal/GMSLocationController;->fireCompleteForLocation(Landroid/location/Location;)V

    goto :goto_1

    .line 63
    :cond_2
    :goto_0
    new-instance v1, Lcom/onesignal/GMSLocationController$GoogleApiClientListener;

    const/4 v2, 0x0

    invoke-direct {v1, v2}, Lcom/onesignal/GMSLocationController$GoogleApiClientListener;-><init>(Lcom/onesignal/GMSLocationController$1;)V

    .line 64
    new-instance v2, Lcom/google/android/gms/common/api/GoogleApiClient$Builder;

    sget-object v3, Lcom/onesignal/GMSLocationController;->classContext:Landroid/content/Context;

    invoke-direct {v2, v3}, Lcom/google/android/gms/common/api/GoogleApiClient$Builder;-><init>(Landroid/content/Context;)V

    sget-object v3, Lcom/google/android/gms/location/LocationServices;->API:Lcom/google/android/gms/common/api/Api;

    .line 65
    invoke-virtual {v2, v3}, Lcom/google/android/gms/common/api/GoogleApiClient$Builder;->addApi(Lcom/google/android/gms/common/api/Api;)Lcom/google/android/gms/common/api/GoogleApiClient$Builder;

    move-result-object v2

    .line 66
    invoke-virtual {v2, v1}, Lcom/google/android/gms/common/api/GoogleApiClient$Builder;->addConnectionCallbacks(Lcom/google/android/gms/common/api/GoogleApiClient$ConnectionCallbacks;)Lcom/google/android/gms/common/api/GoogleApiClient$Builder;

    move-result-object v2

    .line 67
    invoke-virtual {v2, v1}, Lcom/google/android/gms/common/api/GoogleApiClient$Builder;->addOnConnectionFailedListener(Lcom/google/android/gms/common/api/GoogleApiClient$OnConnectionFailedListener;)Lcom/google/android/gms/common/api/GoogleApiClient$Builder;

    move-result-object v1

    .line 68
    invoke-static {}, Lcom/onesignal/GMSLocationController;->getLocationHandlerThread()Lcom/onesignal/LocationController$LocationHandlerThread;

    move-result-object v2

    iget-object v2, v2, Lcom/onesignal/LocationController$LocationHandlerThread;->mHandler:Landroid/os/Handler;

    invoke-virtual {v1, v2}, Lcom/google/android/gms/common/api/GoogleApiClient$Builder;->setHandler(Landroid/os/Handler;)Lcom/google/android/gms/common/api/GoogleApiClient$Builder;

    move-result-object v1

    .line 69
    invoke-virtual {v1}, Lcom/google/android/gms/common/api/GoogleApiClient$Builder;->build()Lcom/google/android/gms/common/api/GoogleApiClient;

    move-result-object v1

    .line 71
    new-instance v2, Lcom/onesignal/GoogleApiClientCompatProxy;

    invoke-direct {v2, v1}, Lcom/onesignal/GoogleApiClientCompatProxy;-><init>(Lcom/google/android/gms/common/api/GoogleApiClient;)V

    sput-object v2, Lcom/onesignal/GMSLocationController;->googleApiClient:Lcom/onesignal/GoogleApiClientCompatProxy;

    .line 72
    invoke-virtual {v2}, Lcom/onesignal/GoogleApiClientCompatProxy;->connect()V

    .line 76
    :goto_1
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method static onFocusChange()V
    .locals 4

    .line 108
    sget-object v0, Lcom/onesignal/GMSLocationController;->syncLock:Ljava/lang/Object;

    monitor-enter v0

    .line 109
    :try_start_0
    sget-object v1, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v2, "GMSLocationController onFocusChange!"

    invoke-static {v1, v2}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 111
    sget-object v1, Lcom/onesignal/GMSLocationController;->googleApiClient:Lcom/onesignal/GoogleApiClientCompatProxy;

    if-eqz v1, :cond_3

    invoke-virtual {v1}, Lcom/onesignal/GoogleApiClientCompatProxy;->realInstance()Lcom/google/android/gms/common/api/GoogleApiClient;

    move-result-object v1

    invoke-virtual {v1}, Lcom/google/android/gms/common/api/GoogleApiClient;->isConnected()Z

    move-result v1

    if-nez v1, :cond_0

    goto :goto_0

    .line 114
    :cond_0
    sget-object v1, Lcom/onesignal/GMSLocationController;->googleApiClient:Lcom/onesignal/GoogleApiClientCompatProxy;

    if-eqz v1, :cond_2

    .line 115
    invoke-virtual {v1}, Lcom/onesignal/GoogleApiClientCompatProxy;->realInstance()Lcom/google/android/gms/common/api/GoogleApiClient;

    move-result-object v1

    .line 116
    sget-object v2, Lcom/onesignal/GMSLocationController;->locationUpdateListener:Lcom/onesignal/GMSLocationController$LocationUpdateListener;

    if-eqz v2, :cond_1

    .line 117
    sget-object v2, Lcom/google/android/gms/location/LocationServices;->FusedLocationApi:Lcom/google/android/gms/location/FusedLocationProviderApi;

    sget-object v3, Lcom/onesignal/GMSLocationController;->locationUpdateListener:Lcom/onesignal/GMSLocationController$LocationUpdateListener;

    invoke-interface {v2, v1, v3}, Lcom/google/android/gms/location/FusedLocationProviderApi;->removeLocationUpdates(Lcom/google/android/gms/common/api/GoogleApiClient;Lcom/google/android/gms/location/LocationListener;)Lcom/google/android/gms/common/api/PendingResult;

    .line 118
    :cond_1
    new-instance v2, Lcom/onesignal/GMSLocationController$LocationUpdateListener;

    invoke-direct {v2, v1}, Lcom/onesignal/GMSLocationController$LocationUpdateListener;-><init>(Lcom/google/android/gms/common/api/GoogleApiClient;)V

    sput-object v2, Lcom/onesignal/GMSLocationController;->locationUpdateListener:Lcom/onesignal/GMSLocationController$LocationUpdateListener;

    .line 120
    :cond_2
    monitor-exit v0

    return-void

    .line 112
    :cond_3
    :goto_0
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    .line 120
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method private static startFallBackThread()V
    .locals 3

    .line 84
    new-instance v0, Ljava/lang/Thread;

    new-instance v1, Lcom/onesignal/GMSLocationController$1;

    invoke-direct {v1}, Lcom/onesignal/GMSLocationController$1;-><init>()V

    const-string v2, "OS_GMS_LOCATION_FALLBACK"

    invoke-direct {v0, v1, v2}, Ljava/lang/Thread;-><init>(Ljava/lang/Runnable;Ljava/lang/String;)V

    sput-object v0, Lcom/onesignal/GMSLocationController;->fallbackFailThread:Ljava/lang/Thread;

    .line 96
    sget-object v0, Lcom/onesignal/GMSLocationController;->fallbackFailThread:Ljava/lang/Thread;

    invoke-virtual {v0}, Ljava/lang/Thread;->start()V

    return-void
.end method

.method static startGetLocation()V
    .locals 0

    .line 51
    invoke-static {}, Lcom/onesignal/GMSLocationController;->initGoogleLocation()V

    return-void
.end method
