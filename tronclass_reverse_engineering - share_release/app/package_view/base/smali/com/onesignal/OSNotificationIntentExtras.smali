.class public final Lcom/onesignal/OSNotificationIntentExtras;
.super Ljava/lang/Object;
.source "OSNotificationIntentExtras.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000,\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\r\n\u0002\u0010\u000b\n\u0002\u0008\u0002\n\u0002\u0010\u0008\n\u0000\n\u0002\u0010\u000e\n\u0000\u0008\u0086\u0008\u0018\u00002\u00020\u0001B\u0019\u0012\u0008\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u0005\u00a2\u0006\u0002\u0010\u0006J\u000b\u0010\u000f\u001a\u0004\u0018\u00010\u0003H\u00c6\u0003J\u000b\u0010\u0010\u001a\u0004\u0018\u00010\u0005H\u00c6\u0003J!\u0010\u0011\u001a\u00020\u00002\n\u0008\u0002\u0010\u0002\u001a\u0004\u0018\u00010\u00032\n\u0008\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0005H\u00c6\u0001J\u0013\u0010\u0012\u001a\u00020\u00132\u0008\u0010\u0014\u001a\u0004\u0018\u00010\u0001H\u00d6\u0003J\t\u0010\u0015\u001a\u00020\u0016H\u00d6\u0001J\t\u0010\u0017\u001a\u00020\u0018H\u00d6\u0001R\u001c\u0010\u0002\u001a\u0004\u0018\u00010\u0003X\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\u0008\u0007\u0010\u0008\"\u0004\u0008\t\u0010\nR\u001c\u0010\u0004\u001a\u0004\u0018\u00010\u0005X\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\u0008\u000b\u0010\u000c\"\u0004\u0008\r\u0010\u000e\u00a8\u0006\u0019"
    }
    d2 = {
        "Lcom/onesignal/OSNotificationIntentExtras;",
        "",
        "dataArray",
        "Lorg/json/JSONArray;",
        "jsonData",
        "Lorg/json/JSONObject;",
        "(Lorg/json/JSONArray;Lorg/json/JSONObject;)V",
        "getDataArray",
        "()Lorg/json/JSONArray;",
        "setDataArray",
        "(Lorg/json/JSONArray;)V",
        "getJsonData",
        "()Lorg/json/JSONObject;",
        "setJsonData",
        "(Lorg/json/JSONObject;)V",
        "component1",
        "component2",
        "copy",
        "equals",
        "",
        "other",
        "hashCode",
        "",
        "toString",
        "",
        "onesignal_release"
    }
    k = 0x1
    mv = {
        0x1,
        0x5,
        0x1
    }
    xi = 0x30
.end annotation


# instance fields
.field private dataArray:Lorg/json/JSONArray;

.field private jsonData:Lorg/json/JSONObject;


# direct methods
.method public constructor <init>(Lorg/json/JSONArray;Lorg/json/JSONObject;)V
    .locals 0

    .line 6
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    iput-object p1, p0, Lcom/onesignal/OSNotificationIntentExtras;->dataArray:Lorg/json/JSONArray;

    iput-object p2, p0, Lcom/onesignal/OSNotificationIntentExtras;->jsonData:Lorg/json/JSONObject;

    return-void
.end method

.method public static synthetic copy$default(Lcom/onesignal/OSNotificationIntentExtras;Lorg/json/JSONArray;Lorg/json/JSONObject;ILjava/lang/Object;)Lcom/onesignal/OSNotificationIntentExtras;
    .locals 0

    and-int/lit8 p4, p3, 0x1

    if-eqz p4, :cond_0

    iget-object p1, p0, Lcom/onesignal/OSNotificationIntentExtras;->dataArray:Lorg/json/JSONArray;

    :cond_0
    and-int/lit8 p3, p3, 0x2

    if-eqz p3, :cond_1

    iget-object p2, p0, Lcom/onesignal/OSNotificationIntentExtras;->jsonData:Lorg/json/JSONObject;

    :cond_1
    invoke-virtual {p0, p1, p2}, Lcom/onesignal/OSNotificationIntentExtras;->copy(Lorg/json/JSONArray;Lorg/json/JSONObject;)Lcom/onesignal/OSNotificationIntentExtras;

    move-result-object p0

    return-object p0
.end method


# virtual methods
.method public final component1()Lorg/json/JSONArray;
    .locals 1

    iget-object v0, p0, Lcom/onesignal/OSNotificationIntentExtras;->dataArray:Lorg/json/JSONArray;

    return-object v0
.end method

.method public final component2()Lorg/json/JSONObject;
    .locals 1

    iget-object v0, p0, Lcom/onesignal/OSNotificationIntentExtras;->jsonData:Lorg/json/JSONObject;

    return-object v0
.end method

.method public final copy(Lorg/json/JSONArray;Lorg/json/JSONObject;)Lcom/onesignal/OSNotificationIntentExtras;
    .locals 1

    new-instance v0, Lcom/onesignal/OSNotificationIntentExtras;

    invoke-direct {v0, p1, p2}, Lcom/onesignal/OSNotificationIntentExtras;-><init>(Lorg/json/JSONArray;Lorg/json/JSONObject;)V

    return-object v0
.end method

.method public equals(Ljava/lang/Object;)Z
    .locals 4

    const/4 v0, 0x1

    if-ne p0, p1, :cond_0

    return v0

    :cond_0
    instance-of v1, p1, Lcom/onesignal/OSNotificationIntentExtras;

    const/4 v2, 0x0

    if-nez v1, :cond_1

    return v2

    :cond_1
    check-cast p1, Lcom/onesignal/OSNotificationIntentExtras;

    iget-object v1, p0, Lcom/onesignal/OSNotificationIntentExtras;->dataArray:Lorg/json/JSONArray;

    iget-object v3, p1, Lcom/onesignal/OSNotificationIntentExtras;->dataArray:Lorg/json/JSONArray;

    invoke-static {v1, v3}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v1

    if-nez v1, :cond_2

    return v2

    :cond_2
    iget-object v1, p0, Lcom/onesignal/OSNotificationIntentExtras;->jsonData:Lorg/json/JSONObject;

    iget-object p1, p1, Lcom/onesignal/OSNotificationIntentExtras;->jsonData:Lorg/json/JSONObject;

    invoke-static {v1, p1}, Lkotlin/jvm/internal/Intrinsics;->areEqual(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_3

    return v2

    :cond_3
    return v0
.end method

.method public final getDataArray()Lorg/json/JSONArray;
    .locals 1

    .line 6
    iget-object v0, p0, Lcom/onesignal/OSNotificationIntentExtras;->dataArray:Lorg/json/JSONArray;

    return-object v0
.end method

.method public final getJsonData()Lorg/json/JSONObject;
    .locals 1

    .line 6
    iget-object v0, p0, Lcom/onesignal/OSNotificationIntentExtras;->jsonData:Lorg/json/JSONObject;

    return-object v0
.end method

.method public hashCode()I
    .locals 3

    iget-object v0, p0, Lcom/onesignal/OSNotificationIntentExtras;->dataArray:Lorg/json/JSONArray;

    const/4 v1, 0x0

    if-nez v0, :cond_0

    move v0, v1

    goto :goto_0

    :cond_0
    invoke-virtual {v0}, Lorg/json/JSONArray;->hashCode()I

    move-result v0

    :goto_0
    mul-int/lit8 v0, v0, 0x1f

    iget-object v2, p0, Lcom/onesignal/OSNotificationIntentExtras;->jsonData:Lorg/json/JSONObject;

    if-nez v2, :cond_1

    goto :goto_1

    :cond_1
    invoke-virtual {v2}, Lorg/json/JSONObject;->hashCode()I

    move-result v1

    :goto_1
    add-int/2addr v0, v1

    return v0
.end method

.method public final setDataArray(Lorg/json/JSONArray;)V
    .locals 0

    .line 6
    iput-object p1, p0, Lcom/onesignal/OSNotificationIntentExtras;->dataArray:Lorg/json/JSONArray;

    return-void
.end method

.method public final setJsonData(Lorg/json/JSONObject;)V
    .locals 0

    .line 6
    iput-object p1, p0, Lcom/onesignal/OSNotificationIntentExtras;->jsonData:Lorg/json/JSONObject;

    return-void
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "OSNotificationIntentExtras(dataArray="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-object v1, p0, Lcom/onesignal/OSNotificationIntentExtras;->dataArray:Lorg/json/JSONArray;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", jsonData="

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Lcom/onesignal/OSNotificationIntentExtras;->jsonData:Lorg/json/JSONObject;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const/16 v1, 0x29

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
