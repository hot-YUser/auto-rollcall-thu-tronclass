.class public interface abstract Landroidx/camera/video/internal/audio/AudioSource$AudioSourceCallback;
.super Ljava/lang/Object;
.source "AudioSource.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/internal/audio/AudioSource;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x609
    name = "AudioSourceCallback"
.end annotation


# virtual methods
.method public abstract onAmplitudeValue(D)V
.end method

.method public abstract onError(Ljava/lang/Throwable;)V
.end method

.method public abstract onSilenceStateChanged(Z)V
.end method

.method public onSuspendStateChanged(Z)V
    .locals 0

    return-void
.end method
