.class public interface abstract Landroidx/camera/video/internal/encoder/Encoder;
.super Ljava/lang/Object;
.source "Encoder.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/internal/encoder/Encoder$ByteBufferInput;,
        Landroidx/camera/video/internal/encoder/Encoder$SurfaceInput;,
        Landroidx/camera/video/internal/encoder/Encoder$EncoderInput;
    }
.end annotation


# static fields
.field public static final NO_TIMESTAMP:J = -0x1L


# virtual methods
.method public abstract getConfiguredBitrate()I
.end method

.method public abstract getEncoderInfo()Landroidx/camera/video/internal/encoder/EncoderInfo;
.end method

.method public abstract getInput()Landroidx/camera/video/internal/encoder/Encoder$EncoderInput;
.end method

.method public abstract getReleasedFuture()Lcom/google/common/util/concurrent/ListenableFuture;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Void;",
            ">;"
        }
    .end annotation
.end method

.method public abstract pause()V
.end method

.method public abstract release()V
.end method

.method public abstract requestKeyFrame()V
.end method

.method public abstract setEncoderCallback(Landroidx/camera/video/internal/encoder/EncoderCallback;Ljava/util/concurrent/Executor;)V
.end method

.method public abstract start()V
.end method

.method public abstract stop()V
.end method

.method public abstract stop(J)V
.end method
