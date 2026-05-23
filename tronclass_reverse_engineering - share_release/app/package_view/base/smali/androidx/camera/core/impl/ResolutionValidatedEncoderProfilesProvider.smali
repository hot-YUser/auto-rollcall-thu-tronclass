.class public Landroidx/camera/core/impl/ResolutionValidatedEncoderProfilesProvider;
.super Ljava/lang/Object;
.source "ResolutionValidatedEncoderProfilesProvider.java"

# interfaces
.implements Landroidx/camera/core/impl/EncoderProfilesProvider;


# instance fields
.field private final mEncoderProfilesResolutionValidator:Landroidx/camera/core/impl/EncoderProfilesResolutionValidator;

.field private final mProvider:Landroidx/camera/core/impl/EncoderProfilesProvider;


# direct methods
.method public constructor <init>(Landroidx/camera/core/impl/EncoderProfilesProvider;Landroidx/camera/core/impl/Quirks;)V
    .locals 0

    .line 37
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 38
    iput-object p1, p0, Landroidx/camera/core/impl/ResolutionValidatedEncoderProfilesProvider;->mProvider:Landroidx/camera/core/impl/EncoderProfilesProvider;

    .line 39
    const-class p1, Landroidx/camera/core/impl/quirk/ProfileResolutionQuirk;

    invoke-virtual {p2, p1}, Landroidx/camera/core/impl/Quirks;->getAll(Ljava/lang/Class;)Ljava/util/List;

    move-result-object p1

    .line 40
    new-instance p2, Landroidx/camera/core/impl/EncoderProfilesResolutionValidator;

    invoke-direct {p2, p1}, Landroidx/camera/core/impl/EncoderProfilesResolutionValidator;-><init>(Ljava/util/List;)V

    iput-object p2, p0, Landroidx/camera/core/impl/ResolutionValidatedEncoderProfilesProvider;->mEncoderProfilesResolutionValidator:Landroidx/camera/core/impl/EncoderProfilesResolutionValidator;

    return-void
.end method


# virtual methods
.method public getAll(I)Landroidx/camera/core/impl/EncoderProfilesProxy;
    .locals 1

    .line 63
    iget-object v0, p0, Landroidx/camera/core/impl/ResolutionValidatedEncoderProfilesProvider;->mProvider:Landroidx/camera/core/impl/EncoderProfilesProvider;

    invoke-interface {v0, p1}, Landroidx/camera/core/impl/EncoderProfilesProvider;->hasProfile(I)Z

    move-result v0

    if-nez v0, :cond_0

    const/4 p1, 0x0

    return-object p1

    .line 67
    :cond_0
    iget-object v0, p0, Landroidx/camera/core/impl/ResolutionValidatedEncoderProfilesProvider;->mProvider:Landroidx/camera/core/impl/EncoderProfilesProvider;

    invoke-interface {v0, p1}, Landroidx/camera/core/impl/EncoderProfilesProvider;->getAll(I)Landroidx/camera/core/impl/EncoderProfilesProxy;

    move-result-object p1

    .line 68
    iget-object v0, p0, Landroidx/camera/core/impl/ResolutionValidatedEncoderProfilesProvider;->mEncoderProfilesResolutionValidator:Landroidx/camera/core/impl/EncoderProfilesResolutionValidator;

    invoke-virtual {v0}, Landroidx/camera/core/impl/EncoderProfilesResolutionValidator;->hasQuirk()Z

    move-result v0

    if-eqz v0, :cond_1

    .line 69
    iget-object v0, p0, Landroidx/camera/core/impl/ResolutionValidatedEncoderProfilesProvider;->mEncoderProfilesResolutionValidator:Landroidx/camera/core/impl/EncoderProfilesResolutionValidator;

    invoke-virtual {v0, p1}, Landroidx/camera/core/impl/EncoderProfilesResolutionValidator;->filterInvalidVideoResolution(Landroidx/camera/core/impl/EncoderProfilesProxy;)Landroidx/camera/core/impl/EncoderProfilesProxy;

    move-result-object p1

    :cond_1
    return-object p1
.end method

.method public hasProfile(I)Z
    .locals 1

    .line 47
    iget-object v0, p0, Landroidx/camera/core/impl/ResolutionValidatedEncoderProfilesProvider;->mProvider:Landroidx/camera/core/impl/EncoderProfilesProvider;

    invoke-interface {v0, p1}, Landroidx/camera/core/impl/EncoderProfilesProvider;->hasProfile(I)Z

    move-result v0

    if-nez v0, :cond_0

    const/4 p1, 0x0

    return p1

    .line 51
    :cond_0
    iget-object v0, p0, Landroidx/camera/core/impl/ResolutionValidatedEncoderProfilesProvider;->mEncoderProfilesResolutionValidator:Landroidx/camera/core/impl/EncoderProfilesResolutionValidator;

    invoke-virtual {v0}, Landroidx/camera/core/impl/EncoderProfilesResolutionValidator;->hasQuirk()Z

    move-result v0

    if-eqz v0, :cond_1

    .line 52
    iget-object v0, p0, Landroidx/camera/core/impl/ResolutionValidatedEncoderProfilesProvider;->mProvider:Landroidx/camera/core/impl/EncoderProfilesProvider;

    invoke-interface {v0, p1}, Landroidx/camera/core/impl/EncoderProfilesProvider;->getAll(I)Landroidx/camera/core/impl/EncoderProfilesProxy;

    move-result-object p1

    .line 53
    iget-object v0, p0, Landroidx/camera/core/impl/ResolutionValidatedEncoderProfilesProvider;->mEncoderProfilesResolutionValidator:Landroidx/camera/core/impl/EncoderProfilesResolutionValidator;

    invoke-virtual {v0, p1}, Landroidx/camera/core/impl/EncoderProfilesResolutionValidator;->hasValidVideoResolution(Landroidx/camera/core/impl/EncoderProfilesProxy;)Z

    move-result p1

    return p1

    :cond_1
    const/4 p1, 0x1

    return p1
.end method
