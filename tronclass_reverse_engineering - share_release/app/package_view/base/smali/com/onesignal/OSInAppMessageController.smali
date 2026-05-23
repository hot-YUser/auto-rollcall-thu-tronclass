.class Lcom/onesignal/OSInAppMessageController;
.super Lcom/onesignal/OSBackgroundManager;
.source "OSInAppMessageController.java"

# interfaces
.implements Lcom/onesignal/OSDynamicTriggerController$OSDynamicTriggerControllerObserver;
.implements Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;


# static fields
.field public static final IN_APP_MESSAGES_JSON_KEY:Ljava/lang/String; = "in_app_messages"

.field private static final LIQUID_TAG_SCRIPT:Ljava/lang/String; = "\n\n<script>\n    setPlayerTags(%s);\n</script>"

.field private static final LOCK:Ljava/lang/Object;

.field private static final OS_IAM_DB_ACCESS:Ljava/lang/String; = "OS_IAM_DB_ACCESS"

.field private static PREFERRED_VARIANT_ORDER:Ljava/util/ArrayList;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/ArrayList<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field


# instance fields
.field private final clickedClickIds:Ljava/util/Set;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field

.field private currentPrompt:Lcom/onesignal/OSInAppMessagePrompt;

.field private final dismissedMessages:Ljava/util/Set;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field

.field private final impressionedMessages:Ljava/util/Set;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field

.field private inAppMessageLifecycleHandler:Lcom/onesignal/OSInAppMessageLifecycleHandler;

.field private inAppMessageRepository:Lcom/onesignal/OSInAppMessageRepository;

.field private inAppMessageShowing:Z

.field private inAppMessagingEnabled:Z

.field private final languageContext:Lcom/onesignal/language/LanguageContext;

.field lastTimeInAppDismissed:Ljava/util/Date;

.field private final logger:Lcom/onesignal/OSLogger;

.field private final messageDisplayQueue:Ljava/util/ArrayList;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/ArrayList<",
            "Lcom/onesignal/OSInAppMessageInternal;",
            ">;"
        }
    .end annotation
.end field

.field private messages:Ljava/util/ArrayList;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/ArrayList<",
            "Lcom/onesignal/OSInAppMessageInternal;",
            ">;"
        }
    .end annotation
.end field

.field private pendingMessageContent:Lcom/onesignal/OSInAppMessageContent;

.field private redisplayedInAppMessages:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Lcom/onesignal/OSInAppMessageInternal;",
            ">;"
        }
    .end annotation
.end field

.field private systemConditionController:Lcom/onesignal/OSSystemConditionController;

.field private final taskController:Lcom/onesignal/OSTaskController;

.field triggerController:Lcom/onesignal/OSTriggerController;

.field private userTagsString:Ljava/lang/String;

.field private final viewedPageIds:Ljava/util/Set;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field

.field private waitForTags:Z


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 29
    new-instance v0, Ljava/lang/Object;

    invoke-direct {v0}, Ljava/lang/Object;-><init>()V

    sput-object v0, Lcom/onesignal/OSInAppMessageController;->LOCK:Ljava/lang/Object;

    .line 36
    new-instance v0, Lcom/onesignal/OSInAppMessageController$1;

    invoke-direct {v0}, Lcom/onesignal/OSInAppMessageController$1;-><init>()V

    sput-object v0, Lcom/onesignal/OSInAppMessageController;->PREFERRED_VARIANT_ORDER:Ljava/util/ArrayList;

    return-void
.end method

.method protected constructor <init>(Lcom/onesignal/OneSignalDbHelper;Lcom/onesignal/OSTaskController;Lcom/onesignal/OSLogger;Lcom/onesignal/OSSharedPreferences;Lcom/onesignal/language/LanguageContext;)V
    .locals 4

    .line 94
    invoke-direct {p0}, Lcom/onesignal/OSBackgroundManager;-><init>()V

    const/4 v0, 0x0

    .line 75
    iput-object v0, p0, Lcom/onesignal/OSInAppMessageController;->redisplayedInAppMessages:Ljava/util/List;

    .line 78
    iput-object v0, p0, Lcom/onesignal/OSInAppMessageController;->currentPrompt:Lcom/onesignal/OSInAppMessagePrompt;

    const/4 v1, 0x1

    .line 79
    iput-boolean v1, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessagingEnabled:Z

    const/4 v1, 0x0

    .line 80
    iput-boolean v1, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageShowing:Z

    .line 82
    const-string v2, ""

    iput-object v2, p0, Lcom/onesignal/OSInAppMessageController;->userTagsString:Ljava/lang/String;

    .line 85
    iput-object v0, p0, Lcom/onesignal/OSInAppMessageController;->pendingMessageContent:Lcom/onesignal/OSInAppMessageContent;

    .line 88
    iput-boolean v1, p0, Lcom/onesignal/OSInAppMessageController;->waitForTags:Z

    .line 90
    iput-object v0, p0, Lcom/onesignal/OSInAppMessageController;->lastTimeInAppDismissed:Ljava/util/Date;

    .line 95
    iput-object p2, p0, Lcom/onesignal/OSInAppMessageController;->taskController:Lcom/onesignal/OSTaskController;

    .line 96
    new-instance p2, Ljava/util/ArrayList;

    invoke-direct {p2}, Ljava/util/ArrayList;-><init>()V

    iput-object p2, p0, Lcom/onesignal/OSInAppMessageController;->messages:Ljava/util/ArrayList;

    .line 97
    invoke-static {}, Lcom/onesignal/OSUtils;->newConcurrentSet()Ljava/util/Set;

    move-result-object p2

    iput-object p2, p0, Lcom/onesignal/OSInAppMessageController;->dismissedMessages:Ljava/util/Set;

    .line 98
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    iput-object v0, p0, Lcom/onesignal/OSInAppMessageController;->messageDisplayQueue:Ljava/util/ArrayList;

    .line 99
    invoke-static {}, Lcom/onesignal/OSUtils;->newConcurrentSet()Ljava/util/Set;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/OSInAppMessageController;->impressionedMessages:Ljava/util/Set;

    .line 100
    invoke-static {}, Lcom/onesignal/OSUtils;->newConcurrentSet()Ljava/util/Set;

    move-result-object v1

    iput-object v1, p0, Lcom/onesignal/OSInAppMessageController;->viewedPageIds:Ljava/util/Set;

    .line 101
    invoke-static {}, Lcom/onesignal/OSUtils;->newConcurrentSet()Ljava/util/Set;

    move-result-object v2

    iput-object v2, p0, Lcom/onesignal/OSInAppMessageController;->clickedClickIds:Ljava/util/Set;

    .line 102
    new-instance v3, Lcom/onesignal/OSTriggerController;

    invoke-direct {v3, p0}, Lcom/onesignal/OSTriggerController;-><init>(Lcom/onesignal/OSDynamicTriggerController$OSDynamicTriggerControllerObserver;)V

    iput-object v3, p0, Lcom/onesignal/OSInAppMessageController;->triggerController:Lcom/onesignal/OSTriggerController;

    .line 103
    new-instance v3, Lcom/onesignal/OSSystemConditionController;

    invoke-direct {v3, p0}, Lcom/onesignal/OSSystemConditionController;-><init>(Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;)V

    iput-object v3, p0, Lcom/onesignal/OSInAppMessageController;->systemConditionController:Lcom/onesignal/OSSystemConditionController;

    .line 104
    iput-object p5, p0, Lcom/onesignal/OSInAppMessageController;->languageContext:Lcom/onesignal/language/LanguageContext;

    .line 105
    iput-object p3, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    .line 107
    invoke-virtual {p0, p1, p3, p4}, Lcom/onesignal/OSInAppMessageController;->getInAppMessageRepository(Lcom/onesignal/OneSignalDbHelper;Lcom/onesignal/OSLogger;Lcom/onesignal/OSSharedPreferences;)Lcom/onesignal/OSInAppMessageRepository;

    move-result-object p1

    iput-object p1, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageRepository:Lcom/onesignal/OSInAppMessageRepository;

    .line 108
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageRepository;->getDismissedMessagesId()Ljava/util/Set;

    move-result-object p1

    if-eqz p1, :cond_0

    .line 110
    invoke-interface {p2, p1}, Ljava/util/Set;->addAll(Ljava/util/Collection;)Z

    .line 112
    :cond_0
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageRepository:Lcom/onesignal/OSInAppMessageRepository;

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageRepository;->getImpressionesMessagesId()Ljava/util/Set;

    move-result-object p1

    if-eqz p1, :cond_1

    .line 114
    invoke-interface {v0, p1}, Ljava/util/Set;->addAll(Ljava/util/Collection;)Z

    .line 116
    :cond_1
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageRepository:Lcom/onesignal/OSInAppMessageRepository;

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageRepository;->getViewPageImpressionedIds()Ljava/util/Set;

    move-result-object p1

    if-eqz p1, :cond_2

    .line 118
    invoke-interface {v1, p1}, Ljava/util/Set;->addAll(Ljava/util/Collection;)Z

    .line 120
    :cond_2
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageRepository:Lcom/onesignal/OSInAppMessageRepository;

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageRepository;->getClickedMessagesId()Ljava/util/Set;

    move-result-object p1

    if-eqz p1, :cond_3

    .line 122
    invoke-interface {v2, p1}, Ljava/util/Set;->addAll(Ljava/util/Collection;)Z

    .line 124
    :cond_3
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageRepository:Lcom/onesignal/OSInAppMessageRepository;

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageRepository;->getLastTimeInAppDismissed()Ljava/util/Date;

    move-result-object p1

    if-eqz p1, :cond_4

    .line 126
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageController;->lastTimeInAppDismissed:Ljava/util/Date;

    .line 129
    :cond_4
    invoke-virtual {p0}, Lcom/onesignal/OSInAppMessageController;->initRedisplayData()V

    return-void
.end method

.method static synthetic access$000()Ljava/lang/Object;
    .locals 1

    .line 27
    sget-object v0, Lcom/onesignal/OSInAppMessageController;->LOCK:Ljava/lang/Object;

    return-object v0
.end method

.method static synthetic access$100(Lcom/onesignal/OSInAppMessageController;)Ljava/util/List;
    .locals 0

    .line 27
    iget-object p0, p0, Lcom/onesignal/OSInAppMessageController;->redisplayedInAppMessages:Ljava/util/List;

    return-object p0
.end method

.method static synthetic access$1000(Lcom/onesignal/OSInAppMessageController;Lcom/onesignal/OSInAppMessageInternal;Ljava/util/List;)V
    .locals 0

    .line 27
    invoke-direct {p0, p1, p2}, Lcom/onesignal/OSInAppMessageController;->showMultiplePrompts(Lcom/onesignal/OSInAppMessageInternal;Ljava/util/List;)V

    return-void
.end method

.method static synthetic access$102(Lcom/onesignal/OSInAppMessageController;Ljava/util/List;)Ljava/util/List;
    .locals 0

    .line 27
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageController;->redisplayedInAppMessages:Ljava/util/List;

    return-object p1
.end method

.method static synthetic access$1100(Lcom/onesignal/OSInAppMessageController;)Ljava/util/Set;
    .locals 0

    .line 27
    iget-object p0, p0, Lcom/onesignal/OSInAppMessageController;->viewedPageIds:Ljava/util/Set;

    return-object p0
.end method

.method static synthetic access$1200(Lcom/onesignal/OSInAppMessageController;)Ljava/util/Set;
    .locals 0

    .line 27
    iget-object p0, p0, Lcom/onesignal/OSInAppMessageController;->clickedClickIds:Ljava/util/Set;

    return-object p0
.end method

.method static synthetic access$1300(Lcom/onesignal/OSInAppMessageController;)Z
    .locals 0

    .line 27
    iget-boolean p0, p0, Lcom/onesignal/OSInAppMessageController;->waitForTags:Z

    return p0
.end method

.method static synthetic access$1302(Lcom/onesignal/OSInAppMessageController;Z)Z
    .locals 0

    .line 27
    iput-boolean p1, p0, Lcom/onesignal/OSInAppMessageController;->waitForTags:Z

    return p1
.end method

.method static synthetic access$1402(Lcom/onesignal/OSInAppMessageController;Ljava/lang/String;)Ljava/lang/String;
    .locals 0

    .line 27
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageController;->userTagsString:Ljava/lang/String;

    return-object p1
.end method

.method static synthetic access$1500(Lcom/onesignal/OSInAppMessageController;)Lcom/onesignal/OSInAppMessageContent;
    .locals 0

    .line 27
    iget-object p0, p0, Lcom/onesignal/OSInAppMessageController;->pendingMessageContent:Lcom/onesignal/OSInAppMessageContent;

    return-object p0
.end method

.method static synthetic access$1502(Lcom/onesignal/OSInAppMessageController;Lcom/onesignal/OSInAppMessageContent;)Lcom/onesignal/OSInAppMessageContent;
    .locals 0

    .line 27
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageController;->pendingMessageContent:Lcom/onesignal/OSInAppMessageContent;

    return-object p1
.end method

.method static synthetic access$1600(Lcom/onesignal/OSInAppMessageController;Lorg/json/JSONObject;Lcom/onesignal/OSInAppMessageInternal;)Lcom/onesignal/OSInAppMessageContent;
    .locals 0

    .line 27
    invoke-direct {p0, p1, p2}, Lcom/onesignal/OSInAppMessageController;->parseMessageContentData(Lorg/json/JSONObject;Lcom/onesignal/OSInAppMessageInternal;)Lcom/onesignal/OSInAppMessageContent;

    move-result-object p0

    return-object p0
.end method

.method static synthetic access$1702(Lcom/onesignal/OSInAppMessageController;Z)Z
    .locals 0

    .line 27
    iput-boolean p1, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageShowing:Z

    return p1
.end method

.method static synthetic access$1800(Lcom/onesignal/OSInAppMessageController;Lcom/onesignal/OSInAppMessageInternal;)V
    .locals 0

    .line 27
    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessageController;->queueMessageForDisplay(Lcom/onesignal/OSInAppMessageInternal;)V

    return-void
.end method

.method static synthetic access$1900(Lcom/onesignal/OSInAppMessageController;Lcom/onesignal/OSInAppMessageInternal;)V
    .locals 0

    .line 27
    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessageController;->dismissCurrentMessage(Lcom/onesignal/OSInAppMessageInternal;)V

    return-void
.end method

.method static synthetic access$200(Lcom/onesignal/OSInAppMessageController;)Lcom/onesignal/OSInAppMessageRepository;
    .locals 0

    .line 27
    iget-object p0, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageRepository:Lcom/onesignal/OSInAppMessageRepository;

    return-object p0
.end method

.method static synthetic access$2000(Lcom/onesignal/OSInAppMessageController;Ljava/util/Collection;)V
    .locals 0

    .line 27
    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessageController;->checkRedisplayMessagesAndEvaluate(Ljava/util/Collection;)V

    return-void
.end method

.method static synthetic access$300(Lcom/onesignal/OSInAppMessageController;)Lcom/onesignal/OSLogger;
    .locals 0

    .line 27
    iget-object p0, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    return-object p0
.end method

.method static synthetic access$400(Lcom/onesignal/OSInAppMessageController;)V
    .locals 0

    .line 27
    invoke-direct {p0}, Lcom/onesignal/OSInAppMessageController;->resetRedisplayMessagesBySession()V

    return-void
.end method

.method static synthetic access$500(Lcom/onesignal/OSInAppMessageController;Lorg/json/JSONArray;)V
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 27
    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessageController;->processInAppMessageJson(Lorg/json/JSONArray;)V

    return-void
.end method

.method static synthetic access$600(Lcom/onesignal/OSInAppMessageController;)V
    .locals 0

    .line 27
    invoke-direct {p0}, Lcom/onesignal/OSInAppMessageController;->evaluateInAppMessages()V

    return-void
.end method

.method static synthetic access$700(Lcom/onesignal/OSInAppMessageController;)Ljava/util/Set;
    .locals 0

    .line 27
    iget-object p0, p0, Lcom/onesignal/OSInAppMessageController;->impressionedMessages:Ljava/util/Set;

    return-object p0
.end method

.method static synthetic access$802(Lcom/onesignal/OSInAppMessageController;Lcom/onesignal/OSInAppMessagePrompt;)Lcom/onesignal/OSInAppMessagePrompt;
    .locals 0

    .line 27
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageController;->currentPrompt:Lcom/onesignal/OSInAppMessagePrompt;

    return-object p1
.end method

.method static synthetic access$900(Lcom/onesignal/OSInAppMessageController;Lcom/onesignal/OSInAppMessageInternal;Ljava/util/List;)V
    .locals 0

    .line 27
    invoke-direct {p0, p1, p2}, Lcom/onesignal/OSInAppMessageController;->showAlertDialogMessage(Lcom/onesignal/OSInAppMessageInternal;Ljava/util/List;)V

    return-void
.end method

.method private attemptToShowInAppMessage()V
    .locals 5

    const-string v0, "In app message is currently showing or there are no IAMs left in the queue! isInAppMessageShowing: "

    const-string v1, "displayFirstIAMOnQueue: "

    .line 638
    iget-object v2, p0, Lcom/onesignal/OSInAppMessageController;->messageDisplayQueue:Ljava/util/ArrayList;

    monitor-enter v2

    .line 640
    :try_start_0
    iget-object v3, p0, Lcom/onesignal/OSInAppMessageController;->systemConditionController:Lcom/onesignal/OSSystemConditionController;

    invoke-virtual {v3}, Lcom/onesignal/OSSystemConditionController;->systemConditionsAvailable()Z

    move-result v3

    if-nez v3, :cond_0

    .line 641
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "In app message not showing due to system condition not correct"

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->warning(Ljava/lang/String;)V

    .line 642
    monitor-exit v2

    return-void

    .line 645
    :cond_0
    iget-object v3, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance v4, Ljava/lang/StringBuilder;

    invoke-direct {v4, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController;->messageDisplayQueue:Ljava/util/ArrayList;

    invoke-virtual {v4, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v3, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 647
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController;->messageDisplayQueue:Ljava/util/ArrayList;

    invoke-virtual {v1}, Ljava/util/ArrayList;->size()I

    move-result v1

    if-lez v1, :cond_1

    invoke-virtual {p0}, Lcom/onesignal/OSInAppMessageController;->isInAppMessageShowing()Z

    move-result v1

    if-nez v1, :cond_1

    .line 648
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "No IAM showing currently, showing first item in the queue!"

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 649
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->messageDisplayQueue:Ljava/util/ArrayList;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Ljava/util/ArrayList;->get(I)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/onesignal/OSInAppMessageInternal;

    invoke-direct {p0, v0}, Lcom/onesignal/OSInAppMessageController;->displayMessage(Lcom/onesignal/OSInAppMessageInternal;)V

    .line 650
    monitor-exit v2

    return-void

    .line 653
    :cond_1
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p0}, Lcom/onesignal/OSInAppMessageController;->isInAppMessageShowing()Z

    move-result v0

    invoke-virtual {v3, v0}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-interface {v1, v0}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 654
    monitor-exit v2

    return-void

    :catchall_0
    move-exception v0

    monitor-exit v2
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v0
.end method

.method private beginProcessingPrompts(Lcom/onesignal/OSInAppMessageInternal;Ljava/util/List;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/onesignal/OSInAppMessageInternal;",
            "Ljava/util/List<",
            "Lcom/onesignal/OSInAppMessagePrompt;",
            ">;)V"
        }
    .end annotation

    .line 409
    invoke-interface {p2}, Ljava/util/List;->size()I

    move-result v0

    if-lez v0, :cond_0

    .line 410
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "IAM showing prompts from IAM: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageInternal;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 412
    invoke-static {}, Lcom/onesignal/WebViewManager;->dismissCurrentInAppMessage()V

    .line 413
    invoke-direct {p0, p1, p2}, Lcom/onesignal/OSInAppMessageController;->showMultiplePrompts(Lcom/onesignal/OSInAppMessageInternal;Ljava/util/List;)V

    :cond_0
    return-void
.end method

.method private checkRedisplayMessagesAndEvaluate(Ljava/util/Collection;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Collection<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 975
    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessageController;->makeRedisplayMessagesAvailableWithTriggers(Ljava/util/Collection;)V

    .line 976
    invoke-direct {p0}, Lcom/onesignal/OSInAppMessageController;->evaluateInAppMessages()V

    return-void
.end method

.method private dismissCurrentMessage(Lcom/onesignal/OSInAppMessageInternal;)V
    .locals 6

    const-string v0, "In app message with id: "

    const-string v1, "In app message on queue available: "

    .line 707
    invoke-static {}, Lcom/onesignal/OneSignal;->getSessionManager()Lcom/onesignal/OSSessionManager;

    move-result-object v2

    invoke-virtual {v2}, Lcom/onesignal/OSSessionManager;->onDirectInfluenceFromIAMClickFinished()V

    .line 709
    invoke-direct {p0}, Lcom/onesignal/OSInAppMessageController;->shouldWaitForPromptsBeforeDismiss()Z

    move-result v2

    if-eqz v2, :cond_0

    .line 710
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "Stop evaluateMessageDisplayQueue because prompt is currently displayed"

    invoke-interface {p1, v0}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    return-void

    :cond_0
    const/4 v2, 0x0

    .line 714
    iput-boolean v2, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageShowing:Z

    .line 715
    iget-object v3, p0, Lcom/onesignal/OSInAppMessageController;->messageDisplayQueue:Ljava/util/ArrayList;

    monitor-enter v3

    if-eqz p1, :cond_2

    .line 716
    :try_start_0
    iget-boolean v4, p1, Lcom/onesignal/OSInAppMessageInternal;->isPreview:Z

    if-nez v4, :cond_2

    iget-object v4, p0, Lcom/onesignal/OSInAppMessageController;->messageDisplayQueue:Ljava/util/ArrayList;

    invoke-virtual {v4}, Ljava/util/ArrayList;->size()I

    move-result v4

    if-lez v4, :cond_2

    .line 717
    iget-object v4, p0, Lcom/onesignal/OSInAppMessageController;->messageDisplayQueue:Ljava/util/ArrayList;

    invoke-virtual {v4, p1}, Ljava/util/ArrayList;->contains(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_1

    .line 718
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "Message already removed from the queue!"

    invoke-interface {p1, v0}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 719
    monitor-exit v3

    return-void

    .line 721
    :cond_1
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController;->messageDisplayQueue:Ljava/util/ArrayList;

    invoke-virtual {p1, v2}, Ljava/util/ArrayList;->remove(I)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Lcom/onesignal/OSInAppMessageInternal;

    iget-object p1, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    .line 722
    iget-object v4, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance v5, Ljava/lang/StringBuilder;

    invoke-direct {v5, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v5, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, ", dismissed (removed) from the queue!"

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-interface {v4, p1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 727
    :cond_2
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController;->messageDisplayQueue:Ljava/util/ArrayList;

    invoke-virtual {p1}, Ljava/util/ArrayList;->size()I

    move-result p1

    if-lez p1, :cond_3

    .line 728
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController;->messageDisplayQueue:Ljava/util/ArrayList;

    invoke-virtual {v1, v2}, Ljava/util/ArrayList;->get(I)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lcom/onesignal/OSInAppMessageInternal;

    iget-object v1, v1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-interface {p1, v0}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 729
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController;->messageDisplayQueue:Ljava/util/ArrayList;

    invoke-virtual {p1, v2}, Ljava/util/ArrayList;->get(I)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Lcom/onesignal/OSInAppMessageInternal;

    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessageController;->displayMessage(Lcom/onesignal/OSInAppMessageInternal;)V

    goto :goto_0

    .line 731
    :cond_3
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "In app message dismissed evaluating messages"

    invoke-interface {p1, v0}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 732
    invoke-direct {p0}, Lcom/onesignal/OSInAppMessageController;->evaluateInAppMessages()V

    .line 734
    :goto_0
    monitor-exit v3

    return-void

    :catchall_0
    move-exception p1

    monitor-exit v3
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method

.method private displayMessage(Lcom/onesignal/OSInAppMessageInternal;)V
    .locals 5

    .line 798
    iget-boolean v0, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessagingEnabled:Z

    if-nez v0, :cond_0

    .line 799
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "In app messaging is currently paused, in app messages will not be shown!"

    invoke-interface {p1, v0}, Lcom/onesignal/OSLogger;->verbose(Ljava/lang/String;)V

    return-void

    :cond_0
    const/4 v0, 0x1

    .line 803
    iput-boolean v0, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageShowing:Z

    const/4 v0, 0x0

    .line 805
    invoke-direct {p0, p1, v0}, Lcom/onesignal/OSInAppMessageController;->getTagsForLiquidTemplating(Lcom/onesignal/OSInAppMessageInternal;Z)V

    .line 807
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageRepository:Lcom/onesignal/OSInAppMessageRepository;

    sget-object v1, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    iget-object v2, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessageController;->variantIdForMessage(Lcom/onesignal/OSInAppMessageInternal;)Ljava/lang/String;

    move-result-object v3

    new-instance v4, Lcom/onesignal/OSInAppMessageController$13;

    invoke-direct {v4, p0, p1}, Lcom/onesignal/OSInAppMessageController$13;-><init>(Lcom/onesignal/OSInAppMessageController;Lcom/onesignal/OSInAppMessageInternal;)V

    invoke-virtual {v0, v1, v2, v3, v4}, Lcom/onesignal/OSInAppMessageRepository;->getIAMData(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V

    return-void
.end method

.method private evaluateInAppMessages()V
    .locals 4

    .line 251
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Starting evaluateInAppMessages"

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 253
    invoke-virtual {p0}, Lcom/onesignal/OSInAppMessageController;->shouldRunTaskThroughQueue()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 254
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->taskController:Lcom/onesignal/OSTaskController;

    new-instance v1, Lcom/onesignal/OSInAppMessageController$4;

    invoke-direct {v1, p0}, Lcom/onesignal/OSInAppMessageController$4;-><init>(Lcom/onesignal/OSInAppMessageController;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void

    .line 264
    :cond_0
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->messages:Ljava/util/ArrayList;

    invoke-virtual {v0}, Ljava/util/ArrayList;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :cond_1
    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_2

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lcom/onesignal/OSInAppMessageInternal;

    .line 266
    iget-object v2, p0, Lcom/onesignal/OSInAppMessageController;->triggerController:Lcom/onesignal/OSTriggerController;

    invoke-virtual {v2, v1}, Lcom/onesignal/OSTriggerController;->evaluateMessageTriggers(Lcom/onesignal/OSInAppMessageInternal;)Z

    move-result v2

    if-eqz v2, :cond_1

    .line 267
    invoke-direct {p0, v1}, Lcom/onesignal/OSInAppMessageController;->setDataForRedisplay(Lcom/onesignal/OSInAppMessageInternal;)V

    .line 269
    iget-object v2, p0, Lcom/onesignal/OSInAppMessageController;->dismissedMessages:Ljava/util/Set;

    iget-object v3, v1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-interface {v2, v3}, Ljava/util/Set;->contains(Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_1

    invoke-virtual {v1}, Lcom/onesignal/OSInAppMessageInternal;->isFinished()Z

    move-result v2

    if-nez v2, :cond_1

    .line 270
    invoke-direct {p0, v1}, Lcom/onesignal/OSInAppMessageController;->queueMessageForDisplay(Lcom/onesignal/OSInAppMessageInternal;)V

    goto :goto_0

    :cond_2
    return-void
.end method

.method private fireClickAction(Lcom/onesignal/OSInAppMessageAction;)V
    .locals 2

    .line 496
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageAction;->getClickUrl()Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_1

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageAction;->getClickUrl()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/String;->isEmpty()Z

    move-result v0

    if-nez v0, :cond_1

    .line 497
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageAction;->getUrlTarget()Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    move-result-object v0

    sget-object v1, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;->BROWSER:Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    if-ne v0, v1, :cond_0

    .line 498
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageAction;->getClickUrl()Ljava/lang/String;

    move-result-object p1

    invoke-static {p1}, Lcom/onesignal/OSUtils;->openURLInBrowser(Ljava/lang/String;)V

    goto :goto_0

    .line 499
    :cond_0
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageAction;->getUrlTarget()Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    move-result-object v0

    sget-object v1, Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;->IN_APP_WEBVIEW:Lcom/onesignal/OSInAppMessageAction$OSInAppMessageActionUrlType;

    if-ne v0, v1, :cond_1

    .line 500
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageAction;->getClickUrl()Ljava/lang/String;

    move-result-object p1

    const/4 v0, 0x1

    invoke-static {p1, v0}, Lcom/onesignal/OneSignalChromeTab;->open(Ljava/lang/String;Z)Z

    :cond_1
    :goto_0
    return-void
.end method

.method private fireOutcomesForClick(Ljava/lang/String;Ljava/util/List;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/util/List<",
            "Lcom/onesignal/OSInAppMessageOutcome;",
            ">;)V"
        }
    .end annotation

    .line 463
    invoke-static {}, Lcom/onesignal/OneSignal;->getSessionManager()Lcom/onesignal/OSSessionManager;

    move-result-object v0

    invoke-virtual {v0, p1}, Lcom/onesignal/OSSessionManager;->onDirectInfluenceFromIAMClick(Ljava/lang/String;)V

    .line 464
    invoke-static {p2}, Lcom/onesignal/OneSignal;->sendClickActionOutcomes(Ljava/util/List;)V

    return-void
.end method

.method private firePublicClickHandler(Ljava/lang/String;Lcom/onesignal/OSInAppMessageAction;)V
    .locals 2

    .line 479
    sget-object v0, Lcom/onesignal/OneSignal;->inAppMessageClickHandler:Lcom/onesignal/OneSignal$OSInAppMessageClickHandler;

    if-nez v0, :cond_0

    return-void

    .line 482
    :cond_0
    sget-object v0, Lcom/onesignal/CallbackThreadManager;->Companion:Lcom/onesignal/CallbackThreadManager$Companion;

    new-instance v1, Lcom/onesignal/OSInAppMessageController$8;

    invoke-direct {v1, p0, p1, p2}, Lcom/onesignal/OSInAppMessageController$8;-><init>(Lcom/onesignal/OSInAppMessageController;Ljava/lang/String;Lcom/onesignal/OSInAppMessageAction;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/CallbackThreadManager$Companion;->runOnPreferred(Ljava/lang/Runnable;)V

    return-void
.end method

.method private fireRESTCallForClick(Lcom/onesignal/OSInAppMessageInternal;Lcom/onesignal/OSInAppMessageAction;)V
    .locals 10

    .line 537
    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessageController;->variantIdForMessage(Lcom/onesignal/OSInAppMessageInternal;)Ljava/lang/String;

    move-result-object v3

    if-nez v3, :cond_0

    return-void

    .line 541
    :cond_0
    invoke-virtual {p2}, Lcom/onesignal/OSInAppMessageAction;->getClickId()Ljava/lang/String;

    move-result-object v6

    .line 543
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageInternal;->getRedisplayStats()Lcom/onesignal/OSInAppMessageRedisplayStats;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageRedisplayStats;->isRedisplayEnabled()Z

    move-result v0

    if-eqz v0, :cond_1

    invoke-virtual {p1, v6}, Lcom/onesignal/OSInAppMessageInternal;->isClickAvailable(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    goto :goto_0

    .line 546
    :cond_1
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->clickedClickIds:Ljava/util/Set;

    invoke-interface {v0, v6}, Ljava/util/Set;->contains(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_2

    return-void

    .line 549
    :cond_2
    :goto_0
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->clickedClickIds:Ljava/util/Set;

    invoke-interface {v0, v6}, Ljava/util/Set;->add(Ljava/lang/Object;)Z

    .line 551
    invoke-virtual {p1, v6}, Lcom/onesignal/OSInAppMessageInternal;->addClickId(Ljava/lang/String;)V

    .line 553
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageRepository:Lcom/onesignal/OSInAppMessageRepository;

    sget-object v1, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    invoke-static {}, Lcom/onesignal/OneSignal;->getUserId()Ljava/lang/String;

    move-result-object v2

    new-instance v4, Lcom/onesignal/OSUtils;

    invoke-direct {v4}, Lcom/onesignal/OSUtils;-><init>()V

    invoke-virtual {v4}, Lcom/onesignal/OSUtils;->getDeviceType()I

    move-result v4

    iget-object v5, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    .line 554
    invoke-virtual {p2}, Lcom/onesignal/OSInAppMessageAction;->isFirstClick()Z

    move-result v7

    iget-object v8, p0, Lcom/onesignal/OSInAppMessageController;->clickedClickIds:Ljava/util/Set;

    new-instance v9, Lcom/onesignal/OSInAppMessageController$10;

    invoke-direct {v9, p0, v6, p1}, Lcom/onesignal/OSInAppMessageController$10;-><init>(Lcom/onesignal/OSInAppMessageController;Ljava/lang/String;Lcom/onesignal/OSInAppMessageInternal;)V

    .line 553
    invoke-virtual/range {v0 .. v9}, Lcom/onesignal/OSInAppMessageRepository;->sendIAMClick(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;ZLjava/util/Set;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V

    return-void
.end method

.method private fireRESTCallForPageChange(Lcom/onesignal/OSInAppMessageInternal;Lcom/onesignal/OSInAppMessagePage;)V
    .locals 9

    .line 505
    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessageController;->variantIdForMessage(Lcom/onesignal/OSInAppMessageInternal;)Ljava/lang/String;

    move-result-object v3

    if-nez v3, :cond_0

    return-void

    .line 509
    :cond_0
    invoke-virtual {p2}, Lcom/onesignal/OSInAppMessagePage;->getPageId()Ljava/lang/String;

    move-result-object v6

    .line 511
    new-instance p2, Ljava/lang/StringBuilder;

    invoke-direct {p2}, Ljava/lang/StringBuilder;-><init>()V

    iget-object v0, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    .line 514
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->viewedPageIds:Ljava/util/Set;

    invoke-interface {v0, p2}, Ljava/util/Set;->contains(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 515
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v0, "Already sent page impression for id: "

    invoke-direct {p2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-interface {p1, p2}, Lcom/onesignal/OSLogger;->verbose(Ljava/lang/String;)V

    return-void

    .line 519
    :cond_1
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->viewedPageIds:Ljava/util/Set;

    invoke-interface {v0, p2}, Ljava/util/Set;->add(Ljava/lang/Object;)Z

    .line 521
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageRepository:Lcom/onesignal/OSInAppMessageRepository;

    sget-object v1, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    invoke-static {}, Lcom/onesignal/OneSignal;->getUserId()Ljava/lang/String;

    move-result-object v2

    new-instance v4, Lcom/onesignal/OSUtils;

    invoke-direct {v4}, Lcom/onesignal/OSUtils;-><init>()V

    invoke-virtual {v4}, Lcom/onesignal/OSUtils;->getDeviceType()I

    move-result v4

    iget-object v5, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    iget-object v7, p0, Lcom/onesignal/OSInAppMessageController;->viewedPageIds:Ljava/util/Set;

    new-instance v8, Lcom/onesignal/OSInAppMessageController$9;

    invoke-direct {v8, p0, p2}, Lcom/onesignal/OSInAppMessageController$9;-><init>(Lcom/onesignal/OSInAppMessageController;Ljava/lang/String;)V

    invoke-virtual/range {v0 .. v8}, Lcom/onesignal/OSInAppMessageRepository;->sendIAMPageImpression(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;Ljava/util/Set;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V

    return-void
.end method

.method private fireTagCallForClick(Lcom/onesignal/OSInAppMessageAction;)V
    .locals 1

    .line 468
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageAction;->getTags()Lcom/onesignal/OSInAppMessageTag;

    move-result-object v0

    if-eqz v0, :cond_1

    .line 469
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageAction;->getTags()Lcom/onesignal/OSInAppMessageTag;

    move-result-object p1

    .line 471
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageTag;->getTagsToAdd()Lorg/json/JSONObject;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 472
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageTag;->getTagsToAdd()Lorg/json/JSONObject;

    move-result-object v0

    invoke-static {v0}, Lcom/onesignal/OneSignal;->sendTags(Lorg/json/JSONObject;)V

    .line 473
    :cond_0
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageTag;->getTagsToRemove()Lorg/json/JSONArray;

    move-result-object v0

    if-eqz v0, :cond_1

    .line 474
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageTag;->getTagsToRemove()Lorg/json/JSONArray;

    move-result-object p1

    const/4 v0, 0x0

    invoke-static {p1, v0}, Lcom/onesignal/OneSignal;->deleteTags(Lorg/json/JSONArray;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V

    :cond_1
    return-void
.end method

.method private getTagsForLiquidTemplating(Lcom/onesignal/OSInAppMessageInternal;Z)V
    .locals 1

    const/4 v0, 0x0

    .line 768
    iput-boolean v0, p0, Lcom/onesignal/OSInAppMessageController;->waitForTags:Z

    if-nez p2, :cond_0

    .line 769
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageInternal;->getHasLiquid()Z

    move-result v0

    if-eqz v0, :cond_1

    :cond_0
    const/4 v0, 0x1

    .line 770
    iput-boolean v0, p0, Lcom/onesignal/OSInAppMessageController;->waitForTags:Z

    .line 771
    new-instance v0, Lcom/onesignal/OSInAppMessageController$12;

    invoke-direct {v0, p0, p2, p1}, Lcom/onesignal/OSInAppMessageController$12;-><init>(Lcom/onesignal/OSInAppMessageController;ZLcom/onesignal/OSInAppMessageInternal;)V

    invoke-static {v0}, Lcom/onesignal/OneSignal;->getTags(Lcom/onesignal/OneSignal$OSGetTagsHandler;)V

    :cond_1
    return-void
.end method

.method private hasMessageTriggerChanged(Lcom/onesignal/OSInAppMessageInternal;)Z
    .locals 3

    .line 611
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->triggerController:Lcom/onesignal/OSTriggerController;

    invoke-virtual {v0, p1}, Lcom/onesignal/OSTriggerController;->messageHasOnlyDynamicTriggers(Lcom/onesignal/OSInAppMessageInternal;)Z

    move-result v0

    const/4 v1, 0x1

    if-eqz v0, :cond_0

    .line 613
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageInternal;->isDisplayedInSession()Z

    move-result p1

    xor-int/2addr p1, v1

    return p1

    .line 616
    :cond_0
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageInternal;->isDisplayedInSession()Z

    move-result v0

    const/4 v2, 0x0

    if-nez v0, :cond_1

    iget-object v0, p1, Lcom/onesignal/OSInAppMessageInternal;->triggers:Ljava/util/ArrayList;

    invoke-virtual {v0}, Ljava/util/ArrayList;->isEmpty()Z

    move-result v0

    if-eqz v0, :cond_1

    move v0, v1

    goto :goto_0

    :cond_1
    move v0, v2

    .line 618
    :goto_0
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageInternal;->isTriggerChanged()Z

    move-result p1

    if-nez p1, :cond_3

    if-eqz v0, :cond_2

    goto :goto_1

    :cond_2
    move v1, v2

    :cond_3
    :goto_1
    return v1
.end method

.method private logInAppMessagePreviewActions(Lcom/onesignal/OSInAppMessageAction;)V
    .locals 3

    .line 399
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageAction;->getTags()Lcom/onesignal/OSInAppMessageTag;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 400
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Tags detected inside of the action click payload, ignoring because action came from IAM preview:: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageAction;->getTags()Lcom/onesignal/OSInAppMessageTag;

    move-result-object v2

    invoke-virtual {v2}, Lcom/onesignal/OSInAppMessageTag;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 402
    :cond_0
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageAction;->getOutcomes()Ljava/util/List;

    move-result-object v0

    invoke-interface {v0}, Ljava/util/List;->size()I

    move-result v0

    if-lez v0, :cond_1

    .line 403
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Outcomes detected inside of the action click payload, ignoring because action came from IAM preview: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageAction;->getOutcomes()Ljava/util/List;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-interface {v0, p1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    :cond_1
    return-void
.end method

.method private makeRedisplayMessagesAvailableWithTriggers(Ljava/util/Collection;)V
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Collection<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 965
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->messages:Ljava/util/ArrayList;

    invoke-virtual {v0}, Ljava/util/ArrayList;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :cond_0
    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lcom/onesignal/OSInAppMessageInternal;

    .line 966
    invoke-virtual {v1}, Lcom/onesignal/OSInAppMessageInternal;->isTriggerChanged()Z

    move-result v2

    if-nez v2, :cond_0

    iget-object v2, p0, Lcom/onesignal/OSInAppMessageController;->redisplayedInAppMessages:Ljava/util/List;

    invoke-interface {v2, v1}, Ljava/util/List;->contains(Ljava/lang/Object;)Z

    move-result v2

    if-eqz v2, :cond_0

    iget-object v2, p0, Lcom/onesignal/OSInAppMessageController;->triggerController:Lcom/onesignal/OSTriggerController;

    .line 967
    invoke-virtual {v2, v1, p1}, Lcom/onesignal/OSTriggerController;->isTriggerOnMessage(Lcom/onesignal/OSInAppMessageInternal;Ljava/util/Collection;)Z

    move-result v2

    if-eqz v2, :cond_0

    .line 968
    iget-object v2, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance v3, Ljava/lang/StringBuilder;

    const-string v4, "Trigger changed for message: "

    invoke-direct {v3, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1}, Lcom/onesignal/OSInAppMessageInternal;->toString()Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v3, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-interface {v2, v3}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    const/4 v2, 0x1

    .line 969
    invoke-virtual {v1, v2}, Lcom/onesignal/OSInAppMessageInternal;->setTriggerChanged(Z)V

    goto :goto_0

    :cond_1
    return-void
.end method

.method private parseMessageContentData(Lorg/json/JSONObject;Lcom/onesignal/OSInAppMessageInternal;)Lcom/onesignal/OSInAppMessageContent;
    .locals 3

    .line 792
    new-instance v0, Lcom/onesignal/OSInAppMessageContent;

    invoke-direct {v0, p1}, Lcom/onesignal/OSInAppMessageContent;-><init>(Lorg/json/JSONObject;)V

    .line 793
    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageContent;->getDisplayDuration()Ljava/lang/Double;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/Double;->doubleValue()D

    move-result-wide v1

    invoke-virtual {p2, v1, v2}, Lcom/onesignal/OSInAppMessageInternal;->setDisplayDuration(D)V

    return-object v0
.end method

.method private persistInAppMessage(Lcom/onesignal/OSInAppMessageInternal;)V
    .locals 4

    .line 738
    invoke-static {}, Lcom/onesignal/OneSignal;->getTime()Lcom/onesignal/OSTime;

    move-result-object v0

    invoke-interface {v0}, Lcom/onesignal/OSTime;->getCurrentTimeMillis()J

    move-result-wide v0

    const-wide/16 v2, 0x3e8

    div-long/2addr v0, v2

    .line 739
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageInternal;->getRedisplayStats()Lcom/onesignal/OSInAppMessageRedisplayStats;

    move-result-object v2

    invoke-virtual {v2, v0, v1}, Lcom/onesignal/OSInAppMessageRedisplayStats;->setLastDisplayTime(J)V

    .line 740
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageInternal;->getRedisplayStats()Lcom/onesignal/OSInAppMessageRedisplayStats;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageRedisplayStats;->incrementDisplayQuantity()V

    const/4 v0, 0x0

    .line 741
    invoke-virtual {p1, v0}, Lcom/onesignal/OSInAppMessageInternal;->setTriggerChanged(Z)V

    const/4 v0, 0x1

    .line 742
    invoke-virtual {p1, v0}, Lcom/onesignal/OSInAppMessageInternal;->setDisplayedInSession(Z)V

    .line 744
    new-instance v0, Lcom/onesignal/OSInAppMessageController$11;

    invoke-direct {v0, p0, p1}, Lcom/onesignal/OSInAppMessageController$11;-><init>(Lcom/onesignal/OSInAppMessageController;Lcom/onesignal/OSInAppMessageInternal;)V

    .line 753
    const-string v1, "OS_IAM_DB_ACCESS"

    invoke-virtual {p0, v0, v1}, Lcom/onesignal/OSInAppMessageController;->runRunnableOnThread(Ljava/lang/Runnable;Ljava/lang/String;)V

    .line 757
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->redisplayedInAppMessages:Ljava/util/List;

    invoke-interface {v0, p1}, Ljava/util/List;->indexOf(Ljava/lang/Object;)I

    move-result v0

    const/4 v1, -0x1

    if-eq v0, v1, :cond_0

    .line 759
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController;->redisplayedInAppMessages:Ljava/util/List;

    invoke-interface {v1, v0, p1}, Ljava/util/List;->set(ILjava/lang/Object;)Ljava/lang/Object;

    goto :goto_0

    .line 761
    :cond_0
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->redisplayedInAppMessages:Ljava/util/List;

    invoke-interface {v0, p1}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 764
    :goto_0
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "persistInAppMessageForRedisplay: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageInternal;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v1, " with msg array data: "

    invoke-virtual {p1, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController;->redisplayedInAppMessages:Ljava/util/List;

    invoke-virtual {v1}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {p1, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-interface {v0, p1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    return-void
.end method

.method private processInAppMessageJson(Lorg/json/JSONArray;)V
    .locals 5
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 233
    sget-object v0, Lcom/onesignal/OSInAppMessageController;->LOCK:Ljava/lang/Object;

    monitor-enter v0

    .line 234
    :try_start_0
    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1}, Ljava/util/ArrayList;-><init>()V

    const/4 v2, 0x0

    .line 235
    :goto_0
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v3

    if-ge v2, v3, :cond_1

    .line 236
    invoke-virtual {p1, v2}, Lorg/json/JSONArray;->getJSONObject(I)Lorg/json/JSONObject;

    move-result-object v3

    .line 237
    new-instance v4, Lcom/onesignal/OSInAppMessageInternal;

    invoke-direct {v4, v3}, Lcom/onesignal/OSInAppMessageInternal;-><init>(Lorg/json/JSONObject;)V

    .line 239
    iget-object v3, v4, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    if-eqz v3, :cond_0

    .line 240
    invoke-virtual {v1, v4}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    :cond_0
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 244
    :cond_1
    iput-object v1, p0, Lcom/onesignal/OSInAppMessageController;->messages:Ljava/util/ArrayList;

    .line 245
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 247
    invoke-direct {p0}, Lcom/onesignal/OSInAppMessageController;->evaluateInAppMessages()V

    return-void

    :catchall_0
    move-exception p1

    .line 245
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method private queueMessageForDisplay(Lcom/onesignal/OSInAppMessageInternal;)V
    .locals 4

    const-string v0, "In app message with id: "

    .line 626
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController;->messageDisplayQueue:Ljava/util/ArrayList;

    monitor-enter v1

    .line 628
    :try_start_0
    iget-object v2, p0, Lcom/onesignal/OSInAppMessageController;->messageDisplayQueue:Ljava/util/ArrayList;

    invoke-virtual {v2, p1}, Ljava/util/ArrayList;->contains(Ljava/lang/Object;)Z

    move-result v2

    if-nez v2, :cond_0

    .line 629
    iget-object v2, p0, Lcom/onesignal/OSInAppMessageController;->messageDisplayQueue:Ljava/util/ArrayList;

    invoke-virtual {v2, p1}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    .line 630
    iget-object v2, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object p1, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-virtual {v3, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, ", added to the queue"

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-interface {v2, p1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 633
    :cond_0
    invoke-direct {p0}, Lcom/onesignal/OSInAppMessageController;->attemptToShowInAppMessage()V

    .line 634
    monitor-exit v1

    return-void

    :catchall_0
    move-exception p1

    monitor-exit v1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method

.method private resetRedisplayMessagesBySession()V
    .locals 3

    .line 227
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->redisplayedInAppMessages:Ljava/util/List;

    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lcom/onesignal/OSInAppMessageInternal;

    const/4 v2, 0x0

    .line 228
    invoke-virtual {v1, v2}, Lcom/onesignal/OSInAppMessageInternal;->setDisplayedInSession(Z)V

    goto :goto_0

    :cond_0
    return-void
.end method

.method private setDataForRedisplay(Lcom/onesignal/OSInAppMessageInternal;)V
    .locals 4

    .line 581
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->dismissedMessages:Ljava/util/Set;

    iget-object v1, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-interface {v0, v1}, Ljava/util/Set;->contains(Ljava/lang/Object;)Z

    move-result v0

    .line 582
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController;->redisplayedInAppMessages:Ljava/util/List;

    invoke-interface {v1, p1}, Ljava/util/List;->indexOf(Ljava/lang/Object;)I

    move-result v1

    if-eqz v0, :cond_0

    const/4 v0, -0x1

    if-eq v1, v0, :cond_0

    .line 585
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->redisplayedInAppMessages:Ljava/util/List;

    invoke-interface {v0, v1}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/onesignal/OSInAppMessageInternal;

    .line 586
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageInternal;->getRedisplayStats()Lcom/onesignal/OSInAppMessageRedisplayStats;

    move-result-object v1

    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageInternal;->getRedisplayStats()Lcom/onesignal/OSInAppMessageRedisplayStats;

    move-result-object v2

    invoke-virtual {v1, v2}, Lcom/onesignal/OSInAppMessageRedisplayStats;->setDisplayStats(Lcom/onesignal/OSInAppMessageRedisplayStats;)V

    .line 587
    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageInternal;->isDisplayedInSession()Z

    move-result v0

    invoke-virtual {p1, v0}, Lcom/onesignal/OSInAppMessageInternal;->setDisplayedInSession(Z)V

    .line 589
    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessageController;->hasMessageTriggerChanged(Lcom/onesignal/OSInAppMessageInternal;)Z

    move-result v0

    .line 590
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "setDataForRedisplay: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageInternal;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    const-string v3, " triggerHasChanged: "

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-interface {v1, v2}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    if-eqz v0, :cond_0

    .line 594
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageInternal;->getRedisplayStats()Lcom/onesignal/OSInAppMessageRedisplayStats;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageRedisplayStats;->isDelayTimeSatisfied()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 595
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageInternal;->getRedisplayStats()Lcom/onesignal/OSInAppMessageRedisplayStats;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageRedisplayStats;->shouldDisplayAgain()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 596
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "setDataForRedisplay message available for redisplay: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 598
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->dismissedMessages:Ljava/util/Set;

    iget-object v1, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-interface {v0, v1}, Ljava/util/Set;->remove(Ljava/lang/Object;)Z

    .line 599
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->impressionedMessages:Ljava/util/Set;

    iget-object v1, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-interface {v0, v1}, Ljava/util/Set;->remove(Ljava/lang/Object;)Z

    .line 602
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->viewedPageIds:Ljava/util/Set;

    invoke-interface {v0}, Ljava/util/Set;->clear()V

    .line 603
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageRepository:Lcom/onesignal/OSInAppMessageRepository;

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController;->viewedPageIds:Ljava/util/Set;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSInAppMessageRepository;->saveViewPageImpressionedIds(Ljava/util/Set;)V

    .line 604
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageInternal;->clearClickIds()V

    :cond_0
    return-void
.end method

.method private shouldWaitForPromptsBeforeDismiss()Z
    .locals 1

    .line 697
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->currentPrompt:Lcom/onesignal/OSInAppMessagePrompt;

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method private showAlertDialogMessage(Lcom/onesignal/OSInAppMessageInternal;Ljava/util/List;)V
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/onesignal/OSInAppMessageInternal;",
            "Ljava/util/List<",
            "Lcom/onesignal/OSInAppMessagePrompt;",
            ">;)V"
        }
    .end annotation

    .line 449
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    sget v1, Lcom/onesignal/R$string;->location_permission_missing_title:I

    invoke-virtual {v0, v1}, Landroid/content/Context;->getString(I)Ljava/lang/String;

    move-result-object v0

    .line 450
    sget-object v1, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    sget v2, Lcom/onesignal/R$string;->location_permission_missing_message:I

    invoke-virtual {v1, v2}, Landroid/content/Context;->getString(I)Ljava/lang/String;

    move-result-object v1

    .line 451
    new-instance v2, Landroid/app/AlertDialog$Builder;

    invoke-static {}, Lcom/onesignal/OneSignal;->getCurrentActivity()Landroid/app/Activity;

    move-result-object v3

    invoke-direct {v2, v3}, Landroid/app/AlertDialog$Builder;-><init>(Landroid/content/Context;)V

    .line 452
    invoke-virtual {v2, v0}, Landroid/app/AlertDialog$Builder;->setTitle(Ljava/lang/CharSequence;)Landroid/app/AlertDialog$Builder;

    move-result-object v0

    .line 453
    invoke-virtual {v0, v1}, Landroid/app/AlertDialog$Builder;->setMessage(Ljava/lang/CharSequence;)Landroid/app/AlertDialog$Builder;

    move-result-object v0

    new-instance v1, Lcom/onesignal/OSInAppMessageController$7;

    invoke-direct {v1, p0, p1, p2}, Lcom/onesignal/OSInAppMessageController$7;-><init>(Lcom/onesignal/OSInAppMessageController;Lcom/onesignal/OSInAppMessageInternal;Ljava/util/List;)V

    const p1, 0x104000a

    .line 454
    invoke-virtual {v0, p1, v1}, Landroid/app/AlertDialog$Builder;->setPositiveButton(ILandroid/content/DialogInterface$OnClickListener;)Landroid/app/AlertDialog$Builder;

    move-result-object p1

    .line 459
    invoke-virtual {p1}, Landroid/app/AlertDialog$Builder;->show()Landroid/app/AlertDialog;

    return-void
.end method

.method private showMultiplePrompts(Lcom/onesignal/OSInAppMessageInternal;Ljava/util/List;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/onesignal/OSInAppMessageInternal;",
            "Ljava/util/List<",
            "Lcom/onesignal/OSInAppMessagePrompt;",
            ">;)V"
        }
    .end annotation

    .line 418
    invoke-interface {p2}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :cond_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lcom/onesignal/OSInAppMessagePrompt;

    .line 420
    invoke-virtual {v1}, Lcom/onesignal/OSInAppMessagePrompt;->hasPrompted()Z

    move-result v2

    if-nez v2, :cond_0

    .line 421
    iput-object v1, p0, Lcom/onesignal/OSInAppMessageController;->currentPrompt:Lcom/onesignal/OSInAppMessagePrompt;

    .line 426
    :cond_1
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->currentPrompt:Lcom/onesignal/OSInAppMessagePrompt;

    if-eqz v0, :cond_2

    .line 427
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "IAM prompt to handle: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p0, Lcom/onesignal/OSInAppMessageController;->currentPrompt:Lcom/onesignal/OSInAppMessagePrompt;

    invoke-virtual {v2}, Lcom/onesignal/OSInAppMessagePrompt;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 428
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->currentPrompt:Lcom/onesignal/OSInAppMessagePrompt;

    const/4 v1, 0x1

    invoke-virtual {v0, v1}, Lcom/onesignal/OSInAppMessagePrompt;->setPrompted(Z)V

    .line 429
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->currentPrompt:Lcom/onesignal/OSInAppMessagePrompt;

    new-instance v1, Lcom/onesignal/OSInAppMessageController$6;

    invoke-direct {v1, p0, p1, p2}, Lcom/onesignal/OSInAppMessageController$6;-><init>(Lcom/onesignal/OSInAppMessageController;Lcom/onesignal/OSInAppMessageInternal;Ljava/util/List;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSInAppMessagePrompt;->handlePrompt(Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;)V

    goto :goto_0

    .line 443
    :cond_2
    iget-object p2, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "No IAM prompt to handle, dismiss message: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-interface {p2, v0}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 444
    invoke-virtual {p0, p1}, Lcom/onesignal/OSInAppMessageController;->messageWasDismissed(Lcom/onesignal/OSInAppMessageInternal;)V

    :goto_0
    return-void
.end method

.method private variantIdForMessage(Lcom/onesignal/OSInAppMessageInternal;)Ljava/lang/String;
    .locals 4

    .line 277
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->languageContext:Lcom/onesignal/language/LanguageContext;

    invoke-virtual {v0}, Lcom/onesignal/language/LanguageContext;->getLanguage()Ljava/lang/String;

    move-result-object v0

    .line 279
    sget-object v1, Lcom/onesignal/OSInAppMessageController;->PREFERRED_VARIANT_ORDER:Ljava/util/ArrayList;

    invoke-virtual {v1}, Ljava/util/ArrayList;->iterator()Ljava/util/Iterator;

    move-result-object v1

    :goto_0
    invoke-interface {v1}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_2

    invoke-interface {v1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/String;

    .line 280
    iget-object v3, p1, Lcom/onesignal/OSInAppMessageInternal;->variants:Ljava/util/HashMap;

    invoke-virtual {v3, v2}, Ljava/util/HashMap;->containsKey(Ljava/lang/Object;)Z

    move-result v3

    if-nez v3, :cond_0

    goto :goto_0

    .line 283
    :cond_0
    iget-object p1, p1, Lcom/onesignal/OSInAppMessageInternal;->variants:Ljava/util/HashMap;

    invoke-virtual {p1, v2}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/util/HashMap;

    .line 284
    invoke-virtual {p1, v0}, Ljava/util/HashMap;->containsKey(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    .line 285
    invoke-virtual {p1, v0}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/lang/String;

    return-object p1

    .line 286
    :cond_1
    const-string v0, "default"

    invoke-virtual {p1, v0}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/lang/String;

    return-object p1

    :cond_2
    const/4 p1, 0x0

    return-object p1
.end method


# virtual methods
.method addTriggers(Ljava/util/Map;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/Object;",
            ">;)V"
        }
    .end annotation

    .line 987
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Triggers added: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 988
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->triggerController:Lcom/onesignal/OSTriggerController;

    invoke-virtual {v0, p1}, Lcom/onesignal/OSTriggerController;->addTriggers(Ljava/util/Map;)V

    .line 990
    invoke-virtual {p0}, Lcom/onesignal/OSInAppMessageController;->shouldRunTaskThroughQueue()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 991
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->taskController:Lcom/onesignal/OSTaskController;

    new-instance v1, Lcom/onesignal/OSInAppMessageController$16;

    invoke-direct {v1, p0, p1}, Lcom/onesignal/OSInAppMessageController$16;-><init>(Lcom/onesignal/OSInAppMessageController;Ljava/util/Map;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskController;->addTaskToQueue(Ljava/lang/Runnable;)V

    goto :goto_0

    .line 999
    :cond_0
    invoke-interface {p1}, Ljava/util/Map;->keySet()Ljava/util/Set;

    move-result-object p1

    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessageController;->checkRedisplayMessagesAndEvaluate(Ljava/util/Collection;)V

    :goto_0
    return-void
.end method

.method cleanCachedInAppMessages()V
    .locals 2

    .line 901
    new-instance v0, Lcom/onesignal/OSInAppMessageController$15;

    invoke-direct {v0, p0}, Lcom/onesignal/OSInAppMessageController$15;-><init>(Lcom/onesignal/OSInAppMessageController;)V

    .line 910
    const-string v1, "OS_IAM_DB_ACCESS"

    invoke-virtual {p0, v0, v1}, Lcom/onesignal/OSInAppMessageController;->runRunnableOnThread(Ljava/lang/Runnable;Ljava/lang/String;)V

    return-void
.end method

.method displayPreviewMessage(Ljava/lang/String;)V
    .locals 4

    const/4 v0, 0x1

    .line 860
    iput-boolean v0, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageShowing:Z

    .line 862
    new-instance v1, Lcom/onesignal/OSInAppMessageInternal;

    invoke-direct {v1, v0}, Lcom/onesignal/OSInAppMessageInternal;-><init>(Z)V

    .line 863
    invoke-direct {p0, v1, v0}, Lcom/onesignal/OSInAppMessageController;->getTagsForLiquidTemplating(Lcom/onesignal/OSInAppMessageInternal;Z)V

    .line 865
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageRepository:Lcom/onesignal/OSInAppMessageRepository;

    sget-object v2, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    new-instance v3, Lcom/onesignal/OSInAppMessageController$14;

    invoke-direct {v3, p0, v1}, Lcom/onesignal/OSInAppMessageController$14;-><init>(Lcom/onesignal/OSInAppMessageController;Lcom/onesignal/OSInAppMessageInternal;)V

    invoke-virtual {v0, v2, p1, v3}, Lcom/onesignal/OSInAppMessageRepository;->getIAMPreviewData(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V

    return-void
.end method

.method executeRedisplayIAMDataDependantTask(Ljava/lang/Runnable;)V
    .locals 3

    .line 163
    sget-object v0, Lcom/onesignal/OSInAppMessageController;->LOCK:Ljava/lang/Object;

    monitor-enter v0

    .line 164
    :try_start_0
    invoke-virtual {p0}, Lcom/onesignal/OSInAppMessageController;->shouldRunTaskThroughQueue()Z

    move-result v1

    if-eqz v1, :cond_0

    .line 165
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    const-string v2, "Delaying task due to redisplay data not retrieved yet"

    invoke-interface {v1, v2}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 166
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController;->taskController:Lcom/onesignal/OSTaskController;

    invoke-virtual {v1, p1}, Lcom/onesignal/OSTaskController;->addTaskToQueue(Ljava/lang/Runnable;)V

    goto :goto_0

    .line 168
    :cond_0
    invoke-interface {p1}, Ljava/lang/Runnable;->run()V

    .line 170
    :goto_0
    monitor-exit v0

    return-void

    :catchall_0
    move-exception p1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method

.method getCurrentDisplayedInAppMessage()Lcom/onesignal/OSInAppMessageInternal;
    .locals 2

    .line 664
    iget-boolean v0, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageShowing:Z

    if-eqz v0, :cond_0

    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->messageDisplayQueue:Ljava/util/ArrayList;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Ljava/util/ArrayList;->get(I)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/onesignal/OSInAppMessageInternal;

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return-object v0
.end method

.method public getInAppMessageDisplayQueue()Ljava/util/ArrayList;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/ArrayList<",
            "Lcom/onesignal/OSInAppMessageInternal;",
            ">;"
        }
    .end annotation

    .line 1039
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->messageDisplayQueue:Ljava/util/ArrayList;

    return-object v0
.end method

.method getInAppMessageRepository(Lcom/onesignal/OneSignalDbHelper;Lcom/onesignal/OSLogger;Lcom/onesignal/OSSharedPreferences;)Lcom/onesignal/OSInAppMessageRepository;
    .locals 1

    .line 133
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageRepository:Lcom/onesignal/OSInAppMessageRepository;

    if-nez v0, :cond_0

    .line 134
    new-instance v0, Lcom/onesignal/OSInAppMessageRepository;

    invoke-direct {v0, p1, p2, p3}, Lcom/onesignal/OSInAppMessageRepository;-><init>(Lcom/onesignal/OneSignalDbHelper;Lcom/onesignal/OSLogger;Lcom/onesignal/OSSharedPreferences;)V

    iput-object v0, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageRepository:Lcom/onesignal/OSInAppMessageRepository;

    .line 136
    :cond_0
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageRepository:Lcom/onesignal/OSInAppMessageRepository;

    return-object p1
.end method

.method public getRedisplayedInAppMessages()Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lcom/onesignal/OSInAppMessageInternal;",
            ">;"
        }
    .end annotation

    .line 1045
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->redisplayedInAppMessages:Ljava/util/List;

    return-object v0
.end method

.method getTriggerValue(Ljava/lang/String;)Ljava/lang/Object;
    .locals 1

    .line 1034
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->triggerController:Lcom/onesignal/OSTriggerController;

    invoke-virtual {v0, p1}, Lcom/onesignal/OSTriggerController;->getTriggerValue(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object p1

    return-object p1
.end method

.method getTriggers()Ljava/util/Map;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/Object;",
            ">;"
        }
    .end annotation

    .line 1019
    new-instance v0, Ljava/util/HashMap;

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController;->triggerController:Lcom/onesignal/OSTriggerController;

    invoke-virtual {v1}, Lcom/onesignal/OSTriggerController;->getTriggers()Ljava/util/concurrent/ConcurrentHashMap;

    move-result-object v1

    invoke-direct {v0, v1}, Ljava/util/HashMap;-><init>(Ljava/util/Map;)V

    return-object v0
.end method

.method inAppMessagingEnabled()Z
    .locals 1

    .line 1023
    iget-boolean v0, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessagingEnabled:Z

    return v0
.end method

.method protected initRedisplayData()V
    .locals 2

    .line 140
    new-instance v0, Lcom/onesignal/OSInAppMessageController$2;

    invoke-direct {v0, p0}, Lcom/onesignal/OSInAppMessageController$2;-><init>(Lcom/onesignal/OSInAppMessageController;)V

    .line 152
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController;->taskController:Lcom/onesignal/OSTaskController;

    invoke-virtual {v1, v0}, Lcom/onesignal/OSTaskController;->addTaskToQueue(Ljava/lang/Runnable;)V

    .line 153
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->taskController:Lcom/onesignal/OSTaskController;

    invoke-virtual {v0}, Lcom/onesignal/OSTaskController;->startPendingTasks()V

    return-void
.end method

.method initWithCachedInAppMessages()V
    .locals 4

    .line 181
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->messages:Ljava/util/ArrayList;

    invoke-virtual {v0}, Ljava/util/ArrayList;->isEmpty()Z

    move-result v0

    if-nez v0, :cond_0

    .line 182
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "initWithCachedInAppMessages with already in memory messages: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p0, Lcom/onesignal/OSInAppMessageController;->messages:Ljava/util/ArrayList;

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    return-void

    .line 186
    :cond_0
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageRepository:Lcom/onesignal/OSInAppMessageRepository;

    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageRepository;->getSavedIAMs()Ljava/lang/String;

    move-result-object v0

    .line 187
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "initWithCachedInAppMessages: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-interface {v1, v2}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    if-eqz v0, :cond_3

    .line 189
    invoke-virtual {v0}, Ljava/lang/String;->isEmpty()Z

    move-result v1

    if-eqz v1, :cond_1

    goto :goto_2

    .line 192
    :cond_1
    sget-object v1, Lcom/onesignal/OSInAppMessageController;->LOCK:Ljava/lang/Object;

    monitor-enter v1

    .line 195
    :try_start_0
    iget-object v2, p0, Lcom/onesignal/OSInAppMessageController;->messages:Ljava/util/ArrayList;

    invoke-virtual {v2}, Ljava/util/ArrayList;->isEmpty()Z

    move-result v2
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    if-nez v2, :cond_2

    .line 196
    :try_start_1
    monitor-exit v1
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    return-void

    .line 198
    :cond_2
    :try_start_2
    new-instance v2, Lorg/json/JSONArray;

    invoke-direct {v2, v0}, Lorg/json/JSONArray;-><init>(Ljava/lang/String;)V

    invoke-direct {p0, v2}, Lcom/onesignal/OSInAppMessageController;->processInAppMessageJson(Lorg/json/JSONArray;)V
    :try_end_2
    .catch Lorg/json/JSONException; {:try_start_2 .. :try_end_2} :catch_0
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    goto :goto_0

    :catchall_0
    move-exception v0

    goto :goto_1

    :catch_0
    move-exception v0

    .line 200
    :try_start_3
    invoke-virtual {v0}, Lorg/json/JSONException;->printStackTrace()V

    .line 202
    :goto_0
    monitor-exit v1

    return-void

    :goto_1
    monitor-exit v1
    :try_end_3
    .catchall {:try_start_3 .. :try_end_3} :catchall_0

    throw v0

    :cond_3
    :goto_2
    return-void
.end method

.method isInAppMessageShowing()Z
    .locals 1

    .line 658
    iget-boolean v0, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageShowing:Z

    return v0
.end method

.method public messageDynamicTriggerCompleted(Ljava/lang/String;)V
    .locals 3

    .line 924
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "messageDynamicTriggerCompleted called with triggerId: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 925
    new-instance v0, Ljava/util/HashSet;

    invoke-direct {v0}, Ljava/util/HashSet;-><init>()V

    .line 926
    invoke-interface {v0, p1}, Ljava/util/Set;->add(Ljava/lang/Object;)Z

    .line 927
    invoke-direct {p0, v0}, Lcom/onesignal/OSInAppMessageController;->makeRedisplayMessagesAvailableWithTriggers(Ljava/util/Collection;)V

    return-void
.end method

.method public messageTriggerConditionChanged()V
    .locals 2

    .line 939
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "messageTriggerConditionChanged called"

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 943
    invoke-direct {p0}, Lcom/onesignal/OSInAppMessageController;->evaluateInAppMessages()V

    return-void
.end method

.method messageWasDismissed(Lcom/onesignal/OSInAppMessageInternal;)V
    .locals 1

    const/4 v0, 0x0

    .line 671
    invoke-virtual {p0, p1, v0}, Lcom/onesignal/OSInAppMessageController;->messageWasDismissed(Lcom/onesignal/OSInAppMessageInternal;Z)V

    return-void
.end method

.method messageWasDismissed(Lcom/onesignal/OSInAppMessageInternal;Z)V
    .locals 2

    .line 676
    iget-boolean v0, p1, Lcom/onesignal/OSInAppMessageInternal;->isPreview:Z

    if-nez v0, :cond_1

    .line 677
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->dismissedMessages:Ljava/util/Set;

    iget-object v1, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-interface {v0, v1}, Ljava/util/Set;->add(Ljava/lang/Object;)Z

    if-nez p2, :cond_0

    .line 680
    iget-object p2, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageRepository:Lcom/onesignal/OSInAppMessageRepository;

    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->dismissedMessages:Ljava/util/Set;

    invoke-virtual {p2, v0}, Lcom/onesignal/OSInAppMessageRepository;->saveDismissedMessagesId(Ljava/util/Set;)V

    .line 683
    new-instance p2, Ljava/util/Date;

    invoke-direct {p2}, Ljava/util/Date;-><init>()V

    iput-object p2, p0, Lcom/onesignal/OSInAppMessageController;->lastTimeInAppDismissed:Ljava/util/Date;

    .line 685
    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessageController;->persistInAppMessage(Lcom/onesignal/OSInAppMessageInternal;)V

    .line 687
    :cond_0
    iget-object p2, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "OSInAppMessageController messageWasDismissed dismissedMessages: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController;->dismissedMessages:Ljava/util/Set;

    invoke-virtual {v1}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-interface {p2, v0}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 690
    :cond_1
    invoke-direct {p0}, Lcom/onesignal/OSInAppMessageController;->shouldWaitForPromptsBeforeDismiss()Z

    move-result p2

    if-nez p2, :cond_2

    .line 691
    invoke-virtual {p0, p1}, Lcom/onesignal/OSInAppMessageController;->onMessageDidDismiss(Lcom/onesignal/OSInAppMessageInternal;)V

    .line 693
    :cond_2
    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessageController;->dismissCurrentMessage(Lcom/onesignal/OSInAppMessageInternal;)V

    return-void
.end method

.method onMessageActionOccurredOnMessage(Lcom/onesignal/OSInAppMessageInternal;Lorg/json/JSONObject;)V
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 335
    new-instance v0, Lcom/onesignal/OSInAppMessageAction;

    invoke-direct {v0, p2}, Lcom/onesignal/OSInAppMessageAction;-><init>(Lorg/json/JSONObject;)V

    .line 336
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageInternal;->takeActionAsUnique()Z

    move-result p2

    invoke-virtual {v0, p2}, Lcom/onesignal/OSInAppMessageAction;->setFirstClick(Z)V

    .line 338
    iget-object p2, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-direct {p0, p2, v0}, Lcom/onesignal/OSInAppMessageController;->firePublicClickHandler(Ljava/lang/String;Lcom/onesignal/OSInAppMessageAction;)V

    .line 339
    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageAction;->getPrompts()Ljava/util/List;

    move-result-object p2

    invoke-direct {p0, p1, p2}, Lcom/onesignal/OSInAppMessageController;->beginProcessingPrompts(Lcom/onesignal/OSInAppMessageInternal;Ljava/util/List;)V

    .line 340
    invoke-direct {p0, v0}, Lcom/onesignal/OSInAppMessageController;->fireClickAction(Lcom/onesignal/OSInAppMessageAction;)V

    .line 341
    invoke-direct {p0, p1, v0}, Lcom/onesignal/OSInAppMessageController;->fireRESTCallForClick(Lcom/onesignal/OSInAppMessageInternal;Lcom/onesignal/OSInAppMessageAction;)V

    .line 342
    invoke-direct {p0, v0}, Lcom/onesignal/OSInAppMessageController;->fireTagCallForClick(Lcom/onesignal/OSInAppMessageAction;)V

    .line 343
    iget-object p1, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageAction;->getOutcomes()Ljava/util/List;

    move-result-object p2

    invoke-direct {p0, p1, p2}, Lcom/onesignal/OSInAppMessageController;->fireOutcomesForClick(Ljava/lang/String;Ljava/util/List;)V

    return-void
.end method

.method onMessageActionOccurredOnPreview(Lcom/onesignal/OSInAppMessageInternal;Lorg/json/JSONObject;)V
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 347
    new-instance v0, Lcom/onesignal/OSInAppMessageAction;

    invoke-direct {v0, p2}, Lcom/onesignal/OSInAppMessageAction;-><init>(Lorg/json/JSONObject;)V

    .line 348
    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageInternal;->takeActionAsUnique()Z

    move-result p2

    invoke-virtual {v0, p2}, Lcom/onesignal/OSInAppMessageAction;->setFirstClick(Z)V

    .line 350
    iget-object p2, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-direct {p0, p2, v0}, Lcom/onesignal/OSInAppMessageController;->firePublicClickHandler(Ljava/lang/String;Lcom/onesignal/OSInAppMessageAction;)V

    .line 351
    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageAction;->getPrompts()Ljava/util/List;

    move-result-object p2

    invoke-direct {p0, p1, p2}, Lcom/onesignal/OSInAppMessageController;->beginProcessingPrompts(Lcom/onesignal/OSInAppMessageInternal;Ljava/util/List;)V

    .line 352
    invoke-direct {p0, v0}, Lcom/onesignal/OSInAppMessageController;->fireClickAction(Lcom/onesignal/OSInAppMessageAction;)V

    .line 353
    invoke-direct {p0, v0}, Lcom/onesignal/OSInAppMessageController;->logInAppMessagePreviewActions(Lcom/onesignal/OSInAppMessageAction;)V

    return-void
.end method

.method onMessageDidDismiss(Lcom/onesignal/OSInAppMessageInternal;)V
    .locals 1

    .line 389
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageLifecycleHandler:Lcom/onesignal/OSInAppMessageLifecycleHandler;

    if-nez v0, :cond_0

    .line 390
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "OSInAppMessageController onMessageDidDismiss: inAppMessageLifecycleHandler is null"

    invoke-interface {p1, v0}, Lcom/onesignal/OSLogger;->verbose(Ljava/lang/String;)V

    return-void

    .line 393
    :cond_0
    invoke-virtual {v0, p1}, Lcom/onesignal/OSInAppMessageLifecycleHandler;->onDidDismissInAppMessage(Lcom/onesignal/OSInAppMessage;)V

    return-void
.end method

.method onMessageDidDisplay(Lcom/onesignal/OSInAppMessageInternal;)V
    .locals 1

    .line 373
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageLifecycleHandler:Lcom/onesignal/OSInAppMessageLifecycleHandler;

    if-nez v0, :cond_0

    .line 374
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "OSInAppMessageController onMessageDidDisplay: inAppMessageLifecycleHandler is null"

    invoke-interface {p1, v0}, Lcom/onesignal/OSLogger;->verbose(Ljava/lang/String;)V

    return-void

    .line 377
    :cond_0
    invoke-virtual {v0, p1}, Lcom/onesignal/OSInAppMessageLifecycleHandler;->onDidDisplayInAppMessage(Lcom/onesignal/OSInAppMessage;)V

    return-void
.end method

.method onMessageWasShown(Lcom/onesignal/OSInAppMessageInternal;)V
    .locals 10

    .line 294
    invoke-virtual {p0, p1}, Lcom/onesignal/OSInAppMessageController;->onMessageDidDisplay(Lcom/onesignal/OSInAppMessageInternal;)V

    .line 296
    iget-boolean v0, p1, Lcom/onesignal/OSInAppMessageInternal;->isPreview:Z

    if-eqz v0, :cond_0

    return-void

    .line 300
    :cond_0
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->impressionedMessages:Ljava/util/Set;

    iget-object v1, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-interface {v0, v1}, Ljava/util/Set;->contains(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    return-void

    .line 304
    :cond_1
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->impressionedMessages:Ljava/util/Set;

    iget-object v1, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-interface {v0, v1}, Ljava/util/Set;->add(Ljava/lang/Object;)Z

    .line 306
    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessageController;->variantIdForMessage(Lcom/onesignal/OSInAppMessageInternal;)Ljava/lang/String;

    move-result-object v5

    if-nez v5, :cond_2

    return-void

    .line 310
    :cond_2
    iget-object v2, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageRepository:Lcom/onesignal/OSInAppMessageRepository;

    sget-object v3, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    invoke-static {}, Lcom/onesignal/OneSignal;->getUserId()Ljava/lang/String;

    move-result-object v4

    new-instance v0, Lcom/onesignal/OSUtils;

    invoke-direct {v0}, Lcom/onesignal/OSUtils;-><init>()V

    .line 311
    invoke-virtual {v0}, Lcom/onesignal/OSUtils;->getDeviceType()I

    move-result v6

    iget-object v7, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    iget-object v8, p0, Lcom/onesignal/OSInAppMessageController;->impressionedMessages:Ljava/util/Set;

    new-instance v9, Lcom/onesignal/OSInAppMessageController$5;

    invoke-direct {v9, p0, p1}, Lcom/onesignal/OSInAppMessageController$5;-><init>(Lcom/onesignal/OSInAppMessageController;Lcom/onesignal/OSInAppMessageInternal;)V

    .line 310
    invoke-virtual/range {v2 .. v9}, Lcom/onesignal/OSInAppMessageRepository;->sendIAMImpression(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/util/Set;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V

    return-void
.end method

.method onMessageWillDismiss(Lcom/onesignal/OSInAppMessageInternal;)V
    .locals 1

    .line 381
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageLifecycleHandler:Lcom/onesignal/OSInAppMessageLifecycleHandler;

    if-nez v0, :cond_0

    .line 382
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "OSInAppMessageController onMessageWillDismiss: inAppMessageLifecycleHandler is null"

    invoke-interface {p1, v0}, Lcom/onesignal/OSLogger;->verbose(Ljava/lang/String;)V

    return-void

    .line 385
    :cond_0
    invoke-virtual {v0, p1}, Lcom/onesignal/OSInAppMessageLifecycleHandler;->onWillDismissInAppMessage(Lcom/onesignal/OSInAppMessage;)V

    return-void
.end method

.method onMessageWillDisplay(Lcom/onesignal/OSInAppMessageInternal;)V
    .locals 1

    .line 365
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageLifecycleHandler:Lcom/onesignal/OSInAppMessageLifecycleHandler;

    if-nez v0, :cond_0

    .line 366
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "OSInAppMessageController onMessageWillDisplay: inAppMessageLifecycleHandler is null"

    invoke-interface {p1, v0}, Lcom/onesignal/OSLogger;->verbose(Ljava/lang/String;)V

    return-void

    .line 369
    :cond_0
    invoke-virtual {v0, p1}, Lcom/onesignal/OSInAppMessageLifecycleHandler;->onWillDisplayInAppMessage(Lcom/onesignal/OSInAppMessage;)V

    return-void
.end method

.method onPageChanged(Lcom/onesignal/OSInAppMessageInternal;Lorg/json/JSONObject;)V
    .locals 1

    .line 327
    new-instance v0, Lcom/onesignal/OSInAppMessagePage;

    invoke-direct {v0, p2}, Lcom/onesignal/OSInAppMessagePage;-><init>(Lorg/json/JSONObject;)V

    .line 328
    iget-boolean p2, p1, Lcom/onesignal/OSInAppMessageInternal;->isPreview:Z

    if-eqz p2, :cond_0

    return-void

    .line 331
    :cond_0
    invoke-direct {p0, p1, v0}, Lcom/onesignal/OSInAppMessageController;->fireRESTCallForPageChange(Lcom/onesignal/OSInAppMessageInternal;Lcom/onesignal/OSInAppMessagePage;)V

    return-void
.end method

.method receivedInAppMessageJson(Lorg/json/JSONArray;)V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 211
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageRepository:Lcom/onesignal/OSInAppMessageRepository;

    invoke-virtual {p1}, Lorg/json/JSONArray;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/onesignal/OSInAppMessageRepository;->saveIAMs(Ljava/lang/String;)V

    .line 213
    new-instance v0, Lcom/onesignal/OSInAppMessageController$3;

    invoke-direct {v0, p0, p1}, Lcom/onesignal/OSInAppMessageController$3;-><init>(Lcom/onesignal/OSInAppMessageController;Lorg/json/JSONArray;)V

    invoke-virtual {p0, v0}, Lcom/onesignal/OSInAppMessageController;->executeRedisplayIAMDataDependantTask(Ljava/lang/Runnable;)V

    return-void
.end method

.method removeTriggersForKeys(Ljava/util/Collection;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Collection<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 1003
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Triggers key to remove: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 1004
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->triggerController:Lcom/onesignal/OSTriggerController;

    invoke-virtual {v0, p1}, Lcom/onesignal/OSTriggerController;->removeTriggersForKeys(Ljava/util/Collection;)V

    .line 1006
    invoke-virtual {p0}, Lcom/onesignal/OSInAppMessageController;->shouldRunTaskThroughQueue()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 1007
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->taskController:Lcom/onesignal/OSTaskController;

    new-instance v1, Lcom/onesignal/OSInAppMessageController$17;

    invoke-direct {v1, p0, p1}, Lcom/onesignal/OSInAppMessageController$17;-><init>(Lcom/onesignal/OSInAppMessageController;Ljava/util/Collection;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskController;->addTaskToQueue(Ljava/lang/Runnable;)V

    goto :goto_0

    .line 1015
    :cond_0
    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessageController;->checkRedisplayMessagesAndEvaluate(Ljava/util/Collection;)V

    :goto_0
    return-void
.end method

.method resetSessionLaunchTime()V
    .locals 0

    .line 174
    invoke-static {}, Lcom/onesignal/OSDynamicTriggerController;->resetSessionLaunchTime()V

    return-void
.end method

.method setInAppMessageLifecycleHandler(Lcom/onesignal/OSInAppMessageLifecycleHandler;)V
    .locals 0

    .line 361
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessageLifecycleHandler:Lcom/onesignal/OSInAppMessageLifecycleHandler;

    return-void
.end method

.method setInAppMessagingEnabled(Z)V
    .locals 0

    .line 1027
    iput-boolean p1, p0, Lcom/onesignal/OSInAppMessageController;->inAppMessagingEnabled:Z

    if-eqz p1, :cond_0

    .line 1029
    invoke-direct {p0}, Lcom/onesignal/OSInAppMessageController;->evaluateInAppMessages()V

    :cond_0
    return-void
.end method

.method shouldRunTaskThroughQueue()Z
    .locals 2

    .line 157
    sget-object v0, Lcom/onesignal/OSInAppMessageController;->LOCK:Ljava/lang/Object;

    monitor-enter v0

    .line 158
    :try_start_0
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController;->redisplayedInAppMessages:Ljava/util/List;

    if-nez v1, :cond_0

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageController;->taskController:Lcom/onesignal/OSTaskController;

    invoke-virtual {v1}, Lcom/onesignal/OSTaskController;->shouldRunTaskThroughQueue()Z

    move-result v1

    if-eqz v1, :cond_0

    const/4 v1, 0x1

    goto :goto_0

    :cond_0
    const/4 v1, 0x0

    :goto_0
    monitor-exit v0

    return v1

    :catchall_0
    move-exception v1

    .line 159
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method

.method public systemConditionChanged()V
    .locals 0

    .line 954
    invoke-direct {p0}, Lcom/onesignal/OSInAppMessageController;->attemptToShowInAppMessage()V

    return-void
.end method

.method taggedHTMLString(Ljava/lang/String;)Ljava/lang/String;
    .locals 2

    .line 854
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageController;->userTagsString:Ljava/lang/String;

    .line 856
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    filled-new-array {v0}, [Ljava/lang/Object;

    move-result-object v0

    const-string v1, "\n\n<script>\n    setPlayerTags(%s);\n</script>"

    invoke-static {v1, v0}, Ljava/lang/String;->format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method
