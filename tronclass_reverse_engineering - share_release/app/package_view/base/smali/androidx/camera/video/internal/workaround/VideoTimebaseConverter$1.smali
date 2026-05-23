.class synthetic Landroidx/camera/video/internal/workaround/VideoTimebaseConverter$1;
.super Ljava/lang/Object;
.source "VideoTimebaseConverter.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/internal/workaround/VideoTimebaseConverter;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x1008
    name = null
.end annotation


# static fields
.field static final synthetic $SwitchMap$androidx$camera$core$impl$Timebase:[I


# direct methods
.method static constructor <clinit>()V
    .locals 3

    .line 75
    invoke-static {}, Landroidx/camera/core/impl/Timebase;->values()[Landroidx/camera/core/impl/Timebase;

    move-result-object v0

    array-length v0, v0

    new-array v0, v0, [I

    sput-object v0, Landroidx/camera/video/internal/workaround/VideoTimebaseConverter$1;->$SwitchMap$androidx$camera$core$impl$Timebase:[I

    :try_start_0
    sget-object v1, Landroidx/camera/core/impl/Timebase;->REALTIME:Landroidx/camera/core/impl/Timebase;

    invoke-virtual {v1}, Landroidx/camera/core/impl/Timebase;->ordinal()I

    move-result v1

    const/4 v2, 0x1

    aput v2, v0, v1
    :try_end_0
    .catch Ljava/lang/NoSuchFieldError; {:try_start_0 .. :try_end_0} :catch_0

    :catch_0
    :try_start_1
    sget-object v0, Landroidx/camera/video/internal/workaround/VideoTimebaseConverter$1;->$SwitchMap$androidx$camera$core$impl$Timebase:[I

    sget-object v1, Landroidx/camera/core/impl/Timebase;->UPTIME:Landroidx/camera/core/impl/Timebase;

    invoke-virtual {v1}, Landroidx/camera/core/impl/Timebase;->ordinal()I

    move-result v1

    const/4 v2, 0x2

    aput v2, v0, v1
    :try_end_1
    .catch Ljava/lang/NoSuchFieldError; {:try_start_1 .. :try_end_1} :catch_1

    :catch_1
    return-void
.end method
