.class final Lcom/google/android/datatransport/cct/zzc$zza;
.super Ljava/lang/Object;
.source "com.google.android.datatransport:transport-backend-cct@@2.2.0"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/google/android/datatransport/cct/zzc;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x18
    name = "zza"
.end annotation


# instance fields
.field final zza:Ljava/net/URL;

.field final zzb:Lcom/google/android/datatransport/cct/a/zzo;

.field final zzc:Ljava/lang/String;


# direct methods
.method constructor <init>(Ljava/net/URL;Lcom/google/android/datatransport/cct/a/zzo;Ljava/lang/String;)V
    .locals 0

    .line 1
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 2
    iput-object p1, p0, Lcom/google/android/datatransport/cct/zzc$zza;->zza:Ljava/net/URL;

    .line 3
    iput-object p2, p0, Lcom/google/android/datatransport/cct/zzc$zza;->zzb:Lcom/google/android/datatransport/cct/a/zzo;

    .line 4
    iput-object p3, p0, Lcom/google/android/datatransport/cct/zzc$zza;->zzc:Ljava/lang/String;

    return-void
.end method


# virtual methods
.method zza(Ljava/net/URL;)Lcom/google/android/datatransport/cct/zzc$zza;
    .locals 3

    .line 1
    new-instance v0, Lcom/google/android/datatransport/cct/zzc$zza;

    iget-object v1, p0, Lcom/google/android/datatransport/cct/zzc$zza;->zzb:Lcom/google/android/datatransport/cct/a/zzo;

    iget-object v2, p0, Lcom/google/android/datatransport/cct/zzc$zza;->zzc:Ljava/lang/String;

    invoke-direct {v0, p1, v1, v2}, Lcom/google/android/datatransport/cct/zzc$zza;-><init>(Ljava/net/URL;Lcom/google/android/datatransport/cct/a/zzo;Ljava/lang/String;)V

    return-object v0
.end method
