.class public final synthetic Landroidx/camera/view/PendingValue$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/concurrent/futures/CallbackToFutureAdapter$Resolver;


# instance fields
.field public final synthetic f$0:Landroidx/camera/view/PendingValue;

.field public final synthetic f$1:Ljava/lang/Object;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/view/PendingValue;Ljava/lang/Object;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/view/PendingValue$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/view/PendingValue;

    iput-object p2, p0, Landroidx/camera/view/PendingValue$$ExternalSyntheticLambda0;->f$1:Ljava/lang/Object;

    return-void
.end method


# virtual methods
.method public final attachCompleter(Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)Ljava/lang/Object;
    .locals 2

    .line 0
    iget-object v0, p0, Landroidx/camera/view/PendingValue$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/view/PendingValue;

    iget-object v1, p0, Landroidx/camera/view/PendingValue$$ExternalSyntheticLambda0;->f$1:Ljava/lang/Object;

    invoke-virtual {v0, v1, p1}, Landroidx/camera/view/PendingValue;->lambda$setValue$0$androidx-camera-view-PendingValue(Ljava/lang/Object;Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)Ljava/lang/Object;

    move-result-object p1

    return-object p1
.end method
