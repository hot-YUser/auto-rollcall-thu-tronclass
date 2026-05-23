.class final Landroidx/camera/core/impl/CameraConfigs$EmptyCameraConfig;
.super Ljava/lang/Object;
.source "CameraConfigs.java"

# interfaces
.implements Landroidx/camera/core/impl/CameraConfig;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/impl/CameraConfigs;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x18
    name = "EmptyCameraConfig"
.end annotation


# instance fields
.field private final mIdentifier:Landroidx/camera/core/impl/Identifier;


# direct methods
.method constructor <init>()V
    .locals 1

    .line 37
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 38
    new-instance v0, Ljava/lang/Object;

    invoke-direct {v0}, Ljava/lang/Object;-><init>()V

    invoke-static {v0}, Landroidx/camera/core/impl/Identifier;->create(Ljava/lang/Object;)Landroidx/camera/core/impl/Identifier;

    move-result-object v0

    iput-object v0, p0, Landroidx/camera/core/impl/CameraConfigs$EmptyCameraConfig;->mIdentifier:Landroidx/camera/core/impl/Identifier;

    return-void
.end method


# virtual methods
.method public getCompatibilityId()Landroidx/camera/core/impl/Identifier;
    .locals 1

    .line 43
    iget-object v0, p0, Landroidx/camera/core/impl/CameraConfigs$EmptyCameraConfig;->mIdentifier:Landroidx/camera/core/impl/Identifier;

    return-object v0
.end method

.method public getConfig()Landroidx/camera/core/impl/Config;
    .locals 1

    .line 48
    invoke-static {}, Landroidx/camera/core/impl/OptionsBundle;->emptyBundle()Landroidx/camera/core/impl/OptionsBundle;

    move-result-object v0

    return-object v0
.end method
