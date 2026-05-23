.class public abstract Landroidx/camera/core/CameraState$StateError;
.super Ljava/lang/Object;
.source "CameraState.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/CameraState;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x409
    name = "StateError"
.end annotation


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 444
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static create(I)Landroidx/camera/core/CameraState$StateError;
    .locals 1

    const/4 v0, 0x0

    .line 453
    invoke-static {p0, v0}, Landroidx/camera/core/CameraState$StateError;->create(ILjava/lang/Throwable;)Landroidx/camera/core/CameraState$StateError;

    move-result-object p0

    return-object p0
.end method

.method public static create(ILjava/lang/Throwable;)Landroidx/camera/core/CameraState$StateError;
    .locals 1

    .line 463
    new-instance v0, Landroidx/camera/core/AutoValue_CameraState_StateError;

    invoke-direct {v0, p0, p1}, Landroidx/camera/core/AutoValue_CameraState_StateError;-><init>(ILjava/lang/Throwable;)V

    return-object v0
.end method


# virtual methods
.method public abstract getCause()Ljava/lang/Throwable;
.end method

.method public abstract getCode()I
.end method

.method public getType()Landroidx/camera/core/CameraState$ErrorType;
    .locals 2

    .line 497
    invoke-virtual {p0}, Landroidx/camera/core/CameraState$StateError;->getCode()I

    move-result v0

    const/4 v1, 0x2

    if-eq v0, v1, :cond_1

    const/4 v1, 0x1

    if-eq v0, v1, :cond_1

    const/4 v1, 0x3

    if-ne v0, v1, :cond_0

    goto :goto_0

    .line 502
    :cond_0
    sget-object v0, Landroidx/camera/core/CameraState$ErrorType;->CRITICAL:Landroidx/camera/core/CameraState$ErrorType;

    return-object v0

    .line 500
    :cond_1
    :goto_0
    sget-object v0, Landroidx/camera/core/CameraState$ErrorType;->RECOVERABLE:Landroidx/camera/core/CameraState$ErrorType;

    return-object v0
.end method
