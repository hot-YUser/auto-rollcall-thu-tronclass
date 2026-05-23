.class Lcom/silkimen/http/HttpRequest$3;
.super Lcom/silkimen/http/HttpRequest$CloseOperation;
.source "HttpRequest.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lcom/silkimen/http/HttpRequest;->receive(Ljava/io/File;)Lcom/silkimen/http/HttpRequest;
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

.field final synthetic val$output:Ljava/io/OutputStream;


# direct methods
.method constructor <init>(Lcom/silkimen/http/HttpRequest;Ljava/io/Closeable;ZLjava/io/OutputStream;)V
    .locals 0

    .line 1838
    iput-object p1, p0, Lcom/silkimen/http/HttpRequest$3;->this$0:Lcom/silkimen/http/HttpRequest;

    iput-object p4, p0, Lcom/silkimen/http/HttpRequest$3;->val$output:Ljava/io/OutputStream;

    invoke-direct {p0, p2, p3}, Lcom/silkimen/http/HttpRequest$CloseOperation;-><init>(Ljava/io/Closeable;Z)V

    return-void
.end method


# virtual methods
.method protected run()Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;,
            Ljava/io/IOException;
        }
    .end annotation

    .line 1842
    iget-object v0, p0, Lcom/silkimen/http/HttpRequest$3;->this$0:Lcom/silkimen/http/HttpRequest;

    iget-object v1, p0, Lcom/silkimen/http/HttpRequest$3;->val$output:Ljava/io/OutputStream;

    invoke-virtual {v0, v1}, Lcom/silkimen/http/HttpRequest;->receive(Ljava/io/OutputStream;)Lcom/silkimen/http/HttpRequest;

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

    .line 1838
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest$3;->run()Lcom/silkimen/http/HttpRequest;

    move-result-object v0

    return-object v0
.end method
