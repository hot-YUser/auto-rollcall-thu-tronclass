.class public Landroidx/camera/core/ConcurrentCamera;
.super Ljava/lang/Object;
.source "ConcurrentCamera.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/ConcurrentCamera$SingleCameraConfig;
    }
.end annotation


# instance fields
.field private mCameras:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Landroidx/camera/core/Camera;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method public constructor <init>(Ljava/util/List;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroidx/camera/core/Camera;",
            ">;)V"
        }
    .end annotation

    .line 54
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 55
    iput-object p1, p0, Landroidx/camera/core/ConcurrentCamera;->mCameras:Ljava/util/List;

    return-void
.end method


# virtual methods
.method public getCameras()Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Landroidx/camera/core/Camera;",
            ">;"
        }
    .end annotation

    .line 63
    iget-object v0, p0, Landroidx/camera/core/ConcurrentCamera;->mCameras:Ljava/util/List;

    return-object v0
.end method
