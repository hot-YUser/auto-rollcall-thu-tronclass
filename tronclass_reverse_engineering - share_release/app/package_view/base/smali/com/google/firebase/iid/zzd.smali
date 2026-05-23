.class final synthetic Lcom/google/firebase/iid/zzd;
.super Ljava/lang/Object;
.source "com.google.firebase:firebase-iid@@20.1.1"

# interfaces
.implements Ljava/util/concurrent/Callable;


# instance fields
.field private final zza:Landroid/content/Context;

.field private final zzb:Landroid/content/Intent;


# direct methods
.method constructor <init>(Landroid/content/Context;Landroid/content/Intent;)V
    .locals 0

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/google/firebase/iid/zzd;->zza:Landroid/content/Context;

    iput-object p2, p0, Lcom/google/firebase/iid/zzd;->zzb:Landroid/content/Intent;

    return-void
.end method


# virtual methods
.method public final call()Ljava/lang/Object;
    .locals 2

    iget-object v0, p0, Lcom/google/firebase/iid/zzd;->zza:Landroid/content/Context;

    iget-object v1, p0, Lcom/google/firebase/iid/zzd;->zzb:Landroid/content/Intent;

    invoke-static {v0, v1}, Lcom/google/firebase/iid/zza;->zza(Landroid/content/Context;Landroid/content/Intent;)Ljava/lang/Integer;

    move-result-object v0

    return-object v0
.end method
