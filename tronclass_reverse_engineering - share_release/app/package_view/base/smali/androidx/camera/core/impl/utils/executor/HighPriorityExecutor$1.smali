.class Landroidx/camera/core/impl/utils/executor/HighPriorityExecutor$1;
.super Ljava/lang/Object;
.source "HighPriorityExecutor.java"

# interfaces
.implements Ljava/util/concurrent/ThreadFactory;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/camera/core/impl/utils/executor/HighPriorityExecutor;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# static fields
.field private static final THREAD_NAME:Ljava/lang/String; = "CameraX-camerax_high_priority"


# instance fields
.field final synthetic this$0:Landroidx/camera/core/impl/utils/executor/HighPriorityExecutor;


# direct methods
.method constructor <init>(Landroidx/camera/core/impl/utils/executor/HighPriorityExecutor;)V
    .locals 0

    .line 37
    iput-object p1, p0, Landroidx/camera/core/impl/utils/executor/HighPriorityExecutor$1;->this$0:Landroidx/camera/core/impl/utils/executor/HighPriorityExecutor;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public newThread(Ljava/lang/Runnable;)Ljava/lang/Thread;
    .locals 1

    .line 44
    new-instance v0, Ljava/lang/Thread;

    invoke-direct {v0, p1}, Ljava/lang/Thread;-><init>(Ljava/lang/Runnable;)V

    const/16 p1, 0xa

    .line 45
    invoke-virtual {v0, p1}, Ljava/lang/Thread;->setPriority(I)V

    .line 46
    const-string p1, "CameraX-camerax_high_priority"

    invoke-virtual {v0, p1}, Ljava/lang/Thread;->setName(Ljava/lang/String;)V

    return-object v0
.end method
