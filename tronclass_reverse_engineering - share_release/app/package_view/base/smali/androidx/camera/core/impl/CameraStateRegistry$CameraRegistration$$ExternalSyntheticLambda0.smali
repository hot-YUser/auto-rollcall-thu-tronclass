.class public final synthetic Landroidx/camera/core/impl/CameraStateRegistry$CameraRegistration$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field public final synthetic f$0:Landroidx/camera/core/impl/CameraStateRegistry$OnOpenAvailableListener;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/core/impl/CameraStateRegistry$OnOpenAvailableListener;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/core/impl/CameraStateRegistry$CameraRegistration$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/core/impl/CameraStateRegistry$OnOpenAvailableListener;

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 1

    .line 0
    iget-object v0, p0, Landroidx/camera/core/impl/CameraStateRegistry$CameraRegistration$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/core/impl/CameraStateRegistry$OnOpenAvailableListener;

    invoke-interface {v0}, Landroidx/camera/core/impl/CameraStateRegistry$OnOpenAvailableListener;->onOpenAvailable()V

    return-void
.end method
