.class Lcom/onesignal/OSInAppMessageRepository;
.super Ljava/lang/Object;
.source "OSInAppMessageRepository.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;
    }
.end annotation


# static fields
.field static final IAM_CACHE_DATA_LIFETIME:J = 0xed4e00L

.field static final IAM_DATA_RESPONSE_RETRY_KEY:Ljava/lang/String; = "retry"


# instance fields
.field private final dbHelper:Lcom/onesignal/OneSignalDbHelper;

.field private htmlNetworkRequestAttemptCount:I

.field private final logger:Lcom/onesignal/OSLogger;

.field private final sharedPreferences:Lcom/onesignal/OSSharedPreferences;


# direct methods
.method constructor <init>(Lcom/onesignal/OneSignalDbHelper;Lcom/onesignal/OSLogger;Lcom/onesignal/OSSharedPreferences;)V
    .locals 1

    .line 32
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 30
    iput v0, p0, Lcom/onesignal/OSInAppMessageRepository;->htmlNetworkRequestAttemptCount:I

    .line 33
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageRepository;->dbHelper:Lcom/onesignal/OneSignalDbHelper;

    .line 34
    iput-object p2, p0, Lcom/onesignal/OSInAppMessageRepository;->logger:Lcom/onesignal/OSLogger;

    .line 35
    iput-object p3, p0, Lcom/onesignal/OSInAppMessageRepository;->sharedPreferences:Lcom/onesignal/OSSharedPreferences;

    return-void
.end method

.method static synthetic access$000(Lcom/onesignal/OSInAppMessageRepository;Ljava/lang/String;Ljava/lang/String;)V
    .locals 0

    .line 21
    invoke-direct {p0, p1, p2}, Lcom/onesignal/OSInAppMessageRepository;->printHttpSuccessForInAppMessageRequest(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method static synthetic access$100(Lcom/onesignal/OSInAppMessageRepository;Ljava/util/Set;)V
    .locals 0

    .line 21
    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessageRepository;->saveClickedMessagesId(Ljava/util/Set;)V

    return-void
.end method

.method static synthetic access$200(Lcom/onesignal/OSInAppMessageRepository;Ljava/lang/String;ILjava/lang/String;)V
    .locals 0

    .line 21
    invoke-direct {p0, p1, p2, p3}, Lcom/onesignal/OSInAppMessageRepository;->printHttpErrorForInAppMessageRequest(Ljava/lang/String;ILjava/lang/String;)V

    return-void
.end method

.method static synthetic access$300(Lcom/onesignal/OSInAppMessageRepository;Ljava/util/Set;)V
    .locals 0

    .line 21
    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessageRepository;->saveImpressionedMessages(Ljava/util/Set;)V

    return-void
.end method

.method static synthetic access$400(Lcom/onesignal/OSInAppMessageRepository;)I
    .locals 0

    .line 21
    iget p0, p0, Lcom/onesignal/OSInAppMessageRepository;->htmlNetworkRequestAttemptCount:I

    return p0
.end method

.method static synthetic access$402(Lcom/onesignal/OSInAppMessageRepository;I)I
    .locals 0

    .line 21
    iput p1, p0, Lcom/onesignal/OSInAppMessageRepository;->htmlNetworkRequestAttemptCount:I

    return p1
.end method

.method static synthetic access$408(Lcom/onesignal/OSInAppMessageRepository;)I
    .locals 2

    .line 21
    iget v0, p0, Lcom/onesignal/OSInAppMessageRepository;->htmlNetworkRequestAttemptCount:I

    add-int/lit8 v1, v0, 0x1

    iput v1, p0, Lcom/onesignal/OSInAppMessageRepository;->htmlNetworkRequestAttemptCount:I

    return v0
.end method

.method private cleanInAppMessageClickedClickIds(Ljava/util/Set;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_0

    .line 352
    invoke-interface {p1}, Ljava/util/Set;->size()I

    move-result v0

    if-lez v0, :cond_0

    .line 353
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const/4 v1, 0x0

    const-string v2, "PREFS_OS_CLICKED_CLICK_IDS_IAMS"

    invoke-static {v0, v2, v1}, Lcom/onesignal/OneSignalPrefs;->getStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)Ljava/util/Set;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 358
    invoke-interface {v0}, Ljava/util/Set;->size()I

    move-result v1

    if-lez v1, :cond_0

    .line 359
    invoke-interface {v0, p1}, Ljava/util/Set;->removeAll(Ljava/util/Collection;)Z

    .line 360
    sget-object p1, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    invoke-static {p1, v2, v0}, Lcom/onesignal/OneSignalPrefs;->saveStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)V

    :cond_0
    return-void
.end method

.method private cleanInAppMessageIds(Ljava/util/Set;)V
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    if-eqz p1, :cond_1

    .line 313
    invoke-interface {p1}, Ljava/util/Set;->size()I

    move-result v0

    if-lez v0, :cond_1

    .line 314
    sget-object v0, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v1, "PREFS_OS_DISPLAYED_IAMS"

    const/4 v2, 0x0

    invoke-static {v0, v1, v2}, Lcom/onesignal/OneSignalPrefs;->getStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)Ljava/util/Set;

    move-result-object v0

    .line 319
    sget-object v3, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v4, "PREFS_OS_IMPRESSIONED_IAMS"

    invoke-static {v3, v4, v2}, Lcom/onesignal/OneSignalPrefs;->getStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)Ljava/util/Set;

    move-result-object v2

    if-eqz v0, :cond_0

    .line 324
    invoke-interface {v0}, Ljava/util/Set;->size()I

    move-result v3

    if-lez v3, :cond_0

    .line 325
    invoke-interface {v0, p1}, Ljava/util/Set;->removeAll(Ljava/util/Collection;)Z

    .line 326
    sget-object v3, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    invoke-static {v3, v1, v0}, Lcom/onesignal/OneSignalPrefs;->saveStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)V

    :cond_0
    if-eqz v2, :cond_1

    .line 332
    invoke-interface {v2}, Ljava/util/Set;->size()I

    move-result v0

    if-lez v0, :cond_1

    .line 333
    invoke-interface {v2, p1}, Ljava/util/Set;->removeAll(Ljava/util/Collection;)Z

    .line 334
    sget-object p1, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    invoke-static {p1, v4, v2}, Lcom/onesignal/OneSignalPrefs;->saveStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)V

    :cond_1
    return-void
.end method

.method private htmlPathForMessage(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;
    .locals 2

    if-nez p2, :cond_0

    .line 371
    iget-object p2, p0, Lcom/onesignal/OSInAppMessageRepository;->logger:Lcom/onesignal/OSLogger;

    new-instance p3, Ljava/lang/StringBuilder;

    const-string v0, "Unable to find a variant for in-app message "

    invoke-direct {p3, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p3, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-interface {p2, p1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    const/4 p1, 0x0

    return-object p1

    .line 375
    :cond_0
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "in_app_messages/"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, "/variants/"

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string p2, "/html?app_id="

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method private printHttpErrorForInAppMessageRequest(Ljava/lang/String;ILjava/lang/String;)V
    .locals 3

    .line 486
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageRepository;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Encountered a "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v1, " error while attempting in-app message "

    invoke-virtual {p2, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string p2, " request: "

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, p3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-interface {v0, p1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    return-void
.end method

.method private printHttpSuccessForInAppMessageRequest(Ljava/lang/String;Ljava/lang/String;)V
    .locals 3

    .line 482
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageRepository;->logger:Lcom/onesignal/OSLogger;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Successful post for in-app message "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v1, " request: "

    invoke-virtual {p1, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-interface {v0, p1}, Lcom/onesignal/OSLogger;->debug(Ljava/lang/String;)V

    return-void
.end method

.method private saveClickedMessagesId(Ljava/util/Set;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 387
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageRepository;->sharedPreferences:Lcom/onesignal/OSSharedPreferences;

    sget-object v1, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v2, "PREFS_OS_CLICKED_CLICK_IDS_IAMS"

    invoke-interface {v0, v1, v2, p1}, Lcom/onesignal/OSSharedPreferences;->saveStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)V

    return-void
.end method

.method private saveImpressionedMessages(Ljava/util/Set;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 403
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageRepository;->sharedPreferences:Lcom/onesignal/OSSharedPreferences;

    sget-object v1, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v2, "PREFS_OS_IMPRESSIONED_IAMS"

    invoke-interface {v0, v1, v2, p1}, Lcom/onesignal/OSSharedPreferences;->saveStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)V

    return-void
.end method


# virtual methods
.method declared-synchronized cleanCachedInAppMessages()V
    .locals 13

    monitor-enter p0

    const/4 v0, 0x2

    .line 243
    :try_start_0
    new-array v3, v0, [Ljava/lang/String;

    const-string v0, "message_id"

    const/4 v1, 0x0

    aput-object v0, v3, v1

    const-string v0, "click_ids"

    const/4 v2, 0x1

    aput-object v0, v3, v2

    .line 248
    const-string v0, "last_display < ?"

    .line 250
    invoke-static {}, Ljava/lang/System;->currentTimeMillis()J

    move-result-wide v4

    const-wide/16 v6, 0x3e8

    div-long/2addr v4, v6

    const-wide/32 v6, 0xed4e00

    sub-long/2addr v4, v6

    invoke-static {v4, v5}, Ljava/lang/String;->valueOf(J)Ljava/lang/String;

    move-result-object v4

    .line 251
    new-array v9, v2, [Ljava/lang/String;

    aput-object v4, v9, v1

    .line 253
    invoke-static {}, Lcom/onesignal/OSUtils;->newConcurrentSet()Ljava/util/Set;

    move-result-object v10

    .line 254
    invoke-static {}, Lcom/onesignal/OSUtils;->newConcurrentSet()Ljava/util/Set;

    move-result-object v11
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_1

    const/4 v12, 0x0

    .line 258
    :try_start_1
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageRepository;->dbHelper:Lcom/onesignal/OneSignalDbHelper;

    const-string v2, "in_app_message"

    const/4 v7, 0x0

    const/4 v8, 0x0

    const/4 v6, 0x0

    move-object v4, v0

    move-object v5, v9

    invoke-virtual/range {v1 .. v8}, Lcom/onesignal/OneSignalDbHelper;->query(Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Landroid/database/Cursor;

    move-result-object v12

    if-eqz v12, :cond_3

    .line 266
    invoke-interface {v12}, Landroid/database/Cursor;->getCount()I

    move-result v1

    if-nez v1, :cond_0

    goto :goto_1

    .line 272
    :cond_0
    invoke-interface {v12}, Landroid/database/Cursor;->moveToFirst()Z

    move-result v1

    if-eqz v1, :cond_2

    .line 274
    :cond_1
    const-string v1, "message_id"

    .line 275
    invoke-interface {v12, v1}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v1

    .line 274
    invoke-interface {v12, v1}, Landroid/database/Cursor;->getString(I)Ljava/lang/String;

    move-result-object v1

    .line 277
    const-string v2, "click_ids"

    .line 278
    invoke-interface {v12, v2}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v2

    .line 277
    invoke-interface {v12, v2}, Landroid/database/Cursor;->getString(I)Ljava/lang/String;

    move-result-object v2

    .line 281
    invoke-interface {v10, v1}, Ljava/util/Set;->add(Ljava/lang/Object;)Z

    .line 282
    new-instance v1, Lorg/json/JSONArray;

    invoke-direct {v1, v2}, Lorg/json/JSONArray;-><init>(Ljava/lang/String;)V

    invoke-static {v1}, Lcom/onesignal/OSUtils;->newStringSetFromJSONArray(Lorg/json/JSONArray;)Ljava/util/Set;

    move-result-object v1

    invoke-interface {v11, v1}, Ljava/util/Set;->addAll(Ljava/util/Collection;)Z

    .line 283
    invoke-interface {v12}, Landroid/database/Cursor;->moveToNext()Z

    move-result v1
    :try_end_1
    .catch Lorg/json/JSONException; {:try_start_1 .. :try_end_1} :catch_0
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    if-nez v1, :cond_1

    :cond_2
    if-eqz v12, :cond_5

    .line 288
    :try_start_2
    invoke-interface {v12}, Landroid/database/Cursor;->isClosed()Z

    move-result v1

    if-nez v1, :cond_5

    .line 289
    :goto_0
    invoke-interface {v12}, Landroid/database/Cursor;->close()V
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_1

    goto :goto_2

    .line 267
    :cond_3
    :goto_1
    :try_start_3
    sget-object v1, Lcom/onesignal/OneSignal$LOG_LEVEL;->DEBUG:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v2, "Attempted to clean 6 month old IAM data, but none exists!"

    invoke-static {v1, v2}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V
    :try_end_3
    .catch Lorg/json/JSONException; {:try_start_3 .. :try_end_3} :catch_0
    .catchall {:try_start_3 .. :try_end_3} :catchall_0

    if-eqz v12, :cond_4

    .line 288
    :try_start_4
    invoke-interface {v12}, Landroid/database/Cursor;->isClosed()Z

    move-result v0

    if-nez v0, :cond_4

    .line 289
    invoke-interface {v12}, Landroid/database/Cursor;->close()V
    :try_end_4
    .catchall {:try_start_4 .. :try_end_4} :catchall_1

    .line 268
    :cond_4
    monitor-exit p0

    return-void

    :catchall_0
    move-exception v0

    goto :goto_3

    :catch_0
    move-exception v1

    .line 286
    :try_start_5
    invoke-virtual {v1}, Lorg/json/JSONException;->printStackTrace()V
    :try_end_5
    .catchall {:try_start_5 .. :try_end_5} :catchall_0

    if-eqz v12, :cond_5

    .line 288
    :try_start_6
    invoke-interface {v12}, Landroid/database/Cursor;->isClosed()Z

    move-result v1

    if-nez v1, :cond_5

    goto :goto_0

    .line 292
    :cond_5
    :goto_2
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageRepository;->dbHelper:Lcom/onesignal/OneSignalDbHelper;

    const-string v2, "in_app_message"

    invoke-virtual {v1, v2, v0, v9}, Lcom/onesignal/OneSignalDbHelper;->delete(Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;)V

    .line 298
    invoke-direct {p0, v10}, Lcom/onesignal/OSInAppMessageRepository;->cleanInAppMessageIds(Ljava/util/Set;)V

    .line 299
    invoke-direct {p0, v11}, Lcom/onesignal/OSInAppMessageRepository;->cleanInAppMessageClickedClickIds(Ljava/util/Set;)V
    :try_end_6
    .catchall {:try_start_6 .. :try_end_6} :catchall_1

    .line 300
    monitor-exit p0

    return-void

    :goto_3
    if-eqz v12, :cond_6

    .line 288
    :try_start_7
    invoke-interface {v12}, Landroid/database/Cursor;->isClosed()Z

    move-result v1

    if-nez v1, :cond_6

    .line 289
    invoke-interface {v12}, Landroid/database/Cursor;->close()V

    .line 290
    :cond_6
    throw v0

    :catchall_1
    move-exception v0

    monitor-exit p0
    :try_end_7
    .catchall {:try_start_7 .. :try_end_7} :catchall_1

    throw v0
.end method

.method declared-synchronized getCachedInAppMessages()Ljava/util/List;
    .locals 10
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Lcom/onesignal/OSInAppMessageInternal;",
            ">;"
        }
    .end annotation

    monitor-enter p0

    .line 202
    :try_start_0
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_1

    const/4 v1, 0x0

    .line 206
    :try_start_1
    iget-object v2, p0, Lcom/onesignal/OSInAppMessageRepository;->dbHelper:Lcom/onesignal/OneSignalDbHelper;

    const-string v3, "in_app_message"

    const/4 v8, 0x0

    const/4 v9, 0x0

    const/4 v4, 0x0

    const/4 v5, 0x0

    const/4 v6, 0x0

    const/4 v7, 0x0

    invoke-virtual/range {v2 .. v9}, Lcom/onesignal/OneSignalDbHelper;->query(Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;[Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Landroid/database/Cursor;

    move-result-object v1

    .line 216
    invoke-interface {v1}, Landroid/database/Cursor;->moveToFirst()Z

    move-result v2

    if-eqz v2, :cond_2

    .line 218
    :cond_0
    const-string v2, "message_id"

    invoke-interface {v1, v2}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v2

    invoke-interface {v1, v2}, Landroid/database/Cursor;->getString(I)Ljava/lang/String;

    move-result-object v2

    .line 219
    const-string v3, "click_ids"

    invoke-interface {v1, v3}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v3

    invoke-interface {v1, v3}, Landroid/database/Cursor;->getString(I)Ljava/lang/String;

    move-result-object v3

    .line 220
    const-string v4, "display_quantity"

    invoke-interface {v1, v4}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v4

    invoke-interface {v1, v4}, Landroid/database/Cursor;->getInt(I)I

    move-result v4

    .line 221
    const-string v5, "last_display"

    invoke-interface {v1, v5}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v5

    invoke-interface {v1, v5}, Landroid/database/Cursor;->getLong(I)J

    move-result-wide v5

    .line 222
    const-string v7, "displayed_in_session"

    invoke-interface {v1, v7}, Landroid/database/Cursor;->getColumnIndex(Ljava/lang/String;)I

    move-result v7

    invoke-interface {v1, v7}, Landroid/database/Cursor;->getInt(I)I

    move-result v7

    const/4 v8, 0x1

    if-ne v7, v8, :cond_1

    goto :goto_0

    :cond_1
    const/4 v8, 0x0

    .line 224
    :goto_0
    new-instance v7, Lorg/json/JSONArray;

    invoke-direct {v7, v3}, Lorg/json/JSONArray;-><init>(Ljava/lang/String;)V

    invoke-static {v7}, Lcom/onesignal/OSUtils;->newStringSetFromJSONArray(Lorg/json/JSONArray;)Ljava/util/Set;

    move-result-object v3

    .line 226
    new-instance v7, Lcom/onesignal/OSInAppMessageInternal;

    new-instance v9, Lcom/onesignal/OSInAppMessageRedisplayStats;

    invoke-direct {v9, v4, v5, v6}, Lcom/onesignal/OSInAppMessageRedisplayStats;-><init>(IJ)V

    invoke-direct {v7, v2, v3, v8, v9}, Lcom/onesignal/OSInAppMessageInternal;-><init>(Ljava/lang/String;Ljava/util/Set;ZLcom/onesignal/OSInAppMessageRedisplayStats;)V

    .line 227
    invoke-interface {v0, v7}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    .line 228
    invoke-interface {v1}, Landroid/database/Cursor;->moveToNext()Z

    move-result v2
    :try_end_1
    .catch Lorg/json/JSONException; {:try_start_1 .. :try_end_1} :catch_0
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    if-nez v2, :cond_0

    :cond_2
    if-eqz v1, :cond_3

    .line 233
    :try_start_2
    invoke-interface {v1}, Landroid/database/Cursor;->isClosed()Z

    move-result v2

    if-nez v2, :cond_3

    .line 234
    :goto_1
    invoke-interface {v1}, Landroid/database/Cursor;->close()V
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_1

    goto :goto_2

    :catchall_0
    move-exception v0

    goto :goto_3

    :catch_0
    move-exception v2

    .line 231
    :try_start_3
    sget-object v3, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    const-string v4, "Generating JSONArray from iam click ids:JSON Failed."

    invoke-static {v3, v4, v2}, Lcom/onesignal/OneSignal;->Log(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;Ljava/lang/Throwable;)V
    :try_end_3
    .catchall {:try_start_3 .. :try_end_3} :catchall_0

    if-eqz v1, :cond_3

    .line 233
    :try_start_4
    invoke-interface {v1}, Landroid/database/Cursor;->isClosed()Z

    move-result v2
    :try_end_4
    .catchall {:try_start_4 .. :try_end_4} :catchall_1

    if-nez v2, :cond_3

    goto :goto_1

    .line 237
    :cond_3
    :goto_2
    monitor-exit p0

    return-object v0

    :goto_3
    if-eqz v1, :cond_4

    .line 233
    :try_start_5
    invoke-interface {v1}, Landroid/database/Cursor;->isClosed()Z

    move-result v2

    if-nez v2, :cond_4

    .line 234
    invoke-interface {v1}, Landroid/database/Cursor;->close()V

    .line 235
    :cond_4
    throw v0

    :catchall_1
    move-exception v0

    monitor-exit p0
    :try_end_5
    .catchall {:try_start_5 .. :try_end_5} :catchall_1

    throw v0
.end method

.method getClickedMessagesId()Ljava/util/Set;
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 379
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageRepository;->sharedPreferences:Lcom/onesignal/OSSharedPreferences;

    sget-object v1, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v2, "PREFS_OS_CLICKED_CLICK_IDS_IAMS"

    const/4 v3, 0x0

    invoke-interface {v0, v1, v2, v3}, Lcom/onesignal/OSSharedPreferences;->getStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)Ljava/util/Set;

    move-result-object v0

    return-object v0
.end method

.method getDismissedMessagesId()Ljava/util/Set;
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 425
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageRepository;->sharedPreferences:Lcom/onesignal/OSSharedPreferences;

    sget-object v1, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v2, "PREFS_OS_DISPLAYED_IAMS"

    const/4 v3, 0x0

    invoke-interface {v0, v1, v2, v3}, Lcom/onesignal/OSSharedPreferences;->getStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)Ljava/util/Set;

    move-result-object v0

    return-object v0
.end method

.method getIAMData(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V
    .locals 0

    .line 148
    invoke-direct {p0, p2, p3, p1}, Lcom/onesignal/OSInAppMessageRepository;->htmlPathForMessage(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    .line 149
    new-instance p2, Lcom/onesignal/OSInAppMessageRepository$8;

    invoke-direct {p2, p0, p4}, Lcom/onesignal/OSInAppMessageRepository$8;-><init>(Lcom/onesignal/OSInAppMessageRepository;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V

    const/4 p3, 0x0

    invoke-static {p1, p2, p3}, Lcom/onesignal/OneSignalRestClient;->get(Ljava/lang/String;Lcom/onesignal/OneSignalRestClient$ResponseHandler;Ljava/lang/String;)V

    return-void
.end method

.method getIAMPreviewData(Ljava/lang/String;Ljava/lang/String;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V
    .locals 2

    .line 132
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "in_app_messages/device_preview?preview_id="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v0, "&app_id="

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    .line 133
    new-instance p2, Lcom/onesignal/OSInAppMessageRepository$7;

    invoke-direct {p2, p0, p3}, Lcom/onesignal/OSInAppMessageRepository$7;-><init>(Lcom/onesignal/OSInAppMessageRepository;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V

    const/4 p3, 0x0

    invoke-static {p1, p2, p3}, Lcom/onesignal/OneSignalRestClient;->get(Ljava/lang/String;Lcom/onesignal/OneSignalRestClient$ResponseHandler;Ljava/lang/String;)V

    return-void
.end method

.method getImpressionesMessagesId()Ljava/util/Set;
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 395
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageRepository;->sharedPreferences:Lcom/onesignal/OSSharedPreferences;

    sget-object v1, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v2, "PREFS_OS_IMPRESSIONED_IAMS"

    const/4 v3, 0x0

    invoke-interface {v0, v1, v2, v3}, Lcom/onesignal/OSSharedPreferences;->getStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)Ljava/util/Set;

    move-result-object v0

    return-object v0
.end method

.method getLastTimeInAppDismissed()Ljava/util/Date;
    .locals 5

    .line 465
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageRepository;->sharedPreferences:Lcom/onesignal/OSSharedPreferences;

    sget-object v1, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v2, "PREFS_OS_LAST_TIME_IAM_DISMISSED"

    const/4 v3, 0x0

    invoke-interface {v0, v1, v2, v3}, Lcom/onesignal/OSSharedPreferences;->getString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    if-nez v0, :cond_0

    return-object v3

    .line 472
    :cond_0
    new-instance v1, Ljava/text/SimpleDateFormat;

    const-string v2, "EEE MMM dd HH:mm:ss zzz yyyy"

    sget-object v4, Ljava/util/Locale;->ENGLISH:Ljava/util/Locale;

    invoke-direct {v1, v2, v4}, Ljava/text/SimpleDateFormat;-><init>(Ljava/lang/String;Ljava/util/Locale;)V

    .line 474
    :try_start_0
    invoke-virtual {v1, v0}, Ljava/text/SimpleDateFormat;->parse(Ljava/lang/String;)Ljava/util/Date;

    move-result-object v0
    :try_end_0
    .catch Ljava/text/ParseException; {:try_start_0 .. :try_end_0} :catch_0

    return-object v0

    :catch_0
    move-exception v0

    .line 476
    sget-object v1, Lcom/onesignal/OneSignal$LOG_LEVEL;->ERROR:Lcom/onesignal/OneSignal$LOG_LEVEL;

    invoke-virtual {v0}, Ljava/text/ParseException;->getLocalizedMessage()Ljava/lang/String;

    move-result-object v0

    invoke-static {v1, v0}, Lcom/onesignal/OneSignal;->onesignalLog(Lcom/onesignal/OneSignal$LOG_LEVEL;Ljava/lang/String;)V

    return-object v3
.end method

.method getSavedIAMs()Ljava/lang/String;
    .locals 4

    .line 440
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageRepository;->sharedPreferences:Lcom/onesignal/OSSharedPreferences;

    sget-object v1, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v2, "PREFS_OS_CACHED_IAMS"

    const/4 v3, 0x0

    invoke-interface {v0, v1, v2, v3}, Lcom/onesignal/OSSharedPreferences;->getString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method getViewPageImpressionedIds()Ljava/util/Set;
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 410
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageRepository;->sharedPreferences:Lcom/onesignal/OSSharedPreferences;

    sget-object v1, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v2, "PREFS_OS_PAGE_IMPRESSIONED_IAMS"

    const/4 v3, 0x0

    invoke-interface {v0, v1, v2, v3}, Lcom/onesignal/OSSharedPreferences;->getStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)Ljava/util/Set;

    move-result-object v0

    return-object v0
.end method

.method saveDismissedMessagesId(Ljava/util/Set;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 433
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageRepository;->sharedPreferences:Lcom/onesignal/OSSharedPreferences;

    sget-object v1, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v2, "PREFS_OS_DISPLAYED_IAMS"

    invoke-interface {v0, v1, v2, p1}, Lcom/onesignal/OSSharedPreferences;->saveStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)V

    return-void
.end method

.method saveIAMs(Ljava/lang/String;)V
    .locals 3

    .line 448
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageRepository;->sharedPreferences:Lcom/onesignal/OSSharedPreferences;

    sget-object v1, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v2, "PREFS_OS_CACHED_IAMS"

    invoke-interface {v0, v1, v2, p1}, Lcom/onesignal/OSSharedPreferences;->saveString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method declared-synchronized saveInAppMessage(Lcom/onesignal/OSInAppMessageInternal;)V
    .locals 6

    monitor-enter p0

    .line 187
    :try_start_0
    new-instance v0, Landroid/content/ContentValues;

    invoke-direct {v0}, Landroid/content/ContentValues;-><init>()V

    .line 188
    const-string v1, "message_id"

    iget-object v2, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/String;)V

    .line 189
    const-string v1, "display_quantity"

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageInternal;->getRedisplayStats()Lcom/onesignal/OSInAppMessageRedisplayStats;

    move-result-object v2

    invoke-virtual {v2}, Lcom/onesignal/OSInAppMessageRedisplayStats;->getDisplayQuantity()I

    move-result v2

    invoke-static {v2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/Integer;)V

    .line 190
    const-string v1, "last_display"

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageInternal;->getRedisplayStats()Lcom/onesignal/OSInAppMessageRedisplayStats;

    move-result-object v2

    invoke-virtual {v2}, Lcom/onesignal/OSInAppMessageRedisplayStats;->getLastDisplayTime()J

    move-result-wide v2

    invoke-static {v2, v3}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/Long;)V

    .line 191
    const-string v1, "click_ids"

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageInternal;->getClickedClickIds()Ljava/util/Set;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/String;)V

    .line 192
    const-string v1, "displayed_in_session"

    invoke-virtual {p1}, Lcom/onesignal/OSInAppMessageInternal;->isDisplayedInSession()Z

    move-result v2

    invoke-static {v2}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Landroid/content/ContentValues;->put(Ljava/lang/String;Ljava/lang/Boolean;)V

    .line 194
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageRepository;->dbHelper:Lcom/onesignal/OneSignalDbHelper;

    const-string v2, "in_app_message"

    const-string v3, "message_id = ?"

    const/4 v4, 0x1

    new-array v4, v4, [Ljava/lang/String;

    iget-object p1, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    const/4 v5, 0x0

    aput-object p1, v4, v5

    invoke-virtual {v1, v2, v0, v3, v4}, Lcom/onesignal/OneSignalDbHelper;->update(Ljava/lang/String;Landroid/content/ContentValues;Ljava/lang/String;[Ljava/lang/String;)I

    move-result p1

    if-nez p1, :cond_0

    .line 197
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageRepository;->dbHelper:Lcom/onesignal/OneSignalDbHelper;

    const-string v1, "in_app_message"

    const/4 v2, 0x0

    invoke-virtual {p1, v1, v2, v0}, Lcom/onesignal/OneSignalDbHelper;->insert(Ljava/lang/String;Ljava/lang/String;Landroid/content/ContentValues;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 198
    :cond_0
    monitor-exit p0

    return-void

    :catchall_0
    move-exception p1

    :try_start_1
    monitor-exit p0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method saveLastTimeInAppDismissed(Ljava/util/Date;)V
    .locals 3

    if-eqz p1, :cond_0

    .line 456
    invoke-virtual {p1}, Ljava/util/Date;->toString()Ljava/lang/String;

    move-result-object p1

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    .line 457
    :goto_0
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageRepository;->sharedPreferences:Lcom/onesignal/OSSharedPreferences;

    sget-object v1, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v2, "PREFS_OS_LAST_TIME_IAM_DISMISSED"

    invoke-interface {v0, v1, v2, p1}, Lcom/onesignal/OSSharedPreferences;->saveString(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method saveViewPageImpressionedIds(Ljava/util/Set;)V
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 418
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageRepository;->sharedPreferences:Lcom/onesignal/OSSharedPreferences;

    sget-object v1, Lcom/onesignal/OneSignalPrefs;->PREFS_ONESIGNAL:Ljava/lang/String;

    const-string v2, "PREFS_OS_PAGE_IMPRESSIONED_IAMS"

    invoke-interface {v0, v1, v2, p1}, Lcom/onesignal/OSSharedPreferences;->saveStringSet(Ljava/lang/String;Ljava/lang/String;Ljava/util/Set;)V

    return-void
.end method

.method sendIAMClick(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;ZLjava/util/Set;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V
    .locals 11
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "I",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "Z",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;",
            "Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;",
            ")V"
        }
    .end annotation

    move-object v9, p0

    const-string v0, "in_app_messages/"

    .line 41
    :try_start_0
    new-instance v10, Lcom/onesignal/OSInAppMessageRepository$1;

    move-object v1, v10

    move-object v2, p0

    move-object v3, p1

    move v4, p4

    move-object v5, p2

    move-object/from16 v6, p6

    move-object v7, p3

    move/from16 v8, p7

    invoke-direct/range {v1 .. v8}, Lcom/onesignal/OSInAppMessageRepository$1;-><init>(Lcom/onesignal/OSInAppMessageRepository;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;Ljava/lang/String;Z)V

    .line 51
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    move-object/from16 v0, p5

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "/click"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    new-instance v1, Lcom/onesignal/OSInAppMessageRepository$2;

    move-object/from16 v2, p8

    move-object/from16 v3, p9

    invoke-direct {v1, p0, v2, v3}, Lcom/onesignal/OSInAppMessageRepository$2;-><init>(Lcom/onesignal/OSInAppMessageRepository;Ljava/util/Set;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V

    invoke-static {v0, v10, v1}, Lcom/onesignal/OneSignalRestClient;->post(Ljava/lang/String;Lorg/json/JSONObject;Lcom/onesignal/OneSignalRestClient$ResponseHandler;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 66
    invoke-virtual {v0}, Lorg/json/JSONException;->printStackTrace()V

    .line 67
    iget-object v0, v9, Lcom/onesignal/OSInAppMessageRepository;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Unable to execute in-app message action HTTP request due to invalid JSON"

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    :goto_0
    return-void
.end method

.method sendIAMImpression(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/util/Set;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V
    .locals 8
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "I",
            "Ljava/lang/String;",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;",
            "Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;",
            ")V"
        }
    .end annotation

    const-string v0, "in_app_messages/"

    .line 104
    :try_start_0
    new-instance v7, Lcom/onesignal/OSInAppMessageRepository$5;

    move-object v1, v7

    move-object v2, p0

    move-object v3, p1

    move-object v4, p2

    move-object v5, p3

    move v6, p4

    invoke-direct/range {v1 .. v6}, Lcom/onesignal/OSInAppMessageRepository$5;-><init>(Lcom/onesignal/OSInAppMessageRepository;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;I)V

    .line 112
    new-instance p1, Ljava/lang/StringBuilder;

    invoke-direct {p1, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1, p5}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string p2, "/impression"

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    new-instance p2, Lcom/onesignal/OSInAppMessageRepository$6;

    invoke-direct {p2, p0, p6, p7}, Lcom/onesignal/OSInAppMessageRepository$6;-><init>(Lcom/onesignal/OSInAppMessageRepository;Ljava/util/Set;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V

    invoke-static {p1, v7, p2}, Lcom/onesignal/OneSignalRestClient;->post(Ljava/lang/String;Lorg/json/JSONObject;Lcom/onesignal/OneSignalRestClient$ResponseHandler;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 126
    invoke-virtual {p1}, Lorg/json/JSONException;->printStackTrace()V

    .line 127
    iget-object p1, p0, Lcom/onesignal/OSInAppMessageRepository;->logger:Lcom/onesignal/OSLogger;

    const-string p2, "Unable to execute in-app message impression HTTP request due to invalid JSON"

    invoke-interface {p1, p2}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    :goto_0
    return-void
.end method

.method sendIAMPageImpression(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;Ljava/lang/String;Ljava/util/Set;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V
    .locals 10
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "I",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;",
            "Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;",
            ")V"
        }
    .end annotation

    move-object v8, p0

    const-string v0, "in_app_messages/"

    .line 74
    :try_start_0
    new-instance v9, Lcom/onesignal/OSInAppMessageRepository$3;

    move-object v1, v9

    move-object v2, p0

    move-object v3, p1

    move-object v4, p2

    move-object v5, p3

    move v6, p4

    move-object/from16 v7, p6

    invoke-direct/range {v1 .. v7}, Lcom/onesignal/OSInAppMessageRepository$3;-><init>(Lcom/onesignal/OSInAppMessageRepository;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;ILjava/lang/String;)V

    .line 82
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    move-object v0, p5

    invoke-virtual {v1, p5}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "/pageImpression"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    new-instance v1, Lcom/onesignal/OSInAppMessageRepository$4;

    move-object/from16 v2, p7

    move-object/from16 v3, p8

    invoke-direct {v1, p0, v2, v3}, Lcom/onesignal/OSInAppMessageRepository$4;-><init>(Lcom/onesignal/OSInAppMessageRepository;Ljava/util/Set;Lcom/onesignal/OSInAppMessageRepository$OSInAppMessageRequestResponse;)V

    invoke-static {v0, v9, v1}, Lcom/onesignal/OneSignalRestClient;->post(Ljava/lang/String;Lorg/json/JSONObject;Lcom/onesignal/OneSignalRestClient$ResponseHandler;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 96
    invoke-virtual {v0}, Lorg/json/JSONException;->printStackTrace()V

    .line 97
    iget-object v0, v8, Lcom/onesignal/OSInAppMessageRepository;->logger:Lcom/onesignal/OSLogger;

    const-string v1, "Unable to execute in-app message impression HTTP request due to invalid JSON"

    invoke-interface {v0, v1}, Lcom/onesignal/OSLogger;->error(Ljava/lang/String;)V

    :goto_0
    return-void
.end method
