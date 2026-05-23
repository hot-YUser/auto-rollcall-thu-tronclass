.class Lcom/onesignal/OSOutcomeEventsController;
.super Ljava/lang/Object;
.source "OSOutcomeEventsController.java"


# static fields
.field private static final OS_DELETE_CACHED_UNIQUE_OUTCOMES_NOTIFICATIONS_THREAD:Ljava/lang/String; = "OS_DELETE_CACHED_UNIQUE_OUTCOMES_NOTIFICATIONS_THREAD"

.field private static final OS_SAVE_OUTCOMES:Ljava/lang/String; = "OS_SAVE_OUTCOMES"

.field private static final OS_SAVE_UNIQUE_OUTCOME_NOTIFICATIONS:Ljava/lang/String; = "OS_SAVE_UNIQUE_OUTCOME_NOTIFICATIONS"

.field private static final OS_SEND_SAVED_OUTCOMES:Ljava/lang/String; = "OS_SEND_SAVED_OUTCOMES"


# instance fields
.field private final osSessionManager:Lcom/onesignal/OSSessionManager;

.field private final outcomeEventsFactory:Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

.field private unattributedUniqueOutcomeEventsSentOnSession:Ljava/util/Set;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method public constructor <init>(Lcom/onesignal/OSSessionManager;Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;)V
    .locals 0

    .line 35
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 36
    iput-object p1, p0, Lcom/onesignal/OSOutcomeEventsController;->osSessionManager:Lcom/onesignal/OSSessionManager;

    .line 37
    iput-object p2, p0, Lcom/onesignal/OSOutcomeEventsController;->outcomeEventsFactory:Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

    .line 39
    invoke-direct {p0}, Lcom/onesignal/OSOutcomeEventsController;->initUniqueOutcomeEventsSentSets()V

    return-void
.end method

.method static synthetic access$000(Lcom/onesignal/OSOutcomeEventsController;)Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;
    .locals 0

    .line 19
    iget-object p0, p0, Lcom/onesignal/OSOutcomeEventsController;->outcomeEventsFactory:Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

    return-object p0
.end method

.method static synthetic access$100(Lcom/onesignal/OSOutcomeEventsController;Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V
    .locals 0

    .line 19
    invoke-direct {p0, p1}, Lcom/onesignal/OSOutcomeEventsController;->sendSavedOutcomeEvent(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V

    return-void
.end method

.method static synthetic access$200(Lcom/onesignal/OSOutcomeEventsController;Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V
    .locals 0

    .line 19
    invoke-direct {p0, p1}, Lcom/onesignal/OSOutcomeEventsController;->saveUniqueOutcome(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V

    return-void
.end method

.method private getUniqueIds(Ljava/lang/String;Ljava/util/List;)Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/util/List<",
            "Lcom/onesignal/influence/domain/OSInfluence;",
            ">;)",
            "Ljava/util/List<",
            "Lcom/onesignal/influence/domain/OSInfluence;",
            ">;"
        }
    .end annotation

    .line 336
    iget-object v0, p0, Lcom/onesignal/OSOutcomeEventsController;->outcomeEventsFactory:Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

    invoke-virtual {v0}, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->getRepository()Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;

    move-result-object v0

    invoke-interface {v0, p1, p2}, Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;->getNotCachedUniqueOutcome(Ljava/lang/String;Ljava/util/List;)Ljava/util/List;

    move-result-object p1

    .line 337
    invoke-interface {p1}, Ljava/util/List;->size()I

    move-result p2

    if-lez p2, :cond_0

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    :goto_0
    return-object p1
.end method

.method private initUniqueOutcomeEventsSentSets()V
    .locals 1

    .line 47
    invoke-static {}, Lcom/onesignal/OSUtils;->newConcurrentSet()Ljava/util/Set;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/OSOutcomeEventsController;->unattributedUniqueOutcomeEventsSentOnSession:Ljava/util/Set;

    .line 48
    iget-object v0, p0, Lcom/onesignal/OSOutcomeEventsController;->outcomeEventsFactory:Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

    invoke-virtual {v0}, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->getRepository()Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;

    move-result-object v0

    invoke-interface {v0}, Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;->getUnattributedUniqueOutcomeEventsSent()Ljava/util/Set;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 50
    iput-object v0, p0, Lcom/onesignal/OSOutcomeEventsController;->unattributedUniqueOutcomeEventsSentOnSession:Ljava/util/Set;

    :cond_0
    return-void
.end method

.method private removeDisabledInfluences(Ljava/util/List;)Ljava/util/List;
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lcom/onesignal/influence/domain/OSInfluence;",
            ">;)",
            "Ljava/util/List<",
            "Lcom/onesignal/influence/domain/OSInfluence;",
            ">;"
        }
    .end annotation

    .line 292
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0, p1}, Ljava/util/ArrayList;-><init>(Ljava/util/Collection;)V

    .line 293
    invoke-interface {p1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :cond_0
    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lcom/onesignal/influence/domain/OSInfluence;

    .line 294
    invoke-virtual {v1}, Lcom/onesignal/influence/domain/OSInfluence;->getInfluenceType()Lcom/onesignal/influence/domain/OSInfluenceType;

    move-result-object v2

    invoke-virtual {v2}, Lcom/onesignal/influence/domain/OSInfluenceType;->isDisabled()Z

    move-result v2

    if-eqz v2, :cond_0

    .line 295
    sget-object v2, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v3, Ljava/lang/StringBuilder;

    const-string v4, "Outcomes disabled for channel: "

    invoke-direct {v3, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    .line 296
    invoke-virtual {v1}, Lcom/onesignal/influence/domain/OSInfluence;->getInfluenceChannel()Lcom/onesignal/influence/domain/OSInfluenceChannel;

    move-result-object v4

    invoke-virtual {v4}, Lcom/onesignal/influence/domain/OSInfluenceChannel;->toString()Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v3, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v3

    .line 295
    invoke-static {v2, v3}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 297
    invoke-interface {v0, v1}, Ljava/util/List;->remove(Ljava/lang/Object;)Z

    goto :goto_0

    :cond_1
    return-object v0
.end method

.method private saveAttributedUniqueOutcomeNotifications(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V
    .locals 2

    .line 316
    new-instance v0, Ljava/lang/Thread;

    new-instance v1, Lcom/onesignal/OSOutcomeEventsController$5;

    invoke-direct {v1, p0, p1}, Lcom/onesignal/OSOutcomeEventsController$5;-><init>(Lcom/onesignal/OSOutcomeEventsController;Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V

    const-string p1, "OS_SAVE_UNIQUE_OUTCOME_NOTIFICATIONS"

    invoke-direct {v0, v1, p1}, Ljava/lang/Thread;-><init>(Ljava/lang/Runnable;Ljava/lang/String;)V

    .line 322
    invoke-virtual {v0}, Ljava/lang/Thread;->start()V

    return-void
.end method

.method private saveUnattributedUniqueOutcomeEvents()V
    .locals 2

    .line 329
    iget-object v0, p0, Lcom/onesignal/OSOutcomeEventsController;->outcomeEventsFactory:Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

    invoke-virtual {v0}, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->getRepository()Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSOutcomeEventsController;->unattributedUniqueOutcomeEventsSentOnSession:Ljava/util/Set;

    invoke-interface {v0, v1}, Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;->saveUnattributedUniqueOutcomeEventsSent(Ljava/util/Set;)V

    return-void
.end method

.method private saveUniqueOutcome(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V
    .locals 1

    .line 305
    invoke-virtual {p1}, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->isUnattributed()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 306
    invoke-direct {p0}, Lcom/onesignal/OSOutcomeEventsController;->saveUnattributedUniqueOutcomeEvents()V

    goto :goto_0

    .line 308
    :cond_0
    invoke-direct {p0, p1}, Lcom/onesignal/OSOutcomeEventsController;->saveAttributedUniqueOutcomeNotifications(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V

    :goto_0
    return-void
.end method

.method private sendAndCreateOutcomeEvent(Ljava/lang/String;FLjava/util/List;Lcom/onesignal/OneSignal$OutcomeCallback;)V
    .locals 16
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "F",
            "Ljava/util/List<",
            "Lcom/onesignal/influence/domain/OSInfluence;",
            ">;",
            "Lcom/onesignal/OneSignal$OutcomeCallback;",
            ")V"
        }
    .end annotation

    move-object/from16 v7, p0

    move-object/from16 v3, p4

    .line 204
    invoke-static {}, Lcom/onesignal/OneSignal;->getTime()Lcom/onesignal/OSTime;

    move-result-object v0

    invoke-interface {v0}, Lcom/onesignal/OSTime;->getCurrentTimeMillis()J

    move-result-wide v0

    const-wide/16 v4, 0x3e8

    div-long v4, v0, v4

    .line 205
    new-instance v0, Lcom/onesignal/OSUtils;

    invoke-direct {v0}, Lcom/onesignal/OSUtils;-><init>()V

    invoke-virtual {v0}, Lcom/onesignal/OSUtils;->getDeviceType()I

    move-result v8

    .line 206
    sget-object v9, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    .line 212
    invoke-interface/range {p3 .. p3}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    const/4 v1, 0x0

    const/4 v2, 0x0

    move-object v6, v1

    move-object v10, v6

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v11

    if-eqz v11, :cond_7

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v11

    check-cast v11, Lcom/onesignal/influence/domain/OSInfluence;

    .line 213
    sget-object v12, Lcom/onesignal/OSOutcomeEventsController$6;->$SwitchMap$com$onesignal$influence$domain$OSInfluenceType:[I

    invoke-virtual {v11}, Lcom/onesignal/influence/domain/OSInfluence;->getInfluenceType()Lcom/onesignal/influence/domain/OSInfluenceType;

    move-result-object v13

    invoke-virtual {v13}, Lcom/onesignal/influence/domain/OSInfluenceType;->ordinal()I

    move-result v13

    aget v12, v12, v13

    const/4 v13, 0x1

    if-eq v12, v13, :cond_5

    const/4 v14, 0x2

    if-eq v12, v14, :cond_3

    const/4 v14, 0x3

    if-eq v12, v14, :cond_2

    const/4 v13, 0x4

    if-eq v12, v13, :cond_0

    goto :goto_0

    .line 224
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->VERBOSE:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v4, "Outcomes disabled for channel: "

    invoke-direct {v2, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v11}, Lcom/onesignal/influence/domain/OSInfluence;->getInfluenceChannel()Lcom/onesignal/influence/domain/OSInfluenceChannel;

    move-result-object v4

    invoke-virtual {v2, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-static {v0, v2}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    if-eqz v3, :cond_1

    .line 226
    invoke-interface {v3, v1}, Lcom/onesignal/OneSignal$OutcomeCallback;->onSuccess(Lcom/onesignal/OSOutcomeEvent;)V

    :cond_1
    return-void

    :cond_2
    move v2, v13

    goto :goto_0

    :cond_3
    if-nez v10, :cond_4

    .line 218
    new-instance v10, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    invoke-direct {v10}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;-><init>()V

    :cond_4
    invoke-direct {v7, v11, v10}, Lcom/onesignal/OSOutcomeEventsController;->setSourceChannelIds(Lcom/onesignal/influence/domain/OSInfluence;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    move-result-object v10

    goto :goto_0

    :cond_5
    if-nez v6, :cond_6

    .line 215
    new-instance v6, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    invoke-direct {v6}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;-><init>()V

    :cond_6
    invoke-direct {v7, v11, v6}, Lcom/onesignal/OSOutcomeEventsController;->setSourceChannelIds(Lcom/onesignal/influence/domain/OSInfluence;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    move-result-object v6

    goto :goto_0

    :cond_7
    if-nez v6, :cond_9

    if-nez v10, :cond_9

    if-nez v2, :cond_9

    .line 233
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->VERBOSE:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v2, "Outcomes disabled for all channels"

    invoke-static {v0, v2}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    if-eqz v3, :cond_8

    .line 235
    invoke-interface {v3, v1}, Lcom/onesignal/OneSignal$OutcomeCallback;->onSuccess(Lcom/onesignal/OSOutcomeEvent;)V

    :cond_8
    return-void

    .line 239
    :cond_9
    new-instance v12, Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    invoke-direct {v12, v6, v10}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;-><init>(Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)V

    .line 241
    new-instance v6, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;

    const-wide/16 v14, 0x0

    move-object v10, v6

    move-object/from16 v11, p1

    move/from16 v13, p2

    invoke-direct/range {v10 .. v15}, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;-><init>(Ljava/lang/String;Lcom/onesignal/outcomes/domain/OSOutcomeSource;FJ)V

    .line 243
    new-instance v10, Lcom/onesignal/OSOutcomeEventsController$4;

    move-object v0, v10

    move-object/from16 v1, p0

    move-object v2, v6

    move-object/from16 v3, p4

    move-object v11, v6

    move-object/from16 v6, p1

    invoke-direct/range {v0 .. v6}, Lcom/onesignal/OSOutcomeEventsController$4;-><init>(Lcom/onesignal/OSOutcomeEventsController;Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;Lcom/onesignal/OneSignal$OutcomeCallback;JLjava/lang/String;)V

    .line 275
    iget-object v0, v7, Lcom/onesignal/OSOutcomeEventsController;->outcomeEventsFactory:Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

    invoke-virtual {v0}, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->getRepository()Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;

    move-result-object v0

    invoke-interface {v0, v9, v8, v11, v10}, Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;->requestMeasureOutcomeEvent(Ljava/lang/String;ILcom/onesignal/outcomes/domain/OSOutcomeEventParams;Lcom/onesignal/OneSignalApiResponseHandler;)V

    return-void
.end method

.method private sendSavedOutcomeEvent(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V
    .locals 4

    .line 96
    new-instance v0, Lcom/onesignal/OSUtils;

    invoke-direct {v0}, Lcom/onesignal/OSUtils;-><init>()V

    invoke-virtual {v0}, Lcom/onesignal/OSUtils;->getDeviceType()I

    move-result v0

    .line 97
    sget-object v1, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    .line 99
    new-instance v2, Lcom/onesignal/OSOutcomeEventsController$3;

    invoke-direct {v2, p0, p1}, Lcom/onesignal/OSOutcomeEventsController$3;-><init>(Lcom/onesignal/OSOutcomeEventsController;Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V

    .line 110
    iget-object v3, p0, Lcom/onesignal/OSOutcomeEventsController;->outcomeEventsFactory:Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

    invoke-virtual {v3}, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->getRepository()Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;

    move-result-object v3

    invoke-interface {v3, v1, v0, p1, v2}, Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;->requestMeasureOutcomeEvent(Ljava/lang/String;ILcom/onesignal/outcomes/domain/OSOutcomeEventParams;Lcom/onesignal/OneSignalApiResponseHandler;)V

    return-void
.end method

.method private sendUniqueOutcomeEvent(Ljava/lang/String;Ljava/util/List;Lcom/onesignal/OneSignal$OutcomeCallback;)V
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/util/List<",
            "Lcom/onesignal/influence/domain/OSInfluence;",
            ">;",
            "Lcom/onesignal/OneSignal$OutcomeCallback;",
            ")V"
        }
    .end annotation

    .line 147
    invoke-direct {p0, p2}, Lcom/onesignal/OSOutcomeEventsController;->removeDisabledInfluences(Ljava/util/List;)Ljava/util/List;

    move-result-object p2

    .line 148
    invoke-interface {p2}, Ljava/util/List;->isEmpty()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 149
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string p2, "Unique Outcome disabled for current session"

    invoke-static {p1, p2}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    return-void

    .line 154
    :cond_0
    invoke-interface {p2}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :cond_1
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    const/4 v2, 0x0

    const-string v3, "\nOutcome name: "

    const/4 v4, 0x0

    if-eqz v1, :cond_4

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lcom/onesignal/influence/domain/OSInfluence;

    .line 155
    invoke-virtual {v1}, Lcom/onesignal/influence/domain/OSInfluence;->getInfluenceType()Lcom/onesignal/influence/domain/OSInfluenceType;

    move-result-object v1

    invoke-virtual {v1}, Lcom/onesignal/influence/domain/OSInfluenceType;->isAttributed()Z

    move-result v1

    if-eqz v1, :cond_1

    .line 165
    invoke-direct {p0, p1, p2}, Lcom/onesignal/OSOutcomeEventsController;->getUniqueIds(Ljava/lang/String;Ljava/util/List;)Ljava/util/List;

    move-result-object v0

    if-nez v0, :cond_3

    .line 167
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v4, "Measure endpoint will not send because unique outcome already sent for: \nSessionInfluences: "

    invoke-direct {v1, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    .line 169
    invoke-virtual {p2}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-virtual {v1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    .line 167
    invoke-static {v0, p1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    if-eqz p3, :cond_2

    .line 174
    invoke-interface {p3, v2}, Lcom/onesignal/OneSignal$OutcomeCallback;->onSuccess(Lcom/onesignal/OSOutcomeEvent;)V

    :cond_2
    return-void

    .line 179
    :cond_3
    invoke-direct {p0, p1, v4, v0, p3}, Lcom/onesignal/OSOutcomeEventsController;->sendAndCreateOutcomeEvent(Ljava/lang/String;FLjava/util/List;Lcom/onesignal/OneSignal$OutcomeCallback;)V

    goto :goto_0

    .line 182
    :cond_4
    iget-object v0, p0, Lcom/onesignal/OSOutcomeEventsController;->unattributedUniqueOutcomeEventsSentOnSession:Ljava/util/Set;

    invoke-interface {v0, p1}, Ljava/util/Set;->contains(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_6

    .line 183
    sget-object p2, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Measure endpoint will not send because unique outcome already sent for: \nSession: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    sget-object v1, Lcom/onesignal/influence/domain/OSInfluenceType;->UNATTRIBUTED:Lcom/onesignal/influence/domain/OSInfluenceType;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {p2, p1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    if-eqz p3, :cond_5

    .line 190
    invoke-interface {p3, v2}, Lcom/onesignal/OneSignal$OutcomeCallback;->onSuccess(Lcom/onesignal/OSOutcomeEvent;)V

    :cond_5
    return-void

    .line 195
    :cond_6
    iget-object v0, p0, Lcom/onesignal/OSOutcomeEventsController;->unattributedUniqueOutcomeEventsSentOnSession:Ljava/util/Set;

    invoke-interface {v0, p1}, Ljava/util/Set;->add(Ljava/lang/Object;)Z

    .line 196
    invoke-direct {p0, p1, v4, p2, p3}, Lcom/onesignal/OSOutcomeEventsController;->sendAndCreateOutcomeEvent(Ljava/lang/String;FLjava/util/List;Lcom/onesignal/OneSignal$OutcomeCallback;)V

    :goto_0
    return-void
.end method

.method private setSourceChannelIds(Lcom/onesignal/influence/domain/OSInfluence;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;
    .locals 2

    .line 279
    sget-object v0, Lcom/onesignal/OSOutcomeEventsController$6;->$SwitchMap$com$onesignal$influence$domain$OSInfluenceChannel:[I

    invoke-virtual {p1}, Lcom/onesignal/influence/domain/OSInfluence;->getInfluenceChannel()Lcom/onesignal/influence/domain/OSInfluenceChannel;

    move-result-object v1

    invoke-virtual {v1}, Lcom/onesignal/influence/domain/OSInfluenceChannel;->ordinal()I

    move-result v1

    aget v0, v0, v1

    const/4 v1, 0x1

    if-eq v0, v1, :cond_1

    const/4 v1, 0x2

    if-eq v0, v1, :cond_0

    goto :goto_0

    .line 284
    :cond_0
    invoke-virtual {p1}, Lcom/onesignal/influence/domain/OSInfluence;->getIds()Lorg/json/JSONArray;

    move-result-object p1

    invoke-virtual {p2, p1}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->setNotificationIds(Lorg/json/JSONArray;)V

    goto :goto_0

    .line 281
    :cond_1
    invoke-virtual {p1}, Lcom/onesignal/influence/domain/OSInfluence;->getIds()Lorg/json/JSONArray;

    move-result-object p1

    invoke-virtual {p2, p1}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->setInAppMessagesIds(Lorg/json/JSONArray;)V

    :goto_0
    return-object p2
.end method


# virtual methods
.method cleanCachedUniqueOutcomes()V
    .locals 3

    .line 66
    new-instance v0, Ljava/lang/Thread;

    new-instance v1, Lcom/onesignal/OSOutcomeEventsController$1;

    invoke-direct {v1, p0}, Lcom/onesignal/OSOutcomeEventsController$1;-><init>(Lcom/onesignal/OSOutcomeEventsController;)V

    const-string v2, "OS_DELETE_CACHED_UNIQUE_OUTCOMES_NOTIFICATIONS_THREAD"

    invoke-direct {v0, v1, v2}, Ljava/lang/Thread;-><init>(Ljava/lang/Runnable;Ljava/lang/String;)V

    .line 74
    invoke-virtual {v0}, Ljava/lang/Thread;->start()V

    return-void
.end method

.method cleanOutcomes()V
    .locals 2

    .line 57
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "OneSignal cleanOutcomes for session"

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 58
    invoke-static {}, Lcom/onesignal/OSUtils;->newConcurrentSet()Ljava/util/Set;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/OSOutcomeEventsController;->unattributedUniqueOutcomeEventsSentOnSession:Ljava/util/Set;

    .line 59
    invoke-direct {p0}, Lcom/onesignal/OSOutcomeEventsController;->saveUnattributedUniqueOutcomeEvents()V

    return-void
.end method

.method sendClickActionOutcomes(Ljava/util/List;)V
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lcom/onesignal/OSInAppMessageOutcome;",
            ">;)V"
        }
    .end annotation

    .line 114
    invoke-interface {p1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_2

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/onesignal/OSInAppMessageOutcome;

    .line 115
    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageOutcome;->getName()Ljava/lang/String;

    move-result-object v1

    .line 117
    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageOutcome;->isUnique()Z

    move-result v2

    const/4 v3, 0x0

    if-eqz v2, :cond_0

    .line 118
    invoke-virtual {p0, v1, v3}, Lcom/onesignal/OSOutcomeEventsController;->sendUniqueOutcomeEvent(Ljava/lang/String;Lcom/onesignal/OneSignal$OutcomeCallback;)V

    goto :goto_0

    .line 119
    :cond_0
    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageOutcome;->getWeight()F

    move-result v2

    const/4 v4, 0x0

    cmpl-float v2, v2, v4

    if-lez v2, :cond_1

    .line 120
    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageOutcome;->getWeight()F

    move-result v0

    invoke-virtual {p0, v1, v0, v3}, Lcom/onesignal/OSOutcomeEventsController;->sendOutcomeEventWithValue(Ljava/lang/String;FLcom/onesignal/OneSignal$OutcomeCallback;)V

    goto :goto_0

    .line 122
    :cond_1
    invoke-virtual {p0, v1, v3}, Lcom/onesignal/OSOutcomeEventsController;->sendOutcomeEvent(Ljava/lang/String;Lcom/onesignal/OneSignal$OutcomeCallback;)V

    goto :goto_0

    :cond_2
    return-void
.end method

.method sendOutcomeEvent(Ljava/lang/String;Lcom/onesignal/OneSignal$OutcomeCallback;)V
    .locals 2

    .line 133
    iget-object v0, p0, Lcom/onesignal/OSOutcomeEventsController;->osSessionManager:Lcom/onesignal/OSSessionManager;

    invoke-virtual {v0}, Lcom/onesignal/OSSessionManager;->getInfluences()Ljava/util/List;

    move-result-object v0

    const/4 v1, 0x0

    .line 134
    invoke-direct {p0, p1, v1, v0, p2}, Lcom/onesignal/OSOutcomeEventsController;->sendAndCreateOutcomeEvent(Ljava/lang/String;FLjava/util/List;Lcom/onesignal/OneSignal$OutcomeCallback;)V

    return-void
.end method

.method sendOutcomeEventWithValue(Ljava/lang/String;FLcom/onesignal/OneSignal$OutcomeCallback;)V
    .locals 1

    .line 138
    iget-object v0, p0, Lcom/onesignal/OSOutcomeEventsController;->osSessionManager:Lcom/onesignal/OSSessionManager;

    invoke-virtual {v0}, Lcom/onesignal/OSSessionManager;->getInfluences()Ljava/util/List;

    move-result-object v0

    .line 139
    invoke-direct {p0, p1, p2, v0, p3}, Lcom/onesignal/OSOutcomeEventsController;->sendAndCreateOutcomeEvent(Ljava/lang/String;FLjava/util/List;Lcom/onesignal/OneSignal$OutcomeCallback;)V

    return-void
.end method

.method sendSavedOutcomes()V
    .locals 3

    .line 82
    new-instance v0, Ljava/lang/Thread;

    new-instance v1, Lcom/onesignal/OSOutcomeEventsController$2;

    invoke-direct {v1, p0}, Lcom/onesignal/OSOutcomeEventsController$2;-><init>(Lcom/onesignal/OSOutcomeEventsController;)V

    const-string v2, "OS_SEND_SAVED_OUTCOMES"

    invoke-direct {v0, v1, v2}, Ljava/lang/Thread;-><init>(Ljava/lang/Runnable;Ljava/lang/String;)V

    .line 92
    invoke-virtual {v0}, Ljava/lang/Thread;->start()V

    return-void
.end method

.method sendUniqueOutcomeEvent(Ljava/lang/String;Lcom/onesignal/OneSignal$OutcomeCallback;)V
    .locals 1

    .line 128
    iget-object v0, p0, Lcom/onesignal/OSOutcomeEventsController;->osSessionManager:Lcom/onesignal/OSSessionManager;

    invoke-virtual {v0}, Lcom/onesignal/OSSessionManager;->getInfluences()Ljava/util/List;

    move-result-object v0

    .line 129
    invoke-direct {p0, p1, v0, p2}, Lcom/onesignal/OSOutcomeEventsController;->sendUniqueOutcomeEvent(Ljava/lang/String;Ljava/util/List;Lcom/onesignal/OneSignal$OutcomeCallback;)V

    return-void
.end method
