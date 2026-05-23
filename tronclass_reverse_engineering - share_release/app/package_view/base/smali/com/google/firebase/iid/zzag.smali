.class final synthetic Lcom/google/firebase/iid/zzag;
.super Ljava/lang/Object;
.source "com.google.firebase:firebase-iid@@20.1.1"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field private final zza:Lcom/google/firebase/iid/zzaf;

.field private final zzb:Landroid/os/IBinder;


# direct methods
.method constructor <init>(Lcom/google/firebase/iid/zzaf;Landroid/os/IBinder;)V
    .locals 0

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/google/firebase/iid/zzag;->zza:Lcom/google/firebase/iid/zzaf;

    iput-object p2, p0, Lcom/google/firebase/iid/zzag;->zzb:Landroid/os/IBinder;

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 4

    .line 1
    iget-object v0, p0, Lcom/google/firebase/iid/zzag;->zza:Lcom/google/firebase/iid/zzaf;

    iget-object v1, p0, Lcom/google/firebase/iid/zzag;->zzb:Landroid/os/IBinder;

    .line 2
    monitor-enter v0

    const/4 v2, 0x0

    if-nez v1, :cond_0

    .line 4
    :try_start_0
    const-string v1, "Null service connection"

    invoke-virtual {v0, v2, v1}, Lcom/google/firebase/iid/zzaf;->zza(ILjava/lang/String;)V

    .line 5
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    return-void

    .line 6
    :cond_0
    :try_start_1
    new-instance v3, Lcom/google/firebase/iid/zzak;

    invoke-direct {v3, v1}, Lcom/google/firebase/iid/zzak;-><init>(Landroid/os/IBinder;)V

    iput-object v3, v0, Lcom/google/firebase/iid/zzaf;->zzc:Lcom/google/firebase/iid/zzak;
    :try_end_1
    .catch Landroid/os/RemoteException; {:try_start_1 .. :try_end_1} :catch_0
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    const/4 v1, 0x2

    .line 11
    :try_start_2
    iput v1, v0, Lcom/google/firebase/iid/zzaf;->zza:I

    .line 12
    invoke-virtual {v0}, Lcom/google/firebase/iid/zzaf;->zza()V

    .line 13
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    goto :goto_0

    :catch_0
    move-exception v1

    .line 9
    invoke-virtual {v1}, Landroid/os/RemoteException;->getMessage()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v2, v1}, Lcom/google/firebase/iid/zzaf;->zza(ILjava/lang/String;)V

    .line 10
    monitor-exit v0

    return-void

    .line 13
    :goto_0
    monitor-exit v0
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    throw v1
.end method
