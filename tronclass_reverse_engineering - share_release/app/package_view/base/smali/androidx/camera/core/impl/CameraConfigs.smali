.class public Landroidx/camera/core/impl/CameraConfigs;
.super Ljava/lang/Object;
.source "CameraConfigs.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/impl/CameraConfigs$EmptyCameraConfig;
    }
.end annotation


# static fields
.field private static final EMPTY_CONFIG:Landroidx/camera/core/impl/CameraConfig;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 27
    new-instance v0, Landroidx/camera/core/impl/CameraConfigs$EmptyCameraConfig;

    invoke-direct {v0}, Landroidx/camera/core/impl/CameraConfigs$EmptyCameraConfig;-><init>()V

    sput-object v0, Landroidx/camera/core/impl/CameraConfigs;->EMPTY_CONFIG:Landroidx/camera/core/impl/CameraConfig;

    return-void
.end method

.method private constructor <init>()V
    .locals 0

    .line 52
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static emptyConfig()Landroidx/camera/core/impl/CameraConfig;
    .locals 1

    .line 34
    sget-object v0, Landroidx/camera/core/impl/CameraConfigs;->EMPTY_CONFIG:Landroidx/camera/core/impl/CameraConfig;

    return-object v0
.end method
