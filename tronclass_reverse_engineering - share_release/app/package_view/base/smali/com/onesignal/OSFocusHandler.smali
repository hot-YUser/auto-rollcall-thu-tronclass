.class public final Lcom/onesignal/OSFocusHandler;
.super Ljava/lang/Object;
.source "OSFocusHandler.kt"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/OSFocusHandler$OnLostFocusWorker;,
        Lcom/onesignal/OSFocusHandler$Companion;
    }
.end annotation

.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000:\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0008\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\u0008\u0006\n\u0002\u0010\t\n\u0002\u0008\u0005\u0018\u0000 \u00182\u00020\u0001:\u0002\u0018\u0019B\u0005\u00a2\u0006\u0002\u0010\u0002J\u0008\u0010\u0005\u001a\u00020\u0006H\u0002J\u0016\u0010\u0007\u001a\u00020\u00082\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u000b\u001a\u00020\u000cJ\u0006\u0010\r\u001a\u00020\u000eJ\u0006\u0010\u000f\u001a\u00020\u000eJ\u0008\u0010\u0010\u001a\u00020\u0008H\u0002J\u0008\u0010\u0011\u001a\u00020\u0008H\u0002J\u0006\u0010\u0012\u001a\u00020\u0008J\u001e\u0010\u0013\u001a\u00020\u00082\u0006\u0010\t\u001a\u00020\n2\u0006\u0010\u0014\u001a\u00020\u00152\u0006\u0010\u000b\u001a\u00020\u000cJ\u0006\u0010\u0016\u001a\u00020\u0008J\u0006\u0010\u0017\u001a\u00020\u0008R\u0010\u0010\u0003\u001a\u0004\u0018\u00010\u0004X\u0082\u000e\u00a2\u0006\u0002\n\u0000\u00a8\u0006\u001a"
    }
    d2 = {
        "Lcom/onesignal/OSFocusHandler;",
        "",
        "()V",
        "stopRunnable",
        "Ljava/lang/Runnable;",
        "buildConstraints",
        "Landroidx/work/Constraints;",
        "cancelOnLostFocusWorker",
        "",
        "tag",
        "",
        "context",
        "Landroid/content/Context;",
        "hasBackgrounded",
        "",
        "hasCompleted",
        "resetBackgroundState",
        "resetStopState",
        "startOnFocusWork",
        "startOnLostFocusWorker",
        "delay",
        "",
        "startOnStartFocusWork",
        "startOnStopFocusWork",
        "Companion",
        "OnLostFocusWorker",
        "onesignal_release"
    }
    k = 0x1
    mv = {
        0x1,
        0x5,
        0x1
    }
    xi = 0x30
.end annotation


# static fields
.field public static final Companion:Lcom/onesignal/OSFocusHandler$Companion;

.field private static backgrounded:Z = false

.field private static completed:Z = false

.field private static final stopDelay:J = 0x5dcL

.field private static stopped:Z


# instance fields
.field private stopRunnable:Ljava/lang/Runnable;


# direct methods
.method public static synthetic $r8$lambda$KTt79IXXKHfiJMT7qrP7N6nHcwk()V
    .locals 0

    invoke-static {}, Lcom/onesignal/OSFocusHandler;->startOnStopFocusWork$lambda-0()V

    return-void
.end method

.method static constructor <clinit>()V
    .locals 2

    new-instance v0, Lcom/onesignal/OSFocusHandler$Companion;

    const/4 v1, 0x0

    invoke-direct {v0, v1}, Lcom/onesignal/OSFocusHandler$Companion;-><init>(Lkotlin/jvm/internal/DefaultConstructorMarker;)V

    sput-object v0, Lcom/onesignal/OSFocusHandler;->Companion:Lcom/onesignal/OSFocusHandler$Companion;

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 39
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static final synthetic access$setBackgrounded$cp(Z)V
    .locals 0

    .line 39
    sput-boolean p0, Lcom/onesignal/OSFocusHandler;->backgrounded:Z

    return-void
.end method

.method public static final synthetic access$setCompleted$cp(Z)V
    .locals 0

    .line 39
    sput-boolean p0, Lcom/onesignal/OSFocusHandler;->completed:Z

    return-void
.end method

.method private final buildConstraints()Landroidx/work/Constraints;
    .locals 2

    .line 115
    new-instance v0, Landroidx/work/Constraints$Builder;

    invoke-direct {v0}, Landroidx/work/Constraints$Builder;-><init>()V

    .line 116
    sget-object v1, Landroidx/work/NetworkType;->CONNECTED:Landroidx/work/NetworkType;

    invoke-virtual {v0, v1}, Landroidx/work/Constraints$Builder;->setRequiredNetworkType(Landroidx/work/NetworkType;)Landroidx/work/Constraints$Builder;

    move-result-object v0

    .line 117
    invoke-virtual {v0}, Landroidx/work/Constraints$Builder;->build()Landroidx/work/Constraints;

    move-result-object v0

    const-string v1, "Builder()\n            .s\u2026TED)\n            .build()"

    invoke-static {v0, v1}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    return-object v0
.end method

.method private final resetBackgroundState()V
    .locals 1

    .line 110
    invoke-direct {p0}, Lcom/onesignal/OSFocusHandler;->resetStopState()V

    const/4 v0, 0x0

    .line 111
    sput-boolean v0, Lcom/onesignal/OSFocusHandler;->backgrounded:Z

    return-void
.end method

.method private final resetStopState()V
    .locals 2

    const/4 v0, 0x0

    .line 103
    sput-boolean v0, Lcom/onesignal/OSFocusHandler;->stopped:Z

    .line 104
    iget-object v0, p0, Lcom/onesignal/OSFocusHandler;->stopRunnable:Ljava/lang/Runnable;

    if-nez v0, :cond_0

    goto :goto_0

    .line 105
    :cond_0
    invoke-static {}, Lcom/onesignal/OSTimeoutHandler;->getTimeoutHandler()Lcom/onesignal/OSTimeoutHandler;

    move-result-object v1

    invoke-virtual {v1, v0}, Lcom/onesignal/OSTimeoutHandler;->destroyTimeout(Ljava/lang/Runnable;)V

    :goto_0
    return-void
.end method

.method private static final startOnStopFocusWork$lambda-0()V
    .locals 2

    const/4 v0, 0x1

    .line 72
    sput-boolean v0, Lcom/onesignal/OSFocusHandler;->stopped:Z

    .line 74
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    .line 75
    const-string v1, "OSFocusHandler setting stop state: true"

    .line 73
    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    return-void
.end method


# virtual methods
.method public final cancelOnLostFocusWorker(Ljava/lang/String;Landroid/content/Context;)V
    .locals 1

    const-string v0, "tag"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "context"

    invoke-static {p2, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 99
    invoke-static {p2}, Lcom/onesignal/OSWorkManagerHelper;->getInstance(Landroid/content/Context;)Landroidx/work/WorkManager;

    move-result-object p2

    invoke-virtual {p2, p1}, Landroidx/work/WorkManager;->cancelAllWorkByTag(Ljava/lang/String;)Landroidx/work/Operation;

    return-void
.end method

.method public final hasBackgrounded()Z
    .locals 1

    .line 43
    sget-boolean v0, Lcom/onesignal/OSFocusHandler;->backgrounded:Z

    return v0
.end method

.method public final hasCompleted()Z
    .locals 1

    .line 45
    sget-boolean v0, Lcom/onesignal/OSFocusHandler;->completed:Z

    return v0
.end method

.method public final startOnFocusWork()V
    .locals 2

    .line 48
    invoke-direct {p0}, Lcom/onesignal/OSFocusHandler;->resetBackgroundState()V

    .line 50
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    .line 51
    const-string v1, "OSFocusHandler running onAppFocus"

    .line 49
    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 53
    invoke-static {}, Lcom/onesignal/OneSignal;->onAppFocus()V

    return-void
.end method

.method public final startOnLostFocusWorker(Ljava/lang/String;JLandroid/content/Context;)V
    .locals 3

    const-string v0, "tag"

    invoke-static {p1, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    const-string v0, "context"

    invoke-static {p4, v0}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullParameter(Ljava/lang/Object;Ljava/lang/String;)V

    .line 83
    invoke-direct {p0}, Lcom/onesignal/OSFocusHandler;->buildConstraints()Landroidx/work/Constraints;

    move-result-object v0

    .line 84
    new-instance v1, Landroidx/work/OneTimeWorkRequest$Builder;

    const-class v2, Lcom/onesignal/OSFocusHandler$OnLostFocusWorker;

    invoke-direct {v1, v2}, Landroidx/work/OneTimeWorkRequest$Builder;-><init>(Ljava/lang/Class;)V

    .line 85
    invoke-virtual {v1, v0}, Landroidx/work/OneTimeWorkRequest$Builder;->setConstraints(Landroidx/work/Constraints;)Landroidx/work/WorkRequest$Builder;

    move-result-object v0

    check-cast v0, Landroidx/work/OneTimeWorkRequest$Builder;

    .line 86
    sget-object v1, Ljava/util/concurrent/TimeUnit;->MILLISECONDS:Ljava/util/concurrent/TimeUnit;

    invoke-virtual {v0, p2, p3, v1}, Landroidx/work/OneTimeWorkRequest$Builder;->setInitialDelay(JLjava/util/concurrent/TimeUnit;)Landroidx/work/WorkRequest$Builder;

    move-result-object p2

    check-cast p2, Landroidx/work/OneTimeWorkRequest$Builder;

    .line 87
    invoke-virtual {p2, p1}, Landroidx/work/OneTimeWorkRequest$Builder;->addTag(Ljava/lang/String;)Landroidx/work/WorkRequest$Builder;

    move-result-object p2

    check-cast p2, Landroidx/work/OneTimeWorkRequest$Builder;

    .line 88
    invoke-virtual {p2}, Landroidx/work/OneTimeWorkRequest$Builder;->build()Landroidx/work/WorkRequest;

    move-result-object p2

    const-string p3, "Builder(OnLostFocusWorke\u2026tag)\n            .build()"

    invoke-static {p2, p3}, Lkotlin/jvm/internal/Intrinsics;->checkNotNullExpressionValue(Ljava/lang/Object;Ljava/lang/String;)V

    check-cast p2, Landroidx/work/OneTimeWorkRequest;

    .line 90
    invoke-static {p4}, Lcom/onesignal/OSWorkManagerHelper;->getInstance(Landroid/content/Context;)Landroidx/work/WorkManager;

    move-result-object p3

    .line 93
    sget-object p4, Landroidx/work/ExistingWorkPolicy;->KEEP:Landroidx/work/ExistingWorkPolicy;

    .line 91
    invoke-virtual {p3, p1, p4, p2}, Landroidx/work/WorkManager;->enqueueUniqueWork(Ljava/lang/String;Landroidx/work/ExistingWorkPolicy;Landroidx/work/OneTimeWorkRequest;)Landroidx/work/Operation;

    return-void
.end method

.method public final startOnStartFocusWork()V
    .locals 2

    .line 57
    sget-boolean v0, Lcom/onesignal/OSFocusHandler;->stopped:Z

    if-eqz v0, :cond_0

    const/4 v0, 0x0

    .line 58
    sput-boolean v0, Lcom/onesignal/OSFocusHandler;->stopped:Z

    const/4 v0, 0x0

    .line 59
    iput-object v0, p0, Lcom/onesignal/OSFocusHandler;->stopRunnable:Ljava/lang/Runnable;

    .line 61
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    .line 62
    const-string v1, "OSFocusHandler running onAppStartFocusLogic"

    .line 60
    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 64
    invoke-static {}, Lcom/onesignal/OneSignal;->onAppStartFocusLogic()V

    goto :goto_0

    .line 66
    :cond_0
    invoke-direct {p0}, Lcom/onesignal/OSFocusHandler;->resetStopState()V

    :goto_0
    return-void
.end method

.method public final startOnStopFocusWork()V
    .locals 4

    .line 71
    new-instance v0, Lcom/onesignal/OSFocusHandler$$ExternalSyntheticLambda0;

    invoke-direct {v0}, Lcom/onesignal/OSFocusHandler$$ExternalSyntheticLambda0;-><init>()V

    .line 78
    invoke-static {}, Lcom/onesignal/OSTimeoutHandler;->getTimeoutHandler()Lcom/onesignal/OSTimeoutHandler;

    move-result-object v1

    const-wide/16 v2, 0x5dc

    invoke-virtual {v1, v2, v3, v0}, Lcom/onesignal/OSTimeoutHandler;->startTimeout(JLjava/lang/Runnable;)V

    .line 79
    sget-object v1, Lkotlin/Unit;->INSTANCE:Lkotlin/Unit;

    .line 71
    iput-object v0, p0, Lcom/onesignal/OSFocusHandler;->stopRunnable:Ljava/lang/Runnable;

    return-void
.end method
