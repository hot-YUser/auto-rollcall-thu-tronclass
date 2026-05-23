.class public Landroidx/camera/camera2/internal/compat/workaround/SupportedRepeatingSurfaceSize;
.super Ljava/lang/Object;
.source "SupportedRepeatingSurfaceSize.java"


# static fields
.field private static final MINI_PREVIEW_SIZE_HUAWEI_MATE_9:Landroid/util/Size;

.field private static final SIZE_COMPARATOR:Ljava/util/Comparator;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Comparator<",
            "Landroid/util/Size;",
            ">;"
        }
    .end annotation
.end field


# instance fields
.field private final mQuirk:Landroidx/camera/camera2/internal/compat/quirk/RepeatingStreamConstraintForVideoRecordingQuirk;


# direct methods
.method static constructor <clinit>()V
    .locals 3

    .line 45
    new-instance v0, Landroid/util/Size;

    const/16 v1, 0x140

    const/16 v2, 0xf0

    invoke-direct {v0, v1, v2}, Landroid/util/Size;-><init>(II)V

    sput-object v0, Landroidx/camera/camera2/internal/compat/workaround/SupportedRepeatingSurfaceSize;->MINI_PREVIEW_SIZE_HUAWEI_MATE_9:Landroid/util/Size;

    .line 47
    new-instance v0, Landroidx/camera/core/impl/utils/CompareSizesByArea;

    invoke-direct {v0}, Landroidx/camera/core/impl/utils/CompareSizesByArea;-><init>()V

    sput-object v0, Landroidx/camera/camera2/internal/compat/workaround/SupportedRepeatingSurfaceSize;->SIZE_COMPARATOR:Ljava/util/Comparator;

    return-void
.end method

.method public constructor <init>()V
    .locals 1

    .line 41
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 42
    const-class v0, Landroidx/camera/camera2/internal/compat/quirk/RepeatingStreamConstraintForVideoRecordingQuirk;

    invoke-static {v0}, Landroidx/camera/camera2/internal/compat/quirk/DeviceQuirks;->get(Ljava/lang/Class;)Landroidx/camera/core/impl/Quirk;

    move-result-object v0

    check-cast v0, Landroidx/camera/camera2/internal/compat/quirk/RepeatingStreamConstraintForVideoRecordingQuirk;

    iput-object v0, p0, Landroidx/camera/camera2/internal/compat/workaround/SupportedRepeatingSurfaceSize;->mQuirk:Landroidx/camera/camera2/internal/compat/quirk/RepeatingStreamConstraintForVideoRecordingQuirk;

    return-void
.end method


# virtual methods
.method public getSupportedSizes([Landroid/util/Size;)[Landroid/util/Size;
    .locals 7

    .line 52
    iget-object v0, p0, Landroidx/camera/camera2/internal/compat/workaround/SupportedRepeatingSurfaceSize;->mQuirk:Landroidx/camera/camera2/internal/compat/quirk/RepeatingStreamConstraintForVideoRecordingQuirk;

    if-eqz v0, :cond_2

    .line 53
    invoke-static {}, Landroidx/camera/camera2/internal/compat/quirk/RepeatingStreamConstraintForVideoRecordingQuirk;->isHuaweiMate9()Z

    move-result v0

    if-eqz v0, :cond_2

    .line 54
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 55
    array-length v1, p1

    const/4 v2, 0x0

    move v3, v2

    :goto_0
    if-ge v3, v1, :cond_1

    aget-object v4, p1, v3

    .line 56
    sget-object v5, Landroidx/camera/camera2/internal/compat/workaround/SupportedRepeatingSurfaceSize;->SIZE_COMPARATOR:Ljava/util/Comparator;

    sget-object v6, Landroidx/camera/camera2/internal/compat/workaround/SupportedRepeatingSurfaceSize;->MINI_PREVIEW_SIZE_HUAWEI_MATE_9:Landroid/util/Size;

    invoke-interface {v5, v4, v6}, Ljava/util/Comparator;->compare(Ljava/lang/Object;Ljava/lang/Object;)I

    move-result v5

    if-ltz v5, :cond_0

    .line 57
    invoke-interface {v0, v4}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    :cond_0
    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    .line 60
    :cond_1
    new-array p1, v2, [Landroid/util/Size;

    invoke-interface {v0, p1}, Ljava/util/List;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [Landroid/util/Size;

    :cond_2
    return-object p1
.end method
