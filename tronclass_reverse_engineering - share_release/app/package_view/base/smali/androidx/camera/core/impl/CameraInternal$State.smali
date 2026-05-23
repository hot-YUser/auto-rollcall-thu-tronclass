.class public final enum Landroidx/camera/core/impl/CameraInternal$State;
.super Ljava/lang/Enum;
.source "CameraInternal.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/impl/CameraInternal;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4019
    name = "State"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Landroidx/camera/core/impl/CameraInternal$State;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Landroidx/camera/core/impl/CameraInternal$State;

.field public static final enum CLOSED:Landroidx/camera/core/impl/CameraInternal$State;

.field public static final enum CLOSING:Landroidx/camera/core/impl/CameraInternal$State;

.field public static final enum CONFIGURED:Landroidx/camera/core/impl/CameraInternal$State;

.field public static final enum OPEN:Landroidx/camera/core/impl/CameraInternal$State;

.field public static final enum OPENING:Landroidx/camera/core/impl/CameraInternal$State;

.field public static final enum PENDING_OPEN:Landroidx/camera/core/impl/CameraInternal$State;

.field public static final enum RELEASED:Landroidx/camera/core/impl/CameraInternal$State;

.field public static final enum RELEASING:Landroidx/camera/core/impl/CameraInternal$State;


# instance fields
.field private final mHoldsCameraSlot:Z


# direct methods
.method private static synthetic $values()[Landroidx/camera/core/impl/CameraInternal$State;
    .locals 8

    .line 51
    sget-object v0, Landroidx/camera/core/impl/CameraInternal$State;->PENDING_OPEN:Landroidx/camera/core/impl/CameraInternal$State;

    sget-object v1, Landroidx/camera/core/impl/CameraInternal$State;->OPENING:Landroidx/camera/core/impl/CameraInternal$State;

    sget-object v2, Landroidx/camera/core/impl/CameraInternal$State;->OPEN:Landroidx/camera/core/impl/CameraInternal$State;

    sget-object v3, Landroidx/camera/core/impl/CameraInternal$State;->CONFIGURED:Landroidx/camera/core/impl/CameraInternal$State;

    sget-object v4, Landroidx/camera/core/impl/CameraInternal$State;->CLOSING:Landroidx/camera/core/impl/CameraInternal$State;

    sget-object v5, Landroidx/camera/core/impl/CameraInternal$State;->CLOSED:Landroidx/camera/core/impl/CameraInternal$State;

    sget-object v6, Landroidx/camera/core/impl/CameraInternal$State;->RELEASING:Landroidx/camera/core/impl/CameraInternal$State;

    sget-object v7, Landroidx/camera/core/impl/CameraInternal$State;->RELEASED:Landroidx/camera/core/impl/CameraInternal$State;

    filled-new-array/range {v0 .. v7}, [Landroidx/camera/core/impl/CameraInternal$State;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 5

    .line 58
    new-instance v0, Landroidx/camera/core/impl/CameraInternal$State;

    const-string v1, "PENDING_OPEN"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2, v2}, Landroidx/camera/core/impl/CameraInternal$State;-><init>(Ljava/lang/String;IZ)V

    sput-object v0, Landroidx/camera/core/impl/CameraInternal$State;->PENDING_OPEN:Landroidx/camera/core/impl/CameraInternal$State;

    .line 64
    new-instance v0, Landroidx/camera/core/impl/CameraInternal$State;

    const-string v1, "OPENING"

    const/4 v3, 0x1

    invoke-direct {v0, v1, v3, v3}, Landroidx/camera/core/impl/CameraInternal$State;-><init>(Ljava/lang/String;IZ)V

    sput-object v0, Landroidx/camera/core/impl/CameraInternal$State;->OPENING:Landroidx/camera/core/impl/CameraInternal$State;

    .line 68
    new-instance v0, Landroidx/camera/core/impl/CameraInternal$State;

    const-string v1, "OPEN"

    const/4 v4, 0x2

    invoke-direct {v0, v1, v4, v3}, Landroidx/camera/core/impl/CameraInternal$State;-><init>(Ljava/lang/String;IZ)V

    sput-object v0, Landroidx/camera/core/impl/CameraInternal$State;->OPEN:Landroidx/camera/core/impl/CameraInternal$State;

    .line 78
    new-instance v0, Landroidx/camera/core/impl/CameraInternal$State;

    const-string v1, "CONFIGURED"

    const/4 v4, 0x3

    invoke-direct {v0, v1, v4, v3}, Landroidx/camera/core/impl/CameraInternal$State;-><init>(Ljava/lang/String;IZ)V

    sput-object v0, Landroidx/camera/core/impl/CameraInternal$State;->CONFIGURED:Landroidx/camera/core/impl/CameraInternal$State;

    .line 84
    new-instance v0, Landroidx/camera/core/impl/CameraInternal$State;

    const-string v1, "CLOSING"

    const/4 v4, 0x4

    invoke-direct {v0, v1, v4, v3}, Landroidx/camera/core/impl/CameraInternal$State;-><init>(Ljava/lang/String;IZ)V

    sput-object v0, Landroidx/camera/core/impl/CameraInternal$State;->CLOSING:Landroidx/camera/core/impl/CameraInternal$State;

    .line 88
    new-instance v0, Landroidx/camera/core/impl/CameraInternal$State;

    const-string v1, "CLOSED"

    const/4 v4, 0x5

    invoke-direct {v0, v1, v4, v2}, Landroidx/camera/core/impl/CameraInternal$State;-><init>(Ljava/lang/String;IZ)V

    sput-object v0, Landroidx/camera/core/impl/CameraInternal$State;->CLOSED:Landroidx/camera/core/impl/CameraInternal$State;

    .line 97
    new-instance v0, Landroidx/camera/core/impl/CameraInternal$State;

    const-string v1, "RELEASING"

    const/4 v4, 0x6

    invoke-direct {v0, v1, v4, v3}, Landroidx/camera/core/impl/CameraInternal$State;-><init>(Ljava/lang/String;IZ)V

    sput-object v0, Landroidx/camera/core/impl/CameraInternal$State;->RELEASING:Landroidx/camera/core/impl/CameraInternal$State;

    .line 101
    new-instance v0, Landroidx/camera/core/impl/CameraInternal$State;

    const-string v1, "RELEASED"

    const/4 v3, 0x7

    invoke-direct {v0, v1, v3, v2}, Landroidx/camera/core/impl/CameraInternal$State;-><init>(Ljava/lang/String;IZ)V

    sput-object v0, Landroidx/camera/core/impl/CameraInternal$State;->RELEASED:Landroidx/camera/core/impl/CameraInternal$State;

    .line 51
    invoke-static {}, Landroidx/camera/core/impl/CameraInternal$State;->$values()[Landroidx/camera/core/impl/CameraInternal$State;

    move-result-object v0

    sput-object v0, Landroidx/camera/core/impl/CameraInternal$State;->$VALUES:[Landroidx/camera/core/impl/CameraInternal$State;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;IZ)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(Z)V"
        }
    .end annotation

    .line 105
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    .line 106
    iput-boolean p3, p0, Landroidx/camera/core/impl/CameraInternal$State;->mHoldsCameraSlot:Z

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Landroidx/camera/core/impl/CameraInternal$State;
    .locals 1

    .line 51
    const-class v0, Landroidx/camera/core/impl/CameraInternal$State;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Landroidx/camera/core/impl/CameraInternal$State;

    return-object p0
.end method

.method public static values()[Landroidx/camera/core/impl/CameraInternal$State;
    .locals 1

    .line 51
    sget-object v0, Landroidx/camera/core/impl/CameraInternal$State;->$VALUES:[Landroidx/camera/core/impl/CameraInternal$State;

    invoke-virtual {v0}, [Landroidx/camera/core/impl/CameraInternal$State;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Landroidx/camera/core/impl/CameraInternal$State;

    return-object v0
.end method


# virtual methods
.method holdsCameraSlot()Z
    .locals 1

    .line 117
    iget-boolean v0, p0, Landroidx/camera/core/impl/CameraInternal$State;->mHoldsCameraSlot:Z

    return v0
.end method
