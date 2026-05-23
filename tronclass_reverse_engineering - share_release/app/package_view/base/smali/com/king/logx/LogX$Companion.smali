.class public final Lcom/king/logx/LogX$Companion;
.super Ljava/lang/Object;
.source "LogX.kt"

# interfaces
.implements Lcom/king/logx/logger/ILogger;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/king/logx/LogX;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x19
    name = "Companion"
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0010\u0008\n\u0002\u0008\u0006\n\u0002\u0010 \n\u0002\u0010\u000e\n\u0002\u0008\u0003\n\u0002\u0010\u000b\n\u0002\u0008\u0005\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0010\u0002\n\u0002\u0008\u0002\n\u0002\u0010\u0011\n\u0002\u0010\u0000\n\u0002\u0008\u0002\n\u0002\u0010\u0003\n\u0002\u0008\r\u0008\u0086\u0003\u0018\u00002\u00020\u0001B\u0007\u0008\u0002\u00a2\u0006\u0002\u0010\u0002J/\u0010\u0018\u001a\u00020\u00192\u0008\u0010\u001a\u001a\u0004\u0018\u00010\u000c2\u0016\u0010\u001b\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017\u00a2\u0006\u0002\u0010\u001eJ\u0012\u0010\u0018\u001a\u00020\u00192\u0008\u0010\u001f\u001a\u0004\u0018\u00010 H\u0017J9\u0010\u0018\u001a\u00020\u00192\u0008\u0010\u001f\u001a\u0004\u0018\u00010 2\u0008\u0010\u001a\u001a\u0004\u0018\u00010\u000c2\u0016\u0010\u001b\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017\u00a2\u0006\u0002\u0010!J/\u0010\"\u001a\u00020\u00192\u0008\u0010\u001a\u001a\u0004\u0018\u00010\u000c2\u0016\u0010\u001b\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017\u00a2\u0006\u0002\u0010\u001eJ\u0012\u0010\"\u001a\u00020\u00192\u0008\u0010\u001f\u001a\u0004\u0018\u00010 H\u0017J9\u0010\"\u001a\u00020\u00192\u0008\u0010\u001f\u001a\u0004\u0018\u00010 2\u0008\u0010\u001a\u001a\u0004\u0018\u00010\u000c2\u0016\u0010\u001b\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017\u00a2\u0006\u0002\u0010!J/\u0010#\u001a\u00020\u00192\u0008\u0010\u001a\u001a\u0004\u0018\u00010\u000c2\u0016\u0010\u001b\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017\u00a2\u0006\u0002\u0010\u001eJ\u0012\u0010#\u001a\u00020\u00192\u0008\u0010\u001f\u001a\u0004\u0018\u00010 H\u0017J9\u0010#\u001a\u00020\u00192\u0008\u0010\u001f\u001a\u0004\u0018\u00010 2\u0008\u0010\u001a\u001a\u0004\u0018\u00010\u000c2\u0016\u0010\u001b\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017\u00a2\u0006\u0002\u0010!J\u001a\u0010$\u001a\u00020\u00192\u0006\u0010%\u001a\u00020\u00042\u0008\u0010\u001a\u001a\u0004\u0018\u00010\u000cH\u0017J\u001a\u0010$\u001a\u00020\u00192\u0006\u0010%\u001a\u00020\u00042\u0008\u0010\u001f\u001a\u0004\u0018\u00010 H\u0017J$\u0010$\u001a\u00020\u00192\u0006\u0010%\u001a\u00020\u00042\u0008\u0010\u001f\u001a\u0004\u0018\u00010 2\u0008\u0010\u001a\u001a\u0004\u0018\u00010\u000cH\u0017J\u0010\u0010&\u001a\u00020\u00012\u0006\u0010\'\u001a\u00020\u0004H\u0017J\u0010\u0010(\u001a\u00020\u00192\u0006\u0010\u0015\u001a\u00020\u0016H\u0007J\u0010\u0010)\u001a\u00020\u00012\u0006\u0010)\u001a\u00020\u000cH\u0017J/\u0010*\u001a\u00020\u00192\u0008\u0010\u001a\u001a\u0004\u0018\u00010\u000c2\u0016\u0010\u001b\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017\u00a2\u0006\u0002\u0010\u001eJ\u0012\u0010*\u001a\u00020\u00192\u0008\u0010\u001f\u001a\u0004\u0018\u00010 H\u0017J9\u0010*\u001a\u00020\u00192\u0008\u0010\u001f\u001a\u0004\u0018\u00010 2\u0008\u0010\u001a\u001a\u0004\u0018\u00010\u000c2\u0016\u0010\u001b\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017\u00a2\u0006\u0002\u0010!J/\u0010+\u001a\u00020\u00192\u0008\u0010\u001a\u001a\u0004\u0018\u00010\u000c2\u0016\u0010\u001b\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017\u00a2\u0006\u0002\u0010\u001eJ\u0012\u0010+\u001a\u00020\u00192\u0008\u0010\u001f\u001a\u0004\u0018\u00010 H\u0017J9\u0010+\u001a\u00020\u00192\u0008\u0010\u001f\u001a\u0004\u0018\u00010 2\u0008\u0010\u001a\u001a\u0004\u0018\u00010\u000c2\u0016\u0010\u001b\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017\u00a2\u0006\u0002\u0010!J/\u0010,\u001a\u00020\u00192\u0008\u0010\u001a\u001a\u0004\u0018\u00010\u000c2\u0016\u0010\u001b\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017\u00a2\u0006\u0002\u0010\u001eJ\u0012\u0010,\u001a\u00020\u00192\u0008\u0010\u001f\u001a\u0004\u0018\u00010 H\u0017J9\u0010,\u001a\u00020\u00192\u0008\u0010\u001f\u001a\u0004\u0018\u00010 2\u0008\u0010\u001a\u001a\u0004\u0018\u00010\u000c2\u0016\u0010\u001b\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u001d0\u001c\"\u0004\u0018\u00010\u001dH\u0017\u00a2\u0006\u0002\u0010!R\u000e\u0010\u0003\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0005\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0008\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u000e\u0010\t\u001a\u00020\u0004X\u0086T\u00a2\u0006\u0002\n\u0000R\u001c\u0010\n\u001a\u0008\u0012\u0004\u0012\u00020\u000c0\u000b8@X\u0080\u0004\u00a2\u0006\u0008\n\u0000\u001a\u0004\u0008\r\u0010\u000eR\u001c\u0010\u000f\u001a\u00020\u00108@X\u0080\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\u0008\u0011\u0010\u0012\"\u0004\u0008\u0013\u0010\u0014R\u0018\u0010\u0015\u001a\u00020\u00168\u0002@\u0002X\u0083\u000e\u00a2\u0006\u0008\n\u0000\u0012\u0004\u0008\u0017\u0010\u0002\u00a8\u0006-"
    }
    d2 = {
        "Lcom/king/logx/LogX$Companion;",
        "Lcom/king/logx/logger/ILogger;",
        "()V",
        "ASSERT",
        "",
        "DEBUG",
        "ERROR",
        "INFO",
        "VERBOSE",
        "WARN",
        "internalIgnore",
        "",
        "",
        "getInternalIgnore$logx_release",
        "()Ljava/util/List;",
        "isDebug",
        "",
        "isDebug$logx_release",
        "()Z",
        "setDebug$logx_release",
        "(Z)V",
        "logger",
        "Lcom/king/logx/logger/Logger;",
        "getLogger$annotations",
        "d",
        "",
        "message",
        "args",
        "",
        "",
        "(Ljava/lang/String;[Ljava/lang/Object;)V",
        "t",
        "",
        "(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V",
        "e",
        "i",
        "log",
        "priority",
        "offset",
        "methodOffset",
        "setLogger",
        "tag",
        "v",
        "w",
        "wtf",
        "logx_release"
    }
    k = 0x1
    mv = {
        0x1,
        0x7,
        0x1
    }
    xi = 0x30
.end annotation


# direct methods
.method private constructor <init>()V
    .locals 0

    .line 37
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public synthetic constructor <init>(Lkotlin/jvm/internal/DefaultConstructorMarker;)V
    .locals 0

    invoke-direct {p0}, Lcom/king/logx/LogX$Companion;-><init>()V

    return-void
.end method

.method private static synthetic getLogger$annotations()V
    .locals 0
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    return-void
.end method


# virtual methods
.method public varargs d(Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 2
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    const-string v0, "args"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 129
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    array-length v1, p2

    invoke-static {p2, v1}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object p2

    invoke-virtual {v0, p1, p2}, Lcom/king/logx/logger/Logger;->d(Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public d(Ljava/lang/Throwable;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    .line 141
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    invoke-virtual {v0, p1}, Lcom/king/logx/logger/Logger;->d(Ljava/lang/Throwable;)V

    return-void
.end method

.method public varargs d(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 2
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    const-string v0, "args"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 135
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    array-length v1, p3

    invoke-static {p3, v1}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object p3

    invoke-virtual {v0, p1, p2, p3}, Lcom/king/logx/logger/Logger;->d(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public varargs e(Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 2
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    const-string v0, "args"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 183
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    array-length v1, p2

    invoke-static {p2, v1}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object p2

    invoke-virtual {v0, p1, p2}, Lcom/king/logx/logger/Logger;->e(Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public e(Ljava/lang/Throwable;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    .line 195
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    invoke-virtual {v0, p1}, Lcom/king/logx/logger/Logger;->e(Ljava/lang/Throwable;)V

    return-void
.end method

.method public varargs e(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 2
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    const-string v0, "args"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 189
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    array-length v1, p3

    invoke-static {p3, v1}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object p3

    invoke-virtual {v0, p1, p2, p3}, Lcom/king/logx/logger/Logger;->e(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public final synthetic getInternalIgnore$logx_release()Ljava/util/List;
    .locals 1

    .line 73
    invoke-static {}, Lcom/king/logx/LogX;->access$getInternalIgnore$cp()Ljava/util/List;

    move-result-object v0

    return-object v0
.end method

.method public varargs i(Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 2
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    const-string v0, "args"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 147
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    array-length v1, p2

    invoke-static {p2, v1}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object p2

    invoke-virtual {v0, p1, p2}, Lcom/king/logx/logger/Logger;->i(Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public i(Ljava/lang/Throwable;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    .line 159
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    invoke-virtual {v0, p1}, Lcom/king/logx/logger/Logger;->i(Ljava/lang/Throwable;)V

    return-void
.end method

.method public varargs i(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 2
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    const-string v0, "args"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 153
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    array-length v1, p3

    invoke-static {p3, v1}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object p3

    invoke-virtual {v0, p1, p2, p3}, Lcom/king/logx/logger/Logger;->i(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public final synthetic isDebug$logx_release()Z
    .locals 1

    .line 70
    invoke-static {}, Lcom/king/logx/LogX;->access$isDebug$cp()Z

    move-result v0

    return v0
.end method

.method public log(ILjava/lang/String;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    .line 219
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    invoke-virtual {v0, p1, p2}, Lcom/king/logx/logger/Logger;->log(ILjava/lang/String;)V

    return-void
.end method

.method public log(ILjava/lang/Throwable;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    .line 231
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    invoke-virtual {v0, p1, p2}, Lcom/king/logx/logger/Logger;->log(ILjava/lang/Throwable;)V

    return-void
.end method

.method public log(ILjava/lang/Throwable;Ljava/lang/String;)V
    .locals 0
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    .line 225
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object p2

    invoke-virtual {p2, p1, p3}, Lcom/king/logx/logger/Logger;->log(ILjava/lang/String;)V

    return-void
.end method

.method public offset(I)Lcom/king/logx/logger/ILogger;
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    .line 97
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    invoke-virtual {v0, p1}, Lcom/king/logx/logger/Logger;->offset(I)Lcom/king/logx/logger/ILogger;

    .line 98
    move-object p1, p0

    check-cast p1, Lcom/king/logx/logger/ILogger;

    return-object p1
.end method

.method public final setDebug$logx_release(Z)V
    .locals 0

    .line 70
    invoke-static {p1}, Lcom/king/logx/LogX;->access$setDebug$cp(Z)V

    return-void
.end method

.method public final setLogger(Lcom/king/logx/logger/Logger;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    const-string v0, "logger"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 91
    invoke-static {p1}, Lcom/king/logx/LogX;->access$setLogger$cp(Lcom/king/logx/logger/Logger;)V

    return-void
.end method

.method public tag(Ljava/lang/String;)Lcom/king/logx/logger/ILogger;
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    const-string v0, "tag"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 104
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    invoke-virtual {v0, p1}, Lcom/king/logx/logger/Logger;->tag(Ljava/lang/String;)Lcom/king/logx/logger/ILogger;

    .line 105
    move-object p1, p0

    check-cast p1, Lcom/king/logx/logger/ILogger;

    return-object p1
.end method

.method public varargs v(Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 2
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    const-string v0, "args"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 111
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    array-length v1, p2

    invoke-static {p2, v1}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object p2

    invoke-virtual {v0, p1, p2}, Lcom/king/logx/logger/Logger;->v(Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public v(Ljava/lang/Throwable;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    .line 123
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    invoke-virtual {v0, p1}, Lcom/king/logx/logger/Logger;->v(Ljava/lang/Throwable;)V

    return-void
.end method

.method public varargs v(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 2
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    const-string v0, "args"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 117
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    array-length v1, p3

    invoke-static {p3, v1}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object p3

    invoke-virtual {v0, p1, p2, p3}, Lcom/king/logx/logger/Logger;->v(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public varargs w(Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 2
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    const-string v0, "args"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 165
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    array-length v1, p2

    invoke-static {p2, v1}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object p2

    invoke-virtual {v0, p1, p2}, Lcom/king/logx/logger/Logger;->w(Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public w(Ljava/lang/Throwable;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    .line 177
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    invoke-virtual {v0, p1}, Lcom/king/logx/logger/Logger;->w(Ljava/lang/Throwable;)V

    return-void
.end method

.method public varargs w(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 2
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    const-string v0, "args"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 171
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    array-length v1, p3

    invoke-static {p3, v1}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object p3

    invoke-virtual {v0, p1, p2, p3}, Lcom/king/logx/logger/Logger;->w(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public varargs wtf(Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 2
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    const-string v0, "args"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 201
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    array-length v1, p2

    invoke-static {p2, v1}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object p2

    invoke-virtual {v0, p1, p2}, Lcom/king/logx/logger/Logger;->wtf(Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public wtf(Ljava/lang/Throwable;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    .line 213
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    invoke-virtual {v0, p1}, Lcom/king/logx/logger/Logger;->wtf(Ljava/lang/Throwable;)V

    return-void
.end method

.method public varargs wtf(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 2
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    const-string v0, "args"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 207
    invoke-static {}, Lcom/king/logx/LogX;->access$getLogger$cp()Lcom/king/logx/logger/Logger;

    move-result-object v0

    array-length v1, p3

    invoke-static {p3, v1}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object p3

    invoke-virtual {v0, p1, p2, p3}, Lcom/king/logx/logger/Logger;->w(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method
