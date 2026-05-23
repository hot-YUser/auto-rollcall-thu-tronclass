.class public final enum Landroidx/work/NetworkType;
.super Ljava/lang/Enum;
.source "NetworkType.java"


# annotations
.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Landroidx/work/NetworkType;",
        ">;"
    }
.end annotation


# static fields
.field private static final synthetic $VALUES:[Landroidx/work/NetworkType;

.field public static final enum CONNECTED:Landroidx/work/NetworkType;

.field public static final enum METERED:Landroidx/work/NetworkType;

.field public static final enum NOT_REQUIRED:Landroidx/work/NetworkType;

.field public static final enum NOT_ROAMING:Landroidx/work/NetworkType;

.field public static final enum TEMPORARILY_UNMETERED:Landroidx/work/NetworkType;

.field public static final enum UNMETERED:Landroidx/work/NetworkType;


# direct methods
.method static constructor <clinit>()V
    .locals 8

    .line 30
    new-instance v0, Landroidx/work/NetworkType;

    const-string v1, "NOT_REQUIRED"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Landroidx/work/NetworkType;-><init>(Ljava/lang/String;I)V

    sput-object v0, Landroidx/work/NetworkType;->NOT_REQUIRED:Landroidx/work/NetworkType;

    .line 35
    new-instance v1, Landroidx/work/NetworkType;

    const-string v2, "CONNECTED"

    const/4 v3, 0x1

    invoke-direct {v1, v2, v3}, Landroidx/work/NetworkType;-><init>(Ljava/lang/String;I)V

    sput-object v1, Landroidx/work/NetworkType;->CONNECTED:Landroidx/work/NetworkType;

    .line 40
    new-instance v2, Landroidx/work/NetworkType;

    const-string v3, "UNMETERED"

    const/4 v4, 0x2

    invoke-direct {v2, v3, v4}, Landroidx/work/NetworkType;-><init>(Ljava/lang/String;I)V

    sput-object v2, Landroidx/work/NetworkType;->UNMETERED:Landroidx/work/NetworkType;

    .line 45
    new-instance v3, Landroidx/work/NetworkType;

    const-string v4, "NOT_ROAMING"

    const/4 v5, 0x3

    invoke-direct {v3, v4, v5}, Landroidx/work/NetworkType;-><init>(Ljava/lang/String;I)V

    sput-object v3, Landroidx/work/NetworkType;->NOT_ROAMING:Landroidx/work/NetworkType;

    .line 50
    new-instance v4, Landroidx/work/NetworkType;

    const-string v5, "METERED"

    const/4 v6, 0x4

    invoke-direct {v4, v5, v6}, Landroidx/work/NetworkType;-><init>(Ljava/lang/String;I)V

    sput-object v4, Landroidx/work/NetworkType;->METERED:Landroidx/work/NetworkType;

    .line 60
    new-instance v5, Landroidx/work/NetworkType;

    const-string v6, "TEMPORARILY_UNMETERED"

    const/4 v7, 0x5

    invoke-direct {v5, v6, v7}, Landroidx/work/NetworkType;-><init>(Ljava/lang/String;I)V

    sput-object v5, Landroidx/work/NetworkType;->TEMPORARILY_UNMETERED:Landroidx/work/NetworkType;

    .line 25
    filled-new-array/range {v0 .. v5}, [Landroidx/work/NetworkType;

    move-result-object v0

    sput-object v0, Landroidx/work/NetworkType;->$VALUES:[Landroidx/work/NetworkType;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/MethodParameters;
        accessFlags = {
            0x1000,
            0x1000
        }
        names = {
            "$enum$name",
            "$enum$ordinal"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 25
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Landroidx/work/NetworkType;
    .locals 1
    .annotation system Ldalvik/annotation/MethodParameters;
        accessFlags = {
            0x8000
        }
        names = {
            "name"
        }
    .end annotation

    .line 25
    const-class v0, Landroidx/work/NetworkType;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Landroidx/work/NetworkType;

    return-object p0
.end method

.method public static values()[Landroidx/work/NetworkType;
    .locals 1

    .line 25
    sget-object v0, Landroidx/work/NetworkType;->$VALUES:[Landroidx/work/NetworkType;

    invoke-virtual {v0}, [Landroidx/work/NetworkType;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Landroidx/work/NetworkType;

    return-object v0
.end method
