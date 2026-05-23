.class final enum Landroidx/camera/camera2/internal/CaptureSession$State;
.super Ljava/lang/Enum;
.source "CaptureSession.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/camera2/internal/CaptureSession;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4018
    name = "State"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Landroidx/camera/camera2/internal/CaptureSession$State;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Landroidx/camera/camera2/internal/CaptureSession$State;

.field public static final enum CLOSED:Landroidx/camera/camera2/internal/CaptureSession$State;

.field public static final enum GET_SURFACE:Landroidx/camera/camera2/internal/CaptureSession$State;

.field public static final enum INITIALIZED:Landroidx/camera/camera2/internal/CaptureSession$State;

.field public static final enum OPENED:Landroidx/camera/camera2/internal/CaptureSession$State;

.field public static final enum OPENING:Landroidx/camera/camera2/internal/CaptureSession$State;

.field public static final enum RELEASED:Landroidx/camera/camera2/internal/CaptureSession$State;

.field public static final enum RELEASING:Landroidx/camera/camera2/internal/CaptureSession$State;

.field public static final enum UNINITIALIZED:Landroidx/camera/camera2/internal/CaptureSession$State;


# direct methods
.method private static synthetic $values()[Landroidx/camera/camera2/internal/CaptureSession$State;
    .locals 8

    .line 969
    sget-object v0, Landroidx/camera/camera2/internal/CaptureSession$State;->UNINITIALIZED:Landroidx/camera/camera2/internal/CaptureSession$State;

    sget-object v1, Landroidx/camera/camera2/internal/CaptureSession$State;->INITIALIZED:Landroidx/camera/camera2/internal/CaptureSession$State;

    sget-object v2, Landroidx/camera/camera2/internal/CaptureSession$State;->GET_SURFACE:Landroidx/camera/camera2/internal/CaptureSession$State;

    sget-object v3, Landroidx/camera/camera2/internal/CaptureSession$State;->OPENING:Landroidx/camera/camera2/internal/CaptureSession$State;

    sget-object v4, Landroidx/camera/camera2/internal/CaptureSession$State;->OPENED:Landroidx/camera/camera2/internal/CaptureSession$State;

    sget-object v5, Landroidx/camera/camera2/internal/CaptureSession$State;->CLOSED:Landroidx/camera/camera2/internal/CaptureSession$State;

    sget-object v6, Landroidx/camera/camera2/internal/CaptureSession$State;->RELEASING:Landroidx/camera/camera2/internal/CaptureSession$State;

    sget-object v7, Landroidx/camera/camera2/internal/CaptureSession$State;->RELEASED:Landroidx/camera/camera2/internal/CaptureSession$State;

    filled-new-array/range {v0 .. v7}, [Landroidx/camera/camera2/internal/CaptureSession$State;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 3

    .line 971
    new-instance v0, Landroidx/camera/camera2/internal/CaptureSession$State;

    const-string v1, "UNINITIALIZED"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Landroidx/camera/camera2/internal/CaptureSession$State;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/camera2/internal/CaptureSession$State;->UNINITIALIZED:Landroidx/camera/camera2/internal/CaptureSession$State;

    .line 976
    new-instance v0, Landroidx/camera/camera2/internal/CaptureSession$State;

    const-string v1, "INITIALIZED"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Landroidx/camera/camera2/internal/CaptureSession$State;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/camera2/internal/CaptureSession$State;->INITIALIZED:Landroidx/camera/camera2/internal/CaptureSession$State;

    .line 981
    new-instance v0, Landroidx/camera/camera2/internal/CaptureSession$State;

    const-string v1, "GET_SURFACE"

    const/4 v2, 0x2

    invoke-direct {v0, v1, v2}, Landroidx/camera/camera2/internal/CaptureSession$State;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/camera2/internal/CaptureSession$State;->GET_SURFACE:Landroidx/camera/camera2/internal/CaptureSession$State;

    .line 986
    new-instance v0, Landroidx/camera/camera2/internal/CaptureSession$State;

    const-string v1, "OPENING"

    const/4 v2, 0x3

    invoke-direct {v0, v1, v2}, Landroidx/camera/camera2/internal/CaptureSession$State;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/camera2/internal/CaptureSession$State;->OPENING:Landroidx/camera/camera2/internal/CaptureSession$State;

    .line 992
    new-instance v0, Landroidx/camera/camera2/internal/CaptureSession$State;

    const-string v1, "OPENED"

    const/4 v2, 0x4

    invoke-direct {v0, v1, v2}, Landroidx/camera/camera2/internal/CaptureSession$State;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/camera2/internal/CaptureSession$State;->OPENED:Landroidx/camera/camera2/internal/CaptureSession$State;

    .line 999
    new-instance v0, Landroidx/camera/camera2/internal/CaptureSession$State;

    const-string v1, "CLOSED"

    const/4 v2, 0x5

    invoke-direct {v0, v1, v2}, Landroidx/camera/camera2/internal/CaptureSession$State;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/camera2/internal/CaptureSession$State;->CLOSED:Landroidx/camera/camera2/internal/CaptureSession$State;

    .line 1001
    new-instance v0, Landroidx/camera/camera2/internal/CaptureSession$State;

    const-string v1, "RELEASING"

    const/4 v2, 0x6

    invoke-direct {v0, v1, v2}, Landroidx/camera/camera2/internal/CaptureSession$State;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/camera2/internal/CaptureSession$State;->RELEASING:Landroidx/camera/camera2/internal/CaptureSession$State;

    .line 1006
    new-instance v0, Landroidx/camera/camera2/internal/CaptureSession$State;

    const-string v1, "RELEASED"

    const/4 v2, 0x7

    invoke-direct {v0, v1, v2}, Landroidx/camera/camera2/internal/CaptureSession$State;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/camera2/internal/CaptureSession$State;->RELEASED:Landroidx/camera/camera2/internal/CaptureSession$State;

    .line 969
    invoke-static {}, Landroidx/camera/camera2/internal/CaptureSession$State;->$values()[Landroidx/camera/camera2/internal/CaptureSession$State;

    move-result-object v0

    sput-object v0, Landroidx/camera/camera2/internal/CaptureSession$State;->$VALUES:[Landroidx/camera/camera2/internal/CaptureSession$State;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 969
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Landroidx/camera/camera2/internal/CaptureSession$State;
    .locals 1

    .line 969
    const-class v0, Landroidx/camera/camera2/internal/CaptureSession$State;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Landroidx/camera/camera2/internal/CaptureSession$State;

    return-object p0
.end method

.method public static values()[Landroidx/camera/camera2/internal/CaptureSession$State;
    .locals 1

    .line 969
    sget-object v0, Landroidx/camera/camera2/internal/CaptureSession$State;->$VALUES:[Landroidx/camera/camera2/internal/CaptureSession$State;

    invoke-virtual {v0}, [Landroidx/camera/camera2/internal/CaptureSession$State;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Landroidx/camera/camera2/internal/CaptureSession$State;

    return-object v0
.end method
