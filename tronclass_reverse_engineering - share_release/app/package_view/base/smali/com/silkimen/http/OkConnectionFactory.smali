.class public Lcom/silkimen/http/OkConnectionFactory;
.super Ljava/lang/Object;
.source "OkConnectionFactory.java"

# interfaces
.implements Lcom/silkimen/http/HttpRequest$ConnectionFactory;


# instance fields
.field private final client:Lokhttp3/OkHttpClient;


# direct methods
.method public constructor <init>()V
    .locals 1

    .line 11
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 12
    new-instance v0, Lokhttp3/OkHttpClient;

    invoke-direct {v0}, Lokhttp3/OkHttpClient;-><init>()V

    iput-object v0, p0, Lcom/silkimen/http/OkConnectionFactory;->client:Lokhttp3/OkHttpClient;

    return-void
.end method


# virtual methods
.method public create(Ljava/net/URL;)Ljava/net/HttpURLConnection;
    .locals 2

    .line 15
    new-instance v0, Lokhttp3/OkUrlFactory;

    iget-object v1, p0, Lcom/silkimen/http/OkConnectionFactory;->client:Lokhttp3/OkHttpClient;

    invoke-direct {v0, v1}, Lokhttp3/OkUrlFactory;-><init>(Lokhttp3/OkHttpClient;)V

    .line 17
    invoke-virtual {v0, p1}, Lokhttp3/OkUrlFactory;->open(Ljava/net/URL;)Ljava/net/HttpURLConnection;

    move-result-object p1

    return-object p1
.end method

.method public create(Ljava/net/URL;Ljava/net/Proxy;)Ljava/net/HttpURLConnection;
    .locals 1

    .line 21
    new-instance v0, Lokhttp3/OkHttpClient$Builder;

    invoke-direct {v0}, Lokhttp3/OkHttpClient$Builder;-><init>()V

    invoke-virtual {v0, p2}, Lokhttp3/OkHttpClient$Builder;->proxy(Ljava/net/Proxy;)Lokhttp3/OkHttpClient$Builder;

    move-result-object p2

    invoke-virtual {p2}, Lokhttp3/OkHttpClient$Builder;->build()Lokhttp3/OkHttpClient;

    move-result-object p2

    .line 22
    new-instance v0, Lokhttp3/OkUrlFactory;

    invoke-direct {v0, p2}, Lokhttp3/OkUrlFactory;-><init>(Lokhttp3/OkHttpClient;)V

    .line 24
    invoke-virtual {v0, p1}, Lokhttp3/OkUrlFactory;->open(Ljava/net/URL;)Ljava/net/HttpURLConnection;

    move-result-object p1

    return-object p1
.end method
