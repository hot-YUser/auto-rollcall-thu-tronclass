.class public abstract Landroidx/camera/core/impl/SessionConfig$OutputConfig;
.super Ljava/lang/Object;
.source "SessionConfig.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/impl/SessionConfig;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x409
    name = "OutputConfig"
.end annotation

.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/impl/SessionConfig$OutputConfig$Builder;
    }
.end annotation


# static fields
.field public static final SURFACE_GROUP_ID_NONE:I = -0x1


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 79
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static builder(Landroidx/camera/core/impl/DeferrableSurface;)Landroidx/camera/core/impl/SessionConfig$OutputConfig$Builder;
    .locals 1

    .line 129
    new-instance v0, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig$Builder;

    invoke-direct {v0}, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig$Builder;-><init>()V

    .line 130
    invoke-virtual {v0, p0}, Landroidx/camera/core/impl/AutoValue_SessionConfig_OutputConfig$Builder;->setSurface(Landroidx/camera/core/impl/DeferrableSurface;)Landroidx/camera/core/impl/SessionConfig$OutputConfig$Builder;

    move-result-object p0

    .line 131
    invoke-static {}, Ljava/util/Collections;->emptyList()Ljava/util/List;

    move-result-object v0

    invoke-virtual {p0, v0}, Landroidx/camera/core/impl/SessionConfig$OutputConfig$Builder;->setSharedSurfaces(Ljava/util/List;)Landroidx/camera/core/impl/SessionConfig$OutputConfig$Builder;

    move-result-object p0

    const/4 v0, 0x0

    .line 132
    invoke-virtual {p0, v0}, Landroidx/camera/core/impl/SessionConfig$OutputConfig$Builder;->setPhysicalCameraId(Ljava/lang/String;)Landroidx/camera/core/impl/SessionConfig$OutputConfig$Builder;

    move-result-object p0

    const/4 v0, -0x1

    .line 133
    invoke-virtual {p0, v0}, Landroidx/camera/core/impl/SessionConfig$OutputConfig$Builder;->setSurfaceGroupId(I)Landroidx/camera/core/impl/SessionConfig$OutputConfig$Builder;

    move-result-object p0

    sget-object v0, Landroidx/camera/core/DynamicRange;->SDR:Landroidx/camera/core/DynamicRange;

    .line 134
    invoke-virtual {p0, v0}, Landroidx/camera/core/impl/SessionConfig$OutputConfig$Builder;->setDynamicRange(Landroidx/camera/core/DynamicRange;)Landroidx/camera/core/impl/SessionConfig$OutputConfig$Builder;

    move-result-object p0

    return-object p0
.end method


# virtual methods
.method public abstract getDynamicRange()Landroidx/camera/core/DynamicRange;
.end method

.method public abstract getPhysicalCameraId()Ljava/lang/String;
.end method

.method public abstract getSharedSurfaces()Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Landroidx/camera/core/impl/DeferrableSurface;",
            ">;"
        }
    .end annotation
.end method

.method public abstract getSurface()Landroidx/camera/core/impl/DeferrableSurface;
.end method

.method public abstract getSurfaceGroupId()I
.end method
