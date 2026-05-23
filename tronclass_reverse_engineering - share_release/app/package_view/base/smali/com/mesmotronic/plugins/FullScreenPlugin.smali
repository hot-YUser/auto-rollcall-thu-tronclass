.class public Lcom/mesmotronic/plugins/FullScreenPlugin;
.super Lorg/apache/cordova/CordovaPlugin;
.source "FullScreenPlugin.java"


# static fields
.field public static final ACTION_IMMERSIVE_HEIGHT:Ljava/lang/String; = "immersiveHeight"

.field public static final ACTION_IMMERSIVE_MODE:Ljava/lang/String; = "immersiveMode"

.field public static final ACTION_IMMERSIVE_WIDTH:Ljava/lang/String; = "immersiveWidth"

.field public static final ACTION_IS_IMMERSIVE_MODE_SUPPORTED:Ljava/lang/String; = "isImmersiveModeSupported"

.field public static final ACTION_IS_SUPPORTED:Ljava/lang/String; = "isSupported"

.field public static final ACTION_LEAN_MODE:Ljava/lang/String; = "leanMode"

.field public static final ACTION_SET_SYSTEM_UI_VISIBILITY:Ljava/lang/String; = "setSystemUiVisibility"

.field public static final ACTION_SHOW_SYSTEM_UI:Ljava/lang/String; = "showSystemUI"

.field public static final ACTION_SHOW_UNDER_STATUS_BAR:Ljava/lang/String; = "showUnderStatusBar"

.field public static final ACTION_SHOW_UNDER_SYSTEM_UI:Ljava/lang/String; = "showUnderSystemUI"


# instance fields
.field private activity:Landroid/app/Activity;

.field private context:Lorg/apache/cordova/CallbackContext;

.field private decorView:Landroid/view/View;

.field private final mEnterLeanback:Ljava/lang/Runnable;

.field private mLastSystemUIVisibility:I

.field private final mLeanBackHandler:Landroid/os/Handler;

.field private window:Landroid/view/Window;


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 20
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    const/4 v0, 0x0

    .line 37
    iput v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->mLastSystemUIVisibility:I

    .line 38
    new-instance v0, Landroid/os/Handler;

    invoke-direct {v0}, Landroid/os/Handler;-><init>()V

    iput-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->mLeanBackHandler:Landroid/os/Handler;

    .line 39
    new-instance v0, Lcom/mesmotronic/plugins/FullScreenPlugin$1;

    invoke-direct {v0, p0}, Lcom/mesmotronic/plugins/FullScreenPlugin$1;-><init>(Lcom/mesmotronic/plugins/FullScreenPlugin;)V

    iput-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->mEnterLeanback:Ljava/lang/Runnable;

    return-void
.end method

.method static synthetic access$000(Lcom/mesmotronic/plugins/FullScreenPlugin;)Lorg/apache/cordova/CordovaPreferences;
    .locals 0

    .line 20
    iget-object p0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->preferences:Lorg/apache/cordova/CordovaPreferences;

    return-object p0
.end method

.method static synthetic access$100(Lcom/mesmotronic/plugins/FullScreenPlugin;Ljava/lang/String;)V
    .locals 0

    .line 20
    invoke-direct {p0, p1}, Lcom/mesmotronic/plugins/FullScreenPlugin;->setStatusBarBackgroundColor(Ljava/lang/String;)V

    return-void
.end method

.method static synthetic access$200(Lcom/mesmotronic/plugins/FullScreenPlugin;)Landroid/view/View;
    .locals 0

    .line 20
    iget-object p0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->decorView:Landroid/view/View;

    return-object p0
.end method

.method static synthetic access$300(Lcom/mesmotronic/plugins/FullScreenPlugin;)Lorg/apache/cordova/CallbackContext;
    .locals 0

    .line 20
    iget-object p0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->context:Lorg/apache/cordova/CallbackContext;

    return-object p0
.end method

.method static synthetic access$400(Lcom/mesmotronic/plugins/FullScreenPlugin;)I
    .locals 0

    .line 20
    iget p0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->mLastSystemUIVisibility:I

    return p0
.end method

.method static synthetic access$402(Lcom/mesmotronic/plugins/FullScreenPlugin;I)I
    .locals 0

    .line 20
    iput p1, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->mLastSystemUIVisibility:I

    return p1
.end method

.method static synthetic access$500(Lcom/mesmotronic/plugins/FullScreenPlugin;)V
    .locals 0

    .line 20
    invoke-direct {p0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->resetHideTimer()V

    return-void
.end method

.method static synthetic access$600(Lcom/mesmotronic/plugins/FullScreenPlugin;)Landroid/view/Window;
    .locals 0

    .line 20
    iget-object p0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->window:Landroid/view/Window;

    return-object p0
.end method

.method private resetHideTimer()V
    .locals 4

    .line 250
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->mLeanBackHandler:Landroid/os/Handler;

    iget-object v1, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->mEnterLeanback:Ljava/lang/Runnable;

    invoke-virtual {v0, v1}, Landroid/os/Handler;->removeCallbacks(Ljava/lang/Runnable;)V

    .line 252
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->mLeanBackHandler:Landroid/os/Handler;

    iget-object v1, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->mEnterLeanback:Ljava/lang/Runnable;

    const-wide/16 v2, 0xbb8

    invoke-virtual {v0, v1, v2, v3}, Landroid/os/Handler;->postDelayed(Ljava/lang/Runnable;J)Z

    return-void
.end method

.method private setStatusBarBackgroundColor(Ljava/lang/String;)V
    .locals 6

    if-eqz p1, :cond_0

    .line 488
    invoke-virtual {p1}, Ljava/lang/String;->isEmpty()Z

    move-result v0

    if-nez v0, :cond_0

    .line 489
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {v0}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {v0}, Landroid/app/Activity;->getWindow()Landroid/view/Window;

    move-result-object v0

    const/high16 v1, 0x4000000

    .line 491
    invoke-virtual {v0, v1}, Landroid/view/Window;->clearFlags(I)V

    const/high16 v1, -0x80000000

    .line 492
    invoke-virtual {v0, v1}, Landroid/view/Window;->addFlags(I)V

    .line 495
    :try_start_0
    invoke-virtual {v0}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v1

    const-string v2, "setStatusBarColor"

    const/4 v3, 0x1

    new-array v3, v3, [Ljava/lang/Class;

    sget-object v4, Ljava/lang/Integer;->TYPE:Ljava/lang/Class;

    const/4 v5, 0x0

    aput-object v4, v3, v5

    invoke-virtual {v1, v2, v3}, Ljava/lang/Class;->getDeclaredMethod(Ljava/lang/String;[Ljava/lang/Class;)Ljava/lang/reflect/Method;

    move-result-object v1

    invoke-static {p1}, Landroid/graphics/Color;->parseColor(Ljava/lang/String;)I

    move-result p1

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    filled-new-array {p1}, [Ljava/lang/Object;

    move-result-object p1

    invoke-virtual {v1, v0, p1}, Ljava/lang/reflect/Method;->invoke(Ljava/lang/Object;[Ljava/lang/Object;)Ljava/lang/Object;
    :try_end_0
    .catch Ljava/lang/IllegalArgumentException; {:try_start_0 .. :try_end_0} :catch_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    :catch_0
    :cond_0
    return-void
.end method


# virtual methods
.method public execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 74
    iput-object p3, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->context:Lorg/apache/cordova/CallbackContext;

    .line 75
    iget-object p3, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p3}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p3

    iput-object p3, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->activity:Landroid/app/Activity;

    .line 76
    invoke-virtual {p3}, Landroid/app/Activity;->getWindow()Landroid/view/Window;

    move-result-object p3

    iput-object p3, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->window:Landroid/view/Window;

    .line 77
    invoke-virtual {p3}, Landroid/view/Window;->getDecorView()Landroid/view/View;

    move-result-object p3

    iput-object p3, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->decorView:Landroid/view/View;

    .line 79
    const-string p3, "isSupported"

    invoke-virtual {p3, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p3

    if-eqz p3, :cond_0

    .line 80
    invoke-virtual {p0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->isSupported()Z

    move-result p1

    return p1

    .line 81
    :cond_0
    const-string p3, "isImmersiveModeSupported"

    invoke-virtual {p3, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p3

    if-eqz p3, :cond_1

    .line 82
    invoke-virtual {p0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->isImmersiveModeSupported()Z

    move-result p1

    return p1

    .line 83
    :cond_1
    const-string p3, "immersiveWidth"

    invoke-virtual {p3, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p3

    if-eqz p3, :cond_2

    .line 84
    invoke-virtual {p0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->immersiveWidth()Z

    move-result p1

    return p1

    .line 85
    :cond_2
    const-string p3, "immersiveHeight"

    invoke-virtual {p3, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p3

    if-eqz p3, :cond_3

    .line 86
    invoke-virtual {p0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->immersiveHeight()Z

    move-result p1

    return p1

    .line 87
    :cond_3
    const-string p3, "leanMode"

    invoke-virtual {p3, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p3

    if-eqz p3, :cond_4

    .line 88
    invoke-virtual {p0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->leanMode()Z

    move-result p1

    return p1

    .line 89
    :cond_4
    const-string p3, "showSystemUI"

    invoke-virtual {p3, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p3

    if-eqz p3, :cond_5

    .line 90
    invoke-virtual {p0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->showSystemUI()Z

    move-result p1

    return p1

    .line 91
    :cond_5
    const-string p3, "showUnderStatusBar"

    invoke-virtual {p3, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p3

    if-eqz p3, :cond_6

    .line 92
    invoke-virtual {p0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->showUnderStatusBar()Z

    move-result p1

    return p1

    .line 93
    :cond_6
    const-string p3, "showUnderSystemUI"

    invoke-virtual {p3, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p3

    if-eqz p3, :cond_7

    .line 94
    invoke-virtual {p0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->showUnderSystemUI()Z

    move-result p1

    return p1

    .line 95
    :cond_7
    const-string p3, "immersiveMode"

    invoke-virtual {p3, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p3

    if-eqz p3, :cond_8

    .line 96
    invoke-virtual {p0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->immersiveMode()Z

    move-result p1

    return p1

    .line 97
    :cond_8
    const-string p3, "setSystemUiVisibility"

    invoke-virtual {p3, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    const/4 p3, 0x0

    if-eqz p1, :cond_9

    .line 98
    invoke-virtual {p2, p3}, Lorg/json/JSONArray;->getInt(I)I

    move-result p1

    invoke-virtual {p0, p1}, Lcom/mesmotronic/plugins/FullScreenPlugin;->setSystemUiVisibility(I)Z

    move-result p1

    return p1

    :cond_9
    return p3
.end method

.method protected immersiveHeight()Z
    .locals 2

    .line 169
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->activity:Landroid/app/Activity;

    new-instance v1, Lcom/mesmotronic/plugins/FullScreenPlugin$4;

    invoke-direct {v1, p0}, Lcom/mesmotronic/plugins/FullScreenPlugin$4;-><init>(Lcom/mesmotronic/plugins/FullScreenPlugin;)V

    invoke-virtual {v0, v1}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    const/4 v0, 0x1

    return v0
.end method

.method protected immersiveMode()Z
    .locals 2

    .line 398
    invoke-virtual {p0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->isImmersiveModeSupported()Z

    move-result v0

    if-nez v0, :cond_0

    .line 400
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->context:Lorg/apache/cordova/CallbackContext;

    const-string v1, "Not supported"

    invoke-virtual {v0, v1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    const/4 v0, 0x0

    return v0

    .line 404
    :cond_0
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->activity:Landroid/app/Activity;

    new-instance v1, Lcom/mesmotronic/plugins/FullScreenPlugin$9;

    invoke-direct {v1, p0}, Lcom/mesmotronic/plugins/FullScreenPlugin$9;-><init>(Lcom/mesmotronic/plugins/FullScreenPlugin;)V

    invoke-virtual {v0, v1}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    const/4 v0, 0x1

    return v0
.end method

.method protected immersiveWidth()Z
    .locals 2

    .line 140
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->activity:Landroid/app/Activity;

    new-instance v1, Lcom/mesmotronic/plugins/FullScreenPlugin$3;

    invoke-direct {v1, p0}, Lcom/mesmotronic/plugins/FullScreenPlugin$3;-><init>(Lcom/mesmotronic/plugins/FullScreenPlugin;)V

    invoke-virtual {v0, v1}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    const/4 v0, 0x1

    return v0
.end method

.method public initialize(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebView;)V
    .locals 1

    .line 55
    invoke-super {p0, p1, p2}, Lorg/apache/cordova/CordovaPlugin;->initialize(Lorg/apache/cordova/CordovaInterface;Lorg/apache/cordova/CordovaWebView;)V

    .line 57
    iget-object p2, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p2}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p2

    new-instance v0, Lcom/mesmotronic/plugins/FullScreenPlugin$2;

    invoke-direct {v0, p0, p1}, Lcom/mesmotronic/plugins/FullScreenPlugin$2;-><init>(Lcom/mesmotronic/plugins/FullScreenPlugin;Lorg/apache/cordova/CordovaInterface;)V

    invoke-virtual {p2, v0}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    return-void
.end method

.method protected isImmersiveModeSupported()Z
    .locals 3

    .line 130
    new-instance v0, Lorg/apache/cordova/PluginResult;

    sget-object v1, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Z)V

    .line 131
    iget-object v1, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->context:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v1, v0}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    return v2
.end method

.method protected isSupported()Z
    .locals 3

    .line 118
    new-instance v0, Lorg/apache/cordova/PluginResult;

    sget-object v1, Lorg/apache/cordova/PluginResult$Status;->OK:Lorg/apache/cordova/PluginResult$Status;

    const/4 v2, 0x1

    invoke-direct {v0, v1, v2}, Lorg/apache/cordova/PluginResult;-><init>(Lorg/apache/cordova/PluginResult$Status;Z)V

    .line 119
    iget-object v1, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->context:Lorg/apache/cordova/CallbackContext;

    invoke-virtual {v1, v0}, Lorg/apache/cordova/CallbackContext;->sendPluginResult(Lorg/apache/cordova/PluginResult;)V

    return v2
.end method

.method protected leanMode()Z
    .locals 2

    .line 198
    invoke-virtual {p0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->isSupported()Z

    move-result v0

    if-nez v0, :cond_0

    .line 200
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->context:Lorg/apache/cordova/CallbackContext;

    const-string v1, "Not supported"

    invoke-virtual {v0, v1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    const/4 v0, 0x0

    return v0

    .line 204
    :cond_0
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->activity:Landroid/app/Activity;

    new-instance v1, Lcom/mesmotronic/plugins/FullScreenPlugin$5;

    invoke-direct {v1, p0}, Lcom/mesmotronic/plugins/FullScreenPlugin$5;-><init>(Lcom/mesmotronic/plugins/FullScreenPlugin;)V

    invoke-virtual {v0, v1}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    const/4 v0, 0x1

    return v0
.end method

.method protected resetWindow()V
    .locals 2

    .line 105
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->decorView:Landroid/view/View;

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Landroid/view/View;->setOnFocusChangeListener(Landroid/view/View$OnFocusChangeListener;)V

    .line 106
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->decorView:Landroid/view/View;

    invoke-virtual {v0, v1}, Landroid/view/View;->setOnSystemUiVisibilityChangeListener(Landroid/view/View$OnSystemUiVisibilityChangeListener;)V

    .line 108
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->window:Landroid/view/Window;

    const/16 v1, 0x800

    invoke-virtual {v0, v1}, Landroid/view/Window;->clearFlags(I)V

    return-void
.end method

.method protected setSystemUiVisibility(I)Z
    .locals 2

    .line 459
    invoke-virtual {p0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->isSupported()Z

    move-result v0

    if-nez v0, :cond_0

    .line 461
    iget-object p1, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->context:Lorg/apache/cordova/CallbackContext;

    const-string v0, "Not supported"

    invoke-virtual {p1, v0}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    const/4 p1, 0x0

    return p1

    .line 465
    :cond_0
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->activity:Landroid/app/Activity;

    new-instance v1, Lcom/mesmotronic/plugins/FullScreenPlugin$10;

    invoke-direct {v1, p0, p1}, Lcom/mesmotronic/plugins/FullScreenPlugin$10;-><init>(Lcom/mesmotronic/plugins/FullScreenPlugin;I)V

    invoke-virtual {v0, v1}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    const/4 p1, 0x1

    return p1
.end method

.method protected showSystemUI()Z
    .locals 2

    .line 260
    invoke-virtual {p0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->isSupported()Z

    move-result v0

    if-nez v0, :cond_0

    .line 262
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->context:Lorg/apache/cordova/CallbackContext;

    const-string v1, "Not supported"

    invoke-virtual {v0, v1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    const/4 v0, 0x0

    return v0

    .line 266
    :cond_0
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->activity:Landroid/app/Activity;

    new-instance v1, Lcom/mesmotronic/plugins/FullScreenPlugin$6;

    invoke-direct {v1, p0}, Lcom/mesmotronic/plugins/FullScreenPlugin$6;-><init>(Lcom/mesmotronic/plugins/FullScreenPlugin;)V

    invoke-virtual {v0, v1}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    const/4 v0, 0x1

    return v0
.end method

.method protected showUnderStatusBar()Z
    .locals 2

    .line 309
    invoke-virtual {p0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->isImmersiveModeSupported()Z

    move-result v0

    if-nez v0, :cond_0

    .line 311
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->context:Lorg/apache/cordova/CallbackContext;

    const-string v1, "Not supported"

    invoke-virtual {v0, v1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    const/4 v0, 0x0

    return v0

    .line 315
    :cond_0
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->activity:Landroid/app/Activity;

    new-instance v1, Lcom/mesmotronic/plugins/FullScreenPlugin$7;

    invoke-direct {v1, p0}, Lcom/mesmotronic/plugins/FullScreenPlugin$7;-><init>(Lcom/mesmotronic/plugins/FullScreenPlugin;)V

    invoke-virtual {v0, v1}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    const/4 v0, 0x1

    return v0
.end method

.method protected showUnderSystemUI()Z
    .locals 2

    .line 353
    invoke-virtual {p0}, Lcom/mesmotronic/plugins/FullScreenPlugin;->isImmersiveModeSupported()Z

    move-result v0

    if-nez v0, :cond_0

    .line 355
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->context:Lorg/apache/cordova/CallbackContext;

    const-string v1, "Not supported"

    invoke-virtual {v0, v1}, Lorg/apache/cordova/CallbackContext;->error(Ljava/lang/String;)V

    const/4 v0, 0x0

    return v0

    .line 359
    :cond_0
    iget-object v0, p0, Lcom/mesmotronic/plugins/FullScreenPlugin;->activity:Landroid/app/Activity;

    new-instance v1, Lcom/mesmotronic/plugins/FullScreenPlugin$8;

    invoke-direct {v1, p0}, Lcom/mesmotronic/plugins/FullScreenPlugin$8;-><init>(Lcom/mesmotronic/plugins/FullScreenPlugin;)V

    invoke-virtual {v0, v1}, Landroid/app/Activity;->runOnUiThread(Ljava/lang/Runnable;)V

    const/4 v0, 0x1

    return v0
.end method
