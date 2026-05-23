.class public final Lcom/king/logx/LogX;
.super Ljava/lang/Object;
.source "LogX.kt"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/king/logx/LogX$Companion;
    }
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u000c\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0008\u0003\u0018\u0000 \u00032\u00020\u0001:\u0001\u0003B\u0007\u0008\u0002\u00a2\u0006\u0002\u0010\u0002\u00a8\u0006\u0004"
    }
    d2 = {
        "Lcom/king/logx/LogX;",
        "",
        "()V",
        "Companion",
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


# static fields
.field public static final ASSERT:I = 0x7

.field public static final Companion:Lcom/king/logx/LogX$Companion;

.field public static final DEBUG:I = 0x3

.field public static final ERROR:I = 0x6

.field public static final INFO:I = 0x4

.field public static final VERBOSE:I = 0x2

.field public static final WARN:I = 0x5

.field private static final internalIgnore:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field

.field private static isDebug:Z

.field private static logger:Lcom/king/logx/logger/Logger;


# direct methods
.method static constructor <clinit>()V
    .locals 7

    new-instance v0, Lcom/king/logx/LogX$Companion;

    const/4 v1, 0x0

    invoke-direct {v0, v1}, Lcom/king/logx/LogX$Companion;-><init>(Lkotlin/jvm/internal/DefaultConstructorMarker;)V

    sput-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    const/4 v0, 0x1

    .line 70
    sput-boolean v0, Lcom/king/logx/LogX;->isDebug:Z

    const/4 v1, 0x6

    .line 74
    new-array v1, v1, [Ljava/lang/String;

    const-class v2, Lcom/king/logx/LogX;

    invoke-virtual {v2}, Ljava/lang/Class;->getName()Ljava/lang/String;

    move-result-object v2

    const-string v3, "LogX::class.java.name"

    invoke-static {v2, v3}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    const/4 v3, 0x0

    aput-object v2, v1, v3

    const-class v2, Lcom/king/logx/LogX$Companion;

    .line 75
    invoke-virtual {v2}, Ljava/lang/Class;->getName()Ljava/lang/String;

    move-result-object v2

    const-string v3, "LogX.Companion::class.java.name"

    invoke-static {v2, v3}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    aput-object v2, v1, v0

    .line 74
    const-class v0, Lcom/king/logx/logger/ILogger;

    .line 76
    invoke-virtual {v0}, Ljava/lang/Class;->getName()Ljava/lang/String;

    move-result-object v0

    const-string v2, "ILogger::class.java.name"

    invoke-static {v0, v2}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    const/4 v2, 0x2

    aput-object v0, v1, v2

    .line 74
    const-class v0, Lcom/king/logx/logger/DefaultLogger;

    .line 77
    invoke-virtual {v0}, Ljava/lang/Class;->getName()Ljava/lang/String;

    move-result-object v0

    const-string v2, "DefaultLogger::class.java.name"

    invoke-static {v0, v2}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    const/4 v2, 0x3

    aput-object v0, v1, v2

    .line 74
    const-class v0, Lcom/king/logx/logger/CompositeLogger;

    .line 78
    invoke-virtual {v0}, Ljava/lang/Class;->getName()Ljava/lang/String;

    move-result-object v0

    const-string v2, "CompositeLogger::class.java.name"

    invoke-static {v0, v2}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    const/4 v2, 0x4

    aput-object v0, v1, v2

    .line 74
    const-class v0, Lcom/king/logx/logger/Logger;

    .line 79
    invoke-virtual {v0}, Ljava/lang/Class;->getName()Ljava/lang/String;

    move-result-object v0

    const-string v2, "Logger::class.java.name"

    invoke-static {v0, v2}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    const/4 v2, 0x5

    aput-object v0, v1, v2

    .line 73
    invoke-static {v1}, Lkotlin/collections/CollectionsKt;->listOf([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v0

    sput-object v0, Lcom/king/logx/LogX;->internalIgnore:Ljava/util/List;

    .line 86
    new-instance v0, Lcom/king/logx/logger/DefaultLogger;

    const/4 v5, 0x7

    const/4 v6, 0x0

    const/4 v2, 0x0

    const/4 v3, 0x0

    const/4 v4, 0x0

    move-object v1, v0

    invoke-direct/range {v1 .. v6}, Lcom/king/logx/logger/DefaultLogger;-><init>(ZIIILkotlin/jvm/internal/DefaultConstructorMarker;)V

    check-cast v0, Lcom/king/logx/logger/Logger;

    sput-object v0, Lcom/king/logx/LogX;->logger:Lcom/king/logx/logger/Logger;

    return-void
.end method

.method private constructor <init>()V
    .locals 1

    .line 31
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 34
    new-instance v0, Ljava/lang/AssertionError;

    invoke-direct {v0}, Ljava/lang/AssertionError;-><init>()V

    throw v0
.end method

.method public static final synthetic access$getInternalIgnore$cp()Ljava/util/List;
    .locals 1

    .line 31
    sget-object v0, Lcom/king/logx/LogX;->internalIgnore:Ljava/util/List;

    return-object v0
.end method

.method public static final synthetic access$getLogger$cp()Lcom/king/logx/logger/Logger;
    .locals 1

    .line 31
    sget-object v0, Lcom/king/logx/LogX;->logger:Lcom/king/logx/logger/Logger;

    return-object v0
.end method

.method public static final synthetic access$isDebug$cp()Z
    .locals 1

    .line 31
    sget-boolean v0, Lcom/king/logx/LogX;->isDebug:Z

    return v0
.end method

.method public static final synthetic access$setDebug$cp(Z)V
    .locals 0

    .line 31
    sput-boolean p0, Lcom/king/logx/LogX;->isDebug:Z

    return-void
.end method

.method public static final synthetic access$setLogger$cp(Lcom/king/logx/logger/Logger;)V
    .locals 0

    .line 31
    sput-object p0, Lcom/king/logx/LogX;->logger:Lcom/king/logx/logger/Logger;

    return-void
.end method

.method public static varargs d(Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0, p1}, Lcom/king/logx/LogX$Companion;->d(Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public static d(Ljava/lang/Throwable;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0}, Lcom/king/logx/LogX$Companion;->d(Ljava/lang/Throwable;)V

    return-void
.end method

.method public static varargs d(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0, p1, p2}, Lcom/king/logx/LogX$Companion;->d(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public static varargs e(Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0, p1}, Lcom/king/logx/LogX$Companion;->e(Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public static e(Ljava/lang/Throwable;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0}, Lcom/king/logx/LogX$Companion;->e(Ljava/lang/Throwable;)V

    return-void
.end method

.method public static varargs e(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0, p1, p2}, Lcom/king/logx/LogX$Companion;->e(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public static varargs i(Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0, p1}, Lcom/king/logx/LogX$Companion;->i(Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public static i(Ljava/lang/Throwable;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0}, Lcom/king/logx/LogX$Companion;->i(Ljava/lang/Throwable;)V

    return-void
.end method

.method public static varargs i(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0, p1, p2}, Lcom/king/logx/LogX$Companion;->i(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public static log(ILjava/lang/String;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0, p1}, Lcom/king/logx/LogX$Companion;->log(ILjava/lang/String;)V

    return-void
.end method

.method public static log(ILjava/lang/Throwable;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0, p1}, Lcom/king/logx/LogX$Companion;->log(ILjava/lang/Throwable;)V

    return-void
.end method

.method public static log(ILjava/lang/Throwable;Ljava/lang/String;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0, p1, p2}, Lcom/king/logx/LogX$Companion;->log(ILjava/lang/Throwable;Ljava/lang/String;)V

    return-void
.end method

.method public static offset(I)Lcom/king/logx/logger/ILogger;
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0}, Lcom/king/logx/LogX$Companion;->offset(I)Lcom/king/logx/logger/ILogger;

    move-result-object p0

    return-object p0
.end method

.method public static final setLogger(Lcom/king/logx/logger/Logger;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0}, Lcom/king/logx/LogX$Companion;->setLogger(Lcom/king/logx/logger/Logger;)V

    return-void
.end method

.method public static tag(Ljava/lang/String;)Lcom/king/logx/logger/ILogger;
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0}, Lcom/king/logx/LogX$Companion;->tag(Ljava/lang/String;)Lcom/king/logx/logger/ILogger;

    move-result-object p0

    return-object p0
.end method

.method public static varargs v(Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0, p1}, Lcom/king/logx/LogX$Companion;->v(Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public static v(Ljava/lang/Throwable;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0}, Lcom/king/logx/LogX$Companion;->v(Ljava/lang/Throwable;)V

    return-void
.end method

.method public static varargs v(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0, p1, p2}, Lcom/king/logx/LogX$Companion;->v(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public static varargs w(Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0, p1}, Lcom/king/logx/LogX$Companion;->w(Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public static w(Ljava/lang/Throwable;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0}, Lcom/king/logx/LogX$Companion;->w(Ljava/lang/Throwable;)V

    return-void
.end method

.method public static varargs w(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0, p1, p2}, Lcom/king/logx/LogX$Companion;->w(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public static varargs wtf(Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0, p1}, Lcom/king/logx/LogX$Companion;->wtf(Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method

.method public static wtf(Ljava/lang/Throwable;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0}, Lcom/king/logx/LogX$Companion;->wtf(Ljava/lang/Throwable;)V

    return-void
.end method

.method public static varargs wtf(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 1
    .annotation runtime Lkotlin/jvm/JvmStatic;
    .end annotation

    sget-object v0, Lcom/king/logx/LogX;->Companion:Lcom/king/logx/LogX$Companion;

    invoke-virtual {v0, p0, p1, p2}, Lcom/king/logx/LogX$Companion;->wtf(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V

    return-void
.end method
