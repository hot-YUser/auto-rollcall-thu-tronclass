.class Landroidx/camera/core/impl/utils/executor/IoExecutor$1;
.super Ljava/lang/Object;
.source "IoExecutor.java"

# interfaces
.implements Ljava/util/concurrent/ThreadFactory;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/impl/utils/executor/IoExecutor;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# static fields
.field private static final THREAD_NAME_STEM:Ljava/lang/String; = "CameraX-camerax_io_%d"


# instance fields
.field private final mThreadId:Ljava/util/concurrent/atomic/AtomicInteger;

.field final synthetic this$0:Landroidx/camera/core/impl/utils/executor/IoExecutor;


# direct methods
.method constructor <init>(Landroidx/camera/core/impl/utils/executor/IoExecutor;)V
    .locals 1

    .line 41
    iput-object p1, p0, Landroidx/camera/core/impl/utils/executor/IoExecutor$1;->this$0:Landroidx/camera/core/impl/utils/executor/IoExecutor;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 45
    new-instance p1, Ljava/util/concurrent/atomic/AtomicInteger;

    const/4 v0, 0x0

    invoke-direct {p1, v0}, Ljava/util/concurrent/atomic/AtomicInteger;-><init>(I)V

    iput-object p1, p0, Landroidx/camera/core/impl/utils/executor/IoExecutor$1;->mThreadId:Ljava/util/concurrent/atomic/AtomicInteger;

    return-void
.end method


# virtual methods
.method public newThread(Ljava/lang/Runnable;)Ljava/lang/Thread;
    .locals 3

    .line 49
    new-instance v0, Ljava/lang/Thread;

    invoke-direct {v0, p1}, Ljava/lang/Thread;-><init>(Ljava/lang/Runnable;)V

    .line 50
    sget-object p1, Ljava/util/Locale;->US:Ljava/util/Locale;

    iget-object v1, p0, Landroidx/camera/core/impl/utils/executor/IoExecutor$1;->mThreadId:Ljava/util/concurrent/atomic/AtomicInteger;

    .line 54
    invoke-virtual {v1}, Ljava/util/concurrent/atomic/AtomicInteger;->getAndIncrement()I

    move-result v1

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    filled-new-array {v1}, [Ljava/lang/Object;

    move-result-object v1

    .line 51
    const-string v2, "CameraX-camerax_io_%d"

    invoke-static {p1, v2, v1}, Ljava/lang/String;->format(Ljava/util/Locale;Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object p1

    .line 50
    invoke-virtual {v0, p1}, Ljava/lang/Thread;->setName(Ljava/lang/String;)V

    return-object v0
.end method
