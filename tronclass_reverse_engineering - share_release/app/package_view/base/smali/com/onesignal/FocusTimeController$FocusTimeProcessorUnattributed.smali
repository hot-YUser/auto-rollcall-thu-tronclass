.class Lcom/onesignal/FocusTimeController$FocusTimeProcessorUnattributed;
.super Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;
.source "FocusTimeController.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/onesignal/FocusTimeController;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x8
    name = "FocusTimeProcessorUnattributed"
.end annotation


# direct methods
.method constructor <init>()V
    .locals 2

    .line 118
    invoke-direct {p0}, Lcom/onesignal/FocusTimeController$FocusTimeProcessorBase;-><init>()V

    const-wide/16 v0, 0x3c

    .line 119
    iput-wide v0, p0, Lcom/onesignal/FocusTimeController$FocusTimeProcessorUnattributed;->MIN_ON_FOCUS_TIME_SEC:J

    .line 120
    const-string v0, "GT_UNSENT_ACTIVE_TIME"

    iput-object v0, p0, Lcom/onesignal/FocusTimeController$FocusTimeProcessorUnattributed;->PREF_KEY_FOR_UNSENT_TIME:Ljava/lang/String;

    return-void
.end method


# virtual methods
.method protected getInfluences()Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lcom/onesignal/influence/domain/OSInfluence;",
            ">;"
        }
    .end annotation

    .line 139
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    return-object v0
.end method

.method protected saveInfluences(Ljava/util/List;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List<",
            "Lcom/onesignal/influence/domain/OSInfluence;",
            ">;)V"
        }
    .end annotation

    return-void
.end method

.method protected sendTime(Lcom/onesignal/FocusTimeController$FocusEventType;)V
    .locals 3

    .line 124
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {p0}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/Class;->getSimpleName()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, " sendTime with: "

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 126
    sget-object v0, Lcom/onesignal/FocusTimeController$FocusEventType;->END_SESSION:Lcom/onesignal/FocusTimeController$FocusEventType;

    invoke-virtual {p1, v0}, Lcom/onesignal/FocusTimeController$FocusEventType;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_0

    return-void

    .line 129
    :cond_0
    invoke-virtual {p0}, Lcom/onesignal/FocusTimeController$FocusTimeProcessorUnattributed;->syncUnsentTimeOnBackgroundEvent()V

    return-void
.end method
