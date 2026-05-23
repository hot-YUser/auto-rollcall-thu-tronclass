.class public Landroidx/camera/core/processing/DefaultSurfaceProcessor$Factory;
.super Ljava/lang/Object;
.source "DefaultSurfaceProcessor.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/processing/DefaultSurfaceProcessor;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "Factory"
.end annotation


# static fields
.field private static sSupplier:Landroidx/arch/core/util/Function;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroidx/arch/core/util/Function<",
            "Landroidx/camera/core/DynamicRange;",
            "Landroidx/camera/core/processing/SurfaceProcessorInternal;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 435
    new-instance v0, Landroidx/camera/core/processing/DefaultSurfaceProcessor$Factory$$ExternalSyntheticLambda0;

    invoke-direct {v0}, Landroidx/camera/core/processing/DefaultSurfaceProcessor$Factory$$ExternalSyntheticLambda0;-><init>()V

    sput-object v0, Landroidx/camera/core/processing/DefaultSurfaceProcessor$Factory;->sSupplier:Landroidx/arch/core/util/Function;

    return-void
.end method

.method private constructor <init>()V
    .locals 0

    .line 432
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static newInstance(Landroidx/camera/core/DynamicRange;)Landroidx/camera/core/processing/SurfaceProcessorInternal;
    .locals 1

    .line 443
    sget-object v0, Landroidx/camera/core/processing/DefaultSurfaceProcessor$Factory;->sSupplier:Landroidx/arch/core/util/Function;

    invoke-interface {v0, p0}, Landroidx/arch/core/util/Function;->apply(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p0

    check-cast p0, Landroidx/camera/core/processing/SurfaceProcessorInternal;

    return-object p0
.end method

.method public static setSupplier(Landroidx/arch/core/util/Function;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/arch/core/util/Function<",
            "Landroidx/camera/core/DynamicRange;",
            "Landroidx/camera/core/processing/SurfaceProcessorInternal;",
            ">;)V"
        }
    .end annotation

    .line 452
    sput-object p0, Landroidx/camera/core/processing/DefaultSurfaceProcessor$Factory;->sSupplier:Landroidx/arch/core/util/Function;

    return-void
.end method
