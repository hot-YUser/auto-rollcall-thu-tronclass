.class Lcom/onesignal/OneSignalRemoteParams$2;
.super Lcom/onesignal/OneSignalRemoteParams$Params;
.source "OneSignalRemoteParams.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/onesignal/OneSignalRemoteParams;->processJson(Ljava/lang/String;Lcom/onesignal/OneSignalRemoteParams$Callback;)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field final synthetic val$responseJson:Lorg/json/JSONObject;


# direct methods
.method constructor <init>(Lorg/json/JSONObject;)V
    .locals 5

    .line 179
    iput-object p1, p0, Lcom/onesignal/OneSignalRemoteParams$2;->val$responseJson:Lorg/json/JSONObject;

    invoke-direct {p0}, Lcom/onesignal/OneSignalRemoteParams$Params;-><init>()V

    .line 180
    const-string v0, "enterp"

    const/4 v1, 0x0

    invoke-virtual {p1, v0, v1}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    iput-boolean v0, p0, Lcom/onesignal/OneSignalRemoteParams$2;->enterprise:Z

    .line 181
    const-string v0, "require_email_auth"

    invoke-virtual {p1, v0, v1}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    iput-boolean v0, p0, Lcom/onesignal/OneSignalRemoteParams$2;->useEmailAuth:Z

    .line 182
    const-string v0, "require_user_id_auth"

    invoke-virtual {p1, v0, v1}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    iput-boolean v0, p0, Lcom/onesignal/OneSignalRemoteParams$2;->useUserIdAuth:Z

    .line 183
    const-string v0, "chnl_lst"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->optJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/OneSignalRemoteParams$2;->notificationChannels:Lorg/json/JSONArray;

    .line 184
    const-string v0, "fba"

    invoke-virtual {p1, v0, v1}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    iput-boolean v0, p0, Lcom/onesignal/OneSignalRemoteParams$2;->firebaseAnalytics:Z

    .line 185
    const-string v0, "restore_ttl_filter"

    const/4 v2, 0x1

    invoke-virtual {p1, v0, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    iput-boolean v0, p0, Lcom/onesignal/OneSignalRemoteParams$2;->restoreTTLFilter:Z

    .line 186
    const-string v0, "android_sender_id"

    const/4 v3, 0x0

    invoke-virtual {p1, v0, v3}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/OneSignalRemoteParams$2;->googleProjectNumber:Ljava/lang/String;

    .line 187
    const-string v0, "clear_group_on_summary_click"

    invoke-virtual {p1, v0, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    iput-boolean v0, p0, Lcom/onesignal/OneSignalRemoteParams$2;->clearGroupOnSummaryClick:Z

    .line 188
    const-string v0, "receive_receipts_enable"

    invoke-virtual {p1, v0, v1}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    iput-boolean v0, p0, Lcom/onesignal/OneSignalRemoteParams$2;->receiveReceiptEnabled:Z

    .line 192
    const-string v0, "disable_gms_missing_prompt"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v4

    if-nez v4, :cond_0

    move-object v0, v3

    goto :goto_0

    :cond_0
    invoke-virtual {p1, v0, v1}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    :goto_0
    iput-object v0, p0, Lcom/onesignal/OneSignalRemoteParams$2;->disableGMSMissingPrompt:Ljava/lang/Boolean;

    .line 193
    const-string v0, "unsubscribe_on_notifications_disabled"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v4

    if-nez v4, :cond_1

    move-object v0, v3

    goto :goto_1

    :cond_1
    invoke-virtual {p1, v0, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    :goto_1
    iput-object v0, p0, Lcom/onesignal/OneSignalRemoteParams$2;->unsubscribeWhenNotificationsDisabled:Ljava/lang/Boolean;

    .line 194
    const-string v0, "location_shared"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v4

    if-nez v4, :cond_2

    move-object v0, v3

    goto :goto_2

    :cond_2
    invoke-virtual {p1, v0, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    :goto_2
    iput-object v0, p0, Lcom/onesignal/OneSignalRemoteParams$2;->locationShared:Ljava/lang/Boolean;

    .line 195
    const-string v0, "requires_user_privacy_consent"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v2

    if-nez v2, :cond_3

    move-object v0, v3

    goto :goto_3

    :cond_3
    invoke-virtual {p1, v0, v1}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;Z)Z

    move-result v0

    invoke-static {v0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v0

    :goto_3
    iput-object v0, p0, Lcom/onesignal/OneSignalRemoteParams$2;->requiresUserPrivacyConsent:Ljava/lang/Boolean;

    .line 197
    new-instance v0, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;

    invoke-direct {v0}, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;-><init>()V

    iput-object v0, p0, Lcom/onesignal/OneSignalRemoteParams$2;->influenceParams:Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;

    .line 199
    const-string v0, "outcomes"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_4

    .line 200
    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OneSignalRemoteParams$2;->influenceParams:Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;

    invoke-static {v0, v1}, Lcom/onesignal/OneSignalRemoteParams;->access$200(Lorg/json/JSONObject;Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;)V

    .line 202
    :cond_4
    new-instance v0, Lcom/onesignal/OneSignalRemoteParams$FCMParams;

    invoke-direct {v0}, Lcom/onesignal/OneSignalRemoteParams$FCMParams;-><init>()V

    iput-object v0, p0, Lcom/onesignal/OneSignalRemoteParams$2;->fcmParams:Lcom/onesignal/OneSignalRemoteParams$FCMParams;

    .line 203
    const-string v0, "fcm"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_5

    .line 204
    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p1

    .line 205
    iget-object v0, p0, Lcom/onesignal/OneSignalRemoteParams$2;->fcmParams:Lcom/onesignal/OneSignalRemoteParams$FCMParams;

    const-string v1, "api_key"

    invoke-virtual {p1, v1, v3}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    iput-object v1, v0, Lcom/onesignal/OneSignalRemoteParams$FCMParams;->apiKey:Ljava/lang/String;

    .line 206
    iget-object v0, p0, Lcom/onesignal/OneSignalRemoteParams$2;->fcmParams:Lcom/onesignal/OneSignalRemoteParams$FCMParams;

    const-string v1, "app_id"

    invoke-virtual {p1, v1, v3}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    iput-object v1, v0, Lcom/onesignal/OneSignalRemoteParams$FCMParams;->appId:Ljava/lang/String;

    .line 207
    iget-object v0, p0, Lcom/onesignal/OneSignalRemoteParams$2;->fcmParams:Lcom/onesignal/OneSignalRemoteParams$FCMParams;

    const-string v1, "project_id"

    invoke-virtual {p1, v1, v3}, Lorg/json/JSONObject;->optString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    iput-object p1, v0, Lcom/onesignal/OneSignalRemoteParams$FCMParams;->projectId:Ljava/lang/String;

    :cond_5
    return-void
.end method
