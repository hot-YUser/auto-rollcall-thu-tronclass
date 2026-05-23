.class public final Lcom/onesignal/influence/data/OSNotificationTracker;
.super Lcom/onesignal/influence/data/OSChannelTracker;
.source "OSNotificationTracker.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000R\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0010\u0008\n\u0002\u0008\u0003\n\u0002\u0018\u0002\n\u0002\u0008\u0003\n\u0002\u0010\u000e\n\u0002\u0008\u0005\n\u0002\u0018\u0002\n\u0002\u0008\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0007\u0008\u0000\u0018\u00002\u00020\u0001B\u001d\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u00a2\u0006\u0002\u0010\u0008J\u0018\u0010\u001b\u001a\u00020\u001c2\u0006\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020 H\u0016J\u0008\u0010!\u001a\u00020\u001cH\u0016J\u0012\u0010\"\u001a\u00020\u00182\u0008\u0010#\u001a\u0004\u0018\u00010\u0012H\u0016J\u0008\u0010$\u001a\u00020\u001cH\u0016J\u0010\u0010%\u001a\u00020\u001c2\u0006\u0010&\u001a\u00020\u0018H\u0016R\u0014\u0010\t\u001a\u00020\n8VX\u0096\u0004\u00a2\u0006\u0006\u001a\u0004\u0008\u000b\u0010\u000cR\u0014\u0010\r\u001a\u00020\u000e8VX\u0096\u0004\u00a2\u0006\u0006\u001a\u0004\u0008\u000f\u0010\u0010R\u0014\u0010\u0011\u001a\u00020\u00128VX\u0096\u0004\u00a2\u0006\u0006\u001a\u0004\u0008\u0013\u0010\u0014R\u0014\u0010\u0015\u001a\u00020\n8VX\u0096\u0004\u00a2\u0006\u0006\u001a\u0004\u0008\u0016\u0010\u000cR\u0014\u0010\u0017\u001a\u00020\u00188VX\u0096\u0004\u00a2\u0006\u0006\u001a\u0004\u0008\u0019\u0010\u001a\u00a8\u0006\'"
    }
    d2 = {
        "Lcom/onesignal/influence/data/OSNotificationTracker;",
        "Lcom/onesignal/influence/data/OSChannelTracker;",
        "dataRepository",
        "Lcom/onesignal/influence/data/OSInfluenceDataRepository;",
        "logger",
        "Lcom/onesignal/OSLogger;",
        "timeProvider",
        "Lcom/onesignal/OSTime;",
        "(Lcom/onesignal/influence/data/OSInfluenceDataRepository;Lcom/onesignal/OSLogger;Lcom/onesignal/OSTime;)V",
        "channelLimit",
        "",
        "getChannelLimit",
        "()I",
        "channelType",
        "Lcom/onesignal/influence/domain/OSInfluenceChannel;",
        "getChannelType",
        "()Lcom/onesignal/influence/domain/OSInfluenceChannel;",
        "idTag",
        "",
        "getIdTag",
        "()Ljava/lang/String;",
        "indirectAttributionWindow",
        "getIndirectAttributionWindow",
        "lastChannelObjects",
        "Lorg/json/JSONArray;",
        "getLastChannelObjects",
        "()Lorg/json/JSONArray;",
        "addSessionData",
        "",
        "jsonObject",
        "Lorg/json/JSONObject;",
        "influence",
        "Lcom/onesignal/influence/domain/OSInfluence;",
        "cacheState",
        "getLastChannelObjectsReceivedByNewId",
        "id",
        "initInfluencedTypeFromCache",
        "saveChannelObjects",
        "channelObjects",
        "onesignal_release"
    }
    k = 0x1
    mv = {
        0x1,
        0x5,
        0x1
    }
    xi = 0x30
.end annotation


# direct methods
.method public constructor <init>(Lcom/onesignal/influence/data/OSInfluenceDataRepository;Lcom/onesignal/OSLogger;Lcom/onesignal/OSTime;)V
    .locals 1

    const-string v0, "dataRepository"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "logger"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "timeProvider"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 13
    invoke-direct {p0, p1, p2, p3}, Lcom/onesignal/influence/data/OSChannelTracker;-><init>(Lcom/onesignal/influence/data/OSInfluenceDataRepository;Lcom/onesignal/OSLogger;Lcom/onesignal/OSTime;)V

    return-void
.end method


# virtual methods
.method public addSessionData(Lorg/json/JSONObject;Lcom/onesignal/influence/domain/OSInfluence;)V
    .locals 2

    const-string v0, "jsonObject"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "influence"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 54
    invoke-virtual {p2}, Lcom/onesignal/influence/domain/OSInfluence;->getInfluenceType()Lcom/onesignal/influence/domain/OSInfluenceType;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/influence/domain/OSInfluenceType;->isAttributed()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 56
    :try_start_0
    const-string v0, "direct"

    invoke-virtual {p2}, Lcom/onesignal/influence/domain/OSInfluence;->getInfluenceType()Lcom/onesignal/influence/domain/OSInfluenceType;

    move-result-object v1

    invoke-virtual {v1}, Lcom/onesignal/influence/domain/OSInfluenceType;->isDirect()Z

    move-result v1

    invoke-virtual {p1, v0, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    .line 57
    const-string v0, "notification_ids"

    invoke-virtual {p2}, Lcom/onesignal/influence/domain/OSInfluence;->getIds()Lorg/json/JSONArray;

    move-result-object p2

    invoke-virtual {p1, v0, p2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 59
    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSNotificationTracker;->getLogger()Lcom/onesignal/OSLogger;

    move-result-object p2

    const-string v0, "Generating notification tracker addSessionData JSONObject "

    check-cast p1, Ljava/lang/Throwable;

    invoke-interface {p2, v0, p1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;Ljava/lang/Throwable;)V

    :cond_0
    :goto_0
    return-void
.end method

.method public cacheState()V
    .locals 2

    .line 65
    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSNotificationTracker;->getDataRepository()Lcom/onesignal/influence/data/OSInfluenceDataRepository;

    move-result-object v0

    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSNotificationTracker;->getInfluenceType()Lcom/onesignal/influence/domain/OSInfluenceType;

    move-result-object v1

    if-nez v1, :cond_0

    sget-object v1, Lcom/onesignal/influence/domain/OSInfluenceType;->UNATTRIBUTED:Lcom/onesignal/influence/domain/OSInfluenceType;

    :cond_0
    invoke-virtual {v0, v1}, Lcom/onesignal/influence/data/OSInfluenceDataRepository;->cacheNotificationInfluenceType(Lcom/onesignal/influence/domain/OSInfluenceType;)V

    .line 66
    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSNotificationTracker;->getDataRepository()Lcom/onesignal/influence/data/OSInfluenceDataRepository;

    move-result-object v0

    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSNotificationTracker;->getDirectId()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/onesignal/influence/data/OSInfluenceDataRepository;->cacheNotificationOpenId(Ljava/lang/String;)V

    return-void
.end method

.method public getChannelLimit()I
    .locals 1

    .line 33
    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSNotificationTracker;->getDataRepository()Lcom/onesignal/influence/data/OSInfluenceDataRepository;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSInfluenceDataRepository;->getNotificationLimit()I

    move-result v0

    return v0
.end method

.method public getChannelType()Lcom/onesignal/influence/domain/OSInfluenceChannel;
    .locals 1

    .line 30
    sget-object v0, Lcom/onesignal/influence/domain/OSInfluenceChannel;->NOTIFICATION:Lcom/onesignal/influence/domain/OSInfluenceChannel;

    return-object v0
.end method

.method public getIdTag()Ljava/lang/String;
    .locals 1

    .line 27
    const-string v0, "notification_id"

    return-object v0
.end method

.method public getIndirectAttributionWindow()I
    .locals 1

    .line 36
    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSNotificationTracker;->getDataRepository()Lcom/onesignal/influence/data/OSInfluenceDataRepository;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSInfluenceDataRepository;->getNotificationIndirectAttributionWindow()I

    move-result v0

    return v0
.end method

.method public getLastChannelObjects()Lorg/json/JSONArray;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 25
    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSNotificationTracker;->getDataRepository()Lcom/onesignal/influence/data/OSInfluenceDataRepository;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSInfluenceDataRepository;->getLastNotificationsReceivedData()Lorg/json/JSONArray;

    move-result-object v0

    return-object v0
.end method

.method public getLastChannelObjectsReceivedByNewId(Ljava/lang/String;)Lorg/json/JSONArray;
    .locals 2

    .line 16
    :try_start_0
    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSNotificationTracker;->getLastChannelObjects()Lorg/json/JSONArray;

    move-result-object p1
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 18
    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSNotificationTracker;->getLogger()Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "Generating Notification tracker getLastChannelObjects JSONObject "

    check-cast p1, Ljava/lang/Throwable;

    invoke-interface {v0, v1, p1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 19
    new-instance p1, Lorg/json/JSONArray;

    invoke-direct {p1}, Lorg/json/JSONArray;-><init>()V

    :goto_0
    return-object p1
.end method

.method public initInfluencedTypeFromCache()V
    .locals 2

    .line 43
    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSNotificationTracker;->getDataRepository()Lcom/onesignal/influence/data/OSInfluenceDataRepository;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/influence/data/OSInfluenceDataRepository;->getNotificationCachedInfluenceType()Lcom/onesignal/influence/domain/OSInfluenceType;

    move-result-object v0

    .line 44
    invoke-virtual {v0}, Lcom/onesignal/influence/domain/OSInfluenceType;->isIndirect()Z

    move-result v1

    if-eqz v1, :cond_0

    .line 45
    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSNotificationTracker;->getLastReceivedIds()Lorg/json/JSONArray;

    move-result-object v1

    invoke-virtual {p0, v1}, Lcom/onesignal/influence/data/OSNotificationTracker;->setIndirectIds(Lorg/json/JSONArray;)V

    goto :goto_0

    .line 46
    :cond_0
    invoke-virtual {v0}, Lcom/onesignal/influence/domain/OSInfluenceType;->isDirect()Z

    move-result v1

    if-eqz v1, :cond_1

    .line 47
    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSNotificationTracker;->getDataRepository()Lcom/onesignal/influence/data/OSInfluenceDataRepository;

    move-result-object v1

    invoke-virtual {v1}, Lcom/onesignal/influence/data/OSInfluenceDataRepository;->getCachedNotificationOpenId()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {p0, v1}, Lcom/onesignal/influence/data/OSNotificationTracker;->setDirectId(Ljava/lang/String;)V

    .line 49
    :cond_1
    :goto_0
    sget-object v1, Lkotlin/Unit;->INSTANCE:Lkotlin/Unit;

    .line 43
    invoke-virtual {p0, v0}, Lcom/onesignal/influence/data/OSNotificationTracker;->setInfluenceType(Lcom/onesignal/influence/domain/OSInfluenceType;)V

    .line 50
    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSNotificationTracker;->getLogger()Lcom/onesignal/OSLogger;

    move-result-object v0

    const-string v1, "OneSignal NotificationTracker initInfluencedTypeFromCache: "

    invoke-static {v1, p0}, Lkotlin/jvm/internal/Intrinsics;->stringPlus(Ljava/lang/String;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    return-void
.end method

.method public saveChannelObjects(Lorg/json/JSONArray;)V
    .locals 1

    const-string v0, "channelObjects"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 39
    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSNotificationTracker;->getDataRepository()Lcom/onesignal/influence/data/OSInfluenceDataRepository;

    move-result-object v0

    invoke-virtual {v0, p1}, Lcom/onesignal/influence/data/OSInfluenceDataRepository;->saveNotifications(Lorg/json/JSONArray;)V

    return-void
.end method
