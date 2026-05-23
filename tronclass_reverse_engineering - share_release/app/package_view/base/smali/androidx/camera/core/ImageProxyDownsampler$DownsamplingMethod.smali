.class final enum Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;
.super Ljava/lang/Enum;
.source "ImageProxyDownsampler.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/ImageProxyDownsampler;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4018
    name = "DownsamplingMethod"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;

.field public static final enum AVERAGING:Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;

.field public static final enum NEAREST_NEIGHBOR:Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;


# direct methods
.method private static synthetic $values()[Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;
    .locals 2

    .line 215
    sget-object v0, Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;->NEAREST_NEIGHBOR:Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;

    sget-object v1, Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;->AVERAGING:Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;

    filled-new-array {v0, v1}, [Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 3

    .line 217
    new-instance v0, Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;

    const-string v1, "NEAREST_NEIGHBOR"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;->NEAREST_NEIGHBOR:Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;

    .line 219
    new-instance v0, Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;

    const-string v1, "AVERAGING"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;->AVERAGING:Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;

    .line 215
    invoke-static {}, Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;->$values()[Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;

    move-result-object v0

    sput-object v0, Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;->$VALUES:[Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 215
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;
    .locals 1

    .line 215
    const-class v0, Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;

    return-object p0
.end method

.method public static values()[Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;
    .locals 1

    .line 215
    sget-object v0, Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;->$VALUES:[Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;

    invoke-virtual {v0}, [Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Landroidx/camera/core/ImageProxyDownsampler$DownsamplingMethod;

    return-object v0
.end method
