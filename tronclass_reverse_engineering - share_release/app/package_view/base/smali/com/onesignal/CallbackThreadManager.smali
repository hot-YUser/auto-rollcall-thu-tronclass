.class public final Lcom/onesignal/CallbackThreadManager;
.super Ljava/lang/Object;
.source "CallbackThreadManager.kt"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/CallbackThreadManager$UseThread;,
        Lcom/onesignal/CallbackThreadManager$Companion;
    }
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u000c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0008\u0004\u0018\u0000 \u00032\u00020\u0001:\u0002\u0003\u0004B\u0005\u00a2\u0006\u0002\u0010\u0002\u00a8\u0006\u0005"
    }
    d2 = {
        "Lcom/onesignal/CallbackThreadManager;",
        "",
        "()V",
        "Companion",
        "UseThread",
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
.field public static final Companion:Lcom/onesignal/CallbackThreadManager$Companion;

.field private static preference:Lcom/onesignal/CallbackThreadManager$UseThread;


# direct methods
.method static constructor <clinit>()V
    .locals 2

    new-instance v0, Lcom/onesignal/CallbackThreadManager$Companion;

    const/4 v1, 0x0

    invoke-direct {v0, v1}, Lcom/onesignal/CallbackThreadManager$Companion;-><init>(Lkotlin/jvm/internal/DefaultConstructorMarker;)V

    sput-object v0, Lcom/onesignal/CallbackThreadManager;->Companion:Lcom/onesignal/CallbackThreadManager$Companion;

    .line 50
    sget-object v0, Lcom/onesignal/CallbackThreadManager$UseThread;->MainUI:Lcom/onesignal/CallbackThreadManager$UseThread;

    sput-object v0, Lcom/onesignal/CallbackThreadManager;->preference:Lcom/onesignal/CallbackThreadManager$UseThread;

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 43
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static final synthetic access$getPreference$cp()Lcom/onesignal/CallbackThreadManager$UseThread;
    .locals 1

    .line 43
    sget-object v0, Lcom/onesignal/CallbackThreadManager;->preference:Lcom/onesignal/CallbackThreadManager$UseThread;

    return-object v0
.end method

.method public static final synthetic access$setPreference$cp(Lcom/onesignal/CallbackThreadManager$UseThread;)V
    .locals 0

    .line 43
    sput-object p0, Lcom/onesignal/CallbackThreadManager;->preference:Lcom/onesignal/CallbackThreadManager$UseThread;

    return-void
.end method
