.class Lcom/silkimen/http/HttpRequest$8;
.super Lcom/silkimen/http/HttpRequest$FlushOperation;
.source "HttpRequest.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/silkimen/http/HttpRequest;->send(Ljava/io/Reader;)Lcom/silkimen/http/HttpRequest;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Lcom/silkimen/http/HttpRequest$FlushOperation<",
        "Lcom/silkimen/http/HttpRequest;",
        ">;"
    }
.end annotation


# instance fields
.field final synthetic this$0:Lcom/silkimen/http/HttpRequest;

.field final synthetic val$input:Ljava/io/Reader;

.field final synthetic val$writer:Ljava/io/Writer;


# direct methods
.method constructor <init>(Lcom/silkimen/http/HttpRequest;Ljava/io/Flushable;Ljava/io/Reader;Ljava/io/Writer;)V
    .locals 0

    .line 2883
    iput-object p1, p0, Lcom/silkimen/http/HttpRequest$8;->this$0:Lcom/silkimen/http/HttpRequest;

    iput-object p3, p0, Lcom/silkimen/http/HttpRequest$8;->val$input:Ljava/io/Reader;

    iput-object p4, p0, Lcom/silkimen/http/HttpRequest$8;->val$writer:Ljava/io/Writer;

    invoke-direct {p0, p2}, Lcom/silkimen/http/HttpRequest$FlushOperation;-><init>(Ljava/io/Flushable;)V

    return-void
.end method


# virtual methods
.method protected run()Lcom/silkimen/http/HttpRequest;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 2887
    iget-object v0, p0, Lcom/silkimen/http/HttpRequest$8;->this$0:Lcom/silkimen/http/HttpRequest;

    iget-object v1, p0, Lcom/silkimen/http/HttpRequest$8;->val$input:Ljava/io/Reader;

    iget-object v2, p0, Lcom/silkimen/http/HttpRequest$8;->val$writer:Ljava/io/Writer;

    invoke-virtual {v0, v1, v2}, Lcom/silkimen/http/HttpRequest;->copy(Ljava/io/Reader;Ljava/io/Writer;)Lcom/silkimen/http/HttpRequest;

    move-result-object v0

    return-object v0
.end method

.method protected bridge synthetic run()Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;,
            Ljava/io/IOException;
        }
    .end annotation

    .line 2883
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest$8;->run()Lcom/silkimen/http/HttpRequest;

    move-result-object v0

    return-object v0
.end method
