.class public Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;
.super Ljava/lang/Object;
.source "OutputSizesCorrector.java"


# static fields
.field private static final TAG:Ljava/lang/String; = "OutputSizesCorrector"


# instance fields
.field private final mCameraId:Ljava/lang/String;

.field private final mExcludedSupportedSizesContainer:Landroidx/camera/camera2/internal/compat/workaround/ExcludedSupportedSizesContainer;

.field private final mExtraSupportedOutputSizeQuirk:Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedOutputSizeQuirk;


# direct methods
.method public constructor <init>(Ljava/lang/String;)V
    .locals 1

    .line 50
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 42
    const-class v0, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedOutputSizeQuirk;

    .line 43
    invoke-static {v0}, Landroidx/camera/camera2/internal/compat/quirk/DeviceQuirks;->get(Ljava/lang/Class;)Landroidx/camera/core/impl/Quirk;

    move-result-object v0

    check-cast v0, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedOutputSizeQuirk;

    iput-object v0, p0, Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;->mExtraSupportedOutputSizeQuirk:Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedOutputSizeQuirk;

    .line 51
    iput-object p1, p0, Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;->mCameraId:Ljava/lang/String;

    .line 52
    new-instance v0, Landroidx/camera/camera2/internal/compat/workaround/ExcludedSupportedSizesContainer;

    invoke-direct {v0, p1}, Landroidx/camera/camera2/internal/compat/workaround/ExcludedSupportedSizesContainer;-><init>(Ljava/lang/String;)V

    iput-object v0, p0, Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;->mExcludedSupportedSizesContainer:Landroidx/camera/camera2/internal/compat/workaround/ExcludedSupportedSizesContainer;

    return-void
.end method

.method private addExtraSupportedOutputSizesByClass(Ljava/util/List;Ljava/lang/Class;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroid/util/Size;",
            ">;",
            "Ljava/lang/Class<",
            "*>;)V"
        }
    .end annotation

    .line 109
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;->mExtraSupportedOutputSizeQuirk:Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedOutputSizeQuirk;

    if-nez v0, :cond_0

    return-void

    .line 113
    :cond_0
    invoke-virtual {v0, p2}, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedOutputSizeQuirk;->getExtraSupportedResolutions(Ljava/lang/Class;)[Landroid/util/Size;

    move-result-object p2

    .line 115
    array-length v0, p2

    if-lez v0, :cond_1

    .line 116
    invoke-static {p2}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object p2

    invoke-interface {p1, p2}, Ljava/util/List;->addAll(Ljava/util/Collection;)Z

    :cond_1
    return-void
.end method

.method private addExtraSupportedOutputSizesByFormat(Ljava/util/List;I)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroid/util/Size;",
            ">;I)V"
        }
    .end annotation

    .line 90
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;->mExtraSupportedOutputSizeQuirk:Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedOutputSizeQuirk;

    if-nez v0, :cond_0

    return-void

    .line 94
    :cond_0
    invoke-virtual {v0, p2}, Landroidx/camera/camera2/internal/compat/quirk/ExtraSupportedOutputSizeQuirk;->getExtraSupportedResolutions(I)[Landroid/util/Size;

    move-result-object p2

    .line 96
    array-length v0, p2

    if-lez v0, :cond_1

    .line 97
    invoke-static {p2}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object p2

    invoke-interface {p1, p2}, Ljava/util/List;->addAll(Ljava/util/Collection;)Z

    :cond_1
    return-void
.end method

.method private excludeProblematicOutputSizesByClass(Ljava/util/List;Ljava/lang/Class;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroid/util/Size;",
            ">;",
            "Ljava/lang/Class<",
            "*>;)V"
        }
    .end annotation

    .line 146
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;->mExcludedSupportedSizesContainer:Landroidx/camera/camera2/internal/compat/workaround/ExcludedSupportedSizesContainer;

    invoke-virtual {v0, p2}, Landroidx/camera/camera2/internal/compat/workaround/ExcludedSupportedSizesContainer;->get(Ljava/lang/Class;)Ljava/util/List;

    move-result-object p2

    .line 148
    invoke-interface {p2}, Ljava/util/List;->isEmpty()Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 152
    :cond_0
    invoke-interface {p1, p2}, Ljava/util/List;->removeAll(Ljava/util/Collection;)Z

    return-void
.end method

.method private excludeProblematicOutputSizesByFormat(Ljava/util/List;I)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Landroid/util/Size;",
            ">;I)V"
        }
    .end annotation

    .line 128
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;->mExcludedSupportedSizesContainer:Landroidx/camera/camera2/internal/compat/workaround/ExcludedSupportedSizesContainer;

    invoke-virtual {v0, p2}, Landroidx/camera/camera2/internal/compat/workaround/ExcludedSupportedSizesContainer;->get(I)Ljava/util/List;

    move-result-object p2

    .line 130
    invoke-interface {p2}, Ljava/util/List;->isEmpty()Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 134
    :cond_0
    invoke-interface {p1, p2}, Ljava/util/List;->removeAll(Ljava/util/Collection;)Z

    return-void
.end method


# virtual methods
.method public applyQuirks([Landroid/util/Size;I)[Landroid/util/Size;
    .locals 1

    .line 60
    new-instance v0, Ljava/util/ArrayList;

    invoke-static {p1}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object p1

    invoke-direct {v0, p1}, Ljava/util/ArrayList;-><init>(Ljava/util/Collection;)V

    .line 61
    invoke-direct {p0, v0, p2}, Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;->addExtraSupportedOutputSizesByFormat(Ljava/util/List;I)V

    .line 62
    invoke-direct {p0, v0, p2}, Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;->excludeProblematicOutputSizesByFormat(Ljava/util/List;I)V

    .line 63
    invoke-interface {v0}, Ljava/util/List;->isEmpty()Z

    move-result p1

    if-eqz p1, :cond_0

    .line 64
    const-string p1, "OutputSizesCorrector"

    const-string p2, "Sizes array becomes empty after excluding problematic output sizes."

    invoke-static {p1, p2}, Landroidx/camera/core/Logger;->w(Ljava/lang/String;Ljava/lang/String;)V

    :cond_0
    const/4 p1, 0x0

    .line 66
    new-array p1, p1, [Landroid/util/Size;

    invoke-interface {v0, p1}, Ljava/util/List;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [Landroid/util/Size;

    return-object p1
.end method

.method public applyQuirks([Landroid/util/Size;Ljava/lang/Class;)[Landroid/util/Size;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">([",
            "Landroid/util/Size;",
            "Ljava/lang/Class<",
            "TT;>;)[",
            "Landroid/util/Size;"
        }
    .end annotation

    .line 74
    new-instance v0, Ljava/util/ArrayList;

    invoke-static {p1}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object p1

    invoke-direct {v0, p1}, Ljava/util/ArrayList;-><init>(Ljava/util/Collection;)V

    .line 75
    invoke-direct {p0, v0, p2}, Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;->addExtraSupportedOutputSizesByClass(Ljava/util/List;Ljava/lang/Class;)V

    .line 76
    invoke-direct {p0, v0, p2}, Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;->excludeProblematicOutputSizesByClass(Ljava/util/List;Ljava/lang/Class;)V

    .line 77
    invoke-interface {v0}, Ljava/util/List;->isEmpty()Z

    move-result p1

    if-eqz p1, :cond_0

    .line 78
    const-string p1, "OutputSizesCorrector"

    const-string p2, "Sizes array becomes empty after excluding problematic output sizes."

    invoke-static {p1, p2}, Landroidx/camera/core/Logger;->w(Ljava/lang/String;Ljava/lang/String;)V

    :cond_0
    const/4 p1, 0x0

    .line 80
    new-array p1, p1, [Landroid/util/Size;

    invoke-interface {v0, p1}, Ljava/util/List;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [Landroid/util/Size;

    return-object p1
.end method
