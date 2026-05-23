.class Lcom/silkimen/http/HttpRequest$5;
.super Lcom/silkimen/http/HttpRequest$CloseOperation;
.source "HttpRequest.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/silkimen/http/HttpRequest;->receive(Ljava/io/Writer;)Lcom/silkimen/http/HttpRequest;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Lcom/silkimen/http/HttpRequest$CloseOperation<",
        "Lcom/silkimen/http/HttpRequest;",
        ">;"
    }
.end annotation


# instance fields
.field final synthetic this$0:Lcom/silkimen/http/HttpRequest;

.field final synthetic val$reader:Ljava/io/BufferedReader;

.field final synthetic val$writer:Ljava/io/Writer;


# direct methods
.method constructor <init>(Lcom/silkimen/http/HttpRequest;Ljava/io/Closeable;ZLjava/io/BufferedReader;Ljava/io/Writer;)V
    .locals 0

    .line 1907
    iput-object p1, p0, Lcom/silkimen/http/HttpRequest$5;->this$0:Lcom/silkimen/http/HttpRequest;

    iput-object p4, p0, Lcom/silkimen/http/HttpRequest$5;->val$reader:Ljava/io/BufferedReader;

    iput-object p5, p0, Lcom/silkimen/http/HttpRequest$5;->val$writer:Ljava/io/Writer;

    invoke-direct {p0, p2, p3}, Lcom/silkimen/http/HttpRequest$CloseOperation;-><init>(Ljava/io/Closeable;Z)V

    return-void
.end method


# virtual methods
.method public run()Lcom/silkimen/http/HttpRequest;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 1911
    iget-object v0, p0, Lcom/silkimen/http/HttpRequest$5;->this$0:Lcom/silkimen/http/HttpRequest;

    iget-object v1, p0, Lcom/silkimen/http/HttpRequest$5;->val$reader:Ljava/io/BufferedReader;

    iget-object v2, p0, Lcom/silkimen/http/HttpRequest$5;->val$writer:Ljava/io/Writer;

    invoke-virtual {v0, v1, v2}, Lcom/silkimen/http/HttpRequest;->copy(Ljava/io/Reader;Ljava/io/Writer;)Lcom/silkimen/http/HttpRequest;

    move-result-object v0

    return-object v0
.end method

.method public bridge synthetic run()Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;,
            Ljava/io/IOException;
        }
    .end annotation

    .line 1907
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest$5;->run()Lcom/silkimen/http/HttpRequest;

    move-result-object v0

    return-object v0
.end method
