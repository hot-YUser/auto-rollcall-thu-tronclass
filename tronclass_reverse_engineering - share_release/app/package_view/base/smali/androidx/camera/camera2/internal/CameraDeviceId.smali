.class abstract Landroidx/camera/camera2/internal/CameraDeviceId;
.super Ljava/lang/Object;
.source "CameraDeviceId.java"


# direct methods
.method constructor <init>()V
    .locals 0

    .line 30
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static create(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Landroidx/camera/camera2/internal/CameraDeviceId;
    .locals 1

    .line 41
    new-instance v0, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;

    invoke-virtual {p0}, Ljava/lang/String;->toLowerCase()Ljava/lang/String;

    move-result-object p0

    invoke-virtual {p1}, Ljava/lang/String;->toLowerCase()Ljava/lang/String;

    move-result-object p1

    .line 42
    invoke-virtual {p2}, Ljava/lang/String;->toLowerCase()Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p3}, Ljava/lang/String;->toLowerCase()Ljava/lang/String;

    move-result-object p3

    invoke-direct {v0, p0, p1, p2, p3}, Landroidx/camera/camera2/internal/AutoValue_CameraDeviceId;-><init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    return-object v0
.end method


# virtual methods
.method public abstract getBrand()Ljava/lang/String;
.end method

.method public abstract getCameraId()Ljava/lang/String;
.end method

.method public abstract getDevice()Ljava/lang/String;
.end method

.method public abstract getModel()Ljava/lang/String;
.end method
