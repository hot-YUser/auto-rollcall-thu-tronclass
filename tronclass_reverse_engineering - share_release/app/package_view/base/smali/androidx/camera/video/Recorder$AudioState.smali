.class final enum Landroidx/camera/video/Recorder$AudioState;
.super Ljava/lang/Enum;
.source "Recorder.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/Recorder;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4018
    name = "AudioState"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Landroidx/camera/video/Recorder$AudioState;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Landroidx/camera/video/Recorder$AudioState;

.field public static final enum DISABLED:Landroidx/camera/video/Recorder$AudioState;

.field public static final enum ENABLED:Landroidx/camera/video/Recorder$AudioState;

.field public static final enum ERROR_ENCODER:Landroidx/camera/video/Recorder$AudioState;

.field public static final enum ERROR_SOURCE:Landroidx/camera/video/Recorder$AudioState;

.field public static final enum IDLING:Landroidx/camera/video/Recorder$AudioState;

.field public static final enum INITIALIZING:Landroidx/camera/video/Recorder$AudioState;


# direct methods
.method private static synthetic $values()[Landroidx/camera/video/Recorder$AudioState;
    .locals 6

    .line 218
    sget-object v0, Landroidx/camera/video/Recorder$AudioState;->INITIALIZING:Landroidx/camera/video/Recorder$AudioState;

    sget-object v1, Landroidx/camera/video/Recorder$AudioState;->IDLING:Landroidx/camera/video/Recorder$AudioState;

    sget-object v2, Landroidx/camera/video/Recorder$AudioState;->DISABLED:Landroidx/camera/video/Recorder$AudioState;

    sget-object v3, Landroidx/camera/video/Recorder$AudioState;->ENABLED:Landroidx/camera/video/Recorder$AudioState;

    sget-object v4, Landroidx/camera/video/Recorder$AudioState;->ERROR_ENCODER:Landroidx/camera/video/Recorder$AudioState;

    sget-object v5, Landroidx/camera/video/Recorder$AudioState;->ERROR_SOURCE:Landroidx/camera/video/Recorder$AudioState;

    filled-new-array/range {v0 .. v5}, [Landroidx/camera/video/Recorder$AudioState;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 3

    .line 222
    new-instance v0, Landroidx/camera/video/Recorder$AudioState;

    const-string v1, "INITIALIZING"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/Recorder$AudioState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/Recorder$AudioState;->INITIALIZING:Landroidx/camera/video/Recorder$AudioState;

    .line 226
    new-instance v0, Landroidx/camera/video/Recorder$AudioState;

    const-string v1, "IDLING"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/Recorder$AudioState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/Recorder$AudioState;->IDLING:Landroidx/camera/video/Recorder$AudioState;

    .line 230
    new-instance v0, Landroidx/camera/video/Recorder$AudioState;

    const-string v1, "DISABLED"

    const/4 v2, 0x2

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/Recorder$AudioState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/Recorder$AudioState;->DISABLED:Landroidx/camera/video/Recorder$AudioState;

    .line 234
    new-instance v0, Landroidx/camera/video/Recorder$AudioState;

    const-string v1, "ENABLED"

    const/4 v2, 0x3

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/Recorder$AudioState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/Recorder$AudioState;->ENABLED:Landroidx/camera/video/Recorder$AudioState;

    .line 238
    new-instance v0, Landroidx/camera/video/Recorder$AudioState;

    const-string v1, "ERROR_ENCODER"

    const/4 v2, 0x4

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/Recorder$AudioState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/Recorder$AudioState;->ERROR_ENCODER:Landroidx/camera/video/Recorder$AudioState;

    .line 242
    new-instance v0, Landroidx/camera/video/Recorder$AudioState;

    const-string v1, "ERROR_SOURCE"

    const/4 v2, 0x5

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/Recorder$AudioState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/Recorder$AudioState;->ERROR_SOURCE:Landroidx/camera/video/Recorder$AudioState;

    .line 218
    invoke-static {}, Landroidx/camera/video/Recorder$AudioState;->$values()[Landroidx/camera/video/Recorder$AudioState;

    move-result-object v0

    sput-object v0, Landroidx/camera/video/Recorder$AudioState;->$VALUES:[Landroidx/camera/video/Recorder$AudioState;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 218
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Landroidx/camera/video/Recorder$AudioState;
    .locals 1

    .line 218
    const-class v0, Landroidx/camera/video/Recorder$AudioState;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Landroidx/camera/video/Recorder$AudioState;

    return-object p0
.end method

.method public static values()[Landroidx/camera/video/Recorder$AudioState;
    .locals 1

    .line 218
    sget-object v0, Landroidx/camera/video/Recorder$AudioState;->$VALUES:[Landroidx/camera/video/Recorder$AudioState;

    invoke-virtual {v0}, [Landroidx/camera/video/Recorder$AudioState;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Landroidx/camera/video/Recorder$AudioState;

    return-object v0
.end method
