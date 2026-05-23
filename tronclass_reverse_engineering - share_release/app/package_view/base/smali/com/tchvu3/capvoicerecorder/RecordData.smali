.class public Lcom/tchvu3/capvoicerecorder/RecordData;
.super Ljava/lang/Object;
.source "RecordData.java"

# interfaces
.implements Ljava/io/Serializable;


# instance fields
.field private mimeType:Ljava/lang/String;

.field private msDuration:I

.field private recordDataBase64:Ljava/lang/String;


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 13
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public constructor <init>(Ljava/lang/String;ILjava/lang/String;)V
    .locals 0

    .line 16
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 17
    iput-object p1, p0, Lcom/tchvu3/capvoicerecorder/RecordData;->recordDataBase64:Ljava/lang/String;

    .line 18
    iput p2, p0, Lcom/tchvu3/capvoicerecorder/RecordData;->msDuration:I

    .line 19
    iput-object p3, p0, Lcom/tchvu3/capvoicerecorder/RecordData;->mimeType:Ljava/lang/String;

    return-void
.end method


# virtual methods
.method public getMimeType()Ljava/lang/String;
    .locals 1

    .line 39
    iget-object v0, p0, Lcom/tchvu3/capvoicerecorder/RecordData;->mimeType:Ljava/lang/String;

    return-object v0
.end method

.method public getMsDuration()I
    .locals 1

    .line 31
    iget v0, p0, Lcom/tchvu3/capvoicerecorder/RecordData;->msDuration:I

    return v0
.end method

.method public getRecordDataBase64()Ljava/lang/String;
    .locals 1

    .line 23
    iget-object v0, p0, Lcom/tchvu3/capvoicerecorder/RecordData;->recordDataBase64:Ljava/lang/String;

    return-object v0
.end method

.method public setMimeType(Ljava/lang/String;)V
    .locals 0

    .line 43
    iput-object p1, p0, Lcom/tchvu3/capvoicerecorder/RecordData;->mimeType:Ljava/lang/String;

    return-void
.end method

.method public setMsDuration(I)V
    .locals 0

    .line 35
    iput p1, p0, Lcom/tchvu3/capvoicerecorder/RecordData;->msDuration:I

    return-void
.end method

.method public setRecordDataBase64(Ljava/lang/String;)V
    .locals 0

    .line 27
    iput-object p1, p0, Lcom/tchvu3/capvoicerecorder/RecordData;->recordDataBase64:Ljava/lang/String;

    return-void
.end method

.method public toJSObject()Lcom/getcapacitor/JSObject;
    .locals 3

    .line 47
    new-instance v0, Lcom/getcapacitor/JSObject;

    invoke-direct {v0}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 48
    const-string v1, "recordDataBase64"

    iget-object v2, p0, Lcom/tchvu3/capvoicerecorder/RecordData;->recordDataBase64:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 49
    const-string v1, "msDuration"

    iget v2, p0, Lcom/tchvu3/capvoicerecorder/RecordData;->msDuration:I

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;I)Lcom/getcapacitor/JSObject;

    .line 50
    const-string v1, "mimeType"

    iget-object v2, p0, Lcom/tchvu3/capvoicerecorder/RecordData;->mimeType:Ljava/lang/String;

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    return-object v0
.end method
