.class final synthetic Lcom/google/android/datatransport/cct/zzb;
.super Ljava/lang/Object;
.source "com.google.android.datatransport:transport-backend-cct@@2.2.0"

# interfaces
.implements Lcom/google/android/datatransport/runtime/retries/RetryStrategy;


# static fields
.field private static final zza:Lcom/google/android/datatransport/cct/zzb;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    new-instance v0, Lcom/google/android/datatransport/cct/zzb;

    invoke-direct {v0}, Lcom/google/android/datatransport/cct/zzb;-><init>()V

    sput-object v0, Lcom/google/android/datatransport/cct/zzb;->zza:Lcom/google/android/datatransport/cct/zzb;

    return-void
.end method

.method private constructor <init>()V
    .locals 0

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static zza()Lcom/google/android/datatransport/runtime/retries/RetryStrategy;
    .locals 1

    sget-object v0, Lcom/google/android/datatransport/cct/zzb;->zza:Lcom/google/android/datatransport/cct/zzb;

    return-object v0
.end method


# virtual methods
.method public shouldRetry(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;
    .locals 0

    check-cast p1, Lcom/google/android/datatransport/cct/zzc$zza;

    check-cast p2, Lcom/google/android/datatransport/cct/zzc$zzb;

    invoke-static {p1, p2}, Lcom/google/android/datatransport/cct/zzc;->zza(Lcom/google/android/datatransport/cct/zzc$zza;Lcom/google/android/datatransport/cct/zzc$zzb;)Lcom/google/android/datatransport/cct/zzc$zza;

    move-result-object p1

    return-object p1
.end method
