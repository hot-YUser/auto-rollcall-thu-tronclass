.class synthetic Lcom/onesignal/OSOutcomeEventsController$6;
.super Ljava/lang/Object;
.source "OSOutcomeEventsController.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/OSOutcomeEventsController;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x1008
    name = null
.end annotation


# static fields
.field static final synthetic $SwitchMap$com$onesignal$influence$domain$OSInfluenceChannel:[I

.field static final synthetic $SwitchMap$com$onesignal$influence$domain$OSInfluenceType:[I


# direct methods
.method static constructor <clinit>()V
    .locals 4

    .line 279
    invoke-static {}, Lcom/onesignal/influence/domain/OSInfluenceChannel;->values()[Lcom/onesignal/influence/domain/OSInfluenceChannel;

    move-result-object v0

    array-length v0, v0

    new-array v0, v0, [I

    sput-object v0, Lcom/onesignal/OSOutcomeEventsController$6;->$SwitchMap$com$onesignal$influence$domain$OSInfluenceChannel:[I

    const/4 v1, 0x1

    :try_start_0
    sget-object v2, Lcom/onesignal/influence/domain/OSInfluenceChannel;->IAM:Lcom/onesignal/influence/domain/OSInfluenceChannel;

    invoke-virtual {v2}, Lcom/onesignal/influence/domain/OSInfluenceChannel;->ordinal()I

    move-result v2

    aput v1, v0, v2
    :try_end_0
    .catch Ljava/lang/NoSuchFieldError; {:try_start_0 .. :try_end_0} :catch_0

    :catch_0
    const/4 v0, 0x2

    :try_start_1
    sget-object v2, Lcom/onesignal/OSOutcomeEventsController$6;->$SwitchMap$com$onesignal$influence$domain$OSInfluenceChannel:[I

    sget-object v3, Lcom/onesignal/influence/domain/OSInfluenceChannel;->NOTIFICATION:Lcom/onesignal/influence/domain/OSInfluenceChannel;

    invoke-virtual {v3}, Lcom/onesignal/influence/domain/OSInfluenceChannel;->ordinal()I

    move-result v3

    aput v0, v2, v3
    :try_end_1
    .catch Ljava/lang/NoSuchFieldError; {:try_start_1 .. :try_end_1} :catch_1

    .line 213
    :catch_1
    invoke-static {}, Lcom/onesignal/influence/domain/OSInfluenceType;->values()[Lcom/onesignal/influence/domain/OSInfluenceType;

    move-result-object v2

    array-length v2, v2

    new-array v2, v2, [I

    sput-object v2, Lcom/onesignal/OSOutcomeEventsController$6;->$SwitchMap$com$onesignal$influence$domain$OSInfluenceType:[I

    :try_start_2
    sget-object v3, Lcom/onesignal/influence/domain/OSInfluenceType;->DIRECT:Lcom/onesignal/influence/domain/OSInfluenceType;

    invoke-virtual {v3}, Lcom/onesignal/influence/domain/OSInfluenceType;->ordinal()I

    move-result v3

    aput v1, v2, v3
    :try_end_2
    .catch Ljava/lang/NoSuchFieldError; {:try_start_2 .. :try_end_2} :catch_2

    :catch_2
    :try_start_3
    sget-object v1, Lcom/onesignal/OSOutcomeEventsController$6;->$SwitchMap$com$onesignal$influence$domain$OSInfluenceType:[I

    sget-object v2, Lcom/onesignal/influence/domain/OSInfluenceType;->INDIRECT:Lcom/onesignal/influence/domain/OSInfluenceType;

    invoke-virtual {v2}, Lcom/onesignal/influence/domain/OSInfluenceType;->ordinal()I

    move-result v2

    aput v0, v1, v2
    :try_end_3
    .catch Ljava/lang/NoSuchFieldError; {:try_start_3 .. :try_end_3} :catch_3

    :catch_3
    :try_start_4
    sget-object v0, Lcom/onesignal/OSOutcomeEventsController$6;->$SwitchMap$com$onesignal$influence$domain$OSInfluenceType:[I

    sget-object v1, Lcom/onesignal/influence/domain/OSInfluenceType;->UNATTRIBUTED:Lcom/onesignal/influence/domain/OSInfluenceType;

    invoke-virtual {v1}, Lcom/onesignal/influence/domain/OSInfluenceType;->ordinal()I

    move-result v1

    const/4 v2, 0x3

    aput v2, v0, v1
    :try_end_4
    .catch Ljava/lang/NoSuchFieldError; {:try_start_4 .. :try_end_4} :catch_4

    :catch_4
    :try_start_5
    sget-object v0, Lcom/onesignal/OSOutcomeEventsController$6;->$SwitchMap$com$onesignal$influence$domain$OSInfluenceType:[I

    sget-object v1, Lcom/onesignal/influence/domain/OSInfluenceType;->DISABLED:Lcom/onesignal/influence/domain/OSInfluenceType;

    invoke-virtual {v1}, Lcom/onesignal/influence/domain/OSInfluenceType;->ordinal()I

    move-result v1

    const/4 v2, 0x4

    aput v2, v0, v1
    :try_end_5
    .catch Ljava/lang/NoSuchFieldError; {:try_start_5 .. :try_end_5} :catch_5

    :catch_5
    return-void
.end method
