.class Lcom/onesignal/GoogleApiClientCompatProxy;
.super Ljava/lang/Object;
.source "GoogleApiClientCompatProxy.java"


# instance fields
.field private final googleApiClient:Lcom/google/android/gms/common/api/GoogleApiClient;

.field private final googleApiClientListenerClass:Ljava/lang/Class;


# direct methods
.method constructor <init>(Lcom/google/android/gms/common/api/GoogleApiClient;)V
    .locals 0

    .line 39
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 40
    iput-object p1, p0, Lcom/onesignal/GoogleApiClientCompatProxy;->googleApiClient:Lcom/google/android/gms/common/api/GoogleApiClient;

    .line 41
    invoke-virtual {p1}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object p1

    iput-object p1, p0, Lcom/onesignal/GoogleApiClientCompatProxy;->googleApiClientListenerClass:Ljava/lang/Class;

    return-void
.end method


# virtual methods
.method connect()V
    .locals 4

    .line 46
    :try_start_0
    iget-object v0, p0, Lcom/onesignal/GoogleApiClientCompatProxy;->googleApiClientListenerClass:Ljava/lang/Class;

    const-string v1, "connect"

    const/4 v2, 0x0

    new-array v3, v2, [Ljava/lang/Class;

    invoke-virtual {v0, v1, v3}, Ljava/lang/Class;->getMethod(Ljava/lang/String;[Ljava/lang/Class;)Ljava/lang/reflect/Method;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/GoogleApiClientCompatProxy;->googleApiClient:Lcom/google/android/gms/common/api/GoogleApiClient;

    new-array v2, v2, [Ljava/lang/Object;

    invoke-virtual {v0, v1, v2}, Ljava/lang/reflect/Method;->invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    :catchall_0
    move-exception v0

    .line 48
    invoke-virtual {v0}, Ljava/lang/Throwable;->printStackTrace()V

    :goto_0
    return-void
.end method

.method disconnect()V
    .locals 4

    .line 54
    :try_start_0
    iget-object v0, p0, Lcom/onesignal/GoogleApiClientCompatProxy;->googleApiClientListenerClass:Ljava/lang/Class;

    const-string v1, "disconnect"

    const/4 v2, 0x0

    new-array v3, v2, [Ljava/lang/Class;

    invoke-virtual {v0, v1, v3}, Ljava/lang/Class;->getMethod(Ljava/lang/String;[Ljava/lang/Class;)Ljava/lang/reflect/Method;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/GoogleApiClientCompatProxy;->googleApiClient:Lcom/google/android/gms/common/api/GoogleApiClient;

    new-array v2, v2, [Ljava/lang/Object;

    invoke-virtual {v0, v1, v2}, Ljava/lang/reflect/Method;->invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    :catchall_0
    move-exception v0

    .line 56
    invoke-virtual {v0}, Ljava/lang/Throwable;->printStackTrace()V

    :goto_0
    return-void
.end method

.method realInstance()Lcom/google/android/gms/common/api/GoogleApiClient;
    .locals 1

    .line 61
    iget-object v0, p0, Lcom/onesignal/GoogleApiClientCompatProxy;->googleApiClient:Lcom/google/android/gms/common/api/GoogleApiClient;

    return-object v0
.end method
