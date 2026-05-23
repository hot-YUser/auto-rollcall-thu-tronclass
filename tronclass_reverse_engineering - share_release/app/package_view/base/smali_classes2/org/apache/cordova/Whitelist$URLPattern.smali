.class Lorg/apache/cordova/Whitelist$URLPattern;
.super Ljava/lang/Object;
.source "Whitelist.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lorg/apache/cordova/Whitelist;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0xa
    name = "URLPattern"
.end annotation


# instance fields
.field public host:Ljava/util/regex/Pattern;

.field public path:Ljava/util/regex/Pattern;

.field public port:Ljava/lang/Integer;

.field public scheme:Ljava/util/regex/Pattern;


# direct methods
.method public constructor <init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V
    .locals 6
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/net/MalformedURLException;
        }
    .end annotation

    const-string v0, "([a-z0-9.-]*\\.)?"

    .line 53
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v1, 0x0

    .line 55
    const-string v2, "*"

    const/4 v3, 0x2

    const/4 v4, 0x0

    if-eqz p1, :cond_1

    :try_start_0
    invoke-virtual {v2, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v5

    if-eqz v5, :cond_0

    goto :goto_0

    .line 58
    :cond_0
    invoke-direct {p0, p1, v1}, Lorg/apache/cordova/Whitelist$URLPattern;->regexFromPattern(Ljava/lang/String;Z)Ljava/lang/String;

    move-result-object p1

    invoke-static {p1, v3}, Ljava/util/regex/Pattern;->compile(Ljava/lang/String;I)Ljava/util/regex/Pattern;

    move-result-object p1

    iput-object p1, p0, Lorg/apache/cordova/Whitelist$URLPattern;->scheme:Ljava/util/regex/Pattern;

    goto :goto_1

    .line 56
    :cond_1
    :goto_0
    iput-object v4, p0, Lorg/apache/cordova/Whitelist$URLPattern;->scheme:Ljava/util/regex/Pattern;

    .line 60
    :goto_1
    invoke-virtual {v2, p2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_2

    .line 61
    iput-object v4, p0, Lorg/apache/cordova/Whitelist$URLPattern;->host:Ljava/util/regex/Pattern;

    goto :goto_2

    .line 62
    :cond_2
    const-string p1, "*."

    invoke-virtual {p2, p1}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result p1

    if-eqz p1, :cond_3

    .line 63
    new-instance p1, Ljava/lang/StringBuilder;

    invoke-direct {p1, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v3}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object p2

    invoke-direct {p0, p2, v1}, Lorg/apache/cordova/Whitelist$URLPattern;->regexFromPattern(Ljava/lang/String;Z)Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {p1, v3}, Ljava/util/regex/Pattern;->compile(Ljava/lang/String;I)Ljava/util/regex/Pattern;

    move-result-object p1

    iput-object p1, p0, Lorg/apache/cordova/Whitelist$URLPattern;->host:Ljava/util/regex/Pattern;

    goto :goto_2

    .line 65
    :cond_3
    invoke-direct {p0, p2, v1}, Lorg/apache/cordova/Whitelist$URLPattern;->regexFromPattern(Ljava/lang/String;Z)Ljava/lang/String;

    move-result-object p1

    invoke-static {p1, v3}, Ljava/util/regex/Pattern;->compile(Ljava/lang/String;I)Ljava/util/regex/Pattern;

    move-result-object p1

    iput-object p1, p0, Lorg/apache/cordova/Whitelist$URLPattern;->host:Ljava/util/regex/Pattern;

    :goto_2
    if-eqz p3, :cond_5

    .line 67
    invoke-virtual {v2, p3}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_4

    goto :goto_3

    :cond_4
    const/16 p1, 0xa

    .line 70
    invoke-static {p3, p1}, Ljava/lang/Integer;->parseInt(Ljava/lang/String;I)I

    move-result p1

    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    iput-object p1, p0, Lorg/apache/cordova/Whitelist$URLPattern;->port:Ljava/lang/Integer;

    goto :goto_4

    .line 68
    :cond_5
    :goto_3
    iput-object v4, p0, Lorg/apache/cordova/Whitelist$URLPattern;->port:Ljava/lang/Integer;

    :goto_4
    if-eqz p4, :cond_7

    .line 72
    const-string p1, "/*"

    invoke-virtual {p1, p4}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_6

    goto :goto_5

    :cond_6
    const/4 p1, 0x1

    .line 75
    invoke-direct {p0, p4, p1}, Lorg/apache/cordova/Whitelist$URLPattern;->regexFromPattern(Ljava/lang/String;Z)Ljava/lang/String;

    move-result-object p1

    invoke-static {p1}, Ljava/util/regex/Pattern;->compile(Ljava/lang/String;)Ljava/util/regex/Pattern;

    move-result-object p1

    iput-object p1, p0, Lorg/apache/cordova/Whitelist$URLPattern;->path:Ljava/util/regex/Pattern;

    goto :goto_6

    .line 73
    :cond_7
    :goto_5
    iput-object v4, p0, Lorg/apache/cordova/Whitelist$URLPattern;->path:Ljava/util/regex/Pattern;
    :try_end_0
    .catch Ljava/lang/NumberFormatException; {:try_start_0 .. :try_end_0} :catch_0

    :goto_6
    return-void

    .line 78
    :catch_0
    new-instance p1, Ljava/net/MalformedURLException;

    const-string p2, "Port must be a number"

    invoke-direct {p1, p2}, Ljava/net/MalformedURLException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method private regexFromPattern(Ljava/lang/String;Z)Ljava/lang/String;
    .locals 5

    .line 40
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    const/4 v1, 0x0

    .line 41
    :goto_0
    invoke-virtual {p1}, Ljava/lang/String;->length()I

    move-result v2

    if-ge v1, v2, :cond_2

    .line 42
    invoke-virtual {p1, v1}, Ljava/lang/String;->charAt(I)C

    move-result v2

    const/16 v3, 0x2a

    if-ne v2, v3, :cond_0

    if-eqz p2, :cond_0

    .line 44
    const-string v3, "."

    invoke-virtual {v0, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    goto :goto_1

    .line 45
    :cond_0
    const-string v3, "\\.[]{}()^$?+|"

    invoke-virtual {v3, v2}, Ljava/lang/String;->indexOf(I)I

    move-result v3

    const/4 v4, -0x1

    if-le v3, v4, :cond_1

    const/16 v3, 0x5c

    .line 46
    invoke-virtual {v0, v3}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    .line 48
    :cond_1
    :goto_1
    invoke-virtual {v0, v2}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    add-int/lit8 v1, v1, 0x1

    goto :goto_0

    .line 50
    :cond_2
    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method


# virtual methods
.method public matches(Landroid/net/Uri;)Z
    .locals 3

    const/4 v0, 0x0

    .line 84
    :try_start_0
    iget-object v1, p0, Lorg/apache/cordova/Whitelist$URLPattern;->scheme:Ljava/util/regex/Pattern;

    if-eqz v1, :cond_0

    invoke-virtual {p1}, Landroid/net/Uri;->getScheme()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/util/regex/Pattern;->matcher(Ljava/lang/CharSequence;)Ljava/util/regex/Matcher;

    move-result-object v1

    invoke-virtual {v1}, Ljava/util/regex/Matcher;->matches()Z

    move-result v1

    if-eqz v1, :cond_4

    :cond_0
    iget-object v1, p0, Lorg/apache/cordova/Whitelist$URLPattern;->host:Ljava/util/regex/Pattern;

    if-eqz v1, :cond_1

    .line 85
    invoke-virtual {p1}, Landroid/net/Uri;->getHost()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/util/regex/Pattern;->matcher(Ljava/lang/CharSequence;)Ljava/util/regex/Matcher;

    move-result-object v1

    invoke-virtual {v1}, Ljava/util/regex/Matcher;->matches()Z

    move-result v1

    if-eqz v1, :cond_4

    :cond_1
    iget-object v1, p0, Lorg/apache/cordova/Whitelist$URLPattern;->port:Ljava/lang/Integer;

    if-eqz v1, :cond_2

    .line 86
    invoke-virtual {p1}, Landroid/net/Uri;->getPort()I

    move-result v2

    invoke-static {v2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/lang/Integer;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_4

    :cond_2
    iget-object v1, p0, Lorg/apache/cordova/Whitelist$URLPattern;->path:Ljava/util/regex/Pattern;

    if-eqz v1, :cond_3

    .line 87
    invoke-virtual {p1}, Landroid/net/Uri;->getPath()Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v1, p1}, Ljava/util/regex/Pattern;->matcher(Ljava/lang/CharSequence;)Ljava/util/regex/Matcher;

    move-result-object p1

    invoke-virtual {p1}, Ljava/util/regex/Matcher;->matches()Z

    move-result p1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    if-eqz p1, :cond_4

    :cond_3
    const/4 v0, 0x1

    :cond_4
    return v0

    :catch_0
    move-exception p1

    .line 89
    const-string v1, "Whitelist"

    invoke-virtual {p1}, Ljava/lang/Exception;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-static {v1, p1}, Lorg/apache/cordova/LOG;->d(Ljava/lang/String;Ljava/lang/String;)V

    return v0
.end method
