.class public Lcom/onesignal/OSInAppMessageTag;
.super Ljava/lang/Object;
.source "OSInAppMessageTag.java"


# static fields
.field private static final ADD_TAGS:Ljava/lang/String; = "adds"

.field private static final REMOVE_TAGS:Ljava/lang/String; = "removes"


# instance fields
.field private tagsToAdd:Lorg/json/JSONObject;

.field private tagsToRemove:Lorg/json/JSONArray;


# direct methods
.method constructor <init>(Lorg/json/JSONObject;)V
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 19
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 20
    const-string v0, "adds"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    const/4 v2, 0x0

    if-eqz v1, :cond_0

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->getJSONObject(Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    goto :goto_0

    :cond_0
    move-object v0, v2

    :goto_0
    iput-object v0, p0, Lcom/onesignal/OSInAppMessageTag;->tagsToAdd:Lorg/json/JSONObject;

    .line 21
    const-string v0, "removes"

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->has(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-virtual {p1, v0}, Lorg/json/JSONObject;->getJSONArray(Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object v2

    :cond_1
    iput-object v2, p0, Lcom/onesignal/OSInAppMessageTag;->tagsToRemove:Lorg/json/JSONArray;

    return-void
.end method


# virtual methods
.method public getTagsToAdd()Lorg/json/JSONObject;
    .locals 1

    .line 39
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageTag;->tagsToAdd:Lorg/json/JSONObject;

    return-object v0
.end method

.method public getTagsToRemove()Lorg/json/JSONArray;
    .locals 1

    .line 47
    iget-object v0, p0, Lcom/onesignal/OSInAppMessageTag;->tagsToRemove:Lorg/json/JSONArray;

    return-object v0
.end method

.method public setTagsToAdd(Lorg/json/JSONObject;)V
    .locals 0

    .line 43
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageTag;->tagsToAdd:Lorg/json/JSONObject;

    return-void
.end method

.method public setTagsToRemove(Lorg/json/JSONArray;)V
    .locals 0

    .line 51
    iput-object p1, p0, Lcom/onesignal/OSInAppMessageTag;->tagsToRemove:Lorg/json/JSONArray;

    return-void
.end method

.method public toJSONObject()Lorg/json/JSONObject;
    .locals 3

    .line 25
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 27
    :try_start_0
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageTag;->tagsToAdd:Lorg/json/JSONObject;

    if-eqz v1, :cond_0

    .line 28
    const-string v2, "adds"

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 29
    :cond_0
    iget-object v1, p0, Lcom/onesignal/OSInAppMessageTag;->tagsToRemove:Lorg/json/JSONArray;

    if-eqz v1, :cond_1

    .line 30
    const-string v2, "removes"

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v1

    .line 32
    invoke-virtual {v1}, Lorg/json/JSONException;->printStackTrace()V

    :cond_1
    :goto_0
    return-object v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 56
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "OSInAppMessageTag{adds="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageTag;->tagsToAdd:Lorg/json/JSONObject;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", removes="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSInAppMessageTag;->tagsToRemove:Lorg/json/JSONArray;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const/16 v1, 0x7d

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
