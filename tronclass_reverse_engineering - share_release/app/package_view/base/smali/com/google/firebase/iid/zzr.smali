.class final synthetic Lcom/google/firebase/iid/zzr;
.super Ljava/lang/Object;
.source "com.google.firebase:firebase-iid@@20.1.1"

# interfaces
.implements Lcom/google/firebase/events/EventHandler;


# instance fields
.field private final zza:Lcom/google/firebase/iid/FirebaseInstanceId$zza;


# direct methods
.method constructor <init>(Lcom/google/firebase/iid/FirebaseInstanceId$zza;)V
    .locals 0

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/google/firebase/iid/zzr;->zza:Lcom/google/firebase/iid/FirebaseInstanceId$zza;

    return-void
.end method


# virtual methods
.method public final handle(Lcom/google/firebase/events/Event;)V
    .locals 1

    .line 1
    iget-object p1, p0, Lcom/google/firebase/iid/zzr;->zza:Lcom/google/firebase/iid/FirebaseInstanceId$zza;

    .line 2
    monitor-enter p1

    .line 3
    :try_start_0
    invoke-virtual {p1}, Lcom/google/firebase/iid/FirebaseInstanceId$zza;->zza()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 4
    iget-object v0, p1, Lcom/google/firebase/iid/FirebaseInstanceId$zza;->zza:Lcom/google/firebase/iid/FirebaseInstanceId;

    invoke-static {v0}, Lcom/google/firebase/iid/FirebaseInstanceId;->zzb(Lcom/google/firebase/iid/FirebaseInstanceId;)V

    .line 5
    :cond_0
    monitor-exit p1

    return-void

    :catchall_0
    move-exception v0

    monitor-exit p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v0
.end method
