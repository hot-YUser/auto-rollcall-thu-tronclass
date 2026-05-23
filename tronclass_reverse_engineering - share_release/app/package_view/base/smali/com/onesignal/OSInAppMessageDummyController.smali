.class Lcom/onesignal/OSInAppMessageDummyController;
.super Lcom/onesignal/OSInAppMessageController;
.source "OSInAppMessageDummyController.java"


# direct methods
.method constructor <init>(Lcom/onesignal/OneSignalDbHelper;Lcom/onesignal/OSTaskController;Lcom/onesignal/OSLogger;Lcom/onesignal/OSSharedPreferences;Lcom/onesignal/language/LanguageContext;)V
    .locals 0

    .line 24
    invoke-direct/range {p0 .. p5}, Lcom/onesignal/OSInAppMessageController;-><init>(Lcom/onesignal/OneSignalDbHelper;Lcom/onesignal/OSTaskController;Lcom/onesignal/OSLogger;Lcom/onesignal/OSSharedPreferences;Lcom/onesignal/language/LanguageContext;)V

    return-void
.end method


# virtual methods
.method addTriggers(Ljava/util/Map;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/Object;",
            ">;)V"
        }
    .end annotation

    return-void
.end method

.method cleanCachedInAppMessages()V
    .locals 0

    return-void
.end method

.method displayPreviewMessage(Ljava/lang/String;)V
    .locals 0

    return-void
.end method

.method getCurrentDisplayedInAppMessage()Lcom/onesignal/OSInAppMessageInternal;
    .locals 1

    const/4 v0, 0x0

    return-object v0
.end method

.method getTriggerValue(Ljava/lang/String;)Ljava/lang/Object;
    .locals 0

    const/4 p1, 0x0

    return-object p1
.end method

.method public initRedisplayData()V
    .locals 0

    return-void
.end method

.method initWithCachedInAppMessages()V
    .locals 0

    return-void
.end method

.method isInAppMessageShowing()Z
    .locals 1

    const/4 v0, 0x0

    return v0
.end method

.method public messageTriggerConditionChanged()V
    .locals 0

    return-void
.end method

.method public messageWasDismissed(Lcom/onesignal/OSInAppMessageInternal;)V
    .locals 0

    return-void
.end method

.method onMessageActionOccurredOnMessage(Lcom/onesignal/OSInAppMessageInternal;Lorg/json/JSONObject;)V
    .locals 0

    return-void
.end method

.method onMessageActionOccurredOnPreview(Lcom/onesignal/OSInAppMessageInternal;Lorg/json/JSONObject;)V
    .locals 0

    return-void
.end method

.method receivedInAppMessageJson(Lorg/json/JSONArray;)V
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    return-void
.end method

.method removeTriggersForKeys(Ljava/util/Collection;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Collection<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    return-void
.end method

.method setInAppMessagingEnabled(Z)V
    .locals 0

    return-void
.end method
