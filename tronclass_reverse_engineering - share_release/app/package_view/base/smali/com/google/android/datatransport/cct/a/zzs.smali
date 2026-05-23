.class public Lcom/google/android/datatransport/cct/a/zzs;
.super Ljava/lang/Object;
.source "com.google.android.datatransport:transport-backend-cct@@2.2.0"


# direct methods
.method public static zza()Lcom/google/firebase/encoders/DataEncoder;
    .locals 3

    .line 1
    new-instance v0, Lcom/google/firebase/encoders/json/JsonDataEncoderBuilder;

    invoke-direct {v0}, Lcom/google/firebase/encoders/json/JsonDataEncoderBuilder;-><init>()V

    new-instance v1, Lcom/google/android/datatransport/cct/a/zzp;

    invoke-direct {v1}, Lcom/google/android/datatransport/cct/a/zzp;-><init>()V

    .line 2
    const-class v2, Lcom/google/android/datatransport/cct/a/zze;

    invoke-virtual {v0, v2, v1}, Lcom/google/firebase/encoders/json/JsonDataEncoderBuilder;->registerEncoder(Ljava/lang/Class;Lcom/google/firebase/encoders/ObjectEncoder;)Lcom/google/firebase/encoders/json/JsonDataEncoderBuilder;

    move-result-object v0

    new-instance v1, Lcom/google/android/datatransport/cct/a/zzw;

    invoke-direct {v1}, Lcom/google/android/datatransport/cct/a/zzw;-><init>()V

    .line 3
    const-class v2, Lcom/google/android/datatransport/cct/a/zzk;

    invoke-virtual {v0, v2, v1}, Lcom/google/firebase/encoders/json/JsonDataEncoderBuilder;->registerEncoder(Ljava/lang/Class;Lcom/google/firebase/encoders/ObjectEncoder;)Lcom/google/firebase/encoders/json/JsonDataEncoderBuilder;

    move-result-object v0

    new-instance v1, Lcom/google/android/datatransport/cct/a/zzr;

    invoke-direct {v1}, Lcom/google/android/datatransport/cct/a/zzr;-><init>()V

    .line 4
    const-class v2, Lcom/google/android/datatransport/cct/a/zzg;

    invoke-virtual {v0, v2, v1}, Lcom/google/firebase/encoders/json/JsonDataEncoderBuilder;->registerEncoder(Ljava/lang/Class;Lcom/google/firebase/encoders/ObjectEncoder;)Lcom/google/firebase/encoders/json/JsonDataEncoderBuilder;

    move-result-object v0

    new-instance v1, Lcom/google/android/datatransport/cct/a/zzu;

    invoke-direct {v1}, Lcom/google/android/datatransport/cct/a/zzu;-><init>()V

    .line 5
    const-class v2, Lcom/google/android/datatransport/cct/a/zzi;

    invoke-virtual {v0, v2, v1}, Lcom/google/firebase/encoders/json/JsonDataEncoderBuilder;->registerEncoder(Ljava/lang/Class;Lcom/google/firebase/encoders/ObjectEncoder;)Lcom/google/firebase/encoders/json/JsonDataEncoderBuilder;

    move-result-object v0

    new-instance v1, Lcom/google/android/datatransport/cct/a/zzb;

    invoke-direct {v1}, Lcom/google/android/datatransport/cct/a/zzb;-><init>()V

    .line 6
    const-class v2, Lcom/google/android/datatransport/cct/a/zzd;

    invoke-virtual {v0, v2, v1}, Lcom/google/firebase/encoders/json/JsonDataEncoderBuilder;->registerEncoder(Ljava/lang/Class;Lcom/google/firebase/encoders/ObjectEncoder;)Lcom/google/firebase/encoders/json/JsonDataEncoderBuilder;

    move-result-object v0

    new-instance v1, Lcom/google/android/datatransport/cct/a/zzz;

    invoke-direct {v1}, Lcom/google/android/datatransport/cct/a/zzz;-><init>()V

    .line 7
    const-class v2, Lcom/google/android/datatransport/cct/a/zzn;

    invoke-virtual {v0, v2, v1}, Lcom/google/firebase/encoders/json/JsonDataEncoderBuilder;->registerEncoder(Ljava/lang/Class;Lcom/google/firebase/encoders/ObjectEncoder;)Lcom/google/firebase/encoders/json/JsonDataEncoderBuilder;

    move-result-object v0

    .line 8
    invoke-virtual {v0}, Lcom/google/firebase/encoders/json/JsonDataEncoderBuilder;->build()Lcom/google/firebase/encoders/DataEncoder;

    move-result-object v0

    return-object v0
.end method
