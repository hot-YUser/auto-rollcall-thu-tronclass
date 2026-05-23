.class Lcom/onesignal/OSTriggerController;
.super Ljava/lang/Object;
.source "OSTriggerController.java"


# instance fields
.field dynamicTriggerController:Lcom/onesignal/OSDynamicTriggerController;

.field private final triggers:Ljava/util/concurrent/ConcurrentHashMap;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/concurrent/ConcurrentHashMap<",
            "Ljava/lang/String;",
            "Ljava/lang/Object;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method constructor <init>(Lcom/onesignal/OSDynamicTriggerController$OSDynamicTriggerControllerObserver;)V
    .locals 1

    .line 22
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 23
    new-instance v0, Ljava/util/concurrent/ConcurrentHashMap;

    invoke-direct {v0}, Ljava/util/concurrent/ConcurrentHashMap;-><init>()V

    iput-object v0, p0, Lcom/onesignal/OSTriggerController;->triggers:Ljava/util/concurrent/ConcurrentHashMap;

    .line 24
    new-instance v0, Lcom/onesignal/OSDynamicTriggerController;

    invoke-direct {v0, p1}, Lcom/onesignal/OSDynamicTriggerController;-><init>(Lcom/onesignal/OSDynamicTriggerController$OSDynamicTriggerControllerObserver;)V

    iput-object v0, p0, Lcom/onesignal/OSTriggerController;->dynamicTriggerController:Lcom/onesignal/OSDynamicTriggerController;

    return-void
.end method

.method private evaluateAndTriggers(Ljava/util/ArrayList;)Z
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/ArrayList<",
            "Lcom/onesignal/OSTrigger;",
            ">;)Z"
        }
    .end annotation

    .line 48
    invoke-virtual {p1}, Ljava/util/ArrayList;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :cond_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_1

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lcom/onesignal/OSTrigger;

    .line 49
    invoke-direct {p0, v0}, Lcom/onesignal/OSTriggerController;->evaluateTrigger(Lcom/onesignal/OSTrigger;)Z

    move-result v0

    if-nez v0, :cond_0

    const/4 p1, 0x0

    return p1

    :cond_1
    const/4 p1, 0x1

    return p1
.end method

.method private evaluateTrigger(Lcom/onesignal/OSTrigger;)Z
    .locals 6

    .line 57
    iget-object v0, p1, Lcom/onesignal/OSTrigger;->kind:Lcom/onesignal/OSTrigger$OSTriggerKind;

    sget-object v1, Lcom/onesignal/OSTrigger$OSTriggerKind;->UNKNOWN:Lcom/onesignal/OSTrigger$OSTriggerKind;

    const/4 v2, 0x0

    if-ne v0, v1, :cond_0

    return v2

    .line 60
    :cond_0
    iget-object v0, p1, Lcom/onesignal/OSTrigger;->kind:Lcom/onesignal/OSTrigger$OSTriggerKind;

    sget-object v1, Lcom/onesignal/OSTrigger$OSTriggerKind;->CUSTOM:Lcom/onesignal/OSTrigger$OSTriggerKind;

    if-eq v0, v1, :cond_1

    .line 61
    iget-object v0, p0, Lcom/onesignal/OSTriggerController;->dynamicTriggerController:Lcom/onesignal/OSDynamicTriggerController;

    invoke-virtual {v0, p1}, Lcom/onesignal/OSDynamicTriggerController;->dynamicTriggerShouldFire(Lcom/onesignal/OSTrigger;)Z

    move-result p1

    return p1

    .line 63
    :cond_1
    iget-object v0, p1, Lcom/onesignal/OSTrigger;->operatorType:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    .line 64
    iget-object v1, p0, Lcom/onesignal/OSTriggerController;->triggers:Ljava/util/concurrent/ConcurrentHashMap;

    iget-object v3, p1, Lcom/onesignal/OSTrigger;->property:Ljava/lang/String;

    invoke-virtual {v1, v3}, Ljava/util/concurrent/ConcurrentHashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    const/4 v3, 0x1

    if-nez v1, :cond_4

    .line 69
    sget-object v1, Lcom/onesignal/OSTrigger$OSTriggerOperator;->NOT_EXISTS:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    if-ne v0, v1, :cond_2

    return v3

    .line 73
    :cond_2
    sget-object v1, Lcom/onesignal/OSTrigger$OSTriggerOperator;->NOT_EQUAL_TO:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    if-ne v0, v1, :cond_3

    iget-object p1, p1, Lcom/onesignal/OSTrigger;->value:Ljava/lang/Object;

    if-eqz p1, :cond_3

    move v2, v3

    :cond_3
    return v2

    .line 77
    :cond_4
    sget-object v4, Lcom/onesignal/OSTrigger$OSTriggerOperator;->EXISTS:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    if-ne v0, v4, :cond_5

    return v3

    .line 79
    :cond_5
    sget-object v4, Lcom/onesignal/OSTrigger$OSTriggerOperator;->NOT_EXISTS:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    if-ne v0, v4, :cond_6

    return v2

    .line 82
    :cond_6
    sget-object v4, Lcom/onesignal/OSTrigger$OSTriggerOperator;->CONTAINS:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    if-ne v0, v4, :cond_8

    .line 83
    instance-of v0, v1, Ljava/util/Collection;

    if-eqz v0, :cond_7

    check-cast v1, Ljava/util/Collection;

    iget-object p1, p1, Lcom/onesignal/OSTrigger;->value:Ljava/lang/Object;

    invoke-interface {v1, p1}, Ljava/util/Collection;->contains(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_7

    move v2, v3

    :cond_7
    return v2

    .line 85
    :cond_8
    instance-of v4, v1, Ljava/lang/String;

    if-eqz v4, :cond_9

    iget-object v4, p1, Lcom/onesignal/OSTrigger;->value:Ljava/lang/Object;

    instance-of v4, v4, Ljava/lang/String;

    if-eqz v4, :cond_9

    iget-object v4, p1, Lcom/onesignal/OSTrigger;->value:Ljava/lang/Object;

    check-cast v4, Ljava/lang/String;

    move-object v5, v1

    check-cast v5, Ljava/lang/String;

    .line 87
    invoke-direct {p0, v4, v5, v0}, Lcom/onesignal/OSTriggerController;->triggerMatchesStringValue(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OSTrigger$OSTriggerOperator;)Z

    move-result v4

    if-eqz v4, :cond_9

    return v3

    .line 90
    :cond_9
    iget-object v4, p1, Lcom/onesignal/OSTrigger;->value:Ljava/lang/Object;

    instance-of v4, v4, Ljava/lang/Number;

    if-eqz v4, :cond_a

    instance-of v4, v1, Ljava/lang/Number;

    if-eqz v4, :cond_a

    iget-object v4, p1, Lcom/onesignal/OSTrigger;->value:Ljava/lang/Object;

    check-cast v4, Ljava/lang/Number;

    move-object v5, v1

    check-cast v5, Ljava/lang/Number;

    .line 92
    invoke-direct {p0, v4, v5, v0}, Lcom/onesignal/OSTriggerController;->triggerMatchesNumericValue(Ljava/lang/Number;Ljava/lang/Number;Lcom/onesignal/OSTrigger$OSTriggerOperator;)Z

    move-result v4

    if-eqz v4, :cond_a

    return v3

    .line 95
    :cond_a
    iget-object p1, p1, Lcom/onesignal/OSTrigger;->value:Ljava/lang/Object;

    invoke-direct {p0, p1, v1, v0}, Lcom/onesignal/OSTriggerController;->triggerMatchesFlex(Ljava/lang/Object;Ljava/lang/Object;Lcom/onesignal/OSTrigger$OSTriggerOperator;)Z

    move-result p1

    if-eqz p1, :cond_b

    return v3

    :cond_b
    return v2
.end method

.method private triggerMatchesFlex(Ljava/lang/Object;Ljava/lang/Object;Lcom/onesignal/OSTrigger$OSTriggerOperator;)Z
    .locals 2

    const/4 v0, 0x0

    if-nez p1, :cond_0

    return v0

    .line 120
    :cond_0
    invoke-virtual {p3}, Lcom/onesignal/OSTrigger$OSTriggerOperator;->checksEquality()Z

    move-result v1

    if-eqz v1, :cond_2

    .line 121
    invoke-virtual {p1}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object p1

    .line 122
    invoke-virtual {p2}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v0

    .line 123
    instance-of v1, p2, Ljava/lang/Number;

    if-eqz v1, :cond_1

    .line 125
    new-instance v0, Ljava/text/DecimalFormat;

    const-string v1, "0.#"

    invoke-direct {v0, v1}, Ljava/text/DecimalFormat;-><init>(Ljava/lang/String;)V

    .line 126
    invoke-virtual {v0, p2}, Ljava/text/DecimalFormat;->format(Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    .line 128
    :cond_1
    invoke-direct {p0, p1, v0, p3}, Lcom/onesignal/OSTriggerController;->triggerMatchesStringValue(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OSTrigger$OSTriggerOperator;)Z

    move-result p1

    return p1

    .line 131
    :cond_2
    instance-of v1, p2, Ljava/lang/String;

    if-eqz v1, :cond_3

    instance-of v1, p1, Ljava/lang/Number;

    if-eqz v1, :cond_3

    .line 133
    check-cast p1, Ljava/lang/Number;

    check-cast p2, Ljava/lang/String;

    invoke-direct {p0, p1, p2, p3}, Lcom/onesignal/OSTriggerController;->triggerMatchesNumericValueFlex(Ljava/lang/Number;Ljava/lang/String;Lcom/onesignal/OSTrigger$OSTriggerOperator;)Z

    move-result p1

    return p1

    :cond_3
    return v0
.end method

.method private triggerMatchesNumericValue(Ljava/lang/Number;Ljava/lang/Number;Lcom/onesignal/OSTrigger$OSTriggerOperator;)Z
    .locals 5

    .line 149
    invoke-virtual {p1}, Ljava/lang/Number;->doubleValue()D

    move-result-wide v0

    .line 150
    invoke-virtual {p2}, Ljava/lang/Number;->doubleValue()D

    move-result-wide p1

    .line 152
    sget-object v2, Lcom/onesignal/OSTriggerController$1;->$SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator:[I

    invoke-virtual {p3}, Lcom/onesignal/OSTrigger$OSTriggerOperator;->ordinal()I

    move-result v3

    aget v2, v2, v3

    const/4 v3, 0x1

    const/4 v4, 0x0

    packed-switch v2, :pswitch_data_0

    return v4

    :pswitch_0
    cmpl-double p1, p1, v0

    if-gtz p1, :cond_1

    if-nez p1, :cond_0

    goto :goto_0

    :cond_0
    move v3, v4

    :cond_1
    :goto_0
    return v3

    :pswitch_1
    cmpg-double p3, p1, v0

    if-ltz p3, :cond_3

    cmpl-double p1, p1, v0

    if-nez p1, :cond_2

    goto :goto_1

    :cond_2
    move v3, v4

    :cond_3
    :goto_1
    return v3

    :pswitch_2
    cmpl-double p1, p1, v0

    if-lez p1, :cond_4

    goto :goto_2

    :cond_4
    move v3, v4

    :goto_2
    return v3

    :pswitch_3
    cmpg-double p1, p1, v0

    if-gez p1, :cond_5

    goto :goto_3

    :cond_5
    move v3, v4

    :goto_3
    return v3

    .line 156
    :pswitch_4
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v0, "Attempted to use an invalid operator with a numeric value: "

    invoke-direct {p2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    .line 158
    invoke-virtual {p3}, Lcom/onesignal/OSTrigger$OSTriggerOperator;->toString()Ljava/lang/String;

    move-result-object p3

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    .line 156
    invoke-static {p1, p2}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    return v4

    :pswitch_5
    cmpl-double p1, p1, v0

    if-eqz p1, :cond_6

    goto :goto_4

    :cond_6
    move v3, v4

    :goto_4
    return v3

    :pswitch_6
    cmpl-double p1, p1, v0

    if-nez p1, :cond_7

    goto :goto_5

    :cond_7
    move v3, v4

    :goto_5
    return v3

    nop

    :pswitch_data_0
    .packed-switch 0x1
        :pswitch_6
        :pswitch_5
        :pswitch_4
        :pswitch_4
        :pswitch_4
        :pswitch_3
        :pswitch_2
        :pswitch_1
        :pswitch_0
    .end packed-switch
.end method

.method private triggerMatchesNumericValueFlex(Ljava/lang/Number;Ljava/lang/String;Lcom/onesignal/OSTrigger$OSTriggerOperator;)Z
    .locals 2

    .line 140
    :try_start_0
    invoke-static {p2}, Ljava/lang/Double;->parseDouble(Ljava/lang/String;)D

    move-result-wide v0
    :try_end_0
    .catch Ljava/lang/NumberFormatException; {:try_start_0 .. :try_end_0} :catch_0

    .line 145
    invoke-virtual {p1}, Ljava/lang/Number;->doubleValue()D

    move-result-wide p1

    invoke-static {p1, p2}, Ljava/lang/Double;->valueOf(D)Ljava/lang/Double;

    move-result-object p1

    invoke-static {v0, v1}, Ljava/lang/Double;->valueOf(D)Ljava/lang/Double;

    move-result-object p2

    invoke-direct {p0, p1, p2, p3}, Lcom/onesignal/OSTriggerController;->triggerMatchesNumericValue(Ljava/lang/Number;Ljava/lang/Number;Lcom/onesignal/OSTrigger$OSTriggerOperator;)Z

    move-result p1

    return p1

    :catch_0
    const/4 p1, 0x0

    return p1
.end method

.method private triggerMatchesStringValue(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OSTrigger$OSTriggerOperator;)Z
    .locals 3

    .line 103
    sget-object v0, Lcom/onesignal/OSTriggerController$1;->$SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator:[I

    invoke-virtual {p3}, Lcom/onesignal/OSTrigger$OSTriggerOperator;->ordinal()I

    move-result v1

    aget v0, v0, v1

    const/4 v1, 0x1

    if-eq v0, v1, :cond_1

    const/4 v2, 0x2

    if-eq v0, v2, :cond_0

    .line 109
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v0, "Attempted to use an invalid operator for a string trigger comparison: "

    invoke-direct {p2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p3}, Lcom/onesignal/OSTrigger$OSTriggerOperator;->toString()Ljava/lang/String;

    move-result-object p3

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-static {p1, p2}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    const/4 p1, 0x0

    return p1

    .line 107
    :cond_0
    invoke-virtual {p1, p2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    xor-int/2addr p1, v1

    return p1

    .line 105
    :cond_1
    invoke-virtual {p1, p2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    return p1
.end method


# virtual methods
.method addTriggers(Ljava/util/Map;)V
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/Object;",
            ">;)V"
        }
    .end annotation

    .line 227
    iget-object v0, p0, Lcom/onesignal/OSTriggerController;->triggers:Ljava/util/concurrent/ConcurrentHashMap;

    monitor-enter v0

    .line 228
    :try_start_0
    invoke-interface {p1}, Ljava/util/Map;->keySet()Ljava/util/Set;

    move-result-object v1

    invoke-interface {v1}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v1

    :goto_0
    invoke-interface {v1}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_0

    invoke-interface {v1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/String;

    .line 229
    invoke-interface {p1, v2}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v3

    .line 230
    iget-object v4, p0, Lcom/onesignal/OSTriggerController;->triggers:Ljava/util/concurrent/ConcurrentHashMap;

    invoke-virtual {v4, v2, v3}, Ljava/util/concurrent/ConcurrentHashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    goto :goto_0

    .line 232
    :cond_0
    monitor-exit v0

    return-void

    :catchall_0
    move-exception p1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method

.method evaluateMessageTriggers(Lcom/onesignal/OSInAppMessageInternal;)Z
    .locals 2

    .line 35
    iget-object v0, p1, Lcom/onesignal/OSInAppMessageInternal;->triggers:Ljava/util/ArrayList;

    invoke-virtual {v0}, Ljava/util/ArrayList;->size()I

    move-result v0

    const/4 v1, 0x1

    if-nez v0, :cond_0

    return v1

    .line 39
    :cond_0
    iget-object p1, p1, Lcom/onesignal/OSInAppMessageInternal;->triggers:Ljava/util/ArrayList;

    invoke-virtual {p1}, Ljava/util/ArrayList;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :cond_1
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_2

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/util/ArrayList;

    .line 40
    invoke-direct {p0, v0}, Lcom/onesignal/OSTriggerController;->evaluateAndTriggers(Ljava/util/ArrayList;)Z

    move-result v0

    if-eqz v0, :cond_1

    return v1

    :cond_2
    const/4 p1, 0x0

    return p1
.end method

.method getTriggerValue(Ljava/lang/String;)Ljava/lang/Object;
    .locals 2

    .line 244
    iget-object v0, p0, Lcom/onesignal/OSTriggerController;->triggers:Ljava/util/concurrent/ConcurrentHashMap;

    monitor-enter v0

    .line 245
    :try_start_0
    iget-object v1, p0, Lcom/onesignal/OSTriggerController;->triggers:Ljava/util/concurrent/ConcurrentHashMap;

    invoke-virtual {v1, p1}, Ljava/util/concurrent/ConcurrentHashMap;->containsKey(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 246
    iget-object v1, p0, Lcom/onesignal/OSTriggerController;->triggers:Ljava/util/concurrent/ConcurrentHashMap;

    invoke-virtual {v1, p1}, Ljava/util/concurrent/ConcurrentHashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    monitor-exit v0

    return-object p1

    .line 248
    :cond_0
    monitor-exit v0

    const/4 p1, 0x0

    return-object p1

    :catchall_0
    move-exception p1

    .line 249
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method

.method public getTriggers()Ljava/util/concurrent/ConcurrentHashMap;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/concurrent/ConcurrentHashMap<",
            "Ljava/lang/String;",
            "Ljava/lang/Object;",
            ">;"
        }
    .end annotation

    .line 253
    iget-object v0, p0, Lcom/onesignal/OSTriggerController;->triggers:Ljava/util/concurrent/ConcurrentHashMap;

    return-object v0
.end method

.method isTriggerOnMessage(Lcom/onesignal/OSInAppMessageInternal;Ljava/util/Collection;)Z
    .locals 6
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/onesignal/OSInAppMessageInternal;",
            "Ljava/util/Collection<",
            "Ljava/lang/String;",
            ">;)Z"
        }
    .end annotation

    .line 184
    iget-object v0, p1, Lcom/onesignal/OSInAppMessageInternal;->triggers:Ljava/util/ArrayList;

    const/4 v1, 0x0

    if-nez v0, :cond_0

    return v1

    .line 187
    :cond_0
    invoke-interface {p2}, Ljava/util/Collection;->iterator()Ljava/util/Iterator;

    move-result-object p2

    :cond_1
    invoke-interface {p2}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_5

    invoke-interface {p2}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/String;

    .line 188
    iget-object v2, p1, Lcom/onesignal/OSInAppMessageInternal;->triggers:Ljava/util/ArrayList;

    invoke-virtual {v2}, Ljava/util/ArrayList;->iterator()Ljava/util/Iterator;

    move-result-object v2

    :cond_2
    invoke-interface {v2}, Ljava/util/Iterator;->hasNext()Z

    move-result v3

    if-eqz v3, :cond_1

    invoke-interface {v2}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Ljava/util/ArrayList;

    .line 189
    invoke-virtual {v3}, Ljava/util/ArrayList;->iterator()Ljava/util/Iterator;

    move-result-object v3

    :cond_3
    invoke-interface {v3}, Ljava/util/Iterator;->hasNext()Z

    move-result v4

    if-eqz v4, :cond_2

    invoke-interface {v3}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v4

    check-cast v4, Lcom/onesignal/OSTrigger;

    .line 192
    iget-object v5, v4, Lcom/onesignal/OSTrigger;->property:Ljava/lang/String;

    invoke-virtual {v0, v5}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v5

    if-nez v5, :cond_4

    iget-object v4, v4, Lcom/onesignal/OSTrigger;->triggerId:Ljava/lang/String;

    invoke-virtual {v0, v4}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v4

    if-eqz v4, :cond_3

    :cond_4
    const/4 p1, 0x1

    return p1

    :cond_5
    return v1
.end method

.method messageHasOnlyDynamicTriggers(Lcom/onesignal/OSInAppMessageInternal;)Z
    .locals 5

    .line 209
    iget-object v0, p1, Lcom/onesignal/OSInAppMessageInternal;->triggers:Ljava/util/ArrayList;

    const/4 v1, 0x0

    if-eqz v0, :cond_5

    iget-object v0, p1, Lcom/onesignal/OSInAppMessageInternal;->triggers:Ljava/util/ArrayList;

    invoke-virtual {v0}, Ljava/util/ArrayList;->isEmpty()Z

    move-result v0

    if-eqz v0, :cond_0

    goto :goto_0

    .line 212
    :cond_0
    iget-object p1, p1, Lcom/onesignal/OSInAppMessageInternal;->triggers:Ljava/util/ArrayList;

    invoke-virtual {p1}, Ljava/util/ArrayList;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :cond_1
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_4

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/util/ArrayList;

    .line 213
    invoke-virtual {v0}, Ljava/util/ArrayList;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :cond_2
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_1

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Lcom/onesignal/OSTrigger;

    .line 214
    iget-object v3, v2, Lcom/onesignal/OSTrigger;->kind:Lcom/onesignal/OSTrigger$OSTriggerKind;

    sget-object v4, Lcom/onesignal/OSTrigger$OSTriggerKind;->CUSTOM:Lcom/onesignal/OSTrigger$OSTriggerKind;

    if-eq v3, v4, :cond_3

    iget-object v2, v2, Lcom/onesignal/OSTrigger;->kind:Lcom/onesignal/OSTrigger$OSTriggerKind;

    sget-object v3, Lcom/onesignal/OSTrigger$OSTriggerKind;->UNKNOWN:Lcom/onesignal/OSTrigger$OSTriggerKind;

    if-ne v2, v3, :cond_2

    :cond_3
    return v1

    :cond_4
    const/4 p1, 0x1

    return p1

    :cond_5
    :goto_0
    return v1
.end method

.method removeTriggersForKeys(Ljava/util/Collection;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Collection<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 236
    iget-object v0, p0, Lcom/onesignal/OSTriggerController;->triggers:Ljava/util/concurrent/ConcurrentHashMap;

    monitor-enter v0

    .line 237
    :try_start_0
    invoke-interface {p1}, Ljava/util/Collection;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/String;

    .line 238
    iget-object v2, p0, Lcom/onesignal/OSTriggerController;->triggers:Ljava/util/concurrent/ConcurrentHashMap;

    invoke-virtual {v2, v1}, Ljava/util/concurrent/ConcurrentHashMap;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    goto :goto_0

    .line 239
    :cond_0
    monitor-exit v0

    return-void

    :catchall_0
    move-exception p1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1
.end method
