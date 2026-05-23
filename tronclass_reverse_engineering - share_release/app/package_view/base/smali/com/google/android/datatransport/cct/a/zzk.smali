.class final Lcom/google/android/datatransport/cct/a/zzk;
.super Lcom/google/android/datatransport/cct/a/zzv;
.source "com.google.android.datatransport:transport-backend-cct@@2.2.0"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/google/android/datatransport/cct/a/zzk$zza;
    }
.end annotation


# instance fields
.field private final zza:J

.field private final zzb:J

.field private final zzc:Lcom/google/android/datatransport/cct/a/zzq;

.field private final zzd:I

.field private final zze:Ljava/lang/String;

.field private final zzf:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Lcom/google/android/datatransport/cct/a/zzt;",
            ">;"
        }
    .end annotation
.end field

.field private final zzg:Lcom/google/android/datatransport/cct/a/zzaa;


# direct methods
.method synthetic constructor <init>(JJLcom/google/android/datatransport/cct/a/zzq;ILjava/lang/String;Ljava/util/List;Lcom/google/android/datatransport/cct/a/zzaa;Lcom/google/android/datatransport/cct/a/zzj;)V
    .locals 0

    .line 1
    invoke-direct {p0}, Lcom/google/android/datatransport/cct/a/zzv;-><init>()V

    .line 2
    iput-wide p1, p0, Lcom/google/android/datatransport/cct/a/zzk;->zza:J

    .line 3
    iput-wide p3, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzb:J

    .line 4
    iput-object p5, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzc:Lcom/google/android/datatransport/cct/a/zzq;

    .line 5
    iput p6, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzd:I

    .line 6
    iput-object p7, p0, Lcom/google/android/datatransport/cct/a/zzk;->zze:Ljava/lang/String;

    .line 7
    iput-object p8, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzf:Ljava/util/List;

    .line 8
    iput-object p9, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzg:Lcom/google/android/datatransport/cct/a/zzaa;

    return-void
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 7

    const/4 v0, 0x1

    if-ne p1, p0, :cond_0

    return v0

    .line 1
    :cond_0
    instance-of v1, p1, Lcom/google/android/datatransport/cct/a/zzv;

    const/4 v2, 0x0

    if-eqz v1, :cond_6

    .line 2
    check-cast p1, Lcom/google/android/datatransport/cct/a/zzv;

    .line 3
    iget-wide v3, p0, Lcom/google/android/datatransport/cct/a/zzk;->zza:J

    check-cast p1, Lcom/google/android/datatransport/cct/a/zzk;

    .line 4
    iget-wide v5, p1, Lcom/google/android/datatransport/cct/a/zzk;->zza:J

    cmp-long v1, v3, v5

    if-nez v1, :cond_5

    .line 5
    iget-wide v3, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzb:J

    .line 7
    iget-wide v5, p1, Lcom/google/android/datatransport/cct/a/zzk;->zzb:J

    cmp-long v1, v3, v5

    if-nez v1, :cond_5

    .line 8
    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzc:Lcom/google/android/datatransport/cct/a/zzq;

    if-nez v1, :cond_1

    .line 9
    iget-object v1, p1, Lcom/google/android/datatransport/cct/a/zzk;->zzc:Lcom/google/android/datatransport/cct/a/zzq;

    if-nez v1, :cond_5

    goto :goto_0

    :cond_1
    iget-object v3, p1, Lcom/google/android/datatransport/cct/a/zzk;->zzc:Lcom/google/android/datatransport/cct/a/zzq;

    .line 10
    invoke-virtual {v1, v3}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_5

    :goto_0
    iget v1, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzd:I

    .line 11
    iget v3, p1, Lcom/google/android/datatransport/cct/a/zzk;->zzd:I

    if-ne v1, v3, :cond_5

    .line 12
    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzk;->zze:Ljava/lang/String;

    if-nez v1, :cond_2

    .line 13
    iget-object v1, p1, Lcom/google/android/datatransport/cct/a/zzk;->zze:Ljava/lang/String;

    if-nez v1, :cond_5

    goto :goto_1

    :cond_2
    iget-object v3, p1, Lcom/google/android/datatransport/cct/a/zzk;->zze:Ljava/lang/String;

    .line 14
    invoke-virtual {v1, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_5

    :goto_1
    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzf:Ljava/util/List;

    if-nez v1, :cond_3

    .line 15
    iget-object v1, p1, Lcom/google/android/datatransport/cct/a/zzk;->zzf:Ljava/util/List;

    if-nez v1, :cond_5

    goto :goto_2

    :cond_3
    iget-object v3, p1, Lcom/google/android/datatransport/cct/a/zzk;->zzf:Ljava/util/List;

    .line 16
    invoke-virtual {v1, v3}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_5

    :goto_2
    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzg:Lcom/google/android/datatransport/cct/a/zzaa;

    if-nez v1, :cond_4

    .line 17
    iget-object p1, p1, Lcom/google/android/datatransport/cct/a/zzk;->zzg:Lcom/google/android/datatransport/cct/a/zzaa;

    if-nez p1, :cond_5

    goto :goto_3

    .line 18
    :cond_4
    iget-object p1, p1, Lcom/google/android/datatransport/cct/a/zzk;->zzg:Lcom/google/android/datatransport/cct/a/zzaa;

    .line 19
    invoke-virtual {v1, p1}, Ljava/lang/Enum;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_5

    goto :goto_3

    :cond_5
    move v0, v2

    :goto_3
    return v0

    :cond_6
    return v2
.end method

.method public hashCode()I
    .locals 7

    .line 1
    iget-wide v0, p0, Lcom/google/android/datatransport/cct/a/zzk;->zza:J

    const/16 v2, 0x20

    ushr-long v3, v0, v2

    xor-long/2addr v0, v3

    long-to-int v0, v0

    const v1, 0xf4243

    xor-int/2addr v0, v1

    mul-int/2addr v0, v1

    .line 2
    iget-wide v3, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzb:J

    ushr-long v5, v3, v2

    xor-long v2, v5, v3

    long-to-int v2, v2

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 3
    iget-object v2, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzc:Lcom/google/android/datatransport/cct/a/zzq;

    const/4 v3, 0x0

    if-nez v2, :cond_0

    move v2, v3

    goto :goto_0

    :cond_0
    invoke-virtual {v2}, Ljava/lang/Object;->hashCode()I

    move-result v2

    :goto_0
    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 4
    iget v2, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzd:I

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 5
    iget-object v2, p0, Lcom/google/android/datatransport/cct/a/zzk;->zze:Ljava/lang/String;

    if-nez v2, :cond_1

    move v2, v3

    goto :goto_1

    :cond_1
    invoke-virtual {v2}, Ljava/lang/String;->hashCode()I

    move-result v2

    :goto_1
    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 6
    iget-object v2, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzf:Ljava/util/List;

    if-nez v2, :cond_2

    move v2, v3

    goto :goto_2

    :cond_2
    invoke-virtual {v2}, Ljava/lang/Object;->hashCode()I

    move-result v2

    :goto_2
    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 7
    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzg:Lcom/google/android/datatransport/cct/a/zzaa;

    if-nez v1, :cond_3

    goto :goto_3

    :cond_3
    invoke-virtual {v1}, Ljava/lang/Enum;->hashCode()I

    move-result v3

    :goto_3
    xor-int/2addr v0, v3

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 3

    .line 1
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "LogRequest{requestTimeMs="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-wide v1, p0, Lcom/google/android/datatransport/cct/a/zzk;->zza:J

    invoke-virtual {v0, v1, v2}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", requestUptimeMs="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-wide v1, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzb:J

    invoke-virtual {v0, v1, v2}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", clientInfo="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzc:Lcom/google/android/datatransport/cct/a/zzq;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", logSource="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzd:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", logSourceName="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzk;->zze:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", logEvents="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzf:Ljava/util/List;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", qosTier="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzg:Lcom/google/android/datatransport/cct/a/zzaa;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public zzb()Lcom/google/android/datatransport/cct/a/zzq;
    .locals 1

    .line 1
    iget-object v0, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzc:Lcom/google/android/datatransport/cct/a/zzq;

    return-object v0
.end method

.method public zzc()Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lcom/google/android/datatransport/cct/a/zzt;",
            ">;"
        }
    .end annotation

    .line 1
    iget-object v0, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzf:Ljava/util/List;

    return-object v0
.end method

.method public zzd()I
    .locals 1

    .line 1
    iget v0, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzd:I

    return v0
.end method

.method public zze()Ljava/lang/String;
    .locals 1

    .line 1
    iget-object v0, p0, Lcom/google/android/datatransport/cct/a/zzk;->zze:Ljava/lang/String;

    return-object v0
.end method

.method public zzf()J
    .locals 2

    .line 1
    iget-wide v0, p0, Lcom/google/android/datatransport/cct/a/zzk;->zza:J

    return-wide v0
.end method

.method public zzg()J
    .locals 2

    .line 1
    iget-wide v0, p0, Lcom/google/android/datatransport/cct/a/zzk;->zzb:J

    return-wide v0
.end method
