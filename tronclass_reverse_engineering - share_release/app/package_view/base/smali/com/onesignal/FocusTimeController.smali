.class Lcom/onesignal/FocusTimeController;
.super Ljava/lang/Object;
.source "FocusTimeController.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;,
        Lcom/onesignal/FocusTimeController$FocusTimeProcessorAttributed;,
        Lcom/onesignal/FocusTimeController$FocusTimeProcessorUnattributed;,
        Lcom/onesignal/FocusTimeController$FocusEventType;
    }
.end annotation


# instance fields
.field private logger:Lcom/onesignal/OSLogger;

.field private processorFactory:Lcom/onesignal/OSFocusTimeProcessorFactory;

.field private timeFocusedAtMs:Ljava/lang/Long;

.field private timeFocusedAtMsLock:Ljava/lang/Object;


# direct methods
.method constructor <init>(Lcom/onesignal/OSFocusTimeProcessorFactory;Lcom/onesignal/OSLogger;)V
    .locals 1

    .line 41
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 31
    new-instance v0, Ljava/lang/Object;

    invoke-direct {v0}, Ljava/lang/Object;-><init>()V

    iput-object v0, p0, Lcom/onesignal/FocusTimeController;->timeFocusedAtMsLock:Ljava/lang/Object;

    .line 42
    iput-object p1, p0, Lcom/onesignal/FocusTimeController;->processorFactory:Lcom/onesignal/OSFocusTimeProcessorFactory;

    .line 43
    iput-object p2, p0, Lcom/onesignal/FocusTimeController;->logger:Lcom/onesignal/OSLogger;

    return-void
.end method

.method private getTimeFocusedElapsed()Ljava/lang/Long;
    .locals 7

    .line 102
    iget-object v0, p0, Lcom/onesignal/FocusTimeController;->timeFocusedAtMsLock:Ljava/lang/Object;

    monitor-enter v0

    .line 104
    :try_start_0
    iget-object v1, p0, Lcom/onesignal/FocusTimeController;->timeFocusedAtMs:Ljava/lang/Long;

    const/4 v2, 0x0

    if-nez v1, :cond_0

    .line 105
    monitor-exit v0

    return-object v2

    .line 107
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getTime()Lcom/onesignal/OSTime;

    move-result-object v1

    invoke-interface {v1}, Lcom/onesignal/OSTime;->getElapsedRealtime()J

    move-result-wide v3

    iget-object v1, p0, Lcom/onesignal/FocusTimeController;->timeFocusedAtMs:Ljava/lang/Long;

    invoke-virtual {v1}, Ljava/lang/Long;->longValue()J

    move-result-wide v5

    sub-long/2addr v3, v5

    long-to-double v3, v3

    const-wide v5, 0x408f400000000000L    # 1000.0

    div-double/2addr v3, v5

    const-wide/high16 v5, 0x3fe0000000000000L    # 0.5

    add-double/2addr v3, v5

    double-to-long v3, v3

    const-wide/16 v5, 0x1

    cmp-long v1, v3, v5

    if-ltz v1, :cond_2

    const-wide/32 v5, 0x15180

    cmp-long v1, v3, v5

    if-lez v1, :cond_1

    goto :goto_0

    .line 113
    :cond_1
    invoke-static {v3, v4}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object v1

    monitor-exit v0

    return-object v1

    .line 112
    :cond_2
    :goto_0
    monitor-exit v0

    return-object v2

    :catchall_0
    move-exception v1

    .line 114
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method private giveProcessorsValidFocusTime(Ljava/util/List;Lcom/onesignal/FocusTimeController$FocusEventType;)Z
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lcom/onesignal/influence/domain/OSInfluence;",
            ">;",
            "Lcom/onesignal/FocusTimeController$FocusEventType;",
            ")Z"
        }
    .end annotation

    .line 91
    invoke-direct {p0}, Lcom/onesignal/FocusTimeController;->getTimeFocusedElapsed()Ljava/lang/Long;

    move-result-object v0

    if-nez v0, :cond_0

    const/4 p1, 0x0

    return p1

    .line 95
    :cond_0
    iget-object v1, p0, Lcom/onesignal/FocusTimeController;->processorFactory:Lcom/onesignal/OSFocusTimeProcessorFactory;

    invoke-virtual {v1, p1}, Lcom/onesignal/OSFocusTimeProcessorFactory;->getTimeProcessorWithInfluences(Ljava/util/List;)Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;

    move-result-object v1

    invoke-virtual {v0}, Ljava/lang/Long;->longValue()J

    move-result-wide v2

    invoke-static {v1, v2, v3, p1, p2}, Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;->access$400(Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;JLjava/util/List;Lcom/onesignal/FocusTimeController$FocusEventType;)V

    const/4 p1, 0x1

    return p1
.end method


# virtual methods
.method appBackgrounded()V
    .locals 4

    const-string v0, "Application backgrounded focus time: "

    .line 67
    iget-object v1, p0, Lcom/onesignal/FocusTimeController;->timeFocusedAtMsLock:Ljava/lang/Object;

    monitor-enter v1

    .line 68
    :try_start_0
    iget-object v2, p0, Lcom/onesignal/FocusTimeController;->logger:Lcom/onesignal/OSLogger;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v0, p0, Lcom/onesignal/FocusTimeController;->timeFocusedAtMs:Ljava/lang/Long;

    invoke-virtual {v3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-interface {v2, v0}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 69
    iget-object v0, p0, Lcom/onesignal/FocusTimeController;->processorFactory:Lcom/onesignal/OSFocusTimeProcessorFactory;

    invoke-virtual {v0}, Lcom/onesignal/OSFocusTimeProcessorFactory;->getTimeProcessorSaved()Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;

    move-result-object v0

    invoke-static {v0}, Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;->access$100(Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;)V

    const/4 v0, 0x0

    .line 70
    iput-object v0, p0, Lcom/onesignal/FocusTimeController;->timeFocusedAtMs:Ljava/lang/Long;

    .line 71
    monitor-exit v1

    return-void

    :catchall_0
    move-exception v0

    monitor-exit v1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v0
.end method

.method appForegrounded()V
    .locals 4

    const-string v0, "Application foregrounded focus time: "

    .line 47
    iget-object v1, p0, Lcom/onesignal/FocusTimeController;->timeFocusedAtMsLock:Ljava/lang/Object;

    monitor-enter v1

    .line 48
    :try_start_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getTime()Lcom/onesignal/OSTime;

    move-result-object v2

    invoke-interface {v2}, Lcom/onesignal/OSTime;->getElapsedRealtime()J

    move-result-wide v2

    invoke-static {v2, v3}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object v2

    iput-object v2, p0, Lcom/onesignal/FocusTimeController;->timeFocusedAtMs:Ljava/lang/Long;

    .line 49
    iget-object v2, p0, Lcom/onesignal/FocusTimeController;->logger:Lcom/onesignal/OSLogger;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v0, p0, Lcom/onesignal/FocusTimeController;->timeFocusedAtMs:Ljava/lang/Long;

    invoke-virtual {v3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-interface {v2, v0}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 50
    monitor-exit v1

    return-void

    :catchall_0
    move-exception v0

    monitor-exit v1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v0
.end method

.method appStopped()V
    .locals 5

    const-string v0, "Application stopped focus time: "

    .line 54
    invoke-direct {p0}, Lcom/onesignal/FocusTimeController;->getTimeFocusedElapsed()Ljava/lang/Long;

    move-result-object v1

    .line 55
    iget-object v2, p0, Lcom/onesignal/FocusTimeController;->timeFocusedAtMsLock:Ljava/lang/Object;

    monitor-enter v2

    .line 56
    :try_start_0
    iget-object v3, p0, Lcom/onesignal/FocusTimeController;->logger:Lcom/onesignal/OSLogger;

    new-instance v4, Ljava/lang/StringBuilder;

    invoke-direct {v4, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v0, p0, Lcom/onesignal/FocusTimeController;->timeFocusedAtMs:Ljava/lang/Long;

    invoke-virtual {v4, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v4, " timeElapsed: "

    invoke-virtual {v0, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-interface {v3, v0}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 57
    monitor-exit v2
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    if-nez v1, :cond_0

    return-void

    .line 62
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getSessionManager()Lcom/onesignal/OSSessionManager;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSSessionManager;->getSessionInfluences()Ljava/util/List;

    move-result-object v0

    .line 63
    iget-object v2, p0, Lcom/onesignal/FocusTimeController;->processorFactory:Lcom/onesignal/OSFocusTimeProcessorFactory;

    invoke-virtual {v2, v0}, Lcom/onesignal/OSFocusTimeProcessorFactory;->getTimeProcessorWithInfluences(Ljava/util/List;)Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;

    move-result-object v2

    invoke-virtual {v1}, Ljava/lang/Long;->longValue()J

    move-result-wide v3

    invoke-static {v2, v3, v4, v0}, Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;->access$000(Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;JLjava/util/List;)V

    return-void

    :catchall_0
    move-exception v0

    .line 57
    :try_start_1
    monitor-exit v2
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw v0
.end method

.method doBlockingBackgroundSyncOfUnsentTime()V
    .locals 1

    .line 75
    invoke-static {}, Lcom/onesignal/OneSignal;->isInForeground()Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 78
    :cond_0
    iget-object v0, p0, Lcom/onesignal/FocusTimeController;->processorFactory:Lcom/onesignal/OSFocusTimeProcessorFactory;

    invoke-virtual {v0}, Lcom/onesignal/OSFocusTimeProcessorFactory;->getTimeProcessorSaved()Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;

    move-result-object v0

    invoke-static {v0}, Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;->access$200(Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;)V

    return-void
.end method

.method onSessionEnded(Ljava/util/List;)V
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lcom/onesignal/influence/domain/OSInfluence;",
            ">;)V"
        }
    .end annotation

    .line 82
    sget-object v0, Lcom/onesignal/FocusTimeController$FocusEventType;->END_SESSION:Lcom/onesignal/FocusTimeController$FocusEventType;

    .line 83
    invoke-direct {p0, p1, v0}, Lcom/onesignal/FocusTimeController;->giveProcessorsValidFocusTime(Ljava/util/List;Lcom/onesignal/FocusTimeController$FocusEventType;)Z

    move-result v1

    if-nez v1, :cond_0

    .line 87
    iget-object v1, p0, Lcom/onesignal/FocusTimeController;->processorFactory:Lcom/onesignal/OSFocusTimeProcessorFactory;

    invoke-virtual {v1, p1}, Lcom/onesignal/OSFocusTimeProcessorFactory;->getTimeProcessorWithInfluences(Ljava/util/List;)Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;

    move-result-object p1

    invoke-static {p1, v0}, Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;->access$300(Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;Lcom/onesignal/FocusTimeController$FocusEventType;)V

    :cond_0
    return-void
.end method
