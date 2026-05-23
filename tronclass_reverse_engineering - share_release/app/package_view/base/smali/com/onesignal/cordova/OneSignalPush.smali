.class public Lcom/onesignal/cordova/OneSignalPush;
.super Lorg/apache/cordova/CordovaPlugin;
.source "OneSignalPush.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/cordova/OneSignalPush$CordovaNotificationInForegroundHandler;,
        Lcom/onesignal/cordova/OneSignalPush$CordovaNotificationOpenHandler;,
        Lcom/onesignal/cordova/OneSignalPush$CordovaInAppMessageClickHandler;
    }
.end annotation


# static fields
.field private static final ADD_EMAIL_SUBSCRIPTION_OBSERVER:Ljava/lang/String; = "addEmailSubscriptionObserver"

.field private static final ADD_PERMISSION_OBSERVER:Ljava/lang/String; = "addPermissionObserver"

.field private static final ADD_SMS_SUBSCRIPTION_OBSERVER:Ljava/lang/String; = "addSMSSubscriptionObserver"

.field private static final ADD_SUBSCRIPTION_OBSERVER:Ljava/lang/String; = "addSubscriptionObserver"

.field private static final ADD_TRIGGERS:Ljava/lang/String; = "addTriggers"

.field private static final CLEAR_ONESIGNAL_NOTIFICATIONS:Ljava/lang/String; = "clearOneSignalNotifications"

.field private static final COMPLETE_NOTIFICATION:Ljava/lang/String; = "completeNotification"

.field private static final DELETE_TAGS:Ljava/lang/String; = "deleteTags"

.field private static final DISABLE_PUSH:Ljava/lang/String; = "disablePush"

.field private static final GET_DEVICE_STATE:Ljava/lang/String; = "getDeviceState"

.field private static final GET_TAGS:Ljava/lang/String; = "getTags"

.field private static final GET_TRIGGER_VALUE_FOR_KEY:Ljava/lang/String; = "getTriggerValueForKey"

.field private static final INIT:Ljava/lang/String; = "init"

.field private static final IN_APP_MESSAGING_PAUSED:Ljava/lang/String; = "isInAppMessagingPaused"

.field private static final IS_LOCATION_SHARED:Ljava/lang/String; = "isLocationShared"

.field private static final LOGOUT_EMAIL:Ljava/lang/String; = "logoutEmail"

.field private static final LOGOUT_SMS_NUMBER:Ljava/lang/String; = "logoutSMSNumber"

.field private static final PAUSE_IN_APP_MESSAGES:Ljava/lang/String; = "pauseInAppMessages"

.field private static final POST_NOTIFICATION:Ljava/lang/String; = "postNotification"

.field private static final PROMPT_FOR_PUSH_NOTIFICATIONS_WITH_USER_RESPONSE:Ljava/lang/String; = "promptForPushNotificationsWithUserResponse"

.field private static final PROMPT_LOCATION:Ljava/lang/String; = "promptLocation"

.field private static final PROVIDE_USER_CONSENT:Ljava/lang/String; = "provideUserConsent"

.field private static final REGISTER_FOR_PROVISIONAL_AUTHORIZATION:Ljava/lang/String; = "registerForProvisionalAuthorization"

.field private static final REMOVE_EXTERNAL_USER_ID:Ljava/lang/String; = "removeExternalUserId"

.field private static final REMOVE_GROUPED_NOTIFICATIONS:Ljava/lang/String; = "removeGroupedNotifications"

.field private static final REMOVE_NOTIFICATION:Ljava/lang/String; = "removeNotification"

.field private static final REMOVE_TRIGGERS_FOR_KEYS:Ljava/lang/String; = "removeTriggersForKeys"

.field private static final REQUIRES_CONSENT:Ljava/lang/String; = "requiresUserPrivacyConsent"

.field private static final SEND_OUTCOME:Ljava/lang/String; = "sendOutcome"

.field private static final SEND_OUTCOME_WITH_VALUE:Ljava/lang/String; = "sendOutcomeWithValue"

.field private static final SEND_TAGS:Ljava/lang/String; = "sendTags"

.field private static final SEND_UNIQUE_OUTCOME:Ljava/lang/String; = "sendUniqueOutcome"

.field private static final SET_EMAIL:Ljava/lang/String; = "setEmail"

.field private static final SET_EXTERNAL_USER_ID:Ljava/lang/String; = "setExternalUserId"

.field private static final SET_IN_APP_MESSAGE_CLICK_HANDLER:Ljava/lang/String; = "setInAppMessageClickHandler"

.field private static final SET_IN_APP_MESSAGE_LIFECYCLE_HANDLER:Ljava/lang/String; = "setInAppMessageLifecycleHandler"

.field private static final SET_LANGUAGE:Ljava/lang/String; = "setLanguage"

.field private static final SET_LAUNCH_URLS_IN_APP:Ljava/lang/String; = "setLaunchURLsInApp"

.field private static final SET_LOCATION_SHARED:Ljava/lang/String; = "setLocationShared"

.field private static final SET_LOG_LEVEL:Ljava/lang/String; = "setLogLevel"

.field private static final SET_NOTIFICATION_OPENED_HANDLER:Ljava/lang/String; = "setNotificationOpenedHandler"

.field private static final SET_NOTIFICATION_WILL_SHOW_IN_FOREGROUND_HANDLER:Ljava/lang/String; = "setNotificationWillShowInForegroundHandler"

.field private static final SET_ON_DID_DISMISS_IN_APP_MESSAGE_HANDLER:Ljava/lang/String; = "setOnDidDismissInAppMessageHandler"

.field private static final SET_ON_DID_DISPLAY_IN_APP_MESSAGE_HANDLER:Ljava/lang/String; = "setOnDidDisplayInAppMessageHandler"

.field private static final SET_ON_WILL_DISMISS_IN_APP_MESSAGE_HANDLER:Ljava/lang/String; = "setOnWillDismissInAppMessageHandler"

.field private static final SET_ON_WILL_DISPLAY_IN_APP_MESSAGE_HANDLER:Ljava/lang/String; = "setOnWillDisplayInAppMessageHandler"

.field private static final SET_REQUIRES_CONSENT:Ljava/lang/String; = "setRequiresUserPrivacyConsent"

.field private static final SET_SMS_NUMBER:Ljava/lang/String; = "setSMSNumber"

.field private static final SET_UNAUTHENTICATED_EMAIL:Ljava/lang/String; = "setUnauthenticatedEmail"

.field private static final SET_UNAUTHENTICATED_SMS_NUMBER:Ljava/lang/String; = "setUnauthenticatedSMSNumber"

.field private static final TAG:Ljava/lang/String; = "OneSignalPush"

.field private static final UNSUBSCRIBE_WHEN_NOTIFICATIONS_DISABLED:Ljava/lang/String; = "unsubscribeWhenNotificationsAreDisabled"

.field private static final USER_PROVIDED_CONSENT:Ljava/lang/String; = "userProvidedPrivacyConsent"

.field private static jsInAppMessageDidDismissCallBack:Lorg/apache/cordova/CallbackContext;

.field private static jsInAppMessageDidDisplayCallBack:Lorg/apache/cordova/CallbackContext;

.field private static jsInAppMessageWillDismissCallback:Lorg/apache/cordova/CallbackContext;

.field private static jsInAppMessageWillDisplayCallback:Lorg/apache/cordova/CallbackContext;

.field private static final notificationReceivedEventCache:Ljava/util/HashMap;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/HashMap<",
            "Ljava/lang/String;",
            "Lcom/onesignal/OSNotificationReceivedEvent;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 122
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    sput-object v0, Lcom/onesignal/cordova/OneSignalPush;->notificationReceivedEventCache:Ljava/util/HashMap;

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 48
    invoke-direct {p0}, Lorg/apache/cordova/CordovaPlugin;-><init>()V

    return-void
.end method

.method static synthetic access$000()Lorg/apache/cordova/CallbackContext;
    .locals 1

    .line 48
    sget-object v0, Lcom/onesignal/cordova/OneSignalPush;->jsInAppMessageWillDisplayCallback:Lorg/apache/cordova/CallbackContext;

    return-object v0
.end method

.method static synthetic access$100()Lorg/apache/cordova/CallbackContext;
    .locals 1

    .line 48
    sget-object v0, Lcom/onesignal/cordova/OneSignalPush;->jsInAppMessageDidDisplayCallBack:Lorg/apache/cordova/CallbackContext;

    return-object v0
.end method

.method static synthetic access$200()Lorg/apache/cordova/CallbackContext;
    .locals 1

    .line 48
    sget-object v0, Lcom/onesignal/cordova/OneSignalPush;->jsInAppMessageWillDismissCallback:Lorg/apache/cordova/CallbackContext;

    return-object v0
.end method

.method static synthetic access$300()Lorg/apache/cordova/CallbackContext;
    .locals 1

    .line 48
    sget-object v0, Lcom/onesignal/cordova/OneSignalPush;->jsInAppMessageDidDismissCallBack:Lorg/apache/cordova/CallbackContext;

    return-object v0
.end method

.method static synthetic access$400()Ljava/util/HashMap;
    .locals 1

    .line 48
    sget-object v0, Lcom/onesignal/cordova/OneSignalPush;->notificationReceivedEventCache:Ljava/util/HashMap;

    return-object v0
.end method

.method private completeNotification(Lorg/json/JSONArray;)Z
    .locals 5

    const-string v0, "Could not find notification completion block with id: "

    const/4 v1, 0x0

    .line 433
    :try_start_0
    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v2

    const/4 v3, 0x1

    .line 434
    invoke-virtual {p1, v3}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result p1

    .line 436
    sget-object v4, Lcom/onesignal/cordova/OneSignalPush;->notificationReceivedEventCache:Ljava/util/HashMap;

    invoke-virtual {v4, v2}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v4

    check-cast v4, Lcom/onesignal/OSNotificationReceivedEvent;

    if-nez v4, :cond_0

    .line 439
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v3, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {p1, v0}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    return v1

    :cond_0
    if-eqz p1, :cond_1

    .line 444
    invoke-virtual {v4}, Lcom/onesignal/OSNotificationReceivedEvent;->getNotification()Lcom/onesignal/OSNotification;

    move-result-object p1

    invoke-virtual {v4, p1}, Lcom/onesignal/OSNotificationReceivedEvent;->complete(Lcom/onesignal/OSNotification;)V

    goto :goto_0

    :cond_1
    const/4 p1, 0x0

    .line 446
    invoke-virtual {v4, p1}, Lcom/onesignal/OSNotificationReceivedEvent;->complete(Lcom/onesignal/OSNotification;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    :goto_0
    return v3

    :catch_0
    move-exception p1

    .line 450
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    return v1
.end method


# virtual methods
.method public execute(Ljava/lang/String;Lorg/json/JSONArray;Lorg/apache/cordova/CallbackContext;)Z
    .locals 3

    .line 214
    invoke-virtual {p1}, Ljava/lang/String;->hashCode()I

    invoke-virtual {p1}, Ljava/lang/String;->hashCode()I

    move-result v0

    const/4 v1, 0x0

    const/4 v2, -0x1

    sparse-switch v0, :sswitch_data_0

    goto/16 :goto_0

    :sswitch_0
    const-string v0, "getDeviceState"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_0

    goto/16 :goto_0

    :cond_0
    const/16 v2, 0x33

    goto/16 :goto_0

    :sswitch_1
    const-string v0, "addSMSSubscriptionObserver"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_1

    goto/16 :goto_0

    :cond_1
    const/16 v2, 0x32

    goto/16 :goto_0

    :sswitch_2
    const-string v0, "setInAppMessageClickHandler"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_2

    goto/16 :goto_0

    :cond_2
    const/16 v2, 0x31

    goto/16 :goto_0

    :sswitch_3
    const-string v0, "setNotificationWillShowInForegroundHandler"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_3

    goto/16 :goto_0

    :cond_3
    const/16 v2, 0x30

    goto/16 :goto_0

    :sswitch_4
    const-string v0, "clearOneSignalNotifications"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_4

    goto/16 :goto_0

    :cond_4
    const/16 v2, 0x2f

    goto/16 :goto_0

    :sswitch_5
    const-string v0, "deleteTags"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_5

    goto/16 :goto_0

    :cond_5
    const/16 v2, 0x2e

    goto/16 :goto_0

    :sswitch_6
    const-string v0, "setOnWillDismissInAppMessageHandler"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_6

    goto/16 :goto_0

    :cond_6
    const/16 v2, 0x2d

    goto/16 :goto_0

    :sswitch_7
    const-string v0, "setOnWillDisplayInAppMessageHandler"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_7

    goto/16 :goto_0

    :cond_7
    const/16 v2, 0x2c

    goto/16 :goto_0

    :sswitch_8
    const-string v0, "logoutEmail"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_8

    goto/16 :goto_0

    :cond_8
    const/16 v2, 0x2b

    goto/16 :goto_0

    :sswitch_9
    const-string v0, "setNotificationOpenedHandler"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_9

    goto/16 :goto_0

    :cond_9
    const/16 v2, 0x2a

    goto/16 :goto_0

    :sswitch_a
    const-string v0, "requiresUserPrivacyConsent"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_a

    goto/16 :goto_0

    :cond_a
    const/16 v2, 0x29

    goto/16 :goto_0

    :sswitch_b
    const-string v0, "postNotification"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_b

    goto/16 :goto_0

    :cond_b
    const/16 v2, 0x28

    goto/16 :goto_0

    :sswitch_c
    const-string v0, "sendUniqueOutcome"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_c

    goto/16 :goto_0

    :cond_c
    const/16 v2, 0x27

    goto/16 :goto_0

    :sswitch_d
    const-string v0, "setEmail"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_d

    goto/16 :goto_0

    :cond_d
    const/16 v2, 0x26

    goto/16 :goto_0

    :sswitch_e
    const-string v0, "disablePush"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_e

    goto/16 :goto_0

    :cond_e
    const/16 v2, 0x25

    goto/16 :goto_0

    :sswitch_f
    const-string v0, "sendTags"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_f

    goto/16 :goto_0

    :cond_f
    const/16 v2, 0x24

    goto/16 :goto_0

    :sswitch_10
    const-string v0, "promptLocation"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_10

    goto/16 :goto_0

    :cond_10
    const/16 v2, 0x23

    goto/16 :goto_0

    :sswitch_11
    const-string v0, "sendOutcomeWithValue"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_11

    goto/16 :goto_0

    :cond_11
    const/16 v2, 0x22

    goto/16 :goto_0

    :sswitch_12
    const-string v0, "removeGroupedNotifications"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_12

    goto/16 :goto_0

    :cond_12
    const/16 v2, 0x21

    goto/16 :goto_0

    :sswitch_13
    const-string v0, "removeTriggersForKeys"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_13

    goto/16 :goto_0

    :cond_13
    const/16 v2, 0x20

    goto/16 :goto_0

    :sswitch_14
    const-string v0, "addTriggers"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_14

    goto/16 :goto_0

    :cond_14
    const/16 v2, 0x1f

    goto/16 :goto_0

    :sswitch_15
    const-string v0, "getTriggerValueForKey"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_15

    goto/16 :goto_0

    :cond_15
    const/16 v2, 0x1e

    goto/16 :goto_0

    :sswitch_16
    const-string v0, "setLanguage"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_16

    goto/16 :goto_0

    :cond_16
    const/16 v2, 0x1d

    goto/16 :goto_0

    :sswitch_17
    const-string v0, "promptForPushNotificationsWithUserResponse"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_17

    goto/16 :goto_0

    :cond_17
    const/16 v2, 0x1c

    goto/16 :goto_0

    :sswitch_18
    const-string v0, "removeExternalUserId"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_18

    goto/16 :goto_0

    :cond_18
    const/16 v2, 0x1b

    goto/16 :goto_0

    :sswitch_19
    const-string v0, "registerForProvisionalAuthorization"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_19

    goto/16 :goto_0

    :cond_19
    const/16 v2, 0x1a

    goto/16 :goto_0

    :sswitch_1a
    const-string v0, "init"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_1a

    goto/16 :goto_0

    :cond_1a
    const/16 v2, 0x19

    goto/16 :goto_0

    :sswitch_1b
    const-string v0, "setInAppMessageLifecycleHandler"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_1b

    goto/16 :goto_0

    :cond_1b
    const/16 v2, 0x18

    goto/16 :goto_0

    :sswitch_1c
    const-string v0, "userProvidedPrivacyConsent"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_1c

    goto/16 :goto_0

    :cond_1c
    const/16 v2, 0x17

    goto/16 :goto_0

    :sswitch_1d
    const-string v0, "addEmailSubscriptionObserver"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_1d

    goto/16 :goto_0

    :cond_1d
    const/16 v2, 0x16

    goto/16 :goto_0

    :sswitch_1e
    const-string v0, "getTags"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_1e

    goto/16 :goto_0

    :cond_1e
    const/16 v2, 0x15

    goto/16 :goto_0

    :sswitch_1f
    const-string v0, "unsubscribeWhenNotificationsAreDisabled"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_1f

    goto/16 :goto_0

    :cond_1f
    const/16 v2, 0x14

    goto/16 :goto_0

    :sswitch_20
    const-string v0, "completeNotification"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_20

    goto/16 :goto_0

    :cond_20
    const/16 v2, 0x13

    goto/16 :goto_0

    :sswitch_21
    const-string v0, "setLogLevel"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_21

    goto/16 :goto_0

    :cond_21
    const/16 v2, 0x12

    goto/16 :goto_0

    :sswitch_22
    const-string v0, "pauseInAppMessages"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_22

    goto/16 :goto_0

    :cond_22
    const/16 v2, 0x11

    goto/16 :goto_0

    :sswitch_23
    const-string v0, "setSMSNumber"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_23

    goto/16 :goto_0

    :cond_23
    const/16 v2, 0x10

    goto/16 :goto_0

    :sswitch_24
    const-string v0, "logoutSMSNumber"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_24

    goto/16 :goto_0

    :cond_24
    const/16 v2, 0xf

    goto/16 :goto_0

    :sswitch_25
    const-string v0, "setUnauthenticatedEmail"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_25

    goto/16 :goto_0

    :cond_25
    const/16 v2, 0xe

    goto/16 :goto_0

    :sswitch_26
    const-string v0, "isInAppMessagingPaused"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_26

    goto/16 :goto_0

    :cond_26
    const/16 v2, 0xd

    goto/16 :goto_0

    :sswitch_27
    const-string v0, "setUnauthenticatedSMSNumber"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_27

    goto/16 :goto_0

    :cond_27
    const/16 v2, 0xc

    goto/16 :goto_0

    :sswitch_28
    const-string v0, "setOnDidDismissInAppMessageHandler"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_28

    goto/16 :goto_0

    :cond_28
    const/16 v2, 0xb

    goto/16 :goto_0

    :sswitch_29
    const-string v0, "setOnDidDisplayInAppMessageHandler"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_29

    goto/16 :goto_0

    :cond_29
    const/16 v2, 0xa

    goto/16 :goto_0

    :sswitch_2a
    const-string v0, "removeNotification"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_2a

    goto/16 :goto_0

    :cond_2a
    const/16 v2, 0x9

    goto/16 :goto_0

    :sswitch_2b
    const-string v0, "setLaunchURLsInApp"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_2b

    goto/16 :goto_0

    :cond_2b
    const/16 v2, 0x8

    goto/16 :goto_0

    :sswitch_2c
    const-string v0, "setRequiresUserPrivacyConsent"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_2c

    goto :goto_0

    :cond_2c
    const/4 v2, 0x7

    goto :goto_0

    :sswitch_2d
    const-string v0, "sendOutcome"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_2d

    goto :goto_0

    :cond_2d
    const/4 v2, 0x6

    goto :goto_0

    :sswitch_2e
    const-string v0, "addSubscriptionObserver"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_2e

    goto :goto_0

    :cond_2e
    const/4 v2, 0x5

    goto :goto_0

    :sswitch_2f
    const-string v0, "setLocationShared"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_2f

    goto :goto_0

    :cond_2f
    const/4 v2, 0x4

    goto :goto_0

    :sswitch_30
    const-string v0, "setExternalUserId"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_30

    goto :goto_0

    :cond_30
    const/4 v2, 0x3

    goto :goto_0

    :sswitch_31
    const-string v0, "isLocationShared"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_31

    goto :goto_0

    :cond_31
    const/4 v2, 0x2

    goto :goto_0

    :sswitch_32
    const-string v0, "addPermissionObserver"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_32

    goto :goto_0

    :cond_32
    const/4 v2, 0x1

    goto :goto_0

    :sswitch_33
    const-string v0, "provideUserConsent"

    invoke-virtual {p1, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_33

    goto :goto_0

    :cond_33
    move v2, v1

    :goto_0
    packed-switch v2, :pswitch_data_0

    .line 424
    new-instance p2, Ljava/lang/StringBuilder;

    const-string v0, "Invalid action : "

    invoke-direct {p2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    const-string v2, "OneSignalPush"

    invoke-static {v2, p2}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    .line 425
    new-instance p2, Ljava/lang/StringBuilder;

    invoke-direct {p2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {p3, p1}, Lcom/onesignal/cordova/CallbackHelper;->callbackError(Lorg/apache/cordova/CallbackContext;Ljava/lang/String;)V

    goto/16 :goto_1

    .line 256
    :pswitch_0
    invoke-static {p3}, Lcom/onesignal/cordova/OneSignalController;->getDeviceState(Lorg/apache/cordova/CallbackContext;)Z

    move-result v1

    goto/16 :goto_1

    .line 276
    :pswitch_1
    invoke-static {p3}, Lcom/onesignal/cordova/OneSignalObserverController;->addSMSSubscriptionObserver(Lorg/apache/cordova/CallbackContext;)Z

    move-result v1

    goto/16 :goto_1

    .line 224
    :pswitch_2
    invoke-virtual {p0, p3}, Lcom/onesignal/cordova/OneSignalPush;->setInAppMessageClickHandler(Lorg/apache/cordova/CallbackContext;)Z

    move-result v1

    goto/16 :goto_1

    .line 220
    :pswitch_3
    invoke-virtual {p0, p3}, Lcom/onesignal/cordova/OneSignalPush;->setNotificationWillShowInForegroundHandler(Lorg/apache/cordova/CallbackContext;)Z

    move-result v1

    goto/16 :goto_1

    .line 304
    :pswitch_4
    invoke-static {}, Lcom/onesignal/cordova/OneSignalController;->clearOneSignalNotifications()Z

    move-result v1

    goto/16 :goto_1

    .line 288
    :pswitch_5
    invoke-static {p2}, Lcom/onesignal/cordova/OneSignalController;->deleteTags(Lorg/json/JSONArray;)Z

    move-result v1

    goto/16 :goto_1

    .line 240
    :pswitch_6
    invoke-virtual {p0, p3}, Lcom/onesignal/cordova/OneSignalPush;->setOnWillDismissInAppMessageHandler(Lorg/apache/cordova/CallbackContext;)Z

    move-result v1

    goto/16 :goto_1

    .line 232
    :pswitch_7
    invoke-virtual {p0, p3}, Lcom/onesignal/cordova/OneSignalPush;->setOnWillDisplayInAppMessageHandler(Lorg/apache/cordova/CallbackContext;)Z

    move-result v1

    goto/16 :goto_1

    .line 340
    :pswitch_8
    invoke-static {p3}, Lcom/onesignal/cordova/OneSignalEmailController;->logoutEmail(Lorg/apache/cordova/CallbackContext;)Z

    move-result v1

    goto/16 :goto_1

    .line 216
    :pswitch_9
    invoke-virtual {p0, p3}, Lcom/onesignal/cordova/OneSignalPush;->setNotificationOpenedHandler(Lorg/apache/cordova/CallbackContext;)Z

    move-result v1

    goto/16 :goto_1

    .line 372
    :pswitch_a
    invoke-static {p3}, Lcom/onesignal/cordova/OneSignalController;->requiresUserPrivacyConsent(Lorg/apache/cordova/CallbackContext;)Z

    move-result v1

    goto/16 :goto_1

    .line 320
    :pswitch_b
    invoke-static {p3, p2}, Lcom/onesignal/cordova/OneSignalController;->postNotification(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z

    move-result v1

    goto/16 :goto_1

    .line 416
    :pswitch_c
    invoke-static {p3, p2}, Lcom/onesignal/cordova/OneSignalOutcomeController;->sendUniqueOutcome(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z

    move-result v1

    goto/16 :goto_1

    .line 332
    :pswitch_d
    invoke-static {p3, p2}, Lcom/onesignal/cordova/OneSignalEmailController;->setEmail(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z

    move-result v1

    goto/16 :goto_1

    .line 316
    :pswitch_e
    invoke-static {p2}, Lcom/onesignal/cordova/OneSignalController;->disablePush(Lorg/json/JSONArray;)Z

    move-result v1

    goto/16 :goto_1

    .line 284
    :pswitch_f
    invoke-static {p2}, Lcom/onesignal/cordova/OneSignalController;->sendTags(Lorg/json/JSONArray;)Z

    move-result v1

    goto/16 :goto_1

    .line 356
    :pswitch_10
    invoke-static {}, Lcom/onesignal/cordova/OneSignalController;->promptLocation()V

    goto/16 :goto_1

    .line 420
    :pswitch_11
    invoke-static {p3, p2}, Lcom/onesignal/cordova/OneSignalOutcomeController;->sendOutcomeWithValue(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z

    move-result v1

    goto/16 :goto_1

    .line 312
    :pswitch_12
    invoke-static {p2}, Lcom/onesignal/cordova/OneSignalController;->removeGroupedNotifications(Lorg/json/JSONArray;)Z

    move-result v1

    goto/16 :goto_1

    .line 396
    :pswitch_13
    invoke-static {p2}, Lcom/onesignal/cordova/OneSignalInAppMessagingController;->removeTriggersForKeys(Lorg/json/JSONArray;)Z

    move-result v1

    goto/16 :goto_1

    .line 392
    :pswitch_14
    invoke-static {p2}, Lcom/onesignal/cordova/OneSignalInAppMessagingController;->addTriggers(Lorg/json/JSONArray;)Z

    move-result v1

    goto/16 :goto_1

    .line 400
    :pswitch_15
    invoke-static {p3, p2}, Lcom/onesignal/cordova/OneSignalInAppMessagingController;->getTriggerValueForKey(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z

    move-result v1

    goto/16 :goto_1

    .line 260
    :pswitch_16
    invoke-static {p3, p2}, Lcom/onesignal/cordova/OneSignalController;->setLanguage(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z

    move-result v1

    goto/16 :goto_1

    .line 296
    :pswitch_17
    invoke-static {p3, p2}, Lcom/onesignal/cordova/OneSignalController;->promptForPushNotificationsWithUserResponse(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z

    move-result v1

    goto/16 :goto_1

    .line 388
    :pswitch_18
    invoke-static {p3}, Lcom/onesignal/cordova/OneSignalController;->removeExternalUserId(Lorg/apache/cordova/CallbackContext;)Z

    move-result v1

    goto/16 :goto_1

    .line 292
    :pswitch_19
    invoke-static {}, Lcom/onesignal/cordova/OneSignalController;->registerForProvisionalAuthorization()Z

    move-result v1

    goto/16 :goto_1

    .line 252
    :pswitch_1a
    invoke-virtual {p0, p2}, Lcom/onesignal/cordova/OneSignalPush;->init(Lorg/json/JSONArray;)Z

    move-result v1

    goto/16 :goto_1

    .line 228
    :pswitch_1b
    invoke-virtual {p0}, Lcom/onesignal/cordova/OneSignalPush;->setInAppMessageLifecycleHandler()Z

    move-result v1

    goto/16 :goto_1

    .line 368
    :pswitch_1c
    invoke-static {p3}, Lcom/onesignal/cordova/OneSignalController;->userProvidedConsent(Lorg/apache/cordova/CallbackContext;)Z

    move-result v1

    goto/16 :goto_1

    .line 272
    :pswitch_1d
    invoke-static {p3}, Lcom/onesignal/cordova/OneSignalObserverController;->addEmailSubscriptionObserver(Lorg/apache/cordova/CallbackContext;)Z

    move-result v1

    goto/16 :goto_1

    .line 280
    :pswitch_1e
    invoke-static {p3}, Lcom/onesignal/cordova/OneSignalController;->getTags(Lorg/apache/cordova/CallbackContext;)Z

    move-result v1

    goto/16 :goto_1

    .line 300
    :pswitch_1f
    invoke-static {p2}, Lcom/onesignal/cordova/OneSignalController;->unsubscribeWhenNotificationsAreDisabled(Lorg/json/JSONArray;)Z

    move-result v1

    goto/16 :goto_1

    .line 248
    :pswitch_20
    invoke-direct {p0, p2}, Lcom/onesignal/cordova/OneSignalPush;->completeNotification(Lorg/json/JSONArray;)Z

    move-result v1

    goto/16 :goto_1

    .line 328
    :pswitch_21
    invoke-static {p2}, Lcom/onesignal/cordova/OneSignalController;->setLogLevel(Lorg/json/JSONArray;)V

    goto :goto_1

    .line 404
    :pswitch_22
    invoke-static {p2}, Lcom/onesignal/cordova/OneSignalInAppMessagingController;->pauseInAppMessages(Lorg/json/JSONArray;)Z

    move-result v1

    goto :goto_1

    .line 344
    :pswitch_23
    invoke-static {p3, p2}, Lcom/onesignal/cordova/OneSignalSMSController;->setSMSNumber(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z

    move-result v1

    goto :goto_1

    .line 352
    :pswitch_24
    invoke-static {p3}, Lcom/onesignal/cordova/OneSignalSMSController;->logoutSMSNumber(Lorg/apache/cordova/CallbackContext;)Z

    move-result v1

    goto :goto_1

    .line 336
    :pswitch_25
    invoke-static {p3, p2}, Lcom/onesignal/cordova/OneSignalEmailController;->setUnauthenticatedEmail(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z

    move-result v1

    goto :goto_1

    .line 408
    :pswitch_26
    invoke-static {p3}, Lcom/onesignal/cordova/OneSignalInAppMessagingController;->isInAppMessagingPaused(Lorg/apache/cordova/CallbackContext;)Z

    move-result v1

    goto :goto_1

    .line 348
    :pswitch_27
    invoke-static {p3, p2}, Lcom/onesignal/cordova/OneSignalSMSController;->setUnauthenticatedEmail(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z

    move-result v1

    goto :goto_1

    .line 244
    :pswitch_28
    invoke-virtual {p0, p3}, Lcom/onesignal/cordova/OneSignalPush;->setOnDidDismissInAppMessageHandler(Lorg/apache/cordova/CallbackContext;)Z

    move-result v1

    goto :goto_1

    .line 236
    :pswitch_29
    invoke-virtual {p0, p3}, Lcom/onesignal/cordova/OneSignalPush;->setOnDidDisplayInAppMessageHandler(Lorg/apache/cordova/CallbackContext;)Z

    move-result v1

    goto :goto_1

    .line 308
    :pswitch_2a
    invoke-static {p2}, Lcom/onesignal/cordova/OneSignalController;->removeNotification(Lorg/json/JSONArray;)Z

    move-result v1

    goto :goto_1

    .line 324
    :pswitch_2b
    invoke-static {}, Lcom/onesignal/cordova/OneSignalController;->setLaunchURLsInApp()Z

    move-result v1

    goto :goto_1

    .line 376
    :pswitch_2c
    invoke-static {p3, p2}, Lcom/onesignal/cordova/OneSignalController;->setRequiresConsent(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z

    move-result v1

    goto :goto_1

    .line 412
    :pswitch_2d
    invoke-static {p3, p2}, Lcom/onesignal/cordova/OneSignalOutcomeController;->sendOutcome(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z

    move-result v1

    goto :goto_1

    .line 268
    :pswitch_2e
    invoke-static {p3}, Lcom/onesignal/cordova/OneSignalObserverController;->addSubscriptionObserver(Lorg/apache/cordova/CallbackContext;)Z

    move-result v1

    goto :goto_1

    .line 360
    :pswitch_2f
    invoke-static {p2}, Lcom/onesignal/cordova/OneSignalController;->setLocationShared(Lorg/json/JSONArray;)V

    goto :goto_1

    .line 384
    :pswitch_30
    invoke-static {p3, p2}, Lcom/onesignal/cordova/OneSignalController;->setExternalUserId(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z

    move-result v1

    goto :goto_1

    .line 364
    :pswitch_31
    invoke-static {p3}, Lcom/onesignal/cordova/OneSignalController;->isLocationShared(Lorg/apache/cordova/CallbackContext;)Z

    move-result v1

    goto :goto_1

    .line 264
    :pswitch_32
    invoke-static {p3}, Lcom/onesignal/cordova/OneSignalObserverController;->addPermissionObserver(Lorg/apache/cordova/CallbackContext;)Z

    move-result v1

    goto :goto_1

    .line 380
    :pswitch_33
    invoke-static {p2}, Lcom/onesignal/cordova/OneSignalController;->provideUserConsent(Lorg/json/JSONArray;)Z

    move-result v1

    :goto_1
    return v1

    :sswitch_data_0
    .sparse-switch
        -0x78c74392 -> :sswitch_33
        -0x68f913ba -> :sswitch_32
        -0x66269bbc -> :sswitch_31
        -0x61ad910d -> :sswitch_30
        -0x5643ee84 -> :sswitch_2f
        -0x52234aac -> :sswitch_2e
        -0x51a83956 -> :sswitch_2d
        -0x4ef04193 -> :sswitch_2c
        -0x470766fd -> :sswitch_2b
        -0x3f93d071 -> :sswitch_2a
        -0x346e1785 -> :sswitch_29
        -0x319dd64d -> :sswitch_28
        -0x2a3b7512 -> :sswitch_27
        -0x20044cc0 -> :sswitch_26
        -0x1e9f2d78 -> :sswitch_25
        -0x1a6c0068 -> :sswitch_24
        -0x18637440 -> :sswitch_23
        -0x17ef862e -> :sswitch_22
        -0x1278eede -> :sswitch_21
        -0x689ff3c -> :sswitch_20
        -0x576fc4d -> :sswitch_1f
        -0x47a6371 -> :sswitch_1e
        -0x34d94d2 -> :sswitch_1d
        -0x2a02e20 -> :sswitch_1c
        -0x1874633 -> :sswitch_1b
        0x316510 -> :sswitch_1a
        0x5d935df -> :sswitch_19
        0xee6c795 -> :sswitch_18
        0x15f3e8db -> :sswitch_17
        0x166531da -> :sswitch_16
        0x1c4acec5 -> :sswitch_15
        0x1f850d7c -> :sswitch_14
        0x29fca6fe -> :sswitch_13
        0x321d90ce -> :sswitch_12
        0x371db4c1 -> :sswitch_11
        0x4715b939 -> :sswitch_10
        0x4a5a73c1 -> :sswitch_f
        0x50a89222 -> :sswitch_e
        0x52ee0c5a -> :sswitch_d
        0x58363399 -> :sswitch_c
        0x5d3a85ab -> :sswitch_b
        0x6222fc6b -> :sswitch_a
        0x65364134 -> :sswitch_9
        0x65a92c32 -> :sswitch_8
        0x661292b0 -> :sswitch_7
        0x68e2d3e8 -> :sswitch_6
        0x692d6064 -> :sswitch_5
        0x6fdf2587 -> :sswitch_4
        0x7375e0c6 -> :sswitch_3
        0x74600c6f -> :sswitch_2
        0x79cca42b -> :sswitch_1
        0x7d3682a5 -> :sswitch_0
    .end sparse-switch

    :pswitch_data_0
    .packed-switch 0x0
        :pswitch_33
        :pswitch_32
        :pswitch_31
        :pswitch_30
        :pswitch_2f
        :pswitch_2e
        :pswitch_2d
        :pswitch_2c
        :pswitch_2b
        :pswitch_2a
        :pswitch_29
        :pswitch_28
        :pswitch_27
        :pswitch_26
        :pswitch_25
        :pswitch_24
        :pswitch_23
        :pswitch_22
        :pswitch_21
        :pswitch_20
        :pswitch_1f
        :pswitch_1e
        :pswitch_1d
        :pswitch_1c
        :pswitch_1b
        :pswitch_1a
        :pswitch_19
        :pswitch_18
        :pswitch_17
        :pswitch_16
        :pswitch_15
        :pswitch_14
        :pswitch_13
        :pswitch_12
        :pswitch_11
        :pswitch_10
        :pswitch_f
        :pswitch_e
        :pswitch_d
        :pswitch_c
        :pswitch_b
        :pswitch_a
        :pswitch_9
        :pswitch_8
        :pswitch_7
        :pswitch_6
        :pswitch_5
        :pswitch_4
        :pswitch_3
        :pswitch_2
        :pswitch_1
        :pswitch_0
    .end packed-switch
.end method

.method public init(Lorg/json/JSONArray;)Z
    .locals 3

    const/4 v0, 0x0

    .line 196
    :try_start_0
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object p1

    .line 198
    const-string v1, "cordova"

    sput-object v1, Lcom/onesignal/OneSignal;->sdkType:Ljava/lang/String;

    .line 200
    invoke-static {p1}, Lcom/onesignal/OneSignal;->setAppId(Ljava/lang/String;)V

    .line 201
    iget-object p1, p0, Lcom/onesignal/cordova/OneSignalPush;->cordova:Lorg/apache/cordova/CordovaInterface;

    invoke-interface {p1}, Lorg/apache/cordova/CordovaInterface;->getActivity()Landroid/app/Activity;

    move-result-object p1

    invoke-static {p1}, Lcom/onesignal/OneSignal;->initWithContext(Landroid/content/Context;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    const/4 p1, 0x1

    return p1

    :catch_0
    move-exception p1

    .line 205
    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "execute: Got JSON Exception "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1}, Lorg/json/JSONException;->getMessage()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    const-string v1, "OneSignalPush"

    invoke-static {v1, p1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;)I

    return v0
.end method

.method public onDestroy()V
    .locals 1

    const/4 v0, 0x0

    .line 535
    invoke-static {v0}, Lcom/onesignal/OneSignal;->setNotificationOpenedHandler(Lcom/onesignal/OneSignal$OSNotificationOpenedHandler;)V

    .line 536
    invoke-static {v0}, Lcom/onesignal/OneSignal;->setNotificationWillShowInForegroundHandler(Lcom/onesignal/OneSignal$OSNotificationWillShowInForegroundHandler;)V

    return-void
.end method

.method public setInAppMessageClickHandler(Lorg/apache/cordova/CallbackContext;)Z
    .locals 1

    .line 140
    new-instance v0, Lcom/onesignal/cordova/OneSignalPush$CordovaInAppMessageClickHandler;

    invoke-direct {v0, p1}, Lcom/onesignal/cordova/OneSignalPush$CordovaInAppMessageClickHandler;-><init>(Lorg/apache/cordova/CallbackContext;)V

    invoke-static {v0}, Lcom/onesignal/OneSignal;->setInAppMessageClickHandler(Lcom/onesignal/OneSignal$OSInAppMessageClickHandler;)V

    const/4 p1, 0x1

    return p1
.end method

.method public setInAppMessageLifecycleHandler()Z
    .locals 1

    .line 145
    new-instance v0, Lcom/onesignal/cordova/OneSignalPush$1;

    invoke-direct {v0, p0}, Lcom/onesignal/cordova/OneSignalPush$1;-><init>(Lcom/onesignal/cordova/OneSignalPush;)V

    invoke-static {v0}, Lcom/onesignal/OneSignal;->setInAppMessageLifecycleHandler(Lcom/onesignal/OSInAppMessageLifecycleHandler;)V

    const/4 v0, 0x1

    return v0
.end method

.method public setNotificationOpenedHandler(Lorg/apache/cordova/CallbackContext;)Z
    .locals 1

    .line 135
    new-instance v0, Lcom/onesignal/cordova/OneSignalPush$CordovaNotificationOpenHandler;

    invoke-direct {v0, p1}, Lcom/onesignal/cordova/OneSignalPush$CordovaNotificationOpenHandler;-><init>(Lorg/apache/cordova/CallbackContext;)V

    invoke-static {v0}, Lcom/onesignal/OneSignal;->setNotificationOpenedHandler(Lcom/onesignal/OneSignal$OSNotificationOpenedHandler;)V

    const/4 p1, 0x1

    return p1
.end method

.method public setNotificationWillShowInForegroundHandler(Lorg/apache/cordova/CallbackContext;)Z
    .locals 1

    .line 130
    new-instance v0, Lcom/onesignal/cordova/OneSignalPush$CordovaNotificationInForegroundHandler;

    invoke-direct {v0, p1}, Lcom/onesignal/cordova/OneSignalPush$CordovaNotificationInForegroundHandler;-><init>(Lorg/apache/cordova/CallbackContext;)V

    invoke-static {v0}, Lcom/onesignal/OneSignal;->setNotificationWillShowInForegroundHandler(Lcom/onesignal/OneSignal$OSNotificationWillShowInForegroundHandler;)V

    const/4 p1, 0x1

    return p1
.end method

.method public setOnDidDismissInAppMessageHandler(Lorg/apache/cordova/CallbackContext;)Z
    .locals 0

    .line 190
    sput-object p1, Lcom/onesignal/cordova/OneSignalPush;->jsInAppMessageDidDismissCallBack:Lorg/apache/cordova/CallbackContext;

    const/4 p1, 0x1

    return p1
.end method

.method public setOnDidDisplayInAppMessageHandler(Lorg/apache/cordova/CallbackContext;)Z
    .locals 0

    .line 180
    sput-object p1, Lcom/onesignal/cordova/OneSignalPush;->jsInAppMessageDidDisplayCallBack:Lorg/apache/cordova/CallbackContext;

    const/4 p1, 0x1

    return p1
.end method

.method public setOnWillDismissInAppMessageHandler(Lorg/apache/cordova/CallbackContext;)Z
    .locals 0

    .line 185
    sput-object p1, Lcom/onesignal/cordova/OneSignalPush;->jsInAppMessageWillDismissCallback:Lorg/apache/cordova/CallbackContext;

    const/4 p1, 0x1

    return p1
.end method

.method public setOnWillDisplayInAppMessageHandler(Lorg/apache/cordova/CallbackContext;)Z
    .locals 0

    .line 175
    sput-object p1, Lcom/onesignal/cordova/OneSignalPush;->jsInAppMessageWillDisplayCallback:Lorg/apache/cordova/CallbackContext;

    const/4 p1, 0x1

    return p1
.end method
