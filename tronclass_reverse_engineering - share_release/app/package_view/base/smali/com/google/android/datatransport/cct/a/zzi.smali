.class final Lcom/google/android/datatransport/cct/a/zzi;
.super Lcom/google/android/datatransport/cct/a/zzt;
.source "com.google.android.datatransport:transport-backend-cct@@2.2.0"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/google/android/datatransport/cct/a/zzi$zza;
    }
.end annotation


# instance fields
.field private final zza:J

.field private final zzb:I

.field private final zzc:J

.field private final zzd:[B

.field private final zze:Ljava/lang/String;

.field private final zzf:J

.field private final zzg:Lcom/google/android/datatransport/cct/a/zzy;


# direct methods
.method synthetic constructor <init>(JIJ[BLjava/lang/String;JLcom/google/android/datatransport/cct/a/zzy;Lcom/google/android/datatransport/cct/a/zzh;)V
    .locals 0

    .line 1
    invoke-direct {p0}, Lcom/google/android/datatransport/cct/a/zzt;-><init>()V

    .line 2
    iput-wide p1, p0, Lcom/google/android/datatransport/cct/a/zzi;->zza:J

    .line 3
    iput p3, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzb:I

    .line 4
    iput-wide p4, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzc:J

    .line 5
    iput-object p6, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzd:[B

    .line 6
    iput-object p7, p0, Lcom/google/android/datatransport/cct/a/zzi;->zze:Ljava/lang/String;

    .line 7
    iput-wide p8, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzf:J

    .line 8
    iput-object p10, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzg:Lcom/google/android/datatransport/cct/a/zzy;

    return-void
.end method


# virtual methods
.method public equals(Ljava/lang/Object;)Z
    .locals 8

    const/4 v0, 0x1

    if-ne p1, p0, :cond_0

    return v0

    .line 1
    :cond_0
    instance-of v1, p1, Lcom/google/android/datatransport/cct/a/zzt;

    const/4 v2, 0x0

    if-eqz v1, :cond_5

    .line 2
    check-cast p1, Lcom/google/android/datatransport/cct/a/zzt;

    .line 3
    iget-wide v3, p0, Lcom/google/android/datatransport/cct/a/zzi;->zza:J

    invoke-virtual {p1}, Lcom/google/android/datatransport/cct/a/zzt;->zza()J

    move-result-wide v5

    cmp-long v1, v3, v5

    if-nez v1, :cond_4

    iget v1, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzb:I

    .line 4
    move-object v3, p1

    check-cast v3, Lcom/google/android/datatransport/cct/a/zzi;

    .line 5
    iget v4, v3, Lcom/google/android/datatransport/cct/a/zzi;->zzb:I

    if-ne v1, v4, :cond_4

    .line 6
    iget-wide v4, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzc:J

    .line 7
    invoke-virtual {p1}, Lcom/google/android/datatransport/cct/a/zzt;->zzb()J

    move-result-wide v6

    cmp-long v1, v4, v6

    if-nez v1, :cond_4

    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzd:[B

    .line 8
    instance-of v4, p1, Lcom/google/android/datatransport/cct/a/zzi;

    if-eqz v4, :cond_1

    iget-object v4, v3, Lcom/google/android/datatransport/cct/a/zzi;->zzd:[B

    goto :goto_0

    .line 9
    :cond_1
    iget-object v4, v3, Lcom/google/android/datatransport/cct/a/zzi;->zzd:[B

    .line 10
    :goto_0
    invoke-static {v1, v4}, Ljava/util/Arrays;->equals([B[B)Z

    move-result v1

    if-eqz v1, :cond_4

    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzi;->zze:Ljava/lang/String;

    if-nez v1, :cond_2

    .line 11
    iget-object v1, v3, Lcom/google/android/datatransport/cct/a/zzi;->zze:Ljava/lang/String;

    if-nez v1, :cond_4

    goto :goto_1

    .line 12
    :cond_2
    iget-object v4, v3, Lcom/google/android/datatransport/cct/a/zzi;->zze:Ljava/lang/String;

    .line 13
    invoke-virtual {v1, v4}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_4

    :goto_1
    iget-wide v4, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzf:J

    .line 14
    invoke-virtual {p1}, Lcom/google/android/datatransport/cct/a/zzt;->zzc()J

    move-result-wide v6

    cmp-long p1, v4, v6

    if-nez p1, :cond_4

    iget-object p1, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzg:Lcom/google/android/datatransport/cct/a/zzy;

    if-nez p1, :cond_3

    .line 15
    iget-object p1, v3, Lcom/google/android/datatransport/cct/a/zzi;->zzg:Lcom/google/android/datatransport/cct/a/zzy;

    if-nez p1, :cond_4

    goto :goto_2

    .line 16
    :cond_3
    iget-object v1, v3, Lcom/google/android/datatransport/cct/a/zzi;->zzg:Lcom/google/android/datatransport/cct/a/zzy;

    .line 17
    invoke-virtual {p1, v1}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_4

    goto :goto_2

    :cond_4
    move v0, v2

    :goto_2
    return v0

    :cond_5
    return v2
.end method

.method public hashCode()I
    .locals 7

    .line 1
    iget-wide v0, p0, Lcom/google/android/datatransport/cct/a/zzi;->zza:J

    const/16 v2, 0x20

    ushr-long v3, v0, v2

    xor-long/2addr v0, v3

    long-to-int v0, v0

    const v1, 0xf4243

    xor-int/2addr v0, v1

    mul-int/2addr v0, v1

    .line 2
    iget v3, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzb:I

    xor-int/2addr v0, v3

    mul-int/2addr v0, v1

    .line 3
    iget-wide v3, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzc:J

    ushr-long v5, v3, v2

    xor-long/2addr v3, v5

    long-to-int v3, v3

    xor-int/2addr v0, v3

    mul-int/2addr v0, v1

    .line 4
    iget-object v3, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzd:[B

    invoke-static {v3}, Ljava/util/Arrays;->hashCode([B)I

    move-result v3

    xor-int/2addr v0, v3

    mul-int/2addr v0, v1

    .line 5
    iget-object v3, p0, Lcom/google/android/datatransport/cct/a/zzi;->zze:Ljava/lang/String;

    const/4 v4, 0x0

    if-nez v3, :cond_0

    move v3, v4

    goto :goto_0

    :cond_0
    invoke-virtual {v3}, Ljava/lang/String;->hashCode()I

    move-result v3

    :goto_0
    xor-int/2addr v0, v3

    mul-int/2addr v0, v1

    .line 6
    iget-wide v5, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzf:J

    ushr-long v2, v5, v2

    xor-long/2addr v2, v5

    long-to-int v2, v2

    xor-int/2addr v0, v2

    mul-int/2addr v0, v1

    .line 7
    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzg:Lcom/google/android/datatransport/cct/a/zzy;

    if-nez v1, :cond_1

    goto :goto_1

    :cond_1
    invoke-virtual {v1}, Ljava/lang/Object;->hashCode()I

    move-result v4

    :goto_1
    xor-int/2addr v0, v4

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 3

    .line 1
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "LogEvent{eventTimeMs="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-wide v1, p0, Lcom/google/android/datatransport/cct/a/zzi;->zza:J

    invoke-virtual {v0, v1, v2}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", eventCode="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget v1, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzb:I

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", eventUptimeMs="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-wide v1, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzc:J

    invoke-virtual {v0, v1, v2}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", sourceExtension="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzd:[B

    .line 2
    invoke-static {v1}, Ljava/util/Arrays;->toString([B)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", sourceExtensionJsonProto3="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzi;->zze:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", timezoneOffsetSeconds="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-wide v1, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzf:J

    invoke-virtual {v0, v1, v2}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", networkConnectionInfo="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzg:Lcom/google/android/datatransport/cct/a/zzy;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "}"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public zza()J
    .locals 2

    .line 1
    iget-wide v0, p0, Lcom/google/android/datatransport/cct/a/zzi;->zza:J

    return-wide v0
.end method

.method public zzb()J
    .locals 2

    .line 1
    iget-wide v0, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzc:J

    return-wide v0
.end method

.method public zzc()J
    .locals 2

    .line 1
    iget-wide v0, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzf:J

    return-wide v0
.end method

.method public zzd()I
    .locals 1

    .line 1
    iget v0, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzb:I

    return v0
.end method

.method public zze()Lcom/google/android/datatransport/cct/a/zzy;
    .locals 1

    .line 1
    iget-object v0, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzg:Lcom/google/android/datatransport/cct/a/zzy;

    return-object v0
.end method

.method public zzf()[B
    .locals 1

    .line 1
    iget-object v0, p0, Lcom/google/android/datatransport/cct/a/zzi;->zzd:[B

    return-object v0
.end method

.method public zzg()Ljava/lang/String;
    .locals 1

    .line 1
    iget-object v0, p0, Lcom/google/android/datatransport/cct/a/zzi;->zze:Ljava/lang/String;

    return-object v0
.end method
