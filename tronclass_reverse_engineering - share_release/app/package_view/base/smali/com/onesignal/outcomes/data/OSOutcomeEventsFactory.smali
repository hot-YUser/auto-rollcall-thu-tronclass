.class public final Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;
.super Ljava/lang/Object;
.source "OSOutcomeEventsFactory.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u00008\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\u0003\u0018\u00002\u00020\u0001B)\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0008\u0010\u0006\u001a\u0004\u0018\u00010\u0007\u0012\u0008\u0010\u0008\u001a\u0004\u0018\u00010\t\u00a2\u0006\u0002\u0010\nJ\u0008\u0010\u000f\u001a\u00020\u0010H\u0002J\u0006\u0010\u0011\u001a\u00020\u000eJ\u0008\u0010\u0012\u001a\u00020\u000eH\u0002R\u000e\u0010\u0004\u001a\u00020\u0005X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u000e\u0010\u000b\u001a\u00020\u000cX\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u0010\u0010\r\u001a\u0004\u0018\u00010\u000eX\u0082\u000e\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u0013"
    }
    d2 = {
        "Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;",
        "",
        "logger",
        "Lcom/onesignal/OSLogger;",
        "apiClient",
        "Lcom/onesignal/OneSignalAPIClient;",
        "dbHelper",
        "Lcom/onesignal/OneSignalDb;",
        "preferences",
        "Lcom/onesignal/OSSharedPreferences;",
        "(Lcom/onesignal/OSLogger;Lcom/onesignal/OneSignalAPIClient;Lcom/onesignal/OneSignalDb;Lcom/onesignal/OSSharedPreferences;)V",
        "outcomeEventsCache",
        "Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;",
        "repository",
        "Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;",
        "createRepository",
        "Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;",
        "getRepository",
        "validateRepositoryVersion",
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
.field private final apiClient:Lcom/onesignal/OneSignalAPIClient;

.field private final logger:Lcom/onesignal/OSLogger;

.field private final outcomeEventsCache:Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;

.field private repository:Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;


# direct methods
.method public constructor <init>(Lcom/onesignal/OSLogger;Lcom/onesignal/OneSignalAPIClient;Lcom/onesignal/OneSignalDb;Lcom/onesignal/OSSharedPreferences;)V
    .locals 1

    const-string v0, "logger"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "apiClient"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 9
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->logger:Lcom/onesignal/OSLogger;

    iput-object p2, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->apiClient:Lcom/onesignal/OneSignalAPIClient;

    .line 10
    new-instance p2, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;

    invoke-static {p3}, Lkotlin/jvm/internal/Intrinsics;->checkNotNull(Ljava/lang/Object;)V

    invoke-static {p4}, Lkotlin/jvm/internal/Intrinsics;->checkNotNull(Ljava/lang/Object;)V

    invoke-direct {p2, p1, p3, p4}, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;-><init>(Lcom/onesignal/OSLogger;Lcom/onesignal/OneSignalDb;Lcom/onesignal/OSSharedPreferences;)V

    iput-object p2, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->outcomeEventsCache:Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;

    return-void
.end method

.method private final createRepository()Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;
    .locals 5

    .line 25
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->outcomeEventsCache:Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;

    invoke-virtual {v0}, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->isOutcomesV2ServiceEnabled()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 26
    new-instance v0, Lcom/onesignal/outcomes/data/OSOutcomeEventsV2Repository;

    iget-object v1, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->logger:Lcom/onesignal/OSLogger;

    iget-object v2, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->outcomeEventsCache:Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;

    new-instance v3, Lcom/onesignal/outcomes/data/OSOutcomeEventsV2Service;

    iget-object v4, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->apiClient:Lcom/onesignal/OneSignalAPIClient;

    invoke-direct {v3, v4}, Lcom/onesignal/outcomes/data/OSOutcomeEventsV2Service;-><init>(Lcom/onesignal/OneSignalAPIClient;)V

    check-cast v3, Lcom/onesignal/outcomes/data/OutcomeEventsService;

    invoke-direct {v0, v1, v2, v3}, Lcom/onesignal/outcomes/data/OSOutcomeEventsV2Repository;-><init>(Lcom/onesignal/OSLogger;Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;Lcom/onesignal/outcomes/data/OutcomeEventsService;)V

    check-cast v0, Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;

    goto :goto_0

    .line 28
    :cond_0
    new-instance v0, Lcom/onesignal/outcomes/data/OSOutcomeEventsV1Repository;

    iget-object v1, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->logger:Lcom/onesignal/OSLogger;

    iget-object v2, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->outcomeEventsCache:Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;

    new-instance v3, Lcom/onesignal/outcomes/data/OSOutcomeEventsV1Service;

    iget-object v4, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->apiClient:Lcom/onesignal/OneSignalAPIClient;

    invoke-direct {v3, v4}, Lcom/onesignal/outcomes/data/OSOutcomeEventsV1Service;-><init>(Lcom/onesignal/OneSignalAPIClient;)V

    check-cast v3, Lcom/onesignal/outcomes/data/OutcomeEventsService;

    invoke-direct {v0, v1, v2, v3}, Lcom/onesignal/outcomes/data/OSOutcomeEventsV1Repository;-><init>(Lcom/onesignal/OSLogger;Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;Lcom/onesignal/outcomes/data/OutcomeEventsService;)V

    check-cast v0, Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;

    :goto_0
    return-object v0
.end method

.method private final validateRepositoryVersion()Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;
    .locals 2

    .line 16
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->outcomeEventsCache:Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;

    invoke-virtual {v0}, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->isOutcomesV2ServiceEnabled()Z

    move-result v0

    if-nez v0, :cond_0

    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->repository:Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;

    instance-of v1, v0, Lcom/onesignal/outcomes/data/OSOutcomeEventsV1Repository;

    if-eqz v1, :cond_0

    .line 17
    invoke-static {v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNull(Ljava/lang/Object;)V

    return-object v0

    .line 19
    :cond_0
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->outcomeEventsCache:Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;

    invoke-virtual {v0}, Lcom/onesignal/outcomes/data/OSOutcomeEventsCache;->isOutcomesV2ServiceEnabled()Z

    move-result v0

    if-eqz v0, :cond_1

    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->repository:Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;

    instance-of v1, v0, Lcom/onesignal/outcomes/data/OSOutcomeEventsV2Repository;

    if-eqz v1, :cond_1

    .line 20
    invoke-static {v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNull(Ljava/lang/Object;)V

    return-object v0

    .line 22
    :cond_1
    invoke-direct {p0}, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->createRepository()Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;

    move-result-object v0

    check-cast v0, Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;

    return-object v0
.end method


# virtual methods
.method public final getRepository()Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;
    .locals 1

    .line 13
    iget-object v0, p0, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->repository:Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;

    if-eqz v0, :cond_0

    invoke-direct {p0}, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->validateRepositoryVersion()Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;

    move-result-object v0

    goto :goto_0

    :cond_0
    invoke-direct {p0}, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;->createRepository()Lcom/onesignal/outcomes/data/OSOutcomeEventsRepository;

    move-result-object v0

    check-cast v0, Lcom/onesignal/outcomes/domain/OSOutcomeEventsRepository;

    :goto_0
    return-object v0
.end method
