.class public Lcom/silkimen/http/HttpRequest$Base64;
.super Ljava/lang/Object;
.source "HttpRequest.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/silkimen/http/HttpRequest;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x9
    name = "Base64"
.end annotation


# static fields
.field private static final EQUALS_SIGN:B = 0x3dt

.field private static final PREFERRED_ENCODING:Ljava/lang/String; = "US-ASCII"

.field private static final _STANDARD_ALPHABET:[B


# direct methods
.method static constructor <clinit>()V
    .locals 1

    const/16 v0, 0x40

    .line 402
    new-array v0, v0, [B

    fill-array-data v0, :array_0

    sput-object v0, Lcom/silkimen/http/HttpRequest$Base64;->_STANDARD_ALPHABET:[B

    return-void

    :array_0
    .array-data 1
        0x41t
        0x42t
        0x43t
        0x44t
        0x45t
        0x46t
        0x47t
        0x48t
        0x49t
        0x4at
        0x4bt
        0x4ct
        0x4dt
        0x4et
        0x4ft
        0x50t
        0x51t
        0x52t
        0x53t
        0x54t
        0x55t
        0x56t
        0x57t
        0x58t
        0x59t
        0x5at
        0x61t
        0x62t
        0x63t
        0x64t
        0x65t
        0x66t
        0x67t
        0x68t
        0x69t
        0x6at
        0x6bt
        0x6ct
        0x6dt
        0x6et
        0x6ft
        0x70t
        0x71t
        0x72t
        0x73t
        0x74t
        0x75t
        0x76t
        0x77t
        0x78t
        0x79t
        0x7at
        0x30t
        0x31t
        0x32t
        0x33t
        0x34t
        0x35t
        0x36t
        0x37t
        0x38t
        0x39t
        0x2bt
        0x2ft
    .end array-data
.end method

.method private constructor <init>()V
    .locals 0

    .line 412
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static encode(Ljava/lang/String;)Ljava/lang/String;
    .locals 1

    .line 484
    :try_start_0
    const-string v0, "US-ASCII"

    invoke-virtual {p0, v0}, Ljava/lang/String;->getBytes(Ljava/lang/String;)[B

    move-result-object p0
    :try_end_0
    .catch Ljava/io/UnsupportedEncodingException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    .line 486
    :catch_0
    invoke-virtual {p0}, Ljava/lang/String;->getBytes()[B

    move-result-object p0

    .line 488
    :goto_0
    invoke-static {p0}, Lcom/silkimen/http/HttpRequest$Base64;->encodeBytes([B)Ljava/lang/String;

    move-result-object p0

    return-object p0
.end method

.method private static encode3to4([BII[BI)[B
    .locals 5

    .line 442
    sget-object v0, Lcom/silkimen/http/HttpRequest$Base64;->_STANDARD_ALPHABET:[B

    const/4 v1, 0x0

    if-lez p2, :cond_0

    .line 444
    aget-byte v2, p0, p1

    shl-int/lit8 v2, v2, 0x18

    ushr-int/lit8 v2, v2, 0x8

    goto :goto_0

    :cond_0
    move v2, v1

    :goto_0
    const/4 v3, 0x1

    if-le p2, v3, :cond_1

    add-int/lit8 v4, p1, 0x1

    .line 445
    aget-byte v4, p0, v4

    shl-int/lit8 v4, v4, 0x18

    ushr-int/lit8 v4, v4, 0x10

    goto :goto_1

    :cond_1
    move v4, v1

    :goto_1
    or-int/2addr v2, v4

    const/4 v4, 0x2

    if-le p2, v4, :cond_2

    add-int/2addr p1, v4

    .line 446
    aget-byte p0, p0, p1

    shl-int/lit8 p0, p0, 0x18

    ushr-int/lit8 v1, p0, 0x18

    :cond_2
    or-int p0, v2, v1

    const/16 p1, 0x3d

    const/4 v1, 0x3

    if-eq p2, v3, :cond_5

    if-eq p2, v4, :cond_4

    if-eq p2, v1, :cond_3

    return-object p3

    :cond_3
    ushr-int/lit8 p1, p0, 0x12

    .line 450
    aget-byte p1, v0, p1

    aput-byte p1, p3, p4

    add-int/lit8 p1, p4, 0x1

    ushr-int/lit8 p2, p0, 0xc

    and-int/lit8 p2, p2, 0x3f

    .line 451
    aget-byte p2, v0, p2

    aput-byte p2, p3, p1

    add-int/lit8 p1, p4, 0x2

    ushr-int/lit8 p2, p0, 0x6

    and-int/lit8 p2, p2, 0x3f

    .line 452
    aget-byte p2, v0, p2

    aput-byte p2, p3, p1

    add-int/2addr p4, v1

    and-int/lit8 p0, p0, 0x3f

    .line 453
    aget-byte p0, v0, p0

    aput-byte p0, p3, p4

    return-object p3

    :cond_4
    ushr-int/lit8 p2, p0, 0x12

    .line 457
    aget-byte p2, v0, p2

    aput-byte p2, p3, p4

    add-int/lit8 p2, p4, 0x1

    ushr-int/lit8 v2, p0, 0xc

    and-int/lit8 v2, v2, 0x3f

    .line 458
    aget-byte v2, v0, v2

    aput-byte v2, p3, p2

    add-int/lit8 p2, p4, 0x2

    ushr-int/lit8 p0, p0, 0x6

    and-int/lit8 p0, p0, 0x3f

    .line 459
    aget-byte p0, v0, p0

    aput-byte p0, p3, p2

    add-int/2addr p4, v1

    .line 460
    aput-byte p1, p3, p4

    return-object p3

    :cond_5
    ushr-int/lit8 p2, p0, 0x12

    .line 464
    aget-byte p2, v0, p2

    aput-byte p2, p3, p4

    add-int/lit8 p2, p4, 0x1

    ushr-int/lit8 p0, p0, 0xc

    and-int/lit8 p0, p0, 0x3f

    .line 465
    aget-byte p0, v0, p0

    aput-byte p0, p3, p2

    add-int/lit8 p0, p4, 0x2

    .line 466
    aput-byte p1, p3, p0

    add-int/2addr p4, v1

    .line 467
    aput-byte p1, p3, p4

    return-object p3
.end method

.method public static encodeBytes([B)Ljava/lang/String;
    .locals 2

    const/4 v0, 0x0

    .line 502
    array-length v1, p0

    invoke-static {p0, v0, v1}, Lcom/silkimen/http/HttpRequest$Base64;->encodeBytes([BII)Ljava/lang/String;

    move-result-object p0

    return-object p0
.end method

.method public static encodeBytes([BII)Ljava/lang/String;
    .locals 0

    .line 518
    invoke-static {p0, p1, p2}, Lcom/silkimen/http/HttpRequest$Base64;->encodeBytesToBytes([BII)[B

    move-result-object p0

    .line 520
    :try_start_0
    new-instance p1, Ljava/lang/String;

    const-string p2, "US-ASCII"

    invoke-direct {p1, p0, p2}, Ljava/lang/String;-><init>([BLjava/lang/String;)V
    :try_end_0
    .catch Ljava/io/UnsupportedEncodingException; {:try_start_0 .. :try_end_0} :catch_0

    return-object p1

    .line 522
    :catch_0
    new-instance p1, Ljava/lang/String;

    invoke-direct {p1, p0}, Ljava/lang/String;-><init>([B)V

    return-object p1
.end method

.method public static encodeBytesToBytes([BII)[B
    .locals 8

    if-eqz p0, :cond_7

    if-ltz p1, :cond_6

    if-ltz p2, :cond_5

    add-int v0, p1, p2

    .line 552
    array-length v1, p0

    if-gt v0, v1, :cond_4

    .line 557
    div-int/lit8 v0, p2, 0x3

    const/4 v1, 0x4

    mul-int/2addr v0, v1

    rem-int/lit8 v2, p2, 0x3

    const/4 v3, 0x0

    if-lez v2, :cond_0

    goto :goto_0

    :cond_0
    move v1, v3

    :goto_0
    add-int/2addr v0, v1

    .line 559
    new-array v1, v0, [B

    add-int/lit8 v2, p2, -0x2

    move v4, v3

    move v5, v4

    :goto_1
    if-ge v4, v2, :cond_1

    add-int v6, v4, p1

    const/4 v7, 0x3

    .line 565
    invoke-static {p0, v6, v7, v1, v5}, Lcom/silkimen/http/HttpRequest$Base64;->encode3to4([BII[BI)[B

    add-int/lit8 v4, v4, 0x3

    add-int/lit8 v5, v5, 0x4

    goto :goto_1

    :cond_1
    if-ge v4, p2, :cond_2

    add-int/2addr p1, v4

    sub-int/2addr p2, v4

    .line 568
    invoke-static {p0, p1, p2, v1, v5}, Lcom/silkimen/http/HttpRequest$Base64;->encode3to4([BII[BI)[B

    add-int/lit8 v5, v5, 0x4

    :cond_2
    add-int/lit8 v0, v0, -0x1

    if-gt v5, v0, :cond_3

    .line 573
    new-array p0, v5, [B

    .line 574
    invoke-static {v1, v3, p0, v3, v5}, Ljava/lang/System;->arraycopy(Ljava/lang/Object;ILjava/lang/Object;II)V

    return-object p0

    :cond_3
    return-object v1

    .line 553
    :cond_4
    new-instance v0, Ljava/lang/IllegalArgumentException;

    .line 554
    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    invoke-static {p2}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p2

    array-length p0, p0

    invoke-static {p0}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p0

    filled-new-array {p1, p2, p0}, [Ljava/lang/Object;

    move-result-object p0

    const-string p1, "Cannot have offset of %d and length of %d with array of length %d"

    invoke-static {p1, p0}, Ljava/lang/String;->format(Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object p0

    invoke-direct {v0, p0}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw v0

    .line 550
    :cond_5
    new-instance p0, Ljava/lang/IllegalArgumentException;

    new-instance p1, Ljava/lang/StringBuilder;

    const-string v0, "Cannot have length offset: "

    invoke-direct {p1, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0

    .line 547
    :cond_6
    new-instance p0, Ljava/lang/IllegalArgumentException;

    new-instance p2, Ljava/lang/StringBuilder;

    const-string v0, "Cannot have negative offset: "

    invoke-direct {p2, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, p1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-direct {p0, p1}, Ljava/lang/IllegalArgumentException;-><init>(Ljava/lang/String;)V

    throw p0

    .line 544
    :cond_7
    new-instance p0, Ljava/lang/NullPointerException;

    const-string p1, "Cannot serialize a null array."

    invoke-direct {p0, p1}, Ljava/lang/NullPointerException;-><init>(Ljava/lang/String;)V

    throw p0
.end method
