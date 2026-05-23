.class public Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;
.super Landroid/os/HandlerThread;
.source "OneSignalPrefs.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OneSignalPrefs;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "WritePrefHandlerThread"
.end annotation


# static fields
.field private static final WRITE_CALL_DELAY_TO_BUFFER_MS:I = 0xc8


# instance fields
.field private lastSyncTime:J

.field private mHandler:Landroid/os/Handler;

.field private threadStartCalled:Z


# direct methods
.method constructor <init>(Ljava/lang/String;)V
    .locals 2

    .line 137
    invoke-direct {p0, p1}, Landroid/os/HandlerThread;-><init>(Ljava/lang/String;)V

    const-wide/16 v0, 0x0

    .line 134
    iput-wide v0, p0, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;->lastSyncTime:J

    return-void
.end method

.method static synthetic access$000(Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;)V
    .locals 0

    .line 130
    invoke-direct {p0}, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;->flushBufferToDisk()V

    return-void
.end method

.method static synthetic access$100(Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;)V
    .locals 0

    .line 130
    invoke-direct {p0}, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;->startDelayedWrite()V

    return-void
.end method

.method private flushBufferToDisk()V
    .locals 7

    .line 191
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->prefsToApply:Ljava/util/HashMap;

    invoke-virtual {v0}, Ljava/util/HashMap;->keySet()Ljava/util/Set;

    move-result-object v0

    invoke-interface {v0}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_7

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/String;

    .line 192
    invoke-static {v1}, Lcom/onesignal/OneSignalPrefs;->getSharedPrefsByName(Ljava/lang/String;)Landroid/content/SharedPreferences;

    move-result-object v2

    .line 193
    invoke-interface {v2}, Landroid/content/SharedPreferences;->edit()Landroid/content/SharedPreferences$Editor;

    move-result-object v2

    .line 194
    sget-object v3, Lcom/onesignal/OneSignalPrefs;->prefsToApply:Ljava/util/HashMap;

    invoke-virtual {v3, v1}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/util/HashMap;

    .line 195
    monitor-enter v1

    .line 196
    :try_start_0
    invoke-virtual {v1}, Ljava/util/HashMap;->keySet()Ljava/util/Set;

    move-result-object v3

    invoke-interface {v3}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v3

    :cond_0
    :goto_1
    invoke-interface {v3}, Ljava/util/Iterator;->hasNext()Z

    move-result v4

    if-eqz v4, :cond_6

    invoke-interface {v3}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v4

    check-cast v4, Ljava/lang/String;

    .line 197
    invoke-virtual {v1, v4}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v5

    .line 198
    instance-of v6, v5, Ljava/lang/String;

    if-eqz v6, :cond_1

    .line 199
    check-cast v5, Ljava/lang/String;

    invoke-interface {v2, v4, v5}, Landroid/content/SharedPreferences$Editor;->putString(Ljava/lang/String;Ljava/lang/String;)Landroid/content/SharedPreferences$Editor;

    goto :goto_1

    .line 200
    :cond_1
    instance-of v6, v5, Ljava/lang/Boolean;

    if-eqz v6, :cond_2

    .line 201
    check-cast v5, Ljava/lang/Boolean;

    invoke-virtual {v5}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v5

    invoke-interface {v2, v4, v5}, Landroid/content/SharedPreferences$Editor;->putBoolean(Ljava/lang/String;Z)Landroid/content/SharedPreferences$Editor;

    goto :goto_1

    .line 202
    :cond_2
    instance-of v6, v5, Ljava/lang/Integer;

    if-eqz v6, :cond_3

    .line 203
    check-cast v5, Ljava/lang/Integer;

    invoke-virtual {v5}, Ljava/lang/Integer;->intValue()I

    move-result v5

    invoke-interface {v2, v4, v5}, Landroid/content/SharedPreferences$Editor;->putInt(Ljava/lang/String;I)Landroid/content/SharedPreferences$Editor;

    goto :goto_1

    .line 204
    :cond_3
    instance-of v6, v5, Ljava/lang/Long;

    if-eqz v6, :cond_4

    .line 205
    check-cast v5, Ljava/lang/Long;

    invoke-virtual {v5}, Ljava/lang/Long;->longValue()J

    move-result-wide v5

    invoke-interface {v2, v4, v5, v6}, Landroid/content/SharedPreferences$Editor;->putLong(Ljava/lang/String;J)Landroid/content/SharedPreferences$Editor;

    goto :goto_1

    .line 206
    :cond_4
    instance-of v6, v5, Ljava/util/Set;

    if-eqz v6, :cond_5

    .line 207
    check-cast v5, Ljava/util/Set;

    invoke-interface {v2, v4, v5}, Landroid/content/SharedPreferences$Editor;->putStringSet(Ljava/lang/String;Ljava/util/Set;)Landroid/content/SharedPreferences$Editor;

    goto :goto_1

    :cond_5
    if-nez v5, :cond_0

    .line 209
    invoke-interface {v2, v4}, Landroid/content/SharedPreferences$Editor;->remove(Ljava/lang/String;)Landroid/content/SharedPreferences$Editor;

    goto :goto_1

    .line 211
    :cond_6
    invoke-virtual {v1}, Ljava/util/HashMap;->clear()V

    .line 212
    monitor-exit v1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 213
    invoke-interface {v2}, Landroid/content/SharedPreferences$Editor;->apply()V

    goto/16 :goto_0

    :catchall_0
    move-exception v0

    .line 212
    :try_start_1
    monitor-exit v1
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw v0

    .line 216
    :cond_7
    invoke-static {}, Lcom/onesignal/OneSignal;->getTime()Lcom/onesignal/OSTime;

    move-result-object v0

    invoke-interface {v0}, Lcom/onesignal/OSTime;->getCurrentTimeMillis()J

    move-result-wide v0

    iput-wide v0, p0, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;->lastSyncTime:J

    return-void
.end method

.method private declared-synchronized scheduleFlushToDisk()V
    .locals 4

    monitor-enter p0

    .line 172
    :try_start_0
    iget-object v0, p0, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;->mHandler:Landroid/os/Handler;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    if-nez v0, :cond_0

    .line 173
    monitor-exit p0

    return-void

    :cond_0
    const/4 v1, 0x0

    .line 175
    :try_start_1
    invoke-virtual {v0, v1}, Landroid/os/Handler;->removeCallbacksAndMessages(Ljava/lang/Object;)V

    .line 177
    iget-wide v0, p0, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;->lastSyncTime:J

    const-wide/16 v2, 0x0

    cmp-long v0, v0, v2

    if-nez v0, :cond_1

    .line 178
    invoke-static {}, Lcom/onesignal/OneSignal;->getTime()Lcom/onesignal/OSTime;

    move-result-object v0

    invoke-interface {v0}, Lcom/onesignal/OSTime;->getCurrentTimeMillis()J

    move-result-wide v0

    iput-wide v0, p0, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;->lastSyncTime:J

    .line 179
    :cond_1
    iget-wide v0, p0, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;->lastSyncTime:J

    invoke-static {}, Lcom/onesignal/OneSignal;->getTime()Lcom/onesignal/OSTime;

    move-result-object v2

    invoke-interface {v2}, Lcom/onesignal/OSTime;->getCurrentTimeMillis()J

    move-result-wide v2

    sub-long/2addr v0, v2

    const-wide/16 v2, 0xc8

    add-long/2addr v0, v2

    .line 181
    new-instance v2, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread$1;

    invoke-direct {v2, p0}, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread$1;-><init>(Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;)V

    .line 187
    iget-object v3, p0, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;->mHandler:Landroid/os/Handler;

    invoke-virtual {v3, v2, v0, v1}, Landroid/os/Handler;->postDelayed(Ljava/lang/Runnable;J)Z
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 188
    monitor-exit p0

    return-void

    :catchall_0
    move-exception v0

    :try_start_2
    monitor-exit p0
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    throw v0
.end method

.method private declared-synchronized startDelayedWrite()V
    .locals 1

    monitor-enter p0

    .line 154
    :try_start_0
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    if-nez v0, :cond_0

    .line 155
    monitor-exit p0

    return-void

    .line 157
    :cond_0
    :try_start_1
    invoke-direct {p0}, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;->startThread()V

    .line 158
    invoke-direct {p0}, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;->scheduleFlushToDisk()V
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 159
    monitor-exit p0

    return-void

    :catchall_0
    move-exception v0

    :try_start_2
    monitor-exit p0
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    throw v0
.end method

.method private startThread()V
    .locals 1

    .line 163
    iget-boolean v0, p0, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;->threadStartCalled:Z

    if-eqz v0, :cond_0

    return-void

    .line 166
    :cond_0
    invoke-virtual {p0}, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;->start()V

    const/4 v0, 0x1

    .line 167
    iput-boolean v0, p0, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;->threadStartCalled:Z

    return-void
.end method


# virtual methods
.method protected onLooperPrepared()V
    .locals 2

    .line 142
    invoke-super {p0}, Landroid/os/HandlerThread;->onLooperPrepared()V

    .line 145
    new-instance v0, Landroid/os/Handler;

    invoke-virtual {p0}, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;->getLooper()Landroid/os/Looper;

    move-result-object v1

    invoke-direct {v0, v1}, Landroid/os/Handler;-><init>(Landroid/os/Looper;)V

    iput-object v0, p0, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;->mHandler:Landroid/os/Handler;

    .line 148
    invoke-direct {p0}, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;->scheduleFlushToDisk()V

    return-void
.end method
