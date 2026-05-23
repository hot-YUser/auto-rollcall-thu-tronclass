.class public final Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;
.super Ljava/lang/Object;
.source "OSOutcomeEventsCache.kt"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/outcomes/data/OSOutcomeEventsCache$WhenMappings;
    }
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000z\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0010\u000b\n\u0002\u0008\u0002\n\u0002\u0010\"\n\u0002\u0010\u000e\n\u0002\u0008\u0003\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010!\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0002\u0008\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0005\n\u0002\u0018\u0002\n\u0002\u0008\u000b\u0008\u0000\u0018\u00002\u00020\u0001B\u001d\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u00a2\u0006\u0002\u0010\u0008J(\u0010\u0011\u001a\u00020\u00122\u000c\u0010\u0013\u001a\u0008\u0012\u0004\u0012\u00020\u00150\u00142\u0008\u0010\u0016\u001a\u0004\u0018\u00010\u00172\u0006\u0010\u0018\u001a\u00020\u0019H\u0002J \u0010\u001a\u001a\u00020\u00122\u000c\u0010\u0013\u001a\u0008\u0012\u0004\u0012\u00020\u00150\u00142\u0008\u0010\u001b\u001a\u0004\u0018\u00010\u001cH\u0002J\u0018\u0010\u001d\u001a\u00020\u00122\u0006\u0010\u001e\u001a\u00020\u000e2\u0006\u0010\u001f\u001a\u00020\u000eH\u0007J\u0010\u0010 \u001a\u00020\u00122\u0006\u0010!\u001a\u00020\"H\u0007J\u000e\u0010#\u001a\u0008\u0012\u0004\u0012\u00020\"0$H\u0007J4\u0010%\u001a\u0004\u0018\u00010&2\u0006\u0010\'\u001a\u00020(2\u0006\u0010)\u001a\u00020\u001c2\u0006\u0010*\u001a\u00020\u001c2\u0006\u0010+\u001a\u00020\u000e2\u0008\u0010,\u001a\u0004\u0018\u00010&H\u0002J$\u0010-\u001a\u0008\u0012\u0004\u0012\u00020.0$2\u0006\u0010/\u001a\u00020\u000e2\u000c\u00100\u001a\u0008\u0012\u0004\u0012\u00020.0$H\u0007J*\u00101\u001a\u0004\u0018\u00010&2\u0006\u00102\u001a\u00020(2\u0006\u0010)\u001a\u00020\u001c2\u0006\u0010*\u001a\u00020\u001c2\u0006\u00103\u001a\u00020\u000eH\u0002J\u0010\u00104\u001a\u00020\u00122\u0006\u00105\u001a\u00020\"H\u0007J\u0018\u00106\u001a\u00020\u00122\u0010\u00107\u001a\u000c\u0012\u0006\u0012\u0004\u0018\u00010\u000e\u0018\u00010\rJ\u0010\u00108\u001a\u00020\u00122\u0006\u00105\u001a\u00020\"H\u0007R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u0011\u0010\t\u001a\u00020\n8F\u00a2\u0006\u0006\u001a\u0004\u0008\t\u0010\u000bR\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0006\u001a\u00020\u0007X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u0019\u0010\u000c\u001a\n\u0012\u0004\u0012\u00020\u000e\u0018\u00010\r8F\u00a2\u0006\u0006\u001a\u0004\u0008\u000f\u0010\u0010\u00a8\u00069"
    }
    d2 = {
        "Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;",
        "",
        "logger",
        "Lcom/onesignal/OSLogger;",
        "dbHelper",
        "Lcom/onesignal/OneSignalDb;",
        "preferences",
        "Lcom/onesignal/OSSharedPreferences;",
        "(Lcom/onesignal/OSLogger;Lcom/onesignal/OneSignalDb;Lcom/onesignal/OSSharedPreferences;)V",
        "isOutcomesV2ServiceEnabled",
        "",
        "()Z",
        "unattributedUniqueOutcomeEventsSentByChannel",
        "",
        "",
        "getUnattributedUniqueOutcomeEventsSentByChannel",
        "()Ljava/util/Set;",
        "addIdToListFromChannel",
        "",
        "cachedUniqueOutcomes",
        "",
        "Lcom/onesignal/outcomes/domain/OSCachedUniqueOutcome;",
        "channelIds",
        "Lorg/json/JSONArray;",
        "channel",
        "Lcom/onesignal/influence/domain/OSInfluenceChannel;",
        "addIdsToListFromSource",
        "sourceBody",
        "Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;",
        "cleanCachedUniqueOutcomeEventNotifications",
        "notificationTableName",
        "notificationIdColumnName",
        "deleteOldOutcomeEvent",
        "event",
        "Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;",
        "getAllEventsToSend",
        "",
        "getIAMInfluenceSource",
        "Lcom/onesignal/outcomes/domain/OSOutcomeSource;",
        "iamInfluenceType",
        "Lcom/onesignal/influence/domain/OSInfluenceType;",
        "directSourceBody",
        "indirectSourceBody",
        "iamIds",
        "source",
        "getNotCachedUniqueInfluencesForOutcome",
        "Lcom/onesignal/influence/domain/OSInfluence;",
        "name",
        "influences",
        "getNotificationInfluenceSource",
        "notificationInfluenceType",
        "notificationIds",
        "saveOutcomeEvent",
        "eventParams",
        "saveUnattributedUniqueOutcomeEventsSentByChannel",
        "unattributedUniqueOutcomeEvents",
        "saveUniqueOutcomeEventParams",
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
.field private final dbHelper:Lcom/onesignal/OneSignalDb;

.field private final logger:Lcom/onesignal/OSLogger;

.field private final preferences:Lcom/onesignal/OSSharedPreferences;


# direct methods
.method public constructor <init>(Lcom/onesignal/OSLogger;Lcom/onesignal/OneSignalDb;Lcom/onesignal/OSSharedPreferences;)V
    .locals 1

    const-string v0, "logger"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "dbHelper"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "preferences"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 22
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 23
    iput-object p1, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->logger:Lcom/onesignal/OSLogger;

    .line 24
    iput-object p2, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->dbHelper:Lcom/onesignal/OneSignalDb;

    .line 25
    iput-object p3, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->preferences:Lcom/onesignal/OSSharedPreferences;

    return-void
.end method

.method private final addIdToListFromChannel(Ljava/util/List;Lorg/json/JSONArray;Lcom/onesignal/influence/domain/OSInfluenceChannel;)V
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lcom/onesignal/outcomes/domain/OSCachedUniqueOutcome;",
            ">;",
            "Lorg/json/JSONArray;",
            "Lcom/onesignal/influence/domain/OSInfluenceChannel;",
            ")V"
        }
    .end annotation

    if-nez p2, :cond_0

    goto :goto_2

    .line 225
    :cond_0
    invoke-virtual {p2}, Lorg/json/JSONArray;->length()I

    move-result v0

    if-lez v0, :cond_2

    const/4 v1, 0x0

    :goto_0
    add-int/lit8 v2, v1, 0x1

    .line 227
    :try_start_0
    invoke-virtual {p2, v1}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v1

    .line 228
    new-instance v3, Lcom/onesignal/outcomes/domain/OSCachedUniqueOutcome;

    const-string v4, "influenceId"

    invoke-static {v1, v4}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    invoke-direct {v3, v1, p3}, Lcom/onesignal/outcomes/domain/OSCachedUniqueOutcome;-><init>(Ljava/lang/String;Lcom/onesignal/influence/domain/OSInfluenceChannel;)V

    invoke-interface {p1, v3}, Ljava/util/List;->add(Ljava/lang/Object;)Z
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    :catch_0
    move-exception v1

    .line 230
    invoke-virtual {v1}, Lorg/json/JSONException;->printStackTrace()V

    :goto_1
    if-lt v2, v0, :cond_1

    goto :goto_2

    :cond_1
    move v1, v2

    goto :goto_0

    :cond_2
    :goto_2
    return-void
.end method

.method private final addIdsToListFromSource(Ljava/util/List;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)V
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lcom/onesignal/outcomes/domain/OSCachedUniqueOutcome;",
            ">;",
            "Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;",
            ")V"
        }
    .end annotation

    if-nez p2, :cond_0

    goto :goto_0

    .line 238
    :cond_0
    invoke-virtual {p2}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->getInAppMessagesIds()Lorg/json/JSONArray;

    move-result-object v0

    .line 239
    invoke-virtual {p2}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->getNotificationIds()Lorg/json/JSONArray;

    move-result-object p2

    .line 240
    sget-object v1, Lcom/onesignal/influence/domain/OSInfluenceChannel;->IAM:Lcom/onesignal/influence/domain/OSInfluenceChannel;

    invoke-direct {p0, p1, v0, v1}, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->addIdToListFromChannel(Ljava/util/List;Lorg/json/JSONArray;Lcom/onesignal/influence/domain/OSInfluenceChannel;)V

    .line 241
    sget-object v0, Lcom/onesignal/influence/domain/OSInfluenceChannel;->NOTIFICATION:Lcom/onesignal/influence/domain/OSInfluenceChannel;

    invoke-direct {p0, p1, p2, v0}, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->addIdToListFromChannel(Ljava/util/List;Lorg/json/JSONArray;Lcom/onesignal/influence/domain/OSInfluenceChannel;)V

    :goto_0
    return-void
.end method

.method private final getIAMInfluenceSource(Lcom/onesignal/influence/domain/OSInfluenceType;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;Ljava/lang/String;Lcom/onesignal/outcomes/domain/OSOutcomeSource;)Lcom/onesignal/outcomes/domain/OSOutcomeSource;
    .locals 2

    .line 206
    sget-object v0, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache$WhenMappings;->$EnumSwitchMapping$0:[I

    invoke-virtual {p1}, Lcom/onesignal/influence/domain/OSInfluenceType;->ordinal()I

    move-result p1

    aget p1, v0, p1

    const/4 v0, 0x1

    const/4 v1, 0x0

    if-eq p1, v0, :cond_2

    const/4 p2, 0x2

    if-eq p1, p2, :cond_0

    goto :goto_2

    .line 213
    :cond_0
    new-instance p1, Lorg/json/JSONArray;

    invoke-direct {p1, p4}, Lorg/json/JSONArray;-><init>(Ljava/lang/String;)V

    invoke-virtual {p3, p1}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->setInAppMessagesIds(Lorg/json/JSONArray;)V

    if-nez p5, :cond_1

    move-object p5, v1

    goto :goto_0

    .line 214
    :cond_1
    invoke-virtual {p5, p3}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->setIndirectBody(Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    move-result-object p1

    move-object p5, p1

    :goto_0
    if-nez p5, :cond_4

    .line 215
    new-instance p5, Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    invoke-direct {p5, v1, p3}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;-><init>(Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)V

    goto :goto_2

    .line 208
    :cond_2
    new-instance p1, Lorg/json/JSONArray;

    invoke-direct {p1, p4}, Lorg/json/JSONArray;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, p1}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->setInAppMessagesIds(Lorg/json/JSONArray;)V

    if-nez p5, :cond_3

    move-object p5, v1

    goto :goto_1

    .line 209
    :cond_3
    invoke-virtual {p5, p2}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->setDirectBody(Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    move-result-object p1

    move-object p5, p1

    :goto_1
    if-nez p5, :cond_4

    .line 210
    new-instance p5, Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    invoke-direct {p5, p2, v1}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;-><init>(Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)V

    :cond_4
    :goto_2
    return-object p5
.end method

.method private final getNotificationInfluenceSource(Lcom/onesignal/influence/domain/OSInfluenceType;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;Ljava/lang/String;)Lcom/onesignal/outcomes/domain/OSOutcomeSource;
    .locals 2

    .line 184
    sget-object v0, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache$WhenMappings;->$EnumSwitchMapping$0:[I

    invoke-virtual {p1}, Lcom/onesignal/influence/domain/OSInfluenceType;->ordinal()I

    move-result p1

    aget p1, v0, p1

    const/4 v0, 0x1

    const/4 v1, 0x0

    if-eq p1, v0, :cond_1

    const/4 p2, 0x2

    if-eq p1, p2, :cond_0

    .line 194
    move-object p1, v1

    check-cast p1, Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    goto :goto_1

    .line 190
    :cond_0
    new-instance p1, Lorg/json/JSONArray;

    invoke-direct {p1, p4}, Lorg/json/JSONArray;-><init>(Ljava/lang/String;)V

    invoke-virtual {p3, p1}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->setNotificationIds(Lorg/json/JSONArray;)V

    .line 191
    new-instance p1, Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    invoke-direct {p1, v1, p3}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;-><init>(Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)V

    goto :goto_0

    .line 186
    :cond_1
    new-instance p1, Lorg/json/JSONArray;

    invoke-direct {p1, p4}, Lorg/json/JSONArray;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, p1}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->setNotificationIds(Lorg/json/JSONArray;)V

    .line 187
    new-instance p1, Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    invoke-direct {p1, p2, v1}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;-><init>(Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)V

    :goto_0
    move-object v1, p1

    :goto_1
    return-object v1
.end method


# virtual methods
.method public final declared-synchronized cleanCachedUniqueOutcomeEventNotifications(Ljava/lang/String;Ljava/lang/String;)V
    .locals 2

    const-string v0, "NOT EXISTS(SELECT NULL FROM "

    monitor-enter p0

    :try_start_0
    const-string v1, "notificationTableName"

    invoke-static {p1, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v1, "notificationIdColumnName"

    invoke-static {p2, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 330
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    .line 331
    const-string v0, " n WHERE n."

    .line 330
    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    .line 332
    const-string p2, " = channel_influence_id AND channel_type = \""

    .line 330
    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    .line 333
    sget-object p2, Lcom/onesignal/influence/domain/OSInfluenceChannel;->NOTIFICATION:Lcom/onesignal/influence/domain/OSInfluenceChannel;

    invoke-virtual {p2}, Lcom/onesignal/influence/domain/OSInfluenceChannel;->toString()Ljava/lang/String;

    move-result-object p2

    sget-object v0, Ljava/util/Locale;->ROOT:Ljava/util/Locale;

    const-string v1, "ROOT"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    if-eqz p2, :cond_0

    invoke-virtual {p2, v0}, Ljava/lang/String;->toLowerCase(Ljava/util/Locale;)Ljava/lang/String;

    move-result-object p2

    const-string v0, "(this as java.lang.String).toLowerCase(locale)"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    .line 330
    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    .line 334
    const-string p2, "\")"

    .line 330
    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    .line 335
    iget-object p2, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->dbHelper:Lcom/onesignal/OneSignalDb;

    .line 336
    const-string v0, "cached_unique_outcome"

    const/4 v1, 0x0

    .line 335
    invoke-interface {p2, v0, p1, v1}, Lcom/onesignal/OneSignalDb;->delete(Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 340
    monitor-exit p0

    return-void

    .line 333
    :cond_0
    :try_start_1
    new-instance p1, Ljava/lang/NullPointerException;

    const-string p2, "null cannot be cast to non-null type java.lang.String"

    invoke-direct {p1, p2}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1

    :catchall_0
    move-exception p1

    monitor-exit p0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method public final declared-synchronized deleteOldOutcomeEvent(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V
    .locals 6

    monitor-enter p0

    :try_start_0
    const-string v0, "event"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 55
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->dbHelper:Lcom/onesignal/OneSignalDb;

    const-string v1, "outcome"

    const-string v2, "timestamp = ?"

    const/4 v3, 0x1

    new-array v3, v3, [Ljava/lang/String;

    invoke-virtual {p1}, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->getTimestamp()J

    move-result-wide v4

    invoke-static {v4, v5}, Ljava/lang/String;->valueOf(J)Ljava/lang/String;

    move-result-object p1

    const/4 v4, 0x0

    aput-object p1, v3, v4

    invoke-interface {v0, v1, v2, v3}, Lcom/onesignal/OneSignalDb;->delete(Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 56
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

.method public final declared-synchronized getAllEventsToSend()Ljava/util/List;
    .locals 18
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;",
            ">;"
        }
    .end annotation

    move-object/from16 v7, p0

    monitor-enter p0

    .line 122
    :try_start_0
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    move-object v8, v0

    check-cast v8, Ljava/util/List;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_2

    const/4 v9, 0x0

    .line 125
    :try_start_1
    iget-object v10, v7, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->dbHelper:Lcom/onesignal/OneSignalDb;

    .line 126
    const-string v11, "outcome"

    const/16 v16, 0x0

    const/16 v17, 0x0

    const/4 v12, 0x0

    const/4 v13, 0x0

    const/4 v14, 0x0

    const/4 v15, 0x0

    .line 125
    invoke-interface/range {v10 .. v17}, Lcom/onesignal/OneSignalDb;->query(Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Landroid/database/Cursor;

    move-result-object v10
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_1

    .line 135
    :try_start_2
    invoke-interface {v10}, Landroid/database/Cursor;->moveToFirst()Z

    move-result v0

    if-eqz v0, :cond_4

    .line 138
    :cond_0
    const-string v0, "notification_influence_type"

    invoke-interface {v10, v0}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v0

    invoke-interface {v10, v0}, Landroid/database/Cursor;->getString(I)Ljava/lang/String;

    move-result-object v0

    .line 139
    sget-object v1, Lcom/onesignal/influence/domain/OSInfluenceType;->Companion:Lcom/onesignal/influence/domain/OSInfluenceType$Companion;

    invoke-virtual {v1, v0}, Lcom/onesignal/influence/domain/OSInfluenceType$Companion;->fromString(Ljava/lang/String;)Lcom/onesignal/influence/domain/OSInfluenceType;

    move-result-object v0

    .line 140
    const-string v1, "iam_influence_type"

    invoke-interface {v10, v1}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v1

    invoke-interface {v10, v1}, Landroid/database/Cursor;->getString(I)Ljava/lang/String;

    move-result-object v1

    .line 141
    sget-object v2, Lcom/onesignal/influence/domain/OSInfluenceType;->Companion:Lcom/onesignal/influence/domain/OSInfluenceType$Companion;

    invoke-virtual {v2, v1}, Lcom/onesignal/influence/domain/OSInfluenceType$Companion;->fromString(Ljava/lang/String;)Lcom/onesignal/influence/domain/OSInfluenceType;

    move-result-object v2

    .line 144
    const-string v1, "notification_ids"

    invoke-interface {v10, v1}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v1

    invoke-interface {v10, v1}, Landroid/database/Cursor;->getString(I)Ljava/lang/String;

    move-result-object v1

    if-nez v1, :cond_1

    .line 145
    const-string v1, "[]"

    .line 146
    :cond_1
    const-string v3, "iam_ids"

    invoke-interface {v10, v3}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v3

    invoke-interface {v10, v3}, Landroid/database/Cursor;->getString(I)Ljava/lang/String;

    move-result-object v3

    if-nez v3, :cond_2

    .line 147
    const-string v3, "[]"

    :cond_2
    move-object v5, v3

    .line 150
    const-string v3, "name"

    invoke-interface {v10, v3}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v3

    invoke-interface {v10, v3}, Landroid/database/Cursor;->getString(I)Ljava/lang/String;

    move-result-object v12

    .line 151
    const-string v3, "weight"

    invoke-interface {v10, v3}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v3

    invoke-interface {v10, v3}, Landroid/database/Cursor;->getFloat(I)F

    move-result v14

    .line 152
    const-string v3, "timestamp"

    invoke-interface {v10, v3}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v3

    invoke-interface {v10, v3}, Landroid/database/Cursor;->getLong(I)J

    move-result-wide v15
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    .line 155
    :try_start_3
    new-instance v3, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    const/4 v4, 0x3

    invoke-direct {v3, v9, v9, v4, v9}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;-><init>(Lorg/json/JSONArray;Lorg/json/JSONArray;ILkotlin/jvm/internal/DefaultConstructorMarker;)V

    .line 156
    new-instance v6, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    invoke-direct {v6, v9, v9, v4, v9}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;-><init>(Lorg/json/JSONArray;Lorg/json/JSONArray;ILkotlin/jvm/internal/DefaultConstructorMarker;)V

    .line 157
    invoke-direct {v7, v0, v3, v6, v1}, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->getNotificationInfluenceSource(Lcom/onesignal/influence/domain/OSInfluenceType;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;Ljava/lang/String;)Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    move-result-object v0

    move-object/from16 v1, p0

    move-object v4, v6

    move-object v6, v0

    .line 159
    invoke-direct/range {v1 .. v6}, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->getIAMInfluenceSource(Lcom/onesignal/influence/domain/OSInfluenceType;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;Ljava/lang/String;Lcom/onesignal/outcomes/domain/OSOutcomeSource;)Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    if-nez v0, :cond_3

    .line 160
    new-instance v0, Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    invoke-direct {v0, v9, v9}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;-><init>(Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)V

    :cond_3
    move-object v13, v0

    .line 161
    new-instance v0, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;

    const-string v1, "name"

    invoke-static {v12, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    move-object v11, v0

    invoke-direct/range {v11 .. v16}, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;-><init>(Ljava/lang/String;Lcom/onesignal/outcomes/domain/OSOutcomeSource;FJ)V

    .line 162
    invoke-interface {v8, v0}, Ljava/util/List;->add(Ljava/lang/Object;)Z
    :try_end_3
    .catch Lorg/json/JSONException; {:try_start_3 .. :try_end_3} :catch_0
    .catchall {:try_start_3 .. :try_end_3} :catchall_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 165
    :try_start_4
    iget-object v1, v7, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->logger:Lcom/onesignal/OSLogger;

    const-string v2, "Generating JSONArray from notifications ids outcome:JSON Failed."

    check-cast v0, Ljava/lang/Throwable;

    invoke-interface {v1, v2, v0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 167
    :goto_0
    invoke-interface {v10}, Landroid/database/Cursor;->moveToNext()Z

    move-result v0
    :try_end_4
    .catchall {:try_start_4 .. :try_end_4} :catchall_0

    if-nez v0, :cond_0

    :cond_4
    if-nez v10, :cond_5

    goto :goto_1

    .line 172
    :cond_5
    :try_start_5
    invoke-interface {v10}, Landroid/database/Cursor;->isClosed()Z

    move-result v0

    if-nez v0, :cond_6

    invoke-interface {v10}, Landroid/database/Cursor;->close()V
    :try_end_5
    .catchall {:try_start_5 .. :try_end_5} :catchall_2

    .line 175
    :cond_6
    :goto_1
    monitor-exit p0

    return-object v8

    :catchall_0
    move-exception v0

    move-object v9, v10

    goto :goto_2

    :catchall_1
    move-exception v0

    :goto_2
    if-eqz v9, :cond_7

    .line 172
    :try_start_6
    invoke-interface {v9}, Landroid/database/Cursor;->isClosed()Z

    move-result v1

    if-nez v1, :cond_7

    invoke-interface {v9}, Landroid/database/Cursor;->close()V

    .line 171
    :cond_7
    throw v0

    :catchall_2
    move-exception v0

    monitor-exit p0
    :try_end_6
    .catchall {:try_start_6 .. :try_end_6} :catchall_2

    throw v0
.end method

.method public final declared-synchronized getNotCachedUniqueInfluencesForOutcome(Ljava/lang/String;Ljava/util/List;)Ljava/util/List;
    .locals 22
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

    move-object/from16 v1, p0

    move-object/from16 v0, p1

    monitor-enter p0

    :try_start_0
    const-string v2, "name"

    invoke-static {v0, v2}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v2, "influences"

    move-object/from16 v3, p2

    invoke-static {v3, v2}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 276
    new-instance v2, Ljava/util/ArrayList;

    invoke-direct {v2}, Ljava/util/ArrayList;-><init>()V

    check-cast v2, Ljava/util/List;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_1

    const/4 v4, 0x0

    .line 279
    :try_start_1
    invoke-interface/range {p2 .. p2}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v3

    :cond_0
    :goto_0
    invoke-interface {v3}, Ljava/util/Iterator;->hasNext()Z

    move-result v5

    if-eqz v5, :cond_5

    invoke-interface {v3}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v5

    check-cast v5, Lcom/onesignal/influence/domain/OSInfluence;

    .line 280
    new-instance v6, Lorg/json/JSONArray;

    invoke-direct {v6}, Lorg/json/JSONArray;-><init>()V

    .line 281
    invoke-virtual {v5}, Lcom/onesignal/influence/domain/OSInfluence;->getIds()Lorg/json/JSONArray;

    move-result-object v7

    if-nez v7, :cond_1

    goto :goto_0

    .line 283
    :cond_1
    invoke-virtual {v7}, Lorg/json/JSONArray;->length()I

    move-result v8

    if-lez v8, :cond_4

    const/4 v9, 0x0

    move v10, v9

    :goto_1
    add-int/lit8 v11, v10, 0x1

    .line 284
    invoke-virtual {v7, v10}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v10

    .line 285
    invoke-virtual {v5}, Lcom/onesignal/influence/domain/OSInfluence;->getInfluenceChannel()Lcom/onesignal/influence/domain/OSInfluenceChannel;

    move-result-object v12

    new-array v15, v9, [Ljava/lang/String;

    .line 287
    const-string v16, "channel_influence_id = ? AND channel_type = ? AND name = ?"

    const/4 v13, 0x3

    .line 290
    new-array v14, v13, [Ljava/lang/String;

    aput-object v10, v14, v9

    invoke-virtual {v12}, Lcom/onesignal/influence/domain/OSInfluenceChannel;->toString()Ljava/lang/String;

    move-result-object v12

    const/4 v13, 0x1

    aput-object v12, v14, v13

    const/4 v12, 0x2

    aput-object v0, v14, v12

    .line 291
    iget-object v13, v1, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->dbHelper:Lcom/onesignal/OneSignalDb;

    .line 292
    const-string v12, "cached_unique_outcome"

    .line 299
    const-string v21, "1"

    const/16 v18, 0x0

    const/16 v19, 0x0

    const/16 v20, 0x0

    move-object/from16 v17, v14

    move-object v14, v12

    .line 291
    invoke-interface/range {v13 .. v21}, Lcom/onesignal/OneSignalDb;->query(Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Landroid/database/Cursor;

    move-result-object v4

    .line 303
    invoke-interface {v4}, Landroid/database/Cursor;->getCount()I

    move-result v12

    if-nez v12, :cond_2

    invoke-virtual {v6, v10}, Lorg/json/JSONArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    :cond_2
    if-lt v11, v8, :cond_3

    goto :goto_2

    :cond_3
    move v10, v11

    goto :goto_1

    .line 306
    :cond_4
    :goto_2
    invoke-virtual {v6}, Lorg/json/JSONArray;->length()I

    move-result v7

    if-lez v7, :cond_0

    .line 307
    invoke-virtual {v5}, Lcom/onesignal/influence/domain/OSInfluence;->copy()Lcom/onesignal/influence/domain/OSInfluence;

    move-result-object v5

    .line 308
    invoke-virtual {v5, v6}, Lcom/onesignal/influence/domain/OSInfluence;->setIds(Lorg/json/JSONArray;)V

    .line 310
    invoke-interface {v2, v5}, Ljava/util/List;->add(Ljava/lang/Object;)Z
    :try_end_1
    .catch Lorg/json/JSONException; {:try_start_1 .. :try_end_1} :catch_0
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    goto :goto_0

    :cond_5
    if-nez v4, :cond_6

    goto :goto_4

    .line 318
    :cond_6
    :try_start_2
    invoke-interface {v4}, Landroid/database/Cursor;->isClosed()Z

    move-result v0

    if-nez v0, :cond_8

    :goto_3
    invoke-interface {v4}, Landroid/database/Cursor;->close()V
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_1

    goto :goto_4

    :catchall_0
    move-exception v0

    goto :goto_5

    :catch_0
    move-exception v0

    .line 315
    :try_start_3
    invoke-virtual {v0}, Lorg/json/JSONException;->printStackTrace()V
    :try_end_3
    .catchall {:try_start_3 .. :try_end_3} :catchall_0

    if-nez v4, :cond_7

    goto :goto_4

    .line 318
    :cond_7
    :try_start_4
    invoke-interface {v4}, Landroid/database/Cursor;->isClosed()Z

    move-result v0
    :try_end_4
    .catchall {:try_start_4 .. :try_end_4} :catchall_1

    if-nez v0, :cond_8

    goto :goto_3

    .line 321
    :cond_8
    :goto_4
    monitor-exit p0

    return-object v2

    :goto_5
    if-eqz v4, :cond_9

    .line 318
    :try_start_5
    invoke-interface {v4}, Landroid/database/Cursor;->isClosed()Z

    move-result v2

    if-nez v2, :cond_9

    invoke-interface {v4}, Landroid/database/Cursor;->close()V

    .line 317
    :cond_9
    throw v0

    :catchall_1
    move-exception v0

    monitor-exit p0
    :try_end_5
    .catchall {:try_start_5 .. :try_end_5} :catchall_1

    throw v0
.end method

.method public final getUnattributedUniqueOutcomeEventsSentByChannel()Ljava/util/Set;
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 35
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->preferences:Lcom/onesignal/OSSharedPreferences;

    .line 36
    invoke-interface {v0}, Lcom/onesignal/OSSharedPreferences;->getPreferencesName()Ljava/lang/String;

    move-result-object v1

    .line 37
    const-string v2, "PREFS_OS_UNATTRIBUTED_UNIQUE_OUTCOME_EVENTS_SENT"

    const/4 v3, 0x0

    .line 35
    invoke-interface {v0, v1, v2, v3}, Lcom/onesignal/OSSharedPreferences;->getStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)Ljava/util/Set;

    move-result-object v0

    return-object v0
.end method

.method public final isOutcomesV2ServiceEnabled()Z
    .locals 4

    .line 28
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->preferences:Lcom/onesignal/OSSharedPreferences;

    .line 29
    invoke-interface {v0}, Lcom/onesignal/OSSharedPreferences;->getPreferencesName()Ljava/lang/String;

    move-result-object v1

    .line 30
    iget-object v2, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->preferences:Lcom/onesignal/OSSharedPreferences;

    invoke-interface {v2}, Lcom/onesignal/OSSharedPreferences;->getOutcomesV2KeyName()Ljava/lang/String;

    move-result-object v2

    const/4 v3, 0x0

    .line 28
    invoke-interface {v0, v1, v2, v3}, Lcom/onesignal/OSSharedPreferences;->getBool(Ljava/lang/String;Ljava/lang/String;Z)Z

    move-result v0

    return v0
.end method

.method public final declared-synchronized saveOutcomeEvent(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V
    .locals 7

    monitor-enter p0

    :try_start_0
    const-string v0, "eventParams"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 65
    new-instance v0, Lorg/json/JSONArray;

    invoke-direct {v0}, Lorg/json/JSONArray;-><init>()V

    .line 66
    new-instance v1, Lorg/json/JSONArray;

    invoke-direct {v1}, Lorg/json/JSONArray;-><init>()V

    .line 67
    sget-object v2, Lcom/onesignal/influence/domain/OSInfluenceType;->UNATTRIBUTED:Lcom/onesignal/influence/domain/OSInfluenceType;

    .line 68
    sget-object v3, Lcom/onesignal/influence/domain/OSInfluenceType;->UNATTRIBUTED:Lcom/onesignal/influence/domain/OSInfluenceType;

    .line 70
    invoke-virtual {p1}, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->getOutcomeSource()Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    move-result-object v4

    if-nez v4, :cond_0

    goto :goto_1

    :cond_0
    invoke-virtual {v4}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->getDirectBody()Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    move-result-object v4

    if-nez v4, :cond_1

    goto :goto_1

    .line 71
    :cond_1
    invoke-virtual {v4}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->getNotificationIds()Lorg/json/JSONArray;

    move-result-object v5

    if-nez v5, :cond_2

    goto :goto_0

    .line 72
    :cond_2
    invoke-virtual {v5}, Lorg/json/JSONArray;->length()I

    move-result v6

    if-lez v6, :cond_3

    .line 73
    sget-object v2, Lcom/onesignal/influence/domain/OSInfluenceType;->DIRECT:Lcom/onesignal/influence/domain/OSInfluenceType;

    move-object v0, v5

    .line 77
    :cond_3
    :goto_0
    invoke-virtual {v4}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->getInAppMessagesIds()Lorg/json/JSONArray;

    move-result-object v4

    if-nez v4, :cond_4

    goto :goto_1

    .line 78
    :cond_4
    invoke-virtual {v4}, Lorg/json/JSONArray;->length()I

    move-result v5

    if-lez v5, :cond_5

    .line 79
    sget-object v3, Lcom/onesignal/influence/domain/OSInfluenceType;->DIRECT:Lcom/onesignal/influence/domain/OSInfluenceType;

    move-object v1, v4

    .line 85
    :cond_5
    :goto_1
    invoke-virtual {p1}, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->getOutcomeSource()Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    move-result-object v4

    if-nez v4, :cond_6

    goto :goto_3

    :cond_6
    invoke-virtual {v4}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->getIndirectBody()Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    move-result-object v4

    if-nez v4, :cond_7

    goto :goto_3

    .line 86
    :cond_7
    invoke-virtual {v4}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->getNotificationIds()Lorg/json/JSONArray;

    move-result-object v5

    if-nez v5, :cond_8

    goto :goto_2

    .line 87
    :cond_8
    invoke-virtual {v5}, Lorg/json/JSONArray;->length()I

    move-result v6

    if-lez v6, :cond_9

    .line 88
    sget-object v2, Lcom/onesignal/influence/domain/OSInfluenceType;->INDIRECT:Lcom/onesignal/influence/domain/OSInfluenceType;

    move-object v0, v5

    .line 92
    :cond_9
    :goto_2
    invoke-virtual {v4}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->getInAppMessagesIds()Lorg/json/JSONArray;

    move-result-object v4

    if-nez v4, :cond_a

    goto :goto_3

    .line 93
    :cond_a
    invoke-virtual {v4}, Lorg/json/JSONArray;->length()I

    move-result v5

    if-lez v5, :cond_b

    .line 94
    sget-object v3, Lcom/onesignal/influence/domain/OSInfluenceType;->INDIRECT:Lcom/onesignal/influence/domain/OSInfluenceType;

    move-object v1, v4

    .line 99
    :cond_b
    :goto_3
    new-instance v4, Landroid/content/ContentValues;

    invoke-direct {v4}, Landroid/content/ContentValues;-><init>()V

    .line 101
    const-string v5, "notification_ids"

    invoke-virtual {v0}, Lorg/json/JSONArray;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v4, v5, v0}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/String;)V

    .line 102
    const-string v0, "iam_ids"

    invoke-virtual {v1}, Lorg/json/JSONArray;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v4, v0, v1}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/String;)V

    .line 104
    const-string v0, "notification_influence_type"

    invoke-virtual {v2}, Lcom/onesignal/influence/domain/OSInfluenceType;->toString()Ljava/lang/String;

    move-result-object v1

    if-eqz v1, :cond_d

    invoke-virtual {v1}, Ljava/lang/String;->toLowerCase()Ljava/lang/String;

    move-result-object v1

    const-string v2, "(this as java.lang.String).toLowerCase()"

    invoke-static {v1, v2}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    invoke-virtual {v4, v0, v1}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/String;)V

    .line 105
    const-string v0, "iam_influence_type"

    invoke-virtual {v3}, Lcom/onesignal/influence/domain/OSInfluenceType;->toString()Ljava/lang/String;

    move-result-object v1

    if-eqz v1, :cond_c

    invoke-virtual {v1}, Ljava/lang/String;->toLowerCase()Ljava/lang/String;

    move-result-object v1

    const-string v2, "(this as java.lang.String).toLowerCase()"

    invoke-static {v1, v2}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    invoke-virtual {v4, v0, v1}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/String;)V

    .line 107
    const-string v0, "name"

    invoke-virtual {p1}, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->getOutcomeId()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v4, v0, v1}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/String;)V

    .line 108
    const-string v0, "weight"

    invoke-virtual {p1}, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->getWeight()F

    move-result v1

    invoke-static {v1}, Ljava/lang/Float;->valueOf(F)Ljava/lang/Float;

    move-result-object v1

    invoke-virtual {v4, v0, v1}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/Float;)V

    .line 109
    const-string v0, "timestamp"

    invoke-virtual {p1}, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->getTimestamp()J

    move-result-wide v1

    invoke-static {v1, v2}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object p1

    invoke-virtual {v4, v0, p1}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/Long;)V

    .line 111
    iget-object p1, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->dbHelper:Lcom/onesignal/OneSignalDb;

    const-string v0, "outcome"

    const/4 v1, 0x0

    invoke-interface {p1, v0, v1, v4}, Lcom/onesignal/OneSignalDb;->insert(Ljava/lang/String;Ljava/lang/String;Landroid/content/ContentValues;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 113
    monitor-exit p0

    return-void

    .line 105
    :cond_c
    :try_start_1
    new-instance p1, Ljava/lang/NullPointerException;

    const-string v0, "null cannot be cast to non-null type java.lang.String"

    invoke-direct {p1, v0}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 104
    :cond_d
    new-instance p1, Ljava/lang/NullPointerException;

    const-string v0, "null cannot be cast to non-null type java.lang.String"

    invoke-direct {p1, v0}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1

    :catchall_0
    move-exception p1

    monitor-exit p0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method public final saveUnattributedUniqueOutcomeEventsSentByChannel(Ljava/util/Set;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 42
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->preferences:Lcom/onesignal/OSSharedPreferences;

    .line 43
    invoke-interface {v0}, Lcom/onesignal/OSSharedPreferences;->getPreferencesName()Ljava/lang/String;

    move-result-object v1

    .line 45
    invoke-static {p1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNull(Ljava/lang/Object;)V

    .line 42
    const-string v2, "PREFS_OS_UNATTRIBUTED_UNIQUE_OUTCOME_EVENTS_SENT"

    invoke-interface {v0, v1, v2, p1}, Lcom/onesignal/OSSharedPreferences;->saveStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)V

    return-void
.end method

.method public final declared-synchronized saveUniqueOutcomeEventParams(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V
    .locals 6

    monitor-enter p0

    :try_start_0
    const-string v0, "eventParams"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 251
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "OneSignal saveUniqueOutcomeEventParams: "

    invoke-static {v1, p1}, Lkotlin/jvm/internal/Intrinsics;->stringPlus(Ljava/lang/String;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 252
    invoke-virtual {p1}, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->getOutcomeId()Ljava/lang/String;

    move-result-object v0

    .line 253
    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1}, Ljava/util/ArrayList;-><init>()V

    check-cast v1, Ljava/util/List;

    .line 254
    invoke-virtual {p1}, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->getOutcomeSource()Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    move-result-object v2

    const/4 v3, 0x0

    if-nez v2, :cond_0

    move-object v2, v3

    goto :goto_0

    :cond_0
    invoke-virtual {v2}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->getDirectBody()Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    move-result-object v2

    .line 255
    :goto_0
    invoke-virtual {p1}, Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;->getOutcomeSource()Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    move-result-object p1

    if-nez p1, :cond_1

    move-object p1, v3

    goto :goto_1

    :cond_1
    invoke-virtual {p1}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->getIndirectBody()Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    move-result-object p1

    .line 256
    :goto_1
    invoke-direct {p0, v1, v2}, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->addIdsToListFromSource(Ljava/util/List;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)V

    .line 257
    invoke-direct {p0, v1, p1}, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->addIdsToListFromSource(Ljava/util/List;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)V

    .line 259
    invoke-interface {v1}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :goto_2
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_2

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lcom/onesignal/outcomes/domain/OSCachedUniqueOutcome;

    .line 260
    new-instance v2, Landroid/content/ContentValues;

    invoke-direct {v2}, Landroid/content/ContentValues;-><init>()V

    .line 261
    const-string v4, "channel_influence_id"

    invoke-virtual {v1}, Lcom/onesignal/outcomes/domain/OSCachedUniqueOutcome;->getInfluenceId()Ljava/lang/String;

    move-result-object v5

    invoke-virtual {v2, v4, v5}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/String;)V

    .line 262
    const-string v4, "channel_type"

    invoke-virtual {v1}, Lcom/onesignal/outcomes/domain/OSCachedUniqueOutcome;->getChannel()Lcom/onesignal/influence/domain/OSInfluenceChannel;

    move-result-object v1

    invoke-virtual {v1}, Lcom/onesignal/influence/domain/OSInfluenceChannel;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v2, v4, v1}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/String;)V

    .line 263
    const-string v1, "name"

    invoke-virtual {v2, v1, v0}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/String;)V

    .line 265
    iget-object v1, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->dbHelper:Lcom/onesignal/OneSignalDb;

    const-string v4, "cached_unique_outcome"

    invoke-interface {v1, v4, v3, v2}, Lcom/onesignal/OneSignalDb;->insert(Ljava/lang/String;Ljava/lang/String;Landroid/content/ContentValues;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_2

    .line 268
    :cond_2
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
