.class public final enum Landroidx/camera/video/VideoOutput$SourceState;
.super Ljava/lang/Enum;
.source "VideoOutput.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/video/VideoOutput;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4019
    name = "SourceState"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Landroidx/camera/video/VideoOutput$SourceState;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Landroidx/camera/video/VideoOutput$SourceState;

.field public static final enum ACTIVE_NON_STREAMING:Landroidx/camera/video/VideoOutput$SourceState;

.field public static final enum ACTIVE_STREAMING:Landroidx/camera/video/VideoOutput$SourceState;

.field public static final enum INACTIVE:Landroidx/camera/video/VideoOutput$SourceState;


# direct methods
.method private static synthetic $values()[Landroidx/camera/video/VideoOutput$SourceState;
    .locals 3

    .line 51
    sget-object v0, Landroidx/camera/video/VideoOutput$SourceState;->ACTIVE_STREAMING:Landroidx/camera/video/VideoOutput$SourceState;

    sget-object v1, Landroidx/camera/video/VideoOutput$SourceState;->ACTIVE_NON_STREAMING:Landroidx/camera/video/VideoOutput$SourceState;

    sget-object v2, Landroidx/camera/video/VideoOutput$SourceState;->INACTIVE:Landroidx/camera/video/VideoOutput$SourceState;

    filled-new-array {v0, v1, v2}, [Landroidx/camera/video/VideoOutput$SourceState;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 3

    .line 54
    new-instance v0, Landroidx/camera/video/VideoOutput$SourceState;

    const-string v1, "ACTIVE_STREAMING"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/VideoOutput$SourceState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/VideoOutput$SourceState;->ACTIVE_STREAMING:Landroidx/camera/video/VideoOutput$SourceState;

    .line 56
    new-instance v0, Landroidx/camera/video/VideoOutput$SourceState;

    const-string v1, "ACTIVE_NON_STREAMING"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/VideoOutput$SourceState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/VideoOutput$SourceState;->ACTIVE_NON_STREAMING:Landroidx/camera/video/VideoOutput$SourceState;

    .line 58
    new-instance v0, Landroidx/camera/video/VideoOutput$SourceState;

    const-string v1, "INACTIVE"

    const/4 v2, 0x2

    invoke-direct {v0, v1, v2}, Landroidx/camera/video/VideoOutput$SourceState;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/camera/video/VideoOutput$SourceState;->INACTIVE:Landroidx/camera/video/VideoOutput$SourceState;

    .line 51
    invoke-static {}, Landroidx/camera/video/VideoOutput$SourceState;->$values()[Landroidx/camera/video/VideoOutput$SourceState;

    move-result-object v0

    sput-object v0, Landroidx/camera/video/VideoOutput$SourceState;->$VALUES:[Landroidx/camera/video/VideoOutput$SourceState;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 52
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Landroidx/camera/video/VideoOutput$SourceState;
    .locals 1

    .line 51
    const-class v0, Landroidx/camera/video/VideoOutput$SourceState;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Landroidx/camera/video/VideoOutput$SourceState;

    return-object p0
.end method

.method public static values()[Landroidx/camera/video/VideoOutput$SourceState;
    .locals 1

    .line 51
    sget-object v0, Landroidx/camera/video/VideoOutput$SourceState;->$VALUES:[Landroidx/camera/video/VideoOutput$SourceState;

    invoke-virtual {v0}, [Landroidx/camera/video/VideoOutput$SourceState;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Landroidx/camera/video/VideoOutput$SourceState;

    return-object v0
.end method
