.class final enum Landroidx/camera/video/Recorder$State;
.super Ljava/lang/Enum;
.source "Recorder.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/Recorder;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4018
    name = "State"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Landroidx/camera/video/Recorder$State;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Landroidx/camera/video/Recorder$State;

.field public static final enum CONFIGURING:Landroidx/camera/video/Recorder$State;

.field public static final enum ERROR:Landroidx/camera/video/Recorder$State;

.field public static final enum IDLING:Landroidx/camera/video/Recorder$State;

.field public static final enum PAUSED:Landroidx/camera/video/Recorder$State;

.field public static final enum PENDING_PAUSED:Landroidx/camera/video/Recorder$State;

.field public static final enum PENDING_RECORDING:Landroidx/camera/video/Recorder$State;

.field public static final enum RECORDING:Landroidx/camera/video/Recorder$State;

.field public static final enum RESETTING:Landroidx/camera/video/Recorder$State;

.field public static final enum STOPPING:Landroidx/camera/video/Recorder$State;


# direct methods
.method private static synthetic $values()[Landroidx/camera/video/Recorder$State;
    .locals 9

    .line 169
    sget-object v0, Landroidx/camera/video/Recorder$State;->CONFIGURING:Landroidx/camera/video/Recorder$State;

    sget-object v1, Landroidx/camera/video/Recorder$State;->PENDING_RECORDING:Landroidx/camera/video/Recorder$State;

    sget-object v2, Landroidx/camera/video/Recorder$State;->PENDING_PAUSED:Landroidx/camera/video/Recorder$State;

    sget-object v3, Landroidx/camera/video/Recorder$State;->IDLING:Landroidx/camera/video/Recorder$State;

    sget-object v4, Landroidx/camera/video/Recorder$State;->RECORDING:Landroidx/camera/video/Recorder$State;

    sget-object v5, Landroidx/camera/video/Recorder$State;->PAUSED:Landroidx/camera/video/Recorder$State;

    sget-object v6, Landroidx/camera/video/Recorder$State;->STOPPING:Landroidx/camera/video/Recorder$State;

    sget-object v7, Landroidx/camera/video/Recorder$State;->RESETTING:Landroidx/camera/video/Recorder$State;

    sget-object v8, Landroidx/camera/video/Recorder$State;->ERROR:Landroidx/camera/video/Recorder$State;

    filled-new-array/range {v0 .. v8}, [Landroidx/camera/video/Recorder$State;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 3

    .line 175
    new-instance v0, Landroidx/camera/video/Recorder$State;

    const-string v1, "CONFIGURING"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/Recorder$State;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/Recorder$State;->CONFIGURING:Landroidx/camera/video/Recorder$State;

    .line 182
    new-instance v0, Landroidx/camera/video/Recorder$State;

    const-string v1, "PENDING_RECORDING"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/Recorder$State;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/Recorder$State;->PENDING_RECORDING:Landroidx/camera/video/Recorder$State;

    .line 189
    new-instance v0, Landroidx/camera/video/Recorder$State;

    const-string v1, "PENDING_PAUSED"

    const/4 v2, 0x2

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/Recorder$State;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/Recorder$State;->PENDING_PAUSED:Landroidx/camera/video/Recorder$State;

    .line 193
    new-instance v0, Landroidx/camera/video/Recorder$State;

    const-string v1, "IDLING"

    const/4 v2, 0x3

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/Recorder$State;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/Recorder$State;->IDLING:Landroidx/camera/video/Recorder$State;

    .line 197
    new-instance v0, Landroidx/camera/video/Recorder$State;

    const-string v1, "RECORDING"

    const/4 v2, 0x4

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/Recorder$State;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/Recorder$State;->RECORDING:Landroidx/camera/video/Recorder$State;

    .line 201
    new-instance v0, Landroidx/camera/video/Recorder$State;

    const-string v1, "PAUSED"

    const/4 v2, 0x5

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/Recorder$State;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/Recorder$State;->PAUSED:Landroidx/camera/video/Recorder$State;

    .line 205
    new-instance v0, Landroidx/camera/video/Recorder$State;

    const-string v1, "STOPPING"

    const/4 v2, 0x6

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/Recorder$State;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/Recorder$State;->STOPPING:Landroidx/camera/video/Recorder$State;

    .line 209
    new-instance v0, Landroidx/camera/video/Recorder$State;

    const-string v1, "RESETTING"

    const/4 v2, 0x7

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/Recorder$State;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/Recorder$State;->RESETTING:Landroidx/camera/video/Recorder$State;

    .line 215
    new-instance v0, Landroidx/camera/video/Recorder$State;

    const-string v1, "ERROR"

    const/16 v2, 0x8

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/Recorder$State;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/Recorder$State;->ERROR:Landroidx/camera/video/Recorder$State;

    .line 169
    invoke-static {}, Landroidx/camera/video/Recorder$State;->$values()[Landroidx/camera/video/Recorder$State;

    move-result-object v0

    sput-object v0, Landroidx/camera/video/Recorder$State;->$VALUES:[Landroidx/camera/video/Recorder$State;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 169
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Landroidx/camera/video/Recorder$State;
    .locals 1

    .line 169
    const-class v0, Landroidx/camera/video/Recorder$State;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Landroidx/camera/video/Recorder$State;

    return-object p0
.end method

.method public static values()[Landroidx/camera/video/Recorder$State;
    .locals 1

    .line 169
    sget-object v0, Landroidx/camera/video/Recorder$State;->$VALUES:[Landroidx/camera/video/Recorder$State;

    invoke-virtual {v0}, [Landroidx/camera/video/Recorder$State;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Landroidx/camera/video/Recorder$State;

    return-object v0
.end method
