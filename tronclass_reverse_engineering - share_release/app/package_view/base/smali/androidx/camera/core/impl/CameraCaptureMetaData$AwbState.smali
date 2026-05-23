.class public final enum Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;
.super Ljava/lang/Enum;
.source "CameraCaptureMetaData.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/impl/CameraCaptureMetaData;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4019
    name = "AwbState"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

.field public static final enum CONVERGED:Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

.field public static final enum INACTIVE:Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

.field public static final enum LOCKED:Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

.field public static final enum METERING:Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

.field public static final enum UNKNOWN:Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;


# direct methods
.method private static synthetic $values()[Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;
    .locals 5

    .line 106
    sget-object v0, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;->UNKNOWN:Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    sget-object v1, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;->INACTIVE:Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    sget-object v2, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;->METERING:Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    sget-object v3, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;->CONVERGED:Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    sget-object v4, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;->LOCKED:Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    filled-new-array {v0, v1, v2, v3, v4}, [Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 3

    .line 109
    new-instance v0, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    const-string v1, "UNKNOWN"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;->UNKNOWN:Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    .line 112
    new-instance v0, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    const-string v1, "INACTIVE"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;->INACTIVE:Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    .line 115
    new-instance v0, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    const-string v1, "METERING"

    const/4 v2, 0x2

    invoke-direct {v0, v1, v2}, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;->METERING:Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    .line 118
    new-instance v0, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    const-string v1, "CONVERGED"

    const/4 v2, 0x3

    invoke-direct {v0, v1, v2}, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;->CONVERGED:Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    .line 121
    new-instance v0, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    const-string v1, "LOCKED"

    const/4 v2, 0x4

    invoke-direct {v0, v1, v2}, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;->LOCKED:Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    .line 106
    invoke-static {}, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;->$values()[Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    move-result-object v0

    sput-object v0, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;->$VALUES:[Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 106
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;
    .locals 1

    .line 106
    const-class v0, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    return-object p0
.end method

.method public static values()[Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;
    .locals 1

    .line 106
    sget-object v0, Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;->$VALUES:[Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    invoke-virtual {v0}, [Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Landroidx/camera/core/impl/CameraCaptureMetaData$AwbState;

    return-object v0
.end method
