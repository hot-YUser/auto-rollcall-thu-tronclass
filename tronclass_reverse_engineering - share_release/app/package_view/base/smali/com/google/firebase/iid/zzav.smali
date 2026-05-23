.class final synthetic Lcom/google/firebase/iid/zzav;
.super Ljava/lang/Object;
.source "com.google.firebase:firebase-iid@@20.1.1"

# interfaces
.implements Lcom/google/android/gms/tasks/Continuation;


# instance fields
.field private final zza:Lcom/google/firebase/iid/zzat;

.field private final zzb:Landroid/util/Pair;


# direct methods
.method constructor <init>(Lcom/google/firebase/iid/zzat;Landroid/util/Pair;)V
    .locals 0

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/google/firebase/iid/zzav;->zza:Lcom/google/firebase/iid/zzat;

    iput-object p2, p0, Lcom/google/firebase/iid/zzav;->zzb:Landroid/util/Pair;

    return-void
.end method


# virtual methods
.method public final then(Lcom/google/android/gms/tasks/Task;)Ljava/lang/Object;
    .locals 2

    iget-object v0, p0, Lcom/google/firebase/iid/zzav;->zza:Lcom/google/firebase/iid/zzat;

    iget-object v1, p0, Lcom/google/firebase/iid/zzav;->zzb:Landroid/util/Pair;

    invoke-virtual {v0, v1, p1}, Lcom/google/firebase/iid/zzat;->zza(Landroid/util/Pair;Lcom/google/android/gms/tasks/Task;)Lcom/google/android/gms/tasks/Task;

    move-result-object p1

    return-object p1
.end method
