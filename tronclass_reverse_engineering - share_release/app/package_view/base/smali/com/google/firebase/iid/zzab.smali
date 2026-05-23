.class final Lcom/google/firebase/iid/zzab;
.super Ljava/lang/Object;
.source "com.google.firebase:firebase-iid@@20.1.1"

# interfaces
.implements Lcom/google/firebase/iid/InstanceIdResult;


# instance fields
.field private final zza:Ljava/lang/String;

.field private final zzb:Ljava/lang/String;


# direct methods
.method constructor <init>(Ljava/lang/String;Ljava/lang/String;)V
    .locals 0

    .line 1
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 2
    iput-object p1, p0, Lcom/google/firebase/iid/zzab;->zza:Ljava/lang/String;

    .line 3
    iput-object p2, p0, Lcom/google/firebase/iid/zzab;->zzb:Ljava/lang/String;

    return-void
.end method


# virtual methods
.method public final getId()Ljava/lang/String;
    .locals 1

    .line 5
    iget-object v0, p0, Lcom/google/firebase/iid/zzab;->zza:Ljava/lang/String;

    return-object v0
.end method

.method public final getToken()Ljava/lang/String;
    .locals 1

    .line 6
    iget-object v0, p0, Lcom/google/firebase/iid/zzab;->zzb:Ljava/lang/String;

    return-object v0
.end method
