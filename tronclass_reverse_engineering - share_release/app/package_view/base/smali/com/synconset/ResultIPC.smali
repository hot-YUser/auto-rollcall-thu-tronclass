.class public Lcom/synconset/ResultIPC;
.super Ljava/lang/Object;
.source "ResultIPC.java"


# static fields
.field private static instance:Lcom/synconset/ResultIPC;


# instance fields
.field private largeData:Landroid/os/Bundle;

.field private sync:I


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 5
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 16
    iput v0, p0, Lcom/synconset/ResultIPC;->sync:I

    return-void
.end method

.method public static declared-synchronized get()Lcom/synconset/ResultIPC;
    .locals 2

    const-class v0, Lcom/synconset/ResultIPC;

    monitor-enter v0

    .line 10
    :try_start_0
    sget-object v1, Lcom/synconset/ResultIPC;->instance:Lcom/synconset/ResultIPC;

    if-nez v1, :cond_0

    .line 11
    new-instance v1, Lcom/synconset/ResultIPC;

    invoke-direct {v1}, Lcom/synconset/ResultIPC;-><init>()V

    sput-object v1, Lcom/synconset/ResultIPC;->instance:Lcom/synconset/ResultIPC;

    .line 13
    :cond_0
    sget-object v1, Lcom/synconset/ResultIPC;->instance:Lcom/synconset/ResultIPC;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    monitor-exit v0

    return-object v1

    :catchall_0
    move-exception v1

    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw v1
.end method


# virtual methods
.method public getLargeData(I)Landroid/os/Bundle;
    .locals 1

    .line 25
    iget v0, p0, Lcom/synconset/ResultIPC;->sync:I

    if-ne p1, v0, :cond_0

    iget-object p1, p0, Lcom/synconset/ResultIPC;->largeData:Landroid/os/Bundle;

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    :goto_0
    return-object p1
.end method

.method public setLargeData(Landroid/os/Bundle;)I
    .locals 0

    .line 20
    iput-object p1, p0, Lcom/synconset/ResultIPC;->largeData:Landroid/os/Bundle;

    .line 21
    iget p1, p0, Lcom/synconset/ResultIPC;->sync:I

    add-int/lit8 p1, p1, 0x1

    iput p1, p0, Lcom/synconset/ResultIPC;->sync:I

    return p1
.end method
