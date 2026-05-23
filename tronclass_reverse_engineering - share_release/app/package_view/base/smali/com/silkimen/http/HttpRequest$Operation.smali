.class public abstract Lcom/silkimen/http/HttpRequest$Operation;
.super Ljava/lang/Object;
.source "HttpRequest.java"

# interfaces
.implements Ljava/util/concurrent/Callable;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/silkimen/http/HttpRequest;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x40c
    name = "Operation"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "<V:",
        "Ljava/lang/Object;",
        ">",
        "Ljava/lang/Object;",
        "Ljava/util/concurrent/Callable<",
        "TV;>;"
    }
.end annotation


# direct methods
.method protected constructor <init>()V
    .locals 0

    .line 614
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public call()Ljava/lang/Object;
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()TV;"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    const/4 v0, 0x1

    .line 635
    :try_start_0
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest$Operation;->run()Ljava/lang/Object;

    move-result-object v0
    :try_end_0
    .catch Lcom/silkimen/http/HttpRequest$HttpRequestException; {:try_start_0 .. :try_end_0} :catch_2
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_1
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 644
    :try_start_1
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest$Operation;->done()V
    :try_end_1
    .catch Ljava/io/IOException; {:try_start_1 .. :try_end_1} :catch_0

    return-object v0

    :catch_0
    move-exception v0

    .line 647
    new-instance v1, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v1, v0}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v1

    :catchall_0
    move-exception v0

    const/4 v1, 0x0

    goto :goto_0

    :catch_1
    move-exception v1

    .line 641
    :try_start_2
    new-instance v2, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v2, v1}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v2

    :catch_2
    move-exception v1

    .line 638
    throw v1
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_1

    :catchall_1
    move-exception v1

    move-object v3, v1

    move v1, v0

    move-object v0, v3

    .line 644
    :goto_0
    :try_start_3
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest$Operation;->done()V
    :try_end_3
    .catch Ljava/io/IOException; {:try_start_3 .. :try_end_3} :catch_3

    goto :goto_1

    :catch_3
    move-exception v2

    if-nez v1, :cond_0

    .line 647
    new-instance v0, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v0, v2}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v0

    .line 649
    :cond_0
    :goto_1
    throw v0
.end method

.method protected abstract done()V
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation
.end method

.method protected abstract run()Ljava/lang/Object;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()TV;"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;,
            Ljava/io/IOException;
        }
    .end annotation
.end method
