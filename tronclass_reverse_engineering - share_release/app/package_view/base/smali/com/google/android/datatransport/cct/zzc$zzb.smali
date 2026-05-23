.class final Lcom/google/android/datatransport/cct/zzc$zzb;
.super Ljava/lang/Object;
.source "com.google.android.datatransport:transport-backend-cct@@2.2.0"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/google/android/datatransport/cct/zzc;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x18
    name = "zzb"
.end annotation


# instance fields
.field final zza:I

.field final zzb:Ljava/net/URL;

.field final zzc:J


# direct methods
.method constructor <init>(ILjava/net/URL;J)V
    .locals 0

    .line 1
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 2
    iput p1, p0, Lcom/google/android/datatransport/cct/zzc$zzb;->zza:I

    .line 3
    iput-object p2, p0, Lcom/google/android/datatransport/cct/zzc$zzb;->zzb:Ljava/net/URL;

    .line 4
    iput-wide p3, p0, Lcom/google/android/datatransport/cct/zzc$zzb;->zzc:J

    return-void
.end method
