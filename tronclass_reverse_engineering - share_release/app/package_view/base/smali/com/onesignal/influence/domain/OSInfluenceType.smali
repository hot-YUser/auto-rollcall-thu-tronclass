.class public final enum Lcom/onesignal/influence/domain/OSInfluenceType;
.super Ljava/lang/Enum;
.source "OSInfluenceType.kt"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/influence/domain/OSInfluenceType$Companion;
    }
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Lcom/onesignal/influence/domain/OSInfluenceType;",
        ">;"
    }
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\u0008\u0002\n\u0002\u0010\u000b\n\u0002\u0008\n\u0008\u0086\u0001\u0018\u0000 \r2\u0008\u0012\u0004\u0012\u00020\u00000\u0001:\u0001\rB\u0007\u0008\u0002\u00a2\u0006\u0002\u0010\u0002J\u0006\u0010\u0003\u001a\u00020\u0004J\u0006\u0010\u0005\u001a\u00020\u0004J\u0006\u0010\u0006\u001a\u00020\u0004J\u0006\u0010\u0007\u001a\u00020\u0004J\u0006\u0010\u0008\u001a\u00020\u0004j\u0002\u0008\tj\u0002\u0008\nj\u0002\u0008\u000bj\u0002\u0008\u000c\u00a8\u0006\u000e"
    }
    d2 = {
        "Lcom/onesignal/influence/domain/OSInfluenceType;",
        "",
        "(Ljava/lang/String;I)V",
        "isAttributed",
        "",
        "isDirect",
        "isDisabled",
        "isIndirect",
        "isUnattributed",
        "DIRECT",
        "INDIRECT",
        "UNATTRIBUTED",
        "DISABLED",
        "Companion",
        "onesignal_release"
    }
    k = 0x1
    mv = {
        0x1,
        0x5,
        0x1
    }
    xi = 0x30
.end annotation


# static fields
.field private static final synthetic $VALUES:[Lcom/onesignal/influence/domain/OSInfluenceType;

.field public static final Companion:Lcom/onesignal/influence/domain/OSInfluenceType$Companion;

.field public static final enum DIRECT:Lcom/onesignal/influence/domain/OSInfluenceType;

.field public static final enum DISABLED:Lcom/onesignal/influence/domain/OSInfluenceType;

.field public static final enum INDIRECT:Lcom/onesignal/influence/domain/OSInfluenceType;

.field public static final enum UNATTRIBUTED:Lcom/onesignal/influence/domain/OSInfluenceType;


# direct methods
.method private static final synthetic $values()[Lcom/onesignal/influence/domain/OSInfluenceType;
    .locals 4

    sget-object v0, Lcom/onesignal/influence/domain/OSInfluenceType;->DIRECT:Lcom/onesignal/influence/domain/OSInfluenceType;

    sget-object v1, Lcom/onesignal/influence/domain/OSInfluenceType;->INDIRECT:Lcom/onesignal/influence/domain/OSInfluenceType;

    sget-object v2, Lcom/onesignal/influence/domain/OSInfluenceType;->UNATTRIBUTED:Lcom/onesignal/influence/domain/OSInfluenceType;

    sget-object v3, Lcom/onesignal/influence/domain/OSInfluenceType;->DISABLED:Lcom/onesignal/influence/domain/OSInfluenceType;

    filled-new-array {v0, v1, v2, v3}, [Lcom/onesignal/influence/domain/OSInfluenceType;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 3

    .line 4
    new-instance v0, Lcom/onesignal/influence/domain/OSInfluenceType;

    const-string v1, "DIRECT"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Lcom/onesignal/influence/domain/OSInfluenceType;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lcom/onesignal/influence/domain/OSInfluenceType;->DIRECT:Lcom/onesignal/influence/domain/OSInfluenceType;

    .line 5
    new-instance v0, Lcom/onesignal/influence/domain/OSInfluenceType;

    const-string v1, "INDIRECT"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Lcom/onesignal/influence/domain/OSInfluenceType;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lcom/onesignal/influence/domain/OSInfluenceType;->INDIRECT:Lcom/onesignal/influence/domain/OSInfluenceType;

    .line 6
    new-instance v0, Lcom/onesignal/influence/domain/OSInfluenceType;

    const-string v1, "UNATTRIBUTED"

    const/4 v2, 0x2

    invoke-direct {v0, v1, v2}, Lcom/onesignal/influence/domain/OSInfluenceType;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lcom/onesignal/influence/domain/OSInfluenceType;->UNATTRIBUTED:Lcom/onesignal/influence/domain/OSInfluenceType;

    .line 7
    new-instance v0, Lcom/onesignal/influence/domain/OSInfluenceType;

    const-string v1, "DISABLED"

    const/4 v2, 0x3

    invoke-direct {v0, v1, v2}, Lcom/onesignal/influence/domain/OSInfluenceType;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lcom/onesignal/influence/domain/OSInfluenceType;->DISABLED:Lcom/onesignal/influence/domain/OSInfluenceType;

    invoke-static {}, Lcom/onesignal/influence/domain/OSInfluenceType;->$values()[Lcom/onesignal/influence/domain/OSInfluenceType;

    move-result-object v0

    sput-object v0, Lcom/onesignal/influence/domain/OSInfluenceType;->$VALUES:[Lcom/onesignal/influence/domain/OSInfluenceType;

    new-instance v0, Lcom/onesignal/influence/domain/OSInfluenceType$Companion;

    const/4 v1, 0x0

    invoke-direct {v0, v1}, Lcom/onesignal/influence/domain/OSInfluenceType$Companion;-><init>(Lkotlin/jvm/internal/DefaultConstructorMarker;)V

    sput-object v0, Lcom/onesignal/influence/domain/OSInfluenceType;->Companion:Lcom/onesignal/influence/domain/OSInfluenceType$Companion;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 3
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static final fromString(Ljava/lang/String;)Lcom/onesignal/influence/domain/OSInfluenceType;
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/onesignal/influence/domain/OSInfluenceType;->Companion:Lcom/onesignal/influence/domain/OSInfluenceType$Companion;

    invoke-virtual {v0, p0}, Lcom/onesignal/influence/domain/OSInfluenceType$Companion;->fromString(Ljava/lang/String;)Lcom/onesignal/influence/domain/OSInfluenceType;

    move-result-object p0

    return-object p0
.end method

.method public static valueOf(Ljava/lang/String;)Lcom/onesignal/influence/domain/OSInfluenceType;
    .locals 1

    const-class v0, Lcom/onesignal/influence/domain/OSInfluenceType;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Lcom/onesignal/influence/domain/OSInfluenceType;

    return-object p0
.end method

.method public static values()[Lcom/onesignal/influence/domain/OSInfluenceType;
    .locals 1

    sget-object v0, Lcom/onesignal/influence/domain/OSInfluenceType;->$VALUES:[Lcom/onesignal/influence/domain/OSInfluenceType;

    invoke-virtual {v0}, [Ljava/lang/Object;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Lcom/onesignal/influence/domain/OSInfluenceType;

    return-object v0
.end method


# virtual methods
.method public final isAttributed()Z
    .locals 1

    .line 10
    invoke-virtual {p0}, Lcom/onesignal/influence/domain/OSInfluenceType;->isDirect()Z

    move-result v0

    if-nez v0, :cond_1

    invoke-virtual {p0}, Lcom/onesignal/influence/domain/OSInfluenceType;->isIndirect()Z

    move-result v0

    if-eqz v0, :cond_0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 v0, 0x1

    :goto_1
    return v0
.end method

.method public final isDirect()Z
    .locals 1

    .line 12
    sget-object v0, Lcom/onesignal/influence/domain/OSInfluenceType;->DIRECT:Lcom/onesignal/influence/domain/OSInfluenceType;

    if-ne p0, v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public final isDisabled()Z
    .locals 1

    .line 18
    sget-object v0, Lcom/onesignal/influence/domain/OSInfluenceType;->DISABLED:Lcom/onesignal/influence/domain/OSInfluenceType;

    if-ne p0, v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public final isIndirect()Z
    .locals 1

    .line 14
    sget-object v0, Lcom/onesignal/influence/domain/OSInfluenceType;->INDIRECT:Lcom/onesignal/influence/domain/OSInfluenceType;

    if-ne p0, v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public final isUnattributed()Z
    .locals 1

    .line 16
    sget-object v0, Lcom/onesignal/influence/domain/OSInfluenceType;->UNATTRIBUTED:Lcom/onesignal/influence/domain/OSInfluenceType;

    if-ne p0, v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method
