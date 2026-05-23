.class public Lcom/onesignal/OneSignalRemoteParams;
.super Ljava/lang/Object;
.source "OneSignalRemoteParams.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/OneSignalRemoteParams$Callback;,
        Lcom/onesignal/OneSignalRemoteParams$Params;,
        Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;,
        Lcom/onesignal/OneSignalRemoteParams$FCMParams;
    }
.end annotation


# static fields
.field public static final DEFAULT_INDIRECT_ATTRIBUTION_WINDOW:I = 0x5a0

.field public static final DEFAULT_NOTIFICATION_LIMIT:I = 0xa

.field private static final DIRECT_PARAM:Ljava/lang/String; = "direct"

.field private static final DISABLE_GMS_MISSING_PROMPT:Ljava/lang/String; = "disable_gms_missing_prompt"

.field private static final ENABLED_PARAM:Ljava/lang/String; = "enabled"

.field private static final FCM_API_KEY:Ljava/lang/String; = "api_key"

.field private static final FCM_APP_ID:Ljava/lang/String; = "app_id"

.field private static final FCM_PARENT_PARAM:Ljava/lang/String; = "fcm"

.field private static final FCM_PROJECT_ID:Ljava/lang/String; = "project_id"

.field private static final IAM_ATTRIBUTION_PARAM:Ljava/lang/String; = "in_app_message_attribution"

.field private static final INCREASE_BETWEEN_RETRIES:I = 0x2710

.field private static final INDIRECT_PARAM:Ljava/lang/String; = "indirect"

.field private static final LOCATION_SHARED:Ljava/lang/String; = "location_shared"

.field private static final MAX_WAIT_BETWEEN_RETRIES:I = 0x15f90

.field private static final MIN_WAIT_BETWEEN_RETRIES:I = 0x7530

.field private static final NOTIFICATION_ATTRIBUTION_PARAM:Ljava/lang/String; = "notification_attribution"

.field private static final OUTCOMES_V2_SERVICE_PARAM:Ljava/lang/String; = "v2_enabled"

.field private static final OUTCOME_PARAM:Ljava/lang/String; = "outcomes"

.field private static final REQUIRES_USER_PRIVACY_CONSENT:Ljava/lang/String; = "requires_user_privacy_consent"

.field private static final UNATTRIBUTED_PARAM:Ljava/lang/String; = "unattributed"

.field private static final UNSUBSCRIBE_ON_NOTIFICATION_DISABLE:Ljava/lang/String; = "unsubscribe_on_notifications_disabled"

.field private static androidParamsRetries:I


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 12
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method static synthetic access$000()I
    .locals 1

    .line 12
    sget v0, Lcom/onesignal/OneSignalRemoteParams;->androidParamsRetries:I

    return v0
.end method

.method static synthetic access$008()I
    .locals 2

    .line 12
    sget v0, Lcom/onesignal/OneSignalRemoteParams;->androidParamsRetries:I

    add-int/lit8 v1, v0, 0x1

    sput v1, Lcom/onesignal/OneSignalRemoteParams;->androidParamsRetries:I

    return v0
.end method

.method static synthetic access$100(Ljava/lang/String;Lcom/onesignal/OneSignalRemoteParams$Callback;)V
    .locals 0

    .line 12
    invoke-static {p0, p1}, Lcom/onesignal/OneSignalRemoteParams;->processJson(Ljava/lang/String;Lcom/onesignal/OneSignalRemoteParams$Callback;)V

    return-void
.end method

.method static synthetic access$200(Lorg/json/JSONObject;Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;)V
    .locals 0

    .line 12
    invoke-static {p0, p1}, Lcom/onesignal/OneSignalRemoteParams;->processOutcomeJson(Lorg/json/JSONObject;Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;)V

    return-void
.end method

.method static makeAndroidParamsRequest(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignalRemoteParams$Callback;)V
    .locals 2

    .line 127
    new-instance v0, Lcom/onesignal/OneSignalRemoteParams$1;

    invoke-direct {v0, p0, p1, p2}, Lcom/onesignal/OneSignalRemoteParams$1;-><init>(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OneSignalRemoteParams$Callback;)V

    .line 160
    new-instance p2, Ljava/lang/StringBuilder;

    const-string v1, "apps/"

    invoke-direct {p2, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    const-string p2, "/android_params.js"

    invoke-virtual {p0, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    if-eqz p1, :cond_0

    .line 162
    new-instance p2, Ljava/lang/StringBuilder;

    invoke-direct {p2}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {p2, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    const-string p2, "?player_id="

    invoke-virtual {p0, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    .line 164
    :cond_0
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string p2, "Starting request to get Android parameters."

    invoke-static {p1, p2}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    .line 165
    const-string p1, "CACHE_KEY_REMOTE_PARAMS"

    invoke-static {p0, v0, p1}, Lcom/onesignal/OneSignalRestClient;->get(Ljava/lang/String;Lcom/onesignal/OneSignalRestClient$ResponseHandler;Ljava/lang/String;)V

    return-void
.end method

.method private static processJson(Ljava/lang/String;Lcom/onesignal/OneSignalRemoteParams$Callback;)V
    .locals 2

    .line 171
    :try_start_0
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0, p0}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/lang/NullPointerException; {:try_start_0 .. :try_end_0} :catch_1
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    .line 179
    new-instance p0, Lcom/onesignal/OneSignalRemoteParams$2;

    invoke-direct {p0, v0}, Lcom/onesignal/OneSignalRemoteParams$2;-><init>(Lorg/json/JSONObject;)V

    .line 211
    invoke-interface {p1, p0}, Lcom/onesignal/OneSignalRemoteParams$Callback;->complete(Lcom/onesignal/OneSignalRemoteParams$Params;)V

    return-void

    :catch_0
    move-exception p1

    goto :goto_0

    :catch_1
    move-exception p1

    .line 174
    :goto_0
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->FATAL:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v1, "Error parsing android_params!: "

    invoke-static {v0, v1, p1}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 175
    sget-object p1, Lcom/onesignal/OneSignal$LOG_LEVEL;->FATAL:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Response that errored from android_params!: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-static {p1, p0}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    return-void
.end method

.method private static processOutcomeJson(Lorg/json/JSONObject;Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;)V
    .locals 8

    .line 215
    const-string v0, "v2_enabled"

    invoke-virtual {p0, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 216
    invoke-virtual {p0, v0}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;)Z

    move-result v0

    iput-boolean v0, p1, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->outcomesV2ServiceEnabled:Z

    .line 218
    :cond_0
    const-string v0, "direct"

    invoke-virtual {p0, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    const-string v2, "enabled"

    if-eqz v1, :cond_1

    .line 219
    invoke-virtual {p0, v0}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    .line 220
    invoke-virtual {v0, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;)Z

    move-result v0

    iput-boolean v0, p1, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->directEnabled:Z

    .line 222
    :cond_1
    const-string v0, "indirect"

    invoke-virtual {p0, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_3

    .line 223
    invoke-virtual {p0, v0}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    .line 224
    invoke-virtual {v0, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;)Z

    move-result v1

    iput-boolean v1, p1, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->indirectEnabled:Z

    .line 226
    const-string v1, "notification_attribution"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v3

    const/16 v4, 0xa

    const-string v5, "limit"

    const/16 v6, 0x5a0

    const-string v7, "minutes_since_displayed"

    if-eqz v3, :cond_2

    .line 227
    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v1

    .line 228
    invoke-virtual {v1, v7, v6}, Lorg/json/JSONObject;->optInt(Ljava/lang/String;I)I

    move-result v3

    iput v3, p1, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->indirectNotificationAttributionWindow:I

    .line 229
    invoke-virtual {v1, v5, v4}, Lorg/json/JSONObject;->optInt(Ljava/lang/String;I)I

    move-result v1

    iput v1, p1, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->notificationLimit:I

    .line 232
    :cond_2
    const-string v1, "in_app_message_attribution"

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v3

    if-eqz v3, :cond_3

    .line 233
    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    .line 234
    invoke-virtual {v0, v7, v6}, Lorg/json/JSONObject;->optInt(Ljava/lang/String;I)I

    move-result v1

    iput v1, p1, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->indirectIAMAttributionWindow:I

    .line 235
    invoke-virtual {v0, v5, v4}, Lorg/json/JSONObject;->optInt(Ljava/lang/String;I)I

    move-result v0

    iput v0, p1, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->iamLimit:I

    .line 238
    :cond_3
    const-string v0, "unattributed"

    invoke-virtual {p0, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_4

    .line 239
    invoke-virtual {p0, v0}, Lorg/json/JSONObject;->optJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p0

    .line 240
    invoke-virtual {p0, v2}, Lorg/json/JSONObject;->optBoolean(Ljava/lang/String;)Z

    move-result p0

    iput-boolean p0, p1, Lcom/onesignal/OneSignalRemoteParams$InfluenceParams;->unattributedEnabled:Z

    :cond_4
    return-void
.end method
