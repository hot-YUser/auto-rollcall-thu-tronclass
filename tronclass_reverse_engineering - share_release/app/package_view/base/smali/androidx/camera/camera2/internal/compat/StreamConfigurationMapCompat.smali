.class public Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;
.super Ljava/lang/Object;
.source "StreamConfigurationMapCompat.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat$StreamConfigurationMapCompatImpl;
    }
.end annotation


# static fields
.field private static final TAG:Ljava/lang/String; = "StreamConfigurationMapCompat"


# instance fields
.field private final mCachedClassOutputSizes:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/Class<",
            "*>;[",
            "Landroid/util/Size;",
            ">;"
        }
    .end annotation
.end field

.field private final mCachedFormatHighResolutionOutputSizes:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/Integer;",
            "[",
            "Landroid/util/Size;",
            ">;"
        }
    .end annotation
.end field

.field private final mCachedFormatOutputSizes:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/Integer;",
            "[",
            "Landroid/util/Size;",
            ">;"
        }
    .end annotation
.end field

.field private final mImpl:Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat$StreamConfigurationMapCompatImpl;

.field private final mOutputSizesCorrector:Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;


# direct methods
.method private constructor <init>(Landroid/hardware/camera2/params/StreamConfigurationMap;Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;)V
    .locals 1

    .line 49
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 44
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    iput-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mCachedFormatOutputSizes:Ljava/util/Map;

    .line 45
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    iput-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mCachedFormatHighResolutionOutputSizes:Ljava/util/Map;

    .line 46
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    iput-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mCachedClassOutputSizes:Ljava/util/Map;

    .line 51
    new-instance v0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompatApi23Impl;

    invoke-direct {v0, p1}, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompatApi23Impl;-><init>(Landroid/hardware/camera2/params/StreamConfigurationMap;)V

    iput-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mImpl:Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat$StreamConfigurationMapCompatImpl;

    .line 55
    iput-object p2, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mOutputSizesCorrector:Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;

    return-void
.end method

.method static toStreamConfigurationMapCompat(Landroid/hardware/camera2/params/StreamConfigurationMap;Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;)Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;
    .locals 1

    .line 71
    new-instance v0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;

    invoke-direct {v0, p0, p1}, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;-><init>(Landroid/hardware/camera2/params/StreamConfigurationMap;Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;)V

    return-object v0
.end method


# virtual methods
.method public getHighResolutionOutputSizes(I)[Landroid/util/Size;
    .locals 3

    .line 144
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mCachedFormatHighResolutionOutputSizes:Ljava/util/Map;

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-interface {v0, v1}, Ljava/util/Map;->containsKey(Ljava/lang/Object;)Z

    move-result v0

    const/4 v1, 0x0

    if-eqz v0, :cond_1

    .line 145
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mCachedFormatHighResolutionOutputSizes:Ljava/util/Map;

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    invoke-interface {v0, v2}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Landroid/util/Size;

    if-nez v0, :cond_0

    goto :goto_0

    .line 147
    :cond_0
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mCachedFormatHighResolutionOutputSizes:Ljava/util/Map;

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    .line 146
    invoke-interface {v0, p1}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [Landroid/util/Size;

    .line 147
    invoke-virtual {p1}, [Landroid/util/Size;->clone()Ljava/lang/Object;

    move-result-object p1

    move-object v1, p1

    check-cast v1, [Landroid/util/Size;

    :goto_0
    return-object v1

    .line 150
    :cond_1
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mImpl:Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat$StreamConfigurationMapCompatImpl;

    invoke-interface {v0, p1}, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat$StreamConfigurationMapCompatImpl;->getHighResolutionOutputSizes(I)[Landroid/util/Size;

    move-result-object v0

    if-eqz v0, :cond_2

    .line 153
    array-length v2, v0

    if-lez v2, :cond_2

    .line 154
    iget-object v2, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mOutputSizesCorrector:Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;

    invoke-virtual {v2, v0, p1}, Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;->applyQuirks([Landroid/util/Size;I)[Landroid/util/Size;

    move-result-object v0

    .line 157
    :cond_2
    iget-object v2, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mCachedFormatHighResolutionOutputSizes:Ljava/util/Map;

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    invoke-interface {v2, p1, v0}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    if-eqz v0, :cond_3

    .line 158
    invoke-virtual {v0}, [Landroid/util/Size;->clone()Ljava/lang/Object;

    move-result-object p1

    move-object v1, p1

    check-cast v1, [Landroid/util/Size;

    :cond_3
    return-object v1
.end method

.method public getOutputSizes(I)[Landroid/util/Size;
    .locals 3

    .line 87
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mCachedFormatOutputSizes:Ljava/util/Map;

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-interface {v0, v1}, Ljava/util/Map;->containsKey(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 88
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mCachedFormatOutputSizes:Ljava/util/Map;

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-interface {v0, v1}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Landroid/util/Size;

    if-nez v0, :cond_0

    const/4 p1, 0x0

    goto :goto_0

    .line 89
    :cond_0
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mCachedFormatOutputSizes:Ljava/util/Map;

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    invoke-interface {v0, p1}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [Landroid/util/Size;

    invoke-virtual {p1}, [Landroid/util/Size;->clone()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [Landroid/util/Size;

    :goto_0
    return-object p1

    .line 92
    :cond_1
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mImpl:Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat$StreamConfigurationMapCompatImpl;

    invoke-interface {v0, p1}, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat$StreamConfigurationMapCompatImpl;->getOutputSizes(I)[Landroid/util/Size;

    move-result-object v0

    if-eqz v0, :cond_3

    .line 94
    array-length v1, v0

    if-nez v1, :cond_2

    goto :goto_1

    .line 99
    :cond_2
    iget-object v1, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mOutputSizesCorrector:Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;

    invoke-virtual {v1, v0, p1}, Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;->applyQuirks([Landroid/util/Size;I)[Landroid/util/Size;

    move-result-object v0

    .line 100
    iget-object v1, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mCachedFormatOutputSizes:Ljava/util/Map;

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    invoke-interface {v1, p1, v0}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 101
    invoke-virtual {v0}, [Landroid/util/Size;->clone()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [Landroid/util/Size;

    return-object p1

    .line 95
    :cond_3
    :goto_1
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Retrieved output sizes array is null or empty for format "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    const-string v1, "StreamConfigurationMapCompat"

    invoke-static {v1, p1}, Landroidx/camera/core/Logger;->w(Ljava/lang/String;Ljava/lang/String;)V

    return-object v0
.end method

.method public getOutputSizes(Ljava/lang/Class;)[Landroid/util/Size;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">(",
            "Ljava/lang/Class<",
            "TT;>;)[",
            "Landroid/util/Size;"
        }
    .end annotation

    .line 116
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mCachedClassOutputSizes:Ljava/util/Map;

    invoke-interface {v0, p1}, Ljava/util/Map;->containsKey(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 117
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mCachedClassOutputSizes:Ljava/util/Map;

    invoke-interface {v0, p1}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Landroid/util/Size;

    if-nez v0, :cond_0

    const/4 p1, 0x0

    goto :goto_0

    .line 118
    :cond_0
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mCachedClassOutputSizes:Ljava/util/Map;

    invoke-interface {v0, p1}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [Landroid/util/Size;

    invoke-virtual {p1}, [Landroid/util/Size;->clone()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [Landroid/util/Size;

    :goto_0
    return-object p1

    .line 121
    :cond_1
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mImpl:Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat$StreamConfigurationMapCompatImpl;

    invoke-interface {v0, p1}, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat$StreamConfigurationMapCompatImpl;->getOutputSizes(Ljava/lang/Class;)[Landroid/util/Size;

    move-result-object v0

    if-eqz v0, :cond_3

    .line 123
    array-length v1, v0

    if-nez v1, :cond_2

    goto :goto_1

    .line 128
    :cond_2
    iget-object v1, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mOutputSizesCorrector:Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;

    invoke-virtual {v1, v0, p1}, Landroidx/camera/camera2/internal/compat/workaround/OutputSizesCorrector;->applyQuirks([Landroid/util/Size;Ljava/lang/Class;)[Landroid/util/Size;

    move-result-object v0

    .line 129
    iget-object v1, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mCachedClassOutputSizes:Ljava/util/Map;

    invoke-interface {v1, p1, v0}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 130
    invoke-virtual {v0}, [Landroid/util/Size;->clone()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [Landroid/util/Size;

    return-object p1

    .line 124
    :cond_3
    :goto_1
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Retrieved output sizes array is null or empty for class "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    const-string v1, "StreamConfigurationMapCompat"

    invoke-static {v1, p1}, Landroidx/camera/core/Logger;->w(Ljava/lang/String;Ljava/lang/String;)V

    return-object v0
.end method

.method public toStreamConfigurationMap()Landroid/hardware/camera2/params/StreamConfigurationMap;
    .locals 1

    .line 166
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat;->mImpl:Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat$StreamConfigurationMapCompatImpl;

    invoke-interface {v0}, Landroidx/camera/camera2/internal/compat/StreamConfigurationMapCompat$StreamConfigurationMapCompatImpl;->unwrap()Landroid/hardware/camera2/params/StreamConfigurationMap;

    move-result-object v0

    return-object v0
.end method
