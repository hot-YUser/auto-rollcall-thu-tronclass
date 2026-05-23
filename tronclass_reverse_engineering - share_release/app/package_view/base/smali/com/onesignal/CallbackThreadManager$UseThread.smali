.class public final enum Lcom/onesignal/CallbackThreadManager$UseThread;
.super Ljava/lang/Enum;
.source "CallbackThreadManager.kt"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/CallbackThreadManager;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x4019
    name = "UseThread"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Enum<",
        "Lcom/onesignal/CallbackThreadManager$UseThread;",
        ">;"
    }
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u000c\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\u0008\u0004\u0008\u0086\u0001\u0018\u00002\u0008\u0012\u0004\u0012\u00020\u00000\u0001B\u0007\u0008\u0002\u00a2\u0006\u0002\u0010\u0002j\u0002\u0008\u0003j\u0002\u0008\u0004\u00a8\u0006\u0005"
    }
    d2 = {
        "Lcom/onesignal/CallbackThreadManager$UseThread;",
        "",
        "(Ljava/lang/String;I)V",
        "MainUI",
        "Background",
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
.field private static final synthetic $VALUES:[Lcom/onesignal/CallbackThreadManager$UseThread;

.field public static final enum Background:Lcom/onesignal/CallbackThreadManager$UseThread;

.field public static final enum MainUI:Lcom/onesignal/CallbackThreadManager$UseThread;


# direct methods
.method private static final synthetic $values()[Lcom/onesignal/CallbackThreadManager$UseThread;
    .locals 2

    sget-object v0, Lcom/onesignal/CallbackThreadManager$UseThread;->MainUI:Lcom/onesignal/CallbackThreadManager$UseThread;

    sget-object v1, Lcom/onesignal/CallbackThreadManager$UseThread;->Background:Lcom/onesignal/CallbackThreadManager$UseThread;

    filled-new-array {v0, v1}, [Lcom/onesignal/CallbackThreadManager$UseThread;

    move-result-object v0

    return-object v0
.end method

.method static constructor <clinit>()V
    .locals 3

    .line 45
    new-instance v0, Lcom/onesignal/CallbackThreadManager$UseThread;

    const-string v1, "MainUI"

    const/4 v2, 0x0

    invoke-direct {v0, v1, v2}, Lcom/onesignal/CallbackThreadManager$UseThread;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lcom/onesignal/CallbackThreadManager$UseThread;->MainUI:Lcom/onesignal/CallbackThreadManager$UseThread;

    .line 46
    new-instance v0, Lcom/onesignal/CallbackThreadManager$UseThread;

    const-string v1, "Background"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Lcom/onesignal/CallbackThreadManager$UseThread;-><init>(Ljava/lang/String;I)V

    sput-object v0, Lcom/onesignal/CallbackThreadManager$UseThread;->Background:Lcom/onesignal/CallbackThreadManager$UseThread;

    invoke-static {}, Lcom/onesignal/CallbackThreadManager$UseThread;->$values()[Lcom/onesignal/CallbackThreadManager$UseThread;

    move-result-object v0

    sput-object v0, Lcom/onesignal/CallbackThreadManager$UseThread;->$VALUES:[Lcom/onesignal/CallbackThreadManager$UseThread;

    return-void
.end method

.method private constructor <init>(Ljava/lang/String;I)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()V"
        }
    .end annotation

    .line 44
    invoke-direct {p0, p1, p2}, Ljava/lang/Enum;-><init>(Ljava/lang/String;I)V

    return-void
.end method

.method public static valueOf(Ljava/lang/String;)Lcom/onesignal/CallbackThreadManager$UseThread;
    .locals 1

    const-class v0, Lcom/onesignal/CallbackThreadManager$UseThread;

    invoke-static {v0, p0}, Ljava/lang/Enum;->valueOf(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum;

    move-result-object p0

    check-cast p0, Lcom/onesignal/CallbackThreadManager$UseThread;

    return-object p0
.end method

.method public static values()[Lcom/onesignal/CallbackThreadManager$UseThread;
    .locals 1

    sget-object v0, Lcom/onesignal/CallbackThreadManager$UseThread;->$VALUES:[Lcom/onesignal/CallbackThreadManager$UseThread;

    invoke-virtual {v0}, [Ljava/lang/Object;->clone()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, [Lcom/onesignal/CallbackThreadManager$UseThread;

    return-object v0
.end method
