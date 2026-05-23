.class public final Lcom/onesignal/CallbackThreadManager$Companion;
.super Ljava/lang/Object;
.source "CallbackThreadManager.kt"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/CallbackThreadManager;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = "Companion"
.end annotation

.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/CallbackThreadManager$Companion$WhenMappings;
    }
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0002\u0008\u0005\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\u0008\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\u0008\u0002\u00a2\u0006\u0002\u0010\u0002J\u000e\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\u000cR\u001a\u0010\u0003\u001a\u00020\u0004X\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\u0008\u0005\u0010\u0006\"\u0004\u0008\u0007\u0010\u0008\u00a8\u0006\r"
    }
    d2 = {
        "Lcom/onesignal/CallbackThreadManager$Companion;",
        "",
        "()V",
        "preference",
        "Lcom/onesignal/CallbackThreadManager$UseThread;",
        "getPreference",
        "()Lcom/onesignal/CallbackThreadManager$UseThread;",
        "setPreference",
        "(Lcom/onesignal/CallbackThreadManager$UseThread;)V",
        "runOnPreferred",
        "",
        "runnable",
        "Ljava/lang/Runnable;",
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


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 49
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public synthetic constructor <init>(Lkotlin/jvm/internal/DefaultConstructorMarker;)V
    .locals 0

    invoke-direct {p0}, Lcom/onesignal/CallbackThreadManager$Companion;-><init>()V

    return-void
.end method


# virtual methods
.method public final getPreference()Lcom/onesignal/CallbackThreadManager$UseThread;
    .locals 1

    .line 50
    invoke-static {}, Lcom/onesignal/CallbackThreadManager;->access$getPreference$cp()Lcom/onesignal/CallbackThreadManager$UseThread;

    move-result-object v0

    return-object v0
.end method

.method public final runOnPreferred(Ljava/lang/Runnable;)V
    .locals 9

    const-string v0, "runnable"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 53
    invoke-virtual {p0}, Lcom/onesignal/CallbackThreadManager$Companion;->getPreference()Lcom/onesignal/CallbackThreadManager$UseThread;

    move-result-object v0

    sget-object v1, Lcom/onesignal/CallbackThreadManager$Companion$WhenMappings;->$EnumSwitchMapping$0:[I

    invoke-virtual {v0}, Lcom/onesignal/CallbackThreadManager$UseThread;->ordinal()I

    move-result v0

    aget v0, v1, v0

    const/4 v1, 0x1

    if-eq v0, v1, :cond_1

    const/4 v1, 0x2

    if-eq v0, v1, :cond_0

    goto :goto_0

    .line 55
    :cond_0
    new-instance v0, Lcom/onesignal/CallbackThreadManager$Companion$runOnPreferred$1;

    invoke-direct {v0, p1}, Lcom/onesignal/CallbackThreadManager$Companion$runOnPreferred$1;-><init>(Ljava/lang/Runnable;)V

    move-object v6, v0

    check-cast v6, Lkotlin/jvm/functions/Function0;

    const/16 v7, 0x1f

    const/4 v8, 0x0

    const/4 v1, 0x0

    const/4 v2, 0x0

    const/4 v3, 0x0

    const/4 v4, 0x0

    const/4 v5, 0x0

    invoke-static/range {v1 .. v8}, Lkotlin/concurrent/ThreadsKt;->thread$default(ZZLjava/lang/ClassLoader;Ljava/lang/String;ILkotlin/jvm/functions/Function0;ILjava/lang/Object;)Ljava/lang/Thread;

    goto :goto_0

    .line 54
    :cond_1
    invoke-static {p1}, Lcom/onesignal/OSUtils;->runOnMainUIThread(Ljava/lang/Runnable;)V

    :goto_0
    return-void
.end method

.method public final setPreference(Lcom/onesignal/CallbackThreadManager$UseThread;)V
    .locals 1

    const-string v0, "<set-?>"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 50
    invoke-static {p1}, Lcom/onesignal/CallbackThreadManager;->access$setPreference$cp(Lcom/onesignal/CallbackThreadManager$UseThread;)V

    return-void
.end method
