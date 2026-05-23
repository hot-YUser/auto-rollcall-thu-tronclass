.class final synthetic Lcom/google/firebase/iid/zzbh;
.super Ljava/lang/Object;
.source "com.google.firebase:firebase-iid@@20.1.1"

# interfaces
.implements Lcom/google/android/gms/tasks/OnCompleteListener;


# instance fields
.field private final zza:Lcom/google/firebase/iid/zzbi;


# direct methods
.method constructor <init>(Lcom/google/firebase/iid/zzbi;)V
    .locals 0

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/google/firebase/iid/zzbh;->zza:Lcom/google/firebase/iid/zzbi;

    return-void
.end method


# virtual methods
.method public final onComplete(Lcom/google/android/gms/tasks/Task;)V
    .locals 0

    .line 1
    iget-object p1, p0, Lcom/google/firebase/iid/zzbh;->zza:Lcom/google/firebase/iid/zzbi;

    .line 2
    invoke-virtual {p1}, Lcom/google/firebase/iid/zzbi;->zzb()V

    return-void
.end method
