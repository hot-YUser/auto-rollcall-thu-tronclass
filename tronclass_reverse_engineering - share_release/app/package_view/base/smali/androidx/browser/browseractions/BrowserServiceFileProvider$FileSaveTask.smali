.class Landroidx/browser/browseractions/BrowserServiceFileProvider$FileSaveTask;
.super Landroid/os/AsyncTask;
.source "BrowserServiceFileProvider.java"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/browser/browseractions/BrowserServiceFileProvider;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0xa
    name = "FileSaveTask"
.end annotation

.annotation system Ldalvik/annotation/Signature;
    value = {
        "Landroid/os/AsyncTask<",
        "Ljava/lang/String;",
        "Ljava/lang/Void;",
        "Ljava/lang/Void;",
        ">;"
    }
.end annotation


# instance fields
.field private final mAppContext:Landroid/content/Context;

.field private final mBitmap:Landroid/graphics/Bitmap;

.field private final mFileUri:Landroid/net/Uri;

.field private final mFilename:Ljava/lang/String;

.field private final mResultFuture:Landroidx/concurrent/futures/ResolvableFuture;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Landroidx/concurrent/futures/ResolvableFuture<",
            "Landroid/net/Uri;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method constructor <init>(Landroid/content/Context;Ljava/lang/String;Landroid/graphics/Bitmap;Landroid/net/Uri;Landroidx/concurrent/futures/ResolvableFuture;)V
    .locals 0
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Landroid/content/Context;",
            "Ljava/lang/String;",
            "Landroid/graphics/Bitmap;",
            "Landroid/net/Uri;",
            "Landroidx/concurrent/futures/ResolvableFuture<",
            "Landroid/net/Uri;",
            ">;)V"
        }
    .end annotation

    .line 142
    invoke-direct {p0}, Landroid/os/AsyncTask;-><init>()V

    .line 143
    invoke-virtual {p1}, Landroid/content/Context;->getApplicationContext()Landroid/content/Context;

    move-result-object p1

    iput-object p1, p0, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileSaveTask;->mAppContext:Landroid/content/Context;

    .line 144
    iput-object p2, p0, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileSaveTask;->mFilename:Ljava/lang/String;

    .line 145
    iput-object p3, p0, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileSaveTask;->mBitmap:Landroid/graphics/Bitmap;

    .line 146
    iput-object p4, p0, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileSaveTask;->mFileUri:Landroid/net/Uri;

    .line 147
    iput-object p5, p0, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileSaveTask;->mResultFuture:Landroidx/concurrent/futures/ResolvableFuture;

    return-void
.end method

.method private saveFileBlocking(Ljava/io/File;)V
    .locals 4

    .line 183
    new-instance v0, Landroidx/core/util/AtomicFile;

    invoke-direct {v0, p1}, Landroidx/core/util/AtomicFile;-><init>(Ljava/io/File;)V

    .line 185
    :try_start_0
    invoke-virtual {v0}, Landroidx/core/util/AtomicFile;->startWrite()Ljava/io/FileOutputStream;

    move-result-object p1
    :try_end_0
    .catch Ljava/io/IOException; {:try_start_0 .. :try_end_0} :catch_1

    .line 186
    :try_start_1
    iget-object v1, p0, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileSaveTask;->mBitmap:Landroid/graphics/Bitmap;

    sget-object v2, Landroid/graphics/Bitmap$CompressFormat;->PNG:Landroid/graphics/Bitmap$CompressFormat;

    const/16 v3, 0x64

    invoke-virtual {v1, v2, v3, p1}, Landroid/graphics/Bitmap;->compress(Landroid/graphics/Bitmap$CompressFormat;ILjava/io/OutputStream;)Z

    .line 187
    invoke-virtual {p1}, Ljava/io/FileOutputStream;->close()V

    .line 188
    invoke-virtual {v0, p1}, Landroidx/core/util/AtomicFile;->finishWrite(Ljava/io/FileOutputStream;)V

    .line 190
    iget-object v1, p0, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileSaveTask;->mResultFuture:Landroidx/concurrent/futures/ResolvableFuture;

    iget-object v2, p0, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileSaveTask;->mFileUri:Landroid/net/Uri;

    invoke-virtual {v1, v2}, Landroidx/concurrent/futures/ResolvableFuture;->set(Ljava/lang/Object;)Z
    :try_end_1
    .catch Ljava/io/IOException; {:try_start_1 .. :try_end_1} :catch_0

    goto :goto_1

    :catch_0
    move-exception v1

    goto :goto_0

    :catch_1
    move-exception v1

    const/4 p1, 0x0

    .line 192
    :goto_0
    invoke-virtual {v0, p1}, Landroidx/core/util/AtomicFile;->failWrite(Ljava/io/FileOutputStream;)V

    .line 194
    iget-object p1, p0, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileSaveTask;->mResultFuture:Landroidx/concurrent/futures/ResolvableFuture;

    invoke-virtual {p1, v1}, Landroidx/concurrent/futures/ResolvableFuture;->setException(Ljava/lang/Throwable;)Z

    :goto_1
    return-void
.end method

.method private saveFileIfNeededBlocking()V
    .locals 5

    .line 162
    new-instance v0, Ljava/io/File;

    iget-object v1, p0, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileSaveTask;->mAppContext:Landroid/content/Context;

    invoke-virtual {v1}, Landroid/content/Context;->getFilesDir()Ljava/io/File;

    move-result-object v1

    const-string v2, "image_provider"

    invoke-direct {v0, v1, v2}, Ljava/io/File;-><init>(Ljava/io/File;Ljava/lang/String;)V

    .line 163
    sget-object v1, Landroidx/browser/browseractions/BrowserServiceFileProvider;->sFileCleanupLock:Ljava/lang/Object;

    monitor-enter v1

    .line 164
    :try_start_0
    invoke-virtual {v0}, Ljava/io/File;->exists()Z

    move-result v2

    if-nez v2, :cond_0

    invoke-virtual {v0}, Ljava/io/File;->mkdir()Z

    move-result v2

    if-nez v2, :cond_0

    .line 165
    iget-object v0, p0, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileSaveTask;->mResultFuture:Landroidx/concurrent/futures/ResolvableFuture;

    new-instance v2, Ljava/io/IOException;

    const-string v3, "Could not create file directory."

    invoke-direct {v2, v3}, Ljava/io/IOException;-><init>(Ljava/lang/String;)V

    invoke-virtual {v0, v2}, Landroidx/concurrent/futures/ResolvableFuture;->setException(Ljava/lang/Throwable;)Z

    .line 166
    monitor-exit v1

    return-void

    .line 168
    :cond_0
    new-instance v2, Ljava/io/File;

    new-instance v3, Ljava/lang/StringBuilder;

    invoke-direct {v3}, Ljava/lang/StringBuilder;-><init>()V

    iget-object v4, p0, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileSaveTask;->mFilename:Ljava/lang/String;

    invoke-virtual {v3, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    const-string v4, ".png"

    invoke-virtual {v3, v4}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    move-result-object v3

    invoke-virtual {v3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v3

    invoke-direct {v2, v0, v3}, Ljava/io/File;-><init>(Ljava/io/File;Ljava/lang/String;)V

    .line 170
    invoke-virtual {v2}, Ljava/io/File;->exists()Z

    move-result v0

    if-eqz v0, :cond_1

    .line 171
    iget-object v0, p0, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileSaveTask;->mResultFuture:Landroidx/concurrent/futures/ResolvableFuture;

    iget-object v3, p0, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileSaveTask;->mFileUri:Landroid/net/Uri;

    invoke-virtual {v0, v3}, Landroidx/concurrent/futures/ResolvableFuture;->set(Ljava/lang/Object;)Z

    goto :goto_0

    .line 173
    :cond_1
    invoke-direct {p0, v2}, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileSaveTask;->saveFileBlocking(Ljava/io/File;)V

    .line 176
    :goto_0
    invoke-static {}, Ljava/lang/System;->currentTimeMillis()J

    move-result-wide v3

    invoke-virtual {v2, v3, v4}, Ljava/io/File;->setLastModified(J)Z

    .line 177
    monitor-exit v1

    return-void

    :catchall_0
    move-exception v0

    monitor-exit v1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw v0
.end method


# virtual methods
.method protected bridge synthetic doInBackground([Ljava/lang/Object;)Ljava/lang/Object;
    .locals 0

    .line 133
    check-cast p1, [Ljava/lang/String;

    invoke-virtual {p0, p1}, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileSaveTask;->doInBackground([Ljava/lang/String;)Ljava/lang/Void;

    move-result-object p1

    return-object p1
.end method

.method protected varargs doInBackground([Ljava/lang/String;)Ljava/lang/Void;
    .locals 0

    .line 152
    invoke-direct {p0}, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileSaveTask;->saveFileIfNeededBlocking()V

    const/4 p1, 0x0

    return-object p1
.end method

.method protected bridge synthetic onPostExecute(Ljava/lang/Object;)V
    .locals 0

    .line 133
    check-cast p1, Ljava/lang/Void;

    invoke-virtual {p0, p1}, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileSaveTask;->onPostExecute(Ljava/lang/Void;)V

    return-void
.end method

.method protected onPostExecute(Ljava/lang/Void;)V
    .locals 2

    .line 158
    new-instance p1, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileCleanupTask;

    iget-object v0, p0, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileSaveTask;->mAppContext:Landroid/content/Context;

    invoke-direct {p1, v0}, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileCleanupTask;-><init>(Landroid/content/Context;)V

    sget-object v0, Landroid/os/AsyncTask;->SERIAL_EXECUTOR:Ljava/util/concurrent/Executor;

    const/4 v1, 0x0

    new-array v1, v1, [Ljava/lang/Void;

    invoke-virtual {p1, v0, v1}, Landroidx/browser/browseractions/BrowserServiceFileProvider$FileCleanupTask;->executeOnExecutor(Ljava/util/concurrent/Executor;[Ljava/lang/Object;)Landroid/os/AsyncTask;

    return-void
.end method
