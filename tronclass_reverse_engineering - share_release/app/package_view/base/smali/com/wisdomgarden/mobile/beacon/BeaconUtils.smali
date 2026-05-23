.class public Lcom/wisdomgarden/mobile/beacon/BeaconUtils;
.super Ljava/lang/Object;
.source "BeaconUtils.java"


# static fields
.field private static final CHARS:Ljava/lang/String; = "2O9AuFNPDx4gtJwS3ye7l1Mq0dEB5HsaKInikRmLhjpG6b8fzQrCcvo"

.field private static final MESSAGE_MAX_LENGTH:I = 0xb

.field private static final RADIX:I

.field private static final TAG:Ljava/lang/String; = "BeaconUtils"

.field public static final WG_PREFIX:Ljava/lang/String; = "WG"

.field private static final WG_PREFIX_BYTES:[B

.field public static final WG_UUID:Ljava/lang/String; = "00005747-0000-1000-8000-00805F9B34FB"


# direct methods
.method static constructor <clinit>()V
    .locals 1

    const/4 v0, 0x2

    .line 37
    new-array v0, v0, [B

    fill-array-data v0, :array_0

    sput-object v0, Lcom/wisdomgarden/mobile/beacon/BeaconUtils;->WG_PREFIX_BYTES:[B

    .line 40
    const-string v0, "2O9AuFNPDx4gtJwS3ye7l1Mq0dEB5HsaKInikRmLhjpG6b8fzQrCcvo"

    invoke-virtual {v0}, Ljava/lang/String;->length()I

    move-result v0

    sput v0, Lcom/wisdomgarden/mobile/beacon/BeaconUtils;->RADIX:I

    return-void

    nop

    :array_0
    .array-data 1
        0x57t
        0x47t
    .end array-data
.end method

.method public constructor <init>()V
    .locals 0

    .line 8
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static addPrefixToBytes(Ljava/lang/String;)[B
    .locals 6

    .line 153
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "[addPrefixToBytes]Adding hex prefix to message: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    const-string v1, "BeaconUtils"

    invoke-static {v1, v0}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    .line 155
    sget-object v0, Ljava/nio/charset/StandardCharsets;->US_ASCII:Ljava/nio/charset/Charset;

    invoke-virtual {p0, v0}, Ljava/lang/String;->getBytes(Ljava/nio/charset/Charset;)[B

    move-result-object p0

    .line 156
    sget-object v0, Lcom/wisdomgarden/mobile/beacon/BeaconUtils;->WG_PREFIX_BYTES:[B

    array-length v2, v0

    array-length v3, p0

    add-int/2addr v2, v3

    new-array v3, v2, [B

    .line 157
    array-length v4, v0

    const/4 v5, 0x0

    invoke-static {v0, v5, v3, v5, v4}, Ljava/lang/System;->arraycopy(Ljava/lang/Object;ILjava/lang/Object;II)V

    .line 158
    array-length v0, v0

    array-length v4, p0

    invoke-static {p0, v5, v3, v0, v4}, Ljava/lang/System;->arraycopy(Ljava/lang/Object;ILjava/lang/Object;II)V

    .line 160
    new-instance p0, Ljava/lang/StringBuilder;

    const-string v0, "[addPrefixToBytes]Resulting byte array length: "

    invoke-direct {p0, v0}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p0, v2}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-static {v1, p0}, Landroid/util/Log;->v(Ljava/lang/String;Ljava/lang/String;)I

    return-object v3
.end method

.method public static buildMessage(ILjava/lang/String;)Ljava/lang/String;
    .locals 1

    .line 100
    invoke-static {p0}, Lcom/wisdomgarden/mobile/beacon/BeaconUtils;->encode(I)Ljava/lang/String;

    move-result-object p0

    if-eqz p1, :cond_2

    .line 102
    invoke-virtual {p1}, Ljava/lang/String;->isEmpty()Z

    move-result v0

    if-eqz v0, :cond_0

    goto :goto_0

    .line 106
    :cond_0
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    .line 107
    invoke-virtual {p0}, Ljava/lang/String;->length()I

    move-result p1

    const/16 v0, 0xb

    if-le p1, v0, :cond_1

    const/4 p1, 0x0

    invoke-virtual {p0, p1, v0}, Ljava/lang/String;->substring(II)Ljava/lang/String;

    move-result-object p0

    :cond_1
    return-object p0

    .line 103
    :cond_2
    :goto_0
    new-instance p1, Ljava/lang/StringBuilder;

    invoke-direct {p1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {p1, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    const-string p1, "Z"

    invoke-virtual {p0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    return-object p0
.end method

.method public static decode(Ljava/lang/String;)I
    .locals 6

    .line 71
    invoke-virtual {p0}, Ljava/lang/String;->toCharArray()[C

    move-result-object p0

    array-length v0, p0

    const/4 v1, 0x0

    move v2, v1

    move v3, v2

    :goto_0
    if-ge v2, v0, :cond_1

    aget-char v4, p0, v2

    .line 72
    const-string v5, "2O9AuFNPDx4gtJwS3ye7l1Mq0dEB5HsaKInikRmLhjpG6b8fzQrCcvo"

    invoke-virtual {v5, v4}, Ljava/lang/String;->indexOf(I)I

    move-result v4

    const/4 v5, -0x1

    if-eq v4, v5, :cond_0

    .line 74
    sget v5, Lcom/wisdomgarden/mobile/beacon/BeaconUtils;->RADIX:I

    mul-int/2addr v3, v5

    add-int/2addr v3, v4

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return v1

    :cond_1
    return v3
.end method

.method public static encode(I)Ljava/lang/String;
    .locals 5

    const/4 v0, 0x0

    .line 50
    const-string v1, "2O9AuFNPDx4gtJwS3ye7l1Mq0dEB5HsaKInikRmLhjpG6b8fzQrCcvo"

    if-gtz p0, :cond_0

    invoke-virtual {v1, v0}, Ljava/lang/String;->charAt(I)C

    move-result p0

    invoke-static {p0}, Ljava/lang/String;->valueOf(C)Ljava/lang/String;

    move-result-object p0

    return-object p0

    .line 51
    :cond_0
    new-instance v2, Ljava/lang/StringBuilder;

    invoke-direct {v2}, Ljava/lang/StringBuilder;-><init>()V

    :goto_0
    if-lez p0, :cond_1

    .line 55
    sget v3, Lcom/wisdomgarden/mobile/beacon/BeaconUtils;->RADIX:I

    rem-int v4, p0, v3

    .line 56
    invoke-virtual {v1, v4}, Ljava/lang/String;->charAt(I)C

    move-result v4

    invoke-virtual {v2, v0, v4}, Ljava/lang/StringBuilder;->insert(IC)Ljava/lang/StringBuilder;

    .line 57
    div-int/2addr p0, v3

    goto :goto_0

    .line 60
    :cond_1
    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    return-object p0
.end method

.method public static extractMessageFromBytes([B)Ljava/lang/String;
    .locals 5

    const/4 v0, 0x0

    .line 170
    const-string v1, "BeaconUtils"

    if-nez p0, :cond_0

    .line 171
    const-string p0, "[extractBytes] data is null"

    invoke-static {v1, p0}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;)I

    return-object v0

    .line 176
    :cond_0
    sget-object v2, Lcom/wisdomgarden/mobile/beacon/BeaconUtils;->WG_PREFIX_BYTES:[B

    array-length v3, v2

    add-int/lit8 v3, v3, 0xb

    .line 178
    array-length v4, p0

    array-length v2, v2

    if-lt v4, v2, :cond_4

    array-length v2, p0

    if-le v2, v3, :cond_1

    goto :goto_1

    :cond_1
    const/4 v2, 0x0

    .line 182
    :goto_0
    sget-object v3, Lcom/wisdomgarden/mobile/beacon/BeaconUtils;->WG_PREFIX_BYTES:[B

    array-length v4, v3

    if-ge v2, v4, :cond_3

    .line 183
    aget-byte v4, p0, v2

    aget-byte v3, v3, v2

    if-eq v4, v3, :cond_2

    return-object v0

    :cond_2
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 187
    :cond_3
    array-length v0, p0

    array-length v2, v3

    sub-int/2addr v0, v2

    .line 188
    new-instance v2, Ljava/lang/String;

    array-length v3, v3

    sget-object v4, Ljava/nio/charset/StandardCharsets;->US_ASCII:Ljava/nio/charset/Charset;

    invoke-direct {v2, p0, v3, v0, v4}, Ljava/lang/String;-><init>([BIILjava/nio/charset/Charset;)V

    .line 189
    const-string p0, "[extractBytes] Successfully extracted message from bytes: "

    invoke-virtual {p0, v2}, Ljava/lang/String;->concat(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p0

    invoke-static {v1, p0}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    return-object v2

    .line 179
    :cond_4
    :goto_1
    new-instance v2, Ljava/lang/StringBuilder;

    const-string v4, "[extractBytes] Length out of bounds. Max: "

    invoke-direct {v2, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v2

    const-string v3, ", Got: "

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    array-length p0, p0

    invoke-virtual {v2, p0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-static {v1, p0}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;)I

    return-object v0
.end method

.method public static extractMessageFromDeviceName(Ljava/lang/String;)Ljava/lang/String;
    .locals 5

    const/4 v0, 0x0

    .line 199
    const-string v1, "BeaconUtils"

    if-eqz p0, :cond_3

    invoke-virtual {p0}, Ljava/lang/String;->isEmpty()Z

    move-result v2

    if-eqz v2, :cond_0

    goto :goto_0

    .line 203
    :cond_0
    const-string v2, "WG"

    invoke-virtual {p0, v2}, Ljava/lang/String;->startsWith(Ljava/lang/String;)Z

    move-result v3

    if-nez v3, :cond_1

    return-object v0

    .line 206
    :cond_1
    invoke-virtual {v2}, Ljava/lang/String;->length()I

    move-result v3

    add-int/lit8 v3, v3, 0xb

    .line 207
    invoke-virtual {p0}, Ljava/lang/String;->length()I

    move-result v4

    if-le v4, v3, :cond_2

    .line 208
    new-instance v2, Ljava/lang/StringBuilder;

    const-string v4, "[extractName] Length out of bounds. Max: "

    invoke-direct {v2, v4}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v2

    const-string v3, ", Got: "

    invoke-virtual {v2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {p0}, Ljava/lang/String;->length()I

    move-result p0

    invoke-virtual {v2, p0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-static {v1, p0}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;)I

    return-object v0

    .line 211
    :cond_2
    invoke-virtual {v2}, Ljava/lang/String;->length()I

    move-result v0

    invoke-virtual {p0, v0}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object p0

    .line 212
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v2, "[extractName] Successfully. "

    invoke-direct {v0, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v1, v0}, Landroid/util/Log;->i(Ljava/lang/String;Ljava/lang/String;)I

    return-object p0

    .line 200
    :cond_3
    :goto_0
    const-string p0, "[extractName] message is null"

    invoke-static {v1, p0}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;)I

    return-object v0
.end method

.method public static getMessageMaxLength()I
    .locals 1

    const/16 v0, 0xb

    return v0
.end method

.method public static isNonceLetter(C)Z
    .locals 1

    const/16 v0, 0x54

    if-lt p0, v0, :cond_0

    const/16 v0, 0x5a

    if-gt p0, v0, :cond_0

    const/4 p0, 0x1

    goto :goto_0

    :cond_0
    const/4 p0, 0x0

    :goto_0
    return p0
.end method

.method public static parseMessage(Ljava/lang/String;)Ljava/util/Map;
    .locals 6
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            ")",
            "Ljava/util/Map<",
            "Ljava/lang/String;",
            "Ljava/lang/Object;",
            ">;"
        }
    .end annotation

    .line 117
    new-instance v0, Ljava/util/HashMap;

    invoke-direct {v0}, Ljava/util/HashMap;-><init>()V

    const/4 v1, 0x0

    .line 118
    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    const-string v3, "rollcallId"

    invoke-interface {v0, v3, v2}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 119
    const-string v2, ""

    const-string v4, "nonce"

    invoke-interface {v0, v4, v2}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    if-eqz p0, :cond_2

    .line 121
    invoke-virtual {p0}, Ljava/lang/String;->isEmpty()Z

    move-result v2

    if-eqz v2, :cond_0

    goto :goto_1

    :cond_0
    move v2, v1

    .line 125
    :goto_0
    invoke-virtual {p0}, Ljava/lang/String;->length()I

    move-result v5

    if-ge v2, v5, :cond_2

    .line 126
    invoke-virtual {p0, v2}, Ljava/lang/String;->charAt(I)C

    move-result v5

    invoke-static {v5}, Lcom/wisdomgarden/mobile/beacon/BeaconUtils;->isNonceLetter(C)Z

    move-result v5

    if-eqz v5, :cond_1

    .line 127
    invoke-virtual {p0, v1, v2}, Ljava/lang/String;->substring(II)Ljava/lang/String;

    move-result-object v1

    .line 128
    invoke-static {v1}, Lcom/wisdomgarden/mobile/beacon/BeaconUtils;->decode(Ljava/lang/String;)I

    move-result v1

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v1

    invoke-interface {v0, v3, v1}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 129
    invoke-virtual {p0, v2}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object p0

    invoke-interface {v0, v4, p0}, Ljava/util/Map;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    return-object v0

    :cond_1
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_2
    :goto_1
    return-object v0
.end method
