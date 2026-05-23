.class public final Landroidx/camera/camera2/impl/Camera2ImplConfig$Extender;
.super Ljava/lang/Object;
.source "Camera2ImplConfig.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/camera2/impl/Camera2ImplConfig;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = "Extender"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "<T:",
        "Ljava/lang/Object;",
        ">",
        "Ljava/lang/Object;"
    }
.end annotation


# instance fields
.field mBaseBuilder:Landroidx/camera/core/ExtendableBuilder;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroidx/camera/core/ExtendableBuilder<",
            "TT;>;"
        }
    .end annotation
.end field


# direct methods
.method public constructor <init>(Landroidx/camera/core/ExtendableBuilder;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/ExtendableBuilder<",
            "TT;>;)V"
        }
    .end annotation

    .line 300
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 301
    iput-object p1, p0, Landroidx/camera/camera2/impl/Camera2ImplConfig$Extender;->mBaseBuilder:Landroidx/camera/core/ExtendableBuilder;

    return-void
.end method


# virtual methods
.method public setCameraEventCallback(Landroidx/camera/camera2/impl/CameraEventCallbacks;)Landroidx/camera/camera2/impl/Camera2ImplConfig$Extender;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/camera2/impl/CameraEventCallbacks;",
            ")",
            "Landroidx/camera/camera2/impl/Camera2ImplConfig$Extender<",
            "TT;>;"
        }
    .end annotation

    .line 313
    iget-object v0, p0, Landroidx/camera/camera2/impl/Camera2ImplConfig$Extender;->mBaseBuilder:Landroidx/camera/core/ExtendableBuilder;

    invoke-interface {v0}, Landroidx/camera/core/ExtendableBuilder;->getMutableConfig()Landroidx/camera/core/impl/MutableConfig;

    move-result-object v0

    sget-object v1, Landroidx/camera/camera2/impl/Camera2ImplConfig;->CAMERA_EVENT_CALLBACK_OPTION:Landroidx/camera/core/impl/Config$Option;

    invoke-interface {v0, v1, p1}, Landroidx/camera/core/impl/MutableConfig;->insertOption(Landroidx/camera/core/impl/Config$Option;Ljava/lang/Object;)V

    return-object p0
.end method
