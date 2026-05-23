.class public abstract Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;
.super Ljava/lang/Object;
.source "OSOutcomeEventsRepository.kt"

# interfaces
.implements Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000V\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0006\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0002\u0008\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\u0008\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\"\n\u0002\u0008\u0005\n\u0002\u0010\u0008\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0002\u0008\u0006\u0008 \u0018\u00002\u00020\u0001B\u001d\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007\u00a2\u0006\u0002\u0010\u0008J\u0018\u0010\r\u001a\u00020\u000e2\u0006\u0010\u000f\u001a\u00020\u00102\u0006\u0010\u0011\u001a\u00020\u0010H\u0016J$\u0010\u0012\u001a\u0008\u0012\u0004\u0012\u00020\u00140\u00132\u0006\u0010\u0015\u001a\u00020\u00102\u000c\u0010\u0016\u001a\u0008\u0012\u0004\u0012\u00020\u00140\u0013H\u0016J\u000e\u0010\u0017\u001a\u0008\u0012\u0004\u0012\u00020\u00180\u0013H\u0016J\u0010\u0010\u0019\u001a\n\u0012\u0004\u0012\u00020\u0010\u0018\u00010\u001aH\u0016J\u0010\u0010\u001b\u001a\u00020\u000e2\u0006\u0010\u001c\u001a\u00020\u0018H\u0016J(\u0010\u001d\u001a\u00020\u000e2\u0006\u0010\u001e\u001a\u00020\u00102\u0006\u0010\u001f\u001a\u00020 2\u0006\u0010!\u001a\u00020\u00182\u0006\u0010\"\u001a\u00020#H&J\u0010\u0010$\u001a\u00020\u000e2\u0006\u0010!\u001a\u00020\u0018H\u0016J\u0016\u0010%\u001a\u00020\u000e2\u000c\u0010&\u001a\u0008\u0012\u0004\u0012\u00020\u00100\u001aH\u0016J\u0010\u0010\'\u001a\u00020\u000e2\u0006\u0010(\u001a\u00020\u0018H\u0016R\u0014\u0010\u0002\u001a\u00020\u0003X\u0084\u0004\u00a2\u0006\u0008\n\u0000\u001a\u0004\u0008\t\u0010\nR\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u0011\u0010\u0006\u001a\u00020\u0007\u00a2\u0006\u0008\n\u0000\u001a\u0004\u0008\u000b\u0010\u000c\u00a8\u0006)"
    }
    d2 = {
        "Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;",
        "Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;",
        "logger",
        "Lcom/onesignal/OSLogger;",
        "outcomeEventsCache",
        "Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;",
        "outcomeEventsService",
        "Lcom/onesignal/outcomes/data/OutcomeEventsService;",
        "(Lcom/onesignal/OSLogger;Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;Lcom/onesignal/outcomes/data/OutcomeEventsService;)V",
        "getLogger",
        "()Lcom/onesignal/OSLogger;",
        "getOutcomeEventsService",
        "()Lcom/onesignal/outcomes/data/OutcomeEventsService;",
        "cleanCachedUniqueOutcomeEventNotifications",
        "",
        "notificationTableName",
        "",
        "notificationIdColumnName",
        "getNotCachedUniqueOutcome",
        "",
        "Lcom/onesignal/influence/domain/OSInfluence;",
        "name",
        "influences",
        "getSavedOutcomeEvents",
        "Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;",
        "getUnattributedUniqueOutcomeEventsSent",
        "",
        "removeEvent",
        "outcomeEvent",
        "requestMeasureOutcomeEvent",
        "appId",
        "deviceType",
        "",
        "event",
        "responseHandler",
        "Lcom/onesignal/OneSignalApiResponseHandler;",
        "saveOutcomeEvent",
        "saveUnattributedUniqueOutcomeEventsSent",
        "unattributedUniqueOutcomeEvents",
        "saveUniqueOutcomeNotifications",
        "eventParams",
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
.field private final logger:Lcom/onesignal/OSLogger;

.field private final outcomeEventsCache:Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;

.field private final outcomeEventsService:Lcom/onesignal/outcomes/data/OutcomeEventsService;


# direct methods
.method public constructor <init>(Lcom/onesignal/OSLogger;Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;Lcom/onesignal/outcomes/data/OutcomeEventsService;)V
    .locals 1

    const-string v0, "logger"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "outcomeEventsCache"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "outcomeEventsService"

    invoke-static {p3, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 9
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 10
    iput-object p1, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;->logger:Lcom/onesignal/OSLogger;

    .line 11
    iput-object p2, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;->outcomeEventsCache:Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;

    .line 12
    iput-object p3, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;->outcomeEventsService:Lcom/onesignal/outcomes/data/OutcomeEventsService;

    return-void
.end method


# virtual methods
.method public cleanCachedUniqueOutcomeEventNotifications(Ljava/lang/String;Ljava/lang/String;)V
    .locals 1

    const-string v0, "notificationTableName"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "notificationIdColumnName"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 48
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;->outcomeEventsCache:Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;

    invoke-virtual {v0, p1, p2}, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->cleanCachedUniqueOutcomeEventNotifications(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method protected final getLogger()Lcom/onesignal/OSLogger;
    .locals 1

    .line 10
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;->logger:Lcom/onesignal/OSLogger;

    return-object v0
.end method

.method public getNotCachedUniqueOutcome(Ljava/lang/String;Ljava/util/List;)Ljava/util/List;
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

    const-string v0, "name"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "influences"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 31
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;->outcomeEventsCache:Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;

    invoke-virtual {v0, p1, p2}, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->getNotCachedUniqueInfluencesForOutcome(Ljava/lang/String;Ljava/util/List;)Ljava/util/List;

    move-result-object p1

    .line 32
    iget-object p2, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "OneSignal getNotCachedUniqueOutcome influences: "

    invoke-static {v0, p1}, Lkotlin/jvm/internal/Intrinsics;->stringPlus(Ljava/lang/String;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    invoke-interface {p2, v0}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    return-object p1
.end method

.method public final getOutcomeEventsService()Lcom/onesignal/outcomes/data/OutcomeEventsService;
    .locals 1

    .line 12
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;->outcomeEventsService:Lcom/onesignal/outcomes/data/OutcomeEventsService;

    return-object v0
.end method

.method public getSavedOutcomeEvents()Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;",
            ">;"
        }
    .end annotation

    .line 16
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;->outcomeEventsCache:Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;

    invoke-virtual {v0}, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->getAllEventsToSend()Ljava/util/List;

    move-result-object v0

    return-object v0
.end method

.method public getUnattributedUniqueOutcomeEventsSent()Ljava/util/Set;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 37
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;->outcomeEventsCache:Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;

    invoke-virtual {v0}, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->getUnattributedUniqueOutcomeEventsSentByChannel()Ljava/util/Set;

    move-result-object v0

    .line 38
    iget-object v1, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;->logger:Lcom/onesignal/OSLogger;

    const-string v2, "OneSignal getUnattributedUniqueOutcomeEventsSentByChannel: "

    invoke-static {v2, v0}, Lkotlin/jvm/internal/Intrinsics;->stringPlus(Ljava/lang/String;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v2

    invoke-interface {v1, v2}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    return-object v0
.end method

.method public removeEvent(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V
    .locals 1

    const-string v0, "outcomeEvent"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 23
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;->outcomeEventsCache:Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;

    invoke-virtual {v0, p1}, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->deleteOldOutcomeEvent(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V

    return-void
.end method

.method public abstract requestMeasureOutcomeEvent(Ljava/lang/String;ILcom/onesignal/outcomes/domain/OSOutcomeEventParams;Lcom/onesignal/OneSignalApiResponseHandler;)V
.end method

.method public saveOutcomeEvent(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V
    .locals 1

    const-string v0, "event"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 19
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;->outcomeEventsCache:Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;

    invoke-virtual {v0, p1}, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->saveOutcomeEvent(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V

    return-void
.end method

.method public saveUnattributedUniqueOutcomeEventsSent(Ljava/util/Set;)V
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    const-string v0, "unattributedUniqueOutcomeEvents"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 43
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "OneSignal save unattributedUniqueOutcomeEvents: "

    invoke-static {v1, p1}, Lkotlin/jvm/internal/Intrinsics;->stringPlus(Ljava/lang/String;Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 44
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;->outcomeEventsCache:Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;

    invoke-virtual {v0, p1}, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->saveUnattributedUniqueOutcomeEventsSentByChannel(Ljava/util/Set;)V

    return-void
.end method

.method public saveUniqueOutcomeNotifications(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V
    .locals 1

    const-string v0, "eventParams"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 27
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;->outcomeEventsCache:Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;

    invoke-virtual {v0, p1}, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->saveUniqueOutcomeEventParams(Lcom/onesignal/outcomes/domain/OSOutcomeEventParams;)V

    return-void
.end method
