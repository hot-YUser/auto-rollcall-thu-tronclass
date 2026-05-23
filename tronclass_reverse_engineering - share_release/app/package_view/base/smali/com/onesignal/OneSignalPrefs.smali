.class Lcom/onesignal/OneSignalPrefs;
.super Ljava/lang/Object;
.source "OneSignalPrefs.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;
    }
.end annotation


# static fields
.field static final PREFS_EXISTING_PURCHASES:Ljava/lang/String; = "ExistingPurchases"

.field public static final PREFS_GT_APP_ID:Ljava/lang/String; = "GT_APP_ID"

.field public static final PREFS_GT_DO_NOT_SHOW_MISSING_GPS:Ljava/lang/String; = "GT_DO_NOT_SHOW_MISSING_GPS"

.field public static final PREFS_GT_FIREBASE_TRACKING_ENABLED:Ljava/lang/String; = "GT_FIREBASE_TRACKING_ENABLED"

.field public static final PREFS_GT_PLAYER_ID:Ljava/lang/String; = "GT_PLAYER_ID"

.field public static final PREFS_GT_REGISTRATION_ID:Ljava/lang/String; = "GT_REGISTRATION_ID"

.field public static final PREFS_GT_SOUND_ENABLED:Ljava/lang/String; = "GT_SOUND_ENABLED"

.field public static final PREFS_GT_UNSENT_ACTIVE_TIME:Ljava/lang/String; = "GT_UNSENT_ACTIVE_TIME"

.field public static final PREFS_GT_VIBRATE_ENABLED:Ljava/lang/String; = "GT_VIBRATE_ENABLED"

.field public static final PREFS_ONESIGNAL:Ljava/lang/String;

.field public static final PREFS_ONESIGNAL_ACCEPTED_NOTIFICATION_LAST:Ljava/lang/String; = "ONESIGNAL_ACCEPTED_NOTIFICATION_LAST"

.field public static final PREFS_ONESIGNAL_EMAIL_ADDRESS_LAST:Ljava/lang/String; = "PREFS_ONESIGNAL_EMAIL_ADDRESS_LAST"

.field public static final PREFS_ONESIGNAL_EMAIL_ID_LAST:Ljava/lang/String; = "PREFS_ONESIGNAL_EMAIL_ID_LAST"

.field public static final PREFS_ONESIGNAL_PERMISSION_ACCEPTED_LAST:Ljava/lang/String; = "ONESIGNAL_PERMISSION_ACCEPTED_LAST"

.field public static final PREFS_ONESIGNAL_PLAYER_ID_LAST:Ljava/lang/String; = "ONESIGNAL_PLAYER_ID_LAST"

.field public static final PREFS_ONESIGNAL_PUSH_TOKEN_LAST:Ljava/lang/String; = "ONESIGNAL_PUSH_TOKEN_LAST"

.field public static final PREFS_ONESIGNAL_SUBSCRIPTION:Ljava/lang/String; = "ONESIGNAL_SUBSCRIPTION"

.field public static final PREFS_ONESIGNAL_SUBSCRIPTION_LAST:Ljava/lang/String; = "ONESIGNAL_SUBSCRIPTION_LAST"

.field public static final PREFS_ONESIGNAL_SYNCED_SUBSCRIPTION:Ljava/lang/String; = "ONESIGNAL_SYNCED_SUBSCRIPTION"

.field public static final PREFS_ONESIGNAL_USERSTATE_DEPENDVALYES_:Ljava/lang/String; = "ONESIGNAL_USERSTATE_DEPENDVALYES_"

.field public static final PREFS_ONESIGNAL_USERSTATE_SYNCVALYES_:Ljava/lang/String; = "ONESIGNAL_USERSTATE_SYNCVALYES_"

.field public static final PREFS_ONESIGNAL_USER_PROVIDED_CONSENT:Ljava/lang/String; = "ONESIGNAL_USER_PROVIDED_CONSENT"

.field public static final PREFS_OS_ATTRIBUTED_INFLUENCES:Ljava/lang/String; = "PREFS_OS_ATTRIBUTED_INFLUENCES"

.field public static final PREFS_OS_CACHED_IAMS:Ljava/lang/String; = "PREFS_OS_CACHED_IAMS"

.field public static final PREFS_OS_CLEAR_GROUP_SUMMARY_CLICK:Ljava/lang/String; = "OS_CLEAR_GROUP_SUMMARY_CLICK"

.field public static final PREFS_OS_CLICKED_CLICK_IDS_IAMS:Ljava/lang/String; = "PREFS_OS_CLICKED_CLICK_IDS_IAMS"

.field public static final PREFS_OS_DISABLE_GMS_MISSING_PROMPT:Ljava/lang/String; = "PREFS_OS_DISABLE_GMS_MISSING_PROMPT"

.field public static final PREFS_OS_DISMISSED_IAMS:Ljava/lang/String; = "PREFS_OS_DISPLAYED_IAMS"

.field public static final PREFS_OS_EMAIL_ID:Ljava/lang/String; = "OS_EMAIL_ID"

.field public static final PREFS_OS_ETAG_PREFIX:Ljava/lang/String; = "PREFS_OS_ETAG_PREFIX_"

.field public static final PREFS_OS_FILTER_OTHER_GCM_RECEIVERS:Ljava/lang/String; = "OS_FILTER_OTHER_GCM_RECEIVERS"

.field public static final PREFS_OS_HTTP_CACHE_PREFIX:Ljava/lang/String; = "PREFS_OS_HTTP_CACHE_PREFIX_"

.field public static final PREFS_OS_IMPRESSIONED_IAMS:Ljava/lang/String; = "PREFS_OS_IMPRESSIONED_IAMS"

.field public static final PREFS_OS_LAST_LOCATION_TIME:Ljava/lang/String; = "OS_LAST_LOCATION_TIME"

.field public static final PREFS_OS_LAST_SESSION_TIME:Ljava/lang/String; = "OS_LAST_SESSION_TIME"

.field public static final PREFS_OS_LAST_TIME_IAM_DISMISSED:Ljava/lang/String; = "PREFS_OS_LAST_TIME_IAM_DISMISSED"

.field public static final PREFS_OS_LOCATION_SHARED:Ljava/lang/String; = "PREFS_OS_LOCATION_SHARED"

.field static final PREFS_OS_OUTCOMES_V2:Ljava/lang/String; = "PREFS_OS_OUTCOMES_V2"

.field public static final PREFS_OS_PAGE_IMPRESSIONED_IAMS:Ljava/lang/String; = "PREFS_OS_PAGE_IMPRESSIONED_IAMS"

.field public static final PREFS_OS_RECEIVE_RECEIPTS_ENABLED:Ljava/lang/String; = "PREFS_OS_RECEIVE_RECEIPTS_ENABLED"

.field public static final PREFS_OS_REQUIRES_USER_PRIVACY_CONSENT:Ljava/lang/String; = "PREFS_OS_REQUIRES_USER_PRIVACY_CONSENT"

.field public static final PREFS_OS_RESTORE_TTL_FILTER:Ljava/lang/String; = "OS_RESTORE_TTL_FILTER"

.field public static final PREFS_OS_SMS_ID:Ljava/lang/String; = "PREFS_OS_SMS_ID"

.field public static final PREFS_OS_SMS_ID_LAST:Ljava/lang/String; = "PREFS_OS_SMS_ID_LAST"

.field public static final PREFS_OS_SMS_NUMBER_LAST:Ljava/lang/String; = "PREFS_OS_SMS_NUMBER_LAST"

.field public static final PREFS_OS_UNSENT_ATTRIBUTED_ACTIVE_TIME:Ljava/lang/String; = "OS_UNSENT_ATTRIBUTED_ACTIVE_TIME"

.field public static final PREFS_OS_UNSUBSCRIBE_WHEN_NOTIFICATIONS_DISABLED:Ljava/lang/String; = "PREFS_OS_UNSUBSCRIBE_WHEN_NOTIFICATIONS_DISABLED"

.field public static final PREFS_PLAYER_PURCHASES:Ljava/lang/String; = "GTPlayerPurchases"

.field static final PREFS_PURCHASE_TOKENS:Ljava/lang/String; = "purchaseTokens"

.field public static final PREFS_TRIGGERS:Ljava/lang/String; = "OneSignalTriggers"

.field public static prefsHandler:Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;

.field static prefsToApply:Ljava/util/HashMap;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/HashMap<",
            "Ljava/lang/String;",
            "Ljava/util/HashMap<",
            "Ljava/lang/String;",
            "Ljava/lang/Object;",
            ">;>;"
        }
    .end annotation
.end field


# direct methods
.method static constructor <clinit>()V
    .locals 1

    .line 59
    const-class v0, Lcom/onesignal/OneSignal;

    const-string v0, "OneSignal"

    sput-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    .line 127
    invoke-static {}, Lcom/onesignal/OneSignalPrefs;->initializePool()V

    return-void
.end method

.method constructor <init>()V
    .locals 0

    .line 41
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method private static get(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Class;Ljava/lang/Object;)Ljava/lang/Object;
    .locals 3

    .line 291
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->prefsToApply:Ljava/util/HashMap;

    invoke-virtual {v0, p0}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/util/HashMap;

    .line 293
    monitor-enter v0

    .line 294
    :try_start_0
    const-class v1, Ljava/lang/Object;

    invoke-virtual {p2, v1}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_0

    invoke-virtual {v0, p1}, Ljava/util/HashMap;->containsKey(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_0

    const/4 p0, 0x1

    .line 295
    invoke-static {p0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object p0

    monitor-exit v0

    return-object p0

    .line 297
    :cond_0
    invoke-virtual {v0, p1}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    if-nez v1, :cond_9

    .line 298
    invoke-virtual {v0, p1}, Ljava/util/HashMap;->containsKey(Ljava/lang/Object;)Z

    move-result v2

    if-eqz v2, :cond_1

    goto/16 :goto_0

    .line 300
    :cond_1
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 302
    invoke-static {p0}, Lcom/onesignal/OneSignalPrefs;->getSharedPrefsByName(Ljava/lang/String;)Landroid/content/SharedPreferences;

    move-result-object p0

    if-eqz p0, :cond_8

    .line 304
    const-class v0, Ljava/lang/String;

    invoke-virtual {p2, v0}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_2

    .line 305
    check-cast p3, Ljava/lang/String;

    invoke-interface {p0, p1, p3}, Landroid/content/SharedPreferences;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    return-object p0

    .line 306
    :cond_2
    const-class v0, Ljava/lang/Boolean;

    invoke-virtual {p2, v0}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_3

    .line 307
    check-cast p3, Ljava/lang/Boolean;

    invoke-virtual {p3}, Ljava/lang/Boolean;->booleanValue()Z

    move-result p2

    invoke-interface {p0, p1, p2}, Landroid/content/SharedPreferences;->getBoolean(Ljava/lang/String;Z)Z

    move-result p0

    invoke-static {p0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object p0

    return-object p0

    .line 308
    :cond_3
    const-class v0, Ljava/lang/Integer;

    invoke-virtual {p2, v0}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_4

    .line 309
    check-cast p3, Ljava/lang/Integer;

    invoke-virtual {p3}, Ljava/lang/Integer;->intValue()I

    move-result p2

    invoke-interface {p0, p1, p2}, Landroid/content/SharedPreferences;->getInt(Ljava/lang/String;I)I

    move-result p0

    invoke-static {p0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p0

    return-object p0

    .line 310
    :cond_4
    const-class v0, Ljava/lang/Long;

    invoke-virtual {p2, v0}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_5

    .line 311
    check-cast p3, Ljava/lang/Long;

    invoke-virtual {p3}, Ljava/lang/Long;->longValue()J

    move-result-wide p2

    invoke-interface {p0, p1, p2, p3}, Landroid/content/SharedPreferences;->getLong(Ljava/lang/String;J)J

    move-result-wide p0

    invoke-static {p0, p1}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object p0

    return-object p0

    .line 312
    :cond_5
    const-class v0, Ljava/util/Set;

    invoke-virtual {p2, v0}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_6

    .line 313
    check-cast p3, Ljava/util/Set;

    invoke-interface {p0, p1, p3}, Landroid/content/SharedPreferences;->getStringSet(Ljava/lang/String;Ljava/util/Set;)Ljava/util/Set;

    move-result-object p0

    return-object p0

    .line 314
    :cond_6
    const-class p3, Ljava/lang/Object;

    invoke-virtual {p2, p3}, Ljava/lang/Object;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_7

    .line 315
    invoke-interface {p0, p1}, Landroid/content/SharedPreferences;->contains(Ljava/lang/String;)Z

    move-result p0

    invoke-static {p0}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object p0

    return-object p0

    :cond_7
    const/4 p0, 0x0

    return-object p0

    :cond_8
    return-object p3

    .line 299
    :cond_9
    :goto_0
    :try_start_1
    monitor-exit v0

    return-object v1

    :catchall_0
    move-exception p0

    .line 300
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p0
.end method

.method static getBool(Ljava/lang/String;Ljava/lang/String;Z)Z
    .locals 1

    .line 270
    const-class v0, Ljava/lang/Boolean;

    invoke-static {p2}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object p2

    invoke-static {p0, p1, v0, p2}, Lcom/onesignal/OneSignalPrefs;->get(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Class;Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p0

    check-cast p0, Ljava/lang/Boolean;

    invoke-virtual {p0}, Ljava/lang/Boolean;->booleanValue()Z

    move-result p0

    return p0
.end method

.method static getInt(Ljava/lang/String;Ljava/lang/String;I)I
    .locals 1

    .line 274
    const-class v0, Ljava/lang/Integer;

    invoke-static {p2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p2

    invoke-static {p0, p1, v0, p2}, Lcom/onesignal/OneSignalPrefs;->get(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Class;Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p0

    check-cast p0, Ljava/lang/Integer;

    invoke-virtual {p0}, Ljava/lang/Integer;->intValue()I

    move-result p0

    return p0
.end method

.method static getLong(Ljava/lang/String;Ljava/lang/String;J)J
    .locals 1

    .line 278
    const-class v0, Ljava/lang/Long;

    invoke-static {p2, p3}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object p2

    invoke-static {p0, p1, v0, p2}, Lcom/onesignal/OneSignalPrefs;->get(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Class;Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p0

    check-cast p0, Ljava/lang/Long;

    invoke-virtual {p0}, Ljava/lang/Long;->longValue()J

    move-result-wide p0

    return-wide p0
.end method

.method static getObject(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;)Ljava/lang/Object;
    .locals 1

    .line 286
    const-class v0, Ljava/lang/Object;

    invoke-static {p0, p1, v0, p2}, Lcom/onesignal/OneSignalPrefs;->get(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Class;Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p0

    return-object p0
.end method

.method static declared-synchronized getSharedPrefsByName(Ljava/lang/String;)Landroid/content/SharedPreferences;
    .locals 3

    const-string v0, "OneSignal.appContext null, could not read "

    const-class v1, Lcom/onesignal/OneSignalPrefs;

    monitor-enter v1

    .line 324
    :try_start_0
    sget-object v2, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    if-nez v2, :cond_0

    .line 325
    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    const-string v0, " from getSharedPreferences."

    invoke-virtual {p0, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    .line 326
    sget-object v0, Lcom/onesignal/OneSignal$LOG_LEVEL;->WARN:Lcom/onesignal/OneSignal$LOG_LEVEL;

    new-instance v2, Ljava/lang/Throwable;

    invoke-direct {v2}, Ljava/lang/Throwable;-><init>()V

    invoke-static {v0, p0, v2}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 327
    monitor-exit v1

    const/4 p0, 0x0

    return-object p0

    .line 330
    :cond_0
    :try_start_1
    sget-object v0, Lcom/onesignal/OneSignal;->appContext:Landroid/content/Context;

    const/4 v2, 0x0

    invoke-virtual {v0, p0, v2}, Landroid/content/Context;->getSharedPreferences(Ljava/lang/String;I)Landroid/content/SharedPreferences;

    move-result-object p0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    monitor-exit v1

    return-object p0

    :catchall_0
    move-exception p0

    :try_start_2
    monitor-exit v1
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    throw p0
.end method

.method static getString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    .line 266
    const-class v0, Ljava/lang/String;

    invoke-static {p0, p1, v0, p2}, Lcom/onesignal/OneSignalPrefs;->get(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Class;Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p0

    check-cast p0, Ljava/lang/String;

    return-object p0
.end method

.method public static getStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)Ljava/util/Set;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;)",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 282
    const-class v0, Ljava/util/Set;

    invoke-static {p0, p1, v0, p2}, Lcom/onesignal/OneSignalPrefs;->get(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Class;Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p0

    check-cast p0, Ljava/util/Set;

    return-object p0
.end method

.method public static initializePool()V
    .locals 3

    .line 221
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    sput-object v0, Lcom/onesignal/OneSignalPrefs;->prefsToApply:Ljava/util/HashMap;

    .line 222
    sget-object v1, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    new-instance v2, Ljava/util/HashMap;

    invoke-direct {v2}, Ljava/util/HashMap;-><init>()V

    invoke-virtual {v0, v1, v2}, Ljava/util/HashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 223
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->prefsToApply:Ljava/util/HashMap;

    new-instance v1, Ljava/util/HashMap;

    invoke-direct {v1}, Ljava/util/HashMap;-><init>()V

    const-string v2, "GTPlayerPurchases"

    invoke-virtual {v0, v2, v1}, Ljava/util/HashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 224
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->prefsToApply:Ljava/util/HashMap;

    new-instance v1, Ljava/util/HashMap;

    invoke-direct {v1}, Ljava/util/HashMap;-><init>()V

    const-string v2, "OneSignalTriggers"

    invoke-virtual {v0, v2, v1}, Ljava/util/HashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 226
    new-instance v0, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;

    const-string v1, "OSH_WritePrefs"

    invoke-direct {v0, v1}, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;-><init>(Ljava/lang/String;)V

    sput-object v0, Lcom/onesignal/OneSignalPrefs;->prefsHandler:Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;

    return-void
.end method

.method private static save(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;)V
    .locals 1

    .line 258
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->prefsToApply:Ljava/util/HashMap;

    invoke-virtual {v0, p0}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p0

    check-cast p0, Ljava/util/HashMap;

    .line 259
    monitor-enter p0

    .line 260
    :try_start_0
    invoke-virtual {p0, p1, p2}, Ljava/util/HashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 261
    monitor-exit p0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 262
    invoke-static {}, Lcom/onesignal/OneSignalPrefs;->startDelayedWrite()V

    return-void

    :catchall_0
    move-exception p1

    .line 261
    :try_start_1
    monitor-exit p0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method public static saveBool(Ljava/lang/String;Ljava/lang/String;Z)V
    .locals 0

    .line 242
    invoke-static {p2}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object p2

    invoke-static {p0, p1, p2}, Lcom/onesignal/OneSignalPrefs;->save(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;)V

    return-void
.end method

.method public static saveInt(Ljava/lang/String;Ljava/lang/String;I)V
    .locals 0

    .line 246
    invoke-static {p2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p2

    invoke-static {p0, p1, p2}, Lcom/onesignal/OneSignalPrefs;->save(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;)V

    return-void
.end method

.method public static saveLong(Ljava/lang/String;Ljava/lang/String;J)V
    .locals 0

    .line 250
    invoke-static {p2, p3}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object p2

    invoke-static {p0, p1, p2}, Lcom/onesignal/OneSignalPrefs;->save(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;)V

    return-void
.end method

.method public static saveObject(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;)V
    .locals 0

    .line 254
    invoke-static {p0, p1, p2}, Lcom/onesignal/OneSignalPrefs;->save(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;)V

    return-void
.end method

.method public static saveString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V
    .locals 0

    .line 234
    invoke-static {p0, p1, p2}, Lcom/onesignal/OneSignalPrefs;->save(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;)V

    return-void
.end method

.method public static saveStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 238
    invoke-static {p0, p1, p2}, Lcom/onesignal/OneSignalPrefs;->save(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Object;)V

    return-void
.end method

.method public static startDelayedWrite()V
    .locals 1

    .line 230
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->prefsHandler:Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;

    invoke-static {v0}, Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;->access$100(Lcom/onesignal/OneSignalPrefs$WritePrefHandlerThread;)V

    return-void
.end method
