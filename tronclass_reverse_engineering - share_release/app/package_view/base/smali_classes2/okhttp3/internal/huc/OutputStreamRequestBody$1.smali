.class Lokhttp3/internal/huc/OutputStreamRequestBody$1;
.super Ljava/io/OutputStream;
.source "OutputStreamRequestBody.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingMethod;
    value = Lokhttp3/internal/huc/OutputStreamRequestBody;->initOutputStream(Lokio/BufferedSink;J)V
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x0
    name = null
.end annotation


# instance fields
.field private bytesReceived:J

.field final synthetic this$0:Lokhttp3/internal/huc/OutputStreamRequestBody;

.field final synthetic val$expectedContentLength:J

.field final synthetic val$sink:Lokio/BufferedSink;


# direct methods
.method constructor <init>(Lokhttp3/internal/huc/OutputStreamRequestBody;JLokio/BufferedSink;)V
    .locals 0

    .line 47
    iput-object p1, p0, Lokhttp3/internal/huc/OutputStreamRequestBody$1;->this$0:Lokhttp3/internal/huc/OutputStreamRequestBody;

    iput-wide p2, p0, Lokhttp3/internal/huc/OutputStreamRequestBody$1;->val$expectedContentLength:J

    iput-object p4, p0, Lokhttp3/internal/huc/OutputStreamRequestBody$1;->val$sink:Lokio/BufferedSink;

    invoke-direct {p0}, Ljava/io/OutputStream;-><init>()V

    return-void
.end method


# virtual methods
.method public close()V
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 76
    iget-object v0, p0, Lokhttp3/internal/huc/OutputStreamRequestBody$1;->this$0:Lokhttp3/internal/huc/OutputStreamRequestBody;

    const/4 v1, 0x1

    iput-boolean v1, v0, Lokhttp3/internal/huc/OutputStreamRequestBody;->closed:Z

    .line 78
    iget-wide v0, p0, Lokhttp3/internal/huc/OutputStreamRequestBody$1;->val$expectedContentLength:J

    const-wide/16 v2, -0x1

    cmp-long v2, v0, v2

    if-eqz v2, :cond_1

    iget-wide v2, p0, Lokhttp3/internal/huc/OutputStreamRequestBody$1;->bytesReceived:J

    cmp-long v0, v2, v0

    if-ltz v0, :cond_0

    goto :goto_0

    .line 79
    :cond_0
    new-instance v0, Ljava/net/ProtocolException;

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "expected "

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-wide v2, p0, Lokhttp3/internal/huc/OutputStreamRequestBody$1;->val$expectedContentLength:J

    invoke-virtual {v1, v2, v3}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, " bytes but received "

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    iget-wide v2, p0, Lokhttp3/internal/huc/OutputStreamRequestBody$1;->bytesReceived:J

    invoke-virtual {v1, v2, v3}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-direct {v0, v1}, Ljava/net/ProtocolException;-><init>(Ljava/lang/String;)V

    throw v0

    .line 83
    :cond_1
    :goto_0
    iget-object v0, p0, Lokhttp3/internal/huc/OutputStreamRequestBody$1;->val$sink:Lokio/BufferedSink;

    invoke-interface {v0}, Lokio/BufferedSink;->close()V

    return-void
.end method

.method public flush()V
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 71
    iget-object v0, p0, Lokhttp3/internal/huc/OutputStreamRequestBody$1;->this$0:Lokhttp3/internal/huc/OutputStreamRequestBody;

    iget-boolean v0, v0, Lokhttp3/internal/huc/OutputStreamRequestBody;->closed:Z

    if-eqz v0, :cond_0

    return-void

    .line 72
    :cond_0
    iget-object v0, p0, Lokhttp3/internal/huc/OutputStreamRequestBody$1;->val$sink:Lokio/BufferedSink;

    invoke-interface {v0}, Lokio/BufferedSink;->flush()V

    return-void
.end method

.method public write(I)V
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    int-to-byte p1, p1

    const/4 v0, 0x1

    .line 51
    new-array v1, v0, [B

    const/4 v2, 0x0

    aput-byte p1, v1, v2

    invoke-virtual {p0, v1, v2, v0}, Lokhttp3/internal/huc/OutputStreamRequestBody$1;->write([BII)V

    return-void
.end method

.method public write([BII)V
    .locals 6
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 55
    iget-object v0, p0, Lokhttp3/internal/huc/OutputStreamRequestBody$1;->this$0:Lokhttp3/internal/huc/OutputStreamRequestBody;

    iget-boolean v0, v0, Lokhttp3/internal/huc/OutputStreamRequestBody;->closed:Z

    if-nez v0, :cond_2

    .line 57
    iget-wide v0, p0, Lokhttp3/internal/huc/OutputStreamRequestBody$1;->val$expectedContentLength:J

    const-wide/16 v2, -0x1

    cmp-long v2, v0, v2

    if-eqz v2, :cond_1

    iget-wide v2, p0, Lokhttp3/internal/huc/OutputStreamRequestBody$1;->bytesReceived:J

    int-to-long v4, p3

    add-long/2addr v2, v4

    cmp-long v0, v2, v0

    if-gtz v0, :cond_0

    goto :goto_0

    .line 58
    :cond_0
    new-instance p1, Ljava/net/ProtocolException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v0, "expected "

    invoke-direct {p2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    iget-wide v0, p0, Lokhttp3/internal/huc/OutputStreamRequestBody$1;->val$expectedContentLength:J

    invoke-virtual {p2, v0, v1}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v0, " bytes but received "

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    iget-wide v0, p0, Lokhttp3/internal/huc/OutputStreamRequestBody$1;->bytesReceived:J

    invoke-virtual {p2, v0, v1}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2, p3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/net/ProtocolException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 62
    :cond_1
    :goto_0
    iget-wide v0, p0, Lokhttp3/internal/huc/OutputStreamRequestBody$1;->bytesReceived:J

    int-to-long v2, p3

    add-long/2addr v0, v2

    iput-wide v0, p0, Lokhttp3/internal/huc/OutputStreamRequestBody$1;->bytesReceived:J

    .line 64
    :try_start_0
    iget-object v0, p0, Lokhttp3/internal/huc/OutputStreamRequestBody$1;->val$sink:Lokio/BufferedSink;

    invoke-interface {v0, p1, p2, p3}, Lokio/BufferedSink;->write([BII)Lokio/BufferedSink;
    :try_end_0
    .catch Ljava/io/InterruptedIOException; {:try_start_0 .. :try_end_0} :catch_0

    return-void

    :catch_0
    move-exception p1

    .line 66
    new-instance p2, Ljava/net/SocketTimeoutException;

    invoke-virtual {p1}, Ljava/io/InterruptedIOException;->getMessage()Ljava/lang/String;

    move-result-object p1

    invoke-direct {p2, p1}, Ljava/net/SocketTimeoutException;-><init>(Ljava/lang/String;)V

    throw p2

    .line 55
    :cond_2
    new-instance p1, Ljava/io/IOException;

    const-string p2, "closed"

    invoke-direct {p1, p2}, Ljava/io/IOException;-><init>(Ljava/lang/String;)V

    throw p1
.end method
