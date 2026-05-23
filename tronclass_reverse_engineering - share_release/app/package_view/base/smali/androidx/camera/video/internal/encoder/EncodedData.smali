.class public interface abstract Landroidx/camera/video/internal/encoder/EncodedData;
.super Ljava/lang/Object;
.source "EncodedData.java"

# interfaces
.implements Ljava/lang/AutoCloseable;


# virtual methods
.method public abstract close()V
.end method

.method public abstract getBufferInfo()Landroid/media/MediaCodec$BufferInfo;
.end method

.method public abstract getByteBuffer()Ljava/nio/ByteBuffer;
.end method

.method public abstract getClosedFuture()Lcom/google/common/util/concurrent/ListenableFuture;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "Ljava/lang/Void;",
            ">;"
        }
    .end annotation
.end method

.method public abstract getPresentationTimeUs()J
.end method

.method public abstract isKeyFrame()Z
.end method

.method public abstract size()J
.end method
