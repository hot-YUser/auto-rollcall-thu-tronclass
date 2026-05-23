.class Lcom/onesignal/HMSLocationController$2;
.super Ljava/lang/Object;
.source "HMSLocationController.java"

# interfaces
.implements Lcom/huawei/hmf/tasks/OnSuccessListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/HMSLocationController;->initHuaweiLocation()V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Lcom/huawei/hmf/tasks/OnSuccessListener<",
        "Landroid/location/Location;",
        ">;"
    }
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 62
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public onSuccess(Landroid/location/Location;)V
    .locals 3

    .line 65
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->WARN:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Huawei LocationServices getLastLocation returned location: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    if-nez p1, :cond_0

    .line 67
    invoke-static {}, Lcom/onesignal/HMSLocationController;->fireFailedComplete()V

    return-void

    .line 70
    :cond_0
    sput-object p1, Lcom/onesignal/LocationController;->lastLocation:Landroid/location/Location;

    .line 71
    sget-object p1, Lcom/onesignal/LocationController;->lastLocation:Landroid/location/Location;

    invoke-static {p1}, Lcom/onesignal/LocationController;->fireCompleteForLocation(Landroid/location/Location;)V

    .line 72
    new-instance p1, Lcom/onesignal/HMSLocationController$LocationUpdateListener;

    invoke-static {}, Lcom/onesignal/HMSLocationController;->access$000()Lcom/huawei/hms/location/FusedLocationProviderClient;

    move-result-object v0

    invoke-direct {p1, v0}, Lcom/onesignal/HMSLocationController$LocationUpdateListener;-><init>(Lcom/huawei/hms/location/FusedLocationProviderClient;)V

    sput-object p1, Lcom/onesignal/HMSLocationController;->locationUpdateListener:Lcom/onesignal/HMSLocationController$LocationUpdateListener;

    return-void
.end method

.method public bridge synthetic onSuccess(Ljava/lang/Object;)V
    .locals 0

    .line 62
    check-cast p1, Landroid/location/Location;

    invoke-virtual {p0, p1}, Lcom/onesignal/HMSLocationController$2;->onSuccess(Landroid/location/Location;)V

    return-void
.end method
