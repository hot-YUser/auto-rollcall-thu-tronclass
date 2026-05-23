.class public final Landroidx/camera/video/MediaStoreOutputOptions$Builder;
.super Landroidx/camera/video/OutputOptions$Builder;
.source "MediaStoreOutputOptions.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/MediaStoreOutputOptions;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = "Builder"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Landroidx/camera/video/OutputOptions$Builder<",
        "Landroidx/camera/video/MediaStoreOutputOptions;",
        "Landroidx/camera/video/MediaStoreOutputOptions$Builder;",
        ">;"
    }
.end annotation


# instance fields
.field private final mInternalBuilder:Landroidx/camera/video/MediaStoreOutputOptions$MediaStoreOutputOptionsInternal$Builder;


# direct methods
.method public constructor <init>(Landroid/content/ContentResolver;Landroid/net/Uri;)V
    .locals 1

    .line 161
    new-instance v0, Landroidx/camera/video/AutoValue_MediaStoreOutputOptions_MediaStoreOutputOptionsInternal$Builder;

    invoke-direct {v0}, Landroidx/camera/video/AutoValue_MediaStoreOutputOptions_MediaStoreOutputOptionsInternal$Builder;-><init>()V

    invoke-direct {p0, v0}, Landroidx/camera/video/OutputOptions$Builder;-><init>(Landroidx/camera/video/OutputOptions$OutputOptionsInternal$Builder;)V

    .line 162
    const-string v0, "Content resolver can\'t be null."

    invoke-static {p1, v0}, Landroidx/core/util/Preconditions;->checkNotNull(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 163
    const-string v0, "Collection Uri can\'t be null."

    invoke-static {p2, v0}, Landroidx/core/util/Preconditions;->checkNotNull(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 164
    iget-object v0, p0, Landroidx/camera/video/MediaStoreOutputOptions$Builder;->mRootInternalBuilder:Landroidx/camera/video/OutputOptions$OutputOptionsInternal$Builder;

    check-cast v0, Landroidx/camera/video/MediaStoreOutputOptions$MediaStoreOutputOptionsInternal$Builder;

    iput-object v0, p0, Landroidx/camera/video/MediaStoreOutputOptions$Builder;->mInternalBuilder:Landroidx/camera/video/MediaStoreOutputOptions$MediaStoreOutputOptionsInternal$Builder;

    .line 165
    invoke-virtual {v0, p1}, Landroidx/camera/video/MediaStoreOutputOptions$MediaStoreOutputOptionsInternal$Builder;->setContentResolver(Landroid/content/ContentResolver;)Landroidx/camera/video/MediaStoreOutputOptions$MediaStoreOutputOptionsInternal$Builder;

    move-result-object p1

    .line 166
    invoke-virtual {p1, p2}, Landroidx/camera/video/MediaStoreOutputOptions$MediaStoreOutputOptionsInternal$Builder;->setCollectionUri(Landroid/net/Uri;)Landroidx/camera/video/MediaStoreOutputOptions$MediaStoreOutputOptionsInternal$Builder;

    move-result-object p1

    sget-object p2, Landroidx/camera/video/MediaStoreOutputOptions;->EMPTY_CONTENT_VALUES:Landroid/content/ContentValues;

    .line 167
    invoke-virtual {p1, p2}, Landroidx/camera/video/MediaStoreOutputOptions$MediaStoreOutputOptionsInternal$Builder;->setContentValues(Landroid/content/ContentValues;)Landroidx/camera/video/MediaStoreOutputOptions$MediaStoreOutputOptionsInternal$Builder;

    return-void
.end method


# virtual methods
.method public build()Landroidx/camera/video/MediaStoreOutputOptions;
    .locals 2

    .line 195
    new-instance v0, Landroidx/camera/video/MediaStoreOutputOptions;

    iget-object v1, p0, Landroidx/camera/video/MediaStoreOutputOptions$Builder;->mInternalBuilder:Landroidx/camera/video/MediaStoreOutputOptions$MediaStoreOutputOptionsInternal$Builder;

    invoke-virtual {v1}, Landroidx/camera/video/MediaStoreOutputOptions$MediaStoreOutputOptionsInternal$Builder;->build()Landroidx/camera/video/MediaStoreOutputOptions$MediaStoreOutputOptionsInternal;

    move-result-object v1

    invoke-direct {v0, v1}, Landroidx/camera/video/MediaStoreOutputOptions;-><init>(Landroidx/camera/video/MediaStoreOutputOptions$MediaStoreOutputOptionsInternal;)V

    return-object v0
.end method

.method public bridge synthetic build()Landroidx/camera/video/OutputOptions;
    .locals 1

    .line 133
    invoke-virtual {p0}, Landroidx/camera/video/MediaStoreOutputOptions$Builder;->build()Landroidx/camera/video/MediaStoreOutputOptions;

    move-result-object v0

    return-object v0
.end method

.method public setContentValues(Landroid/content/ContentValues;)Landroidx/camera/video/MediaStoreOutputOptions$Builder;
    .locals 1

    .line 186
    const-string v0, "Content values can\'t be null."

    invoke-static {p1, v0}, Landroidx/core/util/Preconditions;->checkNotNull(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 187
    iget-object v0, p0, Landroidx/camera/video/MediaStoreOutputOptions$Builder;->mInternalBuilder:Landroidx/camera/video/MediaStoreOutputOptions$MediaStoreOutputOptionsInternal$Builder;

    invoke-virtual {v0, p1}, Landroidx/camera/video/MediaStoreOutputOptions$MediaStoreOutputOptionsInternal$Builder;->setContentValues(Landroid/content/ContentValues;)Landroidx/camera/video/MediaStoreOutputOptions$MediaStoreOutputOptionsInternal$Builder;

    return-object p0
.end method

.method public bridge synthetic setDurationLimitMillis(J)Ljava/lang/Object;
    .locals 0

    .line 133
    invoke-super {p0, p1, p2}, Landroidx/camera/video/OutputOptions$Builder;->setDurationLimitMillis(J)Ljava/lang/Object;

    move-result-object p1

    return-object p1
.end method

.method public bridge synthetic setFileSizeLimit(J)Ljava/lang/Object;
    .locals 0

    .line 133
    invoke-super {p0, p1, p2}, Landroidx/camera/video/OutputOptions$Builder;->setFileSizeLimit(J)Ljava/lang/Object;

    move-result-object p1

    return-object p1
.end method

.method public bridge synthetic setLocation(Landroid/location/Location;)Ljava/lang/Object;
    .locals 0

    .line 133
    invoke-super {p0, p1}, Landroidx/camera/video/OutputOptions$Builder;->setLocation(Landroid/location/Location;)Ljava/lang/Object;

    move-result-object p1

    return-object p1
.end method
