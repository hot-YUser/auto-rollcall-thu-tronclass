.class public final Lcom/king/logx/logger/CompositeLogger;
.super Lcom/king/logx/logger/Logger;
.source "CompositeLogger.kt"


# annotations
.annotation system Ldalvik/annotation/SourceDebugExtension;
    value = "SMAP\nCompositeLogger.kt\nKotlin\n*S Kotlin\n*F\n+ 1 CompositeLogger.kt\ncom/king/logx/logger/CompositeLogger\n+ 2 ArrayIntrinsics.kt\nkotlin/ArrayIntrinsicsKt\n+ 3 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n+ 4 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 5 ArraysJVM.kt\nkotlin/collections/ArraysKt__ArraysJVMKt\n*L\n1#1,219:1\n26#2:220\n26#2:280\n13543#3,2:221\n13543#3,2:223\n13543#3,2:225\n13543#3,2:227\n13543#3,2:229\n13543#3,2:231\n13543#3,2:233\n13543#3,2:235\n13543#3,2:237\n13543#3,2:239\n13543#3,2:241\n13543#3,2:243\n13543#3,2:245\n13543#3,2:247\n13543#3,2:249\n13543#3,2:251\n13543#3,2:253\n13543#3,2:255\n13543#3,2:257\n13543#3,2:259\n13543#3,2:261\n13543#3,2:263\n13543#3,2:265\n1#4:267\n37#5:268\n36#5,3:269\n37#5:272\n36#5,3:273\n37#5:276\n36#5,3:277\n*S KotlinDebug\n*F\n+ 1 CompositeLogger.kt\ncom/king/logx/logger/CompositeLogger\n*L\n21#1:220\n210#1:280\n24#1:221,2\n31#1:223,2\n38#1:225,2\n44#1:227,2\n50#1:229,2\n56#1:231,2\n62#1:233,2\n68#1:235,2\n74#1:237,2\n80#1:239,2\n86#1:241,2\n92#1:243,2\n98#1:245,2\n104#1:247,2\n110#1:249,2\n116#1:251,2\n122#1:253,2\n128#1:255,2\n134#1:257,2\n140#1:259,2\n146#1:261,2\n152#1:263,2\n158#1:265,2\n175#1:268\n175#1:269,3\n189#1:272\n189#1:273,3\n200#1:276\n200#1:277,3\n*E\n"
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0010\u0011\n\u0002\u0008\u0002\n\u0002\u0010\u0008\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\u0008\u0004\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0000\n\u0002\u0008\u0002\n\u0002\u0010\u0003\n\u0002\u0008\u0007\n\u0002\u0018\u0002\n\u0002\u0008\u0007\u0018\u00002\u00020\u0001B\u0005\u00a2\u0006\u0002\u0010\u0002J\u000e\u0010\u000c\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u0001J\u001f\u0010\u000c\u001a\u00020\r2\u0012\u0010\t\u001a\n\u0012\u0006\u0008\u0001\u0012\u00020\u00010\u0004\"\u00020\u0001\u00a2\u0006\u0002\u0010\u000fJ/\u0010\u0010\u001a\u00020\r2\u0008\u0010\u0011\u001a\u0004\u0018\u00010\u00122\u0016\u0010\u0013\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00140\u0004\"\u0004\u0018\u00010\u0014H\u0016\u00a2\u0006\u0002\u0010\u0015J\u0012\u0010\u0010\u001a\u00020\r2\u0008\u0010\u0016\u001a\u0004\u0018\u00010\u0017H\u0016J9\u0010\u0010\u001a\u00020\r2\u0008\u0010\u0016\u001a\u0004\u0018\u00010\u00172\u0008\u0010\u0011\u001a\u0004\u0018\u00010\u00122\u0016\u0010\u0013\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00140\u0004\"\u0004\u0018\u00010\u0014H\u0016\u00a2\u0006\u0002\u0010\u0018J/\u0010\u0019\u001a\u00020\r2\u0008\u0010\u0011\u001a\u0004\u0018\u00010\u00122\u0016\u0010\u0013\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00140\u0004\"\u0004\u0018\u00010\u0014H\u0016\u00a2\u0006\u0002\u0010\u0015J\u0012\u0010\u0019\u001a\u00020\r2\u0008\u0010\u0016\u001a\u0004\u0018\u00010\u0017H\u0016J9\u0010\u0019\u001a\u00020\r2\u0008\u0010\u0016\u001a\u0004\u0018\u00010\u00172\u0008\u0010\u0011\u001a\u0004\u0018\u00010\u00122\u0016\u0010\u0013\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00140\u0004\"\u0004\u0018\u00010\u0014H\u0016\u00a2\u0006\u0002\u0010\u0018J/\u0010\u001a\u001a\u00020\r2\u0008\u0010\u0011\u001a\u0004\u0018\u00010\u00122\u0016\u0010\u0013\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00140\u0004\"\u0004\u0018\u00010\u0014H\u0016\u00a2\u0006\u0002\u0010\u0015J\u0012\u0010\u001a\u001a\u00020\r2\u0008\u0010\u0016\u001a\u0004\u0018\u00010\u0017H\u0016J9\u0010\u001a\u001a\u00020\r2\u0008\u0010\u0016\u001a\u0004\u0018\u00010\u00172\u0008\u0010\u0011\u001a\u0004\u0018\u00010\u00122\u0016\u0010\u0013\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00140\u0004\"\u0004\u0018\u00010\u0014H\u0016\u00a2\u0006\u0002\u0010\u0018J\u001a\u0010\u001b\u001a\u00020\r2\u0006\u0010\u001c\u001a\u00020\u00072\u0008\u0010\u0011\u001a\u0004\u0018\u00010\u0012H\u0016J.\u0010\u001b\u001a\u00020\r2\u0006\u0010\u001c\u001a\u00020\u00072\u0008\u0010\u001d\u001a\u0004\u0018\u00010\u00122\u0008\u0010\u0011\u001a\u0004\u0018\u00010\u00122\u0008\u0010\u0016\u001a\u0004\u0018\u00010\u0017H\u0016J\u001a\u0010\u001b\u001a\u00020\r2\u0006\u0010\u001c\u001a\u00020\u00072\u0008\u0010\u0016\u001a\u0004\u0018\u00010\u0017H\u0016J$\u0010\u001b\u001a\u00020\r2\u0006\u0010\u001c\u001a\u00020\u00072\u0008\u0010\u0016\u001a\u0004\u0018\u00010\u00172\u0008\u0010\u0011\u001a\u0004\u0018\u00010\u0012H\u0016J\u0010\u0010\u001e\u001a\u00020\u001f2\u0006\u0010 \u001a\u00020\u0007H\u0016J\u0006\u0010!\u001a\u00020\rJ\u000e\u0010\"\u001a\u00020\r2\u0006\u0010\u000e\u001a\u00020\u0001J\u0010\u0010\u001d\u001a\u00020\u001f2\u0006\u0010\u001d\u001a\u00020\u0012H\u0016J/\u0010#\u001a\u00020\r2\u0008\u0010\u0011\u001a\u0004\u0018\u00010\u00122\u0016\u0010\u0013\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00140\u0004\"\u0004\u0018\u00010\u0014H\u0016\u00a2\u0006\u0002\u0010\u0015J\u0012\u0010#\u001a\u00020\r2\u0008\u0010\u0016\u001a\u0004\u0018\u00010\u0017H\u0016J9\u0010#\u001a\u00020\r2\u0008\u0010\u0016\u001a\u0004\u0018\u00010\u00172\u0008\u0010\u0011\u001a\u0004\u0018\u00010\u00122\u0016\u0010\u0013\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00140\u0004\"\u0004\u0018\u00010\u0014H\u0016\u00a2\u0006\u0002\u0010\u0018J/\u0010$\u001a\u00020\r2\u0008\u0010\u0011\u001a\u0004\u0018\u00010\u00122\u0016\u0010\u0013\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00140\u0004\"\u0004\u0018\u00010\u0014H\u0016\u00a2\u0006\u0002\u0010\u0015J\u0012\u0010$\u001a\u00020\r2\u0008\u0010\u0016\u001a\u0004\u0018\u00010\u0017H\u0016J9\u0010$\u001a\u00020\r2\u0008\u0010\u0016\u001a\u0004\u0018\u00010\u00172\u0008\u0010\u0011\u001a\u0004\u0018\u00010\u00122\u0016\u0010\u0013\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00140\u0004\"\u0004\u0018\u00010\u0014H\u0016\u00a2\u0006\u0002\u0010\u0018J/\u0010%\u001a\u00020\r2\u0008\u0010\u0011\u001a\u0004\u0018\u00010\u00122\u0016\u0010\u0013\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00140\u0004\"\u0004\u0018\u00010\u0014H\u0016\u00a2\u0006\u0002\u0010\u0015J\u0012\u0010%\u001a\u00020\r2\u0008\u0010\u0016\u001a\u0004\u0018\u00010\u0017H\u0016J9\u0010%\u001a\u00020\r2\u0008\u0010\u0016\u001a\u0004\u0018\u00010\u00172\u0008\u0010\u0011\u001a\u0004\u0018\u00010\u00122\u0016\u0010\u0013\u001a\u000c\u0012\u0008\u0008\u0001\u0012\u0004\u0018\u00010\u00140\u0004\"\u0004\u0018\u00010\u0014H\u0016\u00a2\u0006\u0002\u0010\u0018R\u0016\u0010\u0003\u001a\u0008\u0012\u0004\u0012\u00020\u00010\u0004X\u0082\u000e\u00a2\u0006\u0004\n\u0002\u0010\u0005R\u0011\u0010\u0006\u001a\u00020\u00078G\u00a2\u0006\u0006\u001a\u0004\u0008\u0006\u0010\u0008R\u001e\u0010\t\u001a\u0012\u0012\u0004\u0012\u00020\u00010\nj\u0008\u0012\u0004\u0012\u00020\u0001`\u000bX\u0082\u0004\u00a2\u0006\u0002\n\u0000\u00a8\u0006&"
    }
    d2 = {
        "Lcom/king/logx/logger/CompositeLogger;",
        "Lcom/king/logx/logger/Logger;",
        "()V",
        "loggerArray",
        "",
        "[Lcom/king/logx/logger/Logger;",
        "loggerCount",
        "",
        "()I",
        "loggers",
        "Ljava/util/ArrayList;",
        "Lkotlin/collections/ArrayList;",
        "addLogger",
        "",
        "logger",
        "([Lcom/king/logx/logger/Logger;)V",
        "d",
        "message",
        "",
        "args",
        "",
        "(Ljava/lang/String;[Ljava/lang/Object;)V",
        "t",
        "",
        "(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V",
        "e",
        "i",
        "log",
        "priority",
        "tag",
        "offset",
        "Lcom/king/logx/logger/ILogger;",
        "methodOffset",
        "removeAllLoggers",
        "removeLogger",
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


# instance fields
.field private volatile loggerArray:[Lcom/king/logx/logger/Logger;

.field private final loggers:Ljava/util/ArrayList;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/ArrayList<",
            "Lcom/king/logx/logger/Logger;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method public constructor <init>()V
    .locals 3

    const/4 v0, 0x1

    const/4 v1, 0x0

    const/4 v2, 0x0

    .line 16
    invoke-direct {p0, v2, v0, v1}, Lcom/king/logx/logger/Logger;-><init>(IILkotlin/jvm/internal/DefaultConstructorMarker;)V

    .line 18
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    iput-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggers:Ljava/util/ArrayList;

    .line 220
    new-array v0, v2, [Lcom/king/logx/logger/Logger;

    check-cast v0, [Ljava/lang/Object;

    check-cast v0, [Lcom/king/logx/logger/Logger;

    .line 21
    iput-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    return-void
.end method


# virtual methods
.method public final addLogger(Lcom/king/logx/logger/Logger;)V
    .locals 2

    const-string v0, "logger"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    if-eq p1, p0, :cond_0

    .line 173
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggers:Ljava/util/ArrayList;

    monitor-enter v0

    .line 174
    :try_start_0
    iget-object v1, p0, Lcom/king/logx/logger/CompositeLogger;->loggers:Ljava/util/ArrayList;

    invoke-virtual {v1, p1}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    .line 175
    iget-object p1, p0, Lcom/king/logx/logger/CompositeLogger;->loggers:Ljava/util/ArrayList;

    check-cast p1, Ljava/util/Collection;

    const/4 v1, 0x0

    .line 271
    new-array v1, v1, [Lcom/king/logx/logger/Logger;

    invoke-interface {p1, v1}, Ljava/util/Collection;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object p1

    const-string v1, "null cannot be cast to non-null type kotlin.Array<T of kotlin.collections.ArraysKt__ArraysJVMKt.toTypedArray>"

    invoke-static {p1, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNull(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast p1, [Lcom/king/logx/logger/Logger;

    .line 175
    iput-object p1, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 176
    sget-object p1, Lkotlin/Unit;->INSTANCE:Lkotlin/Unit;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 173
    monitor-exit v0

    return-void

    :catchall_0
    move-exception p1

    monitor-exit v0

    throw p1

    .line 172
    :cond_0
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Cannot add "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/Class;->getSimpleName()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, " into itself."

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    new-instance v0, Ljava/lang/IllegalArgumentException;

    invoke-virtual {p1}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-direct {v0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw v0
.end method

.method public final varargs addLogger([Lcom/king/logx/logger/Logger;)V
    .locals 4

    const-string v0, "loggers"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 183
    array-length v0, p1

    const/4 v1, 0x0

    if-nez v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    move v0, v1

    :goto_0
    if-nez v0, :cond_3

    .line 184
    array-length v0, p1

    move v2, v1

    :goto_1
    if-ge v2, v0, :cond_2

    aget-object v3, p1, v2

    if-eq v3, p0, :cond_1

    add-int/lit8 v2, v2, 0x1

    goto :goto_1

    .line 185
    :cond_1
    new-instance p1, Ljava/lang/StringBuilder;

    const-string v0, "Cannot add "

    invoke-direct {p1, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/Class;->getSimpleName()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, " into itself."

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    new-instance v0, Ljava/lang/IllegalArgumentException;

    invoke-virtual {p1}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-direct {v0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw v0

    .line 187
    :cond_2
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggers:Ljava/util/ArrayList;

    monitor-enter v0

    .line 188
    :try_start_0
    iget-object v2, p0, Lcom/king/logx/logger/CompositeLogger;->loggers:Ljava/util/ArrayList;

    check-cast v2, Ljava/util/Collection;

    array-length v3, p1

    invoke-static {p1, v3}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object p1

    invoke-static {v2, p1}, Ljava/util/Collections;->addAll(Ljava/util/Collection;[Ljava/lang/Object;)Z

    .line 189
    iget-object p1, p0, Lcom/king/logx/logger/CompositeLogger;->loggers:Ljava/util/ArrayList;

    check-cast p1, Ljava/util/Collection;

    .line 275
    new-array v1, v1, [Lcom/king/logx/logger/Logger;

    invoke-interface {p1, v1}, Ljava/util/Collection;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object p1

    const-string v1, "null cannot be cast to non-null type kotlin.Array<T of kotlin.collections.ArraysKt__ArraysJVMKt.toTypedArray>"

    invoke-static {p1, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNull(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast p1, [Lcom/king/logx/logger/Logger;

    .line 189
    iput-object p1, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 190
    sget-object p1, Lkotlin/Unit;->INSTANCE:Lkotlin/Unit;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 187
    monitor-exit v0

    goto :goto_2

    :catchall_0
    move-exception p1

    monitor-exit v0

    throw p1

    :cond_3
    :goto_2
    return-void
.end method

.method public varargs d(Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 5

    const-string v0, "args"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 56
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 231
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 57
    array-length v4, p2

    invoke-static {p2, v4}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object v4

    invoke-virtual {v3, p1, v4}, Lcom/king/logx/logger/Logger;->d(Ljava/lang/String;[Ljava/lang/Object;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method public d(Ljava/lang/Throwable;)V
    .locals 4

    .line 68
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 235
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 69
    invoke-virtual {v3, p1}, Lcom/king/logx/logger/Logger;->d(Ljava/lang/Throwable;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method public varargs d(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 5

    const-string v0, "args"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 62
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 233
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 63
    array-length v4, p3

    invoke-static {p3, v4}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object v4

    invoke-virtual {v3, p1, p2, v4}, Lcom/king/logx/logger/Logger;->d(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method public varargs e(Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 5

    const-string v0, "args"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 110
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 249
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 111
    array-length v4, p2

    invoke-static {p2, v4}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object v4

    invoke-virtual {v3, p1, v4}, Lcom/king/logx/logger/Logger;->e(Ljava/lang/String;[Ljava/lang/Object;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method public e(Ljava/lang/Throwable;)V
    .locals 4

    .line 122
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 253
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 123
    invoke-virtual {v3, p1}, Lcom/king/logx/logger/Logger;->e(Ljava/lang/Throwable;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method public varargs e(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 5

    const-string v0, "args"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 116
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 251
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 117
    array-length v4, p3

    invoke-static {p3, v4}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object v4

    invoke-virtual {v3, p1, p2, v4}, Lcom/king/logx/logger/Logger;->e(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method public varargs i(Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 5

    const-string v0, "args"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 74
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 237
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 75
    array-length v4, p2

    invoke-static {p2, v4}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object v4

    invoke-virtual {v3, p1, v4}, Lcom/king/logx/logger/Logger;->i(Ljava/lang/String;[Ljava/lang/Object;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method public i(Ljava/lang/Throwable;)V
    .locals 4

    .line 86
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 241
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 87
    invoke-virtual {v3, p1}, Lcom/king/logx/logger/Logger;->i(Ljava/lang/Throwable;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method public varargs i(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 5

    const-string v0, "args"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 80
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 239
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 81
    array-length v4, p3

    invoke-static {p3, v4}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object v4

    invoke-virtual {v3, p1, p2, v4}, Lcom/king/logx/logger/Logger;->i(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method public log(ILjava/lang/String;)V
    .locals 4

    .line 146
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 261
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 147
    invoke-virtual {v3, p1, p2}, Lcom/king/logx/logger/Logger;->log(ILjava/lang/String;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method public log(ILjava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V
    .locals 0

    .line 165
    new-instance p1, Ljava/lang/AssertionError;

    invoke-direct {p1}, Ljava/lang/AssertionError;-><init>()V

    throw p1
.end method

.method public log(ILjava/lang/Throwable;)V
    .locals 4

    .line 158
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 265
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 159
    invoke-virtual {v3, p1, p2}, Lcom/king/logx/logger/Logger;->log(ILjava/lang/Throwable;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method public log(ILjava/lang/Throwable;Ljava/lang/String;)V
    .locals 4

    .line 152
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 263
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 153
    invoke-virtual {v3, p1, p2, p3}, Lcom/king/logx/logger/Logger;->log(ILjava/lang/Throwable;Ljava/lang/String;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method public final loggerCount()I
    .locals 1

    .line 218
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    array-length v0, v0

    return v0
.end method

.method public offset(I)Lcom/king/logx/logger/ILogger;
    .locals 4

    .line 24
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 221
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 25
    invoke-virtual {v3, p1}, Lcom/king/logx/logger/Logger;->offset(I)Lcom/king/logx/logger/ILogger;

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 27
    :cond_0
    move-object p1, p0

    check-cast p1, Lcom/king/logx/logger/ILogger;

    return-object p1
.end method

.method public final removeAllLoggers()V
    .locals 2

    .line 208
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggers:Ljava/util/ArrayList;

    monitor-enter v0

    .line 209
    :try_start_0
    iget-object v1, p0, Lcom/king/logx/logger/CompositeLogger;->loggers:Ljava/util/ArrayList;

    invoke-virtual {v1}, Ljava/util/ArrayList;->clear()V

    const/4 v1, 0x0

    .line 280
    new-array v1, v1, [Lcom/king/logx/logger/Logger;

    check-cast v1, [Ljava/lang/Object;

    check-cast v1, [Lcom/king/logx/logger/Logger;

    .line 210
    iput-object v1, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 211
    sget-object v1, Lkotlin/Unit;->INSTANCE:Lkotlin/Unit;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 208
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    monitor-exit v0

    throw v1
.end method

.method public final removeLogger(Lcom/king/logx/logger/Logger;)V
    .locals 3

    const-string v0, "Cannot remove logger which is not added: "

    const-string v1, "logger"

    invoke-static {p1, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 198
    iget-object v1, p0, Lcom/king/logx/logger/CompositeLogger;->loggers:Ljava/util/ArrayList;

    monitor-enter v1

    .line 199
    :try_start_0
    iget-object v2, p0, Lcom/king/logx/logger/CompositeLogger;->loggers:Ljava/util/ArrayList;

    invoke-virtual {v2, p1}, Ljava/util/ArrayList;->remove(Ljava/lang/Object;)Z

    move-result v2

    if-eqz v2, :cond_0

    .line 200
    iget-object p1, p0, Lcom/king/logx/logger/CompositeLogger;->loggers:Ljava/util/ArrayList;

    check-cast p1, Ljava/util/Collection;

    const/4 v0, 0x0

    .line 279
    new-array v0, v0, [Lcom/king/logx/logger/Logger;

    invoke-interface {p1, v0}, Ljava/util/Collection;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object p1

    const-string v0, "null cannot be cast to non-null type kotlin.Array<T of kotlin.collections.ArraysKt__ArraysJVMKt.toTypedArray>"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNull(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast p1, [Lcom/king/logx/logger/Logger;

    .line 200
    iput-object p1, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 201
    sget-object p1, Lkotlin/Unit;->INSTANCE:Lkotlin/Unit;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 198
    monitor-exit v1

    return-void

    .line 199
    :cond_0
    :try_start_1
    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    new-instance v0, Ljava/lang/IllegalArgumentException;

    invoke-virtual {p1}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-direct {v0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    :catchall_0
    move-exception p1

    .line 198
    monitor-exit v1

    throw p1
.end method

.method public tag(Ljava/lang/String;)Lcom/king/logx/logger/ILogger;
    .locals 4

    const-string v0, "tag"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 31
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 223
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 32
    invoke-virtual {v3, p1}, Lcom/king/logx/logger/Logger;->tag(Ljava/lang/String;)Lcom/king/logx/logger/ILogger;

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 34
    :cond_0
    move-object p1, p0

    check-cast p1, Lcom/king/logx/logger/ILogger;

    return-object p1
.end method

.method public varargs v(Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 5

    const-string v0, "args"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 38
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 225
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 39
    array-length v4, p2

    invoke-static {p2, v4}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object v4

    invoke-virtual {v3, p1, v4}, Lcom/king/logx/logger/Logger;->v(Ljava/lang/String;[Ljava/lang/Object;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method public v(Ljava/lang/Throwable;)V
    .locals 4

    .line 50
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 229
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 51
    invoke-virtual {v3, p1}, Lcom/king/logx/logger/Logger;->v(Ljava/lang/Throwable;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method public varargs v(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 5

    const-string v0, "args"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 44
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 227
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 45
    array-length v4, p3

    invoke-static {p3, v4}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object v4

    invoke-virtual {v3, p1, p2, v4}, Lcom/king/logx/logger/Logger;->v(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method public varargs w(Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 5

    const-string v0, "args"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 92
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 243
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 93
    array-length v4, p2

    invoke-static {p2, v4}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object v4

    invoke-virtual {v3, p1, v4}, Lcom/king/logx/logger/Logger;->w(Ljava/lang/String;[Ljava/lang/Object;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method public w(Ljava/lang/Throwable;)V
    .locals 4

    .line 104
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 247
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 105
    invoke-virtual {v3, p1}, Lcom/king/logx/logger/Logger;->w(Ljava/lang/Throwable;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method public varargs w(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 5

    const-string v0, "args"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 98
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 245
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 99
    array-length v4, p3

    invoke-static {p3, v4}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object v4

    invoke-virtual {v3, p1, p2, v4}, Lcom/king/logx/logger/Logger;->w(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method public varargs wtf(Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 5

    const-string v0, "args"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 128
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 255
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 129
    array-length v4, p2

    invoke-static {p2, v4}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object v4

    invoke-virtual {v3, p1, v4}, Lcom/king/logx/logger/Logger;->wtf(Ljava/lang/String;[Ljava/lang/Object;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method public wtf(Ljava/lang/Throwable;)V
    .locals 4

    .line 140
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 259
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 141
    invoke-virtual {v3, p1}, Lcom/king/logx/logger/Logger;->wtf(Ljava/lang/Throwable;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method

.method public varargs wtf(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V
    .locals 5

    const-string v0, "args"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 134
    iget-object v0, p0, Lcom/king/logx/logger/CompositeLogger;->loggerArray:[Lcom/king/logx/logger/Logger;

    .line 257
    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 135
    array-length v4, p3

    invoke-static {p3, v4}, Ljava/util/Arrays;->copyOf([Ljava/lang/Object;I)[Ljava/lang/Object;

    move-result-object v4

    invoke-virtual {v3, p1, p2, v4}, Lcom/king/logx/logger/Logger;->wtf(Ljava/lang/Throwable;Ljava/lang/String;[Ljava/lang/Object;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void
.end method
