.class final Lcom/google/android/gms/internal/firebase_messaging/zzl;
.super Ljava/io/FilterInputStream;
.source "com.google.firebase:firebase-messaging@@20.1.2"


# instance fields
.field private zza:J

.field private zzb:J


# direct methods
.method constructor <init>(Ljava/io/InputStream;J)V
    .locals 0

    .line 1
    invoke-direct {p0, p1}, Ljava/io/FilterInputStream;-><init>(Ljava/io/InputStream;)V

    const-wide/16 p2, -0x1

    .line 2
    iput-wide p2, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->zzb:J

    .line 3
    invoke-static {p1}, Lcom/google/android/gms/internal/firebase_messaging/zzg;->zza(Ljava/lang/Object;)Ljava/lang/Object;

    const-wide/32 p1, 0x100001

    .line 7
    iput-wide p1, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->zza:J

    return-void
.end method


# virtual methods
.method public final available()I
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 9
    iget-object v0, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->in:Ljava/io/InputStream;

    invoke-virtual {v0}, Ljava/io/InputStream;->available()I

    move-result v0

    int-to-long v0, v0

    iget-wide v2, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->zza:J

    invoke-static {v0, v1, v2, v3}, Ljava/lang/Math;->min(JJ)J

    move-result-wide v0

    long-to-int v0, v0

    return v0
.end method

.method public final declared-synchronized mark(I)V
    .locals 2

    monitor-enter p0

    .line 10
    :try_start_0
    iget-object v0, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->in:Ljava/io/InputStream;

    invoke-virtual {v0, p1}, Ljava/io/InputStream;->mark(I)V

    .line 11
    iget-wide v0, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->zza:J

    iput-wide v0, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->zzb:J
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 12
    monitor-exit p0

    return-void

    :catchall_0
    move-exception p1

    :try_start_1
    monitor-exit p0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method public final read()I
    .locals 5
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 13
    iget-wide v0, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->zza:J

    const-wide/16 v2, 0x0

    cmp-long v0, v0, v2

    const/4 v1, -0x1

    if-nez v0, :cond_0

    return v1

    .line 15
    :cond_0
    iget-object v0, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->in:Ljava/io/InputStream;

    invoke-virtual {v0}, Ljava/io/InputStream;->read()I

    move-result v0

    if-eq v0, v1, :cond_1

    .line 17
    iget-wide v1, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->zza:J

    const-wide/16 v3, 0x1

    sub-long/2addr v1, v3

    iput-wide v1, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->zza:J

    :cond_1
    return v0
.end method

.method public final read([BII)I
    .locals 6
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 19
    iget-wide v0, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->zza:J

    const-wide/16 v2, 0x0

    cmp-long v2, v0, v2

    const/4 v3, -0x1

    if-nez v2, :cond_0

    return v3

    :cond_0
    int-to-long v4, p3

    .line 21
    invoke-static {v4, v5, v0, v1}, Ljava/lang/Math;->min(JJ)J

    move-result-wide v0

    long-to-int p3, v0

    .line 22
    iget-object v0, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->in:Ljava/io/InputStream;

    invoke-virtual {v0, p1, p2, p3}, Ljava/io/InputStream;->read([BII)I

    move-result p1

    if-eq p1, v3, :cond_1

    .line 24
    iget-wide p2, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->zza:J

    int-to-long v0, p1

    sub-long/2addr p2, v0

    iput-wide p2, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->zza:J

    :cond_1
    return p1
.end method

.method public final declared-synchronized reset()V
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    monitor-enter p0

    .line 26
    :try_start_0
    iget-object v0, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->in:Ljava/io/InputStream;

    invoke-virtual {v0}, Ljava/io/InputStream;->markSupported()Z

    move-result v0

    if-eqz v0, :cond_1

    .line 28
    iget-wide v0, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->zzb:J

    const-wide/16 v2, -0x1

    cmp-long v0, v0, v2

    if-eqz v0, :cond_0

    .line 30
    iget-object v0, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->in:Ljava/io/InputStream;

    invoke-virtual {v0}, Ljava/io/InputStream;->reset()V

    .line 31
    iget-wide v0, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->zzb:J

    iput-wide v0, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->zza:J
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 32
    monitor-exit p0

    return-void

    .line 29
    :cond_0
    :try_start_1
    new-instance v0, Ljava/io/IOException;

    const-string v1, "Mark not set"

    invoke-direct {v0, v1}, Ljava/io/IOException;-><init>(Ljava/lang/String;)V

    throw v0

    .line 27
    :cond_1
    new-instance v0, Ljava/io/IOException;

    const-string v1, "Mark not supported"

    invoke-direct {v0, v1}, Ljava/io/IOException;-><init>(Ljava/lang/String;)V

    throw v0

    :catchall_0
    move-exception v0

    monitor-exit p0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw v0
.end method

.method public final skip(J)J
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 33
    iget-wide v0, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->zza:J

    invoke-static {p1, p2, v0, v1}, Ljava/lang/Math;->min(JJ)J

    move-result-wide p1

    .line 34
    iget-object v0, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->in:Ljava/io/InputStream;

    invoke-virtual {v0, p1, p2}, Ljava/io/InputStream;->skip(J)J

    move-result-wide p1

    .line 35
    iget-wide v0, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->zza:J

    sub-long/2addr v0, p1

    iput-wide v0, p0, Lcom/google/android/gms/internal/firebase_messaging/zzl;->zza:J

    return-wide p1
.end method
