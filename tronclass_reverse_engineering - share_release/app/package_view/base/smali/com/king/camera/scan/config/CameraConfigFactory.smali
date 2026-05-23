.class public final Lcom/king/camera/scan/config/CameraConfigFactory;
.super Ljava/lang/Object;
.source "CameraConfigFactory.java"


# direct methods
.method private constructor <init>()V
    .locals 1

    .line 15
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 16
    new-instance v0, Ljava/lang/AssertionError;

    invoke-direct {v0}, Ljava/lang/AssertionError;-><init>()V

    throw v0
.end method

.method public static createDefaultCameraConfig(Landroid/content/Context;I)Lcom/king/camera/scan/config/CameraConfig;
    .locals 1

    .line 30
    new-instance v0, Lcom/king/camera/scan/config/CameraConfigFactory$1;

    invoke-direct {v0, p0, p1}, Lcom/king/camera/scan/config/CameraConfigFactory$1;-><init>(Landroid/content/Context;I)V

    return-object v0
.end method
