.class public Lcom/wisdomgarden/trpc/MainActivity;
.super Lcom/getcapacitor/BridgeActivity;
.source "MainActivity.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 41
    invoke-direct {p0}, Lcom/getcapacitor/BridgeActivity;-><init>()V

    return-void
.end method

.method private clearOneSignalUserState()V
    .locals 3

    .line 45
    invoke-virtual {p0}, Lcom/wisdomgarden/trpc/MainActivity;->getApplicationContext()Landroid/content/Context;

    move-result-object v0

    .line 46
    const-string v1, "OneSignal"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Landroid/content/Context;->getSharedPreferences(Ljava/lang/String;I)Landroid/content/SharedPreferences;

    move-result-object v0

    .line 47
    invoke-interface {v0}, Landroid/content/SharedPreferences;->edit()Landroid/content/SharedPreferences$Editor;

    move-result-object v0

    .line 48
    const-string v1, "ONESIGNAL_USERSTATE_SYNCVALYES_emailTOSYNC_STATE"

    invoke-interface {v0, v1}, Landroid/content/SharedPreferences$Editor;->remove(Ljava/lang/String;)Landroid/content/SharedPreferences$Editor;

    .line 49
    const-string v1, "ONESIGNAL_USERSTATE_SYNCVALYES_TOSYNC_STATE"

    invoke-interface {v0, v1}, Landroid/content/SharedPreferences$Editor;->remove(Ljava/lang/String;)Landroid/content/SharedPreferences$Editor;

    .line 50
    const-string v1, "ONESIGNAL_USERSTATE_SYNCVALYES_CURRENT_STATE"

    invoke-interface {v0, v1}, Landroid/content/SharedPreferences$Editor;->remove(Ljava/lang/String;)Landroid/content/SharedPreferences$Editor;

    .line 51
    invoke-interface {v0}, Landroid/content/SharedPreferences$Editor;->commit()Z

    return-void
.end method

.method private enableEdgeToEdge()V
    .locals 3

    .line 64
    sget v0, Landroid/os/Build$VERSION;->SDK_INT:I

    const/16 v1, 0x22

    if-ge v0, v1, :cond_0

    return-void

    .line 67
    :cond_0
    invoke-virtual {p0}, Lcom/wisdomgarden/trpc/MainActivity;->getWindow()Landroid/view/Window;

    move-result-object v0

    .line 68
    invoke-virtual {v0}, Landroid/view/Window;->getDecorView()Landroid/view/View;

    move-result-object v1

    const/4 v2, 0x0

    .line 69
    invoke-static {v0, v2}, Landroidx/core/view/WindowCompat;->setDecorFitsSystemWindows(Landroid/view/Window;Z)V

    .line 71
    new-instance v0, Lcom/wisdomgarden/trpc/MainActivity$$ExternalSyntheticLambda0;

    invoke-direct {v0, v1}, Lcom/wisdomgarden/trpc/MainActivity$$ExternalSyntheticLambda0;-><init>(Landroid/view/View;)V

    invoke-static {v1, v0}, Landroidx/core/view/ViewCompat;->setOnApplyWindowInsetsListener(Landroid/view/View;Landroidx/core/view/OnApplyWindowInsetsListener;)V

    return-void
.end method

.method static synthetic lambda$enableEdgeToEdge$0(Landroid/view/View;Landroid/view/View;Landroidx/core/view/WindowInsetsCompat;)Landroidx/core/view/WindowInsetsCompat;
    .locals 2

    .line 72
    invoke-static {}, Landroidx/core/view/WindowInsetsCompat$Type;->systemBars()I

    move-result p1

    invoke-static {}, Landroidx/core/view/WindowInsetsCompat$Type;->displayCutout()I

    move-result v0

    or-int/2addr p1, v0

    invoke-virtual {p2, p1}, Landroidx/core/view/WindowInsetsCompat;->getInsets(I)Landroidx/core/graphics/Insets;

    move-result-object p1

    .line 74
    iget p2, p1, Landroidx/core/graphics/Insets;->left:I

    iget v0, p1, Landroidx/core/graphics/Insets;->top:I

    iget v1, p1, Landroidx/core/graphics/Insets;->right:I

    iget p1, p1, Landroidx/core/graphics/Insets;->bottom:I

    invoke-virtual {p0, p2, v0, v1, p1}, Landroid/view/View;->setPadding(IIII)V

    .line 75
    sget-object p0, Landroidx/core/view/WindowInsetsCompat;->CONSUMED:Landroidx/core/view/WindowInsetsCompat;

    return-object p0
.end method


# virtual methods
.method public getResources()Landroid/content/res/Resources;
    .locals 3

    .line 124
    invoke-super {p0}, Lcom/getcapacitor/BridgeActivity;->getResources()Landroid/content/res/Resources;

    move-result-object v0

    .line 125
    invoke-virtual {v0}, Landroid/content/res/Resources;->getConfiguration()Landroid/content/res/Configuration;

    move-result-object v1

    const/high16 v2, 0x3f800000    # 1.0f

    iput v2, v1, Landroid/content/res/Configuration;->fontScale:F

    const/4 v1, 0x0

    .line 126
    invoke-virtual {v0, v1, v1}, Landroid/content/res/Resources;->updateConfiguration(Landroid/content/res/Configuration;Landroid/util/DisplayMetrics;)V

    return-object v0
.end method

.method public onActivityResult(IILandroid/content/Intent;)V
    .locals 1

    .line 138
    invoke-super {p0, p1, p2, p3}, Lcom/getcapacitor/BridgeActivity;->onActivityResult(IILandroid/content/Intent;)V

    .line 140
    invoke-static {}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->getInstanceWithoutCreate()Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 143
    invoke-virtual {v0, p1, p2, p3}, Lorg/apache/cordova/inappbrowser/WBH5FaceVerifySDK;->receiveH5FaceVerifyResult(IILandroid/content/Intent;)Z

    :cond_0
    return-void
.end method

.method public onConfigurationChanged(Landroid/content/res/Configuration;)V
    .locals 1

    .line 150
    invoke-super {p0, p1}, Lcom/getcapacitor/BridgeActivity;->onConfigurationChanged(Landroid/content/res/Configuration;)V

    .line 151
    invoke-virtual {p0}, Lcom/wisdomgarden/trpc/MainActivity;->getBridge()Lcom/getcapacitor/Bridge;

    move-result-object p1

    const-string v0, "DarkMode"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/Bridge;->getPlugin(Ljava/lang/String;)Lcom/getcapacitor/PluginHandle;

    move-result-object p1

    if-eqz p1, :cond_0

    .line 153
    invoke-virtual {p1}, Lcom/getcapacitor/PluginHandle;->getInstance()Lcom/getcapacitor/Plugin;

    move-result-object p1

    check-cast p1, Lcom/bkon/capacitor/DarkMode/DarkMode;

    .line 154
    invoke-virtual {p1}, Lcom/bkon/capacitor/DarkMode/DarkMode;->notifyWeb()V

    :cond_0
    return-void
.end method

.method public onCreate(Landroid/os/Bundle;)V
    .locals 1

    .line 81
    invoke-super {p0, p1}, Lcom/getcapacitor/BridgeActivity;->onCreate(Landroid/os/Bundle;)V

    .line 82
    invoke-direct {p0}, Lcom/wisdomgarden/trpc/MainActivity;->enableEdgeToEdge()V

    .line 83
    invoke-direct {p0}, Lcom/wisdomgarden/trpc/MainActivity;->clearOneSignalUserState()V

    .line 86
    new-instance v0, Lcom/wisdomgarden/trpc/MainActivity$1;

    invoke-direct {v0, p0}, Lcom/wisdomgarden/trpc/MainActivity$1;-><init>(Lcom/wisdomgarden/trpc/MainActivity;)V

    invoke-virtual {p0, p1, v0}, Lcom/wisdomgarden/trpc/MainActivity;->init(Landroid/os/Bundle;Ljava/util/List;)V

    return-void
.end method
