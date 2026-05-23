.class Lcom/onesignal/OSInAppMessageInternal;
.super Lcom/onesignal/OSInAppMessage;
.source "OSInAppMessageInternal.java"


# static fields
.field private static final DISPLAY_DURATION:Ljava/lang/String; = "displayDuration"

.field private static final END_TIME:Ljava/lang/String; = "end_time"

.field private static final HAS_LIQUID:Ljava/lang/String; = "has_liquid"

.field private static final IAM_ID:Ljava/lang/String; = "messageId"

.field private static final IAM_REDISPLAY_STATS:Ljava/lang/String; = "redisplay"

.field private static final IAM_TRIGGERS:Ljava/lang/String; = "triggers"

.field private static final IAM_VARIANTS:Ljava/lang/String; = "variants"

.field private static final ID:Ljava/lang/String; = "id"


# instance fields
.field private actionTaken:Z

.field private clickedClickIds:Ljava/util/Set;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field

.field private displayDuration:D

.field private displayedInSession:Z

.field private endTime:Ljava/util/Date;

.field private hasLiquid:Z

.field isPreview:Z

.field private redisplayStats:Lcom/onesignal/OSInAppMessageRedisplayStats;

.field private triggerChanged:Z

.field public triggers:Ljava/util/ArrayList;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/ArrayList<",
            "Ljava/util/ArrayList<",
            "Lcom/onesignal/OSTrigger;",
            ">;>;"
        }
    .end annotation
.end field

.field public variants:Ljava/util/HashMap;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/HashMap<",
            "Ljava/lang/String;",
            "Ljava/util/HashMap<",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            ">;>;"
        }
    .end annotation
.end field


# direct methods
.method constructor <init>(Ljava/lang/String;Ljava/util/Set;ZLcom/onesignal/OSInAppMessageRedisplayStats;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;Z",
            "Lcom/onesignal/OSInAppMessageRedisplayStats;",
            ")V"
        }
    .end annotation

    .line 71
    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessage;-><init>(Ljava/lang/String;)V

    .line 55
    new-instance p1, Lcom/onesignal/OSInAppMessageRedisplayStats;

    invoke-direct {p1}, Lcom/onesignal/OSInAppMessageRedisplayStats;-><init>()V

    const/4 p1, 0x0

    .line 59
    iput-boolean p1, p0, Lcom/onesignal/OSInAppMessageInternal;->triggerChanged:Z

    .line 72
    iput-object p2, p0, Lcom/onesignal/OSInAppMessageInternal;->clickedClickIds:Ljava/util/Set;

    .line 73
    iput-boolean p3, p0, Lcom/onesignal/OSInAppMessageInternal;->displayedInSession:Z

    .line 74
    iput-object p4, p0, Lcom/onesignal/OSInAppMessageInternal;->redisplayStats:Lcom/onesignal/OSInAppMessageRedisplayStats;

    return-void
.end method

.method constructor <init>(Lorg/json/JSONObject;)V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 80
    const-string v0, "id"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-direct {p0, v0}, Lcom/onesignal/OSInAppMessage;-><init>(Ljava/lang/String;)V

    .line 55
    new-instance v0, Lcom/onesignal/OSInAppMessageRedisplayStats;

    invoke-direct {v0}, Lcom/onesignal/OSInAppMessageRedisplayStats;-><init>()V

    iput-object v0, p0, Lcom/onesignal/OSInAppMessageInternal;->redisplayStats:Lcom/onesignal/OSInAppMessageRedisplayStats;

    const/4 v0, 0x0

    .line 58
    iput-boolean v0, p0, Lcom/onesignal/OSInAppMessageInternal;->displayedInSession:Z

    .line 59
    iput-boolean v0, p0, Lcom/onesignal/OSInAppMessageInternal;->triggerChanged:Z

    .line 81
    const-string v0, "variants"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    invoke-direct {p0, v0}, Lcom/onesignal/OSInAppMessageInternal;->parseVariants(Lorg/json/JSONObject;)Ljava/util/HashMap;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/OSInAppMessageInternal;->variants:Ljava/util/HashMap;

    .line 82
    const-string v0, "triggers"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->getJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object v0

    invoke-virtual {p0, v0}, Lcom/onesignal/OSInAppMessageInternal;->parseTriggerJson(Lorg/json/JSONArray;)Ljava/util/ArrayList;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/OSInAppMessageInternal;->triggers:Ljava/util/ArrayList;

    .line 83
    new-instance v0, Ljava/util/HashSet;

    invoke-direct {v0}, Ljava/util/HashSet;-><init>()V

    iput-object v0, p0, Lcom/onesignal/OSInAppMessageInternal;->clickedClickIds:Ljava/util/Set;

    .line 84
    invoke-direct {p0, p1}, Lcom/onesignal/OSInAppMessageInternal;->parseEndTimeJson(Lorg/json/JSONObject;)Ljava/util/Date;

    move-result-object v0

    iput-object v0, p0, Lcom/onesignal/OSInAppMessageInternal;->endTime:Ljava/util/Date;

    .line 85
    const-string v0, "has_liquid"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_0

    .line 86
    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->getBoolean(Ljava/lang/String;)Z

    move-result v0

    iput-boolean v0, p0, Lcom/onesignal/OSInAppMessageInternal;->hasLiquid:Z

    .line 88
    :cond_0
    const-string v0, "redisplay"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_1

    .line 89
    new-instance v1, Lcom/onesignal/OSInAppMessageRedisplayStats;

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object p1

    invoke-direct {v1, p1}, Lcom/onesignal/OSInAppMessageRedisplayStats;-><init>(Lorg/json/JSONObject;)V

    iput-object v1, p0, Lcom/onesignal/OSInAppMessageInternal;->redisplayStats:Lcom/onesignal/OSInAppMessageRedisplayStats;

    :cond_1
    return-void
.end method

.method constructor <init>(Z)V
    .locals 1

    .line 66
    const-string v0, ""

    invoke-direct {p0, v0}, Lcom/onesignal/OSInAppMessage;-><init>(Ljava/lang/String;)V

    .line 55
    new-instance v0, Lcom/onesignal/OSInAppMessageRedisplayStats;

    invoke-direct {v0}, Lcom/onesignal/OSInAppMessageRedisplayStats;-><init>()V

    iput-object v0, p0, Lcom/onesignal/OSInAppMessageInternal;->redisplayStats:Lcom/onesignal/OSInAppMessageRedisplayStats;

    const/4 v0, 0x0

    .line 58
    iput-boolean v0, p0, Lcom/onesignal/OSInAppMessageInternal;->displayedInSession:Z

    .line 59
    iput-boolean v0, p0, Lcom/onesignal/OSInAppMessageInternal;->triggerChanged:Z

    .line 67
    iput-boolean p1, p0, Lcom/onesignal/OSInAppMessageInternal;->isPreview:Z

    return-void
.end method

.method private parseEndTimeJson(Lorg/json/JSONObject;)Ljava/util/Date;
    .locals 2

    const/4 v0, 0x0

    .line 95
    :try_start_0
    const-string v1, "end_time"

    invoke-virtual {p1, v1}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_1

    .line 100
    const-string v1, "null"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_0

    return-object v0

    .line 104
    :cond_0
    :try_start_1
    invoke-static {}, Lcom/onesignal/OneSignalSimpleDateFormat;->iso8601Format()Ljava/text/SimpleDateFormat;

    move-result-object v1

    .line 105
    invoke-virtual {v1, p1}, Ljava/text/SimpleDateFormat;->parse(Ljava/lang/String;)Ljava/util/Date;

    move-result-object p1
    :try_end_1
    .catch Ljava/text/ParseException; {:try_start_1 .. :try_end_1} :catch_0

    return-object p1

    :catch_0
    move-exception p1

    .line 107
    invoke-virtual {p1}, Ljava/text/ParseException;->printStackTrace()V

    :catch_1
    return-object v0
.end method

.method private parseVariants(Lorg/json/JSONObject;)Ljava/util/HashMap;
    .locals 8
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/json/JSONObject;",
            ")",
            "Ljava/util/HashMap<",
            "Ljava/lang/String;",
            "Ljava/util/HashMap<",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            ">;>;"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 114
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    .line 116
    invoke-virtual {p1}, Lorg/json/JSONObject;->keys()Ljava/util/Iterator;

    move-result-object v1

    .line 117
    :goto_0
    invoke-interface {v1}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_1

    .line 118
    invoke-interface {v1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/String;

    .line 119
    invoke-virtual {p1, v2}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v3

    .line 120
    new-instance v4, Ljava/util/HashMap;

    invoke-direct {v4}, Ljava/util/HashMap;-><init>()V

    .line 122
    invoke-virtual {v3}, Lorg/json/JSONObject;->keys()Ljava/util/Iterator;

    move-result-object v5

    .line 123
    :goto_1
    invoke-interface {v5}, Ljava/util/Iterator;->hasNext()Z

    move-result v6

    if-eqz v6, :cond_0

    .line 124
    invoke-interface {v5}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v6

    check-cast v6, Ljava/lang/String;

    .line 125
    invoke-virtual {v3, v6}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v7

    invoke-virtual {v4, v6, v7}, Ljava/util/HashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    goto :goto_1

    .line 128
    :cond_0
    invoke-virtual {v0, v2, v4}, Ljava/util/HashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    goto :goto_0

    :cond_1
    return-object v0
.end method


# virtual methods
.method addClickId(Ljava/lang/String;)V
    .locals 1

    .line 256
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageInternal;->clickedClickIds:Ljava/util/Set;

    invoke-interface {v0, p1}, Ljava/util/Set;->add(Ljava/lang/Object;)Z

    return-void
.end method

.method clearClickIds()V
    .locals 1

    .line 252
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageInternal;->clickedClickIds:Ljava/util/Set;

    invoke-interface {v0}, Ljava/util/Set;->clear()V

    return-void
.end method

.method public equals(Ljava/lang/Object;)Z
    .locals 2

    if-ne p0, p1, :cond_0

    const/4 p1, 0x1

    return p1

    :cond_0
    if-eqz p1, :cond_2

    .line 292
    invoke-virtual {p0}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v0

    invoke-virtual {p1}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v1

    if-eq v0, v1, :cond_1

    goto :goto_0

    .line 293
    :cond_1
    check-cast p1, Lcom/onesignal/OSInAppMessageInternal;

    .line 294
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    iget-object p1, p1, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-virtual {v0, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    return p1

    :cond_2
    :goto_0
    const/4 p1, 0x0

    return p1
.end method

.method getClickedClickIds()Ljava/util/Set;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Set<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 244
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageInternal;->clickedClickIds:Ljava/util/Set;

    return-object v0
.end method

.method getDisplayDuration()D
    .locals 2

    .line 211
    iget-wide v0, p0, Lcom/onesignal/OSInAppMessageInternal;->displayDuration:D

    return-wide v0
.end method

.method getHasLiquid()Z
    .locals 1

    .line 235
    iget-boolean v0, p0, Lcom/onesignal/OSInAppMessageInternal;->hasLiquid:Z

    return v0
.end method

.method getRedisplayStats()Lcom/onesignal/OSInAppMessageRedisplayStats;
    .locals 1

    .line 264
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageInternal;->redisplayStats:Lcom/onesignal/OSInAppMessageRedisplayStats;

    return-object v0
.end method

.method public hashCode()I
    .locals 1

    .line 299
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-virtual {v0}, Ljava/lang/String;->hashCode()I

    move-result v0

    return v0
.end method

.method isClickAvailable(Ljava/lang/String;)Z
    .locals 1

    .line 248
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageInternal;->clickedClickIds:Ljava/util/Set;

    invoke-interface {v0, p1}, Ljava/util/Set;->contains(Ljava/lang/Object;)Z

    move-result p1

    xor-int/lit8 p1, p1, 0x1

    return p1
.end method

.method public isDisplayedInSession()Z
    .locals 1

    .line 227
    iget-boolean v0, p0, Lcom/onesignal/OSInAppMessageInternal;->displayedInSession:Z

    return v0
.end method

.method public isFinished()Z
    .locals 2

    .line 304
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageInternal;->endTime:Ljava/util/Date;

    if-nez v0, :cond_0

    const/4 v0, 0x0

    return v0

    .line 307
    :cond_0
    new-instance v0, Ljava/util/Date;

    invoke-direct {v0}, Ljava/util/Date;-><init>()V

    .line 308
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageInternal;->endTime:Ljava/util/Date;

    invoke-virtual {v1, v0}, Ljava/util/Date;->before(Ljava/util/Date;)Z

    move-result v0

    return v0
.end method

.method isTriggerChanged()Z
    .locals 1

    .line 219
    iget-boolean v0, p0, Lcom/onesignal/OSInAppMessageInternal;->triggerChanged:Z

    return v0
.end method

.method protected parseTriggerJson(Lorg/json/JSONArray;)Ljava/util/ArrayList;
    .locals 8
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/json/JSONArray;",
            ")",
            "Ljava/util/ArrayList<",
            "Ljava/util/ArrayList<",
            "Lcom/onesignal/OSTrigger;",
            ">;>;"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 136
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    const/4 v1, 0x0

    move v2, v1

    .line 138
    :goto_0
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v3

    if-ge v2, v3, :cond_1

    .line 139
    invoke-virtual {p1, v2}, Lorg/json/JSONArray;->getJSONArray(I)Lorg/json/JSONArray;

    move-result-object v3

    .line 140
    new-instance v4, Ljava/util/ArrayList;

    invoke-direct {v4}, Ljava/util/ArrayList;-><init>()V

    move v5, v1

    .line 141
    :goto_1
    invoke-virtual {v3}, Lorg/json/JSONArray;->length()I

    move-result v6

    if-ge v5, v6, :cond_0

    .line 142
    new-instance v6, Lcom/onesignal/OSTrigger;

    invoke-virtual {v3, v5}, Lorg/json/JSONArray;->getJSONObject(I)Lorg/json/JSONObject;

    move-result-object v7

    invoke-direct {v6, v7}, Lcom/onesignal/OSTrigger;-><init>(Lorg/json/JSONObject;)V

    .line 143
    invoke-virtual {v4, v6}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    add-int/lit8 v5, v5, 0x1

    goto :goto_1

    .line 145
    :cond_0
    invoke-virtual {v0, v4}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_1
    return-object v0
.end method

.method removeClickId(Ljava/lang/String;)V
    .locals 1

    .line 260
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageInternal;->clickedClickIds:Ljava/util/Set;

    invoke-interface {v0, p1}, Ljava/util/Set;->remove(Ljava/lang/Object;)Z

    return-void
.end method

.method setDisplayDuration(D)V
    .locals 0

    .line 215
    iput-wide p1, p0, Lcom/onesignal/OSInAppMessageInternal;->displayDuration:D

    return-void
.end method

.method public setDisplayedInSession(Z)V
    .locals 0

    .line 231
    iput-boolean p1, p0, Lcom/onesignal/OSInAppMessageInternal;->displayedInSession:Z

    return-void
.end method

.method setHasLiquid(Z)V
    .locals 0

    .line 239
    iput-boolean p1, p0, Lcom/onesignal/OSInAppMessageInternal;->hasLiquid:Z

    return-void
.end method

.method setRedisplayStats(IJ)V
    .locals 1

    .line 268
    new-instance v0, Lcom/onesignal/OSInAppMessageRedisplayStats;

    invoke-direct {v0, p1, p2, p3}, Lcom/onesignal/OSInAppMessageRedisplayStats;-><init>(IJ)V

    iput-object v0, p0, Lcom/onesignal/OSInAppMessageInternal;->redisplayStats:Lcom/onesignal/OSInAppMessageRedisplayStats;

    return-void
.end method

.method setTriggerChanged(Z)V
    .locals 0

    .line 223
    iput-boolean p1, p0, Lcom/onesignal/OSInAppMessageInternal;->triggerChanged:Z

    return-void
.end method

.method takeActionAsUnique()Z
    .locals 1

    .line 205
    iget-boolean v0, p0, Lcom/onesignal/OSInAppMessageInternal;->actionTaken:Z

    if-eqz v0, :cond_0

    const/4 v0, 0x0

    return v0

    :cond_0
    const/4 v0, 0x1

    .line 207
    iput-boolean v0, p0, Lcom/onesignal/OSInAppMessageInternal;->actionTaken:Z

    return v0
.end method

.method public toJSONObject()Lorg/json/JSONObject;
    .locals 9

    .line 153
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 156
    :try_start_0
    const-string v1, "messageId"

    iget-object v2, p0, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 158
    new-instance v1, Lorg/json/JSONObject;

    invoke-direct {v1}, Lorg/json/JSONObject;-><init>()V

    .line 159
    iget-object v2, p0, Lcom/onesignal/OSInAppMessageInternal;->variants:Ljava/util/HashMap;

    invoke-virtual {v2}, Ljava/util/HashMap;->keySet()Ljava/util/Set;

    move-result-object v2

    invoke-interface {v2}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v2

    :goto_0
    invoke-interface {v2}, Ljava/util/Iterator;->hasNext()Z

    move-result v3

    if-eqz v3, :cond_1

    invoke-interface {v2}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Ljava/lang/String;

    .line 160
    iget-object v4, p0, Lcom/onesignal/OSInAppMessageInternal;->variants:Ljava/util/HashMap;

    invoke-virtual {v4, v3}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v4

    check-cast v4, Ljava/util/HashMap;

    .line 161
    new-instance v5, Lorg/json/JSONObject;

    invoke-direct {v5}, Lorg/json/JSONObject;-><init>()V

    .line 163
    invoke-virtual {v4}, Ljava/util/HashMap;->keySet()Ljava/util/Set;

    move-result-object v6

    invoke-interface {v6}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object v6

    :goto_1
    invoke-interface {v6}, Ljava/util/Iterator;->hasNext()Z

    move-result v7

    if-eqz v7, :cond_0

    invoke-interface {v6}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v7

    check-cast v7, Ljava/lang/String;

    .line 164
    invoke-virtual {v4, v7}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v8

    invoke-virtual {v5, v7, v8}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    goto :goto_1

    .line 166
    :cond_0
    invoke-virtual {v1, v3, v5}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    goto :goto_0

    .line 169
    :cond_1
    const-string v2, "variants"

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 170
    const-string v1, "displayDuration"

    iget-wide v2, p0, Lcom/onesignal/OSInAppMessageInternal;->displayDuration:D

    invoke-virtual {v0, v1, v2, v3}, Lorg/json/JSONObject;->put(Ljava/lang/String;D)Lorg/json/JSONObject;

    .line 171
    const-string v1, "redisplay"

    iget-object v2, p0, Lcom/onesignal/OSInAppMessageInternal;->redisplayStats:Lcom/onesignal/OSInAppMessageRedisplayStats;

    invoke-virtual {v2}, Lcom/onesignal/OSInAppMessageRedisplayStats;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 173
    new-instance v1, Lorg/json/JSONArray;

    invoke-direct {v1}, Lorg/json/JSONArray;-><init>()V

    .line 174
    iget-object v2, p0, Lcom/onesignal/OSInAppMessageInternal;->triggers:Ljava/util/ArrayList;

    invoke-virtual {v2}, Ljava/util/ArrayList;->iterator()Ljava/util/Iterator;

    move-result-object v2

    :goto_2
    invoke-interface {v2}, Ljava/util/Iterator;->hasNext()Z

    move-result v3

    if-eqz v3, :cond_3

    invoke-interface {v2}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Ljava/util/ArrayList;

    .line 175
    new-instance v4, Lorg/json/JSONArray;

    invoke-direct {v4}, Lorg/json/JSONArray;-><init>()V

    .line 177
    invoke-virtual {v3}, Ljava/util/ArrayList;->iterator()Ljava/util/Iterator;

    move-result-object v3

    :goto_3
    invoke-interface {v3}, Ljava/util/Iterator;->hasNext()Z

    move-result v5

    if-eqz v5, :cond_2

    invoke-interface {v3}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v5

    check-cast v5, Lcom/onesignal/OSTrigger;

    .line 178
    invoke-virtual {v5}, Lcom/onesignal/OSTrigger;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v5

    invoke-virtual {v4, v5}, Lorg/json/JSONArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    goto :goto_3

    .line 180
    :cond_2
    invoke-virtual {v1, v4}, Lorg/json/JSONArray;->put(Ljava/lang/Object;)Lorg/json/JSONArray;

    goto :goto_2

    .line 183
    :cond_3
    const-string v2, "triggers"

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 185
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageInternal;->endTime:Ljava/util/Date;

    if-eqz v1, :cond_4

    .line 186
    invoke-static {}, Lcom/onesignal/OneSignalSimpleDateFormat;->iso8601Format()Ljava/text/SimpleDateFormat;

    move-result-object v1

    .line 187
    iget-object v2, p0, Lcom/onesignal/OSInAppMessageInternal;->endTime:Ljava/util/Date;

    invoke-virtual {v1, v2}, Ljava/text/SimpleDateFormat;->format(Ljava/util/Date;)Ljava/lang/String;

    move-result-object v1

    .line 188
    const-string v2, "end_time"

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 191
    :cond_4
    const-string v1, "has_liquid"

    iget-boolean v2, p0, Lcom/onesignal/OSInAppMessageInternal;->hasLiquid:Z

    invoke-virtual {v0, v1, v2}, Lorg/json/JSONObject;->put(Ljava/lang/String;Z)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_4

    :catch_0
    move-exception v1

    .line 194
    invoke-virtual {v1}, Lorg/json/JSONException;->printStackTrace()V

    :goto_4
    return-object v0
.end method

.method public toString()Ljava/lang/String;
    .locals 3

    .line 273
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "OSInAppMessage{messageId=\'"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageInternal;->messageId:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "\', variants="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageInternal;->variants:Ljava/util/HashMap;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", triggers="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageInternal;->triggers:Ljava/util/ArrayList;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", clickedClickIds="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageInternal;->clickedClickIds:Ljava/util/Set;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", redisplayStats="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageInternal;->redisplayStats:Lcom/onesignal/OSInAppMessageRedisplayStats;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", displayDuration="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-wide v1, p0, Lcom/onesignal/OSInAppMessageInternal;->displayDuration:D

    invoke-virtual {v0, v1, v2}, Ljava/lang/StringBuilder;->append(D)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", displayedInSession="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/onesignal/OSInAppMessageInternal;->displayedInSession:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", triggerChanged="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/onesignal/OSInAppMessageInternal;->triggerChanged:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", actionTaken="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/onesignal/OSInAppMessageInternal;->actionTaken:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", isPreview="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/onesignal/OSInAppMessageInternal;->isPreview:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", endTime="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageInternal;->endTime:Ljava/util/Date;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", hasLiquid="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-boolean v1, p0, Lcom/onesignal/OSInAppMessageInternal;->hasLiquid:Z

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Z)Ljava/lang/StringBuilder;

    move-result-object v0

    const/16 v1, 0x7d

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
