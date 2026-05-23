.class public Lcom/king/camera/scan/config/CameraConfig;
.super Ljava/lang/Object;
.source "CameraConfig.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 49
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public options(Landroidx/camera/core/CameraSelector$Builder;)Landroidx/camera/core/CameraSelector;
    .locals 0

    .line 65
    invoke-virtual {p1}, Landroidx/camera/core/CameraSelector$Builder;->build()Landroidx/camera/core/CameraSelector;

    move-result-object p1

    return-object p1
.end method

.method public options(Landroidx/camera/core/ImageAnalysis$Builder;)Landroidx/camera/core/ImageAnalysis;
    .locals 0

    .line 95
    invoke-virtual {p1}, Landroidx/camera/core/ImageAnalysis$Builder;->build()Landroidx/camera/core/ImageAnalysis;

    move-result-object p1

    return-object p1
.end method

.method public options(Landroidx/camera/core/Preview$Builder;)Landroidx/camera/core/Preview;
    .locals 0

    .line 80
    invoke-virtual {p1}, Landroidx/camera/core/Preview$Builder;->build()Landroidx/camera/core/Preview;

    move-result-object p1

    return-object p1
.end method
