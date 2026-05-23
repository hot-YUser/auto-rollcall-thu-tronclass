.class final synthetic Lcom/google/firebase/iid/zzal;
.super Ljava/lang/Object;
.source "com.google.firebase:firebase-iid@@20.1.1"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field private final zza:Lcom/google/firebase/iid/zzaf;

.field private final zzb:Lcom/google/firebase/iid/zzam;


# direct methods
.method constructor <init>(Lcom/google/firebase/iid/zzaf;Lcom/google/firebase/iid/zzam;)V
    .locals 0

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/google/firebase/iid/zzal;->zza:Lcom/google/firebase/iid/zzaf;

    iput-object p2, p0, Lcom/google/firebase/iid/zzal;->zzb:Lcom/google/firebase/iid/zzam;

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 2

    .line 1
    iget-object v0, p0, Lcom/google/firebase/iid/zzal;->zza:Lcom/google/firebase/iid/zzaf;

    iget-object v1, p0, Lcom/google/firebase/iid/zzal;->zzb:Lcom/google/firebase/iid/zzam;

    .line 2
    iget v1, v1, Lcom/google/firebase/iid/zzam;->zza:I

    invoke-virtual {v0, v1}, Lcom/google/firebase/iid/zzaf;->zza(I)V

    return-void
.end method
