.class public final enum Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;
.super Ljava/lang/Enum;
.source "ImageUtil.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4019
    name = "FailureType"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;

.field public static final enum DECODE_FAILED:Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;

.field public static final enum ENCODE_FAILED:Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;

.field public static final enum UNKNOWN:Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;


# direct methods
.method private static synthetic $values()[Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;
    .locals 3

    .line 476
    sget-object v0, Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;->ENCODE_FAILED:Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;

    sget-object v1, Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;->DECODE_FAILED:Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;

    sget-object v2, Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;->UNKNOWN:Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;

    filled-new-array {v0, v1, v2}, [Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 3

    .line 477
    new-instance v0, Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;

    const-string v1, "ENCODE_FAILED"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;->ENCODE_FAILED:Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;

    .line 478
    new-instance v0, Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;

    const-string v1, "DECODE_FAILED"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;->DECODE_FAILED:Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;

    .line 479
    new-instance v0, Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;

    const-string v1, "UNKNOWN"

    const/4 v2, 0x2

    invoke-direct {v0, v1, v2}, Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;->UNKNOWN:Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;

    .line 476
    invoke-static {}, Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;->$values()[Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;

    move-result-object v0

    sput-object v0, Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;->$VALUES:[Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 476
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;
    .locals 1

    .line 476
    const-class v0, Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;

    return-object p0
.end method

.method public static values()[Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;
    .locals 1

    .line 476
    sget-object v0, Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;->$VALUES:[Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;

    invoke-virtual {v0}, [Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Landroidx/camera/core/internal/utils/ImageUtil$CodecFailedException$FailureType;

    return-object v0
.end method
