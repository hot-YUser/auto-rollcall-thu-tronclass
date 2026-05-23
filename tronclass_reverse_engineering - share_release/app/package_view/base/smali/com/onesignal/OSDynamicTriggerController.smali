.class Lcom/onesignal/OSDynamicTriggerController;
.super Ljava/lang/Object;
.source "OSDynamicTriggerController.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/OSDynamicTriggerController$OSDynamicTriggerControllerObserver;
    }
.end annotation


# static fields
.field private static final DEFAULT_LAST_IN_APP_TIME_AGO:J = 0xf423fL

.field private static final REQUIRED_ACCURACY:D = 0.3

.field private static sessionLaunchTime:Ljava/util/Date;


# instance fields
.field private final observer:Lcom/onesignal/OSDynamicTriggerController$OSDynamicTriggerControllerObserver;

.field private final scheduledMessages:Ljava/util/ArrayList;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/ArrayList<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 23
    new-instance v0, Ljava/util/Date;

    invoke-direct {v0}, Ljava/util/Date;-><init>()V

    sput-object v0, Lcom/onesignal/OSDynamicTriggerController;->sessionLaunchTime:Ljava/util/Date;

    return-void
.end method

.method constructor <init>(Lcom/onesignal/OSDynamicTriggerController$OSDynamicTriggerControllerObserver;)V
    .locals 1

    .line 27
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 28
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    iput-object v0, p0, Lcom/onesignal/OSDynamicTriggerController;->scheduledMessages:Ljava/util/ArrayList;

    .line 29
    iput-object p1, p0, Lcom/onesignal/OSDynamicTriggerController;->observer:Lcom/onesignal/OSDynamicTriggerController$OSDynamicTriggerControllerObserver;

    return-void
.end method

.method static synthetic access$000(Lcom/onesignal/OSDynamicTriggerController;)Ljava/util/ArrayList;
    .locals 0

    .line 9
    iget-object p0, p0, Lcom/onesignal/OSDynamicTriggerController;->scheduledMessages:Ljava/util/ArrayList;

    return-object p0
.end method

.method static synthetic access$100(Lcom/onesignal/OSDynamicTriggerController;)Lcom/onesignal/OSDynamicTriggerController$OSDynamicTriggerControllerObserver;
    .locals 0

    .line 9
    iget-object p0, p0, Lcom/onesignal/OSDynamicTriggerController;->observer:Lcom/onesignal/OSDynamicTriggerController$OSDynamicTriggerControllerObserver;

    return-object p0
.end method

.method private static evaluateTimeIntervalWithOperator(DDLcom/onesignal/OSTrigger$OSTriggerOperator;)Z
    .locals 3

    .line 92
    sget-object v0, Lcom/onesignal/OSDynamicTriggerController$2;->$SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator:[I

    invoke-virtual {p4}, Lcom/onesignal/OSTrigger$OSTriggerOperator;->ordinal()I

    move-result v1

    aget v0, v0, v1

    const/4 v1, 0x1

    const/4 v2, 0x0

    packed-switch v0, :pswitch_data_0

    .line 107
    sget-object p0, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance p1, Ljava/lang/StringBuilder;

    const-string p2, "Attempted to apply an invalid operator on a time-based in-app-message trigger: "

    invoke-direct {p1, p2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p4}, Lcom/onesignal/OSTrigger$OSTriggerOperator;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {p0, p1}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    return v2

    .line 105
    :pswitch_0
    invoke-static {p0, p1, p2, p3}, Lcom/onesignal/OSDynamicTriggerController;->roughlyEqual(DD)Z

    move-result p0

    xor-int/2addr p0, v1

    return p0

    .line 103
    :pswitch_1
    invoke-static {p0, p1, p2, p3}, Lcom/onesignal/OSDynamicTriggerController;->roughlyEqual(DD)Z

    move-result p0

    return p0

    :pswitch_2
    cmpl-double p4, p2, p0

    if-gez p4, :cond_1

    .line 101
    invoke-static {p0, p1, p2, p3}, Lcom/onesignal/OSDynamicTriggerController;->roughlyEqual(DD)Z

    move-result p0

    if-eqz p0, :cond_0

    goto :goto_0

    :cond_0
    move v1, v2

    :cond_1
    :goto_0
    return v1

    :pswitch_3
    cmpl-double p0, p2, p0

    if-ltz p0, :cond_2

    goto :goto_1

    :cond_2
    move v1, v2

    :goto_1
    return v1

    :pswitch_4
    cmpg-double p4, p2, p0

    if-lez p4, :cond_4

    .line 96
    invoke-static {p0, p1, p2, p3}, Lcom/onesignal/OSDynamicTriggerController;->roughlyEqual(DD)Z

    move-result p0

    if-eqz p0, :cond_3

    goto :goto_2

    :cond_3
    move v1, v2

    :cond_4
    :goto_2
    return v1

    :pswitch_5
    cmpg-double p0, p2, p0

    if-gez p0, :cond_5

    goto :goto_3

    :cond_5
    move v1, v2

    :goto_3
    return v1

    nop

    :pswitch_data_0
    .packed-switch 0x1
        :pswitch_5
        :pswitch_4
        :pswitch_3
        :pswitch_2
        :pswitch_1
        :pswitch_0
    .end packed-switch
.end method

.method static resetSessionLaunchTime()V
    .locals 1

    .line 88
    new-instance v0, Ljava/util/Date;

    invoke-direct {v0}, Ljava/util/Date;-><init>()V

    sput-object v0, Lcom/onesignal/OSDynamicTriggerController;->sessionLaunchTime:Ljava/util/Date;

    return-void
.end method

.method private static roughlyEqual(DD)Z
    .locals 0

    sub-double/2addr p0, p2

    .line 113
    invoke-static {p0, p1}, Ljava/lang/Math;->abs(D)D

    move-result-wide p0

    const-wide p2, 0x3fd3333333333333L    # 0.3

    cmpg-double p0, p0, p2

    if-gez p0, :cond_0

    const/4 p0, 0x1

    goto :goto_0

    :cond_0
    const/4 p0, 0x0

    :goto_0
    return p0
.end method


# virtual methods
.method dynamicTriggerShouldFire(Lcom/onesignal/OSTrigger;)Z
    .locals 14

    .line 33
    iget-object v0, p1, Lcom/onesignal/OSTrigger;->value:Ljava/lang/Object;

    const/4 v1, 0x0

    if-nez v0, :cond_0

    return v1

    .line 36
    :cond_0
    iget-object v0, p0, Lcom/onesignal/OSDynamicTriggerController;->scheduledMessages:Ljava/util/ArrayList;

    monitor-enter v0

    .line 38
    :try_start_0
    iget-object v2, p1, Lcom/onesignal/OSTrigger;->value:Ljava/lang/Object;

    instance-of v2, v2, Ljava/lang/Number;

    if-nez v2, :cond_1

    .line 39
    monitor-exit v0

    return v1

    .line 42
    :cond_1
    sget-object v2, Lcom/onesignal/OSDynamicTriggerController$2;->$SwitchMap$com$onesignal$OSTrigger$OSTriggerKind:[I

    iget-object v3, p1, Lcom/onesignal/OSTrigger;->kind:Lcom/onesignal/OSTrigger$OSTriggerKind;

    invoke-virtual {v3}, Lcom/onesignal/OSTrigger$OSTriggerKind;->ordinal()I

    move-result v3

    aget v2, v2, v3

    const/4 v3, 0x1

    const-wide/16 v4, 0x0

    if-eq v2, v3, :cond_5

    const/4 v6, 0x2

    if-eq v2, v6, :cond_2

    move-wide v6, v4

    goto :goto_1

    .line 47
    :cond_2
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object v2

    invoke-virtual {v2}, Lcom/onesignal/OSInAppMessageController;->isInAppMessageShowing()Z

    move-result v2

    if-eqz v2, :cond_3

    .line 48
    monitor-exit v0

    return v1

    .line 49
    :cond_3
    invoke-static {}, Lcom/onesignal/OneSignal;->getInAppMessageController()Lcom/onesignal/OSInAppMessageController;

    move-result-object v2

    iget-object v2, v2, Lcom/onesignal/OSInAppMessageController;->lastTimeInAppDismissed:Ljava/util/Date;

    if-nez v2, :cond_4

    const-wide/32 v6, 0xf423f

    goto :goto_1

    .line 53
    :cond_4
    new-instance v6, Ljava/util/Date;

    invoke-direct {v6}, Ljava/util/Date;-><init>()V

    invoke-virtual {v6}, Ljava/util/Date;->getTime()J

    move-result-wide v6

    invoke-virtual {v2}, Ljava/util/Date;->getTime()J

    move-result-wide v8

    goto :goto_0

    .line 44
    :cond_5
    new-instance v2, Ljava/util/Date;

    invoke-direct {v2}, Ljava/util/Date;-><init>()V

    invoke-virtual {v2}, Ljava/util/Date;->getTime()J

    move-result-wide v6

    sget-object v2, Lcom/onesignal/OSDynamicTriggerController;->sessionLaunchTime:Ljava/util/Date;

    invoke-virtual {v2}, Ljava/util/Date;->getTime()J

    move-result-wide v8

    :goto_0
    sub-long/2addr v6, v8

    .line 57
    :goto_1
    iget-object v2, p1, Lcom/onesignal/OSTrigger;->triggerId:Ljava/lang/String;

    .line 58
    iget-object v8, p1, Lcom/onesignal/OSTrigger;->value:Ljava/lang/Object;

    check-cast v8, Ljava/lang/Number;

    invoke-virtual {v8}, Ljava/lang/Number;->doubleValue()D

    move-result-wide v8

    const-wide v10, 0x408f400000000000L    # 1000.0

    mul-double/2addr v8, v10

    double-to-long v8, v8

    long-to-double v10, v8

    long-to-double v12, v6

    .line 59
    iget-object p1, p1, Lcom/onesignal/OSTrigger;->operatorType:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    invoke-static {v10, v11, v12, v13, p1}, Lcom/onesignal/OSDynamicTriggerController;->evaluateTimeIntervalWithOperator(DDLcom/onesignal/OSTrigger$OSTriggerOperator;)Z

    move-result p1

    if-eqz p1, :cond_6

    .line 60
    iget-object p1, p0, Lcom/onesignal/OSDynamicTriggerController;->observer:Lcom/onesignal/OSDynamicTriggerController$OSDynamicTriggerControllerObserver;

    invoke-interface {p1, v2}, Lcom/onesignal/OSDynamicTriggerController$OSDynamicTriggerControllerObserver;->messageDynamicTriggerCompleted(Ljava/lang/String;)V

    .line 61
    monitor-exit v0

    return v3

    :cond_6
    sub-long/2addr v8, v6

    cmp-long p1, v8, v4

    if-gtz p1, :cond_7

    .line 66
    monitor-exit v0

    return v1

    .line 69
    :cond_7
    iget-object p1, p0, Lcom/onesignal/OSDynamicTriggerController;->scheduledMessages:Ljava/util/ArrayList;

    invoke-virtual {p1, v2}, Ljava/util/ArrayList;->contains(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_8

    .line 70
    monitor-exit v0

    return v1

    .line 72
    :cond_8
    new-instance p1, Lcom/onesignal/OSDynamicTriggerController$1;

    invoke-direct {p1, p0, v2}, Lcom/onesignal/OSDynamicTriggerController$1;-><init>(Lcom/onesignal/OSDynamicTriggerController;Ljava/lang/String;)V

    invoke-static {p1, v2, v8, v9}, Lcom/onesignal/OSDynamicTriggerTimer;->scheduleTrigger(Ljava/util/TimerTask;Ljava/lang/String;J)V

    .line 80
    iget-object p1, p0, Lcom/onesignal/OSDynamicTriggerController;->scheduledMessages:Ljava/util/ArrayList;

    invoke-virtual {p1, v2}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    .line 81
    monitor-exit v0

    return v1

    :catchall_0
    move-exception p1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method
