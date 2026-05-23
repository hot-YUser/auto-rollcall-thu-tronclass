.class public final Landroidx/camera/core/UseCaseGroup$Builder;
.super Ljava/lang/Object;
.source "UseCaseGroup.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/UseCaseGroup;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = "Builder"
.end annotation


# static fields
.field private static final SUPPORTED_TARGETS:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation
.end field


# instance fields
.field private final mEffects:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Landroidx/camera/core/CameraEffect;",
            ">;"
        }
    .end annotation
.end field

.field private final mUseCases:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Landroidx/camera/core/UseCase;",
            ">;"
        }
    .end annotation
.end field

.field private mViewPort:Landroidx/camera/core/ViewPort;


# direct methods
.method static constructor <clinit>()V
    .locals 4

    const/4 v0, 0x5

    .line 90
    new-array v0, v0, [Ljava/lang/Integer;

    const/4 v1, 0x1

    .line 91
    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    const/4 v3, 0x0

    aput-object v2, v0, v3

    const/4 v2, 0x2

    .line 92
    invoke-static {v2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v3

    aput-object v3, v0, v1

    const/4 v1, 0x4

    .line 93
    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v3

    aput-object v3, v0, v2

    const/4 v2, 0x3

    .line 94
    invoke-static {v2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v3

    aput-object v3, v0, v2

    const/4 v2, 0x7

    .line 95
    invoke-static {v2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    aput-object v2, v0, v1

    .line 90
    invoke-static {v0}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v0

    sput-object v0, Landroidx/camera/core/UseCaseGroup$Builder;->SUPPORTED_TARGETS:Ljava/util/List;

    return-void
.end method

.method public constructor <init>()V
    .locals 1

    .line 102
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 103
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    iput-object v0, p0, Landroidx/camera/core/UseCaseGroup$Builder;->mUseCases:Ljava/util/List;

    .line 104
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    iput-object v0, p0, Landroidx/camera/core/UseCaseGroup$Builder;->mEffects:Ljava/util/List;

    return-void
.end method

.method private checkEffectTargets()V
    .locals 4

    .line 153
    iget-object v0, p0, Landroidx/camera/core/UseCaseGroup$Builder;->mEffects:Ljava/util/List;

    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    const/4 v1, 0x0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_1

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Landroidx/camera/core/CameraEffect;

    .line 154
    invoke-virtual {v2}, Landroidx/camera/core/CameraEffect;->getTargets()I

    move-result v2

    .line 155
    sget-object v3, Landroidx/camera/core/UseCaseGroup$Builder;->SUPPORTED_TARGETS:Ljava/util/List;

    invoke-static {v3, v2}, Landroidx/camera/core/processing/TargetUtils;->checkSupportedTargets(Ljava/util/Collection;I)V

    and-int v3, v1, v2

    if-gtz v3, :cond_0

    or-int/2addr v1, v2

    goto :goto_0

    .line 158
    :cond_0
    new-instance v0, Ljava/lang/IllegalArgumentException;

    sget-object v1, Ljava/util/Locale;->US:Ljava/util/Locale;

    .line 160
    invoke-static {v3}, Landroidx/camera/core/processing/TargetUtils;->getHumanReadableName(I)Ljava/lang/String;

    move-result-object v2

    filled-new-array {v2}, [Ljava/lang/Object;

    move-result-object v2

    .line 158
    const-string v3, "More than one effects has targets %s."

    invoke-static {v1, v3, v2}, Ljava/lang/String;->format(Ljava/util/Locale;Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v1

    invoke-direct {v0, v1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw v0

    :cond_1
    return-void
.end method


# virtual methods
.method public addEffect(Landroidx/camera/core/CameraEffect;)Landroidx/camera/core/UseCaseGroup$Builder;
    .locals 1

    .line 141
    iget-object v0, p0, Landroidx/camera/core/UseCaseGroup$Builder;->mEffects:Ljava/util/List;

    invoke-interface {v0, p1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    return-object p0
.end method

.method public addUseCase(Landroidx/camera/core/UseCase;)Landroidx/camera/core/UseCaseGroup$Builder;
    .locals 1

    .line 172
    iget-object v0, p0, Landroidx/camera/core/UseCaseGroup$Builder;->mUseCases:Ljava/util/List;

    invoke-interface {v0, p1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    return-object p0
.end method

.method public build()Landroidx/camera/core/UseCaseGroup;
    .locals 4

    .line 181
    iget-object v0, p0, Landroidx/camera/core/UseCaseGroup$Builder;->mUseCases:Ljava/util/List;

    invoke-interface {v0}, Ljava/util/List;->isEmpty()Z

    move-result v0

    xor-int/lit8 v0, v0, 0x1

    const-string v1, "UseCase must not be empty."

    invoke-static {v0, v1}, Landroidx/core/util/Preconditions;->checkArgument(ZLjava/lang/Object;)V

    .line 182
    invoke-direct {p0}, Landroidx/camera/core/UseCaseGroup$Builder;->checkEffectTargets()V

    .line 183
    new-instance v0, Landroidx/camera/core/UseCaseGroup;

    iget-object v1, p0, Landroidx/camera/core/UseCaseGroup$Builder;->mViewPort:Landroidx/camera/core/ViewPort;

    iget-object v2, p0, Landroidx/camera/core/UseCaseGroup$Builder;->mUseCases:Ljava/util/List;

    iget-object v3, p0, Landroidx/camera/core/UseCaseGroup$Builder;->mEffects:Ljava/util/List;

    invoke-direct {v0, v1, v2, v3}, Landroidx/camera/core/UseCaseGroup;-><init>(Landroidx/camera/core/ViewPort;Ljava/util/List;Ljava/util/List;)V

    return-object v0
.end method

.method public setViewPort(Landroidx/camera/core/ViewPort;)Landroidx/camera/core/UseCaseGroup$Builder;
    .locals 0

    .line 112
    iput-object p1, p0, Landroidx/camera/core/UseCaseGroup$Builder;->mViewPort:Landroidx/camera/core/ViewPort;

    return-object p0
.end method
