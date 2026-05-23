.class final Lcom/google/firebase/messaging/FirelogAnalyticsEvent$zza;
.super Ljava/lang/Object;
.source "com.google.firebase:firebase-messaging@@20.1.2"

# interfaces
.implements Lcom/google/firebase/encoders/ObjectEncoder;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/google/firebase/messaging/FirelogAnalyticsEvent;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x8
    name = "zza"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Lcom/google/firebase/encoders/ObjectEncoder<",
        "Lcom/google/firebase/messaging/FirelogAnalyticsEvent;",
        ">;"
    }
.end annotation


# direct methods
.method constructor <init>()V
    .locals 0

    .line 1
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public final synthetic encode(Ljava/lang/Object;Ljava/lang/Object;)V
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/google/firebase/encoders/EncodingException;,
            Ljava/io/IOException;
        }
    .end annotation

    .line 2
    check-cast p1, Lcom/google/firebase/messaging/FirelogAnalyticsEvent;

    check-cast p2, Lcom/google/firebase/encoders/ObjectEncoderContext;

    .line 3
    invoke-virtual {p1}, Lcom/google/firebase/messaging/FirelogAnalyticsEvent;->zza()Landroid/content/Intent;

    move-result-object v0

    .line 4
    const-string v1, "ttl"

    invoke-static {v0}, Lcom/google/firebase/messaging/zzo;->zzf(Landroid/content/Intent;)I

    move-result v2

    invoke-interface {p2, v1, v2}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;I)Lcom/google/firebase/encoders/ObjectEncoderContext;

    .line 5
    const-string v1, "event"

    invoke-virtual {p1}, Lcom/google/firebase/messaging/FirelogAnalyticsEvent;->zzb()Ljava/lang/String;

    move-result-object p1

    invoke-interface {p2, v1, p1}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;Ljava/lang/Object;)Lcom/google/firebase/encoders/ObjectEncoderContext;

    .line 6
    const-string p1, "instanceId"

    invoke-static {}, Lcom/google/firebase/messaging/zzo;->zzc()Ljava/lang/String;

    move-result-object v1

    invoke-interface {p2, p1, v1}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;Ljava/lang/Object;)Lcom/google/firebase/encoders/ObjectEncoderContext;

    .line 7
    const-string p1, "priority"

    invoke-static {v0}, Lcom/google/firebase/messaging/zzo;->zzm(Landroid/content/Intent;)I

    move-result v1

    invoke-interface {p2, p1, v1}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;I)Lcom/google/firebase/encoders/ObjectEncoderContext;

    .line 8
    const-string p1, "packageName"

    invoke-static {}, Lcom/google/firebase/messaging/zzo;->zzb()Ljava/lang/String;

    move-result-object v1

    invoke-interface {p2, p1, v1}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;Ljava/lang/Object;)Lcom/google/firebase/encoders/ObjectEncoderContext;

    .line 9
    const-string p1, "sdkPlatform"

    const-string v1, "ANDROID"

    invoke-interface {p2, p1, v1}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;Ljava/lang/Object;)Lcom/google/firebase/encoders/ObjectEncoderContext;

    .line 10
    const-string p1, "messageType"

    .line 11
    invoke-static {v0}, Lcom/google/firebase/messaging/zzo;->zzk(Landroid/content/Intent;)Ljava/lang/String;

    move-result-object v1

    .line 12
    invoke-interface {p2, p1, v1}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;Ljava/lang/Object;)Lcom/google/firebase/encoders/ObjectEncoderContext;

    .line 13
    invoke-static {v0}, Lcom/google/firebase/messaging/zzo;->zzj(Landroid/content/Intent;)Ljava/lang/String;

    move-result-object p1

    if-eqz p1, :cond_0

    .line 15
    const-string v1, "messageId"

    invoke-interface {p2, v1, p1}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;Ljava/lang/Object;)Lcom/google/firebase/encoders/ObjectEncoderContext;

    .line 16
    :cond_0
    invoke-static {v0}, Lcom/google/firebase/messaging/zzo;->zzl(Landroid/content/Intent;)Ljava/lang/String;

    move-result-object p1

    if-eqz p1, :cond_1

    .line 18
    const-string v1, "topic"

    invoke-interface {p2, v1, p1}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;Ljava/lang/Object;)Lcom/google/firebase/encoders/ObjectEncoderContext;

    .line 19
    :cond_1
    invoke-static {v0}, Lcom/google/firebase/messaging/zzo;->zzg(Landroid/content/Intent;)Ljava/lang/String;

    move-result-object p1

    if-eqz p1, :cond_2

    .line 21
    const-string v1, "collapseKey"

    invoke-interface {p2, v1, p1}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;Ljava/lang/Object;)Lcom/google/firebase/encoders/ObjectEncoderContext;

    .line 22
    :cond_2
    invoke-static {v0}, Lcom/google/firebase/messaging/zzo;->zzi(Landroid/content/Intent;)Ljava/lang/String;

    move-result-object p1

    if-eqz p1, :cond_3

    .line 24
    const-string p1, "analyticsLabel"

    .line 25
    invoke-static {v0}, Lcom/google/firebase/messaging/zzo;->zzi(Landroid/content/Intent;)Ljava/lang/String;

    move-result-object v1

    .line 26
    invoke-interface {p2, p1, v1}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;Ljava/lang/Object;)Lcom/google/firebase/encoders/ObjectEncoderContext;

    .line 27
    :cond_3
    invoke-static {v0}, Lcom/google/firebase/messaging/zzo;->zzh(Landroid/content/Intent;)Ljava/lang/String;

    move-result-object p1

    if-eqz p1, :cond_4

    .line 29
    const-string p1, "composerLabel"

    .line 30
    invoke-static {v0}, Lcom/google/firebase/messaging/zzo;->zzh(Landroid/content/Intent;)Ljava/lang/String;

    move-result-object v0

    .line 31
    invoke-interface {p2, p1, v0}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;Ljava/lang/Object;)Lcom/google/firebase/encoders/ObjectEncoderContext;

    .line 32
    :cond_4
    invoke-static {}, Lcom/google/firebase/messaging/zzo;->zzd()Ljava/lang/String;

    move-result-object p1

    if-eqz p1, :cond_5

    .line 34
    const-string v0, "projectNumber"

    invoke-interface {p2, v0, p1}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;Ljava/lang/Object;)Lcom/google/firebase/encoders/ObjectEncoderContext;

    :cond_5
    return-void
.end method
