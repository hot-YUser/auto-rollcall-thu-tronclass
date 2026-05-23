.class public Lcom/onesignal/cordova/OneSignalController;
.super Ljava/lang/Object;
.source "OneSignalController.java"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 17
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static clearOneSignalNotifications()Z
    .locals 1

    .line 151
    :try_start_0
    invoke-static {}, Lcom/onesignal/OneSignal;->clearOneSignalNotifications()V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    const/4 v0, 0x1

    return v0

    :catchall_0
    move-exception v0

    .line 155
    invoke-virtual {v0}, Ljava/lang/Throwable;->printStackTrace()V

    const/4 v0, 0x0

    return v0
.end method

.method public static deleteTags(Lorg/json/JSONArray;)Z
    .locals 4

    const/4 v0, 0x0

    .line 110
    :try_start_0
    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1}, Ljava/util/ArrayList;-><init>()V

    move v2, v0

    .line 111
    :goto_0
    invoke-virtual {p0}, Lorg/json/JSONArray;->length()I

    move-result v3

    if-ge v2, v3, :cond_0

    .line 112
    invoke-virtual {p0, v2}, Lorg/json/JSONArray;->get(I)Ljava/lang/Object;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-interface {v1, v3}, Ljava/util/Collection;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 113
    :cond_0
    invoke-static {v1}, Lcom/onesignal/OneSignal;->deleteTags(Ljava/util/Collection;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    const/4 p0, 0x1

    return p0

    :catchall_0
    move-exception p0

    .line 116
    invoke-virtual {p0}, Ljava/lang/Throwable;->printStackTrace()V

    return v0
.end method

.method public static disablePush(Lorg/json/JSONArray;)Z
    .locals 1

    const/4 v0, 0x0

    .line 31
    :try_start_0
    invoke-virtual {p0, v0}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result p0

    invoke-static {p0}, Lcom/onesignal/OneSignal;->disablePush(Z)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    const/4 p0, 0x1

    return p0

    :catchall_0
    move-exception p0

    .line 35
    invoke-virtual {p0}, Ljava/lang/Throwable;->printStackTrace()V

    return v0
.end method

.method public static getDeviceState(Lorg/apache/cordova/CallbackContext;)Z
    .locals 1

    .line 23
    invoke-static {}, Lcom/onesignal/OneSignal;->getDeviceState()Lcom/onesignal/OSDeviceState;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 25
    invoke-virtual {v0}, Lcom/onesignal/OSDeviceState;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v0

    invoke-static {p0, v0}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V

    :cond_0
    const/4 p0, 0x1

    return p0
.end method

.method public static getTags(Lorg/apache/cordova/CallbackContext;)Z
    .locals 1

    .line 94
    new-instance v0, Lcom/onesignal/cordova/OneSignalController$$ExternalSyntheticLambda0;

    invoke-direct {v0, p0}, Lcom/onesignal/cordova/OneSignalController$$ExternalSyntheticLambda0;-><init>(Lorg/apache/cordova/CallbackContext;)V

    invoke-static {v0}, Lcom/onesignal/OneSignal;->getTags(Lcom/onesignal/OneSignal$OSGetTagsHandler;)V

    const/4 p0, 0x1

    return p0
.end method

.method public static isLocationShared(Lorg/apache/cordova/CallbackContext;)Z
    .locals 1

    const/4 v0, 0x0

    .line 312
    invoke-static {p0, v0}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccessBoolean(Lorg/apache/cordova/CallbackContext;Z)V

    const/4 p0, 0x1

    return p0
.end method

.method static synthetic lambda$getTags$0(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V
    .locals 0

    .line 94
    invoke-static {p0, p1}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccess(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONObject;)V

    return-void
.end method

.method public static postNotification(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z
    .locals 2

    const/4 v0, 0x0

    .line 126
    :try_start_0
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getJSONObject(I)Lorg/json/JSONObject;

    move-result-object p1

    .line 128
    new-instance v1, Lcom/onesignal/cordova/OneSignalController$2;

    invoke-direct {v1, p0}, Lcom/onesignal/cordova/OneSignalController$2;-><init>(Lorg/apache/cordova/CallbackContext;)V

    invoke-static {p1, v1}, Lcom/onesignal/OneSignal;->postNotification(Lorg/json/JSONObject;Lcom/onesignal/OneSignal$PostNotificationResponseHandler;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    const/4 p0, 0x1

    return p0

    :catchall_0
    move-exception p0

    .line 144
    invoke-virtual {p0}, Ljava/lang/Throwable;->printStackTrace()V

    return v0
.end method

.method public static promptForPushNotificationsWithUserResponse(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z
    .locals 1

    const/4 v0, 0x0

    .line 189
    :try_start_0
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result v0
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 191
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    .line 194
    :goto_0
    new-instance p1, Lcom/onesignal/cordova/OneSignalController$3;

    invoke-direct {p1, p0}, Lcom/onesignal/cordova/OneSignalController$3;-><init>(Lorg/apache/cordova/CallbackContext;)V

    invoke-static {v0, p1}, Lcom/onesignal/OneSignal;->promptForPushNotifications(ZLcom/onesignal/OneSignal$PromptForPushNotificationPermissionResponseHandler;)V

    const/4 p0, 0x1

    return p0
.end method

.method public static promptLocation()V
    .locals 0

    .line 299
    invoke-static {}, Lcom/onesignal/OneSignal;->promptLocation()V

    return-void
.end method

.method public static provideUserConsent(Lorg/json/JSONArray;)Z
    .locals 1

    const/4 v0, 0x0

    .line 245
    :try_start_0
    invoke-virtual {p0, v0}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result p0

    invoke-static {p0}, Lcom/onesignal/OneSignal;->provideUserConsent(Z)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    const/4 p0, 0x1

    return p0

    :catch_0
    move-exception p0

    .line 248
    invoke-virtual {p0}, Lorg/json/JSONException;->printStackTrace()V

    return v0
.end method

.method public static registerForProvisionalAuthorization()Z
    .locals 1

    const/4 v0, 0x1

    return v0
.end method

.method public static removeExternalUserId(Lorg/apache/cordova/CallbackContext;)Z
    .locals 1

    .line 281
    new-instance v0, Lcom/onesignal/cordova/OneSignalController$5;

    invoke-direct {v0, p0}, Lcom/onesignal/cordova/OneSignalController$5;-><init>(Lorg/apache/cordova/CallbackContext;)V

    invoke-static {v0}, Lcom/onesignal/OneSignal;->removeExternalUserId(Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;)V

    const/4 p0, 0x1

    return p0
.end method

.method public static removeGroupedNotifications(Lorg/json/JSONArray;)Z
    .locals 1

    const/4 v0, 0x0

    .line 172
    :try_start_0
    invoke-virtual {p0, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object p0

    invoke-static {p0}, Lcom/onesignal/OneSignal;->removeGroupedNotifications(Ljava/lang/String;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    const/4 p0, 0x1

    return p0

    :catchall_0
    move-exception p0

    .line 175
    invoke-virtual {p0}, Ljava/lang/Throwable;->printStackTrace()V

    return v0
.end method

.method public static removeNotification(Lorg/json/JSONArray;)Z
    .locals 1

    const/4 v0, 0x0

    .line 162
    :try_start_0
    invoke-virtual {p0, v0}, Lorg/json/JSONArray;->getInt(I)I

    move-result p0

    invoke-static {p0}, Lcom/onesignal/OneSignal;->removeNotification(I)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    const/4 p0, 0x1

    return p0

    :catchall_0
    move-exception p0

    .line 165
    invoke-virtual {p0}, Ljava/lang/Throwable;->printStackTrace()V

    return v0
.end method

.method public static requiresUserPrivacyConsent(Lorg/apache/cordova/CallbackContext;)Z
    .locals 1

    .line 228
    invoke-static {}, Lcom/onesignal/OneSignal;->requiresUserPrivacyConsent()Z

    move-result v0

    .line 229
    invoke-static {p0, v0}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccessBoolean(Lorg/apache/cordova/CallbackContext;Z)V

    const/4 p0, 0x1

    return p0
.end method

.method public static sendTags(Lorg/json/JSONArray;)Z
    .locals 1

    const/4 v0, 0x0

    .line 100
    :try_start_0
    invoke-virtual {p0, v0}, Lorg/json/JSONArray;->getJSONObject(I)Lorg/json/JSONObject;

    move-result-object p0

    invoke-static {p0}, Lcom/onesignal/OneSignal;->sendTags(Lorg/json/JSONObject;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    :catchall_0
    move-exception p0

    .line 103
    invoke-virtual {p0}, Ljava/lang/Throwable;->printStackTrace()V

    :goto_0
    const/4 p0, 0x1

    return p0
.end method

.method public static setExternalUserId(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z
    .locals 4

    const/4 v0, 0x0

    .line 259
    :try_start_0
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v1

    const/4 v2, 0x1

    if-le v1, v2, :cond_0

    .line 260
    invoke-virtual {p1, v2}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object v1

    goto :goto_0

    :cond_0
    const/4 v1, 0x0

    .line 262
    :goto_0
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object p1

    new-instance v3, Lcom/onesignal/cordova/OneSignalController$4;

    invoke-direct {v3, p0}, Lcom/onesignal/cordova/OneSignalController$4;-><init>(Lorg/apache/cordova/CallbackContext;)V

    invoke-static {p1, v1, v3}, Lcom/onesignal/OneSignal;->setExternalUserId(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignal$OSExternalUserIdUpdateCompletionHandler;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    return v2

    :catch_0
    move-exception p0

    .line 275
    invoke-virtual {p0}, Lorg/json/JSONException;->printStackTrace()V

    return v0
.end method

.method public static setLanguage(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z
    .locals 2

    const/4 v0, 0x0

    .line 56
    :try_start_0
    invoke-virtual {p1, v0}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object p1

    new-instance v1, Lcom/onesignal/cordova/OneSignalController$1;

    invoke-direct {v1, p0}, Lcom/onesignal/cordova/OneSignalController$1;-><init>(Lorg/apache/cordova/CallbackContext;)V

    invoke-static {p1, v1}, Lcom/onesignal/OneSignal;->setLanguage(Ljava/lang/String;Lcom/onesignal/OneSignal$OSSetLanguageCompletionHandler;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    const/4 p0, 0x1

    return p0

    :catchall_0
    move-exception p0

    .line 84
    invoke-virtual {p0}, Ljava/lang/Throwable;->printStackTrace()V

    return v0
.end method

.method public static setLaunchURLsInApp()Z
    .locals 1

    const/4 v0, 0x1

    return v0
.end method

.method public static setLocationShared(Lorg/json/JSONArray;)V
    .locals 1

    const/4 v0, 0x0

    .line 304
    :try_start_0
    invoke-virtual {p0, v0}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result p0

    invoke-static {p0}, Lcom/onesignal/OneSignal;->setLocationShared(Z)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p0

    .line 306
    invoke-virtual {p0}, Lorg/json/JSONException;->printStackTrace()V

    :goto_0
    return-void
.end method

.method public static setLogLevel(Lorg/json/JSONArray;)V
    .locals 2

    const/4 v0, 0x0

    .line 45
    :try_start_0
    invoke-virtual {p0, v0}, Lorg/json/JSONArray;->getInt(I)I

    move-result v0

    const/4 v1, 0x1

    .line 46
    invoke-virtual {p0, v1}, Lorg/json/JSONArray;->getInt(I)I

    move-result p0

    .line 47
    invoke-static {v0, p0}, Lcom/onesignal/OneSignal;->setLogLevel(II)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    goto :goto_0

    :catchall_0
    move-exception p0

    .line 49
    invoke-virtual {p0}, Ljava/lang/Throwable;->printStackTrace()V

    :goto_0
    return-void
.end method

.method public static setRequiresConsent(Lorg/apache/cordova/CallbackContext;Lorg/json/JSONArray;)Z
    .locals 0

    const/4 p0, 0x0

    .line 235
    :try_start_0
    invoke-virtual {p1, p0}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result p1

    invoke-static {p1}, Lcom/onesignal/OneSignal;->setRequiresUserPrivacyConsent(Z)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    const/4 p0, 0x1

    return p0

    :catch_0
    move-exception p1

    .line 238
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    return p0
.end method

.method public static unsubscribeWhenNotificationsAreDisabled(Lorg/json/JSONArray;)Z
    .locals 1

    const/4 v0, 0x0

    .line 210
    :try_start_0
    invoke-virtual {p0, v0}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result p0

    invoke-static {p0}, Lcom/onesignal/OneSignal;->unsubscribeWhenNotificationsAreDisabled(Z)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    const/4 p0, 0x1

    return p0

    :catch_0
    move-exception p0

    .line 213
    invoke-virtual {p0}, Lorg/json/JSONException;->printStackTrace()V

    return v0
.end method

.method public static userProvidedConsent(Lorg/apache/cordova/CallbackContext;)Z
    .locals 1

    .line 222
    invoke-static {}, Lcom/onesignal/OneSignal;->userProvidedPrivacyConsent()Z

    move-result v0

    .line 223
    invoke-static {p0, v0}, Lcom/onesignal/cordova/CallbackHelper;->callbackSuccessBoolean(Lorg/apache/cordova/CallbackContext;Z)V

    const/4 p0, 0x1

    return p0
.end method
