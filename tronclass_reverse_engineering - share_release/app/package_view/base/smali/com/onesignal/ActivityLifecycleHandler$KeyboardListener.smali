.class Lcom/onesignal/ActivityLifecycleHandler$KeyboardListener;
.super Ljava/lang/Object;
.source "ActivityLifecycleHandler.java"

# interfaces
.implements Landroid/view/ViewTreeObserver$OnGlobalLayoutListener;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/ActivityLifecycleHandler;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x8
    name = "KeyboardListener"
.end annotation


# instance fields
.field private final key:Ljava/lang/String;

.field private final observer:Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;

.field private final systemConditionListener:Lcom/onesignal/OSSystemConditionController$OSSystemConditionHandler;


# direct methods
.method private constructor <init>(Lcom/onesignal/OSSystemConditionController$OSSystemConditionHandler;Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;Ljava/lang/String;)V
    .locals 0

    .line 273
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 274
    iput-object p1, p0, Lcom/onesignal/ActivityLifecycleHandler$KeyboardListener;->systemConditionListener:Lcom/onesignal/OSSystemConditionController$OSSystemConditionHandler;

    .line 275
    iput-object p2, p0, Lcom/onesignal/ActivityLifecycleHandler$KeyboardListener;->observer:Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;

    .line 276
    iput-object p3, p0, Lcom/onesignal/ActivityLifecycleHandler$KeyboardListener;->key:Ljava/lang/String;

    return-void
.end method

.method synthetic constructor <init>(Lcom/onesignal/OSSystemConditionController$OSSystemConditionHandler;Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;Ljava/lang/String;Lcom/onesignal/ActivityLifecycleHandler$1;)V
    .locals 0

    .line 267
    invoke-direct {p0, p1, p2, p3}, Lcom/onesignal/ActivityLifecycleHandler$KeyboardListener;-><init>(Lcom/onesignal/OSSystemConditionController$OSSystemConditionHandler;Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;Ljava/lang/String;)V

    return-void
.end method


# virtual methods
.method public onGlobalLayout()V
    .locals 2

    .line 281
    new-instance v0, Ljava/lang/ref/WeakReference;

    invoke-static {}, Lcom/onesignal/OneSignal;->getCurrentActivity()Landroid/app/Activity;

    move-result-object v1

    invoke-direct {v0, v1}, Ljava/lang/ref/WeakReference;-><init>(Ljava/lang/Object;)V

    invoke-static {v0}, Lcom/onesignal/OSViewUtils;->isKeyboardUp(Ljava/lang/ref/WeakReference;)Z

    move-result v0

    if-nez v0, :cond_0

    .line 283
    iget-object v0, p0, Lcom/onesignal/ActivityLifecycleHandler$KeyboardListener;->systemConditionListener:Lcom/onesignal/OSSystemConditionController$OSSystemConditionHandler;

    iget-object v1, p0, Lcom/onesignal/ActivityLifecycleHandler$KeyboardListener;->key:Ljava/lang/String;

    invoke-interface {v0, v1, p0}, Lcom/onesignal/OSSystemConditionController$OSSystemConditionHandler;->removeSystemConditionObserver(Ljava/lang/String;Lcom/onesignal/ActivityLifecycleHandler$KeyboardListener;)V

    .line 284
    iget-object v0, p0, Lcom/onesignal/ActivityLifecycleHandler$KeyboardListener;->observer:Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;

    invoke-interface {v0}, Lcom/onesignal/OSSystemConditionController$OSSystemConditionObserver;->systemConditionChanged()V

    :cond_0
    return-void
.end method
