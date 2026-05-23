.class public final synthetic Landroidx/camera/video/internal/encoder/EncoderImpl$ByteBufferInput$$ExternalSyntheticLambda9;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field public final synthetic f$0:Landroidx/camera/video/internal/encoder/EncoderImpl$ByteBufferInput;

.field public final synthetic f$1:Landroidx/camera/core/impl/Observable$Observer;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/video/internal/encoder/EncoderImpl$ByteBufferInput;Landroidx/camera/core/impl/Observable$Observer;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/video/internal/encoder/EncoderImpl$ByteBufferInput$$ExternalSyntheticLambda9;->f$0:Landroidx/camera/video/internal/encoder/EncoderImpl$ByteBufferInput;

    iput-object p2, p0, Landroidx/camera/video/internal/encoder/EncoderImpl$ByteBufferInput$$ExternalSyntheticLambda9;->f$1:Landroidx/camera/core/impl/Observable$Observer;

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 2

    .line 0
    iget-object v0, p0, Landroidx/camera/video/internal/encoder/EncoderImpl$ByteBufferInput$$ExternalSyntheticLambda9;->f$0:Landroidx/camera/video/internal/encoder/EncoderImpl$ByteBufferInput;

    iget-object v1, p0, Landroidx/camera/video/internal/encoder/EncoderImpl$ByteBufferInput$$ExternalSyntheticLambda9;->f$1:Landroidx/camera/core/impl/Observable$Observer;

    invoke-virtual {v0, v1}, Landroidx/camera/video/internal/encoder/EncoderImpl$ByteBufferInput;->lambda$removeObserver$8$androidx-camera-video-internal-encoder-EncoderImpl$ByteBufferInput(Landroidx/camera/core/impl/Observable$Observer;)V

    return-void
.end method
