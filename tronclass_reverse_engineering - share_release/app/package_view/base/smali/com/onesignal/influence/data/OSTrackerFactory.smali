.class public final Lcom/onesignal/influence/data/OSTrackerFactory;
.super Ljava/lang/Object;
.source "OSTrackerFactory.kt"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/influence/data/OSTrackerFactory$WhenMappings;
    }
.end annotation

.annotation system Ldalvik/annotation/SourceDebugExtension;
    value = "SMAP\nOSTrackerFactory.kt\nKotlin\n*S Kotlin\n*F\n+ 1 OSTrackerFactory.kt\ncom/onesignal/influence/data/OSTrackerFactory\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,83:1\n1547#2:84\n1618#2,3:85\n764#2:88\n855#2,2:89\n1547#2:91\n1618#2,3:92\n1849#2,2:96\n1849#2,2:98\n1#3:95\n*S KotlinDebug\n*F\n+ 1 OSTrackerFactory.kt\ncom/onesignal/influence/data/OSTrackerFactory\n*L\n19#1:84\n19#1:85,3\n22#1:88\n22#1:89,2\n22#1:91\n22#1:92,3\n44#1:96,2\n54#1:98,2\n*E\n"
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000`\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\u0008\u0003\n\u0002\u0018\u0002\n\u0002\u0008\u0004\n\u0002\u0018\u0002\n\u0002\u0008\u0006\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0002\u0008\u0004\n\u0002\u0018\u0002\n\u0000\u0018\u00002\u00020\u0001B\u001d\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u00a2\u0006\u0002\u0010\u0008J\u001c\u0010\u001d\u001a\u00020\u001e2\u0006\u0010\u001f\u001a\u00020 2\u000c\u0010\u0013\u001a\u0008\u0012\u0004\u0012\u00020\u00140\nJ\u0010\u0010!\u001a\u0004\u0018\u00010\u000b2\u0006\u0010\"\u001a\u00020#J\u0014\u0010$\u001a\u0008\u0012\u0004\u0012\u00020\u000b0\n2\u0006\u0010\"\u001a\u00020#J\u0006\u0010%\u001a\u00020\u001eJ\u000e\u0010&\u001a\u00020\u001e2\u0006\u0010\'\u001a\u00020(R\u0017\u0010\t\u001a\u0008\u0012\u0004\u0012\u00020\u000b0\n8F\u00a2\u0006\u0006\u001a\u0004\u0008\u000c\u0010\rR\u000e\u0010\u000e\u001a\u00020\u000fX\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u0011\u0010\u0010\u001a\u00020\u000b8F\u00a2\u0006\u0006\u001a\u0004\u0008\u0011\u0010\u0012R\u0017\u0010\u0013\u001a\u0008\u0012\u0004\u0012\u00020\u00140\n8F\u00a2\u0006\u0006\u001a\u0004\u0008\u0015\u0010\rR\u0011\u0010\u0016\u001a\u00020\u000b8F\u00a2\u0006\u0006\u001a\u0004\u0008\u0017\u0010\u0012R\u0017\u0010\u0018\u001a\u0008\u0012\u0004\u0012\u00020\u00140\n8F\u00a2\u0006\u0006\u001a\u0004\u0008\u0019\u0010\rR\u001a\u0010\u001a\u001a\u000e\u0012\u0004\u0012\u00020\u001c\u0012\u0004\u0012\u00020\u000b0\u001bX\u0082\u0004\u00a2\u0006\u0002\n\u0000\u00a8\u0006)"
    }
    d2 = {
        "Lcom/onesignal/influence/data/OSTrackerFactory;",
        "",
        "preferences",
        "Lcom/onesignal/OSSharedPreferences;",
        "logger",
        "Lcom/onesignal/OSLogger;",
        "timeProvider",
        "Lcom/onesignal/OSTime;",
        "(Lcom/onesignal/OSSharedPreferences;Lcom/onesignal/OSLogger;Lcom/onesignal/OSTime;)V",
        "channels",
        "",
        "Lcom/onesignal/influence/data/OSChannelTracker;",
        "getChannels",
        "()Ljava/util/List;",
        "dataRepository",
        "Lcom/onesignal/influence/data/OSInfluenceDataRepository;",
        "iAMChannelTracker",
        "getIAMChannelTracker",
        "()Lcom/onesignal/influence/data/OSChannelTracker;",
        "influences",
        "Lcom/onesignal/influence/domain/OSInfluence;",
        "getInfluences",
        "notificationChannelTracker",
        "getNotificationChannelTracker",
        "sessionInfluences",
        "getSessionInfluences",
        "trackers",
        "Ljava/util/concurrent/ConcurrentHashMap;",
        "",
        "addSessionData",
        "",
        "jsonObject",
        "Lorg/json/JSONObject;",
        "getChannelByEntryAction",
        "entryAction",
        "Lcom/onesignal/OneSignal$AppEntryAction;",
        "getChannelsToResetByEntryAction",
        "initFromCache",
        "saveInfluenceParams",
        "influenceParams",
        "Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;",
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


# instance fields
.field private final dataRepository:Lcom/onesignal/influence/data/OSInfluenceDataRepository;

.field private final trackers:Ljava/util/concurrent/ConcurrentHashMap;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/concurrent/ConcurrentHashMap<",
            "Ljava/lang/String;",
            "Lcom/onesignal/influence/data/OSChannelTracker;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method public constructor <init>(Lcom/onesignal/OSSharedPreferences;Lcom/onesignal/OSLogger;Lcom/onesignal/OSTime;)V
    .locals 4

    const-string v0, "preferences"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "logger"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "timeProvider"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 14
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 15
    new-instance v0, Ljava/util/concurrent/ConcurrentHashMap;

    invoke-direct {v0}, Ljava/util/concurrent/ConcurrentHashMap;-><init>()V

    iput-object v0, p0, Lcom/onesignal/influence/data/OSTrackerFactory;->trackers:Ljava/util/concurrent/ConcurrentHashMap;

    .line 16
    new-instance v1, Lcom/onesignal/influence/data/OSInfluenceDataRepository;

    invoke-direct {v1, p1}, Lcom/onesignal/influence/data/OSInfluenceDataRepository;-><init>(Lcom/onesignal/OSSharedPreferences;)V

    iput-object v1, p0, Lcom/onesignal/influence/data/OSTrackerFactory;->dataRepository:Lcom/onesignal/influence/data/OSInfluenceDataRepository;

    .line 39
    move-object p1, v0

    check-cast p1, Ljava/util/Map;

    sget-object v2, Lcom/onesignal/influence/OSInfluenceConstants;->INSTANCE:Lcom/onesignal/influence/OSInfluenceConstants;

    invoke-virtual {v2}, Lcom/onesignal/influence/OSInfluenceConstants;->getIAM_TAG()Ljava/lang/String;

    move-result-object v2

    new-instance v3, Lcom/onesignal/influence/data/OSInAppMessageTracker;

    invoke-direct {v3, v1, p2, p3}, Lcom/onesignal/influence/data/OSInAppMessageTracker;-><init>(Lcom/onesignal/influence/data/OSInfluenceDataRepository;Lcom/onesignal/OSLogger;Lcom/onesignal/OSTime;)V

    invoke-interface {p1, v2, v3}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 40
    check-cast v0, Ljava/util/Map;

    sget-object p1, Lcom/onesignal/influence/OSInfluenceConstants;->INSTANCE:Lcom/onesignal/influence/OSInfluenceConstants;

    invoke-virtual {p1}, Lcom/onesignal/influence/OSInfluenceConstants;->getNOTIFICATION_TAG()Ljava/lang/String;

    move-result-object p1

    new-instance v2, Lcom/onesignal/influence/data/OSNotificationTracker;

    invoke-direct {v2, v1, p2, p3}, Lcom/onesignal/influence/data/OSNotificationTracker;-><init>(Lcom/onesignal/influence/data/OSInfluenceDataRepository;Lcom/onesignal/OSLogger;Lcom/onesignal/OSTime;)V

    invoke-interface {v0, p1, v2}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    return-void
.end method


# virtual methods
.method public final addSessionData(Lorg/json/JSONObject;Ljava/util/List;)V
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

    const-string v0, "jsonObject"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "influences"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 54
    check-cast p2, Ljava/lang/Iterable;

    .line 98
    invoke-interface {p2}, Ljava/lang/Iterable;->iterator()Ljava/util/Iterator;

    move-result-object p2

    :goto_0
    invoke-interface {p2}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_1

    invoke-interface {p2}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/onesignal/influence/domain/OSInfluence;

    .line 55
    invoke-virtual {v0}, Lcom/onesignal/influence/domain/OSInfluence;->getInfluenceChannel()Lcom/onesignal/influence/domain/OSInfluenceChannel;

    move-result-object v1

    sget-object v2, Lcom/onesignal/influence/data/OSTrackerFactory$WhenMappings;->$EnumSwitchMapping$0:[I

    invoke-virtual {v1}, Lcom/onesignal/influence/domain/OSInfluenceChannel;->ordinal()I

    move-result v1

    aget v1, v2, v1

    const/4 v2, 0x1

    if-eq v1, v2, :cond_0

    goto :goto_0

    .line 56
    :cond_0
    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSTrackerFactory;->getNotificationChannelTracker()Lcom/onesignal/influence/data/OSChannelTracker;

    move-result-object v1

    invoke-virtual {v1, p1, v0}, Lcom/onesignal/influence/data/OSChannelTracker;->addSessionData(Lorg/json/JSONObject;Lcom/onesignal/influence/domain/OSInfluence;)V

    goto :goto_0

    :cond_1
    return-void
.end method

.method public final getChannelByEntryAction(Lcom/onesignal/OneSignal$AppEntryAction;)Lcom/onesignal/influence/data/OSChannelTracker;
    .locals 1

    const-string v0, "entryAction"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 65
    invoke-virtual {p1}, Lcom/onesignal/OneSignal$AppEntryAction;->isNotificationClick()Z

    move-result p1

    if-eqz p1, :cond_0

    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSTrackerFactory;->getNotificationChannelTracker()Lcom/onesignal/influence/data/OSChannelTracker;

    move-result-object p1

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    :goto_0
    return-object p1
.end method

.method public final getChannels()Ljava/util/List;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lcom/onesignal/influence/data/OSChannelTracker;",
            ">;"
        }
    .end annotation

    .line 32
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    check-cast v0, Ljava/util/List;

    .line 33
    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSTrackerFactory;->getNotificationChannelTracker()Lcom/onesignal/influence/data/OSChannelTracker;

    move-result-object v1

    invoke-interface {v0, v1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 34
    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSTrackerFactory;->getIAMChannelTracker()Lcom/onesignal/influence/data/OSChannelTracker;

    move-result-object v1

    invoke-interface {v0, v1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    return-object v0
.end method

.method public final getChannelsToResetByEntryAction(Lcom/onesignal/OneSignal$AppEntryAction;)Ljava/util/List;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/onesignal/OneSignal$AppEntryAction;",
            ")",
            "Ljava/util/List<",
            "Lcom/onesignal/influence/data/OSChannelTracker;",
            ">;"
        }
    .end annotation

    const-string v0, "entryAction"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 69
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    check-cast v0, Ljava/util/List;

    .line 71
    invoke-virtual {p1}, Lcom/onesignal/OneSignal$AppEntryAction;->isAppClose()Z

    move-result v1

    if-eqz v1, :cond_0

    return-object v0

    .line 73
    :cond_0
    invoke-virtual {p1}, Lcom/onesignal/OneSignal$AppEntryAction;->isAppOpen()Z

    move-result p1

    if-eqz p1, :cond_1

    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSTrackerFactory;->getNotificationChannelTracker()Lcom/onesignal/influence/data/OSChannelTracker;

    move-result-object p1

    goto :goto_0

    :cond_1
    const/4 p1, 0x0

    :goto_0
    if-nez p1, :cond_2

    goto :goto_1

    .line 75
    :cond_2
    invoke-interface {v0, p1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 77
    :goto_1
    invoke-virtual {p0}, Lcom/onesignal/influence/data/OSTrackerFactory;->getIAMChannelTracker()Lcom/onesignal/influence/data/OSChannelTracker;

    move-result-object p1

    .line 78
    invoke-interface {v0, p1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    return-object v0
.end method

.method public final getIAMChannelTracker()Lcom/onesignal/influence/data/OSChannelTracker;
    .locals 2

    .line 25
    iget-object v0, p0, Lcom/onesignal/influence/data/OSTrackerFactory;->trackers:Ljava/util/concurrent/ConcurrentHashMap;

    sget-object v1, Lcom/onesignal/influence/OSInfluenceConstants;->INSTANCE:Lcom/onesignal/influence/OSInfluenceConstants;

    invoke-virtual {v1}, Lcom/onesignal/influence/OSInfluenceConstants;->getIAM_TAG()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/util/concurrent/ConcurrentHashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    invoke-static {v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNull(Ljava/lang/Object;)V

    const-string v1, "trackers[OSInfluenceConstants.IAM_TAG]!!"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast v0, Lcom/onesignal/influence/data/OSChannelTracker;

    return-object v0
.end method

.method public final getInfluences()Ljava/util/List;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lcom/onesignal/influence/domain/OSInfluence;",
            ">;"
        }
    .end annotation

    .line 19
    iget-object v0, p0, Lcom/onesignal/influence/data/OSTrackerFactory;->trackers:Ljava/util/concurrent/ConcurrentHashMap;

    invoke-virtual {v0}, Ljava/util/concurrent/ConcurrentHashMap;->values()Ljava/util/Collection;

    move-result-object v0

    const-string v1, "trackers.values"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast v0, Ljava/lang/Iterable;

    .line 84
    new-instance v1, Ljava/util/ArrayList;

    const/16 v2, 0xa

    invoke-static {v0, v2}, Lkotlin/collections/CollectionsKt;->collectionSizeOrDefault(Ljava/lang/Iterable;I)I

    move-result v2

    invoke-direct {v1, v2}, Ljava/util/ArrayList;-><init>(I)V

    check-cast v1, Ljava/util/Collection;

    .line 85
    invoke-interface {v0}, Ljava/lang/Iterable;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_0

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    .line 86
    check-cast v2, Lcom/onesignal/influence/data/OSChannelTracker;

    .line 19
    invoke-virtual {v2}, Lcom/onesignal/influence/data/OSChannelTracker;->getCurrentSessionInfluence()Lcom/onesignal/influence/domain/OSInfluence;

    move-result-object v2

    invoke-interface {v1, v2}, Ljava/util/Collection;->add(Ljava/lang/Object;)Z

    goto :goto_0

    .line 87
    :cond_0
    check-cast v1, Ljava/util/List;

    return-object v1
.end method

.method public final getNotificationChannelTracker()Lcom/onesignal/influence/data/OSChannelTracker;
    .locals 2

    .line 28
    iget-object v0, p0, Lcom/onesignal/influence/data/OSTrackerFactory;->trackers:Ljava/util/concurrent/ConcurrentHashMap;

    sget-object v1, Lcom/onesignal/influence/OSInfluenceConstants;->INSTANCE:Lcom/onesignal/influence/OSInfluenceConstants;

    invoke-virtual {v1}, Lcom/onesignal/influence/OSInfluenceConstants;->getNOTIFICATION_TAG()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/util/concurrent/ConcurrentHashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    invoke-static {v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNull(Ljava/lang/Object;)V

    const-string v1, "trackers[OSInfluenceConstants.NOTIFICATION_TAG]!!"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast v0, Lcom/onesignal/influence/data/OSChannelTracker;

    return-object v0
.end method

.method public final getSessionInfluences()Ljava/util/List;
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lcom/onesignal/influence/domain/OSInfluence;",
            ">;"
        }
    .end annotation

    .line 22
    iget-object v0, p0, Lcom/onesignal/influence/data/OSTrackerFactory;->trackers:Ljava/util/concurrent/ConcurrentHashMap;

    invoke-virtual {v0}, Ljava/util/concurrent/ConcurrentHashMap;->values()Ljava/util/Collection;

    move-result-object v0

    const-string v1, "trackers.values"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast v0, Ljava/lang/Iterable;

    .line 88
    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1}, Ljava/util/ArrayList;-><init>()V

    check-cast v1, Ljava/util/Collection;

    .line 89
    invoke-interface {v0}, Ljava/lang/Iterable;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :cond_0
    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_1

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    move-object v3, v2

    check-cast v3, Lcom/onesignal/influence/data/OSChannelTracker;

    .line 22
    invoke-virtual {v3}, Lcom/onesignal/influence/data/OSChannelTracker;->getIdTag()Ljava/lang/String;

    move-result-object v3

    sget-object v4, Lcom/onesignal/influence/OSInfluenceConstants;->INSTANCE:Lcom/onesignal/influence/OSInfluenceConstants;

    invoke-virtual {v4}, Lcom/onesignal/influence/OSInfluenceConstants;->getIAM_TAG()Ljava/lang/String;

    move-result-object v4

    invoke-static {v3, v4}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v3

    if-nez v3, :cond_0

    invoke-interface {v1, v2}, Ljava/util/Collection;->add(Ljava/lang/Object;)Z

    goto :goto_0

    .line 90
    :cond_1
    check-cast v1, Ljava/util/List;

    .line 88
    check-cast v1, Ljava/lang/Iterable;

    .line 91
    new-instance v0, Ljava/util/ArrayList;

    const/16 v2, 0xa

    invoke-static {v1, v2}, Lkotlin/collections/CollectionsKt;->collectionSizeOrDefault(Ljava/lang/Iterable;I)I

    move-result v2

    invoke-direct {v0, v2}, Ljava/util/ArrayList;-><init>(I)V

    check-cast v0, Ljava/util/Collection;

    .line 92
    invoke-interface {v1}, Ljava/lang/Iterable;->iterator()Ljava/util/Iterator;

    move-result-object v1

    :goto_1
    invoke-interface {v1}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_2

    invoke-interface {v1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    .line 93
    check-cast v2, Lcom/onesignal/influence/data/OSChannelTracker;

    .line 22
    invoke-virtual {v2}, Lcom/onesignal/influence/data/OSChannelTracker;->getCurrentSessionInfluence()Lcom/onesignal/influence/domain/OSInfluence;

    move-result-object v2

    invoke-interface {v0, v2}, Ljava/util/Collection;->add(Ljava/lang/Object;)Z

    goto :goto_1

    .line 94
    :cond_2
    check-cast v0, Ljava/util/List;

    return-object v0
.end method

.method public final initFromCache()V
    .locals 2

    .line 44
    iget-object v0, p0, Lcom/onesignal/influence/data/OSTrackerFactory;->trackers:Ljava/util/concurrent/ConcurrentHashMap;

    invoke-virtual {v0}, Ljava/util/concurrent/ConcurrentHashMap;->values()Ljava/util/Collection;

    move-result-object v0

    const-string v1, "trackers.values"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast v0, Ljava/lang/Iterable;

    .line 96
    invoke-interface {v0}, Ljava/lang/Iterable;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lcom/onesignal/influence/data/OSChannelTracker;

    .line 45
    invoke-virtual {v1}, Lcom/onesignal/influence/data/OSChannelTracker;->initInfluencedTypeFromCache()V

    goto :goto_0

    :cond_0
    return-void
.end method

.method public final saveInfluenceParams(Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;)V
    .locals 1

    const-string v0, "influenceParams"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 50
    iget-object v0, p0, Lcom/onesignal/influence/data/OSTrackerFactory;->dataRepository:Lcom/onesignal/influence/data/OSInfluenceDataRepository;

    invoke-virtual {v0, p1}, Lcom/onesignal/influence/data/OSInfluenceDataRepository;->saveInfluenceParams(Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;)V

    return-void
.end method
