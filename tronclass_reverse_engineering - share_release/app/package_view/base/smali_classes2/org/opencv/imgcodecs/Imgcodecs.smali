.class public Lorg/opencv/imgcodecs/Imgcodecs;
.super Ljava/lang/Object;
.source "Imgcodecs.java"


# static fields
.field public static final IMREAD_ANYCOLOR:I = 0x4

.field public static final IMREAD_ANYDEPTH:I = 0x2

.field public static final IMREAD_COLOR:I = 0x1

.field public static final IMREAD_GRAYSCALE:I = 0x0

.field public static final IMREAD_IGNORE_ORIENTATION:I = 0x80

.field public static final IMREAD_LOAD_GDAL:I = 0x8

.field public static final IMREAD_REDUCED_COLOR_2:I = 0x11

.field public static final IMREAD_REDUCED_COLOR_4:I = 0x21

.field public static final IMREAD_REDUCED_COLOR_8:I = 0x41

.field public static final IMREAD_REDUCED_GRAYSCALE_2:I = 0x10

.field public static final IMREAD_REDUCED_GRAYSCALE_4:I = 0x20

.field public static final IMREAD_REDUCED_GRAYSCALE_8:I = 0x40

.field public static final IMREAD_UNCHANGED:I = -0x1

.field public static final IMWRITE_AVIF_DEPTH:I = 0x201

.field public static final IMWRITE_AVIF_QUALITY:I = 0x200

.field public static final IMWRITE_AVIF_SPEED:I = 0x202

.field public static final IMWRITE_EXR_COMPRESSION:I = 0x31

.field public static final IMWRITE_EXR_COMPRESSION_B44:I = 0x6

.field public static final IMWRITE_EXR_COMPRESSION_B44A:I = 0x7

.field public static final IMWRITE_EXR_COMPRESSION_DWAA:I = 0x8

.field public static final IMWRITE_EXR_COMPRESSION_DWAB:I = 0x9

.field public static final IMWRITE_EXR_COMPRESSION_NO:I = 0x0

.field public static final IMWRITE_EXR_COMPRESSION_PIZ:I = 0x4

.field public static final IMWRITE_EXR_COMPRESSION_PXR24:I = 0x5

.field public static final IMWRITE_EXR_COMPRESSION_RLE:I = 0x1

.field public static final IMWRITE_EXR_COMPRESSION_ZIP:I = 0x3

.field public static final IMWRITE_EXR_COMPRESSION_ZIPS:I = 0x2

.field public static final IMWRITE_EXR_DWA_COMPRESSION_LEVEL:I = 0x32

.field public static final IMWRITE_EXR_TYPE:I = 0x30

.field public static final IMWRITE_EXR_TYPE_FLOAT:I = 0x2

.field public static final IMWRITE_EXR_TYPE_HALF:I = 0x1

.field public static final IMWRITE_HDR_COMPRESSION:I = 0x50

.field public static final IMWRITE_HDR_COMPRESSION_NONE:I = 0x0

.field public static final IMWRITE_HDR_COMPRESSION_RLE:I = 0x1

.field public static final IMWRITE_JPEG2000_COMPRESSION_X1000:I = 0x110

.field public static final IMWRITE_JPEG_CHROMA_QUALITY:I = 0x6

.field public static final IMWRITE_JPEG_LUMA_QUALITY:I = 0x5

.field public static final IMWRITE_JPEG_OPTIMIZE:I = 0x3

.field public static final IMWRITE_JPEG_PROGRESSIVE:I = 0x2

.field public static final IMWRITE_JPEG_QUALITY:I = 0x1

.field public static final IMWRITE_JPEG_RST_INTERVAL:I = 0x4

.field public static final IMWRITE_JPEG_SAMPLING_FACTOR:I = 0x7

.field public static final IMWRITE_JPEG_SAMPLING_FACTOR_411:I = 0x411111

.field public static final IMWRITE_JPEG_SAMPLING_FACTOR_420:I = 0x221111

.field public static final IMWRITE_JPEG_SAMPLING_FACTOR_422:I = 0x211111

.field public static final IMWRITE_JPEG_SAMPLING_FACTOR_440:I = 0x121111

.field public static final IMWRITE_JPEG_SAMPLING_FACTOR_444:I = 0x111111

.field public static final IMWRITE_PAM_FORMAT_BLACKANDWHITE:I = 0x1

.field public static final IMWRITE_PAM_FORMAT_GRAYSCALE:I = 0x2

.field public static final IMWRITE_PAM_FORMAT_GRAYSCALE_ALPHA:I = 0x3

.field public static final IMWRITE_PAM_FORMAT_NULL:I = 0x0

.field public static final IMWRITE_PAM_FORMAT_RGB:I = 0x4

.field public static final IMWRITE_PAM_FORMAT_RGB_ALPHA:I = 0x5

.field public static final IMWRITE_PAM_TUPLETYPE:I = 0x80

.field public static final IMWRITE_PNG_BILEVEL:I = 0x12

.field public static final IMWRITE_PNG_COMPRESSION:I = 0x10

.field public static final IMWRITE_PNG_STRATEGY:I = 0x11

.field public static final IMWRITE_PNG_STRATEGY_DEFAULT:I = 0x0

.field public static final IMWRITE_PNG_STRATEGY_FILTERED:I = 0x1

.field public static final IMWRITE_PNG_STRATEGY_FIXED:I = 0x4

.field public static final IMWRITE_PNG_STRATEGY_HUFFMAN_ONLY:I = 0x2

.field public static final IMWRITE_PNG_STRATEGY_RLE:I = 0x3

.field public static final IMWRITE_PXM_BINARY:I = 0x20

.field public static final IMWRITE_TIFF_COMPRESSION:I = 0x103

.field public static final IMWRITE_TIFF_RESUNIT:I = 0x100

.field public static final IMWRITE_TIFF_XDPI:I = 0x101

.field public static final IMWRITE_TIFF_YDPI:I = 0x102

.field public static final IMWRITE_WEBP_QUALITY:I = 0x40


# direct methods
.method public constructor <init>()V
    .locals 0

    .line 16
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method

.method public static haveImageReader(Ljava/lang/String;)Z
    .locals 0

    .line 737
    invoke-static {p0}, Lorg/opencv/imgcodecs/Imgcodecs;->haveImageReader_0(Ljava/lang/String;)Z

    move-result p0

    return p0
.end method

.method private static native haveImageReader_0(Ljava/lang/String;)Z
.end method

.method public static haveImageWriter(Ljava/lang/String;)Z
    .locals 0

    .line 752
    invoke-static {p0}, Lorg/opencv/imgcodecs/Imgcodecs;->haveImageWriter_0(Ljava/lang/String;)Z

    move-result p0

    return p0
.end method

.method private static native haveImageWriter_0(Ljava/lang/String;)Z
.end method

.method public static imcount(Ljava/lang/String;)J
    .locals 2

    .line 442
    invoke-static {p0}, Lorg/opencv/imgcodecs/Imgcodecs;->imcount_1(Ljava/lang/String;)J

    move-result-wide v0

    return-wide v0
.end method

.method public static imcount(Ljava/lang/String;I)J
    .locals 0

    .line 431
    invoke-static {p0, p1}, Lorg/opencv/imgcodecs/Imgcodecs;->imcount_0(Ljava/lang/String;I)J

    move-result-wide p0

    return-wide p0
.end method

.method private static native imcount_0(Ljava/lang/String;I)J
.end method

.method private static native imcount_1(Ljava/lang/String;)J
.end method

.method public static imdecode(Lorg/opencv/core/Mat;I)Lorg/opencv/core/Mat;
    .locals 3

    .line 633
    new-instance v0, Lorg/opencv/core/Mat;

    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, p1}, Lorg/opencv/imgcodecs/Imgcodecs;->imdecode_0(JI)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method private static native imdecode_0(JI)J
.end method

.method public static imdecodemulti(Lorg/opencv/core/Mat;ILjava/util/List;)Z
    .locals 5
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "I",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)Z"
        }
    .end annotation

    .line 679
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 680
    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v3, v0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {v1, v2, p1, v3, v4}, Lorg/opencv/imgcodecs/Imgcodecs;->imdecodemulti_1(JIJ)Z

    move-result p0

    .line 681
    invoke-static {v0, p2}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 682
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return p0
.end method

.method public static imdecodemulti(Lorg/opencv/core/Mat;ILjava/util/List;Lorg/opencv/core/Range;)Z
    .locals 8
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "I",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Lorg/opencv/core/Range;",
            ")Z"
        }
    .end annotation

    .line 657
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 658
    iget-wide v1, p0, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v4, v0, Lorg/opencv/core/Mat;->nativeObj:J

    iget v6, p3, Lorg/opencv/core/Range;->start:I

    iget v7, p3, Lorg/opencv/core/Range;->end:I

    move v3, p1

    invoke-static/range {v1 .. v7}, Lorg/opencv/imgcodecs/Imgcodecs;->imdecodemulti_0(JIJII)Z

    move-result p0

    .line 659
    invoke-static {v0, p2}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 660
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return p0
.end method

.method private static native imdecodemulti_0(JIJII)Z
.end method

.method private static native imdecodemulti_1(JIJ)Z
.end method

.method public static imencode(Ljava/lang/String;Lorg/opencv/core/Mat;Lorg/opencv/core/MatOfByte;)Z
    .locals 2

    .line 722
    iget-wide v0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide p1, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {p0, v0, v1, p1, p2}, Lorg/opencv/imgcodecs/Imgcodecs;->imencode_1(Ljava/lang/String;JJ)Z

    move-result p0

    return p0
.end method

.method public static imencode(Ljava/lang/String;Lorg/opencv/core/Mat;Lorg/opencv/core/MatOfByte;Lorg/opencv/core/MatOfInt;)Z
    .locals 7

    .line 706
    iget-wide v1, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v3, p2, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide v5, p3, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v0, p0

    invoke-static/range {v0 .. v6}, Lorg/opencv/imgcodecs/Imgcodecs;->imencode_0(Ljava/lang/String;JJJ)Z

    move-result p0

    return p0
.end method

.method private static native imencode_0(Ljava/lang/String;JJJ)Z
.end method

.method private static native imencode_1(Ljava/lang/String;JJ)Z
.end method

.method public static imread(Ljava/lang/String;)Lorg/opencv/core/Mat;
    .locals 3

    .line 330
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-static {p0}, Lorg/opencv/imgcodecs/Imgcodecs;->imread_1(Ljava/lang/String;)J

    move-result-wide v1

    invoke-direct {v0, v1, v2}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method public static imread(Ljava/lang/String;I)Lorg/opencv/core/Mat;
    .locals 1

    .line 225
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-static {p0, p1}, Lorg/opencv/imgcodecs/Imgcodecs;->imread_0(Ljava/lang/String;I)J

    move-result-wide p0

    invoke-direct {v0, p0, p1}, Lorg/opencv/core/Mat;-><init>(J)V

    return-object v0
.end method

.method private static native imread_0(Ljava/lang/String;I)J
.end method

.method private static native imread_1(Ljava/lang/String;)J
.end method

.method public static imreadmulti(Ljava/lang/String;Ljava/util/List;)Z
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)Z"
        }
    .end annotation

    .line 366
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 367
    iget-wide v1, v0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {p0, v1, v2}, Lorg/opencv/imgcodecs/Imgcodecs;->imreadmulti_1(Ljava/lang/String;J)Z

    move-result p0

    .line 368
    invoke-static {v0, p1}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 369
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return p0
.end method

.method public static imreadmulti(Ljava/lang/String;Ljava/util/List;I)Z
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;I)Z"
        }
    .end annotation

    .line 349
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 350
    iget-wide v1, v0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {p0, v1, v2, p2}, Lorg/opencv/imgcodecs/Imgcodecs;->imreadmulti_0(Ljava/lang/String;JI)Z

    move-result p0

    .line 351
    invoke-static {v0, p1}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 352
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return p0
.end method

.method public static imreadmulti(Ljava/lang/String;Ljava/util/List;II)Z
    .locals 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;II)Z"
        }
    .end annotation

    .line 410
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 411
    iget-wide v1, v0, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {p0, v1, v2, p2, p3}, Lorg/opencv/imgcodecs/Imgcodecs;->imreadmulti_3(Ljava/lang/String;JII)Z

    move-result p0

    .line 412
    invoke-static {v0, p1}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 413
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return p0
.end method

.method public static imreadmulti(Ljava/lang/String;Ljava/util/List;III)Z
    .locals 7
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;III)Z"
        }
    .end annotation

    .line 391
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 392
    iget-wide v2, v0, Lorg/opencv/core/Mat;->nativeObj:J

    move-object v1, p0

    move v4, p2

    move v5, p3

    move v6, p4

    invoke-static/range {v1 .. v6}, Lorg/opencv/imgcodecs/Imgcodecs;->imreadmulti_2(Ljava/lang/String;JIII)Z

    move-result p0

    .line 393
    invoke-static {v0, p1}, Lorg/opencv/utils/Converters;->Mat_to_vector_Mat(Lorg/opencv/core/Mat;Ljava/util/List;)V

    .line 394
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return p0
.end method

.method private static native imreadmulti_0(Ljava/lang/String;JI)Z
.end method

.method private static native imreadmulti_1(Ljava/lang/String;J)Z
.end method

.method private static native imreadmulti_2(Ljava/lang/String;JIII)Z
.end method

.method private static native imreadmulti_3(Ljava/lang/String;JII)Z
.end method

.method public static imwrite(Ljava/lang/String;Lorg/opencv/core/Mat;)Z
    .locals 2

    .line 595
    iget-wide v0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {p0, v0, v1}, Lorg/opencv/imgcodecs/Imgcodecs;->imwrite_1(Ljava/lang/String;J)Z

    move-result p0

    return p0
.end method

.method public static imwrite(Ljava/lang/String;Lorg/opencv/core/Mat;Lorg/opencv/core/MatOfInt;)Z
    .locals 2

    .line 522
    iget-wide v0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide p1, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {p0, v0, v1, p1, p2}, Lorg/opencv/imgcodecs/Imgcodecs;->imwrite_0(Ljava/lang/String;JJ)Z

    move-result p0

    return p0
.end method

.method private static native imwrite_0(Ljava/lang/String;JJ)Z
.end method

.method private static native imwrite_1(Ljava/lang/String;J)Z
.end method

.method public static imwritemulti(Ljava/lang/String;Ljava/util/List;)Z
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)Z"
        }
    .end annotation

    .line 610
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p1

    .line 611
    iget-wide v0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {p0, v0, v1}, Lorg/opencv/imgcodecs/Imgcodecs;->imwritemulti_1(Ljava/lang/String;J)Z

    move-result p0

    return p0
.end method

.method public static imwritemulti(Ljava/lang/String;Ljava/util/List;Lorg/opencv/core/MatOfInt;)Z
    .locals 2
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;",
            "Lorg/opencv/core/MatOfInt;",
            ")Z"
        }
    .end annotation

    .line 604
    invoke-static {p1}, Lorg/opencv/utils/Converters;->vector_Mat_to_Mat(Ljava/util/List;)Lorg/opencv/core/Mat;

    move-result-object p1

    .line 606
    iget-wide v0, p1, Lorg/opencv/core/Mat;->nativeObj:J

    iget-wide p1, p2, Lorg/opencv/core/Mat;->nativeObj:J

    invoke-static {p0, v0, v1, p1, p2}, Lorg/opencv/imgcodecs/Imgcodecs;->imwritemulti_0(Ljava/lang/String;JJ)Z

    move-result p0

    return p0
.end method

.method private static native imwritemulti_0(Ljava/lang/String;JJ)Z
.end method

.method private static native imwritemulti_1(Ljava/lang/String;J)Z
.end method
