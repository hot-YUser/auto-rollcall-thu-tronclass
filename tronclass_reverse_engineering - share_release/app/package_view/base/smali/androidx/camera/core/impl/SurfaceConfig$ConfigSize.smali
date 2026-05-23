.class public final enum Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;
.super Ljava/lang/Enum;
.source "SurfaceConfig.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/impl/SurfaceConfig;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4019
    name = "ConfigSize"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

.field public static final enum MAXIMUM:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

.field public static final enum NOT_SUPPORT:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

.field public static final enum PREVIEW:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

.field public static final enum RECORD:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

.field public static final enum ULTRA_MAXIMUM:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

.field public static final enum VGA:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

.field public static final enum s1440p:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

.field public static final enum s720p:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;


# instance fields
.field final mId:I


# direct methods
.method private static synthetic $values()[Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;
    .locals 8

    .line 197
    sget-object v0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->VGA:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    sget-object v1, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->s720p:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    sget-object v2, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->PREVIEW:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    sget-object v3, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->s1440p:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    sget-object v4, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->RECORD:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    sget-object v5, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->MAXIMUM:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    sget-object v6, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->ULTRA_MAXIMUM:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    sget-object v7, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->NOT_SUPPORT:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    filled-new-array/range {v0 .. v7}, [Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 3

    .line 199
    new-instance v0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    const-string v1, "VGA"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2, v2}, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;-><init>(Ljava/lang/String;II)V

    sput-object v0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->VGA:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    .line 204
    new-instance v0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    const-string v1, "s720p"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2, v2}, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;-><init>(Ljava/lang/String;II)V

    sput-object v0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->s720p:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    .line 209
    new-instance v0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    const-string v1, "PREVIEW"

    const/4 v2, 0x2

    invoke-direct {v0, v1, v2, v2}, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;-><init>(Ljava/lang/String;II)V

    sput-object v0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->PREVIEW:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    .line 214
    new-instance v0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    const-string v1, "s1440p"

    const/4 v2, 0x3

    invoke-direct {v0, v1, v2, v2}, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;-><init>(Ljava/lang/String;II)V

    sput-object v0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->s1440p:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    .line 219
    new-instance v0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    const-string v1, "RECORD"

    const/4 v2, 0x4

    invoke-direct {v0, v1, v2, v2}, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;-><init>(Ljava/lang/String;II)V

    sput-object v0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->RECORD:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    .line 225
    new-instance v0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    const-string v1, "MAXIMUM"

    const/4 v2, 0x5

    invoke-direct {v0, v1, v2, v2}, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;-><init>(Ljava/lang/String;II)V

    sput-object v0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->MAXIMUM:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    .line 231
    new-instance v0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    const-string v1, "ULTRA_MAXIMUM"

    const/4 v2, 0x6

    invoke-direct {v0, v1, v2, v2}, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;-><init>(Ljava/lang/String;II)V

    sput-object v0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->ULTRA_MAXIMUM:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    .line 233
    new-instance v0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    const-string v1, "NOT_SUPPORT"

    const/4 v2, 0x7

    invoke-direct {v0, v1, v2, v2}, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;-><init>(Ljava/lang/String;II)V

    sput-object v0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->NOT_SUPPORT:Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    .line 197
    invoke-static {}, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->$values()[Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    move-result-object v0

    sput-object v0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->$VALUES:[Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;II)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(I)V"
        }
    .end annotation

    .line 237
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    .line 238
    iput p3, p0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->mId:I

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;
    .locals 1

    .line 197
    const-class v0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    return-object p0
.end method

.method public static values()[Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;
    .locals 1

    .line 197
    sget-object v0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->$VALUES:[Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    invoke-virtual {v0}, [Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;

    return-object v0
.end method


# virtual methods
.method getId()I
    .locals 1

    .line 242
    iget v0, p0, Landroidx/camera/core/impl/SurfaceConfig$ConfigSize;->mId:I

    return v0
.end method
