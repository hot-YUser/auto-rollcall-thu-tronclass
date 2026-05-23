.class Landroidx/camera/core/impl/utils/ExifData$Builder$2;
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
        "Ljava/util/Map<",
        "Ljava/lang/String;",
        "Landroidx/camera/core/impl/utils/ExifAttribute;",
        ">;>;"
    }
.end annotation


# instance fields
.field mIfdIndex:I

.field final synthetic this$0:Landroidx/camera/core/impl/utils/ExifData$Builder;


# direct methods
.method constructor <init>(Landroidx/camera/core/impl/utils/ExifData$Builder;)V
    .locals 0

    .line 465
    iput-object p1, p0, Landroidx/camera/core/impl/utils/ExifData$Builder$2;->this$0:Landroidx/camera/core/impl/utils/ExifData$Builder;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 p1, 0x0

    .line 466
    iput p1, p0, Landroidx/camera/core/impl/utils/ExifData$Builder$2;->mIfdIndex:I

    return-void
.end method


# virtual methods
.method public hasMoreElements()Z
    .locals 2

    .line 470
    iget v0, p0, Landroidx/camera/core/impl/utils/ExifData$Builder$2;->mIfdIndex:I

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

    .line 465
    invoke-virtual {p0}, Landroidx/camera/core/impl/utils/ExifData$Builder$2;->nextElement()Ljava/util/Map;

    move-result-object v0

    return-object v0
.end method

.method public nextElement()Ljava/util/Map;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Landroidx/camera/core/impl/utils/ExifAttribute;",
            ">;"
        }
    .end annotation

    .line 475
    iget v0, p0, Landroidx/camera/core/impl/utils/ExifData$Builder$2;->mIfdIndex:I

    add-int/lit8 v0, v0, 0x1

    iput v0, p0, Landroidx/camera/core/impl/utils/ExifData$Builder$2;->mIfdIndex:I

    .line 476
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    return-object v0
.end method
