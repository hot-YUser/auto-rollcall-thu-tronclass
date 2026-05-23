.class final synthetic Lcom/google/firebase/iid/zzv;
.super Ljava/lang/Object;
.source "com.google.firebase:firebase-iid@@20.1.1"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field private final zza:Lcom/google/firebase/iid/zzs;

.field private final zzb:Ljava/lang/String;

.field private final zzc:Ljava/lang/String;

.field private final zzd:Ljava/lang/String;

.field private final zze:Landroid/os/Bundle;

.field private final zzf:Lcom/google/android/gms/tasks/TaskCompletionSource;


# direct methods
.method constructor <init>(Lcom/google/firebase/iid/zzs;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Landroid/os/Bundle;Lcom/google/android/gms/tasks/TaskCompletionSource;)V
    .locals 0

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/google/firebase/iid/zzv;->zza:Lcom/google/firebase/iid/zzs;

    iput-object p2, p0, Lcom/google/firebase/iid/zzv;->zzb:Ljava/lang/String;

    iput-object p3, p0, Lcom/google/firebase/iid/zzv;->zzc:Ljava/lang/String;

    iput-object p4, p0, Lcom/google/firebase/iid/zzv;->zzd:Ljava/lang/String;

    iput-object p5, p0, Lcom/google/firebase/iid/zzv;->zze:Landroid/os/Bundle;

    iput-object p6, p0, Lcom/google/firebase/iid/zzv;->zzf:Lcom/google/android/gms/tasks/TaskCompletionSource;

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 6

    iget-object v0, p0, Lcom/google/firebase/iid/zzv;->zza:Lcom/google/firebase/iid/zzs;

    iget-object v1, p0, Lcom/google/firebase/iid/zzv;->zzb:Ljava/lang/String;

    iget-object v2, p0, Lcom/google/firebase/iid/zzv;->zzc:Ljava/lang/String;

    iget-object v3, p0, Lcom/google/firebase/iid/zzv;->zzd:Ljava/lang/String;

    iget-object v4, p0, Lcom/google/firebase/iid/zzv;->zze:Landroid/os/Bundle;

    iget-object v5, p0, Lcom/google/firebase/iid/zzv;->zzf:Lcom/google/android/gms/tasks/TaskCompletionSource;

    invoke-virtual/range {v0 .. v5}, Lcom/google/firebase/iid/zzs;->zza(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Landroid/os/Bundle;Lcom/google/android/gms/tasks/TaskCompletionSource;)V

    return-void
.end method
