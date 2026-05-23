.class public final synthetic Landroidx/camera/video/internal/encoder/EncoderImpl$ByteBufferInput$$ExternalSyntheticLambda7;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field public final synthetic f$0:Ljava/util/Map$Entry;

.field public final synthetic f$1:Landroidx/camera/video/internal/BufferProvider$State;


# direct methods
.method public synthetic constructor <init>(Ljava/util/Map$Entry;Landroidx/camera/video/internal/BufferProvider$State;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/video/internal/encoder/EncoderImpl$ByteBufferInput$$ExternalSyntheticLambda7;->f$0:Ljava/util/Map$Entry;

    iput-object p2, p0, Landroidx/camera/video/internal/encoder/EncoderImpl$ByteBufferInput$$ExternalSyntheticLambda7;->f$1:Landroidx/camera/video/internal/BufferProvider$State;

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 2

    .line 0
    iget-object v0, p0, Landroidx/camera/video/internal/encoder/EncoderImpl$ByteBufferInput$$ExternalSyntheticLambda7;->f$0:Ljava/util/Map$Entry;

    iget-object v1, p0, Landroidx/camera/video/internal/encoder/EncoderImpl$ByteBufferInput$$ExternalSyntheticLambda7;->f$1:Landroidx/camera/video/internal/BufferProvider$State;

    invoke-static {v0, v1}, Landroidx/camera/video/internal/encoder/EncoderImpl$ByteBufferInput;->lambda$setActive$9(Ljava/util/Map$Entry;Landroidx/camera/video/internal/BufferProvider$State;)V

    return-void
.end method
