.class public final enum Landroidx/camera/core/CameraState$Type;
.super Ljava/lang/Enum;
.source "CameraState.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/CameraState;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4019
    name = "Type"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Landroidx/camera/core/CameraState$Type;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Landroidx/camera/core/CameraState$Type;

.field public static final enum CLOSED:Landroidx/camera/core/CameraState$Type;

.field public static final enum CLOSING:Landroidx/camera/core/CameraState$Type;

.field public static final enum OPEN:Landroidx/camera/core/CameraState$Type;

.field public static final enum OPENING:Landroidx/camera/core/CameraState$Type;

.field public static final enum PENDING_OPEN:Landroidx/camera/core/CameraState$Type;


# direct methods
.method private static synthetic $values()[Landroidx/camera/core/CameraState$Type;
    .locals 5

    .line 282
    sget-object v0, Landroidx/camera/core/CameraState$Type;->PENDING_OPEN:Landroidx/camera/core/CameraState$Type;

    sget-object v1, Landroidx/camera/core/CameraState$Type;->OPENING:Landroidx/camera/core/CameraState$Type;

    sget-object v2, Landroidx/camera/core/CameraState$Type;->OPEN:Landroidx/camera/core/CameraState$Type;

    sget-object v3, Landroidx/camera/core/CameraState$Type;->CLOSING:Landroidx/camera/core/CameraState$Type;

    sget-object v4, Landroidx/camera/core/CameraState$Type;->CLOSED:Landroidx/camera/core/CameraState$Type;

    filled-new-array {v0, v1, v2, v3, v4}, [Landroidx/camera/core/CameraState$Type;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 3

    .line 306
    new-instance v0, Landroidx/camera/core/CameraState$Type;

    const-string v1, "PENDING_OPEN"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Landroidx/camera/core/CameraState$Type;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/core/CameraState$Type;->PENDING_OPEN:Landroidx/camera/core/CameraState$Type;

    .line 328
    new-instance v0, Landroidx/camera/core/CameraState$Type;

    const-string v1, "OPENING"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Landroidx/camera/core/CameraState$Type;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/core/CameraState$Type;->OPENING:Landroidx/camera/core/CameraState$Type;

    .line 342
    new-instance v0, Landroidx/camera/core/CameraState$Type;

    const-string v1, "OPEN"

    const/4 v2, 0x2

    invoke-direct {v0, v1, v2}, Landroidx/camera/core/CameraState$Type;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/core/CameraState$Type;->OPEN:Landroidx/camera/core/CameraState$Type;

    .line 357
    new-instance v0, Landroidx/camera/core/CameraState$Type;

    const-string v1, "CLOSING"

    const/4 v2, 0x3

    invoke-direct {v0, v1, v2}, Landroidx/camera/core/CameraState$Type;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/core/CameraState$Type;->CLOSING:Landroidx/camera/core/CameraState$Type;

    .line 373
    new-instance v0, Landroidx/camera/core/CameraState$Type;

    const-string v1, "CLOSED"

    const/4 v2, 0x4

    invoke-direct {v0, v1, v2}, Landroidx/camera/core/CameraState$Type;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/core/CameraState$Type;->CLOSED:Landroidx/camera/core/CameraState$Type;

    .line 282
    invoke-static {}, Landroidx/camera/core/CameraState$Type;->$values()[Landroidx/camera/core/CameraState$Type;

    move-result-object v0

    sput-object v0, Landroidx/camera/core/CameraState$Type;->$VALUES:[Landroidx/camera/core/CameraState$Type;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 282
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Landroidx/camera/core/CameraState$Type;
    .locals 1

    .line 282
    const-class v0, Landroidx/camera/core/CameraState$Type;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Landroidx/camera/core/CameraState$Type;

    return-object p0
.end method

.method public static values()[Landroidx/camera/core/CameraState$Type;
    .locals 1

    .line 282
    sget-object v0, Landroidx/camera/core/CameraState$Type;->$VALUES:[Landroidx/camera/core/CameraState$Type;

    invoke-virtual {v0}, [Landroidx/camera/core/CameraState$Type;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Landroidx/camera/core/CameraState$Type;

    return-object v0
.end method
