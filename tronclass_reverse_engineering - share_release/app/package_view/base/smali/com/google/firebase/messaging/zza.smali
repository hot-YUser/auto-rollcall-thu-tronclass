.class public final Lcom/google/firebase/messaging/zza;
.super Ljava/lang/Object;
.source "com.google.firebase:firebase-messaging@@20.1.2"


# instance fields
.field public final zza:Landroidx/core/app/NotificationCompat$Builder;

.field public final zzb:Ljava/lang/String;

.field public final zzc:I


# direct methods
.method constructor <init>(Landroidx/core/app/NotificationCompat$Builder;Ljava/lang/String;I)V
    .locals 0

    .line 1
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 2
    iput-object p1, p0, Lcom/google/firebase/messaging/zza;->zza:Landroidx/core/app/NotificationCompat$Builder;

    .line 3
    iput-object p2, p0, Lcom/google/firebase/messaging/zza;->zzb:Ljava/lang/String;

    const/4 p1, 0x0

    .line 4
    iput p1, p0, Lcom/google/firebase/messaging/zza;->zzc:I

    return-void
.end method
