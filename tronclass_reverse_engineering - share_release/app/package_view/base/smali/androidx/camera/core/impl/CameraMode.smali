.class public final Landroidx/camera/core/impl/CameraMode;
.super Ljava/lang/Object;
.source "CameraMode.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/impl/CameraMode$Mode;
    }
.end annotation


# static fields
.field public static final CONCURRENT_CAMERA:I = 0x1

.field public static final DEFAULT:I = 0x0

.field public static final ULTRA_HIGH_RESOLUTION_CAMERA:I = 0x2


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 71
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static toLabelString(I)Ljava/lang/String;
    .locals 1

    const/4 v0, 0x1

    if-eq p0, v0, :cond_1

    const/4 v0, 0x2

    if-eq p0, v0, :cond_0

    .line 67
    const-string p0, "DEFAULT"

    return-object p0

    .line 66
    :cond_0
    const-string p0, "ULTRA_HIGH_RESOLUTION_CAMERA"

    return-object p0

    .line 65
    :cond_1
    const-string p0, "CONCURRENT_CAMERA"

    return-object p0
.end method
