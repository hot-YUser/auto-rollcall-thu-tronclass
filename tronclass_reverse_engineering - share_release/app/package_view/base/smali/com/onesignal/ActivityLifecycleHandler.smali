.class Lcom/onesignal/ActivityLifecycleHandler;
.super Ljava/lang/Object;
.source "ActivityLifecycleHandler.java"

# interfaces
.implements Lcom/onesignal/OSSystemConditionController$OSSystemConditionHandler;


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/ActivityLifecycleHandler$KeyboardListener;,
        Lcom/onesignal/ActivityLifecycleHandler$ActivityAvailableListener;
    }
.end annotation


# static fields
.field private static final FOCUS_LOST_WORKER_TAG:Ljava/lang/String; = "FOCUS_LOST_WORKER_TAG"

.field private static final SYNC_AFTER_BG_DELAY_MS:I = 0x7d0

.field private static final sActivityAvailableListeners:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Lcom/onesignal/ActivityLifecycleHandler$ActivityAvailableListener;",
            ">;"
        }
    .end annotation
.end field

.field private static final sKeyboardListeners:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Lcom/onesignal/ActivityLifecycleHandler$KeyboardListener;",
            ">;"
        }
    .end annotation
.end field

.field private static final sSystemConditionObservers:Ljava/util/Map;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;",
            ">;"
        }
    .end annotation
.end field


# instance fields
.field private curActivity:Landroid/app/Activity;

.field private final focusHandler:Lcom/onesignal/OSFocusHandler;

.field private nextResumeIsFirstActivity:Z


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 58
    new-instance v0, Ljava/util/concurrent/ConcurrentHashMap;

    invoke-direct {v0}, Ljava/util/concurrent/ConcurrentHashMap;-><init>()V

    sput-object v0, Lcom/onesignal/ActivityLifecycleHandler;->sActivityAvailableListeners:Ljava/util/Map;

    .line 59
    new-instance v0, Ljava/util/concurrent/ConcurrentHashMap;

    invoke-direct {v0}, Ljava/util/concurrent/ConcurrentHashMap;-><init>()V

    sput-object v0, Lcom/onesignal/ActivityLifecycleHandler;->sSystemConditionObservers:Ljava/util/Map;

    .line 60
    new-instance v0, Ljava/util/concurrent/ConcurrentHashMap;

    invoke-direct {v0}, Ljava/util/concurrent/ConcurrentHashMap;-><init>()V

    sput-object v0, Lcom/onesignal/ActivityLifecycleHandler;->sKeyboardListeners:Ljava/util/Map;

    return-void
.end method

.method public constructor <init>(Lcom/onesignal/OSFocusHandler;)V
    .locals 1

    .line 72
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 68
    iput-object v0, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    const/4 v0, 0x0

    .line 70
    iput-boolean v0, p0, Lcom/onesignal/ActivityLifecycleHandler;->nextResumeIsFirstActivity:Z

    .line 73
    iput-object p1, p0, Lcom/onesignal/ActivityLifecycleHandler;->focusHandler:Lcom/onesignal/OSFocusHandler;

    return-void
.end method

.method static synthetic access$100(Lcom/onesignal/ActivityLifecycleHandler;)Lcom/onesignal/OSFocusHandler;
    .locals 0

    .line 45
    iget-object p0, p0, Lcom/onesignal/ActivityLifecycleHandler;->focusHandler:Lcom/onesignal/OSFocusHandler;

    return-object p0
.end method

.method private handleFocus()V
    .locals 3

    .line 193
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "ActivityLifecycleHandler handleFocus, nextResumeIsFirstActivity: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-boolean v2, p0, Lcom/onesignal/ActivityLifecycleHandler;->nextResumeIsFirstActivity:Z

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 194
    iget-object v0, p0, Lcom/onesignal/ActivityLifecycleHandler;->focusHandler:Lcom/onesignal/OSFocusHandler;

    invoke-virtual {v0}, Lcom/onesignal/OSFocusHandler;->hasBackgrounded()Z

    move-result v0

    if-nez v0, :cond_1

    iget-boolean v0, p0, Lcom/onesignal/ActivityLifecycleHandler;->nextResumeIsFirstActivity:Z

    if-eqz v0, :cond_0

    goto :goto_0

    .line 199
    :cond_0
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "ActivityLifecycleHandler cancel background lost focus worker"

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 200
    iget-object v0, p0, Lcom/onesignal/ActivityLifecycleHandler;->focusHandler:Lcom/onesignal/OSFocusHandler;

    const-string v1, "FOCUS_LOST_WORKER_TAG"

    sget-object v2, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    invoke-virtual {v0, v1, v2}, Lcom/onesignal/OSFocusHandler;->cancelOnLostFocusWorker(Ljava/lang/String;Landroid/content/Context;)V

    goto :goto_1

    .line 195
    :cond_1
    :goto_0
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "ActivityLifecycleHandler reset background state, call app focus"

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    const/4 v0, 0x0

    .line 196
    iput-boolean v0, p0, Lcom/onesignal/ActivityLifecycleHandler;->nextResumeIsFirstActivity:Z

    .line 197
    iget-object v0, p0, Lcom/onesignal/ActivityLifecycleHandler;->focusHandler:Lcom/onesignal/OSFocusHandler;

    invoke-virtual {v0}, Lcom/onesignal/OSFocusHandler;->startOnFocusWork()V

    :goto_1
    return-void
.end method

.method private handleLostFocus()V
    .locals 2

    .line 178
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "ActivityLifecycleHandler Handling lost focus"

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 179
    iget-object v0, p0, Lcom/onesignal/ActivityLifecycleHandler;->focusHandler:Lcom/onesignal/OSFocusHandler;

    if-eqz v0, :cond_1

    invoke-virtual {v0}, Lcom/onesignal/OSFocusHandler;->hasBackgrounded()Z

    move-result v0

    if-eqz v0, :cond_0

    iget-object v0, p0, Lcom/onesignal/ActivityLifecycleHandler;->focusHandler:Lcom/onesignal/OSFocusHandler;

    invoke-virtual {v0}, Lcom/onesignal/OSFocusHandler;->hasCompleted()Z

    move-result v0

    if-nez v0, :cond_0

    goto :goto_0

    .line 182
    :cond_0
    new-instance v0, Lcom/onesignal/ActivityLifecycleHandler$1;

    invoke-direct {v0, p0}, Lcom/onesignal/ActivityLifecycleHandler$1;-><init>(Lcom/onesignal/ActivityLifecycleHandler;)V

    .line 189
    invoke-virtual {v0}, Lcom/onesignal/ActivityLifecycleHandler$1;->start()V

    :cond_1
    :goto_0
    return-void
.end method

.method private logCurActivity()V
    .locals 4

    .line 139
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "curActivity is NOW: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v2, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    if-eqz v2, :cond_0

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, ""

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v3, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    invoke-virtual {v3}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/Class;->getName()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    const-string v3, ":"

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    iget-object v3, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    goto :goto_0

    :cond_0
    const-string v2, "null"

    :goto_0
    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    return-void
.end method

.method private logOrientationChange(ILandroid/app/Activity;)V
    .locals 4

    const/4 v0, 0x2

    .line 144
    const-string v1, ") on activity: "

    if-ne p1, v0, :cond_0

    .line 145
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Configuration Orientation Change: LANDSCAPE ("

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    goto :goto_0

    :cond_0
    const/4 v0, 0x1

    if-ne p1, v0, :cond_1

    .line 147
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Configuration Orientation Change: PORTRAIT ("

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v0, p1}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    :cond_1
    :goto_0
    return-void
.end method

.method private onOrientationChanged(Landroid/app/Activity;)V
    .locals 6

    .line 158
    invoke-direct {p0}, Lcom/onesignal/ActivityLifecycleHandler;->handleLostFocus()V

    .line 159
    sget-object v0, Lcom/onesignal/ActivityLifecycleHandler;->sActivityAvailableListeners:Ljava/util/Map;

    invoke-interface {v0}, Ljava/util/Map;->entrySet()Ljava/util/Set;

    move-result-object v0

    invoke-interface {v0}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/util/Map$Entry;

    .line 160
    invoke-interface {v1}, Ljava/util/Map$Entry;->getValue()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lcom/onesignal/ActivityLifecycleHandler$ActivityAvailableListener;

    invoke-virtual {v1, p1}, Lcom/onesignal/ActivityLifecycleHandler$ActivityAvailableListener;->stopped(Landroid/app/Activity;)V

    goto :goto_0

    .line 164
    :cond_0
    sget-object p1, Lcom/onesignal/ActivityLifecycleHandler;->sActivityAvailableListeners:Ljava/util/Map;

    invoke-interface {p1}, Ljava/util/Map;->entrySet()Ljava/util/Set;

    move-result-object p1

    invoke-interface {p1}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :goto_1
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_1

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/util/Map$Entry;

    .line 165
    invoke-interface {v0}, Ljava/util/Map$Entry;->getValue()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/onesignal/ActivityLifecycleHandler$ActivityAvailableListener;

    iget-object v1, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    invoke-virtual {v0, v1}, Lcom/onesignal/ActivityLifecycleHandler$ActivityAvailableListener;->available(Landroid/app/Activity;)V

    goto :goto_1

    .line 168
    :cond_1
    iget-object p1, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    invoke-virtual {p1}, Landroid/app/Activity;->getWindow()Landroid/view/Window;

    move-result-object p1

    invoke-virtual {p1}, Landroid/view/Window;->getDecorView()Landroid/view/View;

    move-result-object p1

    invoke-virtual {p1}, Landroid/view/View;->getViewTreeObserver()Landroid/view/ViewTreeObserver;

    move-result-object p1

    .line 169
    sget-object v0, Lcom/onesignal/ActivityLifecycleHandler;->sSystemConditionObservers:Ljava/util/Map;

    invoke-interface {v0}, Ljava/util/Map;->entrySet()Ljava/util/Set;

    move-result-object v0

    invoke-interface {v0}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_2
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_2

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/util/Map$Entry;

    .line 170
    new-instance v2, Lcom/onesignal/ActivityLifecycleHandler$KeyboardListener;

    invoke-interface {v1}, Ljava/util/Map$Entry;->getValue()Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;

    invoke-interface {v1}, Ljava/util/Map$Entry;->getKey()Ljava/lang/Object;

    move-result-object v4

    check-cast v4, Ljava/lang/String;

    const/4 v5, 0x0

    invoke-direct {v2, p0, v3, v4, v5}, Lcom/onesignal/ActivityLifecycleHandler$KeyboardListener;-><init>(Lcom/onesignal/OSSystemConditionController$OSSystemConditionHandler;Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;Ljava/lang/String;Lcom/onesignal/ActivityLifecycleHandler$1;)V

    .line 171
    invoke-virtual {p1, v2}, Landroid/view/ViewTreeObserver;->addOnGlobalLayoutListener(Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;)V

    .line 172
    sget-object v3, Lcom/onesignal/ActivityLifecycleHandler;->sKeyboardListeners:Ljava/util/Map;

    invoke-interface {v1}, Ljava/util/Map$Entry;->getKey()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/String;

    invoke-interface {v3, v1, v2}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    goto :goto_2

    .line 174
    :cond_2
    invoke-direct {p0}, Lcom/onesignal/ActivityLifecycleHandler;->handleFocus()V

    return-void
.end method


# virtual methods
.method addActivityAvailableListener(Ljava/lang/String;Lcom/onesignal/ActivityLifecycleHandler$ActivityAvailableListener;)V
    .locals 1

    .line 229
    sget-object v0, Lcom/onesignal/ActivityLifecycleHandler;->sActivityAvailableListeners:Ljava/util/Map;

    invoke-interface {v0, p1, p2}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 230
    iget-object p1, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    if-eqz p1, :cond_0

    .line 231
    invoke-virtual {p2, p1}, Lcom/onesignal/ActivityLifecycleHandler$ActivityAvailableListener;->available(Landroid/app/Activity;)V

    :cond_0
    return-void
.end method

.method addSystemConditionObserver(Ljava/lang/String;Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;)V
    .locals 3

    .line 205
    iget-object v0, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    if-eqz v0, :cond_0

    .line 206
    invoke-virtual {v0}, Landroid/app/Activity;->getWindow()Landroid/view/Window;

    move-result-object v0

    invoke-virtual {v0}, Landroid/view/Window;->getDecorView()Landroid/view/View;

    move-result-object v0

    invoke-virtual {v0}, Landroid/view/View;->getViewTreeObserver()Landroid/view/ViewTreeObserver;

    move-result-object v0

    .line 207
    new-instance v1, Lcom/onesignal/ActivityLifecycleHandler$KeyboardListener;

    const/4 v2, 0x0

    invoke-direct {v1, p0, p2, p1, v2}, Lcom/onesignal/ActivityLifecycleHandler$KeyboardListener;-><init>(Lcom/onesignal/OSSystemConditionController$OSSystemConditionHandler;Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;Ljava/lang/String;Lcom/onesignal/ActivityLifecycleHandler$1;)V

    .line 208
    invoke-virtual {v0, v1}, Landroid/view/ViewTreeObserver;->addOnGlobalLayoutListener(Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;)V

    .line 209
    sget-object v0, Lcom/onesignal/ActivityLifecycleHandler;->sKeyboardListeners:Ljava/util/Map;

    invoke-interface {v0, p1, v1}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 211
    :cond_0
    sget-object v0, Lcom/onesignal/ActivityLifecycleHandler;->sSystemConditionObservers:Ljava/util/Map;

    invoke-interface {v0, p1, p2}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    return-void
.end method

.method public getCurActivity()Landroid/app/Activity;
    .locals 1

    .line 239
    iget-object v0, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    return-object v0
.end method

.method onActivityCreated(Landroid/app/Activity;)V
    .locals 0

    return-void
.end method

.method onActivityDestroyed(Landroid/app/Activity;)V
    .locals 3

    .line 127
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "onActivityDestroyed: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 128
    sget-object v0, Lcom/onesignal/ActivityLifecycleHandler;->sKeyboardListeners:Ljava/util/Map;

    invoke-interface {v0}, Ljava/util/Map;->clear()V

    .line 130
    iget-object v0, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    if-ne p1, v0, :cond_0

    const/4 p1, 0x0

    .line 131
    iput-object p1, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    .line 132
    invoke-direct {p0}, Lcom/onesignal/ActivityLifecycleHandler;->handleLostFocus()V

    .line 135
    :cond_0
    invoke-direct {p0}, Lcom/onesignal/ActivityLifecycleHandler;->logCurActivity()V

    return-void
.end method

.method onActivityPaused(Landroid/app/Activity;)V
    .locals 3

    .line 99
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "onActivityPaused: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 100
    iget-object v0, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    if-ne p1, v0, :cond_0

    const/4 p1, 0x0

    .line 101
    iput-object p1, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    .line 102
    invoke-direct {p0}, Lcom/onesignal/ActivityLifecycleHandler;->handleLostFocus()V

    .line 105
    :cond_0
    invoke-direct {p0}, Lcom/onesignal/ActivityLifecycleHandler;->logCurActivity()V

    return-void
.end method

.method onActivityResumed(Landroid/app/Activity;)V
    .locals 3

    .line 92
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "onActivityResumed: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 93
    invoke-virtual {p0, p1}, Lcom/onesignal/ActivityLifecycleHandler;->setCurActivity(Landroid/app/Activity;)V

    .line 94
    invoke-direct {p0}, Lcom/onesignal/ActivityLifecycleHandler;->logCurActivity()V

    .line 95
    invoke-direct {p0}, Lcom/onesignal/ActivityLifecycleHandler;->handleFocus()V

    return-void
.end method

.method onActivityStarted(Landroid/app/Activity;)V
    .locals 0

    .line 88
    iget-object p1, p0, Lcom/onesignal/ActivityLifecycleHandler;->focusHandler:Lcom/onesignal/OSFocusHandler;

    invoke-virtual {p1}, Lcom/onesignal/OSFocusHandler;->startOnStartFocusWork()V

    return-void
.end method

.method onActivityStopped(Landroid/app/Activity;)V
    .locals 3

    .line 109
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "onActivityStopped: "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 111
    iget-object v0, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    if-ne p1, v0, :cond_0

    const/4 v0, 0x0

    .line 112
    iput-object v0, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    .line 113
    invoke-direct {p0}, Lcom/onesignal/ActivityLifecycleHandler;->handleLostFocus()V

    .line 116
    :cond_0
    sget-object v0, Lcom/onesignal/ActivityLifecycleHandler;->sActivityAvailableListeners:Ljava/util/Map;

    invoke-interface {v0}, Ljava/util/Map;->entrySet()Ljava/util/Set;

    move-result-object v0

    invoke-interface {v0}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/util/Map$Entry;

    .line 117
    invoke-interface {v1}, Ljava/util/Map$Entry;->getValue()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Lcom/onesignal/ActivityLifecycleHandler$ActivityAvailableListener;

    invoke-virtual {v1, p1}, Lcom/onesignal/ActivityLifecycleHandler$ActivityAvailableListener;->stopped(Landroid/app/Activity;)V

    goto :goto_0

    .line 120
    :cond_1
    invoke-direct {p0}, Lcom/onesignal/ActivityLifecycleHandler;->logCurActivity()V

    .line 122
    iget-object p1, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    if-nez p1, :cond_2

    .line 123
    iget-object p1, p0, Lcom/onesignal/ActivityLifecycleHandler;->focusHandler:Lcom/onesignal/OSFocusHandler;

    invoke-virtual {p1}, Lcom/onesignal/OSFocusHandler;->startOnStopFocusWork()V

    :cond_2
    return-void
.end method

.method onConfigurationChanged(Landroid/content/res/Configuration;Landroid/app/Activity;)V
    .locals 2

    .line 78
    iget-object v0, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    if-eqz v0, :cond_0

    const/16 v1, 0x80

    invoke-static {v0, v1}, Lcom/onesignal/OSUtils;->hasConfigChangeFlag(Landroid/app/Activity;I)Z

    move-result v0

    if-eqz v0, :cond_0

    .line 79
    iget p1, p1, Landroid/content/res/Configuration;->orientation:I

    invoke-direct {p0, p1, p2}, Lcom/onesignal/ActivityLifecycleHandler;->logOrientationChange(ILandroid/app/Activity;)V

    .line 80
    invoke-direct {p0, p2}, Lcom/onesignal/ActivityLifecycleHandler;->onOrientationChanged(Landroid/app/Activity;)V

    :cond_0
    return-void
.end method

.method removeActivityAvailableListener(Ljava/lang/String;)V
    .locals 1

    .line 235
    sget-object v0, Lcom/onesignal/ActivityLifecycleHandler;->sActivityAvailableListeners:Ljava/util/Map;

    invoke-interface {v0, p1}, Ljava/util/Map;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    return-void
.end method

.method public removeSystemConditionObserver(Ljava/lang/String;Lcom/onesignal/ActivityLifecycleHandler$KeyboardListener;)V
    .locals 1

    .line 215
    iget-object v0, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    if-eqz v0, :cond_0

    .line 216
    invoke-virtual {v0}, Landroid/app/Activity;->getWindow()Landroid/view/Window;

    move-result-object v0

    invoke-virtual {v0}, Landroid/view/Window;->getDecorView()Landroid/view/View;

    move-result-object v0

    invoke-virtual {v0}, Landroid/view/View;->getViewTreeObserver()Landroid/view/ViewTreeObserver;

    move-result-object v0

    .line 220
    invoke-virtual {v0, p2}, Landroid/view/ViewTreeObserver;->removeOnGlobalLayoutListener(Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;)V

    .line 224
    :cond_0
    sget-object p2, Lcom/onesignal/ActivityLifecycleHandler;->sKeyboardListeners:Ljava/util/Map;

    invoke-interface {p2, p1}, Ljava/util/Map;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    .line 225
    sget-object p2, Lcom/onesignal/ActivityLifecycleHandler;->sSystemConditionObservers:Ljava/util/Map;

    invoke-interface {p2, p1}, Ljava/util/Map;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    return-void
.end method

.method public setCurActivity(Landroid/app/Activity;)V
    .locals 6

    .line 243
    iput-object p1, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    .line 244
    sget-object p1, Lcom/onesignal/ActivityLifecycleHandler;->sActivityAvailableListeners:Ljava/util/Map;

    invoke-interface {p1}, Ljava/util/Map;->entrySet()Ljava/util/Set;

    move-result-object p1

    invoke-interface {p1}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_0

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/util/Map$Entry;

    .line 245
    invoke-interface {v0}, Ljava/util/Map$Entry;->getValue()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/onesignal/ActivityLifecycleHandler$ActivityAvailableListener;

    iget-object v1, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    invoke-virtual {v0, v1}, Lcom/onesignal/ActivityLifecycleHandler$ActivityAvailableListener;->available(Landroid/app/Activity;)V

    goto :goto_0

    .line 249
    :cond_0
    :try_start_0
    iget-object p1, p0, Lcom/onesignal/ActivityLifecycleHandler;->curActivity:Landroid/app/Activity;

    invoke-virtual {p1}, Landroid/app/Activity;->getWindow()Landroid/view/Window;

    move-result-object p1

    invoke-virtual {p1}, Landroid/view/Window;->getDecorView()Landroid/view/View;

    move-result-object p1

    invoke-virtual {p1}, Landroid/view/View;->getViewTreeObserver()Landroid/view/ViewTreeObserver;

    move-result-object p1

    .line 250
    sget-object v0, Lcom/onesignal/ActivityLifecycleHandler;->sSystemConditionObservers:Ljava/util/Map;

    invoke-interface {v0}, Ljava/util/Map;->entrySet()Ljava/util/Set;

    move-result-object v0

    invoke-interface {v0}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :goto_1
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/util/Map$Entry;

    .line 251
    new-instance v2, Lcom/onesignal/ActivityLifecycleHandler$KeyboardListener;

    invoke-interface {v1}, Ljava/util/Map$Entry;->getValue()Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;

    invoke-interface {v1}, Ljava/util/Map$Entry;->getKey()Ljava/lang/Object;

    move-result-object v4

    check-cast v4, Ljava/lang/String;

    const/4 v5, 0x0

    invoke-direct {v2, p0, v3, v4, v5}, Lcom/onesignal/ActivityLifecycleHandler$KeyboardListener;-><init>(Lcom/onesignal/OSSystemConditionController$OSSystemConditionHandler;Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;Ljava/lang/String;Lcom/onesignal/ActivityLifecycleHandler$1;)V

    .line 252
    invoke-virtual {p1, v2}, Landroid/view/ViewTreeObserver;->addOnGlobalLayoutListener(Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;)V

    .line 253
    sget-object v3, Lcom/onesignal/ActivityLifecycleHandler;->sKeyboardListeners:Ljava/util/Map;

    invoke-interface {v1}, Ljava/util/Map$Entry;->getKey()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/String;

    invoke-interface {v3, v1, v2}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;
    :try_end_0
    .catch Ljava/lang/RuntimeException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    :catch_0
    move-exception p1

    .line 259
    invoke-virtual {p1}, Ljava/lang/RuntimeException;->printStackTrace()V

    :cond_1
    return-void
.end method

.method setNextResumeIsFirstActivity(Z)V
    .locals 0

    .line 264
    iput-boolean p1, p0, Lcom/onesignal/ActivityLifecycleHandler;->nextResumeIsFirstActivity:Z

    return-void
.end method
