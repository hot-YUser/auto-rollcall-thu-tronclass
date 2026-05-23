.class final Landroidx/camera/core/impl/utils/CloseGuardHelper$CloseGuardApi30Impl;
.super Ljava/lang/Object;
.source "CloseGuardHelper.java"

# interfaces
.implements Landroidx/camera/core/impl/utils/CloseGuardHelper$CloseGuardImpl;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/impl/utils/CloseGuardHelper;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x18
    name = "CloseGuardApi30Impl"
.end annotation


# instance fields
.field private final mPlatformImpl:Landroid/util/CloseGuard;


# direct methods
.method constructor <init>()V
    .locals 1

    .line 85
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 87
    new-instance v0, Landroid/util/CloseGuard;

    invoke-direct {v0}, Landroid/util/CloseGuard;-><init>()V

    iput-object v0, p0, Landroidx/camera/core/impl/utils/CloseGuardHelper$CloseGuardApi30Impl;->mPlatformImpl:Landroid/util/CloseGuard;

    return-void
.end method


# virtual methods
.method public close()V
    .locals 1

    .line 96
    iget-object v0, p0, Landroidx/camera/core/impl/utils/CloseGuardHelper$CloseGuardApi30Impl;->mPlatformImpl:Landroid/util/CloseGuard;

    invoke-virtual {v0}, Landroid/util/CloseGuard;->close()V

    return-void
.end method

.method public open(Ljava/lang/String;)V
    .locals 1

    .line 91
    iget-object v0, p0, Landroidx/camera/core/impl/utils/CloseGuardHelper$CloseGuardApi30Impl;->mPlatformImpl:Landroid/util/CloseGuard;

    invoke-virtual {v0, p1}, Landroid/util/CloseGuard;->open(Ljava/lang/String;)V

    return-void
.end method

.method public warnIfOpen()V
    .locals 1

    .line 101
    iget-object v0, p0, Landroidx/camera/core/impl/utils/CloseGuardHelper$CloseGuardApi30Impl;->mPlatformImpl:Landroid/util/CloseGuard;

    invoke-virtual {v0}, Landroid/util/CloseGuard;->warnIfOpen()V

    return-void
.end method
