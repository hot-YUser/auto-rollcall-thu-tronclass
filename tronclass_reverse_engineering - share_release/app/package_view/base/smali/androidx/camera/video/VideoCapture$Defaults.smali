.class public final Landroidx/camera/video/VideoCapture$Defaults;
.super Ljava/lang/Object;
.source "VideoCapture.java"

# interfaces
.implements Landroidx/camera/core/impl/ConfigProvider;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/VideoCapture;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = "Defaults"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Landroidx/camera/core/impl/ConfigProvider<",
        "Landroidx/camera/video/impl/VideoCaptureConfig<",
        "*>;>;"
    }
.end annotation


# static fields
.field private static final DEFAULT_CONFIG:Landroidx/camera/video/impl/VideoCaptureConfig;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroidx/camera/video/impl/VideoCaptureConfig<",
            "*>;"
        }
    .end annotation
.end field

.field static final DEFAULT_DYNAMIC_RANGE:Landroidx/camera/core/DynamicRange;

.field static final DEFAULT_FPS_RANGE:Landroid/util/Range;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroid/util/Range<",
            "Ljava/lang/Integer;",
            ">;"
        }
    .end annotation
.end field

.field private static final DEFAULT_SURFACE_OCCUPANCY_PRIORITY:I = 0x5

.field private static final DEFAULT_VIDEO_ENCODER_INFO_FINDER:Landroidx/arch/core/util/Function;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroidx/arch/core/util/Function<",
            "Landroidx/camera/video/internal/encoder/VideoEncoderConfig;",
            "Landroidx/camera/video/internal/encoder/VideoEncoderInfo;",
            ">;"
        }
    .end annotation
.end field

.field private static final DEFAULT_VIDEO_OUTPUT:Landroidx/camera/video/VideoOutput;


# direct methods
.method public static synthetic $r8$lambda$dXyqVuZoODBFRv2VSAqVT7p-OKs(Landroidx/camera/core/SurfaceRequest;)Z
    .locals 0

    invoke-virtual {p0}, Landroidx/camera/core/SurfaceRequest;->willNotProvideSurface()Z

    move-result p0

    return p0
.end method

.method static constructor <clinit>()V
    .locals 4

    .line 774
    new-instance v0, Landroidx/camera/video/VideoCapture$Defaults$$ExternalSyntheticLambda1;

    invoke-direct {v0}, Landroidx/camera/video/VideoCapture$Defaults$$ExternalSyntheticLambda1;-><init>()V

    sput-object v0, Landroidx/camera/video/VideoCapture$Defaults;->DEFAULT_VIDEO_OUTPUT:Landroidx/camera/video/VideoOutput;

    .line 779
    invoke-static {}, Landroidx/camera/video/VideoCapture$Defaults;->createFinder()Landroidx/arch/core/util/Function;

    move-result-object v1

    sput-object v1, Landroidx/camera/video/VideoCapture$Defaults;->DEFAULT_VIDEO_ENCODER_INFO_FINDER:Landroidx/arch/core/util/Function;

    .line 781
    new-instance v2, Landroid/util/Range;

    const/16 v3, 0x1e

    invoke-static {v3}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v3

    invoke-direct {v2, v3, v3}, Landroid/util/Range;-><init>(Ljava/lang/Comparable;Ljava/lang/Comparable;)V

    sput-object v2, Landroidx/camera/video/VideoCapture$Defaults;->DEFAULT_FPS_RANGE:Landroid/util/Range;

    .line 787
    sget-object v2, Landroidx/camera/core/DynamicRange;->SDR:Landroidx/camera/core/DynamicRange;

    sput-object v2, Landroidx/camera/video/VideoCapture$Defaults;->DEFAULT_DYNAMIC_RANGE:Landroidx/camera/core/DynamicRange;

    .line 790
    new-instance v3, Landroidx/camera/video/VideoCapture$Builder;

    invoke-direct {v3, v0}, Landroidx/camera/video/VideoCapture$Builder;-><init>(Landroidx/camera/video/VideoOutput;)V

    const/4 v0, 0x5

    .line 791
    invoke-virtual {v3, v0}, Landroidx/camera/video/VideoCapture$Builder;->setSurfaceOccupancyPriority(I)Landroidx/camera/video/VideoCapture$Builder;

    move-result-object v0

    .line 792
    invoke-virtual {v0, v1}, Landroidx/camera/video/VideoCapture$Builder;->setVideoEncoderInfoFinder(Landroidx/arch/core/util/Function;)Landroidx/camera/video/VideoCapture$Builder;

    move-result-object v0

    .line 793
    invoke-virtual {v0, v2}, Landroidx/camera/video/VideoCapture$Builder;->setDynamicRange(Landroidx/camera/core/DynamicRange;)Landroidx/camera/video/VideoCapture$Builder;

    move-result-object v0

    sget-object v1, Landroidx/camera/core/impl/UseCaseConfigFactory$CaptureType;->VIDEO_CAPTURE:Landroidx/camera/core/impl/UseCaseConfigFactory$CaptureType;

    .line 794
    invoke-virtual {v0, v1}, Landroidx/camera/video/VideoCapture$Builder;->setCaptureType(Landroidx/camera/core/impl/UseCaseConfigFactory$CaptureType;)Landroidx/camera/video/VideoCapture$Builder;

    move-result-object v0

    .line 796
    invoke-virtual {v0}, Landroidx/camera/video/VideoCapture$Builder;->getUseCaseConfig()Landroidx/camera/video/impl/VideoCaptureConfig;

    move-result-object v0

    sput-object v0, Landroidx/camera/video/VideoCapture$Defaults;->DEFAULT_CONFIG:Landroidx/camera/video/impl/VideoCaptureConfig;

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 771
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method private static createFinder()Landroidx/arch/core/util/Function;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroidx/arch/core/util/Function<",
            "Landroidx/camera/video/internal/encoder/VideoEncoderConfig;",
            "Landroidx/camera/video/internal/encoder/VideoEncoderInfo;",
            ">;"
        }
    .end annotation

    .line 801
    new-instance v0, Landroidx/camera/video/VideoCapture$Defaults$$ExternalSyntheticLambda0;

    invoke-direct {v0}, Landroidx/camera/video/VideoCapture$Defaults$$ExternalSyntheticLambda0;-><init>()V

    return-object v0
.end method

.method static synthetic lambda$createFinder$0(Landroidx/camera/video/internal/encoder/VideoEncoderConfig;)Landroidx/camera/video/internal/encoder/VideoEncoderInfo;
    .locals 2

    .line 803
    :try_start_0
    invoke-static {p0}, Landroidx/camera/video/internal/encoder/VideoEncoderInfoImpl;->from(Landroidx/camera/video/internal/encoder/VideoEncoderConfig;)Landroidx/camera/video/internal/encoder/VideoEncoderInfoImpl;

    move-result-object p0
    :try_end_0
    .catch Landroidx/camera/video/internal/encoder/InvalidConfigException; {:try_start_0 .. :try_end_0} :catch_0

    return-object p0

    :catch_0
    move-exception p0

    .line 805
    const-string v0, "VideoCapture"

    const-string v1, "Unable to find VideoEncoderInfo"

    invoke-static {v0, v1, p0}, Landroidx/camera/core/Logger;->w(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    const/4 p0, 0x0

    return-object p0
.end method


# virtual methods
.method public bridge synthetic getConfig()Landroidx/camera/core/impl/Config;
    .locals 1

    .line 770
    invoke-virtual {p0}, Landroidx/camera/video/VideoCapture$Defaults;->getConfig()Landroidx/camera/video/impl/VideoCaptureConfig;

    move-result-object v0

    return-object v0
.end method

.method public getConfig()Landroidx/camera/video/impl/VideoCaptureConfig;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Landroidx/camera/video/impl/VideoCaptureConfig<",
            "*>;"
        }
    .end annotation

    .line 814
    sget-object v0, Landroidx/camera/video/VideoCapture$Defaults;->DEFAULT_CONFIG:Landroidx/camera/video/impl/VideoCaptureConfig;

    return-object v0
.end method
