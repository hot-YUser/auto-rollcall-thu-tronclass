.class final Lcom/google/android/datatransport/cct/a/zzk$zza;
.super Lcom/google/android/datatransport/cct/a/zzv$zza;
.source "com.google.android.datatransport:transport-backend-cct@@2.2.0"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/google/android/datatransport/cct/a/zzk;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x18
    name = "zza"
.end annotation


# instance fields
.field private zza:Ljava/lang/Long;

.field private zzb:Ljava/lang/Long;

.field private zzc:Lcom/google/android/datatransport/cct/a/zzq;

.field private zzd:Ljava/lang/Integer;

.field private zze:Ljava/lang/String;

.field private zzf:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Lcom/google/android/datatransport/cct/a/zzt;",
            ">;"
        }
    .end annotation
.end field

.field private zzg:Lcom/google/android/datatransport/cct/a/zzaa;


# direct methods
.method constructor <init>()V
    .locals 0

    .line 1
    invoke-direct {p0}, Lcom/google/android/datatransport/cct/a/zzv$zza;-><init>()V

    return-void
.end method


# virtual methods
.method zza(I)Lcom/google/android/datatransport/cct/a/zzv$zza;
    .locals 0

    .line 3
    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    iput-object p1, p0, Lcom/google/android/datatransport/cct/a/zzk$zza;->zzd:Ljava/lang/Integer;

    return-object p0
.end method

.method public zza(J)Lcom/google/android/datatransport/cct/a/zzv$zza;
    .locals 0

    .line 1
    invoke-static {p1, p2}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object p1

    iput-object p1, p0, Lcom/google/android/datatransport/cct/a/zzk$zza;->zza:Ljava/lang/Long;

    return-object p0
.end method

.method public zza(Lcom/google/android/datatransport/cct/a/zzaa;)Lcom/google/android/datatransport/cct/a/zzv$zza;
    .locals 0

    .line 6
    iput-object p1, p0, Lcom/google/android/datatransport/cct/a/zzk$zza;->zzg:Lcom/google/android/datatransport/cct/a/zzaa;

    return-object p0
.end method

.method public zza(Lcom/google/android/datatransport/cct/a/zzq;)Lcom/google/android/datatransport/cct/a/zzv$zza;
    .locals 0

    .line 2
    iput-object p1, p0, Lcom/google/android/datatransport/cct/a/zzk$zza;->zzc:Lcom/google/android/datatransport/cct/a/zzq;

    return-object p0
.end method

.method zza(Ljava/lang/String;)Lcom/google/android/datatransport/cct/a/zzv$zza;
    .locals 0

    .line 4
    iput-object p1, p0, Lcom/google/android/datatransport/cct/a/zzk$zza;->zze:Ljava/lang/String;

    return-object p0
.end method

.method public zza(Ljava/util/List;)Lcom/google/android/datatransport/cct/a/zzv$zza;
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lcom/google/android/datatransport/cct/a/zzt;",
            ">;)",
            "Lcom/google/android/datatransport/cct/a/zzv$zza;"
        }
    .end annotation

    .line 5
    iput-object p1, p0, Lcom/google/android/datatransport/cct/a/zzk$zza;->zzf:Ljava/util/List;

    return-object p0
.end method

.method public zza()Lcom/google/android/datatransport/cct/a/zzv;
    .locals 13

    .line 7
    iget-object v0, p0, Lcom/google/android/datatransport/cct/a/zzk$zza;->zza:Ljava/lang/Long;

    if-nez v0, :cond_0

    .line 8
    const-string v0, " requestTimeMs"

    goto :goto_0

    .line 7
    :cond_0
    const-string v0, ""

    .line 9
    :goto_0
    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzk$zza;->zzb:Ljava/lang/Long;

    if-nez v1, :cond_1

    .line 10
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " requestUptimeMs"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    .line 11
    :cond_1
    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzk$zza;->zzd:Ljava/lang/Integer;

    if-nez v1, :cond_2

    .line 12
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " logSource"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    .line 13
    :cond_2
    invoke-virtual {v0}, Ljava/lang/String;->isEmpty()Z

    move-result v1

    if-eqz v1, :cond_3

    .line 14
    new-instance v0, Lcom/google/android/datatransport/cct/a/zzk;

    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzk$zza;->zza:Ljava/lang/Long;

    .line 15
    invoke-virtual {v1}, Ljava/lang/Long;->longValue()J

    move-result-wide v3

    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzk$zza;->zzb:Ljava/lang/Long;

    .line 16
    invoke-virtual {v1}, Ljava/lang/Long;->longValue()J

    move-result-wide v5

    iget-object v7, p0, Lcom/google/android/datatransport/cct/a/zzk$zza;->zzc:Lcom/google/android/datatransport/cct/a/zzq;

    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzk$zza;->zzd:Ljava/lang/Integer;

    .line 17
    invoke-virtual {v1}, Ljava/lang/Integer;->intValue()I

    move-result v8

    iget-object v9, p0, Lcom/google/android/datatransport/cct/a/zzk$zza;->zze:Ljava/lang/String;

    iget-object v10, p0, Lcom/google/android/datatransport/cct/a/zzk$zza;->zzf:Ljava/util/List;

    iget-object v11, p0, Lcom/google/android/datatransport/cct/a/zzk$zza;->zzg:Lcom/google/android/datatransport/cct/a/zzaa;

    const/4 v12, 0x0

    move-object v2, v0

    invoke-direct/range {v2 .. v12}, Lcom/google/android/datatransport/cct/a/zzk;-><init>(JJLcom/google/android/datatransport/cct/a/zzq;ILjava/lang/String;Ljava/util/List;Lcom/google/android/datatransport/cct/a/zzaa;Lcom/google/android/datatransport/cct/a/zzj;)V

    return-object v0

    .line 18
    :cond_3
    new-instance v1, Ljava/lang/IllegalStateException;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Missing required properties:"

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-direct {v1, v0}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw v1
.end method

.method public zzb(J)Lcom/google/android/datatransport/cct/a/zzv$zza;
    .locals 0

    .line 1
    invoke-static {p1, p2}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object p1

    iput-object p1, p0, Lcom/google/android/datatransport/cct/a/zzk$zza;->zzb:Ljava/lang/Long;

    return-object p0
.end method
