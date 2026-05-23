.class public Lorg/apache/cordova/CordovaArgs;
.super Ljava/lang/Object;
.source "CordovaArgs.java"


# instance fields
.field private baseArgs:Lorg/json/JSONArray;


# direct methods
.method public constructor <init>(Lorg/json/JSONArray;)V
    .locals 0

    .line 30
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 31
    iput-object p1, p0, Lorg/apache/cordova/CordovaArgs;->baseArgs:Lorg/json/JSONArray;

    return-void
.end method


# virtual methods
.method public get(I)Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 37
    iget-object v0, p0, Lorg/apache/cordova/CordovaArgs;->baseArgs:Lorg/json/JSONArray;

    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->get(I)Ljava/lang/Object;

    move-result-object p1

    return-object p1
.end method

.method public getArrayBuffer(I)[B
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 108
    iget-object v0, p0, Lorg/apache/cordova/CordovaArgs;->baseArgs:Lorg/json/JSONArray;

    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object p1

    const/4 v0, 0x0

    .line 109
    invoke-static {p1, v0}, Landroid/util/Base64;->decode(Ljava/lang/String;I)[B

    move-result-object p1

    return-object p1
.end method

.method public getBoolean(I)Z
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 41
    iget-object v0, p0, Lorg/apache/cordova/CordovaArgs;->baseArgs:Lorg/json/JSONArray;

    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->getBoolean(I)Z

    move-result p1

    return p1
.end method

.method public getDouble(I)D
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 45
    iget-object v0, p0, Lorg/apache/cordova/CordovaArgs;->baseArgs:Lorg/json/JSONArray;

    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->getDouble(I)D

    move-result-wide v0

    return-wide v0
.end method

.method public getInt(I)I
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 49
    iget-object v0, p0, Lorg/apache/cordova/CordovaArgs;->baseArgs:Lorg/json/JSONArray;

    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->getInt(I)I

    move-result p1

    return p1
.end method

.method public getJSONArray(I)Lorg/json/JSONArray;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 53
    iget-object v0, p0, Lorg/apache/cordova/CordovaArgs;->baseArgs:Lorg/json/JSONArray;

    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->getJSONArray(I)Lorg/json/JSONArray;

    move-result-object p1

    return-object p1
.end method

.method public getJSONObject(I)Lorg/json/JSONObject;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 57
    iget-object v0, p0, Lorg/apache/cordova/CordovaArgs;->baseArgs:Lorg/json/JSONArray;

    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->getJSONObject(I)Lorg/json/JSONObject;

    move-result-object p1

    return-object p1
.end method

.method public getLong(I)J
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 61
    iget-object v0, p0, Lorg/apache/cordova/CordovaArgs;->baseArgs:Lorg/json/JSONArray;

    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->getLong(I)J

    move-result-wide v0

    return-wide v0
.end method

.method public getString(I)Ljava/lang/String;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 65
    iget-object v0, p0, Lorg/apache/cordova/CordovaArgs;->baseArgs:Lorg/json/JSONArray;

    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->getString(I)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method public isNull(I)Z
    .locals 1

    .line 102
    iget-object v0, p0, Lorg/apache/cordova/CordovaArgs;->baseArgs:Lorg/json/JSONArray;

    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->isNull(I)Z

    move-result p1

    return p1
.end method

.method public opt(I)Ljava/lang/Object;
    .locals 1

    .line 70
    iget-object v0, p0, Lorg/apache/cordova/CordovaArgs;->baseArgs:Lorg/json/JSONArray;

    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->opt(I)Ljava/lang/Object;

    move-result-object p1

    return-object p1
.end method

.method public optBoolean(I)Z
    .locals 1

    .line 74
    iget-object v0, p0, Lorg/apache/cordova/CordovaArgs;->baseArgs:Lorg/json/JSONArray;

    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->optBoolean(I)Z

    move-result p1

    return p1
.end method

.method public optDouble(I)D
    .locals 2

    .line 78
    iget-object v0, p0, Lorg/apache/cordova/CordovaArgs;->baseArgs:Lorg/json/JSONArray;

    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->optDouble(I)D

    move-result-wide v0

    return-wide v0
.end method

.method public optInt(I)I
    .locals 1

    .line 82
    iget-object v0, p0, Lorg/apache/cordova/CordovaArgs;->baseArgs:Lorg/json/JSONArray;

    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->optInt(I)I

    move-result p1

    return p1
.end method

.method public optJSONArray(I)Lorg/json/JSONArray;
    .locals 1

    .line 86
    iget-object v0, p0, Lorg/apache/cordova/CordovaArgs;->baseArgs:Lorg/json/JSONArray;

    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->optJSONArray(I)Lorg/json/JSONArray;

    move-result-object p1

    return-object p1
.end method

.method public optJSONObject(I)Lorg/json/JSONObject;
    .locals 1

    .line 90
    iget-object v0, p0, Lorg/apache/cordova/CordovaArgs;->baseArgs:Lorg/json/JSONArray;

    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->optJSONObject(I)Lorg/json/JSONObject;

    move-result-object p1

    return-object p1
.end method

.method public optLong(I)J
    .locals 2

    .line 94
    iget-object v0, p0, Lorg/apache/cordova/CordovaArgs;->baseArgs:Lorg/json/JSONArray;

    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->optLong(I)J

    move-result-wide v0

    return-wide v0
.end method

.method public optString(I)Ljava/lang/String;
    .locals 1

    .line 98
    iget-object v0, p0, Lorg/apache/cordova/CordovaArgs;->baseArgs:Lorg/json/JSONArray;

    invoke-virtual {v0, p1}, Lorg/json/JSONArray;->optString(I)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method
