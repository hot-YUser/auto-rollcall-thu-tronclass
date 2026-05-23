.class public interface abstract Landroidx/camera/core/impl/UseCaseConfig$Builder;
.super Ljava/lang/Object;
.source "UseCaseConfig.java"

# interfaces
.implements Landroidx/camera/core/internal/TargetConfig$Builder;
.implements Landroidx/camera/core/ExtendableBuilder;
.implements Landroidx/camera/core/internal/UseCaseEventConfig$Builder;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/impl/UseCaseConfig;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x609
    name = "Builder"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "<T:",
        "Landroidx/camera/core/UseCase;",
        "C::",
        "Landroidx/camera/core/impl/UseCaseConfig<",
        "TT;>;B:",
        "Ljava/lang/Object;",
        ">",
        "Ljava/lang/Object;",
        "Landroidx/camera/core/internal/TargetConfig$Builder<",
        "TT;TB;>;",
        "Landroidx/camera/core/ExtendableBuilder<",
        "TT;>;",
        "Landroidx/camera/core/internal/UseCaseEventConfig$Builder<",
        "TB;>;"
    }
.end annotation


# virtual methods
.method public abstract getUseCaseConfig()Landroidx/camera/core/impl/UseCaseConfig;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()TC;"
        }
    .end annotation
.end method

.method public abstract setCameraSelector(Landroidx/camera/core/CameraSelector;)Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/CameraSelector;",
            ")TB;"
        }
    .end annotation
.end method

.method public abstract setCaptureOptionUnpacker(Landroidx/camera/core/impl/CaptureConfig$OptionUnpacker;)Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/impl/CaptureConfig$OptionUnpacker;",
            ")TB;"
        }
    .end annotation
.end method

.method public abstract setCaptureType(Landroidx/camera/core/impl/UseCaseConfigFactory$CaptureType;)Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/impl/UseCaseConfigFactory$CaptureType;",
            ")TB;"
        }
    .end annotation
.end method

.method public abstract setDefaultCaptureConfig(Landroidx/camera/core/impl/CaptureConfig;)Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/impl/CaptureConfig;",
            ")TB;"
        }
    .end annotation
.end method

.method public abstract setDefaultSessionConfig(Landroidx/camera/core/impl/SessionConfig;)Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/impl/SessionConfig;",
            ")TB;"
        }
    .end annotation
.end method

.method public abstract setHighResolutionDisabled(Z)Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(Z)TB;"
        }
    .end annotation
.end method

.method public abstract setSessionOptionUnpacker(Landroidx/camera/core/impl/SessionConfig$OptionUnpacker;)Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/impl/SessionConfig$OptionUnpacker;",
            ")TB;"
        }
    .end annotation
.end method

.method public abstract setSurfaceOccupancyPriority(I)Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(I)TB;"
        }
    .end annotation
.end method

.method public abstract setZslDisabled(Z)Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(Z)TB;"
        }
    .end annotation
.end method
