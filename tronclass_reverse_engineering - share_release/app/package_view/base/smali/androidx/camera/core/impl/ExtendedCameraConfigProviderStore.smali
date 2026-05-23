.class public final Landroidx/camera/core/impl/ExtendedCameraConfigProviderStore;
.super Ljava/lang/Object;
.source "ExtendedCameraConfigProviderStore.java"


# static fields
.field private static final CAMERA_CONFIG_PROVIDERS:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/Object;",
            "Landroidx/camera/core/impl/CameraConfigProvider;",
            ">;"
        }
    .end annotation
.end field

.field private static final LOCK:Ljava/lang/Object;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 33
    new-instance v0, Ljava/lang/Object;

    invoke-direct {v0}, Ljava/lang/Object;-><init>()V

    sput-object v0, Landroidx/camera/core/impl/ExtendedCameraConfigProviderStore;->LOCK:Ljava/lang/Object;

    .line 36
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    sput-object v0, Landroidx/camera/core/impl/ExtendedCameraConfigProviderStore;->CAMERA_CONFIG_PROVIDERS:Ljava/util/Map;

    return-void
.end method

.method private constructor <init>()V
    .locals 0

    .line 39
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static addConfig(Ljava/lang/Object;Landroidx/camera/core/impl/CameraConfigProvider;)V
    .locals 2

    .line 46
    sget-object v0, Landroidx/camera/core/impl/ExtendedCameraConfigProviderStore;->LOCK:Ljava/lang/Object;

    monitor-enter v0

    .line 47
    :try_start_0
    sget-object v1, Landroidx/camera/core/impl/ExtendedCameraConfigProviderStore;->CAMERA_CONFIG_PROVIDERS:Ljava/util/Map;

    invoke-interface {v1, p0, p1}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 48
    monitor-exit v0

    return-void

    :catchall_0
    move-exception p0

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p0
.end method

.method public static clear()V
    .locals 2

    .line 74
    sget-object v0, Landroidx/camera/core/impl/ExtendedCameraConfigProviderStore;->LOCK:Ljava/lang/Object;

    monitor-enter v0

    .line 75
    :try_start_0
    sget-object v1, Landroidx/camera/core/impl/ExtendedCameraConfigProviderStore;->CAMERA_CONFIG_PROVIDERS:Ljava/util/Map;

    invoke-interface {v1}, Ljava/util/Map;->clear()V

    .line 76
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public static getConfigProvider(Ljava/lang/Object;)Landroidx/camera/core/impl/CameraConfigProvider;
    .locals 2

    .line 60
    sget-object v0, Landroidx/camera/core/impl/ExtendedCameraConfigProviderStore;->LOCK:Ljava/lang/Object;

    monitor-enter v0

    .line 61
    :try_start_0
    sget-object v1, Landroidx/camera/core/impl/ExtendedCameraConfigProviderStore;->CAMERA_CONFIG_PROVIDERS:Ljava/util/Map;

    invoke-interface {v1, p0}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p0

    check-cast p0, Landroidx/camera/core/impl/CameraConfigProvider;

    .line 62
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    if-nez p0, :cond_0

    .line 65
    sget-object p0, Landroidx/camera/core/impl/CameraConfigProvider;->EMPTY:Landroidx/camera/core/impl/CameraConfigProvider;

    :cond_0
    return-object p0

    :catchall_0
    move-exception p0

    .line 62
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p0
.end method
