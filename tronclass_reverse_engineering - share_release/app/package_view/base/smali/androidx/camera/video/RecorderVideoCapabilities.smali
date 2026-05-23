.class public final Landroidx/camera/video/RecorderVideoCapabilities;
.super Ljava/lang/Object;
.source "RecorderVideoCapabilities.java"

# interfaces
.implements Landroidx/camera/video/VideoCapabilities;


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;
    }
.end annotation


# static fields
.field private static final TAG:Ljava/lang/String; = "RecorderVideoCapabilities"


# instance fields
.field private final mCapabilitiesMapForFullySpecifiedDynamicRange:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Landroidx/camera/core/DynamicRange;",
            "Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;",
            ">;"
        }
    .end annotation
.end field

.field private final mCapabilitiesMapForNonFullySpecifiedDynamicRange:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Landroidx/camera/core/DynamicRange;",
            "Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;",
            ">;"
        }
    .end annotation
.end field

.field private final mProfilesProvider:Landroidx/camera/core/impl/EncoderProfilesProvider;


# direct methods
.method constructor <init>(Landroidx/camera/core/impl/CameraInfoInternal;Landroidx/arch/core/util/Function;)V
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/impl/CameraInfoInternal;",
            "Landroidx/arch/core/util/Function<",
            "Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;",
            "Landroidx/camera/core/impl/EncoderProfilesProxy$VideoProfileProxy;",
            ">;)V"
        }
    .end annotation

    .line 100
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 84
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    iput-object v0, p0, Landroidx/camera/video/RecorderVideoCapabilities;->mCapabilitiesMapForFullySpecifiedDynamicRange:Ljava/util/Map;

    .line 86
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    iput-object v0, p0, Landroidx/camera/video/RecorderVideoCapabilities;->mCapabilitiesMapForNonFullySpecifiedDynamicRange:Ljava/util/Map;

    .line 102
    invoke-interface {p1}, Landroidx/camera/core/impl/CameraInfoInternal;->getEncoderProfilesProvider()Landroidx/camera/core/impl/EncoderProfilesProvider;

    move-result-object v0

    .line 105
    invoke-static {p1}, Landroidx/camera/video/RecorderVideoCapabilities;->isHlg10SupportedByCamera(Landroidx/camera/core/impl/CameraInfoInternal;)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 106
    new-instance v1, Landroidx/camera/video/internal/BackupHdrProfileEncoderProfilesProvider;

    invoke-direct {v1, v0, p2}, Landroidx/camera/video/internal/BackupHdrProfileEncoderProfilesProvider;-><init>(Landroidx/camera/core/impl/EncoderProfilesProvider;Landroidx/arch/core/util/Function;)V

    move-object v0, v1

    .line 111
    :cond_0
    invoke-interface {p1}, Landroidx/camera/core/impl/CameraInfoInternal;->getCameraQuirks()Landroidx/camera/core/impl/Quirks;

    move-result-object p2

    .line 112
    new-instance v1, Landroidx/camera/core/impl/ResolutionValidatedEncoderProfilesProvider;

    invoke-direct {v1, v0, p2}, Landroidx/camera/core/impl/ResolutionValidatedEncoderProfilesProvider;-><init>(Landroidx/camera/core/impl/EncoderProfilesProvider;Landroidx/camera/core/impl/Quirks;)V

    .line 116
    invoke-static {}, Landroidx/camera/video/internal/compat/quirk/DeviceQuirks;->getAll()Landroidx/camera/core/impl/Quirks;

    move-result-object p2

    .line 117
    new-instance v0, Landroidx/camera/video/internal/workaround/QualityValidatedEncoderProfilesProvider;

    invoke-direct {v0, v1, p1, p2}, Landroidx/camera/video/internal/workaround/QualityValidatedEncoderProfilesProvider;-><init>(Landroidx/camera/core/impl/EncoderProfilesProvider;Landroidx/camera/core/impl/CameraInfoInternal;Landroidx/camera/core/impl/Quirks;)V

    .line 119
    iput-object v0, p0, Landroidx/camera/video/RecorderVideoCapabilities;->mProfilesProvider:Landroidx/camera/core/impl/EncoderProfilesProvider;

    .line 122
    invoke-interface {p1}, Landroidx/camera/core/impl/CameraInfoInternal;->getSupportedDynamicRanges()Ljava/util/Set;

    move-result-object p1

    invoke-interface {p1}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :cond_1
    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result p2

    if-eqz p2, :cond_2

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object p2

    check-cast p2, Landroidx/camera/core/DynamicRange;

    .line 125
    new-instance v0, Landroidx/camera/video/internal/DynamicRangeMatchedEncoderProfilesProvider;

    iget-object v1, p0, Landroidx/camera/video/RecorderVideoCapabilities;->mProfilesProvider:Landroidx/camera/core/impl/EncoderProfilesProvider;

    invoke-direct {v0, v1, p2}, Landroidx/camera/video/internal/DynamicRangeMatchedEncoderProfilesProvider;-><init>(Landroidx/camera/core/impl/EncoderProfilesProvider;Landroidx/camera/core/DynamicRange;)V

    .line 127
    new-instance v1, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;

    invoke-direct {v1, v0}, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;-><init>(Landroidx/camera/core/impl/EncoderProfilesProvider;)V

    .line 129
    invoke-virtual {v1}, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->getSupportedQualities()Ljava/util/List;

    move-result-object v0

    invoke-interface {v0}, Ljava/util/List;->isEmpty()Z

    move-result v0

    if-nez v0, :cond_1

    .line 130
    iget-object v0, p0, Landroidx/camera/video/RecorderVideoCapabilities;->mCapabilitiesMapForFullySpecifiedDynamicRange:Ljava/util/Map;

    invoke-interface {v0, p2, v1}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    goto :goto_0

    :cond_2
    return-void
.end method

.method private static canMatchBitDepth(Landroidx/camera/core/DynamicRange;Landroidx/camera/core/DynamicRange;)Z
    .locals 2

    .line 266
    invoke-static {p1}, Landroidx/camera/video/RecorderVideoCapabilities;->isFullySpecified(Landroidx/camera/core/DynamicRange;)Z

    move-result v0

    const-string v1, "Fully specified range is not actually fully specified."

    invoke-static {v0, v1}, Landroidx/core/util/Preconditions;->checkState(ZLjava/lang/String;)V

    .line 268
    invoke-virtual {p0}, Landroidx/camera/core/DynamicRange;->getBitDepth()I

    move-result v0

    const/4 v1, 0x1

    if-nez v0, :cond_0

    return v1

    .line 272
    :cond_0
    invoke-virtual {p0}, Landroidx/camera/core/DynamicRange;->getBitDepth()I

    move-result p0

    invoke-virtual {p1}, Landroidx/camera/core/DynamicRange;->getBitDepth()I

    move-result p1

    if-ne p0, p1, :cond_1

    goto :goto_0

    :cond_1
    const/4 v1, 0x0

    :goto_0
    return v1
.end method

.method private static canMatchEncoding(Landroidx/camera/core/DynamicRange;Landroidx/camera/core/DynamicRange;)Z
    .locals 2

    .line 277
    invoke-static {p1}, Landroidx/camera/video/RecorderVideoCapabilities;->isFullySpecified(Landroidx/camera/core/DynamicRange;)Z

    move-result v0

    const-string v1, "Fully specified range is not actually fully specified."

    invoke-static {v0, v1}, Landroidx/core/util/Preconditions;->checkState(ZLjava/lang/String;)V

    .line 279
    invoke-virtual {p0}, Landroidx/camera/core/DynamicRange;->getEncoding()I

    move-result p0

    const/4 v0, 0x1

    if-nez p0, :cond_0

    return v0

    .line 284
    :cond_0
    invoke-virtual {p1}, Landroidx/camera/core/DynamicRange;->getEncoding()I

    move-result p1

    const/4 v1, 0x2

    if-ne p0, v1, :cond_1

    if-eq p1, v0, :cond_1

    return v0

    :cond_1
    if-ne p0, p1, :cond_2

    goto :goto_0

    :cond_2
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method private static canResolve(Landroidx/camera/core/DynamicRange;Ljava/util/Set;)Z
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/DynamicRange;",
            "Ljava/util/Set<",
            "Landroidx/camera/core/DynamicRange;",
            ">;)Z"
        }
    .end annotation

    .line 250
    invoke-static {p0}, Landroidx/camera/video/RecorderVideoCapabilities;->isFullySpecified(Landroidx/camera/core/DynamicRange;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 251
    invoke-interface {p1, p0}, Ljava/util/Set;->contains(Ljava/lang/Object;)Z

    move-result p0

    return p0

    .line 253
    :cond_0
    invoke-interface {p1}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :cond_1
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_2

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroidx/camera/core/DynamicRange;

    .line 254
    invoke-static {p0, v0}, Landroidx/camera/video/RecorderVideoCapabilities;->canMatchBitDepth(Landroidx/camera/core/DynamicRange;Landroidx/camera/core/DynamicRange;)Z

    move-result v1

    if-eqz v1, :cond_1

    .line 255
    invoke-static {p0, v0}, Landroidx/camera/video/RecorderVideoCapabilities;->canMatchEncoding(Landroidx/camera/core/DynamicRange;Landroidx/camera/core/DynamicRange;)Z

    move-result v0

    if-eqz v0, :cond_1

    const/4 p0, 0x1

    return p0

    :cond_2
    const/4 p0, 0x0

    return p0
.end method

.method static from(Landroidx/camera/core/CameraInfo;)Landroidx/camera/video/RecorderVideoCapabilities;
    .locals 2

    .line 146
    new-instance v0, Landroidx/camera/video/RecorderVideoCapabilities;

    check-cast p0, Landroidx/camera/core/impl/CameraInfoInternal;

    sget-object v1, Landroidx/camera/video/internal/BackupHdrProfileEncoderProfilesProvider;->DEFAULT_VALIDATOR:Landroidx/arch/core/util/Function;

    invoke-direct {v0, p0, v1}, Landroidx/camera/video/RecorderVideoCapabilities;-><init>(Landroidx/camera/core/impl/CameraInfoInternal;Landroidx/arch/core/util/Function;)V

    return-object v0
.end method

.method private generateCapabilitiesForNonFullySpecifiedDynamicRange(Landroidx/camera/core/DynamicRange;)Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;
    .locals 2

    .line 229
    invoke-virtual {p0}, Landroidx/camera/video/RecorderVideoCapabilities;->getSupportedDynamicRanges()Ljava/util/Set;

    move-result-object v0

    invoke-static {p1, v0}, Landroidx/camera/video/RecorderVideoCapabilities;->canResolve(Landroidx/camera/core/DynamicRange;Ljava/util/Set;)Z

    move-result v0

    if-nez v0, :cond_0

    const/4 p1, 0x0

    return-object p1

    .line 235
    :cond_0
    new-instance v0, Landroidx/camera/video/internal/DynamicRangeMatchedEncoderProfilesProvider;

    iget-object v1, p0, Landroidx/camera/video/RecorderVideoCapabilities;->mProfilesProvider:Landroidx/camera/core/impl/EncoderProfilesProvider;

    invoke-direct {v0, v1, p1}, Landroidx/camera/video/internal/DynamicRangeMatchedEncoderProfilesProvider;-><init>(Landroidx/camera/core/impl/EncoderProfilesProvider;Landroidx/camera/core/DynamicRange;)V

    .line 237
    new-instance p1, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;

    invoke-direct {p1, v0}, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;-><init>(Landroidx/camera/core/impl/EncoderProfilesProvider;)V

    return-object p1
.end method

.method private getCapabilities(Landroidx/camera/core/DynamicRange;)Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;
    .locals 2

    .line 197
    invoke-static {p1}, Landroidx/camera/video/RecorderVideoCapabilities;->isFullySpecified(Landroidx/camera/core/DynamicRange;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 198
    iget-object v0, p0, Landroidx/camera/video/RecorderVideoCapabilities;->mCapabilitiesMapForFullySpecifiedDynamicRange:Ljava/util/Map;

    invoke-interface {v0, p1}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;

    return-object p1

    .line 202
    :cond_0
    iget-object v0, p0, Landroidx/camera/video/RecorderVideoCapabilities;->mCapabilitiesMapForNonFullySpecifiedDynamicRange:Ljava/util/Map;

    invoke-interface {v0, p1}, Ljava/util/Map;->containsKey(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 203
    iget-object v0, p0, Landroidx/camera/video/RecorderVideoCapabilities;->mCapabilitiesMapForNonFullySpecifiedDynamicRange:Ljava/util/Map;

    invoke-interface {v0, p1}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;

    return-object p1

    .line 206
    :cond_1
    invoke-direct {p0, p1}, Landroidx/camera/video/RecorderVideoCapabilities;->generateCapabilitiesForNonFullySpecifiedDynamicRange(Landroidx/camera/core/DynamicRange;)Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;

    move-result-object v0

    .line 207
    iget-object v1, p0, Landroidx/camera/video/RecorderVideoCapabilities;->mCapabilitiesMapForNonFullySpecifiedDynamicRange:Ljava/util/Map;

    invoke-interface {v1, p1, v0}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    return-object v0
.end method

.method private static isFullySpecified(Landroidx/camera/core/DynamicRange;)Z
    .locals 2

    .line 293
    invoke-virtual {p0}, Landroidx/camera/core/DynamicRange;->getEncoding()I

    move-result v0

    if-eqz v0, :cond_0

    .line 294
    invoke-virtual {p0}, Landroidx/camera/core/DynamicRange;->getEncoding()I

    move-result v0

    const/4 v1, 0x2

    if-eq v0, v1, :cond_0

    .line 295
    invoke-virtual {p0}, Landroidx/camera/core/DynamicRange;->getBitDepth()I

    move-result p0

    if-eqz p0, :cond_0

    const/4 p0, 0x1

    goto :goto_0

    :cond_0
    const/4 p0, 0x0

    :goto_0
    return p0
.end method

.method private static isHlg10SupportedByCamera(Landroidx/camera/core/impl/CameraInfoInternal;)Z
    .locals 3

    .line 214
    invoke-interface {p0}, Landroidx/camera/core/impl/CameraInfoInternal;->getSupportedDynamicRanges()Ljava/util/Set;

    move-result-object p0

    .line 215
    invoke-interface {p0}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object p0

    :cond_0
    invoke-interface {p0}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_1

    invoke-interface {p0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroidx/camera/core/DynamicRange;

    .line 216
    invoke-virtual {v0}, Landroidx/camera/core/DynamicRange;->getEncoding()I

    move-result v1

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    .line 217
    invoke-virtual {v0}, Landroidx/camera/core/DynamicRange;->getBitDepth()I

    move-result v0

    const/4 v2, 0x3

    .line 218
    invoke-static {v2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/Integer;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_0

    const/16 v1, 0xa

    if-ne v0, v1, :cond_0

    const/4 p0, 0x1

    return p0

    :cond_1
    const/4 p0, 0x0

    return p0
.end method


# virtual methods
.method public findHighestSupportedEncoderProfilesFor(Landroid/util/Size;Landroidx/camera/core/DynamicRange;)Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;
    .locals 0

    .line 181
    invoke-direct {p0, p2}, Landroidx/camera/video/RecorderVideoCapabilities;->getCapabilities(Landroidx/camera/core/DynamicRange;)Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;

    move-result-object p2

    if-nez p2, :cond_0

    const/4 p1, 0x0

    goto :goto_0

    .line 182
    :cond_0
    invoke-virtual {p2, p1}, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->findHighestSupportedEncoderProfilesFor(Landroid/util/Size;)Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;

    move-result-object p1

    :goto_0
    return-object p1
.end method

.method public findHighestSupportedQualityFor(Landroid/util/Size;Landroidx/camera/core/DynamicRange;)Landroidx/camera/video/Quality;
    .locals 0

    .line 190
    invoke-direct {p0, p2}, Landroidx/camera/video/RecorderVideoCapabilities;->getCapabilities(Landroidx/camera/core/DynamicRange;)Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;

    move-result-object p2

    if-nez p2, :cond_0

    .line 191
    sget-object p1, Landroidx/camera/video/Quality;->NONE:Landroidx/camera/video/Quality;

    goto :goto_0

    :cond_0
    invoke-virtual {p2, p1}, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->findHighestSupportedQualityFor(Landroid/util/Size;)Landroidx/camera/video/Quality;

    move-result-object p1

    :goto_0
    return-object p1
.end method

.method public getProfiles(Landroidx/camera/video/Quality;Landroidx/camera/core/DynamicRange;)Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;
    .locals 0

    .line 173
    invoke-direct {p0, p2}, Landroidx/camera/video/RecorderVideoCapabilities;->getCapabilities(Landroidx/camera/core/DynamicRange;)Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;

    move-result-object p2

    if-nez p2, :cond_0

    const/4 p1, 0x0

    goto :goto_0

    .line 174
    :cond_0
    invoke-virtual {p2, p1}, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->getProfiles(Landroidx/camera/video/Quality;)Landroidx/camera/video/internal/VideoValidatedEncoderProfilesProxy;

    move-result-object p1

    :goto_0
    return-object p1
.end method

.method public getSupportedDynamicRanges()Ljava/util/Set;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Set<",
            "Landroidx/camera/core/DynamicRange;",
            ">;"
        }
    .end annotation

    .line 152
    iget-object v0, p0, Landroidx/camera/video/RecorderVideoCapabilities;->mCapabilitiesMapForFullySpecifiedDynamicRange:Ljava/util/Map;

    invoke-interface {v0}, Ljava/util/Map;->keySet()Ljava/util/Set;

    move-result-object v0

    return-object v0
.end method

.method public getSupportedQualities(Landroidx/camera/core/DynamicRange;)Ljava/util/List;
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/DynamicRange;",
            ")",
            "Ljava/util/List<",
            "Landroidx/camera/video/Quality;",
            ">;"
        }
    .end annotation

    .line 158
    invoke-direct {p0, p1}, Landroidx/camera/video/RecorderVideoCapabilities;->getCapabilities(Landroidx/camera/core/DynamicRange;)Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;

    move-result-object p1

    if-nez p1, :cond_0

    .line 159
    new-instance p1, Ljava/util/ArrayList;

    invoke-direct {p1}, Ljava/util/ArrayList;-><init>()V

    goto :goto_0

    :cond_0
    invoke-virtual {p1}, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->getSupportedQualities()Ljava/util/List;

    move-result-object p1

    :goto_0
    return-object p1
.end method

.method public isQualitySupported(Landroidx/camera/video/Quality;Landroidx/camera/core/DynamicRange;)Z
    .locals 0

    .line 165
    invoke-direct {p0, p2}, Landroidx/camera/video/RecorderVideoCapabilities;->getCapabilities(Landroidx/camera/core/DynamicRange;)Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;

    move-result-object p2

    if-eqz p2, :cond_0

    .line 166
    invoke-virtual {p2, p1}, Landroidx/camera/video/RecorderVideoCapabilities$CapabilitiesByQuality;->isQualitySupported(Landroidx/camera/video/Quality;)Z

    move-result p1

    if-eqz p1, :cond_0

    const/4 p1, 0x1

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    :goto_0
    return p1
.end method
