.class public Lcom/silkimen/http/HttpBodyDecoder;
.super Ljava/lang/Object;
.source "HttpBodyDecoder.java"


# static fields
.field private static final ACCEPTED_CHARSETS:[Ljava/lang/String;


# direct methods
.method static constructor <clinit>()V
    .locals 3

    const/4 v0, 0x2

    .line 11
    new-array v0, v0, [Ljava/lang/String;

    const/4 v1, 0x0

    const-string v2, "UTF-8"

    aput-object v2, v0, v1

    const/4 v1, 0x1

    const-string v2, "ISO-8859-1"

    aput-object v2, v0, v1

    sput-object v0, Lcom/silkimen/http/HttpBodyDecoder;->ACCEPTED_CHARSETS:[Ljava/lang/String;

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 10
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method private static createCharsetDecoder(Ljava/lang/String;)Ljava/nio/charset/CharsetDecoder;
    .locals 1

    .line 52
    invoke-static {p0}, Ljava/nio/charset/Charset;->forName(Ljava/lang/String;)Ljava/nio/charset/Charset;

    move-result-object p0

    invoke-virtual {p0}, Ljava/nio/charset/Charset;->newDecoder()Ljava/nio/charset/CharsetDecoder;

    move-result-object p0

    sget-object v0, Ljava/nio/charset/CodingErrorAction;->REPORT:Ljava/nio/charset/CodingErrorAction;

    invoke-virtual {p0, v0}, Ljava/nio/charset/CharsetDecoder;->onMalformedInput(Ljava/nio/charset/CodingErrorAction;)Ljava/nio/charset/CharsetDecoder;

    move-result-object p0

    sget-object v0, Ljava/nio/charset/CodingErrorAction;->REPORT:Ljava/nio/charset/CodingErrorAction;

    .line 53
    invoke-virtual {p0, v0}, Ljava/nio/charset/CharsetDecoder;->onUnmappableCharacter(Ljava/nio/charset/CodingErrorAction;)Ljava/nio/charset/CharsetDecoder;

    move-result-object p0

    return-object p0
.end method

.method public static decodeBody(Ljava/nio/ByteBuffer;Ljava/lang/String;)Ljava/lang/String;
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/nio/charset/CharacterCodingException;,
            Ljava/nio/charset/MalformedInputException;
        }
    .end annotation

    if-nez p1, :cond_0

    .line 23
    invoke-static {p0}, Lcom/silkimen/http/HttpBodyDecoder;->tryDecodeByteBuffer(Ljava/nio/ByteBuffer;)Ljava/lang/String;

    move-result-object p0

    return-object p0

    .line 25
    :cond_0
    invoke-static {p0, p1}, Lcom/silkimen/http/HttpBodyDecoder;->decodeByteBuffer(Ljava/nio/ByteBuffer;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    return-object p0
.end method

.method public static decodeBody([BLjava/lang/String;)Ljava/lang/String;
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/nio/charset/CharacterCodingException;,
            Ljava/nio/charset/MalformedInputException;
        }
    .end annotation

    .line 16
    invoke-static {p0}, Ljava/nio/ByteBuffer;->wrap([B)Ljava/nio/ByteBuffer;

    move-result-object p0

    invoke-static {p0, p1}, Lcom/silkimen/http/HttpBodyDecoder;->decodeBody(Ljava/nio/ByteBuffer;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    return-object p0
.end method

.method private static decodeByteBuffer(Ljava/nio/ByteBuffer;Ljava/lang/String;)Ljava/lang/String;
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/nio/charset/CharacterCodingException;,
            Ljava/nio/charset/MalformedInputException;
        }
    .end annotation

    .line 48
    invoke-static {p1}, Lcom/silkimen/http/HttpBodyDecoder;->createCharsetDecoder(Ljava/lang/String;)Ljava/nio/charset/CharsetDecoder;

    move-result-object p1

    invoke-virtual {p1, p0}, Ljava/nio/charset/CharsetDecoder;->decode(Ljava/nio/ByteBuffer;)Ljava/nio/CharBuffer;

    move-result-object p0

    invoke-virtual {p0}, Ljava/nio/CharBuffer;->toString()Ljava/lang/String;

    move-result-object p0

    return-object p0
.end method

.method private static tryDecodeByteBuffer(Ljava/nio/ByteBuffer;)Ljava/lang/String;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/nio/charset/CharacterCodingException;,
            Ljava/nio/charset/MalformedInputException;
        }
    .end annotation

    const/4 v0, 0x0

    .line 32
    :goto_0
    sget-object v1, Lcom/silkimen/http/HttpBodyDecoder;->ACCEPTED_CHARSETS:[Ljava/lang/String;

    array-length v2, v1

    add-int/lit8 v2, v2, -0x1

    if-ge v0, v2, :cond_0

    .line 34
    :try_start_0
    aget-object v1, v1, v0

    invoke-static {p0, v1}, Lcom/silkimen/http/HttpBodyDecoder;->decodeByteBuffer(Ljava/nio/ByteBuffer;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0
    :try_end_0
    .catch Ljava/nio/charset/MalformedInputException; {:try_start_0 .. :try_end_0} :catch_0
    .catch Ljava/nio/charset/CharacterCodingException; {:try_start_0 .. :try_end_0} :catch_0

    return-object p0

    :catch_0
    add-int/lit8 v0, v0, 0x1

    goto :goto_0

    .line 42
    :cond_0
    array-length v0, v1

    add-int/lit8 v0, v0, -0x1

    aget-object v0, v1, v0

    invoke-static {p0, v0}, Lcom/silkimen/http/HttpBodyDecoder;->decodeBody(Ljava/nio/ByteBuffer;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    return-object p0
.end method
