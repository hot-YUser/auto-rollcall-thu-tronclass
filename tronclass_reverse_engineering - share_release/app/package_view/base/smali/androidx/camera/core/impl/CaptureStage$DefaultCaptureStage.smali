.class public final Landroidx/camera/core/impl/CaptureStage$DefaultCaptureStage;
.super Ljava/lang/Object;
.source "CaptureStage.java"

# interfaces
.implements Landroidx/camera/core/impl/CaptureStage;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/impl/CaptureStage;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = "DefaultCaptureStage"
.end annotation


# instance fields
.field private final mCaptureConfig:Landroidx/camera/core/impl/CaptureConfig;


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 43
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 44
    new-instance v0, Landroidx/camera/core/impl/CaptureConfig$Builder;

    invoke-direct {v0}, Landroidx/camera/core/impl/CaptureConfig$Builder;-><init>()V

    .line 45
    invoke-virtual {v0}, Landroidx/camera/core/impl/CaptureConfig$Builder;->build()Landroidx/camera/core/impl/CaptureConfig;

    move-result-object v0

    iput-object v0, p0, Landroidx/camera/core/impl/CaptureStage$DefaultCaptureStage;->mCaptureConfig:Landroidx/camera/core/impl/CaptureConfig;

    return-void
.end method


# virtual methods
.method public getCaptureConfig()Landroidx/camera/core/impl/CaptureConfig;
    .locals 1

    .line 55
    iget-object v0, p0, Landroidx/camera/core/impl/CaptureStage$DefaultCaptureStage;->mCaptureConfig:Landroidx/camera/core/impl/CaptureConfig;

    return-object v0
.end method

.method public getId()I
    .locals 1

    const/4 v0, 0x0

    return v0
.end method
