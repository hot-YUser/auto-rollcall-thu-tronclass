.class public Lcom/getcapacitor/PluginCall;
.super Ljava/lang/Object;
.source "PluginCall.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/getcapacitor/PluginCall$PluginCallDataTypeException;
    }
.end annotation


# static fields
.field public static final CALLBACK_ID_DANGLING:Ljava/lang/String; = "-1"

.field private static final UNAVAILABLE:Ljava/lang/String; = "not available"

.field private static final UNIMPLEMENTED:Ljava/lang/String; = "not implemented"


# instance fields
.field private final callbackId:Ljava/lang/String;

.field private final data:Lcom/getcapacitor/JSObject;

.field private isReleased:Z

.field private final methodName:Ljava/lang/String;

.field private final msgHandler:Lcom/getcapacitor/MessageHandler;

.field private final pluginId:Ljava/lang/String;

.field private shouldSave:Z


# direct methods
.method public constructor <init>(Lcom/getcapacitor/MessageHandler;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Lcom/getcapacitor/JSObject;)V
    .locals 1

    .line 36
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 29
    iput-boolean v0, p0, Lcom/getcapacitor/PluginCall;->shouldSave:Z

    .line 34
    iput-boolean v0, p0, Lcom/getcapacitor/PluginCall;->isReleased:Z

    .line 37
    iput-object p1, p0, Lcom/getcapacitor/PluginCall;->msgHandler:Lcom/getcapacitor/MessageHandler;

    .line 38
    iput-object p2, p0, Lcom/getcapacitor/PluginCall;->pluginId:Ljava/lang/String;

    .line 39
    iput-object p3, p0, Lcom/getcapacitor/PluginCall;->callbackId:Ljava/lang/String;

    .line 40
    iput-object p4, p0, Lcom/getcapacitor/PluginCall;->methodName:Ljava/lang/String;

    .line 41
    iput-object p5, p0, Lcom/getcapacitor/PluginCall;->data:Lcom/getcapacitor/JSObject;

    return-void
.end method


# virtual methods
.method public error(Ljava/lang/String;)V
    .locals 1

    const/4 v0, 0x0

    .line 106
    invoke-virtual {p0, p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/Exception;)V

    return-void
.end method

.method public error(Ljava/lang/String;Ljava/lang/Exception;)V
    .locals 1

    const/4 v0, 0x0

    .line 85
    invoke-virtual {p0, p1, v0, p2}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Exception;)V

    return-void
.end method

.method public error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Exception;)V
    .locals 5

    .line 89
    new-instance v0, Lcom/getcapacitor/PluginResult;

    invoke-direct {v0}, Lcom/getcapacitor/PluginResult;-><init>()V

    .line 91
    const-string v1, "Plugin"

    const/4 v2, 0x0

    const/4 v3, 0x1

    if-eqz p3, :cond_0

    .line 92
    new-array v4, v3, [Ljava/lang/String;

    aput-object v1, v4, v2

    invoke-static {v4}, Lcom/getcapacitor/Logger;->tags([Ljava/lang/String;)Ljava/lang/String;

    move-result-object v4

    invoke-static {v4, p1, p3}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :cond_0
    const/4 p3, 0x0

    .line 96
    :try_start_0
    const-string v4, "message"

    invoke-virtual {v0, v4, p1}, Lcom/getcapacitor/PluginResult;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/PluginResult;

    .line 97
    const-string p1, "code"

    invoke-virtual {v0, p1, p2}, Lcom/getcapacitor/PluginResult;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/PluginResult;
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    .line 99
    new-array p2, v3, [Ljava/lang/String;

    aput-object v1, p2, v2

    invoke-static {p2}, Lcom/getcapacitor/Logger;->tags([Ljava/lang/String;)Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p1}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object p1

    invoke-static {p2, p1, p3}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 102
    :goto_0
    iget-object p1, p0, Lcom/getcapacitor/PluginCall;->msgHandler:Lcom/getcapacitor/MessageHandler;

    invoke-virtual {p1, p0, p3, v0}, Lcom/getcapacitor/MessageHandler;->sendResponseMessage(Lcom/getcapacitor/PluginCall;Lcom/getcapacitor/PluginResult;Lcom/getcapacitor/PluginResult;)V

    return-void
.end method

.method public errorCallback(Ljava/lang/String;)V
    .locals 5

    .line 73
    new-instance v0, Lcom/getcapacitor/PluginResult;

    invoke-direct {v0}, Lcom/getcapacitor/PluginResult;-><init>()V

    const/4 v1, 0x0

    .line 76
    :try_start_0
    const-string v2, "message"

    invoke-virtual {v0, v2, p1}, Lcom/getcapacitor/PluginResult;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/PluginResult;
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception p1

    const/4 v2, 0x1

    .line 78
    new-array v2, v2, [Ljava/lang/String;

    const/4 v3, 0x0

    const-string v4, "Plugin"

    aput-object v4, v2, v3

    invoke-static {v2}, Lcom/getcapacitor/Logger;->tags([Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    invoke-virtual {p1}, Ljava/lang/Exception;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v2, p1, v1}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 81
    :goto_0
    iget-object p1, p0, Lcom/getcapacitor/PluginCall;->msgHandler:Lcom/getcapacitor/MessageHandler;

    invoke-virtual {p1, p0, v1, v0}, Lcom/getcapacitor/MessageHandler;->sendResponseMessage(Lcom/getcapacitor/PluginCall;Lcom/getcapacitor/PluginResult;Lcom/getcapacitor/PluginResult;)V

    return-void
.end method

.method public getArray(Ljava/lang/String;)Lcom/getcapacitor/JSArray;
    .locals 1

    .line 237
    new-instance v0, Lcom/getcapacitor/JSArray;

    invoke-direct {v0}, Lcom/getcapacitor/JSArray;-><init>()V

    invoke-virtual {p0, p1, v0}, Lcom/getcapacitor/PluginCall;->getArray(Ljava/lang/String;Lcom/getcapacitor/JSArray;)Lcom/getcapacitor/JSArray;

    move-result-object p1

    return-object p1
.end method

.method public getArray(Ljava/lang/String;Lcom/getcapacitor/JSArray;)Lcom/getcapacitor/JSArray;
    .locals 3

    .line 247
    iget-object v0, p0, Lcom/getcapacitor/PluginCall;->data:Lcom/getcapacitor/JSObject;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/JSObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object p1

    if-nez p1, :cond_0

    return-object p2

    .line 250
    :cond_0
    instance-of v0, p1, Lorg/json/JSONArray;

    if-eqz v0, :cond_2

    .line 252
    :try_start_0
    check-cast p1, Lorg/json/JSONArray;

    .line 253
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    const/4 v1, 0x0

    .line 254
    :goto_0
    invoke-virtual {p1}, Lorg/json/JSONArray;->length()I

    move-result v2

    if-ge v1, v2, :cond_1

    .line 255
    invoke-virtual {p1, v1}, Lorg/json/JSONArray;->get(I)Ljava/lang/Object;

    move-result-object v2

    invoke-interface {v0, v2}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v1, v1, 0x1

    goto :goto_0

    .line 257
    :cond_1
    new-instance p1, Lcom/getcapacitor/JSArray;

    invoke-interface {v0}, Ljava/util/List;->toArray()[Ljava/lang/Object;

    move-result-object v0

    invoke-direct {p1, v0}, Lcom/getcapacitor/JSArray;-><init>(Ljava/lang/Object;)V
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    return-object p1

    :catch_0
    :cond_2
    return-object p2
.end method

.method public getBoolean(Ljava/lang/String;)Ljava/lang/Boolean;
    .locals 1

    const/4 v0, 0x0

    .line 206
    invoke-virtual {p0, p1, v0}, Lcom/getcapacitor/PluginCall;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object p1

    return-object p1
.end method

.method public getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;
    .locals 1

    .line 209
    iget-object v0, p0, Lcom/getcapacitor/PluginCall;->data:Lcom/getcapacitor/JSObject;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/JSObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object p1

    if-nez p1, :cond_0

    return-object p2

    .line 212
    :cond_0
    instance-of v0, p1, Ljava/lang/Boolean;

    if-eqz v0, :cond_1

    .line 213
    check-cast p1, Ljava/lang/Boolean;

    return-object p1

    :cond_1
    return-object p2
.end method

.method public getCallbackId()Ljava/lang/String;
    .locals 1

    .line 132
    iget-object v0, p0, Lcom/getcapacitor/PluginCall;->callbackId:Ljava/lang/String;

    return-object v0
.end method

.method public getData()Lcom/getcapacitor/JSObject;
    .locals 1

    .line 138
    iget-object v0, p0, Lcom/getcapacitor/PluginCall;->data:Lcom/getcapacitor/JSObject;

    return-object v0
.end method

.method public getDouble(Ljava/lang/String;)Ljava/lang/Double;
    .locals 1

    const/4 v0, 0x0

    .line 187
    invoke-virtual {p0, p1, v0}, Lcom/getcapacitor/PluginCall;->getDouble(Ljava/lang/String;Ljava/lang/Double;)Ljava/lang/Double;

    move-result-object p1

    return-object p1
.end method

.method public getDouble(Ljava/lang/String;Ljava/lang/Double;)Ljava/lang/Double;
    .locals 1

    .line 190
    iget-object v0, p0, Lcom/getcapacitor/PluginCall;->data:Lcom/getcapacitor/JSObject;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/JSObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object p1

    if-nez p1, :cond_0

    return-object p2

    .line 193
    :cond_0
    instance-of v0, p1, Ljava/lang/Double;

    if-eqz v0, :cond_1

    .line 194
    check-cast p1, Ljava/lang/Double;

    return-object p1

    .line 196
    :cond_1
    instance-of v0, p1, Ljava/lang/Float;

    if-eqz v0, :cond_2

    .line 197
    check-cast p1, Ljava/lang/Float;

    invoke-virtual {p1}, Ljava/lang/Float;->doubleValue()D

    move-result-wide p1

    invoke-static {p1, p2}, Ljava/lang/Double;->valueOf(D)Ljava/lang/Double;

    move-result-object p1

    return-object p1

    .line 199
    :cond_2
    instance-of v0, p1, Ljava/lang/Integer;

    if-eqz v0, :cond_3

    .line 200
    check-cast p1, Ljava/lang/Integer;

    invoke-virtual {p1}, Ljava/lang/Integer;->doubleValue()D

    move-result-wide p1

    invoke-static {p1, p2}, Ljava/lang/Double;->valueOf(D)Ljava/lang/Double;

    move-result-object p1

    return-object p1

    :cond_3
    return-object p2
.end method

.method public getFloat(Ljava/lang/String;)Ljava/lang/Float;
    .locals 1

    const/4 v0, 0x0

    .line 168
    invoke-virtual {p0, p1, v0}, Lcom/getcapacitor/PluginCall;->getFloat(Ljava/lang/String;Ljava/lang/Float;)Ljava/lang/Float;

    move-result-object p1

    return-object p1
.end method

.method public getFloat(Ljava/lang/String;Ljava/lang/Float;)Ljava/lang/Float;
    .locals 1

    .line 171
    iget-object v0, p0, Lcom/getcapacitor/PluginCall;->data:Lcom/getcapacitor/JSObject;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/JSObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object p1

    if-nez p1, :cond_0

    return-object p2

    .line 174
    :cond_0
    instance-of v0, p1, Ljava/lang/Float;

    if-eqz v0, :cond_1

    .line 175
    check-cast p1, Ljava/lang/Float;

    return-object p1

    .line 177
    :cond_1
    instance-of v0, p1, Ljava/lang/Double;

    if-eqz v0, :cond_2

    .line 178
    check-cast p1, Ljava/lang/Double;

    invoke-virtual {p1}, Ljava/lang/Double;->floatValue()F

    move-result p1

    invoke-static {p1}, Ljava/lang/Float;->valueOf(F)Ljava/lang/Float;

    move-result-object p1

    return-object p1

    .line 180
    :cond_2
    instance-of v0, p1, Ljava/lang/Integer;

    if-eqz v0, :cond_3

    .line 181
    check-cast p1, Ljava/lang/Integer;

    invoke-virtual {p1}, Ljava/lang/Integer;->floatValue()F

    move-result p1

    invoke-static {p1}, Ljava/lang/Float;->valueOf(F)Ljava/lang/Float;

    move-result-object p1

    return-object p1

    :cond_3
    return-object p2
.end method

.method public getInt(Ljava/lang/String;)Ljava/lang/Integer;
    .locals 1

    const/4 v0, 0x0

    .line 155
    invoke-virtual {p0, p1, v0}, Lcom/getcapacitor/PluginCall;->getInt(Ljava/lang/String;Ljava/lang/Integer;)Ljava/lang/Integer;

    move-result-object p1

    return-object p1
.end method

.method public getInt(Ljava/lang/String;Ljava/lang/Integer;)Ljava/lang/Integer;
    .locals 1

    .line 158
    iget-object v0, p0, Lcom/getcapacitor/PluginCall;->data:Lcom/getcapacitor/JSObject;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/JSObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object p1

    if-nez p1, :cond_0

    return-object p2

    .line 161
    :cond_0
    instance-of v0, p1, Ljava/lang/Integer;

    if-eqz v0, :cond_1

    .line 162
    check-cast p1, Ljava/lang/Integer;

    return-object p1

    :cond_1
    return-object p2
.end method

.method public getMethodName()Ljava/lang/String;
    .locals 1

    .line 135
    iget-object v0, p0, Lcom/getcapacitor/PluginCall;->methodName:Ljava/lang/String;

    return-object v0
.end method

.method public getObject(Ljava/lang/String;)Lcom/getcapacitor/JSObject;
    .locals 1

    .line 219
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    invoke-virtual {p0, p1, v0}, Lcom/getcapacitor/PluginCall;->getObject(Ljava/lang/String;Lcom/getcapacitor/JSObject;)Lcom/getcapacitor/JSObject;

    move-result-object p1

    return-object p1
.end method

.method public getObject(Ljava/lang/String;Lcom/getcapacitor/JSObject;)Lcom/getcapacitor/JSObject;
    .locals 1

    .line 223
    iget-object v0, p0, Lcom/getcapacitor/PluginCall;->data:Lcom/getcapacitor/JSObject;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/JSObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object p1

    if-nez p1, :cond_0

    return-object p2

    .line 226
    :cond_0
    instance-of v0, p1, Lorg/json/JSONObject;

    if-eqz v0, :cond_1

    .line 228
    :try_start_0
    check-cast p1, Lorg/json/JSONObject;

    invoke-static {p1}, Lcom/getcapacitor/JSObject;->fromJSONObject(Lorg/json/JSONObject;)Lcom/getcapacitor/JSObject;

    move-result-object p1
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    return-object p1

    :catch_0
    :cond_1
    return-object p2
.end method

.method public getPluginId()Ljava/lang/String;
    .locals 1

    .line 129
    iget-object v0, p0, Lcom/getcapacitor/PluginCall;->pluginId:Ljava/lang/String;

    return-object v0
.end method

.method public getString(Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    const/4 v0, 0x0

    .line 142
    invoke-virtual {p0, p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method public getString(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    .line 145
    iget-object v0, p0, Lcom/getcapacitor/PluginCall;->data:Lcom/getcapacitor/JSObject;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/JSObject;->opt(Ljava/lang/String;)Ljava/lang/Object;

    move-result-object p1

    if-nez p1, :cond_0

    return-object p2

    .line 148
    :cond_0
    instance-of v0, p1, Ljava/lang/String;

    if-eqz v0, :cond_1

    .line 149
    check-cast p1, Ljava/lang/String;

    return-object p1

    :cond_1
    return-object p2
.end method

.method public hasOption(Ljava/lang/String;)Z
    .locals 1

    .line 266
    iget-object v0, p0, Lcom/getcapacitor/PluginCall;->data:Lcom/getcapacitor/JSObject;

    invoke-virtual {v0, p1}, Lcom/getcapacitor/JSObject;->has(Ljava/lang/String;)Z

    move-result p1

    return p1
.end method

.method public isReleased()Z
    .locals 1

    .line 289
    iget-boolean v0, p0, Lcom/getcapacitor/PluginCall;->isReleased:Z

    return v0
.end method

.method public isSaved()Z
    .locals 1

    .line 285
    iget-boolean v0, p0, Lcom/getcapacitor/PluginCall;->shouldSave:Z

    return v0
.end method

.method public reject(Ljava/lang/String;)V
    .locals 1

    const/4 v0, 0x0

    .line 118
    invoke-virtual {p0, p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/Exception;)V

    return-void
.end method

.method public reject(Ljava/lang/String;Ljava/lang/Exception;)V
    .locals 0

    .line 110
    invoke-virtual {p0, p1, p2}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/Exception;)V

    return-void
.end method

.method public reject(Ljava/lang/String;Ljava/lang/String;)V
    .locals 1

    const/4 v0, 0x0

    .line 114
    invoke-virtual {p0, p1, p2, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Exception;)V

    return-void
.end method

.method public release(Lcom/getcapacitor/Bridge;)V
    .locals 1

    const/4 v0, 0x0

    .line 279
    iput-boolean v0, p0, Lcom/getcapacitor/PluginCall;->shouldSave:Z

    .line 280
    invoke-virtual {p1, p0}, Lcom/getcapacitor/Bridge;->releaseCall(Lcom/getcapacitor/PluginCall;)V

    const/4 p1, 0x1

    .line 281
    iput-boolean p1, p0, Lcom/getcapacitor/PluginCall;->isReleased:Z

    return-void
.end method

.method public resolve()V
    .locals 1

    .line 69
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    invoke-virtual {p0, v0}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public resolve(Lcom/getcapacitor/JSObject;)V
    .locals 2

    .line 64
    new-instance v0, Lcom/getcapacitor/PluginResult;

    invoke-direct {v0, p1}, Lcom/getcapacitor/PluginResult;-><init>(Lcom/getcapacitor/JSObject;)V

    .line 65
    iget-object p1, p0, Lcom/getcapacitor/PluginCall;->msgHandler:Lcom/getcapacitor/MessageHandler;

    const/4 v1, 0x0

    invoke-virtual {p1, p0, v0, v1}, Lcom/getcapacitor/MessageHandler;->sendResponseMessage(Lcom/getcapacitor/PluginCall;Lcom/getcapacitor/PluginResult;Lcom/getcapacitor/PluginResult;)V

    return-void
.end method

.method public save()V
    .locals 1

    const/4 v0, 0x1

    .line 275
    iput-boolean v0, p0, Lcom/getcapacitor/PluginCall;->shouldSave:Z

    return-void
.end method

.method public success()V
    .locals 1

    .line 60
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    invoke-virtual {p0, v0}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    return-void
.end method

.method public success(Lcom/getcapacitor/JSObject;)V
    .locals 2

    .line 55
    new-instance v0, Lcom/getcapacitor/PluginResult;

    invoke-direct {v0, p1}, Lcom/getcapacitor/PluginResult;-><init>(Lcom/getcapacitor/JSObject;)V

    .line 56
    iget-object p1, p0, Lcom/getcapacitor/PluginCall;->msgHandler:Lcom/getcapacitor/MessageHandler;

    const/4 v1, 0x0

    invoke-virtual {p1, p0, v0, v1}, Lcom/getcapacitor/MessageHandler;->sendResponseMessage(Lcom/getcapacitor/PluginCall;Lcom/getcapacitor/PluginResult;Lcom/getcapacitor/PluginResult;)V

    return-void
.end method

.method public successCallback(Lcom/getcapacitor/PluginResult;)V
    .locals 2

    .line 45
    const-string v0, "-1"

    iget-object v1, p0, Lcom/getcapacitor/PluginCall;->callbackId:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-eqz v0, :cond_0

    return-void

    .line 50
    :cond_0
    iget-object v0, p0, Lcom/getcapacitor/PluginCall;->msgHandler:Lcom/getcapacitor/MessageHandler;

    const/4 v1, 0x0

    invoke-virtual {v0, p0, p1, v1}, Lcom/getcapacitor/MessageHandler;->sendResponseMessage(Lcom/getcapacitor/PluginCall;Lcom/getcapacitor/PluginResult;Lcom/getcapacitor/PluginResult;)V

    return-void
.end method

.method public unavailable()V
    .locals 2

    .line 126
    const-string v0, "not available"

    const/4 v1, 0x0

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/Exception;)V

    return-void
.end method

.method public unimplemented()V
    .locals 2

    .line 122
    const-string v0, "not implemented"

    const/4 v1, 0x0

    invoke-virtual {p0, v0, v1}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/Exception;)V

    return-void
.end method
