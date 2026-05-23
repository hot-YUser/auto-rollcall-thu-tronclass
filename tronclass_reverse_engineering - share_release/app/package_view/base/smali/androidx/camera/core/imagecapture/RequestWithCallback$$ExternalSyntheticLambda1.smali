.class public final synthetic Landroidx/camera/core/imagecapture/RequestWithCallback$$ExternalSyntheticLambda1;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/concurrent/futures/CallbackToFutureAdapter$Resolver;


# instance fields
.field public final synthetic f$0:Landroidx/camera/core/imagecapture/RequestWithCallback;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/core/imagecapture/RequestWithCallback;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/core/imagecapture/RequestWithCallback$$ExternalSyntheticLambda1;->f$0:Landroidx/camera/core/imagecapture/RequestWithCallback;

    return-void
.end method


# virtual methods
.method public final attachCompleter(Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)Ljava/lang/Object;
    .locals 1

    .line 0
    iget-object v0, p0, Landroidx/camera/core/imagecapture/RequestWithCallback$$ExternalSyntheticLambda1;->f$0:Landroidx/camera/core/imagecapture/RequestWithCallback;

    invoke-virtual {v0, p1}, Landroidx/camera/core/imagecapture/RequestWithCallback;->lambda$new$1$androidx-camera-core-imagecapture-RequestWithCallback(Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)Ljava/lang/Object;

    move-result-object p1

    return-object p1
.end method
