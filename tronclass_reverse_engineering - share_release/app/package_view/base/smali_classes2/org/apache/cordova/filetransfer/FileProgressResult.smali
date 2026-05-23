.class public Lorg/apache/cordova/filetransfer/FileProgressResult;
.super Ljava/lang/Object;
.source "FileProgressResult.java"


# instance fields
.field private lengthComputable:Z

.field private loaded:J

.field private total:J


# direct methods
.method public constructor <init>()V
    .locals 2

    .line 27
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 29
    iput-boolean v0, p0, Lorg/apache/cordova/filetransfer/FileProgressResult;->lengthComputable:Z

    const-wide/16 v0, 0x0

    .line 30
    iput-wide v0, p0, Lorg/apache/cordova/filetransfer/FileProgressResult;->loaded:J

    .line 31
    iput-wide v0, p0, Lorg/apache/cordova/filetransfer/FileProgressResult;->total:J

    return-void
.end method


# virtual methods
.method public getLengthComputable()Z
    .locals 1

    .line 34
    iget-boolean v0, p0, Lorg/apache/cordova/filetransfer/FileProgressResult;->lengthComputable:Z

    return v0
.end method

.method public getLoaded()J
    .locals 2

    .line 42
    iget-wide v0, p0, Lorg/apache/cordova/filetransfer/FileProgressResult;->loaded:J

    return-wide v0
.end method

.method public getTotal()J
    .locals 2

    .line 50
    iget-wide v0, p0, Lorg/apache/cordova/filetransfer/FileProgressResult;->total:J

    return-wide v0
.end method

.method public setLengthComputable(Z)V
    .locals 0

    .line 38
    iput-boolean p1, p0, Lorg/apache/cordova/filetransfer/FileProgressResult;->lengthComputable:Z

    return-void
.end method

.method public setLoaded(J)V
    .locals 0

    .line 46
    iput-wide p1, p0, Lorg/apache/cordova/filetransfer/FileProgressResult;->loaded:J

    return-void
.end method

.method public setTotal(J)V
    .locals 0

    .line 54
    iput-wide p1, p0, Lorg/apache/cordova/filetransfer/FileProgressResult;->total:J

    return-void
.end method

.method public toJSONObject()Lorg/json/JSONObject;
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 58
    new-instance v0, Lorg/json/JSONObject;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "{loaded:"

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-wide v2, p0, Lorg/apache/cordova/filetransfer/FileProgressResult;->loaded:J

    invoke-virtual {v1, v2, v3}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, ",total:"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    iget-wide v2, p0, Lorg/apache/cordova/filetransfer/FileProgressResult;->total:J

    invoke-virtual {v1, v2, v3}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, ",lengthComputable:"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    .line 61
    iget-boolean v2, p0, Lorg/apache/cordova/filetransfer/FileProgressResult;->lengthComputable:Z

    if-eqz v2, :cond_0

    const-string v2, "true"

    goto :goto_0

    :cond_0
    const-string v2, "false"

    :goto_0
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
