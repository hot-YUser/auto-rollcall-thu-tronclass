.class public final synthetic Landroidx/camera/view/CameraController$$ExternalSyntheticLambda5;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Landroidx/arch/core/util/Function;


# direct methods
.method public synthetic constructor <init>()V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public final apply(Ljava/lang/Object;)Ljava/lang/Object;
    .locals 1

    .line 0
    new-instance v0, Landroidx/camera/view/ProcessCameraProviderWrapperImpl;

    check-cast p1, Landroidx/camera/lifecycle/ProcessCameraProvider;

    invoke-direct {v0, p1}, Landroidx/camera/view/ProcessCameraProviderWrapperImpl;-><init>(Landroidx/camera/lifecycle/ProcessCameraProvider;)V

    check-cast v0, Landroidx/camera/view/ProcessCameraProviderWrapper;

    return-object v0
.end method
