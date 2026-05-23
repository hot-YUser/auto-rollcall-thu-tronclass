.class public final Lcom/wisdomgarden/qrcode/WisdomGardenQRCodeDetector;
.super Ljava/lang/Object;
.source "WisdomGardenQRCodeDetector.java"


# static fields
.field private static final DETECT_CAFFE_MODEL:Ljava/lang/String; = "detect.caffemodel"

.field private static final DETECT_PROTO_TXT:Ljava/lang/String; = "detect.prototxt"

.field private static final MODEL_DIR:Ljava/lang/String; = "models"

.field private static final SR_CAFFE_MODEL:Ljava/lang/String; = "sr.caffemodel"

.field private static final SR_PROTO_TXT:Ljava/lang/String; = "sr.prototxt"

.field private static final TAG:Ljava/lang/String; = "WisdomGardenQRCodeDetector"

.field private static volatile sWisdomGardenQRCode:Lorg/opencv/wechat_qrcode/WeChatQRCode;


# direct methods
.method private constructor <init>()V
    .locals 1

    .line 37
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 38
    new-instance v0, Ljava/lang/AssertionError;

    invoke-direct {v0}, Ljava/lang/AssertionError;-><init>()V

    throw v0
.end method

.method public static detectAndDecode(Landroid/graphics/Bitmap;)Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/graphics/Bitmap;",
            ")",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 129
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 131
    :try_start_0
    invoke-static {p0, v0}, Lorg/opencv/android/Utils;->bitmapToMat(Landroid/graphics/Bitmap;Lorg/opencv/core/Mat;)V

    .line 132
    invoke-static {v0}, Lcom/wisdomgarden/qrcode/WisdomGardenQRCodeDetector;->detectAndDecode(Lorg/opencv/core/Mat;)Ljava/util/List;

    move-result-object p0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 134
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-object p0

    :catchall_0
    move-exception p0

    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    .line 135
    throw p0
.end method

.method public static detectAndDecode(Landroid/graphics/Bitmap;Ljava/util/List;)Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/graphics/Bitmap;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 148
    new-instance v0, Lorg/opencv/core/Mat;

    invoke-direct {v0}, Lorg/opencv/core/Mat;-><init>()V

    .line 150
    :try_start_0
    invoke-static {p0, v0}, Lorg/opencv/android/Utils;->bitmapToMat(Landroid/graphics/Bitmap;Lorg/opencv/core/Mat;)V

    .line 151
    invoke-static {v0, p1}, Lcom/wisdomgarden/qrcode/WisdomGardenQRCodeDetector;->detectAndDecode(Lorg/opencv/core/Mat;Ljava/util/List;)Ljava/util/List;

    move-result-object p0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 153
    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    return-object p0

    :catchall_0
    move-exception p0

    invoke-virtual {v0}, Lorg/opencv/core/Mat;->release()V

    .line 154
    throw p0
.end method

.method public static detectAndDecode(Lorg/opencv/core/Mat;)Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            ")",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 166
    sget-object v0, Lcom/wisdomgarden/qrcode/WisdomGardenQRCodeDetector;->sWisdomGardenQRCode:Lorg/opencv/wechat_qrcode/WeChatQRCode;

    invoke-virtual {v0, p0}, Lorg/opencv/wechat_qrcode/WeChatQRCode;->detectAndDecode(Lorg/opencv/core/Mat;)Ljava/util/List;

    move-result-object p0

    return-object p0
.end method

.method public static detectAndDecode(Lorg/opencv/core/Mat;Ljava/util/List;)Ljava/util/List;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Lorg/opencv/core/Mat;",
            "Ljava/util/List<",
            "Lorg/opencv/core/Mat;",
            ">;)",
            "Ljava/util/List<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    .line 179
    sget-object v0, Lcom/wisdomgarden/qrcode/WisdomGardenQRCodeDetector;->sWisdomGardenQRCode:Lorg/opencv/wechat_qrcode/WeChatQRCode;

    invoke-virtual {v0, p0, p1}, Lorg/opencv/wechat_qrcode/WeChatQRCode;->detectAndDecode(Lorg/opencv/core/Mat;Ljava/util/List;)Ljava/util/List;

    move-result-object p0

    return-object p0
.end method

.method private static getExternalFilesDir(Landroid/content/Context;Ljava/lang/String;)Ljava/lang/String;
    .locals 2

    .line 107
    invoke-virtual {p0, p1}, Landroid/content/Context;->getExternalFilesDirs(Ljava/lang/String;)[Ljava/io/File;

    move-result-object v0

    if-eqz v0, :cond_0

    .line 108
    array-length v1, v0

    if-lez v1, :cond_0

    const/4 v1, 0x0

    .line 109
    aget-object v0, v0, v1

    if-eqz v0, :cond_0

    .line 111
    invoke-virtual {v0}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object p0

    return-object p0

    .line 114
    :cond_0
    invoke-virtual {p0, p1}, Landroid/content/Context;->getExternalFilesDir(Ljava/lang/String;)Ljava/io/File;

    move-result-object v0

    if-nez v0, :cond_1

    .line 116
    new-instance v0, Ljava/io/File;

    invoke-virtual {p0}, Landroid/content/Context;->getFilesDir()Ljava/io/File;

    move-result-object p0

    invoke-direct {v0, p0, p1}, Ljava/io/File;-><init>(Ljava/io/File;Ljava/lang/String;)V

    .line 118
    :cond_1
    invoke-virtual {v0}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object p0

    return-object p0
.end method

.method public static init(Landroid/content/Context;)V
    .locals 0

    .line 47
    invoke-virtual {p0}, Landroid/content/Context;->getApplicationContext()Landroid/content/Context;

    move-result-object p0

    invoke-static {p0}, Lcom/wisdomgarden/qrcode/WisdomGardenQRCodeDetector;->initWisdomGardenQRCode(Landroid/content/Context;)V

    return-void
.end method

.method private static initWisdomGardenQRCode(Landroid/content/Context;)V
    .locals 16

    .line 56
    const-string v0, "models"

    move-object/from16 v1, p0

    :try_start_0
    invoke-static {v1, v0}, Lcom/wisdomgarden/qrcode/WisdomGardenQRCodeDetector;->getExternalFilesDir(Landroid/content/Context;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    const/4 v3, 0x4

    .line 57
    new-array v4, v3, [Ljava/lang/String;

    const-string v5, "detect.prototxt"

    const/4 v6, 0x0

    aput-object v5, v4, v6

    const-string v5, "detect.caffemodel"

    const/4 v7, 0x1

    aput-object v5, v4, v7

    const-string v5, "sr.prototxt"

    const/4 v8, 0x2

    aput-object v5, v4, v8

    const-string v5, "sr.caffemodel"

    const/4 v9, 0x3

    aput-object v5, v4, v9

    .line 59
    new-instance v5, Ljava/io/File;

    invoke-direct {v5, v2}, Ljava/io/File;-><init>(Ljava/lang/String;)V

    .line 60
    invoke-virtual {v5}, Ljava/io/File;->exists()Z

    move-result v10

    if-eqz v10, :cond_1

    move v11, v6

    :goto_0
    if-ge v11, v3, :cond_1

    .line 63
    aget-object v12, v4, v11

    .line 64
    new-instance v13, Ljava/io/File;

    invoke-direct {v13, v2, v12}, Ljava/io/File;-><init>(Ljava/lang/String;Ljava/lang/String;)V

    invoke-virtual {v13}, Ljava/io/File;->exists()Z

    move-result v12

    if-nez v12, :cond_0

    move v10, v6

    goto :goto_1

    :cond_0
    add-int/lit8 v11, v11, 0x1

    goto :goto_0

    :cond_1
    :goto_1
    if-nez v10, :cond_3

    move v10, v6

    :goto_2
    if-ge v10, v3, :cond_3

    .line 73
    aget-object v11, v4, v10

    .line 74
    invoke-virtual/range {p0 .. p0}, Landroid/content/Context;->getAssets()Landroid/content/res/AssetManager;

    move-result-object v12

    new-instance v13, Ljava/lang/StringBuilder;

    invoke-direct {v13}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v13, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v13

    sget-char v14, Ljava/io/File;->separatorChar:C

    invoke-virtual {v13, v14}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v13

    invoke-virtual {v13, v11}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v13

    invoke-virtual {v13}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v13

    .line 75
    invoke-virtual {v12, v13}, Landroid/content/res/AssetManager;->open(Ljava/lang/String;)Ljava/io/InputStream;

    move-result-object v12

    .line 76
    new-instance v13, Ljava/io/File;

    invoke-direct {v13, v5, v11}, Ljava/io/File;-><init>(Ljava/io/File;Ljava/lang/String;)V

    .line 77
    new-instance v11, Ljava/io/FileOutputStream;

    invoke-direct {v11, v13}, Ljava/io/FileOutputStream;-><init>(Ljava/io/File;)V

    const/16 v14, 0x1000

    .line 78
    new-array v14, v14, [B

    .line 80
    :goto_3
    invoke-virtual {v12, v14}, Ljava/io/InputStream;->read([B)I

    move-result v15

    const/4 v3, -0x1

    if-eq v15, v3, :cond_2

    .line 81
    invoke-virtual {v11, v14, v6, v15}, Ljava/io/FileOutputStream;->write([BII)V

    const/4 v3, 0x4

    goto :goto_3

    .line 83
    :cond_2
    invoke-virtual {v11}, Ljava/io/FileOutputStream;->flush()V

    .line 84
    invoke-virtual {v12}, Ljava/io/InputStream;->close()V

    .line 85
    invoke-virtual {v11}, Ljava/io/FileOutputStream;->close()V

    .line 86
    const-string v3, "file: %s"

    invoke-virtual {v13}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object v11

    filled-new-array {v11}, [Ljava/lang/Object;

    move-result-object v11

    invoke-static {v3, v11}, Lcom/king/logx/LogX;->d(Ljava/lang/String;[Ljava/lang/Object;)V

    add-int/lit8 v10, v10, 0x1

    const/4 v3, 0x4

    goto :goto_2

    .line 89
    :cond_3
    new-instance v0, Lorg/opencv/wechat_qrcode/WeChatQRCode;

    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    sget-char v3, Ljava/io/File;->separatorChar:C

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v1

    aget-object v3, v4, v6

    invoke-virtual {v1, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v3, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    sget-char v5, Ljava/io/File;->separatorChar:C

    invoke-virtual {v3, v5}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v3

    aget-object v5, v4, v7

    invoke-virtual {v3, v5}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v3

    new-instance v5, Ljava/lang/StringBuilder;

    invoke-direct {v5}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v5, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    sget-char v7, Ljava/io/File;->separatorChar:C

    invoke-virtual {v5, v7}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v5

    aget-object v7, v4, v8

    invoke-virtual {v5, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v5

    new-instance v7, Ljava/lang/StringBuilder;

    invoke-direct {v7}, Ljava/lang/StringBuilder;-><init>()V

    invoke-virtual {v7, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    sget-char v7, Ljava/io/File;->separatorChar:C

    invoke-virtual {v2, v7}, Ljava/lang/StringBuilder;->append(C)Ljava/lang/StringBuilder;

    move-result-object v2

    aget-object v4, v4, v9

    invoke-virtual {v2, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-direct {v0, v1, v3, v5, v2}, Lorg/opencv/wechat_qrcode/WeChatQRCode;-><init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    sput-object v0, Lcom/wisdomgarden/qrcode/WisdomGardenQRCodeDetector;->sWisdomGardenQRCode:Lorg/opencv/wechat_qrcode/WeChatQRCode;

    .line 94
    const-string v0, "WisdomGardenQRCode loaded successfully"

    new-array v1, v6, [Ljava/lang/Object;

    invoke-static {v0, v1}, Lcom/king/logx/LogX;->d(Ljava/lang/String;[Ljava/lang/Object;)V
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_4

    :catch_0
    move-exception v0

    .line 96
    invoke-static {v0}, Lcom/king/logx/LogX;->e(Ljava/lang/Throwable;)V

    :goto_4
    return-void
.end method
