.class final Lcom/google/firebase/messaging/FirelogAnalyticsEvent$zzb;
.super Ljava/lang/Object;
.source "com.google.firebase:firebase-messaging@@20.1.2"

# interfaces
.implements Lcom/google/firebase/encoders/ObjectEncoder;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/google/firebase/messaging/FirelogAnalyticsEvent;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x18
    name = "zzb"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Ljava/lang/Object;",
        "Lcom/google/firebase/encoders/ObjectEncoder<",
        "Lcom/google/firebase/messaging/FirelogAnalyticsEvent$zzc;",
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
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/google/firebase/encoders/EncodingException;,
            Ljava/io/IOException;
        }
    .end annotation

    .line 2
    check-cast p1, Lcom/google/firebase/messaging/FirelogAnalyticsEvent$zzc;

    check-cast p2, Lcom/google/firebase/encoders/ObjectEncoderContext;

    .line 3
    const-string v0, "messaging_client_event"

    .line 4
    invoke-virtual {p1}, Lcom/google/firebase/messaging/FirelogAnalyticsEvent$zzc;->zza()Lcom/google/firebase/messaging/FirelogAnalyticsEvent;

    move-result-object p1

    .line 5
    invoke-interface {p2, v0, p1}, Lcom/google/firebase/encoders/ObjectEncoderContext;->add(Ljava/lang/String;Ljava/lang/Object;)Lcom/google/firebase/encoders/ObjectEncoderContext;

    return-void
.end method
