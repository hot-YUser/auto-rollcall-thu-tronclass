.class final Lcom/google/android/datatransport/cct/a/zzg$zza;
.super Lcom/google/android/datatransport/cct/a/zzq$zza;
.source "com.google.android.datatransport:transport-backend-cct@@2.2.0"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/google/android/datatransport/cct/a/zzg;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x18
    name = "zza"
.end annotation


# instance fields
.field private zza:Lcom/google/android/datatransport/cct/a/zzq$zzb;

.field private zzb:Lcom/google/android/datatransport/cct/a/zza;


# direct methods
.method constructor <init>()V
    .locals 0

    .line 1
    invoke-direct {p0}, Lcom/google/android/datatransport/cct/a/zzq$zza;-><init>()V

    return-void
.end method


# virtual methods
.method public zza(Lcom/google/android/datatransport/cct/a/zza;)Lcom/google/android/datatransport/cct/a/zzq$zza;
    .locals 0

    .line 2
    iput-object p1, p0, Lcom/google/android/datatransport/cct/a/zzg$zza;->zzb:Lcom/google/android/datatransport/cct/a/zza;

    return-object p0
.end method

.method public zza(Lcom/google/android/datatransport/cct/a/zzq$zzb;)Lcom/google/android/datatransport/cct/a/zzq$zza;
    .locals 0

    .line 1
    iput-object p1, p0, Lcom/google/android/datatransport/cct/a/zzg$zza;->zza:Lcom/google/android/datatransport/cct/a/zzq$zzb;

    return-object p0
.end method

.method public zza()Lcom/google/android/datatransport/cct/a/zzq;
    .locals 4

    .line 3
    new-instance v0, Lcom/google/android/datatransport/cct/a/zzg;

    iget-object v1, p0, Lcom/google/android/datatransport/cct/a/zzg$zza;->zza:Lcom/google/android/datatransport/cct/a/zzq$zzb;

    iget-object v2, p0, Lcom/google/android/datatransport/cct/a/zzg$zza;->zzb:Lcom/google/android/datatransport/cct/a/zza;

    const/4 v3, 0x0

    invoke-direct {v0, v1, v2, v3}, Lcom/google/android/datatransport/cct/a/zzg;-><init>(Lcom/google/android/datatransport/cct/a/zzq$zzb;Lcom/google/android/datatransport/cct/a/zza;Lcom/google/android/datatransport/cct/a/zzf;)V

    return-object v0
.end method
