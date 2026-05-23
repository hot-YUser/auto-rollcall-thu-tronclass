.class public Lorg/apache/cordova/filetransfer/FileUploadResult;
.super Ljava/lang/Object;
.source "FileUploadResult.java"


# instance fields
.field private bytesSent:J

.field private objectId:Ljava/lang/String;

.field private response:Ljava/lang/String;

.field private responseCode:I


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 27
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const-wide/16 v0, 0x0

    .line 29
    iput-wide v0, p0, Lorg/apache/cordova/filetransfer/FileUploadResult;->bytesSent:J

    const/4 v0, -0x1

    .line 30
    iput v0, p0, Lorg/apache/cordova/filetransfer/FileUploadResult;->responseCode:I

    const/4 v0, 0x0

    .line 31
    iput-object v0, p0, Lorg/apache/cordova/filetransfer/FileUploadResult;->response:Ljava/lang/String;

    .line 32
    iput-object v0, p0, Lorg/apache/cordova/filetransfer/FileUploadResult;->objectId:Ljava/lang/String;

    return-void
.end method


# virtual methods
.method public getBytesSent()J
    .locals 2

    .line 35
    iget-wide v0, p0, Lorg/apache/cordova/filetransfer/FileUploadResult;->bytesSent:J

    return-wide v0
.end method

.method public getObjectId()Ljava/lang/String;
    .locals 1

    .line 59
    iget-object v0, p0, Lorg/apache/cordova/filetransfer/FileUploadResult;->objectId:Ljava/lang/String;

    return-object v0
.end method

.method public getResponse()Ljava/lang/String;
    .locals 1

    .line 51
    iget-object v0, p0, Lorg/apache/cordova/filetransfer/FileUploadResult;->response:Ljava/lang/String;

    return-object v0
.end method

.method public getResponseCode()I
    .locals 1

    .line 43
    iget v0, p0, Lorg/apache/cordova/filetransfer/FileUploadResult;->responseCode:I

    return v0
.end method

.method public setBytesSent(J)V
    .locals 0

    .line 39
    iput-wide p1, p0, Lorg/apache/cordova/filetransfer/FileUploadResult;->bytesSent:J

    return-void
.end method

.method public setObjectId(Ljava/lang/String;)V
    .locals 0

    .line 63
    iput-object p1, p0, Lorg/apache/cordova/filetransfer/FileUploadResult;->objectId:Ljava/lang/String;

    return-void
.end method

.method public setResponse(Ljava/lang/String;)V
    .locals 0

    .line 55
    iput-object p1, p0, Lorg/apache/cordova/filetransfer/FileUploadResult;->response:Ljava/lang/String;

    return-void
.end method

.method public setResponseCode(I)V
    .locals 0

    .line 47
    iput p1, p0, Lorg/apache/cordova/filetransfer/FileUploadResult;->responseCode:I

    return-void
.end method

.method public toJSONObject()Lorg/json/JSONObject;
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 67
    new-instance v0, Lorg/json/JSONObject;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "{bytesSent:"

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-wide v2, p0, Lorg/apache/cordova/filetransfer/FileUploadResult;->bytesSent:J

    invoke-virtual {v1, v2, v3}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, ",responseCode:"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    iget v2, p0, Lorg/apache/cordova/filetransfer/FileUploadResult;->responseCode:I

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, ",response:"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    iget-object v2, p0, Lorg/apache/cordova/filetransfer/FileUploadResult;->response:Ljava/lang/String;

    .line 70
    invoke-static {v2}, Lorg/json/JSONObject;->quote(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, ",objectId:"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    iget-object v2, p0, Lorg/apache/cordova/filetransfer/FileUploadResult;->objectId:Ljava/lang/String;

    .line 71
    invoke-static {v2}, Lorg/json/JSONObject;->quote(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, "}"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-direct {v0, v1}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    return-object v0
.end method
