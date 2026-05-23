.class final enum Landroidx/camera/core/ImageProcessingUtil$Result;
.super Ljava/lang/Enum;
.source "ImageProcessingUtil.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/ImageProcessingUtil;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4018
    name = "Result"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Landroidx/camera/core/ImageProcessingUtil$Result;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Landroidx/camera/core/ImageProcessingUtil$Result;

.field public static final enum ERROR_CONVERSION:Landroidx/camera/core/ImageProcessingUtil$Result;

.field public static final enum SUCCESS:Landroidx/camera/core/ImageProcessingUtil$Result;

.field public static final enum UNKNOWN:Landroidx/camera/core/ImageProcessingUtil$Result;


# direct methods
.method private static synthetic $values()[Landroidx/camera/core/ImageProcessingUtil$Result;
    .locals 3

    .line 59
    sget-object v0, Landroidx/camera/core/ImageProcessingUtil$Result;->UNKNOWN:Landroidx/camera/core/ImageProcessingUtil$Result;

    sget-object v1, Landroidx/camera/core/ImageProcessingUtil$Result;->SUCCESS:Landroidx/camera/core/ImageProcessingUtil$Result;

    sget-object v2, Landroidx/camera/core/ImageProcessingUtil$Result;->ERROR_CONVERSION:Landroidx/camera/core/ImageProcessingUtil$Result;

    filled-new-array {v0, v1, v2}, [Landroidx/camera/core/ImageProcessingUtil$Result;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 3

    .line 60
    new-instance v0, Landroidx/camera/core/ImageProcessingUtil$Result;

    const-string v1, "UNKNOWN"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Landroidx/camera/core/ImageProcessingUtil$Result;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/core/ImageProcessingUtil$Result;->UNKNOWN:Landroidx/camera/core/ImageProcessingUtil$Result;

    .line 61
    new-instance v0, Landroidx/camera/core/ImageProcessingUtil$Result;

    const-string v1, "SUCCESS"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Landroidx/camera/core/ImageProcessingUtil$Result;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/core/ImageProcessingUtil$Result;->SUCCESS:Landroidx/camera/core/ImageProcessingUtil$Result;

    .line 62
    new-instance v0, Landroidx/camera/core/ImageProcessingUtil$Result;

    const-string v1, "ERROR_CONVERSION"

    const/4 v2, 0x2

    invoke-direct {v0, v1, v2}, Landroidx/camera/core/ImageProcessingUtil$Result;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/core/ImageProcessingUtil$Result;->ERROR_CONVERSION:Landroidx/camera/core/ImageProcessingUtil$Result;

    .line 59
    invoke-static {}, Landroidx/camera/core/ImageProcessingUtil$Result;->$values()[Landroidx/camera/core/ImageProcessingUtil$Result;

    move-result-object v0

    sput-object v0, Landroidx/camera/core/ImageProcessingUtil$Result;->$VALUES:[Landroidx/camera/core/ImageProcessingUtil$Result;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 59
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Landroidx/camera/core/ImageProcessingUtil$Result;
    .locals 1

    .line 59
    const-class v0, Landroidx/camera/core/ImageProcessingUtil$Result;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Landroidx/camera/core/ImageProcessingUtil$Result;

    return-object p0
.end method

.method public static values()[Landroidx/camera/core/ImageProcessingUtil$Result;
    .locals 1

    .line 59
    sget-object v0, Landroidx/camera/core/ImageProcessingUtil$Result;->$VALUES:[Landroidx/camera/core/ImageProcessingUtil$Result;

    invoke-virtual {v0}, [Landroidx/camera/core/ImageProcessingUtil$Result;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Landroidx/camera/core/ImageProcessingUtil$Result;

    return-object v0
.end method
