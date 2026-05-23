.class public Lcom/onesignal/OSSessionManager;
.super Ljava/lang/Object;
.source "OSSessionManager.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/OSSessionManager$SessionListener;
    }
.end annotation


# static fields
.field private static final OS_END_CURRENT_SESSION:Ljava/lang/String; = "OS_END_CURRENT_SESSION"


# instance fields
.field private logger:Lcom/onesignal/OSLogger;

.field private sessionListener:Lcom/onesignal/OSSessionManager$SessionListener;

.field protected trackerFactory:Lcom/onesignal/influence/data/OSTrackerFactory;


# direct methods
.method public constructor <init>(Lcom/onesignal/OSSessionManager$SessionListener;Lcom/onesignal/influence/data/OSTrackerFactory;Lcom/onesignal/OSLogger;)V
    .locals 0

    .line 39
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 40
    iput-object p1, p0, Lcom/onesignal/OSSessionManager;->sessionListener:Lcom/onesignal/OSSessionManager$SessionListener;

    .line 41
    iput-object p2, p0, Lcom/onesignal/OSSessionManager;->trackerFactory:Lcom/onesignal/influence/data/OSTrackerFactory;

    .line 42
    iput-object p3, p0, Lcom/onesignal/OSSessionManager;->logger:Lcom/onesignal/OSLogger;

    return-void
.end method

.method static synthetic access$000(Lcom/onesignal/OSSessionManager;)Lcom/onesignal/OSSessionManager$SessionListener;
    .locals 0

    .line 26
    iget-object p0, p0, Lcom/onesignal/OSSessionManager;->sessionListener:Lcom/onesignal/OSSessionManager$SessionListener;

    return-object p0
.end method

.method private attemptSessionUpgrade(Lcom/onesignal/OneSignal$AppEntryAction;Ljava/lang/String;)V
    .locals 6

    .line 137
    iget-object v0, p0, Lcom/onesignal/OSSessionManager;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "OneSignal SessionManager attemptSessionUpgrade with entryAction: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 138
    iget-object v0, p0, Lcom/onesignal/OSSessionManager;->trackerFactory:Lcom/onesignal/influence/data/OSTrackerFactory;

    invoke-virtual {v0, p1}, Lcom/onesignal/influence/data/OSTrackerFactory;->getChannelByEntryAction(Lcom/onesignal/OneSignal$AppEntryAction;)Lcom/onesignal/influence/data/OSChannelTracker;

    move-result-object v0

    .line 139
    iget-object v1, p0, Lcom/onesignal/OSSessionManager;->trackerFactory:Lcom/onesignal/influence/data/OSTrackerFactory;

    invoke-virtual {v1, p1}, Lcom/onesignal/influence/data/OSTrackerFactory;->getChannelsToResetByEntryAction(Lcom/onesignal/OneSignal$AppEntryAction;)Ljava/util/List;

    move-result-object v1

    .line 140
    new-instance v2, Ljava/util/ArrayList;

    invoke-direct {v2}, Ljava/util/ArrayList;-><init>()V

    const/4 v3, 0x0

    if-eqz v0, :cond_1

    .line 146
    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSChannelTracker;->getCurrentSessionInfluence()Lcom/onesignal/influence/domain/OSInfluence;

    move-result-object v4

    .line 147
    sget-object v5, Lcom/onesignal/influence/domain/OSInfluenceType;->DIRECT:Lcom/onesignal/influence/domain/OSInfluenceType;

    if-nez p2, :cond_0

    .line 149
    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSChannelTracker;->getDirectId()Ljava/lang/String;

    move-result-object p2

    .line 147
    :cond_0
    invoke-direct {p0, v0, v5, p2, v3}, Lcom/onesignal/OSSessionManager;->setSession(Lcom/onesignal/influence/data/OSChannelTracker;Lcom/onesignal/influence/domain/OSInfluenceType;Ljava/lang/String;Lorg/json/JSONArray;)Z

    move-result p2

    goto :goto_0

    :cond_1
    const/4 p2, 0x0

    move-object v4, v3

    :goto_0
    if-eqz p2, :cond_3

    .line 154
    iget-object p2, p0, Lcom/onesignal/OSSessionManager;->logger:Lcom/onesignal/OSLogger;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v5, "OneSignal SessionManager attemptSessionUpgrade channel updated, search for ending direct influences on channels: "

    invoke-direct {v0, v5}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-interface {p2, v0}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 155
    invoke-interface {v2, v4}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 159
    invoke-interface {v1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p2

    :cond_2
    :goto_1
    invoke-interface {p2}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_3

    invoke-interface {p2}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/onesignal/influence/data/OSChannelTracker;

    .line 160
    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSChannelTracker;->getInfluenceType()Lcom/onesignal/influence/domain/OSInfluenceType;

    move-result-object v4

    invoke-virtual {v4}, Lcom/onesignal/influence/domain/OSInfluenceType;->isDirect()Z

    move-result v4

    if-eqz v4, :cond_2

    .line 161
    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSChannelTracker;->getCurrentSessionInfluence()Lcom/onesignal/influence/domain/OSInfluence;

    move-result-object v4

    invoke-interface {v2, v4}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 162
    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSChannelTracker;->resetAndInitInfluence()V

    goto :goto_1

    .line 166
    :cond_3
    iget-object p2, p0, Lcom/onesignal/OSSessionManager;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "OneSignal SessionManager attemptSessionUpgrade try UNATTRIBUTED to INDIRECT upgrade"

    invoke-interface {p2, v0}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 168
    invoke-interface {v1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p2

    :cond_4
    :goto_2
    invoke-interface {p2}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_5

    invoke-interface {p2}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/onesignal/influence/data/OSChannelTracker;

    .line 169
    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSChannelTracker;->getInfluenceType()Lcom/onesignal/influence/domain/OSInfluenceType;

    move-result-object v1

    invoke-virtual {v1}, Lcom/onesignal/influence/domain/OSInfluenceType;->isUnattributed()Z

    move-result v1

    if-eqz v1, :cond_4

    .line 170
    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSChannelTracker;->getLastReceivedIds()Lorg/json/JSONArray;

    move-result-object v1

    .line 172
    invoke-virtual {v1}, Lorg/json/JSONArray;->length()I

    move-result v4

    if-lez v4, :cond_4

    invoke-virtual {p1}, Lcom/onesignal/OneSignal$AppEntryAction;->isAppClose()Z

    move-result v4

    if-nez v4, :cond_4

    .line 175
    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSChannelTracker;->getCurrentSessionInfluence()Lcom/onesignal/influence/domain/OSInfluence;

    move-result-object v4

    .line 176
    sget-object v5, Lcom/onesignal/influence/domain/OSInfluenceType;->INDIRECT:Lcom/onesignal/influence/domain/OSInfluenceType;

    invoke-direct {p0, v0, v5, v3, v1}, Lcom/onesignal/OSSessionManager;->setSession(Lcom/onesignal/influence/data/OSChannelTracker;Lcom/onesignal/influence/domain/OSInfluenceType;Ljava/lang/String;Lorg/json/JSONArray;)Z

    move-result v0

    if-eqz v0, :cond_4

    .line 179
    invoke-interface {v2, v4}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    goto :goto_2

    .line 184
    :cond_5
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v0, "Trackers after update attempt: "

    invoke-direct {p2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v0, p0, Lcom/onesignal/OSSessionManager;->trackerFactory:Lcom/onesignal/influence/data/OSTrackerFactory;

    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSTrackerFactory;->getChannels()Ljava/util/List;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-static {p1, p2}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 185
    invoke-direct {p0, v2}, Lcom/onesignal/OSSessionManager;->sendSessionEndingWithInfluences(Ljava/util/List;)V

    return-void
.end method

.method private sendSessionEndingWithInfluences(Ljava/util/List;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lcom/onesignal/influence/domain/OSInfluence;",
            ">;)V"
        }
    .end annotation

    .line 240
    iget-object v0, p0, Lcom/onesignal/OSSessionManager;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "OneSignal SessionManager sendSessionEndingWithInfluences with influences: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 242
    invoke-interface {p1}, Ljava/util/List;->size()I

    move-result v0

    if-lez v0, :cond_0

    .line 243
    new-instance v0, Ljava/lang/Thread;

    new-instance v1, Lcom/onesignal/OSSessionManager$1;

    invoke-direct {v1, p0, p1}, Lcom/onesignal/OSSessionManager$1;-><init>(Lcom/onesignal/OSSessionManager;Ljava/util/List;)V

    const-string p1, "OS_END_CURRENT_SESSION"

    invoke-direct {v0, v1, p1}, Ljava/lang/Thread;-><init>(Ljava/lang/Runnable;Ljava/lang/String;)V

    .line 249
    invoke-virtual {v0}, Ljava/lang/Thread;->start()V

    :cond_0
    return-void
.end method

.method private setSession(Lcom/onesignal/influence/data/OSChannelTracker;Lcom/onesignal/influence/domain/OSInfluenceType;Ljava/lang/String;Lorg/json/JSONArray;)Z
    .locals 5

    .line 193
    invoke-direct {p0, p1, p2, p3, p4}, Lcom/onesignal/OSSessionManager;->willChangeSession(Lcom/onesignal/influence/data/OSChannelTracker;Lcom/onesignal/influence/domain/OSInfluenceType;Ljava/lang/String;Lorg/json/JSONArray;)Z

    move-result v0

    if-nez v0, :cond_0

    const/4 p1, 0x0

    return p1

    .line 196
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "OSChannelTracker changed: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    .line 197
    invoke-virtual {p1}, Lcom/onesignal/influence/data/OSChannelTracker;->getIdTag()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, "\nfrom:\ninfluenceType: "

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    .line 199
    invoke-virtual {p1}, Lcom/onesignal/influence/data/OSChannelTracker;->getInfluenceType()Lcom/onesignal/influence/domain/OSInfluenceType;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, ", directNotificationId: "

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    .line 200
    invoke-virtual {p1}, Lcom/onesignal/influence/data/OSChannelTracker;->getDirectId()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v3, ", indirectNotificationIds: "

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    .line 201
    invoke-virtual {p1}, Lcom/onesignal/influence/data/OSChannelTracker;->getIndirectIds()Lorg/json/JSONArray;

    move-result-object v4

    invoke-virtual {v1, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v4, "\nto:\ninfluenceType: "

    invoke-virtual {v1, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1, p4}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    .line 196
    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 207
    invoke-virtual {p1, p2}, Lcom/onesignal/influence/data/OSChannelTracker;->setInfluenceType(Lcom/onesignal/influence/domain/OSInfluenceType;)V

    .line 208
    invoke-virtual {p1, p3}, Lcom/onesignal/influence/data/OSChannelTracker;->setDirectId(Ljava/lang/String;)V

    .line 209
    invoke-virtual {p1, p4}, Lcom/onesignal/influence/data/OSChannelTracker;->setIndirectIds(Lorg/json/JSONArray;)V

    .line 210
    invoke-virtual {p1}, Lcom/onesignal/influence/data/OSChannelTracker;->cacheState()V

    .line 212
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "Trackers changed to: "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object p3, p0, Lcom/onesignal/OSSessionManager;->trackerFactory:Lcom/onesignal/influence/data/OSTrackerFactory;

    invoke-virtual {p3}, Lcom/onesignal/influence/data/OSTrackerFactory;->getChannels()Ljava/util/List;

    move-result-object p3

    invoke-virtual {p3}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object p3

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-static {p1, p2}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    const/4 p1, 0x1

    return p1
.end method

.method private willChangeSession(Lcom/onesignal/influence/data/OSChannelTracker;Lcom/onesignal/influence/domain/OSInfluenceType;Ljava/lang/String;Lorg/json/JSONArray;)Z
    .locals 2

    .line 221
    invoke-virtual {p1}, Lcom/onesignal/influence/data/OSChannelTracker;->getInfluenceType()Lcom/onesignal/influence/domain/OSInfluenceType;

    move-result-object v0

    invoke-virtual {p2, v0}, Lcom/onesignal/influence/domain/OSInfluenceType;->equals(Ljava/lang/Object;)Z

    move-result p2

    const/4 v0, 0x1

    if-nez p2, :cond_0

    return v0

    .line 224
    :cond_0
    invoke-virtual {p1}, Lcom/onesignal/influence/data/OSChannelTracker;->getInfluenceType()Lcom/onesignal/influence/domain/OSInfluenceType;

    move-result-object p2

    .line 226
    invoke-virtual {p2}, Lcom/onesignal/influence/domain/OSInfluenceType;->isDirect()Z

    move-result v1

    if-eqz v1, :cond_1

    .line 227
    invoke-virtual {p1}, Lcom/onesignal/influence/data/OSChannelTracker;->getDirectId()Ljava/lang/String;

    move-result-object v1

    if-eqz v1, :cond_1

    .line 228
    invoke-virtual {p1}, Lcom/onesignal/influence/data/OSChannelTracker;->getDirectId()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v1, p3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p3

    if-nez p3, :cond_1

    return v0

    .line 233
    :cond_1
    invoke-virtual {p2}, Lcom/onesignal/influence/domain/OSInfluenceType;->isIndirect()Z

    move-result p2

    if-eqz p2, :cond_2

    .line 234
    invoke-virtual {p1}, Lcom/onesignal/influence/data/OSChannelTracker;->getIndirectIds()Lorg/json/JSONArray;

    move-result-object p2

    if-eqz p2, :cond_2

    .line 235
    invoke-virtual {p1}, Lcom/onesignal/influence/data/OSChannelTracker;->getIndirectIds()Lorg/json/JSONArray;

    move-result-object p2

    invoke-virtual {p2}, Lorg/json/JSONArray;->length()I

    move-result p2

    if-lez p2, :cond_2

    .line 236
    invoke-virtual {p1}, Lcom/onesignal/influence/data/OSChannelTracker;->getIndirectIds()Lorg/json/JSONArray;

    move-result-object p1

    invoke-static {p1, p4}, Lcom/onesignal/JSONUtils;->compareJSONArrays(Lorg/json/JSONArray;Lorg/json/JSONArray;)Z

    move-result p1

    if-nez p1, :cond_2

    goto :goto_0

    :cond_2
    const/4 v0, 0x0

    :goto_0
    return v0
.end method


# virtual methods
.method addSessionIds(Lorg/json/JSONObject;Ljava/util/List;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/json/JSONObject;",
            "Ljava/util/List<",
            "Lcom/onesignal/influence/domain/OSInfluence;",
            ">;)V"
        }
    .end annotation

    .line 50
    iget-object v0, p0, Lcom/onesignal/OSSessionManager;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "OneSignal SessionManager addSessionData with influences: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 51
    iget-object v0, p0, Lcom/onesignal/OSSessionManager;->trackerFactory:Lcom/onesignal/influence/data/OSTrackerFactory;

    invoke-virtual {v0, p1, p2}, Lcom/onesignal/influence/data/OSTrackerFactory;->addSessionData(Lorg/json/JSONObject;Ljava/util/List;)V

    .line 52
    iget-object p2, p0, Lcom/onesignal/OSSessionManager;->logger:Lcom/onesignal/OSLogger;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "OneSignal SessionManager addSessionIds on jsonObject: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-interface {p2, p1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    return-void
.end method

.method attemptSessionUpgrade(Lcom/onesignal/OneSignal$AppEntryAction;)V
    .locals 1

    const/4 v0, 0x0

    .line 133
    invoke-direct {p0, p1, v0}, Lcom/onesignal/OSSessionManager;->attemptSessionUpgrade(Lcom/onesignal/OneSignal$AppEntryAction;Ljava/lang/String;)V

    return-void
.end method

.method getInfluences()Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lcom/onesignal/influence/domain/OSInfluence;",
            ">;"
        }
    .end annotation

    .line 117
    iget-object v0, p0, Lcom/onesignal/OSSessionManager;->trackerFactory:Lcom/onesignal/influence/data/OSTrackerFactory;

    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSTrackerFactory;->getInfluences()Ljava/util/List;

    move-result-object v0

    return-object v0
.end method

.method getSessionInfluences()Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lcom/onesignal/influence/domain/OSInfluence;",
            ">;"
        }
    .end annotation

    .line 122
    iget-object v0, p0, Lcom/onesignal/OSSessionManager;->trackerFactory:Lcom/onesignal/influence/data/OSTrackerFactory;

    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSTrackerFactory;->getSessionInfluences()Ljava/util/List;

    move-result-object v0

    return-object v0
.end method

.method initSessionFromCache()V
    .locals 1

    .line 46
    iget-object v0, p0, Lcom/onesignal/OSSessionManager;->trackerFactory:Lcom/onesignal/influence/data/OSTrackerFactory;

    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSTrackerFactory;->initFromCache()V

    return-void
.end method

.method onDirectInfluenceFromIAMClick(Ljava/lang/String;)V
    .locals 3

    .line 86
    iget-object v0, p0, Lcom/onesignal/OSSessionManager;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "OneSignal SessionManager onDirectInfluenceFromIAMClick messageId: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 87
    iget-object v0, p0, Lcom/onesignal/OSSessionManager;->trackerFactory:Lcom/onesignal/influence/data/OSTrackerFactory;

    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSTrackerFactory;->getIAMChannelTracker()Lcom/onesignal/influence/data/OSChannelTracker;

    move-result-object v0

    .line 89
    sget-object v1, Lcom/onesignal/influence/domain/OSInfluenceType;->DIRECT:Lcom/onesignal/influence/domain/OSInfluenceType;

    const/4 v2, 0x0

    invoke-direct {p0, v0, v1, p1, v2}, Lcom/onesignal/OSSessionManager;->setSession(Lcom/onesignal/influence/data/OSChannelTracker;Lcom/onesignal/influence/domain/OSInfluenceType;Ljava/lang/String;Lorg/json/JSONArray;)Z

    return-void
.end method

.method onDirectInfluenceFromIAMClickFinished()V
    .locals 2

    .line 93
    iget-object v0, p0, Lcom/onesignal/OSSessionManager;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "OneSignal SessionManager onDirectInfluenceFromIAMClickFinished"

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 94
    iget-object v0, p0, Lcom/onesignal/OSSessionManager;->trackerFactory:Lcom/onesignal/influence/data/OSTrackerFactory;

    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSTrackerFactory;->getIAMChannelTracker()Lcom/onesignal/influence/data/OSChannelTracker;

    move-result-object v0

    .line 95
    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSChannelTracker;->resetAndInitInfluence()V

    return-void
.end method

.method onDirectInfluenceFromNotificationOpen(Lcom/onesignal/OneSignal$AppEntryAction;Ljava/lang/String;)V
    .locals 3

    .line 107
    iget-object v0, p0, Lcom/onesignal/OSSessionManager;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "OneSignal SessionManager onDirectInfluenceFromNotificationOpen notificationId: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    if-eqz p2, :cond_1

    .line 108
    invoke-virtual {p2}, Ljava/lang/String;->isEmpty()Z

    move-result v0

    if-eqz v0, :cond_0

    goto :goto_0

    .line 111
    :cond_0
    invoke-direct {p0, p1, p2}, Lcom/onesignal/OSSessionManager;->attemptSessionUpgrade(Lcom/onesignal/OneSignal$AppEntryAction;Ljava/lang/String;)V

    :cond_1
    :goto_0
    return-void
.end method

.method onInAppMessageReceived(Ljava/lang/String;)V
    .locals 3

    .line 79
    iget-object v0, p0, Lcom/onesignal/OSSessionManager;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "OneSignal SessionManager onInAppMessageReceived messageId: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 80
    iget-object v0, p0, Lcom/onesignal/OSSessionManager;->trackerFactory:Lcom/onesignal/influence/data/OSTrackerFactory;

    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSTrackerFactory;->getIAMChannelTracker()Lcom/onesignal/influence/data/OSChannelTracker;

    move-result-object v0

    .line 81
    invoke-virtual {v0, p1}, Lcom/onesignal/influence/data/OSChannelTracker;->saveLastId(Ljava/lang/String;)V

    .line 82
    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSChannelTracker;->resetAndInitInfluence()V

    return-void
.end method

.method onNotificationReceived(Ljava/lang/String;)V
    .locals 3

    .line 99
    iget-object v0, p0, Lcom/onesignal/OSSessionManager;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "OneSignal SessionManager onNotificationReceived notificationId: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    if-eqz p1, :cond_1

    .line 100
    invoke-virtual {p1}, Ljava/lang/String;->isEmpty()Z

    move-result v0

    if-eqz v0, :cond_0

    goto :goto_0

    .line 102
    :cond_0
    iget-object v0, p0, Lcom/onesignal/OSSessionManager;->trackerFactory:Lcom/onesignal/influence/data/OSTrackerFactory;

    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSTrackerFactory;->getNotificationChannelTracker()Lcom/onesignal/influence/data/OSChannelTracker;

    move-result-object v0

    .line 103
    invoke-virtual {v0, p1}, Lcom/onesignal/influence/data/OSChannelTracker;->saveLastId(Ljava/lang/String;)V

    :cond_1
    :goto_0
    return-void
.end method

.method restartSessionIfNeeded(Lcom/onesignal/OneSignal$AppEntryAction;)V
    .locals 6

    .line 56
    iget-object v0, p0, Lcom/onesignal/OSSessionManager;->trackerFactory:Lcom/onesignal/influence/data/OSTrackerFactory;

    invoke-virtual {v0, p1}, Lcom/onesignal/influence/data/OSTrackerFactory;->getChannelsToResetByEntryAction(Lcom/onesignal/OneSignal$AppEntryAction;)Ljava/util/List;

    move-result-object v0

    .line 57
    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1}, Ljava/util/ArrayList;-><init>()V

    .line 59
    iget-object v2, p0, Lcom/onesignal/OSSessionManager;->logger:Lcom/onesignal/OSLogger;

    new-instance v3, Ljava/lang/StringBuilder;

    const-string v4, "OneSignal SessionManager restartSessionIfNeeded with entryAction: "

    invoke-direct {v3, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v3, "\n channelTrackers: "

    invoke-virtual {p1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {v0}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {p1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-interface {v2, p1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 60
    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :cond_0
    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_2

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/onesignal/influence/data/OSChannelTracker;

    .line 61
    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSChannelTracker;->getLastReceivedIds()Lorg/json/JSONArray;

    move-result-object v2

    .line 62
    iget-object v3, p0, Lcom/onesignal/OSSessionManager;->logger:Lcom/onesignal/OSLogger;

    new-instance v4, Ljava/lang/StringBuilder;

    const-string v5, "OneSignal SessionManager restartSessionIfNeeded lastIds: "

    invoke-direct {v4, v5}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v4, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v4

    invoke-interface {v3, v4}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 64
    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSChannelTracker;->getCurrentSessionInfluence()Lcom/onesignal/influence/domain/OSInfluence;

    move-result-object v3

    .line 66
    invoke-virtual {v2}, Lorg/json/JSONArray;->length()I

    move-result v4

    const/4 v5, 0x0

    if-lez v4, :cond_1

    .line 67
    sget-object v4, Lcom/onesignal/influence/domain/OSInfluenceType;->INDIRECT:Lcom/onesignal/influence/domain/OSInfluenceType;

    invoke-direct {p0, v0, v4, v5, v2}, Lcom/onesignal/OSSessionManager;->setSession(Lcom/onesignal/influence/data/OSChannelTracker;Lcom/onesignal/influence/domain/OSInfluenceType;Ljava/lang/String;Lorg/json/JSONArray;)Z

    move-result v0

    goto :goto_1

    .line 69
    :cond_1
    sget-object v2, Lcom/onesignal/influence/domain/OSInfluenceType;->UNATTRIBUTED:Lcom/onesignal/influence/domain/OSInfluenceType;

    invoke-direct {p0, v0, v2, v5, v5}, Lcom/onesignal/OSSessionManager;->setSession(Lcom/onesignal/influence/data/OSChannelTracker;Lcom/onesignal/influence/domain/OSInfluenceType;Ljava/lang/String;Lorg/json/JSONArray;)Z

    move-result v0

    :goto_1
    if-eqz v0, :cond_0

    .line 72
    invoke-interface {v1, v3}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    goto :goto_0

    .line 75
    :cond_2
    invoke-direct {p0, v1}, Lcom/onesignal/OSSessionManager;->sendSessionEndingWithInfluences(Ljava/util/List;)V

    return-void
.end method
