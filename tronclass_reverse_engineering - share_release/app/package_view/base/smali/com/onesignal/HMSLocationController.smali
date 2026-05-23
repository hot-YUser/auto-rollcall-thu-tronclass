.class Lcom/onesignal/HMSLocationController;
.super Lcom/onesignal/LocationController;
.source "HMSLocationController.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/HMSLocationController$LocationUpdateListener;
    }
.end annotation


# static fields
.field private static hmsFusedLocationClient:Lcom/huawei/hms/location/FusedLocationProviderClient;

.field static locationUpdateListener:Lcom/onesignal/HMSLocationController$LocationUpdateListener;


# direct methods
.method constructor <init>()V
    .locals 0

    .line 37
    invoke-direct {p0}, Lcom/onesignal/LocationController;-><init>()V

    return-void
.end method

.method static synthetic access$000()Lcom/huawei/hms/location/FusedLocationProviderClient;
    .locals 1

    .line 37
    sget-object v0, Lcom/onesignal/HMSLocationController;->hmsFusedLocationClient:Lcom/huawei/hms/location/FusedLocationProviderClient;

    return-object v0
.end method

.method static fireFailedComplete()V
    .locals 2

    .line 86
    sget-object v0, Lcom/onesignal/HMSLocationController;->syncLock:Ljava/lang/Object;

    monitor-enter v0

    const/4 v1, 0x0

    .line 87
    :try_start_0
    sput-object v1, Lcom/onesignal/HMSLocationController;->hmsFusedLocationClient:Lcom/huawei/hms/location/FusedLocationProviderClient;

    .line 88
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method private static initHuaweiLocation()V
    .locals 5

    .line 48
    const-string v0, "Huawei LocationServices getFusedLocationProviderClient failed! "

    sget-object v1, Lcom/onesignal/HMSLocationController;->syncLock:Ljava/lang/Object;

    monitor-enter v1

    .line 49
    :try_start_0
    sget-object v2, Lcom/onesignal/HMSLocationController;->hmsFusedLocationClient:Lcom/huawei/hms/location/FusedLocationProviderClient;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    if-nez v2, :cond_0

    .line 51
    :try_start_1
    sget-object v2, Lcom/onesignal/HMSLocationController;->classContext:Landroid/content/Context;

    invoke-static {v2}, Lcom/huawei/hms/location/LocationServices;->getFusedLocationProviderClient(Landroid/content/Context;)Lcom/huawei/hms/location/FusedLocationProviderClient;

    move-result-object v2

    sput-object v2, Lcom/onesignal/HMSLocationController;->hmsFusedLocationClient:Lcom/huawei/hms/location/FusedLocationProviderClient;
    :try_end_1
    .catch Ljava/lang/Exception; {:try_start_1 .. :try_end_1} :catch_0
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    goto :goto_0

    :catch_0
    move-exception v2

    .line 53
    :try_start_2
    sget-object v3, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v4, Ljava/lang/StringBuilder;

    invoke-direct {v4, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v4, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v3, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 54
    invoke-static {}, Lcom/onesignal/HMSLocationController;->fireFailedComplete()V

    .line 55
    monitor-exit v1

    return-void

    .line 58
    :cond_0
    :goto_0
    sget-object v0, Lcom/onesignal/HMSLocationController;->lastLocation:Landroid/location/Location;

    if-eqz v0, :cond_1

    .line 59
    sget-object v0, Lcom/onesignal/HMSLocationController;->lastLocation:Landroid/location/Location;

    invoke-static {v0}, Lcom/onesignal/HMSLocationController;->fireCompleteForLocation(Landroid/location/Location;)V

    goto :goto_1

    .line 61
    :cond_1
    sget-object v0, Lcom/onesignal/HMSLocationController;->hmsFusedLocationClient:Lcom/huawei/hms/location/FusedLocationProviderClient;

    invoke-virtual {v0}, Lcom/huawei/hms/location/FusedLocationProviderClient;->getLastLocation()Lcom/huawei/hmf/tasks/Task;

    move-result-object v0

    new-instance v2, Lcom/onesignal/HMSLocationController$2;

    invoke-direct {v2}, Lcom/onesignal/HMSLocationController$2;-><init>()V

    .line 62
    invoke-virtual {v0, v2}, Lcom/huawei/hmf/tasks/Task;->addOnSuccessListener(Lcom/huawei/hmf/tasks/OnSuccessListener;)Lcom/huawei/hmf/tasks/Task;

    move-result-object v0

    new-instance v2, Lcom/onesignal/HMSLocationController$1;

    invoke-direct {v2}, Lcom/onesignal/HMSLocationController$1;-><init>()V

    .line 75
    invoke-virtual {v0, v2}, Lcom/huawei/hmf/tasks/Task;->addOnFailureListener(Lcom/huawei/hmf/tasks/OnFailureListener;)Lcom/huawei/hmf/tasks/Task;

    .line 82
    :goto_1
    monitor-exit v1

    return-void

    :catchall_0
    move-exception v0

    monitor-exit v1
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    throw v0
.end method

.method static onFocusChange()V
    .locals 3

    .line 92
    sget-object v0, Lcom/onesignal/HMSLocationController;->syncLock:Ljava/lang/Object;

    monitor-enter v0

    .line 93
    :try_start_0
    sget-object v1, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v2, "HMSLocationController onFocusChange!"

    invoke-static {v1, v2}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 96
    invoke-static {}, Lcom/onesignal/HMSLocationController;->isHMSAvailable()Z

    move-result v1

    if-eqz v1, :cond_0

    sget-object v1, Lcom/onesignal/HMSLocationController;->hmsFusedLocationClient:Lcom/huawei/hms/location/FusedLocationProviderClient;

    if-nez v1, :cond_0

    .line 97
    monitor-exit v0

    return-void

    .line 99
    :cond_0
    sget-object v1, Lcom/onesignal/HMSLocationController;->hmsFusedLocationClient:Lcom/huawei/hms/location/FusedLocationProviderClient;

    if-eqz v1, :cond_2

    .line 100
    sget-object v2, Lcom/onesignal/HMSLocationController;->locationUpdateListener:Lcom/onesignal/HMSLocationController$LocationUpdateListener;

    if-eqz v2, :cond_1

    .line 101
    invoke-virtual {v1, v2}, Lcom/huawei/hms/location/FusedLocationProviderClient;->removeLocationUpdates(Lcom/huawei/hms/location/LocationCallback;)Lcom/huawei/hmf/tasks/Task;

    .line 102
    :cond_1
    new-instance v1, Lcom/onesignal/HMSLocationController$LocationUpdateListener;

    sget-object v2, Lcom/onesignal/HMSLocationController;->hmsFusedLocationClient:Lcom/huawei/hms/location/FusedLocationProviderClient;

    invoke-direct {v1, v2}, Lcom/onesignal/HMSLocationController$LocationUpdateListener;-><init>(Lcom/huawei/hms/location/FusedLocationProviderClient;)V

    sput-object v1, Lcom/onesignal/HMSLocationController;->locationUpdateListener:Lcom/onesignal/HMSLocationController$LocationUpdateListener;

    .line 104
    :cond_2
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method static startGetLocation()V
    .locals 0

    .line 44
    invoke-static {}, Lcom/onesignal/HMSLocationController;->initHuaweiLocation()V

    return-void
.end method
