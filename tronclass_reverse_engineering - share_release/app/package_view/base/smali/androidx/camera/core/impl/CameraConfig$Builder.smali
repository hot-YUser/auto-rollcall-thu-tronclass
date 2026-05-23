.class public interface abstract Landroidx/camera/core/impl/CameraConfig$Builder;
.super Ljava/lang/Object;
.source "CameraConfig.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/impl/CameraConfig;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x609
    name = "Builder"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "<B:",
        "Ljava/lang/Object;",
        ">",
        "Ljava/lang/Object;"
    }
.end annotation


# virtual methods
.method public abstract setCompatibilityId(Landroidx/camera/core/impl/Identifier;)Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/impl/Identifier;",
            ")TB;"
        }
    .end annotation
.end method

.method public abstract setSessionProcessor(Landroidx/camera/core/impl/SessionProcessor;)Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/impl/SessionProcessor;",
            ")TB;"
        }
    .end annotation
.end method

.method public abstract setUseCaseCombinationRequiredRule(I)Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(I)TB;"
        }
    .end annotation
.end method

.method public abstract setUseCaseConfigFactory(Landroidx/camera/core/impl/UseCaseConfigFactory;)Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/impl/UseCaseConfigFactory;",
            ")TB;"
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
