.class public final Lcom/google/android/datatransport/cct/a/zzu;
.super Ljava/lang/Object;
.source "com.google.android.datatransport:transport-backend-cct@@2.2.0"

# interfaces
.implements Lcom/google/firebase/encoders/ObjectEncoder;


# annotations
.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Lcom/google/firebase/encoders/ObjectEncoder<",
        "Lcom/google/android/datatransport/cct/a/zzi;",
        ">;"
    }
.end annotation


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 1
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public encode(Ljava/lang/Object;Ljava/lang/Object;)V
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/google/firebase/encoders/EncodingException;,
            Ljava/io/IOException;
        }
    .end annotation

    .line 1
    check-cast p1, Lcom/google/android/datatransport/cct/a/zzi;

    check-cast p2, Lcom/google/firebase/encoders/ObjectEncoderContext;

    .line 2
    invoke-virtual {p1}, Lcom/google/android/datatransport/cct/a/zzi;->zza()J

    move-result-wide v0

    const-string v2, "eventTimeMs"

    invoke-interface {p2, v2, v0, v1}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;J)Lcom/google/firebase/encoders/ObjectEncoderContext;

    move-result-object v0

    .line 3
    invoke-virtual {p1}, Lcom/google/android/datatransport/cct/a/zzi;->zzb()J

    move-result-wide v1

    const-string v3, "eventUptimeMs"

    invoke-interface {v0, v3, v1, v2}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;J)Lcom/google/firebase/encoders/ObjectEncoderContext;

    move-result-object v0

    .line 4
    invoke-virtual {p1}, Lcom/google/android/datatransport/cct/a/zzi;->zzc()J

    move-result-wide v1

    const-string v3, "timezoneOffsetSeconds"

    invoke-interface {v0, v3, v1, v2}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;J)Lcom/google/firebase/encoders/ObjectEncoderContext;

    .line 5
    invoke-virtual {p1}, Lcom/google/android/datatransport/cct/a/zzi;->zzf()[B

    move-result-object v0

    if-eqz v0, :cond_0

    .line 6
    invoke-virtual {p1}, Lcom/google/android/datatransport/cct/a/zzi;->zzf()[B

    move-result-object v0

    const-string v1, "sourceExtension"

    invoke-interface {p2, v1, v0}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;Ljava/lang/Object;)Lcom/google/firebase/encoders/ObjectEncoderContext;

    .line 7
    :cond_0
    invoke-virtual {p1}, Lcom/google/android/datatransport/cct/a/zzi;->zzg()Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_1

    .line 8
    invoke-virtual {p1}, Lcom/google/android/datatransport/cct/a/zzi;->zzg()Ljava/lang/String;

    move-result-object v0

    const-string v1, "sourceExtensionJsonProto3"

    invoke-interface {p2, v1, v0}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;Ljava/lang/Object;)Lcom/google/firebase/encoders/ObjectEncoderContext;

    .line 9
    :cond_1
    invoke-virtual {p1}, Lcom/google/android/datatransport/cct/a/zzi;->zzd()I

    move-result v0

    const/high16 v1, -0x80000000

    if-eq v0, v1, :cond_2

    .line 10
    invoke-virtual {p1}, Lcom/google/android/datatransport/cct/a/zzi;->zzd()I

    move-result v0

    const-string v1, "eventCode"

    invoke-interface {p2, v1, v0}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;I)Lcom/google/firebase/encoders/ObjectEncoderContext;

    .line 11
    :cond_2
    invoke-virtual {p1}, Lcom/google/android/datatransport/cct/a/zzi;->zze()Lcom/google/android/datatransport/cct/a/zzy;

    move-result-object v0

    if-eqz v0, :cond_3

    .line 12
    invoke-virtual {p1}, Lcom/google/android/datatransport/cct/a/zzi;->zze()Lcom/google/android/datatransport/cct/a/zzy;

    move-result-object p1

    const-string v0, "networkConnectionInfo"

    invoke-interface {p2, v0, p1}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;Ljava/lang/Object;)Lcom/google/firebase/encoders/ObjectEncoderContext;

    :cond_3
    return-void
.end method
