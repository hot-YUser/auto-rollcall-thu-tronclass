.class public final synthetic Landroidx/camera/view/RotationProvider$ListenerWrapper$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field public final synthetic f$0:Landroidx/camera/view/RotationProvider$ListenerWrapper;

.field public final synthetic f$1:I


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/view/RotationProvider$ListenerWrapper;I)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/view/RotationProvider$ListenerWrapper$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/view/RotationProvider$ListenerWrapper;

    iput p2, p0, Landroidx/camera/view/RotationProvider$ListenerWrapper$$ExternalSyntheticLambda0;->f$1:I

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 2

    .line 0
    iget-object v0, p0, Landroidx/camera/view/RotationProvider$ListenerWrapper$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/view/RotationProvider$ListenerWrapper;

    iget v1, p0, Landroidx/camera/view/RotationProvider$ListenerWrapper$$ExternalSyntheticLambda0;->f$1:I

    invoke-virtual {v0, v1}, Landroidx/camera/view/RotationProvider$ListenerWrapper;->lambda$onRotationChanged$0$androidx-camera-view-RotationProvider$ListenerWrapper(I)V

    return-void
.end method
