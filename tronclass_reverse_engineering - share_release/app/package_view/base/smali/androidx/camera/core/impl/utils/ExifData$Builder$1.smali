.class Landroidx/camera/core/impl/utils/ExifData$Builder$1;
.super Ljava/lang/Object;
.source "ExifData.java"

# interfaces
.implements Ljava/util/Enumeration;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/impl/utils/ExifData$Builder;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Ljava/util/Enumeration<",
        "Ljava/util/HashMap<",
        "Ljava/lang/String;",
        "Landroidx/camera/core/impl/utils/ExifTag;",
        ">;>;"
    }
.end annotation


# instance fields
.field mIfdIndex:I


# direct methods
.method constructor <init>()V
    .locals 1

    .line 444
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 445
    iput v0, p0, Landroidx/camera/core/impl/utils/ExifData$Builder$1;->mIfdIndex:I

    return-void
.end method


# virtual methods
.method public hasMoreElements()Z
    .locals 2

    .line 449
    iget v0, p0, Landroidx/camera/core/impl/utils/ExifData$Builder$1;->mIfdIndex:I

    sget-object v1, Landroidx/camera/core/impl/utils/ExifData;->EXIF_TAGS:[[Landroidx/camera/core/impl/utils/ExifTag;

    array-length v1, v1

    if-ge v0, v1, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public bridge synthetic nextElement()Ljava/lang/Object;
    .locals 1

    .line 444
    invoke-virtual {p0}, Landroidx/camera/core/impl/utils/ExifData$Builder$1;->nextElement()Ljava/util/HashMap;

    move-result-object v0

    return-object v0
.end method

.method public nextElement()Ljava/util/HashMap;
    .locals 6
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/HashMap<",
            "Ljava/lang/String;",
            "Landroidx/camera/core/impl/utils/ExifTag;",
            ">;"
        }
    .end annotation

    .line 455
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    .line 456
    sget-object v1, Landroidx/camera/core/impl/utils/ExifData;->EXIF_TAGS:[[Landroidx/camera/core/impl/utils/ExifTag;

    iget v2, p0, Landroidx/camera/core/impl/utils/ExifData$Builder$1;->mIfdIndex:I

    aget-object v1, v1, v2

    array-length v2, v1

    const/4 v3, 0x0

    :goto_0
    if-ge v3, v2, :cond_0

    aget-object v4, v1, v3

    .line 457
    iget-object v5, v4, Landroidx/camera/core/impl/utils/ExifTag;->name:Ljava/lang/String;

    invoke-virtual {v0, v5, v4}, Ljava/util/HashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    .line 459
    :cond_0
    iget v1, p0, Landroidx/camera/core/impl/utils/ExifData$Builder$1;->mIfdIndex:I

    add-int/lit8 v1, v1, 0x1

    iput v1, p0, Landroidx/camera/core/impl/utils/ExifData$Builder$1;->mIfdIndex:I

    return-object v0
.end method
