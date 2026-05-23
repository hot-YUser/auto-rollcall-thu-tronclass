.class Lcom/king/camera/scan/config/CameraConfigFactory$1;
.super Lcom/king/camera/scan/config/AdaptiveCameraConfig;
.source "CameraConfigFactory.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/king/camera/scan/config/CameraConfigFactory;->createDefaultCameraConfig(Landroid/content/Context;I)Lcom/king/camera/scan/config/CameraConfig;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$lensFacing:I


# direct methods
.method constructor <init>(Landroid/content/Context;I)V
    .locals 0

    .line 30
    iput p2, p0, Lcom/king/camera/scan/config/CameraConfigFactory$1;->val$lensFacing:I

    invoke-direct {p0, p1}, Lcom/king/camera/scan/config/AdaptiveCameraConfig;-><init>(Landroid/content/Context;)V

    return-void
.end method


# virtual methods
.method public options(Landroidx/camera/core/CameraSelector$Builder;)Landroidx/camera/core/CameraSelector;
    .locals 2

    .line 34
    iget v0, p0, Lcom/king/camera/scan/config/CameraConfigFactory$1;->val$lensFacing:I

    const/4 v1, -0x1

    if-eq v0, v1, :cond_0

    .line 35
    invoke-virtual {p1, v0}, Landroidx/camera/core/CameraSelector$Builder;->requireLensFacing(I)Landroidx/camera/core/CameraSelector$Builder;

    .line 37
    :cond_0
    invoke-super {p0, p1}, Lcom/king/camera/scan/config/AdaptiveCameraConfig;->options(Landroidx/camera/core/CameraSelector$Builder;)Landroidx/camera/core/CameraSelector;

    move-result-object p1

    return-object p1
.end method
