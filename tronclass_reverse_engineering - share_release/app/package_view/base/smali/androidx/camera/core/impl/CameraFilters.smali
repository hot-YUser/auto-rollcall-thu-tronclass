.class public Landroidx/camera/core/impl/CameraFilters;
.super Ljava/lang/Object;
.source "CameraFilters.java"


# static fields
.field public static final ANY:Landroidx/camera/core/CameraFilter;

.field public static final NONE:Landroidx/camera/core/CameraFilter;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 32
    new-instance v0, Landroidx/camera/core/impl/CameraFilters$$ExternalSyntheticLambda0;

    invoke-direct {v0}, Landroidx/camera/core/impl/CameraFilters$$ExternalSyntheticLambda0;-><init>()V

    sput-object v0, Landroidx/camera/core/impl/CameraFilters;->ANY:Landroidx/camera/core/CameraFilter;

    .line 37
    new-instance v0, Landroidx/camera/core/impl/CameraFilters$$ExternalSyntheticLambda1;

    invoke-direct {v0}, Landroidx/camera/core/impl/CameraFilters$$ExternalSyntheticLambda1;-><init>()V

    sput-object v0, Landroidx/camera/core/impl/CameraFilters;->NONE:Landroidx/camera/core/CameraFilter;

    return-void
.end method

.method private constructor <init>()V
    .locals 0

    .line 39
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static synthetic lambda$static$0(Ljava/util/List;)Ljava/util/List;
    .locals 0

    return-object p0
.end method

.method static synthetic lambda$static$1(Ljava/util/List;)Ljava/util/List;
    .locals 0

    .line 37
    invoke-static {}, Ljava/util/Collections;->emptyList()Ljava/util/List;

    move-result-object p0

    return-object p0
.end method
