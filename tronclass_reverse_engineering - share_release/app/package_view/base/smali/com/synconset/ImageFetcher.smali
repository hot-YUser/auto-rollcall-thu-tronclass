.class public Lcom/synconset/ImageFetcher;
.super Ljava/lang/Object;
.source "ImageFetcher.java"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Lcom/synconset/ImageFetcher$BitmapFetcherTask;,
        Lcom/synconset/ImageFetcher$DownloadedDrawable;
    }
.end annotation


# static fields
.field private static final DELAY_BEFORE_PURGE:I = 0x2710

.field private static final HARD_CACHE_CAPACITY:I = 0x64

.field private static final sSoftBitmapCache:Ljava/util/concurrent/ConcurrentHashMap;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/concurrent/ConcurrentHashMap<",
            "Ljava/lang/Integer;",
            "Ljava/lang/ref/SoftReference<",
            "Landroid/graphics/Bitmap;",
            ">;>;"
        }
    .end annotation
.end field


# instance fields
.field private colWidth:I

.field private executor:Ljava/util/concurrent/ExecutorService;

.field private origId:J

.field private final purgeHandler:Landroid/os/Handler;

.field private final purger:Ljava/lang/Runnable;

.field private final sHardBitmapCache:Ljava/util/HashMap;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/HashMap<",
            "Ljava/lang/Integer;",
            "Landroid/graphics/Bitmap;",
            ">;"
        }
    .end annotation
.end field


# direct methods
.method static constructor <clinit>()V
    .locals 2

    .line 304
    new-instance v0, Ljava/util/concurrent/ConcurrentHashMap;

    const/16 v1, 0x32

    invoke-direct {v0, v1}, Ljava/util/concurrent/ConcurrentHashMap;-><init>(I)V

    sput-object v0, Lcom/synconset/ImageFetcher;->sSoftBitmapCache:Ljava/util/concurrent/ConcurrentHashMap;

    return-void
.end method

.method public constructor <init>()V
    .locals 4

    .line 62
    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    .line 289
    new-instance v0, Lcom/synconset/ImageFetcher$1;

    const/high16 v1, 0x3f400000    # 0.75f

    const/4 v2, 0x1

    const/16 v3, 0x32

    invoke-direct {v0, p0, v3, v1, v2}, Lcom/synconset/ImageFetcher$1;-><init>(Lcom/synconset/ImageFetcher;IFZ)V

    iput-object v0, p0, Lcom/synconset/ImageFetcher;->sHardBitmapCache:Ljava/util/HashMap;

    .line 307
    new-instance v0, Landroid/os/Handler;

    invoke-direct {v0}, Landroid/os/Handler;-><init>()V

    iput-object v0, p0, Lcom/synconset/ImageFetcher;->purgeHandler:Landroid/os/Handler;

    .line 309
    new-instance v0, Lcom/synconset/ImageFetcher$2;

    invoke-direct {v0, p0}, Lcom/synconset/ImageFetcher$2;-><init>(Lcom/synconset/ImageFetcher;)V

    iput-object v0, p0, Lcom/synconset/ImageFetcher;->purger:Ljava/lang/Runnable;

    .line 63
    invoke-static {}, Ljava/util/concurrent/Executors;->newCachedThreadPool()Ljava/util/concurrent/ExecutorService;

    move-result-object v0

    iput-object v0, p0, Lcom/synconset/ImageFetcher;->executor:Ljava/util/concurrent/ExecutorService;

    return-void
.end method

.method static synthetic access$100(Landroid/widget/ImageView;)Lcom/synconset/ImageFetcher$BitmapFetcherTask;
    .locals 0

    .line 56
    invoke-static {p0}, Lcom/synconset/ImageFetcher;->getBitmapDownloaderTask(Landroid/widget/ImageView;)Lcom/synconset/ImageFetcher$BitmapFetcherTask;

    move-result-object p0

    return-object p0
.end method

.method static synthetic access$200(Lcom/synconset/ImageFetcher;Ljava/lang/Integer;Landroid/graphics/Bitmap;)V
    .locals 0

    .line 56
    invoke-direct {p0, p1, p2}, Lcom/synconset/ImageFetcher;->addBitmapToCache(Ljava/lang/Integer;Landroid/graphics/Bitmap;)V

    return-void
.end method

.method static synthetic access$300()Ljava/util/concurrent/ConcurrentHashMap;
    .locals 1

    .line 56
    sget-object v0, Lcom/synconset/ImageFetcher;->sSoftBitmapCache:Ljava/util/concurrent/ConcurrentHashMap;

    return-object v0
.end method

.method private addBitmapToCache(Ljava/lang/Integer;Landroid/graphics/Bitmap;)V
    .locals 2

    if-eqz p2, :cond_0

    .line 323
    iget-object v0, p0, Lcom/synconset/ImageFetcher;->sHardBitmapCache:Ljava/util/HashMap;

    monitor-enter v0

    .line 324
    :try_start_0
    iget-object v1, p0, Lcom/synconset/ImageFetcher;->sHardBitmapCache:Ljava/util/HashMap;

    invoke-virtual {v1, p1, p2}, Ljava/util/HashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    .line 325
    monitor-exit v0

    goto :goto_0

    :catchall_0
    move-exception p1

    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    throw p1

    :cond_0
    :goto_0
    return-void
.end method

.method private static cancelPotentialDownload(Ljava/lang/Integer;Landroid/widget/ImageView;)Z
    .locals 6

    .line 116
    invoke-static {p1}, Lcom/synconset/ImageFetcher;->getBitmapDownloaderTask(Landroid/widget/ImageView;)Lcom/synconset/ImageFetcher$BitmapFetcherTask;

    move-result-object v0

    .line 117
    invoke-static {p1}, Lcom/synconset/ImageFetcher;->getOrigId(Landroid/widget/ImageView;)J

    move-result-wide v1

    const/4 v3, 0x1

    if-eqz v0, :cond_2

    .line 120
    invoke-static {v0}, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->access$000(Lcom/synconset/ImageFetcher$BitmapFetcherTask;)Ljava/lang/Integer;

    move-result-object v4

    if-eqz v4, :cond_1

    .line 121
    invoke-virtual {v4, p0}, Ljava/lang/Integer;->equals(Ljava/lang/Object;)Z

    move-result p0

    if-nez p0, :cond_0

    goto :goto_0

    :cond_0
    const/4 p0, 0x0

    return p0

    .line 123
    :cond_1
    :goto_0
    invoke-virtual {p1}, Landroid/widget/ImageView;->getContext()Landroid/content/Context;

    move-result-object p0

    invoke-virtual {p0}, Landroid/content/Context;->getContentResolver()Landroid/content/ContentResolver;

    move-result-object p0

    const-wide/16 v4, 0x3039

    invoke-static {p0, v1, v2, v4, v5}, Landroid/provider/MediaStore$Images$Thumbnails;->cancelThumbnailRequest(Landroid/content/ContentResolver;JJ)V

    .line 125
    invoke-virtual {v0, v3}, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->cancel(Z)Z

    :cond_2
    return v3
.end method

.method private forceDownload(Ljava/lang/Integer;Landroid/widget/ImageView;I)V
    .locals 4

    if-nez p1, :cond_0

    const/4 p1, 0x0

    .line 86
    invoke-virtual {p2, p1}, Landroid/widget/ImageView;->setImageDrawable(Landroid/graphics/drawable/Drawable;)V

    return-void

    .line 90
    :cond_0
    invoke-static {p1, p2}, Lcom/synconset/ImageFetcher;->cancelPotentialDownload(Ljava/lang/Integer;Landroid/widget/ImageView;)Z

    move-result v0

    if-eqz v0, :cond_1

    .line 91
    new-instance v0, Lcom/synconset/ImageFetcher$BitmapFetcherTask;

    invoke-virtual {p2}, Landroid/widget/ImageView;->getContext()Landroid/content/Context;

    move-result-object v1

    invoke-direct {v0, p0, v1, p2, p3}, Lcom/synconset/ImageFetcher$BitmapFetcherTask;-><init>(Lcom/synconset/ImageFetcher;Landroid/content/Context;Landroid/widget/ImageView;I)V

    .line 92
    new-instance p3, Lcom/synconset/ImageFetcher$DownloadedDrawable;

    invoke-virtual {p2}, Landroid/widget/ImageView;->getContext()Landroid/content/Context;

    move-result-object v1

    iget-wide v2, p0, Lcom/synconset/ImageFetcher;->origId:J

    invoke-direct {p3, v1, v0, v2, v3}, Lcom/synconset/ImageFetcher$DownloadedDrawable;-><init>(Landroid/content/Context;Lcom/synconset/ImageFetcher$BitmapFetcherTask;J)V

    .line 93
    invoke-virtual {p2, p3}, Landroid/widget/ImageView;->setImageDrawable(Landroid/graphics/drawable/Drawable;)V

    .line 94
    iget p3, p0, Lcom/synconset/ImageFetcher;->colWidth:I

    invoke-virtual {p2, p3}, Landroid/widget/ImageView;->setMinimumHeight(I)V

    .line 97
    iget-object p2, p0, Lcom/synconset/ImageFetcher;->executor:Ljava/util/concurrent/ExecutorService;

    const/4 p3, 0x1

    new-array p3, p3, [Ljava/lang/Integer;

    const/4 v1, 0x0

    aput-object p1, p3, v1

    invoke-virtual {v0, p2, p3}, Lcom/synconset/ImageFetcher$BitmapFetcherTask;->executeOnExecutor(Ljava/util/concurrent/Executor;[Ljava/lang/Object;)Landroid/os/AsyncTask;

    :cond_1
    return-void
.end method

.method private static getBitmapDownloaderTask(Landroid/widget/ImageView;)Lcom/synconset/ImageFetcher$BitmapFetcherTask;
    .locals 1

    if-eqz p0, :cond_0

    .line 141
    invoke-virtual {p0}, Landroid/widget/ImageView;->getDrawable()Landroid/graphics/drawable/Drawable;

    move-result-object p0

    .line 142
    instance-of v0, p0, Lcom/synconset/ImageFetcher$DownloadedDrawable;

    if-eqz v0, :cond_0

    .line 143
    check-cast p0, Lcom/synconset/ImageFetcher$DownloadedDrawable;

    .line 144
    invoke-virtual {p0}, Lcom/synconset/ImageFetcher$DownloadedDrawable;->getBitmapDownloaderTask()Lcom/synconset/ImageFetcher$BitmapFetcherTask;

    move-result-object p0

    return-object p0

    :cond_0
    const/4 p0, 0x0

    return-object p0
.end method

.method private getBitmapFromCache(Ljava/lang/Integer;)Landroid/graphics/Bitmap;
    .locals 2

    .line 336
    iget-object v0, p0, Lcom/synconset/ImageFetcher;->sHardBitmapCache:Ljava/util/HashMap;

    monitor-enter v0

    .line 337
    :try_start_0
    iget-object v1, p0, Lcom/synconset/ImageFetcher;->sHardBitmapCache:Ljava/util/HashMap;

    invoke-virtual {v1, p1}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Landroid/graphics/Bitmap;

    if-eqz v1, :cond_0

    .line 342
    monitor-exit v0

    return-object v1

    .line 344
    :cond_0
    monitor-exit v0
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    .line 347
    sget-object v0, Lcom/synconset/ImageFetcher;->sSoftBitmapCache:Ljava/util/concurrent/ConcurrentHashMap;

    invoke-virtual {v0, p1}, Ljava/util/concurrent/ConcurrentHashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/ref/SoftReference;

    if-eqz v1, :cond_2

    .line 349
    invoke-virtual {v1}, Ljava/lang/ref/SoftReference;->get()Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Landroid/graphics/Bitmap;

    if-eqz v1, :cond_1

    return-object v1

    .line 356
    :cond_1
    invoke-virtual {v0, p1}, Ljava/util/concurrent/ConcurrentHashMap;->remove(Ljava/lang/Object;)Ljava/lang/Object;

    :cond_2
    const/4 p1, 0x0

    return-object p1

    :catchall_0
    move-exception p1

    .line 344
    :try_start_1
    monitor-exit v0
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    throw p1
.end method

.method private static getOrigId(Landroid/widget/ImageView;)J
    .locals 2

    if-eqz p0, :cond_0

    .line 152
    invoke-virtual {p0}, Landroid/widget/ImageView;->getDrawable()Landroid/graphics/drawable/Drawable;

    move-result-object p0

    .line 153
    instance-of v0, p0, Lcom/synconset/ImageFetcher$DownloadedDrawable;

    if-eqz v0, :cond_0

    .line 154
    check-cast p0, Lcom/synconset/ImageFetcher$DownloadedDrawable;

    .line 155
    invoke-virtual {p0}, Lcom/synconset/ImageFetcher$DownloadedDrawable;->getOrigId()J

    move-result-wide v0

    return-wide v0

    :cond_0
    const-wide/16 v0, -0x1

    return-wide v0
.end method

.method private resetPurgeTimer()V
    .locals 0

    return-void
.end method


# virtual methods
.method public clearCache()V
    .locals 1

    .line 369
    iget-object v0, p0, Lcom/synconset/ImageFetcher;->sHardBitmapCache:Ljava/util/HashMap;

    invoke-virtual {v0}, Ljava/util/HashMap;->clear()V

    .line 370
    sget-object v0, Lcom/synconset/ImageFetcher;->sSoftBitmapCache:Ljava/util/concurrent/ConcurrentHashMap;

    invoke-virtual {v0}, Ljava/util/concurrent/ConcurrentHashMap;->clear()V

    return-void
.end method

.method public fetch(Ljava/lang/Integer;Landroid/widget/ImageView;II)V
    .locals 2

    .line 67
    invoke-direct {p0}, Lcom/synconset/ImageFetcher;->resetPurgeTimer()V

    .line 68
    iput p3, p0, Lcom/synconset/ImageFetcher;->colWidth:I

    .line 69
    invoke-virtual {p1}, Ljava/lang/Integer;->intValue()I

    move-result p3

    int-to-long v0, p3

    iput-wide v0, p0, Lcom/synconset/ImageFetcher;->origId:J

    .line 70
    invoke-direct {p0, p1}, Lcom/synconset/ImageFetcher;->getBitmapFromCache(Ljava/lang/Integer;)Landroid/graphics/Bitmap;

    move-result-object p3

    if-nez p3, :cond_0

    .line 73
    invoke-direct {p0, p1, p2, p4}, Lcom/synconset/ImageFetcher;->forceDownload(Ljava/lang/Integer;Landroid/widget/ImageView;I)V

    goto :goto_0

    .line 75
    :cond_0
    invoke-static {p1, p2}, Lcom/synconset/ImageFetcher;->cancelPotentialDownload(Ljava/lang/Integer;Landroid/widget/ImageView;)Z

    .line 76
    invoke-virtual {p2, p3}, Landroid/widget/ImageView;->setImageBitmap(Landroid/graphics/Bitmap;)V

    :goto_0
    return-void
.end method
