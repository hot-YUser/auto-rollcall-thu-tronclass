.class public final Lcom/onesignal/outcomes/domain/OSOutcomeSource;
.super Ljava/lang/Object;
.source "OSOutcomeSource.kt"


# annotations
.annotation runtime Lkotlin/Metadata;
    d1 = {
        "\u0000\u001e\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0018\u0002\n\u0002\u0008\t\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\u0018\u00002\u00020\u0001B\u0019\u0012\u0008\u0010\u0002\u001a\u0004\u0018\u00010\u0003\u0012\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u00a2\u0006\u0002\u0010\u0005J\u0010\u0010\u0008\u001a\u00020\u00002\u0008\u0010\u0002\u001a\u0004\u0018\u00010\u0003J\u0010\u0010\u000b\u001a\u00020\u00002\u0008\u0010\u0004\u001a\u0004\u0018\u00010\u0003J\u0006\u0010\u000c\u001a\u00020\rJ\u0008\u0010\u000e\u001a\u00020\u000fH\u0016R\u001c\u0010\u0002\u001a\u0004\u0018\u00010\u0003X\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\u0008\u0006\u0010\u0007\"\u0004\u0008\u0008\u0010\tR\u001c\u0010\u0004\u001a\u0004\u0018\u00010\u0003X\u0086\u000e\u00a2\u0006\u000e\n\u0000\u001a\u0004\u0008\n\u0010\u0007\"\u0004\u0008\u000b\u0010\t\u00a8\u0006\u0010"
    }
    d2 = {
        "Lcom/onesignal/outcomes/domain/OSOutcomeSource;",
        "",
        "directBody",
        "Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;",
        "indirectBody",
        "(Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)V",
        "getDirectBody",
        "()Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;",
        "setDirectBody",
        "(Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)V",
        "getIndirectBody",
        "setIndirectBody",
        "toJSONObject",
        "Lorg/json/JSONObject;",
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
.field private directBody:Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

.field private indirectBody:Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;


# direct methods
.method public constructor <init>(Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)V
    .locals 0

    .line 7
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 8
    iput-object p1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->directBody:Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    .line 9
    iput-object p2, p0, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->indirectBody:Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    return-void
.end method


# virtual methods
.method public final getDirectBody()Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;
    .locals 1

    .line 8
    iget-object v0, p0, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->directBody:Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    return-object v0
.end method

.method public final getIndirectBody()Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;
    .locals 1

    .line 9
    iget-object v0, p0, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->indirectBody:Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    return-object v0
.end method

.method public final setDirectBody(Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)Lcom/onesignal/outcomes/domain/OSOutcomeSource;
    .locals 1

    .line 23
    move-object v0, p0

    check-cast v0, Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    .line 24
    invoke-virtual {p0, p1}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->setDirectBody(Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)V

    return-object p0
.end method

.method public final setDirectBody(Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)V
    .locals 0

    .line 8
    iput-object p1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->directBody:Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    return-void
.end method

.method public final setIndirectBody(Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)Lcom/onesignal/outcomes/domain/OSOutcomeSource;
    .locals 1

    .line 27
    move-object v0, p0

    check-cast v0, Lcom/onesignal/outcomes/domain/OSOutcomeSource;

    .line 28
    invoke-virtual {p0, p1}, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->setIndirectBody(Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)V

    return-object p0
.end method

.method public final setIndirectBody(Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;)V
    .locals 0

    .line 9
    iput-object p1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->indirectBody:Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    return-void
.end method

.method public final toJSONObject()Lorg/json/JSONObject;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lorg/json/JSONException;
        }
    .end annotation

    .line 13
    new-instance v0, Lorg/json/JSONObject;

    invoke-direct {v0}, Lorg/json/JSONObject;-><init>()V

    .line 14
    iget-object v1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->directBody:Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    if-nez v1, :cond_0

    goto :goto_0

    .line 15
    :cond_0
    const-string v2, "direct"

    invoke-virtual {v1}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v1

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 17
    :goto_0
    iget-object v1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->indirectBody:Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    if-nez v1, :cond_1

    goto :goto_1

    .line 18
    :cond_1
    const-string v2, "indirect"

    invoke-virtual {v1}, Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;->toJSONObject()Lorg/json/JSONObject;

    move-result-object v1

    invoke-virtual {v0, v2, v1}, Lorg/json/JSONObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    :goto_1
    return-object v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 32
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "OSOutcomeSource{directBody="

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    .line 33
    iget-object v1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->directBody:Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    .line 32
    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    .line 34
    const-string v1, ", indirectBody="

    .line 32
    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    .line 34
    iget-object v1, p0, Lcom/onesignal/outcomes/domain/OSOutcomeSource;->indirectBody:Lcom/onesignal/outcomes/domain/OSOutcomeSourceBody;

    .line 32
    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    const/16 v1, 0x7d

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
