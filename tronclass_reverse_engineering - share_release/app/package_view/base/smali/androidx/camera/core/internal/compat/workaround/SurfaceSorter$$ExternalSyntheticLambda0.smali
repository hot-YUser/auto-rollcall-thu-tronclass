.class public final synthetic Landroidx/camera/core/internal/compat/workaround/SurfaceSorter$$ExternalSyntheticLambda0;
.super Ljava/lang/Object;
.source "D8$$SyntheticClass"

# interfaces
.implements Ljava/util/Comparator;


# instance fields
.field public final synthetic f$0:Landroidx/camera/core/internal/compat/workaround/SurfaceSorter;


# direct methods
.method public synthetic constructor <init>(Landroidx/camera/core/internal/compat/workaround/SurfaceSorter;)V
    .locals 0

    .line 0
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Landroidx/camera/core/internal/compat/workaround/SurfaceSorter$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/core/internal/compat/workaround/SurfaceSorter;

    return-void
.end method


# virtual methods
.method public final compare(Ljava/lang/Object;Ljava/lang/Object;)I
    .locals 1

    .line 0
    iget-object v0, p0, Landroidx/camera/core/internal/compat/workaround/SurfaceSorter$$ExternalSyntheticLambda0;->f$0:Landroidx/camera/core/internal/compat/workaround/SurfaceSorter;

    check-cast p1, Landroidx/camera/core/impl/SessionConfig$OutputConfig;

    check-cast p2, Landroidx/camera/core/impl/SessionConfig$OutputConfig;

    invoke-virtual {v0, p1, p2}, Landroidx/camera/core/internal/compat/workaround/SurfaceSorter;->lambda$sort$0$androidx-camera-core-internal-compat-workaround-SurfaceSorter(Landroidx/camera/core/impl/SessionConfig$OutputConfig;Landroidx/camera/core/impl/SessionConfig$OutputConfig;)I

    move-result p1

    return p1
.end method
