.class public abstract Lcom/tchvu3/capvoicerecorder/ResponseGenerator;
.super Ljava/lang/Object;
.source "ResponseGenerator.java"


# static fields
.field private static final RESPONSE_KEY:Ljava/lang/String; = "value"


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 6
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static dataResponse(Ljava/lang/Object;)Lcom/getcapacitor/JSObject;
    .locals 2

    .line 27
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 28
    const-string v1, "value"

    invoke-virtual {v0, v1, p0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    return-object v0
.end method

.method public static failResponse()Lcom/getcapacitor/JSObject;
    .locals 3

    .line 21
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 22
    const-string v1, "value"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    return-object v0
.end method

.method public static fromBoolean(Z)Lcom/getcapacitor/JSObject;
    .locals 0

    if-eqz p0, :cond_0

    .line 11
    invoke-static {}, Lcom/tchvu3/capvoicerecorder/ResponseGenerator;->successResponse()Lcom/getcapacitor/JSObject;

    move-result-object p0

    goto :goto_0

    :cond_0
    invoke-static {}, Lcom/tchvu3/capvoicerecorder/ResponseGenerator;->failResponse()Lcom/getcapacitor/JSObject;

    move-result-object p0

    :goto_0
    return-object p0
.end method

.method public static successResponse()Lcom/getcapacitor/JSObject;
    .locals 3

    .line 15
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 16
    const-string v1, "value"

    const/4 v2, 0x1

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Z)Lcom/getcapacitor/JSObject;

    return-object v0
.end method
