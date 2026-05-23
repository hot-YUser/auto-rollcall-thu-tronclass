.class final synthetic Lcom/google/firebase/iid/zzah;
.super Ljava/lang/Object;
.source "com.google.firebase:firebase-iid@@20.1.1"

# interfaces
.implements Ljava/lang/Runnable;


# instance fields
.field private final zza:Lcom/google/firebase/iid/zzaf;


# direct methods
.method constructor <init>(Lcom/google/firebase/iid/zzaf;)V
    .locals 0

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/google/firebase/iid/zzah;->zza:Lcom/google/firebase/iid/zzaf;

    return-void
.end method


# virtual methods
.method public final run()V
    .locals 1

    iget-object v0, p0, Lcom/google/firebase/iid/zzah;->zza:Lcom/google/firebase/iid/zzaf;

    invoke-virtual {v0}, Lcom/google/firebase/iid/zzaf;->zzc()V

    return-void
.end method
