.class synthetic Lcom/onesignal/OSDynamicTriggerController$2;
.super Ljava/lang/Object;
.source "OSDynamicTriggerController.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OSDynamicTriggerController;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x1008
    name = null
.end annotation


# static fields
.field static final synthetic $SwitchMap$com$onesignal$OSTrigger$OSTriggerKind:[I

.field static final synthetic $SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator:[I


# direct methods
.method static constructor <clinit>()V
    .locals 5

    .line 92
    invoke-static {}, Lcom/onesignal/OSTrigger$OSTriggerOperator;->values()[Lcom/onesignal/OSTrigger$OSTriggerOperator;

    move-result-object v0

    array-length v0, v0

    new-array v0, v0, [I

    sput-object v0, Lcom/onesignal/OSDynamicTriggerController$2;->$SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator:[I

    const/4 v1, 0x1

    :try_start_0
    sget-object v2, Lcom/onesignal/OSTrigger$OSTriggerOperator;->LESS_THAN:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    invoke-virtual {v2}, Lcom/onesignal/OSTrigger$OSTriggerOperator;->ordinal()I

    move-result v2

    aput v1, v0, v2
    :try_end_0
    .catch Ljava/lang/NoSuchFieldError; {:try_start_0 .. :try_end_0} :catch_0

    :catch_0
    const/4 v0, 0x2

    :try_start_1
    sget-object v2, Lcom/onesignal/OSDynamicTriggerController$2;->$SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator:[I

    sget-object v3, Lcom/onesignal/OSTrigger$OSTriggerOperator;->LESS_THAN_OR_EQUAL_TO:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    invoke-virtual {v3}, Lcom/onesignal/OSTrigger$OSTriggerOperator;->ordinal()I

    move-result v3

    aput v0, v2, v3
    :try_end_1
    .catch Ljava/lang/NoSuchFieldError; {:try_start_1 .. :try_end_1} :catch_1

    :catch_1
    :try_start_2
    sget-object v2, Lcom/onesignal/OSDynamicTriggerController$2;->$SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator:[I

    sget-object v3, Lcom/onesignal/OSTrigger$OSTriggerOperator;->GREATER_THAN:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    invoke-virtual {v3}, Lcom/onesignal/OSTrigger$OSTriggerOperator;->ordinal()I

    move-result v3

    const/4 v4, 0x3

    aput v4, v2, v3
    :try_end_2
    .catch Ljava/lang/NoSuchFieldError; {:try_start_2 .. :try_end_2} :catch_2

    :catch_2
    :try_start_3
    sget-object v2, Lcom/onesignal/OSDynamicTriggerController$2;->$SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator:[I

    sget-object v3, Lcom/onesignal/OSTrigger$OSTriggerOperator;->GREATER_THAN_OR_EQUAL_TO:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    invoke-virtual {v3}, Lcom/onesignal/OSTrigger$OSTriggerOperator;->ordinal()I

    move-result v3

    const/4 v4, 0x4

    aput v4, v2, v3
    :try_end_3
    .catch Ljava/lang/NoSuchFieldError; {:try_start_3 .. :try_end_3} :catch_3

    :catch_3
    :try_start_4
    sget-object v2, Lcom/onesignal/OSDynamicTriggerController$2;->$SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator:[I

    sget-object v3, Lcom/onesignal/OSTrigger$OSTriggerOperator;->EQUAL_TO:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    invoke-virtual {v3}, Lcom/onesignal/OSTrigger$OSTriggerOperator;->ordinal()I

    move-result v3

    const/4 v4, 0x5

    aput v4, v2, v3
    :try_end_4
    .catch Ljava/lang/NoSuchFieldError; {:try_start_4 .. :try_end_4} :catch_4

    :catch_4
    :try_start_5
    sget-object v2, Lcom/onesignal/OSDynamicTriggerController$2;->$SwitchMap$com$onesignal$OSTrigger$OSTriggerOperator:[I

    sget-object v3, Lcom/onesignal/OSTrigger$OSTriggerOperator;->NOT_EQUAL_TO:Lcom/onesignal/OSTrigger$OSTriggerOperator;

    invoke-virtual {v3}, Lcom/onesignal/OSTrigger$OSTriggerOperator;->ordinal()I

    move-result v3

    const/4 v4, 0x6

    aput v4, v2, v3
    :try_end_5
    .catch Ljava/lang/NoSuchFieldError; {:try_start_5 .. :try_end_5} :catch_5

    .line 42
    :catch_5
    invoke-static {}, Lcom/onesignal/OSTrigger$OSTriggerKind;->values()[Lcom/onesignal/OSTrigger$OSTriggerKind;

    move-result-object v2

    array-length v2, v2

    new-array v2, v2, [I

    sput-object v2, Lcom/onesignal/OSDynamicTriggerController$2;->$SwitchMap$com$onesignal$OSTrigger$OSTriggerKind:[I

    :try_start_6
    sget-object v3, Lcom/onesignal/OSTrigger$OSTriggerKind;->SESSION_TIME:Lcom/onesignal/OSTrigger$OSTriggerKind;

    invoke-virtual {v3}, Lcom/onesignal/OSTrigger$OSTriggerKind;->ordinal()I

    move-result v3

    aput v1, v2, v3
    :try_end_6
    .catch Ljava/lang/NoSuchFieldError; {:try_start_6 .. :try_end_6} :catch_6

    :catch_6
    :try_start_7
    sget-object v1, Lcom/onesignal/OSDynamicTriggerController$2;->$SwitchMap$com$onesignal$OSTrigger$OSTriggerKind:[I

    sget-object v2, Lcom/onesignal/OSTrigger$OSTriggerKind;->TIME_SINCE_LAST_IN_APP:Lcom/onesignal/OSTrigger$OSTriggerKind;

    invoke-virtual {v2}, Lcom/onesignal/OSTrigger$OSTriggerKind;->ordinal()I

    move-result v2

    aput v0, v1, v2
    :try_end_7
    .catch Ljava/lang/NoSuchFieldError; {:try_start_7 .. :try_end_7} :catch_7

    :catch_7
    return-void
.end method
