.class Lcom/onesignal/ActivityLifecycleListener;
.super Ljava/lang/Object;
.source "ActivityLifecycleListener.java"

# interfaces
.implements Landroid/app/Application$ActivityLifecycleCallbacks;


# static fields
.field private static activityLifecycleHandler:Lcom/onesignal/ActivityLifecycleHandler;

.field private static configuration:Landroid/content/ComponentCallbacks;

.field private static instance:Lcom/onesignal/ActivityLifecycleListener;


# direct methods
.method constructor <init>()V
    .locals 0

    .line 40
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static synthetic access$000()Lcom/onesignal/ActivityLifecycleHandler;
    .locals 1

    .line 40
    sget-object v0, Lcom/onesignal/ActivityLifecycleListener;->activityLifecycleHandler:Lcom/onesignal/ActivityLifecycleHandler;

    return-object v0
.end method

.method public static getActivityLifecycleHandler()Lcom/onesignal/ActivityLifecycleHandler;
    .locals 1

    .line 118
    sget-object v0, Lcom/onesignal/ActivityLifecycleListener;->activityLifecycleHandler:Lcom/onesignal/ActivityLifecycleHandler;

    return-object v0
.end method

.method static registerActivityLifecycleCallbacks(Landroid/app/Application;)V
    .locals 2

    .line 50
    sget-object v0, Lcom/onesignal/ActivityLifecycleListener;->instance:Lcom/onesignal/ActivityLifecycleListener;

    if-nez v0, :cond_0

    .line 51
    new-instance v0, Lcom/onesignal/ActivityLifecycleListener;

    invoke-direct {v0}, Lcom/onesignal/ActivityLifecycleListener;-><init>()V

    sput-object v0, Lcom/onesignal/ActivityLifecycleListener;->instance:Lcom/onesignal/ActivityLifecycleListener;

    .line 52
    invoke-virtual {p0, v0}, Landroid/app/Application;->registerActivityLifecycleCallbacks(Landroid/app/Application$ActivityLifecycleCallbacks;)V

    .line 55
    :cond_0
    sget-object v0, Lcom/onesignal/ActivityLifecycleListener;->activityLifecycleHandler:Lcom/onesignal/ActivityLifecycleHandler;

    if-nez v0, :cond_1

    .line 56
    new-instance v0, Lcom/onesignal/ActivityLifecycleHandler;

    new-instance v1, Lcom/onesignal/OSFocusHandler;

    invoke-direct {v1}, Lcom/onesignal/OSFocusHandler;-><init>()V

    invoke-direct {v0, v1}, Lcom/onesignal/ActivityLifecycleHandler;-><init>(Lcom/onesignal/OSFocusHandler;)V

    sput-object v0, Lcom/onesignal/ActivityLifecycleListener;->activityLifecycleHandler:Lcom/onesignal/ActivityLifecycleHandler;

    .line 60
    :cond_1
    sget-object v0, Lcom/onesignal/ActivityLifecycleListener;->configuration:Landroid/content/ComponentCallbacks;

    if-nez v0, :cond_2

    .line 61
    new-instance v0, Lcom/onesignal/ActivityLifecycleListener$1;

    invoke-direct {v0}, Lcom/onesignal/ActivityLifecycleListener$1;-><init>()V

    sput-object v0, Lcom/onesignal/ActivityLifecycleListener;->configuration:Landroid/content/ComponentCallbacks;

    .line 72
    invoke-virtual {p0, v0}, Landroid/app/Application;->registerComponentCallbacks(Landroid/content/ComponentCallbacks;)V

    :cond_2
    return-void
.end method


# virtual methods
.method public onActivityCreated(Landroid/app/Activity;Landroid/os/Bundle;)V
    .locals 0

    .line 78
    sget-object p2, Lcom/onesignal/ActivityLifecycleListener;->activityLifecycleHandler:Lcom/onesignal/ActivityLifecycleHandler;

    if-eqz p2, :cond_0

    .line 79
    invoke-virtual {p2, p1}, Lcom/onesignal/ActivityLifecycleHandler;->onActivityCreated(Landroid/app/Activity;)V

    :cond_0
    return-void
.end method

.method public onActivityDestroyed(Landroid/app/Activity;)V
    .locals 1

    .line 112
    sget-object v0, Lcom/onesignal/ActivityLifecycleListener;->activityLifecycleHandler:Lcom/onesignal/ActivityLifecycleHandler;

    if-eqz v0, :cond_0

    .line 113
    invoke-virtual {v0, p1}, Lcom/onesignal/ActivityLifecycleHandler;->onActivityDestroyed(Landroid/app/Activity;)V

    :cond_0
    return-void
.end method

.method public onActivityPaused(Landroid/app/Activity;)V
    .locals 1

    .line 96
    sget-object v0, Lcom/onesignal/ActivityLifecycleListener;->activityLifecycleHandler:Lcom/onesignal/ActivityLifecycleHandler;

    if-eqz v0, :cond_0

    .line 97
    invoke-virtual {v0, p1}, Lcom/onesignal/ActivityLifecycleHandler;->onActivityPaused(Landroid/app/Activity;)V

    :cond_0
    return-void
.end method

.method public onActivityResumed(Landroid/app/Activity;)V
    .locals 1

    .line 90
    sget-object v0, Lcom/onesignal/ActivityLifecycleListener;->activityLifecycleHandler:Lcom/onesignal/ActivityLifecycleHandler;

    if-eqz v0, :cond_0

    .line 91
    invoke-virtual {v0, p1}, Lcom/onesignal/ActivityLifecycleHandler;->onActivityResumed(Landroid/app/Activity;)V

    :cond_0
    return-void
.end method

.method public onActivitySaveInstanceState(Landroid/app/Activity;Landroid/os/Bundle;)V
    .locals 0

    return-void
.end method

.method public onActivityStarted(Landroid/app/Activity;)V
    .locals 1

    .line 84
    sget-object v0, Lcom/onesignal/ActivityLifecycleListener;->activityLifecycleHandler:Lcom/onesignal/ActivityLifecycleHandler;

    if-eqz v0, :cond_0

    .line 85
    invoke-virtual {v0, p1}, Lcom/onesignal/ActivityLifecycleHandler;->onActivityStarted(Landroid/app/Activity;)V

    :cond_0
    return-void
.end method

.method public onActivityStopped(Landroid/app/Activity;)V
    .locals 1

    .line 102
    sget-object v0, Lcom/onesignal/ActivityLifecycleListener;->activityLifecycleHandler:Lcom/onesignal/ActivityLifecycleHandler;

    if-eqz v0, :cond_0

    .line 103
    invoke-virtual {v0, p1}, Lcom/onesignal/ActivityLifecycleHandler;->onActivityStopped(Landroid/app/Activity;)V

    :cond_0
    return-void
.end method
