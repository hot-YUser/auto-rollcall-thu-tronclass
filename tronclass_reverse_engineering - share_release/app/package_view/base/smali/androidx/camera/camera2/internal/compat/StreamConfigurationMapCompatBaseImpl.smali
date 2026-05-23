.class Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompatBaseImpl;
.super Ljava/lang/Object;
.source "StreamConfigurationMapCompatBaseImpl.java"

# interfaces
.implements Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat$StreamConfigurationMapCompatImpl;


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompatBaseImpl$Api23Impl;
    }
.end annotation


# instance fields
.field final mStreamConfigurationMap:Landroid/hardware/camera2/params/StreamConfigurationMap;


# direct methods
.method constructor <init>(Landroid/hardware/camera2/params/StreamConfigurationMap;)V
    .locals 0

    .line 36
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 37
    iput-object p1, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompatBaseImpl;->mStreamConfigurationMap:Landroid/hardware/camera2/params/StreamConfigurationMap;

    return-void
.end method


# virtual methods
.method public getHighResolutionOutputSizes(I)[Landroid/util/Size;
    .locals 1

    .line 67
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompatBaseImpl;->mStreamConfigurationMap:Landroid/hardware/camera2/params/StreamConfigurationMap;

    invoke-static {v0, p1}, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompatBaseImpl$Api23Impl;->getHighResolutionOutputSizes(Landroid/hardware/camera2/params/StreamConfigurationMap;I)[Landroid/util/Size;

    move-result-object p1

    return-object p1
.end method

.method public getOutputSizes(I)[Landroid/util/Size;
    .locals 1

    const/16 v0, 0x22

    if-ne p1, v0, :cond_0

    .line 50
    iget-object p1, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompatBaseImpl;->mStreamConfigurationMap:Landroid/hardware/camera2/params/StreamConfigurationMap;

    const-class v0, Landroid/graphics/SurfaceTexture;

    invoke-virtual {p1, v0}, Landroid/hardware/camera2/params/StreamConfigurationMap;->getOutputSizes(Ljava/lang/Class;)[Landroid/util/Size;

    move-result-object p1

    goto :goto_0

    .line 52
    :cond_0
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompatBaseImpl;->mStreamConfigurationMap:Landroid/hardware/camera2/params/StreamConfigurationMap;

    invoke-virtual {v0, p1}, Landroid/hardware/camera2/params/StreamConfigurationMap;->getOutputSizes(I)[Landroid/util/Size;

    move-result-object p1

    :goto_0
    return-object p1
.end method

.method public getOutputSizes(Ljava/lang/Class;)[Landroid/util/Size;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">(",
            "Ljava/lang/Class<",
            "TT;>;)[",
            "Landroid/util/Size;"
        }
    .end annotation

    .line 60
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompatBaseImpl;->mStreamConfigurationMap:Landroid/hardware/camera2/params/StreamConfigurationMap;

    invoke-virtual {v0, p1}, Landroid/hardware/camera2/params/StreamConfigurationMap;->getOutputSizes(Ljava/lang/Class;)[Landroid/util/Size;

    move-result-object p1

    return-object p1
.end method

.method public unwrap()Landroid/hardware/camera2/params/StreamConfigurationMap;
    .locals 1

    .line 75
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompatBaseImpl;->mStreamConfigurationMap:Landroid/hardware/camera2/params/StreamConfigurationMap;

    return-object v0
.end method
