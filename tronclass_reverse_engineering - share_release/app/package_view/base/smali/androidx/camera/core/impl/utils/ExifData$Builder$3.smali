.class Landroidx/camera/core/impl/utils/ExifData$Builder$3;
.super Ljava/lang/Object;
.source "ExifData.java"

# interfaces
.implements Ljava/util/Enumeration;


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Landroidx/camera/core/impl/utils/ExifData$Builder;->build()Landroidx/camera/core/impl/utils/ExifData;
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
.field final mMapEnumeration:Ljava/util/Enumeration;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Enumeration<",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Landroidx/camera/core/impl/utils/ExifAttribute;",
            ">;>;"
        }
    .end annotation
.end field

.field final synthetic this$0:Landroidx/camera/core/impl/utils/ExifData$Builder;


# direct methods
.method constructor <init>(Landroidx/camera/core/impl/utils/ExifData$Builder;)V
    .locals 0

    .line 861
    iput-object p1, p0, Landroidx/camera/core/impl/utils/ExifData$Builder$3;->this$0:Landroidx/camera/core/impl/utils/ExifData$Builder;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 862
    iget-object p1, p1, Landroidx/camera/core/impl/utils/ExifData$Builder;->mAttributes:Ljava/util/List;

    .line 863
    invoke-static {p1}, Ljava/util/Collections;->enumeration(Ljava/util/Collection;)Ljava/util/Enumeration;

    move-result-object p1

    iput-object p1, p0, Landroidx/camera/core/impl/utils/ExifData$Builder$3;->mMapEnumeration:Ljava/util/Enumeration;

    return-void
.end method


# virtual methods
.method public hasMoreElements()Z
    .locals 1

    .line 867
    iget-object v0, p0, Landroidx/camera/core/impl/utils/ExifData$Builder$3;->mMapEnumeration:Ljava/util/Enumeration;

    invoke-interface {v0}, Ljava/util/Enumeration;->hasMoreElements()Z

    move-result v0

    return v0
.end method

.method public bridge synthetic nextElement()Ljava/lang/Object;
    .locals 1

    .line 861
    invoke-virtual {p0}, Landroidx/camera/core/impl/utils/ExifData$Builder$3;->nextElement()Ljava/util/Map;

    move-result-object v0

    return-object v0
.end method

.method public nextElement()Ljava/util/Map;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Landroidx/camera/core/impl/utils/ExifAttribute;",
            ">;"
        }
    .end annotation

    .line 872
    new-instance v0, Ljava/util/HashMap;

    iget-object v1, p0, Landroidx/camera/core/impl/utils/ExifData$Builder$3;->mMapEnumeration:Ljava/util/Enumeration;

    invoke-interface {v1}, Ljava/util/Enumeration;->nextElement()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/util/Map;

    invoke-direct {v0, v1}, Ljava/util/HashMap;-><init>(Ljava/util/Map;)V

    return-object v0
.end method
