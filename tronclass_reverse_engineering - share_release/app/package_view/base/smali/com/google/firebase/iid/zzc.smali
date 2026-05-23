.class final synthetic Lcom/google/firebase/iid/zzc;
.super Ljava/lang/Object;
.source "com.google.firebase:firebase-iid@@20.1.1"

# interfaces
.implements Lcom/google/android/gms/tasks/Continuation;


# instance fields
.field private final zza:Landroid/content/Context;

.field private final zzb:Landroid/content/Intent;


# direct methods
.method constructor <init>(Landroid/content/Context;Landroid/content/Intent;)V
    .locals 0

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/google/firebase/iid/zzc;->zza:Landroid/content/Context;

    iput-object p2, p0, Lcom/google/firebase/iid/zzc;->zzb:Landroid/content/Intent;

    return-void
.end method


# virtual methods
.method public final then(Lcom/google/android/gms/tasks/Task;)Ljava/lang/Object;
    .locals 2

    iget-object v0, p0, Lcom/google/firebase/iid/zzc;->zza:Landroid/content/Context;

    iget-object v1, p0, Lcom/google/firebase/iid/zzc;->zzb:Landroid/content/Intent;

    invoke-static {v0, v1, p1}, Lcom/google/firebase/iid/zza;->zza(Landroid/content/Context;Landroid/content/Intent;Lcom/google/android/gms/tasks/Task;)Lcom/google/android/gms/tasks/Task;

    move-result-object p1

    return-object p1
.end method
