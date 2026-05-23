.class final enum Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;
.super Ljava/lang/Enum;
.source "EncoderImpl.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/internal/encoder/EncoderImpl;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4018
    name = "InternalState"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

.field public static final enum CONFIGURED:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

.field public static final enum ERROR:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

.field public static final enum PAUSED:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

.field public static final enum PENDING_RELEASE:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

.field public static final enum PENDING_START:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

.field public static final enum PENDING_START_PAUSED:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

.field public static final enum RELEASED:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

.field public static final enum STARTED:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

.field public static final enum STOPPING:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;


# direct methods
.method private static synthetic $values()[Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;
    .locals 9

    .line 92
    sget-object v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->CONFIGURED:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    sget-object v1, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->STARTED:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    sget-object v2, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->PAUSED:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    sget-object v3, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->STOPPING:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    sget-object v4, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->PENDING_START:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    sget-object v5, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->PENDING_START_PAUSED:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    sget-object v6, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->PENDING_RELEASE:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    sget-object v7, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->ERROR:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    sget-object v8, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->RELEASED:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    filled-new-array/range {v0 .. v8}, [Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 3

    .line 96
    new-instance v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    const-string v1, "CONFIGURED"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->CONFIGURED:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    .line 102
    new-instance v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    const-string v1, "STARTED"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->STARTED:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    .line 108
    new-instance v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    const-string v1, "PAUSED"

    const/4 v2, 0x2

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->PAUSED:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    .line 114
    new-instance v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    const-string v1, "STOPPING"

    const/4 v2, 0x3

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->STOPPING:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    .line 120
    new-instance v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    const-string v1, "PENDING_START"

    const/4 v2, 0x4

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->PENDING_START:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    .line 127
    new-instance v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    const-string v1, "PENDING_START_PAUSED"

    const/4 v2, 0x5

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->PENDING_START_PAUSED:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    .line 133
    new-instance v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    const-string v1, "PENDING_RELEASE"

    const/4 v2, 0x6

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->PENDING_RELEASE:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    .line 141
    new-instance v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    const-string v1, "ERROR"

    const/4 v2, 0x7

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->ERROR:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    .line 144
    new-instance v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    const-string v1, "RELEASED"

    const/16 v2, 0x8

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->RELEASED:Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    .line 92
    invoke-static {}, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->$values()[Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    move-result-object v0

    sput-object v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->$VALUES:[Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 92
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;
    .locals 1

    .line 92
    const-class v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    return-object p0
.end method

.method public static values()[Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;
    .locals 1

    .line 92
    sget-object v0, Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->$VALUES:[Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    invoke-virtual {v0}, [Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Landroidx/camera/video/internal/encoder/EncoderImpl$InternalState;

    return-object v0
.end method
