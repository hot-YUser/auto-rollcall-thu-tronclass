.class final Landroidx/camera/core/impl/utils/ExifAttribute;
.super Ljava/lang/Object;
.source "ExifAttribute.java"


# static fields
.field static final ASCII:Ljava/nio/charset/Charset;

.field public static final BYTES_OFFSET_UNKNOWN:J = -0x1L

.field static final EXIF_ASCII_PREFIX:[B

.field static final IFD_FORMAT_BYTE:I = 0x1

.field static final IFD_FORMAT_BYTES_PER_FORMAT:[I

.field static final IFD_FORMAT_DOUBLE:I = 0xc

.field static final IFD_FORMAT_NAMES:[Ljava/lang/String;

.field static final IFD_FORMAT_SBYTE:I = 0x6

.field static final IFD_FORMAT_SINGLE:I = 0xb

.field static final IFD_FORMAT_SLONG:I = 0x9

.field static final IFD_FORMAT_SRATIONAL:I = 0xa

.field static final IFD_FORMAT_SSHORT:I = 0x8

.field static final IFD_FORMAT_STRING:I = 0x2

.field static final IFD_FORMAT_ULONG:I = 0x4

.field static final IFD_FORMAT_UNDEFINED:I = 0x7

.field static final IFD_FORMAT_URATIONAL:I = 0x5

.field static final IFD_FORMAT_USHORT:I = 0x3

.field private static final TAG:Ljava/lang/String; = "ExifAttribute"


# instance fields
.field public final bytes:[B

.field public final bytesOffset:J

.field public final format:I

.field public final numberOfComponents:I


# direct methods
.method static constructor <clinit>()V
    .locals 5

    .line 45
    sget-object v0, Ljava/nio/charset/StandardCharsets;->US_ASCII:Ljava/nio/charset/Charset;

    sput-object v0, Landroidx/camera/core/impl/utils/ExifAttribute;->ASCII:Ljava/nio/charset/Charset;

    const/16 v0, 0xe

    .line 61
    new-array v1, v0, [Ljava/lang/String;

    const/4 v2, 0x0

    const-string v3, ""

    aput-object v3, v1, v2

    const/4 v2, 0x1

    const-string v3, "BYTE"

    aput-object v3, v1, v2

    const/4 v2, 0x2

    const-string v3, "STRING"

    aput-object v3, v1, v2

    const/4 v2, 0x3

    const-string v3, "USHORT"

    aput-object v3, v1, v2

    const/4 v2, 0x4

    const-string v3, "ULONG"

    aput-object v3, v1, v2

    const/4 v2, 0x5

    const-string v3, "URATIONAL"

    aput-object v3, v1, v2

    const/4 v2, 0x6

    const-string v3, "SBYTE"

    aput-object v3, v1, v2

    const/4 v2, 0x7

    const-string v3, "UNDEFINED"

    aput-object v3, v1, v2

    const-string v2, "SSHORT"

    const/16 v3, 0x8

    aput-object v2, v1, v3

    const/16 v2, 0x9

    const-string v4, "SLONG"

    aput-object v4, v1, v2

    const/16 v2, 0xa

    const-string v4, "SRATIONAL"

    aput-object v4, v1, v2

    const/16 v2, 0xb

    const-string v4, "SINGLE"

    aput-object v4, v1, v2

    const/16 v2, 0xc

    const-string v4, "DOUBLE"

    aput-object v4, v1, v2

    const/16 v2, 0xd

    const-string v4, "IFD"

    aput-object v4, v1, v2

    sput-object v1, Landroidx/camera/core/impl/utils/ExifAttribute;->IFD_FORMAT_NAMES:[Ljava/lang/String;

    .line 66
    new-array v0, v0, [I

    fill-array-data v0, :array_0

    sput-object v0, Landroidx/camera/core/impl/utils/ExifAttribute;->IFD_FORMAT_BYTES_PER_FORMAT:[I

    .line 71
    new-array v0, v3, [B

    fill-array-data v0, :array_1

    sput-object v0, Landroidx/camera/core/impl/utils/ExifAttribute;->EXIF_ASCII_PREFIX:[B

    return-void

    nop

    :array_0
    .array-data 4
        0x0
        0x1
        0x1
        0x2
        0x4
        0x8
        0x1
        0x1
        0x2
        0x4
        0x8
        0x4
        0x8
        0x1
    .end array-data

    :array_1
    .array-data 1
        0x41t
        0x53t
        0x43t
        0x49t
        0x49t
        0x0t
        0x0t
        0x0t
    .end array-data
.end method

.method constructor <init>(IIJ[B)V
    .locals 0

    .line 86
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 87
    iput p1, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->format:I

    .line 88
    iput p2, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->numberOfComponents:I

    .line 89
    iput-wide p3, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->bytesOffset:J

    .line 90
    iput-object p5, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->bytes:[B

    return-void
.end method

.method constructor <init>(II[B)V
    .locals 6

    const-wide/16 v3, -0x1

    move-object v0, p0

    move v1, p1

    move v2, p2

    move-object v5, p3

    .line 82
    invoke-direct/range {v0 .. v5}, Landroidx/camera/core/impl/utils/ExifAttribute;-><init>(IIJ[B)V

    return-void
.end method

.method public static createByte(Ljava/lang/String;)Landroidx/camera/core/impl/utils/ExifAttribute;
    .locals 5

    .line 144
    invoke-virtual {p0}, Ljava/lang/String;->length()I

    move-result v0

    const/4 v1, 0x1

    if-ne v0, v1, :cond_0

    const/4 v0, 0x0

    invoke-virtual {p0, v0}, Ljava/lang/String;->charAt(I)C

    move-result v2

    const/16 v3, 0x30

    if-lt v2, v3, :cond_0

    invoke-virtual {p0, v0}, Ljava/lang/String;->charAt(I)C

    move-result v2

    const/16 v4, 0x31

    if-gt v2, v4, :cond_0

    .line 145
    invoke-virtual {p0, v0}, Ljava/lang/String;->charAt(I)C

    move-result p0

    sub-int/2addr p0, v3

    int-to-byte p0, p0

    new-array v2, v1, [B

    aput-byte p0, v2, v0

    .line 146
    new-instance p0, Landroidx/camera/core/impl/utils/ExifAttribute;

    invoke-direct {p0, v1, v1, v2}, Landroidx/camera/core/impl/utils/ExifAttribute;-><init>(II[B)V

    return-object p0

    .line 148
    :cond_0
    sget-object v0, Landroidx/camera/core/impl/utils/ExifAttribute;->ASCII:Ljava/nio/charset/Charset;

    invoke-virtual {p0, v0}, Ljava/lang/String;->getBytes(Ljava/nio/charset/Charset;)[B

    move-result-object p0

    .line 149
    new-instance v0, Landroidx/camera/core/impl/utils/ExifAttribute;

    array-length v2, p0

    invoke-direct {v0, v1, v2, p0}, Landroidx/camera/core/impl/utils/ExifAttribute;-><init>(II[B)V

    return-object v0
.end method

.method public static createDouble(DLjava/nio/ByteOrder;)Landroidx/camera/core/impl/utils/ExifAttribute;
    .locals 2

    const/4 v0, 0x1

    .line 210
    new-array v0, v0, [D

    const/4 v1, 0x0

    aput-wide p0, v0, v1

    invoke-static {v0, p2}, Landroidx/camera/core/impl/utils/ExifAttribute;->createDouble([DLjava/nio/ByteOrder;)Landroidx/camera/core/impl/utils/ExifAttribute;

    move-result-object p0

    return-object p0
.end method

.method public static createDouble([DLjava/nio/ByteOrder;)Landroidx/camera/core/impl/utils/ExifAttribute;
    .locals 5

    .line 199
    sget-object v0, Landroidx/camera/core/impl/utils/ExifAttribute;->IFD_FORMAT_BYTES_PER_FORMAT:[I

    const/16 v1, 0xc

    aget v0, v0, v1

    array-length v2, p0

    mul-int/2addr v0, v2

    new-array v0, v0, [B

    invoke-static {v0}, Ljava/nio/ByteBuffer;->wrap([B)Ljava/nio/ByteBuffer;

    move-result-object v0

    .line 201
    invoke-virtual {v0, p1}, Ljava/nio/ByteBuffer;->order(Ljava/nio/ByteOrder;)Ljava/nio/ByteBuffer;

    .line 202
    array-length p1, p0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, p1, :cond_0

    aget-wide v3, p0, v2

    .line 203
    invoke-virtual {v0, v3, v4}, Ljava/nio/ByteBuffer;->putDouble(D)Ljava/nio/ByteBuffer;

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 205
    :cond_0
    new-instance p1, Landroidx/camera/core/impl/utils/ExifAttribute;

    array-length p0, p0

    invoke-virtual {v0}, Ljava/nio/ByteBuffer;->array()[B

    move-result-object v0

    invoke-direct {p1, v1, p0, v0}, Landroidx/camera/core/impl/utils/ExifAttribute;-><init>(II[B)V

    return-object p1
.end method

.method public static createSLong(ILjava/nio/ByteOrder;)Landroidx/camera/core/impl/utils/ExifAttribute;
    .locals 0

    .line 138
    filled-new-array {p0}, [I

    move-result-object p0

    invoke-static {p0, p1}, Landroidx/camera/core/impl/utils/ExifAttribute;->createSLong([ILjava/nio/ByteOrder;)Landroidx/camera/core/impl/utils/ExifAttribute;

    move-result-object p0

    return-object p0
.end method

.method public static createSLong([ILjava/nio/ByteOrder;)Landroidx/camera/core/impl/utils/ExifAttribute;
    .locals 4

    .line 127
    sget-object v0, Landroidx/camera/core/impl/utils/ExifAttribute;->IFD_FORMAT_BYTES_PER_FORMAT:[I

    const/16 v1, 0x9

    aget v0, v0, v1

    array-length v2, p0

    mul-int/2addr v0, v2

    new-array v0, v0, [B

    invoke-static {v0}, Ljava/nio/ByteBuffer;->wrap([B)Ljava/nio/ByteBuffer;

    move-result-object v0

    .line 129
    invoke-virtual {v0, p1}, Ljava/nio/ByteBuffer;->order(Ljava/nio/ByteOrder;)Ljava/nio/ByteBuffer;

    .line 130
    array-length p1, p0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, p1, :cond_0

    aget v3, p0, v2

    .line 131
    invoke-virtual {v0, v3}, Ljava/nio/ByteBuffer;->putInt(I)Ljava/nio/ByteBuffer;

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 133
    :cond_0
    new-instance p1, Landroidx/camera/core/impl/utils/ExifAttribute;

    array-length p0, p0

    invoke-virtual {v0}, Ljava/nio/ByteBuffer;->array()[B

    move-result-object v0

    invoke-direct {p1, v1, p0, v0}, Landroidx/camera/core/impl/utils/ExifAttribute;-><init>(II[B)V

    return-object p1
.end method

.method public static createSRational(Landroidx/camera/core/impl/utils/LongRational;Ljava/nio/ByteOrder;)Landroidx/camera/core/impl/utils/ExifAttribute;
    .locals 2

    const/4 v0, 0x1

    .line 193
    new-array v0, v0, [Landroidx/camera/core/impl/utils/LongRational;

    const/4 v1, 0x0

    aput-object p0, v0, v1

    invoke-static {v0, p1}, Landroidx/camera/core/impl/utils/ExifAttribute;->createSRational([Landroidx/camera/core/impl/utils/LongRational;Ljava/nio/ByteOrder;)Landroidx/camera/core/impl/utils/ExifAttribute;

    move-result-object p0

    return-object p0
.end method

.method public static createSRational([Landroidx/camera/core/impl/utils/LongRational;Ljava/nio/ByteOrder;)Landroidx/camera/core/impl/utils/ExifAttribute;
    .locals 6

    .line 180
    sget-object v0, Landroidx/camera/core/impl/utils/ExifAttribute;->IFD_FORMAT_BYTES_PER_FORMAT:[I

    const/16 v1, 0xa

    aget v0, v0, v1

    array-length v2, p0

    mul-int/2addr v0, v2

    new-array v0, v0, [B

    invoke-static {v0}, Ljava/nio/ByteBuffer;->wrap([B)Ljava/nio/ByteBuffer;

    move-result-object v0

    .line 182
    invoke-virtual {v0, p1}, Ljava/nio/ByteBuffer;->order(Ljava/nio/ByteOrder;)Ljava/nio/ByteBuffer;

    .line 183
    array-length p1, p0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, p1, :cond_0

    aget-object v3, p0, v2

    .line 184
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/LongRational;->getNumerator()J

    move-result-wide v4

    long-to-int v4, v4

    invoke-virtual {v0, v4}, Ljava/nio/ByteBuffer;->putInt(I)Ljava/nio/ByteBuffer;

    .line 185
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/LongRational;->getDenominator()J

    move-result-wide v3

    long-to-int v3, v3

    invoke-virtual {v0, v3}, Ljava/nio/ByteBuffer;->putInt(I)Ljava/nio/ByteBuffer;

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 187
    :cond_0
    new-instance p1, Landroidx/camera/core/impl/utils/ExifAttribute;

    array-length p0, p0

    invoke-virtual {v0}, Ljava/nio/ByteBuffer;->array()[B

    move-result-object v0

    invoke-direct {p1, v1, p0, v0}, Landroidx/camera/core/impl/utils/ExifAttribute;-><init>(II[B)V

    return-object p1
.end method

.method public static createString(Ljava/lang/String;)Landroidx/camera/core/impl/utils/ExifAttribute;
    .locals 3

    .line 154
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v0, p0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p0

    const/4 v0, 0x0

    invoke-virtual {p0, v0}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p0

    sget-object v0, Landroidx/camera/core/impl/utils/ExifAttribute;->ASCII:Ljava/nio/charset/Charset;

    invoke-virtual {p0, v0}, Ljava/lang/String;->getBytes(Ljava/nio/charset/Charset;)[B

    move-result-object p0

    .line 155
    new-instance v0, Landroidx/camera/core/impl/utils/ExifAttribute;

    const/4 v1, 0x2

    array-length v2, p0

    invoke-direct {v0, v1, v2, p0}, Landroidx/camera/core/impl/utils/ExifAttribute;-><init>(II[B)V

    return-object v0
.end method

.method public static createULong(JLjava/nio/ByteOrder;)Landroidx/camera/core/impl/utils/ExifAttribute;
    .locals 2

    const/4 v0, 0x1

    .line 122
    new-array v0, v0, [J

    const/4 v1, 0x0

    aput-wide p0, v0, v1

    invoke-static {v0, p2}, Landroidx/camera/core/impl/utils/ExifAttribute;->createULong([JLjava/nio/ByteOrder;)Landroidx/camera/core/impl/utils/ExifAttribute;

    move-result-object p0

    return-object p0
.end method

.method public static createULong([JLjava/nio/ByteOrder;)Landroidx/camera/core/impl/utils/ExifAttribute;
    .locals 5

    .line 111
    sget-object v0, Landroidx/camera/core/impl/utils/ExifAttribute;->IFD_FORMAT_BYTES_PER_FORMAT:[I

    const/4 v1, 0x4

    aget v0, v0, v1

    array-length v2, p0

    mul-int/2addr v0, v2

    new-array v0, v0, [B

    invoke-static {v0}, Ljava/nio/ByteBuffer;->wrap([B)Ljava/nio/ByteBuffer;

    move-result-object v0

    .line 113
    invoke-virtual {v0, p1}, Ljava/nio/ByteBuffer;->order(Ljava/nio/ByteOrder;)Ljava/nio/ByteBuffer;

    .line 114
    array-length p1, p0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, p1, :cond_0

    aget-wide v3, p0, v2

    long-to-int v3, v3

    .line 115
    invoke-virtual {v0, v3}, Ljava/nio/ByteBuffer;->putInt(I)Ljava/nio/ByteBuffer;

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 117
    :cond_0
    new-instance p1, Landroidx/camera/core/impl/utils/ExifAttribute;

    array-length p0, p0

    invoke-virtual {v0}, Ljava/nio/ByteBuffer;->array()[B

    move-result-object v0

    invoke-direct {p1, v1, p0, v0}, Landroidx/camera/core/impl/utils/ExifAttribute;-><init>(II[B)V

    return-object p1
.end method

.method public static createURational(Landroidx/camera/core/impl/utils/LongRational;Ljava/nio/ByteOrder;)Landroidx/camera/core/impl/utils/ExifAttribute;
    .locals 2

    const/4 v0, 0x1

    .line 174
    new-array v0, v0, [Landroidx/camera/core/impl/utils/LongRational;

    const/4 v1, 0x0

    aput-object p0, v0, v1

    invoke-static {v0, p1}, Landroidx/camera/core/impl/utils/ExifAttribute;->createURational([Landroidx/camera/core/impl/utils/LongRational;Ljava/nio/ByteOrder;)Landroidx/camera/core/impl/utils/ExifAttribute;

    move-result-object p0

    return-object p0
.end method

.method public static createURational([Landroidx/camera/core/impl/utils/LongRational;Ljava/nio/ByteOrder;)Landroidx/camera/core/impl/utils/ExifAttribute;
    .locals 6

    .line 161
    sget-object v0, Landroidx/camera/core/impl/utils/ExifAttribute;->IFD_FORMAT_BYTES_PER_FORMAT:[I

    const/4 v1, 0x5

    aget v0, v0, v1

    array-length v2, p0

    mul-int/2addr v0, v2

    new-array v0, v0, [B

    invoke-static {v0}, Ljava/nio/ByteBuffer;->wrap([B)Ljava/nio/ByteBuffer;

    move-result-object v0

    .line 163
    invoke-virtual {v0, p1}, Ljava/nio/ByteBuffer;->order(Ljava/nio/ByteOrder;)Ljava/nio/ByteBuffer;

    .line 164
    array-length p1, p0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, p1, :cond_0

    aget-object v3, p0, v2

    .line 165
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/LongRational;->getNumerator()J

    move-result-wide v4

    long-to-int v4, v4

    invoke-virtual {v0, v4}, Ljava/nio/ByteBuffer;->putInt(I)Ljava/nio/ByteBuffer;

    .line 166
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/LongRational;->getDenominator()J

    move-result-wide v3

    long-to-int v3, v3

    invoke-virtual {v0, v3}, Ljava/nio/ByteBuffer;->putInt(I)Ljava/nio/ByteBuffer;

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 168
    :cond_0
    new-instance p1, Landroidx/camera/core/impl/utils/ExifAttribute;

    array-length p0, p0

    invoke-virtual {v0}, Ljava/nio/ByteBuffer;->array()[B

    move-result-object v0

    invoke-direct {p1, v1, p0, v0}, Landroidx/camera/core/impl/utils/ExifAttribute;-><init>(II[B)V

    return-object p1
.end method

.method public static createUShort(ILjava/nio/ByteOrder;)Landroidx/camera/core/impl/utils/ExifAttribute;
    .locals 0

    .line 106
    filled-new-array {p0}, [I

    move-result-object p0

    invoke-static {p0, p1}, Landroidx/camera/core/impl/utils/ExifAttribute;->createUShort([ILjava/nio/ByteOrder;)Landroidx/camera/core/impl/utils/ExifAttribute;

    move-result-object p0

    return-object p0
.end method

.method public static createUShort([ILjava/nio/ByteOrder;)Landroidx/camera/core/impl/utils/ExifAttribute;
    .locals 4

    .line 95
    sget-object v0, Landroidx/camera/core/impl/utils/ExifAttribute;->IFD_FORMAT_BYTES_PER_FORMAT:[I

    const/4 v1, 0x3

    aget v0, v0, v1

    array-length v2, p0

    mul-int/2addr v0, v2

    new-array v0, v0, [B

    invoke-static {v0}, Ljava/nio/ByteBuffer;->wrap([B)Ljava/nio/ByteBuffer;

    move-result-object v0

    .line 97
    invoke-virtual {v0, p1}, Ljava/nio/ByteBuffer;->order(Ljava/nio/ByteOrder;)Ljava/nio/ByteBuffer;

    .line 98
    array-length p1, p0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, p1, :cond_0

    aget v3, p0, v2

    int-to-short v3, v3

    .line 99
    invoke-virtual {v0, v3}, Ljava/nio/ByteBuffer;->putShort(S)Ljava/nio/ByteBuffer;

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 101
    :cond_0
    new-instance p1, Landroidx/camera/core/impl/utils/ExifAttribute;

    array-length p0, p0

    invoke-virtual {v0}, Ljava/nio/ByteBuffer;->array()[B

    move-result-object v0

    invoke-direct {p1, v1, p0, v0}, Landroidx/camera/core/impl/utils/ExifAttribute;-><init>(II[B)V

    return-object p1
.end method


# virtual methods
.method public getDoubleValue(Ljava/nio/ByteOrder;)D
    .locals 4

    .line 342
    invoke-virtual {p0, p1}, Landroidx/camera/core/impl/utils/ExifAttribute;->getValue(Ljava/nio/ByteOrder;)Ljava/lang/Object;

    move-result-object p1

    if-eqz p1, :cond_9

    .line 346
    instance-of v0, p1, Ljava/lang/String;

    if-eqz v0, :cond_0

    .line 347
    check-cast p1, Ljava/lang/String;

    invoke-static {p1}, Ljava/lang/Double;->parseDouble(Ljava/lang/String;)D

    move-result-wide v0

    return-wide v0

    .line 349
    :cond_0
    instance-of v0, p1, [J

    const/4 v1, 0x0

    const-string v2, "There are more than one component"

    const/4 v3, 0x1

    if-eqz v0, :cond_2

    .line 350
    check-cast p1, [J

    .line 351
    array-length v0, p1

    if-ne v0, v3, :cond_1

    .line 352
    aget-wide v0, p1, v1

    long-to-double v0, v0

    return-wide v0

    .line 354
    :cond_1
    new-instance p1, Ljava/lang/NumberFormatException;

    invoke-direct {p1, v2}, Ljava/lang/NumberFormatException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 356
    :cond_2
    instance-of v0, p1, [I

    if-eqz v0, :cond_4

    .line 357
    check-cast p1, [I

    .line 358
    array-length v0, p1

    if-ne v0, v3, :cond_3

    .line 359
    aget p1, p1, v1

    int-to-double v0, p1

    return-wide v0

    .line 361
    :cond_3
    new-instance p1, Ljava/lang/NumberFormatException;

    invoke-direct {p1, v2}, Ljava/lang/NumberFormatException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 363
    :cond_4
    instance-of v0, p1, [D

    if-eqz v0, :cond_6

    .line 364
    check-cast p1, [D

    .line 365
    array-length v0, p1

    if-ne v0, v3, :cond_5

    .line 366
    aget-wide v0, p1, v1

    return-wide v0

    .line 368
    :cond_5
    new-instance p1, Ljava/lang/NumberFormatException;

    invoke-direct {p1, v2}, Ljava/lang/NumberFormatException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 370
    :cond_6
    instance-of v0, p1, [Landroidx/camera/core/impl/utils/LongRational;

    if-eqz v0, :cond_8

    .line 371
    check-cast p1, [Landroidx/camera/core/impl/utils/LongRational;

    .line 372
    array-length v0, p1

    if-ne v0, v3, :cond_7

    .line 373
    aget-object p1, p1, v1

    invoke-virtual {p1}, Landroidx/camera/core/impl/utils/LongRational;->toDouble()D

    move-result-wide v0

    return-wide v0

    .line 375
    :cond_7
    new-instance p1, Ljava/lang/NumberFormatException;

    invoke-direct {p1, v2}, Ljava/lang/NumberFormatException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 377
    :cond_8
    new-instance p1, Ljava/lang/NumberFormatException;

    const-string v0, "Couldn\'t find a double value"

    invoke-direct {p1, v0}, Ljava/lang/NumberFormatException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 344
    :cond_9
    new-instance p1, Ljava/lang/NumberFormatException;

    const-string v0, "NULL can\'t be converted to a double value"

    invoke-direct {p1, v0}, Ljava/lang/NumberFormatException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public getIntValue(Ljava/nio/ByteOrder;)I
    .locals 4

    .line 381
    invoke-virtual {p0, p1}, Landroidx/camera/core/impl/utils/ExifAttribute;->getValue(Ljava/nio/ByteOrder;)Ljava/lang/Object;

    move-result-object p1

    if-eqz p1, :cond_5

    .line 385
    instance-of v0, p1, Ljava/lang/String;

    if-eqz v0, :cond_0

    .line 386
    check-cast p1, Ljava/lang/String;

    invoke-static {p1}, Ljava/lang/Integer;->parseInt(Ljava/lang/String;)I

    move-result p1

    return p1

    .line 388
    :cond_0
    instance-of v0, p1, [J

    const/4 v1, 0x0

    const-string v2, "There are more than one component"

    const/4 v3, 0x1

    if-eqz v0, :cond_2

    .line 389
    check-cast p1, [J

    .line 390
    array-length v0, p1

    if-ne v0, v3, :cond_1

    .line 391
    aget-wide v0, p1, v1

    long-to-int p1, v0

    return p1

    .line 393
    :cond_1
    new-instance p1, Ljava/lang/NumberFormatException;

    invoke-direct {p1, v2}, Ljava/lang/NumberFormatException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 395
    :cond_2
    instance-of v0, p1, [I

    if-eqz v0, :cond_4

    .line 396
    check-cast p1, [I

    .line 397
    array-length v0, p1

    if-ne v0, v3, :cond_3

    .line 398
    aget p1, p1, v1

    return p1

    .line 400
    :cond_3
    new-instance p1, Ljava/lang/NumberFormatException;

    invoke-direct {p1, v2}, Ljava/lang/NumberFormatException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 402
    :cond_4
    new-instance p1, Ljava/lang/NumberFormatException;

    const-string v0, "Couldn\'t find a integer value"

    invoke-direct {p1, v0}, Ljava/lang/NumberFormatException;-><init>(Ljava/lang/String;)V

    throw p1

    .line 383
    :cond_5
    new-instance p1, Ljava/lang/NumberFormatException;

    const-string v0, "NULL can\'t be converted to a integer value"

    invoke-direct {p1, v0}, Ljava/lang/NumberFormatException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method public getStringValue(Ljava/nio/ByteOrder;)Ljava/lang/String;
    .locals 7

    .line 407
    invoke-virtual {p0, p1}, Landroidx/camera/core/impl/utils/ExifAttribute;->getValue(Ljava/nio/ByteOrder;)Ljava/lang/Object;

    move-result-object p1

    const/4 v0, 0x0

    if-nez p1, :cond_0

    return-object v0

    .line 411
    :cond_0
    instance-of v1, p1, Ljava/lang/String;

    if-eqz v1, :cond_1

    .line 412
    check-cast p1, Ljava/lang/String;

    return-object p1

    .line 415
    :cond_1
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    .line 416
    instance-of v2, p1, [J

    const-string v3, ","

    const/4 v4, 0x0

    if-eqz v2, :cond_4

    .line 417
    check-cast p1, [J

    .line 418
    :cond_2
    :goto_0
    array-length v0, p1

    if-ge v4, v0, :cond_3

    .line 419
    aget-wide v5, p1, v4

    invoke-virtual {v1, v5, v6}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    add-int/lit8 v4, v4, 0x1

    .line 420
    array-length v0, p1

    if-eq v4, v0, :cond_2

    .line 421
    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    goto :goto_0

    .line 424
    :cond_3
    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    return-object p1

    .line 426
    :cond_4
    instance-of v2, p1, [I

    if-eqz v2, :cond_7

    .line 427
    check-cast p1, [I

    .line 428
    :cond_5
    :goto_1
    array-length v0, p1

    if-ge v4, v0, :cond_6

    .line 429
    aget v0, p1, v4

    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    add-int/lit8 v4, v4, 0x1

    .line 430
    array-length v0, p1

    if-eq v4, v0, :cond_5

    .line 431
    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    goto :goto_1

    .line 434
    :cond_6
    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    return-object p1

    .line 436
    :cond_7
    instance-of v2, p1, [D

    if-eqz v2, :cond_a

    .line 437
    check-cast p1, [D

    .line 438
    :cond_8
    :goto_2
    array-length v0, p1

    if-ge v4, v0, :cond_9

    .line 439
    aget-wide v5, p1, v4

    invoke-virtual {v1, v5, v6}, Ljava/lang/StringBuilder;->append(D)Ljava/lang/StringBuilder;

    add-int/lit8 v4, v4, 0x1

    .line 440
    array-length v0, p1

    if-eq v4, v0, :cond_8

    .line 441
    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    goto :goto_2

    .line 444
    :cond_9
    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    return-object p1

    .line 446
    :cond_a
    instance-of v2, p1, [Landroidx/camera/core/impl/utils/LongRational;

    if-eqz v2, :cond_d

    .line 447
    check-cast p1, [Landroidx/camera/core/impl/utils/LongRational;

    .line 448
    :cond_b
    :goto_3
    array-length v0, p1

    if-ge v4, v0, :cond_c

    .line 449
    aget-object v0, p1, v4

    invoke-virtual {v0}, Landroidx/camera/core/impl/utils/LongRational;->getNumerator()J

    move-result-wide v5

    invoke-virtual {v1, v5, v6}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    const/16 v0, 0x2f

    .line 450
    invoke-virtual {v1, v0}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    .line 451
    aget-object v0, p1, v4

    invoke-virtual {v0}, Landroidx/camera/core/impl/utils/LongRational;->getDenominator()J

    move-result-wide v5

    invoke-virtual {v1, v5, v6}, Ljava/lang/StringBuilder;->append(J)Ljava/lang/StringBuilder;

    add-int/lit8 v4, v4, 0x1

    .line 452
    array-length v0, p1

    if-eq v4, v0, :cond_b

    .line 453
    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    goto :goto_3

    .line 456
    :cond_c
    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    return-object p1

    :cond_d
    return-object v0
.end method

.method getValue(Ljava/nio/ByteOrder;)Ljava/lang/Object;
    .locals 10

    .line 220
    const-string v0, "IOException occurred while closing InputStream"

    const-string v1, "ExifAttribute"

    const/4 v2, 0x0

    .line 222
    :try_start_0
    new-instance v3, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;

    iget-object v4, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->bytes:[B

    invoke-direct {v3, v4}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;-><init>([B)V
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_d
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 223
    :try_start_1
    invoke-virtual {v3, p1}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->setByteOrder(Ljava/nio/ByteOrder;)V

    .line 224
    iget p1, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->format:I
    :try_end_1
    .catch Ljava/io/IOException; {:try_start_1 .. :try_end_1} :catch_c
    .catchall {:try_start_1 .. :try_end_1} :catchall_1

    const/4 v4, 0x0

    packed-switch p1, :pswitch_data_0

    .line 333
    :try_start_2
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->close()V
    :try_end_2
    .catch Ljava/io/IOException; {:try_start_2 .. :try_end_2} :catch_b

    goto/16 :goto_18

    .line 318
    :pswitch_0
    :try_start_3
    iget p1, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->numberOfComponents:I

    new-array p1, p1, [D

    .line 319
    :goto_0
    iget v5, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->numberOfComponents:I

    if-ge v4, v5, :cond_0

    .line 320
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->readDouble()D

    move-result-wide v5

    aput-wide v5, p1, v4
    :try_end_3
    .catch Ljava/io/IOException; {:try_start_3 .. :try_end_3} :catch_c
    .catchall {:try_start_3 .. :try_end_3} :catchall_1

    add-int/lit8 v4, v4, 0x1

    goto :goto_0

    .line 333
    :cond_0
    :try_start_4
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->close()V
    :try_end_4
    .catch Ljava/io/IOException; {:try_start_4 .. :try_end_4} :catch_0

    goto :goto_1

    :catch_0
    move-exception v2

    .line 335
    invoke-static {v1, v0, v2}, Landroidx/camera/core/Logger;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_1
    return-object p1

    .line 311
    :pswitch_1
    :try_start_5
    iget p1, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->numberOfComponents:I

    new-array p1, p1, [D

    .line 312
    :goto_2
    iget v5, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->numberOfComponents:I

    if-ge v4, v5, :cond_1

    .line 313
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->readFloat()F

    move-result v5

    float-to-double v5, v5

    aput-wide v5, p1, v4
    :try_end_5
    .catch Ljava/io/IOException; {:try_start_5 .. :try_end_5} :catch_c
    .catchall {:try_start_5 .. :try_end_5} :catchall_1

    add-int/lit8 v4, v4, 0x1

    goto :goto_2

    .line 333
    :cond_1
    :try_start_6
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->close()V
    :try_end_6
    .catch Ljava/io/IOException; {:try_start_6 .. :try_end_6} :catch_1

    goto :goto_3

    :catch_1
    move-exception v2

    .line 335
    invoke-static {v1, v0, v2}, Landroidx/camera/core/Logger;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_3
    return-object p1

    .line 302
    :pswitch_2
    :try_start_7
    iget p1, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->numberOfComponents:I

    new-array p1, p1, [Landroidx/camera/core/impl/utils/LongRational;

    .line 303
    :goto_4
    iget v5, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->numberOfComponents:I

    if-ge v4, v5, :cond_2

    .line 304
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->readInt()I

    move-result v5

    int-to-long v5, v5

    .line 305
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->readInt()I

    move-result v7

    int-to-long v7, v7

    .line 306
    new-instance v9, Landroidx/camera/core/impl/utils/LongRational;

    invoke-direct {v9, v5, v6, v7, v8}, Landroidx/camera/core/impl/utils/LongRational;-><init>(JJ)V

    aput-object v9, p1, v4
    :try_end_7
    .catch Ljava/io/IOException; {:try_start_7 .. :try_end_7} :catch_c
    .catchall {:try_start_7 .. :try_end_7} :catchall_1

    add-int/lit8 v4, v4, 0x1

    goto :goto_4

    .line 333
    :cond_2
    :try_start_8
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->close()V
    :try_end_8
    .catch Ljava/io/IOException; {:try_start_8 .. :try_end_8} :catch_2

    goto :goto_5

    :catch_2
    move-exception v2

    .line 335
    invoke-static {v1, v0, v2}, Landroidx/camera/core/Logger;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_5
    return-object p1

    .line 295
    :pswitch_3
    :try_start_9
    iget p1, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->numberOfComponents:I

    new-array p1, p1, [I

    .line 296
    :goto_6
    iget v5, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->numberOfComponents:I

    if-ge v4, v5, :cond_3

    .line 297
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->readInt()I

    move-result v5

    aput v5, p1, v4
    :try_end_9
    .catch Ljava/io/IOException; {:try_start_9 .. :try_end_9} :catch_c
    .catchall {:try_start_9 .. :try_end_9} :catchall_1

    add-int/lit8 v4, v4, 0x1

    goto :goto_6

    .line 333
    :cond_3
    :try_start_a
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->close()V
    :try_end_a
    .catch Ljava/io/IOException; {:try_start_a .. :try_end_a} :catch_3

    goto :goto_7

    :catch_3
    move-exception v2

    .line 335
    invoke-static {v1, v0, v2}, Landroidx/camera/core/Logger;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_7
    return-object p1

    .line 288
    :pswitch_4
    :try_start_b
    iget p1, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->numberOfComponents:I

    new-array p1, p1, [I

    .line 289
    :goto_8
    iget v5, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->numberOfComponents:I

    if-ge v4, v5, :cond_4

    .line 290
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->readShort()S

    move-result v5

    aput v5, p1, v4
    :try_end_b
    .catch Ljava/io/IOException; {:try_start_b .. :try_end_b} :catch_c
    .catchall {:try_start_b .. :try_end_b} :catchall_1

    add-int/lit8 v4, v4, 0x1

    goto :goto_8

    .line 333
    :cond_4
    :try_start_c
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->close()V
    :try_end_c
    .catch Ljava/io/IOException; {:try_start_c .. :try_end_c} :catch_4

    goto :goto_9

    :catch_4
    move-exception v2

    .line 335
    invoke-static {v1, v0, v2}, Landroidx/camera/core/Logger;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_9
    return-object p1

    .line 279
    :pswitch_5
    :try_start_d
    iget p1, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->numberOfComponents:I

    new-array p1, p1, [Landroidx/camera/core/impl/utils/LongRational;

    .line 280
    :goto_a
    iget v5, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->numberOfComponents:I

    if-ge v4, v5, :cond_5

    .line 281
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->readUnsignedInt()J

    move-result-wide v5

    .line 282
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->readUnsignedInt()J

    move-result-wide v7

    .line 283
    new-instance v9, Landroidx/camera/core/impl/utils/LongRational;

    invoke-direct {v9, v5, v6, v7, v8}, Landroidx/camera/core/impl/utils/LongRational;-><init>(JJ)V

    aput-object v9, p1, v4
    :try_end_d
    .catch Ljava/io/IOException; {:try_start_d .. :try_end_d} :catch_c
    .catchall {:try_start_d .. :try_end_d} :catchall_1

    add-int/lit8 v4, v4, 0x1

    goto :goto_a

    .line 333
    :cond_5
    :try_start_e
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->close()V
    :try_end_e
    .catch Ljava/io/IOException; {:try_start_e .. :try_end_e} :catch_5

    goto :goto_b

    :catch_5
    move-exception v2

    .line 335
    invoke-static {v1, v0, v2}, Landroidx/camera/core/Logger;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_b
    return-object p1

    .line 272
    :pswitch_6
    :try_start_f
    iget p1, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->numberOfComponents:I

    new-array p1, p1, [J

    .line 273
    :goto_c
    iget v5, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->numberOfComponents:I

    if-ge v4, v5, :cond_6

    .line 274
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->readUnsignedInt()J

    move-result-wide v5

    aput-wide v5, p1, v4
    :try_end_f
    .catch Ljava/io/IOException; {:try_start_f .. :try_end_f} :catch_c
    .catchall {:try_start_f .. :try_end_f} :catchall_1

    add-int/lit8 v4, v4, 0x1

    goto :goto_c

    .line 333
    :cond_6
    :try_start_10
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->close()V
    :try_end_10
    .catch Ljava/io/IOException; {:try_start_10 .. :try_end_10} :catch_6

    goto :goto_d

    :catch_6
    move-exception v2

    .line 335
    invoke-static {v1, v0, v2}, Landroidx/camera/core/Logger;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_d
    return-object p1

    .line 265
    :pswitch_7
    :try_start_11
    iget p1, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->numberOfComponents:I

    new-array p1, p1, [I

    .line 266
    :goto_e
    iget v5, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->numberOfComponents:I

    if-ge v4, v5, :cond_7

    .line 267
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->readUnsignedShort()I

    move-result v5

    aput v5, p1, v4
    :try_end_11
    .catch Ljava/io/IOException; {:try_start_11 .. :try_end_11} :catch_c
    .catchall {:try_start_11 .. :try_end_11} :catchall_1

    add-int/lit8 v4, v4, 0x1

    goto :goto_e

    .line 333
    :cond_7
    :try_start_12
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->close()V
    :try_end_12
    .catch Ljava/io/IOException; {:try_start_12 .. :try_end_12} :catch_7

    goto :goto_f

    :catch_7
    move-exception v2

    .line 335
    invoke-static {v1, v0, v2}, Landroidx/camera/core/Logger;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_f
    return-object p1

    .line 236
    :pswitch_8
    :try_start_13
    iget p1, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->numberOfComponents:I

    sget-object v5, Landroidx/camera/core/impl/utils/ExifAttribute;->EXIF_ASCII_PREFIX:[B

    array-length v5, v5

    if-lt p1, v5, :cond_a

    move p1, v4

    .line 238
    :goto_10
    sget-object v5, Landroidx/camera/core/impl/utils/ExifAttribute;->EXIF_ASCII_PREFIX:[B

    array-length v6, v5

    if-ge p1, v6, :cond_9

    .line 239
    iget-object v6, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->bytes:[B

    aget-byte v6, v6, p1

    aget-byte v5, v5, p1

    if-eq v6, v5, :cond_8

    goto :goto_11

    :cond_8
    add-int/lit8 p1, p1, 0x1

    goto :goto_10

    .line 245
    :cond_9
    array-length v4, v5

    .line 249
    :cond_a
    :goto_11
    new-instance p1, Ljava/lang/StringBuilder;

    invoke-direct {p1}, Ljava/lang/StringBuilder;-><init>()V

    .line 250
    :goto_12
    iget v5, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->numberOfComponents:I

    if-ge v4, v5, :cond_d

    .line 251
    iget-object v5, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->bytes:[B

    aget-byte v5, v5, v4

    if-nez v5, :cond_b

    goto :goto_14

    :cond_b
    const/16 v6, 0x20

    if-lt v5, v6, :cond_c

    int-to-char v5, v5

    .line 256
    invoke-virtual {p1, v5}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    goto :goto_13

    :cond_c
    const/16 v5, 0x3f

    .line 258
    invoke-virtual {p1, v5}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    :goto_13
    add-int/lit8 v4, v4, 0x1

    goto :goto_12

    .line 262
    :cond_d
    :goto_14
    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1
    :try_end_13
    .catch Ljava/io/IOException; {:try_start_13 .. :try_end_13} :catch_c
    .catchall {:try_start_13 .. :try_end_13} :catchall_1

    .line 333
    :try_start_14
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->close()V
    :try_end_14
    .catch Ljava/io/IOException; {:try_start_14 .. :try_end_14} :catch_8

    goto :goto_15

    :catch_8
    move-exception v2

    .line 335
    invoke-static {v1, v0, v2}, Landroidx/camera/core/Logger;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_15
    return-object p1

    .line 228
    :pswitch_9
    :try_start_15
    iget-object p1, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->bytes:[B

    array-length v5, p1

    const/4 v6, 0x1

    if-ne v5, v6, :cond_e

    aget-byte p1, p1, v4

    if-ltz p1, :cond_e

    if-gt p1, v6, :cond_e

    .line 229
    new-instance p1, Ljava/lang/String;

    iget-object v5, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->bytes:[B

    aget-byte v5, v5, v4

    add-int/lit8 v5, v5, 0x30

    int-to-char v5, v5

    new-array v6, v6, [C

    aput-char v5, v6, v4

    invoke-direct {p1, v6}, Ljava/lang/String;-><init>([C)V
    :try_end_15
    .catch Ljava/io/IOException; {:try_start_15 .. :try_end_15} :catch_c
    .catchall {:try_start_15 .. :try_end_15} :catchall_1

    .line 333
    :try_start_16
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->close()V
    :try_end_16
    .catch Ljava/io/IOException; {:try_start_16 .. :try_end_16} :catch_9

    goto :goto_16

    :catch_9
    move-exception v2

    .line 335
    invoke-static {v1, v0, v2}, Landroidx/camera/core/Logger;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_16
    return-object p1

    .line 231
    :cond_e
    :try_start_17
    new-instance p1, Ljava/lang/String;

    iget-object v4, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->bytes:[B

    sget-object v5, Landroidx/camera/core/impl/utils/ExifAttribute;->ASCII:Ljava/nio/charset/Charset;

    invoke-direct {p1, v4, v5}, Ljava/lang/String;-><init>([BLjava/nio/charset/Charset;)V
    :try_end_17
    .catch Ljava/io/IOException; {:try_start_17 .. :try_end_17} :catch_c
    .catchall {:try_start_17 .. :try_end_17} :catchall_1

    .line 333
    :try_start_18
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->close()V
    :try_end_18
    .catch Ljava/io/IOException; {:try_start_18 .. :try_end_18} :catch_a

    goto :goto_17

    :catch_a
    move-exception v2

    .line 335
    invoke-static {v1, v0, v2}, Landroidx/camera/core/Logger;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_17
    return-object p1

    :catch_b
    move-exception p1

    invoke-static {v1, v0, p1}, Landroidx/camera/core/Logger;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_18
    return-object v2

    :catch_c
    move-exception p1

    goto :goto_19

    :catchall_0
    move-exception p1

    goto :goto_1b

    :catch_d
    move-exception p1

    move-object v3, v2

    .line 328
    :goto_19
    :try_start_19
    const-string v4, "IOException occurred during reading a value"

    invoke-static {v1, v4, p1}, Landroidx/camera/core/Logger;->w(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V
    :try_end_19
    .catchall {:try_start_19 .. :try_end_19} :catchall_1

    if-eqz v3, :cond_f

    .line 333
    :try_start_1a
    invoke-virtual {v3}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->close()V
    :try_end_1a
    .catch Ljava/io/IOException; {:try_start_1a .. :try_end_1a} :catch_e

    goto :goto_1a

    :catch_e
    move-exception p1

    .line 335
    invoke-static {v1, v0, p1}, Landroidx/camera/core/Logger;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :cond_f
    :goto_1a
    return-object v2

    :catchall_1
    move-exception p1

    move-object v2, v3

    :goto_1b
    if-eqz v2, :cond_10

    .line 333
    :try_start_1b
    invoke-virtual {v2}, Landroidx/camera/core/impl/utils/ByteOrderedDataInputStream;->close()V
    :try_end_1b
    .catch Ljava/io/IOException; {:try_start_1b .. :try_end_1b} :catch_f

    goto :goto_1c

    :catch_f
    move-exception v2

    .line 335
    invoke-static {v1, v0, v2}, Landroidx/camera/core/Logger;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 338
    :cond_10
    :goto_1c
    throw p1

    :pswitch_data_0
    .packed-switch 0x1
        :pswitch_9
        :pswitch_8
        :pswitch_7
        :pswitch_6
        :pswitch_5
        :pswitch_9
        :pswitch_8
        :pswitch_4
        :pswitch_3
        :pswitch_2
        :pswitch_1
        :pswitch_0
    .end packed-switch
.end method

.method public size()I
    .locals 2

    .line 462
    sget-object v0, Landroidx/camera/core/impl/utils/ExifAttribute;->IFD_FORMAT_BYTES_PER_FORMAT:[I

    iget v1, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->format:I

    aget v0, v0, v1

    iget v1, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->numberOfComponents:I

    mul-int/2addr v0, v1

    return v0
.end method

.method public toString()Ljava/lang/String;
    .locals 3

    .line 215
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "("

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    sget-object v1, Landroidx/camera/core/impl/utils/ExifAttribute;->IFD_FORMAT_NAMES:[Ljava/lang/String;

    iget v2, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->format:I

    aget-object v1, v1, v2

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ", data length:"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    iget-object v1, p0, Landroidx/camera/core/impl/utils/ExifAttribute;->bytes:[B

    array-length v1, v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(I)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, ")"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
