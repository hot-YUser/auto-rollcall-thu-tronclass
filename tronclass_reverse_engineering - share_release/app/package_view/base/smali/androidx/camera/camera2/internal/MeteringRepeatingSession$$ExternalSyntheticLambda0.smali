.class public final synthetic Landroidx/camera/camera2/internal/MeteringRepeatingSession$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/camera/core/impl/SessionConfig$ErrorListener;


# instance fields
.field public final synthetic f$0:Landroidx/camera/camera2/internal/MeteringRepeatingSession;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/camera2/internal/MeteringRepeatingSession;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/camera2/internal/MeteringRepeatingSession$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/camera2/internal/MeteringRepeatingSession;

    return-void
.end method


# virtual methods
.method public final onError(Landroidx/camera/core/impl/SessionConfig;Landroidx/camera/core/impl/SessionConfig$SessionError;)V
    .locals 1

    .line 0
    iget-object v0, p0, Landroidx/camera/camera2/internal/MeteringRepeatingSession$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/camera2/internal/MeteringRepeatingSession;

    invoke-virtual {v0, p1, p2}, Landroidx/camera/camera2/internal/MeteringRepeatingSession;->lambda$createSessionConfig$0$androidx-camera-camera2-internal-MeteringRepeatingSession(Landroidx/camera/core/impl/SessionConfig;Landroidx/camera/core/impl/SessionConfig$SessionError;)V

    return-void
.end method
