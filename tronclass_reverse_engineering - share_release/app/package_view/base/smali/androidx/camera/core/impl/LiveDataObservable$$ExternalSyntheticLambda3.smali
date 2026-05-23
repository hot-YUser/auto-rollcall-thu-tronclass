.class public final synthetic Landroidx/camera/core/impl/LiveDataObservable$$ExternalSyntheticLambda3;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/concurrent/futures/CallbackToFutureAdapter$Resolver;


# instance fields
.field public final synthetic f$0:Landroidx/camera/core/impl/LiveDataObservable;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/core/impl/LiveDataObservable;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/core/impl/LiveDataObservable$$ExternalSyntheticLambda3;->f$0:Landroidx/camera/core/impl/LiveDataObservable;

    return-void
.end method


# virtual methods
.method public final attachCompleter(Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)Ljava/lang/Object;
    .locals 1

    .line 0
    iget-object v0, p0, Landroidx/camera/core/impl/LiveDataObservable$$ExternalSyntheticLambda3;->f$0:Landroidx/camera/core/impl/LiveDataObservable;

    invoke-virtual {v0, p1}, Landroidx/camera/core/impl/LiveDataObservable;->lambda$fetchData$1$androidx-camera-core-impl-LiveDataObservable(Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)Ljava/lang/Object;

    move-result-object p1

    return-object p1
.end method
