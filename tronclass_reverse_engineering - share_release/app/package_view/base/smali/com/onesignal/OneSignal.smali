.class public Lcom/onesignal/OneSignal;
.super Ljava/lang/Object;
.source "OneSignal.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/OneSignal$PromptActionResult;,
        Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;,
        Lcom/onesignal/OneSignal$OutcomeCallback;,
        Lcom/onesignal/OneSignal$IAPUpdateJob;,
        Lcom/onesignal/OneSignal$EntryStateListener;,
        Lcom/onesignal/OneSignal$PromptForPushNotificationPermissionResponseHandler;,
        Lcom/onesignal/OneSignal$PostNotificationResponseHandler;,
        Lcom/onesignal/OneSignal$EmailUpdateHandler;,
        Lcom/onesignal/OneSignal$EmailUpdateError;,
        Lcom/onesignal/OneSignal$EmailErrorType;,
        Lcom/onesignal/OneSignal$OSSMSUpdateHandler;,
        Lcom/onesignal/OneSignal$OSSMSUpdateError;,
        Lcom/onesignal/OneSignal$SMSErrorType;,
        Lcom/onesignal/OneSignal$OSInternalExternalUserIdUpdateCompletionHandler;,
        Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;,
        Lcom/onesignal/OneSignal$ExternalIdError;,
        Lcom/onesignal/OneSignal$ExternalIdErrorType;,
        Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;,
        Lcom/onesignal/OneSignal$OSLanguageError;,
        Lcom/onesignal/OneSignal$SendTagsError;,
        Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;,
        Lcom/onesignal/OneSignal$OSGetTagsHandler;,
        Lcom/onesignal/OneSignal$OSInAppMessageClickHandler;,
        Lcom/onesignal/OneSignal$OSNotificationOpenedHandler;,
        Lcom/onesignal/OneSignal$OSNotificationWillShowInForegroundHandler;,
        Lcom/onesignal/OneSignal$OSRemoteNotificationReceivedHandler;,
        Lcom/onesignal/OneSignal$AppEntryAction;,
        Lcom/onesignal/OneSignal$LOG_LEVEL;
    }
.end annotation


# static fields
.field static final MIN_ON_SESSION_TIME_MILLIS:J = 0x7530L

.field private static final VERSION:Ljava/lang/String; = "040810"

.field private static androidParamsRequestStarted:Z

.field private static apiClient:Lcom/onesignal/OneSignalAPIClient;

.field static appActivity:Ljava/lang/ref/WeakReference;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/lang/ref/WeakReference<",
            "Landroid/app/Activity;",
            ">;"
        }
    .end annotation
.end field

.field static appContext:Landroid/content/Context;

.field private static appEntryState:Lcom/onesignal/OneSignal$AppEntryAction;

.field static appId:Ljava/lang/String;

.field private static currentEmailSubscriptionState:Lcom/onesignal/OSEmailSubscriptionState;

.field private static currentPermissionState:Lcom/onesignal/OSPermissionState;

.field private static currentSMSSubscriptionState:Lcom/onesignal/OSSMSSubscriptionState;

.field private static currentSubscriptionState:Lcom/onesignal/OSSubscriptionState;

.field private static delayedInitParams:Lcom/onesignal/DelayedConsentInitializationParameters;

.field private static emailId:Ljava/lang/String;

.field private static emailLogoutHandler:Lcom/onesignal/OneSignal$EmailUpdateHandler;

.field private static emailSubscriptionStateChangesObserver:Lcom/onesignal/OSObservable;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lcom/onesignal/OSObservable<",
            "Lcom/onesignal/OSEmailSubscriptionObserver;",
            "Lcom/onesignal/OSEmailSubscriptionStateChanges;",
            ">;"
        }
    .end annotation
.end field

.field private static emailUpdateHandler:Lcom/onesignal/OneSignal$EmailUpdateHandler;

.field private static entryStateListeners:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Lcom/onesignal/OneSignal$EntryStateListener;",
            ">;"
        }
    .end annotation
.end field

.field private static focusTimeController:Lcom/onesignal/FocusTimeController;

.field private static getTagsCall:Z

.field static googleProjectNumber:Ljava/lang/String;

.field private static iapUpdateJob:Lcom/onesignal/OneSignal$IAPUpdateJob;

.field static inAppMessageClickHandler:Lcom/onesignal/OneSignal$OSInAppMessageClickHandler;

.field private static inAppMessageControllerFactory:Lcom/onesignal/OSInAppMessageControllerFactory;

.field private static inForeground:Z

.field private static initDone:Z

.field static languageContext:Lcom/onesignal/language/LanguageContext;

.field static lastEmailSubscriptionState:Lcom/onesignal/OSEmailSubscriptionState;

.field private static lastLocationPoint:Lcom/onesignal/LocationController$LocationPoint;

.field static lastPermissionState:Lcom/onesignal/OSPermissionState;

.field private static lastRegistrationId:Ljava/lang/String;

.field static lastSMSSubscriptionState:Lcom/onesignal/OSSMSSubscriptionState;

.field static lastSubscriptionState:Lcom/onesignal/OSSubscriptionState;

.field private static locationFired:Z

.field private static logCatLevel:Lcom/onesignal/OneSignal$LOG_LEVEL;

.field private static logger:Lcom/onesignal/OSLogger;

.field private static mPushRegistrator:Lcom/onesignal/PushRegistrator;

.field private static notificationDataController:Lcom/onesignal/OSNotificationDataController;

.field static notificationOpenedHandler:Lcom/onesignal/OneSignal$OSNotificationOpenedHandler;

.field static notificationWillShowInForegroundHandler:Lcom/onesignal/OneSignal$OSNotificationWillShowInForegroundHandler;

.field private static osUtils:Lcom/onesignal/OSUtils;

.field private static outcomeEventsController:Lcom/onesignal/OSOutcomeEventsController;

.field private static final outcomeEventsControllerSyncLock:Ljava/lang/Object;

.field private static outcomeEventsFactory:Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

.field private static final pendingGetTagsHandlers:Ljava/util/ArrayList;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/ArrayList<",
            "Lcom/onesignal/OneSignal$OSGetTagsHandler;",
            ">;"
        }
    .end annotation
.end field

.field private static permissionStateChangesObserver:Lcom/onesignal/OSObservable;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lcom/onesignal/OSObservable<",
            "Lcom/onesignal/OSPermissionObserver;",
            "Lcom/onesignal/OSPermissionStateChanges;",
            ">;"
        }
    .end annotation
.end field

.field private static postedOpenedNotifIds:Ljava/util/HashSet;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/HashSet<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field

.field private static preferences:Lcom/onesignal/OSSharedPreferences;

.field private static registerForPushFired:Z

.field static remoteNotificationReceivedHandler:Lcom/onesignal/OneSignal$OSRemoteNotificationReceivedHandler;

.field private static remoteParamController:Lcom/onesignal/OSRemoteParamController;

.field public static sdkType:Ljava/lang/String;

.field private static sessionListener:Lcom/onesignal/OSSessionManager$SessionListener;

.field private static sessionManager:Lcom/onesignal/OSSessionManager;

.field private static smsId:Ljava/lang/String;

.field private static smsLogoutHandler:Lcom/onesignal/OneSignal$OSSMSUpdateHandler;

.field private static smsSubscriptionStateChangesObserver:Lcom/onesignal/OSObservable;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lcom/onesignal/OSObservable<",
            "Lcom/onesignal/OSSMSSubscriptionObserver;",
            "Lcom/onesignal/OSSMSSubscriptionStateChanges;",
            ">;"
        }
    .end annotation
.end field

.field private static smsUpdateHandler:Lcom/onesignal/OneSignal$OSSMSUpdateHandler;

.field private static subscribableStatus:I

.field private static subscriptionStateChangesObserver:Lcom/onesignal/OSObservable;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lcom/onesignal/OSObservable<",
            "Lcom/onesignal/OSSubscriptionObserver;",
            "Lcom/onesignal/OSSubscriptionStateChanges;",
            ">;"
        }
    .end annotation
.end field

.field private static taskController:Lcom/onesignal/OSTaskController;

.field private static taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

.field private static time:Lcom/onesignal/OSTime;

.field private static trackAmazonPurchase:Lcom/onesignal/TrackAmazonPurchase;

.field private static trackFirebaseAnalytics:Lcom/onesignal/TrackFirebaseAnalytics;

.field private static trackGooglePurchase:Lcom/onesignal/TrackGooglePurchase;

.field private static trackerFactory:Lcom/onesignal/influence/data/OSTrackerFactory;

.field private static unprocessedOpenedNotifs:Ljava/util/Collection;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Collection<",
            "Lorg/json/JSONArray;",
            ">;"
        }
    .end annotation
.end field

.field private static userId:Ljava/lang/String;

.field private static visualLogLevel:Lcom/onesignal/OneSignal$LOG_LEVEL;

.field private static waitingToPostStateSync:Z


# direct methods
.method static constructor <clinit>()V
    .locals 4

    .line 365
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    sput-object v0, Lcom/onesignal/OneSignal;->entryStateListeners:Ljava/util/List;

    .line 394
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->NONE:Lcom/onesignal/OneSignal$LOG_LEVEL;

    sput-object v0, Lcom/onesignal/OneSignal;->visualLogLevel:Lcom/onesignal/OneSignal$LOG_LEVEL;

    .line 395
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->WARN:Lcom/onesignal/OneSignal$LOG_LEVEL;

    sput-object v0, Lcom/onesignal/OneSignal;->logCatLevel:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const/4 v0, 0x0

    .line 397
    sput-object v0, Lcom/onesignal/OneSignal;->userId:Ljava/lang/String;

    .line 398
    sput-object v0, Lcom/onesignal/OneSignal;->emailId:Ljava/lang/String;

    .line 399
    sput-object v0, Lcom/onesignal/OneSignal;->smsId:Ljava/lang/String;

    const v1, 0x7fffffff

    .line 400
    sput v1, Lcom/onesignal/OneSignal;->subscribableStatus:I

    .line 403
    sput-object v0, Lcom/onesignal/OneSignal;->languageContext:Lcom/onesignal/language/LanguageContext;

    .line 426
    sget-object v0, Lcom/onesignal/OneSignal$AppEntryAction;->APP_CLOSE:Lcom/onesignal/OneSignal$AppEntryAction;

    sput-object v0, Lcom/onesignal/OneSignal;->appEntryState:Lcom/onesignal/OneSignal$AppEntryAction;

    .line 440
    new-instance v0, Lcom/onesignal/OSLogWrapper;

    invoke-direct {v0}, Lcom/onesignal/OSLogWrapper;-><init>()V

    sput-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    .line 446
    new-instance v0, Lcom/onesignal/OneSignal$1;

    invoke-direct {v0}, Lcom/onesignal/OneSignal$1;-><init>()V

    sput-object v0, Lcom/onesignal/OneSignal;->sessionListener:Lcom/onesignal/OSSessionManager$SessionListener;

    .line 457
    new-instance v0, Lcom/onesignal/OSInAppMessageControllerFactory;

    invoke-direct {v0}, Lcom/onesignal/OSInAppMessageControllerFactory;-><init>()V

    sput-object v0, Lcom/onesignal/OneSignal;->inAppMessageControllerFactory:Lcom/onesignal/OSInAppMessageControllerFactory;

    .line 461
    new-instance v0, Lcom/onesignal/OSTimeImpl;

    invoke-direct {v0}, Lcom/onesignal/OSTimeImpl;-><init>()V

    sput-object v0, Lcom/onesignal/OneSignal;->time:Lcom/onesignal/OSTime;

    .line 462
    new-instance v0, Lcom/onesignal/OSRemoteParamController;

    invoke-direct {v0}, Lcom/onesignal/OSRemoteParamController;-><init>()V

    sput-object v0, Lcom/onesignal/OneSignal;->remoteParamController:Lcom/onesignal/OSRemoteParamController;

    .line 463
    new-instance v0, Lcom/onesignal/OSTaskController;

    sget-object v1, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    invoke-direct {v0, v1}, Lcom/onesignal/OSTaskController;-><init>(Lcom/onesignal/OSLogger;)V

    sput-object v0, Lcom/onesignal/OneSignal;->taskController:Lcom/onesignal/OSTaskController;

    .line 464
    new-instance v0, Lcom/onesignal/OSTaskRemoteController;

    sget-object v1, Lcom/onesignal/OneSignal;->remoteParamController:Lcom/onesignal/OSRemoteParamController;

    sget-object v2, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    invoke-direct {v0, v1, v2}, Lcom/onesignal/OSTaskRemoteController;-><init>(Lcom/onesignal/OSRemoteParamController;Lcom/onesignal/OSLogger;)V

    sput-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    .line 465
    new-instance v0, Lcom/onesignal/OneSignalRestClientWrapper;

    invoke-direct {v0}, Lcom/onesignal/OneSignalRestClientWrapper;-><init>()V

    sput-object v0, Lcom/onesignal/OneSignal;->apiClient:Lcom/onesignal/OneSignalAPIClient;

    .line 466
    new-instance v0, Lcom/onesignal/OSSharedPreferencesWrapper;

    invoke-direct {v0}, Lcom/onesignal/OSSharedPreferencesWrapper;-><init>()V

    sput-object v0, Lcom/onesignal/OneSignal;->preferences:Lcom/onesignal/OSSharedPreferences;

    .line 470
    new-instance v0, Lcom/onesignal/influence/data/OSTrackerFactory;

    sget-object v1, Lcom/onesignal/OneSignal;->preferences:Lcom/onesignal/OSSharedPreferences;

    sget-object v2, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    sget-object v3, Lcom/onesignal/OneSignal;->time:Lcom/onesignal/OSTime;

    invoke-direct {v0, v1, v2, v3}, Lcom/onesignal/influence/data/OSTrackerFactory;-><init>(Lcom/onesignal/OSSharedPreferences;Lcom/onesignal/OSLogger;Lcom/onesignal/OSTime;)V

    sput-object v0, Lcom/onesignal/OneSignal;->trackerFactory:Lcom/onesignal/influence/data/OSTrackerFactory;

    .line 471
    new-instance v0, Lcom/onesignal/OSSessionManager;

    sget-object v1, Lcom/onesignal/OneSignal;->sessionListener:Lcom/onesignal/OSSessionManager$SessionListener;

    sget-object v2, Lcom/onesignal/OneSignal;->trackerFactory:Lcom/onesignal/influence/data/OSTrackerFactory;

    sget-object v3, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    invoke-direct {v0, v1, v2, v3}, Lcom/onesignal/OSSessionManager;-><init>(Lcom/onesignal/OSSessionManager$SessionListener;Lcom/onesignal/influence/data/OSTrackerFactory;Lcom/onesignal/OSLogger;)V

    sput-object v0, Lcom/onesignal/OneSignal;->sessionManager:Lcom/onesignal/OSSessionManager;

    .line 475
    new-instance v0, Lcom/onesignal/OneSignal$2;

    invoke-direct {v0}, Lcom/onesignal/OneSignal$2;-><init>()V

    sput-object v0, Lcom/onesignal/OneSignal;->outcomeEventsControllerSyncLock:Ljava/lang/Object;

    .line 493
    const-string v0, "native"

    sput-object v0, Lcom/onesignal/OneSignal;->sdkType:Ljava/lang/String;

    .line 496
    new-instance v0, Lcom/onesignal/OSUtils;

    invoke-direct {v0}, Lcom/onesignal/OSUtils;-><init>()V

    sput-object v0, Lcom/onesignal/OneSignal;->osUtils:Lcom/onesignal/OSUtils;

    .line 502
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    sput-object v0, Lcom/onesignal/OneSignal;->unprocessedOpenedNotifs:Ljava/util/Collection;

    .line 503
    new-instance v0, Ljava/util/HashSet;

    invoke-direct {v0}, Ljava/util/HashSet;-><init>()V

    sput-object v0, Lcom/onesignal/OneSignal;->postedOpenedNotifIds:Ljava/util/HashSet;

    .line 504
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    sput-object v0, Lcom/onesignal/OneSignal;->pendingGetTagsHandlers:Ljava/util/ArrayList;

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 87
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V
    .locals 1

    const/4 v0, 0x0

    .line 1289
    invoke-static {p0, p1, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    return-void
.end method

.method static Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V
    .locals 3

    .line 1296
    sget-object v0, Lcom/onesignal/OneSignal;->logCatLevel:Lcom/onesignal/OneSignal$LOG_LEVEL;

    invoke-virtual {p0, v0}, Lcom/onesignal/OneSignal$LOG_LEVEL;->compareTo(Ljava/lang/Enum;)I

    move-result v0

    const-string v1, "OneSignal"

    const/4 v2, 0x1

    if-ge v0, v2, :cond_5

    .line 1297
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->VERBOSE:Lcom/onesignal/OneSignal$LOG_LEVEL;

    if-ne p0, v0, :cond_0

    .line 1298
    invoke-static {v1, p1, p2}, Landroid/util/Log;->v(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    goto :goto_0

    .line 1299
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    if-ne p0, v0, :cond_1

    .line 1300
    invoke-static {v1, p1, p2}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    goto :goto_0

    .line 1301
    :cond_1
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->INFO:Lcom/onesignal/OneSignal$LOG_LEVEL;

    if-ne p0, v0, :cond_2

    .line 1302
    invoke-static {v1, p1, p2}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    goto :goto_0

    .line 1303
    :cond_2
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->WARN:Lcom/onesignal/OneSignal$LOG_LEVEL;

    if-ne p0, v0, :cond_3

    .line 1304
    invoke-static {v1, p1, p2}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    goto :goto_0

    .line 1305
    :cond_3
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    if-eq p0, v0, :cond_4

    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->FATAL:Lcom/onesignal/OneSignal$LOG_LEVEL;

    if-ne p0, v0, :cond_5

    .line 1306
    :cond_4
    invoke-static {v1, p1, p2}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    .line 1309
    :cond_5
    :goto_0
    sget-object v0, Lcom/onesignal/OneSignal;->visualLogLevel:Lcom/onesignal/OneSignal$LOG_LEVEL;

    invoke-virtual {p0, v0}, Lcom/onesignal/OneSignal$LOG_LEVEL;->compareTo(Ljava/lang/Enum;)I

    move-result v0

    if-ge v0, v2, :cond_7

    invoke-static {}, Lcom/onesignal/OneSignal;->getCurrentActivity()Landroid/app/Activity;

    move-result-object v0

    if-eqz v0, :cond_7

    .line 1311
    :try_start_0
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, "\n"

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    if-eqz p2, :cond_6

    .line 1313
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p2}, Ljava/lang/Throwable;->getMessage()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    .line 1314
    new-instance v0, Ljava/io/StringWriter;

    invoke-direct {v0}, Ljava/io/StringWriter;-><init>()V

    .line 1315
    new-instance v2, Ljava/io/PrintWriter;

    invoke-direct {v2, v0}, Ljava/io/PrintWriter;-><init>(Ljava/io/Writer;)V

    .line 1316
    invoke-virtual {p2, v2}, Ljava/lang/Throwable;->printStackTrace(Ljava/io/PrintWriter;)V

    .line 1317
    new-instance p2, Ljava/lang/StringBuilder;

    invoke-direct {p2}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {v0}, Ljava/io/StringWriter;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    .line 1321
    :cond_6
    new-instance p2, Lcom/onesignal/OneSignal$8;

    invoke-direct {p2, p0, p1}, Lcom/onesignal/OneSignal$8;-><init>(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    invoke-static {p2}, Lcom/onesignal/OSUtils;->runOnMainUIThread(Ljava/lang/Runnable;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_1

    :catchall_0
    move-exception p0

    .line 1332
    const-string p1, "Error showing logging message."

    invoke-static {v1, p1, p0}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    :cond_7
    :goto_1
    return-void
.end method

.method static synthetic access$000()Lcom/onesignal/OSOutcomeEventsController;
    .locals 1

    .line 87
    sget-object v0, Lcom/onesignal/OneSignal;->outcomeEventsController:Lcom/onesignal/OSOutcomeEventsController;

    return-object v0
.end method

.method static synthetic access$100()Lcom/onesignal/OSLogger;
    .locals 1

    .line 87
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    return-object v0
.end method

.method static synthetic access$1002(Z)Z
    .locals 0

    .line 87
    sput-boolean p0, Lcom/onesignal/OneSignal;->androidParamsRequestStarted:Z

    return p0
.end method

.method static synthetic access$1100()Lcom/onesignal/influence/data/OSTrackerFactory;
    .locals 1

    .line 87
    sget-object v0, Lcom/onesignal/OneSignal;->trackerFactory:Lcom/onesignal/influence/data/OSTrackerFactory;

    return-object v0
.end method

.method static synthetic access$1200()Lcom/onesignal/OSSharedPreferences;
    .locals 1

    .line 87
    sget-object v0, Lcom/onesignal/OneSignal;->preferences:Lcom/onesignal/OSSharedPreferences;

    return-object v0
.end method

.method static synthetic access$1300()Lcom/onesignal/OSRemoteParamController;
    .locals 1

    .line 87
    sget-object v0, Lcom/onesignal/OneSignal;->remoteParamController:Lcom/onesignal/OSRemoteParamController;

    return-object v0
.end method

.method static synthetic access$1400()V
    .locals 0

    .line 87
    invoke-static {}, Lcom/onesignal/OneSignal;->registerForPushToken()V

    return-void
.end method

.method static synthetic access$1500()V
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 87
    invoke-static {}, Lcom/onesignal/OneSignal;->registerUserTask()V

    return-void
.end method

.method static synthetic access$1600()Ljava/util/ArrayList;
    .locals 1

    .line 87
    sget-object v0, Lcom/onesignal/OneSignal;->pendingGetTagsHandlers:Ljava/util/ArrayList;

    return-object v0
.end method

.method static synthetic access$1700()V
    .locals 0

    .line 87
    invoke-static {}, Lcom/onesignal/OneSignal;->runGetTags()V

    return-void
.end method

.method static synthetic access$1800()Z
    .locals 1

    .line 87
    sget-boolean v0, Lcom/onesignal/OneSignal;->getTagsCall:Z

    return v0
.end method

.method static synthetic access$1802(Z)Z
    .locals 0

    .line 87
    sput-boolean p0, Lcom/onesignal/OneSignal;->getTagsCall:Z

    return p0
.end method

.method static synthetic access$202(Lcom/onesignal/LocationController$LocationPoint;)Lcom/onesignal/LocationController$LocationPoint;
    .locals 0

    .line 87
    sput-object p0, Lcom/onesignal/OneSignal;->lastLocationPoint:Lcom/onesignal/LocationController$LocationPoint;

    return-object p0
.end method

.method static synthetic access$302(Z)Z
    .locals 0

    .line 87
    sput-boolean p0, Lcom/onesignal/OneSignal;->locationFired:Z

    return p0
.end method

.method static synthetic access$400()V
    .locals 0

    .line 87
    invoke-static {}, Lcom/onesignal/OneSignal;->registerUser()V

    return-void
.end method

.method static synthetic access$500()I
    .locals 1

    .line 87
    sget v0, Lcom/onesignal/OneSignal;->subscribableStatus:I

    return v0
.end method

.method static synthetic access$502(I)I
    .locals 0

    .line 87
    sput p0, Lcom/onesignal/OneSignal;->subscribableStatus:I

    return p0
.end method

.method static synthetic access$600(I)Z
    .locals 0

    .line 87
    invoke-static {p0}, Lcom/onesignal/OneSignal;->pushStatusRuntimeError(I)Z

    move-result p0

    return p0
.end method

.method static synthetic access$702(Ljava/lang/String;)Ljava/lang/String;
    .locals 0

    .line 87
    sput-object p0, Lcom/onesignal/OneSignal;->lastRegistrationId:Ljava/lang/String;

    return-object p0
.end method

.method static synthetic access$802(Z)Z
    .locals 0

    .line 87
    sput-boolean p0, Lcom/onesignal/OneSignal;->registerForPushFired:Z

    return p0
.end method

.method static synthetic access$900(Landroid/content/Context;)Lcom/onesignal/OSSubscriptionState;
    .locals 0

    .line 87
    invoke-static {p0}, Lcom/onesignal/OneSignal;->getCurrentSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSSubscriptionState;

    move-result-object p0

    return-object p0
.end method

.method public static addEmailSubscriptionObserver(Lcom/onesignal/OSEmailSubscriptionObserver;)V
    .locals 1

    .line 3037
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez v0, :cond_0

    .line 3038
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "OneSignal.initWithContext has not been called. Could not add email subscription observer"

    invoke-interface {p0, v0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    return-void

    .line 3042
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getEmailSubscriptionStateChangesObserver()Lcom/onesignal/OSObservable;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/OSObservable;->addObserver(Ljava/lang/Object;)V

    .line 3044
    sget-object p0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {p0}, Lcom/onesignal/OneSignal;->getCurrentEmailSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSEmailSubscriptionState;

    move-result-object p0

    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->getLastEmailSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSEmailSubscriptionState;

    move-result-object v0

    invoke-virtual {p0, v0}, Lcom/onesignal/OSEmailSubscriptionState;->compare(Lcom/onesignal/OSEmailSubscriptionState;)Z

    move-result p0

    if-eqz p0, :cond_1

    .line 3045
    sget-object p0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {p0}, Lcom/onesignal/OneSignal;->getCurrentEmailSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSEmailSubscriptionState;

    move-result-object p0

    invoke-static {p0}, Lcom/onesignal/OSEmailSubscriptionChangedInternalObserver;->fireChangesToPublicObserver(Lcom/onesignal/OSEmailSubscriptionState;)V

    :cond_1
    return-void
.end method

.method static addEntryStateListener(Lcom/onesignal/OneSignal$EntryStateListener;Lcom/onesignal/OneSignal$AppEntryAction;)V
    .locals 1

    .line 375
    sget-object v0, Lcom/onesignal/OneSignal$AppEntryAction;->NOTIFICATION_CLICK:Lcom/onesignal/OneSignal$AppEntryAction;

    invoke-virtual {p1, v0}, Lcom/onesignal/OneSignal$AppEntryAction;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_0

    .line 376
    sget-object p1, Lcom/onesignal/OneSignal;->entryStateListeners:Ljava/util/List;

    invoke-interface {p1, p0}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    :cond_0
    return-void
.end method

.method static addNetType(Lorg/json/JSONObject;)V
    .locals 2

    .line 1456
    :try_start_0
    const-string v0, "net_type"

    sget-object v1, Lcom/onesignal/OneSignal;->osUtils:Lcom/onesignal/OSUtils;

    invoke-virtual {v1}, Lcom/onesignal/OSUtils;->getNetType()Ljava/lang/Integer;

    move-result-object v1

    invoke-virtual {p0, v0, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    :catchall_0
    return-void
.end method

.method public static addPermissionObserver(Lcom/onesignal/OSPermissionObserver;)V
    .locals 1

    .line 2968
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez v0, :cond_0

    .line 2969
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "OneSignal.initWithContext has not been called. Could not add permission observer"

    invoke-interface {p0, v0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    return-void

    .line 2973
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getPermissionStateChangesObserver()Lcom/onesignal/OSObservable;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/OSObservable;->addObserver(Ljava/lang/Object;)V

    .line 2975
    sget-object p0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {p0}, Lcom/onesignal/OneSignal;->getCurrentPermissionState(Landroid/content/Context;)Lcom/onesignal/OSPermissionState;

    move-result-object p0

    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->getLastPermissionState(Landroid/content/Context;)Lcom/onesignal/OSPermissionState;

    move-result-object v0

    invoke-virtual {p0, v0}, Lcom/onesignal/OSPermissionState;->compare(Lcom/onesignal/OSPermissionState;)Z

    move-result p0

    if-eqz p0, :cond_1

    .line 2976
    sget-object p0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {p0}, Lcom/onesignal/OneSignal;->getCurrentPermissionState(Landroid/content/Context;)Lcom/onesignal/OSPermissionState;

    move-result-object p0

    invoke-static {p0}, Lcom/onesignal/OSPermissionChangedInternalObserver;->fireChangesToPublicObserver(Lcom/onesignal/OSPermissionState;)V

    :cond_1
    return-void
.end method

.method public static addSMSSubscriptionObserver(Lcom/onesignal/OSSMSSubscriptionObserver;)V
    .locals 1

    .line 3069
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez v0, :cond_0

    .line 3070
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "OneSignal.initWithContext has not been called. Could not add sms subscription observer"

    invoke-interface {p0, v0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    return-void

    .line 3074
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getSMSSubscriptionStateChangesObserver()Lcom/onesignal/OSObservable;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/OSObservable;->addObserver(Ljava/lang/Object;)V

    .line 3076
    sget-object p0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {p0}, Lcom/onesignal/OneSignal;->getCurrentSMSSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSSMSSubscriptionState;

    move-result-object p0

    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->getLastSMSSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSSMSSubscriptionState;

    move-result-object v0

    invoke-virtual {p0, v0}, Lcom/onesignal/OSSMSSubscriptionState;->compare(Lcom/onesignal/OSSMSSubscriptionState;)Z

    move-result p0

    if-eqz p0, :cond_1

    .line 3077
    sget-object p0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {p0}, Lcom/onesignal/OneSignal;->getCurrentSMSSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSSMSSubscriptionState;

    move-result-object p0

    invoke-static {p0}, Lcom/onesignal/OSSMSSubscriptionChangedInternalObserver;->fireChangesToPublicObserver(Lcom/onesignal/OSSMSSubscriptionState;)V

    :cond_1
    return-void
.end method

.method public static addSubscriptionObserver(Lcom/onesignal/OSSubscriptionObserver;)V
    .locals 1

    .line 3004
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez v0, :cond_0

    .line 3005
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "OneSignal.initWithContext has not been called. Could not add subscription observer"

    invoke-interface {p0, v0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    return-void

    .line 3009
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getSubscriptionStateChangesObserver()Lcom/onesignal/OSObservable;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/OSObservable;->addObserver(Ljava/lang/Object;)V

    .line 3011
    sget-object p0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {p0}, Lcom/onesignal/OneSignal;->getCurrentSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSSubscriptionState;

    move-result-object p0

    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->getLastSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSSubscriptionState;

    move-result-object v0

    invoke-virtual {p0, v0}, Lcom/onesignal/OSSubscriptionState;->compare(Lcom/onesignal/OSSubscriptionState;)Z

    move-result p0

    if-eqz p0, :cond_1

    .line 3012
    sget-object p0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {p0}, Lcom/onesignal/OneSignal;->getCurrentSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSSubscriptionState;

    move-result-object p0

    invoke-static {p0}, Lcom/onesignal/OSSubscriptionChangedInternalObserver;->fireChangesToPublicObserver(Lcom/onesignal/OSSubscriptionState;)V

    :cond_1
    return-void
.end method

.method public static addTrigger(Ljava/lang/String;Ljava/lang/Object;)V
    .locals 1

    .line 3103
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    .line 3104
    invoke-virtual {v0, p0, p1}, Ljava/util/HashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 3106
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object p0

    invoke-virtual {p0, v0}, Lcom/onesignal/OSInAppMessageController;->addTriggers(Ljava/util/Map;)V

    return-void
.end method

.method public static addTriggers(Ljava/util/Map;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/Object;",
            ">;)V"
        }
    .end annotation

    .line 3096
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/OSInAppMessageController;->addTriggers(Ljava/util/Map;)V

    return-void
.end method

.method static applicationOpenedByNotification(Ljava/lang/String;)V
    .locals 2

    .line 2486
    sget-object v0, Lcom/onesignal/OneSignal$AppEntryAction;->NOTIFICATION_CLICK:Lcom/onesignal/OneSignal$AppEntryAction;

    sput-object v0, Lcom/onesignal/OneSignal;->appEntryState:Lcom/onesignal/OneSignal$AppEntryAction;

    .line 2487
    sget-object v1, Lcom/onesignal/OneSignal;->sessionManager:Lcom/onesignal/OSSessionManager;

    invoke-virtual {v1, v0, p0}, Lcom/onesignal/OSSessionManager;->onDirectInfluenceFromNotificationOpen(Lcom/onesignal/OneSignal$AppEntryAction;Ljava/lang/String;)V

    return-void
.end method

.method static areNotificationsEnabledForSubscribedState()Z
    .locals 1

    .line 3234
    sget-object v0, Lcom/onesignal/OneSignal;->remoteParamController:Lcom/onesignal/OSRemoteParamController;

    invoke-virtual {v0}, Lcom/onesignal/OSRemoteParamController;->unsubscribeWhenNotificationsAreDisabled()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 3235
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v0}, Lcom/onesignal/OSUtils;->areNotificationsEnabled(Landroid/content/Context;)Z

    move-result v0

    return v0

    :cond_0
    const/4 v0, 0x1

    return v0
.end method

.method static atLogLevel(Lcom/onesignal/OneSignal$LOG_LEVEL;)Z
    .locals 2

    .line 1285
    sget-object v0, Lcom/onesignal/OneSignal;->visualLogLevel:Lcom/onesignal/OneSignal$LOG_LEVEL;

    invoke-virtual {p0, v0}, Lcom/onesignal/OneSignal$LOG_LEVEL;->compareTo(Ljava/lang/Enum;)I

    move-result v0

    const/4 v1, 0x1

    if-lt v0, v1, :cond_1

    sget-object v0, Lcom/onesignal/OneSignal;->logCatLevel:Lcom/onesignal/OneSignal$LOG_LEVEL;

    invoke-virtual {p0, v0}, Lcom/onesignal/OneSignal$LOG_LEVEL;->compareTo(Ljava/lang/Enum;)I

    move-result p0

    if-ge p0, v1, :cond_0

    goto :goto_0

    :cond_0
    const/4 v1, 0x0

    :cond_1
    :goto_0
    return v1
.end method

.method static backgroundSyncLogic()V
    .locals 1

    .line 1374
    sget-boolean v0, Lcom/onesignal/OneSignal;->inForeground:Z

    if-eqz v0, :cond_0

    return-void

    .line 1377
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal;->trackAmazonPurchase:Lcom/onesignal/TrackAmazonPurchase;

    if-eqz v0, :cond_1

    .line 1378
    invoke-virtual {v0}, Lcom/onesignal/TrackAmazonPurchase;->checkListener()V

    .line 1380
    :cond_1
    invoke-static {}, Lcom/onesignal/OneSignal;->getFocusTimeController()Lcom/onesignal/FocusTimeController;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/FocusTimeController;->appBackgrounded()V

    .line 1382
    invoke-static {}, Lcom/onesignal/OneSignal;->scheduleSyncService()Z

    return-void
.end method

.method static callEntryStateListeners(Lcom/onesignal/OneSignal$AppEntryAction;)V
    .locals 2

    .line 367
    new-instance v0, Ljava/util/ArrayList;

    sget-object v1, Lcom/onesignal/OneSignal;->entryStateListeners:Ljava/util/List;

    invoke-direct {v0, v1}, Ljava/util/ArrayList;-><init>(Ljava/util/Collection;)V

    .line 368
    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lcom/onesignal/OneSignal$EntryStateListener;

    .line 369
    invoke-interface {v1, p0}, Lcom/onesignal/OneSignal$EntryStateListener;->onEntryStateChange(Lcom/onesignal/OneSignal$AppEntryAction;)V

    goto :goto_0

    :cond_0
    return-void
.end method

.method public static clearOneSignalNotifications()V
    .locals 3

    .line 2887
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    const-string v1, "clearOneSignalNotifications()"

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->shouldQueueTaskForInit(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_1

    sget-object v0, Lcom/onesignal/OneSignal;->notificationDataController:Lcom/onesignal/OSNotificationDataController;

    if-nez v0, :cond_0

    goto :goto_0

    .line 2900
    :cond_0
    new-instance v1, Ljava/lang/ref/WeakReference;

    sget-object v2, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-direct {v1, v2}, Ljava/lang/ref/WeakReference;-><init>(Ljava/lang/Object;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSNotificationDataController;->clearOneSignalNotifications(Ljava/lang/ref/WeakReference;)V

    return-void

    .line 2888
    :cond_1
    :goto_0
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting for remote params. Moving clearOneSignalNotifications() operation to a pending queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 2890
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$31;

    invoke-direct {v1}, Lcom/onesignal/OneSignal$31;-><init>()V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void
.end method

.method public static deleteTag(Ljava/lang/String;)V
    .locals 1

    const/4 v0, 0x0

    .line 2203
    invoke-static {p0, v0}, Lcom/onesignal/OneSignal;->deleteTag(Ljava/lang/String;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V

    return-void
.end method

.method public static deleteTag(Ljava/lang/String;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V
    .locals 2

    .line 2208
    const-string v0, "deleteTag()"

    invoke-static {v0}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 2211
    :cond_0
    new-instance v0, Ljava/util/ArrayList;

    const/4 v1, 0x1

    invoke-direct {v0, v1}, Ljava/util/ArrayList;-><init>(I)V

    .line 2212
    invoke-interface {v0, p0}, Ljava/util/Collection;->add(Ljava/lang/Object;)Z

    .line 2213
    invoke-static {v0, p1}, Lcom/onesignal/OneSignal;->deleteTags(Ljava/util/Collection;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V

    return-void
.end method

.method public static deleteTags(Ljava/lang/String;)V
    .locals 1

    const/4 v0, 0x0

    .line 2242
    invoke-static {p0, v0}, Lcom/onesignal/OneSignal;->deleteTags(Ljava/lang/String;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V

    return-void
.end method

.method public static deleteTags(Ljava/lang/String;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V
    .locals 1

    .line 2247
    :try_start_0
    new-instance v0, Lorg/json/JSONArray;

    invoke-direct {v0, p0}, Lorg/json/JSONArray;-><init>(Ljava/lang/String;)V

    invoke-static {v0, p1}, Lcom/onesignal/OneSignal;->deleteTags(Lorg/json/JSONArray;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    :catchall_0
    move-exception p0

    .line 2249
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v0, "Failed to generate JSON for deleteTags."

    invoke-static {p1, v0, p0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_0
    return-void
.end method

.method public static deleteTags(Ljava/util/Collection;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Collection<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    const/4 v0, 0x0

    .line 2222
    invoke-static {p0, v0}, Lcom/onesignal/OneSignal;->deleteTags(Ljava/util/Collection;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V

    return-void
.end method

.method public static deleteTags(Ljava/util/Collection;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Collection<",
            "Ljava/lang/String;",
            ">;",
            "Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;",
            ")V"
        }
    .end annotation

    .line 2227
    const-string v0, "deleteTags()"

    invoke-static {v0}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 2231
    :cond_0
    :try_start_0
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 2232
    invoke-interface {p0}, Ljava/util/Collection;->iterator()Ljava/util/Iterator;

    move-result-object p0

    :goto_0
    invoke-interface {p0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-interface {p0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/String;

    .line 2233
    const-string v2, ""

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    goto :goto_0

    .line 2235
    :cond_1
    invoke-static {v0, p1}, Lcom/onesignal/OneSignal;->sendTags(Lorg/json/JSONObject;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_1

    :catchall_0
    move-exception p0

    .line 2237
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v0, "Failed to generate JSON for deleteTags."

    invoke-static {p1, v0, p0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_1
    return-void
.end method

.method public static deleteTags(Lorg/json/JSONArray;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V
    .locals 4

    .line 2255
    const-string v0, "deleteTags()"

    invoke-static {v0}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 2259
    :cond_0
    :try_start_0
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    const/4 v1, 0x0

    .line 2261
    :goto_0
    invoke-virtual {p0}, Lorg/json/JSONArray;->length()I

    move-result v2

    if-ge v1, v2, :cond_1

    .line 2262
    invoke-virtual {p0, v1}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v2

    const-string v3, ""

    invoke-virtual {v0, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    add-int/lit8 v1, v1, 0x1

    goto :goto_0

    .line 2264
    :cond_1
    invoke-static {v0, p1}, Lcom/onesignal/OneSignal;->sendTags(Lorg/json/JSONObject;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_1

    :catchall_0
    move-exception p0

    .line 2266
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v0, "Failed to generate JSON for deleteTags."

    invoke-static {p1, v0, p0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_1
    return-void
.end method

.method public static disableGMSMissingPrompt(Z)V
    .locals 1

    .line 2738
    invoke-static {}, Lcom/onesignal/OneSignal;->getRemoteParamController()Lcom/onesignal/OSRemoteParamController;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSRemoteParamController;->hasDisableGMSMissingPromptKey()Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 2741
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getRemoteParamController()Lcom/onesignal/OSRemoteParamController;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/OSRemoteParamController;->saveGMSMissingPromptDisable(Z)V

    return-void
.end method

.method public static disablePush(Z)V
    .locals 2

    .line 2711
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    const-string v1, "setSubscription()"

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->shouldQueueTaskForInit(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 2712
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting for remote params. Moving setSubscription() operation to a pending queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 2714
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$27;

    invoke-direct {v1, p0}, Lcom/onesignal/OneSignal$27;-><init>(Z)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void

    .line 2725
    :cond_0
    invoke-static {v1}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    return-void

    .line 2728
    :cond_1
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->getCurrentSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSSubscriptionState;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/OSSubscriptionState;->setPushDisabled(Z)V

    xor-int/lit8 p0, p0, 0x1

    .line 2729
    invoke-static {p0}, Lcom/onesignal/OneSignalStateSynchronizer;->setSubscription(Z)V

    return-void
.end method

.method private static doSessionInit()V
    .locals 3

    .line 993
    invoke-static {}, Lcom/onesignal/OneSignal;->shouldStartNewSession()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 994
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Starting new session with appEntryState: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-static {}, Lcom/onesignal/OneSignal;->getAppEntryState()Lcom/onesignal/OneSignal$AppEntryAction;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 996
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->setNewSession()V

    .line 997
    invoke-static {}, Lcom/onesignal/OneSignal;->getOutcomeEventsController()Lcom/onesignal/OSOutcomeEventsController;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSOutcomeEventsController;->cleanOutcomes()V

    .line 998
    sget-object v0, Lcom/onesignal/OneSignal;->sessionManager:Lcom/onesignal/OSSessionManager;

    invoke-static {}, Lcom/onesignal/OneSignal;->getAppEntryState()Lcom/onesignal/OneSignal$AppEntryAction;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/onesignal/OSSessionManager;->restartSessionIfNeeded(Lcom/onesignal/OneSignal$AppEntryAction;)V

    .line 999
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageController;->resetSessionLaunchTime()V

    .line 1000
    sget-object v0, Lcom/onesignal/OneSignal;->time:Lcom/onesignal/OSTime;

    invoke-interface {v0}, Lcom/onesignal/OSTime;->getCurrentTimeMillis()J

    move-result-wide v0

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->setLastSessionTime(J)V

    goto :goto_0

    .line 1001
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->isInForeground()Z

    move-result v0

    if-eqz v0, :cond_1

    .line 1002
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Continue on same session with appEntryState: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-static {}, Lcom/onesignal/OneSignal;->getAppEntryState()Lcom/onesignal/OneSignal$AppEntryAction;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 1003
    sget-object v0, Lcom/onesignal/OneSignal;->sessionManager:Lcom/onesignal/OSSessionManager;

    invoke-static {}, Lcom/onesignal/OneSignal;->getAppEntryState()Lcom/onesignal/OneSignal$AppEntryAction;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/onesignal/OSSessionManager;->attemptSessionUpgrade(Lcom/onesignal/OneSignal$AppEntryAction;)V

    .line 1006
    :cond_1
    :goto_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageController;->initWithCachedInAppMessages()V

    .line 1010
    sget-boolean v0, Lcom/onesignal/OneSignal;->inForeground:Z

    if-nez v0, :cond_2

    invoke-static {}, Lcom/onesignal/OneSignal;->hasUserId()Z

    move-result v0

    if-eqz v0, :cond_2

    .line 1011
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "doSessionInit on background with already registered user"

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 1013
    :cond_2
    invoke-static {}, Lcom/onesignal/OneSignal;->startRegistrationOrOnSession()V

    return-void
.end method

.method private static fireCallbackForOpenedNotifications()V
    .locals 2

    .line 1136
    sget-object v0, Lcom/onesignal/OneSignal;->unprocessedOpenedNotifs:Ljava/util/Collection;

    invoke-interface {v0}, Ljava/util/Collection;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lorg/json/JSONArray;

    .line 1137
    invoke-static {v1}, Lcom/onesignal/OneSignal;->runNotificationOpenedCallback(Lorg/json/JSONArray;)V

    goto :goto_0

    .line 1139
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal;->unprocessedOpenedNotifs:Ljava/util/Collection;

    invoke-interface {v0}, Ljava/util/Collection;->clear()V

    return-void
.end method

.method static fireEmailUpdateFailure()V
    .locals 4

    .line 3261
    sget-object v0, Lcom/onesignal/OneSignal;->emailUpdateHandler:Lcom/onesignal/OneSignal$EmailUpdateHandler;

    if-eqz v0, :cond_0

    .line 3262
    new-instance v1, Lcom/onesignal/OneSignal$EmailUpdateError;

    sget-object v2, Lcom/onesignal/OneSignal$EmailErrorType;->NETWORK:Lcom/onesignal/OneSignal$EmailErrorType;

    const-string v3, "Failed due to network failure. Will retry on next sync."

    invoke-direct {v1, v2, v3}, Lcom/onesignal/OneSignal$EmailUpdateError;-><init>(Lcom/onesignal/OneSignal$EmailErrorType;Ljava/lang/String;)V

    invoke-interface {v0, v1}, Lcom/onesignal/OneSignal$EmailUpdateHandler;->onFailure(Lcom/onesignal/OneSignal$EmailUpdateError;)V

    const/4 v0, 0x0

    .line 3263
    sput-object v0, Lcom/onesignal/OneSignal;->emailUpdateHandler:Lcom/onesignal/OneSignal$EmailUpdateHandler;

    :cond_0
    return-void
.end method

.method static fireEmailUpdateSuccess()V
    .locals 1

    .line 3254
    sget-object v0, Lcom/onesignal/OneSignal;->emailUpdateHandler:Lcom/onesignal/OneSignal$EmailUpdateHandler;

    if-eqz v0, :cond_0

    .line 3255
    invoke-interface {v0}, Lcom/onesignal/OneSignal$EmailUpdateHandler;->onSuccess()V

    const/4 v0, 0x0

    .line 3256
    sput-object v0, Lcom/onesignal/OneSignal;->emailUpdateHandler:Lcom/onesignal/OneSignal$EmailUpdateHandler;

    :cond_0
    return-void
.end method

.method static fireForegroundHandlers(Lcom/onesignal/OSNotificationController;)V
    .locals 3

    .line 2408
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->INFO:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "Fire notificationWillShowInForegroundHandler"

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 2410
    invoke-virtual {p0}, Lcom/onesignal/OSNotificationController;->getNotificationReceivedEvent()Lcom/onesignal/OSNotificationReceivedEvent;

    move-result-object p0

    .line 2412
    :try_start_0
    sget-object v0, Lcom/onesignal/OneSignal;->notificationWillShowInForegroundHandler:Lcom/onesignal/OneSignal$OSNotificationWillShowInForegroundHandler;

    invoke-interface {v0, p0}, Lcom/onesignal/OneSignal$OSNotificationWillShowInForegroundHandler;->notificationWillShowInForeground(Lcom/onesignal/OSNotificationReceivedEvent;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    return-void

    :catchall_0
    move-exception v0

    .line 2414
    sget-object v1, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v2, "Exception thrown while notification was being processed for display by notificationWillShowInForegroundHandler, showing notification in foreground!"

    invoke-static {v1, v2}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 2415
    invoke-virtual {p0}, Lcom/onesignal/OSNotificationReceivedEvent;->getNotification()Lcom/onesignal/OSNotification;

    move-result-object v1

    invoke-virtual {p0, v1}, Lcom/onesignal/OSNotificationReceivedEvent;->complete(Lcom/onesignal/OSNotification;)V

    .line 2416
    throw v0
.end method

.method private static fireNotificationOpenedHandler(Lcom/onesignal/OSNotificationOpenedResult;)V
    .locals 2

    .line 2349
    sget-object v0, Lcom/onesignal/CallbackThreadManager;->Companion:Lcom/onesignal/CallbackThreadManager$Companion;

    new-instance v1, Lcom/onesignal/OneSignal$25;

    invoke-direct {v1, p0}, Lcom/onesignal/OneSignal$25;-><init>(Lcom/onesignal/OSNotificationOpenedResult;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/CallbackThreadManager$Companion;->runOnPreferred(Ljava/lang/Runnable;)V

    return-void
.end method

.method static fireSMSUpdateFailure()V
    .locals 4

    .line 3289
    sget-object v0, Lcom/onesignal/OneSignal;->smsUpdateHandler:Lcom/onesignal/OneSignal$OSSMSUpdateHandler;

    if-eqz v0, :cond_0

    .line 3290
    new-instance v1, Lcom/onesignal/OneSignal$OSSMSUpdateError;

    sget-object v2, Lcom/onesignal/OneSignal$SMSErrorType;->NETWORK:Lcom/onesignal/OneSignal$SMSErrorType;

    const-string v3, "Failed due to network failure. Will retry on next sync."

    invoke-direct {v1, v2, v3}, Lcom/onesignal/OneSignal$OSSMSUpdateError;-><init>(Lcom/onesignal/OneSignal$SMSErrorType;Ljava/lang/String;)V

    invoke-interface {v0, v1}, Lcom/onesignal/OneSignal$OSSMSUpdateHandler;->onFailure(Lcom/onesignal/OneSignal$OSSMSUpdateError;)V

    const/4 v0, 0x0

    .line 3291
    sput-object v0, Lcom/onesignal/OneSignal;->smsUpdateHandler:Lcom/onesignal/OneSignal$OSSMSUpdateHandler;

    :cond_0
    return-void
.end method

.method static fireSMSUpdateSuccess(Lorg/json/JSONObject;)V
    .locals 1

    .line 3282
    sget-object v0, Lcom/onesignal/OneSignal;->smsUpdateHandler:Lcom/onesignal/OneSignal$OSSMSUpdateHandler;

    if-eqz v0, :cond_0

    .line 3283
    invoke-interface {v0, p0}, Lcom/onesignal/OneSignal$OSSMSUpdateHandler;->onSuccess(Lorg/json/JSONObject;)V

    const/4 p0, 0x0

    .line 3284
    sput-object p0, Lcom/onesignal/OneSignal;->smsUpdateHandler:Lcom/onesignal/OneSignal$OSSMSUpdateHandler;

    :cond_0
    return-void
.end method

.method private static generateNotificationOpenedResult(Lorg/json/JSONArray;)Lcom/onesignal/OSNotificationOpenedResult;
    .locals 14

    .line 2311
    const-string v0, "actionId"

    invoke-virtual {p0}, Lorg/json/JSONArray;->length()I

    move-result v1

    const/4 v2, 0x0

    .line 2314
    invoke-virtual {p0, v2}, Lorg/json/JSONArray;->optJSONObject(I)Lorg/json/JSONObject;

    move-result-object v3

    const-string v4, "androidNotificationId"

    invoke-virtual {v3, v4}, Lorg/json/JSONObject;->optInt(Ljava/lang/String;)I

    move-result v3

    .line 2316
    new-instance v4, Ljava/util/ArrayList;

    invoke-direct {v4}, Ljava/util/ArrayList;-><init>()V

    const/4 v5, 0x1

    const/4 v6, 0x0

    move v7, v2

    move-object v8, v6

    move-object v9, v8

    :goto_0
    if-ge v7, v1, :cond_2

    .line 2322
    :try_start_0
    invoke-virtual {p0, v7}, Lorg/json/JSONArray;->getJSONObject(I)Lorg/json/JSONObject;

    move-result-object v9

    if-nez v8, :cond_0

    .line 2324
    invoke-virtual {v9, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v10

    if-eqz v10, :cond_0

    .line 2325
    invoke-virtual {v9, v0, v6}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v8

    :cond_0
    if-eqz v5, :cond_1

    move v5, v2

    goto :goto_1

    .line 2330
    :cond_1
    new-instance v10, Lcom/onesignal/OSNotification;

    invoke-direct {v10, v9}, Lcom/onesignal/OSNotification;-><init>(Lorg/json/JSONObject;)V

    invoke-interface {v4, v10}, Ljava/util/List;->add(Ljava/lang/Object;)Z
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_1

    :catchall_0
    move-exception v10

    .line 2333
    sget-object v11, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v12, Ljava/lang/StringBuilder;

    const-string v13, "Error parsing JSON item "

    invoke-direct {v12, v13}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v12, v7}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v12

    const-string v13, "/"

    invoke-virtual {v12, v13}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v12

    invoke-virtual {v12, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v12

    const-string v13, " for callback."

    invoke-virtual {v12, v13}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v12

    invoke-virtual {v12}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v12

    invoke-static {v11, v12, v10}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_1
    add-int/lit8 v7, v7, 0x1

    goto :goto_0

    :cond_2
    if-eqz v8, :cond_3

    .line 2337
    sget-object p0, Lcom/onesignal/OSNotificationAction$ActionType;->ActionTaken:Lcom/onesignal/OSNotificationAction$ActionType;

    goto :goto_2

    :cond_3
    sget-object p0, Lcom/onesignal/OSNotificationAction$ActionType;->Opened:Lcom/onesignal/OSNotificationAction$ActionType;

    .line 2338
    :goto_2
    new-instance v0, Lcom/onesignal/OSNotificationAction;

    invoke-direct {v0, p0, v8}, Lcom/onesignal/OSNotificationAction;-><init>(Lcom/onesignal/OSNotificationAction$ActionType;Ljava/lang/String;)V

    .line 2340
    new-instance p0, Lcom/onesignal/OSNotification;

    invoke-direct {p0, v4, v9, v3}, Lcom/onesignal/OSNotification;-><init>(Ljava/util/List;Lorg/json/JSONObject;I)V

    .line 2341
    new-instance v1, Lcom/onesignal/OSNotificationOpenedResult;

    invoke-direct {v1, p0, v0}, Lcom/onesignal/OSNotificationOpenedResult;-><init>(Lcom/onesignal/OSNotification;Lcom/onesignal/OSNotificationAction;)V

    return-object v1
.end method

.method static getAppEntryState()Lcom/onesignal/OneSignal$AppEntryAction;
    .locals 1

    .line 428
    sget-object v0, Lcom/onesignal/OneSignal;->appEntryState:Lcom/onesignal/OneSignal$AppEntryAction;

    return-object v0
.end method

.method private static getAppVersion()Ljava/lang/Integer;
    .locals 4

    .line 1546
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-virtual {v0}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object v0

    .line 1547
    sget-object v1, Lcom/onesignal/PackageInfoHelper;->Companion:Lcom/onesignal/PackageInfoHelper$Companion;

    sget-object v2, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    const/4 v3, 0x0

    .line 1548
    invoke-virtual {v1, v2, v0, v3}, Lcom/onesignal/PackageInfoHelper$Companion;->getInfo(Landroid/content/Context;Ljava/lang/String;I)Lcom/onesignal/GetPackageInfoResult;

    move-result-object v0

    .line 1553
    invoke-virtual {v0}, Lcom/onesignal/GetPackageInfoResult;->getSuccessful()Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-virtual {v0}, Lcom/onesignal/GetPackageInfoResult;->getPackageInfo()Landroid/content/pm/PackageInfo;

    move-result-object v1

    if-nez v1, :cond_0

    goto :goto_0

    .line 1557
    :cond_0
    invoke-virtual {v0}, Lcom/onesignal/GetPackageInfoResult;->getPackageInfo()Landroid/content/pm/PackageInfo;

    move-result-object v0

    iget v0, v0, Landroid/content/pm/PackageInfo;->versionCode:I

    invoke-static {v0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v0

    return-object v0

    :cond_1
    :goto_0
    const/4 v0, 0x0

    return-object v0
.end method

.method static getClearGroupSummaryClick()Z
    .locals 1

    .line 2674
    sget-object v0, Lcom/onesignal/OneSignal;->remoteParamController:Lcom/onesignal/OSRemoteParamController;

    invoke-virtual {v0}, Lcom/onesignal/OSRemoteParamController;->getClearGroupSummaryClick()Z

    move-result v0

    return v0
.end method

.method static getCurrentActivity()Landroid/app/Activity;
    .locals 1

    .line 390
    invoke-static {}, Lcom/onesignal/ActivityLifecycleListener;->getActivityLifecycleHandler()Lcom/onesignal/ActivityLifecycleHandler;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 391
    invoke-virtual {v0}, Lcom/onesignal/ActivityLifecycleHandler;->getCurActivity()Landroid/app/Activity;

    move-result-object v0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return-object v0
.end method

.method private static getCurrentEmailSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSEmailSubscriptionState;
    .locals 1

    if-nez p0, :cond_0

    const/4 p0, 0x0

    return-object p0

    .line 585
    :cond_0
    sget-object p0, Lcom/onesignal/OneSignal;->currentEmailSubscriptionState:Lcom/onesignal/OSEmailSubscriptionState;

    if-nez p0, :cond_1

    .line 586
    new-instance p0, Lcom/onesignal/OSEmailSubscriptionState;

    const/4 v0, 0x0

    invoke-direct {p0, v0}, Lcom/onesignal/OSEmailSubscriptionState;-><init>(Z)V

    sput-object p0, Lcom/onesignal/OneSignal;->currentEmailSubscriptionState:Lcom/onesignal/OSEmailSubscriptionState;

    .line 587
    invoke-virtual {p0}, Lcom/onesignal/OSEmailSubscriptionState;->getObservable()Lcom/onesignal/OSObservable;

    move-result-object p0

    new-instance v0, Lcom/onesignal/OSEmailSubscriptionChangedInternalObserver;

    invoke-direct {v0}, Lcom/onesignal/OSEmailSubscriptionChangedInternalObserver;-><init>()V

    invoke-virtual {p0, v0}, Lcom/onesignal/OSObservable;->addObserverStrong(Ljava/lang/Object;)V

    .line 590
    :cond_1
    sget-object p0, Lcom/onesignal/OneSignal;->currentEmailSubscriptionState:Lcom/onesignal/OSEmailSubscriptionState;

    return-object p0
.end method

.method private static getCurrentPermissionState(Landroid/content/Context;)Lcom/onesignal/OSPermissionState;
    .locals 1

    if-nez p0, :cond_0

    const/4 p0, 0x0

    return-object p0

    .line 517
    :cond_0
    sget-object p0, Lcom/onesignal/OneSignal;->currentPermissionState:Lcom/onesignal/OSPermissionState;

    if-nez p0, :cond_1

    .line 518
    new-instance p0, Lcom/onesignal/OSPermissionState;

    const/4 v0, 0x0

    invoke-direct {p0, v0}, Lcom/onesignal/OSPermissionState;-><init>(Z)V

    sput-object p0, Lcom/onesignal/OneSignal;->currentPermissionState:Lcom/onesignal/OSPermissionState;

    .line 519
    invoke-virtual {p0}, Lcom/onesignal/OSPermissionState;->getObservable()Lcom/onesignal/OSObservable;

    move-result-object p0

    new-instance v0, Lcom/onesignal/OSPermissionChangedInternalObserver;

    invoke-direct {v0}, Lcom/onesignal/OSPermissionChangedInternalObserver;-><init>()V

    invoke-virtual {p0, v0}, Lcom/onesignal/OSObservable;->addObserverStrong(Ljava/lang/Object;)V

    .line 522
    :cond_1
    sget-object p0, Lcom/onesignal/OneSignal;->currentPermissionState:Lcom/onesignal/OSPermissionState;

    return-object p0
.end method

.method private static getCurrentSMSSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSSMSSubscriptionState;
    .locals 1

    if-nez p0, :cond_0

    const/4 p0, 0x0

    return-object p0

    .line 621
    :cond_0
    sget-object p0, Lcom/onesignal/OneSignal;->currentSMSSubscriptionState:Lcom/onesignal/OSSMSSubscriptionState;

    if-nez p0, :cond_1

    .line 622
    new-instance p0, Lcom/onesignal/OSSMSSubscriptionState;

    const/4 v0, 0x0

    invoke-direct {p0, v0}, Lcom/onesignal/OSSMSSubscriptionState;-><init>(Z)V

    sput-object p0, Lcom/onesignal/OneSignal;->currentSMSSubscriptionState:Lcom/onesignal/OSSMSSubscriptionState;

    .line 623
    invoke-virtual {p0}, Lcom/onesignal/OSSMSSubscriptionState;->getObservable()Lcom/onesignal/OSObservable;

    move-result-object p0

    new-instance v0, Lcom/onesignal/OSSMSSubscriptionChangedInternalObserver;

    invoke-direct {v0}, Lcom/onesignal/OSSMSSubscriptionChangedInternalObserver;-><init>()V

    invoke-virtual {p0, v0}, Lcom/onesignal/OSObservable;->addObserverStrong(Ljava/lang/Object;)V

    .line 626
    :cond_1
    sget-object p0, Lcom/onesignal/OneSignal;->currentSMSSubscriptionState:Lcom/onesignal/OSSMSSubscriptionState;

    return-object p0
.end method

.method private static getCurrentSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSSubscriptionState;
    .locals 3

    if-nez p0, :cond_0

    const/4 p0, 0x0

    return-object p0

    .line 550
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal;->currentSubscriptionState:Lcom/onesignal/OSSubscriptionState;

    if-nez v0, :cond_1

    .line 551
    new-instance v0, Lcom/onesignal/OSSubscriptionState;

    invoke-static {p0}, Lcom/onesignal/OneSignal;->getCurrentPermissionState(Landroid/content/Context;)Lcom/onesignal/OSPermissionState;

    move-result-object v1

    invoke-virtual {v1}, Lcom/onesignal/OSPermissionState;->areNotificationsEnabled()Z

    move-result v1

    const/4 v2, 0x0

    invoke-direct {v0, v2, v1}, Lcom/onesignal/OSSubscriptionState;-><init>(ZZ)V

    sput-object v0, Lcom/onesignal/OneSignal;->currentSubscriptionState:Lcom/onesignal/OSSubscriptionState;

    .line 552
    invoke-static {p0}, Lcom/onesignal/OneSignal;->getCurrentPermissionState(Landroid/content/Context;)Lcom/onesignal/OSPermissionState;

    move-result-object p0

    invoke-virtual {p0}, Lcom/onesignal/OSPermissionState;->getObservable()Lcom/onesignal/OSObservable;

    move-result-object p0

    sget-object v0, Lcom/onesignal/OneSignal;->currentSubscriptionState:Lcom/onesignal/OSSubscriptionState;

    invoke-virtual {p0, v0}, Lcom/onesignal/OSObservable;->addObserver(Ljava/lang/Object;)V

    .line 553
    sget-object p0, Lcom/onesignal/OneSignal;->currentSubscriptionState:Lcom/onesignal/OSSubscriptionState;

    invoke-virtual {p0}, Lcom/onesignal/OSSubscriptionState;->getObservable()Lcom/onesignal/OSObservable;

    move-result-object p0

    new-instance v0, Lcom/onesignal/OSSubscriptionChangedInternalObserver;

    invoke-direct {v0}, Lcom/onesignal/OSSubscriptionChangedInternalObserver;-><init>()V

    invoke-virtual {p0, v0}, Lcom/onesignal/OSObservable;->addObserverStrong(Ljava/lang/Object;)V

    .line 556
    :cond_1
    sget-object p0, Lcom/onesignal/OneSignal;->currentSubscriptionState:Lcom/onesignal/OSSubscriptionState;

    return-object p0
.end method

.method static getDBHelperInstance()Lcom/onesignal/OneSignalDbHelper;
    .locals 1

    .line 3328
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v0}, Lcom/onesignal/OneSignalDbHelper;->getInstance(Landroid/content/Context;)Lcom/onesignal/OneSignalDbHelper;

    move-result-object v0

    return-object v0
.end method

.method static getDBHelperInstance(Landroid/content/Context;)Lcom/onesignal/OneSignalDbHelper;
    .locals 0

    .line 3332
    invoke-static {p0}, Lcom/onesignal/OneSignalDbHelper;->getInstance(Landroid/content/Context;)Lcom/onesignal/OneSignalDbHelper;

    move-result-object p0

    return-object p0
.end method

.method static getDelayedInitParams()Lcom/onesignal/DelayedConsentInitializationParameters;
    .locals 1

    .line 508
    sget-object v0, Lcom/onesignal/OneSignal;->delayedInitParams:Lcom/onesignal/DelayedConsentInitializationParameters;

    return-object v0
.end method

.method public static getDeviceState()Lcom/onesignal/OSDeviceState;
    .locals 5

    .line 656
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez v0, :cond_0

    .line 657
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "OneSignal.initWithContext has not been called. Could not get OSDeviceState"

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    const/4 v0, 0x0

    return-object v0

    .line 661
    :cond_0
    invoke-static {v0}, Lcom/onesignal/OneSignal;->getCurrentSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSSubscriptionState;

    move-result-object v0

    .line 662
    sget-object v1, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v1}, Lcom/onesignal/OneSignal;->getCurrentPermissionState(Landroid/content/Context;)Lcom/onesignal/OSPermissionState;

    move-result-object v1

    .line 663
    sget-object v2, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v2}, Lcom/onesignal/OneSignal;->getCurrentEmailSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSEmailSubscriptionState;

    move-result-object v2

    .line 664
    sget-object v3, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v3}, Lcom/onesignal/OneSignal;->getCurrentSMSSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSSMSSubscriptionState;

    move-result-object v3

    .line 665
    new-instance v4, Lcom/onesignal/OSDeviceState;

    invoke-direct {v4, v0, v1, v2, v3}, Lcom/onesignal/OSDeviceState;-><init>(Lcom/onesignal/OSSubscriptionState;Lcom/onesignal/OSPermissionState;Lcom/onesignal/OSEmailSubscriptionState;Lcom/onesignal/OSSMSSubscriptionState;)V

    return-object v4
.end method

.method static getDisableGMSMissingPrompt()Z
    .locals 1

    .line 2678
    sget-object v0, Lcom/onesignal/OneSignal;->remoteParamController:Lcom/onesignal/OSRemoteParamController;

    invoke-virtual {v0}, Lcom/onesignal/OSRemoteParamController;->isGMSMissingPromptDisable()Z

    move-result v0

    return v0
.end method

.method static getEmailId()Ljava/lang/String;
    .locals 3

    .line 2583
    sget-object v0, Lcom/onesignal/OneSignal;->emailId:Ljava/lang/String;

    const/4 v1, 0x0

    if-nez v0, :cond_0

    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-eqz v0, :cond_0

    .line 2584
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v2, "OS_EMAIL_ID"

    invoke-static {v0, v2, v1}, Lcom/onesignal/OneSignalPrefs;->getString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    sput-object v0, Lcom/onesignal/OneSignal;->emailId:Ljava/lang/String;

    .line 2590
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal;->emailId:Ljava/lang/String;

    invoke-static {v0}, Landroid/text/TextUtils;->isEmpty(Ljava/lang/CharSequence;)Z

    move-result v0

    if-eqz v0, :cond_1

    return-object v1

    .line 2593
    :cond_1
    sget-object v0, Lcom/onesignal/OneSignal;->emailId:Ljava/lang/String;

    return-object v0
.end method

.method static getEmailSubscriptionState()Lcom/onesignal/OSEmailSubscriptionState;
    .locals 1

    .line 593
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->getCurrentEmailSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSEmailSubscriptionState;

    move-result-object v0

    return-object v0
.end method

.method static getEmailSubscriptionStateChangesObserver()Lcom/onesignal/OSObservable;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/onesignal/OSObservable<",
            "Lcom/onesignal/OSEmailSubscriptionObserver;",
            "Lcom/onesignal/OSEmailSubscriptionStateChanges;",
            ">;"
        }
    .end annotation

    .line 609
    sget-object v0, Lcom/onesignal/OneSignal;->emailSubscriptionStateChangesObserver:Lcom/onesignal/OSObservable;

    if-nez v0, :cond_0

    .line 610
    new-instance v0, Lcom/onesignal/OSObservable;

    const-string v1, "onOSEmailSubscriptionChanged"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Lcom/onesignal/OSObservable;-><init>(Ljava/lang/String;Z)V

    sput-object v0, Lcom/onesignal/OneSignal;->emailSubscriptionStateChangesObserver:Lcom/onesignal/OSObservable;

    .line 611
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal;->emailSubscriptionStateChangesObserver:Lcom/onesignal/OSObservable;

    return-object v0
.end method

.method static getFirebaseAnalyticsEnabled()Z
    .locals 1

    .line 2670
    sget-object v0, Lcom/onesignal/OneSignal;->remoteParamController:Lcom/onesignal/OSRemoteParamController;

    invoke-virtual {v0}, Lcom/onesignal/OSRemoteParamController;->getFirebaseAnalyticsEnabled()Z

    move-result v0

    return v0
.end method

.method static getFocusTimeController()Lcom/onesignal/FocusTimeController;
    .locals 3

    .line 3344
    sget-object v0, Lcom/onesignal/OneSignal;->focusTimeController:Lcom/onesignal/FocusTimeController;

    if-nez v0, :cond_0

    .line 3345
    new-instance v0, Lcom/onesignal/FocusTimeController;

    new-instance v1, Lcom/onesignal/OSFocusTimeProcessorFactory;

    invoke-direct {v1}, Lcom/onesignal/OSFocusTimeProcessorFactory;-><init>()V

    sget-object v2, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    invoke-direct {v0, v1, v2}, Lcom/onesignal/FocusTimeController;-><init>(Lcom/onesignal/OSFocusTimeProcessorFactory;Lcom/onesignal/OSLogger;)V

    sput-object v0, Lcom/onesignal/OneSignal;->focusTimeController:Lcom/onesignal/FocusTimeController;

    .line 3348
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal;->focusTimeController:Lcom/onesignal/FocusTimeController;

    return-object v0
.end method

.method static getInAppMessageController()Lcom/onesignal/OSInAppMessageController;
    .locals 6

    .line 459
    sget-object v0, Lcom/onesignal/OneSignal;->inAppMessageControllerFactory:Lcom/onesignal/OSInAppMessageControllerFactory;

    invoke-static {}, Lcom/onesignal/OneSignal;->getDBHelperInstance()Lcom/onesignal/OneSignalDbHelper;

    move-result-object v1

    sget-object v2, Lcom/onesignal/OneSignal;->taskController:Lcom/onesignal/OSTaskController;

    invoke-static {}, Lcom/onesignal/OneSignal;->getLogger()Lcom/onesignal/OSLogger;

    move-result-object v3

    invoke-static {}, Lcom/onesignal/OneSignal;->getSharedPreferences()Lcom/onesignal/OSSharedPreferences;

    move-result-object v4

    sget-object v5, Lcom/onesignal/OneSignal;->languageContext:Lcom/onesignal/language/LanguageContext;

    invoke-virtual/range {v0 .. v5}, Lcom/onesignal/OSInAppMessageControllerFactory;->getController(Lcom/onesignal/OneSignalDbHelper;Lcom/onesignal/OSTaskController;Lcom/onesignal/OSLogger;Lcom/onesignal/OSSharedPreferences;Lcom/onesignal/language/LanguageContext;)Lcom/onesignal/OSInAppMessageController;

    move-result-object v0

    return-object v0
.end method

.method private static getLastEmailSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSEmailSubscriptionState;
    .locals 1

    if-nez p0, :cond_0

    const/4 p0, 0x0

    return-object p0

    .line 601
    :cond_0
    sget-object p0, Lcom/onesignal/OneSignal;->lastEmailSubscriptionState:Lcom/onesignal/OSEmailSubscriptionState;

    if-nez p0, :cond_1

    .line 602
    new-instance p0, Lcom/onesignal/OSEmailSubscriptionState;

    const/4 v0, 0x1

    invoke-direct {p0, v0}, Lcom/onesignal/OSEmailSubscriptionState;-><init>(Z)V

    sput-object p0, Lcom/onesignal/OneSignal;->lastEmailSubscriptionState:Lcom/onesignal/OSEmailSubscriptionState;

    .line 604
    :cond_1
    sget-object p0, Lcom/onesignal/OneSignal;->lastEmailSubscriptionState:Lcom/onesignal/OSEmailSubscriptionState;

    return-object p0
.end method

.method private static getLastPermissionState(Landroid/content/Context;)Lcom/onesignal/OSPermissionState;
    .locals 1

    if-nez p0, :cond_0

    const/4 p0, 0x0

    return-object p0

    .line 530
    :cond_0
    sget-object p0, Lcom/onesignal/OneSignal;->lastPermissionState:Lcom/onesignal/OSPermissionState;

    if-nez p0, :cond_1

    .line 531
    new-instance p0, Lcom/onesignal/OSPermissionState;

    const/4 v0, 0x1

    invoke-direct {p0, v0}, Lcom/onesignal/OSPermissionState;-><init>(Z)V

    sput-object p0, Lcom/onesignal/OneSignal;->lastPermissionState:Lcom/onesignal/OSPermissionState;

    .line 533
    :cond_1
    sget-object p0, Lcom/onesignal/OneSignal;->lastPermissionState:Lcom/onesignal/OSPermissionState;

    return-object p0
.end method

.method private static getLastSMSSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSSMSSubscriptionState;
    .locals 1

    if-nez p0, :cond_0

    const/4 p0, 0x0

    return-object p0

    .line 637
    :cond_0
    sget-object p0, Lcom/onesignal/OneSignal;->lastSMSSubscriptionState:Lcom/onesignal/OSSMSSubscriptionState;

    if-nez p0, :cond_1

    .line 638
    new-instance p0, Lcom/onesignal/OSSMSSubscriptionState;

    const/4 v0, 0x1

    invoke-direct {p0, v0}, Lcom/onesignal/OSSMSSubscriptionState;-><init>(Z)V

    sput-object p0, Lcom/onesignal/OneSignal;->lastSMSSubscriptionState:Lcom/onesignal/OSSMSSubscriptionState;

    .line 640
    :cond_1
    sget-object p0, Lcom/onesignal/OneSignal;->lastSMSSubscriptionState:Lcom/onesignal/OSSMSSubscriptionState;

    return-object p0
.end method

.method private static getLastSessionTime()J
    .locals 4

    .line 2699
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "OS_LAST_SESSION_TIME"

    const-wide/16 v2, -0x7918

    invoke-static {v0, v1, v2, v3}, Lcom/onesignal/OneSignalPrefs;->getLong(Ljava/lang/String;Ljava/lang/String;J)J

    move-result-wide v0

    return-wide v0
.end method

.method private static getLastSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSSubscriptionState;
    .locals 2

    if-nez p0, :cond_0

    const/4 p0, 0x0

    return-object p0

    .line 564
    :cond_0
    sget-object p0, Lcom/onesignal/OneSignal;->lastSubscriptionState:Lcom/onesignal/OSSubscriptionState;

    if-nez p0, :cond_1

    .line 565
    new-instance p0, Lcom/onesignal/OSSubscriptionState;

    const/4 v0, 0x1

    const/4 v1, 0x0

    invoke-direct {p0, v0, v1}, Lcom/onesignal/OSSubscriptionState;-><init>(ZZ)V

    sput-object p0, Lcom/onesignal/OneSignal;->lastSubscriptionState:Lcom/onesignal/OSSubscriptionState;

    .line 567
    :cond_1
    sget-object p0, Lcom/onesignal/OneSignal;->lastSubscriptionState:Lcom/onesignal/OSSubscriptionState;

    return-object p0
.end method

.method private static getLogLevel(I)Lcom/onesignal/OneSignal$LOG_LEVEL;
    .locals 0

    packed-switch p0, :pswitch_data_0

    if-gez p0, :cond_0

    .line 1280
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->NONE:Lcom/onesignal/OneSignal$LOG_LEVEL;

    return-object p0

    .line 1276
    :pswitch_0
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->VERBOSE:Lcom/onesignal/OneSignal$LOG_LEVEL;

    return-object p0

    .line 1274
    :pswitch_1
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    return-object p0

    .line 1272
    :pswitch_2
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->INFO:Lcom/onesignal/OneSignal$LOG_LEVEL;

    return-object p0

    .line 1270
    :pswitch_3
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->WARN:Lcom/onesignal/OneSignal$LOG_LEVEL;

    return-object p0

    .line 1268
    :pswitch_4
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    return-object p0

    .line 1266
    :pswitch_5
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->FATAL:Lcom/onesignal/OneSignal$LOG_LEVEL;

    return-object p0

    .line 1264
    :pswitch_6
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->NONE:Lcom/onesignal/OneSignal$LOG_LEVEL;

    return-object p0

    .line 1281
    :cond_0
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->VERBOSE:Lcom/onesignal/OneSignal$LOG_LEVEL;

    return-object p0

    :pswitch_data_0
    .packed-switch 0x0
        :pswitch_6
        :pswitch_5
        :pswitch_4
        :pswitch_3
        :pswitch_2
        :pswitch_1
        :pswitch_0
    .end packed-switch
.end method

.method static getLogger()Lcom/onesignal/OSLogger;
    .locals 1

    .line 442
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    return-object v0
.end method

.method static getNotificationIdFromFCMJson(Lorg/json/JSONObject;)Ljava/lang/String;
    .locals 4

    .line 3194
    const-string v0, "i"

    const/4 v1, 0x0

    if-nez p0, :cond_0

    return-object v1

    .line 3197
    :cond_0
    :try_start_0
    new-instance v2, Lorg/json/JSONObject;

    const-string v3, "custom"

    invoke-virtual {p0, v3}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    invoke-direct {v2, p0}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    .line 3199
    invoke-virtual {v2, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result p0

    if-eqz p0, :cond_1

    .line 3200
    invoke-virtual {v2, v0, v1}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    return-object p0

    .line 3202
    :cond_1
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "Not a OneSignal formatted FCM message. No \'i\' field in custom."

    invoke-interface {p0, v0}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    .line 3204
    :catch_0
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "Not a OneSignal formatted FCM message. No \'custom\' field in the JSONObject."

    invoke-interface {p0, v0}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    :goto_0
    return-object v1
.end method

.method static getOutcomeEventsController()Lcom/onesignal/OSOutcomeEventsController;
    .locals 6

    .line 478
    sget-object v0, Lcom/onesignal/OneSignal;->outcomeEventsController:Lcom/onesignal/OSOutcomeEventsController;

    if-nez v0, :cond_2

    .line 479
    sget-object v0, Lcom/onesignal/OneSignal;->outcomeEventsControllerSyncLock:Ljava/lang/Object;

    monitor-enter v0

    .line 480
    :try_start_0
    sget-object v1, Lcom/onesignal/OneSignal;->outcomeEventsController:Lcom/onesignal/OSOutcomeEventsController;

    if-nez v1, :cond_1

    .line 481
    sget-object v1, Lcom/onesignal/OneSignal;->outcomeEventsFactory:Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

    if-nez v1, :cond_0

    .line 482
    invoke-static {}, Lcom/onesignal/OneSignal;->getDBHelperInstance()Lcom/onesignal/OneSignalDbHelper;

    move-result-object v1

    .line 483
    new-instance v2, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

    sget-object v3, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    sget-object v4, Lcom/onesignal/OneSignal;->apiClient:Lcom/onesignal/OneSignalAPIClient;

    sget-object v5, Lcom/onesignal/OneSignal;->preferences:Lcom/onesignal/OSSharedPreferences;

    invoke-direct {v2, v3, v4, v1, v5}, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;-><init>(Lcom/onesignal/OSLogger;Lcom/onesignal/OneSignalAPIClient;Lcom/onesignal/OneSignalDb;Lcom/onesignal/OSSharedPreferences;)V

    sput-object v2, Lcom/onesignal/OneSignal;->outcomeEventsFactory:Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

    .line 485
    :cond_0
    new-instance v1, Lcom/onesignal/OSOutcomeEventsController;

    sget-object v2, Lcom/onesignal/OneSignal;->sessionManager:Lcom/onesignal/OSSessionManager;

    sget-object v3, Lcom/onesignal/OneSignal;->outcomeEventsFactory:Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

    invoke-direct {v1, v2, v3}, Lcom/onesignal/OSOutcomeEventsController;-><init>(Lcom/onesignal/OSSessionManager;Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;)V

    sput-object v1, Lcom/onesignal/OneSignal;->outcomeEventsController:Lcom/onesignal/OSOutcomeEventsController;

    .line 487
    :cond_1
    monitor-exit v0

    goto :goto_0

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1

    .line 489
    :cond_2
    :goto_0
    sget-object v0, Lcom/onesignal/OneSignal;->outcomeEventsController:Lcom/onesignal/OSOutcomeEventsController;

    return-object v0
.end method

.method static getPermissionStateChangesObserver()Lcom/onesignal/OSObservable;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/onesignal/OSObservable<",
            "Lcom/onesignal/OSPermissionObserver;",
            "Lcom/onesignal/OSPermissionStateChanges;",
            ">;"
        }
    .end annotation

    .line 538
    sget-object v0, Lcom/onesignal/OneSignal;->permissionStateChangesObserver:Lcom/onesignal/OSObservable;

    if-nez v0, :cond_0

    .line 539
    new-instance v0, Lcom/onesignal/OSObservable;

    const-string v1, "onOSPermissionChanged"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Lcom/onesignal/OSObservable;-><init>(Ljava/lang/String;Z)V

    sput-object v0, Lcom/onesignal/OneSignal;->permissionStateChangesObserver:Lcom/onesignal/OSObservable;

    .line 540
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal;->permissionStateChangesObserver:Lcom/onesignal/OSObservable;

    return-object v0
.end method

.method private static getPushRegistrator()Lcom/onesignal/PushRegistrator;
    .locals 1

    .line 1055
    sget-object v0, Lcom/onesignal/OneSignal;->mPushRegistrator:Lcom/onesignal/PushRegistrator;

    if-eqz v0, :cond_0

    return-object v0

    .line 1058
    :cond_0
    invoke-static {}, Lcom/onesignal/OSUtils;->isFireOSDeviceType()Z

    move-result v0

    if-eqz v0, :cond_1

    .line 1059
    new-instance v0, Lcom/onesignal/PushRegistratorADM;

    invoke-direct {v0}, Lcom/onesignal/PushRegistratorADM;-><init>()V

    sput-object v0, Lcom/onesignal/OneSignal;->mPushRegistrator:Lcom/onesignal/PushRegistrator;

    goto :goto_0

    .line 1060
    :cond_1
    invoke-static {}, Lcom/onesignal/OSUtils;->isAndroidDeviceType()Z

    move-result v0

    if-eqz v0, :cond_2

    .line 1061
    invoke-static {}, Lcom/onesignal/OSUtils;->hasFCMLibrary()Z

    move-result v0

    if-eqz v0, :cond_3

    .line 1062
    invoke-static {}, Lcom/onesignal/OneSignal;->getPushRegistratorFCM()Lcom/onesignal/PushRegistratorFCM;

    move-result-object v0

    sput-object v0, Lcom/onesignal/OneSignal;->mPushRegistrator:Lcom/onesignal/PushRegistrator;

    goto :goto_0

    .line 1064
    :cond_2
    new-instance v0, Lcom/onesignal/PushRegistratorHMS;

    invoke-direct {v0}, Lcom/onesignal/PushRegistratorHMS;-><init>()V

    sput-object v0, Lcom/onesignal/OneSignal;->mPushRegistrator:Lcom/onesignal/PushRegistrator;

    .line 1066
    :cond_3
    :goto_0
    sget-object v0, Lcom/onesignal/OneSignal;->mPushRegistrator:Lcom/onesignal/PushRegistrator;

    return-object v0
.end method

.method private static getPushRegistratorFCM()Lcom/onesignal/PushRegistratorFCM;
    .locals 4

    .line 1071
    sget-object v0, Lcom/onesignal/OneSignal;->remoteParamController:Lcom/onesignal/OSRemoteParamController;

    invoke-virtual {v0}, Lcom/onesignal/OSRemoteParamController;->getRemoteParams()Lcom/onesignal/OneSignalRemoteParams$Params;

    move-result-object v0

    iget-object v0, v0, Lcom/onesignal/OneSignalRemoteParams$Params;->fcmParams:Lcom/onesignal/OneSignalRemoteParams$FCMParams;

    if-eqz v0, :cond_0

    .line 1074
    new-instance v1, Lcom/onesignal/PushRegistratorFCM$Params;

    iget-object v2, v0, Lcom/onesignal/OneSignalRemoteParams$FCMParams;->projectId:Ljava/lang/String;

    iget-object v3, v0, Lcom/onesignal/OneSignalRemoteParams$FCMParams;->appId:Ljava/lang/String;

    iget-object v0, v0, Lcom/onesignal/OneSignalRemoteParams$FCMParams;->apiKey:Ljava/lang/String;

    invoke-direct {v1, v2, v3, v0}, Lcom/onesignal/PushRegistratorFCM$Params;-><init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    goto :goto_0

    :cond_0
    const/4 v1, 0x0

    .line 1076
    :goto_0
    new-instance v0, Lcom/onesignal/PushRegistratorFCM;

    sget-object v2, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-direct {v0, v2, v1}, Lcom/onesignal/PushRegistratorFCM;-><init>(Landroid/content/Context;Lcom/onesignal/PushRegistratorFCM$Params;)V

    return-object v0
.end method

.method static getRemoteParamController()Lcom/onesignal/OSRemoteParamController;
    .locals 1

    .line 3324
    sget-object v0, Lcom/onesignal/OneSignal;->remoteParamController:Lcom/onesignal/OSRemoteParamController;

    return-object v0
.end method

.method static getRemoteParams()Lcom/onesignal/OneSignalRemoteParams$Params;
    .locals 1

    .line 1195
    sget-object v0, Lcom/onesignal/OneSignal;->remoteParamController:Lcom/onesignal/OSRemoteParamController;

    invoke-virtual {v0}, Lcom/onesignal/OSRemoteParamController;->getRemoteParams()Lcom/onesignal/OneSignalRemoteParams$Params;

    move-result-object v0

    return-object v0
.end method

.method static getSMSId()Ljava/lang/String;
    .locals 3

    .line 2612
    sget-object v0, Lcom/onesignal/OneSignal;->smsId:Ljava/lang/String;

    const/4 v1, 0x0

    if-nez v0, :cond_0

    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-eqz v0, :cond_0

    .line 2613
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v2, "PREFS_OS_SMS_ID"

    invoke-static {v0, v2, v1}, Lcom/onesignal/OneSignalPrefs;->getString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    sput-object v0, Lcom/onesignal/OneSignal;->smsId:Ljava/lang/String;

    .line 2619
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal;->smsId:Ljava/lang/String;

    invoke-static {v0}, Landroid/text/TextUtils;->isEmpty(Ljava/lang/CharSequence;)Z

    move-result v0

    if-eqz v0, :cond_1

    return-object v1

    .line 2622
    :cond_1
    sget-object v0, Lcom/onesignal/OneSignal;->smsId:Ljava/lang/String;

    return-object v0
.end method

.method static getSMSSubscriptionState()Lcom/onesignal/OSSMSSubscriptionState;
    .locals 1

    .line 629
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->getCurrentSMSSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSSMSSubscriptionState;

    move-result-object v0

    return-object v0
.end method

.method static getSMSSubscriptionStateChangesObserver()Lcom/onesignal/OSObservable;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/onesignal/OSObservable<",
            "Lcom/onesignal/OSSMSSubscriptionObserver;",
            "Lcom/onesignal/OSSMSSubscriptionStateChanges;",
            ">;"
        }
    .end annotation

    .line 645
    sget-object v0, Lcom/onesignal/OneSignal;->smsSubscriptionStateChangesObserver:Lcom/onesignal/OSObservable;

    if-nez v0, :cond_0

    .line 646
    new-instance v0, Lcom/onesignal/OSObservable;

    const-string v1, "onSMSSubscriptionChanged"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Lcom/onesignal/OSObservable;-><init>(Ljava/lang/String;Z)V

    sput-object v0, Lcom/onesignal/OneSignal;->smsSubscriptionStateChangesObserver:Lcom/onesignal/OSObservable;

    .line 647
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal;->smsSubscriptionStateChangesObserver:Lcom/onesignal/OSObservable;

    return-object v0
.end method

.method static getSavedAppId()Ljava/lang/String;
    .locals 1

    .line 2533
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->getSavedAppId(Landroid/content/Context;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method private static getSavedAppId(Landroid/content/Context;)Ljava/lang/String;
    .locals 2

    const/4 v0, 0x0

    if-nez p0, :cond_0

    return-object v0

    .line 2540
    :cond_0
    sget-object p0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "GT_APP_ID"

    invoke-static {p0, v1, v0}, Lcom/onesignal/OneSignalPrefs;->getString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    return-object p0
.end method

.method private static getSavedUserId(Landroid/content/Context;)Ljava/lang/String;
    .locals 2

    const/4 v0, 0x0

    if-nez p0, :cond_0

    return-object v0

    .line 2550
    :cond_0
    sget-object p0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "GT_PLAYER_ID"

    invoke-static {p0, v1, v0}, Lcom/onesignal/OneSignalPrefs;->getString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    return-object p0
.end method

.method public static getSdkVersionRaw()Ljava/lang/String;
    .locals 1

    .line 437
    const-string v0, "040810"

    return-object v0
.end method

.method static getSessionListener()Lcom/onesignal/OSSessionManager$SessionListener;
    .locals 1

    .line 3320
    sget-object v0, Lcom/onesignal/OneSignal;->sessionListener:Lcom/onesignal/OSSessionManager$SessionListener;

    return-object v0
.end method

.method static getSessionManager()Lcom/onesignal/OSSessionManager;
    .locals 1

    .line 3358
    sget-object v0, Lcom/onesignal/OneSignal;->sessionManager:Lcom/onesignal/OSSessionManager;

    return-object v0
.end method

.method static getSharedPreferences()Lcom/onesignal/OSSharedPreferences;
    .locals 1

    .line 468
    sget-object v0, Lcom/onesignal/OneSignal;->preferences:Lcom/onesignal/OSSharedPreferences;

    return-object v0
.end method

.method static getSubscriptionStateChangesObserver()Lcom/onesignal/OSObservable;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Lcom/onesignal/OSObservable<",
            "Lcom/onesignal/OSSubscriptionObserver;",
            "Lcom/onesignal/OSSubscriptionStateChanges;",
            ">;"
        }
    .end annotation

    .line 572
    sget-object v0, Lcom/onesignal/OneSignal;->subscriptionStateChangesObserver:Lcom/onesignal/OSObservable;

    if-nez v0, :cond_0

    .line 573
    new-instance v0, Lcom/onesignal/OSObservable;

    const-string v1, "onOSSubscriptionChanged"

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Lcom/onesignal/OSObservable;-><init>(Ljava/lang/String;Z)V

    sput-object v0, Lcom/onesignal/OneSignal;->subscriptionStateChangesObserver:Lcom/onesignal/OSObservable;

    .line 574
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal;->subscriptionStateChangesObserver:Lcom/onesignal/OSObservable;

    return-object v0
.end method

.method public static getTags(Lcom/onesignal/OneSignal$OSGetTagsHandler;)V
    .locals 2

    .line 2126
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    const-string v1, "getTags()"

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->shouldQueueTaskForInit(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 2127
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting for remote params. Moving getTags() operation to a pending queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 2129
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$22;

    invoke-direct {v1, p0}, Lcom/onesignal/OneSignal$22;-><init>(Lcom/onesignal/OneSignal$OSGetTagsHandler;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void

    .line 2140
    :cond_0
    invoke-static {v1}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    return-void

    :cond_1
    if-nez p0, :cond_2

    .line 2144
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "getTags called with null GetTagsHandler!"

    invoke-interface {p0, v0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    return-void

    .line 2148
    :cond_2
    new-instance v0, Ljava/lang/Thread;

    new-instance v1, Lcom/onesignal/OneSignal$23;

    invoke-direct {v1, p0}, Lcom/onesignal/OneSignal$23;-><init>(Lcom/onesignal/OneSignal$OSGetTagsHandler;)V

    const-string p0, "OS_GETTAGS"

    invoke-direct {v0, v1, p0}, Ljava/lang/Thread;-><init>(Ljava/lang/Runnable;Ljava/lang/String;)V

    .line 2161
    invoke-virtual {v0}, Ljava/lang/Thread;->start()V

    return-void
.end method

.method static getTaskController()Lcom/onesignal/OSTaskController;
    .locals 1

    .line 3340
    sget-object v0, Lcom/onesignal/OneSignal;->taskController:Lcom/onesignal/OSTaskController;

    return-object v0
.end method

.method static getTaskRemoteController()Lcom/onesignal/OSTaskController;
    .locals 1

    .line 3336
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    return-object v0
.end method

.method static getTime()Lcom/onesignal/OSTime;
    .locals 1

    .line 3297
    sget-object v0, Lcom/onesignal/OneSignal;->time:Lcom/onesignal/OSTime;

    return-object v0
.end method

.method private static getTimeZoneId()Ljava/lang/String;
    .locals 2

    .line 1471
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x1a

    if-lt v0, v1, :cond_0

    .line 1472
    invoke-static {}, Ljava/time/ZoneId;->systemDefault()Ljava/time/ZoneId;

    move-result-object v0

    invoke-virtual {v0}, Ljava/time/ZoneId;->getId()Ljava/lang/String;

    move-result-object v0

    return-object v0

    .line 1474
    :cond_0
    invoke-static {}, Ljava/util/TimeZone;->getDefault()Ljava/util/TimeZone;

    move-result-object v0

    invoke-virtual {v0}, Ljava/util/TimeZone;->getID()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method private static getTimeZoneOffset()I
    .locals 3

    .line 1461
    invoke-static {}, Ljava/util/Calendar;->getInstance()Ljava/util/Calendar;

    move-result-object v0

    invoke-virtual {v0}, Ljava/util/Calendar;->getTimeZone()Ljava/util/TimeZone;

    move-result-object v0

    .line 1462
    invoke-virtual {v0}, Ljava/util/TimeZone;->getRawOffset()I

    move-result v1

    .line 1464
    new-instance v2, Ljava/util/Date;

    invoke-direct {v2}, Ljava/util/Date;-><init>()V

    invoke-virtual {v0, v2}, Ljava/util/TimeZone;->inDaylightTime(Ljava/util/Date;)Z

    move-result v2

    if-eqz v2, :cond_0

    .line 1465
    invoke-virtual {v0}, Ljava/util/TimeZone;->getDSTSavings()I

    move-result v0

    add-int/2addr v1, v0

    .line 1467
    :cond_0
    div-int/lit16 v1, v1, 0x3e8

    return v1
.end method

.method public static getTriggerValueForKey(Ljava/lang/String;)Ljava/lang/Object;
    .locals 1

    .line 3125
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez v0, :cond_0

    .line 3126
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "Before calling getTriggerValueForKey, Make sure OneSignal initWithContext and setAppId is called first"

    invoke-interface {p0, v0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    const/4 p0, 0x0

    return-object p0

    .line 3130
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/OSInAppMessageController;->getTriggerValue(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object p0

    return-object p0
.end method

.method public static getTriggers()Ljava/util/Map;
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

    .line 3135
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez v0, :cond_0

    .line 3136
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Before calling getTriggers, Make sure OneSignal initWithContext and setAppId is called first"

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 3137
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    return-object v0

    .line 3140
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageController;->getTriggers()Ljava/util/Map;

    move-result-object v0

    return-object v0
.end method

.method static getUserId()Ljava/lang/String;
    .locals 1

    .line 2561
    sget-object v0, Lcom/onesignal/OneSignal;->userId:Ljava/lang/String;

    if-nez v0, :cond_0

    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-eqz v0, :cond_0

    .line 2562
    invoke-static {v0}, Lcom/onesignal/OneSignal;->getSavedUserId(Landroid/content/Context;)Ljava/lang/String;

    move-result-object v0

    sput-object v0, Lcom/onesignal/OneSignal;->userId:Ljava/lang/String;

    .line 2564
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal;->userId:Ljava/lang/String;

    return-object v0
.end method

.method private static handleActivityLifecycleHandler(Landroid/content/Context;)V
    .locals 8

    .line 964
    invoke-static {}, Lcom/onesignal/ActivityLifecycleListener;->getActivityLifecycleHandler()Lcom/onesignal/ActivityLifecycleHandler;

    move-result-object v0

    .line 965
    instance-of v1, p0, Landroid/app/Activity;

    .line 966
    invoke-static {}, Lcom/onesignal/OneSignal;->getCurrentActivity()Landroid/app/Activity;

    move-result-object v2

    const/4 v3, 0x0

    const/4 v4, 0x1

    if-nez v2, :cond_0

    move v2, v4

    goto :goto_0

    :cond_0
    move v2, v3

    :goto_0
    if-eqz v2, :cond_2

    if-eqz v1, :cond_1

    goto :goto_1

    :cond_1
    move v5, v3

    goto :goto_2

    :cond_2
    :goto_1
    move v5, v4

    .line 967
    :goto_2
    invoke-static {v5}, Lcom/onesignal/OneSignal;->setInForeground(Z)V

    .line 968
    sget-object v5, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    new-instance v6, Ljava/lang/StringBuilder;

    const-string v7, "OneSignal handleActivityLifecycleHandler inForeground: "

    invoke-direct {v6, v7}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    sget-boolean v7, Lcom/onesignal/OneSignal;->inForeground:Z

    invoke-virtual {v6, v7}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v6

    invoke-virtual {v6}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v6

    invoke-interface {v5, v6}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 970
    sget-boolean v5, Lcom/onesignal/OneSignal;->inForeground:Z

    if-eqz v5, :cond_4

    if-eqz v2, :cond_3

    if-eqz v1, :cond_3

    if-eqz v0, :cond_3

    .line 972
    move-object v1, p0

    check-cast v1, Landroid/app/Activity;

    invoke-virtual {v0, v1}, Lcom/onesignal/ActivityLifecycleHandler;->setCurActivity(Landroid/app/Activity;)V

    .line 973
    invoke-virtual {v0, v4}, Lcom/onesignal/ActivityLifecycleHandler;->setNextResumeIsFirstActivity(Z)V

    .line 975
    :cond_3
    invoke-static {p0, v3}, Lcom/onesignal/OSNotificationRestoreWorkManager;->beginEnqueueingWork(Landroid/content/Context;Z)V

    .line 976
    invoke-static {}, Lcom/onesignal/OneSignal;->getFocusTimeController()Lcom/onesignal/FocusTimeController;

    move-result-object p0

    invoke-virtual {p0}, Lcom/onesignal/FocusTimeController;->appForegrounded()V

    goto :goto_3

    :cond_4
    if-eqz v0, :cond_5

    .line 978
    invoke-virtual {v0, v4}, Lcom/onesignal/ActivityLifecycleHandler;->setNextResumeIsFirstActivity(Z)V

    :cond_5
    :goto_3
    return-void
.end method

.method private static handleAmazonPurchase()V
    .locals 2

    .line 984
    :try_start_0
    const-string v0, "com.amazon.device.iap.PurchasingListener"

    invoke-static {v0}, Ljava/lang/Class;->forName(Ljava/lang/String;)Ljava/lang/Class;

    .line 985
    new-instance v0, Lcom/onesignal/TrackAmazonPurchase;

    sget-object v1, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-direct {v0, v1}, Lcom/onesignal/TrackAmazonPurchase;-><init>(Landroid/content/Context;)V

    sput-object v0, Lcom/onesignal/OneSignal;->trackAmazonPurchase:Lcom/onesignal/TrackAmazonPurchase;
    :try_end_0
    .catch Ljava/lang/ClassNotFoundException; {:try_start_0 .. :try_end_0} :catch_0

    :catch_0
    return-void
.end method

.method private static handleAppIdChange()V
    .locals 4

    .line 939
    invoke-static {}, Lcom/onesignal/OneSignal;->getSavedAppId()Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 941
    sget-object v1, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-nez v1, :cond_1

    .line 942
    sget-object v1, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "App id has changed:\nFrom: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v2, "\n To: "

    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    sget-object v2, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v2, "\nClearing the user id, app state, and remoteParams as they are no longer valid"

    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v1, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 943
    sget-object v0, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->saveAppId(Ljava/lang/String;)V

    .line 944
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->resetCurrentState()V

    .line 945
    sget-object v0, Lcom/onesignal/OneSignal;->remoteParamController:Lcom/onesignal/OSRemoteParamController;

    invoke-virtual {v0}, Lcom/onesignal/OSRemoteParamController;->clearRemoteParams()V

    goto :goto_0

    .line 949
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "App id set for first time:  "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    sget-object v2, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    const/4 v0, 0x0

    .line 950
    sget-object v1, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v0, v1}, Lcom/onesignal/BadgeCountUpdater;->updateCount(ILandroid/content/Context;)V

    .line 951
    sget-object v0, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->saveAppId(Ljava/lang/String;)V

    :cond_1
    :goto_0
    return-void
.end method

.method static handleFailedEmailLogout()V
    .locals 4

    .line 3247
    sget-object v0, Lcom/onesignal/OneSignal;->emailLogoutHandler:Lcom/onesignal/OneSignal$EmailUpdateHandler;

    if-eqz v0, :cond_0

    .line 3248
    new-instance v1, Lcom/onesignal/OneSignal$EmailUpdateError;

    sget-object v2, Lcom/onesignal/OneSignal$EmailErrorType;->NETWORK:Lcom/onesignal/OneSignal$EmailErrorType;

    const-string v3, "Failed due to network failure. Will retry on next sync."

    invoke-direct {v1, v2, v3}, Lcom/onesignal/OneSignal$EmailUpdateError;-><init>(Lcom/onesignal/OneSignal$EmailErrorType;Ljava/lang/String;)V

    invoke-interface {v0, v1}, Lcom/onesignal/OneSignal$EmailUpdateHandler;->onFailure(Lcom/onesignal/OneSignal$EmailUpdateError;)V

    const/4 v0, 0x0

    .line 3249
    sput-object v0, Lcom/onesignal/OneSignal;->emailLogoutHandler:Lcom/onesignal/OneSignal$EmailUpdateHandler;

    :cond_0
    return-void
.end method

.method static handleFailedSMSLogout()V
    .locals 4

    .line 3275
    sget-object v0, Lcom/onesignal/OneSignal;->smsLogoutHandler:Lcom/onesignal/OneSignal$OSSMSUpdateHandler;

    if-eqz v0, :cond_0

    .line 3276
    new-instance v1, Lcom/onesignal/OneSignal$OSSMSUpdateError;

    sget-object v2, Lcom/onesignal/OneSignal$SMSErrorType;->NETWORK:Lcom/onesignal/OneSignal$SMSErrorType;

    const-string v3, "Failed due to network failure. Will retry on next sync."

    invoke-direct {v1, v2, v3}, Lcom/onesignal/OneSignal$OSSMSUpdateError;-><init>(Lcom/onesignal/OneSignal$SMSErrorType;Ljava/lang/String;)V

    invoke-interface {v0, v1}, Lcom/onesignal/OneSignal$OSSMSUpdateHandler;->onFailure(Lcom/onesignal/OneSignal$OSSMSUpdateError;)V

    const/4 v0, 0x0

    .line 3277
    sput-object v0, Lcom/onesignal/OneSignal;->smsLogoutHandler:Lcom/onesignal/OneSignal$OSSMSUpdateHandler;

    :cond_0
    return-void
.end method

.method static handleNotificationOpen(Landroid/app/Activity;Lorg/json/JSONArray;Ljava/lang/String;)V
    .locals 2

    const/4 v0, 0x0

    .line 2425
    invoke-static {v0}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 2428
    :cond_0
    invoke-static {p0, p1}, Lcom/onesignal/OneSignal;->notificationOpenedRESTCall(Landroid/content/Context;Lorg/json/JSONArray;)V

    .line 2430
    sget-object v0, Lcom/onesignal/OneSignal;->trackFirebaseAnalytics:Lcom/onesignal/TrackFirebaseAnalytics;

    if-eqz v0, :cond_1

    invoke-static {}, Lcom/onesignal/OneSignal;->getFirebaseAnalyticsEnabled()Z

    move-result v0

    if-eqz v0, :cond_1

    .line 2431
    sget-object v0, Lcom/onesignal/OneSignal;->trackFirebaseAnalytics:Lcom/onesignal/TrackFirebaseAnalytics;

    invoke-static {p1}, Lcom/onesignal/OneSignal;->generateNotificationOpenedResult(Lorg/json/JSONArray;)Lcom/onesignal/OSNotificationOpenedResult;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/onesignal/TrackFirebaseAnalytics;->trackOpenedEvent(Lcom/onesignal/OSNotificationOpenedResult;)V

    .line 2433
    :cond_1
    invoke-static {p0, p1}, Lcom/onesignal/OneSignal;->shouldInitDirectSessionFromNotificationOpen(Landroid/app/Activity;Lorg/json/JSONArray;)Z

    move-result v0

    if-eqz v0, :cond_2

    .line 2434
    invoke-static {p2}, Lcom/onesignal/OneSignal;->applicationOpenedByNotification(Ljava/lang/String;)V

    .line 2437
    :cond_2
    invoke-static {p0, p1}, Lcom/onesignal/OneSignal;->openDestinationActivity(Landroid/app/Activity;Lorg/json/JSONArray;)V

    .line 2439
    invoke-static {p1}, Lcom/onesignal/OneSignal;->runNotificationOpenedCallback(Lorg/json/JSONArray;)V

    return-void
.end method

.method static handleNotificationReceived(Lcom/onesignal/OSNotificationGenerationJob;)V
    .locals 2

    .line 2364
    :try_start_0
    new-instance v0, Lorg/json/JSONObject;

    invoke-virtual {p0}, Lcom/onesignal/OSNotificationGenerationJob;->getJsonPayload()Lorg/json/JSONObject;

    move-result-object v1

    invoke-virtual {v1}, Lorg/json/JSONObject;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-direct {v0, v1}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    .line 2365
    const-string v1, "androidNotificationId"

    invoke-virtual {p0}, Lcom/onesignal/OSNotificationGenerationJob;->getAndroidId()Ljava/lang/Integer;

    move-result-object p0

    invoke-virtual {v0, v1, p0}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 2367
    invoke-static {v0}, Lcom/onesignal/NotificationBundleProcessor;->newJsonArray(Lorg/json/JSONObject;)Lorg/json/JSONArray;

    move-result-object p0

    invoke-static {p0}, Lcom/onesignal/OneSignal;->generateNotificationOpenedResult(Lorg/json/JSONArray;)Lcom/onesignal/OSNotificationOpenedResult;

    move-result-object p0

    .line 2368
    sget-object v0, Lcom/onesignal/OneSignal;->trackFirebaseAnalytics:Lcom/onesignal/TrackFirebaseAnalytics;

    if-eqz v0, :cond_0

    invoke-static {}, Lcom/onesignal/OneSignal;->getFirebaseAnalyticsEnabled()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 2369
    sget-object v0, Lcom/onesignal/OneSignal;->trackFirebaseAnalytics:Lcom/onesignal/TrackFirebaseAnalytics;

    invoke-virtual {v0, p0}, Lcom/onesignal/TrackFirebaseAnalytics;->trackReceivedEvent(Lcom/onesignal/OSNotificationOpenedResult;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p0

    .line 2372
    invoke-virtual {p0}, Lorg/json/JSONException;->printStackTrace()V

    :cond_0
    :goto_0
    return-void
.end method

.method static handleSuccessfulEmailLogout()V
    .locals 1

    .line 3240
    sget-object v0, Lcom/onesignal/OneSignal;->emailLogoutHandler:Lcom/onesignal/OneSignal$EmailUpdateHandler;

    if-eqz v0, :cond_0

    .line 3241
    invoke-interface {v0}, Lcom/onesignal/OneSignal$EmailUpdateHandler;->onSuccess()V

    const/4 v0, 0x0

    .line 3242
    sput-object v0, Lcom/onesignal/OneSignal;->emailLogoutHandler:Lcom/onesignal/OneSignal$EmailUpdateHandler;

    :cond_0
    return-void
.end method

.method static handleSuccessfulSMSlLogout(Lorg/json/JSONObject;)V
    .locals 1

    .line 3268
    sget-object v0, Lcom/onesignal/OneSignal;->smsLogoutHandler:Lcom/onesignal/OneSignal$OSSMSUpdateHandler;

    if-eqz v0, :cond_0

    .line 3269
    invoke-interface {v0, p0}, Lcom/onesignal/OneSignal$OSSMSUpdateHandler;->onSuccess(Lorg/json/JSONObject;)V

    const/4 p0, 0x0

    .line 3270
    sput-object p0, Lcom/onesignal/OneSignal;->smsLogoutHandler:Lcom/onesignal/OneSignal$OSSMSUpdateHandler;

    :cond_0
    return-void
.end method

.method static hasEmailId()Z
    .locals 1

    .line 2579
    sget-object v0, Lcom/onesignal/OneSignal;->emailId:Ljava/lang/String;

    invoke-static {v0}, Landroid/text/TextUtils;->isEmpty(Ljava/lang/CharSequence;)Z

    move-result v0

    xor-int/lit8 v0, v0, 0x1

    return v0
.end method

.method static hasSMSlId()Z
    .locals 1

    .line 2608
    sget-object v0, Lcom/onesignal/OneSignal;->smsId:Ljava/lang/String;

    invoke-static {v0}, Landroid/text/TextUtils;->isEmpty(Ljava/lang/CharSequence;)Z

    move-result v0

    xor-int/lit8 v0, v0, 0x1

    return v0
.end method

.method static hasUserId()Z
    .locals 1

    .line 2557
    invoke-static {}, Lcom/onesignal/OneSignal;->getUserId()Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method private static declared-synchronized init(Landroid/content/Context;)V
    .locals 5

    const-class v0, Lcom/onesignal/OneSignal;

    monitor-enter v0

    .line 819
    :try_start_0
    sget-object v1, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v2, "Starting OneSignal initialization!"

    invoke-interface {v1, v2}, Lcom/onesignal/OSLogger;->verbose(Ljava/lang/String;)V

    .line 820
    sget-object v1, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v1}, Lcom/onesignal/OSNotificationController;->setupNotificationServiceExtension(Landroid/content/Context;)V

    .line 822
    invoke-static {}, Lcom/onesignal/OneSignal;->requiresUserPrivacyConsent()Z

    move-result v1

    const/4 v2, 0x0

    if-nez v1, :cond_8

    sget-object v1, Lcom/onesignal/OneSignal;->remoteParamController:Lcom/onesignal/OSRemoteParamController;

    invoke-virtual {v1}, Lcom/onesignal/OSRemoteParamController;->isRemoteParamsCallDone()Z

    move-result v1

    if-nez v1, :cond_0

    goto/16 :goto_1

    .line 842
    :cond_0
    sget v1, Lcom/onesignal/OneSignal;->subscribableStatus:I

    const v3, 0x7fffffff

    if-eq v1, v3, :cond_1

    goto :goto_0

    :cond_1
    sget-object v1, Lcom/onesignal/OneSignal;->osUtils:Lcom/onesignal/OSUtils;

    sget-object v3, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    sget-object v4, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    invoke-virtual {v1, v3, v4}, Lcom/onesignal/OSUtils;->initializationChecker(Landroid/content/Context;Ljava/lang/String;)I

    move-result v1

    :goto_0
    sput v1, Lcom/onesignal/OneSignal;->subscribableStatus:I

    .line 843
    invoke-static {}, Lcom/onesignal/OneSignal;->isSubscriptionStatusUninitializable()Z

    move-result v1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    if-eqz v1, :cond_2

    .line 844
    monitor-exit v0

    return-void

    .line 846
    :cond_2
    :try_start_1
    sget-boolean v1, Lcom/onesignal/OneSignal;->initDone:Z

    if-eqz v1, :cond_4

    .line 847
    sget-object p0, Lcom/onesignal/OneSignal;->notificationOpenedHandler:Lcom/onesignal/OneSignal$OSNotificationOpenedHandler;

    if-eqz p0, :cond_3

    .line 848
    invoke-static {}, Lcom/onesignal/OneSignal;->fireCallbackForOpenedNotifications()V

    .line 849
    :cond_3
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "OneSignal SDK initialization already completed."

    invoke-interface {p0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 850
    monitor-exit v0

    return-void

    .line 853
    :cond_4
    :try_start_2
    invoke-static {p0}, Lcom/onesignal/OneSignal;->handleActivityLifecycleHandler(Landroid/content/Context;)V

    .line 855
    sput-object v2, Lcom/onesignal/OneSignal;->appActivity:Ljava/lang/ref/WeakReference;

    .line 857
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->initUserState()V

    .line 860
    invoke-static {}, Lcom/onesignal/OneSignal;->handleAppIdChange()V

    .line 863
    invoke-static {}, Lcom/onesignal/OneSignal;->handleAmazonPurchase()V

    .line 865
    sget-object p0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {p0}, Lcom/onesignal/OneSignal;->getCurrentPermissionState(Landroid/content/Context;)Lcom/onesignal/OSPermissionState;

    move-result-object p0

    invoke-static {p0}, Lcom/onesignal/OSPermissionChangedInternalObserver;->handleInternalChanges(Lcom/onesignal/OSPermissionState;)V

    .line 869
    invoke-static {}, Lcom/onesignal/OneSignal;->doSessionInit()V

    .line 871
    sget-object p0, Lcom/onesignal/OneSignal;->notificationOpenedHandler:Lcom/onesignal/OneSignal$OSNotificationOpenedHandler;

    if-eqz p0, :cond_5

    .line 872
    invoke-static {}, Lcom/onesignal/OneSignal;->fireCallbackForOpenedNotifications()V

    .line 874
    :cond_5
    sget-object p0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {p0}, Lcom/onesignal/TrackGooglePurchase;->CanTrack(Landroid/content/Context;)Z

    move-result p0

    if-eqz p0, :cond_6

    .line 875
    new-instance p0, Lcom/onesignal/TrackGooglePurchase;

    sget-object v1, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-direct {p0, v1}, Lcom/onesignal/TrackGooglePurchase;-><init>(Landroid/content/Context;)V

    sput-object p0, Lcom/onesignal/OneSignal;->trackGooglePurchase:Lcom/onesignal/TrackGooglePurchase;

    .line 877
    :cond_6
    invoke-static {}, Lcom/onesignal/TrackFirebaseAnalytics;->CanTrack()Z

    move-result p0

    if-eqz p0, :cond_7

    .line 878
    new-instance p0, Lcom/onesignal/TrackFirebaseAnalytics;

    sget-object v1, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-direct {p0, v1}, Lcom/onesignal/TrackFirebaseAnalytics;-><init>(Landroid/content/Context;)V

    sput-object p0, Lcom/onesignal/OneSignal;->trackFirebaseAnalytics:Lcom/onesignal/TrackFirebaseAnalytics;

    :cond_7
    const/4 p0, 0x1

    .line 880
    sput-boolean p0, Lcom/onesignal/OneSignal;->initDone:Z

    .line 881
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->VERBOSE:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "OneSignal SDK initialization done."

    invoke-static {p0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 883
    invoke-static {}, Lcom/onesignal/OneSignal;->getOutcomeEventsController()Lcom/onesignal/OSOutcomeEventsController;

    move-result-object p0

    invoke-virtual {p0}, Lcom/onesignal/OSOutcomeEventsController;->sendSavedOutcomes()V

    .line 886
    sget-object p0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    invoke-virtual {p0}, Lcom/onesignal/OSTaskRemoteController;->startPendingTasks()V
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    .line 887
    monitor-exit v0

    return-void

    .line 823
    :cond_8
    :goto_1
    :try_start_3
    sget-object v1, Lcom/onesignal/OneSignal;->remoteParamController:Lcom/onesignal/OSRemoteParamController;

    invoke-virtual {v1}, Lcom/onesignal/OSRemoteParamController;->isRemoteParamsCallDone()Z

    move-result v1

    if-nez v1, :cond_9

    .line 824
    sget-object v1, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v3, "OneSignal SDK initialization delayed, waiting for remote params."

    invoke-interface {v1, v3}, Lcom/onesignal/OSLogger;->verbose(Ljava/lang/String;)V

    goto :goto_2

    .line 827
    :cond_9
    sget-object v1, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v3, "OneSignal SDK initialization delayed, waiting for privacy consent to be set."

    invoke-interface {v1, v3}, Lcom/onesignal/OSLogger;->verbose(Ljava/lang/String;)V

    .line 830
    :goto_2
    new-instance v1, Lcom/onesignal/DelayedConsentInitializationParameters;

    sget-object v3, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    sget-object v4, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    invoke-direct {v1, v3, v4}, Lcom/onesignal/DelayedConsentInitializationParameters;-><init>(Landroid/content/Context;Ljava/lang/String;)V

    sput-object v1, Lcom/onesignal/OneSignal;->delayedInitParams:Lcom/onesignal/DelayedConsentInitializationParameters;

    .line 831
    sget-object v1, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    .line 833
    sput-object v2, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    if-eqz v1, :cond_a

    if-eqz p0, :cond_a

    .line 837
    invoke-static {}, Lcom/onesignal/OneSignal;->getUserId()Ljava/lang/String;

    move-result-object p0

    const/4 v2, 0x0

    invoke-static {v1, p0, v2}, Lcom/onesignal/OneSignal;->makeAndroidParamsRequest(Ljava/lang/String;Ljava/lang/String;Z)V
    :try_end_3
    .catchall {:try_start_3 .. :try_end_3} :catchall_0

    .line 838
    :cond_a
    monitor-exit v0

    return-void

    :catchall_0
    move-exception p0

    :try_start_4
    monitor-exit v0
    :try_end_4
    .catchall {:try_start_4 .. :try_end_4} :catchall_0

    throw p0
.end method

.method public static initWithContext(Landroid/content/Context;)V
    .locals 3

    if-nez p0, :cond_0

    .line 750
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "initWithContext called with null context, ignoring!"

    invoke-interface {p0, v0}, Lcom/onesignal/OSLogger;->warning(Ljava/lang/String;)V

    return-void

    .line 754
    :cond_0
    instance-of v0, p0, Landroid/app/Activity;

    if-eqz v0, :cond_1

    .line 755
    new-instance v0, Ljava/lang/ref/WeakReference;

    move-object v1, p0

    check-cast v1, Landroid/app/Activity;

    invoke-direct {v0, v1}, Ljava/lang/ref/WeakReference;-><init>(Ljava/lang/Object;)V

    sput-object v0, Lcom/onesignal/OneSignal;->appActivity:Ljava/lang/ref/WeakReference;

    .line 757
    :cond_1
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez v0, :cond_2

    const/4 v0, 0x1

    goto :goto_0

    :cond_2
    const/4 v0, 0x0

    .line 758
    :goto_0
    invoke-virtual {p0}, Landroid/content/Context;->getApplicationContext()Landroid/content/Context;

    move-result-object v1

    sput-object v1, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    .line 760
    invoke-static {v0}, Lcom/onesignal/OneSignal;->setupContextListeners(Z)V

    .line 761
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->setupPrivacyConsent(Landroid/content/Context;)V

    .line 763
    sget-object v0, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    if-nez v0, :cond_4

    .line 765
    invoke-static {}, Lcom/onesignal/OneSignal;->getSavedAppId()Ljava/lang/String;

    move-result-object p0

    if-nez p0, :cond_3

    .line 767
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "appContext set, but please call setAppId(appId) with a valid appId to complete OneSignal init!"

    invoke-interface {p0, v0}, Lcom/onesignal/OSLogger;->warning(Ljava/lang/String;)V

    goto :goto_1

    .line 769
    :cond_3
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "appContext set and cached app id found, calling setAppId with: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->verbose(Ljava/lang/String;)V

    .line 770
    invoke-static {p0}, Lcom/onesignal/OneSignal;->setAppId(Ljava/lang/String;)V

    :goto_1
    return-void

    .line 774
    :cond_4
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "initWithContext called with: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->verbose(Ljava/lang/String;)V

    .line 776
    invoke-static {p0}, Lcom/onesignal/OneSignal;->init(Landroid/content/Context;)V

    return-void
.end method

.method private static internalFireGetTagsCallbacks()V
    .locals 3

    .line 2174
    sget-object v0, Lcom/onesignal/OneSignal;->pendingGetTagsHandlers:Ljava/util/ArrayList;

    monitor-enter v0

    .line 2175
    :try_start_0
    invoke-virtual {v0}, Ljava/util/ArrayList;->size()I

    move-result v1

    if-nez v1, :cond_0

    monitor-exit v0

    return-void

    .line 2176
    :cond_0
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 2178
    new-instance v0, Ljava/lang/Thread;

    new-instance v1, Lcom/onesignal/OneSignal$24;

    invoke-direct {v1}, Lcom/onesignal/OneSignal$24;-><init>()V

    const-string v2, "OS_GETTAGS_CALLBACK"

    invoke-direct {v0, v1, v2}, Ljava/lang/Thread;-><init>(Ljava/lang/Runnable;Ljava/lang/String;)V

    .line 2192
    invoke-virtual {v0}, Ljava/lang/Thread;->start()V

    return-void

    :catchall_0
    move-exception v1

    .line 2176
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw v1
.end method

.method static isAppActive()Z
    .locals 1

    .line 3211
    sget-boolean v0, Lcom/onesignal/OneSignal;->initDone:Z

    if-eqz v0, :cond_0

    invoke-static {}, Lcom/onesignal/OneSignal;->isInForeground()Z

    move-result v0

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public static isInAppMessagingPaused()Z
    .locals 2

    .line 3167
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez v0, :cond_0

    .line 3168
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Before calling isInAppMessagingPaused, Make sure OneSignal initWithContext and setAppId is called first"

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    const/4 v0, 0x0

    return v0

    .line 3172
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageController;->inAppMessagingEnabled()Z

    move-result v0

    xor-int/lit8 v0, v0, 0x1

    return v0
.end method

.method static isInForeground()Z
    .locals 1

    .line 419
    sget-boolean v0, Lcom/onesignal/OneSignal;->inForeground:Z

    return v0
.end method

.method static isInitDone()Z
    .locals 1

    .line 413
    sget-boolean v0, Lcom/onesignal/OneSignal;->initDone:Z

    return v0
.end method

.method public static isLocationShared()Z
    .locals 1

    .line 2682
    sget-object v0, Lcom/onesignal/OneSignal;->remoteParamController:Lcom/onesignal/OSRemoteParamController;

    invoke-virtual {v0}, Lcom/onesignal/OSRemoteParamController;->isLocationShared()Z

    move-result v0

    return v0
.end method

.method private static isPastOnSessionTime()Z
    .locals 9

    .line 3225
    invoke-static {}, Lcom/onesignal/OneSignal;->getTime()Lcom/onesignal/OSTime;

    move-result-object v0

    invoke-interface {v0}, Lcom/onesignal/OSTime;->getCurrentTimeMillis()J

    move-result-wide v0

    .line 3226
    invoke-static {}, Lcom/onesignal/OneSignal;->getLastSessionTime()J

    move-result-wide v2

    sub-long v4, v0, v2

    .line 3228
    sget-object v6, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    new-instance v7, Ljava/lang/StringBuilder;

    const-string v8, "isPastOnSessionTime currentTimeMillis: "

    invoke-direct {v7, v8}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v7, v0, v1}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " lastSessionTime: "

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, v2, v3}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " difference: "

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, v4, v5}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-interface {v6, v0}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    const-wide/16 v0, 0x7530

    cmp-long v0, v4, v0

    if-ltz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method private static isSubscriptionStatusUninitializable()Z
    .locals 2

    .line 960
    sget v0, Lcom/onesignal/OneSignal;->subscribableStatus:I

    const/16 v1, -0x3e7

    if-ne v0, v1, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method static isUserPrivacyConsentRequired()Z
    .locals 1

    .line 2686
    sget-object v0, Lcom/onesignal/OneSignal;->remoteParamController:Lcom/onesignal/OSRemoteParamController;

    invoke-virtual {v0}, Lcom/onesignal/OSRemoteParamController;->isPrivacyConsentRequired()Z

    move-result v0

    return v0
.end method

.method private static isValidOutcomeEntry(Ljava/lang/String;)Z
    .locals 1

    if-eqz p0, :cond_1

    .line 3457
    invoke-virtual {p0}, Ljava/lang/String;->isEmpty()Z

    move-result p0

    if-eqz p0, :cond_0

    goto :goto_0

    :cond_0
    const/4 p0, 0x1

    return p0

    .line 3458
    :cond_1
    :goto_0
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v0, "Outcome name must not be empty"

    invoke-static {p0, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    const/4 p0, 0x0

    return p0
.end method

.method private static isValidOutcomeValue(F)Z
    .locals 1

    const/4 v0, 0x0

    cmpg-float p0, p0, v0

    if-gtz p0, :cond_0

    .line 3467
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v0, "Outcome value must be greater than 0"

    invoke-static {p0, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    const/4 p0, 0x0

    return p0

    :cond_0
    const/4 p0, 0x1

    return p0
.end method

.method static logHttpError(Ljava/lang/String;ILjava/lang/Throwable;Ljava/lang/String;)V
    .locals 3

    if-eqz p3, :cond_0

    .line 1339
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->INFO:Lcom/onesignal/OneSignal$LOG_LEVEL;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->atLogLevel(Lcom/onesignal/OneSignal$LOG_LEVEL;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 1340
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "\n"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p3

    invoke-virtual {p3, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p3

    invoke-virtual {p3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p3

    goto :goto_0

    .line 1341
    :cond_0
    const-string p3, ""

    :goto_0
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->WARN:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "HTTP code: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v1, " "

    invoke-virtual {p1, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-static {v0, p0, p2}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    return-void
.end method

.method public static logoutEmail()V
    .locals 1

    const/4 v0, 0x0

    .line 1734
    invoke-static {v0}, Lcom/onesignal/OneSignal;->logoutEmail(Lcom/onesignal/OneSignal$EmailUpdateHandler;)V

    return-void
.end method

.method public static logoutEmail(Lcom/onesignal/OneSignal$EmailUpdateHandler;)V
    .locals 3

    .line 1738
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    const-string v1, "logoutEmail()"

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->shouldQueueTaskForInit(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 1739
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting for remote params. Moving logoutEmail() operation to a pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 1741
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$14;

    invoke-direct {v1, p0}, Lcom/onesignal/OneSignal$14;-><init>(Lcom/onesignal/OneSignal$EmailUpdateHandler;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void

    .line 1752
    :cond_0
    invoke-static {v1}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    return-void

    .line 1755
    :cond_1
    invoke-static {}, Lcom/onesignal/OneSignal;->getEmailId()Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_3

    .line 1757
    const-string v0, "logoutEmail not valid as email was not set or already logged out!"

    if-eqz p0, :cond_2

    .line 1758
    new-instance v1, Lcom/onesignal/OneSignal$EmailUpdateError;

    sget-object v2, Lcom/onesignal/OneSignal$EmailErrorType;->INVALID_OPERATION:Lcom/onesignal/OneSignal$EmailErrorType;

    invoke-direct {v1, v2, v0}, Lcom/onesignal/OneSignal$EmailUpdateError;-><init>(Lcom/onesignal/OneSignal$EmailErrorType;Ljava/lang/String;)V

    invoke-interface {p0, v1}, Lcom/onesignal/OneSignal$EmailUpdateHandler;->onFailure(Lcom/onesignal/OneSignal$EmailUpdateError;)V

    .line 1759
    :cond_2
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    invoke-interface {p0, v0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    return-void

    .line 1763
    :cond_3
    sput-object p0, Lcom/onesignal/OneSignal;->emailLogoutHandler:Lcom/onesignal/OneSignal$EmailUpdateHandler;

    .line 1764
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->logoutEmail()V

    return-void
.end method

.method public static logoutSMSNumber()V
    .locals 1

    const/4 v0, 0x0

    .line 1628
    invoke-static {v0}, Lcom/onesignal/OneSignal;->logoutSMSNumber(Lcom/onesignal/OneSignal$OSSMSUpdateHandler;)V

    return-void
.end method

.method public static logoutSMSNumber(Lcom/onesignal/OneSignal$OSSMSUpdateHandler;)V
    .locals 3

    .line 1632
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    const-string v1, "logoutSMSNumber()"

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->shouldQueueTaskForInit(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 1633
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting for remote params. Moving logoutSMSNumber() operation to a pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 1635
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$12;

    invoke-direct {v1, p0}, Lcom/onesignal/OneSignal$12;-><init>(Lcom/onesignal/OneSignal$OSSMSUpdateHandler;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void

    .line 1646
    :cond_0
    invoke-static {v1}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    return-void

    .line 1649
    :cond_1
    invoke-static {}, Lcom/onesignal/OneSignal;->getSMSId()Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_3

    .line 1651
    const-string v0, "logoutSMSNumber() not valid as sms number was not set or already logged out!"

    if-eqz p0, :cond_2

    .line 1652
    new-instance v1, Lcom/onesignal/OneSignal$OSSMSUpdateError;

    sget-object v2, Lcom/onesignal/OneSignal$SMSErrorType;->INVALID_OPERATION:Lcom/onesignal/OneSignal$SMSErrorType;

    invoke-direct {v1, v2, v0}, Lcom/onesignal/OneSignal$OSSMSUpdateError;-><init>(Lcom/onesignal/OneSignal$SMSErrorType;Ljava/lang/String;)V

    invoke-interface {p0, v1}, Lcom/onesignal/OneSignal$OSSMSUpdateHandler;->onFailure(Lcom/onesignal/OneSignal$OSSMSUpdateError;)V

    .line 1653
    :cond_2
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    invoke-interface {p0, v0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    return-void

    .line 1657
    :cond_3
    sput-object p0, Lcom/onesignal/OneSignal;->smsLogoutHandler:Lcom/onesignal/OneSignal$OSSMSUpdateHandler;

    .line 1658
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->logoutSMS()V

    return-void
.end method

.method private static makeAndroidParamsRequest(Ljava/lang/String;Ljava/lang/String;Z)V
    .locals 1

    .line 1110
    invoke-static {}, Lcom/onesignal/OneSignal;->getRemoteParams()Lcom/onesignal/OneSignalRemoteParams$Params;

    move-result-object v0

    if-nez v0, :cond_1

    sget-boolean v0, Lcom/onesignal/OneSignal;->androidParamsRequestStarted:Z

    if-eqz v0, :cond_0

    goto :goto_0

    :cond_0
    const/4 v0, 0x1

    .line 1113
    sput-boolean v0, Lcom/onesignal/OneSignal;->androidParamsRequestStarted:Z

    .line 1114
    new-instance v0, Lcom/onesignal/OneSignal$7;

    invoke-direct {v0, p2}, Lcom/onesignal/OneSignal$7;-><init>(Z)V

    invoke-static {p0, p1, v0}, Lcom/onesignal/OneSignalRemoteParams;->makeAndroidParamsRequest(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignalRemoteParams$Callback;)V

    :cond_1
    :goto_0
    return-void
.end method

.method static notValidOrDuplicated(Landroid/content/Context;Lorg/json/JSONObject;Lcom/onesignal/OSNotificationDataController$InvalidOrDuplicateNotificationCallback;)V
    .locals 2

    .line 3186
    sget-object v0, Lcom/onesignal/OneSignal;->notificationDataController:Lcom/onesignal/OSNotificationDataController;

    if-nez v0, :cond_0

    .line 3187
    invoke-static {p0}, Lcom/onesignal/OneSignal;->getDBHelperInstance(Landroid/content/Context;)Lcom/onesignal/OneSignalDbHelper;

    move-result-object p0

    .line 3188
    new-instance v0, Lcom/onesignal/OSNotificationDataController;

    sget-object v1, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    invoke-direct {v0, p0, v1}, Lcom/onesignal/OSNotificationDataController;-><init>(Lcom/onesignal/OneSignalDbHelper;Lcom/onesignal/OSLogger;)V

    sput-object v0, Lcom/onesignal/OneSignal;->notificationDataController:Lcom/onesignal/OSNotificationDataController;

    .line 3190
    :cond_0
    sget-object p0, Lcom/onesignal/OneSignal;->notificationDataController:Lcom/onesignal/OSNotificationDataController;

    invoke-virtual {p0, p1, p2}, Lcom/onesignal/OSNotificationDataController;->notValidOrDuplicated(Lorg/json/JSONObject;Lcom/onesignal/OSNotificationDataController$InvalidOrDuplicateNotificationCallback;)V

    return-void
.end method

.method private static notificationOpenedRESTCall(Landroid/content/Context;Lorg/json/JSONArray;)V
    .locals 5

    const/4 v0, 0x0

    .line 2491
    :goto_0
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v1

    if-ge v0, v1, :cond_1

    .line 2493
    :try_start_0
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getJSONObject(I)Lorg/json/JSONObject;

    move-result-object v1

    .line 2494
    new-instance v2, Lorg/json/JSONObject;

    const-string v3, "custom"

    const/4 v4, 0x0

    invoke-virtual {v1, v3, v4}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-direct {v2, v1}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    .line 2496
    const-string v1, "i"

    invoke-virtual {v2, v1, v4}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    .line 2499
    sget-object v2, Lcom/onesignal/OneSignal;->postedOpenedNotifIds:Ljava/util/HashSet;

    invoke-virtual {v2, v1}, Ljava/util/HashSet;->contains(Ljava/lang/Object;)Z

    move-result v2

    if-eqz v2, :cond_0

    goto :goto_1

    .line 2501
    :cond_0
    sget-object v2, Lcom/onesignal/OneSignal;->postedOpenedNotifIds:Ljava/util/HashSet;

    invoke-virtual {v2, v1}, Ljava/util/HashSet;->add(Ljava/lang/Object;)Z

    .line 2503
    new-instance v2, Lorg/json/JSONObject;

    invoke-direct {v2}, Lorg/json/JSONObject;-><init>()V

    .line 2504
    const-string v3, "app_id"

    invoke-static {p0}, Lcom/onesignal/OneSignal;->getSavedAppId(Landroid/content/Context;)Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v2, v3, v4}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 2505
    const-string v3, "player_id"

    invoke-static {p0}, Lcom/onesignal/OneSignal;->getSavedUserId(Landroid/content/Context;)Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v2, v3, v4}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 2506
    const-string v3, "opened"

    const/4 v4, 0x1

    invoke-virtual {v2, v3, v4}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    .line 2507
    const-string v3, "device_type"

    sget-object v4, Lcom/onesignal/OneSignal;->osUtils:Lcom/onesignal/OSUtils;

    invoke-virtual {v4}, Lcom/onesignal/OSUtils;->getDeviceType()I

    move-result v4

    invoke-virtual {v2, v3, v4}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 2509
    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3}, Ljava/lang/StringBuilder;-><init>()V

    const-string v4, "notifications/"

    invoke-virtual {v3, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    new-instance v3, Lcom/onesignal/OneSignal$26;

    invoke-direct {v3}, Lcom/onesignal/OneSignal$26;-><init>()V

    invoke-static {v1, v2, v3}, Lcom/onesignal/OneSignalRestClient;->put(Ljava/lang/String;Lorg/json/JSONObject;Lcom/onesignal/OneSignalRestClient$ResponseHandler;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_1

    :catchall_0
    move-exception v1

    .line 2517
    sget-object v2, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v3, "Failed to generate JSON to send notification opened."

    invoke-static {v2, v3, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_1
    add-int/lit8 v0, v0, 0x1

    goto :goto_0

    :cond_1
    return-void
.end method

.method static onAppFocus()V
    .locals 3

    .line 1398
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "Application on focus"

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    const/4 v0, 0x1

    .line 1399
    invoke-static {v0}, Lcom/onesignal/OneSignal;->setInForeground(Z)V

    .line 1402
    sget-object v0, Lcom/onesignal/OneSignal;->appEntryState:Lcom/onesignal/OneSignal$AppEntryAction;

    sget-object v1, Lcom/onesignal/OneSignal$AppEntryAction;->NOTIFICATION_CLICK:Lcom/onesignal/OneSignal$AppEntryAction;

    invoke-virtual {v0, v1}, Lcom/onesignal/OneSignal$AppEntryAction;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_0

    .line 1403
    sget-object v0, Lcom/onesignal/OneSignal;->appEntryState:Lcom/onesignal/OneSignal$AppEntryAction;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->callEntryStateListeners(Lcom/onesignal/OneSignal$AppEntryAction;)V

    .line 1405
    sget-object v0, Lcom/onesignal/OneSignal;->appEntryState:Lcom/onesignal/OneSignal$AppEntryAction;

    sget-object v1, Lcom/onesignal/OneSignal$AppEntryAction;->NOTIFICATION_CLICK:Lcom/onesignal/OneSignal$AppEntryAction;

    invoke-virtual {v0, v1}, Lcom/onesignal/OneSignal$AppEntryAction;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_0

    .line 1406
    sget-object v0, Lcom/onesignal/OneSignal$AppEntryAction;->APP_OPEN:Lcom/onesignal/OneSignal$AppEntryAction;

    sput-object v0, Lcom/onesignal/OneSignal;->appEntryState:Lcom/onesignal/OneSignal$AppEntryAction;

    .line 1409
    :cond_0
    invoke-static {}, Lcom/onesignal/LocationController;->onFocusChange()V

    .line 1410
    sget-object v0, Lcom/onesignal/NotificationPermissionController;->INSTANCE:Lcom/onesignal/NotificationPermissionController;

    invoke-virtual {v0}, Lcom/onesignal/NotificationPermissionController;->onAppForegrounded()V

    .line 1412
    sget-object v0, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    invoke-static {v0}, Lcom/onesignal/OSUtils;->shouldLogMissingAppIdError(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    return-void

    .line 1415
    :cond_1
    sget-object v0, Lcom/onesignal/OneSignal;->remoteParamController:Lcom/onesignal/OSRemoteParamController;

    invoke-virtual {v0}, Lcom/onesignal/OSRemoteParamController;->isRemoteParamsCallDone()Z

    move-result v0

    if-nez v0, :cond_2

    .line 1416
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "Delay onAppFocus logic due to missing remote params"

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 1417
    sget-object v0, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    invoke-static {}, Lcom/onesignal/OneSignal;->getUserId()Ljava/lang/String;

    move-result-object v1

    const/4 v2, 0x0

    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignal;->makeAndroidParamsRequest(Ljava/lang/String;Ljava/lang/String;Z)V

    return-void

    .line 1421
    :cond_2
    invoke-static {}, Lcom/onesignal/OneSignal;->onAppFocusLogic()V

    return-void
.end method

.method private static onAppFocusLogic()V
    .locals 2

    .line 1434
    const-string v0, "onAppFocus"

    invoke-static {v0}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 1437
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getFocusTimeController()Lcom/onesignal/FocusTimeController;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/FocusTimeController;->appForegrounded()V

    .line 1439
    invoke-static {}, Lcom/onesignal/OneSignal;->doSessionInit()V

    .line 1441
    sget-object v0, Lcom/onesignal/OneSignal;->trackGooglePurchase:Lcom/onesignal/TrackGooglePurchase;

    if-eqz v0, :cond_1

    .line 1442
    invoke-virtual {v0}, Lcom/onesignal/TrackGooglePurchase;->trackIAP()V

    .line 1444
    :cond_1
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    const/4 v1, 0x0

    invoke-static {v0, v1}, Lcom/onesignal/OSNotificationRestoreWorkManager;->beginEnqueueingWork(Landroid/content/Context;Z)V

    .line 1446
    invoke-static {}, Lcom/onesignal/OneSignal;->refreshNotificationPermissionState()V

    .line 1448
    sget-object v0, Lcom/onesignal/OneSignal;->trackFirebaseAnalytics:Lcom/onesignal/TrackFirebaseAnalytics;

    if-eqz v0, :cond_2

    invoke-static {}, Lcom/onesignal/OneSignal;->getFirebaseAnalyticsEnabled()Z

    move-result v0

    if-eqz v0, :cond_2

    .line 1449
    sget-object v0, Lcom/onesignal/OneSignal;->trackFirebaseAnalytics:Lcom/onesignal/TrackFirebaseAnalytics;

    invoke-virtual {v0}, Lcom/onesignal/TrackFirebaseAnalytics;->trackInfluenceOpenEvent()V

    .line 1451
    :cond_2
    invoke-static {}, Lcom/onesignal/OSSyncService;->getInstance()Lcom/onesignal/OSSyncService;

    move-result-object v0

    sget-object v1, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSSyncService;->cancelSyncTask(Landroid/content/Context;)V

    return-void
.end method

.method static onAppLostFocus()V
    .locals 3

    .line 1347
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Application lost focus initDone: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    sget-boolean v2, Lcom/onesignal/OneSignal;->initDone:Z

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    const/4 v0, 0x0

    .line 1348
    invoke-static {v0}, Lcom/onesignal/OneSignal;->setInForeground(Z)V

    .line 1349
    sget-object v0, Lcom/onesignal/OneSignal$AppEntryAction;->APP_CLOSE:Lcom/onesignal/OneSignal$AppEntryAction;

    sput-object v0, Lcom/onesignal/OneSignal;->appEntryState:Lcom/onesignal/OneSignal$AppEntryAction;

    .line 1351
    invoke-static {}, Lcom/onesignal/OneSignal;->getTime()Lcom/onesignal/OSTime;

    move-result-object v0

    invoke-interface {v0}, Lcom/onesignal/OSTime;->getCurrentTimeMillis()J

    move-result-wide v0

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->setLastSessionTime(J)V

    .line 1352
    invoke-static {}, Lcom/onesignal/LocationController;->onFocusChange()V

    .line 1354
    sget-boolean v0, Lcom/onesignal/OneSignal;->initDone:Z

    if-nez v0, :cond_1

    .line 1356
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    const-string v1, "onAppLostFocus()"

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->shouldQueueTaskForInit(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 1357
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting for remote params. Moving onAppLostFocus() operation to a pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 1359
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$9;

    invoke-direct {v1}, Lcom/onesignal/OneSignal$9;-><init>()V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    :cond_0
    return-void

    .line 1370
    :cond_1
    invoke-static {}, Lcom/onesignal/OneSignal;->backgroundSyncLogic()V

    return-void
.end method

.method static onAppStartFocusLogic()V
    .locals 0

    .line 1425
    invoke-static {}, Lcom/onesignal/OneSignal;->refreshNotificationPermissionState()V

    return-void
.end method

.method static onRemoteParamSet()V
    .locals 1

    .line 890
    invoke-static {}, Lcom/onesignal/OneSignal;->reassignDelayedInitParams()Z

    move-result v0

    if-nez v0, :cond_0

    .line 891
    sget-boolean v0, Lcom/onesignal/OneSignal;->inForeground:Z

    if-eqz v0, :cond_0

    .line 892
    invoke-static {}, Lcom/onesignal/OneSignal;->onAppFocusLogic()V

    :cond_0
    return-void
.end method

.method public static onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V
    .locals 0

    .line 1148
    invoke-static {p0, p1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    return-void
.end method

.method static openDestinationActivity(Landroid/app/Activity;Lorg/json/JSONArray;)V
    .locals 3

    const-string v0, "SDK running startActivity with Intent: "

    const/4 v1, 0x0

    .line 2448
    :try_start_0
    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->getJSONObject(I)Lorg/json/JSONObject;

    move-result-object p1

    .line 2449
    sget-object v1, Lcom/onesignal/GenerateNotificationOpenIntentFromPushPayload;->INSTANCE:Lcom/onesignal/GenerateNotificationOpenIntentFromPushPayload;

    invoke-virtual {v1, p0, p1}, Lcom/onesignal/GenerateNotificationOpenIntentFromPushPayload;->create(Landroid/content/Context;Lorg/json/JSONObject;)Lcom/onesignal/GenerateNotificationOpenIntent;

    move-result-object p1

    .line 2454
    invoke-virtual {p1}, Lcom/onesignal/GenerateNotificationOpenIntent;->getIntentVisible()Landroid/content/Intent;

    move-result-object p1

    if-eqz p1, :cond_0

    .line 2456
    sget-object v1, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-interface {v1, v0}, Lcom/onesignal/OSLogger;->info(Ljava/lang/String;)V

    .line 2457
    invoke-virtual {p0, p1}, Landroid/app/Activity;->startActivity(Landroid/content/Intent;)V

    goto :goto_0

    .line 2460
    :cond_0
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string p1, "SDK not showing an Activity automatically due to it\'s settings."

    invoke-interface {p0, p1}, Lcom/onesignal/OSLogger;->info(Ljava/lang/String;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p0

    .line 2463
    invoke-virtual {p0}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-void
.end method

.method public static pauseInAppMessages(Z)V
    .locals 2

    .line 3150
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez v0, :cond_0

    .line 3151
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting initWithContext. Moving pauseInAppMessages() operation to a pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 3153
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$34;

    invoke-direct {v1, p0}, Lcom/onesignal/OneSignal$34;-><init>(Z)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void

    .line 3163
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object v0

    xor-int/lit8 p0, p0, 0x1

    invoke-virtual {v0, p0}, Lcom/onesignal/OSInAppMessageController;->setInAppMessagingEnabled(Z)V

    return-void
.end method

.method public static postNotification(Ljava/lang/String;Lcom/onesignal/OneSignal$PostNotificationResponseHandler;)V
    .locals 2

    .line 2036
    :try_start_0
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0, p0}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    invoke-static {v0, p1}, Lcom/onesignal/OneSignal;->postNotification(Lorg/json/JSONObject;Lcom/onesignal/OneSignal$PostNotificationResponseHandler;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    .line 2038
    :catch_0
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Invalid postNotification JSON format: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-static {p1, p0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    :goto_0
    return-void
.end method

.method public static postNotification(Lorg/json/JSONObject;Lcom/onesignal/OneSignal$PostNotificationResponseHandler;)V
    .locals 2

    .line 2057
    const-string v0, "app_id"

    const-string v1, "postNotification()"

    invoke-static {v1}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_0

    return-void

    .line 2061
    :cond_0
    :try_start_0
    invoke-virtual {p0, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    if-nez v1, :cond_1

    .line 2062
    invoke-static {}, Lcom/onesignal/OneSignal;->getSavedAppId()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {p0, v0, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 2065
    :cond_1
    invoke-virtual {p0, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_3

    if-eqz p1, :cond_2

    .line 2067
    new-instance p0, Lorg/json/JSONObject;

    invoke-direct {p0}, Lorg/json/JSONObject;-><init>()V

    const-string v0, "error"

    const-string v1, "Missing app_id"

    invoke-virtual {p0, v0, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    move-result-object p0

    invoke-interface {p1, p0}, Lcom/onesignal/OneSignal$PostNotificationResponseHandler;->onFailure(Lorg/json/JSONObject;)V

    :cond_2
    return-void

    .line 2071
    :cond_3
    const-string v0, "notifications/"

    new-instance v1, Lcom/onesignal/OneSignal$21;

    invoke-direct {v1, p1}, Lcom/onesignal/OneSignal$21;-><init>(Lcom/onesignal/OneSignal$PostNotificationResponseHandler;)V

    invoke-static {v0, p0, v1}, Lcom/onesignal/OneSignalRestClient;->post(Ljava/lang/String;Lorg/json/JSONObject;Lcom/onesignal/OneSignalRestClient$ResponseHandler;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p0

    .line 2108
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "HTTP create notification json exception!"

    invoke-interface {v0, v1, p0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;Ljava/lang/Throwable;)V

    if-eqz p1, :cond_4

    .line 2111
    :try_start_1
    new-instance p0, Lorg/json/JSONObject;

    const-string v0, "{\'error\': \'HTTP create notification json exception!\'}"

    invoke-direct {p0, v0}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    invoke-interface {p1, p0}, Lcom/onesignal/OneSignal$PostNotificationResponseHandler;->onFailure(Lorg/json/JSONObject;)V
    :try_end_1
    .catch Lorg/json/JSONException; {:try_start_1 .. :try_end_1} :catch_1

    goto :goto_0

    :catch_1
    move-exception p0

    .line 2113
    invoke-virtual {p0}, Lorg/json/JSONException;->printStackTrace()V

    :cond_4
    :goto_0
    return-void
.end method

.method public static promptForPushNotifications()V
    .locals 1

    const/4 v0, 0x0

    .line 2850
    invoke-static {v0}, Lcom/onesignal/OneSignal;->promptForPushNotifications(Z)V

    return-void
.end method

.method public static promptForPushNotifications(Z)V
    .locals 1

    const/4 v0, 0x0

    .line 2862
    invoke-static {p0, v0}, Lcom/onesignal/OneSignal;->promptForPushNotifications(ZLcom/onesignal/OneSignal$PromptForPushNotificationPermissionResponseHandler;)V

    return-void
.end method

.method public static promptForPushNotifications(ZLcom/onesignal/OneSignal$PromptForPushNotificationPermissionResponseHandler;)V
    .locals 1

    .line 2878
    sget-object v0, Lcom/onesignal/NotificationPermissionController;->INSTANCE:Lcom/onesignal/NotificationPermissionController;

    invoke-virtual {v0, p0, p1}, Lcom/onesignal/NotificationPermissionController;->prompt(ZLcom/onesignal/OneSignal$PromptForPushNotificationPermissionResponseHandler;)V

    return-void
.end method

.method public static promptLocation()V
    .locals 2

    const/4 v0, 0x0

    const/4 v1, 0x0

    .line 2796
    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->promptLocation(Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;Z)V

    return-void
.end method

.method static promptLocation(Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;Z)V
    .locals 2

    .line 2800
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    const-string v1, "promptLocation()"

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->shouldQueueTaskForInit(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 2801
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting for remote params. Moving promptLocation() operation to a pending queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 2803
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$29;

    invoke-direct {v1, p0, p1}, Lcom/onesignal/OneSignal$29;-><init>(Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;Z)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void

    .line 2814
    :cond_0
    invoke-static {v1}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    return-void

    .line 2817
    :cond_1
    new-instance v0, Lcom/onesignal/OneSignal$30;

    invoke-direct {v0, p0}, Lcom/onesignal/OneSignal$30;-><init>(Lcom/onesignal/OneSignal$OSPromptActionCompletionCallback;)V

    .line 2841
    sget-object p0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    const/4 v1, 0x1

    invoke-static {p0, v1, p1, v0}, Lcom/onesignal/LocationController;->getLocation(Landroid/content/Context;ZZLcom/onesignal/LocationController$LocationHandler;)V

    return-void
.end method

.method public static provideUserConsent(Z)V
    .locals 2

    .line 1152
    invoke-static {}, Lcom/onesignal/OneSignal;->userProvidedPrivacyConsent()Z

    move-result v0

    .line 1154
    sget-object v1, Lcom/onesignal/OneSignal;->remoteParamController:Lcom/onesignal/OSRemoteParamController;

    invoke-virtual {v1, p0}, Lcom/onesignal/OSRemoteParamController;->saveUserConsentStatus(Z)V

    if-nez v0, :cond_0

    if-eqz p0, :cond_0

    .line 1156
    sget-object p0, Lcom/onesignal/OneSignal;->delayedInitParams:Lcom/onesignal/DelayedConsentInitializationParameters;

    if-eqz p0, :cond_0

    .line 1157
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->VERBOSE:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v0, "Privacy consent provided, reassigning all delayed init params and attempting init again..."

    invoke-static {p0, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 1158
    invoke-static {}, Lcom/onesignal/OneSignal;->reassignDelayedInitParams()Z

    :cond_0
    return-void
.end method

.method private static pushStatusRuntimeError(I)Z
    .locals 1

    const/4 v0, -0x6

    if-ge p0, v0, :cond_0

    const/4 p0, 0x1

    goto :goto_0

    :cond_0
    const/4 p0, 0x0

    :goto_0
    return p0
.end method

.method private static reassignDelayedInitParams()Z
    .locals 6

    .line 1163
    sget-boolean v0, Lcom/onesignal/OneSignal;->initDone:Z

    const/4 v1, 0x0

    if-eqz v0, :cond_0

    return v1

    .line 1168
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal;->delayedInitParams:Lcom/onesignal/DelayedConsentInitializationParameters;

    if-nez v0, :cond_1

    .line 1170
    invoke-static {}, Lcom/onesignal/OneSignal;->getSavedAppId()Ljava/lang/String;

    move-result-object v0

    .line 1171
    sget-object v2, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    .line 1172
    sget-object v3, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v4, "Trying to continue OneSignal with null delayed params"

    invoke-interface {v3, v4}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    goto :goto_0

    .line 1174
    :cond_1
    invoke-virtual {v0}, Lcom/onesignal/DelayedConsentInitializationParameters;->getAppId()Ljava/lang/String;

    move-result-object v0

    .line 1175
    sget-object v2, Lcom/onesignal/OneSignal;->delayedInitParams:Lcom/onesignal/DelayedConsentInitializationParameters;

    invoke-virtual {v2}, Lcom/onesignal/DelayedConsentInitializationParameters;->getContext()Landroid/content/Context;

    move-result-object v2

    .line 1178
    :goto_0
    sget-object v3, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    new-instance v4, Ljava/lang/StringBuilder;

    const-string v5, "reassignDelayedInitParams with appContext: "

    invoke-direct {v4, v5}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    sget-object v5, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-virtual {v4, v5}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v4

    invoke-virtual {v4}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v4

    invoke-interface {v3, v4}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    const/4 v3, 0x0

    .line 1180
    sput-object v3, Lcom/onesignal/OneSignal;->delayedInitParams:Lcom/onesignal/DelayedConsentInitializationParameters;

    .line 1181
    invoke-static {v0}, Lcom/onesignal/OneSignal;->setAppId(Ljava/lang/String;)V

    .line 1184
    sget-boolean v0, Lcom/onesignal/OneSignal;->initDone:Z

    if-nez v0, :cond_3

    if-nez v2, :cond_2

    .line 1186
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v2, "Trying to continue OneSignal with null delayed params context"

    invoke-interface {v0, v2}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    return v1

    .line 1189
    :cond_2
    invoke-static {v2}, Lcom/onesignal/OneSignal;->initWithContext(Landroid/content/Context;)V

    :cond_3
    const/4 v0, 0x1

    return v0
.end method

.method static refreshNotificationPermissionState()V
    .locals 1

    .line 1429
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->getCurrentPermissionState(Landroid/content/Context;)Lcom/onesignal/OSPermissionState;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSPermissionState;->refreshAsTo()V

    return-void
.end method

.method private static registerForPushToken()V
    .locals 4

    .line 1080
    invoke-static {}, Lcom/onesignal/OneSignal;->getPushRegistrator()Lcom/onesignal/PushRegistrator;

    move-result-object v0

    sget-object v1, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    sget-object v2, Lcom/onesignal/OneSignal;->googleProjectNumber:Ljava/lang/String;

    new-instance v3, Lcom/onesignal/OneSignal$6;

    invoke-direct {v3}, Lcom/onesignal/OneSignal$6;-><init>()V

    invoke-interface {v0, v1, v2, v3}, Lcom/onesignal/PushRegistrator;->registerForPush(Landroid/content/Context;Ljava/lang/String;Lcom/onesignal/PushRegistrator$RegisteredHandler;)V

    return-void
.end method

.method private static registerUser()V
    .locals 3

    .line 1479
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "registerUser:registerForPushFired:"

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    sget-boolean v2, Lcom/onesignal/OneSignal;->registerForPushFired:Z

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, ", locationFired: "

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    sget-boolean v2, Lcom/onesignal/OneSignal;->locationFired:Z

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, ", remoteParams: "

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    .line 1483
    invoke-static {}, Lcom/onesignal/OneSignal;->getRemoteParams()Lcom/onesignal/OneSignalRemoteParams$Params;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, ", appId: "

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    sget-object v2, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    .line 1479
    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 1487
    sget-boolean v0, Lcom/onesignal/OneSignal;->registerForPushFired:Z

    if-eqz v0, :cond_1

    sget-boolean v0, Lcom/onesignal/OneSignal;->locationFired:Z

    if-eqz v0, :cond_1

    invoke-static {}, Lcom/onesignal/OneSignal;->getRemoteParams()Lcom/onesignal/OneSignalRemoteParams$Params;

    move-result-object v0

    if-eqz v0, :cond_1

    sget-object v0, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    if-nez v0, :cond_0

    goto :goto_0

    .line 1492
    :cond_0
    new-instance v0, Ljava/lang/Thread;

    new-instance v1, Lcom/onesignal/OneSignal$10;

    invoke-direct {v1}, Lcom/onesignal/OneSignal$10;-><init>()V

    const-string v2, "OS_REG_USER"

    invoke-direct {v0, v1, v2}, Ljava/lang/Thread;-><init>(Ljava/lang/Runnable;Ljava/lang/String;)V

    .line 1501
    invoke-static {v0}, Lcom/onesignal/OSUtils;->startThreadWithRetry(Ljava/lang/Thread;)V

    return-void

    .line 1488
    :cond_1
    :goto_0
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "registerUser not possible"

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    return-void
.end method

.method private static registerUserTask()V
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 1505
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-virtual {v0}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object v0

    .line 1507
    new-instance v1, Lorg/json/JSONObject;

    invoke-direct {v1}, Lorg/json/JSONObject;-><init>()V

    .line 1509
    const-string v2, "app_id"

    invoke-static {}, Lcom/onesignal/OneSignal;->getSavedAppId()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v1, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 1511
    const-string v2, "device_os"

    sget-object v3, Landroid/os/Build$VERSION;->RELEASE:Ljava/lang/String;

    invoke-virtual {v1, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 1512
    const-string v2, "timezone"

    invoke-static {}, Lcom/onesignal/OneSignal;->getTimeZoneOffset()I

    move-result v3

    invoke-virtual {v1, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 1513
    const-string v2, "timezone_id"

    invoke-static {}, Lcom/onesignal/OneSignal;->getTimeZoneId()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v1, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 1514
    sget-object v2, Lcom/onesignal/OneSignal;->languageContext:Lcom/onesignal/language/LanguageContext;

    invoke-virtual {v2}, Lcom/onesignal/language/LanguageContext;->getLanguage()Ljava/lang/String;

    move-result-object v2

    const-string v3, "language"

    invoke-virtual {v1, v3, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 1515
    const-string v2, "sdk"

    const-string v3, "040810"

    invoke-virtual {v1, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 1516
    const-string v2, "sdk_type"

    sget-object v3, Lcom/onesignal/OneSignal;->sdkType:Ljava/lang/String;

    invoke-virtual {v1, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 1517
    const-string v2, "android_package"

    invoke-virtual {v1, v2, v0}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 1518
    const-string v0, "device_model"

    sget-object v2, Landroid/os/Build;->MODEL:Ljava/lang/String;

    invoke-virtual {v1, v0, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 1519
    invoke-static {}, Lcom/onesignal/OneSignal;->getAppVersion()Ljava/lang/Integer;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 1521
    const-string v2, "game_version"

    invoke-virtual {v1, v2, v0}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 1523
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal;->osUtils:Lcom/onesignal/OSUtils;

    invoke-virtual {v0}, Lcom/onesignal/OSUtils;->getNetType()Ljava/lang/Integer;

    move-result-object v0

    const-string v2, "net_type"

    invoke-virtual {v1, v2, v0}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 1524
    sget-object v0, Lcom/onesignal/OneSignal;->osUtils:Lcom/onesignal/OSUtils;

    invoke-virtual {v0}, Lcom/onesignal/OSUtils;->getCarrierName()Ljava/lang/String;

    move-result-object v0

    const-string v2, "carrier"

    invoke-virtual {v1, v2, v0}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 1525
    const-string v0, "rooted"

    invoke-static {}, Lcom/onesignal/RootToolsInternalMethods;->isRooted()Z

    move-result v2

    invoke-virtual {v1, v0, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    const/4 v0, 0x0

    .line 1527
    invoke-static {v1, v0}, Lcom/onesignal/OneSignalStateSynchronizer;->updateDeviceInfo(Lorg/json/JSONObject;Lcom/onesignal/OneSignalStateSynchronizer$OSDeviceInfoCompletionHandler;)V

    .line 1529
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 1530
    const-string v1, "identifier"

    sget-object v2, Lcom/onesignal/OneSignal;->lastRegistrationId:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 1531
    const-string v1, "subscribableStatus"

    sget v2, Lcom/onesignal/OneSignal;->subscribableStatus:I

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 1532
    const-string v1, "androidPermission"

    invoke-static {}, Lcom/onesignal/OneSignal;->areNotificationsEnabledForSubscribedState()Z

    move-result v2

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    .line 1533
    sget-object v1, Lcom/onesignal/OneSignal;->osUtils:Lcom/onesignal/OSUtils;

    invoke-virtual {v1}, Lcom/onesignal/OSUtils;->getDeviceType()I

    move-result v1

    const-string v2, "device_type"

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;I)Lorg/json/JSONObject;

    .line 1534
    invoke-static {v0}, Lcom/onesignal/OneSignalStateSynchronizer;->updatePushState(Lorg/json/JSONObject;)V

    .line 1536
    invoke-static {}, Lcom/onesignal/OneSignal;->isLocationShared()Z

    move-result v0

    if-eqz v0, :cond_1

    sget-object v0, Lcom/onesignal/OneSignal;->lastLocationPoint:Lcom/onesignal/LocationController$LocationPoint;

    if-eqz v0, :cond_1

    .line 1537
    invoke-static {v0}, Lcom/onesignal/OneSignalStateSynchronizer;->updateLocation(Lcom/onesignal/LocationController$LocationPoint;)V

    .line 1539
    :cond_1
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "registerUserTask calling readyToUpdate"

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    const/4 v0, 0x1

    .line 1540
    invoke-static {v0}, Lcom/onesignal/OneSignalStateSynchronizer;->readyToUpdate(Z)V

    const/4 v0, 0x0

    .line 1542
    sput-boolean v0, Lcom/onesignal/OneSignal;->waitingToPostStateSync:Z

    return-void
.end method

.method public static removeEmailSubscriptionObserver(Lcom/onesignal/OSEmailSubscriptionObserver;)V
    .locals 1

    .line 3049
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez v0, :cond_0

    .line 3050
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "OneSignal.initWithContext has not been called. Could not modify email subscription observer"

    invoke-interface {p0, v0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    return-void

    .line 3054
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getEmailSubscriptionStateChangesObserver()Lcom/onesignal/OSObservable;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/OSObservable;->removeObserver(Ljava/lang/Object;)V

    return-void
.end method

.method static removeEntryStateListener(Lcom/onesignal/OneSignal$EntryStateListener;)V
    .locals 1

    .line 380
    sget-object v0, Lcom/onesignal/OneSignal;->entryStateListeners:Ljava/util/List;

    invoke-interface {v0, p0}, Ljava/util/List;->remove(Ljava/lang/Object;)Z

    return-void
.end method

.method public static removeExternalUserId()V
    .locals 1

    .line 1875
    const-string v0, "removeExternalUserId()"

    invoke-static {v0}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    :cond_0
    const/4 v0, 0x0

    .line 1878
    invoke-static {v0}, Lcom/onesignal/OneSignal;->removeExternalUserId(Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;)V

    return-void
.end method

.method public static removeExternalUserId(Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;)V
    .locals 1

    .line 1882
    const-string v0, "removeExternalUserId()"

    invoke-static {v0}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 1886
    :cond_0
    const-string v0, ""

    invoke-static {v0, p0}, Lcom/onesignal/OneSignal;->setExternalUserId(Ljava/lang/String;Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;)V

    return-void
.end method

.method public static removeGroupedNotifications(Ljava/lang/String;)V
    .locals 3

    .line 2931
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    const-string v1, "removeGroupedNotifications()"

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->shouldQueueTaskForInit(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_2

    sget-object v0, Lcom/onesignal/OneSignal;->notificationDataController:Lcom/onesignal/OSNotificationDataController;

    if-nez v0, :cond_0

    goto :goto_0

    .line 2945
    :cond_0
    invoke-static {v1}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    return-void

    .line 2948
    :cond_1
    sget-object v0, Lcom/onesignal/OneSignal;->notificationDataController:Lcom/onesignal/OSNotificationDataController;

    new-instance v1, Ljava/lang/ref/WeakReference;

    sget-object v2, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-direct {v1, v2}, Ljava/lang/ref/WeakReference;-><init>(Ljava/lang/Object;)V

    invoke-virtual {v0, p0, v1}, Lcom/onesignal/OSNotificationDataController;->removeGroupedNotifications(Ljava/lang/String;Ljava/lang/ref/WeakReference;)V

    return-void

    .line 2932
    :cond_2
    :goto_0
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting for remote params. Moving removeGroupedNotifications() operation to a pending queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 2934
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$33;

    invoke-direct {v1, p0}, Lcom/onesignal/OneSignal$33;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void
.end method

.method public static removeNotification(I)V
    .locals 3

    .line 2910
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    const-string v1, "removeNotification()"

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->shouldQueueTaskForInit(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_2

    sget-object v0, Lcom/onesignal/OneSignal;->notificationDataController:Lcom/onesignal/OSNotificationDataController;

    if-nez v0, :cond_0

    goto :goto_0

    .line 2924
    :cond_0
    invoke-static {v1}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    return-void

    .line 2927
    :cond_1
    sget-object v0, Lcom/onesignal/OneSignal;->notificationDataController:Lcom/onesignal/OSNotificationDataController;

    new-instance v1, Ljava/lang/ref/WeakReference;

    sget-object v2, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-direct {v1, v2}, Ljava/lang/ref/WeakReference;-><init>(Ljava/lang/Object;)V

    invoke-virtual {v0, p0, v1}, Lcom/onesignal/OSNotificationDataController;->removeNotification(ILjava/lang/ref/WeakReference;)V

    return-void

    .line 2911
    :cond_2
    :goto_0
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting for remote params. Moving removeNotification() operation to a pending queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 2913
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$32;

    invoke-direct {v1, p0}, Lcom/onesignal/OneSignal$32;-><init>(I)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void
.end method

.method public static removePermissionObserver(Lcom/onesignal/OSPermissionObserver;)V
    .locals 1

    .line 2980
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez v0, :cond_0

    .line 2981
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "OneSignal.initWithContext has not been called. Could not modify permission observer"

    invoke-interface {p0, v0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    return-void

    .line 2985
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getPermissionStateChangesObserver()Lcom/onesignal/OSObservable;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/OSObservable;->removeObserver(Ljava/lang/Object;)V

    return-void
.end method

.method public static removeSMSSubscriptionObserver(Lcom/onesignal/OSSMSSubscriptionObserver;)V
    .locals 1

    .line 3081
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez v0, :cond_0

    .line 3082
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "OneSignal.initWithContext has not been called. Could not modify sms subscription observer"

    invoke-interface {p0, v0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    return-void

    .line 3086
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getSMSSubscriptionStateChangesObserver()Lcom/onesignal/OSObservable;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/OSObservable;->removeObserver(Ljava/lang/Object;)V

    return-void
.end method

.method public static removeSubscriptionObserver(Lcom/onesignal/OSSubscriptionObserver;)V
    .locals 1

    .line 3016
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez v0, :cond_0

    .line 3017
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "OneSignal.initWithContext has not been called. Could not modify subscription observer"

    invoke-interface {p0, v0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    return-void

    .line 3021
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getSubscriptionStateChangesObserver()Lcom/onesignal/OSObservable;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/OSObservable;->removeObserver(Ljava/lang/Object;)V

    return-void
.end method

.method public static removeTriggerForKey(Ljava/lang/String;)V
    .locals 1

    .line 3116
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 3117
    invoke-virtual {v0, p0}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    .line 3119
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object p0

    invoke-virtual {p0, v0}, Lcom/onesignal/OSInAppMessageController;->removeTriggersForKeys(Ljava/util/Collection;)V

    return-void
.end method

.method public static removeTriggersForKeys(Ljava/util/Collection;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Collection<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 3111
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/OSInAppMessageController;->removeTriggersForKeys(Ljava/util/Collection;)V

    return-void
.end method

.method public static requiresUserPrivacyConsent()Z
    .locals 1

    .line 1202
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-eqz v0, :cond_1

    invoke-static {}, Lcom/onesignal/OneSignal;->isUserPrivacyConsentRequired()Z

    move-result v0

    if-eqz v0, :cond_0

    invoke-static {}, Lcom/onesignal/OneSignal;->userProvidedPrivacyConsent()Z

    move-result v0

    if-nez v0, :cond_0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 v0, 0x1

    :goto_1
    return v0
.end method

.method private static runGetTags()V
    .locals 2

    .line 2165
    invoke-static {}, Lcom/onesignal/OneSignal;->getUserId()Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    .line 2166
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "getTags called under a null user!"

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->warning(Ljava/lang/String;)V

    return-void

    .line 2170
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->internalFireGetTagsCallbacks()V

    return-void
.end method

.method private static runNotificationOpenedCallback(Lorg/json/JSONArray;)V
    .locals 1

    .line 2298
    sget-object v0, Lcom/onesignal/OneSignal;->notificationOpenedHandler:Lcom/onesignal/OneSignal$OSNotificationOpenedHandler;

    if-nez v0, :cond_0

    .line 2299
    sget-object v0, Lcom/onesignal/OneSignal;->unprocessedOpenedNotifs:Ljava/util/Collection;

    invoke-interface {v0, p0}, Ljava/util/Collection;->add(Ljava/lang/Object;)Z

    return-void

    .line 2303
    :cond_0
    invoke-static {p0}, Lcom/onesignal/OneSignal;->generateNotificationOpenedResult(Lorg/json/JSONArray;)Lcom/onesignal/OSNotificationOpenedResult;

    move-result-object p0

    .line 2304
    sget-object v0, Lcom/onesignal/OneSignal;->appEntryState:Lcom/onesignal/OneSignal$AppEntryAction;

    invoke-static {p0, v0}, Lcom/onesignal/OneSignal;->addEntryStateListener(Lcom/onesignal/OneSignal$EntryStateListener;Lcom/onesignal/OneSignal$AppEntryAction;)V

    .line 2305
    invoke-static {p0}, Lcom/onesignal/OneSignal;->fireNotificationOpenedHandler(Lcom/onesignal/OSNotificationOpenedResult;)V

    return-void
.end method

.method private static saveAppId(Ljava/lang/String;)V
    .locals 2

    .line 2523
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez v0, :cond_0

    return-void

    .line 2526
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "GT_APP_ID"

    invoke-static {v0, v1, p0}, Lcom/onesignal/OneSignalPrefs;->saveString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method static saveEmailId(Ljava/lang/String;)V
    .locals 2

    .line 2597
    sput-object p0, Lcom/onesignal/OneSignal;->emailId:Ljava/lang/String;

    .line 2598
    sget-object p0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez p0, :cond_0

    return-void

    .line 2601
    :cond_0
    sget-object p0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    .line 2604
    const-string v0, ""

    sget-object v1, Lcom/onesignal/OneSignal;->emailId:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    const/4 v0, 0x0

    goto :goto_0

    :cond_1
    sget-object v0, Lcom/onesignal/OneSignal;->emailId:Ljava/lang/String;

    .line 2601
    :goto_0
    const-string v1, "OS_EMAIL_ID"

    invoke-static {p0, v1, v0}, Lcom/onesignal/OneSignalPrefs;->saveString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method static saveSMSId(Ljava/lang/String;)V
    .locals 2

    .line 2626
    sput-object p0, Lcom/onesignal/OneSignal;->smsId:Ljava/lang/String;

    .line 2627
    sget-object p0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez p0, :cond_0

    return-void

    .line 2630
    :cond_0
    sget-object p0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    .line 2633
    const-string v0, ""

    sget-object v1, Lcom/onesignal/OneSignal;->smsId:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_1

    const/4 v0, 0x0

    goto :goto_0

    :cond_1
    sget-object v0, Lcom/onesignal/OneSignal;->smsId:Ljava/lang/String;

    .line 2630
    :goto_0
    const-string v1, "PREFS_OS_SMS_ID"

    invoke-static {p0, v1, v0}, Lcom/onesignal/OneSignalPrefs;->saveString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method static saveUserId(Ljava/lang/String;)V
    .locals 2

    .line 2568
    sput-object p0, Lcom/onesignal/OneSignal;->userId:Ljava/lang/String;

    .line 2569
    sget-object p0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez p0, :cond_0

    return-void

    .line 2572
    :cond_0
    sget-object p0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v0, "GT_PLAYER_ID"

    sget-object v1, Lcom/onesignal/OneSignal;->userId:Ljava/lang/String;

    invoke-static {p0, v0, v1}, Lcom/onesignal/OneSignalPrefs;->saveString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method private static scheduleSyncService()Z
    .locals 5

    .line 1387
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->persist()Z

    move-result v0

    .line 1388
    sget-object v1, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "OneSignal scheduleSyncService unsyncedChanges: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-interface {v1, v2}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    if-eqz v0, :cond_0

    .line 1390
    invoke-static {}, Lcom/onesignal/OSSyncService;->getInstance()Lcom/onesignal/OSSyncService;

    move-result-object v1

    sget-object v2, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-virtual {v1, v2}, Lcom/onesignal/OSSyncService;->scheduleSyncTask(Landroid/content/Context;)V

    .line 1392
    :cond_0
    sget-object v1, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v1}, Lcom/onesignal/LocationController;->scheduleUpdate(Landroid/content/Context;)Z

    move-result v1

    .line 1393
    sget-object v2, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    new-instance v3, Ljava/lang/StringBuilder;

    const-string v4, "OneSignal scheduleSyncService locationScheduled: "

    invoke-direct {v3, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-interface {v2, v3}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    if-nez v1, :cond_2

    if-eqz v0, :cond_1

    goto :goto_0

    :cond_1
    const/4 v0, 0x0

    goto :goto_1

    :cond_2
    :goto_0
    const/4 v0, 0x1

    :goto_1
    return v0
.end method

.method static sendClickActionOutcomes(Ljava/util/List;)V
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lcom/onesignal/OSInAppMessageOutcome;",
            ">;)V"
        }
    .end annotation

    .line 3363
    sget-object v0, Lcom/onesignal/OneSignal;->outcomeEventsController:Lcom/onesignal/OSOutcomeEventsController;

    if-eqz v0, :cond_1

    sget-object v1, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    if-nez v1, :cond_0

    goto :goto_0

    .line 3368
    :cond_0
    invoke-virtual {v0, p0}, Lcom/onesignal/OSOutcomeEventsController;->sendClickActionOutcomes(Ljava/util/List;)V

    return-void

    .line 3364
    :cond_1
    :goto_0
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v0, "Make sure OneSignal.init is called first"

    invoke-static {p0, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    return-void
.end method

.method public static sendOutcome(Ljava/lang/String;)V
    .locals 1

    const/4 v0, 0x0

    .line 3372
    invoke-static {p0, v0}, Lcom/onesignal/OneSignal;->sendOutcome(Ljava/lang/String;Lcom/onesignal/OneSignal$OutcomeCallback;)V

    return-void
.end method

.method public static sendOutcome(Ljava/lang/String;Lcom/onesignal/OneSignal$OutcomeCallback;)V
    .locals 2

    .line 3376
    invoke-static {p0}, Lcom/onesignal/OneSignal;->isValidOutcomeEntry(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_0

    .line 3377
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string p1, "Make sure OneSignal initWithContext and setAppId is called first"

    invoke-interface {p0, p1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    return-void

    .line 3382
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    const-string v1, "sendOutcome()"

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->shouldQueueTaskForInit(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_3

    sget-object v0, Lcom/onesignal/OneSignal;->outcomeEventsController:Lcom/onesignal/OSOutcomeEventsController;

    if-nez v0, :cond_1

    goto :goto_0

    .line 3395
    :cond_1
    invoke-static {v1}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_2

    return-void

    .line 3399
    :cond_2
    sget-object v0, Lcom/onesignal/OneSignal;->outcomeEventsController:Lcom/onesignal/OSOutcomeEventsController;

    invoke-virtual {v0, p0, p1}, Lcom/onesignal/OSOutcomeEventsController;->sendOutcomeEvent(Ljava/lang/String;Lcom/onesignal/OneSignal$OutcomeCallback;)V

    return-void

    .line 3383
    :cond_3
    :goto_0
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting for remote params. Moving sendOutcome() operation to a pending queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 3385
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$35;

    invoke-direct {v1, p0, p1}, Lcom/onesignal/OneSignal$35;-><init>(Ljava/lang/String;Lcom/onesignal/OneSignal$OutcomeCallback;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void
.end method

.method public static sendOutcomeWithValue(Ljava/lang/String;F)V
    .locals 1

    const/4 v0, 0x0

    .line 3432
    invoke-static {p0, p1, v0}, Lcom/onesignal/OneSignal;->sendOutcomeWithValue(Ljava/lang/String;FLcom/onesignal/OneSignal$OutcomeCallback;)V

    return-void
.end method

.method public static sendOutcomeWithValue(Ljava/lang/String;FLcom/onesignal/OneSignal$OutcomeCallback;)V
    .locals 2

    .line 3436
    invoke-static {p0}, Lcom/onesignal/OneSignal;->isValidOutcomeEntry(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_3

    invoke-static {p1}, Lcom/onesignal/OneSignal;->isValidOutcomeValue(F)Z

    move-result v0

    if-nez v0, :cond_0

    goto :goto_1

    .line 3440
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    const-string v1, "sendOutcomeWithValue()"

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->shouldQueueTaskForInit(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_2

    sget-object v0, Lcom/onesignal/OneSignal;->outcomeEventsController:Lcom/onesignal/OSOutcomeEventsController;

    if-nez v0, :cond_1

    goto :goto_0

    .line 3453
    :cond_1
    invoke-virtual {v0, p0, p1, p2}, Lcom/onesignal/OSOutcomeEventsController;->sendOutcomeEventWithValue(Ljava/lang/String;FLcom/onesignal/OneSignal$OutcomeCallback;)V

    return-void

    .line 3441
    :cond_2
    :goto_0
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting for remote params. Moving sendOutcomeWithValue() operation to a pending queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 3443
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$37;

    invoke-direct {v1, p0, p1, p2}, Lcom/onesignal/OneSignal$37;-><init>(Ljava/lang/String;FLcom/onesignal/OneSignal$OutcomeCallback;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    :cond_3
    :goto_1
    return-void
.end method

.method static sendPurchases(Lorg/json/JSONArray;ZLcom/onesignal/OneSignalRestClient$ResponseHandler;)V
    .locals 3

    .line 2273
    const-string v0, "sendPurchases()"

    invoke-static {v0}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 2276
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getUserId()Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_1

    .line 2277
    new-instance v0, Lcom/onesignal/OneSignal$IAPUpdateJob;

    invoke-direct {v0, p0}, Lcom/onesignal/OneSignal$IAPUpdateJob;-><init>(Lorg/json/JSONArray;)V

    sput-object v0, Lcom/onesignal/OneSignal;->iapUpdateJob:Lcom/onesignal/OneSignal$IAPUpdateJob;

    .line 2278
    iput-boolean p1, v0, Lcom/onesignal/OneSignal$IAPUpdateJob;->newAsExisting:Z

    .line 2279
    sget-object p0, Lcom/onesignal/OneSignal;->iapUpdateJob:Lcom/onesignal/OneSignal$IAPUpdateJob;

    iput-object p2, p0, Lcom/onesignal/OneSignal$IAPUpdateJob;->restResponseHandler:Lcom/onesignal/OneSignalRestClient$ResponseHandler;

    return-void

    .line 2285
    :cond_1
    :try_start_0
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 2286
    const-string v1, "app_id"

    invoke-static {}, Lcom/onesignal/OneSignal;->getSavedAppId()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    if-eqz p1, :cond_2

    .line 2288
    const-string p1, "existing"

    const/4 v1, 0x1

    invoke-virtual {v0, p1, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;

    .line 2289
    :cond_2
    const-string p1, "purchases"

    invoke-virtual {v0, p1, p0}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 2291
    invoke-static {v0, p2}, Lcom/onesignal/OneSignalStateSynchronizer;->sendPurchases(Lorg/json/JSONObject;Lcom/onesignal/OneSignalRestClient$ResponseHandler;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    :catchall_0
    move-exception p0

    .line 2293
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string p2, "Failed to generate JSON for sendPurchases."

    invoke-static {p1, p2, p0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_0
    return-void
.end method

.method public static sendTag(Ljava/lang/String;Ljava/lang/String;)V
    .locals 2

    .line 1903
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    const-string v1, "sendTag()"

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->shouldQueueTaskForInit(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 1904
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting for remote params. Moving sendTag() operation to a pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 1906
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$18;

    invoke-direct {v1, p0, p1}, Lcom/onesignal/OneSignal$18;-><init>(Ljava/lang/String;Ljava/lang/String;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void

    .line 1917
    :cond_0
    invoke-static {v1}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    return-void

    .line 1921
    :cond_1
    :try_start_0
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    invoke-virtual {v0, p0, p1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    move-result-object p0

    invoke-static {p0}, Lcom/onesignal/OneSignal;->sendTags(Lorg/json/JSONObject;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p0

    .line 1923
    invoke-virtual {p0}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-void
.end method

.method public static sendTags(Ljava/lang/String;)V
    .locals 2

    .line 1929
    :try_start_0
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0, p0}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    invoke-static {v0}, Lcom/onesignal/OneSignal;->sendTags(Lorg/json/JSONObject;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p0

    .line 1931
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "Generating JSONObject for sendTags failed!"

    invoke-static {v0, v1, p0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_0
    return-void
.end method

.method public static sendTags(Lorg/json/JSONObject;)V
    .locals 1

    const/4 v0, 0x0

    .line 1945
    invoke-static {p0, v0}, Lcom/onesignal/OneSignal;->sendTags(Lorg/json/JSONObject;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V

    return-void
.end method

.method public static sendTags(Lorg/json/JSONObject;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V
    .locals 2

    .line 1963
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    const-string v1, "sendTags()"

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->shouldQueueTaskForInit(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 1964
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting for remote params. Moving sendTags() operation to a pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 1966
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$19;

    invoke-direct {v1, p0, p1}, Lcom/onesignal/OneSignal$19;-><init>(Lorg/json/JSONObject;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void

    .line 1977
    :cond_0
    invoke-static {v1}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    return-void

    .line 1980
    :cond_1
    new-instance v0, Lcom/onesignal/OneSignal$20;

    invoke-direct {v0, p0, p1}, Lcom/onesignal/OneSignal$20;-><init>(Lorg/json/JSONObject;Lcom/onesignal/OneSignal$ChangeTagsUpdateHandler;)V

    .line 2025
    sget-object p0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    invoke-virtual {p0}, Lcom/onesignal/OSTaskRemoteController;->shouldRunTaskThroughQueue()Z

    move-result p0

    if-eqz p0, :cond_2

    .line 2026
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string p1, "Sending sendTags() operation to pending task queue."

    invoke-interface {p0, p1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 2027
    sget-object p0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    invoke-virtual {p0, v0}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void

    .line 2031
    :cond_2
    invoke-interface {v0}, Ljava/lang/Runnable;->run()V

    return-void
.end method

.method public static sendUniqueOutcome(Ljava/lang/String;)V
    .locals 1

    const/4 v0, 0x0

    .line 3403
    invoke-static {p0, v0}, Lcom/onesignal/OneSignal;->sendUniqueOutcome(Ljava/lang/String;Lcom/onesignal/OneSignal$OutcomeCallback;)V

    return-void
.end method

.method public static sendUniqueOutcome(Ljava/lang/String;Lcom/onesignal/OneSignal$OutcomeCallback;)V
    .locals 2

    .line 3407
    invoke-static {p0}, Lcom/onesignal/OneSignal;->isValidOutcomeEntry(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_0

    return-void

    .line 3411
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    const-string v1, "sendUniqueOutcome()"

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->shouldQueueTaskForInit(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_3

    sget-object v0, Lcom/onesignal/OneSignal;->outcomeEventsController:Lcom/onesignal/OSOutcomeEventsController;

    if-nez v0, :cond_1

    goto :goto_0

    .line 3424
    :cond_1
    invoke-static {v1}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_2

    return-void

    .line 3428
    :cond_2
    sget-object v0, Lcom/onesignal/OneSignal;->outcomeEventsController:Lcom/onesignal/OSOutcomeEventsController;

    invoke-virtual {v0, p0, p1}, Lcom/onesignal/OSOutcomeEventsController;->sendUniqueOutcomeEvent(Ljava/lang/String;Lcom/onesignal/OneSignal$OutcomeCallback;)V

    return-void

    .line 3412
    :cond_3
    :goto_0
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting for remote params. Moving sendUniqueOutcome() operation to a pending queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 3414
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$36;

    invoke-direct {v1, p0, p1}, Lcom/onesignal/OneSignal$36;-><init>(Ljava/lang/String;Lcom/onesignal/OneSignal$OutcomeCallback;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void
.end method

.method public static setAppId(Ljava/lang/String;)V
    .locals 3

    .line 718
    const-string v0, "setAppId called with id: "

    if-eqz p0, :cond_4

    invoke-virtual {p0}, Ljava/lang/String;->isEmpty()Z

    move-result v1

    if-eqz v1, :cond_0

    goto :goto_1

    .line 721
    :cond_0
    sget-object v1, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    invoke-virtual {p0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-nez v1, :cond_1

    const/4 v1, 0x0

    .line 724
    sput-boolean v1, Lcom/onesignal/OneSignal;->initDone:Z

    .line 725
    sget-object v1, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v2, " changing id from: "

    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    sget-object v2, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-interface {v1, v0}, Lcom/onesignal/OSLogger;->verbose(Ljava/lang/String;)V

    .line 728
    :cond_1
    sput-object p0, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    .line 730
    sget-object p0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez p0, :cond_2

    .line 731
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "appId set, but please call initWithContext(appContext) with Application context to complete OneSignal init!"

    invoke-interface {p0, v0}, Lcom/onesignal/OSLogger;->warning(Ljava/lang/String;)V

    return-void

    .line 735
    :cond_2
    sget-object p0, Lcom/onesignal/OneSignal;->appActivity:Ljava/lang/ref/WeakReference;

    if-eqz p0, :cond_3

    invoke-virtual {p0}, Ljava/lang/ref/WeakReference;->get()Ljava/lang/Object;

    move-result-object p0

    if-eqz p0, :cond_3

    .line 736
    sget-object p0, Lcom/onesignal/OneSignal;->appActivity:Ljava/lang/ref/WeakReference;

    invoke-virtual {p0}, Ljava/lang/ref/WeakReference;->get()Ljava/lang/Object;

    move-result-object p0

    check-cast p0, Landroid/content/Context;

    invoke-static {p0}, Lcom/onesignal/OneSignal;->init(Landroid/content/Context;)V

    goto :goto_0

    .line 738
    :cond_3
    sget-object p0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {p0}, Lcom/onesignal/OneSignal;->init(Landroid/content/Context;)V

    :goto_0
    return-void

    .line 719
    :cond_4
    :goto_1
    sget-object v1, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    const-string v0, ", ignoring!"

    invoke-virtual {p0, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-interface {v1, p0}, Lcom/onesignal/OSLogger;->warning(Ljava/lang/String;)V

    return-void
.end method

.method public static setEmail(Ljava/lang/String;)V
    .locals 1

    const/4 v0, 0x0

    .line 1666
    invoke-static {p0, v0, v0}, Lcom/onesignal/OneSignal;->setEmail(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$EmailUpdateHandler;)V

    return-void
.end method

.method public static setEmail(Ljava/lang/String;Lcom/onesignal/OneSignal$EmailUpdateHandler;)V
    .locals 1

    const/4 v0, 0x0

    .line 1662
    invoke-static {p0, v0, p1}, Lcom/onesignal/OneSignal;->setEmail(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$EmailUpdateHandler;)V

    return-void
.end method

.method public static setEmail(Ljava/lang/String;Ljava/lang/String;)V
    .locals 1

    const/4 v0, 0x0

    .line 1670
    invoke-static {p0, p1, v0}, Lcom/onesignal/OneSignal;->setEmail(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$EmailUpdateHandler;)V

    return-void
.end method

.method public static setEmail(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$EmailUpdateHandler;)V
    .locals 2

    .line 1684
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    const-string v1, "setEmail()"

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->shouldQueueTaskForInit(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 1685
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting for remote params. Moving setEmail() operation to a pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 1687
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$13;

    invoke-direct {v1, p0, p1, p2}, Lcom/onesignal/OneSignal$13;-><init>(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$EmailUpdateHandler;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void

    .line 1697
    :cond_0
    invoke-static {v1}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    return-void

    .line 1700
    :cond_1
    invoke-static {p0}, Lcom/onesignal/OSUtils;->isValidEmail(Ljava/lang/String;)Z

    move-result v0

    if-nez v0, :cond_3

    .line 1702
    const-string p0, "Email is invalid"

    if-eqz p2, :cond_2

    .line 1703
    new-instance p1, Lcom/onesignal/OneSignal$EmailUpdateError;

    sget-object v0, Lcom/onesignal/OneSignal$EmailErrorType;->VALIDATION:Lcom/onesignal/OneSignal$EmailErrorType;

    invoke-direct {p1, v0, p0}, Lcom/onesignal/OneSignal$EmailUpdateError;-><init>(Lcom/onesignal/OneSignal$EmailErrorType;Ljava/lang/String;)V

    invoke-interface {p2, p1}, Lcom/onesignal/OneSignal$EmailUpdateHandler;->onFailure(Lcom/onesignal/OneSignal$EmailUpdateError;)V

    .line 1704
    :cond_2
    sget-object p1, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    invoke-interface {p1, p0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    return-void

    .line 1708
    :cond_3
    invoke-static {}, Lcom/onesignal/OneSignal;->getRemoteParams()Lcom/onesignal/OneSignalRemoteParams$Params;

    move-result-object v0

    iget-boolean v0, v0, Lcom/onesignal/OneSignalRemoteParams$Params;->useEmailAuth:Z

    if-eqz v0, :cond_6

    if-eqz p1, :cond_4

    invoke-virtual {p1}, Ljava/lang/String;->length()I

    move-result v0

    if-nez v0, :cond_6

    .line 1710
    :cond_4
    const-string p0, "Email authentication (auth token) is set to REQUIRED for this application. Please provide an auth token from your backend server or change the setting in the OneSignal dashboard."

    if-eqz p2, :cond_5

    .line 1711
    new-instance p1, Lcom/onesignal/OneSignal$EmailUpdateError;

    sget-object v0, Lcom/onesignal/OneSignal$EmailErrorType;->REQUIRES_EMAIL_AUTH:Lcom/onesignal/OneSignal$EmailErrorType;

    invoke-direct {p1, v0, p0}, Lcom/onesignal/OneSignal$EmailUpdateError;-><init>(Lcom/onesignal/OneSignal$EmailErrorType;Ljava/lang/String;)V

    invoke-interface {p2, p1}, Lcom/onesignal/OneSignal$EmailUpdateHandler;->onFailure(Lcom/onesignal/OneSignal$EmailUpdateError;)V

    .line 1712
    :cond_5
    sget-object p1, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    invoke-interface {p1, p0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    return-void

    .line 1716
    :cond_6
    sput-object p2, Lcom/onesignal/OneSignal;->emailUpdateHandler:Lcom/onesignal/OneSignal$EmailUpdateHandler;

    .line 1718
    invoke-virtual {p0}, Ljava/lang/String;->trim()Ljava/lang/String;

    move-result-object p0

    if-eqz p1, :cond_7

    .line 1722
    invoke-virtual {p1}, Ljava/lang/String;->toLowerCase()Ljava/lang/String;

    move-result-object p1

    .line 1724
    :cond_7
    sget-object p2, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {p2}, Lcom/onesignal/OneSignal;->getCurrentEmailSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSEmailSubscriptionState;

    move-result-object p2

    invoke-virtual {p2, p0}, Lcom/onesignal/OSEmailSubscriptionState;->setEmailAddress(Ljava/lang/String;)V

    .line 1725
    invoke-virtual {p0}, Ljava/lang/String;->toLowerCase()Ljava/lang/String;

    move-result-object p0

    invoke-static {p0, p1}, Lcom/onesignal/OneSignalStateSynchronizer;->setEmail(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method public static setExternalUserId(Ljava/lang/String;)V
    .locals 1

    const/4 v0, 0x0

    .line 1819
    invoke-static {p0, v0, v0}, Lcom/onesignal/OneSignal;->setExternalUserId(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;)V

    return-void
.end method

.method public static setExternalUserId(Ljava/lang/String;Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;)V
    .locals 1

    const/4 v0, 0x0

    .line 1823
    invoke-static {p0, v0, p1}, Lcom/onesignal/OneSignal;->setExternalUserId(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;)V

    return-void
.end method

.method public static setExternalUserId(Ljava/lang/String;Ljava/lang/String;)V
    .locals 1

    const/4 v0, 0x0

    .line 1827
    invoke-static {p0, p1, v0}, Lcom/onesignal/OneSignal;->setExternalUserId(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;)V

    return-void
.end method

.method public static setExternalUserId(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;)V
    .locals 2

    .line 1831
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    const-string v1, "setExternalUserId()"

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->shouldQueueTaskForInit(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 1832
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting for remote params. Moving setExternalUserId() operation to a pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 1834
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$17;

    invoke-direct {v1, p0, p1, p2}, Lcom/onesignal/OneSignal$17;-><init>(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void

    .line 1844
    :cond_0
    invoke-static {v1}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    return-void

    :cond_1
    if-nez p0, :cond_2

    .line 1848
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string p1, "External id can\'t be null, set an empty string to remove an external id"

    invoke-interface {p0, p1}, Lcom/onesignal/OSLogger;->warning(Ljava/lang/String;)V

    return-void

    .line 1853
    :cond_2
    invoke-virtual {p0}, Ljava/lang/String;->isEmpty()Z

    move-result v0

    if-nez v0, :cond_5

    invoke-static {}, Lcom/onesignal/OneSignal;->getRemoteParams()Lcom/onesignal/OneSignalRemoteParams$Params;

    move-result-object v0

    if-eqz v0, :cond_5

    invoke-static {}, Lcom/onesignal/OneSignal;->getRemoteParams()Lcom/onesignal/OneSignalRemoteParams$Params;

    move-result-object v0

    iget-boolean v0, v0, Lcom/onesignal/OneSignalRemoteParams$Params;->useUserIdAuth:Z

    if-eqz v0, :cond_5

    if-eqz p1, :cond_3

    invoke-virtual {p1}, Ljava/lang/String;->length()I

    move-result v0

    if-nez v0, :cond_5

    .line 1855
    :cond_3
    const-string p0, "External Id authentication (auth token) is set to REQUIRED for this application. Please provide an auth token from your backend server or change the setting in the OneSignal dashboard."

    if-eqz p2, :cond_4

    .line 1856
    new-instance p1, Lcom/onesignal/OneSignal$ExternalIdError;

    sget-object v0, Lcom/onesignal/OneSignal$ExternalIdErrorType;->REQUIRES_EXTERNAL_ID_AUTH:Lcom/onesignal/OneSignal$ExternalIdErrorType;

    invoke-direct {p1, v0, p0}, Lcom/onesignal/OneSignal$ExternalIdError;-><init>(Lcom/onesignal/OneSignal$ExternalIdErrorType;Ljava/lang/String;)V

    invoke-interface {p2, p1}, Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;->onFailure(Lcom/onesignal/OneSignal$ExternalIdError;)V

    .line 1857
    :cond_4
    sget-object p1, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    invoke-interface {p1, p0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    return-void

    :cond_5
    if-eqz p1, :cond_6

    .line 1863
    invoke-virtual {p1}, Ljava/lang/String;->toLowerCase()Ljava/lang/String;

    move-result-object p1

    .line 1866
    :cond_6
    :try_start_0
    invoke-static {p0, p1, p2}, Lcom/onesignal/OneSignalStateSynchronizer;->setExternalUserId(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    :catch_0
    move-exception p1

    .line 1868
    const-string p2, ""

    invoke-virtual {p0, p2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p0

    if-eqz p0, :cond_7

    const-string p0, "remove"

    goto :goto_0

    :cond_7
    const-string p0, "set"

    .line 1869
    :goto_0
    sget-object p2, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Attempted to "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    const-string v0, " external ID but encountered a JSON exception"

    invoke-virtual {p0, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-interface {p2, p0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 1870
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    :goto_1
    return-void
.end method

.method public static setInAppMessageClickHandler(Lcom/onesignal/OneSignal$OSInAppMessageClickHandler;)V
    .locals 0

    .line 812
    sput-object p0, Lcom/onesignal/OneSignal;->inAppMessageClickHandler:Lcom/onesignal/OneSignal$OSInAppMessageClickHandler;

    return-void
.end method

.method public static setInAppMessageLifecycleHandler(Lcom/onesignal/OSInAppMessageLifecycleHandler;)V
    .locals 2

    .line 789
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez v0, :cond_0

    .line 790
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting initWithContext. Moving setInAppMessageLifecycleHandler() operation to a pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 792
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$4;

    invoke-direct {v1, p0}, Lcom/onesignal/OneSignal$4;-><init>(Lcom/onesignal/OSInAppMessageLifecycleHandler;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void

    .line 801
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/OSInAppMessageController;->setInAppMessageLifecycleHandler(Lcom/onesignal/OSInAppMessageLifecycleHandler;)V

    return-void
.end method

.method static setInForeground(Z)V
    .locals 0

    .line 422
    sput-boolean p0, Lcom/onesignal/OneSignal;->inForeground:Z

    return-void
.end method

.method public static setLanguage(Ljava/lang/String;)V
    .locals 1

    const/4 v0, 0x0

    .line 1768
    invoke-static {p0, v0}, Lcom/onesignal/OneSignal;->setLanguage(Ljava/lang/String;Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;)V

    return-void
.end method

.method public static setLanguage(Ljava/lang/String;Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;)V
    .locals 2

    .line 1772
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    const-string v1, "setLanguage()"

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->shouldQueueTaskForInit(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 1773
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting for remote params. Moving setLanguage() operation to a pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 1775
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$15;

    invoke-direct {v1, p0, p1}, Lcom/onesignal/OneSignal$15;-><init>(Ljava/lang/String;Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void

    :cond_0
    if-eqz p1, :cond_1

    .line 1788
    new-instance v0, Lcom/onesignal/OneSignal$16;

    invoke-direct {v0, p1}, Lcom/onesignal/OneSignal$16;-><init>(Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;)V

    goto :goto_0

    :cond_1
    const/4 v0, 0x0

    .line 1802
    :goto_0
    invoke-static {v1}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_2

    return-void

    .line 1805
    :cond_2
    new-instance p1, Lcom/onesignal/language/LanguageProviderAppDefined;

    sget-object v1, Lcom/onesignal/OneSignal;->preferences:Lcom/onesignal/OSSharedPreferences;

    invoke-direct {p1, v1}, Lcom/onesignal/language/LanguageProviderAppDefined;-><init>(Lcom/onesignal/OSSharedPreferences;)V

    .line 1806
    invoke-virtual {p1, p0}, Lcom/onesignal/language/LanguageProviderAppDefined;->setLanguage(Ljava/lang/String;)V

    .line 1807
    sget-object p0, Lcom/onesignal/OneSignal;->languageContext:Lcom/onesignal/language/LanguageContext;

    invoke-virtual {p0, p1}, Lcom/onesignal/language/LanguageContext;->setStrategy(Lcom/onesignal/language/LanguageProvider;)V

    .line 1810
    :try_start_0
    new-instance p0, Lorg/json/JSONObject;

    invoke-direct {p0}, Lorg/json/JSONObject;-><init>()V

    .line 1811
    const-string p1, "language"

    sget-object v1, Lcom/onesignal/OneSignal;->languageContext:Lcom/onesignal/language/LanguageContext;

    invoke-virtual {v1}, Lcom/onesignal/language/LanguageContext;->getLanguage()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {p0, p1, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 1812
    invoke-static {p0, v0}, Lcom/onesignal/OneSignalStateSynchronizer;->updateDeviceInfo(Lorg/json/JSONObject;Lcom/onesignal/OneSignalStateSynchronizer$OSDeviceInfoCompletionHandler;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    :catch_0
    move-exception p0

    .line 1814
    invoke-virtual {p0}, Lorg/json/JSONException;->printStackTrace()V

    :goto_1
    return-void
.end method

.method static setLastSessionTime(J)V
    .locals 3

    .line 2691
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Last session time set to: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p0, p1}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 2692
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "OS_LAST_SESSION_TIME"

    invoke-static {v0, v1, p0, p1}, Lcom/onesignal/OneSignalPrefs;->saveLong(Ljava/lang/String;Ljava/lang/String;J)V

    return-void
.end method

.method public static setLocationShared(Z)V
    .locals 2

    .line 2748
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    const-string v1, "setLocationShared()"

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->shouldQueueTaskForInit(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 2749
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting for remote params. Moving setLocationShared() operation to a pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 2751
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$28;

    invoke-direct {v1, p0}, Lcom/onesignal/OneSignal$28;-><init>(Z)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void

    .line 2762
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getRemoteParamController()Lcom/onesignal/OSRemoteParamController;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSRemoteParamController;->hasLocationKey()Z

    move-result v0

    if-eqz v0, :cond_1

    return-void

    .line 2765
    :cond_1
    invoke-static {p0}, Lcom/onesignal/OneSignal;->startLocationShared(Z)V

    return-void
.end method

.method public static setLogLevel(II)V
    .locals 0

    .line 1258
    invoke-static {p0}, Lcom/onesignal/OneSignal;->getLogLevel(I)Lcom/onesignal/OneSignal$LOG_LEVEL;

    move-result-object p0

    invoke-static {p1}, Lcom/onesignal/OneSignal;->getLogLevel(I)Lcom/onesignal/OneSignal$LOG_LEVEL;

    move-result-object p1

    invoke-static {p0, p1}, Lcom/onesignal/OneSignal;->setLogLevel(Lcom/onesignal/OneSignal$LOG_LEVEL;Lcom/onesignal/OneSignal$LOG_LEVEL;)V

    return-void
.end method

.method public static setLogLevel(Lcom/onesignal/OneSignal$LOG_LEVEL;Lcom/onesignal/OneSignal$LOG_LEVEL;)V
    .locals 0

    .line 1234
    sput-object p0, Lcom/onesignal/OneSignal;->logCatLevel:Lcom/onesignal/OneSignal$LOG_LEVEL;

    sput-object p1, Lcom/onesignal/OneSignal;->visualLogLevel:Lcom/onesignal/OneSignal$LOG_LEVEL;

    return-void
.end method

.method public static setNotificationOpenedHandler(Lcom/onesignal/OneSignal$OSNotificationOpenedHandler;)V
    .locals 1

    .line 805
    sput-object p0, Lcom/onesignal/OneSignal;->notificationOpenedHandler:Lcom/onesignal/OneSignal$OSNotificationOpenedHandler;

    .line 807
    sget-boolean v0, Lcom/onesignal/OneSignal;->initDone:Z

    if-eqz v0, :cond_0

    if-eqz p0, :cond_0

    .line 808
    invoke-static {}, Lcom/onesignal/OneSignal;->fireCallbackForOpenedNotifications()V

    :cond_0
    return-void
.end method

.method public static setNotificationWillShowInForegroundHandler(Lcom/onesignal/OneSignal$OSNotificationWillShowInForegroundHandler;)V
    .locals 0

    .line 785
    sput-object p0, Lcom/onesignal/OneSignal;->notificationWillShowInForegroundHandler:Lcom/onesignal/OneSignal$OSNotificationWillShowInForegroundHandler;

    return-void
.end method

.method static setRemoteNotificationReceivedHandler(Lcom/onesignal/OneSignal$OSRemoteNotificationReceivedHandler;)V
    .locals 1

    .line 780
    sget-object v0, Lcom/onesignal/OneSignal;->remoteNotificationReceivedHandler:Lcom/onesignal/OneSignal$OSRemoteNotificationReceivedHandler;

    if-nez v0, :cond_0

    .line 781
    sput-object p0, Lcom/onesignal/OneSignal;->remoteNotificationReceivedHandler:Lcom/onesignal/OneSignal$OSRemoteNotificationReceivedHandler;

    :cond_0
    return-void
.end method

.method public static setRequiresUserPrivacyConsent(Z)V
    .locals 1

    .line 1210
    invoke-static {}, Lcom/onesignal/OneSignal;->getRemoteParamController()Lcom/onesignal/OSRemoteParamController;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSRemoteParamController;->hasPrivacyConsentKey()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 1211
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "setRequiresUserPrivacyConsent already called by remote params!, ignoring user set"

    invoke-interface {p0, v0}, Lcom/onesignal/OSLogger;->warning(Ljava/lang/String;)V

    return-void

    .line 1215
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->requiresUserPrivacyConsent()Z

    move-result v0

    if-eqz v0, :cond_1

    if-nez p0, :cond_1

    .line 1216
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v0, "Cannot change requiresUserPrivacyConsent() from TRUE to FALSE"

    invoke-static {p0, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    return-void

    .line 1220
    :cond_1
    invoke-static {}, Lcom/onesignal/OneSignal;->getRemoteParamController()Lcom/onesignal/OSRemoteParamController;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/OSRemoteParamController;->savePrivacyConsentRequired(Z)V

    return-void
.end method

.method public static setSMSNumber(Ljava/lang/String;)V
    .locals 1

    const/4 v0, 0x0

    .line 1565
    invoke-static {p0, v0, v0}, Lcom/onesignal/OneSignal;->setSMSNumber(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSSMSUpdateHandler;)V

    return-void
.end method

.method public static setSMSNumber(Ljava/lang/String;Lcom/onesignal/OneSignal$OSSMSUpdateHandler;)V
    .locals 1

    const/4 v0, 0x0

    .line 1561
    invoke-static {p0, v0, p1}, Lcom/onesignal/OneSignal;->setSMSNumber(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSSMSUpdateHandler;)V

    return-void
.end method

.method public static setSMSNumber(Ljava/lang/String;Ljava/lang/String;)V
    .locals 1

    const/4 v0, 0x0

    .line 1569
    invoke-static {p0, p1, v0}, Lcom/onesignal/OneSignal;->setSMSNumber(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSSMSUpdateHandler;)V

    return-void
.end method

.method public static setSMSNumber(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSSMSUpdateHandler;)V
    .locals 2

    .line 1583
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    const-string v1, "setSMSNumber()"

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->shouldQueueTaskForInit(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 1584
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting for remote params. Moving setSMSNumber() operation to a pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 1586
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$11;

    invoke-direct {v1, p0, p1, p2}, Lcom/onesignal/OneSignal$11;-><init>(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSSMSUpdateHandler;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void

    .line 1597
    :cond_0
    invoke-static {v1}, Lcom/onesignal/OneSignal;->shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_1

    return-void

    .line 1600
    :cond_1
    invoke-static {p0}, Landroid/text/TextUtils;->isEmpty(Ljava/lang/CharSequence;)Z

    move-result v0

    if-eqz v0, :cond_3

    .line 1602
    const-string p0, "SMS number is invalid"

    if-eqz p2, :cond_2

    .line 1603
    new-instance p1, Lcom/onesignal/OneSignal$OSSMSUpdateError;

    sget-object v0, Lcom/onesignal/OneSignal$SMSErrorType;->VALIDATION:Lcom/onesignal/OneSignal$SMSErrorType;

    invoke-direct {p1, v0, p0}, Lcom/onesignal/OneSignal$OSSMSUpdateError;-><init>(Lcom/onesignal/OneSignal$SMSErrorType;Ljava/lang/String;)V

    invoke-interface {p2, p1}, Lcom/onesignal/OneSignal$OSSMSUpdateHandler;->onFailure(Lcom/onesignal/OneSignal$OSSMSUpdateError;)V

    .line 1604
    :cond_2
    sget-object p1, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    invoke-interface {p1, p0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    return-void

    .line 1608
    :cond_3
    invoke-static {}, Lcom/onesignal/OneSignal;->getRemoteParams()Lcom/onesignal/OneSignalRemoteParams$Params;

    move-result-object v0

    iget-boolean v0, v0, Lcom/onesignal/OneSignalRemoteParams$Params;->useSMSAuth:Z

    if-eqz v0, :cond_6

    if-eqz p1, :cond_4

    invoke-virtual {p1}, Ljava/lang/String;->length()I

    move-result v0

    if-nez v0, :cond_6

    .line 1610
    :cond_4
    const-string p0, "SMS authentication (auth token) is set to REQUIRED for this application. Please provide an auth token from your backend server or change the setting in the OneSignal dashboard."

    if-eqz p2, :cond_5

    .line 1611
    new-instance p1, Lcom/onesignal/OneSignal$OSSMSUpdateError;

    sget-object v0, Lcom/onesignal/OneSignal$SMSErrorType;->REQUIRES_SMS_AUTH:Lcom/onesignal/OneSignal$SMSErrorType;

    invoke-direct {p1, v0, p0}, Lcom/onesignal/OneSignal$OSSMSUpdateError;-><init>(Lcom/onesignal/OneSignal$SMSErrorType;Ljava/lang/String;)V

    invoke-interface {p2, p1}, Lcom/onesignal/OneSignal$OSSMSUpdateHandler;->onFailure(Lcom/onesignal/OneSignal$OSSMSUpdateError;)V

    .line 1612
    :cond_5
    sget-object p1, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    invoke-interface {p1, p0}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    return-void

    .line 1616
    :cond_6
    sput-object p2, Lcom/onesignal/OneSignal;->smsUpdateHandler:Lcom/onesignal/OneSignal$OSSMSUpdateHandler;

    .line 1618
    sget-object p2, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {p2}, Lcom/onesignal/OneSignal;->getCurrentSMSSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSSMSSubscriptionState;

    move-result-object p2

    invoke-virtual {p2, p0}, Lcom/onesignal/OSSMSSubscriptionState;->setSMSNumber(Ljava/lang/String;)V

    .line 1619
    invoke-static {p0, p1}, Lcom/onesignal/OneSignalStateSynchronizer;->setSMSNumber(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method static setSessionManager(Lcom/onesignal/OSSessionManager;)V
    .locals 0

    .line 3312
    sput-object p0, Lcom/onesignal/OneSignal;->sessionManager:Lcom/onesignal/OSSessionManager;

    return-void
.end method

.method static setSharedPreferences(Lcom/onesignal/OSSharedPreferences;)V
    .locals 0

    .line 3316
    sput-object p0, Lcom/onesignal/OneSignal;->preferences:Lcom/onesignal/OSSharedPreferences;

    return-void
.end method

.method static setTime(Lcom/onesignal/OSTime;)V
    .locals 0

    .line 3304
    sput-object p0, Lcom/onesignal/OneSignal;->time:Lcom/onesignal/OSTime;

    return-void
.end method

.method static setTrackerFactory(Lcom/onesignal/influence/data/OSTrackerFactory;)V
    .locals 0

    .line 3308
    sput-object p0, Lcom/onesignal/OneSignal;->trackerFactory:Lcom/onesignal/influence/data/OSTrackerFactory;

    return-void
.end method

.method private static setupContextListeners(Z)V
    .locals 4

    .line 897
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    check-cast v0, Landroid/app/Application;

    invoke-static {v0}, Lcom/onesignal/ActivityLifecycleListener;->registerActivityLifecycleCallbacks(Landroid/app/Application;)V

    if-eqz p0, :cond_1

    .line 902
    new-instance p0, Lcom/onesignal/language/LanguageContext;

    sget-object v0, Lcom/onesignal/OneSignal;->preferences:Lcom/onesignal/OSSharedPreferences;

    invoke-direct {p0, v0}, Lcom/onesignal/language/LanguageContext;-><init>(Lcom/onesignal/OSSharedPreferences;)V

    sput-object p0, Lcom/onesignal/OneSignal;->languageContext:Lcom/onesignal/language/LanguageContext;

    .line 906
    invoke-static {}, Lcom/onesignal/OneSignalPrefs;->startDelayedWrite()V

    .line 908
    invoke-static {}, Lcom/onesignal/OneSignal;->getDBHelperInstance()Lcom/onesignal/OneSignalDbHelper;

    move-result-object p0

    .line 909
    new-instance v0, Lcom/onesignal/OSNotificationDataController;

    sget-object v1, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    invoke-direct {v0, p0, v1}, Lcom/onesignal/OSNotificationDataController;-><init>(Lcom/onesignal/OneSignalDbHelper;Lcom/onesignal/OSLogger;)V

    sput-object v0, Lcom/onesignal/OneSignal;->notificationDataController:Lcom/onesignal/OSNotificationDataController;

    .line 912
    invoke-virtual {v0}, Lcom/onesignal/OSNotificationDataController;->cleanOldCachedData()V

    .line 914
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageController;->cleanCachedInAppMessages()V

    .line 916
    sget-object v0, Lcom/onesignal/OneSignal;->outcomeEventsFactory:Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

    if-nez v0, :cond_0

    .line 917
    new-instance v0, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

    sget-object v1, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    sget-object v2, Lcom/onesignal/OneSignal;->apiClient:Lcom/onesignal/OneSignalAPIClient;

    sget-object v3, Lcom/onesignal/OneSignal;->preferences:Lcom/onesignal/OSSharedPreferences;

    invoke-direct {v0, v1, v2, p0, v3}, Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;-><init>(Lcom/onesignal/OSLogger;Lcom/onesignal/OneSignalAPIClient;Lcom/onesignal/OneSignalDb;Lcom/onesignal/OSSharedPreferences;)V

    sput-object v0, Lcom/onesignal/OneSignal;->outcomeEventsFactory:Lcom/onesignal/outcomes/data/OSOutcomeEventsFactory;

    .line 919
    :cond_0
    sget-object p0, Lcom/onesignal/OneSignal;->sessionManager:Lcom/onesignal/OSSessionManager;

    invoke-virtual {p0}, Lcom/onesignal/OSSessionManager;->initSessionFromCache()V

    .line 920
    invoke-static {}, Lcom/onesignal/OneSignal;->getOutcomeEventsController()Lcom/onesignal/OSOutcomeEventsController;

    move-result-object p0

    invoke-virtual {p0}, Lcom/onesignal/OSOutcomeEventsController;->cleanCachedUniqueOutcomes()V

    :cond_1
    return-void
.end method

.method private static setupPrivacyConsent(Landroid/content/Context;)V
    .locals 1

    .line 925
    sget-object v0, Lcom/onesignal/ApplicationInfoHelper;->Companion:Lcom/onesignal/ApplicationInfoHelper$Companion;

    invoke-virtual {v0, p0}, Lcom/onesignal/ApplicationInfoHelper$Companion;->getInfo(Landroid/content/Context;)Landroid/content/pm/ApplicationInfo;

    move-result-object p0

    if-nez p0, :cond_0

    return-void

    .line 929
    :cond_0
    iget-object p0, p0, Landroid/content/pm/ApplicationInfo;->metaData:Landroid/os/Bundle;

    .line 932
    const-string v0, "com.onesignal.PrivacyConsent"

    invoke-virtual {p0, v0}, Landroid/os/Bundle;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    if-eqz p0, :cond_1

    .line 934
    const-string v0, "ENABLE"

    invoke-virtual {v0, p0}, Ljava/lang/String;->equalsIgnoreCase(Ljava/lang/String;)Z

    move-result p0

    invoke-static {p0}, Lcom/onesignal/OneSignal;->setRequiresUserPrivacyConsent(Z)V

    :cond_1
    return-void
.end method

.method static shouldFireForegroundHandlers(Lcom/onesignal/OSNotificationGenerationJob;)Z
    .locals 2

    .line 2383
    invoke-static {}, Lcom/onesignal/OneSignal;->isInForeground()Z

    move-result v0

    const/4 v1, 0x0

    if-nez v0, :cond_0

    .line 2384
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->INFO:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v0, "App is in background, show notification"

    invoke-static {p0, v0}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    return v1

    .line 2388
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal;->notificationWillShowInForegroundHandler:Lcom/onesignal/OneSignal$OSNotificationWillShowInForegroundHandler;

    if-nez v0, :cond_1

    .line 2389
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->INFO:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v0, "No NotificationWillShowInForegroundHandler setup, show notification"

    invoke-static {p0, v0}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    return v1

    .line 2394
    :cond_1
    invoke-virtual {p0}, Lcom/onesignal/OSNotificationGenerationJob;->isRestoring()Z

    move-result p0

    if-eqz p0, :cond_2

    .line 2395
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->INFO:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v0, "Not firing notificationWillShowInForegroundHandler for restored notifications"

    invoke-static {p0, v0}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    return v1

    :cond_2
    const/4 p0, 0x1

    return p0
.end method

.method private static shouldInitDirectSessionFromNotificationOpen(Landroid/app/Activity;Lorg/json/JSONArray;)Z
    .locals 2

    .line 2468
    sget-boolean v0, Lcom/onesignal/OneSignal;->inForeground:Z

    const/4 v1, 0x0

    if-eqz v0, :cond_0

    return v1

    .line 2473
    :cond_0
    :try_start_0
    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->getJSONObject(I)Lorg/json/JSONObject;

    move-result-object p1

    .line 2474
    new-instance v0, Lcom/onesignal/OSNotificationOpenBehaviorFromPushPayload;

    invoke-direct {v0, p0, p1}, Lcom/onesignal/OSNotificationOpenBehaviorFromPushPayload;-><init>(Landroid/content/Context;Lorg/json/JSONObject;)V

    .line 2477
    invoke-virtual {v0}, Lcom/onesignal/OSNotificationOpenBehaviorFromPushPayload;->getShouldOpenApp()Z

    move-result p0
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    return p0

    :catch_0
    move-exception p0

    .line 2479
    invoke-virtual {p0}, Lorg/json/JSONException;->printStackTrace()V

    const/4 p0, 0x1

    return p0
.end method

.method static shouldLogUserPrivacyConsentErrorMessageForMethodName(Ljava/lang/String;)Z
    .locals 3

    .line 1224
    invoke-static {}, Lcom/onesignal/OneSignal;->requiresUserPrivacyConsent()Z

    move-result v0

    if-eqz v0, :cond_1

    if-eqz p0, :cond_0

    .line 1226
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->WARN:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Method "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    const-string v1, " was called before the user provided privacy consent. Your application is set to require the user\'s privacy consent before the OneSignal SDK can be initialized. Please ensure the user has provided consent before calling this method. You can check the latest OneSignal consent status by calling OneSignal.userProvidedPrivacyConsent()"

    invoke-virtual {p0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-static {v0, p0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    :cond_0
    const/4 p0, 0x1

    return p0

    :cond_1
    const/4 p0, 0x0

    return p0
.end method

.method private static shouldStartNewSession()Z
    .locals 2

    .line 3215
    invoke-static {}, Lcom/onesignal/OneSignal;->isInForeground()Z

    move-result v0

    const/4 v1, 0x0

    if-nez v0, :cond_0

    return v1

    .line 3218
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->isPastOnSessionTime()Z

    move-result v0

    if-nez v0, :cond_1

    return v1

    :cond_1
    const/4 v0, 0x1

    return v0
.end method

.method static startLocationShared(Z)V
    .locals 3

    .line 2769
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "OneSignal startLocationShared: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p0}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 2770
    invoke-static {}, Lcom/onesignal/OneSignal;->getRemoteParamController()Lcom/onesignal/OSRemoteParamController;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/OSRemoteParamController;->saveLocationShared(Z)V

    if-nez p0, :cond_0

    .line 2773
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "OneSignal is shareLocation set false, clearing last location!"

    invoke-interface {p0, v0}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 2774
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->clearLocation()V

    :cond_0
    return-void
.end method

.method private static startLocationUpdate()V
    .locals 3

    .line 1036
    new-instance v0, Lcom/onesignal/OneSignal$5;

    invoke-direct {v0}, Lcom/onesignal/OneSignal$5;-><init>()V

    .line 1049
    sget-object v1, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    const/4 v2, 0x0

    invoke-static {v1, v2, v2, v0}, Lcom/onesignal/LocationController;->getLocation(Landroid/content/Context;ZZLcom/onesignal/LocationController$LocationHandler;)V

    return-void
.end method

.method private static startRegistrationOrOnSession()V
    .locals 3

    .line 1017
    sget-boolean v0, Lcom/onesignal/OneSignal;->waitingToPostStateSync:Z

    if-eqz v0, :cond_0

    return-void

    :cond_0
    const/4 v0, 0x1

    .line 1019
    sput-boolean v0, Lcom/onesignal/OneSignal;->waitingToPostStateSync:Z

    .line 1021
    sget-boolean v1, Lcom/onesignal/OneSignal;->inForeground:Z

    const/4 v2, 0x0

    if-eqz v1, :cond_1

    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->getSyncAsNewSession()Z

    move-result v1

    if-eqz v1, :cond_1

    .line 1022
    sput-boolean v2, Lcom/onesignal/OneSignal;->locationFired:Z

    .line 1024
    :cond_1
    invoke-static {}, Lcom/onesignal/OneSignal;->startLocationUpdate()V

    .line 1026
    sput-boolean v2, Lcom/onesignal/OneSignal;->registerForPushFired:Z

    .line 1029
    invoke-static {}, Lcom/onesignal/OneSignal;->getRemoteParams()Lcom/onesignal/OneSignalRemoteParams$Params;

    move-result-object v1

    if-eqz v1, :cond_2

    .line 1030
    invoke-static {}, Lcom/onesignal/OneSignal;->registerForPushToken()V

    goto :goto_0

    .line 1032
    :cond_2
    sget-object v1, Lcom/onesignal/OneSignal;->appId:Ljava/lang/String;

    invoke-static {}, Lcom/onesignal/OneSignal;->getUserId()Ljava/lang/String;

    move-result-object v2

    invoke-static {v1, v2, v0}, Lcom/onesignal/OneSignal;->makeAndroidParamsRequest(Ljava/lang/String;Ljava/lang/String;Z)V

    :goto_0
    return-void
.end method

.method public static unsubscribeWhenNotificationsAreDisabled(Z)V
    .locals 2

    .line 689
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    const-string v1, "unsubscribeWhenNotificationsAreDisabled()"

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->shouldQueueTaskForInit(Ljava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 690
    sget-object v0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Waiting for remote params. Moving unsubscribeWhenNotificationsAreDisabled() operation to a pending task queue."

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    .line 692
    sget-object v0, Lcom/onesignal/OneSignal;->taskRemoteController:Lcom/onesignal/OSTaskRemoteController;

    new-instance v1, Lcom/onesignal/OneSignal$3;

    invoke-direct {v1, p0}, Lcom/onesignal/OneSignal$3;-><init>(Z)V

    invoke-virtual {v0, v1}, Lcom/onesignal/OSTaskRemoteController;->addTaskToQueue(Ljava/lang/Runnable;)V

    return-void

    .line 703
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getRemoteParamController()Lcom/onesignal/OSRemoteParamController;

    move-result-object v0

    invoke-virtual {v0}, Lcom/onesignal/OSRemoteParamController;->hasUnsubscribeNotificationKey()Z

    move-result v0

    if-eqz v0, :cond_1

    .line 704
    sget-object p0, Lcom/onesignal/OneSignal;->logger:Lcom/onesignal/OSLogger;

    const-string v0, "unsubscribeWhenNotificationsAreDisabled already called by remote params!, ignoring user set"

    invoke-interface {p0, v0}, Lcom/onesignal/OSLogger;->warning(Ljava/lang/String;)V

    return-void

    .line 708
    :cond_1
    invoke-static {}, Lcom/onesignal/OneSignal;->getRemoteParamController()Lcom/onesignal/OSRemoteParamController;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/OSRemoteParamController;->saveUnsubscribeWhenNotificationsAreDisabled(Z)V

    return-void
.end method

.method static updateEmailIdDependents(Ljava/lang/String;)V
    .locals 2

    .line 2653
    invoke-static {p0}, Lcom/onesignal/OneSignal;->saveEmailId(Ljava/lang/String;)V

    .line 2654
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->getCurrentEmailSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSEmailSubscriptionState;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/OSEmailSubscriptionState;->setEmailUserId(Ljava/lang/String;)V

    .line 2656
    :try_start_0
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    const-string v1, "parent_player_id"

    invoke-virtual {v0, v1, p0}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    move-result-object p0

    .line 2657
    invoke-static {p0}, Lcom/onesignal/OneSignalStateSynchronizer;->updatePushState(Lorg/json/JSONObject;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p0

    .line 2659
    invoke-virtual {p0}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-void
.end method

.method static updateSMSIdDependents(Ljava/lang/String;)V
    .locals 1

    .line 2664
    invoke-static {p0}, Lcom/onesignal/OneSignal;->saveSMSId(Ljava/lang/String;)V

    .line 2665
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->getCurrentSMSSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSSMSSubscriptionState;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/OSSMSSubscriptionState;->setSMSUserId(Ljava/lang/String;)V

    return-void
.end method

.method static updateUserIdDependents(Ljava/lang/String;)V
    .locals 2

    .line 2639
    invoke-static {p0}, Lcom/onesignal/OneSignal;->saveUserId(Ljava/lang/String;)V

    .line 2640
    invoke-static {}, Lcom/onesignal/OneSignal;->internalFireGetTagsCallbacks()V

    .line 2642
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-static {v0}, Lcom/onesignal/OneSignal;->getCurrentSubscriptionState(Landroid/content/Context;)Lcom/onesignal/OSSubscriptionState;

    move-result-object v0

    invoke-virtual {v0, p0}, Lcom/onesignal/OSSubscriptionState;->setUserId(Ljava/lang/String;)V

    .line 2644
    sget-object p0, Lcom/onesignal/OneSignal;->iapUpdateJob:Lcom/onesignal/OneSignal$IAPUpdateJob;

    if-eqz p0, :cond_0

    .line 2645
    iget-object p0, p0, Lcom/onesignal/OneSignal$IAPUpdateJob;->toReport:Lorg/json/JSONArray;

    sget-object v0, Lcom/onesignal/OneSignal;->iapUpdateJob:Lcom/onesignal/OneSignal$IAPUpdateJob;

    iget-boolean v0, v0, Lcom/onesignal/OneSignal$IAPUpdateJob;->newAsExisting:Z

    sget-object v1, Lcom/onesignal/OneSignal;->iapUpdateJob:Lcom/onesignal/OneSignal$IAPUpdateJob;

    iget-object v1, v1, Lcom/onesignal/OneSignal$IAPUpdateJob;->restResponseHandler:Lcom/onesignal/OneSignalRestClient$ResponseHandler;

    invoke-static {p0, v0, v1}, Lcom/onesignal/OneSignal;->sendPurchases(Lorg/json/JSONArray;ZLcom/onesignal/OneSignalRestClient$ResponseHandler;)V

    const/4 p0, 0x0

    .line 2646
    sput-object p0, Lcom/onesignal/OneSignal;->iapUpdateJob:Lcom/onesignal/OneSignal$IAPUpdateJob;

    .line 2649
    :cond_0
    invoke-static {}, Lcom/onesignal/OneSignalStateSynchronizer;->refreshSecondaryChannelState()V

    return-void
.end method

.method public static userProvidedPrivacyConsent()Z
    .locals 1

    .line 956
    sget-object v0, Lcom/onesignal/OneSignal;->remoteParamController:Lcom/onesignal/OSRemoteParamController;

    invoke-virtual {v0}, Lcom/onesignal/OSRemoteParamController;->getSavedUserConsentStatus()Z

    move-result v0

    return v0
.end method
