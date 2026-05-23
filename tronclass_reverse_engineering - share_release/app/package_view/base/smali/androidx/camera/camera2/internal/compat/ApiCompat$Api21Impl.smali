.class public Landroidx/camera/camera2/internal/compat/ApiCompat$Api21Impl;
.super Ljava/lang/Object;
.source "ApiCompat.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/camera2/internal/compat/ApiCompat;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "Api21Impl"
.end annotation


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 47
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static close(Landroid/hardware/camera2/CameraDevice;)V
    .locals 0

    .line 55
    invoke-virtual {p0}, Landroid/hardware/camera2/CameraDevice;->close()V

    return-void
.end method
