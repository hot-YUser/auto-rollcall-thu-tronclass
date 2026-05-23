.class public interface abstract Landroidx/camera/video/internal/encoder/InputBuffer;
.super Ljava/lang/Object;
.source "InputBuffer.java"


# virtual methods
.method public abstract cancel()Z
.end method

.method public abstract getByteBuffer()Ljava/nio/ByteBuffer;
.end method

.method public abstract getTerminationFuture()Lcom/google/common/util/concurrent/ListenableFuture;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Void;",
            ">;"
        }
    .end annotation
.end method

.method public abstract setEndOfStream(Z)V
.end method

.method public abstract setPresentationTimeUs(J)V
.end method

.method public abstract submit()Z
.end method
