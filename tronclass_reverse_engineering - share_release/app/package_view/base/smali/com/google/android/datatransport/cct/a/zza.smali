.class public abstract Lcom/google/android/datatransport/cct/a/zza;
.super Ljava/lang/Object;
.source "com.google.android.datatransport:transport-backend-cct@@2.2.0"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/google/android/datatransport/cct/a/zza$zza;
    }
.end annotation


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 1
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static zza()Lcom/google/android/datatransport/cct/a/zza$zza;
    .locals 2

    .line 1
    new-instance v0, Lcom/google/android/datatransport/cct/a/zzd$zza;

    invoke-direct {v0}, Lcom/google/android/datatransport/cct/a/zzd$zza;-><init>()V

    const/high16 v1, -0x80000000

    invoke-virtual {v0, v1}, Lcom/google/android/datatransport/cct/a/zzd$zza;->zza(I)Lcom/google/android/datatransport/cct/a/zza$zza;

    move-result-object v0

    return-object v0
.end method
