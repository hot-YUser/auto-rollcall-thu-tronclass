.class final Lcom/google/android/datatransport/runtime/AutoValue_SendRequest$Builder;
.super Lcom/google/android/datatransport/runtime/SendRequest$Builder;
.source "com.google.android.datatransport:transport-runtime@@2.2.0"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/google/android/datatransport/runtime/AutoValue_SendRequest;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x18
    name = "Builder"
.end annotation


# instance fields
.field private encoding:Lcom/google/android/datatransport/Encoding;

.field private event:Lcom/google/android/datatransport/Event;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lcom/google/android/datatransport/Event<",
            "*>;"
        }
    .end annotation
.end field

.field private transformer:Lcom/google/android/datatransport/Transformer;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lcom/google/android/datatransport/Transformer<",
            "*[B>;"
        }
    .end annotation
.end field

.field private transportContext:Lcom/google/android/datatransport/runtime/TransportContext;

.field private transportName:Ljava/lang/String;


# direct methods
.method constructor <init>()V
    .locals 0

    .line 110
    invoke-direct {p0}, Lcom/google/android/datatransport/runtime/SendRequest$Builder;-><init>()V

    return-void
.end method


# virtual methods
.method public build()Lcom/google/android/datatransport/runtime/SendRequest;
    .locals 9

    .line 155
    iget-object v0, p0, Lcom/google/android/datatransport/runtime/AutoValue_SendRequest$Builder;->transportContext:Lcom/google/android/datatransport/runtime/TransportContext;

    if-nez v0, :cond_0

    .line 156
    const-string v0, " transportContext"

    goto :goto_0

    .line 155
    :cond_0
    const-string v0, ""

    .line 158
    :goto_0
    iget-object v1, p0, Lcom/google/android/datatransport/runtime/AutoValue_SendRequest$Builder;->transportName:Ljava/lang/String;

    if-nez v1, :cond_1

    .line 159
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " transportName"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    .line 161
    :cond_1
    iget-object v1, p0, Lcom/google/android/datatransport/runtime/AutoValue_SendRequest$Builder;->event:Lcom/google/android/datatransport/Event;

    if-nez v1, :cond_2

    .line 162
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " event"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    .line 164
    :cond_2
    iget-object v1, p0, Lcom/google/android/datatransport/runtime/AutoValue_SendRequest$Builder;->transformer:Lcom/google/android/datatransport/Transformer;

    if-nez v1, :cond_3

    .line 165
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " transformer"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    .line 167
    :cond_3
    iget-object v1, p0, Lcom/google/android/datatransport/runtime/AutoValue_SendRequest$Builder;->encoding:Lcom/google/android/datatransport/Encoding;

    if-nez v1, :cond_4

    .line 168
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, " encoding"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    .line 170
    :cond_4
    invoke-virtual {v0}, Ljava/lang/String;->isEmpty()Z

    move-result v1

    if-eqz v1, :cond_5

    .line 173
    new-instance v0, Lcom/google/android/datatransport/runtime/AutoValue_SendRequest;

    iget-object v3, p0, Lcom/google/android/datatransport/runtime/AutoValue_SendRequest$Builder;->transportContext:Lcom/google/android/datatransport/runtime/TransportContext;

    iget-object v4, p0, Lcom/google/android/datatransport/runtime/AutoValue_SendRequest$Builder;->transportName:Ljava/lang/String;

    iget-object v5, p0, Lcom/google/android/datatransport/runtime/AutoValue_SendRequest$Builder;->event:Lcom/google/android/datatransport/Event;

    iget-object v6, p0, Lcom/google/android/datatransport/runtime/AutoValue_SendRequest$Builder;->transformer:Lcom/google/android/datatransport/Transformer;

    iget-object v7, p0, Lcom/google/android/datatransport/runtime/AutoValue_SendRequest$Builder;->encoding:Lcom/google/android/datatransport/Encoding;

    const/4 v8, 0x0

    move-object v2, v0

    invoke-direct/range {v2 .. v8}, Lcom/google/android/datatransport/runtime/AutoValue_SendRequest;-><init>(Lcom/google/android/datatransport/runtime/TransportContext;Ljava/lang/String;Lcom/google/android/datatransport/Event;Lcom/google/android/datatransport/Transformer;Lcom/google/android/datatransport/Encoding;Lcom/google/android/datatransport/runtime/AutoValue_SendRequest$1;)V

    return-object v0

    .line 171
    :cond_5
    new-instance v1, Ljava/lang/IllegalStateException;

    new-instance v2, Ljava/lang/StringBuilder;

    const-string v3, "Missing required properties:"

    invoke-direct {v2, v3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-direct {v1, v0}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw v1
.end method

.method setEncoding(Lcom/google/android/datatransport/Encoding;)Lcom/google/android/datatransport/runtime/SendRequest$Builder;
    .locals 1

    if-eqz p1, :cond_0

    .line 149
    iput-object p1, p0, Lcom/google/android/datatransport/runtime/AutoValue_SendRequest$Builder;->encoding:Lcom/google/android/datatransport/Encoding;

    return-object p0

    .line 147
    :cond_0
    new-instance p1, Ljava/lang/NullPointerException;

    const-string v0, "Null encoding"

    invoke-direct {p1, v0}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method setEvent(Lcom/google/android/datatransport/Event;)Lcom/google/android/datatransport/runtime/SendRequest$Builder;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/google/android/datatransport/Event<",
            "*>;)",
            "Lcom/google/android/datatransport/runtime/SendRequest$Builder;"
        }
    .end annotation

    if-eqz p1, :cond_0

    .line 133
    iput-object p1, p0, Lcom/google/android/datatransport/runtime/AutoValue_SendRequest$Builder;->event:Lcom/google/android/datatransport/Event;

    return-object p0

    .line 131
    :cond_0
    new-instance p1, Ljava/lang/NullPointerException;

    const-string v0, "Null event"

    invoke-direct {p1, v0}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method setTransformer(Lcom/google/android/datatransport/Transformer;)Lcom/google/android/datatransport/runtime/SendRequest$Builder;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lcom/google/android/datatransport/Transformer<",
            "*[B>;)",
            "Lcom/google/android/datatransport/runtime/SendRequest$Builder;"
        }
    .end annotation

    if-eqz p1, :cond_0

    .line 141
    iput-object p1, p0, Lcom/google/android/datatransport/runtime/AutoValue_SendRequest$Builder;->transformer:Lcom/google/android/datatransport/Transformer;

    return-object p0

    .line 139
    :cond_0
    new-instance p1, Ljava/lang/NullPointerException;

    const-string v0, "Null transformer"

    invoke-direct {p1, v0}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public setTransportContext(Lcom/google/android/datatransport/runtime/TransportContext;)Lcom/google/android/datatransport/runtime/SendRequest$Builder;
    .locals 1

    if-eqz p1, :cond_0

    .line 117
    iput-object p1, p0, Lcom/google/android/datatransport/runtime/AutoValue_SendRequest$Builder;->transportContext:Lcom/google/android/datatransport/runtime/TransportContext;

    return-object p0

    .line 115
    :cond_0
    new-instance p1, Ljava/lang/NullPointerException;

    const-string v0, "Null transportContext"

    invoke-direct {p1, v0}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public setTransportName(Ljava/lang/String;)Lcom/google/android/datatransport/runtime/SendRequest$Builder;
    .locals 1

    if-eqz p1, :cond_0

    .line 125
    iput-object p1, p0, Lcom/google/android/datatransport/runtime/AutoValue_SendRequest$Builder;->transportName:Ljava/lang/String;

    return-object p0

    .line 123
    :cond_0
    new-instance p1, Ljava/lang/NullPointerException;

    const-string v0, "Null transportName"

    invoke-direct {p1, v0}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p1
.end method
