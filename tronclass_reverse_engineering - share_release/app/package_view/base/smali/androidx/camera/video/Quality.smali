.class public Landroidx/camera/video/Quality;
.super Ljava/lang/Object;
.source "Quality.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/video/Quality$ConstantQuality;
    }
.end annotation


# static fields
.field public static final FHD:Landroidx/camera/video/Quality;

.field public static final HD:Landroidx/camera/video/Quality;

.field public static final HIGHEST:Landroidx/camera/video/Quality;

.field public static final LOWEST:Landroidx/camera/video/Quality;

.field static final NONE:Landroidx/camera/video/Quality;

.field private static final QUALITIES:Ljava/util/Set;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Set<",
            "Landroidx/camera/video/Quality;",
            ">;"
        }
    .end annotation
.end field

.field private static final QUALITIES_ORDER_BY_SIZE:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Landroidx/camera/video/Quality;",
            ">;"
        }
    .end annotation
.end field

.field public static final SD:Landroidx/camera/video/Quality;

.field public static final UHD:Landroidx/camera/video/Quality;


# direct methods
.method static constructor <clinit>()V
    .locals 13

    .line 48
    const-string v0, "SD"

    const/4 v1, 0x4

    invoke-static {v1, v0}, Landroidx/camera/video/Quality$ConstantQuality;->of(ILjava/lang/String;)Landroidx/camera/video/Quality$ConstantQuality;

    move-result-object v0

    sput-object v0, Landroidx/camera/video/Quality;->SD:Landroidx/camera/video/Quality;

    .line 55
    const-string v2, "HD"

    const/4 v3, 0x5

    invoke-static {v3, v2}, Landroidx/camera/video/Quality$ConstantQuality;->of(ILjava/lang/String;)Landroidx/camera/video/Quality$ConstantQuality;

    move-result-object v2

    sput-object v2, Landroidx/camera/video/Quality;->HD:Landroidx/camera/video/Quality;

    .line 62
    const-string v4, "FHD"

    const/4 v5, 0x6

    invoke-static {v5, v4}, Landroidx/camera/video/Quality$ConstantQuality;->of(ILjava/lang/String;)Landroidx/camera/video/Quality$ConstantQuality;

    move-result-object v4

    sput-object v4, Landroidx/camera/video/Quality;->FHD:Landroidx/camera/video/Quality;

    const/16 v6, 0x8

    .line 69
    const-string v7, "UHD"

    invoke-static {v6, v7}, Landroidx/camera/video/Quality$ConstantQuality;->of(ILjava/lang/String;)Landroidx/camera/video/Quality$ConstantQuality;

    move-result-object v6

    sput-object v6, Landroidx/camera/video/Quality;->UHD:Landroidx/camera/video/Quality;

    .line 74
    const-string v7, "LOWEST"

    const/4 v8, 0x0

    invoke-static {v8, v7}, Landroidx/camera/video/Quality$ConstantQuality;->of(ILjava/lang/String;)Landroidx/camera/video/Quality$ConstantQuality;

    move-result-object v7

    sput-object v7, Landroidx/camera/video/Quality;->LOWEST:Landroidx/camera/video/Quality;

    .line 79
    const-string v9, "HIGHEST"

    const/4 v10, 0x1

    invoke-static {v10, v9}, Landroidx/camera/video/Quality$ConstantQuality;->of(ILjava/lang/String;)Landroidx/camera/video/Quality$ConstantQuality;

    move-result-object v9

    sput-object v9, Landroidx/camera/video/Quality;->HIGHEST:Landroidx/camera/video/Quality;

    const/4 v11, -0x1

    .line 82
    const-string v12, "NONE"

    invoke-static {v11, v12}, Landroidx/camera/video/Quality$ConstantQuality;->of(ILjava/lang/String;)Landroidx/camera/video/Quality$ConstantQuality;

    move-result-object v11

    sput-object v11, Landroidx/camera/video/Quality;->NONE:Landroidx/camera/video/Quality;

    .line 85
    new-instance v11, Ljava/util/HashSet;

    new-array v5, v5, [Landroidx/camera/video/Quality;

    aput-object v7, v5, v8

    aput-object v9, v5, v10

    const/4 v7, 0x2

    aput-object v0, v5, v7

    const/4 v9, 0x3

    aput-object v2, v5, v9

    aput-object v4, v5, v1

    aput-object v6, v5, v3

    .line 86
    invoke-static {v5}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v3

    invoke-direct {v11, v3}, Ljava/util/HashSet;-><init>(Ljava/util/Collection;)V

    sput-object v11, Landroidx/camera/video/Quality;->QUALITIES:Ljava/util/Set;

    .line 89
    new-array v1, v1, [Landroidx/camera/video/Quality;

    aput-object v6, v1, v8

    aput-object v4, v1, v10

    aput-object v2, v1, v7

    aput-object v0, v1, v9

    .line 90
    invoke-static {v1}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v0

    sput-object v0, Landroidx/camera/video/Quality;->QUALITIES_ORDER_BY_SIZE:Ljava/util/List;

    return-void
.end method

.method private constructor <init>()V
    .locals 0

    .line 40
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method synthetic constructor <init>(Landroidx/camera/video/Quality$1;)V
    .locals 0

    .line 37
    invoke-direct {p0}, Landroidx/camera/video/Quality;-><init>()V

    return-void
.end method

.method static containsQuality(Landroidx/camera/video/Quality;)Z
    .locals 1

    .line 93
    sget-object v0, Landroidx/camera/video/Quality;->QUALITIES:Ljava/util/Set;

    invoke-interface {v0, p0}, Ljava/util/Set;->contains(Ljava/lang/Object;)Z

    move-result p0

    return p0
.end method

.method static getSortedQualities()Ljava/util/List;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Landroidx/camera/video/Quality;",
            ">;"
        }
    .end annotation

    .line 103
    new-instance v0, Ljava/util/ArrayList;

    sget-object v1, Landroidx/camera/video/Quality;->QUALITIES_ORDER_BY_SIZE:Ljava/util/List;

    invoke-direct {v0, v1}, Ljava/util/ArrayList;-><init>(Ljava/util/Collection;)V

    return-object v0
.end method
