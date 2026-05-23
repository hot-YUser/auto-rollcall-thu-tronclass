.class public Landroidx/camera/core/impl/TagBundle;
.super Ljava/lang/Object;
.source "TagBundle.java"


# static fields
.field private static final CAMERAX_USER_TAG_PREFIX:Ljava/lang/String; = "android.hardware.camera2.CaptureRequest.setTag.CX"

.field private static final EMPTY_TAGBUNDLE:Landroidx/camera/core/impl/TagBundle;

.field private static final USER_TAG_PREFIX:Ljava/lang/String; = "android.hardware.camera2.CaptureRequest.setTag."


# instance fields
.field protected final mTagMap:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/Object;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method static constructor <clinit>()V
    .locals 2

    .line 42
    new-instance v0, Landroidx/camera/core/impl/TagBundle;

    new-instance v1, Landroid/util/ArrayMap;

    invoke-direct {v1}, Landroid/util/ArrayMap;-><init>()V

    invoke-direct {v0, v1}, Landroidx/camera/core/impl/TagBundle;-><init>(Ljava/util/Map;)V

    sput-object v0, Landroidx/camera/core/impl/TagBundle;->EMPTY_TAGBUNDLE:Landroidx/camera/core/impl/TagBundle;

    return-void
.end method

.method protected constructor <init>(Ljava/util/Map;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/Object;",
            ">;)V"
        }
    .end annotation

    .line 38
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 39
    iput-object p1, p0, Landroidx/camera/core/impl/TagBundle;->mTagMap:Ljava/util/Map;

    return-void
.end method

.method public static create(Landroid/util/Pair;)Landroidx/camera/core/impl/TagBundle;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/util/Pair<",
            "Ljava/lang/String;",
            "Ljava/lang/Object;",
            ">;)",
            "Landroidx/camera/core/impl/TagBundle;"
        }
    .end annotation

    .line 64
    new-instance v0, Landroid/util/ArrayMap;

    invoke-direct {v0}, Landroid/util/ArrayMap;-><init>()V

    .line 65
    iget-object v1, p0, Landroid/util/Pair;->first:Ljava/lang/Object;

    check-cast v1, Ljava/lang/String;

    iget-object p0, p0, Landroid/util/Pair;->second:Ljava/lang/Object;

    invoke-interface {v0, v1, p0}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 66
    new-instance p0, Landroidx/camera/core/impl/TagBundle;

    invoke-direct {p0, v0}, Landroidx/camera/core/impl/TagBundle;-><init>(Ljava/util/Map;)V

    return-object p0
.end method

.method public static emptyBundle()Landroidx/camera/core/impl/TagBundle;
    .locals 1

    .line 54
    sget-object v0, Landroidx/camera/core/impl/TagBundle;->EMPTY_TAGBUNDLE:Landroidx/camera/core/impl/TagBundle;

    return-object v0
.end method

.method public static from(Landroidx/camera/core/impl/TagBundle;)Landroidx/camera/core/impl/TagBundle;
    .locals 4

    .line 79
    new-instance v0, Landroid/util/ArrayMap;

    invoke-direct {v0}, Landroid/util/ArrayMap;-><init>()V

    .line 80
    invoke-virtual {p0}, Landroidx/camera/core/impl/TagBundle;->listKeys()Ljava/util/Set;

    move-result-object v1

    invoke-interface {v1}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v1

    :goto_0
    invoke-interface {v1}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_0

    invoke-interface {v1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/String;

    .line 81
    invoke-virtual {p0, v2}, Landroidx/camera/core/impl/TagBundle;->getTag(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v3

    invoke-interface {v0, v2, v3}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    goto :goto_0

    .line 84
    :cond_0
    new-instance p0, Landroidx/camera/core/impl/TagBundle;

    invoke-direct {p0, v0}, Landroidx/camera/core/impl/TagBundle;-><init>(Ljava/util/Map;)V

    return-object p0
.end method


# virtual methods
.method public getTag(Ljava/lang/String;)Ljava/lang/Object;
    .locals 1

    .line 95
    iget-object v0, p0, Landroidx/camera/core/impl/TagBundle;->mTagMap:Ljava/util/Map;

    invoke-interface {v0, p1}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    return-object p1
.end method

.method public listKeys()Ljava/util/Set;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 106
    iget-object v0, p0, Landroidx/camera/core/impl/TagBundle;->mTagMap:Ljava/util/Map;

    invoke-interface {v0}, Ljava/util/Map;->keySet()Ljava/util/Set;

    move-result-object v0

    return-object v0
.end method

.method public final toString()Ljava/lang/String;
    .locals 1

    .line 126
    const-string v0, "android.hardware.camera2.CaptureRequest.setTag.CX"

    return-object v0
.end method
