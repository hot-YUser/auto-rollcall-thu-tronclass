.class public Lcom/getcapacitor/plugin/Filesystem;
.super Lcom/getcapacitor/Plugin;
.source "Filesystem.java"


# annotations
.annotation runtime Lcom/getcapacitor/NativePlugin;
    permissionRequestCode = 0x233e
    permissions = {
        "android.permission.READ_EXTERNAL_STORAGE",
        "android.permission.WRITE_EXTERNAL_STORAGE"
    }
    requestCodes = {
        0x2334,
        0x2335,
        0x2336,
        0x2337,
        0x2338,
        0x2339,
        0x233a,
        0x233b,
        0x233c,
        0x233d
    }
.end annotation


# static fields
.field static final synthetic $assertionsDisabled:Z = false

.field private static final PERMISSION_DENIED_ERROR:Ljava/lang/String; = "Unable to do file operation, user denied permission request"


# direct methods
.method static constructor <clinit>()V
    .locals 0

    return-void
.end method

.method public constructor <init>()V
    .locals 0

    .line 52
    invoke-direct {p0}, Lcom/getcapacitor/Plugin;-><init>()V

    return-void
.end method

.method private _copy(Lcom/getcapacitor/PluginCall;Z)V
    .locals 5

    .line 520
    invoke-virtual {p0, p1}, Lcom/getcapacitor/plugin/Filesystem;->saveCall(Lcom/getcapacitor/PluginCall;)V

    .line 522
    const-string v0, "from"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 523
    const-string v1, "to"

    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    .line 524
    const-string v2, "directory"

    invoke-virtual {p1, v2}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    .line 525
    const-string v3, "toDirectory"

    invoke-virtual {p1, v3}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    if-nez v3, :cond_0

    move-object v3, v2

    :cond_0
    if-eqz v0, :cond_c

    .line 531
    invoke-virtual {v0}, Ljava/lang/String;->isEmpty()Z

    move-result v4

    if-nez v4, :cond_c

    if-eqz v1, :cond_c

    invoke-virtual {v1}, Ljava/lang/String;->isEmpty()Z

    move-result v4

    if-eqz v4, :cond_1

    goto/16 :goto_0

    .line 536
    :cond_1
    invoke-direct {p0, v0, v2}, Lcom/getcapacitor/plugin/Filesystem;->getFileObject(Ljava/lang/String;Ljava/lang/String;)Ljava/io/File;

    move-result-object v0

    .line 537
    invoke-direct {p0, v1, v3}, Lcom/getcapacitor/plugin/Filesystem;->getFileObject(Ljava/lang/String;Ljava/lang/String;)Ljava/io/File;

    move-result-object v1

    .line 542
    invoke-virtual {v1, v0}, Ljava/io/File;->equals(Ljava/lang/Object;)Z

    move-result v4

    if-eqz v4, :cond_2

    .line 543
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->success()V

    return-void

    .line 547
    :cond_2
    invoke-virtual {v0}, Ljava/io/File;->exists()Z

    move-result v4

    if-nez v4, :cond_3

    .line 548
    const-string p2, "The source object does not exist"

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 552
    :cond_3
    invoke-virtual {v1}, Ljava/io/File;->getParentFile()Ljava/io/File;

    move-result-object v4

    invoke-virtual {v4}, Ljava/io/File;->isFile()Z

    move-result v4

    if-eqz v4, :cond_4

    .line 553
    const-string p2, "The parent object of the destination is a file"

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 557
    :cond_4
    invoke-virtual {v1}, Ljava/io/File;->getParentFile()Ljava/io/File;

    move-result-object v4

    invoke-virtual {v4}, Ljava/io/File;->exists()Z

    move-result v4

    if-nez v4, :cond_5

    .line 558
    const-string p2, "The parent object of the destination does not exist"

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 562
    :cond_5
    invoke-direct {p0, v2}, Lcom/getcapacitor/plugin/Filesystem;->isPublicDirectory(Ljava/lang/String;)Z

    move-result v2

    if-nez v2, :cond_6

    invoke-direct {p0, v3}, Lcom/getcapacitor/plugin/Filesystem;->isPublicDirectory(Ljava/lang/String;)Z

    move-result v2

    if-eqz v2, :cond_8

    .line 563
    :cond_6
    const-string v2, "android.permission.WRITE_EXTERNAL_STORAGE"

    if-eqz p2, :cond_7

    const/16 v3, 0x233c

    .line 564
    invoke-direct {p0, v3, v2}, Lcom/getcapacitor/plugin/Filesystem;->isStoragePermissionGranted(ILjava/lang/String;)Z

    move-result v2

    if-nez v2, :cond_8

    return-void

    :cond_7
    const/16 v3, 0x233d

    .line 568
    invoke-direct {p0, v3, v2}, Lcom/getcapacitor/plugin/Filesystem;->isStoragePermissionGranted(ILjava/lang/String;)Z

    move-result v2

    if-nez v2, :cond_8

    return-void

    .line 574
    :cond_8
    invoke-virtual {v1}, Ljava/io/File;->isDirectory()Z

    move-result v2

    if-eqz v2, :cond_9

    .line 575
    const-string p2, "Cannot overwrite a directory"

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 579
    :cond_9
    invoke-virtual {v1}, Ljava/io/File;->delete()Z

    if-eqz p2, :cond_a

    .line 584
    invoke-virtual {v0, v1}, Ljava/io/File;->renameTo(Ljava/io/File;)Z

    move-result p2

    if-nez p2, :cond_b

    .line 586
    const-string p2, "Unable to rename, unknown reason"

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 591
    :cond_a
    :try_start_0
    invoke-static {v0, v1}, Lcom/getcapacitor/plugin/Filesystem;->copyRecursively(Ljava/io/File;Ljava/io/File;)V
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    .line 598
    :cond_b
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->success()V

    return-void

    :catch_0
    move-exception p2

    .line 593
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Unable to perform action: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2}, Ljava/io/IOException;->getLocalizedMessage()Ljava/lang/String;

    move-result-object p2

    invoke-virtual {v0, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 532
    :cond_c
    :goto_0
    const-string p2, "Both to and from must be provided"

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void
.end method

.method private static copyRecursively(Ljava/io/File;Ljava/io/File;)V
    .locals 7
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 496
    invoke-virtual {p0}, Ljava/io/File;->isDirectory()Z

    move-result v0

    if-eqz v0, :cond_1

    .line 497
    invoke-virtual {p1}, Ljava/io/File;->mkdir()Z

    .line 499
    invoke-virtual {p0}, Ljava/io/File;->list()[Ljava/lang/String;

    move-result-object v0

    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_0

    aget-object v3, v0, v2

    .line 500
    new-instance v4, Ljava/io/File;

    invoke-direct {v4, p0, v3}, Ljava/io/File;-><init>(Ljava/io/File;Ljava/lang/String;)V

    new-instance v5, Ljava/io/File;

    invoke-direct {v5, p1, v3}, Ljava/io/File;-><init>(Ljava/io/File;Ljava/lang/String;)V

    invoke-static {v4, v5}, Lcom/getcapacitor/plugin/Filesystem;->copyRecursively(Ljava/io/File;Ljava/io/File;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_0
    return-void

    .line 506
    :cond_1
    invoke-virtual {p1}, Ljava/io/File;->getParentFile()Ljava/io/File;

    move-result-object v0

    invoke-virtual {v0}, Ljava/io/File;->exists()Z

    move-result v0

    if-nez v0, :cond_2

    .line 507
    invoke-virtual {p1}, Ljava/io/File;->getParentFile()Ljava/io/File;

    move-result-object v0

    invoke-virtual {v0}, Ljava/io/File;->mkdirs()Z

    .line 510
    :cond_2
    invoke-virtual {p1}, Ljava/io/File;->exists()Z

    move-result v0

    if-nez v0, :cond_3

    .line 511
    invoke-virtual {p1}, Ljava/io/File;->createNewFile()Z

    .line 514
    :cond_3
    new-instance v0, Ljava/io/FileInputStream;

    invoke-direct {v0, p0}, Ljava/io/FileInputStream;-><init>(Ljava/io/File;)V

    invoke-virtual {v0}, Ljava/io/FileInputStream;->getChannel()Ljava/nio/channels/FileChannel;

    move-result-object p0

    :try_start_0
    new-instance v0, Ljava/io/FileOutputStream;

    invoke-direct {v0, p1}, Ljava/io/FileOutputStream;-><init>(Ljava/io/File;)V

    invoke-virtual {v0}, Ljava/io/FileOutputStream;->getChannel()Ljava/nio/channels/FileChannel;

    move-result-object p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_2

    .line 515
    :try_start_1
    invoke-virtual {p0}, Ljava/nio/channels/FileChannel;->size()J

    move-result-wide v5

    const-wide/16 v3, 0x0

    move-object v1, p1

    move-object v2, p0

    invoke-virtual/range {v1 .. v6}, Ljava/nio/channels/FileChannel;->transferFrom(Ljava/nio/channels/ReadableByteChannel;JJ)J
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    if-eqz p1, :cond_4

    .line 516
    :try_start_2
    invoke-virtual {p1}, Ljava/nio/channels/FileChannel;->close()V
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_2

    :cond_4
    if-eqz p0, :cond_5

    invoke-virtual {p0}, Ljava/nio/channels/FileChannel;->close()V

    :cond_5
    return-void

    :catchall_0
    move-exception v0

    if-eqz p1, :cond_6

    .line 514
    :try_start_3
    invoke-virtual {p1}, Ljava/nio/channels/FileChannel;->close()V
    :try_end_3
    .catchall {:try_start_3 .. :try_end_3} :catchall_1

    goto :goto_1

    :catchall_1
    move-exception p1

    :try_start_4
    invoke-virtual {v0, p1}, Ljava/lang/Throwable;->addSuppressed(Ljava/lang/Throwable;)V

    :cond_6
    :goto_1
    throw v0
    :try_end_4
    .catchall {:try_start_4 .. :try_end_4} :catchall_2

    :catchall_2
    move-exception p1

    if-eqz p0, :cond_7

    :try_start_5
    invoke-virtual {p0}, Ljava/nio/channels/FileChannel;->close()V
    :try_end_5
    .catchall {:try_start_5 .. :try_end_5} :catchall_3

    goto :goto_2

    :catchall_3
    move-exception p0

    invoke-virtual {p1, p0}, Ljava/lang/Throwable;->addSuppressed(Ljava/lang/Throwable;)V

    :cond_7
    :goto_2
    throw p1
.end method

.method private static deleteRecursively(Ljava/io/File;)V
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 476
    invoke-virtual {p0}, Ljava/io/File;->isFile()Z

    move-result v0

    if-eqz v0, :cond_0

    .line 477
    invoke-virtual {p0}, Ljava/io/File;->delete()Z

    return-void

    .line 481
    :cond_0
    invoke-virtual {p0}, Ljava/io/File;->listFiles()[Ljava/io/File;

    move-result-object v0

    array-length v1, v0

    const/4 v2, 0x0

    :goto_0
    if-ge v2, v1, :cond_1

    aget-object v3, v0, v2

    .line 482
    invoke-static {v3}, Lcom/getcapacitor/plugin/Filesystem;->deleteRecursively(Ljava/io/File;)V

    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    .line 485
    :cond_1
    invoke-virtual {p0}, Ljava/io/File;->delete()Z

    return-void
.end method

.method private getDirectory(Ljava/lang/String;)Ljava/io/File;
    .locals 3

    .line 73
    iget-object v0, p0, Lcom/getcapacitor/plugin/Filesystem;->bridge:Lcom/getcapacitor/Bridge;

    invoke-virtual {v0}, Lcom/getcapacitor/Bridge;->getContext()Landroid/content/Context;

    move-result-object v0

    .line 74
    invoke-virtual {p1}, Ljava/lang/String;->hashCode()I

    invoke-virtual {p1}, Ljava/lang/String;->hashCode()I

    move-result v1

    const/4 v2, -0x1

    sparse-switch v1, :sswitch_data_0

    goto :goto_0

    :sswitch_0
    const-string v1, "EXTERNAL_STORAGE"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_0

    goto :goto_0

    :cond_0
    const/4 v2, 0x4

    goto :goto_0

    :sswitch_1
    const-string v1, "CACHE"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_1

    goto :goto_0

    :cond_1
    const/4 v2, 0x3

    goto :goto_0

    :sswitch_2
    const-string v1, "DATA"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_2

    goto :goto_0

    :cond_2
    const/4 v2, 0x2

    goto :goto_0

    :sswitch_3
    const-string v1, "DOCUMENTS"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_3

    goto :goto_0

    :cond_3
    const/4 v2, 0x1

    goto :goto_0

    :sswitch_4
    const-string v1, "EXTERNAL"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_4

    goto :goto_0

    :cond_4
    const/4 v2, 0x0

    :goto_0
    const/4 p1, 0x0

    packed-switch v2, :pswitch_data_0

    return-object p1

    .line 84
    :pswitch_0
    invoke-static {}, Landroid/os/Environment;->getExternalStorageDirectory()Ljava/io/File;

    move-result-object p1

    return-object p1

    .line 80
    :pswitch_1
    invoke-virtual {v0}, Landroid/content/Context;->getCacheDir()Ljava/io/File;

    move-result-object p1

    return-object p1

    .line 78
    :pswitch_2
    invoke-virtual {v0}, Landroid/content/Context;->getFilesDir()Ljava/io/File;

    move-result-object p1

    return-object p1

    .line 76
    :pswitch_3
    sget-object p1, Landroid/os/Environment;->DIRECTORY_DOCUMENTS:Ljava/lang/String;

    invoke-static {p1}, Landroid/os/Environment;->getExternalStoragePublicDirectory(Ljava/lang/String;)Ljava/io/File;

    move-result-object p1

    return-object p1

    .line 82
    :pswitch_4
    invoke-virtual {v0, p1}, Landroid/content/Context;->getExternalFilesDir(Ljava/lang/String;)Ljava/io/File;

    move-result-object p1

    return-object p1

    :sswitch_data_0
    .sparse-switch
        -0x3de0ac35 -> :sswitch_4
        -0x21aa9d68 -> :sswitch_3
        0x1fe7aa -> :sswitch_2
        0x3ceb762 -> :sswitch_1
        0x3c6bcde7 -> :sswitch_0
    .end sparse-switch

    :pswitch_data_0
    .packed-switch 0x0
        :pswitch_4
        :pswitch_3
        :pswitch_2
        :pswitch_1
        :pswitch_0
    .end packed-switch
.end method

.method private getDirectoryParameter(Lcom/getcapacitor/PluginCall;)Ljava/lang/String;
    .locals 1

    .line 636
    const-string v0, "directory"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method private getEncoding(Ljava/lang/String;)Ljava/nio/charset/Charset;
    .locals 3

    const/4 v0, 0x0

    if-nez p1, :cond_0

    return-object v0

    .line 61
    :cond_0
    invoke-virtual {p1}, Ljava/lang/String;->hashCode()I

    invoke-virtual {p1}, Ljava/lang/String;->hashCode()I

    move-result v1

    const/4 v2, -0x1

    sparse-switch v1, :sswitch_data_0

    goto :goto_0

    :sswitch_0
    const-string v1, "utf16"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_1

    goto :goto_0

    :cond_1
    const/4 v2, 0x2

    goto :goto_0

    :sswitch_1
    const-string v1, "ascii"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_2

    goto :goto_0

    :cond_2
    const/4 v2, 0x1

    goto :goto_0

    :sswitch_2
    const-string v1, "utf8"

    invoke-virtual {p1, v1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-nez p1, :cond_3

    goto :goto_0

    :cond_3
    const/4 v2, 0x0

    :goto_0
    packed-switch v2, :pswitch_data_0

    return-object v0

    .line 65
    :pswitch_0
    sget-object p1, Ljava/nio/charset/StandardCharsets;->UTF_16:Ljava/nio/charset/Charset;

    return-object p1

    .line 67
    :pswitch_1
    sget-object p1, Ljava/nio/charset/StandardCharsets;->US_ASCII:Ljava/nio/charset/Charset;

    return-object p1

    .line 63
    :pswitch_2
    sget-object p1, Ljava/nio/charset/StandardCharsets;->UTF_8:Ljava/nio/charset/Charset;

    return-object p1

    nop

    :sswitch_data_0
    .sparse-switch
        0x36ef71 -> :sswitch_2
        0x58caf51 -> :sswitch_1
        0x6a6fe0c -> :sswitch_0
    .end sparse-switch

    :pswitch_data_0
    .packed-switch 0x0
        :pswitch_2
        :pswitch_1
        :pswitch_0
    .end packed-switch
.end method

.method private getFileObject(Ljava/lang/String;Ljava/lang/String;)Ljava/io/File;
    .locals 3

    if-nez p2, :cond_1

    .line 91
    invoke-static {p1}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v0

    .line 92
    invoke-virtual {v0}, Landroid/net/Uri;->getScheme()Ljava/lang/String;

    move-result-object v1

    if-eqz v1, :cond_0

    invoke-virtual {v0}, Landroid/net/Uri;->getScheme()Ljava/lang/String;

    move-result-object v1

    const-string v2, "file"

    invoke-virtual {v1, v2}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v1

    if-eqz v1, :cond_1

    .line 93
    :cond_0
    new-instance p1, Ljava/io/File;

    invoke-virtual {v0}, Landroid/net/Uri;->getPath()Ljava/lang/String;

    move-result-object p2

    invoke-direct {p1, p2}, Ljava/io/File;-><init>(Ljava/lang/String;)V

    return-object p1

    .line 97
    :cond_1
    invoke-direct {p0, p2}, Lcom/getcapacitor/plugin/Filesystem;->getDirectory(Ljava/lang/String;)Ljava/io/File;

    move-result-object p2

    if-nez p2, :cond_2

    const/4 p1, 0x0

    return-object p1

    .line 102
    :cond_2
    invoke-virtual {p2}, Ljava/io/File;->exists()Z

    move-result v0

    if-nez v0, :cond_3

    .line 103
    invoke-virtual {p2}, Ljava/io/File;->mkdir()Z

    .line 107
    :cond_3
    new-instance v0, Ljava/io/File;

    invoke-direct {v0, p2, p1}, Ljava/io/File;-><init>(Ljava/io/File;Ljava/lang/String;)V

    return-object v0
.end method

.method private getInputStream(Ljava/lang/String;Ljava/lang/String;)Ljava/io/InputStream;
    .locals 2
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    if-nez p2, :cond_1

    .line 112
    invoke-static {p1}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object p1

    .line 113
    invoke-virtual {p1}, Landroid/net/Uri;->getScheme()Ljava/lang/String;

    move-result-object p2

    const-string v0, "content"

    invoke-virtual {p2, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p2

    if-eqz p2, :cond_0

    .line 114
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Filesystem;->getContext()Landroid/content/Context;

    move-result-object p2

    invoke-virtual {p2}, Landroid/content/Context;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object p2

    invoke-virtual {p2, p1}, Landroid/content/ContentResolver;->openInputStream(Landroid/net/Uri;)Ljava/io/InputStream;

    move-result-object p1

    return-object p1

    .line 116
    :cond_0
    new-instance p2, Ljava/io/FileInputStream;

    new-instance v0, Ljava/io/File;

    invoke-virtual {p1}, Landroid/net/Uri;->getPath()Ljava/lang/String;

    move-result-object p1

    invoke-direct {v0, p1}, Ljava/io/File;-><init>(Ljava/lang/String;)V

    invoke-direct {p2, v0}, Ljava/io/FileInputStream;-><init>(Ljava/io/File;)V

    return-object p2

    .line 120
    :cond_1
    invoke-direct {p0, p2}, Lcom/getcapacitor/plugin/Filesystem;->getDirectory(Ljava/lang/String;)Ljava/io/File;

    move-result-object p2

    if-eqz p2, :cond_2

    .line 126
    new-instance v0, Ljava/io/FileInputStream;

    new-instance v1, Ljava/io/File;

    invoke-direct {v1, p2, p1}, Ljava/io/File;-><init>(Ljava/io/File;Ljava/lang/String;)V

    invoke-direct {v0, v1}, Ljava/io/FileInputStream;-><init>(Ljava/io/File;)V

    return-object v0

    .line 123
    :cond_2
    new-instance p1, Ljava/io/IOException;

    const-string p2, "Directory not found"

    invoke-direct {p1, p2}, Ljava/io/IOException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method private isPublicDirectory(Ljava/lang/String;)Z
    .locals 1

    .line 644
    const-string v0, "DOCUMENTS"

    invoke-virtual {v0, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v0

    if-nez v0, :cond_1

    const-string v0, "EXTERNAL_STORAGE"

    invoke-virtual {v0, p1}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p1

    if-eqz p1, :cond_0

    goto :goto_0

    :cond_0
    const/4 p1, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 p1, 0x1

    :goto_1
    return p1
.end method

.method private isStoragePermissionGranted(ILjava/lang/String;)Z
    .locals 2

    .line 619
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Filesystem;->getLogTag()Ljava/lang/String;

    move-result-object p1

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Permission \'"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    const-string v0, "\' always is granted"

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-static {p1, p2}, Lcom/getcapacitor/Logger;->verbose(Ljava/lang/String;Ljava/lang/String;)V

    const/4 p1, 0x1

    return p1
.end method

.method private readFileAsBase64EncodedData(Ljava/io/InputStream;)Ljava/lang/String;
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 143
    check-cast p1, Ljava/io/FileInputStream;

    .line 144
    new-instance v0, Ljava/io/ByteArrayOutputStream;

    invoke-direct {v0}, Ljava/io/ByteArrayOutputStream;-><init>()V

    const/16 v1, 0x400

    .line 146
    new-array v1, v1, [B

    .line 149
    :goto_0
    invoke-virtual {p1, v1}, Ljava/io/FileInputStream;->read([B)I

    move-result v2

    const/4 v3, -0x1

    if-eq v2, v3, :cond_0

    const/4 v3, 0x0

    .line 150
    invoke-virtual {v0, v1, v3, v2}, Ljava/io/ByteArrayOutputStream;->write([BII)V

    goto :goto_0

    .line 152
    :cond_0
    invoke-virtual {p1}, Ljava/io/FileInputStream;->close()V

    .line 154
    new-instance p1, Ljava/lang/String;

    invoke-virtual {v0}, Ljava/io/ByteArrayOutputStream;->toByteArray()[B

    move-result-object v0

    const/4 v1, 0x2

    invoke-static {v0, v1}, Landroid/util/Base64;->encodeToString([BI)Ljava/lang/String;

    move-result-object v0

    invoke-direct {p1, v0}, Ljava/lang/String;-><init>(Ljava/lang/String;)V

    return-object p1
.end method

.method private readFileAsString(Ljava/io/InputStream;Ljava/lang/String;)Ljava/lang/String;
    .locals 4
    .annotation system Ldalvik/annotation/Throws;
        value = {
            Ljava/io/IOException;
        }
    .end annotation

    .line 130
    new-instance v0, Ljava/io/ByteArrayOutputStream;

    invoke-direct {v0}, Ljava/io/ByteArrayOutputStream;-><init>()V

    const/16 v1, 0x400

    .line 132
    new-array v1, v1, [B

    .line 135
    :goto_0
    invoke-virtual {p1, v1}, Ljava/io/InputStream;->read([B)I

    move-result v2

    const/4 v3, -0x1

    if-eq v2, v3, :cond_0

    const/4 v3, 0x0

    .line 136
    invoke-virtual {v0, v1, v3, v2}, Ljava/io/ByteArrayOutputStream;->write([BII)V

    goto :goto_0

    .line 139
    :cond_0
    invoke-virtual {v0, p2}, Ljava/io/ByteArrayOutputStream;->toString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object p1

    return-object p1
.end method

.method private saveFile(Lcom/getcapacitor/PluginCall;Ljava/io/File;Ljava/lang/String;)V
    .locals 8

    .line 257
    const-string v0, "encoding"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const/4 v1, 0x0

    .line 258
    invoke-static {v1}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v2

    const-string v3, "append"

    invoke-virtual {p1, v3, v2}, Lcom/getcapacitor/PluginCall;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v2

    .line 260
    invoke-direct {p0, v0}, Lcom/getcapacitor/plugin/Filesystem;->getEncoding(Ljava/lang/String;)Ljava/nio/charset/Charset;

    move-result-object v3

    if-eqz v0, :cond_0

    if-nez v3, :cond_0

    .line 262
    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "Unsupported encoding provided: "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 268
    :cond_0
    const-string v0, "\' failed. Error: "

    const/4 v4, 0x1

    if-eqz v3, :cond_1

    .line 269
    :try_start_0
    new-instance v5, Ljava/io/BufferedWriter;

    new-instance v6, Ljava/io/OutputStreamWriter;

    new-instance v7, Ljava/io/FileOutputStream;

    invoke-direct {v7, p2, v2}, Ljava/io/FileOutputStream;-><init>(Ljava/io/File;Z)V

    invoke-direct {v6, v7, v3}, Ljava/io/OutputStreamWriter;-><init>(Ljava/io/OutputStream;Ljava/nio/charset/Charset;)V

    invoke-direct {v5, v6}, Ljava/io/BufferedWriter;-><init>(Ljava/io/Writer;)V
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_1

    .line 271
    :try_start_1
    invoke-virtual {v5, p3}, Ljava/io/BufferedWriter;->write(Ljava/lang/String;)V
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    .line 273
    :try_start_2
    invoke-virtual {v5}, Ljava/io/BufferedWriter;->close()V
    :try_end_2
    .catch Ljava/io/IOException; {:try_start_2 .. :try_end_2} :catch_0

    goto :goto_2

    :catch_0
    move-exception p3

    move v2, v4

    goto :goto_1

    :catchall_0
    move-exception p3

    .line 269
    :try_start_3
    invoke-virtual {v5}, Ljava/io/BufferedWriter;->close()V
    :try_end_3
    .catchall {:try_start_3 .. :try_end_3} :catchall_1

    goto :goto_0

    :catchall_1
    move-exception v2

    :try_start_4
    invoke-virtual {p3, v2}, Ljava/lang/Throwable;->addSuppressed(Ljava/lang/Throwable;)V

    :goto_0
    throw p3
    :try_end_4
    .catch Ljava/io/IOException; {:try_start_4 .. :try_end_4} :catch_1

    :catch_1
    move-exception p3

    move v2, v1

    .line 274
    :goto_1
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Filesystem;->getLogTag()Ljava/lang/String;

    move-result-object v5

    new-instance v6, Ljava/lang/StringBuilder;

    const-string v7, "Creating text file \'"

    invoke-direct {v6, v7}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2}, Ljava/io/File;->getPath()Ljava/lang/String;

    move-result-object v7

    invoke-virtual {v6, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v6

    const-string v7, "\' with charset \'"

    invoke-virtual {v6, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v6

    invoke-virtual {v6, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/Object;)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {p3}, Ljava/io/IOException;->getMessage()Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v0, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v5, v0, p3}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    goto :goto_5

    .line 278
    :cond_1
    const-string v3, ","

    invoke-virtual {p3, v3}, Ljava/lang/String;->indexOf(Ljava/lang/String;)I

    move-result v5

    const/4 v6, -0x1

    if-eq v5, v6, :cond_2

    .line 279
    invoke-virtual {p3, v3}, Ljava/lang/String;->split(Ljava/lang/String;)[Ljava/lang/String;

    move-result-object p3

    aget-object p3, p3, v4

    .line 281
    :cond_2
    :try_start_5
    new-instance v3, Ljava/io/FileOutputStream;

    invoke-direct {v3, p2, v2}, Ljava/io/FileOutputStream;-><init>(Ljava/io/File;Z)V
    :try_end_5
    .catch Ljava/io/IOException; {:try_start_5 .. :try_end_5} :catch_3

    const/4 v2, 0x2

    .line 282
    :try_start_6
    invoke-static {p3, v2}, Landroid/util/Base64;->decode(Ljava/lang/String;I)[B

    move-result-object p3

    invoke-virtual {v3, p3}, Ljava/io/FileOutputStream;->write([B)V
    :try_end_6
    .catchall {:try_start_6 .. :try_end_6} :catchall_2

    .line 284
    :try_start_7
    invoke-virtual {v3}, Ljava/io/FileOutputStream;->close()V
    :try_end_7
    .catch Ljava/io/IOException; {:try_start_7 .. :try_end_7} :catch_2

    :goto_2
    move v2, v4

    goto :goto_5

    :catch_2
    move-exception p3

    move v2, v4

    goto :goto_4

    :catchall_2
    move-exception p3

    .line 281
    :try_start_8
    invoke-virtual {v3}, Ljava/io/FileOutputStream;->close()V
    :try_end_8
    .catchall {:try_start_8 .. :try_end_8} :catchall_3

    goto :goto_3

    :catchall_3
    move-exception v2

    :try_start_9
    invoke-virtual {p3, v2}, Ljava/lang/Throwable;->addSuppressed(Ljava/lang/Throwable;)V

    :goto_3
    throw p3
    :try_end_9
    .catch Ljava/io/IOException; {:try_start_9 .. :try_end_9} :catch_3

    :catch_3
    move-exception p3

    move v2, v1

    .line 285
    :goto_4
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Filesystem;->getLogTag()Ljava/lang/String;

    move-result-object v3

    new-instance v5, Ljava/lang/StringBuilder;

    const-string v6, "Creating binary file \'"

    invoke-direct {v5, v6}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2}, Ljava/io/File;->getPath()Ljava/lang/String;

    move-result-object v6

    invoke-virtual {v5, v6}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v5

    invoke-virtual {v5, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {p3}, Ljava/io/IOException;->getMessage()Ljava/lang/String;

    move-result-object v5

    invoke-virtual {v0, v5}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {v3, v0, p3}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    :goto_5
    if-eqz v2, :cond_4

    .line 291
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Filesystem;->getDirectoryParameter(Lcom/getcapacitor/PluginCall;)Ljava/lang/String;

    move-result-object p3

    invoke-direct {p0, p3}, Lcom/getcapacitor/plugin/Filesystem;->isPublicDirectory(Ljava/lang/String;)Z

    move-result p3

    if-eqz p3, :cond_3

    .line 292
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Filesystem;->getContext()Landroid/content/Context;

    move-result-object p3

    new-array v0, v4, [Ljava/lang/String;

    invoke-virtual {p2}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object v2

    aput-object v2, v0, v1

    const/4 v1, 0x0

    invoke-static {p3, v0, v1, v1}, Landroid/media/MediaScannerConnection;->scanFile(Landroid/content/Context;[Ljava/lang/String;[Ljava/lang/String;Landroid/media/MediaScannerConnection$OnScanCompletedListener;)V

    .line 294
    :cond_3
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Filesystem;->getLogTag()Ljava/lang/String;

    move-result-object p3

    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "File \'"

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2}, Ljava/io/File;->getAbsolutePath()Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    const-string v1, "\' saved!"

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-static {p3, v0}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    .line 295
    new-instance p3, Lcom/getcapacitor/JSObject;

    invoke-direct {p3}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 296
    invoke-static {p2}, Landroid/net/Uri;->fromFile(Ljava/io/File;)Landroid/net/Uri;

    move-result-object p2

    invoke-virtual {p2}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object p2

    const-string v0, "uri"

    invoke-virtual {p3, v0, p2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 297
    invoke-virtual {p1, p3}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    goto :goto_6

    .line 299
    :cond_4
    const-string p2, "FILE_NOTCREATED"

    invoke-virtual {p1, p2}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    :goto_6
    return-void
.end method


# virtual methods
.method public appendFile(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 306
    :try_start_0
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->getData()Lcom/getcapacitor/JSObject;

    move-result-object v0

    const-string v1, "append"

    const/4 v2, 0x1

    invoke-static {v2}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v2

    invoke-virtual {v0, v1, v2}, Lcom/getcapacitor/JSObject;->putOpt(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;
    :try_end_0
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    .line 309
    :catch_0
    invoke-virtual {p0, p1}, Lcom/getcapacitor/plugin/Filesystem;->writeFile(Lcom/getcapacitor/PluginCall;)V

    return-void
.end method

.method public copy(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    const/4 v0, 0x0

    .line 608
    invoke-direct {p0, p1, v0}, Lcom/getcapacitor/plugin/Filesystem;->_copy(Lcom/getcapacitor/PluginCall;Z)V

    return-void
.end method

.method public deleteFile(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 314
    invoke-virtual {p0, p1}, Lcom/getcapacitor/plugin/Filesystem;->saveCall(Lcom/getcapacitor/PluginCall;)V

    .line 315
    const-string v0, "path"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 316
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Filesystem;->getDirectoryParameter(Lcom/getcapacitor/PluginCall;)Ljava/lang/String;

    move-result-object v1

    .line 318
    invoke-direct {p0, v0, v1}, Lcom/getcapacitor/plugin/Filesystem;->getFileObject(Ljava/lang/String;Ljava/lang/String;)Ljava/io/File;

    move-result-object v0

    .line 320
    invoke-direct {p0, v1}, Lcom/getcapacitor/plugin/Filesystem;->isPublicDirectory(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_0

    const/16 v1, 0x2338

    const-string v2, "android.permission.WRITE_EXTERNAL_STORAGE"

    .line 321
    invoke-direct {p0, v1, v2}, Lcom/getcapacitor/plugin/Filesystem;->isStoragePermissionGranted(ILjava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_3

    .line 322
    :cond_0
    invoke-virtual {v0}, Ljava/io/File;->exists()Z

    move-result v1

    if-nez v1, :cond_1

    .line 323
    const-string v0, "File does not exist"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 327
    :cond_1
    invoke-virtual {v0}, Ljava/io/File;->delete()Z

    move-result v0

    if-nez v0, :cond_2

    .line 329
    const-string v0, "Unable to delete file"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    goto :goto_0

    .line 331
    :cond_2
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->success()V

    :cond_3
    :goto_0
    return-void
.end method

.method public getUri(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 430
    invoke-virtual {p0, p1}, Lcom/getcapacitor/plugin/Filesystem;->saveCall(Lcom/getcapacitor/PluginCall;)V

    .line 431
    const-string v0, "path"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 432
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Filesystem;->getDirectoryParameter(Lcom/getcapacitor/PluginCall;)Ljava/lang/String;

    move-result-object v1

    .line 434
    invoke-direct {p0, v0, v1}, Lcom/getcapacitor/plugin/Filesystem;->getFileObject(Ljava/lang/String;Ljava/lang/String;)Ljava/io/File;

    move-result-object v0

    .line 436
    invoke-direct {p0, v1}, Lcom/getcapacitor/plugin/Filesystem;->isPublicDirectory(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_0

    const/16 v1, 0x233a

    const-string v2, "android.permission.READ_EXTERNAL_STORAGE"

    .line 437
    invoke-direct {p0, v1, v2}, Lcom/getcapacitor/plugin/Filesystem;->isStoragePermissionGranted(ILjava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_1

    .line 438
    :cond_0
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 439
    invoke-static {v0}, Landroid/net/Uri;->fromFile(Ljava/io/File;)Landroid/net/Uri;

    move-result-object v0

    invoke-virtual {v0}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object v0

    const-string v2, "uri"

    invoke-virtual {v1, v2, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 440
    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    :cond_1
    return-void
.end method

.method protected handleRequestPermissionsResult(I[Ljava/lang/String;[I)V
    .locals 5

    .line 649
    invoke-super {p0, p1, p2, p3}, Lcom/getcapacitor/Plugin;->handleRequestPermissionsResult(I[Ljava/lang/String;[I)V

    .line 651
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Filesystem;->getLogTag()Ljava/lang/String;

    move-result-object v0

    const-string v1, "handling request perms result"

    invoke-static {v0, v1}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    .line 653
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Filesystem;->getSavedCall()Lcom/getcapacitor/PluginCall;

    move-result-object v0

    if-nez v0, :cond_0

    .line 654
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Filesystem;->getLogTag()Ljava/lang/String;

    move-result-object p1

    const-string p2, "No stored plugin call for permissions request result"

    invoke-static {p1, p2}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    return-void

    .line 658
    :cond_0
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Filesystem;->getSavedCall()Lcom/getcapacitor/PluginCall;

    move-result-object v0

    const/4 v1, 0x0

    .line 660
    :goto_0
    array-length v2, p3

    if-ge v1, v2, :cond_2

    .line 661
    aget v2, p3, v1

    .line 662
    aget-object v3, p2, v1

    const/4 v4, -0x1

    if-ne v2, v4, :cond_1

    .line 664
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Filesystem;->getLogTag()Ljava/lang/String;

    move-result-object p1

    new-instance p2, Ljava/lang/StringBuilder;

    const-string p3, "User denied storage permission: "

    invoke-direct {p2, p3}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {p2, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object p2

    invoke-virtual {p2}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p2

    invoke-static {p1, p2}, Lcom/getcapacitor/Logger;->debug(Ljava/lang/String;Ljava/lang/String;)V

    .line 665
    const-string p1, "Unable to do file operation, user denied permission request"

    invoke-virtual {v0, p1}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    .line 666
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Filesystem;->freeSavedCall()V

    return-void

    :cond_1
    add-int/lit8 v1, v1, 0x1

    goto :goto_0

    :cond_2
    const/16 p2, 0x2334

    if-ne p1, p2, :cond_3

    .line 672
    invoke-virtual {p0, v0}, Lcom/getcapacitor/plugin/Filesystem;->writeFile(Lcom/getcapacitor/PluginCall;)V

    goto :goto_1

    :cond_3
    const/16 p2, 0x2335

    if-ne p1, p2, :cond_4

    .line 674
    invoke-virtual {p0, v0}, Lcom/getcapacitor/plugin/Filesystem;->mkdir(Lcom/getcapacitor/PluginCall;)V

    goto :goto_1

    :cond_4
    const/16 p2, 0x2336

    if-ne p1, p2, :cond_5

    .line 676
    invoke-virtual {p0, v0}, Lcom/getcapacitor/plugin/Filesystem;->readFile(Lcom/getcapacitor/PluginCall;)V

    goto :goto_1

    :cond_5
    const/16 p2, 0x2337

    if-ne p1, p2, :cond_6

    .line 678
    invoke-virtual {p0, v0}, Lcom/getcapacitor/plugin/Filesystem;->readdir(Lcom/getcapacitor/PluginCall;)V

    goto :goto_1

    :cond_6
    const/16 p2, 0x2338

    if-ne p1, p2, :cond_7

    .line 680
    invoke-virtual {p0, v0}, Lcom/getcapacitor/plugin/Filesystem;->deleteFile(Lcom/getcapacitor/PluginCall;)V

    goto :goto_1

    :cond_7
    const/16 p2, 0x2339

    if-ne p1, p2, :cond_8

    .line 682
    invoke-virtual {p0, v0}, Lcom/getcapacitor/plugin/Filesystem;->rmdir(Lcom/getcapacitor/PluginCall;)V

    goto :goto_1

    :cond_8
    const/16 p2, 0x233a

    if-ne p1, p2, :cond_9

    .line 684
    invoke-virtual {p0, v0}, Lcom/getcapacitor/plugin/Filesystem;->getUri(Lcom/getcapacitor/PluginCall;)V

    goto :goto_1

    :cond_9
    const/16 p2, 0x233b

    if-ne p1, p2, :cond_a

    .line 686
    invoke-virtual {p0, v0}, Lcom/getcapacitor/plugin/Filesystem;->stat(Lcom/getcapacitor/PluginCall;)V

    goto :goto_1

    :cond_a
    const/16 p2, 0x233c

    if-ne p1, p2, :cond_b

    .line 688
    invoke-virtual {p0, v0}, Lcom/getcapacitor/plugin/Filesystem;->rename(Lcom/getcapacitor/PluginCall;)V

    goto :goto_1

    :cond_b
    const/16 p2, 0x233d

    if-ne p1, p2, :cond_c

    .line 690
    invoke-virtual {p0, v0}, Lcom/getcapacitor/plugin/Filesystem;->copy(Lcom/getcapacitor/PluginCall;)V

    goto :goto_1

    :cond_c
    const/16 p2, 0x233e

    if-ne p1, p2, :cond_d

    .line 692
    invoke-virtual {v0}, Lcom/getcapacitor/PluginCall;->resolve()V

    .line 694
    :cond_d
    :goto_1
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Filesystem;->freeSavedCall()V

    return-void
.end method

.method public mkdir(Lcom/getcapacitor/PluginCall;)V
    .locals 4
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 338
    invoke-virtual {p0, p1}, Lcom/getcapacitor/plugin/Filesystem;->saveCall(Lcom/getcapacitor/PluginCall;)V

    .line 339
    const-string v0, "path"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 340
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Filesystem;->getDirectoryParameter(Lcom/getcapacitor/PluginCall;)Ljava/lang/String;

    move-result-object v1

    const/4 v2, 0x0

    .line 341
    invoke-static {v2}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v2

    const-string v3, "recursive"

    invoke-virtual {p1, v3, v2}, Lcom/getcapacitor/PluginCall;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v2

    invoke-virtual {v2}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v2

    .line 343
    invoke-direct {p0, v0, v1}, Lcom/getcapacitor/plugin/Filesystem;->getFileObject(Ljava/lang/String;Ljava/lang/String;)Ljava/io/File;

    move-result-object v0

    .line 345
    invoke-virtual {v0}, Ljava/io/File;->exists()Z

    move-result v3

    if-eqz v3, :cond_0

    .line 346
    const-string v0, "Directory exists"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 350
    :cond_0
    invoke-direct {p0, v1}, Lcom/getcapacitor/plugin/Filesystem;->isPublicDirectory(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_1

    const/16 v1, 0x2335

    const-string v3, "android.permission.WRITE_EXTERNAL_STORAGE"

    .line 351
    invoke-direct {p0, v1, v3}, Lcom/getcapacitor/plugin/Filesystem;->isStoragePermissionGranted(ILjava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_4

    :cond_1
    if-eqz v2, :cond_2

    .line 354
    invoke-virtual {v0}, Ljava/io/File;->mkdirs()Z

    move-result v0

    goto :goto_0

    .line 356
    :cond_2
    invoke-virtual {v0}, Ljava/io/File;->mkdir()Z

    move-result v0

    :goto_0
    if-nez v0, :cond_3

    .line 359
    const-string v0, "Unable to create directory, unknown reason"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    goto :goto_1

    .line 361
    :cond_3
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->success()V

    :cond_4
    :goto_1
    return-void
.end method

.method public readFile(Lcom/getcapacitor/PluginCall;)V
    .locals 6
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 159
    invoke-virtual {p0, p1}, Lcom/getcapacitor/plugin/Filesystem;->saveCall(Lcom/getcapacitor/PluginCall;)V

    .line 160
    const-string v0, "path"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 161
    const-string v1, "data"

    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    .line 162
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Filesystem;->getDirectoryParameter(Lcom/getcapacitor/PluginCall;)Ljava/lang/String;

    move-result-object v2

    .line 163
    const-string v3, "encoding"

    invoke-virtual {p1, v3}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    .line 165
    invoke-direct {p0, v3}, Lcom/getcapacitor/plugin/Filesystem;->getEncoding(Ljava/lang/String;)Ljava/nio/charset/Charset;

    move-result-object v4

    if-eqz v3, :cond_0

    if-nez v4, :cond_0

    .line 167
    new-instance v0, Ljava/lang/StringBuilder;

    const-string v1, "Unsupported encoding provided: "

    invoke-direct {v0, v1}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, v3}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v0

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 171
    :cond_0
    invoke-direct {p0, v2}, Lcom/getcapacitor/plugin/Filesystem;->isPublicDirectory(Ljava/lang/String;)Z

    move-result v3

    if-eqz v3, :cond_1

    const/16 v3, 0x2336

    const-string v5, "android.permission.READ_EXTERNAL_STORAGE"

    .line 172
    invoke-direct {p0, v3, v5}, Lcom/getcapacitor/plugin/Filesystem;->isStoragePermissionGranted(ILjava/lang/String;)Z

    move-result v3

    if-eqz v3, :cond_3

    .line 174
    :cond_1
    :try_start_0
    invoke-direct {p0, v0, v2}, Lcom/getcapacitor/plugin/Filesystem;->getInputStream(Ljava/lang/String;Ljava/lang/String;)Ljava/io/InputStream;

    move-result-object v0

    if-eqz v4, :cond_2

    .line 177
    invoke-virtual {v4}, Ljava/nio/charset/Charset;->name()Ljava/lang/String;

    move-result-object v2

    invoke-direct {p0, v0, v2}, Lcom/getcapacitor/plugin/Filesystem;->readFileAsString(Ljava/io/InputStream;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    goto :goto_0

    .line 179
    :cond_2
    invoke-direct {p0, v0}, Lcom/getcapacitor/plugin/Filesystem;->readFileAsBase64EncodedData(Ljava/io/InputStream;)Ljava/lang/String;

    move-result-object v0

    .line 182
    :goto_0
    new-instance v2, Lcom/getcapacitor/JSObject;

    invoke-direct {v2}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 183
    invoke-virtual {v2, v1, v0}, Lcom/getcapacitor/JSObject;->putOpt(Ljava/lang/String;Ljava/lang/Object;)Lorg/json/JSONObject;

    .line 184
    invoke-virtual {p1, v2}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V
    :try_end_0
    .catch Ljava/io/FileNotFoundException; {:try_start_0 .. :try_end_0} :catch_2
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_1
    .catch Lorg/json/JSONException; {:try_start_0 .. :try_end_0} :catch_0

    goto :goto_1

    :catch_0
    move-exception v0

    .line 190
    const-string v1, "Unable to return value for reading file"

    invoke-virtual {p1, v1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/Exception;)V

    goto :goto_1

    :catch_1
    move-exception v0

    .line 188
    const-string v1, "Unable to read file"

    invoke-virtual {p1, v1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/Exception;)V

    goto :goto_1

    :catch_2
    move-exception v0

    .line 186
    const-string v1, "File does not exist"

    invoke-virtual {p1, v1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;Ljava/lang/Exception;)V

    :cond_3
    :goto_1
    return-void
.end method

.method public readdir(Lcom/getcapacitor/PluginCall;)V
    .locals 3
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 405
    invoke-virtual {p0, p1}, Lcom/getcapacitor/plugin/Filesystem;->saveCall(Lcom/getcapacitor/PluginCall;)V

    .line 406
    const-string v0, "path"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 407
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Filesystem;->getDirectoryParameter(Lcom/getcapacitor/PluginCall;)Ljava/lang/String;

    move-result-object v1

    .line 409
    invoke-direct {p0, v0, v1}, Lcom/getcapacitor/plugin/Filesystem;->getFileObject(Ljava/lang/String;Ljava/lang/String;)Ljava/io/File;

    move-result-object v0

    .line 411
    invoke-direct {p0, v1}, Lcom/getcapacitor/plugin/Filesystem;->isPublicDirectory(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_0

    const/16 v1, 0x2337

    const-string v2, "android.permission.READ_EXTERNAL_STORAGE"

    .line 412
    invoke-direct {p0, v1, v2}, Lcom/getcapacitor/plugin/Filesystem;->isStoragePermissionGranted(ILjava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_3

    :cond_0
    if-eqz v0, :cond_2

    .line 413
    invoke-virtual {v0}, Ljava/io/File;->exists()Z

    move-result v1

    if-eqz v1, :cond_2

    .line 414
    invoke-virtual {v0}, Ljava/io/File;->list()[Ljava/lang/String;

    move-result-object v0

    if-eqz v0, :cond_1

    .line 416
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 417
    const-string v2, "files"

    invoke-static {v0}, Lcom/getcapacitor/JSArray;->from(Ljava/lang/Object;)Lcom/getcapacitor/JSArray;

    move-result-object v0

    invoke-virtual {v1, v2, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/Object;)Lcom/getcapacitor/JSObject;

    .line 418
    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    goto :goto_0

    .line 420
    :cond_1
    const-string v0, "Unable to read directory"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    goto :goto_0

    .line 423
    :cond_2
    const-string v0, "Directory does not exist"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    :cond_3
    :goto_0
    return-void
.end method

.method public rename(Lcom/getcapacitor/PluginCall;)V
    .locals 1
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    const/4 v0, 0x1

    .line 603
    invoke-direct {p0, p1, v0}, Lcom/getcapacitor/plugin/Filesystem;->_copy(Lcom/getcapacitor/PluginCall;Z)V

    return-void
.end method

.method public rmdir(Lcom/getcapacitor/PluginCall;)V
    .locals 4
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 368
    invoke-virtual {p0, p1}, Lcom/getcapacitor/plugin/Filesystem;->saveCall(Lcom/getcapacitor/PluginCall;)V

    .line 369
    const-string v0, "path"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 370
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Filesystem;->getDirectoryParameter(Lcom/getcapacitor/PluginCall;)Ljava/lang/String;

    move-result-object v1

    const/4 v2, 0x0

    .line 371
    invoke-static {v2}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v2

    const-string v3, "recursive"

    invoke-virtual {p1, v3, v2}, Lcom/getcapacitor/PluginCall;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v2

    .line 373
    invoke-direct {p0, v0, v1}, Lcom/getcapacitor/plugin/Filesystem;->getFileObject(Ljava/lang/String;Ljava/lang/String;)Ljava/io/File;

    move-result-object v0

    .line 375
    invoke-direct {p0, v1}, Lcom/getcapacitor/plugin/Filesystem;->isPublicDirectory(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_0

    const/16 v1, 0x2339

    const-string v3, "android.permission.WRITE_EXTERNAL_STORAGE"

    .line 376
    invoke-direct {p0, v1, v3}, Lcom/getcapacitor/plugin/Filesystem;->isStoragePermissionGranted(ILjava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_3

    .line 377
    :cond_0
    invoke-virtual {v0}, Ljava/io/File;->exists()Z

    move-result v1

    if-nez v1, :cond_1

    .line 378
    const-string v0, "Directory does not exist"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 382
    :cond_1
    invoke-virtual {v0}, Ljava/io/File;->isDirectory()Z

    move-result v1

    if-eqz v1, :cond_2

    invoke-virtual {v0}, Ljava/io/File;->listFiles()[Ljava/io/File;

    move-result-object v1

    array-length v1, v1

    if-eqz v1, :cond_2

    invoke-virtual {v2}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v1

    if-nez v1, :cond_2

    .line 383
    const-string v0, "Directory is not empty"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 390
    :cond_2
    :try_start_0
    invoke-static {v0}, Lcom/getcapacitor/plugin/Filesystem;->deleteRecursively(Ljava/io/File;)V
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_0

    .line 398
    invoke-virtual {p1}, Lcom/getcapacitor/PluginCall;->success()V

    goto :goto_0

    .line 396
    :catch_0
    const-string v0, "Unable to delete directory, unknown reason"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    :cond_3
    :goto_0
    return-void
.end method

.method public stat(Lcom/getcapacitor/PluginCall;)V
    .locals 5
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 446
    invoke-virtual {p0, p1}, Lcom/getcapacitor/plugin/Filesystem;->saveCall(Lcom/getcapacitor/PluginCall;)V

    .line 447
    const-string v0, "path"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 448
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Filesystem;->getDirectoryParameter(Lcom/getcapacitor/PluginCall;)Ljava/lang/String;

    move-result-object v1

    .line 450
    invoke-direct {p0, v0, v1}, Lcom/getcapacitor/plugin/Filesystem;->getFileObject(Ljava/lang/String;Ljava/lang/String;)Ljava/io/File;

    move-result-object v0

    .line 452
    invoke-direct {p0, v1}, Lcom/getcapacitor/plugin/Filesystem;->isPublicDirectory(Ljava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_0

    const/16 v1, 0x233b

    const-string v2, "android.permission.READ_EXTERNAL_STORAGE"

    .line 453
    invoke-direct {p0, v1, v2}, Lcom/getcapacitor/plugin/Filesystem;->isStoragePermissionGranted(ILjava/lang/String;)Z

    move-result v1

    if-eqz v1, :cond_3

    .line 454
    :cond_0
    invoke-virtual {v0}, Ljava/io/File;->exists()Z

    move-result v1

    if-nez v1, :cond_1

    .line 455
    const-string v0, "File does not exist"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 459
    :cond_1
    new-instance v1, Lcom/getcapacitor/JSObject;

    invoke-direct {v1}, Lcom/getcapacitor/JSObject;-><init>()V

    .line 460
    invoke-virtual {v0}, Ljava/io/File;->isDirectory()Z

    move-result v2

    if-eqz v2, :cond_2

    const-string v2, "directory"

    goto :goto_0

    :cond_2
    const-string v2, "file"

    :goto_0
    const-string v3, "type"

    invoke-virtual {v1, v3, v2}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 461
    const-string v2, "size"

    invoke-virtual {v0}, Ljava/io/File;->length()J

    move-result-wide v3

    invoke-virtual {v1, v2, v3, v4}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;J)Lcom/getcapacitor/JSObject;

    .line 462
    const-string v2, "ctime"

    const/4 v3, 0x0

    invoke-virtual {v1, v2, v3}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 463
    const-string v2, "mtime"

    invoke-virtual {v0}, Ljava/io/File;->lastModified()J

    move-result-wide v3

    invoke-virtual {v1, v2, v3, v4}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;J)Lcom/getcapacitor/JSObject;

    .line 464
    invoke-static {v0}, Landroid/net/Uri;->fromFile(Ljava/io/File;)Landroid/net/Uri;

    move-result-object v0

    invoke-virtual {v0}, Landroid/net/Uri;->toString()Ljava/lang/String;

    move-result-object v0

    const-string v2, "uri"

    invoke-virtual {v1, v2, v0}, Lcom/getcapacitor/JSObject;->put(Ljava/lang/String;Ljava/lang/String;)Lcom/getcapacitor/JSObject;

    .line 465
    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->success(Lcom/getcapacitor/JSObject;)V

    :cond_3
    return-void
.end method

.method public writeFile(Lcom/getcapacitor/PluginCall;)V
    .locals 9
    .annotation runtime Lcom/getcapacitor/PluginMethod;
    .end annotation

    .line 197
    invoke-virtual {p0, p1}, Lcom/getcapacitor/plugin/Filesystem;->saveCall(Lcom/getcapacitor/PluginCall;)V

    .line 198
    const-string v0, "path"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    .line 199
    const-string v1, "data"

    invoke-virtual {p1, v1}, Lcom/getcapacitor/PluginCall;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    const/4 v2, 0x0

    .line 200
    invoke-static {v2}, Ljava/lang/Boolean;->valueOf(Z)Ljava/lang/Boolean;

    move-result-object v2

    const-string v3, "recursive"

    invoke-virtual {p1, v3, v2}, Lcom/getcapacitor/PluginCall;->getBoolean(Ljava/lang/String;Ljava/lang/Boolean;)Ljava/lang/Boolean;

    move-result-object v2

    const/4 v3, 0x0

    if-nez v0, :cond_0

    .line 203
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Filesystem;->getLogTag()Ljava/lang/String;

    move-result-object v0

    const-string v1, "No path or filename retrieved from call"

    invoke-static {v0, v1, v3}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 204
    const-string v0, "NO_PATH"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    :cond_0
    if-nez v1, :cond_1

    .line 209
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Filesystem;->getLogTag()Ljava/lang/String;

    move-result-object v0

    const-string v1, "No data retrieved from call"

    invoke-static {v0, v1, v3}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 210
    const-string v0, "NO_DATA"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    return-void

    .line 214
    :cond_1
    invoke-direct {p0, p1}, Lcom/getcapacitor/plugin/Filesystem;->getDirectoryParameter(Lcom/getcapacitor/PluginCall;)Ljava/lang/String;

    move-result-object v4

    .line 215
    const-string v5, "Parent folder doesn\'t exist"

    const-string v6, "android.permission.WRITE_EXTERNAL_STORAGE"

    const/16 v7, 0x2334

    if-eqz v4, :cond_8

    .line 216
    invoke-direct {p0, v4}, Lcom/getcapacitor/plugin/Filesystem;->isPublicDirectory(Ljava/lang/String;)Z

    move-result v8

    if-eqz v8, :cond_2

    .line 217
    invoke-direct {p0, v7, v6}, Lcom/getcapacitor/plugin/Filesystem;->isStoragePermissionGranted(ILjava/lang/String;)Z

    move-result v6

    if-eqz v6, :cond_b

    .line 219
    :cond_2
    invoke-direct {p0, v4}, Lcom/getcapacitor/plugin/Filesystem;->getDirectory(Ljava/lang/String;)Ljava/io/File;

    move-result-object v6

    if-eqz v6, :cond_7

    .line 221
    invoke-virtual {v6}, Ljava/io/File;->exists()Z

    move-result v7

    if-nez v7, :cond_4

    invoke-virtual {v6}, Ljava/io/File;->mkdirs()Z

    move-result v7

    if-eqz v7, :cond_3

    goto :goto_0

    .line 230
    :cond_3
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Filesystem;->getLogTag()Ljava/lang/String;

    move-result-object v0

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Not able to create \'"

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, "\'!"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1, v3}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 231
    const-string v0, "NOT_CREATED_DIR"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    goto/16 :goto_3

    .line 223
    :cond_4
    :goto_0
    new-instance v3, Ljava/io/File;

    invoke-direct {v3, v6, v0}, Ljava/io/File;-><init>(Ljava/io/File;Ljava/lang/String;)V

    .line 224
    invoke-virtual {v3}, Ljava/io/File;->getParentFile()Ljava/io/File;

    move-result-object v0

    invoke-virtual {v0}, Ljava/io/File;->exists()Z

    move-result v0

    if-nez v0, :cond_6

    invoke-virtual {v2}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v0

    if-eqz v0, :cond_5

    invoke-virtual {v3}, Ljava/io/File;->getParentFile()Ljava/io/File;

    move-result-object v0

    invoke-virtual {v0}, Ljava/io/File;->mkdirs()Z

    move-result v0

    if-eqz v0, :cond_5

    goto :goto_1

    .line 227
    :cond_5
    invoke-virtual {p1, v5}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    goto :goto_3

    .line 225
    :cond_6
    :goto_1
    invoke-direct {p0, p1, v3, v1}, Lcom/getcapacitor/plugin/Filesystem;->saveFile(Lcom/getcapacitor/PluginCall;Ljava/io/File;Ljava/lang/String;)V

    goto :goto_3

    .line 234
    :cond_7
    invoke-virtual {p0}, Lcom/getcapacitor/plugin/Filesystem;->getLogTag()Ljava/lang/String;

    move-result-object v0

    new-instance v1, Ljava/lang/StringBuilder;

    const-string v2, "Directory ID \'"

    invoke-direct {v1, v2}, Ljava/lang/StringBuilder;-><init>(Ljava/lang/String;)V

    invoke-virtual {v1, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    const-string v2, "\' is not supported by plugin"

    invoke-virtual {v1, v2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v1

    invoke-virtual {v1}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1, v3}, Lcom/getcapacitor/Logger;->error(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)V

    .line 235
    const-string v0, "INVALID_DIR"

    invoke-virtual {p1, v0}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    goto :goto_3

    .line 240
    :cond_8
    invoke-static {v0}, Landroid/net/Uri;->parse(Ljava/lang/String;)Landroid/net/Uri;

    move-result-object v0

    .line 241
    const-string v3, "file"

    invoke-virtual {v0}, Landroid/net/Uri;->getScheme()Ljava/lang/String;

    move-result-object v4

    invoke-virtual {v3, v4}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    if-eqz v3, :cond_b

    .line 242
    new-instance v3, Ljava/io/File;

    invoke-virtual {v0}, Landroid/net/Uri;->getPath()Ljava/lang/String;

    move-result-object v0

    invoke-direct {v3, v0}, Ljava/io/File;-><init>(Ljava/lang/String;)V

    .line 245
    invoke-direct {p0, v7, v6}, Lcom/getcapacitor/plugin/Filesystem;->isStoragePermissionGranted(ILjava/lang/String;)Z

    move-result v0

    if-eqz v0, :cond_b

    .line 246
    invoke-virtual {v3}, Ljava/io/File;->getParentFile()Ljava/io/File;

    move-result-object v0

    invoke-virtual {v0}, Ljava/io/File;->exists()Z

    move-result v0

    if-nez v0, :cond_a

    invoke-virtual {v2}, Ljava/lang/Boolean;->booleanValue()Z

    move-result v0

    if-eqz v0, :cond_9

    invoke-virtual {v3}, Ljava/io/File;->getParentFile()Ljava/io/File;

    move-result-object v0

    invoke-virtual {v0}, Ljava/io/File;->mkdirs()Z

    move-result v0

    if-eqz v0, :cond_9

    goto :goto_2

    .line 249
    :cond_9
    invoke-virtual {p1, v5}, Lcom/getcapacitor/PluginCall;->error(Ljava/lang/String;)V

    goto :goto_3

    .line 247
    :cond_a
    :goto_2
    invoke-direct {p0, p1, v3, v1}, Lcom/getcapacitor/plugin/Filesystem;->saveFile(Lcom/getcapacitor/PluginCall;Ljava/io/File;Ljava/lang/String;)V

    :cond_b
    :goto_3
    return-void
.end method
