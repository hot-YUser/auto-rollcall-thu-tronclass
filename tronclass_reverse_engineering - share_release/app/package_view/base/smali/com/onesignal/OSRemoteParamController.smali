.class Lcom/onesignal/OSRemoteParamController;
.super Ljava/lang/Object;
.source "OSRemoteParamController.java"


# instance fields
.field private remoteParams:Lcom/onesignal/OneSignalRemoteParams$Params;


# direct methods
.method constructor <init>()V
    .locals 1

    .line 9
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 7
    iput-object v0, p0, Lcom/onesignal/OSRemoteParamController;->remoteParams:Lcom/onesignal/OneSignalRemoteParams$Params;

    return-void
.end method

.method private saveReceiveReceiptEnabled(Z)V
    .locals 2

    .line 94
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "PREFS_OS_RECEIVE_RECEIPTS_ENABLED"

    invoke-static {v0, v1, p1}, Lcom/onesignal/OneSignalPrefs;->saveBool(Ljava/lang/String;Ljava/lang/String;Z)V

    return-void
.end method

.method private saveRestoreTTLFilter(Z)V
    .locals 2

    .line 82
    sget-object p1, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    iget-object v0, p0, Lcom/onesignal/OSRemoteParamController;->remoteParams:Lcom/onesignal/OneSignalRemoteParams$Params;

    iget-boolean v0, v0, Lcom/onesignal/OneSignalRemoteParams$Params;->restoreTTLFilter:Z

    const-string v1, "OS_RESTORE_TTL_FILTER"

    invoke-static {p1, v1, v0}, Lcom/onesignal/OneSignalPrefs;->saveBool(Ljava/lang/String;Ljava/lang/String;Z)V

    return-void
.end method


# virtual methods
.method clearRemoteParams()V
    .locals 1

    const/4 v0, 0x0

    .line 78
    iput-object v0, p0, Lcom/onesignal/OSRemoteParamController;->remoteParams:Lcom/onesignal/OneSignalRemoteParams$Params;

    return-void
.end method

.method getClearGroupSummaryClick()Z
    .locals 3

    .line 117
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "OS_CLEAR_GROUP_SUMMARY_CLICK"

    const/4 v2, 0x1

    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignalPrefs;->getBool(Ljava/lang/String;Ljava/lang/String;Z)Z

    move-result v0

    return v0
.end method

.method getFirebaseAnalyticsEnabled()Z
    .locals 3

    .line 110
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "GT_FIREBASE_TRACKING_ENABLED"

    const/4 v2, 0x0

    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignalPrefs;->getBool(Ljava/lang/String;Ljava/lang/String;Z)Z

    move-result v0

    return v0
.end method

.method getRemoteParams()Lcom/onesignal/OneSignalRemoteParams$Params;
    .locals 1

    .line 58
    iget-object v0, p0, Lcom/onesignal/OSRemoteParamController;->remoteParams:Lcom/onesignal/OneSignalRemoteParams$Params;

    return-object v0
.end method

.method getSavedUserConsentStatus()Z
    .locals 3

    .line 182
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "ONESIGNAL_USER_PROVIDED_CONSENT"

    const/4 v2, 0x0

    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignalPrefs;->getBool(Ljava/lang/String;Ljava/lang/String;Z)Z

    move-result v0

    return v0
.end method

.method hasDisableGMSMissingPromptKey()Z
    .locals 1

    .line 62
    iget-object v0, p0, Lcom/onesignal/OSRemoteParamController;->remoteParams:Lcom/onesignal/OneSignalRemoteParams$Params;

    if-eqz v0, :cond_0

    iget-object v0, v0, Lcom/onesignal/OneSignalRemoteParams$Params;->disableGMSMissingPrompt:Ljava/lang/Boolean;

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method hasLocationKey()Z
    .locals 1

    .line 66
    iget-object v0, p0, Lcom/onesignal/OSRemoteParamController;->remoteParams:Lcom/onesignal/OneSignalRemoteParams$Params;

    if-eqz v0, :cond_0

    iget-object v0, v0, Lcom/onesignal/OneSignalRemoteParams$Params;->locationShared:Ljava/lang/Boolean;

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method hasPrivacyConsentKey()Z
    .locals 1

    .line 70
    iget-object v0, p0, Lcom/onesignal/OSRemoteParamController;->remoteParams:Lcom/onesignal/OneSignalRemoteParams$Params;

    if-eqz v0, :cond_0

    iget-object v0, v0, Lcom/onesignal/OneSignalRemoteParams$Params;->requiresUserPrivacyConsent:Ljava/lang/Boolean;

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method hasUnsubscribeNotificationKey()Z
    .locals 1

    .line 74
    iget-object v0, p0, Lcom/onesignal/OSRemoteParamController;->remoteParams:Lcom/onesignal/OneSignalRemoteParams$Params;

    if-eqz v0, :cond_0

    iget-object v0, v0, Lcom/onesignal/OneSignalRemoteParams$Params;->unsubscribeWhenNotificationsDisabled:Ljava/lang/Boolean;

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method isGMSMissingPromptDisable()Z
    .locals 3

    .line 139
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "PREFS_OS_DISABLE_GMS_MISSING_PROMPT"

    const/4 v2, 0x0

    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignalPrefs;->getBool(Ljava/lang/String;Ljava/lang/String;Z)Z

    move-result v0

    return v0
.end method

.method isLocationShared()Z
    .locals 3

    .line 154
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "PREFS_OS_LOCATION_SHARED"

    const/4 v2, 0x1

    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignalPrefs;->getBool(Ljava/lang/String;Ljava/lang/String;Z)Z

    move-result v0

    return v0
.end method

.method isPrivacyConsentRequired()Z
    .locals 3

    .line 168
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "PREFS_OS_REQUIRES_USER_PRIVACY_CONSENT"

    const/4 v2, 0x0

    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignalPrefs;->getBool(Ljava/lang/String;Ljava/lang/String;Z)Z

    move-result v0

    return v0
.end method

.method isReceiveReceiptEnabled()Z
    .locals 3

    .line 102
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "PREFS_OS_RECEIVE_RECEIPTS_ENABLED"

    const/4 v2, 0x0

    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignalPrefs;->getBool(Ljava/lang/String;Ljava/lang/String;Z)Z

    move-result v0

    return v0
.end method

.method isRemoteParamsCallDone()Z
    .locals 1

    .line 54
    iget-object v0, p0, Lcom/onesignal/OSRemoteParamController;->remoteParams:Lcom/onesignal/OneSignalRemoteParams$Params;

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method isRestoreTTLFilterActive()Z
    .locals 3

    .line 90
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "OS_RESTORE_TTL_FILTER"

    const/4 v2, 0x1

    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignalPrefs;->getBool(Ljava/lang/String;Ljava/lang/String;Z)Z

    move-result v0

    return v0
.end method

.method saveGMSMissingPromptDisable(Z)V
    .locals 2

    .line 146
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "PREFS_OS_DISABLE_GMS_MISSING_PROMPT"

    invoke-static {v0, v1, p1}, Lcom/onesignal/OneSignalPrefs;->saveBool(Ljava/lang/String;Ljava/lang/String;Z)V

    return-void
.end method

.method saveLocationShared(Z)V
    .locals 2

    .line 161
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "PREFS_OS_LOCATION_SHARED"

    invoke-static {v0, v1, p1}, Lcom/onesignal/OneSignalPrefs;->saveBool(Ljava/lang/String;Ljava/lang/String;Z)V

    return-void
.end method

.method savePrivacyConsentRequired(Z)V
    .locals 2

    .line 175
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "PREFS_OS_REQUIRES_USER_PRIVACY_CONSENT"

    invoke-static {v0, v1, p1}, Lcom/onesignal/OneSignalPrefs;->saveBool(Ljava/lang/String;Ljava/lang/String;Z)V

    return-void
.end method

.method saveRemoteParams(Lcom/onesignal/OneSignalRemoteParams$Params;Lcom/onesignal/influence/data/OSTrackerFactory;Lcom/onesignal/OSSharedPreferences;Lcom/onesignal/OSLogger;)V
    .locals 3

    .line 19
    iput-object p1, p0, Lcom/onesignal/OSRemoteParamController;->remoteParams:Lcom/onesignal/OneSignalRemoteParams$Params;

    .line 21
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "GT_FIREBASE_TRACKING_ENABLED"

    iget-boolean v2, p1, Lcom/onesignal/OneSignalRemoteParams$Params;->firebaseAnalytics:Z

    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignalPrefs;->saveBool(Ljava/lang/String;Ljava/lang/String;Z)V

    .line 26
    iget-boolean v0, p1, Lcom/onesignal/OneSignalRemoteParams$Params;->restoreTTLFilter:Z

    invoke-direct {p0, v0}, Lcom/onesignal/OSRemoteParamController;->saveRestoreTTLFilter(Z)V

    .line 27
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "OS_CLEAR_GROUP_SUMMARY_CLICK"

    iget-boolean v2, p1, Lcom/onesignal/OneSignalRemoteParams$Params;->clearGroupOnSummaryClick:Z

    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignalPrefs;->saveBool(Ljava/lang/String;Ljava/lang/String;Z)V

    .line 32
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    .line 34
    invoke-interface {p3}, Lcom/onesignal/OSSharedPreferences;->getOutcomesV2KeyName()Ljava/lang/String;

    move-result-object p3

    iget-object v1, p1, Lcom/onesignal/OneSignalRemoteParams$Params;->influenceParams:Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;

    iget-boolean v1, v1, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->outcomesV2ServiceEnabled:Z

    .line 32
    invoke-static {v0, p3, v1}, Lcom/onesignal/OneSignalPrefs;->saveBool(Ljava/lang/String;Ljava/lang/String;Z)V

    .line 38
    iget-boolean p3, p1, Lcom/onesignal/OneSignalRemoteParams$Params;->receiveReceiptEnabled:Z

    invoke-direct {p0, p3}, Lcom/onesignal/OSRemoteParamController;->saveReceiveReceiptEnabled(Z)V

    .line 40
    new-instance p3, Ljava/lang/StringBuilder;

    const-string v0, "OneSignal saveInfluenceParams: "

    invoke-direct {p3, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v0, p1, Lcom/onesignal/OneSignalRemoteParams$Params;->influenceParams:Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;

    invoke-virtual {v0}, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p3

    invoke-virtual {p3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p3

    invoke-interface {p4, p3}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    .line 41
    iget-object p3, p1, Lcom/onesignal/OneSignalRemoteParams$Params;->influenceParams:Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;

    invoke-virtual {p2, p3}, Lcom/onesignal/influence/data/OSTrackerFactory;->saveInfluenceParams(Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;)V

    .line 43
    iget-object p2, p1, Lcom/onesignal/OneSignalRemoteParams$Params;->disableGMSMissingPrompt:Ljava/lang/Boolean;

    if-eqz p2, :cond_0

    .line 44
    iget-object p2, p1, Lcom/onesignal/OneSignalRemoteParams$Params;->disableGMSMissingPrompt:Ljava/lang/Boolean;

    invoke-virtual {p2}, Ljava/lang/Boolean;->booleanValue()Z

    move-result p2

    invoke-virtual {p0, p2}, Lcom/onesignal/OSRemoteParamController;->saveGMSMissingPromptDisable(Z)V

    .line 45
    :cond_0
    iget-object p2, p1, Lcom/onesignal/OneSignalRemoteParams$Params;->unsubscribeWhenNotificationsDisabled:Ljava/lang/Boolean;

    if-eqz p2, :cond_1

    .line 46
    iget-object p2, p1, Lcom/onesignal/OneSignalRemoteParams$Params;->unsubscribeWhenNotificationsDisabled:Ljava/lang/Boolean;

    invoke-virtual {p2}, Ljava/lang/Boolean;->booleanValue()Z

    move-result p2

    invoke-virtual {p0, p2}, Lcom/onesignal/OSRemoteParamController;->saveUnsubscribeWhenNotificationsAreDisabled(Z)V

    .line 47
    :cond_1
    iget-object p2, p1, Lcom/onesignal/OneSignalRemoteParams$Params;->locationShared:Ljava/lang/Boolean;

    if-eqz p2, :cond_2

    .line 48
    iget-object p2, p1, Lcom/onesignal/OneSignalRemoteParams$Params;->locationShared:Ljava/lang/Boolean;

    invoke-virtual {p2}, Ljava/lang/Boolean;->booleanValue()Z

    move-result p2

    invoke-static {p2}, Lcom/onesignal/OneSignal;->startLocationShared(Z)V

    .line 49
    :cond_2
    iget-object p2, p1, Lcom/onesignal/OneSignalRemoteParams$Params;->requiresUserPrivacyConsent:Ljava/lang/Boolean;

    if-eqz p2, :cond_3

    .line 50
    iget-object p1, p1, Lcom/onesignal/OneSignalRemoteParams$Params;->requiresUserPrivacyConsent:Ljava/lang/Boolean;

    invoke-virtual {p1}, Ljava/lang/Boolean;->booleanValue()Z

    move-result p1

    invoke-virtual {p0, p1}, Lcom/onesignal/OSRemoteParamController;->savePrivacyConsentRequired(Z)V

    :cond_3
    return-void
.end method

.method saveUnsubscribeWhenNotificationsAreDisabled(Z)V
    .locals 2

    .line 131
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "PREFS_OS_UNSUBSCRIBE_WHEN_NOTIFICATIONS_DISABLED"

    invoke-static {v0, v1, p1}, Lcom/onesignal/OneSignalPrefs;->saveBool(Ljava/lang/String;Ljava/lang/String;Z)V

    return-void
.end method

.method saveUserConsentStatus(Z)V
    .locals 2

    .line 189
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "ONESIGNAL_USER_PROVIDED_CONSENT"

    invoke-static {v0, v1, p1}, Lcom/onesignal/OneSignalPrefs;->saveBool(Ljava/lang/String;Ljava/lang/String;Z)V

    return-void
.end method

.method unsubscribeWhenNotificationsAreDisabled()Z
    .locals 3

    .line 124
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "PREFS_OS_UNSUBSCRIBE_WHEN_NOTIFICATIONS_DISABLED"

    const/4 v2, 0x1

    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignalPrefs;->getBool(Ljava/lang/String;Ljava/lang/String;Z)Z

    move-result v0

    return v0
.end method
