.class public final synthetic Landroidx/camera/core/impl/DeferrableSurfaces$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/concurrent/futures/CallbackToFutureAdapter$Resolver;


# instance fields
.field public final synthetic f$0:Ljava/util/List;

.field public final synthetic f$1:Ljava/util/concurrent/ScheduledExecutorService;

.field public final synthetic f$2:Ljava/util/concurrent/Executor;

.field public final synthetic f$3:J

.field public final synthetic f$4:Z


# direct methods
.method public synthetic constructor <init>(Ljava/util/List;Ljava/util/concurrent/ScheduledExecutorService;Ljava/util/concurrent/Executor;JZ)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/core/impl/DeferrableSurfaces$$ExternalSyntheticLambda0;->f$0:Ljava/util/List;

    iput-object p2, p0, Landroidx/camera/core/impl/DeferrableSurfaces$$ExternalSyntheticLambda0;->f$1:Ljava/util/concurrent/ScheduledExecutorService;

    iput-object p3, p0, Landroidx/camera/core/impl/DeferrableSurfaces$$ExternalSyntheticLambda0;->f$2:Ljava/util/concurrent/Executor;

    iput-wide p4, p0, Landroidx/camera/core/impl/DeferrableSurfaces$$ExternalSyntheticLambda0;->f$3:J

    iput-boolean p6, p0, Landroidx/camera/core/impl/DeferrableSurfaces$$ExternalSyntheticLambda0;->f$4:Z

    return-void
.end method


# virtual methods
.method public final attachCompleter(Landroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)Ljava/lang/Object;
    .locals 7

    .line 0
    iget-object v0, p0, Landroidx/camera/core/impl/DeferrableSurfaces$$ExternalSyntheticLambda0;->f$0:Ljava/util/List;

    iget-object v1, p0, Landroidx/camera/core/impl/DeferrableSurfaces$$ExternalSyntheticLambda0;->f$1:Ljava/util/concurrent/ScheduledExecutorService;

    iget-object v2, p0, Landroidx/camera/core/impl/DeferrableSurfaces$$ExternalSyntheticLambda0;->f$2:Ljava/util/concurrent/Executor;

    iget-wide v3, p0, Landroidx/camera/core/impl/DeferrableSurfaces$$ExternalSyntheticLambda0;->f$3:J

    iget-boolean v5, p0, Landroidx/camera/core/impl/DeferrableSurfaces$$ExternalSyntheticLambda0;->f$4:Z

    move-object v6, p1

    invoke-static/range {v0 .. v6}, Landroidx/camera/core/impl/DeferrableSurfaces;->lambda$surfaceListWithTimeout$3(Ljava/util/List;Ljava/util/concurrent/ScheduledExecutorService;Ljava/util/concurrent/Executor;JZLandroidx/concurrent/futures/CallbackToFutureAdapter$Completer;)Ljava/lang/Object;

    move-result-object p1

    return-object p1
.end method
