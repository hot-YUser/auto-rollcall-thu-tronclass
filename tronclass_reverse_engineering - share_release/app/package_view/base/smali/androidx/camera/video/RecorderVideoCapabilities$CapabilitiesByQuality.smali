.class Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;
.super Ljava/lang/Object;
.source "RecorderVideoCapabilities.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/RecorderVideoCapabilities;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x8
    name = "CapabilitiesByQuality"
.end annotation


# instance fields
.field private final mAreaSortedSizeToQualityMap:Ljava/util/TreeMap;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/TreeMap<",
            "Landroid/util/Size;",
            "Landroidx/camera/video/Quality;",
            ">;"
        }
    .end annotation
.end field

.field private final mHighestProfiles:Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;

.field private final mLowestProfiles:Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;

.field private final mSupportedProfilesMap:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Landroidx/camera/video/Quality;",
            "Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method constructor <init>(Landroidx/camera/core/impl/EncoderProfilesProvider;)V
    .locals 6

    .line 315
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 308
    new-instance v0, Ljava/util/LinkedHashMap;

    invoke-direct {v0}, Ljava/util/LinkedHashMap;-><init>()V

    iput-object v0, p0, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->mSupportedProfilesMap:Ljava/util/Map;

    .line 310
    new-instance v0, Ljava/util/TreeMap;

    new-instance v1, Landroidx/camera/core/impl/utils/CompareSizesByArea;

    invoke-direct {v1}, Landroidx/camera/core/impl/utils/CompareSizesByArea;-><init>()V

    invoke-direct {v0, v1}, Ljava/util/TreeMap;-><init>(Ljava/util/Comparator;)V

    iput-object v0, p0, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->mAreaSortedSizeToQualityMap:Ljava/util/TreeMap;

    .line 317
    invoke-static {}, Landroidx/camera/video/Quality;->getSortedQualities()Ljava/util/List;

    move-result-object v0

    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    const-string v2, "RecorderVideoCapabilities"

    if-eqz v1, :cond_2

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Landroidx/camera/video/Quality;

    .line 318
    invoke-direct {p0, v1, p1}, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->getEncoderProfiles(Landroidx/camera/video/Quality;Landroidx/camera/core/impl/EncoderProfilesProvider;)Landroidx/camera/core/impl/EncoderProfilesProxy;

    move-result-object v3

    if-nez v3, :cond_0

    goto :goto_0

    .line 324
    :cond_0
    new-instance v4, Ljava/lang/StringBuilder;

    const-string v5, "profiles = "

    invoke-direct {v4, v5}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v4, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v4

    invoke-static {v2, v4}, Landroidx/camera/core/Logger;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 325
    invoke-direct {p0, v3}, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->toValidatedProfiles(Landroidx/camera/core/impl/EncoderProfilesProxy;)Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;

    move-result-object v3

    if-nez v3, :cond_1

    .line 328
    new-instance v3, Ljava/lang/StringBuilder;

    const-string v4, "EncoderProfiles of quality "

    invoke-direct {v3, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v3, " has no video validated profiles."

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v2, v1}, Landroidx/camera/core/Logger;->w(Ljava/lang/String;Ljava/lang/String;)V

    goto :goto_0

    .line 334
    :cond_1
    invoke-virtual {v3}, Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;->getDefaultVideoProfile()Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;

    move-result-object v2

    .line 335
    new-instance v4, Landroid/util/Size;

    invoke-virtual {v2}, Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;->getWidth()I

    move-result v5

    invoke-virtual {v2}, Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;->getHeight()I

    move-result v2

    invoke-direct {v4, v5, v2}, Landroid/util/Size;-><init>(II)V

    .line 336
    iget-object v2, p0, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->mAreaSortedSizeToQualityMap:Ljava/util/TreeMap;

    invoke-virtual {v2, v4, v1}, Ljava/util/TreeMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 339
    iget-object v2, p0, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->mSupportedProfilesMap:Ljava/util/Map;

    invoke-interface {v2, v1, v3}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    goto :goto_0

    .line 341
    :cond_2
    iget-object p1, p0, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->mSupportedProfilesMap:Ljava/util/Map;

    invoke-interface {p1}, Ljava/util/Map;->isEmpty()Z

    move-result p1

    if-eqz p1, :cond_3

    .line 342
    const-string p1, "No supported EncoderProfiles"

    invoke-static {v2, p1}, Landroidx/camera/core/Logger;->e(Ljava/lang/String;Ljava/lang/String;)V

    const/4 p1, 0x0

    .line 343
    iput-object p1, p0, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->mLowestProfiles:Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;

    .line 344
    iput-object p1, p0, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->mHighestProfiles:Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;

    goto :goto_1

    .line 346
    :cond_3
    new-instance p1, Ljava/util/ArrayDeque;

    iget-object v0, p0, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->mSupportedProfilesMap:Ljava/util/Map;

    .line 347
    invoke-interface {v0}, Ljava/util/Map;->values()Ljava/util/Collection;

    move-result-object v0

    invoke-direct {p1, v0}, Ljava/util/ArrayDeque;-><init>(Ljava/util/Collection;)V

    .line 348
    invoke-interface {p1}, Ljava/util/Deque;->peekFirst()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;

    iput-object v0, p0, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->mHighestProfiles:Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;

    .line 349
    invoke-interface {p1}, Ljava/util/Deque;->peekLast()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;

    iput-object p1, p0, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->mLowestProfiles:Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;

    :goto_1
    return-void
.end method

.method private static checkQualityConstantsOrThrow(Landroidx/camera/video/Quality;)V
    .locals 3

    .line 436
    invoke-static {p0}, Landroidx/camera/video/Quality;->containsQuality(Landroidx/camera/video/Quality;)Z

    move-result v0

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Unknown quality: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-static {v0, p0}, Landroidx/core/util/Preconditions;->checkArgument(ZLjava/lang/Object;)V

    return-void
.end method

.method private getEncoderProfiles(Landroidx/camera/video/Quality;Landroidx/camera/core/impl/EncoderProfilesProvider;)Landroidx/camera/core/impl/EncoderProfilesProxy;
    .locals 2

    .line 415
    instance-of v0, p1, Landroidx/camera/video/Quality$ConstantQuality;

    const-string v1, "Currently only support ConstantQuality"

    invoke-static {v0, v1}, Landroidx/core/util/Preconditions;->checkState(ZLjava/lang/String;)V

    .line 417
    check-cast p1, Landroidx/camera/video/Quality$ConstantQuality;

    invoke-virtual {p1}, Landroidx/camera/video/Quality$ConstantQuality;->getValue()I

    move-result p1

    .line 419
    invoke-interface {p2, p1}, Landroidx/camera/core/impl/EncoderProfilesProvider;->getAll(I)Landroidx/camera/core/impl/EncoderProfilesProxy;

    move-result-object p1

    return-object p1
.end method

.method private toValidatedProfiles(Landroidx/camera/core/impl/EncoderProfilesProxy;)Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;
    .locals 1

    .line 427
    invoke-interface {p1}, Landroidx/camera/core/impl/EncoderProfilesProxy;->getVideoProfiles()Ljava/util/List;

    move-result-object v0

    .line 428
    invoke-interface {v0}, Ljava/util/List;->isEmpty()Z

    move-result v0

    if-eqz v0, :cond_0

    const/4 p1, 0x0

    return-object p1

    .line 432
    :cond_0
    invoke-static {p1}, Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;->from(Landroidx/camera/core/impl/EncoderProfilesProxy;)Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;

    move-result-object p1

    return-object p1
.end method


# virtual methods
.method public findHighestSupportedEncoderProfilesFor(Landroid/util/Size;)Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;
    .locals 3

    .line 378
    invoke-virtual {p0, p1}, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->findHighestSupportedQualityFor(Landroid/util/Size;)Landroidx/camera/video/Quality;

    move-result-object v0

    .line 379
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Using supported quality of "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, " for size "

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    const-string v1, "RecorderVideoCapabilities"

    invoke-static {v1, p1}, Landroidx/camera/core/Logger;->d(Ljava/lang/String;Ljava/lang/String;)V

    .line 381
    sget-object p1, Landroidx/camera/video/Quality;->NONE:Landroidx/camera/video/Quality;

    if-eq v0, p1, :cond_1

    .line 382
    invoke-virtual {p0, v0}, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->getProfiles(Landroidx/camera/video/Quality;)Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;

    move-result-object p1

    if-eqz p1, :cond_0

    goto :goto_0

    .line 384
    :cond_0
    new-instance p1, Ljava/lang/AssertionError;

    const-string v0, "Camera advertised available quality but did not produce EncoderProfiles for advertised quality."

    invoke-direct {p1, v0}, Ljava/lang/AssertionError;-><init>(Ljava/lang/Object;)V

    throw p1

    :cond_1
    const/4 p1, 0x0

    :goto_0
    return-object p1
.end method

.method public findHighestSupportedQualityFor(Landroid/util/Size;)Landroidx/camera/video/Quality;
    .locals 1

    .line 393
    iget-object v0, p0, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->mAreaSortedSizeToQualityMap:Ljava/util/TreeMap;

    invoke-virtual {v0, p1}, Ljava/util/TreeMap;->ceilingEntry(Ljava/lang/Object;)Ljava/util/Map$Entry;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 398
    invoke-interface {v0}, Ljava/util/Map$Entry;->getValue()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroidx/camera/video/Quality;

    return-object p1

    .line 402
    :cond_0
    iget-object v0, p0, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->mAreaSortedSizeToQualityMap:Ljava/util/TreeMap;

    invoke-virtual {v0, p1}, Ljava/util/TreeMap;->floorEntry(Ljava/lang/Object;)Ljava/util/Map$Entry;

    move-result-object p1

    if-eqz p1, :cond_1

    .line 404
    invoke-interface {p1}, Ljava/util/Map$Entry;->getValue()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroidx/camera/video/Quality;

    return-object p1

    .line 409
    :cond_1
    sget-object p1, Landroidx/camera/video/Quality;->NONE:Landroidx/camera/video/Quality;

    return-object p1
.end method

.method public getProfiles(Landroidx/camera/video/Quality;)Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;
    .locals 1

    .line 365
    invoke-static {p1}, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->checkQualityConstantsOrThrow(Landroidx/camera/video/Quality;)V

    .line 366
    sget-object v0, Landroidx/camera/video/Quality;->HIGHEST:Landroidx/camera/video/Quality;

    if-ne p1, v0, :cond_0

    .line 367
    iget-object p1, p0, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->mHighestProfiles:Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;

    return-object p1

    .line 368
    :cond_0
    sget-object v0, Landroidx/camera/video/Quality;->LOWEST:Landroidx/camera/video/Quality;

    if-ne p1, v0, :cond_1

    .line 369
    iget-object p1, p0, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->mLowestProfiles:Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;

    return-object p1

    .line 371
    :cond_1
    iget-object v0, p0, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->mSupportedProfilesMap:Ljava/util/Map;

    invoke-interface {v0, p1}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;

    return-object p1
.end method

.method public getSupportedQualities()Ljava/util/List;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Landroidx/camera/video/Quality;",
            ">;"
        }
    .end annotation

    .line 355
    new-instance v0, Ljava/util/ArrayList;

    iget-object v1, p0, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->mSupportedProfilesMap:Ljava/util/Map;

    invoke-interface {v1}, Ljava/util/Map;->keySet()Ljava/util/Set;

    move-result-object v1

    invoke-direct {v0, v1}, Ljava/util/ArrayList;-><init>(Ljava/util/Collection;)V

    return-object v0
.end method

.method public isQualitySupported(Landroidx/camera/video/Quality;)Z
    .locals 0

    .line 359
    invoke-static {p1}, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->checkQualityConstantsOrThrow(Landroidx/camera/video/Quality;)V

    .line 360
    invoke-virtual {p0, p1}, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->getProfiles(Landroidx/camera/video/Quality;)Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;

    move-result-object p1

    if-eqz p1, :cond_0

    const/4 p1, 0x1

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    :goto_0
    return p1
.end method
