.class Lorg/apache/cordova/file/PendingRequests;
.super Ljava/lang/Object;
.source "PendingRequests.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lorg/apache/cordova/file/PendingRequests$Request;
    }
.end annotation


# instance fields
.field private currentReqId:I

.field private requests:Landroid/util/SparseArray;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroid/util/SparseArray<",
            "Lorg/apache/cordova/file/PendingRequests$Request;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method constructor <init>()V
    .locals 1

    .line 28
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 29
    iput v0, p0, Lorg/apache/cordova/file/PendingRequests;->currentReqId:I

    .line 30
    new-instance v0, Landroid/util/SparseArray;

    invoke-direct {v0}, Landroid/util/SparseArray;-><init>()V

    iput-object v0, p0, Lorg/apache/cordova/file/PendingRequests;->requests:Landroid/util/SparseArray;

    return-void
.end method

.method static synthetic access$208(Lorg/apache/cordova/file/PendingRequests;)I
    .locals 2

    .line 28
    iget v0, p0, Lorg/apache/cordova/file/PendingRequests;->currentReqId:I

    add-int/lit8 v1, v0, 0x1

    iput v1, p0, Lorg/apache/cordova/file/PendingRequests;->currentReqId:I

    return v0
.end method


# virtual methods
.method public declared-synchronized createRequest(Ljava/lang/String;ILorg/apache/cordova/CallbackContext;)I
    .locals 7

    monitor-enter p0

    .line 41
    :try_start_0
    new-instance v6, Lorg/apache/cordova/file/PendingRequests$Request;

    const/4 v5, 0x0

    move-object v0, v6

    move-object v1, p0

    move-object v2, p1

    move v3, p2

    move-object v4, p3

    invoke-direct/range {v0 .. v5}, Lorg/apache/cordova/file/PendingRequests$Request;-><init>(Lorg/apache/cordova/file/PendingRequests;Ljava/lang/String;ILorg/apache/cordova/CallbackContext;Lorg/apache/cordova/file/PendingRequests$1;)V

    .line 42
    iget-object p1, p0, Lorg/apache/cordova/file/PendingRequests;->requests:Landroid/util/SparseArray;

    invoke-static {v6}, Lorg/apache/cordova/file/PendingRequests$Request;->access$100(Lorg/apache/cordova/file/PendingRequests$Request;)I

    move-result p2

    invoke-virtual {p1, p2, v6}, Landroid/util/SparseArray;->put(ILjava/lang/Object;)V

    .line 43
    invoke-static {v6}, Lorg/apache/cordova/file/PendingRequests$Request;->access$100(Lorg/apache/cordova/file/PendingRequests$Request;)I

    move-result p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    monitor-exit p0

    return p1

    :catchall_0
    move-exception p1

    :try_start_1
    monitor-exit p0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method public declared-synchronized getAndRemove(I)Lorg/apache/cordova/file/PendingRequests$Request;
    .locals 2

    monitor-enter p0

    .line 53
    :try_start_0
    iget-object v0, p0, Lorg/apache/cordova/file/PendingRequests;->requests:Landroid/util/SparseArray;

    invoke-virtual {v0, p1}, Landroid/util/SparseArray;->get(I)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lorg/apache/cordova/file/PendingRequests$Request;

    .line 54
    iget-object v1, p0, Lorg/apache/cordova/file/PendingRequests;->requests:Landroid/util/SparseArray;

    invoke-virtual {v1, p1}, Landroid/util/SparseArray;->remove(I)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 55
    monitor-exit p0

    return-object v0

    :catchall_0
    move-exception p1

    :try_start_1
    monitor-exit p0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method
