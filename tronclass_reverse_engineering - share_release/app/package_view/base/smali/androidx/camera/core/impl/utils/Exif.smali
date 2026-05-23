.class public final Landroidx/camera/core/impl/utils/Exif;
.super Ljava/lang/Object;
.source "Exif.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/camera/core/impl/utils/Exif$Speed;
    }
.end annotation


# static fields
.field private static final ALL_EXIF_TAGS:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field

.field private static final DATETIME_FORMAT:Ljava/lang/ThreadLocal;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/lang/ThreadLocal<",
            "Ljava/text/SimpleDateFormat;",
            ">;"
        }
    .end annotation
.end field

.field private static final DATE_FORMAT:Ljava/lang/ThreadLocal;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/lang/ThreadLocal<",
            "Ljava/text/SimpleDateFormat;",
            ">;"
        }
    .end annotation
.end field

.field private static final DO_NOT_COPY_EXIF_TAGS:Ljava/util/List;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field

.field public static final INVALID_TIMESTAMP:J = -0x1L

.field private static final KILOMETERS_PER_HOUR:Ljava/lang/String; = "K"

.field private static final KNOTS:Ljava/lang/String; = "N"

.field private static final MILES_PER_HOUR:Ljava/lang/String; = "M"

.field private static final TAG:Ljava/lang/String; = "Exif"

.field private static final TIME_FORMAT:Ljava/lang/ThreadLocal;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/lang/ThreadLocal<",
            "Ljava/text/SimpleDateFormat;",
            ">;"
        }
    .end annotation
.end field


# instance fields
.field private final mExifInterface:Landroidx/exifinterface/media/ExifInterface;

.field private mRemoveTimestamp:Z


# direct methods
.method static constructor <clinit>()V
    .locals 3

    .line 56
    new-instance v0, Landroidx/camera/core/impl/utils/Exif$1;

    invoke-direct {v0}, Landroidx/camera/core/impl/utils/Exif$1;-><init>()V

    sput-object v0, Landroidx/camera/core/impl/utils/Exif;->DATE_FORMAT:Ljava/lang/ThreadLocal;

    .line 63
    new-instance v0, Landroidx/camera/core/impl/utils/Exif$2;

    invoke-direct {v0}, Landroidx/camera/core/impl/utils/Exif$2;-><init>()V

    sput-object v0, Landroidx/camera/core/impl/utils/Exif;->TIME_FORMAT:Ljava/lang/ThreadLocal;

    .line 70
    new-instance v0, Landroidx/camera/core/impl/utils/Exif$3;

    invoke-direct {v0}, Landroidx/camera/core/impl/utils/Exif$3;-><init>()V

    sput-object v0, Landroidx/camera/core/impl/utils/Exif;->DATETIME_FORMAT:Ljava/lang/ThreadLocal;

    .line 83
    invoke-static {}, Landroidx/camera/core/impl/utils/Exif;->getAllExifTags()Ljava/util/List;

    move-result-object v0

    sput-object v0, Landroidx/camera/core/impl/utils/Exif;->ALL_EXIF_TAGS:Ljava/util/List;

    const/16 v0, 0xa

    .line 85
    new-array v0, v0, [Ljava/lang/String;

    const/4 v1, 0x0

    const-string v2, "ImageWidth"

    aput-object v2, v0, v1

    const/4 v1, 0x1

    const-string v2, "ImageLength"

    aput-object v2, v0, v1

    const/4 v1, 0x2

    const-string v2, "PixelXDimension"

    aput-object v2, v0, v1

    const/4 v1, 0x3

    const-string v2, "PixelYDimension"

    aput-object v2, v0, v1

    const/4 v1, 0x4

    const-string v2, "Compression"

    aput-object v2, v0, v1

    const/4 v1, 0x5

    const-string v2, "JPEGInterchangeFormat"

    aput-object v2, v0, v1

    const/4 v1, 0x6

    const-string v2, "JPEGInterchangeFormatLength"

    aput-object v2, v0, v1

    const/4 v1, 0x7

    const-string v2, "ThumbnailImageLength"

    aput-object v2, v0, v1

    const/16 v1, 0x8

    const-string v2, "ThumbnailImageWidth"

    aput-object v2, v0, v1

    const/16 v1, 0x9

    const-string v2, "ThumbnailOrientation"

    aput-object v2, v0, v1

    invoke-static {v0}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v0

    sput-object v0, Landroidx/camera/core/impl/utils/Exif;->DO_NOT_COPY_EXIF_TAGS:Ljava/util/List;

    return-void
.end method

.method private constructor <init>(Landroidx/exifinterface/media/ExifInterface;)V
    .locals 1

    .line 104
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    .line 102
    iput-boolean v0, p0, Landroidx/camera/core/impl/utils/Exif;->mRemoveTimestamp:Z

    .line 105
    iput-object p1, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    return-void
.end method

.method private attachLastModifiedTimestamp()V
    .locals 5

    .line 323
    invoke-static {}, Ljava/lang/System;->currentTimeMillis()J

    move-result-wide v0

    .line 324
    invoke-static {v0, v1}, Landroidx/camera/core/impl/utils/Exif;->convertToExifDateTime(J)Ljava/lang/String;

    move-result-object v2

    .line 326
    iget-object v3, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v4, "DateTime"

    invoke-virtual {v3, v4, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 329
    :try_start_0
    invoke-static {v2}, Landroidx/camera/core/impl/utils/Exif;->convertFromExifDateTime(Ljava/lang/String;)Ljava/util/Date;

    move-result-object v2

    invoke-virtual {v2}, Ljava/util/Date;->getTime()J

    move-result-wide v2

    sub-long/2addr v0, v2

    invoke-static {v0, v1}, Ljava/lang/Long;->toString(J)Ljava/lang/String;

    move-result-object v0

    .line 330
    iget-object v1, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v2, "SubSecTime"

    invoke-virtual {v1, v2, v0}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/text/ParseException; {:try_start_0 .. :try_end_0} :catch_0

    :catch_0
    return-void
.end method

.method private static convertFromExifDate(Ljava/lang/String;)Ljava/util/Date;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/text/ParseException;
        }
    .end annotation

    .line 164
    sget-object v0, Landroidx/camera/core/impl/utils/Exif;->DATE_FORMAT:Ljava/lang/ThreadLocal;

    invoke-virtual {v0}, Ljava/lang/ThreadLocal;->get()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/text/SimpleDateFormat;

    invoke-virtual {v0, p0}, Ljava/text/SimpleDateFormat;->parse(Ljava/lang/String;)Ljava/util/Date;

    move-result-object p0

    return-object p0
.end method

.method private static convertFromExifDateTime(Ljava/lang/String;)Ljava/util/Date;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/text/ParseException;
        }
    .end annotation

    .line 160
    sget-object v0, Landroidx/camera/core/impl/utils/Exif;->DATETIME_FORMAT:Ljava/lang/ThreadLocal;

    invoke-virtual {v0}, Ljava/lang/ThreadLocal;->get()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/text/SimpleDateFormat;

    invoke-virtual {v0, p0}, Ljava/text/SimpleDateFormat;->parse(Ljava/lang/String;)Ljava/util/Date;

    move-result-object p0

    return-object p0
.end method

.method private static convertFromExifTime(Ljava/lang/String;)Ljava/util/Date;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/text/ParseException;
        }
    .end annotation

    .line 168
    sget-object v0, Landroidx/camera/core/impl/utils/Exif;->TIME_FORMAT:Ljava/lang/ThreadLocal;

    invoke-virtual {v0}, Ljava/lang/ThreadLocal;->get()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/text/SimpleDateFormat;

    invoke-virtual {v0, p0}, Ljava/text/SimpleDateFormat;->parse(Ljava/lang/String;)Ljava/util/Date;

    move-result-object p0

    return-object p0
.end method

.method private static convertToExifDateTime(J)Ljava/lang/String;
    .locals 2

    .line 156
    sget-object v0, Landroidx/camera/core/impl/utils/Exif;->DATETIME_FORMAT:Ljava/lang/ThreadLocal;

    invoke-virtual {v0}, Ljava/lang/ThreadLocal;->get()Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/text/SimpleDateFormat;

    new-instance v1, Ljava/util/Date;

    invoke-direct {v1, p0, p1}, Ljava/util/Date;-><init>(J)V

    invoke-virtual {v0, v1}, Ljava/text/SimpleDateFormat;->format(Ljava/util/Date;)Ljava/lang/String;

    move-result-object p0

    return-object p0
.end method

.method public static createFromFile(Ljava/io/File;)Landroidx/camera/core/impl/utils/Exif;
    .locals 0
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 115
    invoke-virtual {p0}, Ljava/io/File;->toString()Ljava/lang/String;

    move-result-object p0

    invoke-static {p0}, Landroidx/camera/core/impl/utils/Exif;->createFromFileString(Ljava/lang/String;)Landroidx/camera/core/impl/utils/Exif;

    move-result-object p0

    return-object p0
.end method

.method public static createFromFileString(Ljava/lang/String;)Landroidx/camera/core/impl/utils/Exif;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 142
    new-instance v0, Landroidx/camera/core/impl/utils/Exif;

    new-instance v1, Landroidx/exifinterface/media/ExifInterface;

    invoke-direct {v1, p0}, Landroidx/exifinterface/media/ExifInterface;-><init>(Ljava/lang/String;)V

    invoke-direct {v0, v1}, Landroidx/camera/core/impl/utils/Exif;-><init>(Landroidx/exifinterface/media/ExifInterface;)V

    return-object v0
.end method

.method public static createFromImageProxy(Landroidx/camera/core/ImageProxy;)Landroidx/camera/core/impl/utils/Exif;
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 125
    invoke-interface {p0}, Landroidx/camera/core/ImageProxy;->getPlanes()[Landroidx/camera/core/ImageProxy$PlaneProxy;

    move-result-object p0

    const/4 v0, 0x0

    aget-object p0, p0, v0

    invoke-interface {p0}, Landroidx/camera/core/ImageProxy$PlaneProxy;->getBuffer()Ljava/nio/ByteBuffer;

    move-result-object p0

    .line 127
    invoke-virtual {p0}, Ljava/nio/ByteBuffer;->rewind()Ljava/nio/Buffer;

    .line 129
    invoke-virtual {p0}, Ljava/nio/ByteBuffer;->capacity()I

    move-result v0

    new-array v0, v0, [B

    .line 130
    invoke-virtual {p0, v0}, Ljava/nio/ByteBuffer;->get([B)Ljava/nio/ByteBuffer;

    .line 131
    new-instance p0, Ljava/io/ByteArrayInputStream;

    invoke-direct {p0, v0}, Ljava/io/ByteArrayInputStream;-><init>([B)V

    .line 132
    invoke-static {p0}, Landroidx/camera/core/impl/utils/Exif;->createFromInputStream(Ljava/io/InputStream;)Landroidx/camera/core/impl/utils/Exif;

    move-result-object p0

    return-object p0
.end method

.method public static createFromInputStream(Ljava/io/InputStream;)Landroidx/camera/core/impl/utils/Exif;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 152
    new-instance v0, Landroidx/camera/core/impl/utils/Exif;

    new-instance v1, Landroidx/exifinterface/media/ExifInterface;

    invoke-direct {v1, p0}, Landroidx/exifinterface/media/ExifInterface;-><init>(Ljava/io/InputStream;)V

    invoke-direct {v0, v1}, Landroidx/camera/core/impl/utils/Exif;-><init>(Landroidx/exifinterface/media/ExifInterface;)V

    return-object v0
.end method

.method public static getAllExifTags()Ljava/util/List;
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    const/16 v0, 0x99

    .line 728
    new-array v0, v0, [Ljava/lang/String;

    const/4 v1, 0x0

    const-string v2, "ImageWidth"

    aput-object v2, v0, v1

    const/4 v1, 0x1

    const-string v2, "ImageLength"

    aput-object v2, v0, v1

    const/4 v1, 0x2

    const-string v2, "BitsPerSample"

    aput-object v2, v0, v1

    const/4 v1, 0x3

    const-string v2, "Compression"

    aput-object v2, v0, v1

    const/4 v1, 0x4

    const-string v2, "PhotometricInterpretation"

    aput-object v2, v0, v1

    const/4 v1, 0x5

    const-string v2, "Orientation"

    aput-object v2, v0, v1

    const/4 v1, 0x6

    const-string v2, "SamplesPerPixel"

    aput-object v2, v0, v1

    const/4 v1, 0x7

    const-string v2, "PlanarConfiguration"

    aput-object v2, v0, v1

    const/16 v1, 0x8

    const-string v2, "YCbCrSubSampling"

    aput-object v2, v0, v1

    const/16 v1, 0x9

    const-string v2, "YCbCrPositioning"

    aput-object v2, v0, v1

    const/16 v1, 0xa

    const-string v2, "XResolution"

    aput-object v2, v0, v1

    const/16 v1, 0xb

    const-string v2, "YResolution"

    aput-object v2, v0, v1

    const/16 v1, 0xc

    const-string v2, "ResolutionUnit"

    aput-object v2, v0, v1

    const/16 v1, 0xd

    const-string v2, "StripOffsets"

    aput-object v2, v0, v1

    const/16 v1, 0xe

    const-string v2, "RowsPerStrip"

    aput-object v2, v0, v1

    const/16 v1, 0xf

    const-string v2, "StripByteCounts"

    aput-object v2, v0, v1

    const/16 v1, 0x10

    const-string v2, "JPEGInterchangeFormat"

    aput-object v2, v0, v1

    const/16 v1, 0x11

    const-string v2, "JPEGInterchangeFormatLength"

    aput-object v2, v0, v1

    const/16 v1, 0x12

    const-string v2, "TransferFunction"

    aput-object v2, v0, v1

    const/16 v1, 0x13

    const-string v2, "WhitePoint"

    aput-object v2, v0, v1

    const/16 v1, 0x14

    const-string v2, "PrimaryChromaticities"

    aput-object v2, v0, v1

    const/16 v1, 0x15

    const-string v2, "YCbCrCoefficients"

    aput-object v2, v0, v1

    const/16 v1, 0x16

    const-string v2, "ReferenceBlackWhite"

    aput-object v2, v0, v1

    const/16 v1, 0x17

    const-string v2, "DateTime"

    aput-object v2, v0, v1

    const/16 v1, 0x18

    const-string v2, "ImageDescription"

    aput-object v2, v0, v1

    const/16 v1, 0x19

    const-string v2, "Make"

    aput-object v2, v0, v1

    const/16 v1, 0x1a

    const-string v2, "Model"

    aput-object v2, v0, v1

    const/16 v1, 0x1b

    const-string v2, "Software"

    aput-object v2, v0, v1

    const/16 v1, 0x1c

    const-string v2, "Artist"

    aput-object v2, v0, v1

    const/16 v1, 0x1d

    const-string v2, "Copyright"

    aput-object v2, v0, v1

    const/16 v1, 0x1e

    const-string v2, "ExifVersion"

    aput-object v2, v0, v1

    const/16 v1, 0x1f

    const-string v2, "FlashpixVersion"

    aput-object v2, v0, v1

    const/16 v1, 0x20

    const-string v2, "ColorSpace"

    aput-object v2, v0, v1

    const/16 v1, 0x21

    const-string v2, "Gamma"

    aput-object v2, v0, v1

    const/16 v1, 0x22

    const-string v2, "PixelXDimension"

    aput-object v2, v0, v1

    const/16 v1, 0x23

    const-string v2, "PixelYDimension"

    aput-object v2, v0, v1

    const/16 v1, 0x24

    const-string v2, "ComponentsConfiguration"

    aput-object v2, v0, v1

    const/16 v1, 0x25

    const-string v2, "CompressedBitsPerPixel"

    aput-object v2, v0, v1

    const/16 v1, 0x26

    const-string v2, "MakerNote"

    aput-object v2, v0, v1

    const/16 v1, 0x27

    const-string v2, "UserComment"

    aput-object v2, v0, v1

    const/16 v1, 0x28

    const-string v2, "RelatedSoundFile"

    aput-object v2, v0, v1

    const/16 v1, 0x29

    const-string v2, "DateTimeOriginal"

    aput-object v2, v0, v1

    const/16 v1, 0x2a

    const-string v2, "DateTimeDigitized"

    aput-object v2, v0, v1

    const/16 v1, 0x2b

    const-string v2, "OffsetTime"

    aput-object v2, v0, v1

    const/16 v1, 0x2c

    const-string v2, "OffsetTimeOriginal"

    aput-object v2, v0, v1

    const/16 v1, 0x2d

    const-string v2, "OffsetTimeDigitized"

    aput-object v2, v0, v1

    const/16 v1, 0x2e

    const-string v2, "SubSecTime"

    aput-object v2, v0, v1

    const/16 v1, 0x2f

    const-string v2, "SubSecTimeOriginal"

    aput-object v2, v0, v1

    const/16 v1, 0x30

    const-string v2, "SubSecTimeDigitized"

    aput-object v2, v0, v1

    const/16 v1, 0x31

    const-string v2, "ExposureTime"

    aput-object v2, v0, v1

    const/16 v1, 0x32

    const-string v2, "FNumber"

    aput-object v2, v0, v1

    const/16 v1, 0x33

    const-string v2, "ExposureProgram"

    aput-object v2, v0, v1

    const/16 v1, 0x34

    const-string v2, "SpectralSensitivity"

    aput-object v2, v0, v1

    const/16 v1, 0x35

    const-string v2, "PhotographicSensitivity"

    aput-object v2, v0, v1

    const/16 v1, 0x36

    const-string v2, "OECF"

    aput-object v2, v0, v1

    const/16 v1, 0x37

    const-string v2, "SensitivityType"

    aput-object v2, v0, v1

    const/16 v1, 0x38

    const-string v2, "StandardOutputSensitivity"

    aput-object v2, v0, v1

    const/16 v1, 0x39

    const-string v2, "RecommendedExposureIndex"

    aput-object v2, v0, v1

    const/16 v1, 0x3a

    const-string v2, "ISOSpeed"

    aput-object v2, v0, v1

    const/16 v1, 0x3b

    const-string v2, "ISOSpeedLatitudeyyy"

    aput-object v2, v0, v1

    const/16 v1, 0x3c

    const-string v2, "ISOSpeedLatitudezzz"

    aput-object v2, v0, v1

    const/16 v1, 0x3d

    const-string v2, "ShutterSpeedValue"

    aput-object v2, v0, v1

    const/16 v1, 0x3e

    const-string v2, "ApertureValue"

    aput-object v2, v0, v1

    const/16 v1, 0x3f

    const-string v2, "BrightnessValue"

    aput-object v2, v0, v1

    const/16 v1, 0x40

    const-string v2, "ExposureBiasValue"

    aput-object v2, v0, v1

    const/16 v1, 0x41

    const-string v2, "MaxApertureValue"

    aput-object v2, v0, v1

    const/16 v1, 0x42

    const-string v2, "SubjectDistance"

    aput-object v2, v0, v1

    const/16 v1, 0x43

    const-string v2, "MeteringMode"

    aput-object v2, v0, v1

    const/16 v1, 0x44

    const-string v2, "LightSource"

    aput-object v2, v0, v1

    const/16 v1, 0x45

    const-string v2, "Flash"

    aput-object v2, v0, v1

    const/16 v1, 0x46

    const-string v2, "SubjectArea"

    aput-object v2, v0, v1

    const/16 v1, 0x47

    const-string v2, "FocalLength"

    aput-object v2, v0, v1

    const/16 v1, 0x48

    const-string v2, "FlashEnergy"

    aput-object v2, v0, v1

    const/16 v1, 0x49

    const-string v2, "SpatialFrequencyResponse"

    aput-object v2, v0, v1

    const/16 v1, 0x4a

    const-string v2, "FocalPlaneXResolution"

    aput-object v2, v0, v1

    const/16 v1, 0x4b

    const-string v2, "FocalPlaneYResolution"

    aput-object v2, v0, v1

    const/16 v1, 0x4c

    const-string v2, "FocalPlaneResolutionUnit"

    aput-object v2, v0, v1

    const/16 v1, 0x4d

    const-string v2, "SubjectLocation"

    aput-object v2, v0, v1

    const/16 v1, 0x4e

    const-string v2, "ExposureIndex"

    aput-object v2, v0, v1

    const/16 v1, 0x4f

    const-string v2, "SensingMethod"

    aput-object v2, v0, v1

    const/16 v1, 0x50

    const-string v2, "FileSource"

    aput-object v2, v0, v1

    const/16 v1, 0x51

    const-string v2, "SceneType"

    aput-object v2, v0, v1

    const/16 v1, 0x52

    const-string v2, "CFAPattern"

    aput-object v2, v0, v1

    const/16 v1, 0x53

    const-string v2, "CustomRendered"

    aput-object v2, v0, v1

    const/16 v1, 0x54

    const-string v2, "ExposureMode"

    aput-object v2, v0, v1

    const/16 v1, 0x55

    const-string v2, "WhiteBalance"

    aput-object v2, v0, v1

    const/16 v1, 0x56

    const-string v2, "DigitalZoomRatio"

    aput-object v2, v0, v1

    const/16 v1, 0x57

    const-string v2, "FocalLengthIn35mmFilm"

    aput-object v2, v0, v1

    const/16 v1, 0x58

    const-string v2, "SceneCaptureType"

    aput-object v2, v0, v1

    const/16 v1, 0x59

    const-string v2, "GainControl"

    aput-object v2, v0, v1

    const/16 v1, 0x5a

    const-string v2, "Contrast"

    aput-object v2, v0, v1

    const/16 v1, 0x5b

    const-string v2, "Saturation"

    aput-object v2, v0, v1

    const/16 v1, 0x5c

    const-string v2, "Sharpness"

    aput-object v2, v0, v1

    const/16 v1, 0x5d

    const-string v2, "DeviceSettingDescription"

    aput-object v2, v0, v1

    const/16 v1, 0x5e

    const-string v2, "SubjectDistanceRange"

    aput-object v2, v0, v1

    const/16 v1, 0x5f

    const-string v2, "ImageUniqueID"

    aput-object v2, v0, v1

    const/16 v1, 0x60

    const-string v2, "CameraOwnerName"

    aput-object v2, v0, v1

    const/16 v1, 0x61

    const-string v2, "BodySerialNumber"

    aput-object v2, v0, v1

    const/16 v1, 0x62

    const-string v2, "LensSpecification"

    aput-object v2, v0, v1

    const/16 v1, 0x63

    const-string v2, "LensMake"

    aput-object v2, v0, v1

    const/16 v1, 0x64

    const-string v2, "LensModel"

    aput-object v2, v0, v1

    const/16 v1, 0x65

    const-string v2, "LensSerialNumber"

    aput-object v2, v0, v1

    const/16 v1, 0x66

    const-string v2, "GPSVersionID"

    aput-object v2, v0, v1

    const/16 v1, 0x67

    const-string v2, "GPSLatitudeRef"

    aput-object v2, v0, v1

    const/16 v1, 0x68

    const-string v2, "GPSLatitude"

    aput-object v2, v0, v1

    const/16 v1, 0x69

    const-string v2, "GPSLongitudeRef"

    aput-object v2, v0, v1

    const/16 v1, 0x6a

    const-string v2, "GPSLongitude"

    aput-object v2, v0, v1

    const/16 v1, 0x6b

    const-string v2, "GPSAltitudeRef"

    aput-object v2, v0, v1

    const/16 v1, 0x6c

    const-string v2, "GPSAltitude"

    aput-object v2, v0, v1

    const/16 v1, 0x6d

    const-string v2, "GPSTimeStamp"

    aput-object v2, v0, v1

    const/16 v1, 0x6e

    const-string v2, "GPSSatellites"

    aput-object v2, v0, v1

    const/16 v1, 0x6f

    const-string v2, "GPSStatus"

    aput-object v2, v0, v1

    const/16 v1, 0x70

    const-string v2, "GPSMeasureMode"

    aput-object v2, v0, v1

    const/16 v1, 0x71

    const-string v2, "GPSDOP"

    aput-object v2, v0, v1

    const/16 v1, 0x72

    const-string v2, "GPSSpeedRef"

    aput-object v2, v0, v1

    const/16 v1, 0x73

    const-string v2, "GPSSpeed"

    aput-object v2, v0, v1

    const/16 v1, 0x74

    const-string v2, "GPSTrackRef"

    aput-object v2, v0, v1

    const/16 v1, 0x75

    const-string v2, "GPSTrack"

    aput-object v2, v0, v1

    const/16 v1, 0x76

    const-string v2, "GPSImgDirectionRef"

    aput-object v2, v0, v1

    const/16 v1, 0x77

    const-string v2, "GPSImgDirection"

    aput-object v2, v0, v1

    const/16 v1, 0x78

    const-string v2, "GPSMapDatum"

    aput-object v2, v0, v1

    const/16 v1, 0x79

    const-string v2, "GPSDestLatitudeRef"

    aput-object v2, v0, v1

    const/16 v1, 0x7a

    const-string v2, "GPSDestLatitude"

    aput-object v2, v0, v1

    const/16 v1, 0x7b

    const-string v2, "GPSDestLongitudeRef"

    aput-object v2, v0, v1

    const/16 v1, 0x7c

    const-string v2, "GPSDestLongitude"

    aput-object v2, v0, v1

    const/16 v1, 0x7d

    const-string v2, "GPSDestBearingRef"

    aput-object v2, v0, v1

    const/16 v1, 0x7e

    const-string v2, "GPSDestBearing"

    aput-object v2, v0, v1

    const/16 v1, 0x7f

    const-string v2, "GPSDestDistanceRef"

    aput-object v2, v0, v1

    const/16 v1, 0x80

    const-string v2, "GPSDestDistance"

    aput-object v2, v0, v1

    const/16 v1, 0x81

    const-string v2, "GPSProcessingMethod"

    aput-object v2, v0, v1

    const/16 v1, 0x82

    const-string v2, "GPSAreaInformation"

    aput-object v2, v0, v1

    const/16 v1, 0x83

    const-string v2, "GPSDateStamp"

    aput-object v2, v0, v1

    const/16 v1, 0x84

    const-string v2, "GPSDifferential"

    aput-object v2, v0, v1

    const/16 v1, 0x85

    const-string v2, "GPSHPositioningError"

    aput-object v2, v0, v1

    const/16 v1, 0x86

    const-string v2, "InteroperabilityIndex"

    aput-object v2, v0, v1

    const/16 v1, 0x87

    const-string v2, "ThumbnailImageLength"

    aput-object v2, v0, v1

    const/16 v1, 0x88

    const-string v2, "ThumbnailImageWidth"

    aput-object v2, v0, v1

    const/16 v1, 0x89

    const-string v2, "ThumbnailOrientation"

    aput-object v2, v0, v1

    const/16 v1, 0x8a

    const-string v2, "DNGVersion"

    aput-object v2, v0, v1

    const/16 v1, 0x8b

    const-string v2, "DefaultCropSize"

    aput-object v2, v0, v1

    const/16 v1, 0x8c

    const-string v2, "ThumbnailImage"

    aput-object v2, v0, v1

    const/16 v1, 0x8d

    const-string v2, "PreviewImageStart"

    aput-object v2, v0, v1

    const/16 v1, 0x8e

    const-string v2, "PreviewImageLength"

    aput-object v2, v0, v1

    const/16 v1, 0x8f

    const-string v2, "AspectFrame"

    aput-object v2, v0, v1

    const/16 v1, 0x90

    const-string v2, "SensorBottomBorder"

    aput-object v2, v0, v1

    const/16 v1, 0x91

    const-string v2, "SensorLeftBorder"

    aput-object v2, v0, v1

    const/16 v1, 0x92

    const-string v2, "SensorRightBorder"

    aput-object v2, v0, v1

    const/16 v1, 0x93

    const-string v2, "SensorTopBorder"

    aput-object v2, v0, v1

    const/16 v1, 0x94

    const-string v2, "ISO"

    aput-object v2, v0, v1

    const/16 v1, 0x95

    const-string v2, "JpgFromRaw"

    aput-object v2, v0, v1

    const/16 v1, 0x96

    const-string v2, "Xmp"

    aput-object v2, v0, v1

    const/16 v1, 0x97

    const-string v2, "NewSubfileType"

    aput-object v2, v0, v1

    const/16 v1, 0x98

    const-string v2, "SubfileType"

    aput-object v2, v0, v1

    invoke-static {v0}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v0

    return-object v0
.end method

.method private parseTimestamp(Ljava/lang/String;)J
    .locals 2

    const-wide/16 v0, -0x1

    if-nez p1, :cond_0

    return-wide v0

    .line 690
    :cond_0
    :try_start_0
    invoke-static {p1}, Landroidx/camera/core/impl/utils/Exif;->convertFromExifDateTime(Ljava/lang/String;)Ljava/util/Date;

    move-result-object p1

    invoke-virtual {p1}, Ljava/util/Date;->getTime()J

    move-result-wide v0
    :try_end_0
    .catch Ljava/text/ParseException; {:try_start_0 .. :try_end_0} :catch_0

    :catch_0
    return-wide v0
.end method

.method private parseTimestamp(Ljava/lang/String;Ljava/lang/String;)J
    .locals 2

    const-wide/16 v0, -0x1

    if-nez p1, :cond_0

    if-nez p2, :cond_0

    return-wide v0

    :cond_0
    if-nez p2, :cond_1

    .line 669
    :try_start_0
    invoke-static {p1}, Landroidx/camera/core/impl/utils/Exif;->convertFromExifDate(Ljava/lang/String;)Ljava/util/Date;

    move-result-object p1

    invoke-virtual {p1}, Ljava/util/Date;->getTime()J

    move-result-wide p1
    :try_end_0
    .catch Ljava/text/ParseException; {:try_start_0 .. :try_end_0} :catch_0

    return-wide p1

    :catch_0
    return-wide v0

    :cond_1
    if-nez p1, :cond_2

    .line 676
    :try_start_1
    invoke-static {p2}, Landroidx/camera/core/impl/utils/Exif;->convertFromExifTime(Ljava/lang/String;)Ljava/util/Date;

    move-result-object p1

    invoke-virtual {p1}, Ljava/util/Date;->getTime()J

    move-result-wide p1
    :try_end_1
    .catch Ljava/text/ParseException; {:try_start_1 .. :try_end_1} :catch_1

    return-wide p1

    :catch_1
    return-wide v0

    .line 681
    :cond_2
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v0, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    const-string v0, " "

    invoke-virtual {p1, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p1

    invoke-virtual {p1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    invoke-direct {p0, p1}, Landroidx/camera/core/impl/utils/Exif;->parseTimestamp(Ljava/lang/String;)J

    move-result-wide p1

    return-wide p1
.end method


# virtual methods
.method public attachLocation(Landroid/location/Location;)V
    .locals 1

    .line 644
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    invoke-virtual {v0, p1}, Landroidx/exifinterface/media/ExifInterface;->setGpsInfo(Landroid/location/Location;)V

    return-void
.end method

.method public attachTimestamp()V
    .locals 5

    .line 615
    invoke-static {}, Ljava/lang/System;->currentTimeMillis()J

    move-result-wide v0

    .line 616
    invoke-static {v0, v1}, Landroidx/camera/core/impl/utils/Exif;->convertToExifDateTime(J)Ljava/lang/String;

    move-result-object v2

    .line 618
    iget-object v3, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v4, "DateTimeOriginal"

    invoke-virtual {v3, v4, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 619
    iget-object v3, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v4, "DateTimeDigitized"

    invoke-virtual {v3, v4, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 622
    :try_start_0
    invoke-static {v2}, Landroidx/camera/core/impl/utils/Exif;->convertFromExifDateTime(Ljava/lang/String;)Ljava/util/Date;

    move-result-object v2

    invoke-virtual {v2}, Ljava/util/Date;->getTime()J

    move-result-wide v2

    sub-long/2addr v0, v2

    invoke-static {v0, v1}, Ljava/lang/Long;->toString(J)Ljava/lang/String;

    move-result-object v0

    .line 623
    iget-object v1, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v2, "SubSecTimeOriginal"

    invoke-virtual {v1, v2, v0}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 624
    iget-object v1, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v2, "SubSecTimeDigitized"

    invoke-virtual {v1, v2, v0}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V
    :try_end_0
    .catch Ljava/text/ParseException; {:try_start_0 .. :try_end_0} :catch_0

    :catch_0
    const/4 v0, 0x0

    .line 628
    iput-boolean v0, p0, Landroidx/camera/core/impl/utils/Exif;->mRemoveTimestamp:Z

    return-void
.end method

.method public copyToCroppedImage(Landroidx/camera/core/impl/utils/Exif;)V
    .locals 4

    .line 186
    new-instance v0, Ljava/util/ArrayList;

    sget-object v1, Landroidx/camera/core/impl/utils/Exif;->ALL_EXIF_TAGS:Ljava/util/List;

    invoke-direct {v0, v1}, Ljava/util/ArrayList;-><init>(Ljava/util/Collection;)V

    .line 187
    sget-object v1, Landroidx/camera/core/impl/utils/Exif;->DO_NOT_COPY_EXIF_TAGS:Ljava/util/List;

    invoke-interface {v0, v1}, Ljava/util/List;->removeAll(Ljava/util/Collection;)Z

    .line 188
    invoke-interface {v0}, Ljava/util/List;->iterator()Ljava/util/Iterator;

    move-result-object v0

    :cond_0
    :goto_0
    invoke-interface {v0}, Ljava/util/Iterator;->hasNext()Z

    move-result v1

    if-eqz v1, :cond_1

    invoke-interface {v0}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/String;

    .line 189
    iget-object v2, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    invoke-virtual {v2, v1}, Landroidx/exifinterface/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    .line 190
    iget-object v3, p1, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    invoke-virtual {v3, v1}, Landroidx/exifinterface/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    if-eqz v2, :cond_0

    .line 191
    invoke-static {v2, v3}, Ljava/util/Objects;->equals(Ljava/lang/Object;Ljava/lang/Object;)Z

    move-result v3

    if-nez v3, :cond_0

    .line 192
    iget-object v3, p1, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    invoke-virtual {v3, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    goto :goto_0

    :cond_1
    return-void
.end method

.method public flipHorizontally()V
    .locals 3

    .line 574
    invoke-virtual {p0}, Landroidx/camera/core/impl/utils/Exif;->getOrientation()I

    move-result v0

    packed-switch v0, :pswitch_data_0

    const/4 v0, 0x2

    goto :goto_0

    :pswitch_0
    const/4 v0, 0x7

    goto :goto_0

    :pswitch_1
    const/16 v0, 0x8

    goto :goto_0

    :pswitch_2
    const/4 v0, 0x5

    goto :goto_0

    :pswitch_3
    const/4 v0, 0x6

    goto :goto_0

    :pswitch_4
    const/4 v0, 0x3

    goto :goto_0

    :pswitch_5
    const/4 v0, 0x4

    goto :goto_0

    :pswitch_6
    const/4 v0, 0x1

    .line 604
    :goto_0
    iget-object v1, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v2, "Orientation"

    invoke-static {v0}, Ljava/lang/String;->valueOf(I)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v2, v0}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    return-void

    nop

    :pswitch_data_0
    .packed-switch 0x2
        :pswitch_6
        :pswitch_5
        :pswitch_4
        :pswitch_3
        :pswitch_2
        :pswitch_1
        :pswitch_0
    .end packed-switch
.end method

.method public flipVertically()V
    .locals 3

    .line 535
    invoke-virtual {p0}, Landroidx/camera/core/impl/utils/Exif;->getOrientation()I

    move-result v0

    packed-switch v0, :pswitch_data_0

    const/4 v0, 0x4

    goto :goto_0

    :pswitch_0
    const/4 v0, 0x5

    goto :goto_0

    :pswitch_1
    const/4 v0, 0x6

    goto :goto_0

    :pswitch_2
    const/4 v0, 0x7

    goto :goto_0

    :pswitch_3
    const/16 v0, 0x8

    goto :goto_0

    :pswitch_4
    const/4 v0, 0x1

    goto :goto_0

    :pswitch_5
    const/4 v0, 0x2

    goto :goto_0

    :pswitch_6
    const/4 v0, 0x3

    .line 565
    :goto_0
    iget-object v1, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v2, "Orientation"

    invoke-static {v0}, Ljava/lang/String;->valueOf(I)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v2, v0}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    return-void

    nop

    :pswitch_data_0
    .packed-switch 0x2
        :pswitch_6
        :pswitch_5
        :pswitch_4
        :pswitch_3
        :pswitch_2
        :pswitch_1
        :pswitch_0
    .end packed-switch
.end method

.method public getDescription()Ljava/lang/String;
    .locals 2

    .line 236
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "ImageDescription"

    invoke-virtual {v0, v1}, Landroidx/exifinterface/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public getExifInterface()Landroidx/exifinterface/media/ExifInterface;
    .locals 1

    .line 610
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    return-object v0
.end method

.method public getHeight()I
    .locals 3

    .line 231
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "ImageLength"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->getAttributeInt(Ljava/lang/String;I)I

    move-result v0

    return v0
.end method

.method public getLastModifiedTimestamp()J
    .locals 6

    .line 340
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "DateTime"

    invoke-virtual {v0, v1}, Landroidx/exifinterface/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-direct {p0, v0}, Landroidx/camera/core/impl/utils/Exif;->parseTimestamp(Ljava/lang/String;)J

    move-result-wide v0

    const-wide/16 v2, -0x1

    cmp-long v4, v0, v2

    if-nez v4, :cond_0

    return-wide v2

    .line 345
    :cond_0
    iget-object v2, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v3, "SubSecTime"

    invoke-virtual {v2, v3}, Landroidx/exifinterface/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    if-eqz v2, :cond_2

    .line 348
    :try_start_0
    invoke-static {v2}, Ljava/lang/Long;->parseLong(Ljava/lang/String;)J

    move-result-wide v2

    :goto_0
    const-wide/16 v4, 0x3e8

    cmp-long v4, v2, v4

    if-lez v4, :cond_1

    const-wide/16 v4, 0xa

    .line 350
    div-long/2addr v2, v4
    :try_end_0
    .catch Ljava/lang/NumberFormatException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :cond_1
    add-long/2addr v0, v2

    :catch_0
    :cond_2
    return-wide v0
.end method

.method public getLocation()Landroid/location/Location;
    .locals 16

    move-object/from16 v0, p0

    .line 391
    iget-object v1, v0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v2, "GPSProcessingMethod"

    invoke-virtual {v1, v2}, Landroidx/exifinterface/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    .line 392
    iget-object v2, v0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    invoke-virtual {v2}, Landroidx/exifinterface/media/ExifInterface;->getLatLong()[D

    move-result-object v2

    .line 393
    iget-object v3, v0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-wide/16 v4, 0x0

    invoke-virtual {v3, v4, v5}, Landroidx/exifinterface/media/ExifInterface;->getAltitude(D)D

    move-result-wide v6

    .line 394
    iget-object v3, v0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v8, "GPSSpeed"

    invoke-virtual {v3, v8, v4, v5}, Landroidx/exifinterface/media/ExifInterface;->getAttributeDouble(Ljava/lang/String;D)D

    move-result-wide v8

    .line 395
    iget-object v3, v0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v10, "GPSSpeedRef"

    invoke-virtual {v3, v10}, Landroidx/exifinterface/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    .line 396
    const-string v10, "K"

    if-nez v3, :cond_0

    move-object v3, v10

    .line 397
    :cond_0
    iget-object v11, v0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v12, "GPSDateStamp"

    .line 399
    invoke-virtual {v11, v12}, Landroidx/exifinterface/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v11

    iget-object v12, v0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v13, "GPSTimeStamp"

    .line 400
    invoke-virtual {v12, v13}, Landroidx/exifinterface/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v12

    .line 398
    invoke-direct {v0, v11, v12}, Landroidx/camera/core/impl/utils/Exif;->parseTimestamp(Ljava/lang/String;Ljava/lang/String;)J

    move-result-wide v11

    if-nez v2, :cond_1

    const/4 v1, 0x0

    return-object v1

    :cond_1
    if-nez v1, :cond_2

    .line 405
    sget-object v1, Landroidx/camera/core/impl/utils/Exif;->TAG:Ljava/lang/String;

    .line 408
    :cond_2
    new-instance v13, Landroid/location/Location;

    invoke-direct {v13, v1}, Landroid/location/Location;-><init>(Ljava/lang/String;)V

    const/4 v1, 0x0

    .line 409
    aget-wide v14, v2, v1

    invoke-virtual {v13, v14, v15}, Landroid/location/Location;->setLatitude(D)V

    const/4 v14, 0x1

    .line 410
    aget-wide v1, v2, v14

    invoke-virtual {v13, v1, v2}, Landroid/location/Location;->setLongitude(D)V

    cmpl-double v1, v6, v4

    if-eqz v1, :cond_3

    .line 412
    invoke-virtual {v13, v6, v7}, Landroid/location/Location;->setAltitude(D)V

    :cond_3
    cmpl-double v1, v8, v4

    if-eqz v1, :cond_a

    .line 415
    invoke-virtual {v3}, Ljava/lang/String;->hashCode()I

    move-result v1

    const/16 v2, 0x4b

    if-eq v1, v2, :cond_6

    const/16 v2, 0x4d

    if-eq v1, v2, :cond_5

    const/16 v2, 0x4e

    if-eq v1, v2, :cond_4

    goto :goto_0

    :cond_4
    const-string v1, "N"

    invoke-virtual {v3, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_7

    move v1, v14

    goto :goto_1

    :cond_5
    const-string v1, "M"

    invoke-virtual {v3, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_7

    const/4 v1, 0x0

    goto :goto_1

    :cond_6
    invoke-virtual {v3, v10}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_7

    const/4 v1, 0x2

    goto :goto_1

    :cond_7
    :goto_0
    const/4 v1, -0x1

    :goto_1
    if-eqz v1, :cond_9

    if-eq v1, v14, :cond_8

    .line 425
    invoke-static {v8, v9}, Landroidx/camera/core/impl/utils/Exif$Speed;->fromKilometersPerHour(D)Landroidx/camera/core/impl/utils/Exif$Speed$Converter;

    move-result-object v1

    invoke-virtual {v1}, Landroidx/camera/core/impl/utils/Exif$Speed$Converter;->toMetersPerSecond()D

    move-result-wide v1

    goto :goto_2

    .line 420
    :cond_8
    invoke-static {v8, v9}, Landroidx/camera/core/impl/utils/Exif$Speed;->fromKnots(D)Landroidx/camera/core/impl/utils/Exif$Speed$Converter;

    move-result-object v1

    invoke-virtual {v1}, Landroidx/camera/core/impl/utils/Exif$Speed$Converter;->toMetersPerSecond()D

    move-result-wide v1

    goto :goto_2

    .line 417
    :cond_9
    invoke-static {v8, v9}, Landroidx/camera/core/impl/utils/Exif$Speed;->fromMilesPerHour(D)Landroidx/camera/core/impl/utils/Exif$Speed$Converter;

    move-result-object v1

    invoke-virtual {v1}, Landroidx/camera/core/impl/utils/Exif$Speed$Converter;->toMetersPerSecond()D

    move-result-wide v1

    :goto_2
    double-to-float v1, v1

    .line 429
    invoke-virtual {v13, v1}, Landroid/location/Location;->setSpeed(F)V

    :cond_a
    const-wide/16 v1, -0x1

    cmp-long v1, v11, v1

    if-eqz v1, :cond_b

    .line 432
    invoke-virtual {v13, v11, v12}, Landroid/location/Location;->setTime(J)V

    :cond_b
    return-object v13
.end method

.method public getOrientation()I
    .locals 3

    .line 215
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "Orientation"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->getAttributeInt(Ljava/lang/String;I)I

    move-result v0

    return v0
.end method

.method public getRotation()I
    .locals 4

    .line 246
    invoke-virtual {p0}, Landroidx/camera/core/impl/utils/Exif;->getOrientation()I

    move-result v0

    const/16 v1, 0x5a

    const/16 v2, 0x10e

    const/16 v3, 0xb4

    packed-switch v0, :pswitch_data_0

    const/4 v0, 0x0

    return v0

    :pswitch_0
    return v2

    :pswitch_1
    return v1

    :pswitch_2
    return v2

    :pswitch_3
    return v3

    nop

    :pswitch_data_0
    .packed-switch 0x3
        :pswitch_3
        :pswitch_3
        :pswitch_2
        :pswitch_1
        :pswitch_1
        :pswitch_0
    .end packed-switch
.end method

.method public getTimestamp()J
    .locals 6

    .line 366
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "DateTimeOriginal"

    .line 367
    invoke-virtual {v0, v1}, Landroidx/exifinterface/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-direct {p0, v0}, Landroidx/camera/core/impl/utils/Exif;->parseTimestamp(Ljava/lang/String;)J

    move-result-wide v0

    const-wide/16 v2, -0x1

    cmp-long v4, v0, v2

    if-nez v4, :cond_0

    return-wide v2

    .line 372
    :cond_0
    iget-object v2, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v3, "SubSecTimeOriginal"

    invoke-virtual {v2, v3}, Landroidx/exifinterface/media/ExifInterface;->getAttribute(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    if-eqz v2, :cond_2

    .line 375
    :try_start_0
    invoke-static {v2}, Ljava/lang/Long;->parseLong(Ljava/lang/String;)J

    move-result-wide v2

    :goto_0
    const-wide/16 v4, 0x3e8

    cmp-long v4, v2, v4

    if-lez v4, :cond_1

    const-wide/16 v4, 0xa

    .line 377
    div-long/2addr v2, v4
    :try_end_0
    .catch Ljava/lang/NumberFormatException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_0

    :cond_1
    add-long/2addr v0, v2

    :catch_0
    :cond_2
    return-wide v0
.end method

.method public getWidth()I
    .locals 3

    .line 226
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "ImageWidth"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->getAttributeInt(Ljava/lang/String;I)I

    move-result v0

    return v0
.end method

.method public isFlippedHorizontally()Z
    .locals 2

    .line 298
    invoke-virtual {p0}, Landroidx/camera/core/impl/utils/Exif;->getOrientation()I

    move-result v0

    const/4 v1, 0x2

    if-eq v0, v1, :cond_0

    const/4 v0, 0x0

    return v0

    :cond_0
    const/4 v0, 0x1

    return v0
.end method

.method public isFlippedVertically()Z
    .locals 3

    .line 272
    invoke-virtual {p0}, Landroidx/camera/core/impl/utils/Exif;->getOrientation()I

    move-result v0

    const/4 v1, 0x4

    const/4 v2, 0x1

    if-eq v0, v1, :cond_0

    const/4 v1, 0x5

    if-eq v0, v1, :cond_0

    const/4 v1, 0x7

    if-eq v0, v1, :cond_0

    const/4 v0, 0x0

    return v0

    :cond_0
    return v2
.end method

.method public removeLocation()V
    .locals 3

    .line 649
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "GPSProcessingMethod"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 650
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "GPSLatitude"

    invoke-virtual {v0, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 651
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "GPSLatitudeRef"

    invoke-virtual {v0, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 652
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "GPSLongitude"

    invoke-virtual {v0, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 653
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "GPSLongitudeRef"

    invoke-virtual {v0, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 654
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "GPSAltitude"

    invoke-virtual {v0, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 655
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "GPSAltitudeRef"

    invoke-virtual {v0, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 656
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "GPSSpeed"

    invoke-virtual {v0, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 657
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "GPSSpeedRef"

    invoke-virtual {v0, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 658
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "GPSDateStamp"

    invoke-virtual {v0, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 659
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "GPSTimeStamp"

    invoke-virtual {v0, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method public removeTimestamp()V
    .locals 3

    .line 633
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "DateTime"

    const/4 v2, 0x0

    invoke-virtual {v0, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 634
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "DateTimeOriginal"

    invoke-virtual {v0, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 635
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "DateTimeDigitized"

    invoke-virtual {v0, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 636
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "SubSecTime"

    invoke-virtual {v0, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 637
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "SubSecTimeOriginal"

    invoke-virtual {v0, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    .line 638
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "SubSecTimeDigitized"

    invoke-virtual {v0, v1, v2}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    const/4 v0, 0x1

    .line 639
    iput-boolean v0, p0, Landroidx/camera/core/impl/utils/Exif;->mRemoveTimestamp:Z

    return-void
.end method

.method public rotate(I)V
    .locals 9

    .line 442
    rem-int/lit8 v0, p1, 0x5a

    const-string v1, "Orientation"

    if-eqz v0, :cond_0

    .line 443
    sget-object v0, Landroidx/camera/core/impl/utils/Exif;->TAG:Ljava/lang/String;

    sget-object v2, Ljava/util/Locale;->US:Ljava/util/Locale;

    .line 448
    invoke-static {p1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object p1

    filled-new-array {p1}, [Ljava/lang/Object;

    move-result-object p1

    .line 445
    const-string v3, "Can only rotate in right angles (eg. 0, 90, 180, 270). %d is unsupported."

    invoke-static {v2, v3, p1}, Ljava/lang/String;->format(Ljava/util/Locale;Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object p1

    .line 443
    invoke-static {v0, p1}, Landroidx/camera/core/Logger;->w(Ljava/lang/String;Ljava/lang/String;)V

    .line 449
    iget-object p1, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const/4 v0, 0x0

    .line 451
    invoke-static {v0}, Ljava/lang/String;->valueOf(I)Ljava/lang/String;

    move-result-object v0

    .line 449
    invoke-virtual {p1, v1, v0}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    return-void

    .line 455
    :cond_0
    rem-int/lit16 p1, p1, 0x168

    .line 457
    invoke-virtual {p0}, Landroidx/camera/core/impl/utils/Exif;->getOrientation()I

    move-result v0

    :goto_0
    const/4 v2, 0x2

    const/4 v3, 0x1

    const/4 v4, 0x4

    const/4 v5, 0x7

    const/4 v6, 0x5

    const/16 v7, 0x8

    const/4 v8, 0x6

    if-gez p1, :cond_1

    add-int/lit8 p1, p1, 0x5a

    packed-switch v0, :pswitch_data_0

    move v0, v7

    goto :goto_0

    :pswitch_0
    move v0, v2

    goto :goto_0

    :pswitch_1
    move v0, v3

    goto :goto_0

    :pswitch_2
    move v0, v4

    goto :goto_0

    :pswitch_3
    move v0, v5

    goto :goto_0

    :pswitch_4
    move v0, v8

    goto :goto_0

    :pswitch_5
    move v0, v6

    goto :goto_0

    :cond_1
    :goto_1
    if-lez p1, :cond_2

    add-int/lit8 p1, p1, -0x5a

    packed-switch v0, :pswitch_data_1

    move v0, v8

    goto :goto_1

    :pswitch_6
    move v0, v3

    goto :goto_1

    :pswitch_7
    move v0, v4

    goto :goto_1

    :pswitch_8
    const/4 v0, 0x3

    goto :goto_1

    :pswitch_9
    move v0, v2

    goto :goto_1

    :pswitch_a
    move v0, v6

    goto :goto_1

    :pswitch_b
    move v0, v7

    goto :goto_1

    :pswitch_c
    move v0, v5

    goto :goto_1

    .line 526
    :cond_2
    iget-object p1, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    invoke-static {v0}, Ljava/lang/String;->valueOf(I)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v1, v0}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    return-void

    :pswitch_data_0
    .packed-switch 0x2
        :pswitch_5
        :pswitch_4
        :pswitch_3
        :pswitch_2
        :pswitch_1
        :pswitch_0
        :pswitch_4
    .end packed-switch

    :pswitch_data_1
    .packed-switch 0x2
        :pswitch_c
        :pswitch_b
        :pswitch_a
        :pswitch_9
        :pswitch_8
        :pswitch_7
        :pswitch_6
    .end packed-switch
.end method

.method public save()V
    .locals 1
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 173
    iget-boolean v0, p0, Landroidx/camera/core/impl/utils/Exif;->mRemoveTimestamp:Z

    if-nez v0, :cond_0

    .line 174
    invoke-direct {p0}, Landroidx/camera/core/impl/utils/Exif;->attachLastModifiedTimestamp()V

    .line 176
    :cond_0
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    invoke-virtual {v0}, Landroidx/exifinterface/media/ExifInterface;->saveAttributes()V

    return-void
.end method

.method public setDescription(Ljava/lang/String;)V
    .locals 2

    .line 241
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "ImageDescription"

    invoke-virtual {v0, v1, p1}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method public setOrientation(I)V
    .locals 2

    .line 221
    iget-object v0, p0, Landroidx/camera/core/impl/utils/Exif;->mExifInterface:Landroidx/exifinterface/media/ExifInterface;

    const-string v1, "Orientation"

    invoke-static {p1}, Ljava/lang/String;->valueOf(I)Ljava/lang/String;

    move-result-object p1

    invoke-virtual {v0, v1, p1}, Landroidx/exifinterface/media/ExifInterface;->setAttribute(Ljava/lang/String;Ljava/lang/String;)V

    return-void
.end method

.method public toString()Ljava/lang/String;
    .locals 10

    .line 199
    sget-object v0, Ljava/util/Locale;->ENGLISH:Ljava/util/Locale;

    .line 204
    invoke-virtual {p0}, Landroidx/camera/core/impl/utils/Exif;->getWidth()I

    move-result v1

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v2

    .line 205
    invoke-virtual {p0}, Landroidx/camera/core/impl/utils/Exif;->getHeight()I

    move-result v1

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v3

    .line 206
    invoke-virtual {p0}, Landroidx/camera/core/impl/utils/Exif;->getRotation()I

    move-result v1

    invoke-static {v1}, Ljava/lang/Integer;->valueOf(I)Ljava/lang/Integer;

    move-result-object v4

    .line 207
    invoke-virtual {p0}, Landroidx/camera/core/impl/utils/Exif;->isFlippedVertically()Z

    move-result v1

    invoke-static {v1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v5

    .line 208
    invoke-virtual {p0}, Landroidx/camera/core/impl/utils/Exif;->isFlippedHorizontally()Z

    move-result v1

    invoke-static {v1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v6

    .line 209
    invoke-virtual {p0}, Landroidx/camera/core/impl/utils/Exif;->getLocation()Landroid/location/Location;

    move-result-object v7

    .line 210
    invoke-virtual {p0}, Landroidx/camera/core/impl/utils/Exif;->getTimestamp()J

    move-result-wide v8

    invoke-static {v8, v9}, Ljava/lang/Long;->valueOf(J)Ljava/lang/Long;

    move-result-object v8

    .line 211
    invoke-virtual {p0}, Landroidx/camera/core/impl/utils/Exif;->getDescription()Ljava/lang/String;

    move-result-object v9

    filled-new-array/range {v2 .. v9}, [Ljava/lang/Object;

    move-result-object v1

    .line 199
    const-string v2, "Exif{width=%s, height=%s, rotation=%d, isFlippedVertically=%s, isFlippedHorizontally=%s, location=%s, timestamp=%s, description=%s}"

    invoke-static {v0, v2, v1}, Ljava/lang/String;->format(Ljava/util/Locale;Ljava/lang/String;[Ljava/lang/Object;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
