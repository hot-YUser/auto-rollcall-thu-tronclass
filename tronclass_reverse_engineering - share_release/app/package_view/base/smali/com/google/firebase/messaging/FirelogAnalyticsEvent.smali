.class final Lcom/google/firebase/messaging/FirelogAnalyticsEvent;
.super Ljava/lang/Object;
.source "com.google.firebase:firebase-messaging@@20.1.2"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/google/firebase/messaging/FirelogAnalyticsEvent$zzb;,
        Lcom/google/firebase/messaging/FirelogAnalyticsEvent$zzc;,
        Lcom/google/firebase/messaging/FirelogAnalyticsEvent$zza;
    }
.end annotation


# instance fields
.field private final zza:Ljava/lang/String;

.field private final zzb:Landroid/content/Intent;


# direct methods
.method constructor <init>(Ljava/lang/String;Landroid/content/Intent;)V
    .locals 1

    .line 1
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 2
    const-string v0, "evenType must be non-null"

    invoke-static {p1, v0}, Lcom/google/android/gms/common/internal/Preconditions;->checkNotEmpty(Ljava/lang/String;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object p1

    iput-object p1, p0, Lcom/google/firebase/messaging/FirelogAnalyticsEvent;->zza:Ljava/lang/String;

    .line 3
    const-string p1, "intent must be non-null"

    invoke-static {p2, p1}, Lcom/google/android/gms/common/internal/Preconditions;->checkNotNull(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroid/content/Intent;

    iput-object p1, p0, Lcom/google/firebase/messaging/FirelogAnalyticsEvent;->zzb:Landroid/content/Intent;

    return-void
.end method


# virtual methods
.method final zza()Landroid/content/Intent;
    .locals 1

    .line 5
    iget-object v0, p0, Lcom/google/firebase/messaging/FirelogAnalyticsEvent;->zzb:Landroid/content/Intent;

    return-object v0
.end method

.method final zzb()Ljava/lang/String;
    .locals 1

    .line 6
    iget-object v0, p0, Lcom/google/firebase/messaging/FirelogAnalyticsEvent;->zza:Ljava/lang/String;

    return-object v0
.end method
