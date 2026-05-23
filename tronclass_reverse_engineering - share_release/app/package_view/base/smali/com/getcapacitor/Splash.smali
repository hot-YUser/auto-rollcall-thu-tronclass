.class public Lcom/getcapacitor/Splash;
.super Ljava/lang/Object;
.source "Splash.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/getcapacitor/Splash$SplashListener;
    }
.end annotation


# static fields
.field public static final CONFIG_KEY_PREFIX:Ljava/lang/String; = "plugins.SplashScreen."

.field public static final DEFAULT_AUTO_HIDE:Z = true

.field public static final DEFAULT_FADE_IN_DURATION:I = 0xc8

.field public static final DEFAULT_FADE_OUT_DURATION:I = 0xc8

.field public static final DEFAULT_LAUNCH_SHOW_DURATION:I = 0xbb8

.field public static final DEFAULT_SHOW_DURATION:I = 0xbb8

.field public static final DEFAULT_SPLASH_FULL_SCREEN:Z = false

.field public static final DEFAULT_SPLASH_IMMERSIVE:Z = false

.field private static isHiding:Z = false

.field private static isVisible:Z = false

.field private static spinnerBar:Landroid/widget/ProgressBar;

.field private static splashImage:Landroid/widget/ImageView;

.field private static wm:Landroid/view/WindowManager;


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 24
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static synthetic access$002(Z)Z
    .locals 0

    .line 24
    sput-boolean p0, Lcom/getcapacitor/Splash;->isVisible:Z

    return p0
.end method

.method static synthetic access$100()Landroid/widget/ImageView;
    .locals 1

    .line 24
    sget-object v0, Lcom/getcapacitor/Splash;->splashImage:Landroid/widget/ImageView;

    return-object v0
.end method

.method static synthetic access$200()Landroid/view/WindowManager;
    .locals 1

    .line 24
    sget-object v0, Lcom/getcapacitor/Splash;->wm:Landroid/view/WindowManager;

    return-object v0
.end method

.method static synthetic access$300()Landroid/widget/ProgressBar;
    .locals 1

    .line 24
    sget-object v0, Lcom/getcapacitor/Splash;->spinnerBar:Landroid/widget/ProgressBar;

    return-object v0
.end method

.method static synthetic access$400(Z)V
    .locals 0

    .line 24
    invoke-static {p0}, Lcom/getcapacitor/Splash;->tearDown(Z)V

    return-void
.end method

.method private static buildViews(Landroid/content/Context;Lcom/getcapacitor/CapConfig;)V
    .locals 8

    .line 47
    sget-object v0, Lcom/getcapacitor/Splash;->splashImage:Landroid/widget/ImageView;

    const/4 v1, 0x4

    const/4 v2, 0x0

    const/4 v3, 0x1

    if-nez v0, :cond_6

    .line 48
    const-string v0, "plugins.SplashScreen.androidSplashResourceName"

    const-string v4, "splash"

    invoke-virtual {p1, v0, v4}, Lcom/getcapacitor/CapConfig;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 50
    invoke-virtual {p0}, Landroid/content/Context;->getResources()Landroid/content/res/Resources;

    move-result-object v4

    const-string v5, "drawable"

    invoke-virtual {p0}, Landroid/content/Context;->getPackageName()Ljava/lang/String;

    move-result-object v6

    invoke-virtual {v4, v0, v5, v6}, Landroid/content/res/Resources;->getIdentifier(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)I

    move-result v0

    .line 54
    :try_start_0
    invoke-virtual {p0}, Landroid/content/Context;->getResources()Landroid/content/res/Resources;

    move-result-object v4

    invoke-virtual {p0}, Landroid/content/Context;->getTheme()Landroid/content/res/Resources$Theme;

    move-result-object v5

    invoke-virtual {v4, v0, v5}, Landroid/content/res/Resources;->getDrawable(ILandroid/content/res/Resources$Theme;)Landroid/graphics/drawable/Drawable;

    move-result-object v0
    :try_end_0
    .catch Landroid/content/res/Resources$NotFoundException; {:try_start_0 .. :try_end_0} :catch_2

    .line 60
    instance-of v4, v0, Landroid/graphics/drawable/Animatable;

    if-eqz v4, :cond_0

    .line 61
    move-object v4, v0

    check-cast v4, Landroid/graphics/drawable/Animatable;

    invoke-interface {v4}, Landroid/graphics/drawable/Animatable;->start()V

    .line 64
    :cond_0
    instance-of v4, v0, Landroid/graphics/drawable/LayerDrawable;

    if-eqz v4, :cond_2

    .line 65
    move-object v4, v0

    check-cast v4, Landroid/graphics/drawable/LayerDrawable;

    move v5, v2

    .line 67
    :goto_0
    invoke-virtual {v4}, Landroid/graphics/drawable/LayerDrawable;->getNumberOfLayers()I

    move-result v6

    if-ge v5, v6, :cond_2

    .line 68
    invoke-virtual {v4, v5}, Landroid/graphics/drawable/LayerDrawable;->getDrawable(I)Landroid/graphics/drawable/Drawable;

    move-result-object v6

    .line 70
    instance-of v7, v6, Landroid/graphics/drawable/Animatable;

    if-eqz v7, :cond_1

    .line 71
    check-cast v6, Landroid/graphics/drawable/Animatable;

    invoke-interface {v6}, Landroid/graphics/drawable/Animatable;->start()V

    :cond_1
    add-int/lit8 v5, v5, 0x1

    goto :goto_0

    .line 76
    :cond_2
    new-instance v4, Landroid/widget/ImageView;

    invoke-direct {v4, p0}, Landroid/widget/ImageView;-><init>(Landroid/content/Context;)V

    sput-object v4, Lcom/getcapacitor/Splash;->splashImage:Landroid/widget/ImageView;

    .line 78
    invoke-virtual {v4, v3}, Landroid/widget/ImageView;->setFitsSystemWindows(Z)V

    .line 81
    const-string v4, "plugins.SplashScreen.splashImmersive"

    invoke-virtual {p1, v4, v2}, Lcom/getcapacitor/CapConfig;->getBoolean(Ljava/lang/String;Z)Z

    move-result v4

    invoke-static {v4}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v4

    .line 82
    const-string v5, "plugins.SplashScreen.splashFullScreen"

    invoke-virtual {p1, v5, v2}, Lcom/getcapacitor/CapConfig;->getBoolean(Ljava/lang/String;Z)Z

    move-result v5

    invoke-static {v5}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v5

    .line 83
    invoke-virtual {v4}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v4

    if-eqz v4, :cond_3

    .line 90
    sget-object v4, Lcom/getcapacitor/Splash;->splashImage:Landroid/widget/ImageView;

    const/16 v5, 0x1706

    invoke-virtual {v4, v5}, Landroid/widget/ImageView;->setSystemUiVisibility(I)V

    goto :goto_1

    .line 91
    :cond_3
    invoke-virtual {v5}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v4

    if-eqz v4, :cond_4

    .line 92
    sget-object v4, Lcom/getcapacitor/Splash;->splashImage:Landroid/widget/ImageView;

    invoke-virtual {v4, v1}, Landroid/widget/ImageView;->setSystemUiVisibility(I)V

    .line 97
    :cond_4
    :goto_1
    sget-object v4, Lcom/getcapacitor/Splash;->splashImage:Landroid/widget/ImageView;

    invoke-virtual {v4, v3}, Landroid/widget/ImageView;->setDrawingCacheEnabled(Z)V

    .line 99
    const-string v4, "plugins.SplashScreen.backgroundColor"

    invoke-virtual {p1, v4}, Lcom/getcapacitor/CapConfig;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v4

    if-eqz v4, :cond_5

    .line 102
    :try_start_1
    sget-object v5, Lcom/getcapacitor/Splash;->splashImage:Landroid/widget/ImageView;

    invoke-static {v4}, Landroid/graphics/Color;->parseColor(Ljava/lang/String;)I

    move-result v4

    invoke-virtual {v5, v4}, Landroid/widget/ImageView;->setBackgroundColor(I)V
    :try_end_1
    .catch Ljava/lang/IllegalArgumentException; {:try_start_1 .. :try_end_1} :catch_0

    goto :goto_2

    .line 105
    :catch_0
    const-string v4, "Background color not applied"

    invoke-static {v4}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;)V

    .line 108
    :cond_5
    :goto_2
    const-string v4, "plugins.SplashScreen.androidScaleType"

    const-string v5, "FIT_XY"

    invoke-virtual {p1, v4, v5}, Lcom/getcapacitor/CapConfig;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v4

    .line 111
    :try_start_2
    invoke-static {v4}, Landroid/widget/ImageView$ScaleType;->valueOf(Ljava/lang/String;)Landroid/widget/ImageView$ScaleType;

    move-result-object v4
    :try_end_2
    .catch Ljava/lang/IllegalArgumentException; {:try_start_2 .. :try_end_2} :catch_1

    goto :goto_3

    .line 113
    :catch_1
    sget-object v4, Landroid/widget/ImageView$ScaleType;->FIT_XY:Landroid/widget/ImageView$ScaleType;

    .line 116
    :goto_3
    sget-object v5, Lcom/getcapacitor/Splash;->splashImage:Landroid/widget/ImageView;

    invoke-virtual {v5, v4}, Landroid/widget/ImageView;->setScaleType(Landroid/widget/ImageView$ScaleType;)V

    .line 117
    sget-object v4, Lcom/getcapacitor/Splash;->splashImage:Landroid/widget/ImageView;

    invoke-virtual {v4, v0}, Landroid/widget/ImageView;->setImageDrawable(Landroid/graphics/drawable/Drawable;)V

    goto :goto_4

    .line 56
    :catch_2
    const-string p0, "No splash screen found, not displaying"

    invoke-static {p0}, Lcom/getcapacitor/Logger;->warn(Ljava/lang/String;)V

    return-void

    .line 120
    :cond_6
    :goto_4
    sget-object v0, Lcom/getcapacitor/Splash;->spinnerBar:Landroid/widget/ProgressBar;

    if-nez v0, :cond_e

    .line 121
    const-string v0, "plugins.SplashScreen.androidSpinnerStyle"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/CapConfig;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_d

    .line 125
    invoke-virtual {v0}, Ljava/lang/String;->toLowerCase()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/String;->hashCode()I

    invoke-virtual {v0}, Ljava/lang/String;->hashCode()I

    move-result v4

    const/4 v5, -0x1

    sparse-switch v4, :sswitch_data_0

    :goto_5
    move v1, v5

    goto :goto_6

    :sswitch_0
    const-string v1, "inverse"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_7

    goto :goto_5

    :cond_7
    const/4 v1, 0x5

    goto :goto_6

    :sswitch_1
    const-string v2, "horizontal"

    invoke-virtual {v0, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_c

    goto :goto_5

    :sswitch_2
    const-string v1, "smallinverse"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_8

    goto :goto_5

    :cond_8
    const/4 v1, 0x3

    goto :goto_6

    :sswitch_3
    const-string v1, "small"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_9

    goto :goto_5

    :cond_9
    const/4 v1, 0x2

    goto :goto_6

    :sswitch_4
    const-string v1, "large"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_a

    goto :goto_5

    :cond_a
    move v1, v3

    goto :goto_6

    :sswitch_5
    const-string v1, "largeinverse"

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_b

    goto :goto_5

    :cond_b
    move v1, v2

    :cond_c
    :goto_6
    const v0, 0x101007a

    packed-switch v1, :pswitch_data_0

    goto :goto_7

    :pswitch_0
    const v0, 0x1010287

    goto :goto_7

    :pswitch_1
    const v0, 0x1010078

    goto :goto_7

    :pswitch_2
    const v0, 0x1010288

    goto :goto_7

    :pswitch_3
    const v0, 0x1010079

    goto :goto_7

    :pswitch_4
    const v0, 0x1010289

    .line 146
    :goto_7
    :pswitch_5
    new-instance v1, Landroid/widget/ProgressBar;

    const/4 v2, 0x0

    invoke-direct {v1, p0, v2, v0}, Landroid/widget/ProgressBar;-><init>(Landroid/content/Context;Landroid/util/AttributeSet;I)V

    sput-object v1, Lcom/getcapacitor/Splash;->spinnerBar:Landroid/widget/ProgressBar;

    goto :goto_8

    .line 148
    :cond_d
    new-instance v0, Landroid/widget/ProgressBar;

    invoke-direct {v0, p0}, Landroid/widget/ProgressBar;-><init>(Landroid/content/Context;)V

    sput-object v0, Lcom/getcapacitor/Splash;->spinnerBar:Landroid/widget/ProgressBar;

    .line 150
    :goto_8
    sget-object p0, Lcom/getcapacitor/Splash;->spinnerBar:Landroid/widget/ProgressBar;

    invoke-virtual {p0, v3}, Landroid/widget/ProgressBar;->setIndeterminate(Z)V

    .line 152
    const-string p0, "plugins.SplashScreen.spinnerColor"

    invoke-virtual {p1, p0}, Lcom/getcapacitor/CapConfig;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    if-eqz p0, :cond_e

    const p1, 0x101009e

    .line 155
    :try_start_3
    filled-new-array {p1}, [I

    move-result-object p1

    const v0, -0x101009e

    filled-new-array {v0}, [I

    move-result-object v0

    const v1, -0x10100a0

    filled-new-array {v1}, [I

    move-result-object v1

    const v2, 0x10100a7

    filled-new-array {v2}, [I

    move-result-object v2

    filled-new-array {p1, v0, v1, v2}, [[I

    move-result-object p1

    .line 161
    invoke-static {p0}, Landroid/graphics/Color;->parseColor(Ljava/lang/String;)I

    move-result p0

    .line 162
    filled-new-array {p0, p0, p0, p0}, [I

    move-result-object p0

    .line 168
    new-instance v0, Landroid/content/res/ColorStateList;

    invoke-direct {v0, p1, p0}, Landroid/content/res/ColorStateList;-><init>([[I[I)V

    .line 169
    sget-object p0, Lcom/getcapacitor/Splash;->spinnerBar:Landroid/widget/ProgressBar;

    invoke-virtual {p0, v0}, Landroid/widget/ProgressBar;->setIndeterminateTintList(Landroid/content/res/ColorStateList;)V
    :try_end_3
    .catch Ljava/lang/IllegalArgumentException; {:try_start_3 .. :try_end_3} :catch_3

    goto :goto_9

    .line 172
    :catch_3
    const-string p0, "Spinner color not applied"

    invoke-static {p0}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;)V

    :cond_e
    :goto_9
    return-void

    :sswitch_data_0
    .sparse-switch
        -0x7580e86b -> :sswitch_5
        0x61fbb3b -> :sswitch_4
        0x6879507 -> :sswitch_3
        0x3eb0e049 -> :sswitch_2
        0x52b58c24 -> :sswitch_1
        0x74d1db30 -> :sswitch_0
    .end sparse-switch

    :pswitch_data_0
    .packed-switch 0x0
        :pswitch_4
        :pswitch_5
        :pswitch_3
        :pswitch_2
        :pswitch_1
        :pswitch_0
    .end packed-switch
.end method

.method public static hide(Landroid/content/Context;I)V
    .locals 1

    const/4 v0, 0x0

    .line 339
    invoke-static {p0, p1, v0}, Lcom/getcapacitor/Splash;->hide(Landroid/content/Context;IZ)V

    return-void
.end method

.method public static hide(Landroid/content/Context;IZ)V
    .locals 1

    if-eqz p2, :cond_0

    .line 345
    sget-boolean p2, Lcom/getcapacitor/Splash;->isVisible:Z

    if-eqz p2, :cond_0

    .line 346
    const-string p2, "SplashScreen was automatically hidden after the launch timeout. You should call `SplashScreen.hide()` as soon as your web app is loaded (or increase the timeout).Read more at https://capacitorjs.com/docs/apis/splash-screen#hiding-the-splash-screen"

    invoke-static {p2}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;)V

    .line 351
    :cond_0
    sget-boolean p2, Lcom/getcapacitor/Splash;->isHiding:Z

    if-nez p2, :cond_2

    sget-object p2, Lcom/getcapacitor/Splash;->splashImage:Landroid/widget/ImageView;

    if-eqz p2, :cond_2

    invoke-virtual {p2}, Landroid/widget/ImageView;->getParent()Landroid/view/ViewParent;

    move-result-object p2

    if-nez p2, :cond_1

    goto :goto_0

    :cond_1
    const/4 p2, 0x1

    .line 355
    sput-boolean p2, Lcom/getcapacitor/Splash;->isHiding:Z

    .line 357
    new-instance p2, Lcom/getcapacitor/Splash$3;

    invoke-direct {p2}, Lcom/getcapacitor/Splash$3;-><init>()V

    .line 374
    new-instance v0, Landroid/os/Handler;

    invoke-virtual {p0}, Landroid/content/Context;->getMainLooper()Landroid/os/Looper;

    move-result-object p0

    invoke-direct {v0, p0}, Landroid/os/Handler;-><init>(Landroid/os/Looper;)V

    .line 376
    new-instance p0, Lcom/getcapacitor/Splash$4;

    invoke-direct {p0, p1, p2}, Lcom/getcapacitor/Splash$4;-><init>(ILandroid/animation/Animator$AnimatorListener;)V

    invoke-virtual {v0, p0}, Landroid/os/Handler;->post(Ljava/lang/Runnable;)Z

    :cond_2
    :goto_0
    return-void
.end method

.method public static onDestroy()V
    .locals 1

    const/4 v0, 0x1

    .line 424
    invoke-static {v0}, Lcom/getcapacitor/Splash;->tearDown(Z)V

    return-void
.end method

.method public static onPause()V
    .locals 1

    const/4 v0, 0x1

    .line 421
    invoke-static {v0}, Lcom/getcapacitor/Splash;->tearDown(Z)V

    return-void
.end method

.method public static show(Landroid/app/Activity;)V
    .locals 7

    const/4 v5, 0x0

    const/4 v6, 0x0

    const/16 v1, 0xbb8

    const/16 v2, 0xc8

    const/16 v3, 0xc8

    const/4 v4, 0x1

    move-object v0, p0

    .line 197
    invoke-static/range {v0 .. v6}, Lcom/getcapacitor/Splash;->show(Landroid/app/Activity;IIIZLcom/getcapacitor/Splash$SplashListener;Lcom/getcapacitor/CapConfig;)V

    return-void
.end method

.method public static show(Landroid/app/Activity;IIIZLcom/getcapacitor/Splash$SplashListener;Lcom/getcapacitor/CapConfig;)V
    .locals 8

    const/4 v6, 0x0

    move-object v0, p0

    move v1, p1

    move v2, p2

    move v3, p3

    move v4, p4

    move-object v5, p5

    move-object v7, p6

    .line 210
    invoke-static/range {v0 .. v7}, Lcom/getcapacitor/Splash;->show(Landroid/app/Activity;IIIZLcom/getcapacitor/Splash$SplashListener;ZLcom/getcapacitor/CapConfig;)V

    return-void
.end method

.method public static show(Landroid/app/Activity;IIIZLcom/getcapacitor/Splash$SplashListener;ZLcom/getcapacitor/CapConfig;)V
    .locals 8

    .line 231
    const-string v0, "window"

    invoke-virtual {p0, v0}, Landroid/app/Activity;->getSystemService(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/view/WindowManager;

    sput-object v0, Lcom/getcapacitor/Splash;->wm:Landroid/view/WindowManager;

    .line 233
    invoke-virtual {p0}, Landroid/app/Activity;->isFinishing()Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 237
    :cond_0
    invoke-static {p0, p7}, Lcom/getcapacitor/Splash;->buildViews(Landroid/content/Context;Lcom/getcapacitor/CapConfig;)V

    .line 239
    sget-boolean v0, Lcom/getcapacitor/Splash;->isVisible:Z

    if-eqz v0, :cond_1

    .line 240
    invoke-interface {p5}, Lcom/getcapacitor/Splash$SplashListener;->completed()V

    return-void

    .line 244
    :cond_1
    new-instance v0, Lcom/getcapacitor/Splash$1;

    move-object v1, v0

    move v2, p4

    move-object v3, p0

    move v4, p3

    move v5, p6

    move-object v6, p5

    move v7, p1

    invoke-direct/range {v1 .. v7}, Lcom/getcapacitor/Splash$1;-><init>(ZLandroid/app/Activity;IZLcom/getcapacitor/Splash$SplashListener;I)V

    .line 276
    new-instance p1, Landroid/os/Handler;

    invoke-virtual {p0}, Landroid/app/Activity;->getMainLooper()Landroid/os/Looper;

    move-result-object p3

    invoke-direct {p1, p3}, Landroid/os/Handler;-><init>(Landroid/os/Looper;)V

    .line 278
    new-instance p3, Lcom/getcapacitor/Splash$2;

    invoke-direct {p3, p0, p2, v0, p7}, Lcom/getcapacitor/Splash$2;-><init>(Landroid/app/Activity;ILandroid/animation/Animator$AnimatorListener;Lcom/getcapacitor/CapConfig;)V

    invoke-virtual {p1, p3}, Landroid/os/Handler;->post(Ljava/lang/Runnable;)Z

    return-void
.end method

.method public static showOnLaunch(Lcom/getcapacitor/BridgeActivity;Lcom/getcapacitor/CapConfig;)V
    .locals 11

    .line 182
    const-string v0, "plugins.SplashScreen.launchShowDuration"

    const/16 v1, 0xbb8

    invoke-virtual {p1, v0, v1}, Lcom/getcapacitor/CapConfig;->getInt(Ljava/lang/String;I)I

    move-result v0

    invoke-static {v0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v0

    .line 183
    const-string v1, "plugins.SplashScreen.launchAutoHide"

    const/4 v2, 0x1

    invoke-virtual {p1, v1, v2}, Lcom/getcapacitor/CapConfig;->getBoolean(Ljava/lang/String;Z)Z

    move-result v1

    invoke-static {v1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v1

    .line 185
    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v2

    if-nez v2, :cond_0

    return-void

    .line 189
    :cond_0
    invoke-virtual {v0}, Ljava/lang/Integer;->intValue()I

    move-result v4

    invoke-virtual {v1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v7

    const/4 v8, 0x0

    const/4 v9, 0x1

    const/4 v5, 0x0

    const/16 v6, 0xc8

    move-object v3, p0

    move-object v10, p1

    invoke-static/range {v3 .. v10}, Lcom/getcapacitor/Splash;->show(Landroid/app/Activity;IIIZLcom/getcapacitor/Splash$SplashListener;ZLcom/getcapacitor/CapConfig;)V

    return-void
.end method

.method private static tearDown(Z)V
    .locals 2

    .line 402
    sget-object v0, Lcom/getcapacitor/Splash;->spinnerBar:Landroid/widget/ProgressBar;

    const/4 v1, 0x4

    if-eqz v0, :cond_0

    invoke-virtual {v0}, Landroid/widget/ProgressBar;->getParent()Landroid/view/ViewParent;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 403
    sget-object v0, Lcom/getcapacitor/Splash;->spinnerBar:Landroid/widget/ProgressBar;

    invoke-virtual {v0, v1}, Landroid/widget/ProgressBar;->setVisibility(I)V

    const/4 v0, 0x1

    if-ne p0, v0, :cond_0

    .line 406
    sget-object p0, Lcom/getcapacitor/Splash;->wm:Landroid/view/WindowManager;

    sget-object v0, Lcom/getcapacitor/Splash;->spinnerBar:Landroid/widget/ProgressBar;

    invoke-interface {p0, v0}, Landroid/view/WindowManager;->removeView(Landroid/view/View;)V

    .line 410
    :cond_0
    sget-object p0, Lcom/getcapacitor/Splash;->splashImage:Landroid/widget/ImageView;

    if-eqz p0, :cond_1

    invoke-virtual {p0}, Landroid/widget/ImageView;->getParent()Landroid/view/ViewParent;

    move-result-object p0

    if-eqz p0, :cond_1

    .line 411
    sget-object p0, Lcom/getcapacitor/Splash;->splashImage:Landroid/widget/ImageView;

    invoke-virtual {p0, v1}, Landroid/widget/ImageView;->setVisibility(I)V

    .line 413
    sget-object p0, Lcom/getcapacitor/Splash;->wm:Landroid/view/WindowManager;

    sget-object v0, Lcom/getcapacitor/Splash;->splashImage:Landroid/widget/ImageView;

    invoke-interface {p0, v0}, Landroid/view/WindowManager;->removeView(Landroid/view/View;)V

    :cond_1
    const/4 p0, 0x0

    .line 416
    sput-boolean p0, Lcom/getcapacitor/Splash;->isHiding:Z

    .line 417
    sput-boolean p0, Lcom/getcapacitor/Splash;->isVisible:Z

    return-void
.end method
