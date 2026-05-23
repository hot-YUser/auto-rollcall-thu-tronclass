.class final Landroidx/camera/core/impl/UseCaseAttachState$UseCaseAttachInfo;
.super Ljava/lang/Object;
.source "UseCaseAttachState.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/impl/UseCaseAttachState;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x1a
    name = "UseCaseAttachInfo"
.end annotation


# instance fields
.field private mActive:Z

.field private mAttached:Z

.field private final mSessionConfig:Landroidx/camera/core/impl/SessionConfig;

.field private final mUseCaseConfig:Landroidx/camera/core/impl/UseCaseConfig;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroidx/camera/core/impl/UseCaseConfig<",
            "*>;"
        }
    .end annotation
.end field


# direct methods
.method constructor <init>(Landroidx/camera/core/impl/SessionConfig;Landroidx/camera/core/impl/UseCaseConfig;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/impl/SessionConfig;",
            "Landroidx/camera/core/impl/UseCaseConfig<",
            "*>;)V"
        }
    .end annotation

    .line 270
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 261
    iput-boolean v0, p0, Landroidx/camera/core/impl/UseCaseAttachState$UseCaseAttachInfo;->mAttached:Z

    .line 267
    iput-boolean v0, p0, Landroidx/camera/core/impl/UseCaseAttachState$UseCaseAttachInfo;->mActive:Z

    .line 271
    iput-object p1, p0, Landroidx/camera/core/impl/UseCaseAttachState$UseCaseAttachInfo;->mSessionConfig:Landroidx/camera/core/impl/SessionConfig;

    .line 272
    iput-object p2, p0, Landroidx/camera/core/impl/UseCaseAttachState$UseCaseAttachInfo;->mUseCaseConfig:Landroidx/camera/core/impl/UseCaseConfig;

    return-void
.end method


# virtual methods
.method getActive()Z
    .locals 1

    .line 294
    iget-boolean v0, p0, Landroidx/camera/core/impl/UseCaseAttachState$UseCaseAttachInfo;->mActive:Z

    return v0
.end method

.method getAttached()Z
    .locals 1

    .line 286
    iget-boolean v0, p0, Landroidx/camera/core/impl/UseCaseAttachState$UseCaseAttachInfo;->mAttached:Z

    return v0
.end method

.method getSessionConfig()Landroidx/camera/core/impl/SessionConfig;
    .locals 1

    .line 282
    iget-object v0, p0, Landroidx/camera/core/impl/UseCaseAttachState$UseCaseAttachInfo;->mSessionConfig:Landroidx/camera/core/impl/SessionConfig;

    return-object v0
.end method

.method getUseCaseConfig()Landroidx/camera/core/impl/UseCaseConfig;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroidx/camera/core/impl/UseCaseConfig<",
            "*>;"
        }
    .end annotation

    .line 277
    iget-object v0, p0, Landroidx/camera/core/impl/UseCaseAttachState$UseCaseAttachInfo;->mUseCaseConfig:Landroidx/camera/core/impl/UseCaseConfig;

    return-object v0
.end method

.method setActive(Z)V
    .locals 0

    .line 298
    iput-boolean p1, p0, Landroidx/camera/core/impl/UseCaseAttachState$UseCaseAttachInfo;->mActive:Z

    return-void
.end method

.method setAttached(Z)V
    .locals 0

    .line 290
    iput-boolean p1, p0, Landroidx/camera/core/impl/UseCaseAttachState$UseCaseAttachInfo;->mAttached:Z

    return-void
.end method
