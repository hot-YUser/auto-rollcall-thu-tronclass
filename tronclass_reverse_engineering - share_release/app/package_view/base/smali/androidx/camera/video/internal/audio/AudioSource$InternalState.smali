.class final enum Landroidx/camera/video/internal/audio/AudioSource$InternalState;
.super Ljava/lang/Enum;
.source "AudioSource.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/internal/audio/AudioSource;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4018
    name = "InternalState"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Landroidx/camera/video/internal/audio/AudioSource$InternalState;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Landroidx/camera/video/internal/audio/AudioSource$InternalState;

.field public static final enum CONFIGURED:Landroidx/camera/video/internal/audio/AudioSource$InternalState;

.field public static final enum RELEASED:Landroidx/camera/video/internal/audio/AudioSource$InternalState;

.field public static final enum STARTED:Landroidx/camera/video/internal/audio/AudioSource$InternalState;


# direct methods
.method private static synthetic $values()[Landroidx/camera/video/internal/audio/AudioSource$InternalState;
    .locals 3

    .line 85
    sget-object v0, Landroidx/camera/video/internal/audio/AudioSource$InternalState;->CONFIGURED:Landroidx/camera/video/internal/audio/AudioSource$InternalState;

    sget-object v1, Landroidx/camera/video/internal/audio/AudioSource$InternalState;->STARTED:Landroidx/camera/video/internal/audio/AudioSource$InternalState;

    sget-object v2, Landroidx/camera/video/internal/audio/AudioSource$InternalState;->RELEASED:Landroidx/camera/video/internal/audio/AudioSource$InternalState;

    filled-new-array {v0, v1, v2}, [Landroidx/camera/video/internal/audio/AudioSource$InternalState;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 3

    .line 87
    new-instance v0, Landroidx/camera/video/internal/audio/AudioSource$InternalState;

    const-string v1, "CONFIGURED"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/internal/audio/AudioSource$InternalState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/internal/audio/AudioSource$InternalState;->CONFIGURED:Landroidx/camera/video/internal/audio/AudioSource$InternalState;

    .line 90
    new-instance v0, Landroidx/camera/video/internal/audio/AudioSource$InternalState;

    const-string v1, "STARTED"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/internal/audio/AudioSource$InternalState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/internal/audio/AudioSource$InternalState;->STARTED:Landroidx/camera/video/internal/audio/AudioSource$InternalState;

    .line 93
    new-instance v0, Landroidx/camera/video/internal/audio/AudioSource$InternalState;

    const-string v1, "RELEASED"

    const/4 v2, 0x2

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/internal/audio/AudioSource$InternalState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/internal/audio/AudioSource$InternalState;->RELEASED:Landroidx/camera/video/internal/audio/AudioSource$InternalState;

    .line 85
    invoke-static {}, Landroidx/camera/video/internal/audio/AudioSource$InternalState;->$values()[Landroidx/camera/video/internal/audio/AudioSource$InternalState;

    move-result-object v0

    sput-object v0, Landroidx/camera/video/internal/audio/AudioSource$InternalState;->$VALUES:[Landroidx/camera/video/internal/audio/AudioSource$InternalState;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 85
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Landroidx/camera/video/internal/audio/AudioSource$InternalState;
    .locals 1

    .line 85
    const-class v0, Landroidx/camera/video/internal/audio/AudioSource$InternalState;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Landroidx/camera/video/internal/audio/AudioSource$InternalState;

    return-object p0
.end method

.method public static values()[Landroidx/camera/video/internal/audio/AudioSource$InternalState;
    .locals 1

    .line 85
    sget-object v0, Landroidx/camera/video/internal/audio/AudioSource$InternalState;->$VALUES:[Landroidx/camera/video/internal/audio/AudioSource$InternalState;

    invoke-virtual {v0}, [Landroidx/camera/video/internal/audio/AudioSource$InternalState;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Landroidx/camera/video/internal/audio/AudioSource$InternalState;

    return-object v0
.end method
