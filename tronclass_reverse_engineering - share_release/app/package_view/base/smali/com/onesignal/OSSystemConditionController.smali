.class Lcom/onesignal/OSSystemConditionController;
.super Ljava/lang/Object;
.source "OSSystemConditionController.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/OSSystemConditionController$OSSystemConditionHandler;,
        Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;
    }
.end annotation


# static fields
.field private static final TAG:Ljava/lang/String; = "com.onesignal.OSSystemConditionController"


# instance fields
.field private final systemConditionObserver:Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method constructor <init>(Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;)V
    .locals 0

    .line 28
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 29
    iput-object p1, p0, Lcom/onesignal/OSSystemConditionController;->systemConditionObserver:Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;

    return-void
.end method

.method static synthetic access$000(Lcom/onesignal/OSSystemConditionController;)Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;
    .locals 0

    .line 14
    iget-object p0, p0, Lcom/onesignal/OSSystemConditionController;->systemConditionObserver:Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;

    return-object p0
.end method


# virtual methods
.method isDialogFragmentShowing(Landroid/content/Context;)Z
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/lang/NoClassDefFoundError;
        }
    .end annotation

    .line 59
    instance-of v0, p1, Landroidx/appcompat/app/AppCompatActivity;

    const/4 v1, 0x0

    if-eqz v0, :cond_0

    .line 60
    check-cast p1, Landroidx/appcompat/app/AppCompatActivity;

    invoke-virtual {p1}, Landroidx/appcompat/app/AppCompatActivity;->getSupportFragmentManager()Landroidx/fragment/app/FragmentManager;

    move-result-object p1

    .line 61
    new-instance v0, Lcom/onesignal/OSSystemConditionController$1;

    invoke-direct {v0, p0, p1}, Lcom/onesignal/OSSystemConditionController$1;-><init>(Lcom/onesignal/OSSystemConditionController;Landroidx/fragment/app/FragmentManager;)V

    const/4 v2, 0x1

    invoke-virtual {p1, v0, v2}, Landroidx/fragment/app/FragmentManager;->registerFragmentLifecycleCallbacks(Landroidx/fragment/app/FragmentManager$FragmentLifecycleCallbacks;Z)V

    .line 73
    invoke-virtual {p1}, Landroidx/fragment/app/FragmentManager;->getFragments()Ljava/util/List;

    move-result-object p1

    .line 74
    invoke-interface {p1}, Ljava/util/List;->size()I

    move-result v0

    if-lez v0, :cond_0

    sub-int/2addr v0, v2

    .line 77
    invoke-interface {p1, v0}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroidx/fragment/app/Fragment;

    .line 78
    invoke-virtual {p1}, Landroidx/fragment/app/Fragment;->isVisible()Z

    move-result v0

    if-eqz v0, :cond_0

    instance-of p1, p1, Landroidx/fragment/app/DialogFragment;

    if-eqz p1, :cond_0

    move v1, v2

    :cond_0
    return v1
.end method

.method systemConditionsAvailable()Z
    .locals 4

    .line 33
    invoke-static {}, Lcom/onesignal/OneSignal;->getCurrentActivity()Landroid/app/Activity;

    move-result-object v0

    const/4 v1, 0x0

    if-nez v0, :cond_0

    .line 34
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->WARN:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v2, "OSSystemConditionObserver curActivity null"

    invoke-static {v0, v2}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    return v1

    .line 39
    :cond_0
    :try_start_0
    invoke-static {}, Lcom/onesignal/OneSignal;->getCurrentActivity()Landroid/app/Activity;

    move-result-object v0

    invoke-virtual {p0, v0}, Lcom/onesignal/OSSystemConditionController;->isDialogFragmentShowing(Landroid/content/Context;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 40
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->WARN:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v2, "OSSystemConditionObserver dialog fragment detected"

    invoke-static {v0, v2}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/lang/NoClassDefFoundError; {:try_start_0 .. :try_end_0} :catch_0

    return v1

    :catch_0
    move-exception v0

    .line 44
    sget-object v1, Lcom/onesignal/OneSignal$LOG_LEVEL;->INFO:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "AppCompatActivity is not used in this app, skipping \'isDialogFragmentShowing\' check: "

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v1, v0}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 47
    :cond_1
    invoke-static {}, Lcom/onesignal/ActivityLifecycleListener;->getActivityLifecycleHandler()Lcom/onesignal/ActivityLifecycleHandler;

    move-result-object v0

    .line 48
    new-instance v1, Ljava/lang/ref/WeakReference;

    invoke-static {}, Lcom/onesignal/OneSignal;->getCurrentActivity()Landroid/app/Activity;

    move-result-object v2

    invoke-direct {v1, v2}, Ljava/lang/ref/WeakReference;-><init>(Ljava/lang/Object;)V

    invoke-static {v1}, Lcom/onesignal/OSViewUtils;->isKeyboardUp(Ljava/lang/ref/WeakReference;)Z

    move-result v1

    if-eqz v1, :cond_2

    if-eqz v0, :cond_2

    .line 51
    sget-object v2, Lcom/onesignal/OSSystemConditionController;->TAG:Ljava/lang/String;

    iget-object v3, p0, Lcom/onesignal/OSSystemConditionController;->systemConditionObserver:Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;

    invoke-virtual {v0, v2, v3}, Lcom/onesignal/ActivityLifecycleHandler;->addSystemConditionObserver(Ljava/lang/String;Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;)V

    .line 52
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->WARN:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v2, "OSSystemConditionObserver keyboard up detected"

    invoke-static {v0, v2}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    :cond_2
    xor-int/lit8 v0, v1, 0x1

    return v0
.end method
