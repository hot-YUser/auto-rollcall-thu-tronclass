.class Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;
.super Landroid/os/AsyncTask;
.source "MultiImageChooserActivity.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Lcom/synconset/MultiImageChooserActivity;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x2
    name = "ResizeImagesTask"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Landroid/os/AsyncTask<",
        "Ljava/util/Set<",
        "Ljava/util/Map$Entry<",
        "Ljava/lang/String;",
        "Ljava/lang/Integer;",
        ">;>;",
        "Ljava/lang/Void;",
        "Ljava/util/ArrayList<",
        "Ljava/lang/String;",
        ">;>;"
    }
.end annotation


# instance fields
.field private asyncTaskError:Ljava/lang/Exception;

.field final synthetic this$0:Lcom/synconset/MultiImageChooserActivity;


# direct methods
.method private constructor <init>(Lcom/synconset/MultiImageChooserActivity;)V
    .locals 0

    .line 525
    iput-object p1, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-direct {p0}, Landroid/os/AsyncTask;-><init>()V

    const/4 p1, 0x0

    .line 526
    iput-object p1, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->asyncTaskError:Ljava/lang/Exception;

    return-void
.end method

.method synthetic constructor <init>(Lcom/synconset/MultiImageChooserActivity;Lcom/synconset/MultiImageChooserActivity$1;)V
    .locals 0

    .line 525
    invoke-direct {p0, p1}, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;-><init>(Lcom/synconset/MultiImageChooserActivity;)V

    return-void
.end method

.method private getBase64OfImage(Landroid/graphics/Bitmap;)Ljava/lang/String;
    .locals 3

    .line 708
    new-instance v0, Ljava/io/ByteArrayOutputStream;

    invoke-direct {v0}, Ljava/io/ByteArrayOutputStream;-><init>()V

    .line 709
    sget-object v1, Landroid/graphics/Bitmap$CompressFormat;->JPEG:Landroid/graphics/Bitmap$CompressFormat;

    iget-object v2, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {v2}, Lcom/synconset/MultiImageChooserActivity;->access$1500(Lcom/synconset/MultiImageChooserActivity;)I

    move-result v2

    invoke-virtual {p1, v1, v2, v0}, Landroid/graphics/Bitmap;->compress(Landroid/graphics/Bitmap$CompressFormat;ILjava/io/OutputStream;)Z

    .line 710
    invoke-virtual {v0}, Ljava/io/ByteArrayOutputStream;->toByteArray()[B

    move-result-object p1

    const/4 v0, 0x2

    .line 711
    invoke-static {p1, v0}, Landroid/util/Base64;->encodeToString([BI)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method private getResizedBitmap(Landroid/graphics/Bitmap;F)Landroid/graphics/Bitmap;
    .locals 7

    .line 697
    invoke-virtual {p1}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v3

    .line 698
    invoke-virtual {p1}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v4

    .line 700
    new-instance v5, Landroid/graphics/Matrix;

    invoke-direct {v5}, Landroid/graphics/Matrix;-><init>()V

    .line 702
    invoke-virtual {v5, p2, p2}, Landroid/graphics/Matrix;->postScale(FF)Z

    const/4 v2, 0x0

    const/4 v6, 0x0

    const/4 v1, 0x0

    move-object v0, p1

    .line 704
    invoke-static/range {v0 .. v6}, Landroid/graphics/Bitmap;->createBitmap(Landroid/graphics/Bitmap;IIIILandroid/graphics/Matrix;Z)Landroid/graphics/Bitmap;

    move-result-object p1

    return-object p1
.end method

.method private storeImage(Landroid/graphics/Bitmap;Ljava/lang/String;)Ljava/io/File;
    .locals 3
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    const/16 v0, 0x2e

    .line 679
    invoke-virtual {p2, v0}, Ljava/lang/String;->lastIndexOf(I)I

    move-result v0

    const/4 v1, 0x0

    .line 680
    invoke-virtual {p2, v1, v0}, Ljava/lang/String;->substring(II)Ljava/lang/String;

    move-result-object v1

    .line 681
    invoke-virtual {p2, v0}, Ljava/lang/String;->substring(I)Ljava/lang/String;

    move-result-object p2

    .line 682
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v2, "tmp_"

    invoke-direct {v0, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v0, p2}, Ljava/io/File;->createTempFile(Ljava/lang/String;Ljava/lang/String;)Ljava/io/File;

    move-result-object v0

    .line 683
    new-instance v1, Ljava/io/FileOutputStream;

    invoke-direct {v1, v0}, Ljava/io/FileOutputStream;-><init>(Ljava/io/File;)V

    .line 685
    const-string v2, ".png"

    invoke-virtual {p2, v2}, Ljava/lang/String;->compareToIgnoreCase(Ljava/lang/String;)I

    move-result p2

    if-nez p2, :cond_0

    .line 686
    sget-object p2, Landroid/graphics/Bitmap$CompressFormat;->PNG:Landroid/graphics/Bitmap$CompressFormat;

    iget-object v2, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {v2}, Lcom/synconset/MultiImageChooserActivity;->access$1500(Lcom/synconset/MultiImageChooserActivity;)I

    move-result v2

    invoke-virtual {p1, p2, v2, v1}, Landroid/graphics/Bitmap;->compress(Landroid/graphics/Bitmap$CompressFormat;ILjava/io/OutputStream;)Z

    goto :goto_0

    .line 688
    :cond_0
    sget-object p2, Landroid/graphics/Bitmap$CompressFormat;->JPEG:Landroid/graphics/Bitmap$CompressFormat;

    iget-object v2, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {v2}, Lcom/synconset/MultiImageChooserActivity;->access$1500(Lcom/synconset/MultiImageChooserActivity;)I

    move-result v2

    invoke-virtual {p1, p2, v2, v1}, Landroid/graphics/Bitmap;->compress(Landroid/graphics/Bitmap$CompressFormat;ILjava/io/OutputStream;)Z

    .line 691
    :goto_0
    invoke-virtual {v1}, Ljava/io/OutputStream;->flush()V

    .line 692
    invoke-virtual {v1}, Ljava/io/OutputStream;->close()V

    return-object v0
.end method

.method private tryToGetBitmap(Ljava/io/File;Landroid/graphics/BitmapFactory$Options;IZ)Landroid/graphics/Bitmap;
    .locals 7
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;,
            Ljava/lang/OutOfMemoryError;
        }
    .end annotation

    if-nez p2, :cond_0

    .line 646
    invoke-virtual {p1}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object p1

    invoke-static {p1}, Landroid/graphics/BitmapFactory;->decodeFile(Ljava/lang/String;)Landroid/graphics/Bitmap;

    move-result-object p1

    goto :goto_0

    .line 648
    :cond_0
    invoke-virtual {p1}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object p1

    invoke-static {p1, p2}, Landroid/graphics/BitmapFactory;->decodeFile(Ljava/lang/String;Landroid/graphics/BitmapFactory$Options;)Landroid/graphics/Bitmap;

    move-result-object p1

    :goto_0
    if-eqz p1, :cond_3

    if-eqz p2, :cond_1

    if-eqz p4, :cond_1

    .line 656
    iget-object p4, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->this$0:Lcom/synconset/MultiImageChooserActivity;

    iget v0, p2, Landroid/graphics/BitmapFactory$Options;->outWidth:I

    iget p2, p2, Landroid/graphics/BitmapFactory$Options;->outHeight:I

    invoke-static {p4, v0, p2}, Lcom/synconset/MultiImageChooserActivity;->access$1000(Lcom/synconset/MultiImageChooserActivity;II)F

    move-result p2

    .line 657
    invoke-direct {p0, p1, p2}, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->getResizedBitmap(Landroid/graphics/Bitmap;F)Landroid/graphics/Bitmap;

    move-result-object p1

    :cond_1
    move-object v0, p1

    if-eqz p3, :cond_2

    .line 661
    new-instance v5, Landroid/graphics/Matrix;

    invoke-direct {v5}, Landroid/graphics/Matrix;-><init>()V

    int-to-float p1, p3

    .line 662
    invoke-virtual {v5, p1}, Landroid/graphics/Matrix;->setRotate(F)V

    .line 663
    invoke-virtual {v0}, Landroid/graphics/Bitmap;->getWidth()I

    move-result v3

    invoke-virtual {v0}, Landroid/graphics/Bitmap;->getHeight()I

    move-result v4

    const/4 v6, 0x1

    const/4 v1, 0x0

    const/4 v2, 0x0

    invoke-static/range {v0 .. v6}, Landroid/graphics/Bitmap;->createBitmap(Landroid/graphics/Bitmap;IIIILandroid/graphics/Matrix;Z)Landroid/graphics/Bitmap;

    move-result-object v0

    :cond_2
    return-object v0

    .line 652
    :cond_3
    new-instance p1, Ljava/io/IOException;

    const-string p2, "The image file could not be opened."

    invoke-direct {p1, p2}, Ljava/io/IOException;-><init>(Ljava/lang/String;)V

    throw p1
.end method


# virtual methods
.method protected bridge synthetic doInBackground([Ljava/lang/Object;)Ljava/lang/Object;
    .locals 0

    .line 525
    check-cast p1, [Ljava/util/Set;

    invoke-virtual {p0, p1}, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->doInBackground([Ljava/util/Set;)Ljava/util/ArrayList;

    move-result-object p1

    return-object p1
.end method

.method protected varargs doInBackground([Ljava/util/Set;)Ljava/util/ArrayList;
    .locals 11
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "([",
            "Ljava/util/Set<",
            "Ljava/util/Map$Entry<",
            "Ljava/lang/String;",
            "Ljava/lang/Integer;",
            ">;>;)",
            "Ljava/util/ArrayList<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    const/4 v0, 0x0

    .line 530
    aget-object p1, p1, v0

    .line 531
    new-instance v1, Ljava/util/ArrayList;

    invoke-direct {v1}, Ljava/util/ArrayList;-><init>()V

    .line 533
    :try_start_0
    invoke-interface {p1}, Ljava/util/Set;->iterator()Ljava/util/Iterator;

    move-result-object p1

    .line 535
    :cond_0
    :goto_0
    invoke-interface {p1}, Ljava/util/Iterator;->hasNext()Z

    move-result v2

    if-eqz v2, :cond_3

    .line 536
    invoke-interface {p1}, Ljava/util/Iterator;->next()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/util/Map$Entry;

    .line 537
    new-instance v3, Ljava/io/File;

    invoke-interface {v2}, Ljava/util/Map$Entry;->getKey()Ljava/lang/Object;

    move-result-object v4

    check-cast v4, Ljava/lang/String;

    invoke-direct {v3, v4}, Ljava/io/File;-><init>(Ljava/lang/String;)V

    .line 538
    invoke-interface {v2}, Ljava/util/Map$Entry;->getValue()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/Integer;

    invoke-virtual {v2}, Ljava/lang/Integer;->intValue()I

    move-result v2

    .line 539
    new-instance v4, Landroid/graphics/BitmapFactory$Options;

    invoke-direct {v4}, Landroid/graphics/BitmapFactory$Options;-><init>()V

    const/4 v5, 0x1

    .line 540
    iput v5, v4, Landroid/graphics/BitmapFactory$Options;->inSampleSize:I

    .line 541
    iput-boolean v5, v4, Landroid/graphics/BitmapFactory$Options;->inJustDecodeBounds:Z

    .line 542
    invoke-virtual {v3}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object v6

    invoke-static {v6, v4}, Landroid/graphics/BitmapFactory;->decodeFile(Ljava/lang/String;Landroid/graphics/BitmapFactory$Options;)Landroid/graphics/Bitmap;

    .line 543
    iget v6, v4, Landroid/graphics/BitmapFactory$Options;->outWidth:I

    .line 544
    iget v7, v4, Landroid/graphics/BitmapFactory$Options;->outHeight:I

    .line 545
    iget-object v8, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {v8, v6, v7}, Lcom/synconset/MultiImageChooserActivity;->access$1000(Lcom/synconset/MultiImageChooserActivity;II)F

    move-result v8
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_5

    const/high16 v9, 0x3f800000    # 1.0f

    cmpg-float v9, v8, v9

    .line 547
    const-string v10, "Unable to load image into memory."

    if-gez v9, :cond_1

    int-to-float v6, v6

    mul-float/2addr v6, v8

    float-to-int v6, v6

    int-to-float v7, v7

    mul-float/2addr v7, v8

    float-to-int v7, v7

    .line 550
    :try_start_1
    iget-object v8, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {v8, v4, v6, v7}, Lcom/synconset/MultiImageChooserActivity;->access$1100(Lcom/synconset/MultiImageChooserActivity;Landroid/graphics/BitmapFactory$Options;II)I

    move-result v4

    .line 551
    new-instance v6, Landroid/graphics/BitmapFactory$Options;

    invoke-direct {v6}, Landroid/graphics/BitmapFactory$Options;-><init>()V

    .line 552
    iput v4, v6, Landroid/graphics/BitmapFactory$Options;->inSampleSize:I
    :try_end_1
    .catch Ljava/io/IOException; {:try_start_1 .. :try_end_1} :catch_5

    .line 555
    :try_start_2
    invoke-direct {p0, v3, v6, v2, v5}, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->tryToGetBitmap(Ljava/io/File;Landroid/graphics/BitmapFactory$Options;IZ)Landroid/graphics/Bitmap;

    move-result-object v2
    :try_end_2
    .catch Ljava/lang/OutOfMemoryError; {:try_start_2 .. :try_end_2} :catch_0
    .catch Ljava/io/IOException; {:try_start_2 .. :try_end_2} :catch_5

    goto :goto_1

    .line 557
    :catch_0
    :try_start_3
    iget-object v4, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->this$0:Lcom/synconset/MultiImageChooserActivity;

    iget v5, v6, Landroid/graphics/BitmapFactory$Options;->inSampleSize:I

    invoke-static {v4, v5}, Lcom/synconset/MultiImageChooserActivity;->access$1200(Lcom/synconset/MultiImageChooserActivity;I)I

    move-result v4

    iput v4, v6, Landroid/graphics/BitmapFactory$Options;->inSampleSize:I
    :try_end_3
    .catch Ljava/io/IOException; {:try_start_3 .. :try_end_3} :catch_5

    .line 559
    :try_start_4
    invoke-direct {p0, v3, v6, v2, v0}, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->tryToGetBitmap(Ljava/io/File;Landroid/graphics/BitmapFactory$Options;IZ)Landroid/graphics/Bitmap;

    move-result-object v2
    :try_end_4
    .catch Ljava/lang/OutOfMemoryError; {:try_start_4 .. :try_end_4} :catch_1
    .catch Ljava/io/IOException; {:try_start_4 .. :try_end_4} :catch_5

    goto :goto_1

    .line 561
    :catch_1
    :try_start_5
    new-instance p1, Ljava/io/IOException;

    invoke-direct {p1, v10}, Ljava/io/IOException;-><init>(Ljava/lang/String;)V

    throw p1
    :try_end_5
    .catch Ljava/io/IOException; {:try_start_5 .. :try_end_5} :catch_5

    :cond_1
    const/4 v4, 0x0

    .line 566
    :try_start_6
    invoke-direct {p0, v3, v4, v2, v0}, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->tryToGetBitmap(Ljava/io/File;Landroid/graphics/BitmapFactory$Options;IZ)Landroid/graphics/Bitmap;

    move-result-object v2
    :try_end_6
    .catch Ljava/lang/OutOfMemoryError; {:try_start_6 .. :try_end_6} :catch_2
    .catch Ljava/io/IOException; {:try_start_6 .. :try_end_6} :catch_5

    goto :goto_1

    .line 568
    :catch_2
    :try_start_7
    new-instance v4, Landroid/graphics/BitmapFactory$Options;

    invoke-direct {v4}, Landroid/graphics/BitmapFactory$Options;-><init>()V

    const/4 v5, 0x2

    .line 569
    iput v5, v4, Landroid/graphics/BitmapFactory$Options;->inSampleSize:I
    :try_end_7
    .catch Ljava/io/IOException; {:try_start_7 .. :try_end_7} :catch_5

    .line 572
    :try_start_8
    invoke-direct {p0, v3, v4, v2, v0}, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->tryToGetBitmap(Ljava/io/File;Landroid/graphics/BitmapFactory$Options;IZ)Landroid/graphics/Bitmap;

    move-result-object v2
    :try_end_8
    .catch Ljava/lang/OutOfMemoryError; {:try_start_8 .. :try_end_8} :catch_3
    .catch Ljava/io/IOException; {:try_start_8 .. :try_end_8} :catch_5

    goto :goto_1

    .line 574
    :catch_3
    :try_start_9
    new-instance v4, Landroid/graphics/BitmapFactory$Options;

    invoke-direct {v4}, Landroid/graphics/BitmapFactory$Options;-><init>()V

    const/4 v5, 0x4

    .line 575
    iput v5, v4, Landroid/graphics/BitmapFactory$Options;->inSampleSize:I
    :try_end_9
    .catch Ljava/io/IOException; {:try_start_9 .. :try_end_9} :catch_5

    .line 578
    :try_start_a
    invoke-direct {p0, v3, v4, v2, v0}, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->tryToGetBitmap(Ljava/io/File;Landroid/graphics/BitmapFactory$Options;IZ)Landroid/graphics/Bitmap;

    move-result-object v2
    :try_end_a
    .catch Ljava/lang/OutOfMemoryError; {:try_start_a .. :try_end_a} :catch_4
    .catch Ljava/io/IOException; {:try_start_a .. :try_end_a} :catch_5

    .line 586
    :goto_1
    :try_start_b
    iget-object v4, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {v4}, Lcom/synconset/MultiImageChooserActivity;->access$1300(Lcom/synconset/MultiImageChooserActivity;)Lcom/synconset/MultiImageChooserActivity$OutputType;

    move-result-object v4

    sget-object v5, Lcom/synconset/MultiImageChooserActivity$OutputType;->FILE_URI:Lcom/synconset/MultiImageChooserActivity$OutputType;

    if-ne v4, v5, :cond_2

    .line 587
    invoke-virtual {v3}, Ljava/io/File;->getName()Ljava/lang/String;

    move-result-object v3

    invoke-direct {p0, v2, v3}, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->storeImage(Landroid/graphics/Bitmap;Ljava/lang/String;)Ljava/io/File;

    move-result-object v2

    .line 588
    invoke-static {v2}, Landroid/net/Uri;->fromFile(Ljava/io/File;)Landroid/net/Uri;

    move-result-object v2

    invoke-virtual {v2}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    goto/16 :goto_0

    .line 590
    :cond_2
    iget-object v3, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {v3}, Lcom/synconset/MultiImageChooserActivity;->access$1300(Lcom/synconset/MultiImageChooserActivity;)Lcom/synconset/MultiImageChooserActivity$OutputType;

    move-result-object v3

    sget-object v4, Lcom/synconset/MultiImageChooserActivity$OutputType;->BASE64_STRING:Lcom/synconset/MultiImageChooserActivity$OutputType;

    if-ne v3, v4, :cond_0

    .line 591
    invoke-direct {p0, v2}, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->getBase64OfImage(Landroid/graphics/Bitmap;)Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    goto/16 :goto_0

    .line 580
    :catch_4
    new-instance p1, Ljava/io/IOException;

    invoke-direct {p1, v10}, Ljava/io/IOException;-><init>(Ljava/lang/String;)V

    throw p1
    :try_end_b
    .catch Ljava/io/IOException; {:try_start_b .. :try_end_b} :catch_5

    :cond_3
    return-object v1

    :catch_5
    move-exception p1

    .line 597
    :try_start_c
    iput-object p1, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->asyncTaskError:Ljava/lang/Exception;

    .line 598
    :goto_2
    invoke-virtual {v1}, Ljava/util/ArrayList;->size()I

    move-result p1

    if-ge v0, p1, :cond_4

    .line 599
    new-instance p1, Ljava/net/URI;

    invoke-virtual {v1, v0}, Ljava/util/ArrayList;->get(I)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/String;

    invoke-direct {p1, v2}, Ljava/net/URI;-><init>(Ljava/lang/String;)V

    .line 600
    new-instance v2, Ljava/io/File;

    invoke-direct {v2, p1}, Ljava/io/File;-><init>(Ljava/net/URI;)V

    .line 601
    invoke-virtual {v2}, Ljava/io/File;->delete()Z
    :try_end_c
    .catch Ljava/lang/Exception; {:try_start_c .. :try_end_c} :catch_6

    add-int/lit8 v0, v0, 0x1

    goto :goto_2

    .line 606
    :catch_6
    :cond_4
    new-instance p1, Ljava/util/ArrayList;

    invoke-direct {p1}, Ljava/util/ArrayList;-><init>()V

    return-object p1
.end method

.method protected bridge synthetic onPostExecute(Ljava/lang/Object;)V
    .locals 0

    .line 525
    check-cast p1, Ljava/util/ArrayList;

    invoke-virtual {p0, p1}, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->onPostExecute(Ljava/util/ArrayList;)V

    return-void
.end method

.method protected onPostExecute(Ljava/util/ArrayList;)V
    .locals 4
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/ArrayList<",
            "Ljava/lang/String;",
            ">;)V"
        }
    .end annotation

    .line 612
    new-instance v0, Landroid/content/Intent;

    invoke-direct {v0}, Landroid/content/Intent;-><init>()V

    .line 614
    iget-object v1, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->asyncTaskError:Ljava/lang/Exception;

    const/4 v2, 0x0

    if-eqz v1, :cond_0

    .line 615
    new-instance p1, Landroid/os/Bundle;

    invoke-direct {p1}, Landroid/os/Bundle;-><init>()V

    .line 616
    iget-object v1, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->asyncTaskError:Ljava/lang/Exception;

    invoke-virtual {v1}, Ljava/lang/Exception;->getMessage()Ljava/lang/String;

    move-result-object v1

    const-string v3, "ERRORMESSAGE"

    invoke-virtual {p1, v3, v1}, Landroid/os/Bundle;->putString(Ljava/lang/String;Ljava/lang/String;)V

    .line 617
    invoke-virtual {v0, p1}, Landroid/content/Intent;->putExtras(Landroid/os/Bundle;)Landroid/content/Intent;

    .line 618
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-virtual {p1, v2, v0}, Lcom/synconset/MultiImageChooserActivity;->setResult(ILandroid/content/Intent;)V

    goto :goto_0

    .line 620
    :cond_0
    invoke-virtual {p1}, Ljava/util/ArrayList;->size()I

    move-result v1

    if-lez v1, :cond_2

    .line 621
    new-instance v1, Landroid/os/Bundle;

    invoke-direct {v1}, Landroid/os/Bundle;-><init>()V

    .line 622
    const-string v2, "MULTIPLEFILENAMES"

    invoke-virtual {v1, v2, p1}, Landroid/os/Bundle;->putStringArrayList(Ljava/lang/String;Ljava/util/ArrayList;)V

    .line 624
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {p1}, Lcom/synconset/MultiImageChooserActivity;->access$400(Lcom/synconset/MultiImageChooserActivity;)Landroid/database/Cursor;

    move-result-object p1

    if-eqz p1, :cond_1

    .line 625
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {p1}, Lcom/synconset/MultiImageChooserActivity;->access$400(Lcom/synconset/MultiImageChooserActivity;)Landroid/database/Cursor;

    move-result-object p1

    invoke-interface {p1}, Landroid/database/Cursor;->getCount()I

    move-result p1

    const-string v2, "TOTALFILES"

    invoke-virtual {v1, v2, p1}, Landroid/os/Bundle;->putInt(Ljava/lang/String;I)V

    .line 628
    :cond_1
    invoke-static {}, Lcom/synconset/ResultIPC;->get()Lcom/synconset/ResultIPC;

    move-result-object p1

    invoke-virtual {p1, v1}, Lcom/synconset/ResultIPC;->setLargeData(Landroid/os/Bundle;)I

    move-result p1

    .line 629
    const-string v1, "bigdata:synccode"

    invoke-virtual {v0, v1, p1}, Landroid/content/Intent;->putExtra(Ljava/lang/String;I)Landroid/content/Intent;

    .line 630
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->this$0:Lcom/synconset/MultiImageChooserActivity;

    const/4 v1, -0x1

    invoke-virtual {p1, v1, v0}, Lcom/synconset/MultiImageChooserActivity;->setResult(ILandroid/content/Intent;)V

    goto :goto_0

    .line 633
    :cond_2
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-virtual {p1, v2, v0}, Lcom/synconset/MultiImageChooserActivity;->setResult(ILandroid/content/Intent;)V

    .line 636
    :goto_0
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-static {p1}, Lcom/synconset/MultiImageChooserActivity;->access$1400(Lcom/synconset/MultiImageChooserActivity;)Landroid/app/ProgressDialog;

    move-result-object p1

    invoke-virtual {p1}, Landroid/app/ProgressDialog;->dismiss()V

    .line 637
    iget-object p1, p0, Lcom/synconset/MultiImageChooserActivity$ResizeImagesTask;->this$0:Lcom/synconset/MultiImageChooserActivity;

    invoke-virtual {p1}, Lcom/synconset/MultiImageChooserActivity;->finish()V

    return-void
.end method
