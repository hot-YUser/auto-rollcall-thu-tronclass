.class public abstract Landroidx/camera/core/impl/StateObservable;
.super Ljava/lang/Object;
.source "StateObservable.java"

# interfaces
.implements Landroidx/camera/core/impl/Observable;


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/impl/StateObservable$ErrorWrapper;,
        Landroidx/camera/core/impl/StateObservable$ObserverWrapper;
    }
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "<T:",
        "Ljava/lang/Object;",
        ">",
        "Ljava/lang/Object;",
        "Landroidx/camera/core/impl/Observable<",
        "TT;>;"
    }
.end annotation


# static fields
.field private static final INITIAL_VERSION:I


# instance fields
.field private final mLock:Ljava/lang/Object;

.field private final mNotifySet:Ljava/util/concurrent/CopyOnWriteArraySet;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/concurrent/CopyOnWriteArraySet<",
            "Landroidx/camera/core/impl/StateObservable$ObserverWrapper<",
            "TT;>;>;"
        }
    .end annotation
.end field

.field private final mState:Ljava/util/concurrent/atomic/AtomicReference;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/concurrent/atomic/AtomicReference<",
            "Ljava/lang/Object;",
            ">;"
        }
    .end annotation
.end field

.field private mUpdating:Z

.field private mVersion:I

.field private final mWrapperMap:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Landroidx/camera/core/impl/Observable$Observer<",
            "-TT;>;",
            "Landroidx/camera/core/impl/StateObservable$ObserverWrapper<",
            "TT;>;>;"
        }
    .end annotation
.end field


# direct methods
.method constructor <init>(Ljava/lang/Object;Z)V
    .locals 1

    .line 76
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 63
    new-instance v0, Ljava/lang/Object;

    invoke-direct {v0}, Ljava/lang/Object;-><init>()V

    iput-object v0, p0, Landroidx/camera/core/impl/StateObservable;->mLock:Ljava/lang/Object;

    const/4 v0, 0x0

    .line 65
    iput v0, p0, Landroidx/camera/core/impl/StateObservable;->mVersion:I

    .line 67
    iput-boolean v0, p0, Landroidx/camera/core/impl/StateObservable;->mUpdating:Z

    .line 71
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    iput-object v0, p0, Landroidx/camera/core/impl/StateObservable;->mWrapperMap:Ljava/util/Map;

    .line 73
    new-instance v0, Ljava/util/concurrent/CopyOnWriteArraySet;

    invoke-direct {v0}, Ljava/util/concurrent/CopyOnWriteArraySet;-><init>()V

    iput-object v0, p0, Landroidx/camera/core/impl/StateObservable;->mNotifySet:Ljava/util/concurrent/CopyOnWriteArraySet;

    if-eqz p2, :cond_0

    .line 78
    instance-of p2, p1, Ljava/lang/Throwable;

    const-string v0, "Initial errors must be Throwable"

    invoke-static {p2, v0}, Landroidx/core/util/Preconditions;->checkArgument(ZLjava/lang/Object;)V

    .line 80
    new-instance p2, Ljava/util/concurrent/atomic/AtomicReference;

    check-cast p1, Ljava/lang/Throwable;

    invoke-static {p1}, Landroidx/camera/core/impl/StateObservable$ErrorWrapper;->wrap(Ljava/lang/Throwable;)Landroidx/camera/core/impl/StateObservable$ErrorWrapper;

    move-result-object p1

    invoke-direct {p2, p1}, Ljava/util/concurrent/atomic/AtomicReference;-><init>(Ljava/lang/Object;)V

    iput-object p2, p0, Landroidx/camera/core/impl/StateObservable;->mState:Ljava/util/concurrent/atomic/AtomicReference;

    goto :goto_0

    .line 82
    :cond_0
    new-instance p2, Ljava/util/concurrent/atomic/AtomicReference;

    invoke-direct {p2, p1}, Ljava/util/concurrent/atomic/AtomicReference;-><init>(Ljava/lang/Object;)V

    iput-object p2, p0, Landroidx/camera/core/impl/StateObservable;->mState:Ljava/util/concurrent/atomic/AtomicReference;

    :goto_0
    return-void
.end method

.method private removeObserverLocked(Landroidx/camera/core/impl/Observable$Observer;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/impl/Observable$Observer<",
            "-TT;>;)V"
        }
    .end annotation

    .line 178
    iget-object v0, p0, Landroidx/camera/core/impl/StateObservable;->mWrapperMap:Ljava/util/Map;

    invoke-interface {v0, p1}, Ljava/util/Map;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroidx/camera/core/impl/StateObservable$ObserverWrapper;

    if-eqz p1, :cond_0

    .line 180
    invoke-virtual {p1}, Landroidx/camera/core/impl/StateObservable$ObserverWrapper;->close()V

    .line 181
    iget-object v0, p0, Landroidx/camera/core/impl/StateObservable;->mNotifySet:Ljava/util/concurrent/CopyOnWriteArraySet;

    invoke-virtual {v0, p1}, Ljava/util/concurrent/CopyOnWriteArraySet;->remove(Ljava/lang/Object;)Z

    :cond_0
    return-void
.end method

.method private updateStateInternal(Ljava/lang/Object;)V
    .locals 3

    .line 98
    iget-object v0, p0, Landroidx/camera/core/impl/StateObservable;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 99
    :try_start_0
    iget-object v1, p0, Landroidx/camera/core/impl/StateObservable;->mState:Ljava/util/concurrent/atomic/AtomicReference;

    invoke-virtual {v1, p1}, Ljava/util/concurrent/atomic/AtomicReference;->getAndSet(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    .line 101
    invoke-static {v1, p1}, Ljava/util/Objects;->equals(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_0

    monitor-exit v0

    return-void

    .line 102
    :cond_0
    iget p1, p0, Landroidx/camera/core/impl/StateObservable;->mVersion:I

    const/4 v1, 0x1

    add-int/2addr p1, v1

    iput p1, p0, Landroidx/camera/core/impl/StateObservable;->mVersion:I

    .line 103
    iget-boolean v2, p0, Landroidx/camera/core/impl/StateObservable;->mUpdating:Z

    if-eqz v2, :cond_1

    monitor-exit v0

    return-void

    .line 104
    :cond_1
    iput-boolean v1, p0, Landroidx/camera/core/impl/StateObservable;->mUpdating:Z

    .line 105
    iget-object v1, p0, Landroidx/camera/core/impl/StateObservable;->mNotifySet:Ljava/util/concurrent/CopyOnWriteArraySet;

    invoke-virtual {v1}, Ljava/util/concurrent/CopyOnWriteArraySet;->iterator()Ljava/util/Iterator;

    move-result-object v1

    .line 106
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_1

    .line 110
    :goto_0
    invoke-interface {v1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_2

    .line 111
    invoke-interface {v1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroidx/camera/core/impl/StateObservable$ObserverWrapper;

    invoke-virtual {v0, p1}, Landroidx/camera/core/impl/StateObservable$ObserverWrapper;->update(I)V

    goto :goto_0

    .line 115
    :cond_2
    iget-object v1, p0, Landroidx/camera/core/impl/StateObservable;->mLock:Ljava/lang/Object;

    monitor-enter v1

    .line 116
    :try_start_1
    iget v0, p0, Landroidx/camera/core/impl/StateObservable;->mVersion:I

    if-ne v0, p1, :cond_3

    const/4 p1, 0x0

    .line 118
    iput-boolean p1, p0, Landroidx/camera/core/impl/StateObservable;->mUpdating:Z

    .line 119
    monitor-exit v1

    return-void

    .line 124
    :cond_3
    iget-object p1, p0, Landroidx/camera/core/impl/StateObservable;->mNotifySet:Ljava/util/concurrent/CopyOnWriteArraySet;

    invoke-virtual {p1}, Ljava/util/concurrent/CopyOnWriteArraySet;->iterator()Ljava/util/Iterator;

    move-result-object p1

    .line 125
    iget v0, p0, Landroidx/camera/core/impl/StateObservable;->mVersion:I

    .line 126
    monitor-exit v1

    move-object v1, p1

    move p1, v0

    goto :goto_0

    :catchall_0
    move-exception p1

    monitor-exit v1
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1

    :catchall_1
    move-exception p1

    .line 106
    :try_start_2
    monitor-exit v0
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_1

    throw p1
.end method


# virtual methods
.method public addObserver(Ljava/util/concurrent/Executor;Landroidx/camera/core/impl/Observable$Observer;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/concurrent/Executor;",
            "Landroidx/camera/core/impl/Observable$Observer<",
            "-TT;>;)V"
        }
    .end annotation

    .line 154
    iget-object v0, p0, Landroidx/camera/core/impl/StateObservable;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 156
    :try_start_0
    invoke-direct {p0, p2}, Landroidx/camera/core/impl/StateObservable;->removeObserverLocked(Landroidx/camera/core/impl/Observable$Observer;)V

    .line 158
    new-instance v1, Landroidx/camera/core/impl/StateObservable$ObserverWrapper;

    iget-object v2, p0, Landroidx/camera/core/impl/StateObservable;->mState:Ljava/util/concurrent/atomic/AtomicReference;

    invoke-direct {v1, v2, p1, p2}, Landroidx/camera/core/impl/StateObservable$ObserverWrapper;-><init>(Ljava/util/concurrent/atomic/AtomicReference;Ljava/util/concurrent/Executor;Landroidx/camera/core/impl/Observable$Observer;)V

    .line 159
    iget-object p1, p0, Landroidx/camera/core/impl/StateObservable;->mWrapperMap:Ljava/util/Map;

    invoke-interface {p1, p2, v1}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 160
    iget-object p1, p0, Landroidx/camera/core/impl/StateObservable;->mNotifySet:Ljava/util/concurrent/CopyOnWriteArraySet;

    invoke-virtual {p1, v1}, Ljava/util/concurrent/CopyOnWriteArraySet;->add(Ljava/lang/Object;)Z

    .line 161
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    const/4 p1, 0x0

    .line 166
    invoke-virtual {v1, p1}, Landroidx/camera/core/impl/StateObservable$ObserverWrapper;->update(I)V

    return-void

    :catchall_0
    move-exception p1

    .line 161
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method public fetchData()Lcom/google/common/util/concurrent/ListenableFuture;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/google/common/util/concurrent/ListenableFuture<",
            "TT;>;"
        }
    .end annotation

    .line 143
    iget-object v0, p0, Landroidx/camera/core/impl/StateObservable;->mState:Ljava/util/concurrent/atomic/AtomicReference;

    invoke-virtual {v0}, Ljava/util/concurrent/atomic/AtomicReference;->get()Ljava/lang/Object;

    move-result-object v0

    .line 144
    instance-of v1, v0, Landroidx/camera/core/impl/StateObservable$ErrorWrapper;

    if-eqz v1, :cond_0

    .line 145
    check-cast v0, Landroidx/camera/core/impl/StateObservable$ErrorWrapper;

    invoke-virtual {v0}, Landroidx/camera/core/impl/StateObservable$ErrorWrapper;->getError()Ljava/lang/Throwable;

    move-result-object v0

    invoke-static {v0}, Landroidx/camera/core/impl/utils/futures/Futures;->immediateFailedFuture(Ljava/lang/Throwable;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object v0

    return-object v0

    .line 147
    :cond_0
    invoke-static {v0}, Landroidx/camera/core/impl/utils/futures/Futures;->immediateFuture(Ljava/lang/Object;)Lcom/google/common/util/concurrent/ListenableFuture;

    move-result-object v0

    return-object v0
.end method

.method public removeObserver(Landroidx/camera/core/impl/Observable$Observer;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroidx/camera/core/impl/Observable$Observer<",
            "-TT;>;)V"
        }
    .end annotation

    .line 171
    iget-object v0, p0, Landroidx/camera/core/impl/StateObservable;->mLock:Ljava/lang/Object;

    monitor-enter v0

    .line 172
    :try_start_0
    invoke-direct {p0, p1}, Landroidx/camera/core/impl/StateObservable;->removeObserverLocked(Landroidx/camera/core/impl/Observable$Observer;)V

    .line 173
    monitor-exit v0

    return-void

    :catchall_0
    move-exception p1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method

.method updateState(Ljava/lang/Object;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(TT;)V"
        }
    .end annotation

    .line 88
    invoke-direct {p0, p1}, Landroidx/camera/core/impl/StateObservable;->updateStateInternal(Ljava/lang/Object;)V

    return-void
.end method

.method updateStateAsError(Ljava/lang/Throwable;)V
    .locals 0

    .line 92
    invoke-static {p1}, Landroidx/camera/core/impl/StateObservable$ErrorWrapper;->wrap(Ljava/lang/Throwable;)Landroidx/camera/core/impl/StateObservable$ErrorWrapper;

    move-result-object p1

    invoke-direct {p0, p1}, Landroidx/camera/core/impl/StateObservable;->updateStateInternal(Ljava/lang/Object;)V

    return-void
.end method
