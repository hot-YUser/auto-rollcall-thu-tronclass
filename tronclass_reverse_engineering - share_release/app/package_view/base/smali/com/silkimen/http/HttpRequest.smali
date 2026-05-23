.class public Lcom/silkimen/http/HttpRequest;
.super Ljava/lang/Object;
.source "HttpRequest.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/silkimen/http/HttpRequest$UploadProgress;,
        Lcom/silkimen/http/HttpRequest$ConnectionFactory;,
        Lcom/silkimen/http/HttpRequest$HttpRequestException;,
        Lcom/silkimen/http/HttpRequest$Base64;,
        Lcom/silkimen/http/HttpRequest$RequestOutputStream;,
        Lcom/silkimen/http/HttpRequest$FlushOperation;,
        Lcom/silkimen/http/HttpRequest$CloseOperation;,
        Lcom/silkimen/http/HttpRequest$Operation;
    }
.end annotation


# static fields
.field private static final BOUNDARY:Ljava/lang/String; = "00content0boundary00"

.field public static final CHARSET_UTF8:Ljava/lang/String; = "UTF-8"

.field private static CONNECTION_FACTORY:Lcom/silkimen/http/HttpRequest$ConnectionFactory; = null

.field public static final CONTENT_TYPE_FORM:Ljava/lang/String; = "application/x-www-form-urlencoded"

.field public static final CONTENT_TYPE_JSON:Ljava/lang/String; = "application/json"

.field private static final CONTENT_TYPE_MULTIPART:Ljava/lang/String; = "multipart/form-data; boundary=00content0boundary00"

.field private static final CRLF:Ljava/lang/String; = "\r\n"

.field private static final EMPTY_STRINGS:[Ljava/lang/String;

.field public static final ENCODING_GZIP:Ljava/lang/String; = "gzip"

.field public static final HEADER_ACCEPT:Ljava/lang/String; = "Accept"

.field public static final HEADER_ACCEPT_CHARSET:Ljava/lang/String; = "Accept-Charset"

.field public static final HEADER_ACCEPT_ENCODING:Ljava/lang/String; = "Accept-Encoding"

.field public static final HEADER_AUTHORIZATION:Ljava/lang/String; = "Authorization"

.field public static final HEADER_CACHE_CONTROL:Ljava/lang/String; = "Cache-Control"

.field public static final HEADER_CONTENT_ENCODING:Ljava/lang/String; = "Content-Encoding"

.field public static final HEADER_CONTENT_LENGTH:Ljava/lang/String; = "Content-Length"

.field public static final HEADER_CONTENT_TYPE:Ljava/lang/String; = "Content-Type"

.field public static final HEADER_DATE:Ljava/lang/String; = "Date"

.field public static final HEADER_ETAG:Ljava/lang/String; = "ETag"

.field public static final HEADER_EXPIRES:Ljava/lang/String; = "Expires"

.field public static final HEADER_IF_NONE_MATCH:Ljava/lang/String; = "If-None-Match"

.field public static final HEADER_LAST_MODIFIED:Ljava/lang/String; = "Last-Modified"

.field public static final HEADER_LOCATION:Ljava/lang/String; = "Location"

.field public static final HEADER_PROXY_AUTHORIZATION:Ljava/lang/String; = "Proxy-Authorization"

.field public static final HEADER_REFERER:Ljava/lang/String; = "Referer"

.field public static final HEADER_SERVER:Ljava/lang/String; = "Server"

.field public static final HEADER_USER_AGENT:Ljava/lang/String; = "User-Agent"

.field public static final METHOD_DELETE:Ljava/lang/String; = "DELETE"

.field public static final METHOD_GET:Ljava/lang/String; = "GET"

.field public static final METHOD_HEAD:Ljava/lang/String; = "HEAD"

.field public static final METHOD_OPTIONS:Ljava/lang/String; = "OPTIONS"

.field public static final METHOD_POST:Ljava/lang/String; = "POST"

.field public static final METHOD_PUT:Ljava/lang/String; = "PUT"

.field public static final METHOD_TRACE:Ljava/lang/String; = "TRACE"

.field public static final PARAM_CHARSET:Ljava/lang/String; = "charset"


# instance fields
.field private bufferSize:I

.field private connection:Ljava/net/HttpURLConnection;

.field private form:Z

.field private httpProxyHost:Ljava/lang/String;

.field private httpProxyPort:I

.field private ignoreCloseExceptions:Z

.field private multipart:Z

.field private output:Lcom/silkimen/http/HttpRequest$RequestOutputStream;

.field private progress:Lcom/silkimen/http/HttpRequest$UploadProgress;

.field private final requestMethod:Ljava/lang/String;

.field private totalSize:J

.field private totalWritten:J

.field private uncompress:Z

.field private final url:Ljava/net/URL;


# direct methods
.method static constructor <clinit>()V
    .locals 1

    const/4 v0, 0x0

    .line 257
    new-array v0, v0, [Ljava/lang/String;

    sput-object v0, Lcom/silkimen/http/HttpRequest;->EMPTY_STRINGS:[Ljava/lang/String;

    .line 346
    sget-object v0, Lcom/silkimen/http/HttpRequest$ConnectionFactory;->DEFAULT:Lcom/silkimen/http/HttpRequest$ConnectionFactory;

    sput-object v0, Lcom/silkimen/http/HttpRequest;->CONNECTION_FACTORY:Lcom/silkimen/http/HttpRequest$ConnectionFactory;

    return-void
.end method

.method public constructor <init>(Ljava/lang/CharSequence;Ljava/lang/String;)V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1360
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 1325
    iput-object v0, p0, Lcom/silkimen/http/HttpRequest;->connection:Ljava/net/HttpURLConnection;

    const/4 v0, 0x1

    .line 1337
    iput-boolean v0, p0, Lcom/silkimen/http/HttpRequest;->ignoreCloseExceptions:Z

    const/4 v0, 0x0

    .line 1339
    iput-boolean v0, p0, Lcom/silkimen/http/HttpRequest;->uncompress:Z

    const/16 v0, 0x2000

    .line 1341
    iput v0, p0, Lcom/silkimen/http/HttpRequest;->bufferSize:I

    const-wide/16 v0, -0x1

    .line 1343
    iput-wide v0, p0, Lcom/silkimen/http/HttpRequest;->totalSize:J

    const-wide/16 v0, 0x0

    .line 1345
    iput-wide v0, p0, Lcom/silkimen/http/HttpRequest;->totalWritten:J

    .line 1351
    sget-object v0, Lcom/silkimen/http/HttpRequest$UploadProgress;->DEFAULT:Lcom/silkimen/http/HttpRequest$UploadProgress;

    iput-object v0, p0, Lcom/silkimen/http/HttpRequest;->progress:Lcom/silkimen/http/HttpRequest$UploadProgress;

    .line 1362
    :try_start_0
    new-instance v0, Ljava/net/URL;

    invoke-virtual {p1}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-direct {v0, p1}, Ljava/net/URL;-><init>(Ljava/lang/String;)V

    iput-object v0, p0, Lcom/silkimen/http/HttpRequest;->url:Ljava/net/URL;
    :try_end_0
    .catch Ljava/net/MalformedURLException; {:try_start_0 .. :try_end_0} :catch_0

    .line 1366
    iput-object p2, p0, Lcom/silkimen/http/HttpRequest;->requestMethod:Ljava/lang/String;

    return-void

    :catch_0
    move-exception p1

    .line 1364
    new-instance p2, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {p2, p1}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw p2
.end method

.method public constructor <init>(Ljava/net/URL;Ljava/lang/String;)V
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1376
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 1325
    iput-object v0, p0, Lcom/silkimen/http/HttpRequest;->connection:Ljava/net/HttpURLConnection;

    const/4 v0, 0x1

    .line 1337
    iput-boolean v0, p0, Lcom/silkimen/http/HttpRequest;->ignoreCloseExceptions:Z

    const/4 v0, 0x0

    .line 1339
    iput-boolean v0, p0, Lcom/silkimen/http/HttpRequest;->uncompress:Z

    const/16 v0, 0x2000

    .line 1341
    iput v0, p0, Lcom/silkimen/http/HttpRequest;->bufferSize:I

    const-wide/16 v0, -0x1

    .line 1343
    iput-wide v0, p0, Lcom/silkimen/http/HttpRequest;->totalSize:J

    const-wide/16 v0, 0x0

    .line 1345
    iput-wide v0, p0, Lcom/silkimen/http/HttpRequest;->totalWritten:J

    .line 1351
    sget-object v0, Lcom/silkimen/http/HttpRequest$UploadProgress;->DEFAULT:Lcom/silkimen/http/HttpRequest$UploadProgress;

    iput-object v0, p0, Lcom/silkimen/http/HttpRequest;->progress:Lcom/silkimen/http/HttpRequest$UploadProgress;

    .line 1377
    iput-object p1, p0, Lcom/silkimen/http/HttpRequest;->url:Ljava/net/URL;

    .line 1378
    iput-object p2, p0, Lcom/silkimen/http/HttpRequest;->requestMethod:Ljava/lang/String;

    return-void
.end method

.method static synthetic access$000(Ljava/lang/String;)Ljava/lang/String;
    .locals 0

    .line 99
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->getValidCharset(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    return-object p0
.end method

.method static synthetic access$100(Lcom/silkimen/http/HttpRequest;)I
    .locals 0

    .line 99
    iget p0, p0, Lcom/silkimen/http/HttpRequest;->bufferSize:I

    return p0
.end method

.method static synthetic access$200(Lcom/silkimen/http/HttpRequest;)J
    .locals 2

    .line 99
    iget-wide v0, p0, Lcom/silkimen/http/HttpRequest;->totalWritten:J

    return-wide v0
.end method

.method static synthetic access$214(Lcom/silkimen/http/HttpRequest;J)J
    .locals 2

    .line 99
    iget-wide v0, p0, Lcom/silkimen/http/HttpRequest;->totalWritten:J

    add-long/2addr v0, p1

    iput-wide v0, p0, Lcom/silkimen/http/HttpRequest;->totalWritten:J

    return-wide v0
.end method

.method static synthetic access$300(Lcom/silkimen/http/HttpRequest;)J
    .locals 2

    .line 99
    iget-wide v0, p0, Lcom/silkimen/http/HttpRequest;->totalSize:J

    return-wide v0
.end method

.method static synthetic access$400(Lcom/silkimen/http/HttpRequest;)Lcom/silkimen/http/HttpRequest$UploadProgress;
    .locals 0

    .line 99
    iget-object p0, p0, Lcom/silkimen/http/HttpRequest;->progress:Lcom/silkimen/http/HttpRequest$UploadProgress;

    return-object p0
.end method

.method private static addParam(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/StringBuilder;)Ljava/lang/StringBuilder;
    .locals 1

    if-eqz p1, :cond_0

    .line 288
    invoke-virtual {p1}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/Class;->isArray()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 289
    invoke-static {p1}, Lcom/silkimen/http/HttpRequest;->arrayToList(Ljava/lang/Object;)Ljava/util/List;

    move-result-object p1

    .line 291
    :cond_0
    instance-of v0, p1, Ljava/lang/Iterable;

    if-eqz v0, :cond_3

    .line 292
    check-cast p1, Ljava/lang/Iterable;

    invoke-interface {p1}, Ljava/lang/Iterable;->iterator()Ljava/util/Iterator;

    move-result-object p1

    .line 293
    :cond_1
    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_4

    .line 294
    invoke-virtual {p2, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    .line 295
    const-string v0, "[]="

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    .line 296
    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    if-eqz v0, :cond_2

    .line 298
    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    .line 299
    :cond_2
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_1

    .line 300
    const-string v0, "&"

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    goto :goto_0

    .line 303
    :cond_3
    invoke-virtual {p2, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    .line 304
    const-string p0, "="

    invoke-virtual {p2, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    if-eqz p1, :cond_4

    .line 306
    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    :cond_4
    return-object p2
.end method

.method private static addParamPrefix(Ljava/lang/String;Ljava/lang/StringBuilder;)Ljava/lang/StringBuilder;
    .locals 4

    const/16 v0, 0x3f

    .line 278
    invoke-virtual {p0, v0}, Ljava/lang/String;->indexOf(I)I

    move-result v1

    .line 279
    invoke-virtual {p1}, Ljava/lang/StringBuilder;->length()I

    move-result v2

    add-int/lit8 v2, v2, -0x1

    const/4 v3, -0x1

    if-ne v1, v3, :cond_0

    .line 281
    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    goto :goto_0

    :cond_0
    if-ge v1, v2, :cond_1

    .line 282
    invoke-virtual {p0, v2}, Ljava/lang/String;->charAt(I)C

    move-result p0

    const/16 v0, 0x26

    if-eq p0, v0, :cond_1

    .line 283
    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    :cond_1
    :goto_0
    return-object p1
.end method

.method private static addPathSeparator(Ljava/lang/String;Ljava/lang/StringBuilder;)Ljava/lang/StringBuilder;
    .locals 2

    const/16 v0, 0x3a

    .line 271
    invoke-virtual {p0, v0}, Ljava/lang/String;->indexOf(I)I

    move-result v0

    add-int/lit8 v0, v0, 0x2

    const/16 v1, 0x2f

    invoke-virtual {p0, v1}, Ljava/lang/String;->lastIndexOf(I)I

    move-result p0

    if-ne v0, p0, :cond_0

    .line 272
    invoke-virtual {p1, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    :cond_0
    return-object p1
.end method

.method public static append(Ljava/lang/CharSequence;Ljava/util/Map;)Ljava/lang/String;
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/CharSequence;",
            "Ljava/util/Map<",
            "**>;)",
            "Ljava/lang/String;"
        }
    .end annotation

    .line 842
    invoke-virtual {p0}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object p0

    if-eqz p1, :cond_2

    .line 843
    invoke-interface {p1}, Ljava/util/Map;->isEmpty()Z

    move-result v0

    if-eqz v0, :cond_0

    goto :goto_1

    .line 846
    :cond_0
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0, p0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    .line 848
    invoke-static {p0, v0}, Lcom/silkimen/http/HttpRequest;->addPathSeparator(Ljava/lang/String;Ljava/lang/StringBuilder;)Ljava/lang/StringBuilder;

    .line 849
    invoke-static {p0, v0}, Lcom/silkimen/http/HttpRequest;->addParamPrefix(Ljava/lang/String;Ljava/lang/StringBuilder;)Ljava/lang/StringBuilder;

    .line 852
    invoke-interface {p1}, Ljava/util/Map;->entrySet()Ljava/util/Set;

    move-result-object p0

    invoke-interface {p0}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object p0

    .line 853
    invoke-interface {p0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/util/Map$Entry;

    .line 854
    invoke-interface {p1}, Ljava/util/Map$Entry;->getKey()Ljava/lang/Object;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {p1}, Ljava/util/Map$Entry;->getValue()Ljava/lang/Object;

    move-result-object p1

    invoke-static {v1, p1, v0}, Lcom/silkimen/http/HttpRequest;->addParam(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/StringBuilder;)Ljava/lang/StringBuilder;

    .line 856
    :goto_0
    invoke-interface {p0}, Ljava/util/Iterator;->hasNext()Z

    move-result p1

    if-eqz p1, :cond_1

    const/16 p1, 0x26

    .line 857
    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    .line 858
    invoke-interface {p0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/util/Map$Entry;

    .line 859
    invoke-interface {p1}, Ljava/util/Map$Entry;->getKey()Ljava/lang/Object;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-interface {p1}, Ljava/util/Map$Entry;->getValue()Ljava/lang/Object;

    move-result-object p1

    invoke-static {v1, p1, v0}, Lcom/silkimen/http/HttpRequest;->addParam(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/StringBuilder;)Ljava/lang/StringBuilder;

    goto :goto_0

    .line 862
    :cond_1
    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    :cond_2
    :goto_1
    return-object p0
.end method

.method public static varargs append(Ljava/lang/CharSequence;[Ljava/lang/Object;)Ljava/lang/String;
    .locals 3

    .line 876
    invoke-virtual {p0}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object p0

    if-eqz p1, :cond_3

    .line 877
    array-length v0, p1

    if-nez v0, :cond_0

    goto :goto_1

    .line 880
    :cond_0
    array-length v0, p1

    const/4 v1, 0x2

    rem-int/2addr v0, v1

    if-nez v0, :cond_2

    .line 883
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0, p0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    .line 885
    invoke-static {p0, v0}, Lcom/silkimen/http/HttpRequest;->addPathSeparator(Ljava/lang/String;Ljava/lang/StringBuilder;)Ljava/lang/StringBuilder;

    .line 886
    invoke-static {p0, v0}, Lcom/silkimen/http/HttpRequest;->addParamPrefix(Ljava/lang/String;Ljava/lang/StringBuilder;)Ljava/lang/StringBuilder;

    const/4 p0, 0x0

    .line 888
    aget-object p0, p1, p0

    const/4 v2, 0x1

    aget-object v2, p1, v2

    invoke-static {p0, v2, v0}, Lcom/silkimen/http/HttpRequest;->addParam(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/StringBuilder;)Ljava/lang/StringBuilder;

    .line 890
    :goto_0
    array-length p0, p1

    if-ge v1, p0, :cond_1

    const/16 p0, 0x26

    .line 891
    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    .line 892
    aget-object p0, p1, v1

    add-int/lit8 v2, v1, 0x1

    aget-object v2, p1, v2

    invoke-static {p0, v2, v0}, Lcom/silkimen/http/HttpRequest;->addParam(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/StringBuilder;)Ljava/lang/StringBuilder;

    add-int/lit8 v1, v1, 0x2

    goto :goto_0

    .line 895
    :cond_1
    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    return-object p0

    .line 881
    :cond_2
    new-instance p0, Ljava/lang/IllegalArgumentException;

    const-string p1, "Must specify an even number of parameter names/values"

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0

    :cond_3
    :goto_1
    return-object p0
.end method

.method private static arrayToList(Ljava/lang/Object;)Ljava/util/List;
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/Object;",
            ")",
            "Ljava/util/List<",
            "Ljava/lang/Object;",
            ">;"
        }
    .end annotation

    .line 760
    instance-of v0, p0, [Ljava/lang/Object;

    if-eqz v0, :cond_0

    .line 761
    check-cast p0, [Ljava/lang/Object;

    invoke-static {p0}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object p0

    return-object p0

    .line 763
    :cond_0
    new-instance v0, Ljava/util/ArrayList;

    invoke-direct {v0}, Ljava/util/ArrayList;-><init>()V

    .line 765
    instance-of v1, p0, [I

    const/4 v2, 0x0

    if-eqz v1, :cond_1

    .line 766
    check-cast p0, [I

    array-length v1, p0

    :goto_0
    if-ge v2, v1, :cond_8

    aget v3, p0, v2

    .line 767
    invoke-static {v3}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v3

    invoke-interface {v0, v3}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 768
    :cond_1
    instance-of v1, p0, [Z

    if-eqz v1, :cond_2

    .line 769
    check-cast p0, [Z

    array-length v1, p0

    :goto_1
    if-ge v2, v1, :cond_8

    aget-boolean v3, p0, v2

    .line 770
    invoke-static {v3}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v3

    invoke-interface {v0, v3}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_1

    .line 771
    :cond_2
    instance-of v1, p0, [J

    if-eqz v1, :cond_3

    .line 772
    check-cast p0, [J

    array-length v1, p0

    :goto_2
    if-ge v2, v1, :cond_8

    aget-wide v3, p0, v2

    .line 773
    invoke-static {v3, v4}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object v3

    invoke-interface {v0, v3}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_2

    .line 774
    :cond_3
    instance-of v1, p0, [F

    if-eqz v1, :cond_4

    .line 775
    check-cast p0, [F

    array-length v1, p0

    :goto_3
    if-ge v2, v1, :cond_8

    aget v3, p0, v2

    .line 776
    invoke-static {v3}, Ljava/lang/Float;->valueOf(F)Ljava/lang/Float;

    move-result-object v3

    invoke-interface {v0, v3}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_3

    .line 777
    :cond_4
    instance-of v1, p0, [D

    if-eqz v1, :cond_5

    .line 778
    check-cast p0, [D

    array-length v1, p0

    :goto_4
    if-ge v2, v1, :cond_8

    aget-wide v3, p0, v2

    .line 779
    invoke-static {v3, v4}, Ljava/lang/Double;->valueOf(D)Ljava/lang/Double;

    move-result-object v3

    invoke-interface {v0, v3}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_4

    .line 780
    :cond_5
    instance-of v1, p0, [S

    if-eqz v1, :cond_6

    .line 781
    check-cast p0, [S

    array-length v1, p0

    :goto_5
    if-ge v2, v1, :cond_8

    aget-short v3, p0, v2

    .line 782
    invoke-static {v3}, Ljava/lang/Short;->valueOf(S)Ljava/lang/Short;

    move-result-object v3

    invoke-interface {v0, v3}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_5

    .line 783
    :cond_6
    instance-of v1, p0, [B

    if-eqz v1, :cond_7

    .line 784
    check-cast p0, [B

    array-length v1, p0

    :goto_6
    if-ge v2, v1, :cond_8

    aget-byte v3, p0, v2

    .line 785
    invoke-static {v3}, Ljava/lang/Byte;->valueOf(B)Ljava/lang/Byte;

    move-result-object v3

    invoke-interface {v0, v3}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_6

    .line 786
    :cond_7
    instance-of v1, p0, [C

    if-eqz v1, :cond_8

    .line 787
    check-cast p0, [C

    array-length v1, p0

    :goto_7
    if-ge v2, v1, :cond_8

    aget-char v3, p0, v2

    .line 788
    invoke-static {v3}, Ljava/lang/Character;->valueOf(C)Ljava/lang/Character;

    move-result-object v3

    invoke-interface {v0, v3}, Ljava/util/List;->add(Ljava/lang/Object;)Z

    add-int/lit8 v2, v2, 0x1

    goto :goto_7

    :cond_8
    return-object v0
.end method

.method private createConnection()Ljava/net/HttpURLConnection;
    .locals 3

    .line 1388
    :try_start_0
    iget-object v0, p0, Lcom/silkimen/http/HttpRequest;->httpProxyHost:Ljava/lang/String;

    if-eqz v0, :cond_0

    .line 1389
    sget-object v0, Lcom/silkimen/http/HttpRequest;->CONNECTION_FACTORY:Lcom/silkimen/http/HttpRequest$ConnectionFactory;

    iget-object v1, p0, Lcom/silkimen/http/HttpRequest;->url:Ljava/net/URL;

    invoke-direct {p0}, Lcom/silkimen/http/HttpRequest;->createProxy()Ljava/net/Proxy;

    move-result-object v2

    invoke-interface {v0, v1, v2}, Lcom/silkimen/http/HttpRequest$ConnectionFactory;->create(Ljava/net/URL;Ljava/net/Proxy;)Ljava/net/HttpURLConnection;

    move-result-object v0

    goto :goto_0

    .line 1391
    :cond_0
    sget-object v0, Lcom/silkimen/http/HttpRequest;->CONNECTION_FACTORY:Lcom/silkimen/http/HttpRequest$ConnectionFactory;

    iget-object v1, p0, Lcom/silkimen/http/HttpRequest;->url:Ljava/net/URL;

    invoke-interface {v0, v1}, Lcom/silkimen/http/HttpRequest$ConnectionFactory;->create(Ljava/net/URL;)Ljava/net/HttpURLConnection;

    move-result-object v0

    .line 1392
    :goto_0
    iget-object v1, p0, Lcom/silkimen/http/HttpRequest;->requestMethod:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/net/HttpURLConnection;->setRequestMethod(Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    return-object v0

    :catch_0
    move-exception v0

    .line 1395
    new-instance v1, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v1, v0}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v1
.end method

.method private createProxy()Ljava/net/Proxy;
    .locals 5

    .line 1382
    new-instance v0, Ljava/net/Proxy;

    sget-object v1, Ljava/net/Proxy$Type;->HTTP:Ljava/net/Proxy$Type;

    new-instance v2, Ljava/net/InetSocketAddress;

    iget-object v3, p0, Lcom/silkimen/http/HttpRequest;->httpProxyHost:Ljava/lang/String;

    iget v4, p0, Lcom/silkimen/http/HttpRequest;->httpProxyPort:I

    invoke-direct {v2, v3, v4}, Ljava/net/InetSocketAddress;-><init>(Ljava/lang/String;I)V

    invoke-direct {v0, v1, v2}, Ljava/net/Proxy;-><init>(Ljava/net/Proxy$Type;Ljava/net/SocketAddress;)V

    return-object v0
.end method

.method public static delete(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1077
    new-instance v0, Lcom/silkimen/http/HttpRequest;

    const-string v1, "DELETE"

    invoke-direct {v0, p0, v1}, Lcom/silkimen/http/HttpRequest;-><init>(Ljava/lang/CharSequence;Ljava/lang/String;)V

    return-object v0
.end method

.method public static delete(Ljava/lang/CharSequence;Ljava/util/Map;Z)Lcom/silkimen/http/HttpRequest;
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/CharSequence;",
            "Ljava/util/Map<",
            "**>;Z)",
            "Lcom/silkimen/http/HttpRequest;"
        }
    .end annotation

    .line 1104
    invoke-static {p0, p1}, Lcom/silkimen/http/HttpRequest;->append(Ljava/lang/CharSequence;Ljava/util/Map;)Ljava/lang/String;

    move-result-object p0

    if-eqz p2, :cond_0

    .line 1105
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->encode(Ljava/lang/CharSequence;)Ljava/lang/String;

    move-result-object p0

    :cond_0
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->delete(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;

    move-result-object p0

    return-object p0
.end method

.method public static varargs delete(Ljava/lang/CharSequence;Z[Ljava/lang/Object;)Lcom/silkimen/http/HttpRequest;
    .locals 0

    .line 1122
    invoke-static {p0, p2}, Lcom/silkimen/http/HttpRequest;->append(Ljava/lang/CharSequence;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object p0

    if-eqz p1, :cond_0

    .line 1123
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->encode(Ljava/lang/CharSequence;)Ljava/lang/String;

    move-result-object p0

    :cond_0
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->delete(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;

    move-result-object p0

    return-object p0
.end method

.method public static delete(Ljava/net/URL;)Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1088
    new-instance v0, Lcom/silkimen/http/HttpRequest;

    const-string v1, "DELETE"

    invoke-direct {v0, p0, v1}, Lcom/silkimen/http/HttpRequest;-><init>(Ljava/net/URL;Ljava/lang/String;)V

    return-object v0
.end method

.method public static encode(Ljava/lang/CharSequence;)Ljava/lang/String;
    .locals 7
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 808
    :try_start_0
    new-instance v0, Ljava/net/URL;

    invoke-virtual {p0}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-direct {v0, p0}, Ljava/net/URL;-><init>(Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_1

    .line 813
    invoke-virtual {v0}, Ljava/net/URL;->getHost()Ljava/lang/String;

    move-result-object p0

    .line 814
    invoke-virtual {v0}, Ljava/net/URL;->getPort()I

    move-result v1

    const/4 v2, -0x1

    if-eq v1, v2, :cond_0

    .line 816
    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v2, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    const/16 v2, 0x3a

    invoke-virtual {p0, v2}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-static {v1}, Ljava/lang/Integer;->toString(I)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {p0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    :cond_0
    move-object v3, p0

    .line 819
    :try_start_1
    new-instance p0, Ljava/net/URI;

    invoke-virtual {v0}, Ljava/net/URL;->getProtocol()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v0}, Ljava/net/URL;->getPath()Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v0}, Ljava/net/URL;->getQuery()Ljava/lang/String;

    move-result-object v5

    const/4 v6, 0x0

    move-object v1, p0

    invoke-direct/range {v1 .. v6}, Ljava/net/URI;-><init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    invoke-virtual {p0}, Ljava/net/URI;->toASCIIString()Ljava/lang/String;

    move-result-object p0

    const/16 v0, 0x3f

    .line 820
    invoke-virtual {p0, v0}, Ljava/lang/String;->indexOf(I)I

    move-result v0

    if-lez v0, :cond_1

    add-int/lit8 v0, v0, 0x1

    .line 821
    invoke-virtual {p0}, Ljava/lang/String;->length()I

    move-result v1

    if-ge v0, v1, :cond_1

    .line 822
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    const/4 v2, 0x0

    invoke-virtual {p0, v2, v0}, Ljava/lang/String;->substring(II)Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {p0, v0}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object p0

    const-string v0, "+"

    const-string v2, "%2B"

    invoke-virtual {p0, v0, v2}, Ljava/lang/String;->replace(Ljava/lang/CharSequence;Ljava/lang/CharSequence;)Ljava/lang/String;

    move-result-object p0

    invoke-virtual {v1, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0
    :try_end_1
    .catch Ljava/net/URISyntaxException; {:try_start_1 .. :try_end_1} :catch_0

    :cond_1
    return-object p0

    :catch_0
    move-exception p0

    .line 825
    new-instance v0, Ljava/io/IOException;

    const-string v1, "Parsing URI failed"

    invoke-direct {v0, v1}, Ljava/io/IOException;-><init>(Ljava/lang/String;)V

    .line 826
    invoke-virtual {v0, p0}, Ljava/io/IOException;->initCause(Ljava/lang/Throwable;)Ljava/lang/Throwable;

    .line 827
    new-instance p0, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {p0, v0}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw p0

    :catch_1
    move-exception p0

    .line 810
    new-instance v0, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v0, p0}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v0
.end method

.method public static get(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 906
    new-instance v0, Lcom/silkimen/http/HttpRequest;

    const-string v1, "GET"

    invoke-direct {v0, p0, v1}, Lcom/silkimen/http/HttpRequest;-><init>(Ljava/lang/CharSequence;Ljava/lang/String;)V

    return-object v0
.end method

.method public static get(Ljava/lang/CharSequence;Ljava/util/Map;Z)Lcom/silkimen/http/HttpRequest;
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/CharSequence;",
            "Ljava/util/Map<",
            "**>;Z)",
            "Lcom/silkimen/http/HttpRequest;"
        }
    .end annotation

    .line 933
    invoke-static {p0, p1}, Lcom/silkimen/http/HttpRequest;->append(Ljava/lang/CharSequence;Ljava/util/Map;)Ljava/lang/String;

    move-result-object p0

    if-eqz p2, :cond_0

    .line 934
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->encode(Ljava/lang/CharSequence;)Ljava/lang/String;

    move-result-object p0

    :cond_0
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->get(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;

    move-result-object p0

    return-object p0
.end method

.method public static varargs get(Ljava/lang/CharSequence;Z[Ljava/lang/Object;)Lcom/silkimen/http/HttpRequest;
    .locals 0

    .line 951
    invoke-static {p0, p2}, Lcom/silkimen/http/HttpRequest;->append(Ljava/lang/CharSequence;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object p0

    if-eqz p1, :cond_0

    .line 952
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->encode(Ljava/lang/CharSequence;)Ljava/lang/String;

    move-result-object p0

    :cond_0
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->get(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;

    move-result-object p0

    return-object p0
.end method

.method public static get(Ljava/net/URL;)Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 917
    new-instance v0, Lcom/silkimen/http/HttpRequest;

    const-string v1, "GET"

    invoke-direct {v0, p0, v1}, Lcom/silkimen/http/HttpRequest;-><init>(Ljava/net/URL;Ljava/lang/String;)V

    return-object v0
.end method

.method private static getValidCharset(Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    if-eqz p0, :cond_0

    .line 260
    invoke-virtual {p0}, Ljava/lang/String;->length()I

    move-result v0

    if-lez v0, :cond_0

    return-object p0

    .line 263
    :cond_0
    const-string p0, "UTF-8"

    return-object p0
.end method

.method public static head(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1134
    new-instance v0, Lcom/silkimen/http/HttpRequest;

    const-string v1, "HEAD"

    invoke-direct {v0, p0, v1}, Lcom/silkimen/http/HttpRequest;-><init>(Ljava/lang/CharSequence;Ljava/lang/String;)V

    return-object v0
.end method

.method public static head(Ljava/lang/CharSequence;Ljava/util/Map;Z)Lcom/silkimen/http/HttpRequest;
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/CharSequence;",
            "Ljava/util/Map<",
            "**>;Z)",
            "Lcom/silkimen/http/HttpRequest;"
        }
    .end annotation

    .line 1161
    invoke-static {p0, p1}, Lcom/silkimen/http/HttpRequest;->append(Ljava/lang/CharSequence;Ljava/util/Map;)Ljava/lang/String;

    move-result-object p0

    if-eqz p2, :cond_0

    .line 1162
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->encode(Ljava/lang/CharSequence;)Ljava/lang/String;

    move-result-object p0

    :cond_0
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->head(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;

    move-result-object p0

    return-object p0
.end method

.method public static varargs head(Ljava/lang/CharSequence;Z[Ljava/lang/Object;)Lcom/silkimen/http/HttpRequest;
    .locals 0

    .line 1179
    invoke-static {p0, p2}, Lcom/silkimen/http/HttpRequest;->append(Ljava/lang/CharSequence;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object p0

    if-eqz p1, :cond_0

    .line 1180
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->encode(Ljava/lang/CharSequence;)Ljava/lang/String;

    move-result-object p0

    :cond_0
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->head(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;

    move-result-object p0

    return-object p0
.end method

.method public static head(Ljava/net/URL;)Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1145
    new-instance v0, Lcom/silkimen/http/HttpRequest;

    const-string v1, "HEAD"

    invoke-direct {v0, p0, v1}, Lcom/silkimen/http/HttpRequest;-><init>(Ljava/net/URL;Ljava/lang/String;)V

    return-object v0
.end method

.method private incrementTotalSize(J)Lcom/silkimen/http/HttpRequest;
    .locals 4

    .line 2542
    iget-wide v0, p0, Lcom/silkimen/http/HttpRequest;->totalSize:J

    const-wide/16 v2, -0x1

    cmp-long v0, v0, v2

    if-nez v0, :cond_0

    const-wide/16 v0, 0x0

    .line 2543
    iput-wide v0, p0, Lcom/silkimen/http/HttpRequest;->totalSize:J

    .line 2544
    :cond_0
    iget-wide v0, p0, Lcom/silkimen/http/HttpRequest;->totalSize:J

    add-long/2addr v0, p1

    iput-wide v0, p0, Lcom/silkimen/http/HttpRequest;->totalSize:J

    return-object p0
.end method

.method public static keepAlive(Z)V
    .locals 1

    .line 1235
    const-string v0, "http.keepAlive"

    invoke-static {p0}, Ljava/lang/Boolean;->toString(Z)Ljava/lang/String;

    move-result-object p0

    invoke-static {v0, p0}, Lcom/silkimen/http/HttpRequest;->setProperty(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    return-void
.end method

.method public static maxConnections(I)V
    .locals 1

    .line 1246
    const-string v0, "http.maxConnections"

    invoke-static {p0}, Ljava/lang/Integer;->toString(I)Ljava/lang/String;

    move-result-object p0

    invoke-static {v0, p0}, Lcom/silkimen/http/HttpRequest;->setProperty(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    return-void
.end method

.method public static varargs nonProxyHosts([Ljava/lang/String;)V
    .locals 6

    .line 1286
    const-string v0, "http.nonProxyHosts"

    if-eqz p0, :cond_1

    array-length v1, p0

    if-lez v1, :cond_1

    .line 1287
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    .line 1288
    array-length v2, p0

    add-int/lit8 v2, v2, -0x1

    const/4 v3, 0x0

    :goto_0
    if-ge v3, v2, :cond_0

    .line 1290
    aget-object v4, p0, v3

    invoke-virtual {v1, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v4

    const/16 v5, 0x7c

    invoke-virtual {v4, v5}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    .line 1291
    :cond_0
    aget-object p0, p0, v2

    invoke-virtual {v1, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    .line 1292
    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-static {v0, p0}, Lcom/silkimen/http/HttpRequest;->setProperty(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    goto :goto_1

    :cond_1
    const/4 p0, 0x0

    .line 1294
    invoke-static {v0, p0}, Lcom/silkimen/http/HttpRequest;->setProperty(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    :goto_1
    return-void
.end method

.method public static options(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1191
    new-instance v0, Lcom/silkimen/http/HttpRequest;

    const-string v1, "OPTIONS"

    invoke-direct {v0, p0, v1}, Lcom/silkimen/http/HttpRequest;-><init>(Ljava/lang/CharSequence;Ljava/lang/String;)V

    return-object v0
.end method

.method public static options(Ljava/net/URL;)Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1202
    new-instance v0, Lcom/silkimen/http/HttpRequest;

    const-string v1, "OPTIONS"

    invoke-direct {v0, p0, v1}, Lcom/silkimen/http/HttpRequest;-><init>(Ljava/net/URL;Ljava/lang/String;)V

    return-object v0
.end method

.method public static post(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 963
    new-instance v0, Lcom/silkimen/http/HttpRequest;

    const-string v1, "POST"

    invoke-direct {v0, p0, v1}, Lcom/silkimen/http/HttpRequest;-><init>(Ljava/lang/CharSequence;Ljava/lang/String;)V

    return-object v0
.end method

.method public static post(Ljava/lang/CharSequence;Ljava/util/Map;Z)Lcom/silkimen/http/HttpRequest;
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/CharSequence;",
            "Ljava/util/Map<",
            "**>;Z)",
            "Lcom/silkimen/http/HttpRequest;"
        }
    .end annotation

    .line 990
    invoke-static {p0, p1}, Lcom/silkimen/http/HttpRequest;->append(Ljava/lang/CharSequence;Ljava/util/Map;)Ljava/lang/String;

    move-result-object p0

    if-eqz p2, :cond_0

    .line 991
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->encode(Ljava/lang/CharSequence;)Ljava/lang/String;

    move-result-object p0

    :cond_0
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->post(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;

    move-result-object p0

    return-object p0
.end method

.method public static varargs post(Ljava/lang/CharSequence;Z[Ljava/lang/Object;)Lcom/silkimen/http/HttpRequest;
    .locals 0

    .line 1008
    invoke-static {p0, p2}, Lcom/silkimen/http/HttpRequest;->append(Ljava/lang/CharSequence;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object p0

    if-eqz p1, :cond_0

    .line 1009
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->encode(Ljava/lang/CharSequence;)Ljava/lang/String;

    move-result-object p0

    :cond_0
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->post(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;

    move-result-object p0

    return-object p0
.end method

.method public static post(Ljava/net/URL;)Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 974
    new-instance v0, Lcom/silkimen/http/HttpRequest;

    const-string v1, "POST"

    invoke-direct {v0, p0, v1}, Lcom/silkimen/http/HttpRequest;-><init>(Ljava/net/URL;Ljava/lang/String;)V

    return-object v0
.end method

.method public static proxyHost(Ljava/lang/String;)V
    .locals 1

    .line 1258
    const-string v0, "http.proxyHost"

    invoke-static {v0, p0}, Lcom/silkimen/http/HttpRequest;->setProperty(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    .line 1259
    const-string v0, "https.proxyHost"

    invoke-static {v0, p0}, Lcom/silkimen/http/HttpRequest;->setProperty(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    return-void
.end method

.method public static proxyPort(I)V
    .locals 1

    .line 1271
    invoke-static {p0}, Ljava/lang/Integer;->toString(I)Ljava/lang/String;

    move-result-object p0

    .line 1272
    const-string v0, "http.proxyPort"

    invoke-static {v0, p0}, Lcom/silkimen/http/HttpRequest;->setProperty(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    .line 1273
    const-string v0, "https.proxyPort"

    invoke-static {v0, p0}, Lcom/silkimen/http/HttpRequest;->setProperty(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    return-void
.end method

.method public static put(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1020
    new-instance v0, Lcom/silkimen/http/HttpRequest;

    const-string v1, "PUT"

    invoke-direct {v0, p0, v1}, Lcom/silkimen/http/HttpRequest;-><init>(Ljava/lang/CharSequence;Ljava/lang/String;)V

    return-object v0
.end method

.method public static put(Ljava/lang/CharSequence;Ljava/util/Map;Z)Lcom/silkimen/http/HttpRequest;
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/CharSequence;",
            "Ljava/util/Map<",
            "**>;Z)",
            "Lcom/silkimen/http/HttpRequest;"
        }
    .end annotation

    .line 1047
    invoke-static {p0, p1}, Lcom/silkimen/http/HttpRequest;->append(Ljava/lang/CharSequence;Ljava/util/Map;)Ljava/lang/String;

    move-result-object p0

    if-eqz p2, :cond_0

    .line 1048
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->encode(Ljava/lang/CharSequence;)Ljava/lang/String;

    move-result-object p0

    :cond_0
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->put(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;

    move-result-object p0

    return-object p0
.end method

.method public static varargs put(Ljava/lang/CharSequence;Z[Ljava/lang/Object;)Lcom/silkimen/http/HttpRequest;
    .locals 0

    .line 1065
    invoke-static {p0, p2}, Lcom/silkimen/http/HttpRequest;->append(Ljava/lang/CharSequence;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object p0

    if-eqz p1, :cond_0

    .line 1066
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->encode(Ljava/lang/CharSequence;)Ljava/lang/String;

    move-result-object p0

    :cond_0
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest;->put(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;

    move-result-object p0

    return-object p0
.end method

.method public static put(Ljava/net/URL;)Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1031
    new-instance v0, Lcom/silkimen/http/HttpRequest;

    const-string v1, "PUT"

    invoke-direct {v0, p0, v1}, Lcom/silkimen/http/HttpRequest;-><init>(Ljava/net/URL;Ljava/lang/String;)V

    return-object v0
.end method

.method public static setConnectionFactory(Lcom/silkimen/http/HttpRequest$ConnectionFactory;)V
    .locals 0

    if-nez p0, :cond_0

    .line 353
    sget-object p0, Lcom/silkimen/http/HttpRequest$ConnectionFactory;->DEFAULT:Lcom/silkimen/http/HttpRequest$ConnectionFactory;

    sput-object p0, Lcom/silkimen/http/HttpRequest;->CONNECTION_FACTORY:Lcom/silkimen/http/HttpRequest$ConnectionFactory;

    goto :goto_0

    .line 355
    :cond_0
    sput-object p0, Lcom/silkimen/http/HttpRequest;->CONNECTION_FACTORY:Lcom/silkimen/http/HttpRequest$ConnectionFactory;

    :goto_0
    return-void
.end method

.method private static setProperty(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    if-eqz p1, :cond_0

    .line 1309
    new-instance v0, Lcom/silkimen/http/HttpRequest$1;

    invoke-direct {v0, p0, p1}, Lcom/silkimen/http/HttpRequest$1;-><init>(Ljava/lang/String;Ljava/lang/String;)V

    goto :goto_0

    .line 1316
    :cond_0
    new-instance v0, Lcom/silkimen/http/HttpRequest$2;

    invoke-direct {v0, p0}, Lcom/silkimen/http/HttpRequest$2;-><init>(Ljava/lang/String;)V

    .line 1322
    :goto_0
    invoke-static {v0}, Ljava/security/AccessController;->doPrivileged(Ljava/security/PrivilegedAction;)Ljava/lang/Object;

    move-result-object p0

    check-cast p0, Ljava/lang/String;

    return-object p0
.end method

.method public static trace(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1213
    new-instance v0, Lcom/silkimen/http/HttpRequest;

    const-string v1, "TRACE"

    invoke-direct {v0, p0, v1}, Lcom/silkimen/http/HttpRequest;-><init>(Ljava/lang/CharSequence;Ljava/lang/String;)V

    return-object v0
.end method

.method public static trace(Ljava/net/URL;)Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1224
    new-instance v0, Lcom/silkimen/http/HttpRequest;

    const-string v1, "TRACE"

    invoke-direct {v0, p0, v1}, Lcom/silkimen/http/HttpRequest;-><init>(Ljava/net/URL;Ljava/lang/String;)V

    return-object v0
.end method


# virtual methods
.method public accept(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 1

    .line 2465
    const-string v0, "Accept"

    invoke-virtual {p0, v0, p1}, Lcom/silkimen/http/HttpRequest;->header(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public acceptCharset(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 1

    .line 2255
    const-string v0, "Accept-Charset"

    invoke-virtual {p0, v0, p1}, Lcom/silkimen/http/HttpRequest;->header(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public acceptEncoding(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 1

    .line 2235
    const-string v0, "Accept-Encoding"

    invoke-virtual {p0, v0, p1}, Lcom/silkimen/http/HttpRequest;->header(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public acceptGzipEncoding()Lcom/silkimen/http/HttpRequest;
    .locals 1

    .line 2245
    const-string v0, "gzip"

    invoke-virtual {p0, v0}, Lcom/silkimen/http/HttpRequest;->acceptEncoding(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object v0

    return-object v0
.end method

.method public acceptJson()Lcom/silkimen/http/HttpRequest;
    .locals 1

    .line 2474
    const-string v0, "application/json"

    invoke-virtual {p0, v0}, Lcom/silkimen/http/HttpRequest;->accept(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object v0

    return-object v0
.end method

.method public authorization(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 1

    .line 2337
    const-string v0, "Authorization"

    invoke-virtual {p0, v0, p1}, Lcom/silkimen/http/HttpRequest;->header(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public badRequest()Z
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    const/16 v0, 0x190

    .line 1513
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->code()I

    move-result v1

    if-ne v0, v1, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public basic(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 2

    .line 2358
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Basic "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const/16 v1, 0x3a

    invoke-virtual {p1, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {p1}, Lcom/silkimen/http/HttpRequest$Base64;->encode(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, p1}, Lcom/silkimen/http/HttpRequest;->authorization(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public body(Ljava/util/concurrent/atomic/AtomicReference;)Lcom/silkimen/http/HttpRequest;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/concurrent/atomic/AtomicReference<",
            "Ljava/lang/String;",
            ">;)",
            "Lcom/silkimen/http/HttpRequest;"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1677
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->body()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Ljava/util/concurrent/atomic/AtomicReference;->set(Ljava/lang/Object;)V

    return-object p0
.end method

.method public body(Ljava/util/concurrent/atomic/AtomicReference;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/concurrent/atomic/AtomicReference<",
            "Ljava/lang/String;",
            ">;",
            "Ljava/lang/String;",
            ")",
            "Lcom/silkimen/http/HttpRequest;"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1691
    invoke-virtual {p0, p2}, Lcom/silkimen/http/HttpRequest;->body(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p1, p2}, Ljava/util/concurrent/atomic/AtomicReference;->set(Ljava/lang/Object;)V

    return-object p0
.end method

.method public body()Ljava/lang/String;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1665
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->charset()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p0, v0}, Lcom/silkimen/http/HttpRequest;->body(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public body(Ljava/lang/String;)Ljava/lang/String;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1648
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->byteStream()Ljava/io/ByteArrayOutputStream;

    move-result-object v0

    .line 1650
    :try_start_0
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->buffer()Ljava/io/BufferedInputStream;

    move-result-object v1

    invoke-virtual {p0, v1, v0}, Lcom/silkimen/http/HttpRequest;->copy(Ljava/io/InputStream;Ljava/io/OutputStream;)Lcom/silkimen/http/HttpRequest;

    .line 1651
    invoke-static {p1}, Lcom/silkimen/http/HttpRequest;->getValidCharset(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Ljava/io/ByteArrayOutputStream;->toString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    return-object p1

    :catch_0
    move-exception p1

    .line 1653
    new-instance v0, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v0, p1}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v0
.end method

.method public buffer()Ljava/io/BufferedInputStream;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1729
    new-instance v0, Ljava/io/BufferedInputStream;

    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->stream()Ljava/io/InputStream;

    move-result-object v1

    iget v2, p0, Lcom/silkimen/http/HttpRequest;->bufferSize:I

    invoke-direct {v0, v1, v2}, Ljava/io/BufferedInputStream;-><init>(Ljava/io/InputStream;I)V

    return-object v0
.end method

.method public bufferSize()I
    .locals 1

    .line 1598
    iget v0, p0, Lcom/silkimen/http/HttpRequest;->bufferSize:I

    return v0
.end method

.method public bufferSize(I)Lcom/silkimen/http/HttpRequest;
    .locals 1

    const/4 v0, 0x1

    if-lt p1, v0, :cond_0

    .line 1586
    iput p1, p0, Lcom/silkimen/http/HttpRequest;->bufferSize:I

    return-object p0

    .line 1585
    :cond_0
    new-instance p1, Ljava/lang/IllegalArgumentException;

    const-string v0, "Size must be greater than zero"

    invoke-direct {p1, v0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public bufferedReader()Ljava/io/BufferedReader;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1821
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->charset()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p0, v0}, Lcom/silkimen/http/HttpRequest;->bufferedReader(Ljava/lang/String;)Ljava/io/BufferedReader;

    move-result-object v0

    return-object v0
.end method

.method public bufferedReader(Ljava/lang/String;)Ljava/io/BufferedReader;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1809
    new-instance v0, Ljava/io/BufferedReader;

    invoke-virtual {p0, p1}, Lcom/silkimen/http/HttpRequest;->reader(Ljava/lang/String;)Ljava/io/InputStreamReader;

    move-result-object p1

    iget v1, p0, Lcom/silkimen/http/HttpRequest;->bufferSize:I

    invoke-direct {v0, p1, v1}, Ljava/io/BufferedReader;-><init>(Ljava/io/Reader;I)V

    return-object v0
.end method

.method protected byteStream()Ljava/io/ByteArrayOutputStream;
    .locals 2

    .line 1630
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->contentLength()I

    move-result v0

    if-lez v0, :cond_0

    .line 1632
    new-instance v1, Ljava/io/ByteArrayOutputStream;

    invoke-direct {v1, v0}, Ljava/io/ByteArrayOutputStream;-><init>(I)V

    return-object v1

    .line 1634
    :cond_0
    new-instance v0, Ljava/io/ByteArrayOutputStream;

    invoke-direct {v0}, Ljava/io/ByteArrayOutputStream;-><init>()V

    return-object v0
.end method

.method public bytes()[B
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1712
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->byteStream()Ljava/io/ByteArrayOutputStream;

    move-result-object v0

    .line 1714
    :try_start_0
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->buffer()Ljava/io/BufferedInputStream;

    move-result-object v1

    invoke-virtual {p0, v1, v0}, Lcom/silkimen/http/HttpRequest;->copy(Ljava/io/InputStream;Ljava/io/OutputStream;)Lcom/silkimen/http/HttpRequest;
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    .line 1718
    invoke-virtual {v0}, Ljava/io/ByteArrayOutputStream;->toByteArray()[B

    move-result-object v0

    return-object v0

    :catch_0
    move-exception v0

    .line 1716
    new-instance v1, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v1, v0}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v1
.end method

.method public cacheControl()Ljava/lang/String;
    .locals 1

    .line 2291
    const-string v0, "Cache-Control"

    invoke-virtual {p0, v0}, Lcom/silkimen/http/HttpRequest;->header(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public charset()Ljava/lang/String;
    .locals 2

    .line 2194
    const-string v0, "Content-Type"

    const-string v1, "charset"

    invoke-virtual {p0, v0, v1}, Lcom/silkimen/http/HttpRequest;->parameter(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public chunk(I)Lcom/silkimen/http/HttpRequest;
    .locals 1

    .line 1568
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    invoke-virtual {v0, p1}, Ljava/net/HttpURLConnection;->setChunkedStreamingMode(I)V

    return-object p0
.end method

.method protected closeOutput()Lcom/silkimen/http/HttpRequest;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    const/4 v0, 0x0

    .line 2556
    invoke-virtual {p0, v0}, Lcom/silkimen/http/HttpRequest;->progress(Lcom/silkimen/http/HttpRequest$UploadProgress;)Lcom/silkimen/http/HttpRequest;

    .line 2557
    iget-object v1, p0, Lcom/silkimen/http/HttpRequest;->output:Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    if-nez v1, :cond_0

    return-object p0

    .line 2559
    :cond_0
    iget-boolean v2, p0, Lcom/silkimen/http/HttpRequest;->multipart:Z

    if-eqz v2, :cond_1

    .line 2560
    const-string v2, "\r\n--00content0boundary00--\r\n"

    invoke-virtual {v1, v2}, Lcom/silkimen/http/HttpRequest$RequestOutputStream;->write(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    .line 2561
    :cond_1
    iget-boolean v1, p0, Lcom/silkimen/http/HttpRequest;->ignoreCloseExceptions:Z

    if-eqz v1, :cond_2

    .line 2563
    :try_start_0
    iget-object v1, p0, Lcom/silkimen/http/HttpRequest;->output:Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    invoke-virtual {v1}, Lcom/silkimen/http/HttpRequest$RequestOutputStream;->close()V
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    .line 2568
    :cond_2
    iget-object v1, p0, Lcom/silkimen/http/HttpRequest;->output:Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    invoke-virtual {v1}, Lcom/silkimen/http/HttpRequest$RequestOutputStream;->close()V

    .line 2569
    :catch_0
    :goto_0
    iput-object v0, p0, Lcom/silkimen/http/HttpRequest;->output:Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    return-object p0
.end method

.method protected closeOutputQuietly()Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 2582
    :try_start_0
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->closeOutput()Lcom/silkimen/http/HttpRequest;

    move-result-object v0
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    return-object v0

    :catch_0
    move-exception v0

    .line 2584
    new-instance v1, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v1, v0}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v1
.end method

.method public code()I
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1446
    :try_start_0
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->closeOutput()Lcom/silkimen/http/HttpRequest;

    .line 1447
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    invoke-virtual {v0}, Ljava/net/HttpURLConnection;->getResponseCode()I

    move-result v0
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    return v0

    :catch_0
    move-exception v0

    .line 1449
    new-instance v1, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v1, v0}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v1
.end method

.method public code(Ljava/util/concurrent/atomic/AtomicInteger;)Lcom/silkimen/http/HttpRequest;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1462
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->code()I

    move-result v0

    invoke-virtual {p1, v0}, Ljava/util/concurrent/atomic/AtomicInteger;->set(I)V

    return-object p0
.end method

.method public connectTimeout(I)Lcom/silkimen/http/HttpRequest;
    .locals 1

    .line 1934
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    invoke-virtual {v0, p1}, Ljava/net/HttpURLConnection;->setConnectTimeout(I)V

    return-object p0
.end method

.method public contentEncoding()Ljava/lang/String;
    .locals 1

    .line 2264
    const-string v0, "Content-Encoding"

    invoke-virtual {p0, v0}, Lcom/silkimen/http/HttpRequest;->header(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public contentLength()I
    .locals 1

    .line 2434
    const-string v0, "Content-Length"

    invoke-virtual {p0, v0}, Lcom/silkimen/http/HttpRequest;->intHeader(Ljava/lang/String;)I

    move-result v0

    return v0
.end method

.method public contentLength(I)Lcom/silkimen/http/HttpRequest;
    .locals 1

    .line 2454
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    invoke-virtual {v0, p1}, Ljava/net/HttpURLConnection;->setFixedLengthStreamingMode(I)V

    return-object p0
.end method

.method public contentLength(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 0

    .line 2444
    invoke-static {p1}, Ljava/lang/Integer;->parseInt(Ljava/lang/String;)I

    move-result p1

    invoke-virtual {p0, p1}, Lcom/silkimen/http/HttpRequest;->contentLength(I)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public contentType(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 1

    const/4 v0, 0x0

    .line 2401
    invoke-virtual {p0, p1, v0}, Lcom/silkimen/http/HttpRequest;->contentType(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public contentType(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 2

    .line 2412
    const-string v0, "Content-Type"

    if-eqz p2, :cond_0

    invoke-virtual {p2}, Ljava/lang/String;->length()I

    move-result v1

    if-lez v1, :cond_0

    .line 2414
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v1, "; charset="

    invoke-virtual {p1, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, v0, p1}, Lcom/silkimen/http/HttpRequest;->header(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1

    .line 2416
    :cond_0
    invoke-virtual {p0, v0, p1}, Lcom/silkimen/http/HttpRequest;->header(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public contentType()Ljava/lang/String;
    .locals 1

    .line 2425
    const-string v0, "Content-Type"

    invoke-virtual {p0, v0}, Lcom/silkimen/http/HttpRequest;->header(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method protected copy(Ljava/io/InputStream;Ljava/io/OutputStream;)Lcom/silkimen/http/HttpRequest;
    .locals 7
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 2486
    new-instance v6, Lcom/silkimen/http/HttpRequest$6;

    iget-boolean v3, p0, Lcom/silkimen/http/HttpRequest;->ignoreCloseExceptions:Z

    move-object v0, v6

    move-object v1, p0

    move-object v2, p1

    move-object v4, p1

    move-object v5, p2

    invoke-direct/range {v0 .. v5}, Lcom/silkimen/http/HttpRequest$6;-><init>(Lcom/silkimen/http/HttpRequest;Ljava/io/Closeable;ZLjava/io/InputStream;Ljava/io/OutputStream;)V

    .line 2499
    invoke-virtual {v6}, Lcom/silkimen/http/HttpRequest$6;->call()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Lcom/silkimen/http/HttpRequest;

    return-object p1
.end method

.method protected copy(Ljava/io/Reader;Ljava/io/Writer;)Lcom/silkimen/http/HttpRequest;
    .locals 7
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 2511
    new-instance v6, Lcom/silkimen/http/HttpRequest$7;

    iget-boolean v3, p0, Lcom/silkimen/http/HttpRequest;->ignoreCloseExceptions:Z

    move-object v0, v6

    move-object v1, p0

    move-object v2, p1

    move-object v4, p1

    move-object v5, p2

    invoke-direct/range {v0 .. v5}, Lcom/silkimen/http/HttpRequest$7;-><init>(Lcom/silkimen/http/HttpRequest;Ljava/io/Closeable;ZLjava/io/Reader;Ljava/io/Writer;)V

    .line 2524
    invoke-virtual {v6}, Lcom/silkimen/http/HttpRequest$7;->call()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Lcom/silkimen/http/HttpRequest;

    return-object p1
.end method

.method public created()Z
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    const/16 v0, 0xc9

    .line 1483
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->code()I

    move-result v1

    if-ne v0, v1, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public date()J
    .locals 2

    .line 2282
    const-string v0, "Date"

    invoke-virtual {p0, v0}, Lcom/silkimen/http/HttpRequest;->dateHeader(Ljava/lang/String;)J

    move-result-wide v0

    return-wide v0
.end method

.method public dateHeader(Ljava/lang/String;)J
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    const-wide/16 v0, -0x1

    .line 2017
    invoke-virtual {p0, p1, v0, v1}, Lcom/silkimen/http/HttpRequest;->dateHeader(Ljava/lang/String;J)J

    move-result-wide v0

    return-wide v0
.end method

.method public dateHeader(Ljava/lang/String;J)J
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 2030
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->closeOutputQuietly()Lcom/silkimen/http/HttpRequest;

    .line 2031
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    invoke-virtual {v0, p1, p2, p3}, Ljava/net/HttpURLConnection;->getHeaderFieldDate(Ljava/lang/String;J)J

    move-result-wide p1

    return-wide p1
.end method

.method public disconnect()Lcom/silkimen/http/HttpRequest;
    .locals 1

    .line 1557
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    invoke-virtual {v0}, Ljava/net/HttpURLConnection;->disconnect()V

    return-object p0
.end method

.method public eTag()Ljava/lang/String;
    .locals 1

    .line 2300
    const-string v0, "ETag"

    invoke-virtual {p0, v0}, Lcom/silkimen/http/HttpRequest;->header(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public expires()J
    .locals 2

    .line 2309
    const-string v0, "Expires"

    invoke-virtual {p0, v0}, Lcom/silkimen/http/HttpRequest;->dateHeader(Ljava/lang/String;)J

    move-result-wide v0

    return-wide v0
.end method

.method public followRedirects(Z)Lcom/silkimen/http/HttpRequest;
    .locals 1

    .line 3092
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    invoke-virtual {v0, p1}, Ljava/net/HttpURLConnection;->setInstanceFollowRedirects(Z)V

    return-object p0
.end method

.method public form(Ljava/lang/Object;Ljava/lang/Object;)Lcom/silkimen/http/HttpRequest;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 2982
    const-string v0, "UTF-8"

    invoke-virtual {p0, p1, p2, v0}, Lcom/silkimen/http/HttpRequest;->form(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public form(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 2998
    iget-boolean v0, p0, Lcom/silkimen/http/HttpRequest;->form:Z

    if-nez v0, :cond_0

    .line 3000
    const-string v1, "application/x-www-form-urlencoded"

    invoke-virtual {p0, v1, p3}, Lcom/silkimen/http/HttpRequest;->contentType(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    const/4 v1, 0x1

    .line 3001
    iput-boolean v1, p0, Lcom/silkimen/http/HttpRequest;->form:Z

    .line 3003
    :cond_0
    invoke-static {p3}, Lcom/silkimen/http/HttpRequest;->getValidCharset(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p3

    .line 3005
    :try_start_0
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->openOutput()Lcom/silkimen/http/HttpRequest;

    if-eqz v0, :cond_1

    .line 3007
    iget-object v0, p0, Lcom/silkimen/http/HttpRequest;->output:Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    const/16 v1, 0x26

    invoke-virtual {v0, v1}, Lcom/silkimen/http/HttpRequest$RequestOutputStream;->write(I)V

    .line 3008
    :cond_1
    iget-object v0, p0, Lcom/silkimen/http/HttpRequest;->output:Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    invoke-virtual {p1}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {p1, p3}, Ljava/net/URLEncoder;->encode(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Lcom/silkimen/http/HttpRequest$RequestOutputStream;->write(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    .line 3009
    iget-object p1, p0, Lcom/silkimen/http/HttpRequest;->output:Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    const/16 v0, 0x3d

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest$RequestOutputStream;->write(I)V

    if-eqz p2, :cond_2

    .line 3011
    iget-object p1, p0, Lcom/silkimen/http/HttpRequest;->output:Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    invoke-virtual {p2}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-static {p2, p3}, Ljava/net/URLEncoder;->encode(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p1, p2}, Lcom/silkimen/http/HttpRequest$RequestOutputStream;->write(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest$RequestOutputStream;
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    :cond_2
    return-object p0

    :catch_0
    move-exception p1

    .line 3013
    new-instance p2, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {p2, p1}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw p2
.end method

.method public form(Ljava/util/Map$Entry;)Lcom/silkimen/http/HttpRequest;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Map$Entry<",
            "**>;)",
            "Lcom/silkimen/http/HttpRequest;"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 2952
    const-string v0, "UTF-8"

    invoke-virtual {p0, p1, v0}, Lcom/silkimen/http/HttpRequest;->form(Ljava/util/Map$Entry;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public form(Ljava/util/Map$Entry;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Map$Entry<",
            "**>;",
            "Ljava/lang/String;",
            ")",
            "Lcom/silkimen/http/HttpRequest;"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 2967
    invoke-interface {p1}, Ljava/util/Map$Entry;->getKey()Ljava/lang/Object;

    move-result-object v0

    invoke-interface {p1}, Ljava/util/Map$Entry;->getValue()Ljava/lang/Object;

    move-result-object p1

    invoke-virtual {p0, v0, p1, p2}, Lcom/silkimen/http/HttpRequest;->form(Ljava/lang/Object;Ljava/lang/Object;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public form(Ljava/util/Map;)Lcom/silkimen/http/HttpRequest;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Map<",
            "**>;)",
            "Lcom/silkimen/http/HttpRequest;"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 2938
    const-string v0, "UTF-8"

    invoke-virtual {p0, p1, v0}, Lcom/silkimen/http/HttpRequest;->form(Ljava/util/Map;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public form(Ljava/util/Map;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Map<",
            "**>;",
            "Ljava/lang/String;",
            ")",
            "Lcom/silkimen/http/HttpRequest;"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 3027
    invoke-interface {p1}, Ljava/util/Map;->isEmpty()Z

    move-result v0

    if-nez v0, :cond_0

    .line 3028
    invoke-interface {p1}, Ljava/util/Map;->entrySet()Ljava/util/Set;

    move-result-object p1

    invoke-interface {p1}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_0

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/util/Map$Entry;

    .line 3029
    invoke-virtual {p0, v0, p2}, Lcom/silkimen/http/HttpRequest;->form(Ljava/util/Map$Entry;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    goto :goto_0

    :cond_0
    return-object p0
.end method

.method public getConnection()Ljava/net/HttpURLConnection;
    .locals 1

    .line 1410
    iget-object v0, p0, Lcom/silkimen/http/HttpRequest;->connection:Ljava/net/HttpURLConnection;

    if-nez v0, :cond_0

    .line 1411
    invoke-direct {p0}, Lcom/silkimen/http/HttpRequest;->createConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    iput-object v0, p0, Lcom/silkimen/http/HttpRequest;->connection:Ljava/net/HttpURLConnection;

    .line 1412
    :cond_0
    iget-object v0, p0, Lcom/silkimen/http/HttpRequest;->connection:Ljava/net/HttpURLConnection;

    return-object v0
.end method

.method protected getParam(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;
    .locals 8

    const/4 v0, 0x0

    if-eqz p1, :cond_5

    .line 2155
    invoke-virtual {p1}, Ljava/lang/String;->length()I

    move-result v1

    if-nez v1, :cond_0

    goto :goto_1

    .line 2158
    :cond_0
    invoke-virtual {p1}, Ljava/lang/String;->length()I

    move-result v1

    const/16 v2, 0x3b

    .line 2159
    invoke-virtual {p1, v2}, Ljava/lang/String;->indexOf(I)I

    move-result v3

    const/4 v4, 0x1

    add-int/2addr v3, v4

    if-eqz v3, :cond_5

    if-ne v3, v1, :cond_1

    goto :goto_1

    .line 2163
    :cond_1
    invoke-virtual {p1, v2, v3}, Ljava/lang/String;->indexOf(II)I

    move-result v5

    const/4 v6, -0x1

    if-ne v5, v6, :cond_2

    :goto_0
    move v5, v1

    :cond_2
    if-ge v3, v5, :cond_5

    const/16 v7, 0x3d

    .line 2168
    invoke-virtual {p1, v7, v3}, Ljava/lang/String;->indexOf(II)I

    move-result v7

    if-eq v7, v6, :cond_4

    if-ge v7, v5, :cond_4

    .line 2169
    invoke-virtual {p1, v3, v7}, Ljava/lang/String;->substring(II)Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/String;->trim()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {p2, v3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    if-eqz v3, :cond_4

    add-int/lit8 v7, v7, 0x1

    .line 2170
    invoke-virtual {p1, v7, v5}, Ljava/lang/String;->substring(II)Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/String;->trim()Ljava/lang/String;

    move-result-object v3

    .line 2171
    invoke-virtual {v3}, Ljava/lang/String;->length()I

    move-result v7

    if-eqz v7, :cond_4

    const/4 p1, 0x2

    if-le v7, p1, :cond_3

    const/4 p1, 0x0

    .line 2173
    invoke-virtual {v3, p1}, Ljava/lang/String;->charAt(I)C

    move-result p1

    const/16 p2, 0x22

    if-ne p2, p1, :cond_3

    sub-int/2addr v7, v4

    invoke-virtual {v3, v7}, Ljava/lang/String;->charAt(I)C

    move-result p1

    if-ne p2, p1, :cond_3

    .line 2174
    invoke-virtual {v3, v4, v7}, Ljava/lang/String;->substring(II)Ljava/lang/String;

    move-result-object p1

    return-object p1

    :cond_3
    return-object v3

    :cond_4
    add-int/lit8 v3, v5, 0x1

    .line 2180
    invoke-virtual {p1, v2, v3}, Ljava/lang/String;->indexOf(II)I

    move-result v5

    if-ne v5, v6, :cond_2

    goto :goto_0

    :cond_5
    :goto_1
    return-object v0
.end method

.method protected getParams(Ljava/lang/String;)Ljava/util/Map;
    .locals 11
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            ")",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    if-eqz p1, :cond_8

    .line 2110
    invoke-virtual {p1}, Ljava/lang/String;->length()I

    move-result v0

    if-nez v0, :cond_0

    goto/16 :goto_3

    .line 2113
    :cond_0
    invoke-virtual {p1}, Ljava/lang/String;->length()I

    move-result v0

    const/16 v1, 0x3b

    .line 2114
    invoke-virtual {p1, v1}, Ljava/lang/String;->indexOf(I)I

    move-result v2

    const/4 v3, 0x1

    add-int/2addr v2, v3

    if-eqz v2, :cond_7

    if-ne v2, v0, :cond_1

    goto :goto_2

    .line 2118
    :cond_1
    invoke-virtual {p1, v1, v2}, Ljava/lang/String;->indexOf(II)I

    move-result v4

    const/4 v5, -0x1

    if-ne v4, v5, :cond_2

    move v4, v0

    .line 2122
    :cond_2
    new-instance v6, Ljava/util/LinkedHashMap;

    invoke-direct {v6}, Ljava/util/LinkedHashMap;-><init>()V

    :cond_3
    :goto_0
    if-ge v2, v4, :cond_6

    const/16 v7, 0x3d

    .line 2124
    invoke-virtual {p1, v7, v2}, Ljava/lang/String;->indexOf(II)I

    move-result v7

    if-eq v7, v5, :cond_5

    if-ge v7, v4, :cond_5

    .line 2126
    invoke-virtual {p1, v2, v7}, Ljava/lang/String;->substring(II)Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/String;->trim()Ljava/lang/String;

    move-result-object v2

    .line 2127
    invoke-virtual {v2}, Ljava/lang/String;->length()I

    move-result v8

    if-lez v8, :cond_5

    add-int/lit8 v7, v7, 0x1

    .line 2128
    invoke-virtual {p1, v7, v4}, Ljava/lang/String;->substring(II)Ljava/lang/String;

    move-result-object v7

    invoke-virtual {v7}, Ljava/lang/String;->trim()Ljava/lang/String;

    move-result-object v7

    .line 2129
    invoke-virtual {v7}, Ljava/lang/String;->length()I

    move-result v8

    if-eqz v8, :cond_5

    const/4 v9, 0x2

    if-le v8, v9, :cond_4

    const/4 v9, 0x0

    .line 2131
    invoke-virtual {v7, v9}, Ljava/lang/String;->charAt(I)C

    move-result v9

    const/16 v10, 0x22

    if-ne v10, v9, :cond_4

    add-int/lit8 v8, v8, -0x1

    invoke-virtual {v7, v8}, Ljava/lang/String;->charAt(I)C

    move-result v9

    if-ne v10, v9, :cond_4

    .line 2132
    invoke-virtual {v7, v3, v8}, Ljava/lang/String;->substring(II)Ljava/lang/String;

    move-result-object v7

    invoke-interface {v6, v2, v7}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    goto :goto_1

    .line 2134
    :cond_4
    invoke-interface {v6, v2, v7}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    :cond_5
    :goto_1
    add-int/lit8 v2, v4, 0x1

    .line 2139
    invoke-virtual {p1, v1, v2}, Ljava/lang/String;->indexOf(II)I

    move-result v4

    if-ne v4, v5, :cond_3

    move v4, v0

    goto :goto_0

    :cond_6
    return-object v6

    .line 2116
    :cond_7
    :goto_2
    invoke-static {}, Ljava/util/Collections;->emptyMap()Ljava/util/Map;

    move-result-object p1

    return-object p1

    .line 2111
    :cond_8
    :goto_3
    invoke-static {}, Ljava/util/Collections;->emptyMap()Ljava/util/Map;

    move-result-object p1

    return-object p1
.end method

.method public header(Ljava/lang/String;Ljava/lang/Number;)Lcom/silkimen/http/HttpRequest;
    .locals 0

    if-eqz p2, :cond_0

    .line 1958
    invoke-virtual {p2}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object p2

    goto :goto_0

    :cond_0
    const/4 p2, 0x0

    :goto_0
    invoke-virtual {p0, p1, p2}, Lcom/silkimen/http/HttpRequest;->header(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public header(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 1

    .line 1946
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    invoke-virtual {v0, p1, p2}, Ljava/net/HttpURLConnection;->setRequestProperty(Ljava/lang/String;Ljava/lang/String;)V

    return-object p0
.end method

.method public header(Ljava/util/Map$Entry;)Lcom/silkimen/http/HttpRequest;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Map$Entry<",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            ">;)",
            "Lcom/silkimen/http/HttpRequest;"
        }
    .end annotation

    .line 1982
    invoke-interface {p1}, Ljava/util/Map$Entry;->getKey()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/String;

    invoke-interface {p1}, Ljava/util/Map$Entry;->getValue()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/lang/String;

    invoke-virtual {p0, v0, p1}, Lcom/silkimen/http/HttpRequest;->header(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public header(Ljava/lang/String;)Ljava/lang/String;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1993
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->closeOutputQuietly()Lcom/silkimen/http/HttpRequest;

    .line 1994
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    invoke-virtual {v0, p1}, Ljava/net/HttpURLConnection;->getHeaderField(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method public headers(Ljava/util/Map;)Lcom/silkimen/http/HttpRequest;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            ">;)",
            "Lcom/silkimen/http/HttpRequest;"
        }
    .end annotation

    .line 1969
    invoke-interface {p1}, Ljava/util/Map;->isEmpty()Z

    move-result v0

    if-nez v0, :cond_0

    .line 1970
    invoke-interface {p1}, Ljava/util/Map;->entrySet()Ljava/util/Set;

    move-result-object p1

    invoke-interface {p1}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object p1

    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v0

    if-eqz v0, :cond_0

    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/util/Map$Entry;

    .line 1971
    invoke-virtual {p0, v0}, Lcom/silkimen/http/HttpRequest;->header(Ljava/util/Map$Entry;)Lcom/silkimen/http/HttpRequest;

    goto :goto_0

    :cond_0
    return-object p0
.end method

.method public headers()Ljava/util/Map;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;>;"
        }
    .end annotation

    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 2004
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->closeOutputQuietly()Lcom/silkimen/http/HttpRequest;

    .line 2005
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    invoke-virtual {v0}, Ljava/net/HttpURLConnection;->getHeaderFields()Ljava/util/Map;

    move-result-object v0

    return-object v0
.end method

.method public headers(Ljava/lang/String;)[Ljava/lang/String;
    .locals 2

    .line 2068
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->headers()Ljava/util/Map;

    move-result-object v0

    if-eqz v0, :cond_2

    .line 2069
    invoke-interface {v0}, Ljava/util/Map;->isEmpty()Z

    move-result v1

    if-eqz v1, :cond_0

    goto :goto_0

    .line 2072
    :cond_0
    invoke-interface {v0, p1}, Ljava/util/Map;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Ljava/util/List;

    if-eqz p1, :cond_1

    .line 2073
    invoke-interface {p1}, Ljava/util/List;->isEmpty()Z

    move-result v0

    if-nez v0, :cond_1

    .line 2074
    invoke-interface {p1}, Ljava/util/List;->size()I

    move-result v0

    new-array v0, v0, [Ljava/lang/String;

    invoke-interface {p1, v0}, Ljava/util/List;->toArray([Ljava/lang/Object;)[Ljava/lang/Object;

    move-result-object p1

    check-cast p1, [Ljava/lang/String;

    return-object p1

    .line 2076
    :cond_1
    sget-object p1, Lcom/silkimen/http/HttpRequest;->EMPTY_STRINGS:[Ljava/lang/String;

    return-object p1

    .line 2070
    :cond_2
    :goto_0
    sget-object p1, Lcom/silkimen/http/HttpRequest;->EMPTY_STRINGS:[Ljava/lang/String;

    return-object p1
.end method

.method public ifModifiedSince(J)Lcom/silkimen/http/HttpRequest;
    .locals 1

    .line 2380
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    invoke-virtual {v0, p1, p2}, Ljava/net/HttpURLConnection;->setIfModifiedSince(J)V

    return-object p0
.end method

.method public ifNoneMatch(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 1

    .line 2391
    const-string v0, "If-None-Match"

    invoke-virtual {p0, v0, p1}, Lcom/silkimen/http/HttpRequest;->header(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public ignoreCloseExceptions(Z)Lcom/silkimen/http/HttpRequest;
    .locals 0

    .line 1425
    iput-boolean p1, p0, Lcom/silkimen/http/HttpRequest;->ignoreCloseExceptions:Z

    return-object p0
.end method

.method public ignoreCloseExceptions()Z
    .locals 1

    .line 1435
    iget-boolean v0, p0, Lcom/silkimen/http/HttpRequest;->ignoreCloseExceptions:Z

    return v0
.end method

.method public intHeader(Ljava/lang/String;)I
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    const/4 v0, -0x1

    .line 2043
    invoke-virtual {p0, p1, v0}, Lcom/silkimen/http/HttpRequest;->intHeader(Ljava/lang/String;I)I

    move-result p1

    return p1
.end method

.method public intHeader(Ljava/lang/String;I)I
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 2057
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->closeOutputQuietly()Lcom/silkimen/http/HttpRequest;

    .line 2058
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    invoke-virtual {v0, p1, p2}, Ljava/net/HttpURLConnection;->getHeaderFieldInt(Ljava/lang/String;I)I

    move-result p1

    return p1
.end method

.method public isBodyEmpty()Z
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1702
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->contentLength()I

    move-result v0

    if-nez v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public lastModified()J
    .locals 2

    .line 2318
    const-string v0, "Last-Modified"

    invoke-virtual {p0, v0}, Lcom/silkimen/http/HttpRequest;->dateHeader(Ljava/lang/String;)J

    move-result-wide v0

    return-wide v0
.end method

.method public location()Ljava/lang/String;
    .locals 1

    .line 2327
    const-string v0, "Location"

    invoke-virtual {p0, v0}, Lcom/silkimen/http/HttpRequest;->header(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public message()Ljava/lang/String;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1544
    :try_start_0
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->closeOutput()Lcom/silkimen/http/HttpRequest;

    .line 1545
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    invoke-virtual {v0}, Ljava/net/HttpURLConnection;->getResponseMessage()Ljava/lang/String;

    move-result-object v0
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    return-object v0

    :catch_0
    move-exception v0

    .line 1547
    new-instance v1, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v1, v0}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v1
.end method

.method public method()Ljava/lang/String;
    .locals 1

    .line 3062
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    invoke-virtual {v0}, Ljava/net/HttpURLConnection;->getRequestMethod()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public noContent()Z
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    const/16 v0, 0xcc

    .line 1493
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->code()I

    move-result v1

    if-ne v0, v1, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public notFound()Z
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    const/16 v0, 0x194

    .line 1523
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->code()I

    move-result v1

    if-ne v0, v1, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public notModified()Z
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    const/16 v0, 0x130

    .line 1533
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->code()I

    move-result v1

    if-ne v0, v1, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public ok()Z
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    const/16 v0, 0xc8

    .line 1473
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->code()I

    move-result v1

    if-ne v0, v1, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method protected openOutput()Lcom/silkimen/http/HttpRequest;
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 2595
    iget-object v0, p0, Lcom/silkimen/http/HttpRequest;->output:Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    if-eqz v0, :cond_0

    return-object p0

    .line 2597
    :cond_0
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    const/4 v1, 0x1

    invoke-virtual {v0, v1}, Ljava/net/HttpURLConnection;->setDoOutput(Z)V

    .line 2598
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    const-string v1, "Content-Type"

    invoke-virtual {v0, v1}, Ljava/net/HttpURLConnection;->getRequestProperty(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const-string v1, "charset"

    invoke-virtual {p0, v0, v1}, Lcom/silkimen/http/HttpRequest;->getParam(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 2599
    new-instance v1, Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v2

    invoke-virtual {v2}, Ljava/net/HttpURLConnection;->getOutputStream()Ljava/io/OutputStream;

    move-result-object v2

    iget v3, p0, Lcom/silkimen/http/HttpRequest;->bufferSize:I

    invoke-direct {v1, v2, v0, v3}, Lcom/silkimen/http/HttpRequest$RequestOutputStream;-><init>(Ljava/io/OutputStream;Ljava/lang/String;I)V

    iput-object v1, p0, Lcom/silkimen/http/HttpRequest;->output:Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    return-object p0
.end method

.method public parameter(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;
    .locals 0

    .line 2087
    invoke-virtual {p0, p1}, Lcom/silkimen/http/HttpRequest;->header(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, p1, p2}, Lcom/silkimen/http/HttpRequest;->getParam(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method public parameters(Ljava/lang/String;)Ljava/util/Map;
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            ")",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 2100
    invoke-virtual {p0, p1}, Lcom/silkimen/http/HttpRequest;->header(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, p1}, Lcom/silkimen/http/HttpRequest;->getParams(Ljava/lang/String;)Ljava/util/Map;

    move-result-object p1

    return-object p1
.end method

.method public part(Ljava/lang/String;Ljava/io/File;)Lcom/silkimen/http/HttpRequest;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    const/4 v0, 0x0

    .line 2733
    invoke-virtual {p0, p1, v0, p2}, Lcom/silkimen/http/HttpRequest;->part(Ljava/lang/String;Ljava/lang/String;Ljava/io/File;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public part(Ljava/lang/String;Ljava/io/InputStream;)Lcom/silkimen/http/HttpRequest;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    const/4 v0, 0x0

    .line 2780
    invoke-virtual {p0, p1, v0, v0, p2}, Lcom/silkimen/http/HttpRequest;->part(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/io/InputStream;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public part(Ljava/lang/String;Ljava/lang/Number;)Lcom/silkimen/http/HttpRequest;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    const/4 v0, 0x0

    .line 2708
    invoke-virtual {p0, p1, v0, p2}, Lcom/silkimen/http/HttpRequest;->part(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Number;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public part(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 1

    const/4 v0, 0x0

    .line 2661
    invoke-virtual {p0, p1, v0, p2}, Lcom/silkimen/http/HttpRequest;->part(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public part(Ljava/lang/String;Ljava/lang/String;Ljava/io/File;)Lcom/silkimen/http/HttpRequest;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    const/4 v0, 0x0

    .line 2746
    invoke-virtual {p0, p1, p2, v0, p3}, Lcom/silkimen/http/HttpRequest;->part(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/io/File;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public part(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Number;)Lcom/silkimen/http/HttpRequest;
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    if-eqz p3, :cond_0

    .line 2721
    invoke-virtual {p3}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object p3

    goto :goto_0

    :cond_0
    const/4 p3, 0x0

    :goto_0
    invoke-virtual {p0, p1, p2, p3}, Lcom/silkimen/http/HttpRequest;->part(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public part(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    const/4 v0, 0x0

    .line 2674
    invoke-virtual {p0, p1, p2, v0, p3}, Lcom/silkimen/http/HttpRequest;->part(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public part(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/io/File;)Lcom/silkimen/http/HttpRequest;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 2763
    :try_start_0
    new-instance v0, Ljava/io/BufferedInputStream;

    new-instance v1, Ljava/io/FileInputStream;

    invoke-direct {v1, p4}, Ljava/io/FileInputStream;-><init>(Ljava/io/File;)V

    invoke-direct {v0, v1}, Ljava/io/BufferedInputStream;-><init>(Ljava/io/InputStream;)V

    .line 2764
    invoke-virtual {p4}, Ljava/io/File;->length()J

    move-result-wide v1

    invoke-direct {p0, v1, v2}, Lcom/silkimen/http/HttpRequest;->incrementTotalSize(J)Lcom/silkimen/http/HttpRequest;
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    .line 2768
    invoke-virtual {p0, p1, p2, p3, v0}, Lcom/silkimen/http/HttpRequest;->part(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/io/InputStream;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1

    :catch_0
    move-exception p1

    .line 2766
    new-instance p2, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {p2, p1}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw p2
.end method

.method public part(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/io/InputStream;)Lcom/silkimen/http/HttpRequest;
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 2796
    :try_start_0
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->startPart()Lcom/silkimen/http/HttpRequest;

    .line 2797
    invoke-virtual {p0, p1, p2, p3}, Lcom/silkimen/http/HttpRequest;->writePartHeader(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    .line 2798
    iget-object p1, p0, Lcom/silkimen/http/HttpRequest;->output:Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    invoke-virtual {p0, p4, p1}, Lcom/silkimen/http/HttpRequest;->copy(Ljava/io/InputStream;Ljava/io/OutputStream;)Lcom/silkimen/http/HttpRequest;
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    return-object p0

    :catch_0
    move-exception p1

    .line 2800
    new-instance p2, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {p2, p1}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw p2
.end method

.method public part(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 2690
    :try_start_0
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->startPart()Lcom/silkimen/http/HttpRequest;

    .line 2691
    invoke-virtual {p0, p1, p2, p3}, Lcom/silkimen/http/HttpRequest;->writePartHeader(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    .line 2692
    iget-object p1, p0, Lcom/silkimen/http/HttpRequest;->output:Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    invoke-virtual {p1, p4}, Lcom/silkimen/http/HttpRequest$RequestOutputStream;->write(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest$RequestOutputStream;
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    return-object p0

    :catch_0
    move-exception p1

    .line 2694
    new-instance p2, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {p2, p1}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw p2
.end method

.method public partHeader(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 2814
    invoke-virtual {p0, p1}, Lcom/silkimen/http/HttpRequest;->send(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    const-string v0, ": "

    invoke-virtual {p1, v0}, Lcom/silkimen/http/HttpRequest;->send(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    invoke-virtual {p1, p2}, Lcom/silkimen/http/HttpRequest;->send(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    const-string p2, "\r\n"

    invoke-virtual {p1, p2}, Lcom/silkimen/http/HttpRequest;->send(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public progress(Lcom/silkimen/http/HttpRequest$UploadProgress;)Lcom/silkimen/http/HttpRequest;
    .locals 0

    if-nez p1, :cond_0

    .line 2535
    sget-object p1, Lcom/silkimen/http/HttpRequest$UploadProgress;->DEFAULT:Lcom/silkimen/http/HttpRequest$UploadProgress;

    iput-object p1, p0, Lcom/silkimen/http/HttpRequest;->progress:Lcom/silkimen/http/HttpRequest$UploadProgress;

    goto :goto_0

    .line 2537
    :cond_0
    iput-object p1, p0, Lcom/silkimen/http/HttpRequest;->progress:Lcom/silkimen/http/HttpRequest$UploadProgress;

    :goto_0
    return-object p0
.end method

.method public proxyAuthorization(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 1

    .line 2347
    const-string v0, "Proxy-Authorization"

    invoke-virtual {p0, v0, p1}, Lcom/silkimen/http/HttpRequest;->header(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public proxyBasic(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 2

    .line 2370
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Basic "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v1, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const/16 v1, 0x3a

    invoke-virtual {p1, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {p1}, Lcom/silkimen/http/HttpRequest$Base64;->encode(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {p0, p1}, Lcom/silkimen/http/HttpRequest;->proxyAuthorization(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public readTimeout(I)Lcom/silkimen/http/HttpRequest;
    .locals 1

    .line 1923
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    invoke-virtual {v0, p1}, Ljava/net/HttpURLConnection;->setReadTimeout(I)V

    return-object p0
.end method

.method public reader()Ljava/io/InputStreamReader;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1795
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->charset()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p0, v0}, Lcom/silkimen/http/HttpRequest;->reader(Ljava/lang/String;)Ljava/io/InputStreamReader;

    move-result-object v0

    return-object v0
.end method

.method public reader(Ljava/lang/String;)Ljava/io/InputStreamReader;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1781
    :try_start_0
    new-instance v0, Ljava/io/InputStreamReader;

    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->stream()Ljava/io/InputStream;

    move-result-object v1

    invoke-static {p1}, Lcom/silkimen/http/HttpRequest;->getValidCharset(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    invoke-direct {v0, v1, p1}, Ljava/io/InputStreamReader;-><init>(Ljava/io/InputStream;Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/io/UnsupportedEncodingException; {:try_start_0 .. :try_end_0} :catch_0

    return-object v0

    :catch_0
    move-exception p1

    .line 1783
    new-instance v0, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v0, p1}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v0
.end method

.method public receive(Ljava/io/File;)Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1834
    :try_start_0
    new-instance v0, Ljava/io/BufferedOutputStream;

    new-instance v1, Ljava/io/FileOutputStream;

    invoke-direct {v1, p1}, Ljava/io/FileOutputStream;-><init>(Ljava/io/File;)V

    iget p1, p0, Lcom/silkimen/http/HttpRequest;->bufferSize:I

    invoke-direct {v0, v1, p1}, Ljava/io/BufferedOutputStream;-><init>(Ljava/io/OutputStream;I)V
    :try_end_0
    .catch Ljava/io/FileNotFoundException; {:try_start_0 .. :try_end_0} :catch_0

    .line 1838
    new-instance p1, Lcom/silkimen/http/HttpRequest$3;

    iget-boolean v1, p0, Lcom/silkimen/http/HttpRequest;->ignoreCloseExceptions:Z

    invoke-direct {p1, p0, v0, v1, v0}, Lcom/silkimen/http/HttpRequest$3;-><init>(Lcom/silkimen/http/HttpRequest;Ljava/io/Closeable;ZLjava/io/OutputStream;)V

    .line 1844
    invoke-virtual {p1}, Lcom/silkimen/http/HttpRequest$3;->call()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Lcom/silkimen/http/HttpRequest;

    return-object p1

    :catch_0
    move-exception p1

    .line 1836
    new-instance v0, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v0, p1}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v0
.end method

.method public receive(Ljava/io/OutputStream;)Lcom/silkimen/http/HttpRequest;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1856
    :try_start_0
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->buffer()Ljava/io/BufferedInputStream;

    move-result-object v0

    invoke-virtual {p0, v0, p1}, Lcom/silkimen/http/HttpRequest;->copy(Ljava/io/InputStream;Ljava/io/OutputStream;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    return-object p1

    :catch_0
    move-exception p1

    .line 1858
    new-instance v0, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v0, p1}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v0
.end method

.method public receive(Ljava/io/PrintStream;)Lcom/silkimen/http/HttpRequest;
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1870
    invoke-virtual {p0, p1}, Lcom/silkimen/http/HttpRequest;->receive(Ljava/io/OutputStream;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public receive(Ljava/io/Writer;)Lcom/silkimen/http/HttpRequest;
    .locals 7
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1906
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->bufferedReader()Ljava/io/BufferedReader;

    move-result-object v4

    .line 1907
    new-instance v6, Lcom/silkimen/http/HttpRequest$5;

    iget-boolean v3, p0, Lcom/silkimen/http/HttpRequest;->ignoreCloseExceptions:Z

    move-object v0, v6

    move-object v1, p0

    move-object v2, v4

    move-object v5, p1

    invoke-direct/range {v0 .. v5}, Lcom/silkimen/http/HttpRequest$5;-><init>(Lcom/silkimen/http/HttpRequest;Ljava/io/Closeable;ZLjava/io/BufferedReader;Ljava/io/Writer;)V

    .line 1913
    invoke-virtual {v6}, Lcom/silkimen/http/HttpRequest$5;->call()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Lcom/silkimen/http/HttpRequest;

    return-object p1
.end method

.method public receive(Ljava/lang/Appendable;)Lcom/silkimen/http/HttpRequest;
    .locals 7
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1881
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->bufferedReader()Ljava/io/BufferedReader;

    move-result-object v4

    .line 1882
    new-instance v6, Lcom/silkimen/http/HttpRequest$4;

    iget-boolean v3, p0, Lcom/silkimen/http/HttpRequest;->ignoreCloseExceptions:Z

    move-object v0, v6

    move-object v1, p0

    move-object v2, v4

    move-object v5, p1

    invoke-direct/range {v0 .. v5}, Lcom/silkimen/http/HttpRequest$4;-><init>(Lcom/silkimen/http/HttpRequest;Ljava/io/Closeable;ZLjava/io/BufferedReader;Ljava/lang/Appendable;)V

    .line 1895
    invoke-virtual {v6}, Lcom/silkimen/http/HttpRequest$4;->call()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Lcom/silkimen/http/HttpRequest;

    return-object p1
.end method

.method public referer(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 1

    .line 2214
    const-string v0, "Referer"

    invoke-virtual {p0, v0, p1}, Lcom/silkimen/http/HttpRequest;->header(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public send(Ljava/io/File;)Lcom/silkimen/http/HttpRequest;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 2827
    :try_start_0
    new-instance v0, Ljava/io/BufferedInputStream;

    new-instance v1, Ljava/io/FileInputStream;

    invoke-direct {v1, p1}, Ljava/io/FileInputStream;-><init>(Ljava/io/File;)V

    invoke-direct {v0, v1}, Ljava/io/BufferedInputStream;-><init>(Ljava/io/InputStream;)V

    .line 2828
    invoke-virtual {p1}, Ljava/io/File;->length()J

    move-result-wide v1

    invoke-direct {p0, v1, v2}, Lcom/silkimen/http/HttpRequest;->incrementTotalSize(J)Lcom/silkimen/http/HttpRequest;
    :try_end_0
    .catch Ljava/io/FileNotFoundException; {:try_start_0 .. :try_end_0} :catch_0

    .line 2832
    invoke-virtual {p0, v0}, Lcom/silkimen/http/HttpRequest;->send(Ljava/io/InputStream;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1

    :catch_0
    move-exception p1

    .line 2830
    new-instance v0, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v0, p1}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v0
.end method

.method public send(Ljava/io/InputStream;)Lcom/silkimen/http/HttpRequest;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 2859
    :try_start_0
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->openOutput()Lcom/silkimen/http/HttpRequest;

    .line 2860
    iget-object v0, p0, Lcom/silkimen/http/HttpRequest;->output:Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    invoke-virtual {p0, p1, v0}, Lcom/silkimen/http/HttpRequest;->copy(Ljava/io/InputStream;Ljava/io/OutputStream;)Lcom/silkimen/http/HttpRequest;
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    return-object p0

    :catch_0
    move-exception p1

    .line 2862
    new-instance v0, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v0, p1}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v0
.end method

.method public send(Ljava/io/Reader;)Lcom/silkimen/http/HttpRequest;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 2878
    :try_start_0
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->openOutput()Lcom/silkimen/http/HttpRequest;
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    .line 2882
    new-instance v0, Ljava/io/OutputStreamWriter;

    iget-object v1, p0, Lcom/silkimen/http/HttpRequest;->output:Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    invoke-static {v1}, Lcom/silkimen/http/HttpRequest$RequestOutputStream;->access$500(Lcom/silkimen/http/HttpRequest$RequestOutputStream;)Ljava/nio/charset/CharsetEncoder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/nio/charset/CharsetEncoder;->charset()Ljava/nio/charset/Charset;

    move-result-object v2

    invoke-direct {v0, v1, v2}, Ljava/io/OutputStreamWriter;-><init>(Ljava/io/OutputStream;Ljava/nio/charset/Charset;)V

    .line 2883
    new-instance v1, Lcom/silkimen/http/HttpRequest$8;

    invoke-direct {v1, p0, v0, p1, v0}, Lcom/silkimen/http/HttpRequest$8;-><init>(Lcom/silkimen/http/HttpRequest;Ljava/io/Flushable;Ljava/io/Reader;Ljava/io/Writer;)V

    .line 2889
    invoke-virtual {v1}, Lcom/silkimen/http/HttpRequest$8;->call()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Lcom/silkimen/http/HttpRequest;

    return-object p1

    :catch_0
    move-exception p1

    .line 2880
    new-instance v0, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v0, p1}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v0
.end method

.method public send(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 2904
    :try_start_0
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->openOutput()Lcom/silkimen/http/HttpRequest;

    .line 2905
    iget-object v0, p0, Lcom/silkimen/http/HttpRequest;->output:Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    invoke-virtual {p1}, Ljava/lang/Object;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, p1}, Lcom/silkimen/http/HttpRequest$RequestOutputStream;->write(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest$RequestOutputStream;
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    return-object p0

    :catch_0
    move-exception p1

    .line 2907
    new-instance v0, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v0, p1}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v0
.end method

.method public send([B)Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    if-eqz p1, :cond_0

    .line 2844
    array-length v0, p1

    int-to-long v0, v0

    invoke-direct {p0, v0, v1}, Lcom/silkimen/http/HttpRequest;->incrementTotalSize(J)Lcom/silkimen/http/HttpRequest;

    .line 2845
    :cond_0
    new-instance v0, Ljava/io/ByteArrayInputStream;

    invoke-direct {v0, p1}, Ljava/io/ByteArrayInputStream;-><init>([B)V

    invoke-virtual {p0, v0}, Lcom/silkimen/http/HttpRequest;->send(Ljava/io/InputStream;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public server()Ljava/lang/String;
    .locals 1

    .line 2273
    const-string v0, "Server"

    invoke-virtual {p0, v0}, Lcom/silkimen/http/HttpRequest;->header(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public serverError()Z
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    const/16 v0, 0x1f4

    .line 1503
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->code()I

    move-result v1

    if-ne v0, v1, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public setHostnameVerifier(Ljavax/net/ssl/HostnameVerifier;)Lcom/silkimen/http/HttpRequest;
    .locals 2

    .line 3041
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    .line 3042
    instance-of v1, v0, Ljavax/net/ssl/HttpsURLConnection;

    if-eqz v1, :cond_0

    .line 3043
    check-cast v0, Ljavax/net/ssl/HttpsURLConnection;

    invoke-virtual {v0, p1}, Ljavax/net/ssl/HttpsURLConnection;->setHostnameVerifier(Ljavax/net/ssl/HostnameVerifier;)V

    :cond_0
    return-object p0
.end method

.method public setSSLSocketFactory(Ljavax/net/ssl/SSLSocketFactory;)Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 3034
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    .line 3035
    instance-of v1, v0, Ljavax/net/ssl/HttpsURLConnection;

    if-eqz v1, :cond_0

    .line 3036
    check-cast v0, Ljavax/net/ssl/HttpsURLConnection;

    invoke-virtual {v0, p1}, Ljavax/net/ssl/HttpsURLConnection;->setSSLSocketFactory(Ljavax/net/ssl/SSLSocketFactory;)V

    :cond_0
    return-object p0
.end method

.method protected startPart()Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 2610
    iget-boolean v0, p0, Lcom/silkimen/http/HttpRequest;->multipart:Z

    if-nez v0, :cond_0

    const/4 v0, 0x1

    .line 2611
    iput-boolean v0, p0, Lcom/silkimen/http/HttpRequest;->multipart:Z

    .line 2612
    const-string v0, "multipart/form-data; boundary=00content0boundary00"

    invoke-virtual {p0, v0}, Lcom/silkimen/http/HttpRequest;->contentType(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object v0

    invoke-virtual {v0}, Lcom/silkimen/http/HttpRequest;->openOutput()Lcom/silkimen/http/HttpRequest;

    .line 2613
    iget-object v0, p0, Lcom/silkimen/http/HttpRequest;->output:Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    const-string v1, "--00content0boundary00\r\n"

    invoke-virtual {v0, v1}, Lcom/silkimen/http/HttpRequest$RequestOutputStream;->write(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    goto :goto_0

    .line 2615
    :cond_0
    iget-object v0, p0, Lcom/silkimen/http/HttpRequest;->output:Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    const-string v1, "\r\n--00content0boundary00\r\n"

    invoke-virtual {v0, v1}, Lcom/silkimen/http/HttpRequest$RequestOutputStream;->write(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    :goto_0
    return-object p0
.end method

.method public stream()Ljava/io/InputStream;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 1740
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->code()I

    move-result v0

    const/16 v1, 0x190

    if-ge v0, v1, :cond_0

    .line 1742
    :try_start_0
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    invoke-virtual {v0}, Ljava/net/HttpURLConnection;->getInputStream()Ljava/io/InputStream;

    move-result-object v0
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :catch_0
    move-exception v0

    .line 1744
    new-instance v1, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v1, v0}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v1

    .line 1747
    :cond_0
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    invoke-virtual {v0}, Ljava/net/HttpURLConnection;->getErrorStream()Ljava/io/InputStream;

    move-result-object v0

    if-nez v0, :cond_2

    .line 1750
    :try_start_1
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    invoke-virtual {v0}, Ljava/net/HttpURLConnection;->getInputStream()Ljava/io/InputStream;

    move-result-object v0
    :try_end_1
    .catch Ljava/io/IOException; {:try_start_1 .. :try_end_1} :catch_1

    goto :goto_0

    :catch_1
    move-exception v0

    .line 1752
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->contentLength()I

    move-result v1

    if-gtz v1, :cond_1

    .line 1755
    new-instance v0, Ljava/io/ByteArrayInputStream;

    const/4 v1, 0x0

    new-array v1, v1, [B

    invoke-direct {v0, v1}, Ljava/io/ByteArrayInputStream;-><init>([B)V

    goto :goto_0

    .line 1753
    :cond_1
    new-instance v1, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v1, v0}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v1

    .line 1759
    :cond_2
    :goto_0
    iget-boolean v1, p0, Lcom/silkimen/http/HttpRequest;->uncompress:Z

    if-eqz v1, :cond_4

    const-string v1, "gzip"

    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->contentEncoding()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-nez v1, :cond_3

    goto :goto_1

    .line 1763
    :cond_3
    :try_start_2
    new-instance v1, Ljava/util/zip/GZIPInputStream;

    invoke-direct {v1, v0}, Ljava/util/zip/GZIPInputStream;-><init>(Ljava/io/InputStream;)V
    :try_end_2
    .catch Ljava/io/IOException; {:try_start_2 .. :try_end_2} :catch_2

    return-object v1

    :catch_2
    move-exception v0

    .line 1765
    new-instance v1, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v1, v0}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v1

    :cond_4
    :goto_1
    return-object v0
.end method

.method public toString()Ljava/lang/String;
    .locals 2

    .line 1401
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->method()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const/16 v1, 0x20

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->url()Ljava/net/URL;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public uncompress(Z)Lcom/silkimen/http/HttpRequest;
    .locals 0

    .line 1620
    iput-boolean p1, p0, Lcom/silkimen/http/HttpRequest;->uncompress:Z

    return-object p0
.end method

.method public url()Ljava/net/URL;
    .locals 1

    .line 3053
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    invoke-virtual {v0}, Ljava/net/HttpURLConnection;->getURL()Ljava/net/URL;

    move-result-object v0

    return-object v0
.end method

.method public useCaches(Z)Lcom/silkimen/http/HttpRequest;
    .locals 1

    .line 2224
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->getConnection()Ljava/net/HttpURLConnection;

    move-result-object v0

    invoke-virtual {v0, p1}, Ljava/net/HttpURLConnection;->setUseCaches(Z)V

    return-object p0
.end method

.method public useProxy(Ljava/lang/String;I)Lcom/silkimen/http/HttpRequest;
    .locals 1

    .line 3075
    iget-object v0, p0, Lcom/silkimen/http/HttpRequest;->connection:Ljava/net/HttpURLConnection;

    if-nez v0, :cond_0

    .line 3079
    iput-object p1, p0, Lcom/silkimen/http/HttpRequest;->httpProxyHost:Ljava/lang/String;

    .line 3080
    iput p2, p0, Lcom/silkimen/http/HttpRequest;->httpProxyPort:I

    return-object p0

    .line 3076
    :cond_0
    new-instance p1, Ljava/lang/IllegalStateException;

    const-string p2, "The connection has already been created. This method must be called before reading or writing to the request."

    invoke-direct {p1, p2}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public userAgent(Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 1

    .line 2204
    const-string v0, "User-Agent"

    invoke-virtual {p0, v0, p1}, Lcom/silkimen/http/HttpRequest;->header(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method protected writePartHeader(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    const/4 v0, 0x0

    .line 2628
    invoke-virtual {p0, p1, p2, v0}, Lcom/silkimen/http/HttpRequest;->writePartHeader(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method protected writePartHeader(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 2642
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "form-data; name=\""

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    .line 2643
    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    if-eqz p2, :cond_0

    .line 2645
    const-string p1, "\"; filename=\""

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    :cond_0
    const/16 p1, 0x22

    .line 2646
    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    .line 2647
    const-string p1, "Content-Disposition"

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p0, p1, p2}, Lcom/silkimen/http/HttpRequest;->partHeader(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    if-eqz p3, :cond_1

    .line 2649
    const-string p1, "Content-Type"

    invoke-virtual {p0, p1, p3}, Lcom/silkimen/http/HttpRequest;->partHeader(Ljava/lang/String;Ljava/lang/String;)Lcom/silkimen/http/HttpRequest;

    .line 2650
    :cond_1
    const-string p1, "\r\n"

    invoke-virtual {p0, p1}, Lcom/silkimen/http/HttpRequest;->send(Ljava/lang/CharSequence;)Lcom/silkimen/http/HttpRequest;

    move-result-object p1

    return-object p1
.end method

.method public writer()Ljava/io/OutputStreamWriter;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Lcom/silkimen/http/HttpRequest$HttpRequestException;
        }
    .end annotation

    .line 2920
    :try_start_0
    invoke-virtual {p0}, Lcom/silkimen/http/HttpRequest;->openOutput()Lcom/silkimen/http/HttpRequest;

    .line 2921
    new-instance v0, Ljava/io/OutputStreamWriter;

    iget-object v1, p0, Lcom/silkimen/http/HttpRequest;->output:Lcom/silkimen/http/HttpRequest$RequestOutputStream;

    invoke-static {v1}, Lcom/silkimen/http/HttpRequest$RequestOutputStream;->access$500(Lcom/silkimen/http/HttpRequest$RequestOutputStream;)Ljava/nio/charset/CharsetEncoder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/nio/charset/CharsetEncoder;->charset()Ljava/nio/charset/Charset;

    move-result-object v2

    invoke-direct {v0, v1, v2}, Ljava/io/OutputStreamWriter;-><init>(Ljava/io/OutputStream;Ljava/nio/charset/Charset;)V
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    return-object v0

    :catch_0
    move-exception v0

    .line 2923
    new-instance v1, Lcom/silkimen/http/HttpRequest$HttpRequestException;

    invoke-direct {v1, v0}, Lcom/silkimen/http/HttpRequest$HttpRequestException;-><init>(Ljava/io/IOException;)V

    throw v1
.end method
