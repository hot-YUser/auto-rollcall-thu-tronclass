.class final Lokhttp3/internal/huc/OkHttpURLConnection$NetworkInterceptor;
.super Ljava/lang/Object;
.source "OkHttpURLConnection.java"

# interfaces
.implements Lokhttp3/Interceptor;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lokhttp3/internal/huc/OkHttpURLConnection;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x10
    name = "NetworkInterceptor"
.end annotation


# instance fields
.field private proceed:Z

.field final synthetic this$0:Lokhttp3/internal/huc/OkHttpURLConnection;


# direct methods
.method constructor <init>(Lokhttp3/internal/huc/OkHttpURLConnection;)V
    .locals 0

    .line 607
    iput-object p1, p0, Lokhttp3/internal/huc/OkHttpURLConnection$NetworkInterceptor;->this$0:Lokhttp3/internal/huc/OkHttpURLConnection;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public intercept(Lokhttp3/Interceptor$Chain;)Lokhttp3/Response;
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 619
    invoke-interface {p1}, Lokhttp3/Interceptor$Chain;->request()Lokhttp3/Request;

    move-result-object v0

    .line 622
    iget-object v1, p0, Lokhttp3/internal/huc/OkHttpURLConnection$NetworkInterceptor;->this$0:Lokhttp3/internal/huc/OkHttpURLConnection;

    iget-object v1, v1, Lokhttp3/internal/huc/OkHttpURLConnection;->urlFilter:Lokhttp3/internal/URLFilter;

    if-eqz v1, :cond_0

    .line 623
    iget-object v1, p0, Lokhttp3/internal/huc/OkHttpURLConnection$NetworkInterceptor;->this$0:Lokhttp3/internal/huc/OkHttpURLConnection;

    iget-object v1, v1, Lokhttp3/internal/huc/OkHttpURLConnection;->urlFilter:Lokhttp3/internal/URLFilter;

    invoke-virtual {v0}, Lokhttp3/Request;->url()Lokhttp3/HttpUrl;

    move-result-object v2

    invoke-virtual {v2}, Lokhttp3/HttpUrl;->url()Ljava/net/URL;

    move-result-object v2

    invoke-interface {v1, v2}, Lokhttp3/internal/URLFilter;->checkURLPermitted(Ljava/net/URL;)V

    .line 626
    :cond_0
    iget-object v1, p0, Lokhttp3/internal/huc/OkHttpURLConnection$NetworkInterceptor;->this$0:Lokhttp3/internal/huc/OkHttpURLConnection;

    invoke-static {v1}, Lokhttp3/internal/huc/OkHttpURLConnection;->access$000(Lokhttp3/internal/huc/OkHttpURLConnection;)Ljava/lang/Object;

    move-result-object v1

    monitor-enter v1

    .line 627
    :try_start_0
    iget-object v2, p0, Lokhttp3/internal/huc/OkHttpURLConnection$NetworkInterceptor;->this$0:Lokhttp3/internal/huc/OkHttpURLConnection;

    const/4 v3, 0x0

    iput-boolean v3, v2, Lokhttp3/internal/huc/OkHttpURLConnection;->connectPending:Z

    .line 628
    iget-object v2, p0, Lokhttp3/internal/huc/OkHttpURLConnection$NetworkInterceptor;->this$0:Lokhttp3/internal/huc/OkHttpURLConnection;

    invoke-interface {p1}, Lokhttp3/Interceptor$Chain;->connection()Lokhttp3/Connection;

    move-result-object v3

    invoke-interface {v3}, Lokhttp3/Connection;->route()Lokhttp3/Route;

    move-result-object v3

    invoke-virtual {v3}, Lokhttp3/Route;->proxy()Ljava/net/Proxy;

    move-result-object v3

    iput-object v3, v2, Lokhttp3/internal/huc/OkHttpURLConnection;->proxy:Ljava/net/Proxy;

    .line 629
    iget-object v2, p0, Lokhttp3/internal/huc/OkHttpURLConnection$NetworkInterceptor;->this$0:Lokhttp3/internal/huc/OkHttpURLConnection;

    invoke-interface {p1}, Lokhttp3/Interceptor$Chain;->connection()Lokhttp3/Connection;

    move-result-object v3

    invoke-interface {v3}, Lokhttp3/Connection;->handshake()Lokhttp3/Handshake;

    move-result-object v3

    iput-object v3, v2, Lokhttp3/internal/huc/OkHttpURLConnection;->handshake:Lokhttp3/Handshake;

    .line 630
    iget-object v2, p0, Lokhttp3/internal/huc/OkHttpURLConnection$NetworkInterceptor;->this$0:Lokhttp3/internal/huc/OkHttpURLConnection;

    invoke-static {v2}, Lokhttp3/internal/huc/OkHttpURLConnection;->access$000(Lokhttp3/internal/huc/OkHttpURLConnection;)Ljava/lang/Object;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/Object;->notifyAll()V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_1

    .line 633
    :goto_0
    :try_start_1
    iget-boolean v2, p0, Lokhttp3/internal/huc/OkHttpURLConnection$NetworkInterceptor;->proceed:Z

    if-nez v2, :cond_1

    .line 634
    iget-object v2, p0, Lokhttp3/internal/huc/OkHttpURLConnection$NetworkInterceptor;->this$0:Lokhttp3/internal/huc/OkHttpURLConnection;

    invoke-static {v2}, Lokhttp3/internal/huc/OkHttpURLConnection;->access$000(Lokhttp3/internal/huc/OkHttpURLConnection;)Ljava/lang/Object;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/Object;->wait()V
    :try_end_1
    .catch Ljava/lang/InterruptedException; {:try_start_1 .. :try_end_1} :catch_0
    .catchall {:try_start_1 .. :try_end_1} :catchall_1

    goto :goto_0

    .line 639
    :cond_1
    :try_start_2
    monitor-exit v1
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_1

    .line 642
    invoke-virtual {v0}, Lokhttp3/Request;->body()Lokhttp3/RequestBody;

    move-result-object v1

    instance-of v1, v1, Lokhttp3/internal/huc/OutputStreamRequestBody;

    if-eqz v1, :cond_2

    .line 643
    invoke-virtual {v0}, Lokhttp3/Request;->body()Lokhttp3/RequestBody;

    move-result-object v1

    check-cast v1, Lokhttp3/internal/huc/OutputStreamRequestBody;

    .line 644
    invoke-virtual {v1, v0}, Lokhttp3/internal/huc/OutputStreamRequestBody;->prepareToSendRequest(Lokhttp3/Request;)Lokhttp3/Request;

    move-result-object v0

    .line 647
    :cond_2
    invoke-interface {p1, v0}, Lokhttp3/Interceptor$Chain;->proceed(Lokhttp3/Request;)Lokhttp3/Response;

    move-result-object p1

    .line 649
    iget-object v0, p0, Lokhttp3/internal/huc/OkHttpURLConnection$NetworkInterceptor;->this$0:Lokhttp3/internal/huc/OkHttpURLConnection;

    invoke-static {v0}, Lokhttp3/internal/huc/OkHttpURLConnection;->access$000(Lokhttp3/internal/huc/OkHttpURLConnection;)Ljava/lang/Object;

    move-result-object v0

    monitor-enter v0

    .line 650
    :try_start_3
    iget-object v1, p0, Lokhttp3/internal/huc/OkHttpURLConnection$NetworkInterceptor;->this$0:Lokhttp3/internal/huc/OkHttpURLConnection;

    iput-object p1, v1, Lokhttp3/internal/huc/OkHttpURLConnection;->networkResponse:Lokhttp3/Response;

    .line 651
    iget-object v1, p0, Lokhttp3/internal/huc/OkHttpURLConnection$NetworkInterceptor;->this$0:Lokhttp3/internal/huc/OkHttpURLConnection;

    invoke-virtual {p1}, Lokhttp3/Response;->request()Lokhttp3/Request;

    move-result-object v2

    invoke-virtual {v2}, Lokhttp3/Request;->url()Lokhttp3/HttpUrl;

    move-result-object v2

    invoke-virtual {v2}, Lokhttp3/HttpUrl;->url()Ljava/net/URL;

    move-result-object v2

    invoke-static {v1, v2}, Lokhttp3/internal/huc/OkHttpURLConnection;->access$102(Lokhttp3/internal/huc/OkHttpURLConnection;Ljava/net/URL;)Ljava/net/URL;

    .line 652
    monitor-exit v0

    return-object p1

    :catchall_0
    move-exception p1

    monitor-exit v0
    :try_end_3
    .catchall {:try_start_3 .. :try_end_3} :catchall_0

    throw p1

    .line 637
    :catch_0
    :try_start_4
    new-instance p1, Ljava/io/InterruptedIOException;

    invoke-direct {p1}, Ljava/io/InterruptedIOException;-><init>()V

    throw p1

    :catchall_1
    move-exception p1

    .line 639
    monitor-exit v1
    :try_end_4
    .catchall {:try_start_4 .. :try_end_4} :catchall_1

    throw p1
.end method

.method public proceed()V
    .locals 2

    .line 612
    iget-object v0, p0, Lokhttp3/internal/huc/OkHttpURLConnection$NetworkInterceptor;->this$0:Lokhttp3/internal/huc/OkHttpURLConnection;

    invoke-static {v0}, Lokhttp3/internal/huc/OkHttpURLConnection;->access$000(Lokhttp3/internal/huc/OkHttpURLConnection;)Ljava/lang/Object;

    move-result-object v0

    monitor-enter v0

    const/4 v1, 0x1

    .line 613
    :try_start_0
    iput-boolean v1, p0, Lokhttp3/internal/huc/OkHttpURLConnection$NetworkInterceptor;->proceed:Z

    .line 614
    iget-object v1, p0, Lokhttp3/internal/huc/OkHttpURLConnection$NetworkInterceptor;->this$0:Lokhttp3/internal/huc/OkHttpURLConnection;

    invoke-static {v1}, Lokhttp3/internal/huc/OkHttpURLConnection;->access$000(Lokhttp3/internal/huc/OkHttpURLConnection;)Ljava/lang/Object;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/Object;->notifyAll()V

    .line 615
    monitor-exit v0

    return-void

    :catchall_0
    move-exception v1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v1
.end method
