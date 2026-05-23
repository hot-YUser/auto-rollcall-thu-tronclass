.class Lcom/onesignal/WebViewManager;
.super Lcom/onesignal/ActivityLifecycleHandler$ActivityAvailableListener;
.source "WebViewManager.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/WebViewManager$OSJavaScriptInterface;,
        Lcom/onesignal/WebViewManager$OneSignalGenericCallback;,
        Lcom/onesignal/WebViewManager$Position;
    }
.end annotation


# static fields
.field private static final IN_APP_MESSAGE_INIT_DELAY:I = 0xc8

.field private static final MARGIN_PX_SIZE:I

.field private static final TAG:Ljava/lang/String; = "com.onesignal.WebViewManager"

.field protected static lastInstance:Lcom/onesignal/WebViewManager;


# instance fields
.field private activity:Landroid/app/Activity;

.field private closing:Z

.field private currentActivityName:Ljava/lang/String;

.field private dismissFired:Z

.field private lastPageHeight:Ljava/lang/Integer;

.field private message:Lcom/onesignal/OSInAppMessageInternal;

.field private messageContent:Lcom/onesignal/OSInAppMessageContent;

.field private messageView:Lcom/onesignal/InAppMessageView;

.field private final messageViewSyncLock:Ljava/lang/Object;

.field private webView:Lcom/onesignal/OSWebView;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    const/16 v0, 0x18

    .line 40
    invoke-static {v0}, Lcom/onesignal/OSViewUtils;->dpToPx(I)I

    move-result v0

    sput v0, Lcom/onesignal/WebViewManager;->MARGIN_PX_SIZE:I

    const/4 v0, 0x0

    .line 64
    sput-object v0, Lcom/onesignal/WebViewManager;->lastInstance:Lcom/onesignal/WebViewManager;

    return-void
.end method

.method protected constructor <init>(Lcom/onesignal/OSInAppMessageInternal;Landroid/app/Activity;Lcom/onesignal/OSInAppMessageContent;)V
    .locals 1

    .line 82
    invoke-direct {p0}, Lcom/onesignal/ActivityLifecycleHandler$ActivityAvailableListener;-><init>()V

    .line 42
    new-instance v0, Lcom/onesignal/WebViewManager$1;

    invoke-direct {v0, p0}, Lcom/onesignal/WebViewManager$1;-><init>(Lcom/onesignal/WebViewManager;)V

    iput-object v0, p0, Lcom/onesignal/WebViewManager;->messageViewSyncLock:Ljava/lang/Object;

    const/4 v0, 0x0

    .line 70
    iput-object v0, p0, Lcom/onesignal/WebViewManager;->currentActivityName:Ljava/lang/String;

    .line 71
    iput-object v0, p0, Lcom/onesignal/WebViewManager;->lastPageHeight:Ljava/lang/Integer;

    const/4 v0, 0x0

    .line 74
    iput-boolean v0, p0, Lcom/onesignal/WebViewManager;->dismissFired:Z

    .line 76
    iput-boolean v0, p0, Lcom/onesignal/WebViewManager;->closing:Z

    .line 83
    iput-object p1, p0, Lcom/onesignal/WebViewManager;->message:Lcom/onesignal/OSInAppMessageInternal;

    .line 84
    iput-object p2, p0, Lcom/onesignal/WebViewManager;->activity:Landroid/app/Activity;

    .line 85
    iput-object p3, p0, Lcom/onesignal/WebViewManager;->messageContent:Lcom/onesignal/OSInAppMessageContent;

    return-void
.end method

.method static synthetic access$000(Landroid/app/Activity;Lcom/onesignal/OSInAppMessageInternal;Lcom/onesignal/OSInAppMessageContent;)V
    .locals 0

    .line 37
    invoke-static {p0, p1, p2}, Lcom/onesignal/WebViewManager;->initInAppMessage(Landroid/app/Activity;Lcom/onesignal/OSInAppMessageInternal;Lcom/onesignal/OSInAppMessageContent;)V

    return-void
.end method

.method static synthetic access$100(Lcom/onesignal/WebViewManager;Landroid/app/Activity;Ljava/lang/String;Z)V
    .locals 0

    .line 37
    invoke-direct {p0, p1, p2, p3}, Lcom/onesignal/WebViewManager;->setupWebView(Landroid/app/Activity;Ljava/lang/String;Z)V

    return-void
.end method

.method static synthetic access$1000(Lcom/onesignal/WebViewManager;Landroid/app/Activity;)V
    .locals 0

    .line 37
    invoke-direct {p0, p1}, Lcom/onesignal/WebViewManager;->setWebViewToMaxSize(Landroid/app/Activity;)V

    return-void
.end method

.method static synthetic access$1100(Lcom/onesignal/WebViewManager;)V
    .locals 0

    .line 37
    invoke-direct {p0}, Lcom/onesignal/WebViewManager;->updateSafeAreaInsets()V

    return-void
.end method

.method static synthetic access$1200(Lcom/onesignal/WebViewManager;Ljava/lang/Integer;)V
    .locals 0

    .line 37
    invoke-direct {p0, p1}, Lcom/onesignal/WebViewManager;->showMessageView(Ljava/lang/Integer;)V

    return-void
.end method

.method static synthetic access$1300(Lcom/onesignal/WebViewManager;)V
    .locals 0

    .line 37
    invoke-direct {p0}, Lcom/onesignal/WebViewManager;->removeActivityListener()V

    return-void
.end method

.method static synthetic access$1402(Lcom/onesignal/WebViewManager;Z)Z
    .locals 0

    .line 37
    iput-boolean p1, p0, Lcom/onesignal/WebViewManager;->dismissFired:Z

    return p1
.end method

.method static synthetic access$1500(Lcom/onesignal/WebViewManager;Lcom/onesignal/InAppMessageView;)V
    .locals 0

    .line 37
    invoke-direct {p0, p1}, Lcom/onesignal/WebViewManager;->setMessageView(Lcom/onesignal/InAppMessageView;)V

    return-void
.end method

.method static synthetic access$200(Lcom/onesignal/WebViewManager;)Lcom/onesignal/InAppMessageView;
    .locals 0

    .line 37
    iget-object p0, p0, Lcom/onesignal/WebViewManager;->messageView:Lcom/onesignal/InAppMessageView;

    return-object p0
.end method

.method static synthetic access$300(Lcom/onesignal/WebViewManager;)Lcom/onesignal/OSInAppMessageContent;
    .locals 0

    .line 37
    iget-object p0, p0, Lcom/onesignal/WebViewManager;->messageContent:Lcom/onesignal/OSInAppMessageContent;

    return-object p0
.end method

.method static synthetic access$400(Lcom/onesignal/WebViewManager;Z)V
    .locals 0

    .line 37
    invoke-direct {p0, p1}, Lcom/onesignal/WebViewManager;->createNewInAppMessageView(Z)V

    return-void
.end method

.method static synthetic access$500(Lcom/onesignal/WebViewManager;)Landroid/app/Activity;
    .locals 0

    .line 37
    iget-object p0, p0, Lcom/onesignal/WebViewManager;->activity:Landroid/app/Activity;

    return-object p0
.end method

.method static synthetic access$600(Lcom/onesignal/WebViewManager;Landroid/app/Activity;Lorg/json/JSONObject;)I
    .locals 0

    .line 37
    invoke-direct {p0, p1, p2}, Lcom/onesignal/WebViewManager;->pageRectToViewHeight(Landroid/app/Activity;Lorg/json/JSONObject;)I

    move-result p0

    return p0
.end method

.method static synthetic access$700(Lcom/onesignal/WebViewManager;)Z
    .locals 0

    .line 37
    iget-boolean p0, p0, Lcom/onesignal/WebViewManager;->closing:Z

    return p0
.end method

.method static synthetic access$702(Lcom/onesignal/WebViewManager;Z)Z
    .locals 0

    .line 37
    iput-boolean p1, p0, Lcom/onesignal/WebViewManager;->closing:Z

    return p1
.end method

.method static synthetic access$800(Lcom/onesignal/WebViewManager;)Lcom/onesignal/OSInAppMessageInternal;
    .locals 0

    .line 37
    iget-object p0, p0, Lcom/onesignal/WebViewManager;->message:Lcom/onesignal/OSInAppMessageInternal;

    return-object p0
.end method

.method static synthetic access$900(Lcom/onesignal/WebViewManager;)Lcom/onesignal/OSWebView;
    .locals 0

    .line 37
    iget-object p0, p0, Lcom/onesignal/WebViewManager;->webView:Lcom/onesignal/OSWebView;

    return-object p0
.end method

.method private blurryRenderingWebViewForKitKatWorkAround(Landroid/webkit/WebView;)V
    .locals 0

    return-void
.end method

.method private calculateHeightAndShowWebViewAfterNewActivity()V
    .locals 2

    .line 331
    iget-object v0, p0, Lcom/onesignal/WebViewManager;->messageView:Lcom/onesignal/InAppMessageView;

    if-nez v0, :cond_0

    return-void

    .line 335
    :cond_0
    invoke-virtual {v0}, Lcom/onesignal/InAppMessageView;->getDisplayPosition()Lcom/onesignal/WebViewManager$Position;

    move-result-object v0

    sget-object v1, Lcom/onesignal/WebViewManager$Position;->FULL_SCREEN:Lcom/onesignal/WebViewManager$Position;

    if-ne v0, v1, :cond_1

    iget-object v0, p0, Lcom/onesignal/WebViewManager;->messageContent:Lcom/onesignal/OSInAppMessageContent;

    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageContent;->isFullBleed()Z

    move-result v0

    if-nez v0, :cond_1

    const/4 v0, 0x0

    .line 336
    invoke-direct {p0, v0}, Lcom/onesignal/WebViewManager;->showMessageView(Ljava/lang/Integer;)V

    return-void

    .line 340
    :cond_1
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "In app message new activity, calculate height and show "

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 343
    iget-object v0, p0, Lcom/onesignal/WebViewManager;->activity:Landroid/app/Activity;

    new-instance v1, Lcom/onesignal/WebViewManager$6;

    invoke-direct {v1, p0}, Lcom/onesignal/WebViewManager$6;-><init>(Lcom/onesignal/WebViewManager;)V

    invoke-static {v0, v1}, Lcom/onesignal/OSViewUtils;->decorViewReady(Landroid/app/Activity;Ljava/lang/Runnable;)V

    return-void
.end method

.method private createNewInAppMessageView(Z)V
    .locals 3

    .line 476
    iget-object v0, p0, Lcom/onesignal/WebViewManager;->messageContent:Lcom/onesignal/OSInAppMessageContent;

    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageContent;->getPageHeight()I

    move-result v0

    invoke-static {v0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/WebViewManager;->lastPageHeight:Ljava/lang/Integer;

    .line 477
    new-instance v0, Lcom/onesignal/InAppMessageView;

    iget-object v1, p0, Lcom/onesignal/WebViewManager;->webView:Lcom/onesignal/OSWebView;

    iget-object v2, p0, Lcom/onesignal/WebViewManager;->messageContent:Lcom/onesignal/OSInAppMessageContent;

    invoke-direct {v0, v1, v2, p1}, Lcom/onesignal/InAppMessageView;-><init>(Landroid/webkit/WebView;Lcom/onesignal/OSInAppMessageContent;Z)V

    .line 478
    invoke-direct {p0, v0}, Lcom/onesignal/WebViewManager;->setMessageView(Lcom/onesignal/InAppMessageView;)V

    .line 479
    iget-object p1, p0, Lcom/onesignal/WebViewManager;->messageView:Lcom/onesignal/InAppMessageView;

    new-instance v0, Lcom/onesignal/WebViewManager$8;

    invoke-direct {v0, p0}, Lcom/onesignal/WebViewManager$8;-><init>(Lcom/onesignal/WebViewManager;)V

    invoke-virtual {p1, v0}, Lcom/onesignal/InAppMessageView;->setMessageController(Lcom/onesignal/InAppMessageView$InAppMessageViewListener;)V

    .line 497
    invoke-static {}, Lcom/onesignal/ActivityLifecycleListener;->getActivityLifecycleHandler()Lcom/onesignal/ActivityLifecycleHandler;

    move-result-object p1

    if-eqz p1, :cond_0

    .line 500
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    sget-object v1, Lcom/onesignal/WebViewManager;->TAG:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/WebViewManager;->message:Lcom/onesignal/OSInAppMessageInternal;

    iget-object v1, v1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0, p0}, Lcom/onesignal/ActivityLifecycleHandler;->addActivityAvailableListener(Ljava/lang/String;Lcom/onesignal/ActivityLifecycleHandler$ActivityAvailableListener;)V

    :cond_0
    return-void
.end method

.method static dismissCurrentInAppMessage()V
    .locals 3

    .line 130
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "WebViewManager IAM dismissAndAwaitNextMessage lastInstance: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    sget-object v2, Lcom/onesignal/WebViewManager;->lastInstance:Lcom/onesignal/WebViewManager;

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 131
    sget-object v0, Lcom/onesignal/WebViewManager;->lastInstance:Lcom/onesignal/WebViewManager;

    if-eqz v0, :cond_0

    const/4 v1, 0x0

    .line 132
    invoke-virtual {v0, v1}, Lcom/onesignal/WebViewManager;->dismissAndAwaitNextMessage(Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V

    :cond_0
    return-void
.end method

.method private static enableWebViewRemoteDebugging()V
    .locals 1

    .line 505
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    .line 506
    invoke-static {v0}, Lcom/onesignal/OneSignal;->atLogLevel(Lcom/onesignal/OneSignal$LOG_LEVEL;)Z

    move-result v0

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    .line 507
    invoke-static {v0}, Landroid/webkit/WebView;->setWebContentsDebuggingEnabled(Z)V

    :cond_0
    return-void
.end method

.method private getWebViewMaxSizeX(Landroid/app/Activity;)I
    .locals 1

    .line 512
    iget-object v0, p0, Lcom/onesignal/WebViewManager;->messageContent:Lcom/onesignal/OSInAppMessageContent;

    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageContent;->isFullBleed()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 513
    invoke-static {p1}, Lcom/onesignal/OSViewUtils;->getFullbleedWindowWidth(Landroid/app/Activity;)I

    move-result p1

    return p1

    .line 515
    :cond_0
    sget v0, Lcom/onesignal/WebViewManager;->MARGIN_PX_SIZE:I

    mul-int/lit8 v0, v0, 0x2

    .line 516
    invoke-static {p1}, Lcom/onesignal/OSViewUtils;->getWindowWidth(Landroid/app/Activity;)I

    move-result p1

    sub-int/2addr p1, v0

    return p1
.end method

.method private getWebViewMaxSizeY(Landroid/app/Activity;)I
    .locals 1

    .line 520
    iget-object v0, p0, Lcom/onesignal/WebViewManager;->messageContent:Lcom/onesignal/OSInAppMessageContent;

    invoke-virtual {v0}, Lcom/onesignal/OSInAppMessageContent;->isFullBleed()Z

    move-result v0

    if-eqz v0, :cond_0

    const/4 v0, 0x0

    goto :goto_0

    :cond_0
    sget v0, Lcom/onesignal/WebViewManager;->MARGIN_PX_SIZE:I

    mul-int/lit8 v0, v0, 0x2

    .line 521
    :goto_0
    invoke-static {p1}, Lcom/onesignal/OSViewUtils;->getWindowHeight(Landroid/app/Activity;)I

    move-result p1

    sub-int/2addr p1, v0

    return p1
.end method

.method private static initInAppMessage(Landroid/app/Activity;Lcom/onesignal/OSInAppMessageInternal;Lcom/onesignal/OSInAppMessageContent;)V
    .locals 2

    .line 147
    invoke-virtual {p2}, Lcom/onesignal/OSInAppMessageContent;->isFullBleed()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 148
    invoke-static {p2, p0}, Lcom/onesignal/WebViewManager;->setContentSafeAreaInsets(Lcom/onesignal/OSInAppMessageContent;Landroid/app/Activity;)V

    .line 152
    :cond_0
    :try_start_0
    invoke-virtual {p2}, Lcom/onesignal/OSInAppMessageContent;->getContentHtml()Ljava/lang/String;

    move-result-object v0

    const-string v1, "UTF-8"

    invoke-virtual {v0, v1}, Ljava/lang/String;->getBytes(Ljava/lang/String;)[B

    move-result-object v0

    const/4 v1, 0x2

    .line 151
    invoke-static {v0, v1}, Landroid/util/Base64;->encodeToString([BI)Ljava/lang/String;

    move-result-object v0

    .line 156
    new-instance v1, Lcom/onesignal/WebViewManager;

    invoke-direct {v1, p1, p0, p2}, Lcom/onesignal/WebViewManager;-><init>(Lcom/onesignal/OSInAppMessageInternal;Landroid/app/Activity;Lcom/onesignal/OSInAppMessageContent;)V

    .line 157
    sput-object v1, Lcom/onesignal/WebViewManager;->lastInstance:Lcom/onesignal/WebViewManager;

    .line 160
    new-instance p1, Lcom/onesignal/WebViewManager$4;

    invoke-direct {p1, v1, p0, v0, p2}, Lcom/onesignal/WebViewManager$4;-><init>(Lcom/onesignal/WebViewManager;Landroid/app/Activity;Ljava/lang/String;Lcom/onesignal/OSInAppMessageContent;)V

    invoke-static {p1}, Lcom/onesignal/OSUtils;->runOnMainUIThread(Ljava/lang/Runnable;)V
    :try_end_0
    .catch Ljava/io/UnsupportedEncodingException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p0

    .line 177
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string p2, "Catch on initInAppMessage: "

    invoke-static {p1, p2, p0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 178
    invoke-virtual {p0}, Ljava/io/UnsupportedEncodingException;->printStackTrace()V

    :goto_0
    return-void
.end method

.method private pageRectToViewHeight(Landroid/app/Activity;Lorg/json/JSONObject;)I
    .locals 4

    const-string v0, "getPageHeightData:pxHeight is over screen max: "

    const-string v1, "getPageHeightData:pxHeight: "

    .line 299
    :try_start_0
    const-string v2, "rect"

    invoke-virtual {p2, v2}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p2

    const-string v2, "height"

    invoke-virtual {p2, v2}, Lorg/json/JSONObject;->getInt(Ljava/lang/String;)I

    move-result p2

    .line 300
    invoke-static {p2}, Lcom/onesignal/OSViewUtils;->dpToPx(I)I

    move-result p2

    .line 301
    sget-object v2, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3, p2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v2, v1}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 303
    invoke-direct {p0, p1}, Lcom/onesignal/WebViewManager;->getWebViewMaxSizeY(Landroid/app/Activity;)I

    move-result p1

    if-le p2, p1, :cond_0

    .line 306
    sget-object p2, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {p2, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    move p2, p1

    :cond_0
    return p2

    :catch_0
    move-exception p1

    .line 311
    sget-object p2, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v0, "pageRectToViewHeight could not get page height"

    invoke-static {p2, v0, p1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    const/4 p1, -0x1

    return p1
.end method

.method private removeActivityListener()V
    .locals 3

    .line 525
    invoke-static {}, Lcom/onesignal/ActivityLifecycleListener;->getActivityLifecycleHandler()Lcom/onesignal/ActivityLifecycleHandler;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 527
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    sget-object v2, Lcom/onesignal/WebViewManager;->TAG:Ljava/lang/String;

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    iget-object v2, p0, Lcom/onesignal/WebViewManager;->message:Lcom/onesignal/OSInAppMessageInternal;

    iget-object v2, v2, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lcom/onesignal/ActivityLifecycleHandler;->removeActivityAvailableListener(Ljava/lang/String;)V

    :cond_0
    return-void
.end method

.method private static setContentSafeAreaInsets(Lcom/onesignal/OSInAppMessageContent;Landroid/app/Activity;)V
    .locals 5

    .line 137
    invoke-virtual {p0}, Lcom/onesignal/OSInAppMessageContent;->getContentHtml()Ljava/lang/String;

    move-result-object v0

    .line 139
    invoke-static {p1}, Lcom/onesignal/OSViewUtils;->getCutoutAndStatusBarInsets(Landroid/app/Activity;)[I

    move-result-object p1

    const/4 v1, 0x0

    .line 140
    aget v1, p1, v1

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    const/4 v2, 0x1

    aget v2, p1, v2

    invoke-static {v2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    const/4 v3, 0x2

    aget v3, p1, v3

    invoke-static {v3}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v3

    const/4 v4, 0x3

    aget p1, p1, v4

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    filled-new-array {v1, v2, v3, p1}, [Ljava/lang/Object;

    move-result-object p1

    const-string v1, "{\n   top: %d,\n   bottom: %d,\n   right: %d,\n   left: %d,\n}"

    invoke-static {v1, p1}, Ljava/lang/String;->format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object p1

    .line 141
    filled-new-array {p1}, [Ljava/lang/Object;

    move-result-object p1

    const-string v1, "\n\n<script>\n    setSafeAreaInsets(%s);\n</script>"

    invoke-static {v1, p1}, Ljava/lang/String;->format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object p1

    .line 142
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    .line 143
    invoke-virtual {p0, p1}, Lcom/onesignal/OSInAppMessageContent;->setContentHtml(Ljava/lang/String;)V

    return-void
.end method

.method private setMessageView(Lcom/onesignal/InAppMessageView;)V
    .locals 1

    .line 470
    iget-object v0, p0, Lcom/onesignal/WebViewManager;->messageViewSyncLock:Ljava/lang/Object;

    monitor-enter v0

    .line 471
    :try_start_0
    iput-object p1, p0, Lcom/onesignal/WebViewManager;->messageView:Lcom/onesignal/InAppMessageView;

    .line 472
    monitor-exit v0

    return-void

    :catchall_0
    move-exception p1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method

.method private setWebViewToMaxSize(Landroid/app/Activity;)V
    .locals 3

    .line 466
    iget-object v0, p0, Lcom/onesignal/WebViewManager;->webView:Lcom/onesignal/OSWebView;

    invoke-direct {p0, p1}, Lcom/onesignal/WebViewManager;->getWebViewMaxSizeX(Landroid/app/Activity;)I

    move-result v1

    invoke-direct {p0, p1}, Lcom/onesignal/WebViewManager;->getWebViewMaxSizeY(Landroid/app/Activity;)I

    move-result p1

    const/4 v2, 0x0

    invoke-virtual {v0, v2, v2, v1, p1}, Lcom/onesignal/OSWebView;->layout(IIII)V

    return-void
.end method

.method private setupWebView(Landroid/app/Activity;Ljava/lang/String;Z)V
    .locals 4

    .line 421
    invoke-static {}, Lcom/onesignal/WebViewManager;->enableWebViewRemoteDebugging()V

    .line 423
    new-instance v0, Lcom/onesignal/OSWebView;

    invoke-direct {v0, p1}, Lcom/onesignal/OSWebView;-><init>(Landroid/content/Context;)V

    iput-object v0, p0, Lcom/onesignal/WebViewManager;->webView:Lcom/onesignal/OSWebView;

    const/4 v1, 0x2

    .line 425
    invoke-virtual {v0, v1}, Lcom/onesignal/OSWebView;->setOverScrollMode(I)V

    .line 426
    iget-object v0, p0, Lcom/onesignal/WebViewManager;->webView:Lcom/onesignal/OSWebView;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Lcom/onesignal/OSWebView;->setVerticalScrollBarEnabled(Z)V

    .line 427
    iget-object v0, p0, Lcom/onesignal/WebViewManager;->webView:Lcom/onesignal/OSWebView;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSWebView;->setHorizontalScrollBarEnabled(Z)V

    .line 428
    iget-object v0, p0, Lcom/onesignal/WebViewManager;->webView:Lcom/onesignal/OSWebView;

    invoke-virtual {v0}, Lcom/onesignal/OSWebView;->getSettings()Landroid/webkit/WebSettings;

    move-result-object v0

    const/4 v2, 0x1

    invoke-virtual {v0, v2}, Landroid/webkit/WebSettings;->setJavaScriptEnabled(Z)V

    .line 431
    iget-object v0, p0, Lcom/onesignal/WebViewManager;->webView:Lcom/onesignal/OSWebView;

    new-instance v2, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;

    invoke-direct {v2, p0}, Lcom/onesignal/WebViewManager$OSJavaScriptInterface;-><init>(Lcom/onesignal/WebViewManager;)V

    const-string v3, "OSAndroid"

    invoke-virtual {v0, v2, v3}, Lcom/onesignal/OSWebView;->addJavascriptInterface(Ljava/lang/Object;Ljava/lang/String;)V

    if-eqz p3, :cond_0

    .line 433
    iget-object p3, p0, Lcom/onesignal/WebViewManager;->webView:Lcom/onesignal/OSWebView;

    const/16 v0, 0xc02

    invoke-virtual {p3, v0}, Lcom/onesignal/OSWebView;->setSystemUiVisibility(I)V

    .line 436
    sget p3, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v0, 0x1e

    if-lt p3, v0, :cond_0

    .line 437
    iget-object p3, p0, Lcom/onesignal/WebViewManager;->webView:Lcom/onesignal/OSWebView;

    invoke-virtual {p3, v1}, Lcom/onesignal/OSWebView;->setFitsSystemWindows(Z)V

    .line 440
    :cond_0
    iget-object p3, p0, Lcom/onesignal/WebViewManager;->webView:Lcom/onesignal/OSWebView;

    invoke-direct {p0, p3}, Lcom/onesignal/WebViewManager;->blurryRenderingWebViewForKitKatWorkAround(Landroid/webkit/WebView;)V

    .line 442
    new-instance p3, Lcom/onesignal/WebViewManager$7;

    invoke-direct {p3, p0, p1, p2}, Lcom/onesignal/WebViewManager$7;-><init>(Lcom/onesignal/WebViewManager;Landroid/app/Activity;Ljava/lang/String;)V

    invoke-static {p1, p3}, Lcom/onesignal/OSViewUtils;->decorViewReady(Landroid/app/Activity;Ljava/lang/Runnable;)V

    return-void
.end method

.method static showMessageContent(Lcom/onesignal/OSInAppMessageInternal;Lcom/onesignal/OSInAppMessageContent;)V
    .locals 4

    .line 96
    invoke-static {}, Lcom/onesignal/OneSignal;->getCurrentActivity()Landroid/app/Activity;

    move-result-object v0

    .line 97
    sget-object v1, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "in app message showMessageContent on currentActivity: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-static {v1, v2}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    if-eqz v0, :cond_1

    .line 103
    sget-object v1, Lcom/onesignal/WebViewManager;->lastInstance:Lcom/onesignal/WebViewManager;

    if-eqz v1, :cond_0

    iget-boolean v1, p0, Lcom/onesignal/OSInAppMessageInternal;->isPreview:Z

    if-eqz v1, :cond_0

    .line 105
    sget-object v1, Lcom/onesignal/WebViewManager;->lastInstance:Lcom/onesignal/WebViewManager;

    new-instance v2, Lcom/onesignal/WebViewManager$2;

    invoke-direct {v2, v0, p0, p1}, Lcom/onesignal/WebViewManager$2;-><init>(Landroid/app/Activity;Lcom/onesignal/OSInAppMessageInternal;Lcom/onesignal/OSInAppMessageContent;)V

    invoke-virtual {v1, v2}, Lcom/onesignal/WebViewManager;->dismissAndAwaitNextMessage(Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V

    goto :goto_0

    .line 113
    :cond_0
    invoke-static {v0, p0, p1}, Lcom/onesignal/WebViewManager;->initInAppMessage(Landroid/app/Activity;Lcom/onesignal/OSInAppMessageInternal;Lcom/onesignal/OSInAppMessageContent;)V

    :goto_0
    return-void

    .line 120
    :cond_1
    invoke-static {}, Landroid/os/Looper;->prepare()V

    .line 121
    new-instance v0, Landroid/os/Handler;

    invoke-direct {v0}, Landroid/os/Handler;-><init>()V

    new-instance v1, Lcom/onesignal/WebViewManager$3;

    invoke-direct {v1, p0, p1}, Lcom/onesignal/WebViewManager$3;-><init>(Lcom/onesignal/OSInAppMessageInternal;Lcom/onesignal/OSInAppMessageContent;)V

    const-wide/16 p0, 0xc8

    invoke-virtual {v0, v1, p0, p1}, Landroid/os/Handler;->postDelayed(Ljava/lang/Runnable;J)Z

    return-void
.end method

.method private showMessageView(Ljava/lang/Integer;)V
    .locals 4

    const-string v0, "In app message, showing first one with height: "

    .line 402
    iget-object v1, p0, Lcom/onesignal/WebViewManager;->messageViewSyncLock:Ljava/lang/Object;

    monitor-enter v1

    .line 403
    :try_start_0
    iget-object v2, p0, Lcom/onesignal/WebViewManager;->messageView:Lcom/onesignal/InAppMessageView;

    if-nez v2, :cond_0

    .line 404
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->WARN:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v0, "No messageView found to update a with a new height."

    invoke-static {p1, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 405
    monitor-exit v1

    return-void

    .line 408
    :cond_0
    sget-object v2, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v2, v0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 409
    iget-object v0, p0, Lcom/onesignal/WebViewManager;->messageView:Lcom/onesignal/InAppMessageView;

    iget-object v2, p0, Lcom/onesignal/WebViewManager;->webView:Lcom/onesignal/OSWebView;

    invoke-virtual {v0, v2}, Lcom/onesignal/InAppMessageView;->setWebView(Landroid/webkit/WebView;)V

    if-eqz p1, :cond_1

    .line 411
    iput-object p1, p0, Lcom/onesignal/WebViewManager;->lastPageHeight:Ljava/lang/Integer;

    .line 412
    iget-object v0, p0, Lcom/onesignal/WebViewManager;->messageView:Lcom/onesignal/InAppMessageView;

    invoke-virtual {p1}, Ljava/lang/Integer;->intValue()I

    move-result p1

    invoke-virtual {v0, p1}, Lcom/onesignal/InAppMessageView;->updateHeight(I)V

    .line 414
    :cond_1
    iget-object p1, p0, Lcom/onesignal/WebViewManager;->messageView:Lcom/onesignal/InAppMessageView;

    iget-object v0, p0, Lcom/onesignal/WebViewManager;->activity:Landroid/app/Activity;

    invoke-virtual {p1, v0}, Lcom/onesignal/InAppMessageView;->showView(Landroid/app/Activity;)V

    .line 415
    iget-object p1, p0, Lcom/onesignal/WebViewManager;->messageView:Lcom/onesignal/InAppMessageView;

    invoke-virtual {p1}, Lcom/onesignal/InAppMessageView;->checkIfShouldDismiss()V

    .line 416
    monitor-exit v1

    return-void

    :catchall_0
    move-exception p1

    monitor-exit v1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method

.method private updateSafeAreaInsets()V
    .locals 1

    .line 317
    new-instance v0, Lcom/onesignal/WebViewManager$5;

    invoke-direct {v0, p0}, Lcom/onesignal/WebViewManager$5;-><init>(Lcom/onesignal/WebViewManager;)V

    invoke-static {v0}, Lcom/onesignal/OSUtils;->runOnMainUIThread(Ljava/lang/Runnable;)V

    return-void
.end method


# virtual methods
.method available(Landroid/app/Activity;)V
    .locals 3

    .line 370
    iget-object v0, p0, Lcom/onesignal/WebViewManager;->currentActivityName:Ljava/lang/String;

    .line 371
    iput-object p1, p0, Lcom/onesignal/WebViewManager;->activity:Landroid/app/Activity;

    .line 372
    invoke-virtual {p1}, Landroid/app/Activity;->getLocalClassName()Ljava/lang/String;

    move-result-object p1

    iput-object p1, p0, Lcom/onesignal/WebViewManager;->currentActivityName:Ljava/lang/String;

    .line 374
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "In app message activity available currentActivityName: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p0, Lcom/onesignal/WebViewManager;->currentActivityName:Ljava/lang/String;

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, " lastActivityName: "

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {p1, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    if-nez v0, :cond_0

    const/4 p1, 0x0

    .line 378
    invoke-direct {p0, p1}, Lcom/onesignal/WebViewManager;->showMessageView(Ljava/lang/Integer;)V

    goto :goto_0

    .line 379
    :cond_0
    iget-object p1, p0, Lcom/onesignal/WebViewManager;->currentActivityName:Ljava/lang/String;

    invoke-virtual {v0, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_2

    .line 380
    iget-boolean p1, p0, Lcom/onesignal/WebViewManager;->closing:Z

    if-nez p1, :cond_3

    .line 382
    iget-object p1, p0, Lcom/onesignal/WebViewManager;->messageView:Lcom/onesignal/InAppMessageView;

    if-eqz p1, :cond_1

    .line 383
    invoke-virtual {p1}, Lcom/onesignal/InAppMessageView;->removeAllViews()V

    .line 384
    :cond_1
    iget-object p1, p0, Lcom/onesignal/WebViewManager;->lastPageHeight:Ljava/lang/Integer;

    invoke-direct {p0, p1}, Lcom/onesignal/WebViewManager;->showMessageView(Ljava/lang/Integer;)V

    goto :goto_0

    .line 388
    :cond_2
    invoke-direct {p0}, Lcom/onesignal/WebViewManager;->calculateHeightAndShowWebViewAfterNewActivity()V

    :cond_3
    :goto_0
    return-void
.end method

.method protected dismissAndAwaitNextMessage(Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V
    .locals 2

    .line 533
    iget-object v0, p0, Lcom/onesignal/WebViewManager;->messageView:Lcom/onesignal/InAppMessageView;

    if-eqz v0, :cond_2

    iget-boolean v1, p0, Lcom/onesignal/WebViewManager;->dismissFired:Z

    if-eqz v1, :cond_0

    goto :goto_0

    .line 538
    :cond_0
    iget-object v1, p0, Lcom/onesignal/WebViewManager;->message:Lcom/onesignal/OSInAppMessageInternal;

    if-eqz v1, :cond_1

    if-eqz v0, :cond_1

    .line 539
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/WebViewManager;->message:Lcom/onesignal/OSInAppMessageInternal;

    invoke-virtual {v0, v1}, Lcom/onesignal/OSInAppMessageController;->onMessageWillDismiss(Lcom/onesignal/OSInAppMessageInternal;)V

    .line 541
    :cond_1
    iget-object v0, p0, Lcom/onesignal/WebViewManager;->messageView:Lcom/onesignal/InAppMessageView;

    new-instance v1, Lcom/onesignal/WebViewManager$9;

    invoke-direct {v1, p0, p1}, Lcom/onesignal/WebViewManager$9;-><init>(Lcom/onesignal/WebViewManager;Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V

    invoke-virtual {v0, v1}, Lcom/onesignal/InAppMessageView;->dismissAndAwaitNextMessage(Lcom/onesignal/WebViewManager$OneSignalGenericCallback;)V

    const/4 p1, 0x1

    .line 551
    iput-boolean p1, p0, Lcom/onesignal/WebViewManager;->dismissFired:Z

    return-void

    :cond_2
    :goto_0
    if-eqz p1, :cond_3

    .line 535
    invoke-interface {p1}, Lcom/onesignal/WebViewManager$OneSignalGenericCallback;->onComplete()V

    :cond_3
    return-void
.end method

.method stopped(Landroid/app/Activity;)V
    .locals 3

    .line 394
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "In app message activity stopped, cleaning views, currentActivityName: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p0, Lcom/onesignal/WebViewManager;->currentActivityName:Ljava/lang/String;

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, "\nactivity: "

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    iget-object v2, p0, Lcom/onesignal/WebViewManager;->activity:Landroid/app/Activity;

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, "\nmessageView: "

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    iget-object v2, p0, Lcom/onesignal/WebViewManager;->messageView:Lcom/onesignal/InAppMessageView;

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 397
    iget-object v0, p0, Lcom/onesignal/WebViewManager;->messageView:Lcom/onesignal/InAppMessageView;

    if-eqz v0, :cond_0

    invoke-virtual {p1}, Landroid/app/Activity;->getLocalClassName()Ljava/lang/String;

    move-result-object p1

    iget-object v0, p0, Lcom/onesignal/WebViewManager;->currentActivityName:Ljava/lang/String;

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_0

    .line 398
    iget-object p1, p0, Lcom/onesignal/WebViewManager;->messageView:Lcom/onesignal/InAppMessageView;

    invoke-virtual {p1}, Lcom/onesignal/InAppMessageView;->removeAllViews()V

    :cond_0
    return-void
.end method
